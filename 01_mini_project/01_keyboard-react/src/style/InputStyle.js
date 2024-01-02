import styled from "styled-components";
import "./App.css";

export const InputSection = styled.section`
  & > div {
    text-align: center;
    input {
      width: 700px;
      margin: 30px 0;
      border: none;
      border-bottom: 2px solid gray;
      outline: none;
      padding: 10px;
      font-size: 20px;
      font-weight: 700;
      font-family: ${(props) => props.fontStyle};
    }
  }
`;

export const Warning = styled.p`
  color: red;
`;
