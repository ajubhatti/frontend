import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="about">
        <div className="container space-2 space-top-md-5 space-top-lg-4">
          <div className="w-lg-80 text-center mx-lg-auto">
            <div className="mb-11">
              <h1 className="display-4 font-weight-semi-bold">About Us</h1>
              <p className="lead font-weight-normal">
                We're on a mission to simplify cloud computing so developers and
                their teams can spend more time building software that changes
                the world.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="w-lg-65 mx-lg-auto">
              <hr className="my-0" />
            </div>
          </div>
          <div className="container space-2 space-lg-3">
            <div className="row justify-content-lg-between">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h2 className="font-weight-semi-bold">
                  Tools should adapt to the user, not the other way around.
                </h2>
              </div>
              <div className="col-lg-6">
                <p>
                  Since 2007, we have helped 25 companies launch over 1k
                  incredible products. We believe the best digital solutions are
                  built at the intersection of business strategy, available
                  technology, and real user's needs.
                </p>
                <p>
                  Things can get really complex, really quickly, and a
                  pragmatic, synthetic and clear vision is essential to be able
                  to create something that, after all, is meant to be used.
                  Emotions also have a big role to play and developing clear and
                  beautiful aesthetics is of the utmost importance to create a
                  pleasant environment in which the user actually enjoys the
                  time spent in it. In the end, we're all suckers for beautiful
                  things that just work
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="w-lg-65 mx-lg-auto">
              <hr className="my-0" />
            </div>
          </div>
          <div className="container space-top-1 space-bottom-2 space-bottom-lg-3">
            <div className="row justify-content-lg-center">
              <div className="col-sm-4 col-lg-3 mb-7 mb-sm-0">
                <div className="text-center">
                  <span className="d-block h2 font-weight-semi-bold text-uppercase mb-0">
                    17
                  </span>
                  <span className="text-secondary">years in business</span>
                </div>
              </div>

              <div className="col-sm-4 col-lg-3 mb-7 mb-sm-0">
                <div className="text-center">
                  <span className="d-block h2 font-weight-semi-bold text-uppercase mb-0">
                    1k+
                  </span>
                  <span className="text-secondary">products launched</span>
                </div>
              </div>

              <div className="col-sm-4 col-lg-3">
                <div className="text-center">
                  <span className="d-block h2 font-weight-semi-bold text-uppercase mb-0">
                    53%
                  </span>
                  <span className="text-secondary">remote employees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
