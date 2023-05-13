# image-slider-react
리액트로 이미지 슬라이더를 구현하라.<br>
📕WIL :https://www.notion.so/fun-blog/4-3-WIL-2-c2e83d7c9a8f41dfa614f982784dc33a

- useEffect를 통해 렌더링 직후 autoplay를 구현하였고, return 정리함수를 사용하여 렌더링이 발생하기 전,<br>
  이전 이벤트에 대한 내용을 정리할 수 있도록 하였습니다. 이를 통해 이벤트가 서로 겹쳐서 발생하는 문제를 사전 방지할 수 있습니다.
- 이미지 슬라이더의 리스트를 동적으로 생성되게 하였습니다.<br>
  그와 연결되어 있는 indicator 역시 img수에 따라 동적으로 생성될 수 있도록 하였습니다
- useState가 slider의 현재 index를 관리하고 있습니다.<br>
  prev버튼, next버튼, indicator를 통해 변경된 slider index를 바로 감지하여 화면에 해당 slider를 보여줍니다.

https://user-images.githubusercontent.com/85012454/235809652-67c4a898-df08-4fbd-b71a-1270b3ebfb77.mp4


## Installation

```bash
> yarn install
```

## Run Dev Server

```bash
> yarn start
```
