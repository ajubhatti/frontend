import React from "react";
import "./ResetPassword.css";
import ResetForm from "./ResetForm";
import VectorImg from "../../Assets/vector.png";

const ResetPassword = (props) => {
  return (
    <section className="banner login-registration">
      <div className="vector-img">
        <img src={VectorImg} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="content-box">
              <h2>Reset Password</h2>
              <p>
                Please verify email and enter a new password to reset your
                password
              </p>
            </div>
            <ResetForm {...props} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
