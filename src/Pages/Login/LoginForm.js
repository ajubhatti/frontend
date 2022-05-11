import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../Components/Form";
import routes from "../../Helper/routes";

const LoginForm = (props) => {
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setApiCall(true);
    setSubmitted(true);
    if (values.email !== "" && values.password !== "") {
      try {
        await props.login(values).then(() => {
          props.history.push(routes.home);
        });
      } finally {
        setApiCall(false);
      }
    }
  };

  return (
    <Form name="login-form" submitHandler={submitHandler} className="sl-form">
      <div className="form-group">
        <label className="form-label">Email or Username</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          required=""
          name="email"
          value={values.email}
          onChange={handlerChange}
          className={
            "form-control" + (submitted && !values.email ? " is-invalid" : "")
          }
        />
        {submitted && !values.email && (
          <div className="invalid-feedback">Email is required</div>
        )}
      </div>
      <div className="form-group">
        <label className="form-label">
          <span className="d-flex justify-content-between align-items-center">
            Password
            <Link
              to={routes.forgot}
              className="link-muted text-capitalize font-weight-normal"
            >
              Forgot Password?
            </Link>
          </span>
        </label>
        <input
          type="password"
          placeholder="Password"
          required=""
          name="password"
          value={values.password}
          onChange={handlerChange}
          className={
            "form-control" +
            (submitted && !values.password ? " is-invalid" : "")
          }
        />
        {submitted && !values.password && (
          <div className="invalid-feedback">Password is required</div>
        )}
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-6">
          <span className="small text-muted">Don't have an account?</span>
          <Link to={routes.register} className="small">
            Signup
          </Link>
        </div>

        <div className="col-6 text-right">
          <button
            type="submit"
            className="btn btn-primary transition-3d-hover"
            onClick={submitHandler}
            disabled={apiCall}
          >
            Get Started
          </button>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
