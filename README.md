# Market API

## 소개
이 프로젝트는 마켓의 상품을 관리하기 위한 RESTful API입니다. 상품의 생성, 조회, 수정, 삭제 기능을 제공합니다.

## 기본 URL
API의 기본 URL은: `http://localhost:3000`

## 엔드포인트

| 엔드포인트                | 메서드 | 설명           | 
|---------------------------|--------|----------------|
| `/products`               | POST   | 상품 생성      |  
| `/products`               | GET    | 모든 상품 조회 | 
| `/products/:productsId`   | GET    | 상품 상세 조회 | 
| `/products/:productsId`   | PUT    | 상품 수정      |    
| `/products/:productsId`   | DELETE | 상품 삭제      |   