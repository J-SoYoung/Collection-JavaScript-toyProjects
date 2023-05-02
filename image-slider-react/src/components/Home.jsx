import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { GiPauseButton } from "react-icons/gi";
import { CatImg, ImgColor } from "./ImgInfo";

function Home() {
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

  return (
    <>
      <SliderWrap>
        <SliderList>
          {CatImg.map((image, index) => (
            <img
              key={index}
              src={`./img/${image}.jpg`}
              alt={`Slide ${index}`}
              style={{ display: index === currentSlide ? "block" : "none" }}
            />
          ))}
        </SliderList>
        <ButtonBox>
          <BtnPrev onClick={handlePrevClick}>
            <FiArrowLeft />
          </BtnPrev>
          <BtnNext onClick={handleNextClick}>
            <FiArrowRight />
          </BtnNext>
        </ButtonBox>
        <IndicatorBox>
          <ul>
            {CatImg.map((el, idx) => (
              <li
                key={idx}
                className={`indicator-dot ${
                  currentSlide === idx ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(idx)}
              ></li>
            ))}
          </ul>
        </IndicatorBox>
        <AutoBox onClick={handlePlayPauseClick}>
          {isPlaying ? <GiPauseButton /> : <FaPlay />}
        </AutoBox>
      </SliderWrap>
    </>
  );
}
const SliderWrap = styled.div`
  width: 500px;
  height: 350px;
  margin: 50px auto;
  position: relative;
  list-style: none;
  overflow: hidden;
`;
const SliderList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  img {
    width: 500px;
    height: 100%;
    z-index: 1;
  }
`;
const ButtonBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover button {
    opacity: 1;
  }
  button {
    width: 50px;
    height: 50px;
    border: none;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 10;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    :hover {
      background: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }
`;

const BtnPrev = styled.button`
  border-radius: 0 8px 8px 0;
`;
const BtnNext = styled.button`
  border-radius: 8px 0 0 8px;
`;

const IndicatorBox = styled.div`
  z-index: 10;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  & ul {
    display: flex;
    margin: 0;
    padding: 0;
    & li {
      width: 15px;
      height: 15px;
      list-style: none;
      cursor: pointer;
      margin: 0 5px;
      background-color: white;
      border-radius: 8px;
      opacity: 0.5;
      /* 클래스명에 대한 style지정 &.클래스명 */
      &.active {
        opacity: 1;
      }
    }
  }
`;
const AutoBox = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  color: white;
  cursor: pointer;
  z-index: 10;
`;

export default Home;
