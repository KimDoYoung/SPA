blog만들기
=========

## 목적

- 웹에서 구한 강의를 보고 따라해보기
- build 툴을 사용하지 않고 npx를 사용
- [강의 url](https://github.com/digitshack/tailwindcss-course)
- [tailwind 홈의 설치](https://tailwindcss.com/docs/installation)

## 실행

- npm run css
    - style.css를 dist에 만든다.
- dist폴더의 html을 live로 보기로 하면 잘 적용이 되지 않는다

## 설치

1. versions
    npm -v  : 8.5.5
    npx -version : 8.5.5
    
2. commands

- npm init -y
- npm i -D tailwindcss@latest
- npx tailwind init
- mkdir src
- mkdir dist
- touch src/index.html
- mkdir -p src/css
- touch src/css/tailwind.css

## 주의

- tailwind.config.js에 content를 필히 기술

