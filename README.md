# Market API

## 소개
이 프로젝트는 Express.js와 MongoDB를 이용하여 상품 정보를 관리하는 RESTful API입니다. 상품의 생성, 조회, 수정, 삭제 기능을 제공합니다.

## 기본 URL
API의 기본 URL은: `http://localhost:3000`

## 엔드포인트

| 엔드포인트              | 메서드 | 설명           | 요청 본문                                                                                                                                                          | 응답 본문                                                                                                                                                          |
|-------------------------|--------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/products`             | POST   | 상품 생성      | ```json<br>{<br>  "name": "상품 이름",<br>  "description": "상품 설명",<br>  "manager": "담당자 이름",<br>  "password": "비밀번호",<br>  "status": "판매 상태"<br>}``` | ```json<br>{<br>  "message": "상품 생성에 성공했습니다.",<br>  "goods": {<br>    "name": "상품 이름",<br>    "description": "상품 설명",<br>    "manager": "담당자 이름",<br>    "status": "FOR_SALE",<br>    "createdAt": "생성 날짜",<br>    "updatedAt": "수정 날짜"<br>  }<br>}``` |
| `/products`             | GET    | 모든 상품 조회 | 없음                                                                                                                                                              | ```json<br>{<br>  "message": "상품 목록 조회에 성공했습니다.",<br>  "productsItem": [<br>    {<br>      "name": "상품 1",<br>      "description": "설명 1",<br>      "manager": "담당자 1",<br>      "status": "FOR_SALE",<br>      "createdAt": "생성 날짜",<br>      "updatedAt": "수정 날짜"<br>    },<br>    {<br>      "name": "상품 2",<br>      "description": "설명 2",<br>      "manager": "담당자 2",<br>      "status": "FOR_SALE",<br>      "createdAt": "생성 날짜",<br>      "updatedAt": "수정 날짜"<br>    }<br>  ]<br>}``` |
| `/products/:productsId` | GET    | 상품 상세 조회 | 없음                                                                                                                                                              | ```json<br>{<br>  "message": "상품 상세 조회에 성공했습니다.",<br>  "products": {<br>    "name": "상품 이름",<br>    "description": "상품 설명",<br>    "manager": "담당자 이름",<br>    "status": "FOR_SALE",<br>    "createdAt": "생성 날짜",<br>    "updatedAt": "수정 날짜"<br>  }<br>}``` |
| `/products/:productsId` | PUT    | 상품 수정      | ```json<br>{<br>  "name": "수정된 상품 이름",<br>  "description": "수정된 상품 설명",<br>  "manager": "수정된 담당자 이름",<br>  "status": "수정된 판매 상태",<br>  "password": "기존 비밀번호"<br>}``` | ```json<br>{<br>  "message": "상품 수정에 성공했습니다.",<br>  "products": {<br>    "name": "수정된 상품 이름",<br>    "description": "수정된 상품 설명",<br>    "manager": "수정된 담당자 이름",<br>    "status": "FOR_SALE",<br>    "createdAt": "생성 날짜",<br>    "updatedAt": "수정 날짜"<br>  }<br>}``` |
| `/products/:productsId` | DELETE | 상품 삭제      | ```json<br>{<br>  "password": "기존 비밀번호"<br>}```                                                                                                              | ```json<br>{<br>  "message": "상품 삭제에 성공했습니다.",<br>  "id": "삭제된 상품 ID"<br>}```                                                                                                             |

## 사용법
1. **의존성 설치**:
    ```sh
    npm install
    # 또는
    yarn install
    ```

2. **환경 변수 설정**: 프로젝트 루트 디렉터리에 `.env` 파일을 만들고 MongoDB URI를 설정합니다.
    ```
    MONGODB_URI=mongodb://localhost:27017/market
    ```

3. **서버 실행**:
    ```sh
    npm run dev
    # 또는
    yarn dev
    ```
