import React, { useState } from "react";
import "./Navbar.scss";
import avatar from "../../assets/avatar.jpg";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  let navLinks = ["home", "about", "skills", "projects", "contact"];

  const [isActive, setIsActive] = useState();
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar app__flex">
      <div className="app__navbar-logo app__flex">
        <img src={avatar} alt="" />
      </div>
      <ul className="app__navbar-links app__flex">
        {navLinks.map((item, index) => (
          <li
            className={isActive === index ? "app__flex active" : "app_flex"}
            key={index}
            onClick={() => setIsActive(index)}
          >
            <a href={`#${item}`}>{item}</a>
            <div />
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <FiMenu size={"1.5rem"} onClick={() => setToggle(true)} />

        <div style={{ right: toggle ? "0" : "-30rem" }}>
          <FiX onClick={() => setToggle(false)} />
          <ul className="app__navbar-links app__flex">
            {navLinks.map((item, index) => (
              <li key={index} onClick={() => setIsActive(index)}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
