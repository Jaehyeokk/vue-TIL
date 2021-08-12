# vue-til-front
## 프로젝트 환경 구성

### ESLint 에러가 화면에 표시되지 않도록 하는 방법

- root/vue.config.js 파일에 webpack-dev-server option 추가

  ```js
  // vue.config.js

  // webpack-dev-server options
  module.exports = {
    devServer: {
      overlay: false,
    },
  };
  ```

### ESLint에서의 prettier 설정

- root/.eslintrc.js 파일에 prettier option 추가

  ```js
  // .eslintrc.js
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  rules: {
    "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          semi: true,
          useTabs: true,
          tabWidth: 2,
          trailingComma: "all",
          printWidth: 80,
          bracketSpacing: true,
          arrowParens: "avoid",
          endOfLine: 'auto',	// 
        },
      ],
    }
  ```

- VSCode 설정에서 format on save 해제

### 경로 설정

  - root/jsconfig.json 파일에 설정 추가

  ```json
  // jsconfig.json

  // vscode에서 제공하는 jsconfig.json 설정
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "~/*": [
          "./*"
        ],
        "@/*": [
          "./src/*"
        ],
      }
    },
    "exclude": [
      "node_modules",
      "dist"
    ]
  }
  ```

  ### 컨벤션

  [vue.js 스타일 가이드](https://kr.vuejs.org/v2/style-guide/index.html)에서의 A규칙과 B규칙을 우선적으로 적용한다.



  ## 컴포넌트 설계 및 라우터 구현
  
  - 뷰라우터 설치 및 적용

  - 로그인, 회원가입 페이지 생성, 라우트 경로 추가

  - 코드 스플리팅 적용

  - 초기 진입페이지 설정
  
  - 없는 페이지 접근할 때의 라우터 처리(notfound 페이지 생성)
  
  - 뷰라우터 히스토리모드 적용
  
  - 서버 배포시 주의사항 숙지(서버 세팅)
  
  ## 회원가입 페이지 개발

  - AppHeader 컴포넌트 생성 및 등록

  - SignupForm 컴포넌트 생성 및 등록

  - SignupForm 컴포넌트 마크업, 데이터 바인딩

  - API 문서 확인, axios 설치

  - api 함수 생성 및 호출

  - 비동기처리 및 submit 후처리 (폼 비우기 및 메세지 처리)

  - try catch로 error 처리

  ## API 설정 공통화

  - axios.create() 사용

  - .env 파일 적용 (개발용 배포용 분리 )
    - .env
    - .env.production
    - .env.development

  ## 로그인 페이지 개발

  - loginForm 컴포넌트 생성 및 등록

  - loginForm 컴포넌트 마크업, 데이터 바인딩

  - api 문서 확인 및 함수 생성 및 호출

  - 비동기처리 및 submit 후처리 (폼 비우기 및 메세지 처리)

  - try catch로 error 처리

  - Validation 검증 

  ## 로그인 상태 관리와 스토어

  - mainPage 컴포넌트 생성 및 라우트 등록

  - 로그인 성공시 mainPage로 이동

  - vuex 설치 및 연결

  - 로그인 상태 vuex에 저장 및 상태에 따른 헤더 분기 처리

  - 로그아웃 기능 구현

  ## 토큰을 이용한 API 인증 처리

  - vuex 에 token 저장

  - http 요청 시 header->Authorization에 토큰을 넣어야 함 

  - axios interceptors 코드 모듈화

  - insterceptors를 이용해 헤더에 토큰 값 넣기

  ## 브라우저 저장소를 이용한 인증 값 관리

  - 로그인 인증 값 브라우저 저장소(쿠키)에 저장 후 확인

  - 브라우저 저장소(쿠키)에 있는 로그인 인증 값 vuex에 등록 ( || 사용 )

  - vuex actions를 이용한 비동기 처리


  ## 학습 노트 데이터 조회

  - 학습 노트 데이터 조회 api 호출 함수 생성 및 호출

  - 받아 온 데이터를 화면에 뿌리기

  - 학습 노트 목록 아이템 컴포넌트화

  - 데이터 로딩 시 스피너 등록

  ## 학습 노트 데이터 생성

  - PostAddPage 페이지 생성 및 라우터 연결

  - PostAddForm 컴포넌트 생성, 등록

  - PostAddForm 데이터 바인딩, 이벤트 연결

  - 학습노트 데이터 API 생성 및 호출

  - 학습노트 생성 후 처리 (값 비우기, 에러, 글자 수 밸리데이션)

  ## API 함수 모듈화

  - 인스턴스 생성 및 함수 분할 (axios.create())

  - API 분할 ( auth, posts ) 및 적용

  ## 학습 노트 데이터 삭제

  - 삭제 API 구현

  - 삭제 했을 때 데이터를 fetchdata 다시 호출


  ## 학습 노트 데이터 수정

  - postEditPage 생성

  - 다이나믹 라우트 매칭으로 아이디 값 넘기기

  - 특정 학습 노트 불러오는 API 구현

  - 수정 API 및 기능 구현

  ## filter 적용

  - 지역 fliter 적용

  - 전역 filter 적용

  