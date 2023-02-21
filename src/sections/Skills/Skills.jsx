import React from "react";
import imageObj from "../../assets/skillsImg/pictures";
import "./Skills.scss";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills" className="app__skills">
      <h2 className="app__head">My Skills</h2>
      <motion.div
        className="app__skills-logos app__flex"
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {imageObj.map((logo) => (
          <motion.div className="app__skills-logo">
            {/* <p>{logo.name}</p> */}
            <div className="img-div app__flex">
              <img src={logo.img} alt="" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
