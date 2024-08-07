import React, { Component } from "react";
import { connect } from "react-redux";
import "./Cinema.scss";
import { fetchAllCinemas } from "../../../store/actions";
import { withRouter } from "react-router";
import LoadingSkeleton from "../LoadingSkeleton";

class Cinema extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arrCinemas: [],
			arrTradeMarks: [],
			arrQuantity: [],
			arrRating: [],
			uniqueTradeMarks: [],

			loading: true,
		};
	}

	async componentDidMount() {
		this.closeLoading(1000);
		await this.props.fetchAllCinemas();
		this.setState({
			arrCinemas: this.props.allCinems,
		});
		// mảng không trùng lặp thương hiệu các rạp chiếu phim
		let uniqueTradeMarks = this.state.arrCinemas.filter(
			(value, index, self) =>
				self.findIndex((t) => t.tradeMark === value.tradeMark) === index
		);
		// mảng thương hiệu các rạp chiếu phim
		let arrTradeMarksOfCinemas = this.state.arrCinemas.map(
			(item) => item.tradeMark
		);
		let arrTradeMarks = arrTradeMarksOfCinemas.filter(
			(value, index, self) => self.indexOf(value) === index
		);
		// mảng số lượng các rạp chiếu phim theo thương hiệu
		let arrQuantityCinemas = [];
		arrTradeMarks.forEach((item) => {
			let quantity = arrTradeMarksOfCinemas.filter(
				(value) => value === item
			).length;
			arrQuantityCinemas.push(quantity);
		});

		// mảng tính trung bình rating của các rạp chiếu phim theo thương hiệu
		let arrRatingCinemas = [];
		arrTradeMarks.forEach((item) => {
			let arrRating = this.state.arrCinemas
				.filter((value) => value.tradeMark === item)
				.map((value) => value.rating);
			let rating = arrRating.reduce((a, b) => a + b, 0) / arrRating.length;
			arrRatingCinemas.push(rating);
		});

		this.setState({
			arrTradeMarks: arrTradeMarks,
			arrQuantity: arrQuantityCinemas,
			arrRating: arrRatingCinemas,
			uniqueTradeMarks: uniqueTradeMarks,
		});
	}

	handleViewDetailCinema = (tradeMark) => {
		this.props.history.push(`/detail-cinema/${tradeMark}`);
	};

	closeLoading = (countdown) => {
		setTimeout(() => {
			this.setState({
				loading: false,
			});
		}, countdown);
	};

	render() {
		let { loading } = this.state;
		return (
			<div className="cinema-section-container">
				<div className="cinema-section-content">
					<div className="mb-5 text-center md:mb-8">
						<div className="cinema-title">Hệ thống rạp chiếu phim</div>
						<div className="cinema-description">
							Danh sách hệ thống chiếu rạp phim lớn có mặt khắp cả nước
						</div>
					</div>
					<div className="cinema-content">
						{this.state.uniqueTradeMarks &&
							this.state.uniqueTradeMarks.length > 0 &&
							this.state.uniqueTradeMarks.map((item, index) => {
								return (
									<div
										className="box-cinema"
										onClick={() =>
											this.handleViewDetailCinema(
												this.state.uniqueTradeMarks[index].tradeMark
											)
										}>
										{loading && (
											<LoadingSkeleton
												style={{ height: "100%", width: "100%" }}
											/>
										)}
										{!loading && (
											<>
												<div
													className="logo-cinema"
													style={{
														backgroundImage: `url(${item.image})`,
													}}></div>
												<div className="box-cinema-content">
													<div className="box-cinema-content-title">
														{this.state.arrTradeMarks[index]}
													</div>
													<div className="dash"></div>
													<div className="box-cinema-content-rate">
														<i className="fas fa-star"></i>
														{this.state.arrRating[index]}
													</div>
													<div className="dash"></div>
													<div className="box-cinema-content-quantity">
														<i className="fas fa-map-marker-alt"></i>{" "}
														{this.state.arrQuantity[index]} rạp
													</div>
												</div>
											</>
										)}
									</div>
								);
							})}
					</div>
					<div className="cinema-section-btn">
						<div
							className="btn-primary medium"
							onClick={() =>
								this.props.history.push(`/detail-showtime`)
							}>
							Tìm rạp chiếu
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.user.isLoggedIn,
		allCinems: state.cinema.allCinemas,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllCinemas: () => dispatch(fetchAllCinemas()),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cinema));
