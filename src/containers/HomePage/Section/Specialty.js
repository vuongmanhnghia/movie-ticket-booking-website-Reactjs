import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import Slider from "react-slick";
import * as actions from "../../../store/actions";

// Import css files

class Specialty extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arrMovies: [],
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.topMovies !== this.props.topMovies) {
			this.setState({
				arrMovies: this.props.topMovies,
			});
		}
	}

	componentDidMount() {
		this.props.loadTopMovies();
	}

	render() {
		let arrMovies = this.state.arrMovies;
		return (
			<div className="movie-section-container">
				<div className="movie-section-content">
					<div className="movie-section-title">
						<h2>Phim đang chiếu</h2>
					</div>
					<div className="movie-section-slide-container">
						<div className="movie-section-slide-content">
							<Slider {...this.props.settings}>
								{arrMovies &&
									arrMovies.length > 0 &&
									arrMovies.map((item, index) => {
										let imageBase64 = new Buffer(
											item.image,
											"base64"
										).toString("binary");

										let title = item.title;
										let genre = item.genre;
										let rating = item.rating;

										return (
											<div className="box-slide-customize">
												<div className="box-image-movie">
													<div
														className="bg-image"
														style={{
															backgroundImage: `url(${imageBase64})`,
														}}
													/>
												</div>
												<div className="box-movie-text">
													<div className="title-movie">
														{title.length < 25
															? title
															: `${title.slice(0, 23)}...`}
													</div>
													<div className="category">
														{genre.length < 25
															? genre
															: `${genre.slice(0, 28)}...`}
													</div>
												</div>
												<div className="rate">
													<i className="fas fa-star"></i> {rating}
												</div>
											</div>
										);
									})}
							</Slider>
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
		topMovies: state.movie.topMovies,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadTopMovies: () => dispatch(actions.fetchTopMovies()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
