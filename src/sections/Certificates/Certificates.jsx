import React, { useState } from "react";
import "./Certificates.scss";
import certificatesList from "../../assets/certificates/certificates";
import { motion } from "framer-motion";
import { useThemeContext } from "../../context/ThemeProvider";

const Certificates = () => {
  const [current, setCurrent] = useState(4);
  const { theme } = useThemeContext();

  const handlePrev = () => {
    current === 0
      ? setCurrent(certificatesList.length - 1)
      : setCurrent((curr) => curr - 1);
  };

  const handleNext = () => {
    current === certificatesList.length - 1
      ? setCurrent(0)
      : setCurrent((curr) => curr + 1);
  };

  return (
    <div className="app__certificates">
      <h2 style={{ textAlign: "center", padding: "1rem 0" }}>-Certificates-</h2>
      <motion.div
        className="app__certificates-contain"
        whileInView={{ opacity: [0, 1], x: [-200, 0] }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        {certificatesList.map((item, index) => (
          <motion.div
            key={index}
            className={index === current ? "certificate active" : "certificate"}
            style={{ backgroundImage: `url(${item.img})` }}
          ></motion.div>
        ))}

        <div className="prev" onClick={handlePrev}>
          ◀
        </div>
        <div className="next" onClick={handleNext}>
          ▶
        </div>
      </motion.div>

      <div className="dots">
        {certificatesList.map((item, index) => (
          <div
            className="dot"
            style={{
              opacity: current === index ? "0.9" : "",
              scale: current === index ? "1.2" : "",
              backgroundColor: theme === "dark" ? "white" : "black",
            }}
            key={index}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
