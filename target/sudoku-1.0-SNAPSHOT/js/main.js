function loadCallback(){
	enableButtons();
	signIn(true, authCallback);
}

function init(){
	var rootpath = "//" + window.location.host + "/_ah/api";
	gapi.client.load('sudoku', 'v1', null, rootpath);
	gapi.client.load('oauth2', 'v2', loadCallback);
}