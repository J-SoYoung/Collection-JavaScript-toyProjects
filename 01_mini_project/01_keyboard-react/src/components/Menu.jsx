import React, { useContext, useState } from "react";
import styled from "styled-components";

import {
  MenuSection,
  SwitchInput,
  SwitchLabel,
  SwitchSpan,
} from "../style/MenuStyle";
import { KeyboardThemeContext } from "../App";

function Menu() {
  const [themeCheck, setThemeCheck] = useState(false);
  const [fontStyle, setFontStyle] = useState("TheJamsil5Bold");
  const aa = useContext(KeyboardThemeContext);
  console.log(aa);
  
  return (
    <MenuSection>
      <SwitchLabel className="switch">
        <SwitchInput
          id="switch"
          type="checkbox"
          value={themeCheck}
          onChange={(e) => {
            setThemeCheck(e.target.checked);
          }}
        />
        <SwitchSpan className="slider"></SwitchSpan>
      </SwitchLabel>
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

// const MenuSection = styled.section`
//   border: 1px solid red;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   padding: 16px;
// `;
export default Menu;
