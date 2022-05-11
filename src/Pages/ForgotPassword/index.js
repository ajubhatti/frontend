import React from "react";
import VectorImg from "../../Assets/vector.png";
import ForgotForm from "./ForgotForm";

const ForgotPassword = (props) => {
  return (
    <section className="banner login-registration">
      <div className="vector-img">
        <img src={VectorImg} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="content-box">
              <h2>Forgot Password</h2>
              <p>
                Enter your email and we&apos;ll send you an email to reset your
                password.
              </p>
            </div>
            <ForgotForm {...props} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
