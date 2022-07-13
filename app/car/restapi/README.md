car restapi
===========

## 개요

- 차계부
- kalpadb사용
- node로 restapi를 구성, mysql사용 express사용
- nodemon도 설치하여 사용해 본다.
    - nodemon app.js
- ES모듈의 사용 (import/export)
    - CommonJS를 모듈시스템으로 사용한 nodejs에서 서서히 ES모듈로 변화한다고 한다

- typescript를 사용하자.
- mariadb 연결

## 참고

- nvlife 
- [Build a REST API with Node.js, Express, and MySQL](https://blog.logrocket.com/build-rest-api-node-express-mysql/)

## commands

1. npm init -y
2. npm i -D express
3. npm i -g nodemon
4. npm i -D typescript ts-node @types/node @types/express
5. npm i cors
6. npm i -D @types/cors

## dotenv

1. npm i --save dotenv, npm i --save-dev @types/dotenv
2. 기본적으로 root의 .env를 읽어들인다.
3. Node.js는 NODE_ENV라는 환경변수를 활용하여 서버의 환경을 구분합니다. 
```javascript
import * as dotenv from 'dotenv';
dotenv.config({
  path: path.resolve(
    (process.env.NODE_ENV === 'production') ? '.production.env'
      : (process.env.NODE_ENV === 'stage') ? '.stage.env' : '.development.env'
  )
});
```
4. package.json node start
  - NODE_ENV=development 
5. root폴더에 즉 package.json 이 있는 folder 에 .env를 두어야한다

## 고려사항

- logging
- [eslint + prettier](https://pravusid.kr/typescript/2020/07/19/typescript-eslint-prettier.html)
- security (helmet)
- jwt or session
- [mybatis-mapper의 사용](https://www.npmjs.com/package/mybatis-mapper)
- upload file
- validation
  * 입력받은 데이터들 즉 body에 들어가 있는 것들에 대해서 validation체크를한다
  * [express-validator](https://www.tutsmake.com/validation-in-node-js-express-rest-api/)를 사용
  * param은 url자체이니 들어온다면 반드시 있다.
  * CarRouter.delete('/:id([0-9]+)',  CarController.instance.delete); // id에 abc를 넣으면 404로 빠진다
- install  
  * npm install body-parser --save
  * npm install express-validator  --save

## logging
 - winston + morgan
 - [blog1](https://sematext.com/blog/node-js-logging/)
 - winston은 logger만드는 것이고 morgan은 http를 consolelog로 인쇄할 수 있게 하는 것이다.
 - blogs
  - [Logging 라이브러리 winston 적용하기](https://velog.io/@ash/Node.js-%EC%84%9C%EB%B2%84%EC%97%90-logging-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-winston-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
  - [Better logs for ExpressJS using Winston and Morgan with Typescript](https://levelup.gitconnected.com/better-logs-for-expressjs-using-winston-and-morgan-with-typescript-1c31c1ab9342)
  - npm install winston winston-daily-rotate-file
    * 날짜별로 restapi/logs에 파일이 생긴다. error만 모아서 error파일에 생긴다.
  - morgan은 http로그를 찍어준다.
  - npm install morgan @types/morgan
  - winston과 morgan의 결합
## path alias 
> [상대경로를 @로 표현](https://blog.doitreviews.com/development/2020-03-04-using-path-alias-in-typescript/)

- module-alias 설치 
  * npm i --save module-alias

## eslint
[blog1](https://blog.appsignal.com/2022/01/19/how-to-set-up-a-nodejs-project-with-typescript.html)
 1. $ npm install eslint --save-dev
 2. $ npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
  3. **.eslintrc.js** 생성
 ```javascript
 module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest", // Allows the use of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  extends: ["plugin:@typescript-eslint/recommended"], // Uses the linting rules from @typescript-eslint/eslint-plugin
  env: {
    node: true, // Enable Node.js global variables
  },

  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
4. package.json 에
- "lint" : "eslint . --fix"
 ```

## Errors
- Unknown file extension ".ts" 
> "type":"module"을 지운다.
> typescript로 하면 그냥 import/export를 쓰면 되는 듯.

## singleton 기법
```javascript
class Simple {
    private static _instance: Simple

    private constructor () {
    }
	
    // 메소드 이름은 달라도 상관없다.
    public static get instance () {
        return this._instance || (this._instance = new this())
    }
}
```
##  tsconfig
- 참고용
```javascript
{
   "compilerOptions": {
      "lib": [
         "es6"
      ],
      "target": "es6",
      "module": "commonjs",
      "moduleResolution": "node",
      "outDir": "dist",
      "resolveJsonModule": true,
      "emitDecoratorMetadata": true,
      "esModuleInterop": true,
      "experimentalDecorators": true,
      "sourceMap": true
   },
   "include": ["src/**/*.ts"],
   "exclude": ["node_modules", "**/*.spec.ts"]
}
```

## ES 모듈 vs CommonJS
- ES6코드를 실행하기 위해서는 babel을 이용해야한다
- ES가 최신이다.
- node 13.2이상에서 사용가능
- "type" : "module"
```javascript
const m = require('moment');
import m from 'moment';
```
- export로 내보니기
```javascript
export function func1()...
function func2()...
export { func2 };
export default {
    aaa() { return 1},
    bbb() { return 2}
}
```
- import로 불러오기
```javascript
import {b} from './currency-function';
import * as currency from '...';
```

## git command

- [git alias](https://johngrib.github.io/wiki/git-alias/)
- git config --list
- .gitconfig
```
[user]
	name = KimDoYounng
	email = kdy987@gmail.com
[alias]
lg = log --graph --abbrev-commit --decorate --format=format:'%C(cyan)%h%C(reset) - %C(green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(yellow)%d%C(reset)' --all
s = status -s
```

## client 오는 데이터들

1. req.query
  - http://a.com/topic?id=1&name=siwa
2. req.params
  - app.get('/tweeter/:name',...
  - req.params.name
3. req.body
```html
  <form>
  <input name=”username” …/>
  ...
  </form>
```
  - req.body.username  
  - [vscode rest api](https://hudi.blog/vscode-rest-client/) 를 사용 해서 테스트