import React, { useState } from "react";
// import BgImg from "../../assets/dp.JPG";
import "./Home.css";
import { TextShiftOnHover, AnchorStyled, MobileText } from "../../components";

// home page should consists of component which can be reusable for the text which is being replaced.
// use a render props design pattern for this.
// the image should be placed on the right.
const Home = () => {
  const [tapped, setTapped] = useState(false);
  const handleMobileClick = () => {
    setTapped((prev) => !prev);
  };
  return (
    <div className="main-wrapper-pc">
      {/* need to add a fade in animation effect. */}
      <div className="text-main">
        <TextShiftOnHover
          main="Hello"
          after={
            <AnchorStyled color="white" href="#/about" hoverColor="white">
              About
            </AnchorStyled>
          }
        />
        <TextShiftOnHover
          main="I am"
          color="#76C3C5"
          after={
            <AnchorStyled href="#/work" hoverColor="#76C3C5">
              Work
            </AnchorStyled>
          }
        />
        <TextShiftOnHover
          main="Manish"
          color="#76C3C5"
          after={
            <AnchorStyled href="#/contact" hoverColor="#76C3C5">
              Contact
            </AnchorStyled>
          }
        />
      </div>
      <div className="main-bg-img">
        {/* <img src={BgImg} alt="bg img" /> */}
      </div>
      <div onClick={handleMobileClick} className="text-main-mobile">
        <MobileText
          main="Hello"
          fontSize="3rem"
          after={
            <AnchorStyled color="white" href="#/about" hoverColor="white">
              About
            </AnchorStyled>
          }
          tapped={tapped}
        />
        <MobileText
          main="I am"
          color="#76C3C5"
          fontSize="3rem"
          after={
            <AnchorStyled color="#76C3C5" href="#/work" hoverColor="white">
              Work
            </AnchorStyled>
          }
          tapped={tapped}
        />
        <MobileText
          main="Manish"
          color="#76C3C5"
          fontSize="3rem"
          after={
            <AnchorStyled color="#76C3C5" href="#/contact" hoverColor="white">
              Contact
            </AnchorStyled>
          }
          tapped={tapped}
        />
      </div>
      <div className="tap-anywhere-class">
        <div>
          <p>Tap anywhere</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
