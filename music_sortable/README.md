# music-sortable
드래그 앤 드롭 기능을 구현하여 라이브러리로 배포하였습니다. 이후 music-player에서 install하여 사용하였습니다.<br>
📕notion : https://www.notion.so/fun-blog/lib-d481d3f7ffbd4e5e88cb93f4bc75fab2
<br>

## 배포하기
```bash
// npm 로그인
> npm login

// 첫 배포
> npm run publish --access public

// 파일 수정 후 배포 ( 로그인 후 )
> npm run publish
```
파일 수정 후 배포시, package.json파일의 verson을 업그레이드 한 후에 배포해야 한다. <br>
그렇지 않으면 업데이트 내용이 반영되지 않는다. <br>
<br>

## sortable 라이브러리 설치 및 시작
```bash
> npm install 
> npm start
```
<br>

## lib install 라이브러리 설치 
( 다른 프로젝트에서 install 후 사용 )
```bash
> npm i @thdud/sortable-list
```
