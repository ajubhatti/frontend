import React from "react";
import "./Footer.css";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <footer className="footer">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
