## HNM_Next

>Youtube API를 기반으로 MBTI와 음악을 공유하는 사이드 프로젝트입니다.  
흐느넴은 2022년 8월 12~18일에 항해 부트캠프에서 7일 동안 작업했었던 프로젝트입니다.  
6개월 전에 작업했던 해당 프로젝트를 2023년 3월에 주말 동안 틈틈이 리뉴얼 했습니다.  
https://www.youtube.com/watch?v=UF6L6QfTCdo

![image](https://user-images.githubusercontent.com/94776135/230786292-ec18e7c0-ef1b-4f8f-9112-d0b3eba62b30.png)


1. 프로젝트 목표
   - 기존 프로젝트의 마이그레이션
     - JavaScript에서 TypeScript
     - React에서 React + NextJS
   - NextJS 기본 연습
   - Tailwind 실습
   - youtube API 활용

2. FE 사용 기술

  ```
  NextJS, TypeScript, Tailwind
  ```

### DB 서버 close 및 시연 영상 제작, 마지막 커밋 (230410)

- 23년 4월 10일: 7시반 ~ 12시까지 마무리 작업 및 시연 영상 제작
- 유튜브 영상 링크: https://www.youtube.com/watch?v=UF6L6QfTCdo


### 부족했던 점
- 완성하지 못한 기능
  - 댓글 및 상세 페이지 : Next 중첩 라우팅과 getServerSideProps에 대한 이해 부족
- 게시글 정렬과 필터
  - api는 구현되어 있으나, 서버 close까지 UI를 미처 구현하지 못함
- 일주일에 일정 시간 밖에 작업하지 못해서 스코프를 다 완성하지 못한 점에 대한 아쉬움이 있습니다. 

### 주요 기능 (230404)
- 게시글에 마우스오버 시, youtube 음악 재생 및 앨범 커버 변경
- 유튜브 URL와 제목, 내용 입력, Youtube API를 통해 메타데이터를 저장
  - youtube metadata : 영상 제목, 영상 내용, 썸네일 이미지, 비디오 id 등
- 사용자의 MBTI(select), 닉네임(랜덤 생성), 성별 정보 저장 및 수정
- 좋아요 및 페이지네이션, 게시글 임시저장
- (상세 페이지 수정 중)

![image](https://user-images.githubusercontent.com/94776135/229836760-978654c1-2f24-4c25-ae25-c827616ea7a3.png)
![image](https://user-images.githubusercontent.com/94776135/229840962-6d118d3d-4d89-4324-a895-9b9f44214a1b.png)
![image](https://user-images.githubusercontent.com/94776135/229841300-66302da9-bf33-472d-bc95-1f334db8164c.png)
![image](https://user-images.githubusercontent.com/94776135/229841759-52e12ea7-f683-4ef3-b974-08445c5d5905.png)
![image](https://user-images.githubusercontent.com/94776135/229841858-87c6aead-f903-427b-8c81-fa3c06e4a907.png)

