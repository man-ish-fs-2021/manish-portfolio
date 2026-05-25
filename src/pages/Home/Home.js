import React from "react";
import "./Home.css";
import { AnchorStyled, Footer } from "../../components";

const Home = () => {
  return (
    <div className="main-wrapper-pc">
      <div className="text-main">
        <div className="home-hero-shell">
          <div className="home-copy">
            <div className="home-copy-flow">
              <div className="main-bg-img" aria-hidden="true"></div>
              <p className="home-eyebrow">Frontend Engineer</p>
              <h1 className="home-title">Manish Chandra</h1>
              <p className="home-standout">
                Frontend engineer crafting high-performance, intuitive
                interfaces for modern web, mobile, and desktop products.
              </p>
              <p className="home-support">
                I design and ship React-driven experiences with a strong focus
                on performance, scalability, and clear user workflows, turning
                complex requirements into polished and reliable interfaces.
              </p>
            </div>
            <div className="home-signal-row">
              <span>React • TypeScript • Next.js</span>
              <span>Web • Mobile • Desktop</span>
              <span>High-Performance UI</span>
            </div>
            <div className="home-link-row">
              <AnchorStyled color="white" href="#/about" hoverColor="white">
                About
              </AnchorStyled>
              <AnchorStyled color="var(--color-primary)" href="#/work" hoverColor="var(--color-primary)">
                Work
              </AnchorStyled>
              <AnchorStyled
                color="var(--color-tertiary)"
                href="#/contact"
                hoverColor="var(--color-tertiary)"
              >
                Contact
              </AnchorStyled>
            </div>
          </div>
        </div>
      </div>
      <div className="text-main-mobile">
        <div className="home-copy home-copy-mobile">
          <p className="home-eyebrow">Frontend Engineer</p>
          <h1 className="home-title">Manish Chandra</h1>
          <p className="home-standout">
            Frontend engineer crafting high-performance, intuitive interfaces
            for modern web, mobile, and desktop products.
          </p>
          <p className="home-support">
            React-driven product work focused on performance, scalability, and
            dependable user experience across platforms.
          </p>
        </div>
        <div className="home-signal-row home-signal-row-mobile">
          <span>React • TypeScript • Next.js</span>
          <span>Web • Mobile • Desktop</span>
          <span>High-Performance UI</span>
        </div>
        <div className="home-mobile-links">
          <AnchorStyled color="white" href="#/about" hoverColor="white">
            About
          </AnchorStyled>
          <AnchorStyled color="var(--color-primary)" href="#/work" hoverColor="var(--color-primary)">
            Work
          </AnchorStyled>
          <AnchorStyled color="var(--color-tertiary)" href="#/contact" hoverColor="var(--color-tertiary)">
            Contact
          </AnchorStyled>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
