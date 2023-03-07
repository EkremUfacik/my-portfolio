import React, { useState } from "react";
import "./Navbar.scss";
import avatar from "../../assets/avatar.jpg";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { Link } from "react-scroll";
import SwitchButton from "../SwitchButton/SwitchButton";
import { useThemeContext } from "../../context/ThemeProvider";

const Navbar = () => {
  let navLinks = ["home", "about", "skills", "projects", "contact"];
  const [toggle, setToggle] = useState(false);
  const { theme } = useThemeContext();

  return (
    <nav
      className="app__navbar app__flex"
      style={{
        backgroundColor:
          theme === "light"
            ? "rgba(242, 242, 242, 0.355)"
            : "rgba(0, 0, 0, 0.19)",
      }}
    >
      <div className="app__navbar-logo app__flex">
        <a href="#top">
          <img src={avatar} alt="" />
        </a>
      </div>
      <ul className="app__navbar-links app__flex">
        {navLinks.map((item, index) => (
          <li
            className={"app_flex"}
            key={index}
            // onClick={() => setIsActive(index)}
          >
            <Link
              className="link"
              to={item}
              spy={true}
              smooth={true}
              offset={-200}
              duration={300}
            >
              {item}
              <div />
            </Link>
          </li>
        ))}
      </ul>

      <div className="app__flex" style={{ gap: "2rem" }}>
        <SwitchButton />
        <div className="app__navbar-menu app__flex">
          <FiMenu size={"1.5rem"} onClick={() => setToggle(true)} />

          <div
            className="app__navbar-menu-container"
            style={{ right: toggle ? "0" : "-100%" }}
          >
            <FiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-menu-links app__flex">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    className="link"
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={300}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                    <div />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
