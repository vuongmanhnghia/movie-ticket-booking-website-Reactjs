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

	FETCH_ALL_MOVIES_SUCCESS: "FETCH_ALL_MOVIES_SUCCESS",
	FETCH_ALL_MOVIES_FAILED: "FETCH_ALL_MOVIES_FAILED",

	FETCH_DETAIL_MOVIE_SUCCESS: "FETCH_DETAIL_MOVIE_SUCCESS",
	FETCH_DETAIL_MOVIE_FAILED: "FETCH_DETAIL_MOVIE_FAILED",

	FETCH_MOVIES_PAGE_SUCCESS: "FETCH_MOVIES_PAGE_SUCCESS",
	FETCH_MOVIES_PAGE_FAILED: "FETCH_MOVIES_PAGE_FAILED",

	FETCH_REVIEW_MOVIES_PAGE_SUCCESS: "FETCH_REVIEW_MOVIES_PAGE_SUCCESS",
	FETCH_REVIEW_MOVIES_PAGE_FAILED: "FETCH_REVIEW_MOVIES_PAGE_FAILED",

	FETCH_ALL_MOVIES_SEARCH_SUCCESS: "FETCH_ALL_MOVIES_SEARCH_SUCCESS",
	FETCH_ALL_MOVIES_SEARCH_FAILED: "FETCH_ALL_MOVIES_SEARCH_FAILED",

	// CINEMA
	CREATE_CINEMA_SUCCESS: "CREATE_CINEMA_SUCCESS",
	CREATE_CINEMA_FAILED: "CREATE_CINEMA_FAILED",

	FETCH_ALL_CINEMAS_SUCCESS: "FETCH_ALL_CINEMAS_SUCCESS",
	FETCH_ALL_CINEMAS_FAILED: "FETCH_ALL_CINEMAS_FAILED",

	FETCH_ALL_TRADEMARKS_SUCCESS: "FETCH_ALL_TRADEMARKS_SUCCESS",
	FETCH_ALL_TRADEMARKS_FAILED: "FETCH_ALL_TRADEMARKS_FAILED",

	FETCH_ALL_CINEMAS_BY_TRADEMARK_SUCCESS:
		"FETCH_ALL_CINEMAS_BY_TRADEMARK_SUCCESS",
	FETCH_ALL_CINEMAS_BY_TRADEMARK_FAILED:
		"FETCH_ALL_CINEMAS_BY_TRADEMARK_FAILED",

	FETCH_SHOWTIME_BY_CINEMA_SUCCESS: "FETCH_SHOWTIME_BY_CINEMA_SUCCESS",
	FETCH_SHOWTIME_BY_CINEMA_FAILED: "FETCH_SHOWTIME_BY_CINEMA_FAILED",

	FETCH_TRADEMARK_BY_CINEMA_SUCCESS: "FETCH_TRADEMARK_BY_CINEMA_SUCCESS",
	FETCH_TRADEMARK_BY_CINEMA_FAILED: "FETCH_TRADEMARK_BY_CINEMA_FAILED",

	FETCH_DETAIL_CINEMA_SUCCESS: "FETCH_DETAIL_CINEMA_SUCCESS",
	FETCH_DETAIL_CINEMA_FAILED: "FETCH_DETAIL_CINEMA_FAILED",

	FETCH_DETAIL_TRADEMARK_SUCCESS: "FETCH_DETAIL_TRADEMARK_SUCCESS",
	FETCH_DETAIL_TRADEMARK_FAILED: "FETCH_DETAIL_TRADEMARK_FAILED",

	// SCREEN
	CREATE_SCREEN_SUCCESS: "CREATE_SCREEN_SUCCESS",
	CREATE_SCREEN_FAILED: "CREATE_SCREEN_FAILED",

	FETCH_ALL_SCREENS_SUCCESS: "FETCH_ALL_SCREENS_SUCCESS",
	FETCH_ALL_SCREENS_FAILED: "FETCH_ALL_SCREENS_FAILED",

	// SHOWTIME
	CREATE_SHOWTIME_SUCCESS: "CREATE_SHOWTIME_SUCCESS",
	CREATE_SHOWTIME_FAILED: "CREATE_SHOWTIME_FAILED",

	FETCH_ALL_SHOWTIMES_SUCCESS: "FETCH_ALL_SHOWTIMES_SUCCESS",
	FETCH_ALL_SHOWTIMES_FAILED: "FETCH_ALL_SHOWTIMES_FAILED",

	FETCH_SEATS_BY_SHOWTIME_SUCCESS: "FETCH_SEATS_BY_SHOWTIME_SUCCESS",
	FETCH_SEATS_BY_SHOWTIME_FAILED: "FETCH_SEATS_BY_SHOWTIME_FAILED",

	FETCH_SHOWTIME_BY_CINEMA_AND_DATE_AND_MOVIE_SUCCESS:
		"FETCH_SHOWTIME_BY_CINEMA_AND_DATE_AND_MOVIE_SUCCESS",
	FETCH_SHOWTIME_BY_CINEMA_AND_DATE_AND_MOVIE_FAILED:
		"FETCH_SHOWTIME_BY_CINEMA_AND_DATE_AND_MOVIE_FAILED",

	// ALLCODES
	FETCH_ALLCODE_TIME_SUCCESS: "FETCH_ALLCODE_TIME_SUCCESS",
	FETCH_ALLCODE_TIME_FAILED: "FETCH_ALLCODE_TIME_FAILED",

	// BOOKING
	CREATE_NEW_BOOKING_SUCCESS: "CREATE_NEW_BOOKING_SUCCESS",
	CREATE_NEW_BOOKING_FAILED: "CREATE_NEW_BOOKING_FAILED",

	FETCH_BOOKING_BY_CINEMA_MOVIE_SCREEN_DATETIME_SUCCESS:
		"FETCH_BOOKING_BY_CINEMA_MOVIE_SCREEN_DATETIME_SUCCESS",
	FETCH_BOOKING_BY_CINEMA_MOVIE_SCREEN_DATETIME_FAILED:
		"FETCH_BOOKING_BY_CINEMA_MOVIE_SCREEN_DATETIME_FAILED",

	CREATE_NEW_BOOKING_SEAT_SUCCESS: "CREATE_NEW_BOOKING_SEAT_SUCCESS",
	CREATE_NEW_BOOKING_SEAT_FAILED: "CREATE_NEW_BOOKING_SEAT_FAILED",

	RESET_BOOKING: "RESET_BOOKING",

	FETCH_BOOKING_SEATS_SUCCESS: "FETCH_BOOKING_SEATS_SUCCESS",
	FETCH_BOOKING_SEATS_FAILED: "FETCH_BOOKING_SEATS_FAILED",
});

export default actionTypes;
