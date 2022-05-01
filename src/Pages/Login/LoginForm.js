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
        <label>Email or Username</label>
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
        <label>Password</label>
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
      <div className="form-group">
        <Link to={routes.forgot}>Forgot Password</Link>
      </div>
      <button
        className="btn btn-filled btn-round"
        onClick={submitHandler}
        disabled={apiCall}
      >
        <span>{apiCall ? "Loading..." : "Login"}</span>
      </button>
      <p className="notice">
        Don’t have an account? <Link to={routes.register}>Signup Now</Link>
      </p>
    </Form>
  );
};

export default LoginForm;
