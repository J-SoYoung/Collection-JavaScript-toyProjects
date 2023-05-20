# 미니 프로젝트 스터디 폴더입니다
### 📕NOTION <br> 
https://www.notion.so/fun-blog/NOTE-d0f4f3b9f8574aff9738314e04043f7a <br>
이번 미니프로젝트 시리즈에서는 **코딩력을 높이기 위해**,<br>
강의를 들으며 자바스크립트의 다양한 활용법에 대해 공부했습니다. <br>
이후 **같은 주제로 리액트나 타입스크립트로 업그레이드**하여 다시 한번 개발해보는 시간을 가졌습니다.<br>
<br>

# keyboard
![image](https://user-images.githubusercontent.com/85012454/233993113-8010f9ec-94f2-4db7-988f-e94194a39079.png)
### [ keyboard - javascript ]
- 🔎 https://github.com/thdud2262/miniPROJECT-01/tree/master/keyboard
- webpack, eslint, prettier등을 활용하여 개발환경을 설정합니다.
- html, css를 이용하여 키보드 레이아웃을 구현합니다.
- mouse event, keypress 이벤트를 활용하여 키보드 기능을 구현합니다.

### [ keyboard - react ]
- 🔎 https://github.com/thdud2262/miniPROJECT-01/tree/master/keyboard-react
- 위에서 자바스크립트로 구현한 미니 프로젝트를 리액트로 구현합니다.
- onKeyDown, onKeyUp이벤트를 활용합니다. 
- styled-component를 활용하여 스타일을 동적으로 설정합니다.
- useState의 함수형 업데이트, useRef를 사용하여 실시간으로 사용자의 입력과 동일하게 스타일을 변경하는 키보드를 구현합니다.
<br>

# image-slider
![image](https://user-images.githubusercontent.com/85012454/233810284-7039c23c-d3d9-4b2a-ade0-f99e128c3ee8.png)
### [ image-slider - javascript ]
- 🔎 https://github.com/thdud2262/miniPROJECT-01/tree/master/image-slider
- webpack모듈에서 image파일을 js-inline으로 설정하여 js와 함께 번들링합니다.
- li태그에 img파일을 삽입하고, 버튼을 클릭할 때마다 li의 위치를 변경하여 image-slider를 구현합니다.
- prev, next버튼, indicator를 구현하고 setInterval을 활용하여 auto-paly를 구현합니다.

### [ image-slider - react ]
- 🔎 https://github.com/thdud2262/miniPROJECT-01/tree/master/image-slider-react
- useEffect를 활용하여 렌더링 직후 autoPlay가 되도록 구현합니다. ( + 정리함수 )
- img슬라이드와 indicator를 img데이터에 따라 동적으로 생성되도록 구현합니다.
- useState로 currentSlider값을 관리하여 slider의 현재 index를 화면에 띄워줍니다.
<br>

# gallary
![image](https://user-images.githubusercontent.com/85012454/236586423-7a816b4b-1409-4d3c-9101-f3c28f02c6c8.png)

### [ image-gallary (typescript) ]
- 🔎 https://github.com/thdud2262/miniPROJECT-01/tree/master/gallary
- new FileReader()를 사용해 파일 객체를 만들고 img파일을 추가합니다.
- react-dropzone 라이브러리를 사용해 사용자가 드래그앤 드롭으로 이미지를 추가할 수 있도록 합니다.

### [ mini-album-Project (typescript) ]
- 🔎 https://github.com/thdud2262/miniPROJECT-01/tree/master/gallary-miniPJ
- 이전 프로젝트에서 한 단계 업그레이드하여 image와 text를 같이 입력하여 사진에 대한 짧은 설명도 같이 작성할 수 있도록 합니다.
- input으로 사용자의 file을 입력받은 후 미리보기를 구현하여 추가 전 이미지를 볼 수 있도록 합니다
- typescript로 이미지와 텍스트를 포함하는 객체의 타입을 정의하였습니다.
<br>

# date-picker
### [ date-picker (javascript ) ]
- 🔎 https://github.com/thdud2262/miniPROJECT-01/tree/master/date-picker
- calendar의 month와 date를 동적으로 생성하고, prev-next버튼을 클릭하여 월을 이동할 수 있다.
- 사용자가 클릭한 date의 style을 지정할 수 있다.  
