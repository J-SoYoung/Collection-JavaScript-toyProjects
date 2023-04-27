import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { GiPauseButton } from "react-icons/gi";
import { ImgColor, ImgList } from "../unit/ImgInfo";

function Main() {
  const [autoPlay, setAutoPlay] = useState(true);
  const [movePx, setMovePx] = useState(0);

  const handleMovePrev = () => {
    if (movePx === 0) {
      setMovePx(-((ImgColor.length - 1) * 500));
      return;
    }
    setMovePx(movePx + 500);
  };

  const handleMoveNext = () => {
    if (movePx === -((ImgColor.length - 1) * 500)) {
      setMovePx(0);
      return;
    }
    setMovePx(movePx - 500);
  };

  const handleAutoPlay = () => {
    console.log("autoplay");
    setAutoPlay(!autoPlay);
  };

  return (
    <>
      <SliderWrap>
        <SliderList movePx={movePx}>
          <ImgList />
        </SliderList>
        <ButtonBox>
          <BtnPrev onClick={handleMovePrev}>
            <FiArrowLeft />
          </BtnPrev>
          <BtnNext onClick={handleMoveNext}>
            <FiArrowRight />
          </BtnNext>
        </ButtonBox>
        <IndicatorBox>
          <ul>
            {ImgColor.map((el, idx) => (
              <li key={idx}></li>
            ))}
          </ul>
        </IndicatorBox>
        <AutoBox onClick={handleAutoPlay}>
          {autoPlay ? <GiPauseButton /> : <FaPlay />}
        </AutoBox>
      </SliderWrap>
    </>
  );
}
// 버튼을 클릭하면 SliderList의 left값을 -500px씩 이동한다
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
  left: ${(props) => `${props.movePx}px`};
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
      opacity: 0.5;
      border-radius: 8px;
      :active {
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
`;

export default Main;
