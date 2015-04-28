var lastUpdate = 0;
console.log(lastUpdate);

function enableButtons() {	
	var button = document.getElementById("main");
	button.value = "Update";
	button.onclick = function(){
			gapi.client.sudoku.getUpdates({"from": lastUpdate}).execute(updateTable);
	};
		
}

function authCallback(){
	// Nothing
}

function getId(key){
	return key.substr(key.length-2);
}

function updateCell(resp){
	document.getElementById(getId(resp.id)).value = resp.value;
}


function updateTable(resp){
	var cells = resp.items;
	for(var i = 0; i<cells.length; i++){
		gapi.client.sudoku.getCell_c({"coords": cells[i]}).execute(updateCell);
	}
	lastUpdate = (new Date()).getTime();
	console.log(lastUpdate);
}

function doCallBack(response){
	console.log(response.items);
}