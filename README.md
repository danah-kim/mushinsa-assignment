# 무신사 글로벌개발팀 과제 🔥

## Getting started
```sh
yarn start
```

## 요구사항
- [x] 상단 타이틀, 필터는 고정이 아닙니다.
- [x] 사용할 api는 다음과 같습니다.
  - https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10
  - page는 1~10까지 순차적으로 호출합니다.
  - 전달 받을 데이터는 아래 문서를 참고합니다.
  - 참고 문서: https://anapioficeandfire.com/Documentation#characters
  - 하루에 호출 가능한 횟수에 제한이 있으니, 개발 기간동안 적절히 분배하여 사용하여야 합니다.
- [x] 스크롤이 리스트 하단까지 내려오면 다음 리스트 항목이 노출되는 무한 스크롤로 구현 됩니다.
- [x] api를 통해 전달받은 데이터 중 name, aliases, title, books, tvSeries 항목을 노출합니다. 특정 항목에 노출 해야 될 내용이 많을 경우, ellipsis를 사용해도 괜찮습니다. books, tvSeries
  는 항목 수를 노출합니다. 
- [x] 필터는 토글 형태로 처리되고 활성화 되어있으면 아래 리스트에 적용이 됩니다. 비활성화가 되면 해제가 됩니다. 활성/비활성 여부가 시각적으로 구분되어야 합니다. 
- [x] 필터는 중복 적용 가능합니다. 
- [x] 리스트 아이템의 삭제 버튼을 누르면 리스트에서 사라집니다. 초기화 버튼을 누르면 다시 노출 됩니다. 
- [x] 해당 페이지 진입시 query params에 page를 명시하면 이 값이 리스트의 시작 page가 됩니다. (e.g. localhost:8080/homework?page=2)

## 주요 사용 라이브러리
- react: SPA 구현
- react-query: server Data 캐싱
- axios: http 비동기 통신용
- babel, react-app-rewired: ECMAScript 2015+ 이전 버전과 호환되는 코드로 변환
- eslint, prettier, husky, lin-staged:
- daisyui: UI 프레임워크
