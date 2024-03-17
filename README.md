# 설명

- 간단한 command 를 만들어서 npm 에 deploy 를 해보았습니다.
- [clearn architecture](https://github.com/developer-shkim/clean-architecture) 구조로 폴더와 파일을 생성해줍니다.

# 실행 방법

- 전역으로 architecture-generator 를 설치합니다.
- 프로젝트 구조를 생성할 폴더를 만들고, 해당 폴더에서 architecture-generator cli 로 구조를 생성합니다.

```sh
➜  npm install -g architecture-generator
➜  architecture-generator init
➜  tree -I "node_modules"
.
└── src
    ├── app
    │   ├── account
    │   │   ├── adapter
    │   │   │   ├── in
    │   │   │   │   └── web
    │   │   │   │       └── controller.ts
    │   │   │   └── out
    │   │   │       └── persistence
    │   │   │           ├── entity.ts
    │   │   │           ├── mapper.ts
    │   │   │           ├── persistence-adapter.ts
    │   │   │           └── repository.ts
    │   │   ├── application
    │   │   │   ├── port
    │   │   │   │   ├── in
    │   │   │   │   │   ├── command.ts
    │   │   │   │   │   ├── query.ts
    │   │   │   │   │   └── usecase.ts
    │   │   │   │   └── out
    │   │   │   │       └── port.ts
    │   │   │   └── service
    │   │   │       └── service.ts
    │   │   └── domain
    │   │       └── entity.ts
    │   ├── common
    │   └── resources
    └── test
        ├── account
        │   ├── adapter
        │   │   ├── in
        │   │   │   └── web
        │   │   │       └── controller.test.ts
        │   │   └── out
        │   │       └── persistence
        │   │           └── persistence-adapter.test.ts
        │   ├── application
        │   │   └── service
        │   │       └── service.test.ts
        │   └── domain
        │       └── entity.test.ts
        ├── common
        └── resources

29 directories, 15 files
```

# 진행 현황

- [x] console.log 를 수행하는 command
- [x] 프로젝트 폴더 구조, 파일 생성
- [x] npm 에 라이브러리 배포
  - https://www.npmjs.com/package/architecture-generator
- [x] npm 으로 설치 시, 정상 동작되도록 수정
  - `node ./node_modules/architecture-generator/index.js init` 로 실행시에는 동작하는데, 의도한 `architecture-generator init` 으로는 동작하지 않는 문제 확인
- [ ] ./samples/nest-architecture-sample 에서 템플릿 작성
  - [x] clearn architecure 구조대로 변경 후 서버 정상 동작 확인
  - [x] test 설정
  - [ ] ~~logging 설정~~
  - [ ] ~~monitoring 설정~~
- [ ] ~~프로젝트 특성에 맞는 여러 구조 리서치~~
- [ ] ~~AI 를 활용한 용도에 맞는 구조 설정 명령어 생성~~

# 배운 점

- 패키지를 npm 에 배포하는 방법
- npm run script 로 실행하려면 bin 옵션에 파일을 명시해야 함
- shebang 으로 파일을 해석해줄 인터프리터 위치 지정하여 command not found 오류 해결
- 프로젝트의 목표를 구체적으로 세워서 완성도를 측정할 수 있도록 진행하는 것이 좋을 것 같음

# 참고

- [npm 배포](https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/)
- [npm cli pacakge](https://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm.html)
- [리멤버 기술블로그 - yarn berry 도입기](https://blog.dramancompany.com/2023/02/%EB%A6%AC%EB%A9%A4%EB%B2%84-%EC%9B%B9-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%A2%8C%EC%B6%A9%EC%9A%B0%EB%8F%8C-yarn-berry-%EB%8F%84%EC%9E%85%EA%B8%B0/)
