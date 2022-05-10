import React from "react";
import { Coin, CurrencyDollar, CurrencyExchange } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import ServiceCard from "../../Components/ServiceCard";
import routes from "../../Helper/routes";
import { services } from "../../Shared/constant";

const ProfileDashboard = () => {
  const serviceData =
    services.length > 0 &&
    services.map((service) => {
      return <ServiceCard key={service.id} {...service} />;
    });

  return (
    <section className="dashboard-section">
      <div className="container">
        <div className="card-deck d-block d-lg-flex card-lg-gutters-3 mb-5">
          <div className="card mb-3 mb-lg-0">
            <div className="card-body p-5">
              <div className="media align-items-center">
                <span className="btn-lg btn-icon btn-soft-primary rounded-circle mr-4">
                  <CurrencyDollar />
                </span>
                <div className="media-body">
                  <span className="d-block font-size-3">$45.99</span>
                  <h2 className="h6 text-secondary font-weight-normal mb-0">
                    Available balance
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 mb-lg-0">
            <div className="card-body p-5">
              <div className="media align-items-center">
                <span className="btn-lg btn-icon btn-soft-success rounded-circle mr-4">
                  <Coin />
                </span>
                <div className="media-body">
                  <span className="d-block font-size-3">$1.32</span>
                  <h3 className="h6 text-secondary font-weight-normal mb-0">
                    Reward balance
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body p-5">
              <div className="media align-items-center">
                <span className="btn-lg btn-icon btn-soft-warning rounded-circle mr-4">
                  <CurrencyExchange />
                </span>
                <div className="media-body">
                  <span className="d-block font-size-3">$0.00</span>
                  <h3 className="h6 text-secondary font-weight-normal mb-0">
                    Pending balance
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6>Your earning</h6>
          <Link to={routes.home} className="link-muted">
            View All
          </Link>
        </div>
        <div className="mb-5">
          <div className="card-deck d-block d-lg-flex card-lg-gutters-3">
            {serviceData?.length > 0 && serviceData}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDashboard;
