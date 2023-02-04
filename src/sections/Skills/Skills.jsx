import React from "react";
import imageObj from "../../assets/pictures";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="app__skills">
      <div className="app__skills-head">
        <h2>My Skills</h2>
      </div>
      <div className="app__skills-logos app__flex">
        {imageObj.map((logo) => (
          <div className="app__skills-logo">
            <p>{logo.name}</p>
            <div className="img-div app__flex">
              <img src={logo.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
