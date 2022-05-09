import React, { useState } from "react";
import { Justify, Person } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.jpg";
import routes from "../../Helper/routes";
import ProfileDropdown from "../ProfileDropdown";

const HeaderBottom = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div
        className="stand-sticky"
        style={{ height: "34px", display: "none" }}
      ></div>
      <nav className="core-nav nav-core-sticky">
        <div className="nav-container">
          <div className="nav-header right">
            <Link to={routes.home} className="brand">
              <img src={logo} alt="logo" />
              <span></span>
            </Link>
            <button className="toggle-bar core-nav-toggle">
              <Justify />
            </button>
          </div>
          <div className="wrap-core-nav-list right">
            <ul className="menu core-nav-list">
              <li>
                <Link to={routes.home}>Home</Link>
              </li>
              <li>
                <Link to={routes.home}>Service</Link>
              </li>
              <li>
                <Link to={routes.home}>Wallet</Link>
              </li>
              <li>
                <Link to={routes.home}>Report</Link>
              </li>
              <li>
                <Link to={routes.home}>Business Opportunity</Link>
              </li>
              <li>
                <Link to={routes.home}>Download</Link>
              </li>
              <li>
                <Link to={routes.home}>Support</Link>
              </li>
              <li>
                <Link to={routes.home}>Contact US</Link>
              </li>
              <li>
                <Link to={routes.refer}>Referral</Link>
              </li>
              {props.jwtToken && (
                <li
                  className={`dropdown profile ${open ? "open" : ""}`}
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <div className="profile-btn">
                    <Person />
                  </div>
                  <ul className="dropdown-menu left-auto profile-drop">
                    <ProfileDropdown {...props} />
                  </ul>
                </li>
              )}
            </ul>
          </div>
          {props.jwtToken && (
            <ul className="text-right profile-rcv">
              <li className="dropdown profile">
                <div className="profile-btn">
                  <Person />
                </div>
                <ul className="dropdown-menu left-auto profile-drop">
                  <ProfileDropdown {...props} />
                </ul>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <div className={`dropdown-overlay ${open ? "open-dropdown" : ""}`}></div>
    </header>
  );
};

export default HeaderBottom;
