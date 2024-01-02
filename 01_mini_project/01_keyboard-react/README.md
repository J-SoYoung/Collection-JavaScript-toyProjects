# keyboard 프로젝트를 리액트로 구현합니다.
https://user-images.githubusercontent.com/85012454/232804837-626cef17-2343-4a81-90cd-4d3cd48eb171.mp4


### 구현내용
- font-style, keyboard-theme를 styled-componenets를 사용하여 동적으로 스타일을 구현했습니다. <br>
  🔎 https://www.notion.so/fun-blog/4-2-02-keyboard-css-react-bbf95b5aa94845caa6069a8c676ed6a1 <br>

- onClick이벤트를 활용하여 키보드의 이미지를 마우스로 클릭하면 input창에 입력될 수 있도록 구현하였습니다.<br>
  🔎 https://www.notion.so/fun-blog/4-2-02-event-bubble-18e238d327a34d90ba648e5baa8de661 <br>
  
- onKeyDown, onKeyUp를 활용하여 사용자의 키보드 입력을 받아 화면에 있는 키보드 이미지에 style을 주었습니다. 이때, 자바스크립트에서는 querySelector로 구현했던 부분을 react-hooks인 useRef를 사용하여 DOM요소를 참조하였습니다. <br>
  🔎 https://www.notion.so/fun-blog/4-2-02-keyboard-event-useRef-b4bc0ca1b2194efc962897e0926a2e92<br>
  <br>

## 설치하기 Installation

```bash
> yarn install
```

## 시작하기 Running the app

```bash
> yarn start
```

## 빌드하기 Build

```bash
> yarn build
```
