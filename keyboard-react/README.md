# keyboard 프로젝트를 리액트로 구현합니다.
https://user-images.githubusercontent.com/85012454/232804837-626cef17-2343-4a81-90cd-4d3cd48eb171.mp4


### 구현내용
- font-style, keyboard-theme를 styled-componenets를 사용하여 동적으로 스타일을 구현했습니다. <br>
  🔎 https://www.notion.so/fun-blog/4-2-02-keyboard-css-react-91134ba2350b43bf878138a791c0a986

- onClick이벤트를 활용하여 키보드의 이미지를 마우스로 클릭하면 input창에 입력될 수 있도록 구현하였습니다.
  🔎 https://www.notion.so/fun-blog/4-2-02-event-bubble-434cea3a8f684d0ab02ad4273bb15ed6 <br>
  
- onKeyDown, onKeyUp를 활용하여 사용자의 키보드 입력을 받아 화면에 있는 키보드 이미지에 style을 주었습니다. 이때, 자바스크립트에서는 querySelector로 구현했던 부분을 react-hooks인 useRef를 사용하여 DOM요소를 참조하였습니다. 
  🔎 https://www.notion.so/fun-blog/4-2-02-keyboard2-9e0a715e61ca4c908dcffc0f5244bd46
