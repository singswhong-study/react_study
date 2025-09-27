# Getting Started with Create React App

1. npx create-react-app react_study 로 프로젝트 생성. [Create React App](https://github.com/facebook/create-react-app).

2. 구조 설명
    - index.js 를 메인페이지로 동작함. 여러가지 전역적 설정이 들어감.
    - App.js 가 import되어 구성됨. UI 구성.
    - index.css, app.css => 초기 디자인페이지. 
    - id="root" 대상 위치는 /public/index.html 에 있다.

3. 배포 
    - npm run build : /build 에 빌드된 파일 생성.
    - npx serve -s build : 빌드된 index.html 로 서비스한다. 
    - npm start : 개발환경을 위한 실행.

4. 컴포넌트 구성
    - class 와 function 구성. 여기선 function으로.
    - 각 관심 tag를 function 단위로 쪼갠다 => custom tag = component
    - component tag는 대문자로 시작한다. 소문자는 html tag.

5. useState 활용. 
    - 해당 컴포넌트내에서 state 활용 필요
    - 전역적으로 활용되는건         
        1) 작거나 중간 규모의 애플리케이션, 또는 간단한 전역 상태 공유: Context API + useReducer
        2) 대규모 애플리케이션, 예측 가능하고 강력한 디버깅이 필요할 때: Redux (Redux Toolkit 권장).
        3) 가볍고 사용하기 쉬운 솔루션, 적은 보일러플레이트: Zustand, Jotai
        4) 리액트의 최신 기능을 활용하고, 컴포넌트 간 효율적인 상태 공유가 필요할 때: Recoil
    - 여기서는 redux 사용
        1) redux 설치.
        2) redux-persist 설치 => 이게 없으면 state update 후 새로고침 시 정상작동x
        
