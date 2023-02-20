import React from "react";
import reactlogo from "../assets/skillsImg/react.png";
import jslogo from "../assets/skillsImg/javascript.png";
import reduxlogo from "../assets/skillsImg/redux.png";
import tslogo from "../assets/skillsImg/typescript.png";
import { AiFillEye } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const Project = ({ project }) => {
  return (
    <div id="projects" className="project">
      {/* <img src={project.img} alt="" /> */}
      <div className="project-info">
        <img src={jslogo} alt="" />
        {project.tech.includes("react") && <img src={reactlogo} alt="" />}
        {project.tech.includes("redux") && <img src={reduxlogo} alt="" />}
        {project.tech.includes("ts") && <img src={tslogo} alt="" />}
      </div>
      <div
        className="project-img"
        style={{ backgroundImage: `url(${project.img})` }}
      >
        <div className="project-icons">
          <a href={project.live}>
            <AiFillEye className="icon" />
          </a>
          <a href={project.repo}>
            <FaGithub className="icon" />
          </a>
        </div>
        <div className="filter" />
      </div>
      <p className="project-name">{project.name}</p>
    </div>
  );
};

export default Project;
