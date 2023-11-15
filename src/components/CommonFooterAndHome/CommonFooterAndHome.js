import React from "react";
import "./CommonFooterAndHome.css";
import {
  Footer,
  TextShiftOnHover,
  AnchorStyled,
  MobileText,
} from "../../components";
// import Home from "../../assets/home.svg";

const CommonFooterAndHome = ({ children }) => {
  return (
    <div className="common-container">
      <div className="home-icon ">
        <TextShiftOnHover
          main="Home"
          after={
            <AnchorStyled href="/manish-portfolio/#/" hoverColor="#76C3C5">
              Home
            </AnchorStyled>
          }
          fontSize="12px"
        />
      </div>
      <div className="home-icon hide-mobile">
        <MobileText
          main={<a href="/manish-portfolio/#/">Home</a>}
          after={<a href="/manish-portfolio/#/">Home</a>}
          fontSize="12px"
        />
      </div>

      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonFooterAndHome;
