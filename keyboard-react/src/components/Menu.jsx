import React, { useState } from "react";
import styled from "styled-components";

function Menu() {
  const [themeCheck, setThemeCheck] = useState(false);
  const [fontStyle, setFontStyle] = useState("TheJamsil5Bold");

  return (
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
  );
}

const MenuSection = styled.section`
  border: 1px solid red;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
`;
export default Menu;
