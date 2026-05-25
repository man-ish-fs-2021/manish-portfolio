import React from "react";
import "./Work.css";

import {
  WorkExperienceCard,
  WorkExp,
  CarouselInfiniteLoop,
  ProjectPresenter,
} from "../../components";
import { projectsMap } from "../../constants";
import { certificateCarousel } from "../../constants";

const switchOnDetails = [
  "Built low-latency vision inspection interfaces powered by socket-based camera streaming and live inference pipelines.",
  "Worked with FastAPI and OpenCV-powered services to support image processing, inference workflows, and frontend integration.",
  "Created interactive dashboards, data visualizations, and Canvas-based image layering tools for deeper internal analysis workflows.",
  "Developed internal productivity tools that streamlined engineering and business operations across teams.",
  "Designed scalable RBAC and ABAC permission models for secure, flexible access management.",
  "Built React Native features for mobile video capture, live streaming, and real-time inference result visualization.",
  "Introduced an MCP-powered Figma-to-development workflow that reduced UI implementation turnaround by approximately 80%.",
  "Used MCP integrations and Chrome DevTools automation to optimize frontend assets and reduce application build size by approximately 80%.",
  "Led the migration to Electron, enabling cross-platform desktop support while preserving a scalable frontend architecture.",
  "Improved responsiveness for large datasets and touch-first interfaces through state management and rendering optimizations.",
];

const analyticEdgeDetails = [
  "Built reusable UI components and analytics dashboards with React and TypeScript for large-scale data products.",
  "Improved development efficiency by creating shared patterns and reusable components across product modules.",
  "Implemented performance optimizations for data-heavy analytics screens, improving rendering stability and user experience.",
  "Developed secure login, tenant management, and user administration flows with RBAC-based access control.",
  "Integrated GraphQL APIs with Apollo Client for efficient querying, mutations, and frontend data management.",
  "Translated complex marketing and analytics data into clear visual experiences using charting and dashboard interfaces.",
  "Collaborated closely with backend engineers, UI/UX designers, and product teams to ship stable, production-ready UI.",
  "Mentored and delegated tasks to junior developers while helping maintain frontend code quality standards.",
  "Contributed to in-house component library work with Storybook during the internship phase.",
];

const switchOnTechnologies = [
  "React",
  "TypeScript",
  "Python",
  "React Native",
  "WebSockets",
  "Canvas",
  "FastAPI",
  "OpenCV",
  "Electron",
  "MCP",
  "RBAC/ABAC",
];

const analyticEdgeTechnologies = [
  "React",
  "TypeScript",
  "GraphQL",
  "Apollo Client",
  "Storybook",
  "Highcharts",
  "RBAC",
  "SASS",
];

const Work = () => {
  return (
    <div className="page-inner-container work-page-main-container">
      <div className="work-previous">
        <h1 className="work-heading">Work experience:</h1>
        <div className="hr-line-70" />
        <div className="work-experience-list">
          <WorkExperienceCard
            modalTitle="SwitchOn | Jan 2024 - Present"
            modalMeta="Frontend Engineer (React)"
            modalLink="https://switchon.io/"
            technologies={switchOnTechnologies}
            detailItems={switchOnDetails}
          >
            <WorkExp
              name="SwitchOn"
              gist="Building real-time vision inspection products across web, mobile, and desktop with React, TypeScript, live camera streaming, Canvas tooling, permission systems, and performance-focused frontend architecture."
              from="Jan 2024"
              role="Frontend Engineer (React)"
              to="Present"
              key="1"
            />
          </WorkExperienceCard>
          <WorkExperienceCard
            modalTitle="Analytic Edge | July 2021 - Aug 2023"
            modalMeta="Front End Engineer"
            modalLink="https://analytic-edge.com/"
            technologies={analyticEdgeTechnologies}
            detailItems={analyticEdgeDetails}
          >
            <WorkExp
              name="Analytic Edge"
              gist="Contributed across analytics products and internal platforms using React, TypeScript, GraphQL, reusable UI components, performance optimization, secure access flows, and data visualization."
              from="July 2021"
              role="Front End Engineer"
              to="Aug 2023"
              key="2"
            />
          </WorkExperienceCard>
        </div>
      </div>
      <div className="work-certificates looping-carousel">
        <h1 className="work-heading">Certificates:</h1>
        <div className="hr-line-70" />
        <CarouselInfiniteLoop renderList={certificateCarousel} />
      </div>
      <div className="work-projects">
        <h1 className="work-heading">Projects:</h1>
        <div className="hr-line-70" />
        <ProjectPresenter projectsMap={projectsMap} />
      </div>
    </div>
  );
};

export default Work;
