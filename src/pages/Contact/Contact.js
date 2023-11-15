import React, { useState, useRef } from "react";
import { TextShiftOnHover, AnchorStyled } from "../../components";
import { useIsIntersectingAnimation } from "../../hooks";
import "./Contact.css";
const REACT_APP_EMAIL = "manishchandra58@gmail.com";

const Contact = () => {
  const [textCopied, setTextCopied] = useState(false);
  const contactDetail = useRef(null);
  const contactItems = useRef(null);
  const handleContactDetailsIntoFocus = () => {
    contactDetail.current?.scrollIntoView({ behavior: "smooth" });
  };
  useIsIntersectingAnimation({
    mainRef: contactDetail,
    allRefs: [contactDetail, contactItems],
    classToAdd: "fade-in-about",
    options: {
      rootMargin: "-100px",
    },
  });
  return (
    <div className="page-inner-container contact-main-container">
      <div className="contact-heading">
        <p>Let's Collaborate and Create Something Great!</p>
        <div
          onClick={handleContactDetailsIntoFocus}
          className="arrow down fade-in-about"
        />
      </div>
      <div className="hr-line-70" />
      <div ref={contactDetail} className="contact-details">
        <h1>Contact</h1>
        <h2>
          I'm on the lookout for exciting full-time opportunities where I can
          bring my expertise to the table. Whether it's building user-friendly
          interfaces, optimizing performance, or tackling complex challenges,
          I'm dedicated to delivering high-quality results. Let's discuss how I
          can contribute to your team's success.
        </h2>
        <h2>
          Feel free to reach out to me or connect with me on LinkedIn at the
          links given below. I'm eager to embark on new projects and join a
          dynamic team where I can further grow my skills and make a real
          impact. Looking forward to connecting with you!
        </h2>
      </div>
      <div ref={contactItems} className="contact-items">
        <TextShiftOnHover
          main="Email"
          color="#c57876"
          after={
            <AnchorStyled
              target=""
              color="white"
              // href="/about"
              hoverColor="#76C3C5"
              onClick={() => {
                navigator.clipboard.writeText(REACT_APP_EMAIL).then(
                  () => {
                    // invoked if the data is copied
                    // alert("Copied successfully");
                    setTextCopied(true);
                  },
                  () => {
                    // handle data copy error
                    alert("Copying failed");
                  }
                );
                setTimeout(() => {
                  setTextCopied(false);
                }, 3000);
              }}
            >
              {textCopied ? "Email Copied!" : "Click me!"}
            </AnchorStyled>
          }
          fontSize="12px"
        />
        <TextShiftOnHover
          main="LinkedIn"
          color="#c57876"
          after={
            <AnchorStyled
              href="https://www.linkedin.com/in/manish-chandra-320b2420b/"
              hoverColor="#76C3C5"
              target="_blank"
            >
              LinkedIn
            </AnchorStyled>
          }
          fontSize="12px"
        />
        <TextShiftOnHover
          main="Github"
          color="#c57876"
          after={
            <AnchorStyled
              href="https://github.com/man-ish-fs-2021"
              hoverColor="#76C3C5"
              target="_blank"
            >
              Github
            </AnchorStyled>
          }
          fontSize="12px"
        />
      </div>
    </div>
  );
};

export default Contact;
