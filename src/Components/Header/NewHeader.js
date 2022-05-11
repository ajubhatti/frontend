import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../Helper/routes";
import "./style.css";
import Logo from "../../Assets/logo.jpg";

const NewHeader = () => {
  const [open, setOpen] = useState(false);
  const Links = [
    { title: "Home", link: routes.home },
    { title: "Service", link: routes.home },
    { title: "Support", link: routes.home },
    { title: "About Us", link: routes.aboutUs },
    { title: "Contact US", link: routes.contactUs },
    { title: "Referral", link: routes.refer },
    { title: "My Profile", link: routes.profileDashboard },
  ];
  return (
    <header className="u-header">
      <div className="u-header__section">
        <div className="container">
          <nav className="navbar navbar-expand-md u-header__navbar u-header__navbar--no-space hs-menu-initialized hs-menu-horizontal">
            <Link
              to={routes.home}
              className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center"
            >
              <img src={Logo} alt="" />
            </Link>
            <button
              className={`navbar-toggler btn u-hamburger ${
                open ? "" : "collapsed"
              }`}
              onClick={() => setOpen(!open)}
            >
              <span className="u-hamburger__box">
                <span className="u-hamburger__inner"></span>
              </span>
            </button>
            <div
              className={`navbar-collapse u-header__navbar-collapse ${
                open ? "" : "collapse show"
              }`}
            >
              <ul className="navbar-nav u-header__navbar-nav">
                {Links.map((item) => {
                  return (
                    <li
                      className="nav-item hs-has-mega-menu u-header__nav-item"
                      key={item.title}
                    >
                      <Link
                        to={item.link}
                        className="nav-link u-header__nav-link u-header__nav-link-toggle"
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NewHeader;