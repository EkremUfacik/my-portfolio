import React from "react";
import reactlogo from "../assets/skillsImg/react.png";
import jslogo from "../assets/skillsImg/javascript.png";
import reduxlogo from "../assets/skillsImg/redux.png";
import tslogo from "../assets/skillsImg/typescript.png";

const Project = ({ project }) => {
  return (
    <div className="project">
      {/* <img src={project.img} alt="" /> */}
      <div
        className="project-img"
        style={{ backgroundImage: `url(${project.img})` }}
      ></div>
      <div className="project-info">
        <img src={jslogo} alt="" />
        {project.tech.includes("react") && <img src={reactlogo} alt="" />}
        {project.tech.includes("redux") && <img src={reduxlogo} alt="" />}
        {project.tech.includes("ts") && <img src={tslogo} alt="" />}
        <p>{project.name}</p>
        <p>
          Live :{" "}
          <a href={project.live} target="blank">
            {project.live}
          </a>
        </p>
        <p>
          Repo :{" "}
          <a href={project.repo} target="blank">
            {project.repo}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Project;
