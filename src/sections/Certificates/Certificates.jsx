import React, { useState } from "react";
import "./Certificates.scss";
import certificatesList from "../../assets/certificates/certificates";

const Certificates = () => {
  const [current, setCurrent] = useState(4);

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
      <h1>Certificates</h1>
      <div className="app__certificates-contain">
        <div
          className="certificate"
          style={{ backgroundImage: `url(${certificatesList[current].img})` }}
        ></div>
        <div className="prev" onClick={handlePrev}>
          ◀
        </div>
        <div className="next" onClick={handleNext}>
          ▶
        </div>
      </div>

      <div className="dots">
        {certificatesList.map((item, index) => (
          <div className="dot" key={index} onClick={() => setCurrent(index)}>
            ⚫
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
