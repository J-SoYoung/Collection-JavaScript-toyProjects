import React, { useState } from "react";

import {
  AppStyle,
  Backspace,
  Key,
  KeyboardSection,
  Row,
  FnKey,
  CapsKey,
  EnterKey,
  LeftShift,
  RightShift,
  SubKey,
  SpaceKey,
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
  const [inputText, setInputText] = useState(false);
  const strRegEx = /^[A-Za-z]+$/;

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
              onChange={(e) => setInputText(e.target.value)}
            />
            {/* <Warning warning={inputText && "red"}>
              {!strRegEx.test(inputText) && "영문만 입력해주세요"}
            </Warning> */}
          </div>
        </InputSection>
        <KeyboardSection>
          <div>
            <Row>
              <Key
                align={true}
                className="key"
                data-code="Backquote"
                data-val="`"
              >
                <span className="two-value">~</span>
                <span className="two-value">`</span>
              </Key>
              <Key align={true} className="key" data-code="Digit1" data-val="1">
                <span className="two-value">!</span>
                <span className="two-value">1</span>
              </Key>
              <Key align={true} className="key" data-code="Digit2" data-val="2">
                <span className="two-value">@</span>
                <span className="two-value">2</span>
              </Key>
              <Key align={true} className="key" data-code="Digit3" data-val="3">
                <span className="two-value">#</span>
                <span className="two-value">3</span>
              </Key>
              <Key align={true} className="key" data-code="Digit4" data-val="4">
                <span className="two-value">$</span>
                <span className="two-value">4</span>
              </Key>
              <Key align={true} className="key" data-code="Digit5" data-val="5">
                <span className="two-value">%</span>
                <span className="two-value">5</span>
              </Key>
              <Key align={true} className="key" data-code="Digit6" data-val="6">
                <span className="two-value">^</span>
                <span className="two-value">6</span>
              </Key>
              <Key align={true} className="key" data-code="Digit7" data-val="7">
                <span className="two-value">&</span>
                <span className="two-value">7</span>
              </Key>
              <Key align={true} className="key" data-code="Digit8" data-val="8">
                <span className="two-value">*</span>
                <span className="two-value">8</span>
              </Key>
              <Key align={true} className="key" data-code="Digit9" data-val="9">
                <span className="two-value">(</span>
                <span className="two-value">9</span>
              </Key>
              <Key align={true} className="key" data-code="Digit0" data-val="0">
                <span className="two-value">)</span>
                <span className="two-value">0</span>
              </Key>
              <Key align={true} className="key" data-code="Minus" data-val="-">
                <span className="two-value">_</span>
                <span className="two-value">-</span>
              </Key>
              <Key align={true} className="key" data-code="Equal" data-val="=">
                <span className="two-value">+</span>
                <span className="two-value">=</span>
              </Key>
              <Backspace
                className="key back-space-key"
                data-code="Backspace"
                data-val="Backspace"
              >
                Backspace
              </Backspace>
            </Row>
            <Row>
              <FnKey className="key tab-key">Tab</FnKey>
              <Key className="key" data-code="KeyQ" data-val="q">
                Q
              </Key>
              <Key className="key" data-code="KeyW" data-val="w">
                W
              </Key>
              <Key className="key" data-code="KeyE" data-val="e">
                E
              </Key>
              <Key className="key" data-code="KeyR" data-val="r">
                R
              </Key>
              <Key className="key" data-code="KeyT" data-val="t">
                T
              </Key>
              <Key className="key" data-code="KeyY" data-val="y">
                Y
              </Key>
              <Key className="key" data-code="KeyU" data-val="u">
                U
              </Key>
              <Key className="key" data-code="KeyI" data-val="i">
                I
              </Key>
              <Key className="key" data-code="KeyO" data-val="o">
                O
              </Key>
              <Key className="key" data-code="KeyP" data-val="p">
                P
              </Key>
              <Key
                align={true}
                className="key"
                data-code="BracketLeft"
                data-val="["
              >
                <span className="two-value">&#123;</span>
                <span className="two-value">&#91;</span>
              </Key>
              <Key
                align={true}
                className="key"
                data-code="BracketRight"
                data-val="]"
              >
                <span className="two-value">&#125;</span>
                <span className="two-value">&#93;</span>
              </Key>
              <FnKey
                align={true}
                className="key back-slash-key"
                data-code="Backslash"
                data-val="\"
              >
                <span className="two-value">|</span>
                <span className="two-value">\</span>
              </FnKey>
            </Row>
            <Row>
              <CapsKey className="key caps-lock-key">CapsLock</CapsKey>
              <Key className="key" data-code="KeyA" data-val="a">
                A
              </Key>
              <Key className="key" data-code="KeyS" data-val="s">
                S
              </Key>
              <Key className="key" data-code="KeyD" data-val="d">
                D
              </Key>
              <Key className="key" data-code="KeyF" data-val="f">
                F
              </Key>
              <Key className="key" data-code="KeyG" data-val="g">
                G
              </Key>
              <Key className="key" data-code="KeyH" data-val="h">
                H
              </Key>
              <Key className="key" data-code="KeyJ" data-val="j">
                J
              </Key>
              <Key className="key" data-code="KeyK" data-val="k">
                K
              </Key>
              <Key className="key" data-code="KeyL" data-val="l">
                L
              </Key>
              <Key
                align={true}
                className="key"
                data-code="Semicolon"
                data-val=";"
              >
                <span className="two-value">:</span>
                <span className="two-value">;</span>
              </Key>
              <Key align={true} className="key" data-code="Quote" data-val="'">
                <span className="two-value">"</span>
                <span className="two-value">'</span>
              </Key>
              <EnterKey className="key enter-key" data-code="Enter">
                Enter
              </EnterKey>
            </Row>
            <Row>
              <LeftShift className="key left-shift-key" data-code="ShiftLeft">
                Shift
              </LeftShift>
              <Key className="key" data-code="KeyZ" data-val="z">
                Z
              </Key>
              <Key className="key" data-code="KeyX" data-val="x">
                X
              </Key>
              <Key className="key" data-code="KeyC" data-val="c">
                C
              </Key>
              <Key className="key" data-code="KeyV" data-val="v">
                V
              </Key>
              <Key className="key" data-code="KeyB" data-val="b">
                B
              </Key>
              <Key className="key" data-code="KeyN" data-val="n">
                N
              </Key>
              <Key className="key" data-code="KeyM" data-val="m">
                M
              </Key>
              <Key align={true} className="key" data-code="Comma" data-val=",">
                <span className="two-value">&lt;</span>
                <span className="two-value">,</span>
              </Key>
              <Key align={true} className="key" data-code="Period" data-val=".">
                <span className="two-value">&gt;</span>
                <span className="two-value">.</span>
              </Key>
              <Key align={true} className="key" data-code="Slash" data-val="/">
                <span className="two-value">?</span>
                <span className="two-value">/</span>
              </Key>
              <RightShift
                className="key right-shift-key"
                data-code="ShiftRight"
              >
                Shift
              </RightShift>
            </Row>
            <Row>
              <SubKey className="key fn-key">Ctrl</SubKey>
              <SubKey className="key fn-key">-</SubKey>
              <SubKey className="key fn-key">Alt</SubKey>
              <SpaceKey
                className="key space-key"
                data-code="Space"
                data-val="Space"
              >
                Space
              </SpaceKey>
              <SubKey className="key fn-key">Alt</SubKey>
              <SubKey className="key fn-key">Fn</SubKey>
              <SubKey className="key fn-key">-</SubKey>
              <SubKey className="key fn-key">Ctrl</SubKey>
            </Row>
          </div>
        </KeyboardSection>
      </div>
    </AppStyle>
  );
}

export default App;
