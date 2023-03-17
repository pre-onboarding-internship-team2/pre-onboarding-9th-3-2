# 시계열 차트

원티드 프리온보딩 인턴십 프론트엔드 9차 3주차 과제

## 배포 링크 🔗

[https://keen-lily-5dbf2f.netlify.app/](https://keen-lily-5dbf2f.netlify.app/)

## 실행 방법 👟

```
yarn install
yarn dev

&&

npm install
npm run dev

```

## 디렉토리 구조 📂

```
📦src
 ┣ 📂api
 ┃ ┗ 📜httpClient.ts
 ┣ 📂components
 ┃ ┣ 📜FilterButtons.tsx
 ┃ ┗ 📜TimeSeriesChart.tsx
 ┣ 📂consts
 ┃ ┗ 📜chart.const.ts
 ┣ 📂hooks
 ┃ ┣ 📜useData.tsx
 ┃ ┗ 📜useFilterQueryString.tsx
 ┣ 📂types
 ┃ ┣ 📜chartData.types.ts
 ┃ ┗ 📜response.types.ts
 ┣ 📂utils
 ┃ ┣ 📜getChartData.ts
 ┃ ┣ 📜getChartOption.ts
 ┃ ┣ 📜getDatasetStyleByFilter.ts
 ┃ ┣ 📜getUniqueLocations.ts
 ┃ ┗ 📜registChartJS.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

## 사용 기술 스택 🔨

| 사용처 | 사용 기술 | 결정 사유 |
| --- | --- | --- |
| 프레임워크 | React (Vite) | - CRA와 비교했을 때 매우 효율적으로 번들링 작업 진행 |
| 언어 | Typescript(Javascript) | - 더 안정적인 코드 작성: 컴파일 과정에서 버그를 사전에 찾을 수 있음 <br /> - 개발 생산성 향상: 자동완성, 타입체크, 에러 표시 도구 제공 <br /> - 코드 가독성 향상: 개발자가 코드를 이해하고 유지보수하기 쉽게 만듦 |
| 라우팅 처리 | react-router-dom | params를 이용한 필터링 적용 |
| 차트 라이브러리 | Chart.js (react-chartjs-2 ) | - 인기 많은 차트 라이브러리
- 작은 번들 사이즈
- canvas 기반으로 DOM에 부담 적음
- TS로 작성되어 있음 |
| 코드 포매팅 | ESLint |  |
| 배포 | netlify | - Github 레포지토리와 연동하여 배포 |

## 주안점 💫

- 관심사 분리
    - 차트 데이터 불러오기는 커스텀 훅에서, 렌더링은 컴포넌트에서 처리
    - chartjs 에서 필요한 config 값을 options / dataset으로 분리하여 파일 만듦
- 상수를 분리하여 여러 코드에서 동일한 문자열을 키값으로 사용
- 필터링 적용 : url querystring 활용

## 시연 영상 🎦

https://user-images.githubusercontent.com/87600354/225897642-e24e02fa-a446-4ed7-8869-86bffdbb7904.mov



https://user-images.githubusercontent.com/87600354/225897739-feefe517-51c8-4f60-a4bf-dddf496fdb65.mov



## 팀원 구성표 👨‍💻👩‍💻

<table align="center">
<tr>
<td align="center">
<a href="[https://github.com/jiyeon2](https://github.com/jiyeon2)">
<img src="[https://avatars.githubusercontent.com/u/18395475?v=4](https://avatars.githubusercontent.com/u/18395475?v=4)" width="100px;" alt=""/>
<br />
<sub><b>이지연</b></sub>
</a>
</td>
<td align="center">
<a href="[https://github.com/foreknowledge](https://github.com/foreknowledge)">
<img src="[https://avatars.githubusercontent.com/u/29790944?v=4](https://avatars.githubusercontent.com/u/29790944?v=4)" width="100px;" alt=""/>
<br />
<sub><b>김예지</b></sub>
</a>
</td>
<td align="center">
<a href="[https://github.com/ggsno](https://github.com/ggsno)">
<img src="[https://avatars.githubusercontent.com/u/46833758?v=4](https://avatars.githubusercontent.com/u/46833758?v=4)" width="100px;" alt=""/>
<br />
<sub><b>오강산</b></sub>
</a>
</td>
<td align="center">
<a href="[https://github.com/yses9296](https://github.com/yses9296)">
<img src="[https://avatars.githubusercontent.com/u/54027716?v=4](https://avatars.githubusercontent.com/u/54027716?v=4)" width="100px;" alt=""/>
<br />
<sub><b>최은서</b></sub>
</a>
</td>
<td align="center">
<a href="[https://github.com/tjswo2292](https://github.com/tjswo2292)">
<img src="[https://avatars.githubusercontent.com/u/55657931?v=4](https://avatars.githubusercontent.com/u/55657931?v=4)" width="100px;" alt=""/>
<br />
<sub><b>최선재</b></sub>
</a>
</td>
</tr>
<tr>
<td align="center">
<a href="[https://github.com/jiwonmik](https://github.com/jiwonmik)">
<img src="[https://avatars.githubusercontent.com/u/59993029?v=4](https://avatars.githubusercontent.com/u/59993029?v=4)" width="100px;" alt=""/>
<br />
<sub><b>김지원</b></sub>
</a>
</td>
<td align="center">
<a href="[https://github.com/onezeun](https://github.com/onezeun)">
<img src="[https://avatars.githubusercontent.com/u/78632052?v=4](https://avatars.githubusercontent.com/u/78632052?v=4)" width="100px;" alt=""/>
<br />
<sub><b>한지은</b></sub>
</a>
</td>
<td align="center">
<a href="[https://github.com/iuesver](https://github.com/iuesver)">
<img src="[https://avatars.githubusercontent.com/u/87600354?v=4](https://avatars.githubusercontent.com/u/87600354?v=4)" width="100px;" alt=""/>
<br />
<sub><b>오혁상</b></sub>
</a>
</td>
<td align="center">
<a href="[https://github.com/junseokoh-hub](https://github.com/junseokoh-hub)">
<img src="[https://avatars.githubusercontent.com/u/99642719?v=4](https://avatars.githubusercontent.com/u/99642719?v=4)" width="100px;" alt=""/>
<br />
<sub><b>오준석</b></sub>
</a>
</td>
<td align="center">
<a href="[https://github.com/pre-onboarding-internship-team2](https://github.com/pre-onboarding-internship-team2)">
<img src="[https://avatars.githubusercontent.com/u/125961436?s=200&v=4](https://avatars.githubusercontent.com/u/125961436?s=200&v=4)" width="100px;" alt=""/>
<br />
<sub><b>2팀</b></sub>
</a>
</td>
</tr>
</table>

## commit convention 📝

| Tag Name | Description |
| --- | --- |
| feat | 새로운 기능 추가 |
| design | UI style 변경 |
| refactor | 코드 리팩토링 |
| fix | 에러, 버그 수정 |
| docs | 문서수정 |
| chores | 기타 수정사항 |

# 협업 방식 👥

## 커뮤니케이션 툴

- 노션([회의록](https://www.notion.so/2da78bd48750440292898f3157a0021b))
- 디스코드
- 깃헙 팀 레포지토리의 PR 코멘트, 커밋메시지

## 과제 수행 방식

1. 기업과제 요구사항 3가지를 이슈 3가지로 할당
    - 기업과제 전체를 한번에 리뷰하기에는 범위가 커서 요구사항 단위로 작업하고 공유하기로 결정함
2. 프로젝트 진행 규칙을 세우고 각자의 브랜치에서 이슈 단위로 작업 진행
    
    ```
    # **팀 repository 에 PR 방법
    1. organization repository에 각자의 이름으로 branch 생성 및 main branch를 개인 개정의 repository로 fork
    2. 각자의 fork된 개인 개정의 repository에서 기능(이슈)단위의 branch 생성 및 구현
    3. organization repository에 각자의 이름 branch에 기능(이슈)단위로 PR 및 merge
    4. 최종 제출 직전에 토론으로 하나의 branch만 main branch로 merge
    5. 나머지 branch들은 삭제 (PR만 남아있게끔)**
    
    ```
    
3. 이슈마다 PR를 생성하여 자신의 코드에 대한 설명을 남기고 팀원들의 코드를 리뷰
    - PR 내용과 브랜치의 커밋으로 팀원의 작업상황을 확인
4. 디스코드에서 회의를 진행하여 본인의 작업물, 경과, 고민점 등을 공유
    - 자신의 코드를 설명하고 Best Practice에 대한 의견 교환 및 소통하는 연습 🤗
5. 디스코드 회의 이후 다른 팀원의 코드와 작업방식, PR에서 받은 코멘트를 참고하여 자신의 프로젝트를 개선
6. 마지막에 팀원끼리 투표를 진행하여 과제로 제출할 코드 선정
    - 다음부터는 ‘기업 과제’로서 팀원들의 코드가 어떤지 객관적으로 평가해 볼 수 있도록 채점표를 만들어 이야기를 나눠볼 예정
