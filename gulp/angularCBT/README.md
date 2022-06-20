tailwindcss와 angularjs 연습
==========================

## 개요

- angular 연습
    - multi view

## browserify를 이용

- require를 사용하여 모듈을 분할함.
- okds homepage와 유사한 개발환경을 설정함.

## 참고 url

[$transition](https://ui-router.github.io/guide/transitionhooks)

## folder

    - common
        - service 를 저장
        - service 는 유틸리티, 공통함수를 제공
        - factory, provider등은 작성하지 않는 것으로,  service로 통일
    
    - components 
        - directive들을 저장

    - external
        - 외부 파일들 jquery.min.js같은 것들 
        - 빌드시 dist로 복사된다.

## main.js

    - 각 파일은 module.exports 를 사용한다.

```javascript
module.exports = function msg2Controller($scope){
    $scope.a = 11;
    $scope.b = 22;
}
```
    - 메인에 require로 각각 이름을 기술
```javascript
var app = require('./app_module');

//config (routing information)
var config = require('./app_config');
app.config( config );

//services
app.service('dateService', require('./common/dateService'));

//directives
app.directive('myMsg', require('./components/common/msgDirective'));

//controllers
app.controller('msg1', require('./views/sub1/msg1Controller'));
app.controller('msg2', require('./views/sub1/msg2Controller') );
```
    


 


