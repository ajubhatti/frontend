import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "../../Components/Form";
import routes from "../../Helper/routes";

const ForgotForm = (props) => {
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handlerChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (email !== "") {
      setApiCall(true);
      try {
        await props.forgotPassword({ email: email }).then((res) => {
          toast.success(res.message);
        });
      } finally {
        setApiCall(false);
      }
    }
  };
  return (
    <Form
      name="reset-password-form"
      submitHandler={submitHandler}
      className="sl-form"
    >
      <div className="form-group">
        <label className="form-label">Email</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          required=""
          name="email"
          value={email}
          onChange={handlerChange}
          className={
            "form-control" + (submitted && !email ? " is-invalid" : "")
          }
        />
        {submitted && !email && (
          <div className="invalid-feedback">Email is required</div>
        )}
      </div>
      <div className="row align-items-center mb-5">
        <div className="col-4 col-sm-6">
          <Link to={routes.login} className="small link-muted">
            Back to sign in
          </Link>
        </div>

        <div className="col-8 col-sm-6 text-right">
          <button
            type="submit"
            className="btn btn-primary transition-3d-hover"
            onClick={submitHandler}
            disabled={apiCall}
          >
            Request Reset Link
          </button>
        </div>
      </div>
    </Form>
  );
};

export default ForgotForm;
