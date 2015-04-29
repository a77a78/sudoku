var lastUpdate = 0;

function enableButtons() {	
	//var button = document.getElementById("main");
	//button.value = "Update";
	//button.onclick = 
	setInterval(
			function(){
			gapi.client.sudoku.getUpdates({
				"from": lastUpdate
			}).execute(updateTable);
	}, 100);
	//};
	var select = document.getElementsByTagName("select");
	for(var i = 0; i<select.length; i++){
		select[i].onchange = function(){
			var value = this.value;
			var id = this.getAttribute("id");
			gapi.client.sudoku.setCell_c({
				"coords" : id,
				"value"  : value
			}).execute(null);
		};
	}
	
		
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
	if(cells){
		for(var i = 0; i<cells.length; i++){
			gapi.client.sudoku.getCell_c({"coords": cells[i]}).execute(updateCell);
		}
		lastUpdate = (new Date()).getTime();
		console.log(lastUpdate);
	}
}

function doCallBack(response){
	console.log(response.items);
}