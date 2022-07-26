# technical note

## 참조

[Flowbite](https://flowbite.com/docs/components/navbar/)

## tailwind

- [plugin](https://tailwindcss.com/docs/plugins)을 이용할 수 있다. 만드는 것 까지는 힘들듯. 예를 들어 [버튼](https://tailwindcss-base-buttons.netlify.app/#themeColors)

## tailwind nav

```html

```

## tailwind login

```html

```

## angularjs에 있는 함수들

- angular.element
- angular.toJson, fromJson
- angular.forEach
- angular.isNumber, isDefined, isNaN,
- angular.extend

## angularJS에서 제공하는 것들

- $가 붙은 것들은 무엇인가? 왜 변수에 $를 붙였나?
- Provider가 뒤에 붙은 것들은 무엇인가? 즉 어떤 의미가 있나?

1. $stateProvider
2. $urlRouterProvider
3. $locationProvider
4. $httpProvider
5. $compile
6. $timeout, $interval
7. $window
8. $state
9. $rootScope

## directive 템플릿

1. link: 를 둔다. 그 안에 함수를 잔뜩...
   이게 좋은건가?
   link : function(scope, iElement, iAttrs, transclue)
   $watch를 그 안에서 사용
2. templateUrl 에 함수를 둔다.
   templateUrl: function($scope, iAttrs)
   3

## custom snippet

- [나만의 snippet만들기](https://jojoldu.tistory.com/491)

  1. ctrl+shift+p -> snippet
  2. 선택 md인지 js인지
  3. 작성
  4. Ctrl + Space

  ![파일위치](1.png)

## directive

- 전형적인 템플릿
  main.js에서

```javascript
module.exports = function () {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/components/layout/footer.tpl.html',
    compile: (tElement, tAttribute) => {
      console.log(tAttribute.text + ' in Compiler');
      return {
        pre: function (scope, iElement, iAttributes, controller) {
          console.log(iAttributes.text + ' In Pre');
        },
        post: function (scope, iElement, iAttributes, controller) {
          console.log(iAttributes.text + ' In Post');
        },
      };
    },
    controller: (scope, element, attrs) => {
      console.log(attrs.text + ' In Controller');
    },
  };
};
```

- 또다른 template

```javascript
fucntion(...){
  return {
    replace : true
   ,scope : false
   ,restrict : 'EA'
   ,templateUrl : '....html'
   ,controller : function($scope, $element, $attrs){
    $attrs.$observe('aaa',function(val){...})
   }
  }
}
```

- link

```javascript
module.exports = function ($interval, dateFilter) {
  function link(scope, element, attrs, controller, transcludeFn) {
    let timerId;
    let format = 'yyyy-MM-dd hh:mm:ss a';
    function updateTime() {
      element.text(dateFilter(new Date(), format));
    }
    element.on('$destroy', function () {
      $interval.cancel(timerId);
    });
    timerId = $interval(function () {
      updateTime();
    }, 1000);
  }
  return {
    link: link,
  };
};
```

## $sce

- Strint Context Escaping
- html 문자열을 안전하게
- $scope.string1 = $sce.trustAsHtml('<h1>' + messge + '</h1>')

```html
<div ng-bind-html="string1"><div></div></div>
```

## ng-show와 ng-include를 통한 표현

-버튼이나 조건에 의해서 만들어진 html을 가져와서 보여준다

```html
<div ng-include="'template/info.tpl.html'" ng-show="isInfoShow"></div>
```

## controller template

```javascript
$scope.data = {};
$scope.event = {};
$scope.init = function () {};
$scope.init();
```

### controller에 $watch를 사용한다.

```javascript
app.controller('ctrl1', function ($scope) {
  $scope.name = 'Hong';
  $scope.updateCount = 0;
  $scope.$watch('name', function (newValue, oldValue) {
    if (newValue === oldValue) return;
    $scope.updateCount++;
  });
});
```
