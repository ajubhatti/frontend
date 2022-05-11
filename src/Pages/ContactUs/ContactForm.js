import React from "react";

const ContactForm = () => {
  return (
    <div className="container space-2 space-md-3">
      <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
        <span className="btn btn-xs btn-soft-success btn-pill mb-2">
          Leave a Message
        </span>
        <h2 className="text-primary font-weight-normal">
          Tell us about <span className="font-weight-semi-bold">yourself</span>
        </h2>
        <p>
          Whether you have questions or you would just like to say hello,
          contact us.
        </p>
      </div>

      <div className="w-lg-80 mx-auto">
        <form className="js-validate">
          <div className="row">
            <div className="col-sm-6 mb-6">
              <div className="js-form-message">
                <label className="form-label">
                  Your name
                  <span className="text-danger">*</span>
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Jack Wayley"
                  aria-label="Jack Wayley"
                  required=""
                  data-msg="Please enter your name."
                  data-error-className="u-has-error"
                  data-success-className="u-has-success"
                />
              </div>
            </div>
            <div className="col-sm-6 mb-6">
              <div className="js-form-message">
                <label className="form-label">
                  Your email address
                  <span className="text-danger">*</span>
                </label>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="jackwayley@gmail.com"
                  aria-label="jackwayley@gmail.com"
                  required=""
                  data-msg="Please enter a valid email address."
                  data-error-className="u-has-error"
                  data-success-className="u-has-success"
                />
              </div>
            </div>

            <div className="w-100"></div>
            <div className="col-sm-6 mb-6">
              <div className="js-form-message">
                <label className="form-label">
                  Subject
                  <span className="text-danger">*</span>
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Web design"
                  aria-label="Web design"
                  required=""
                  data-msg="Please enter a subject."
                  data-error-className="u-has-error"
                  data-success-className="u-has-success"
                />
              </div>
            </div>
            <div className="col-sm-6 mb-6">
              <div className="js-form-message">
                <label className="form-label">
                  Your Phone Number
                  <span className="text-danger">*</span>
                </label>

                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  placeholder="1-800-643-4500"
                  aria-label="1-800-643-4500"
                  required=""
                  data-msg="Please enter a valid phone number."
                  data-error-className="u-has-error"
                  data-success-className="u-has-success"
                />
              </div>
            </div>
          </div>

          <div className="js-form-message mb-6">
            <label className="form-label">
              How can we help you?
              <span className="text-danger">*</span>
            </label>

            <div className="input-group">
              <textarea
                className="form-control"
                rows="4"
                name="text"
                placeholder="Hi there, I would like to ..."
                aria-label="Hi there, I would like to ..."
                required=""
                data-msg="Please enter a reason."
                data-error-className="u-has-error"
                data-success-className="u-has-success"
              ></textarea>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary btn-wide transition-3d-hover mb-4"
            >
              Submit
            </button>
            <p className="small">We'll get back to you in 1-2 business days.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
