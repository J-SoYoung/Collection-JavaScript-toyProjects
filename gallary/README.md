# basic-gallary
📕notion : https://www.notion.so/fun-blog/5-1-01-basic-gallary-ad7db9d4aa204884becbf6b7b68e6755
![image](https://user-images.githubusercontent.com/85012454/236651108-363d305c-2794-4870-b213-47034555da93.png)


- input의 type을 file로 설정하여 사용자의 파일입력을 받을 수 있었고, 입력한 내용을 useState에 배열 형태로 저장하여 관리하였다.
- input으로 받은 파일 형태는 URL이기 때문에 img태그 안에 들어갈 수 없다. <br>
  그래서 new FileReader( ) 파일 객체를 만들었고, img태그 안의 src속성에 추가하여 사용자 화면에 보여줄 수 있었다.
- input type의 file로 사용자의 입력을 받는 것도 좋지만, input의 기본 style이 아닌 추가 버튼을 클릭했을 때,<br>
  사용자의 입력을 받고 싶어서 useRef를 사용해서 input의 file type기능과 버튼을 연결해주었다.
- state에 이미지를 추가하기 위해서 함수형 업데이트를 하였고, 이때 이전 img리스트들이 사라지면 안되기 때문에<br>
  …스프레드 문법을 사용해 이전 파일들도 같이 state에 업데이트 시켜주었다.
- state가 관리하는 imgList의 길이에 따라서 해당 태그의 className도 동적으로 추가하여 style을 다르게 주었다.
- 라이브러리 드래그 앤 드롭을 사용하여 사용자가 버튼을 클릭하지 않고도 이미지를 추가할 수 있게 하였다
