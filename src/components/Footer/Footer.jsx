import React from "react";
import "./Footer.scss";
import { FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
import { useThemeContext } from "../../context/ThemeProvider";

const Footer = () => {
  return (
    <footer className="app__footer app__flex">
      <ul className="app__footer-social app__flex">
        <li>
          <a href="https://www.linkedin.com/in/ekrem-ufacik/">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href="https://discord.com/channels/@me">
            <FaDiscord />
          </a>
        </li>
        <li>
          <a href="https://github.com/EkremUfacik">
            <FaGithub />
          </a>
        </li>
      </ul>

      <div>© 2023 eU</div>
    </footer>
  );
};

export default Footer;
