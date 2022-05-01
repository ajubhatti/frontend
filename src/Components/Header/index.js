import React from "react";
import "./Header.css";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = (props) => {
  return (
    <>
      <HeaderTop {...props} />
      <HeaderBottom {...props} />
    </>
  );
};

export default Header;
