# 목표

프로젝트 구조 설정, 파일 생성 위한 command 생성

# 진행 현황

- [x] console.log 를 수행하는 command
- [x] 프로젝트 폴더 구조, 파일 생성해주는 command
- [ ] 인자로 받은 도메인, 용도에 맞는 파일 생성해주는 command
  - [ ] module
  - [ ] query
  - [ ] command
  - [ ] mapper
- [ ] npm 에 라이브러리 배포
- [ ] nest new 와 호환되어 구조 설정하는 command
- [ ] test 관련 설정해주는 command
- [ ] logging 관련 설정해주는 command
- [ ] monitoring 관련 설정해주는 command

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
