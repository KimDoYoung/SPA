nodeserver
==========

## 개요

- simple rest api server with node express 
- json파일을 읽어서 데이터를 전송

## build

1. npm init
2. npm i express --save
3. node app.js

## using

- localhost:3000/
- localhost:3000/api/users
- localhost:3000/api/data?fname=student


## app설치 on centos

browser-> browserSync(forward proxy) -> iptime -> nginx(reverse proxy) -> nodeApp

### nginx 설치
https://eusun0830.tistory.com/19

### 에러
1. /etc/nginx/nginx.conf 에 user nginx -> user root(또는 사용하는 유저명)
2. ps -auZ | grep nginx
3. semanage permissive -a httpd_t

### 문서
[How To Set Up a Node.js Application for Production on CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-centos-7)

[nginx reverse proxy](https://medium.com/sjk5766/nginx-reverse-proxy-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-e11e18fcf843)