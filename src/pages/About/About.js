import React, { useRef } from "react";
import "./About.css";
import { useIsIntersectingAnimation } from "../../hooks";
import { SkillsPresenter } from "../../components";

const About = () => {
  const styleSectionRef = useRef(null);
  const styleSectionRef2 = useRef(null);
  useIsIntersectingAnimation({
    mainRef: styleSectionRef,
    allRefs: [styleSectionRef, styleSectionRef2],
    classToAdd: "fade-in-about",
  });
  return (
    <div className="about-container">
      <div className="about-heading">
        <p>
          Hi, I'm Manish. <br /> I build frontend systems that perform.
        </p>
      </div>
      <div className="horizontal-line" />
      <div className="about-me">
        <h1>About</h1>
        <h2>
          I am a results-driven Frontend Engineer with over 4 years of
          experience building scalable, high-performance, and enterprise-grade
          web and mobile applications using React, Next.js, React Native,
          TypeScript, and modern frontend technologies.
        </h2>
        <h3>
          I specialize in designing real-time, low-latency systems,
          interactive dashboards, data visualizations, and performance-driven
          frontend architectures with a strong focus on maintainability and user
          experience.
        </h3>
        <h3>
          My experience includes developing reusable component systems,
          internal platforms, live inference applications, and workflow
          automation that significantly improves development efficiency. I
          thrive in cross-functional environments, combining strong
          problem-solving ability with technical depth to deliver secure,
          responsive, and user-centric solutions that create measurable
          business impact.
        </h3>
      </div>
      <div ref={styleSectionRef} className="about-skills">
        <h1>Skills</h1>
        <SkillsPresenter />
      </div>
      <div ref={styleSectionRef2} className="about-skills">
        <h1>More: </h1>
        <h2>
          <ul>
            <li>Proficient in React JS, JavaScript, Typescript and ES6+</li>
            <li>
              Experience with state management using Redux, Context API and
              Apollo Client GraphQL
            </li>
            <li>
              Understanding of design systems within React (Ant design,
              MaterialUi)
            </li>
            <li>
              Understanding of UI libraries and UX flows through collaborations
            </li>
            <li>
              Pioneered <strong>AI-driven developer workflows</strong>, leveraging Agentic AI platforms and LLMs to accelerate feature shipping
            </li>
            <li>
              Expertise in integrating <strong>Model Context Protocol (MCP)</strong> environments to automate code generation, UI rendering pipelines, and asset optimization
            </li>
            <li>
              Proven track record of driving <strong>efficiency improvements</strong>, reducing manual UI turnaround times by up to 80% using custom developer tools
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
    </div>
  );
};

export default About;
