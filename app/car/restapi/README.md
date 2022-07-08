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

## Errors
- Unknown file extension ".ts" 
> "type":"module"을 지운다.
> typescript로 하면 그냥 import/export를 쓰면 되는 듯.

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