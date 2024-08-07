import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { CommonUtils } from "../../../utils";
import DatePicker from "../../../components/Input/DatePicker";

class MovieManage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: "",
			genre: "",
			duration: "",
			releaseDate: "",
			rating: "",
			director: "",
			image: "",
			background: "",
			trailer: "",

			previewImgUrl: "",
			previewBgUrl: "",
		};
	}

	async componentDidMount() {}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.users !== this.props.users) {
			this.setState({
				title: "",
				description: "",
				genre: "",
				duration: "",
				releaseDate: "",
				rating: "",
				director: "",
				image: "",
				background: "",
				trailer: "",

				previewImgUrl: "",
				previewBgUrl: "",
			});
		}
	}

	onChangeInput = (event, id) => {
		let copyState = { ...this.state };
		copyState[id] = event.target.value;
		this.setState({
			...copyState,
		});
	};

	handleOnChangeImage = async (event) => {
		let data = event.target.files;
		let file = data[0];
		if (file) {
			let base64 = await CommonUtils.getBase64(file);
			let objectUrl = URL.createObjectURL(file);
			this.setState({
				previewImgUrl: objectUrl,
				image: base64,
			});
		}
	};

	handleOnChangeBackground = async (event) => {
		let data = event.target.files;
		let file = data[0];
		if (file) {
			let base64 = await CommonUtils.getBase64(file);
			let objectUrl = URL.createObjectURL(file);
			this.setState({
				previewBgUrl: objectUrl,
				background: base64,
			});
		}
	};

	handleSaveMovie = async () => {
		let isValid = this.checkValidateInput();
		if (isValid === false) return;

		await this.props.createNewMovie({
			title: this.state.title,
			description: this.state.description,
			genre: this.state.genre,
			duration: this.state.duration,
			releaseDate: this.state.releaseDate,
			rating: this.state.rating,
			director: this.state.director,
			image: this.state.image,
			background: this.state.background,
			trailer: this.state.trailer,
		});
		this.setState({
			title: "",
			description: "",
			genre: "",
			duration: "",
			releaseDate: "",
			rating: "",
			director: "",
			image: "",
			background: "",
			previewImgUrl: "",
			previewBgUrl: "",
			trailer: "",
		});
	};
	checkValidateInput = () => {
		let isValid = true;
		let arrCheck = [
			"title",
			"description",
			"genre",
			"duration",
			"releaseDate",
			"rating",
			"image",
			"background",
			"director",
			"trailer",
		];
		for (let i = 0; i < arrCheck.length; i++) {
			if (this.state[arrCheck[i]] === "") {
				isValid = false;
				alert("Vui lòng nhập " + arrCheck[i] + " của bạn");
				break;
			}
		}

		return isValid;
	};

	onChangeInputDate = (date) => {
		this.setState({
			releaseDate: date[0],
		});
	};

	render() {
		let {
			title,
			description,
			genre,
			duration,
			releaseDate,
			rating,
			director,
			trailer,
		} = this.state;
		return (
			<div className="user-redux-container">
				<div className="title">Movie - Manage</div>
				<div className="user-redux-body">
					<div className="container">
						<div className="row">
							<div className="col-12"></div>
							<div className="add-user col-12 my-3 ">
								<FormattedMessage id="manage-movie.add" />
							</div>
							<div className="form-group col-6">
								<label>
									<FormattedMessage id="manage-movie.title" />
								</label>
								<input
									type="text"
									className="form-control"
									placeholder="Title"
									value={title}
									onChange={(event) => {
										this.onChangeInput(event, "title");
									}}
								/>
							</div>
							<div className="form-group col-6">
								<label>
									<FormattedMessage id="manage-movie.genre" />
								</label>
								<input
									type="text"
									className="form-control"
									placeholder="Genre"
									value={genre}
									onChange={(event) => {
										this.onChangeInput(event, "genre");
									}}
								/>
							</div>

							<div className="form-group col-6">
								<label>
									<FormattedMessage id="manage-movie.duration" />
								</label>
								<input
									type="number"
									className="form-control"
									placeholder="Duration"
									value={duration}
									onChange={(event) => {
										this.onChangeInput(event, "duration");
									}}
								/>
							</div>
							<div className="form-group col-6">
								<label>
									<FormattedMessage id="manage-movie.releaseDate" />
								</label>
								<DatePicker
									className="form-control"
									onChange={this.onChangeInputDate}
									value={releaseDate}
									// minDate={moment().format("DD/MM/YYYY")}
								/>
							</div>

							<div className="form-group col-6">
								<label>
									<FormattedMessage id="manage-movie.director" />
								</label>
								<input
									type="text"
									className="form-control"
									placeholder="Description"
									value={director}
									onChange={(event) => {
										this.onChangeInput(event, "director");
									}}
								/>
							</div>
							<div className="form-group col-6">
								<label>
									<FormattedMessage id="manage-movie.rating" />
								</label>
								<input
									type="number"
									className="form-control"
									placeholder="Rating"
									value={rating}
									onChange={(event) => {
										this.onChangeInput(event, "rating");
									}}
								/>
							</div>
							<div className="form-group col-6">
								<label>
									<FormattedMessage id="manage-movie.description" />
								</label>
								<input
									type="text"
									className="form-control"
									placeholder="Content"
									value={description}
									onChange={(event) => {
										this.onChangeInput(event, "description");
									}}
								/>
							</div>
							<div className="form-group col-6">
								<label>
									<FormattedMessage id="manage-movie.trailer" />
								</label>
								<input
									type="text"
									className="form-control"
									placeholder="Trailer"
									value={trailer}
									onChange={(event) => {
										this.onChangeInput(event, "trailer");
									}}
								/>
							</div>
							<div className="form-group col-6 form-preview-img">
								<label>
									<FormattedMessage id="manage-movie.image" />
								</label>
								<div className="preview-image-container">
									<input
										hidden
										id="previewImg"
										type="file"
										onChange={(event) => {
											this.handleOnChangeImage(event);
										}}
									/>
									<label className="label-upload" htmlFor="previewImg">
										Tải ảnh <i className="fas fa-upload"></i>
									</label>
									<div
										className="preview-image"
										style={{
											backgroundImage: `url(${this.state.previewImgUrl})`,
										}}></div>
								</div>
							</div>

							<div className="form-group col-6 form-preview-img">
								<label>
									<FormattedMessage id="manage-movie.background" />
								</label>
								<div className="preview-image-container">
									<input
										hidden
										id="previewBg"
										type="file"
										onChange={(event) => {
											this.handleOnChangeBackground(event);
										}}
									/>
									<label className="label-upload" htmlFor="previewBg">
										Tải ảnh <i className="fas fa-upload"></i>
									</label>
									<div
										className="preview-image"
										style={{
											backgroundImage: `url(${this.state.previewBgUrl})`,
										}}></div>
								</div>
							</div>

							<div className="form-group col-12"></div>
							<div className="form-group col-12">
								<button
									onClick={() => {
										this.handleSaveMovie();
									}}
									className={
										"form-control btn btn-primary mt-3 col-12"
									}
									type="submit">
									<FormattedMessage id="manage-movie.save" />
								</button>
							</div>
							<div className="col-12 mb-5"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.movie.movies,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createNewMovie: (data) => dispatch(actions.createNewMovie(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieManage);
