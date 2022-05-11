import React from "react";
import BarChart from "../../Components/Charts/BarChart";

const Balance = () => {
  return (
    <div className="card mb-7 mb-lg-0">
      <div className="card-body pt-4 pb-5 px-5 mb-3 mb-md-0">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="mb-0">Balance</h6>
          <div className="position-relative"></div>
        </div>
        <hr className="mt-3 mb-4" />
        <div class="row align-items-center mb-4">
          <div class="col-6 u-ver-divider">
            <label class="d-block small text-muted mb-0">Available:</label>
            <span class="font-weight-medium">$45.99</span>
          </div>

          <div class="col-6">
            <label class="d-block small text-muted mb-0">Pending:</label>
            <span class="font-weight-medium">$0.00</span>
          </div>
        </div>
        <BarChart />
      </div>
    </div>
  );
};

export default Balance;
