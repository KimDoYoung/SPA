Javascript 여러가지 기술들
=========================

## promise

- Promise 는 Javascript class이다.
    - 즉 new로 생성
- State : pending -> fulfilled or rejected
- Producer 와 Consumer가 있다.

```javascript
//1. Producer
const promise = new Promise( (resolve, reject)=>{
    // 바로 수행된다
});

- resolve 성공시와 reject 실패시 수행하는 두개의 인자를 갖는 함수
- new 하는 순간 바로 executor가 수행된다.

```

## 사이트

- jsonplaceholder json데이터 제공
