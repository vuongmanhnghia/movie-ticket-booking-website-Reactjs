import actionTypes from "./actionTypes";
import {
	createNewCinemaService,
	getAllCinemasService,
	getAllTradeMarksService,
	getAllCinemasByTradeMarkService,
} from "../../services/cinemaService";
import { toast } from "react-toastify";

export const createNewCinema = (data) => {
	console.log(data);
	return async (dispatch, getState) => {
		try {
			let response = await createNewCinemaService(data);
			if (response && response.errCode === 0) {
				dispatch(createCinemaSuccess());
				// dispatch(fetchAllCinemaStart());
				toast.success("Thêm mới bộ phim thành công!");
			} else {
				toast.error("Thêm mới bộ phim thất bại!");
				dispatch(createCinemaFailed());
			}
		} catch (e) {
			toast.error("Thêm mới bộ phim thất bại!");
			dispatch(createCinemaFailed());
			console.log("Create user errol: ", e);
		}
	};
};

export const createCinemaSuccess = () => ({
	type: actionTypes.CREATE_CINEMA_SUCCESS,
});

export const createCinemaFailed = () => ({
	type: actionTypes.CREATE_CINEMA_FAILED,
});

export const fetchAllCinemas = () => {
	return async (dispatch, getState) => {
		try {
			let response = await getAllCinemasService();
			if (response && response.errCode === 0) {
				dispatch({
					type: actionTypes.FETCH_ALL_CINEMAS_SUCCESS,
					allCinemas: response.data,
				});
			} else {
				dispatch({
					type: actionTypes.FETCH_ALL_CINEMAS_FAILED,
				});
			}
		} catch (e) {
			console.log("fetch all Cinemas errol: ", e);
			dispatch({
				type: actionTypes.FETCH_ALL_CINEMAS_FAILED,
			});
		}
	};
};

export const fetchAllTradeMarks = () => {
	return async (dispatch, getState) => {
		try {
			let response = await getAllTradeMarksService();
			if (response && response.errCode === 0) {
				dispatch({
					type: actionTypes.FETCH_ALL_TRADEMARKS_SUCCESS,
					allTradeMarks: response.data,
				});
			} else {
				dispatch({
					type: actionTypes.FETCH_ALL_TRADEMARKS_FAILED,
				});
			}
		} catch (e) {
			console.log("fetch all TradeMarks errol: ", e);
			dispatch({
				type: actionTypes.FETCH_ALL_TRADEMARKS_FAILED,
			});
		}
	};
};

export const fetchAllCinemasByTradeMark = (data) => {
	return async (dispatch, getState) => {
		try {
			let response = await getAllCinemasByTradeMarkService(data);
			if (response && response.errCode === 0) {
				dispatch({
					type: actionTypes.FETCH_ALL_CINEMAS_BY_TRADEMARK_SUCCESS,
					allCinemasByTradeMark: response.data,
				});
			} else {
				dispatch({
					type: actionTypes.FETCH_ALL_CINEMAS_BY_TRADEMARK_FAILED,
				});
			}
		} catch (e) {
			console.log("fetch all TradeMarks errol: ", e);
			dispatch({
				type: actionTypes.FETCH_ALL_CINEMAS_BY_TRADEMARK_FAILED,
			});
		}
	};
};
