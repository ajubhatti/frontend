import React from "react";
import {
  CashCoin,
  ChatLeftDotsFill,
  LockFill,
  WalletFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import OfficeImg from "../../Assets/office.jpg";
import routes from "../../Helper/routes";

const AboutUs = () => {
  return (
    <>
      <section className="about">
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
      <section className="section shadow-md pt-4 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="iconBox">
                <LockFill size={40} />
                <h5>Secure Payments</h5>
                <p>Moving your card details to a much more secured place.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="iconBox">
                <WalletFill size={40} />
                <h5>Trust pay</h5>
                <p>100% Payment Protection. Easy Return Policy.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="iconBox">
                <CashCoin size={40} />
                <h5>Refer &amp; Earn</h5>
                <p>Invite a friend to sign up and earn up to $125.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="iconBox">
                <ChatLeftDotsFill size={40} />
                <h5>24/7 Support</h5>
                <p>
                  We're here to help. Have a query and need help ?{" "}
                  <Link to={routes.contactUs}>Click here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
