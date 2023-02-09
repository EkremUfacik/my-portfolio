import React, { useEffect, useRef, useState } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import projectsImg from "../../assets/projectsImg/projects";
import Project from "../../components/Project";

const Projects = () => {
  let outer = useRef();
  const [width, setWidth] = useState();
  // const width = outer.current.scrollWidth - outer.current.offsetWidth;

  useEffect(() => {
    setWidth(outer.current.scrollWidth - outer.current.offsetWidth);
  }, []);

  return (
    <motion.div className="app__projects" ref={outer}>
      <motion.div
        className="app__projects-contain"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
      >
        {projectsImg.map((project) => (
          <Project project={project} />
          // <div className="project"></div>
        ))}
      </motion.div>

      <br />

      {/* <motion.div
        className="app__projects-contain"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
      >
        {Array(15)
          .fill(0)
          .map((item) => (
            <div className="project"></div>
          ))}
      </motion.div> */}
    </motion.div>
  );
};

export default Projects;
