import React from "react";
import { LockFill } from "react-bootstrap-icons";
import OfficeImg from "../../Assets/office.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="about bg-offwhite">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9 m-auto text-center">
              <div className="sec-heading">
                <span className="tagline">About us</span>
                <h3 className="sec-title">
                  As a world-leader in yacht chartering, brokerage
                </h3>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="entry-content">
                <h3>Perspiciatis unde omnis iste natus error inventore.</h3>
                <p>
                  Perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <h6>
                  Dolor sit amet consectetur adipisicing elit. Unde, quasi.
                </h6>
                <p>
                  Nemo dolores, iusto pariatur corporis quis ullam harum
                  voluptate porro officiis aliquam quas explicabo?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  similique, consequuntur incidunt at repellendus ratione totam
                  excepturi iste. Similique ipsum numquam recusandae, eligendi
                  maiores temporibus officia harum labore deleniti quasi.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-box">
                <img src={OfficeImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="container">
          <div className="row">
            <div className=" col-md-12 m-auto text-center">
              <div className="sec-heading mb-4">
                <span className="tagline">Partners</span>
                <h3 className="sec-title"> Our Trusted Partners </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 m-auto">
              <div className="featuredOfferBox"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section shadow-md pt-4 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="iconBox">
                <LockFill />
                <h5>Secure Payments</h5>
                <p>Moving your card details to a much more secured place.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="iconBox">
                <i className="fas fa-hand-holding-usd"></i>
                <h5>Trust pay</h5>
                <p>100% Payment Protection. Easy Return Policy.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="iconBox">
                <i className="fas fa-retweet"></i>
                <h5>Refer &amp; Earn</h5>
                <p>Invite a friend to sign up and earn up to $125.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="iconBox">
                <i className="fab fa-superpowers"></i>
                <h5>24/7 Support</h5>
                <p>
                  We're here to help. Have a query and need help ?{" "}
                  <a href="contact.html">Click here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="callto-action">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9 m-auto text-center">
              <div className="sec-heading">
                <span className="tagline text-white">Contact Info</span>
                <h3 className="sec-title">Have questions? Get in touch. </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 contactInfo">
              <h5>Mediterranean base</h5>
              <p>
                <span className="circle small">
                  <i className="ti-mobile"></i>
                </span>{" "}
                + 385 91 555 555
              </p>
              <p>
                <span className="circle small">
                  <i className="ti-email"></i>
                </span>{" "}
                <a href="mailto:mediterranean@office.com">
                  mediterranean@office.com
                </a>
              </p>
            </div>
            <div className="col-md-3 contactInfo">
              <h5>South Pacific base</h5>
              <p>
                <span className="circle small">
                  <i className="ti-mobile"></i>
                </span>{" "}
                + 021 1 555 555
              </p>
              <p>
                <span className="circle small">
                  <i className="ti-email"></i>
                </span>{" "}
                <a href="mailto:southpacific@office.com">
                  southpacific@office.com
                </a>
              </p>
            </div>
            <div className="col-md-3 contactInfo">
              <h5>Caribbean base</h5>
              <p>
                <span className="circle small">
                  <i className="ti-mobile"></i>
                </span>{" "}
                + 33 44 555 555
              </p>
              <p>
                <span className="circle small">
                  <i className="ti-email"></i>
                </span>{" "}
                <a href="mailto:caribbean@office.com">caribbean@office.com</a>
              </p>
            </div>
            <div className="col-md-3 contactInfo">
              <h5>USA base</h5>
              <p>
                <span className="circle small">
                  <i className="ti-mobile"></i>
                </span>{" "}
                + 1 555 555 555
              </p>
              <p>
                <span className="circle small">
                  <i className="ti-email"></i>
                </span>{" "}
                <a href="mailto:unitedstates@office.com">
                  unitedstates@office.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
