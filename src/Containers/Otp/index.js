import React from "react";
import { connect } from "react-redux";
import Otp from "../../Pages/OTP";
import { verifyOtp } from "../../Redux/Actions/Otp/otp";

const OtpContainer = (props) => <Otp {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { verifyOtp })(OtpContainer);
