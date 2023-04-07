import React from "react";
import styled from "styled-components";

function MyHeader({ leftChild, centerText, rightChild }) {
  return (
    <HeaderBox>
      <LeftDiv className="leftChild">{leftChild}</LeftDiv>
      <CenterDiv className="centerText">{centerText}</CenterDiv>
      <RightDiv className="rightChild">{rightChild}</RightDiv>
    </HeaderBox>
  );
}

export default MyHeader;

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 16px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #e2e2e2;
`;
const LeftDiv = styled.div`
  display: flex;

  width: 25%;
  justify-content: flex-start;
`;
const CenterDiv = styled.div`
  width: 50%;
  font-size: 25px;
  text-align: center;
`;
const RightDiv = styled.div`
  display: flex;
  width: 25%;
  justify-content: flex-end;
`;
