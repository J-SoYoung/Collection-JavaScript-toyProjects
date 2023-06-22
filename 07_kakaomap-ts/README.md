# kakaomap-ts
📕notion : https://www.notion.so/fun-blog/7-kakaomap-a8aa0a9d9c7a4e2493735d2b3ee2eaa5<br>
<br>

## Today I Learn
- 리액트 프로젝트레서 map을 활용할 때 스크립트를 html에 바로 적용하지 않고 map을 사용하는 컴포넌트에 동적으로 생성해주는 방법을 배웠다. 이후 kakaomap을 활용하는 법은 문서를 통해 더 적용해 볼 생각이다. <br>

- public에 html에 script를 추가하는 방법은 쉽지만 이보다는 해당 컴포넌트에서 script를 동적으로 로드하는 방법을 사용하는 것이 좋다. 이유는 html에 script를 추가하면 map을 사용하지 않을 때에도 script가 로딩되기 때문에 불필요한 script로딩이 발생하기 때문이다. 이를 통해 다른 라이브러리를 활용할 때에도 html에 직접 script를 추가하기 보다는 해당 컴포넌트에서 script를 사용할 수 있게 코드를 작성할 것 같다. 

## STUDY
- typescript를 사용하여 구현하였는데, kakao는 type이 정해져있지 않다. var로 kakao를 할당하여 window객체로 만들어 declare로 타입을 추가하여 지정해주는 방법도 공부할 수 있었다. 
- TypeScript에서 declare 키워드는 타입 시스템에 타입을 직접 선언하거나, 존재하지 않는 외부 패키지나 라이브러리의 타입을 가져올 때 사용된다. declare 키워드는 컴파일러에게 해당 식별자에 대한 타입 정보가 이미 존재한다는 것을 알려준다. 
    ```jsx
    declare global {
      interface Window {
        kakao: any;
      }
    }
    ```
- script태그를 컴포넌트에서 생성할 수 있도록 node에 추가한다
    
    ```jsx
    // 스크립트 태그 생성
    const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=[apikey]e";
    
    // head에 스크립트 태그 추가 => 동적으로 head에 script태그가 생성된다
    document.head.appendChild(script);
    ```


## 설치하기 Installation

```bash
> yarn install
```

## 시작하기 Running the app

```bash
> yarn start
```
