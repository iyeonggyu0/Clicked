# Clicked

2022, 진로 프로젝트

<br>

## 목차

1. 기획 [[바로가기]](#프로젝트-기획)
2. 설계 [[바로가기]](#웹사이트-설계)
3. 디자인 [[바로가기]](#사이트-디자인)
4. 개발 [[바로가기]](#개발)
5. 공유 [[바로가기]](#웹사이트-설계)
   <br><br>

- 사전 조사 [[바로가기]](#사전-조사)
- 커밋 내역 [[바로가기]](#커밋-내역)

---

<br><br>

## 프로젝트 기획

- 목적: 2022. 12. 21일 발표하는 진로 프로젝트
- 프로젝트 성공 기준: 발표 일에 원활한 발표, 구동이 가능한가
- 사용 층: 2학년 9반 친구 및 담임 선생님
- 사용 기기: 모바일, 테블릿

<br><br>

## 웹사이트 설계

### 대략적인 기능 :

- DB에 등록된 친구들중 나의 취향과 가장 잘 맞는 친구는 누구일지 테스트 해보는 사이트
- 로그인x

### 사이트 구조 설계 :

1. 메인 페이지
2. 친구찾기 페이지
3. 연인찾기 페이지
4. 테스트 결과 페이지

### 사용자 시나리오 :

#### User :

- 사용자 정보등록: [사전 설문조사](#사전-조사)
- 메인 페이지 > 친구찾기 or 연인찾기 > 테스트 > 테스트 결과 페이지

<br><br>

## 사이트 디자인

메인 색상:

- ## Background color :
- ## Sub colors :
- ## point colors :

<br>
글꼴:

- Noto Sans KR
- Gothic A1

<br>
디자인 제작:

- Tool : Figma

Img
![]()  
![]()
![]()

<br><br>

## 개발

### 사용 언어 :

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white)
![Nodejs](https://img.shields.io/badge/Nodejs-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![Npm](https://img.shields.io/badge/Npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

<br>

### 사용 라이브러리 :

![.ENV](https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=white)
![styled-components](https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Font-Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=Font-Awesome&logoColor=white)
![AOS](https://img.shields.io/badge/AOS-5C6BBB?style=for-the-badge&logoColor=white)

#

## 사전 조사:

조사 내용: DB에 등록할 자신의 프로필

- 이름
- 나이
- 성별
- 취향
  - 친구와 만나면 하는 것
  - 생활 패턴
  - 즐겨하는 게임
  - 선호 음식
    등 등

## 사전 조사 결과:

반 학생 25명 중
결석자 2명을 제외한 23명의 학생의 프로필 데이터 등록

#

## 커밋 내역

### first commit

###### Dec 5, 2022

- React-create-app
- Readme.me Updata

<br/>

### settings

###### Dec 5, 2022

- Create file structure
- install animeJs
- styles
  - common.js
  - globalStyl
  - theme

<br/>

### profile data

###### Dec 6, 2022

- 조사에 응답한 23명의 프로필 등록
  > ( 사용자 개인의 데이터 이기때문에 git에는 노출 안됨 )

<br/>

### MainPage

###### Dec 7, 2022

- user Profile Data 업데이트
- MainPage

<br/>

### QuestionsPage_1

###### Dec 8, 2022

- params 형식의 주소값에 따라 질문을 다르게 표시 [ 제작중 ]

<br/>

### QuestionsPage_2

###### Dec 9, 2022

- params 형식의 주소 값( /:type )을 감지하여 선택한 모드가 무엇인지 파악하여 표시
- params 형식의 주소 값( /:type/:idx )에 따라 어떤모드의 몇 번째 질문인지를 파악
  > state 객체를 사용하여 idx에 따라 값을 변경해준 뒤에 렌더링하였음
- 질문의 단계에 따른 선택지의 개수 역시 map으로 컴포넌트를 반복하였음.
  > 하나의 페이지에서 1개의 버튼 컴포넌트를 가지고 친구 찾기, 연인 찾기 모드를 모두 구현함

<br/>

### QuestionsPage_3

###### Dec 12, 2022

- 선택 결과를 담을 객체를 Context를 통하여 전역으로 만들고 질문의 답을 고를때 현재 주소 값( /:type/:idx )을 dispatch를 통해 전달하고 reducer로 변경
- 결과 페이지에서 선택 결과에따라 userProfile를 필터링하여 랜더링
