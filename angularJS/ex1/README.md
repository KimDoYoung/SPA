angularJS 연습
==============
## 목적

angularJS를 이용해서 SPA를 만들기 위해서 angularJS 관련 코드를 짜보면서 연습

- cdn으로 angularjS연결
- 부가적으로 tailwind.css를 사용
- index.html 

## angularJS 공부항목
 

## vs-code shot key

1. ctrl + sht + P : command palette
2. ctrl + p  : file search
3. ctrl + ,  : setting 
4. ctrl + B  : toggle sidebar
5. ctrl + `  : terminal toggle
6. ctrl + K + S : shot key
7. alt + sht + up/down : line copy
8. ctrl + sht + k : delete line
9. ctrl + enter : 다음라인으로 커서
10. ctrl + d  : 단어로 선택
11. alt + cursor : 멀티커서
12. alt + sht + drag ;
13. 범위선택 후 alt + shft + i : 멀티커서가 맨뒤에


## directive

- directive는 angularJS의 꽃


## 유튜브

https://www.youtube.com/watch?v=FlUCU13dJyo&list=PL4cUxeGkcC9gsJS5QgFT2IvWIX78dV3_v


## service, factory, provider

[차이점](https://stackoverflow.com/questions/28467793/angular-js-factory-vs-service-vs-provider-by-example)

- 이런 차이점을 아는 것이 무슨 상관이 있는가?
- 차라리 1가지만 있는게 좋지 않을까 다들 유사한데. service든, factory든.
- Factory, Service, Value, constant Provider 이런 것들이 있다.

### factory example

```javascript
app.factory('myFactory', function () {
  var _artist = '';
  var service = {}
  service.getArtist = function () {
    return _artist
  }
  return service;
});
```

### service example
```javascript
app.service('myService', function () {
  var _artist = '';
  this.getArtist = function () {
    return _artist;
  }
});
```

### provider example

- config에서 값을 가져올 수 있다.
- db접속 함수에서 사용하기로 한다

```javascript
app.provider('myProvider', function () {
  this._artist = '';
  this.thingFromConfig = '';

  //Only the properties on the object returned from $get are available in the controller.
  this.$get = function () {
    var that = this;
    return {
      getArtist: function () {
        return that._artist;
      },
      thingonConfig: that.thingFromConfig
    }
  }
});

app.config(function (myProviderProvider) {
  myProviderProvider.thingFromConfig = 'This was set in config()';
});
```

## dateFilter

- date format을 쓸 수 있다.
- dateFilter(new Date(), 'yyyy-MM-dd h:mm:ss a');

## $watch, $digest, $apply

- $scope의 변수와 연결되어 $watch 함수를 만들 수 있다.
- $watch 리스트를 모두 수행하게 하는 것이 $digest이다.
- $apply 는 변수값을 지정하고 암묵적으로 $digest를 수행해준다.
- [참조](http://tutorials.jenkov.com/angularjs/watch-digest-apply.html)
```javascript
    document.getElementById("updateTimeButton").addEventListener('click', function(){
        $scope.$apply(function(){
            console.log('update time clicked');
            $scope.data.time = new Date();
        });
    });
```