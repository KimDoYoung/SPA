tailwindcss gulp4로 build  
=========================
## basic
- gulp --tasks
## flex

- flex로 만들 수 있는 것들

```css
            display: flex;
            flex-direction: row;
            // container와 연관이 있다
            justify-content: space-around;  item 좌우로 동일 space
            justify-content: space-between; 양쪽으로 밀고 item사이에 모두 같은 간격
            justify-content: space-evenly; 가장자리를 포함 모두 동일간격
```
- 기본적으로 jcai (justify-content, align-items로 배치를 만든다)
- align-content는 여러줄일때
- items에 들어가는 속성은 ** flex-grow shrink base 값으로 조정

## tailwindcss with gulp

- [tailwindcss with gulp](https://clownhacker.tistory.com/158)

## tailwindcss.config.js 로 할 수 있는 일

- font를  google폰트
- car, badge 같으 사용자 정의 class명을 쓸 수 있다.
- 색상에 자신의 이름을 줘서 쓴다

## tailwindcss 설치

- [공식사이트 설치](https://tailwindcss.com/docs/installation)
- 공식사이트에는 gulp를 사용하지 않고 있다.
```  
  npm init -y
  npm install -D tailwindcss
  npx tailwindcss init
```
- [tailwind with gulp](https://fenderist.tistory.com/378)
  npm init -y
  npm install gulp gulp-postcss gulp-sass gulp-csso gulp-sourcemaps node-sass -D
  npm install tailwindcss -D
  npm install autoprefixer -D
  npx tailwind init
  touch gulpfile.js

- [gulp 4.0 사용](https://github.com/lazymozek/gulp-with-tailwindcss)
    * gulp 4.0은 사용법이 다른듯.
    * dev, product로 나누어져 있슴

### postcss란?

- css 에러 체크
- css를 브라우저에 맞게끔 변환(신기술을 다운시킨다?)

### sass란?

- CSS는 규모가 커질수록 코드가 복잡해지고, 유지보수가 불편해 집니다
- CSS의 확장 언어이자 전처리기(preprocessor)
- SCSS는 구문입니다. SCSS 문법을 기반으로 코드를 작성하면, Sass 전처리기의 도움을 받아 컴파일러가 이를 CSS로 빌드할 수 있습니다.
- **이제는 ** 이렇게 행하는 모양
```javascript
const sass = require('gulp-sass')(require('sass')); 

```

### csso란?

- css 압축(minify)

### autoprefix란

-- vender prefix 즉 브라우저만드는 사람들이 붙인 임시prefix를 자동으로 붙여준다.

### gulp 버젼

4.0은 이전과 다르게 설정한다.
- series, parallel 로 수행시킴.
```
$ gulp -version
CLI version: 2.3.0
Local version: 4.0.2
```

### bug나오는 것들

- contents가 없다.
- utility가 없다.
