import React from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import "./SwitchButton.scss";
import { useThemeContext } from "../../context/ThemeProvider";

const SwitchButton = () => {
  const { theme, setTheme } = useThemeContext();

  const handleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onChange={handleChange}
      />
      <label
        htmlFor="checkbox"
        className="label"
        style={{
          backgroundColor: theme === "light" ? "#5b6770" : "black",
          cursor: "pointer",
        }}
      >
        <MdDarkMode className="dark" />
        <BsSun className="sun" />
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default SwitchButton;
