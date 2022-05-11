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
            <div class="mb-7">
              <h2 class="h3 text-primary font-weight-normal mb-0">
                Welcome <span class="font-weight-semi-bold">back</span>
              </h2>
              <p>Login to manage your account.</p>
            </div>
            <LoginForm {...props} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
