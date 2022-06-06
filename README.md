Single Page Application 관련 기술들
==================================

## SPA front-end 개발에 대한 나의 생각

front-end에 너무 많은 기술들이 있다. 더우기 버전업도 빠르다.
무슨툴을 써야할지 고민스럽기도 하다.
 

## angular개념

![angular 개념](./images/angular1.png)

- angular-ui-route를 쓰는게 좋겠다.
    - 장점
        - multi view, nested를 쓸 수 있다
        - state에 많은 기능이 있다


## indexedDB
![indexdb란](images/indexdb.png)
![indexdb 개념](./images/indexdb1.png)



> package-lock.json은 package.json으로는 부족한 정보를 도와주는 파일이다.
> 따라서 생성된 package-lock.json파일은 소스 저장소에 꼭 커밋을 하자!

## front-end의 빌드과정에 있어야하는 것들

1. development와 product를 나누어야한다.
2. javascript 파일들에 대해서
    - 1개의 파일로 묶기 (merge)
    - 알아보기 힘들게 만들기 (uglify)
        - map파일 만들기    
    - 압축하기 (compress)
    
3. css
    - 1개의 파일로 묶기
        - map 파일 만들기
    - 압축하기

4. image
    - 압축하기

5. html
    - 압축하기
        - comment 제거
        - 공백 없애기
6. 개발시에는 자동적으로 변경사항을 반영하여 체크해야한다.
