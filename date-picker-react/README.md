# date-picker [ REACT ]
📕 WIL : https://www.notion.so/fun-blog/_5-WIL-2-1de36ed71a4b43929a148f518e9f8967<br>

### 구현 순서, 방법
- DateBox를 클릭하면 달력을 보여준다. ( toggle )
- 달력의 month와 date는 동적으로 생성한다.
- next, prev버튼을 클릭하여 월 이동 ( 1월, 12월에는 년도 변경 신경쓰기 )
- 토요일과 일요일의 style을 다르게 해 준다.
- 오늘 날짜에 style 생성, 클릭한 날짜에 style생성
- 날짜를 클릭하면 DateBox에 날짜 변경

### WIL
- **강의대로만 생각하려고 하지 생각이 막혔다.** <br>
  자바스크립트로 달력을 구현하는 강의를 듣고 리액트로 구현하는 프로젝트를 진행하고 있다. 강의 순서대로 흘러가는 생각이 리액트 구현에 약간의 문제를 발생시키는 듯 했다. 리액트는 노드를 직접적으로 관여하여 실행하는 프로그램이 아니기 때문이다.<br>
  약간의 사고 전환이 필요했다. 그 도움을 받은 것은 ChatGPT였고, 내가 작성한 코드와 비교해서 필요한 부분만 추출해서 사용해 문제를 해결했다.  
- date를 동적으로 생성할 때, 자바스크립트처럼 node를 직접 수정하면 안됐다.<br>
  리액트는 버춸돔에서 변화를 감지해 실제 돔에 렌더링을 시키기 때문에, state를 활용해 date를 생성해줘야 했다. prev, next 버튼을 클릭해 date태그를 생성하는 함수를 실행시켰었는데, 이 부분에서 타이밍이 맞지 않는 문제가 발생했다. 여러 테스트를 해 본 뒤, 렌더링 부분과 관련지어 생각해 본 뒤 useEffect를 활용해 문제를 해결했다. <br>
🔎 https://www.notion.so/fun-blog/5-2-02-react-prev-next-date-754651e32e05417ba135ca1e4874bb3b

![image](https://github.com/thdud2262/miniPROJECT-01/assets/85012454/8c760aad-0d19-4aa6-98d9-d22746ebc09c)

## Installation
```bash
> yarn install
```
## Run Dev Server
```bash
> yarn start
```
