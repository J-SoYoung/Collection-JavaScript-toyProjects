import React from "react";
import styled from "styled-components";

function MyButton({ onClick, btnType, text }) {
  if (btnType === undefined) btnType = "default";
  return (
    <>
      {btnType === "default" ? (
        <DefaultButton onClick={onClick}> {text}</DefaultButton>
      ) : btnType === "positive" ? (
        <PositivetButton onClick={onClick}> {text}</PositivetButton>
      ) : (
        <NegativeButton onClick={onClick}> {text}</NegativeButton>
      )}
    </>
  );
}

MyButton.defaultProps = {
  type: "default",
};

const Button = styled.button`
  cursor: pointer;
  height: 45px;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  box-sizing: border-box;
  font-size: 18px;
  white-space: nowrap;
`;
const DefaultButton = styled(Button)`
  background-color: #ececec;
  color: black;
`;
const PositivetButton = styled(Button)`
  background-color: #64c964;
  color: white;
`;
const NegativeButton = styled(Button)`
  background-color: #fd565f;
  color: white;
`;
export default MyButton;
