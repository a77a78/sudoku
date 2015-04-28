CLIENT_ID = '845239687990-1p7nllq9a143rf8d489el4vn3fq9ptq1.apps.googleusercontent.com';

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
