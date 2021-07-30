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
  