import React, { useState } from "react";
import "./style/App.css";
import styled from "styled-components";

function App() {
  const [themeCheck, setThemeCheck] = useState(false);
  const [fontStyle, setFontStyle] = useState("TheJamsil5Bold");

  return (
    <AppStyle themeCheck={themeCheck} fontStyle={fontStyle}>
      <h1>Keyboard</h1>
      <MenuSection>
        <label className="switch">
          <input
            id="switch"
            type="checkbox"
            value={themeCheck}
            onChange={(e) => {
              setThemeCheck(e.target.checked);
            }}
          />
          <span className="slider"></span>
        </label>
        <div className="select-box">
          <label>Font : </label>
          <select
            value={fontStyle}
            onChange={(e) => setFontStyle(e.target.value)}
          >
            <option value="TheJamsil5Bold">basic 더잠실체</option>
            <option value="Dovemayo_wild">차쌤체 font</option>
            <option value="TTTtangsbudaejjigaeB">부대찌개 font</option>
          </select>
        </div>
      </MenuSection>

      <section>
        <div>
          <input />
        </div>
        <div>
          <div>숫자키</div>
          <div>tap 줄</div>
          <div>capslock 줄</div>
          <div>shift 줄</div>
          <div>ctrl줄</div>
        </div>
      </section>
    </AppStyle>
  );
}
const AppStyle = styled.div`
  /* width: 800px; */
  background-color: white;
  /* themeCheck 값이 true일 때, filter 스타일 적용 */
  ${(props) => props.themeCheck && `filter: invert(100%) hue-rotate(180deg);`}
  font-family: ${(props) => props.fontStyle}
`;

const MenuSection = styled.section`
  border: 1px solid red;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
`;

export default App;
