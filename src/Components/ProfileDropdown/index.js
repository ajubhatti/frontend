import React from "react";
import { ArrowCounterclockwise, Gear } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import routes from "../../Helper/routes";

const ProfileDropdown = (props) => {
  return (
    <>
      <li className="dropdown-header bg-offwhite">
        <div>
          <h5 className="hidden-xs m-b-0 text-primary text-ellipsis">
            {props?.userName}
          </h5>
          <div className="small text-muted">
            <span>Wallet Balance {props?.balance}</span>
          </div>
        </div>
      </li>
      <li className="divider"></li>
      <li className="nav__dropdown-menu-items">
        <Link to={routes.profileDashboard}>
          <span>Dashboard</span>
        </Link>
      </li>
      <li className="nav__dropdown-menu-items">
        <a href="#">
          <Gear />
          <span>Settings</span>
        </a>
      </li>
      <li className="nav__dropdown-menu-items">
        <a href="#">
          <ArrowCounterclockwise />
          <span>Logout</span>
        </a>
      </li>
    </>
  );
};

export default ProfileDropdown;
