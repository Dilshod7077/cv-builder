import React from "react";
import { ReactComponent as GitHubIcon } from "../../assets/icons/github.svg";
import CV from "../../assets/icons/CV.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <a className="ui-link" href="/"><img src={CV} alt="" /></a>
      <div>© 2024 All Rights Reserved, Cv builder</div>
      <a
        className="ui-link"
        href="https://github.com/Dilshod7077"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
    </footer>
  );
};
export default Footer;
