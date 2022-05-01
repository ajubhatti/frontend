import React from "react";
import { Container, Row } from "react-bootstrap";
import americanImg from "../../Assets/american.png";
import discoverImg from "../../Assets/discover.png";
import mastercardImg from "../../Assets/mastercard.png";
import paypalImg from "../../Assets/paypal.png";
import visaImg from "../../Assets/visa.png";
import { Link } from "react-router-dom";
import routes from "../../Helper/routes";
import { HeartFill } from "react-bootstrap-icons";

const FooterBottom = () => {
  return (
    <div className="foo-btm">
      <Container>
        <Row>
          <div className="col-md-6">
            <p className="copyright text-left el-sm-center">
              Copyright © {new Date().getFullYear()} <HeartFill color="red" />{" "}
              <Link to={routes.home}>badipay.in</Link>. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="payments-types text-right  el-sm-center">
              <li>
                <img src={visaImg} alt="visa" />
              </li>
              <li>
                <img src={discoverImg} alt="discover" />
              </li>
              <li>
                <img src={paypalImg} alt="paypal" />
              </li>
              <li>
                <img src={americanImg} alt="american express" />
              </li>
              <li>
                <img src={mastercardImg} alt="Mastercard" />
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default FooterBottom;
