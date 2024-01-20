import React from "react";
import Subfooter from "./subfooter";
import MainFooter from "./mainfooter";

const Footer = () => {
  return (
    <footer className="footer">
      <MainFooter />
      <Subfooter text="©Candleaf All Rights Reserved." />
    </footer>
  );
};

export default Footer;
