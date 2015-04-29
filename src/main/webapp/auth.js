CLIENT_ID = '1087928206825-mr5bdtdk4tkf7rvj57q4jdu75pbnnb3f.apps.googleusercontent.com';

SCOPES = 'https://www.googleapis.com/auth/userinfo.email';

function signIn(mode, callback) {
	gapi.auth.authorize({
		client_id : CLIENT_ID,
		scope : 	SCOPES,
		immediate : mode,
		cookie_policy : 'single_host_origin',
		response_type : 'token id_token'
	}, callback);
}

function signOut(callback) {
		gapi.auth.signOut();
		callback();
}
