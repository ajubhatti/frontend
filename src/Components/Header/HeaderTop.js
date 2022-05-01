import React from "react";
import { Envelope, Phone } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import routes from "../../Helper/routes";

const HeaderTop = (props) => {
  return (
    <div className="header-top-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              <p>
                <Phone />
                <a href="tel:305-449-3301">305-449-3301</a>
              </p>
              <p>
                <Envelope />
                <a href="mailto:office@mail.com">office@mail.com</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 text-md-right">
            {props.jwtToken ? (
              ""
            ) : (
              <ul className="login-area">
                <li>
                  <Link to={routes.login}>Login</Link>
                </li>
                <li>
                  <Link to={routes.register}>Register</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
