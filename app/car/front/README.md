# car front

## 개요

- angularjs와 tailwindcss를 사용해서 차계부를 만들어보면서 연습
- gulp로 빌드한다.
- config.js의 영향을 받는다.

## 실행

- npm install
- gulp

  - gulpfile.js에 dev와 product 모드로 나누어져 있다.
  - default는 dev이다.
  - dist 폴더에 만들어진다.

- gulp clean
  - dist folder를 지운다.
- gulp prod
  - build 디렉토리에 생성되며 최종본이다.

## 규칙

- template는 그냥 html로 한다. tailwindcss와 연결되어 .tpl.html로 하면 불리

## filter

- 간단한 함수인 경우 directive보다 filter를 이용하는 것이 좋은 듯.

```javascript
app.filter('displayYmd', function () {
  return function (ymd, gubun) {
    let y = ymd.substring(0, 4);
    let m = ymd.substring(4, 6);
    let d = ymd.substring(6);
    let g = gubun || '-';
    return `${y}${g}${m}${g}${d}`;
  };
});
```

- 이런 필터를 여러개 한개의 js에 넣을 수는 없는가?

## TODO

1. restapi를 jskn서버에 올려 놓으면 통신을 그쪽으로 할 수 있을까?
2. jskn에는 git이 깔려 있나?
3. tw에 로그인?
4. 어디선가 url과 state를 저장하고 있다가 불러 올 수는 없는가?
5. directive는 angularJS의 꽃이라고 생각되는데... template를 만들자
6. vscode 나의 약어만들기

## 왜?

- 뭔가가 정리되어 있지 않으니 매번 볼때마다 새롭게 느껴져버린다
