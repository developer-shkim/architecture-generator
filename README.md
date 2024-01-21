# 목표

프로젝트 구조 설정, 파일 생성 위한 command 생성

# 진행 현황

- [x] console.log 를 수행하는 command 생성
- [ ] 프로젝트 폴더 구조 설정해주는 command 생성
- [ ] 용도에 맞는 파일 생성해주는 command 생성
  - [ ] module
  - [ ] query
  - [ ] command
  - [ ] mapper
- [ ] npm 에 라이브러리 배포
- [ ] test 관련 설정해주는 command 생성
- [ ] logging 관련 설정해주는 command 생성
- [ ] monitoring 관련 설정해주는 command 생성

# 실행 방법

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
