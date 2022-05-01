import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../Components/Form";
import routes from "../../Helper/routes";

const RegisterForm = (props) => {
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    userName: "",
    phoneNumber: "",
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
    setSubmitted(true);
    if (
      values.userName !== "" ||
      values.phoneNumber !== "" ||
      values.email !== "" ||
      values.password !== ""
    ) {
      setApiCall(true);
      try {
        await props.register(values).then(() => {
          props.history.push(routes.home);
        });
      } finally {
        setApiCall(false);
      }
    }
  };

  return (
    <Form
      name="register-form"
      submitHandler={submitHandler}
      className="sl-form"
    >
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Jhone Doe"
          required
          name="userName"
          value={values.userName}
          onChange={handlerChange}
          className={
            "form-control" +
            (submitted && !values.userName ? " is-invalid" : "")
          }
        />
        {submitted && !values.userName && (
          <div className="invalid-feedback">User Name is required</div>
        )}
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="123-45-678"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          required
          value={values.phoneNumber}
          onChange={handlerChange}
          className={
            "form-control" +
            (submitted && !values.phoneNumber ? " is-invalid" : "")
          }
        />
        {submitted && !values.phoneNumber && (
          <div className="invalid-feedback">Phone Number is required</div>
        )}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          required
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
          required
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
      <div className="form-check">
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label">
          Agree with Terms and Conditions
        </label>
      </div>
      <button
        className="btn btn-filled btn-round"
        onClick={submitHandler}
        disabled={apiCall}
      >
        <span>{apiCall ? "Loading..." : "Signup"}</span>
      </button>
      <p className="notice">
        Already have an account? <Link to={routes.login}>Login Account</Link>
      </p>
    </Form>
  );
};

export default RegisterForm;
