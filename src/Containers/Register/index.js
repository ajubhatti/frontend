import React from "react";
import { connect } from "react-redux";
import Register from "../../Pages/Register";
import { register } from "../../Redux/Actions/Auth/auth";

const RegisterContainer = (props) => <Register {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { register })(RegisterContainer);
