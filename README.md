# 목표

프로젝트 구조 설정, 파일 생성 위한 command 생성

# 진행 현황

- [x] console.log 를 수행하는 command
- [x] 프로젝트 폴더 구조, 파일 생성
- [x] npm 에 라이브러리 배포
  - https://www.npmjs.com/package/architecture-generator
- [ ] npm 으로 설치 시, 정상 동작되도록 수정
  - `node ./node_modules/architecture-generator/index.js init` 로 실행시에는 동작하는데, 의도한 `architecture-generator init` 으로는 동작하지 않는 문제 확인
- [ ] nest new 와 호환되어 구조 설정
- [ ] test 설정
- [ ] logging 설정
- [ ] monitoring 설정
- [ ] AI 를 활용한 용도에 맞는 구조 설정

# 실행 방법

### console.log 를 수행하는 command

```sh
➜  architecture-generator git:(main) ✗ npx tsc index.ts
➜  architecture-generator git:(main) ✗ node index.js help print
Usage: index print [options] <string>

Print the message in your console

Arguments:
  string           input the message to print

Options:
  -c --capitalize  Capitalize the message
  -h, --help       display help for command
➜  architecture-generator git:(main) ✗ node index.js print hello
hello
➜  architecture-generator git:(main) ✗ node index.js print hello -c
HELLO
```

### 프로젝트 폴더 구조, 파일 생성해주는 command

```sh
➜  architecture-generator git:(main) ✗ tree -I "node_modules"
.
├── README.md
├── index.js
├── index.ts
├── package.json
├── tsconfig.json
└── yarn.lock

1 directory, 6 files
➜  architecture-generator git:(main) ✗ yarn architecture:init
yarn run v1.22.21
$ npx tsc index.ts && node index.js init
✨  Done in 1.69s.
➜  architecture-generator git:(main) ✗ tree -I "node_modules"
.
├── README.md
├── index.js
├── index.ts
├── package.json
├── src
│   ├── app
│   │   ├── account
│   │   │   ├── adapter
│   │   │   │   ├── in
│   │   │   │   │   └── web
│   │   │   │   │       └── controller.ts
│   │   │   │   └── out
│   │   │   │       └── persistence
│   │   │   │           ├── entity.ts
│   │   │   │           ├── mapper.ts
│   │   │   │           ├── persistence-adapter.ts
│   │   │   │           └── repository.ts
│   │   │   ├── application
│   │   │   │   ├── port
│   │   │   │   │   ├── in
│   │   │   │   │   │   ├── command.ts
│   │   │   │   │   │   ├── query.ts
│   │   │   │   │   │   └── usecase.ts
│   │   │   │   │   └── out
│   │   │   │   │       └── port.ts
│   │   │   │   └── service
│   │   │   │       └── service.ts
│   │   │   └── domain
│   │   │       └── entity.ts
│   │   ├── common
│   │   └── resources
│   └── test
│       ├── account
│       │   ├── adapter
│       │   │   ├── in
│       │   │   │   └── web
│       │   │   │       └── controller.test.ts
│       │   │   └── out
│       │   │       └── persistence
│       │   │           └── persistence-adapter.test.ts
│       │   ├── application
│       │   │   └── service
│       │   │       └── service.test.ts
│       │   └── domain
│       │       └── entity.test.ts
│       ├── common
│       └── resources
├── tsconfig.json
└── yarn.lock

29 directories, 21 files
```

# 참고

- [npm 배포](https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/)
- [npm cli pacakge](https://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm.html)
- [리멤버 기술블로그 - yarn berry 도입기](https://blog.dramancompany.com/2023/02/%EB%A6%AC%EB%A9%A4%EB%B2%84-%EC%9B%B9-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%A2%8C%EC%B6%A9%EC%9A%B0%EB%8F%8C-yarn-berry-%EB%8F%84%EC%9E%85%EA%B8%B0/)
