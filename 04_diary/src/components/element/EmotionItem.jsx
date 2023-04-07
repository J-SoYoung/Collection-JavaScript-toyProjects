import React, { useState } from "react";
import styled from "styled-components";

function EmotionItem({
  emotion_descript,
  emotion_id,
  emotion_img,
  onClick,
  isSelect,
}) {
  return (
    <EmotionBox
      onClick={() => {
        onClick(emotion_id);
      }}
      isSelect={isSelect}
    >
      <img src={emotion_img} />
      <span>{emotion_descript}</span>
    </EmotionBox>
  );
}
const EmotionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 0;
  box-sizing: border-box;
  background-color: #ececec;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
  border: ${(props) => (props.isSelect ? "1px solid black" : "none")};
  img {
    width: 70px;
    /* color props받아서 사용 */
  }
`;
export default EmotionItem;
