# 3주차 과제

주어진 데이터를 기반으로 시계열 차트 만들기

## 시작하기

```
npm install

npm run dev // start development server

npm run build // build

npm start // start production server
```

## 기술

- 언어

  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=plastic&logo=TypeScript&logoColor=white" />

- 라이브러리

  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=plastic&logo=Chart.js&logoColor=white" />
  <img src="https://img.shields.io/badge/react chartjs 2-61DAFB?style=plastic&logo=react chartjs 2&logoColor=white" />
  <img src="https://img.shields.io/badge/React Query-FF4154?style=plastic&logo=React Query&logoColor=white" />

- 프레임워크

  <img src="https://img.shields.io/badge/Next.js-000000?style=plastic&logo=Next.js&logoColor=white" />

## 프로젝트 구조

```
pages
 ┣ index.tsx // 메인 페이지
 ┣ _app.tsx // 글로벌
 ┗ _document.tsx
 utils
 ┣ chart-api.ts // 차트 REST API 함수
 ┣ chart-api.types.ts // 차트 REST API 함수 타입
 ┣ chart-data.ts // 차트 데이터
 ┣ chart-options.ts // 차트 옵션
 ┗ chart.types.ts // 차트 타입
 hooks
 ┗ useChartQuery.ts // 차트 데이터 페칭
 components
 ┗ link-container.tsx // url 링크
```

## 팀원 구성표

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/jiyeon2">
      <img src="https://avatars.githubusercontent.com/u/18395475?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>이지연</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ggsno">
      <img src="https://avatars.githubusercontent.com/u/46833758?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>오강산</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/yses9296">
      <img src="https://avatars.githubusercontent.com/u/54027716?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>최은서</b></sub>
      </a>
    </td>
        <td align="center">
      <a href="https://github.com/tjswo2292">
      <img src="https://avatars.githubusercontent.com/u/55657931?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>최선재</b></sub>
      </a>
    </td>
</tr>
<tr>
    <td align="center">
      <a href="https://github.com/jiwonmik">
      <img src="https://avatars.githubusercontent.com/u/59993029?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>김지원</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/onezeun">
      <img src="https://avatars.githubusercontent.com/u/78632052?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>한지은</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/iuesver">
      <img src="https://avatars.githubusercontent.com/u/87600354?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>오혁상</b></sub>
      </a>
    </td>
      <td align="center">
      <a href="https://github.com/junseokoh-hub">
      <img src="https://avatars.githubusercontent.com/u/99642719?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>오준석</b></sub>
      </a>
    </td>

  </tr>
</table>

## commit convention

| Tag Name | Description      |
| -------- | ---------------- |
| feat     | 새로운 기능 추가 |
| design   | UI style 변경    |
| refactor | 코드 리팩토링    |
| fix      | 에러, 버그 수정  |
| docs     | 문서수정         |
| chores   | 기타 수정사항    |
