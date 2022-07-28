# search directive

## 개요

- search directive를 정리, directive에 대한 이해를 높인다.
  ### 특징
  - search directive는 키워드 입력란과 검색 버튼, 초기화 버튼을 갖는다.
  - 검색 버튼을 클릭하면 검색 수행
  - 초기화버튼을 클릭하면 키워드 입력란이 초기화 즉 비어진다.
  - placehoder 문자열을 지정가능하다.

## 구현

1. user.tpl.html 에 directive를 넣는다.

```html
<search
  search-callback="search(keyword)"
  init-callback="initSearch()"
  is-show-init-button="true"
  placeholder="검색어를 입력해주십시오"
/>
```

- restrict 는 E 이다.
- scope에는 1. searchCallback 2. initCallback 3.isShowInitButton 4.placeholder가 있다.

2. search.tpl.html

```html
<div class="inline-flex justify-between space-x-2 grow">
  <input
    ng-model="keyword"
    type="text"
    placeholder="{{placeholder}}"
    class="border  px-3 py-2"
  />
  <button
    ng-click="search.searchButtonClick({keyword:keyword})"
    class="bg-blue-300 px-3 py-2 rounded-md hover:bg-blue-500"
  >
    검색
  </button>
  <button
    ng-click="search.initButtonClick()"
    class="bg-gray-300 px-3 py-2 rounded-md hover:bg-gray-500"
    ng-show="isShowInitButton"
  >
    초기화
  </button>
</div>
```

3. searchDirective.js

```javascript
module.exports = function () {
  const compile = (tElement, tAttribute) => {};
  const link = (scope, element, attrs, controller, transcludeFn) => {};
  const controller = function ($scope) {
    this.initButtonClick = () => {
      console.log('init button clicked');
      $scope.keyword = '';
      $scope.initCallback();
    };
    this.searchButtonClick = (keyword) => {
      console.log('in directive, keyword: ' + $scope.keyword);
      $scope.searchCallback(keyword);
    };
  };
  const templateUrl = 'app/components/common/search.tpl.html';
  const controllerName = 'search';
  return {
    replace: true,
    scope: {
      placeholder: '@',
      isShowInitButton: '=',
      initCallback: '&',
      searchCallback: '&',
    },
    restrict: 'E',
    transclude: false,
    templateUrl: templateUrl,
    controllerAs: controllerName,
    compile: compile,
    link: link,
    controller: controller,
  };
};
```

1. placeholder는 @ 이다 즉 사용시 placeholder="검색어를 입력해주십시오" 문자열을 그대로 받는다.
2. isShowInitButton 는 = 이므로 그 값을 가져온다. 즉 is-show-init-button="true" 이면 변수 isShowInitButton은 false가 된다.
   그리고 이변수가 template에서 ng-show에 사용된다.
3. initCallback과 searchCallback은 &(참조)로 사용된다. 즉 다음과 같이 사용된다면

```
  search-callback="search(keyword)"
  init-callback="initSearch()"
```

search(keyword)는 parent즉 search directive를 사용하고 있는 주체인 user controller의 함수인 것이다.
initSearch도 마찬가지로 user controller의 함수이다.
또 **주의** 할것은 search(keyword)와 같이 keyword를 넘겨주고 있다.
keyword는 search template의 input 값이다. 이는 ng-model로 지정되어있다.

4. search template에 보면 검색, 초기화 두개의 버튼은 ng-click으로 각각

```
    ng-click="search.searchButtonClick({keyword:keyword})"
    ng-click="search.initButtonClick()"
```

search.searchButtonClick과 search.initButtonClick 이 지정되어 있는데, 이 두개의 함수는 directive의
controller에서 지정해주고 있다.
그리고 각각의 함수에서 scope에서 지정한 함수 즉 parent 여기서는 user controller가 가지고 있는 함수 호출한다.

5. controller 함수에서 event함수를 추가하고 그것을 호출하게한다. 만들어진 함수에서 html에서 지정한 함수를 호출해준다. (** 이점이 keypoint 일듯 **)
