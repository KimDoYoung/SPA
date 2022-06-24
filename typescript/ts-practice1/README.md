typescript 사용 webpack과 함께
=============================

## 목적

강의 [youtube TechCBT](https://www.youtube.com/watch?v=C8YASVXnzLY) 보고 따라하기.

## 설치.

1. npm install
2. npm install --save-dev typescript

3. tsconfig.json 작성
    - typescript 컴파일러가 사용하는 config
    - starting 포인트만 알려주면 따라가면서 찾는다.
4. tsc 컴파일러명 
    - node_modules/.bin/tsc 가 있슴
5. ts파일을 한 폴더에  몰아넣자.    

6. npm install --save-dev webpack
7. npm install --save-dev ts-loader
8. webpack.config.js 생성

## debugging문제

- webpack이 ts->javascript 로 만드는데, 사람이 짠 javascript가 아니라서 보기 쉽지 않다.
- 그래서 map파일을 만들어서 javascript(webpack이 만든) -> typescript로 매핑 시켜 주어야 typescript에서 디버깅 할 수 있다.
