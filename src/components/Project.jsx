import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project">
      {/* <img src={project.img} alt="" /> */}
      <div
        className="project-img"
        style={{ backgroundImage: `url(${project.img})` }}
      ></div>
      <p>
        Live : <a href=""></a>
      </p>
      <p>
        Repo : <a href=""></a>
      </p>
    </div>
  );
};

export default Project;
