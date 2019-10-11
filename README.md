<div align="center">

# React로 NodeBird SNS 만들기([Inflearn](https://www.inflearn.com/course/react_nodebird/dashboard))

트위터와 비슷한(이라고 쓰고 짝퉁이라 읽는다) 제로초의 시그니처 프로젝트 NodeBird SNS 만들기

</div>

## Goal

- **understanding**: 리액트 Hooks나 Next 같은 리액트 응용
- **making**: Next.js(SSR) + React Hooks + Redux + Redux saga + Ant Design + Styled Components + Node + Express + Sequelize(MySQL) + AWS 배포(간단하게 EC2 + Lambda + S3 + Route53 사용)

</br>

## Curriculum

- [x] [#1-1 프로젝트 구조와 배우는 것들](https://github.com/sweetmilkys/zc-nodebird/commit/4e0080120b7e550a868cc6955d5094781c43340c)
- [x] [#1-2 next와 eslint 설치하기](https://github.com/sweetmilkys/zc-nodebird/commit/c1d2fcbe2164af9599aea8f7b9fd254f91a7da44)
- [x] [#1-3 next 라우팅 시스템](https://github.com/sweetmilkys/zc-nodebird/commit/3d5213e3f2528f8ddbe7506dbe5bb4b62836d3ab)
- [x] [#1-4 ant design 적용하기](https://github.com/sweetmilkys/zc-nodebird/commit/fe5f828ed935cee9a144192d2722a43171a6456e)
- [x] #1-5 기본 페이지들 만들기
- [x] [#1-6 회원가입 폼 만들기](https://github.com/sweetmilkys/zc-nodebird/commit/d92d25fb8a22da8613cad64f8f42adb15026941d)
- [x] [#1-7 회원가입 state와 custom hook](https://github.com/sweetmilkys/zc-nodebird/commit/a4901f3b59021d182dbbf362af2e4bd291b8f25c)
- [x] [#2-1 \_app.js로 레이아웃 분리하기](https://github.com/sweetmilkys/zc-nodebird/commit/4d1bbbb29583452f8539d21f8f2cde188e22879a)
- [x] [#2-2 prop-types](https://github.com/sweetmilkys/zc-nodebird/commit/d80a03d45e77721365cc6790d9723b76b9ab9459)
- [x] [#2-3 antd 그리드 시스템](https://github.com/sweetmilkys/zc-nodebird/commit/799cd794fc9eedf801f6d148b6bca7b9443fea33)
- [x] [#2-4 커스텀 훅 재사용하기](https://github.com/sweetmilkys/zc-nodebird/commit/8424824964ac17d1827fc3b02fdc8402e3bbf6a1)
- [x] [#2-5 메인 화면 만들기](https://github.com/sweetmilkys/zc-nodebird/commit/ada1694bc4633828515deed2b15479354b9cfb5b)
- [x] [#2-6 프로필 화면 만들기](https://github.com/sweetmilkys/zc-nodebird/commit/6b8cd715164f9840ba5d87397eebc6ee583e25e1)
- [x] [#2-7 컴포넌트 분리하기](https://github.com/sweetmilkys/zc-nodebird/commit/c9b53f21d5aa1b04bf205fd3b858adc86e6ef80d)
- [x] [#3-1 redux 주요 개념 소개](https://github.com/sweetmilkys/zc-nodebird/commit/a331e6ed72285334a42bfee9175017ae50aa8818)
- [x] [#3-2 첫 리듀서 만들기](https://github.com/sweetmilkys/zc-nodebird/commit/26d5c9abcefd02fe26c3dd89f1161f9ea5e9c870)
- [x] [#3-3 불변성과 리듀서 여러 개 합치기](https://github.com/sweetmilkys/zc-nodebird/commit/6ac54fb0152c380e91665a656b47af9a231f73b1)
- [x] [#3-4 redux react 연결하기](https://github.com/sweetmilkys/zc-nodebird/commit/fa6c3e7ddb1da3da8ab9d7fe2f1856bd144dda57)
- [x] [#3-5 redux devtools 사용하기]
- [ ] [#3-6 react-redux 훅 사용하기]
- [ ] [#3-7 react-redux connect]
- [ ] [#3-8 dummy 데이터로 리덕스 사용하기]
- [ ] [#3-9 리액트 state와 리덕스 state]
- [ ] [#4-1 리덕스 사가의 필요성과 맛보기]
- [ ] [#4-2 사가 미들웨어 리덕스에 연결하기]
- [ ] [#4-3 ES2015 제너레이터]
- [ ] [#4-4 사가의 제너레이터 이해하기]
- [ ] [#4-5 사가에서 반복문 제어하기]
- [ ] [#4-6 takeEvery, takeLatest]
- [ ] [#4-7 fork, call, 사가 총정리]
- [ ] [#4-8 사가 패턴과 Q&A]
- [ ] [#4-9 eslint-config-airbnb와 코드정리]
- [ ] [#4-10 redux state와 action 구조 잡기]
- [ ] [#4-11 로그인 리덕스 사이클]
- [ ] [#4-12 회원가입 리덕스 사이클]
- [ ] [#4-13 게시글 작성 리덕스 사이클]
- [ ] [#4-14 next Router로 페이지 이동하기]
- [ ] [#4-15 댓글 컴포넌트 만들기]
- [ ] [#4-16 댓글 작성 리덕스 사이클]
- [ ] [#5-1 백엔드 서버 구동에 필요한 모듈들]
- [ ] [#5-2 HTTP 요청 주소 체계 이해하기]
- [ ] [#5-3 Sequelize와 ERD]
- [ ] [#5-4 테이블간의 관계들]
- [ ] [#5-5 시퀄라이즈 Q&A와 DB연결하기]
- [ ] [#5-6 백엔스 서브 API 만들기]
- [ ] [#5-7 회원가입 컨트롤러 만들기]
- [ ] [#5-8 실제 회원가입과 미들웨어들]
- [ ] [#5-9 로그인을 위한 미들웨어들]
- [ ] [#5-10 passport와 쿠키, 세션 동작 원리]
- [ ] [#5-11 passport 로그인 전략]
- [ ] [#5-12 passport 총정리와 실제 로그인]
- [ ] [#5-13 다른 도메인간에 쿠키 주고 받기]
- [ ] [#5-14 include와 as, foreignkey]
- [ ] [#5-15 로그아웃과 사용자 정보 가져오기]
- [ ] [#5-16 게시글 작성과 데이터 관계 연결하기]
- [ ] [#5-17 게시글 불러오기]
- [ ] [#6-1 해시태그 링크로 만들기]
- [ ] [#6-2 next와 express 연결하기]
- [ ] [#6-3 getInitialProps로 서버 데이터 받기]
- [ ] [#6-4 해시태그 검색, 유저 정보 라우터 만들기]
- [ ] [#6-5 Link 컴포넌트 고급 사용법]
- [ ] [#6-6 댓글 작성, 댓글 로딩]
- [ ] [#6-7 미들웨어로 중복 제거하기]
- [ ] [#6-8 이미지 업로드 프론트 구현하기]
- [ ] [#6-9 multer로 이미지 업로드 받기]
- [ ] [#6-10 express.static과 이미지 제거]
- [ ] [#6-11 폼데이터로 게시글 올리기]
- [ ] [#6-12 게시글 이미지 표시하기]
- [ ] [#6-13 react-slick으로 이미지 슬라이더 구현]
- [ ] [#6-14 게시글 좋아요, 좋아요 취소]
- [ ] [#6-15 리트윗 API 만들기]
- [ ] [#6-16 리트윗 프론트 화면 만들기]
- [ ] [#6-17 팔로우, 언팔로우]
- [ ] [#6-18 다른 리듀서 데이터 조작하기]
- [ ] [#6-19 프로필 및 데이터 로딩하기]
- [ ] [#6-20 닉네임 수정하기]
- [ ] [#7-1 서버 사이드 렌더링(SSR)]
- [ ] [#7-2 SSR을 위해 쿠키 넣어주기]
- [ ] [#7-3 리덕스 사가 액션 로깅하기]
- [ ] [#7-4 SSR에서 내 정보 처리하기]
- [ ] [#7-5 회원가입 리다이렉션과 포스트 제거]
- [ ] [#7-6 페이지네이션]
- [ ] [#7-7 더보기 버튼]
- [ ] [#7-8 인피니트 스크롤링]
- [ ] [#7-9 쓰로틀링(throttling)]
- [ ] [#7-10 immer로 불변성 쉽게 쓰기]
- [ ] [#7-11 프론트 단에서 리덕스 액션 호출 막기]
- [ ] [#7-12 개별 포스트 불러오기]
- [ ] [#7-13 react-helmet으로 head 태그 조작하기]
- [ ] [#7-14 react-helmet SSR]
- [ ] [#7-15 styled-components]
- [ ] [#7-16 styled-components SSR]
- [ ] [#7-17 기타 기능 구현과 Q&A]
- [ ] [#7-18 폴더 구조와 _error.js]
- [ ] [#8-1 favicon 서빙과 prefetch]
- [ ] [#8-2 next.config.js]
- [ ] [#8-3 next-bundle-analyzer]
- [ ] [#8-4 tree shaking 예제와 gzip]
- [ ] [#8-5 최적화 예제 1]
- [ ] [#8-6 최적화 예제 2]
- [ ] [#8-7 최적화 예제 3]
- [ ] [#8-8 배포전 마지막 준비(IE, 에러표시)]
- [ ] [#8-9 ec2 생성, 접근하기]
- [ ] [#8-10 node, mysql 설치하기]
- [ ] [#8-11 프론트 서버 구동하기]
- [ ] [#8-12 pm2 서버 구동과 MySQL 에러 해결]
- [ ] [#8-13 도메인 연결하기]
- [ ] [#8-14 S3에 이미지 업로드]
- [ ] [#8-15 프론트, 백엔드 쿠키 통일하기]
- [ ] [#8-16 lambda 사용해보기]
- [ ] [#8-17 lambda 배포와 마무리]

</br>

## Stack

- ReactJS
- React Hooks
- Redux
- Redux saga
- Ant Design
- Styled Components
- Node
- Express
- Sequelize(MySQL)
- AWS(EC2, Lambda, S3, Route53)

</br>

## Libray

- typescript
- react
- react-dom
- next(next-redux-wrapper)
- nodemon
- webpack
- eslint(babel-eslint, eslint-plugin-import, eslint-plugin-react eslint-plugin-react-hooks)
- antd
- redux(react-redux)

</br>

## Reference

</br>

## Note

#### 프론트서버

- React, Next
- Redux
- Redux-saga
- Styled Components

#### 백엔드서버

- Express
- DB(MySQL)
- ORM(시퀄라이즈)
- passport
- multer (S3)
- Socket.IO

#### 1. 프론트/백엔드 분리하는 이유가 무엇인가?

장점:스케일링(각 서버의 처리 능력을 향상시키는 수직적 확장과 서비스를 파티션이나 샤드 단위로 분할하는 수평적 확장) 이슈
단점: 복잡도 증가 및 CORS등 이슈
분리되어 있으면 둘 중 하나의 요청이 많을 경우 요청이 없는 쪽의 자원낭비를 막을 수 있음  
[서버스케일링](http://jasonim.me/dev/295)

#### 2. 프론트서버의 역할은 무엇인가?

프론트화면에 필요한 html, css, js파일을 전달하고 서버로부터 데이터를 받아 화면을 그려줌. 화면을 그려주는 요청이 많을 경우 프론트서버를 여러대 늘려줌

#### 3. 백엔드서버의 역할은 무엇인가?

프론트엔드에서 발생한 데이터를 DB에 저장하고 처리. 데이터 처리 요청이 많을 경우 백엔드서버를 여러대 늘려줌

#### 4. Next.js

Universal 리액트 어플리케이션의 서버렌더링을 쉽게 구현 할 수 있게 도와주는 간단한 프레임워크

#### 5. Next 사용이유

사이트 검색이 잘 되도록하기 위해. SPA는 검색엔진에 검색이 잘 되지 않음. react가 화면을 렌더링 할때 검색 봇이 볼 수 있도록 컨텐츠를 같이 넣어서 렌더링해주는 서버사이드렌더링을 쉽게해줌  
[react-router :: 3장. 서버사이드 렌더링](https://velopert.com/3425)

#### 6. SPA

Single Page Application (싱글 페이지 어플리케이션) 의 약자입니다. 말 그대로, 페이지가 1개인 어플리케이션이란 뜻으로 client-side-rendering을 사용
싱글페이지 어플리케이션의 단점은 자바스크립트 번들 파일에 어플리케이션에 대한 모든 로직을 불러와서, 규모가 커지면 용량이 커지기 때문에, 로딩속도가 지연 될 수 있어 필요에 따라 번들 파일을 여러개의 파일로 분리시키는 코드 스플리팅이 필요
서버사이드렌더링에서 코드스플리팅이 아직 개발되지 않음  
[react-router :: 1장. 리액트 라우터 사용해보기](https://velopert.com/3417)

#### 7. client-side-rendering

클라이언트측에서 View를 생성하는 방법 view를 브라우저에서 렌더링하여 보여줘 로딩시간이 길지만 로딩이 끝난 후 바로 인터렉션에 반응함

#### 8. server-side-rendering

서버측에서 HTML&View를 생성하여 응답하는 방법 view를 서버에서 렌더링하여 가져오므로 첫로딩이 매우 짧으나 JS파일이 컴파일 될때 까지 인터렉션에 반응하지 않음  
[Client-side rendering vs. server-side rendering](https://medium.com/@adamzerner/client-side-rendering-vs-server-side-rendering-a32d2cf3bfcc)

#### 9. 코드스플리팅(Code Splitting)

필요에 따라 번들파일을 여러개로 분리 한개의 파일에서 처음부터 모두 불러오는 것이 아닌 라이브러리나 컴포넌트가 실제로 필요해질 때 불러옴  
[react-router :: 2장. 코드 스플리팅 (Code Splitting)](https://velopert.com/3421)

#### 10. socket.IO

브라우저와 서버간 실시간 양방향 통신이 가능

#### 11. npm init

npm init은 node 프로그램을 시작(initialize)하는 명령어로 package.json(해당 node 프로그램에 대한 기본 정보를 담고 있는 파일) 파일을 생성

#### 12. next

react 위에서 돌아가는 프레임워크, 코드스플리팅과 서버사이드렌더링을 위해

#### 13. nodemon

js파일이 변경될때마다 이를 감지하고 서버를 재부팅

#### 14. webpack

의존 관계에 있는 모듈들을 하나의 자바스크립트 파일로 번들링하는 모듈 번들러

#### 15. eslint

협업할 경우 코딩 스타일이 다르기 때문에 사용 권장하며 개발 시에만 확인 하면 되므로 설치시 -D를 붙여 devDependencies로 세팅

#### 16. next 라우팅

next에서는 자체 라우터가 있어서 리액트 라우터를 사용하지 않음. pages폴더 자체가 주소체계를 표현해줌으로 react router처럼 따로 컴포넌트를 만들지 않아도 됨  
/about 페이지를 만들고 싶으면 pages폴더안에 about.js 파일만 생성하면 됨  
기본적으로 코드스플리팅이 적용된 주소 시스템

#### 17. NPM vs NPX

NPM: 자바스크립트 패키지 관리 모듈
NPX: 로컬로 설치된 도구들을 npm run scripts 없이 사용할 수 있음  
[npm 🤔npx란 무엇인가?](https://geonlee.tistory.com/32)

#### 18. useCallback으로 이벤트리스너 감싸주기

props로 전달하는 메소드들을 감싸줘야한다. state가 바뀌면 전체가 재 실행되어 함수들도 새로 생성된다. 새로 생성이 되면 이전과 다른 객체이기 때문에 전달받은 컴포넌트들도 다시 렌더링을 하게 된다. 의도치 않은 리렌더링을 방지하기 위해 사용

#### 19. 함수 내부에서 사용하는 state를 deps 배열에 넣어주기

dependency에 state를 넣어줘야 이벤트 리스너들이 재 생성이 된다.

#### 20. 최적화 작업을 위한 컴포넌트 분리

함수 컴포넌트 특성으로 인하여 hook를 사용하면 최적화 작업이 필요하다. 최대한 컴포넌트를 잘게 쪼개야한다.
(그래야 해당 컴포넌트만 전체 리렌더링 되기 때문이다.)

#### 21. \_app.js

`./pages/_app.js file`을 만들면 App class를 overding 할 수 있다.  
[custom app](https://nextjs.org/docs#custom-app)

#### 22. prop-types

타입확인 하기 위해 사용한다. type은 아래 링크를 참조하자
[prop-types](https://www.npmjs.com/package/prop-types)

#### 23. customising 가능한 페이지

- Document: pages/\_document.js

  <html>, <Head>, <body> 등 html에 대해서 수정

- App: pages/\_app.js
  page 핸들링

- Error: pages/\_error.js
  error 페이지 핸들링

#### 24. 리액트 상태관리

상태 업데이트 로직의 분리, 더 쉬운 상태 관리를 위해 사용한다.

- Redux
- MobX
- Context API

#### 25. Redux

- 컴포넌트들의 상태 관련 로직들을 다른 파일들로 분리시켜서 더욱 효율적으로 관리할 수 있다.
- 컴포넌트끼리 상태를 공유하게 될 때 여러 컴포넌트를 거치지 않고도 손쉽게 상태 값을 전달한다.

#### 26. Redux state와 React state

React의 state를 바꾸는 작업이 까다로워 React의 state와 같이 사용한다.
React state 사용이유 안정성과 state 통제가 용이 하기때문에 사용한다.

#### 27. action

state를 바꾸는 행동이다.

#### 28. Dispatch

스토어의 내장함수 중 하나로, action을 실행시킨다.

#### 29. Reducer

전달 받은 action을 참고하여 state를 어떻게 바꿀지 정의한다.

#### 30. store

state, action, reducer가 합쳐진 개념으로 그 외 몇가지 내장함수들이 들어있다.

#### 31. Immutable.js 혹은 Immer.js

불변성을 유지해줘야 하는 객체의 값을 더 쉽게 업데이트 할 수 있게 해준다.
[Redux (4) Immutable.js 혹은 Immer.js 를 사용한 더 쉬운 불변성 관리](https://velog.io/@velopert/20180908-1909-%EC%9E%91%EC%84%B1%EB%90%A8-etjltaigd1#4-2.-immer-%EB%A1%9C-%EB%B6%88%EB%B3%80%EC%84%B1-%EC%9C%A0%EC%A7%80%ED%95%98%EA%B8%B0)

#### 32. 리덕스 미들웨어

![](https://redux-advanced.vlpt.us/images/redux-middleware.png)
액션이 디스패치(dispatch) 되어서 리듀서에서 이를 처리하기전에 사전에 지정된 작업들을 설정한다. 미들웨어를 액션과 리듀서 사이에서 동작한다.

[리덕스 미들웨어와 외부 데이터 연동](https://redux-advanced.vlpt.us/)
