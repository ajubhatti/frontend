import React from "react";
import VectorImg from "../../Assets/vector.png";
import LoginForm from "./LoginForm";
import "./Login.css";

const Login = (props) => {
  return (
    <section className="banner login-registration">
      <div className="vector-img">
        <img src={VectorImg} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="content-box">
              <h2>Login Account</h2>
              <p>Login to continue</p>
            </div>
            <LoginForm {...props} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
