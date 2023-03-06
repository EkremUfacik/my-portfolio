import React, { useState } from "react";
import "./Projects2.scss";
import { motion } from "framer-motion";
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

      <motion.div
        className="app__projects-contain app__flex"
        whileInView={{ opacity: [0, 1], x: [-200, 0] }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        {filteredList.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects2;
