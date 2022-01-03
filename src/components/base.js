import React from "react";
import { Link } from "react-router-dom";
import HeaderTop from "./app/header-top";
import Header from "./app/header";
import Footer from "./app/footer";
import FooterCallToAction from "./app/footer-call-to-action";

const Base = ({ children, title }) => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Base;
