vanilla javascript
==================

## vanilla?

- 그냥 순수 자바스크립트
- 이름을 참 잘 붙인다.
- jQuery와 비교를 하곤 한다.

## code samples

```javascript

        //parent
        document.getElementById('menu-2').parentNode;
        //children
        document.getElementById('d_menus').children;

        // events
        document.addEventListener('DOMContentLoaded',function(){
            console.log('document ready....');
        });
        document.querySelectorAll('a').forEach((el)=>{
            console.log(el.id);
            el.addEventListener('click', (e)=>{
                console.log('anchor click ' + el.id );
            });
        });
        document.getElementById('btn1').addEventListener('click',(e)=>{
            var divs = document.querySelectorAll('div.box');
            divs.forEach(div=>{div.style.display='none'});
        });
        //select
        var a1 = document.getElementById('a1');
        console.log(a1);
        var boxes = document.querySelectorAll('div.box');
        console.log(boxes.length);
        //attributes
        document.querySelector('img').setAttribute('alg', 'this is vanilla');
        //동적추가
        document.getElementById('btn2').addEventListener('click', (e)=>{
            var newDiv = document.createElement('div');
            newDiv.innerHTML = '<p>Hello</p>';
            document.querySelector('.search-container').appendChild(newDiv);
        });
        //클래스 추가 삭제
        boxes.forEach(el=>{el.classList.add('focus')});
        boxes[0].classList.remove("focus");
        boxes[0].classList.toggle("focus");
        boxes[0].classList.replace("focus", "blurred");
```
