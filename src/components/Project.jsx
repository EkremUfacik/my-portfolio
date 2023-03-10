import React from "react";
import reactlogo from "../assets/skillsImg/react.png";
import jslogo from "../assets/skillsImg/javascript.png";
import reduxlogo from "../assets/skillsImg/redux.png";
import tslogo from "../assets/skillsImg/typescript.png";
import { AiFillEye } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Project = ({ project }) => {
  return (
    <motion.div
      id="projects"
      className="project"
      whileInView={{ opacity: [0, 1], x: [-100, 0] }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="project-info">
        <img src={jslogo} alt="" />
        {project.tech.includes("React") && <img src={reactlogo} alt="" />}
        {project.tech.includes("redux") && <img src={reduxlogo} alt="" />}
        {project.tech.includes("ts") && <img src={tslogo} alt="" />}
      </div>
      <div
        className="project-img"
        style={{ backgroundImage: `url(${project.img})` }}
      >
        <a href={project.live} target="_blank" rel="noreferrer">
          <div className="project-icons">
            <a href={project.live} target="_blank" rel="noreferrer">
              <AiFillEye className="icon" />
            </a>
            <a href={project.repo} target="_blank" rel="noreferrer">
              <FaGithub className="icon" />
            </a>
          </div>
          <div className="filter" />
        </a>
      </div>
      <p className="project-name">{project.name}</p>
    </motion.div>
  );
};

export default Project;
