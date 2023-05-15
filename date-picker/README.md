# date-picker [ javascript ]

📕 notion : https://www.notion.so/fun-blog/_5-WIL-1-1b185f65d64e4509b849eaa21617c7bb <br>
- CSS의 전처리기인 SCSS를 사용하여 스타일링 하였다.
- month와 date를 동적으로 생성하여 prev, next버튼을 클릭하면 해당 월의 calendar가 자동 생성된다

### 전체 개발 순서
- class로 인스턴스 생성, constructor 초기화 설정, 프로퍼티 ( 변수값 ) 설정
- node를 지정하는 element 함수를 생성, init함수, event함수 생성
- DateBox를 클릭하면 달력을 보여준다. ( toggle )
- 달력의 month와 date는 동적으로 생성한다.
- 토요일과 일요일의 style을 다르게 해 준다.
- next, prev버튼을 클릭하여 월 이동 ( 1월, 12월에는 년도 변경 신경쓰기 )
- 오늘 날짜에 style 생성, 클릭한 날짜에 style생성
- 날짜를 클릭하면 DateBox에 날짜 변경

### WIL
‘달력’은 따로 제작하기보다는 누군가 만들어 둔 것을 사용하는 경우가 대다수였다.<br> 
그래서 달력 프로젝트를 공부하면서, ‘이러한 부분들도 생각해줘야 하는구나!’ 하면서 놀랐던 부분들이 많았다. <br>
예를 들면 
- 토요일은 파란색, 일요일은 빨간색으로 설정해 줘야 하는 것,
- 월의 첫 1일의 요일을 지정해 줘야 하는 것
- today날짜와 사용자가 선택한 날짜를 다르게 표시해야 하는 것 <br>

이런 섬세한 동작을 JavaScript로 구현할 수 있는 기회가 되어서 좋은 공부가 됐다.  <br>
date메서드의 getDay, getDate를 활용해 월별 날짜를 구해 for문을 통해 date element를 구현하는 부분이 가장 재미있었고, <br>
토/일요일을 동적으로 구현하는 코드를 분석하는 것도 꽤 흥미로웠다. <br> 
책에서만 보던 메서드와 문법을 활용해 실제 프로젝트에 적용해 볼 수 있는 시간이었다. <br>
강의를 통해 자바스크립트의 활용법을 배우지만, 더 많이 익숙해진다면 나도 다양한 문법, 메서드의 활용을 할 수 있을 것이다!

## Installation
```bash
> npm install
```
## Run Dev Server
```bash
> npm run start
```
![image](https://github.com/thdud2262/miniPROJECT-01/assets/85012454/88299540-0a1d-45bb-8348-9b4d8817f1d0)
