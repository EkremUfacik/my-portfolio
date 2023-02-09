import React from "react";
import imageObj from "../../assets/skillsImg/pictures";
import "./Skills.scss";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="app__skills">
      <div className="app__skills-head">
        <h2>My Skills</h2>
      </div>
      <motion.div className="app__skills-logos app__flex">
        {imageObj.map((logo) => (
          <motion.div
            className="app__skills-logo"
            whileInView={{
              scale: [1, 2, 2, 1, 1],
              // rotate: [0, 0, 270, 270, 0],
              // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
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
