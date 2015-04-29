function enableButtons(){
	document.getElementById("sign_in_button").onclick = function(){
		signIn(false, authCallback);
	};
	document.getElementById("sign_out_button").onclick = function(){
		signOut(authCallback);
	};
	authCallback();
}

function organizeButtons(){
	gapi.client.oauth2.userinfo.get().execute(function(resp) {
		if (!resp.code) {
			document.getElementById("sign_in_button").style.display = "none";
			document.getElementById("sign_out_button").style.display = "inline";
		}else{
			document.getElementById("sign_out_button").style.display = "none";
			document.getElementById("sign_in_button").style.display = "inline";
		}
	});
}

function showInfo(){
	gapi.client.sudoku.getPlayer().execute(function(resp){
		var info = "You are not logged in";
		if(resp.name){
			info = "Logged in as " + resp.name;
		}
		document.getElementById("info").innerHTML = info;
	});
}

function authCallback(){
	console.log("In authCallback");
	organizeButtons();
	showInfo();
}