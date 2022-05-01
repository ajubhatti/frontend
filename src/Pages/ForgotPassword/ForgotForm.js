import React, { useState } from "react";
import { toast } from "react-toastify";
import Form from "../../Components/Form";

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
        <label>Email</label>
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
      <button
        className="btn btn-filled btn-round"
        onClick={submitHandler}
        disabled={apiCall}
      >
        <span>{apiCall ? "Loading..." : "Submit"}</span>
      </button>
    </Form>
  );
};

export default ForgotForm;
