import React, { useState } from "react";
import "./Projects2.scss";
import projectsImg from "../../assets/projectsImg/projects";
import Project from "../../components/Project";

const Projects2 = () => {
  const [active, setActive] = useState(0);
  const [head, setHead] = useState("All");
  const projectsHead = ["All", "Javascript", "React"];

  const handleClick = (index, p) => {
    setActive(index);
    setHead(p);
  };

  const filteredList =
    head === "All"
      ? [...projectsImg]
      : projectsImg?.filter((p) => p.tech.includes(head));

  return (
    <div className="app__projects">
      <h2 className="app__head">Projects & Certificates</h2>
      <h2 style={{ textAlign: "center" }}>-Projects-</h2>
      <ul className="app__projects-header  app__flex">
        {projectsHead.map((p, index) => (
          <li
            className={active === index ? "active" : ""}
            onClick={() => handleClick(index, p)}
          >
            {p}
          </li>
        ))}
      </ul>

      <div className="app__projects-contain app__flex">
        {filteredList.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects2;
