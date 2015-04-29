package sudoku.api;

import java.util.List;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.response.UnauthorizedException;
import com.googlecode.objectify.cmd.Query;


@Api(
	    name = "sudoku",
	    version = "v1",
	    scopes = {Constants.EMAIL_SCOPE},
	    clientIds = {Constants.WEB_CLIENT_ID, Constants.API_EXPLORER_CLIENT_ID}
	)
public class SudokuAPI{
	

	@ApiMethod(name="updatePlayer", httpMethod=HttpMethod.POST)
	public void updatePlayer(final User user, @Named("name") String name) throws Exception, UnauthorizedException{
		checkAuth(user);
		Key<Player> playerKey = getPlayerKey(user);
		Player player = getFromStorage(playerKey);
		if(player == null){
			player = new Player(name, user.getEmail(), user.getUserId());
		}else{
			player.update(name);
		}
		putToStorage(playerKey, player);
	}
	
	@ApiMethod(name="getPlayer", httpMethod=HttpMethod.POST)
	public Player getPlayer(final User user) throws Exception, UnauthorizedException{
		checkAuth(user);
		Key<Player> playerKey = getPlayerKey(user);
		Player player = getFromStorage(playerKey);
		if(player == null){
			player = new Player(user.getEmail(), user.getUserId());
			putToStorage(playerKey, player);
		}
		return getFromStorage(playerKey);
	}
	
	@ApiMethod(name="joinGame", httpMethod=HttpMethod.POST)
	public void joinGame(final User user, @Named("gameId") String gameId) throws Exception, UnauthorizedException{
		checkAuth(user);
		Key<Player> playerKey = getPlayerKey(user);
		Player player = getFromStorage(playerKey);
		if(player == null){
			player = new Player(user.getEmail(), user.getUserId());
		}else if(player.currentlyPlaying()){
			throw new Exception("You are currently playing");
		}
		Key<Game> gameKey = getGameKey(gameId);
		Game game = getFromStorage(gameKey);
		checkGame(game);
		player.joinGame(gameId);
		game.addPlayer(player.userId);
		putToStorage(playerKey, player);
		putToStorage(gameKey, game);
	}
	
	@ApiMethod(name="leaveGame", httpMethod=HttpMethod.POST)
	public void leaveGame(final User user) throws Exception, UnauthorizedException{
		checkAuth(user);
		Key<Player> playerKey = getPlayerKey(user);
		Player player = getFromStorage(playerKey);
		Key<Game> gameKey = getGameKey(player.currentGameId);
		Game game = getFromStorage(gameKey);
		player.currentGameId = null;
		game.removePlayer(player.userId);
		putToStorage(playerKey, player);
		putToStorage(gameKey, game);
	}
	
	void addPlayerIfUnregistered(final User user){
		
	}
}
