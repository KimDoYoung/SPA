TypeScript Setup With Node & Express
====================================

## 개요

typescript를 사용하면서 node로 rest api 프로그램을 만드는 셋업

## 모듈

- npm init -y
- npm install -g typescript
    - tsc --version
- tsc --init
    -  tsconfig.json
        -  "rootDir": "./src", 
        > src안에 적어도 하나의 .ts파일이 있어야한다
        -  "outDir": "./dist",  
- npm install express
- npm i -D typescript ts-node @types/node @types/express nodemon
