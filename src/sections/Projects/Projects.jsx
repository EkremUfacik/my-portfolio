import React, { useEffect, useRef, useState } from "react";
import "./Projects.scss";
import { motion } from "framer-motion";
import projectsImg from "../../assets/projectsImg/projects";
import Project from "../../components/Project";
import useWindowSize from "../../hooks/useWindowSize";

const Projects = () => {
  let outer = useRef();
  const [key, setKey] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function updateSize() {
      setWidth(outer.current.scrollWidth - outer.current.offsetWidth);
      setKey((prev) => prev + 1);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [window.innerWidth]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      {/* <motion.div
        style={{ padding: "1rem" }}
        initial={{ marginLeft: "50%", marginRight: "50%" }}
        whileInView={{ marginLeft: 0, marginRight: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      > */}
      <motion.div key={key} ref={outer} className="app__projects">
        <motion.div
          className="app__projects-contain"
          // style={{ translateX: "-50rem" }}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}

          // initial={{ width: 0 }}
          // whileInView={{ scale: [0, 1] }}
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
      {/* </motion.div> */}
    </div>
  );
};

export default Projects;
