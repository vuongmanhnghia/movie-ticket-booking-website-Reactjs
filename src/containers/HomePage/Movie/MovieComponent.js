import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./MovieComponent.scss";
import HomeNavigation from "../HomeNavigation";
import BannerMovie from "./BannerMovie";
import Slide from "./Slide";
import AllMovies from "./AllMovies";
import Footer from "../Section/Footer";

class MovieComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	async componentDidMount() {}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
		}
	}

	render() {
		let settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 5,
			slidesToScroll: 5,
		};
		return (
			<>
				<HomeNavigation />
				<BannerMovie />
				<Slide settings={settings} />
				<AllMovies />
				<Footer />
			</>
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

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(MovieComponent)
);