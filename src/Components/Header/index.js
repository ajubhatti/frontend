import React from "react";
import "./Header.css";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
import NewHeader from "./NewHeader";

const Header = (props) => {
  return (
    <>
      {/* <HeaderTop {...props} /> */}
      {/* <HeaderBottom {...props} /> */}
      <NewHeader />
    </>
  );
};

export default Header;
