practice twa
============

## 목적

- angularjs 1.x, angular-ui-router, tailwindcss를 연습
- nested view를 사용하는 방법을 연습

## 코드

 - config 설정
 - view명 : ui-view명@state명
 - child의 url은 부모것을 빼고 /add -> href="#/departure/add" 가 된다.
 - ui-sref="departure.add"와 같이 state 명을 넣으면 된다
 
```javascript
    //departure
    .state('departure', {
        url : '/departure',
        views : {
            'menu-view' : {
                templateUrl : 'tpl/menu.html'
            },
            'container-view' : {
                templateUrl : 'tpl/departure.html'
            } 
        }
    })
    .state('departure.add', {
        url : '/add',
        views : {
            'bottom-view@departure' : {
                templateUrl : 'tpl/departure.add.html'
            }
        }
    })    
    .state('departure.list', {
        views : {
            'bottom-view@departure' : {
                templateUrl : 'tpl/departure.list.html'
            }
        }
    })  
```