import React from "react";
import RoundChart from "../../Components/Charts/RoundChart";

const Deposits = () => {
  return (
    <div className="card mb-7 mb-lg-0">
      <div className="card-body pt-4 pb-5 px-5 mb-3 mb-md-0">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="mb-0">Deposits</h6>
          <div className="position-relative"></div>
        </div>
        <hr className="mt-3 mb-4" />
        <div className="row mb-5">
          <div className="col-sm-6 mb-4 mb-sm-0">
            <span className="align-top">$</span>
            <span className="font-size-3 font-weight-medium text-lh-sm">
              50,102
            </span>
            <div className="mb-1">
              <span className="text-secondary font-size-1">Deposit:</span>
              <span className="font-weight-medium font-size-1">$1,050</span>
            </div>
          </div>
          <div className="col-sm-6 align-self-end">
            <RoundChart strokeWidth="4" sqSize="100" percentage={25} />
          </div>
        </div>
        <button className="btn btn-block btn-sm btn-primary transition-3d-hover">
          Add Funds
        </button>
      </div>
      <div className="card-footer p-5">
        <div className="row align-items-center">
          <div className="col-6 u-ver-divider">
            <label className="small text-muted">Goal:</label>
            <small className="font-weight-medium">$100k</small>
            <div className="js-hr-progress progress" style={{ height: "4px" }}>
              <div
                className="js-hr-progress-bar progress-bar"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>

          <div className="col-6">
            <label className="small text-muted">Duration:</label>
            <small className="font-weight-medium">6 months</small>
            <div className="js-hr-progress progress" style={{ height: "4px" }}>
              <div
                className="js-hr-progress-bar progress-bar bg-success"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposits;
