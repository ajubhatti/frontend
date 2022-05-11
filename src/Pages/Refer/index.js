import React from "react";
import { FileEarmarkFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import routes from "../../Helper/routes";
import "./Refer.css";
import Analysis from "../../Assets/analysis.svg";
import InTheOffice from "../../Assets/inTheOffice.svg";
import MakeItRain from "../../Assets/makeItRain.svg";

const Refer = () => {
  return (
    <div className="bg-light">
      <section className="contact">
        <div className="container space-2">
          <div className="row justify-content-md-between">
            <div className="col-md-6 mb-7 mb-md-0">
              <h3>Share a link and earn a bonus</h3>
              <p>
                Get a friend to start working with Front today and earn bonuses
                when they complete their registration.
                <Link to={routes.terms}> Read the terms</Link>
              </p>
              <div className="form-group">
                <div className="form-with-icon">
                  <input
                    type="text"
                    className="form-control"
                    value={"https://google.com"}
                  />
                  <div
                    className="form-icon"
                    onClick={() => {
                      navigator.clipboard.writeText("https://google.com");
                    }}
                  >
                    <FileEarmarkFill />
                  </div>
                </div>
                <small className="text-muted">
                  Copy or share your referral link with friends
                </small>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="bg-primary shadow-primary-lg rounded pt-4 pb-5 px-5">
                <div className="d-flex align-items-center">
                  <h4 className="h6 text-white mb-0">Referrals</h4>
                </div>
                <hr className="opacity-md mt-3 mb-4" />
                <div className="py-2">
                  <div className="row">
                    <div className="col-6">
                      <div className="mb-3">
                        <span className="d-block text-white-70 text-white">
                          Overall:
                        </span>
                        <span className="align-top text-white">$</span>
                        <span className="text-white font-size-3 font-weight-medium text-lh-sm">
                          1,350
                        </span>
                      </div>
                      <span className="text-white text-white-70">Monthly:</span>
                      <span className="text-white font-weight-medium">
                        $425
                      </span>
                    </div>

                    <div className="col-6 align-self-end"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section shadow-md pt-4 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="iconBox">
                <img src={Analysis} alt="analysis"></img>
                <h5>Refer friends</h5>
                <p>
                  Send referrals to your friends either here or in your app.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="iconBox">
                <img src={InTheOffice} alt="InTheOffice"></img>
                <h5>Follow along</h5>
                <p>
                  Follow your friend's progress and send encouraging messages
                  along the way.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="iconBox">
                <img src={MakeItRain} alt="MakeItRain"></img>
                <h5>Get paid</h5>
                <p>
                  When your friend starts building, you'll get paid after their
                  first task completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refer;
