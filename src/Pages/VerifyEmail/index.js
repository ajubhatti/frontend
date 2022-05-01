import React from "react";
import VectorImg from "../../Assets/vector.png";

const VerifyEmail = (props) => {
  return (
    <section className="banner login-registration">
      <div className="vector-img">
        <img src={VectorImg} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="content-box">
              <h2>Verify Account</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sedo
              </p>
            </div>
            {/* content here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyEmail;
