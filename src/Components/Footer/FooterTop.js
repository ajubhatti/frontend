import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../../Helper/routes";
import Widget from "../Widget";

const FooterTop = () => {
  return (
    <div className="foo-top">
      <Container>
        <Row>
          <div className="col-md-3 col-sm-6">
            <Widget title="About badipay">
              <div className="widget-content">
                <p>
                  Maecenas condimentum vitae lectus nec tristique sed quis est
                  ac est elementum.
                </p>
              </div>
            </Widget>
          </div>
          <div className="col-md-3 col-sm-6">
            <Widget title="Features">
              <ul>
                <li>All Mobile/DTH Operators available</li>
                <li>Instant recharge</li>
                <li>Recharge by SMS or web</li>
                <li>One Account for all recharge services</li>
                <li>Profitable Margin</li>
              </ul>
            </Widget>
          </div>
          <div className="col-md-3 col-sm-6">
            <Widget title="Features">
              <ul>
                <li>Recharge any Mobile Phone</li>
                <li>Top-Up All DTH Services</li>
                <li>Data Card Recharge</li>
                <li>Postpaid bill payment</li>
                <li>Single Wallet multi recharge</li>
              </ul>
            </Widget>
          </div>
          <div className="col-md-3 col-sm-6">
            <Widget title="Features">
              <ul>
                <li>
                  <Link to={routes.contactUs}>contact us</Link>
                </li>
                <li>
                  <Link to={routes.home}>about us</Link>
                </li>
                <li>
                  <Link to={routes.home}>payment</Link>
                </li>
                <li>
                  <Link to={routes.policy}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={routes.terms}>Terms Condition</Link>
                </li>
              </ul>
            </Widget>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default FooterTop;
