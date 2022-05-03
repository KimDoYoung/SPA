SPA-webpack-sample
===============
## webpack이란.
여러개의 파일들 즉 여러개의 js파일들을 하나로 뭉쳐준다.
entry(시작점)는 시작으로 그 시작을 따라가면서 필요한 파일들을 찾는다.

## 개요
webpack 사용법 연습
node -v
v12.20.0
npm -v
6.14.8

1. npm init
2. npm i -D webpack webpack-cli
3. npm build - package.json에서 편집 
4. touch webpack.config.js
5. touch app.js, math.js
6. npm run build
    - app.js와 main.js를 합쳐놓은 main.js가 dist폴더에 생성된다.
    - index.html을 만들어서 확인한다.
7. touch app.css 
8. npm  i -D css-loader, style-loader
9. image도 app.js로 가져올 수 있다.
10. file-loader가 필요하다. npm i -D file-loader
11. html도 js에 넣을 수 있다.
    npm i -D html-webpack-plugin
12. dist폴더 지우기
      - npm i -D clean-webpack-plugin    
      - output으로 설정한 폴더의 내용물을 모두 지우고 수행한다