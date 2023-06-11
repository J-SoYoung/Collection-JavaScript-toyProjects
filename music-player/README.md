# music-player
📕notion : https://www.notion.so/fun-blog/_7-WIL-ec7de5cebe044e499baba01c77a00dea <br>
<br>

https://github.com/thdud2262/miniPROJECT-01-React-JS/assets/85012454/70cdcd1f-1d04-40ac-8f3a-e4d4fd050ae0.mp4

## 구현기능
- redux-toolkit 라이브러리를 사용하여 프로젝트를 구현하였습니다.
- audio태그에서 제공되는 메서드를 활용해 재생/정지기능, 볼륨, 이전/다음곡 기능을 구현하였습니다.
- 음악 재생시간에 따른 프로그레스바를 구현하였습니다.
- @thdud/sortable-list 라이브러리를 프로젝트에 적용하여 playlist의 드래그 앤 드롭 기능을 구현하였습니다.
<br>

## 느낀점
- audio태그의 기능과 함께 react, redux를 활용해 프로젝트를 구현하였다.  audio태그를 활용한 프로젝트는 처음이다보니, 음악 재생은 어떻게 구현하지? 음악 재생 시간은 어떻게 구현해야 하지? 같은 궁금증이 컸다. 하지만 audio태그는 HTML에서 제공하는 API가 있기 때문에 오디오와 관련된 부분은 메서드를 활용하여 구현하는 방법을 배울 수 있었다.<br>
- 오히려 playList의 data인 currentInedex, repeat, playing, 등의 프로퍼티를 정하는 것에서부터 그것을 활용해 기능을 구현하는 공부를 할 수 있어 재미있었다. 오디오의 재생/정지 기능, 재생 시간에 따른 프로그레스바 구현, 이전/다음곡 넘기기 등의 기능을 하는 함수를 구현하면서 ‘이런 것도 직접 구현해야 하는 거였구나, 구현이 되네?’하는 감탄을 하기도 했다. 단순히 오디오 태그에 src로 데이터를 넣어서만 해결되는 부분이 아니라 작은 기능들이 완성돼 하나의 뮤직 플레이가 되었던 것이다. <br>
- 오디오 관련 라이브러리들이 많겠지만 이렇게 직접 기능을 구현해보는 것도 굉장히 좋은 기회였던 것 같다.
<br>


## Installation
```bash
> npm install
```
## Run Dev Server
```bash
> npm start
```
