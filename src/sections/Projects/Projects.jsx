import React, { useEffect, useRef, useState } from "react";
import "./Projects.scss";
import { motion } from "framer-motion";
import projectsImg from "../../assets/projectsImg/projects";
import Project from "../../components/Project";
import useWindowSize from "../../hooks/useWindowSize";

const Projects = () => {
  let outer = useRef();
  let out = useRef();
  const [key, setKey] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function updateSize() {
      setWidth(outer.current.scrollWidth - out.current.offsetWidth + 32);
      setKey((prev) => prev + 1);
    }
    console.log(out);
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [window.innerWidth]);

  return (
    <div>
      <h2 className="app__head" style={{ textAlign: "center" }}>
        Projects
      </h2>
      <motion.div
        ref={out}
        // className="app__projects-outer"
        initial={{ paddingLeft: "50%", paddingRight: "50%" }}
        whileInView={{ paddingLeft: 0, paddingRight: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <motion.div
          key={key}
          ref={outer}
          className="app__projects"
          // initial={{ margin: "10rem" }}
          // whileInView={{ marginLeft: [500, 0], marginRight: [500, 0] }}
          // transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <motion.div
            className="app__projects-contain"
            // style={{ translateX: "-50rem" }}
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
      </motion.div>
    </div>
  );
};

export default Projects;
