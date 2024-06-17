import React, { Component } from "react";
import { connect } from "react-redux";
import "./BookingModal.scss";
import { Modal } from "reactstrap";

class BookingModal extends Component {
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
		let { isOpenModal, closeBookingModal, dataBookingModal } = this.props;
		return (
			<Modal
				isOpen={isOpenModal}
				className={"booking-modal-container"}
				size="lg"
				centered>
				<div className="booking-modal-content">
					<div className="booking-modal-header">
						<i
							class="fas fa-chevron-left"
							onClick={closeBookingModal}></i>
						<div className="booking-modal-title">Mua vé xem phim</div>
					</div>
					<div className="booking-modal-body">
						{JSON.stringify(dataBookingModal)}
					</div>
					<div className="booking-modal-footer">
						<div className="total">
							<span className="text">Tổng thanh toán</span>
							<span className="sum">0đ</span>
						</div>
						<button className="btn btn-secondary">Đặt vé</button>
					</div>
				</div>
			</Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
