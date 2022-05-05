import React from "react";

const ContactUs = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9 m-auto text-center">
            <div className="sec-heading">
              <span className="tagline">Contact us</span>
              <h3 className="sec-title">
                If You Have Any Query, <br />
                Drop a Message
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <form>
              <div className="row">
                <div className="form-group col-sm-6">
                  <label for="f_name">Full name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="f_name"
                    placeholder="Full Name"
                    required=""
                  />
                </div>
                <div className="form-group col-sm-6">
                  <label for="l_name">Full name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="l_name"
                    placeholder="Last name"
                  />
                </div>
                <div className="form-group col-sm-6">
                  <label for="email">email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email address"
                    required=""
                  />
                </div>
                <div className="form-group col-sm-6">
                  <label for="phone">Phone number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="message">Your Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  placeholder="Your Message"
                  required=""
                ></textarea>
              </div>
              <button type="submit" className="btn btn-default">
                send message
              </button>
            </form>
          </div>
          <div className="col-md-4">
            <aside className="sidebar">
              <div className="widget contact-info">
                <h3 className="widget-title">Contact info</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                  quod accusamus est obcaecati eum culpa in explicabo cupiditate
                  animi corporis.
                </p>
                <div>
                  <h6>Location Info</h6>
                  <span>
                    Address line 1, Avg Centre Point. Level 5, New Yourk City -
                    USA
                  </span>
                </div>
                <div>
                  <h6>Hotline numbers</h6>
                  <a href="tel:+12345678912">+123 4567 8912</a>
                  <a href="tel:+32176542198">+321 7654 2198</a>
                </div>
                <div>
                  <h6>Email Us</h6>
                  <a href="mailto:youremail@domain.com">youremail@domain.com</a>
                  <a href="mailto:help@example.com">help@example.com</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
