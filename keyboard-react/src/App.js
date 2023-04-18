import React, { useRef, useState } from "react";

import styled from "styled-components";
import {
  Backspace,
  CapsKey,
  EnterKey,
  FnKey,
  Key,
  KeyboardSection,
  LeftShift,
  RightShift,
  Row,
  SpaceKey,
  SubKey,
} from "./style/KeyboardStyle";
import {
  MenuSection,
  SwitchInput,
  SwitchLabel,
  SwitchSpan,
} from "./style/MenuStyle";
import { InputSection } from "./style/InputStyle";

function App() {
  const [themeCheck, setThemeCheck] = useState(false);
  const [fontStyle, setFontStyle] = useState("TheJamsil5Bold");
  const [inputText, setInputText] = useState("");
  const keyRefs = useRef([]);

  const handleMouseClick = (e) => {
    if (e.target.matches(".key")) {
      setInputText((prevInputText) => prevInputText + e.target.textContent);
    }
  };

  const handleKeyDown = (e) => {
    const keyTarget = e.code;
    // console.log(keyTarget);
    // console.log(keyRefs.current[keyTarget].getAttribute("data-code"));
    if (e.code.slice(0, 3) === "Key") {
      setInputText((prevInputText) => prevInputText + e.code[3]);
    }
    if (e.code.slice(0, 5) === "Digit") {
      setInputText((prevInputText) => prevInputText + e.key);
    }
    if (e.code === "Space") {
      setInputText((prevInputText) => prevInputText + " ");
    }
    if (e.code === "Backspace") {
      setInputText((prevInputText) => prevInputText.slice(0, -1));
    }

    // 키보드가 눌렸을 때, ref로 눌린 태그를 찾는다.
    if (keyRefs.current[keyTarget]?.getAttribute("data-code") === undefined) {
      return;
    }
    if (e.code === keyRefs.current[keyTarget].getAttribute("data-code")) {
      keyRefs.current[keyTarget].style.backgroundColor = "lightgray";
    }
  };

  const handleKeyUp = (e) => {
    const keyTarget = e.code;
    if (keyRefs.current[keyTarget]?.getAttribute("data-code") === undefined) {
      return;
    }
    if (e.code === keyRefs.current[keyTarget].getAttribute("data-code")) {
      keyRefs.current[keyTarget].style.backgroundColor = "white";
    }
  };

  const handleDelete = () => {
    setInputText("");
  };

  return (
    <AppStyle themeCheck={themeCheck} fontStyle={fontStyle}>
      <div>
        <h1>Keyboard</h1>
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
        <InputSection fontStyle={fontStyle}>
          <div>
            <input
              type="text"
              value={inputText || ""}
              onKeyDown={handleKeyDown}
              onKeyUp={handleKeyUp}
            />
            <button onClick={handleDelete}>전체 지우기</button>
          </div>
        </InputSection>
        <KeyboardSection onClick={handleMouseClick}>
          <div>
            <Row>
              <Key className="f_key" data-code="Backquote" data-val="`">
                `
              </Key>
              <Key
                ref={(el) => (keyRefs.current["Digit1"] = el)}
                className="key"
                data-code="Digit1"
                data-val="1"
              >
                1
              </Key>
              <Key
                ref={(el) => (keyRefs.current["Digit2"] = el)}
                className="key"
                data-code="Digit2"
                data-val="2"
              >
                2
              </Key>
              <Key
                ref={(el) => (keyRefs.current["Digit3"] = el)}
                className="key"
                data-code="Digit3"
                data-val="3"
              >
                3
              </Key>
              <Key
                ref={(el) => (keyRefs.current["Digit4"] = el)}
                className="key"
                data-code="Digit4"
                data-val="4"
              >
                4
              </Key>
              <Key
                ref={(el) => (keyRefs.current["Digit5"] = el)}
                className="key"
                data-code="Digit5"
                data-val="5"
              >
                5
              </Key>
              <Key
                ref={(el) => (keyRefs.current["Digit6"] = el)}
                className="key"
                data-code="Digit6"
                data-val="6"
              >
                6
              </Key>
              <Key
                ref={(el) => (keyRefs.current["Digit7"] = el)}
                className="key"
                data-code="Digit7"
                data-val="7"
              >
                7
              </Key>
              <Key
                ref={(el) => (keyRefs.current["Digit8"] = el)}
                className="key"
                data-code="Digit8"
                data-val="8"
              >
                8
              </Key>
              <Key
                ref={(el) => (keyRefs.current["Digit9"] = el)}
                className="key"
                data-code="Digit9"
                data-val="9"
              >
                9
              </Key>
              <Key
                ref={(el) => (keyRefs.current["Digit0"] = el)}
                className="key"
                data-code="Digit0"
                data-val="0"
              >
                0
              </Key>
              <Key
                ref={(el) => (keyRefs.current["Minus"] = el)}
                className="f_key"
                data-code="Minus"
                data-val="-"
              >
                -
              </Key>
              <Key
                ref={(el) => (keyRefs.current["Equal"] = el)}
                className="f_key"
                data-code="Equal"
                data-val="="
              >
                =
              </Key>
              <Backspace
                className="f_key back-space-key"
                data-code="Backspace"
                data-val="Backspace"
              >
                Backspace
              </Backspace>
            </Row>
            <Row>
              <FnKey className="f_key tab-key">Tab</FnKey>
              <Key
                ref={(el) => (keyRefs.current["KeyQ"] = el)}
                className="key"
                data-code="KeyQ"
                data-val="q"
              >
                Q
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyW"] = el)}
                className="key"
                data-code="KeyW"
                data-val="w"
              >
                W
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyE"] = el)}
                className="key"
                data-code="KeyE"
                data-val="e"
              >
                E
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyR"] = el)}
                className="key"
                data-code="KeyR"
                data-val="r"
              >
                R
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyT"] = el)}
                className="key"
                data-code="KeyT"
                data-val="t"
              >
                T
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyY"] = el)}
                className="key"
                data-code="KeyY"
                data-val="y"
              >
                Y
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyU"] = el)}
                className="key"
                data-code="KeyU"
                data-val="u"
              >
                U
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyI"] = el)}
                className="key"
                data-code="KeyI"
                data-val="i"
              >
                I
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyO"] = el)}
                className="key"
                data-code="KeyO"
                data-val="o"
              >
                O
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyP"] = el)}
                className="key"
                data-code="KeyP"
                data-val="p"
              >
                P
              </Key>
              <Key
                align={true}
                className="f_key"
                data-code="BracketLeft"
                data-val="["
              >
                <span className="two-value">&#123;</span>
                <span className="two-value">&#91;</span>
              </Key>
              <Key
                align={true}
                className="f_key"
                data-code="BracketRight"
                data-val="]"
              >
                <span className="two-value">&#125;</span>
                <span className="two-value">&#93;</span>
              </Key>
              <FnKey
                align={true}
                className="f_key back-slash-key"
                data-code="Backslash"
                data-val="\"
              >
                <span className="two-value">|</span>
                <span className="two-value">\</span>
              </FnKey>
            </Row>
            <Row>
              <CapsKey className="f_key caps-lock-key">CapsLock</CapsKey>
              <Key
                ref={(el) => (keyRefs.current["KeyA"] = el)}
                className="key"
                data-code="KeyA"
                data-val="a"
              >
                A
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyS"] = el)}
                className="key"
                data-code="KeyS"
                data-val="s"
              >
                S
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyD"] = el)}
                className="key"
                data-code="KeyD"
                data-val="d"
              >
                D
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyF"] = el)}
                className="key"
                data-code="KeyF"
                data-val="f"
              >
                F
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyG"] = el)}
                className="key"
                data-code="KeyG"
                data-val="g"
              >
                G
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyH"] = el)}
                className="key"
                data-code="KeyH"
                data-val="h"
              >
                H
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyJ"] = el)}
                className="key"
                data-code="KeyJ"
                data-val="j"
              >
                J
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyK"] = el)}
                className="key"
                data-code="KeyK"
                data-val="k"
              >
                K
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyL"] = el)}
                className="key"
                data-code="KeyL"
                data-val="l"
              >
                L
              </Key>
              <Key
                align={true}
                className="f_key"
                data-code="Semicolon"
                data-val=";"
              >
                <span className="two-value">:</span>
                <span className="two-value">;</span>
              </Key>
              <Key
                align={true}
                className="f_key"
                data-code="Quote"
                data-val="'"
              >
                <span className="two-value">"</span>
                <span className="two-value">'</span>
              </Key>
              <EnterKey className="f_key enter-key" data-code="Enter">
                Enter
              </EnterKey>
            </Row>
            <Row>
              <LeftShift className="f_key left-shift-key" data-code="ShiftLeft">
                Shift
              </LeftShift>
              <Key
                ref={(el) => (keyRefs.current["KeyZ"] = el)}
                className="key"
                data-code="KeyZ"
                data-val="z"
              >
                Z
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyX"] = el)}
                className="key"
                data-code="KeyX"
                data-val="x"
              >
                X
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyC"] = el)}
                className="key"
                data-code="KeyC"
                data-val="c"
              >
                C
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyV"] = el)}
                className="key"
                data-code="KeyV"
                data-val="v"
              >
                V
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyB"] = el)}
                className="key"
                data-code="KeyB"
                data-val="b"
              >
                B
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyN"] = el)}
                className="key"
                data-code="KeyN"
                data-val="n"
              >
                N
              </Key>
              <Key
                ref={(el) => (keyRefs.current["KeyM"] = el)}
                className="key"
                data-code="KeyM"
                data-val="m"
              >
                M
              </Key>
              <Key
                align={true}
                className="f_key"
                data-code="Comma"
                data-val=","
              >
                <span className="two-value">&lt;</span>
                <span className="two-value">,</span>
              </Key>
              <Key
                align={true}
                className="f_key"
                data-code="Period"
                data-val="."
              >
                <span className="two-value">&gt;</span>
                <span className="two-value">.</span>
              </Key>
              <Key
                align={true}
                className="f_key"
                data-code="Slash"
                data-val="/"
              >
                <span className="two-value">?</span>
                <span className="two-value">/</span>
              </Key>
              <RightShift
                className="f_key right-shift-key"
                data-code="ShiftRight"
              >
                Shift
              </RightShift>
            </Row>
            <Row>
              <SubKey className="f_key fn-key">Ctrl</SubKey>
              <SubKey className="f_key fn-key">-</SubKey>
              <SubKey className="f_key fn-key">Alt</SubKey>
              <SpaceKey
                className="f_key space-key"
                data-code="Space"
                data-val="Space"
              >
                Space
              </SpaceKey>
              <SubKey className="f_key fn-key">Alt</SubKey>
              <SubKey className="f_key fn-key">Fn</SubKey>
              <SubKey className="f_key fn-key">-</SubKey>
              <SubKey className="f_key fn-key">Ctrl</SubKey>
            </Row>
          </div>
        </KeyboardSection>
      </div>
    </AppStyle>
  );
}

const AppStyle = styled.div`
  width: 1100px;
  background-color: white;
  /* themeCheck 값이 true일 때, filter 스타일 적용 */
  ${(props) => props.themeCheck && `filter: invert(100%) hue-rotate(180deg);`}
  font-family: ${(props) => props.fontStyle};
  padding: 30px 24px;
  box-sizing: border-box;
`;
export default App;
