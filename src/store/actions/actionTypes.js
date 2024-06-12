const actionTypes = Object.freeze({
	//app
	APP_START_UP_COMPLETE: "APP_START_UP_COMPLETE",
	SET_CONTENT_OF_CONFIRM_MODAL: "SET_CONTENT_OF_CONFIRM_MODAL",

	//user
	ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
	USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
	USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
	PROCESS_LOGOUT: "PROCESS_LOGOUT",

	//admin
	FETCH_GENDER_START: "FETCH_GENDER_START",
	FETCH_GENDER_SUCCESS: "FETCH_GENDER_SUCCESS",
	FETCH_GENDER_FAILED: "FETCH_GENDER_FAILED",

	FETCH_ROLE_START: "FETCH_ROLE_START",
	FETCH_ROLE_SUCCESS: "FETCH_ROLE_SUCCESS",
	FETCH_ROLE_FAILED: "FETCH_ROLE_FAILED",

	CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
	CREATE_USER_FAILED: "CREATE_USER_FAILED",

	EDIT_USER_SUCCESS: "EDIT_USER_SUCCESS",
	EDIT_USER_FAILED: "EDIT_USER_FAILED",

	DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
	DELETE_USER_FAILED: "DELETE_USER_FAILED",

	FETCH_ALL_USERS_SUCCESS: "FETCH_ALL_USERS_SUCCESS",
	FETCH_ALL_USERS_FAILED: "FETCH_ALL_USERS_FAILED",

	FETCH_TOP_MOVIES_SUCCESS: "FETCH_TOP_MOVIES_SUCCESS",
	FETCH_TOP_MOVIES_FAILED: "FETCH_TOP_MOVIES_FAILED",

	// MOVIE

	CREATE_MOVIE_SUCCESS: "CREATE_MOVIE_SUCCESS",
	CREATE_MOVIE_FAILED: "CREATE_MOVIE_FAILED",
});

export default actionTypes;
