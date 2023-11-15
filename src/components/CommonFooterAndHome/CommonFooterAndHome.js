import React from "react";
import "./CommonFooterAndHome.css";
import { Footer, TextShiftOnHover, AnchorStyled } from "../../components";
// import Home from "../../assets/home.svg";

const CommonFooterAndHome = ({ children }) => {
  return (
    <div className="common-container">
      <div className="home-icon">
        <TextShiftOnHover
          main="Home"
          after={
            <AnchorStyled href="/" hoverColor="#76C3C5">
              Manish.Portfolio
            </AnchorStyled>
          }
          fontSize="12px"
        />
      </div>
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonFooterAndHome;
