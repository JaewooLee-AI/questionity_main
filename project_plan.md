# 퀘스처니티 (Questionity) - 프로젝트 계획

## 1. 프로젝트 설명

퀘스처니티(Questionity)는 "Question + Community"의 합성어로, 독서를 통해 사람들을 연결하는 온라인 독서클럽 모임 주선 플랫폼이다. 창업 5개월 차 신생 스타트업으로, 국내 최고의 독서모임 플랫폼인 트레바리를 벤치마킹하여 세련되고 직관적인 사용자 경험을 제공하는 것을 목표로 한다.

- **타겟 사용자**: 독서를 좋아하거나 독서를 통해 새로운 사람들과 교류하고 싶은 20~40대 직장인 및 학생
- **핵심 가치**: 질문을 던지고, 대화를 나누고, 사람들과 친해지는 독서 기반 커뮤니티 경험 제공

## 2. 페이지 구조

| 경로 | 설명 |
|------|------|
| `/` | 홈페이지 - 히어로, 서비스 소개, 카테고리, 추천 모임, 이용 방법, 후기 |
| `/clubs` | 독서모임 목록 - 검색, 필터, 모임 카드 리스트 |
| `/clubs/:id` | 모임 상세 페이지 - 모임 정보, 클럽장 소개, 일정, 참여 신청 |
| `/login` | 로그인 페이지 |
| `/signup` | 회원가입 페이지 |
| `/booking/:clubId` | 모임 참여 예약/신청 페이지 |
| `/mypage` | 마이페이지 - 내 정보, 내 예약 목록 |

## 3. 핵심 기능

- [ ] **홈페이지 UI**: 히어로 배너, 서비스 소개, 독서모임 카테고리, 추천 모임, 이용 방법, 사용자 후기, CTA
- [ ] **모임 목록**: 검색, 카테고리/지역/날짜 필터, 모임 카드 리스트
- [ ] **모임 상세**: 모임 소개, 클럽장 프로필, 일정 및 장소, 참여 비용, 참여 신청 버튼
- [ ] **회원가입/로그인**: 이메일 기반 인증 (Supabase Auth)
- [ ] **모임 예약/신청**: 모임 참여 신청, 예약 내역 확인
- [ ] **마이페이지**: 내 프로필, 예약한 모임 목록, 예약 취소

## 4. 데이터 모델 설계

### Table: profiles (사용자 프로필)
| 필드 | 타입 | 설명 |
|------|------|------|
| id | uuid | Supabase Auth 사용자 ID (PK) |
| email | text | 이메일 |
| name | text | 사용자 이름 |
| avatar_url | text | 프로필 이미지 URL |
| bio | text | 자기소개 |
| created_at | timestamp | 가입일 |

### Table: clubs (독서모임)
| 필드 | 타입 | 설명 |
|------|------|------|
| id | uuid | Primary key |
| name | text | 모임 이름 |
| description | text | 모임 소개 |
| category | text | 카테고리 |
| sub_category | text | 세부 카테고리 |
| image_url | text | 모임 대표 이미지 |
| leader_name | text | 클럽장 이름 |
| leader_bio | text | 클럽장 소개 |
| leader_image_url | text | 클럽장 프로필 이미지 |
| location | text | 모임 장소 |
| schedule | text | 모임 일정 |
| price | integer | 참여 비용 |
| capacity | integer | 정원 |
| current_members | integer | 현재 참여자 수 |
| status | text | 모임 상태 (open/closed/full) |
| created_at | timestamp | 생성일 |

### Table: bookings (예약/신청)
| 필드 | 타입 | 설명 |
|------|------|------|
| id | uuid | Primary key |
| user_id | uuid | 예약자 ID (FK → profiles.id) |
| club_id | uuid | 모임 ID (FK → clubs.id) |
| status | text | 예약 상태 (pending/confirmed/cancelled) |
| booked_at | timestamp | 예약 일시 |

## 5. 백엔드 / 서드파티 연동 계획

- **Supabase**: 사용자 인증(Auth), 프로필/모임/예약 데이터 저장(Database), 이미지 저장(Storage)
- **Stripe**: 추후 온라인 결제 연동 (Phase 4 이후 확장)

## 6. 개발 단계 계획

### Phase 1: 홈페이지 UI 디자인
- 목표: 세련된 홈페이지 UI 구축
- 산출물: 홈페이지 (히어로, 서비스 소개, 카테고리, 추천 모임, 이용 방법, 후기, CTA)

### Phase 2: 모임 목록 및 상세 페이지
- 목표: 모임 탐색 및 상세 정보 확인 기능
- 산출물: `/clubs` 목록 페이지, `/clubs/:id` 상세 페이지

### Phase 3: 인증 시스템
- 목표: 회원가입 및 로그인 기능
- 산출물: `/login`, `/signup` 페이지, localStorage 기반 데모 인증
- 진행 상황: UI 페이지 완성, localStorage 기반 인증 구현 완료 (추후 Supabase 연동 시 교체 가능)

### Phase 4: 모임 예약 시스템
- 목표: 모임 참여 신청 및 예약 관리
- 산출물: `/booking/:clubId` 페이지, 마이페이지 예약 목록