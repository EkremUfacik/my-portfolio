import React from "react";
import "./Footer.scss";
import { FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="app__footer app__flex">
      <ul className="app__footer-social app__flex">
        <li>
          <a href="">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href="">
            <FaDiscord />
          </a>
        </li>
        <li>
          <a href="">
            <FaGithub />
          </a>
        </li>
      </ul>

      <div>© 2023 eU</div>
    </footer>
  );
};

export default Footer;
