import React, { Component } from "react";
import { connect } from "react-redux";
import NavigationSection from "./NavigationSection";
import ShowtimeSection from "./ShowtimeSection";
import { getDetailCinemaService } from "../../../services/cinemaService";
import HeaderShowtime from "../Showtime/HeaderShowtime";
import CustomScrollbars from "../../../components/CustomScrollbars";
import Footer from "../Section/Footer";

class DetailCinema extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tradeMark: "",
		};
	}

	async componentDidMount() {
		if (this.props.match.params.id) {
			let id = this.props.match.params.id;
			let response = await getDetailCinemaService(id);
			if (response && response.errCode === 0) {
				console.log(response.data);
				this.setState({
					detailCinema: response.data,
				});
			}
			this.setState({
				tradeMark: this.state.detailCinema[0].tradeMark,
			});
		}
	}

	render() {
		let { tradeMark } = this.state;
		return (
			<CustomScrollbars style={{ height: "100vh", width: "100%" }}>
				<NavigationSection
					id={this.props.match.params.id}
					handleGetTradeMark={this.handleGetTradeMark}
				/>
				<HeaderShowtime tradeMark={tradeMark} />
				<ShowtimeSection id={this.props.match.params.id} />
				<Footer />
			</CustomScrollbars>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.user.isLoggedIn,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailCinema);
