angularJS 1.x
=============

## directive

1. compile 은 return {pre : func, post:func}을 한다.
2. compile 은 function(template)이다.
3. tElement는 의 t는 template, iElement의 i는  instance
### 패턴1
```javascript
app.directive('message', function(){
    return {
        compile : function(tElement, tAttribute){
            console.log(tAttribute.text + ' in Compiler');
            return {
                pre : function(scope, iElement, iAttributes, controller){
                    console.log(iAttributes.text + ' In Pre');
                },
                post : function(scope, iElement, iAttributes, controller){
                    console.log(iAttributes.text + ' In Post');
                }
            }
        },
        controller : function($scope, $element, $attrs){
            console.log($attrs.text + ' In Controller');
        }
    }    
});

```