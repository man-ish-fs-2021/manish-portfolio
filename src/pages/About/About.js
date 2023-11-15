import React, { useRef } from "react";
import "./About.css";
import { useIsIntersectingAnimation } from "../../hooks";
import { AnchorStyled } from "../../components";
import Resume from "../../assets/Resume-Manish Chandra.pdf";

const About = () => {
  const styleSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  useIsIntersectingAnimation({
    mainRef: styleSectionRef,
    allRefs: [styleSectionRef, aboutSectionRef],
    classToAdd: "fade-in-about",
  });
  return (
    <div className="about-container">
      <div className="about-heading">
        <p>
          Hi I am Manish. <br /> I am a React.js developer.
        </p>
      </div>
      <div className="horizontal-line" />
      <div className="about-me">
        <h1>About</h1>
        <h2>
          Hello! I'm Manish Chandra, a passionate React JS developer with 2+
          years of hands-on experience in creating dynamic and user-friendly web
          applications. My journey in the world of web development began with a
          curiosity-driven desire to build interactive and responsive websites
          that provide meaningful user experiences.
        </h2>
        <h3>
          Web development is an ever-evolving field, and I'm committed to
          staying up-to-date with the latest trends and technologies. I enjoy
          exploring new libraries and tools that can enhance my development
          skills and make my projects more efficient and robust. Continuous
          learning is a core part of my journey as a developer.
        </h3>
        <h3>
          What excites me most about web development is the opportunity to solve
          real-world problems through creative and elegant solutions. I'm driven
          by the desire to create web applications that not only meet the
          functional requirements but also provide an exceptional user
          experience. I thrive on challenges and love to think critically to
          overcome obstacles.
        </h3>
      </div>
      <div ref={styleSectionRef} className="about-skills">
        <h1>Skills</h1>
        <h2>
          <ul>
            <li>Proficient in React JS, JavaScript, Typescript and ES6+</li>
            <li>
              Experience with state management using Redux, Context API and
              Apollo Client GraphQL
            </li>
            <li>Understanding of design systems within React.</li>
            <li>
              Understanding of UI libraries and UX flows through collaborations
            </li>
            <li>
              Knowledge of security measures like RBAC, fine grain permission
              control and JWT tokens.
            </li>
            <li>
              Knowledge of modern front-end tools and libraries (Webpack, Babel,
              Axios, etc.)
            </li>
            <li>Responsive web design and CSS frameworks (SASS)</li>
            <li>Strong understanding of RESTful and GraphQL APIs</li>
            <li>
              Unit testing and debugging with tools like Jest and React Testing
              Library
            </li>
            <li>
              Git version control and collaboration using platforms like GitHub
            </li>
            <li>
              Agile development methodologies and collaborative problem-solving
            </li>
          </ul>
        </h2>
      </div>
      <div ref={aboutSectionRef} className="about-resume">
        <h2>
          <AnchorStyled
            color="#c57876"
            hoverColor="rgba(118, 195, 197, 1)"
            href={Resume}
            target="_blank"
          >
            My resume
          </AnchorStyled>
        </h2>
      </div>
    </div>
  );
};

export default About;
