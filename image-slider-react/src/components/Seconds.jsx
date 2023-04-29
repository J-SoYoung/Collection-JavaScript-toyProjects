import React, { useState, useEffect } from "react";
import "../style.css";
import { ImgColor, ImgList } from "./ImgInfo";
import { FaPlay } from "react-icons/fa";
import { GiPauseButton } from "react-icons/gi";

function Seconds(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let intervalId = null;

    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentSlide((currentSlide) =>
          currentSlide === ImgColor.length - 1 ? 0 : currentSlide + 1
        );
      }, 2000);
    }

    return () => clearInterval(intervalId);
  }, [isPlaying, ImgColor.length]);

  const handlePrevClick = () => {
    setCurrentSlide(
      currentSlide === 0 ? ImgColor.length - 1 : currentSlide - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide(
      currentSlide === ImgColor.length - 1 ? 0 : currentSlide + 1
    );
  };

  const handlePlayPauseClick = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };

  const renderIndicator = () => {
    return (
      <div className="indicator">
        <ul>
          {ImgColor.map((image, index) => (
            <li
              key={index}
              className={`indicator-dot ${
                currentSlide === index ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            >
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="image-slider">
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handlePlayPauseClick}>
        {isPlaying ? <GiPauseButton /> : <FaPlay />}
      </button>
      {renderIndicator()}

      {ImgColor.map((image, index) => (
        <img
          key={index}
          src={`./img/${image}.jpeg`}
          alt={`Slide ${index}`}
          style={{ display: index === currentSlide ? "block" : "none" }}
        />
      ))}
    </div>
  );
}

export default Seconds;
