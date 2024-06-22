import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../../store/actions";
import "./SelectCinema.scss";

class SelectCinema extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allTradeMarks: [],
		};
	}

	async componentDidMount() {
		await this.props.fetchAllTradeMarks();
		let allTradeMarks = this.filterTradeMarks(this.props.allTradeMarks);
		this.setState({
			allTradeMarks: allTradeMarks,
		});

		let activeCinema = document.querySelectorAll("div.select-cinema-item");
		let activeLogo = document.querySelectorAll("div.select-cinema-item-logo");
		let activeTradeMark = document.querySelectorAll(
			"div.select-cinema-item-name"
		);
		activeCinema.forEach((item, index) => {
			item.addEventListener("click", () => {
				document
					.querySelectorAll("div.select-cinema-item-logo")
					.forEach((item) => item.classList.remove("active"));
				document
					.querySelectorAll("div.select-cinema-item-name")
					.forEach((item) => item.classList.remove("active-tradeMark"));
				activeLogo[index].classList.add("active");
				activeTradeMark[index].classList.add("active-tradeMark");
			});
		});
	}

	filterTradeMarks(items) {
		const seenNames = new Set();
		return items.filter((item) => {
			if (seenNames.has(item.tradeMark)) {
				return false; // Bỏ qua các đối tượng có tên trùng
			} else {
				seenNames.add(item.tradeMark); // Lưu lại tên đã gặp
				return true; // Giữ lại đối tượng đầu tiên có tên này
			}
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
		}
	}

	getSelectedCinema = (item) => {
		this.props.handleShowSelectCinema(item);
	};

	render() {
		let { allTradeMarks } = this.state;
		return (
			<>
				<div className="select-cinema-container">
					<div className="select-cinema-content">
						{allTradeMarks &&
							allTradeMarks.length > 0 &&
							allTradeMarks.map((item, index) => {
								if (index === 0) {
									return (
										<div
											className="select-cinema-item"
											onClick={() => this.getSelectedCinema(item)}>
											<div
												className="select-cinema-item-logo active"
												style={{
													background: `url(${item.image})`,
												}}></div>
											<div className="select-cinema-item-name active-tradeMark">
												{item.tradeMark.length > 7
													? `${item.tradeMark.slice(0, 7)}...`
													: item.tradeMark}
											</div>
										</div>
									);
								} else {
									return (
										<div
											className="select-cinema-item"
											onClick={() => this.getSelectedCinema(item)}>
											<div
												className="select-cinema-item-logo"
												style={{
													background: `url(${item.image})`,
												}}></div>
											<div className="select-cinema-item-name">
												{item.tradeMark.length > 7
													? `${item.tradeMark.slice(0, 7)}...`
													: item.tradeMark}
											</div>
										</div>
									);
								}
							})}
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.user.isLoggedIn,
		allTradeMarks: state.cinema.allTradeMarks,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllTradeMarks: () => dispatch(actions.fetchAllTradeMarks()),
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(SelectCinema)
);
