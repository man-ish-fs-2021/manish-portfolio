import React, { useState } from "react";
import "./Footer.css";
import { Icon } from "../";
import Mail from "../../assets/mail.svg";
import li from "../../assets/linkedin.svg";
import gi from "../../assets/github.svg";
import file from "../../assets/file-text.svg";
import Resume from "../../assets/Resume-Manish Chandra.pdf";
import { Alert } from "../";
// import { REACT_APP_EMAIL } from "../../../../.env";

const REACT_APP_EMAIL = "manishchandra58@gmail.com";
const Footer = () => {
  const [textCopied, setTextCopied] = useState(false);
  return (
    <div className="footer">
      <Icon
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
        icon={
          <>
            {textCopied && <Alert message="Email copied!" />}
            <img about="Text" src={Mail} alt="mail" />
          </>
        }
      />
      <Icon
        onClick={() => {
          const win = window.open(
            "https://www.linkedin.com/in/manish-chandra-320b2420b/",
            "_blank"
          );
          win.focus();
        }}
        icon={<img src={li} alt="linkedin" />}
      />
      <Icon
        onClick={() => {
          const win = window.open(
            "https://github.com/man-ish-fs-2021",
            "_blank"
          );
          win.focus();
        }}
        icon={<img src={gi} alt="github" />}
      />
      <Icon
        onClick={() => {
          const win = window.open(Resume, "_blank");
          win.focus();
        }}
        icon={<img src={file} alt="file" />}
      />
    </div>
  );
};

export default Footer;
