# miniPJ-gallary
📕notion : https://www.notion.so/fun-blog/5-1-02-miniPJ-gallay-09a1fec9bd784156a8c9d9b2633d0720 <br>
<br>

### input type=’file’은 못생겼다. <br>
- input type=’file’ 태그는 두고, css의 display를 none으로 작성하였다. input의 기능은 살아있지만 화면에는 보이지 않게 설정한 것이다.  그리고 useRef를 통해서 input 태그의 값을 저장해두었다.이를 활용하여 내가 스타일링한 p 태그와 inputRef를 연동 하였다.
- ref의 current 프로퍼티는 input을 가리키고 있다. click( ) 메서드는 DOM이벤트의 메서드 중 하나이다. <br>
  이 메서드를 통해서 inputRef.current 가 참조하는 input을 클릭한 효과를 낼 수 있다.<br>
![image](https://user-images.githubusercontent.com/85012454/236651210-a1348601-1f7a-48f3-87dc-1497d5aa513d.png)

 ### 사용자가 선택한 file을 미리볼 수 있다.
- input의 onChange이벤트를 통해 사용자의 file을 확인할 수 있다. 이벤트 객체의 target프로퍼티 안에 files의[0] 번째 내용을 통해 file정보를 확인할 수 있다.
- new FileReader()로 파일 객체를 생성하여 event로 받은 file정보를 readAsDataURL메서드를 사용해 URL로 바꿀 수 있다. file객체 내부의 result값이 해당 파일의 img-url로 바뀌면 setSelectImage를 reader.result로 업데이트 할 수 있다.
  ![image](https://user-images.githubusercontent.com/85012454/236651286-ee828ff9-4ea7-49e2-bde6-87e449794a61.png)

### useState로 데이터들을 어떻게 관리했나!?
- input으로 데이터를 받는 것은 text와 img였다. 각각을 state에 담아서 관리하였다. <br>
  gallary는 하나의 데이터가 아닌 리스트 형태의 데이터를 보여줄 것이기 때문에<br>
  viewList라는 state를 만들어 img와 text를 하나의 객체로 묶어서 배열 안에 관리한다. <br>
- 이때, state의 초기값을 어떻게 설정할 것인지 고민이 되기 시작한다.<br>
  img와 text는 각각 string이고, 객체로 묶어서 배열 안에 넣어야 한다.
- interface를 생성하여 string타입의 image와 text를 객체로 묶어서 viewItem으로 정의를 해 놓는다.<br>
  이후 viewItem을 [ ] 배열로 묶어서 useState의 초기값으로 정의한다.
  

https://user-images.githubusercontent.com/85012454/236651370-f2d0bafa-1f57-46fd-856b-d8813bfe3d4d.mp4

