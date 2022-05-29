import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../Components/Form";
import routes from "../../Helper/routes";
import { toast } from "react-toastify";

const RegisterForm = (props) => {
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refererName, setRefererName] = useState("");
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
    referrelId: "",
  });

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const referCodeChangeHandler = (event) => {
    const { name, value } = event.target;
    if (value.length > 8) {
      props.getRefererUser({ code: value }).then((res) => {
        setRefererName(res.data.userName);
      });
    } else {
      setRefererName("");
    }
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (
      values.userName !== "" &&
      values.phoneNumber !== "" &&
      values.email !== "" &&
      values.password !== ""
    ) {
      if (checked) {
        setApiCall(true);
        try {
          await props.register(values).then((res) => {
            toast.success(res.message);
            props.history.push({
              pathname: routes.otp,
              state: {
                mobileNo: values.phoneNumber,
              },
            });
          });
        } finally {
          setApiCall(false);
        }
      } else {
        toast.error("please accept terms and conditions");
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
        <label className="form-label">
          Referral Code <small className="text-muted">(optional)</small>
        </label>
        <input
          type="text"
          placeholder="XXXXXX"
          name="referrelId"
          value={values.referrelId}
          onChange={referCodeChangeHandler}
          className="form-control"
        />
        <small
          className="valid-feedback"
          style={{ display: refererName.length > 0 ? "block" : "none" }}
        >
          {refererName}
        </small>
      </div>
      <div className="form-group">
        <label className="form-label">Full Name</label>
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
        <label className="form-label">Phone Number</label>
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
        <label className="form-label">Email</label>
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
        <label className="form-label">Password</label>
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

      <div className="mb-5">
        <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
          <input
            type="checkbox"
            className="custom-control-input"
            id="termsCheckbox"
            value=""
            onClick={(e) => setChecked(e.target.checked)}
          />
          <label className="custom-control-label" htmlFor="termsCheckbox">
            <small>
              I agree to the {""}
              <Link to={routes.terms} className="link-muted">
                Terms and Conditions
              </Link>
            </small>
          </label>
        </div>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-8">
          <span className="small text-muted">Already have an account?</span>{" "}
          {""}
          <Link to={routes.login} className="small">
            Login
          </Link>
        </div>

        <div className="col-4 text-right">
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

export default RegisterForm;
