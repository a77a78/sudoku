package sudoku.game;
/**********************lic void generateBoard() {
		Generator generator = new Generator();
		generator.generateBoard(this.level);
		this.board = generator.getBoard();		
	}
	
	/**
	* Compute solution. <p>
	* 
	* @author 
	* Created by: Hans-Peter Hoellwirth <br>
	* Edited by:  - 
	*/
	private void getSolution() {
		Board solveBoard = new Board();
		solveBoard.copy(this.board);
		solveBoard.reset();
		Solver solver = new Solver(solveBoard);
		solver.solveBoard();
		this.solution = solver.getBoard();
	}	
	
	public int[] solution(){
		int[] res = new int[81];
		for(int i = 0; i < 9; i++)
			for(int j = 0; j < 9; j++)
				res[9*i+j] = solution.getCell(i, j).getNumber();
		
		return res;

	}
	
	/**
	* Check board. <p>
	* 
	* @author 
	* Created by: Scott Cantisani <br>
	* Edited by:  - 
	*/
	public boolean[][] checkBoard() {
		Board checkBoard = new Board();
		checkBoard.copy(this.board);
		checkBoard.reset();

		Solver solver = new Solver(checkBoard);
		solver.solveBoard();
		checkBoard = solver.getBoard();

		return checkBoard.compare(this.board);
	}	
	
	/**
	* Is board successfully solved. <p>
	* 
	* @author 
	* Created by: Hans-Peter Hoellwirth <br>
	* Edited by:  - 
	* 
	* @return true if solved, otherwise false
	*/
	public boolean isSolved() {	
		return this.board.equals(this.solution);
	}
	
	/**
	* Solve board. <p>
	* 
	* @author 
	* Created by: Hans-Peter Hoellwirth <br>
	* Edited by:  - 
	*/
	public void solveBoard() {
		this.board = this.solution;
	}		
}
