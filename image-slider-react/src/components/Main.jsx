import React from "react";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

function Main() {
  return (
    <>
      <SliderWrap>
        <SliderList>
          <li>
            <img src="./img/red.jpeg" />
          </li>
          <li>
            <img src="./img/orange.jpeg" />
          </li>
          <li>
            <img src="./img/yellow.jpeg" />
          </li>
          <li>
            <img src="./img/blue.jpeg" />
          </li>
          <li>
            <img src="./img/violet.jpeg" />
          </li>
          <li>
            <img src="./img/indigo.jpeg" />
          </li>
        </SliderList>
        <ButtonBox>
          <BtnPrev>
            <FiArrowLeft />
          </BtnPrev>
          <BtnNext>
            <FiArrowRight />
          </BtnNext>
        </ButtonBox>
      </SliderWrap>
    </>
  );
}

const SliderWrap = styled.div`
  border: 1px solid black;
  list-style: none;
  width: 500px;
  height: 300px;
  margin: 0 auto;
  position: relative;
`;
const SliderList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  left: 0;
  img {
    width: 500px;
    margin: 50px 0;
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
  /* left: 50px; */
`;
const BtnNext = styled.button`
  border-radius: 8px 0 0 8px;
`;

export default Main;
