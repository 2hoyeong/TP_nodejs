# TP_nodejs

[![Build Status](https://travis-ci.org/2hoyeong/TP_nodejs.png)](https://travis-ci.org/2hoyeong/TP_nodejs)

# 기술

## 백엔드

* Node.js ( Express.js )
* MongoDB ( Mongoose )
* Docker
* Nginx
* EJS ( NODEJS HTML TEMPLATE ENGINE )
* Mocha


## 프론트엔드

* HTML5
* CSS3

## CI / CD

master branch에 commit이 되면 TravisCI를 통해 코드 테스트를 진행하고 정상적으로 완료가 되면 AWS CodeDeploy를 통해 서버에 코드를 배포한다.
배포가 되면 Docker와 Nginx를 이용해 서비스 중단 없이 서버 실행이 완료된다.

---

http://ec2-15-165-116-169.ap-northeast-2.compute.amazonaws.com/