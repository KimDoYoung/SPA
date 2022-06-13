tailwindcss
===========

## 목적

- tailwindcss를 link로 그냥 쓰는게 아니고 customize해 본다.
- flex, grid 사용하는 법을 배운다.

- watch도 생긴모양. 계속 발전하니 옛날에 만든 강의에서 cover하지 못한 부분도 있구나.
- npx tailwindcss init로 **tailwind.config.js** 를 생성하고 그 안의 내용을 고쳐서 customizing한다. 

## plugin

- Tailwind CSS IntelliSense

## 순서

npm init -y
npm install -D tailwindcss@latest ( --full 옵션으로 다 뽑아서 확인)
npm install @tailwindcss/typograph 
mkdir src
mkdir dist
touch src/style.css

```
npm install -D tailwindcss@latest 
npm install @tailwindcss/typograph 
npx tailwindcss init
```

### package.json

```
"build-css": "tailwindcss build src/styles.css -o dist/styles.css"
"css-watch" : "npx tailwindcss -i ./src/style.css -o ./dist/style.css --watch"
``` 

## 의문점

1. plugin은 무엇인가?
- typograph 는 뭐지?
- forms
```
npm uninstall @tailwindcss/custom-forms
npm install @tailwindcss/forms
