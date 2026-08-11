# 홈스테드 스테이 — 게스트 안내 사이트

GitHub Pages용 정적 사이트. 데이터 처리·문자 발송은 Google Apps Script API를 호출합니다.

## 파일 구성
| 파일 | 용도 |
|---|---|
| `index.html` | 홈 (메뉴 4개) |
| `parking.html` | 주차 등록 · 현황 · 수정 · 삭제 |
| `baggage.html` | 짐 보관 (체크인 전 / 퇴실 후) |
| `checkout.html` | 퇴실하기 + 불편사항 |
| `trash.html` | 쓰레기 배출 안내 |
| `app.css` | 공통 스타일 |
| `app.js` | 공통 스크립트 (**API_URL 설정 필요**) |
| `CNAME` | 커스텀 도메인 (homestead.ai.kr) |

## 설치 순서

### 1. Apps Script 준비
1. `Code.gs`를 최신 버전으로 교체 → 저장
2. **배포 → 배포 관리 → 연필 → 새 버전 → 배포**
   - 액세스: **모든 사용자**
   - 실행: **나**
3. 웹앱 URL(`.../exec`) 복사

### 2. app.js 수정
`app.js` 첫 줄의 `API_URL` 값을 위에서 복사한 `/exec` 주소로 교체.

### 3. GitHub 업로드
1. GitHub에서 새 리포지토리 생성 (예: `homestead`), **Public**
2. 이 폴더의 파일 전체 업로드 (Add file → Upload files)
3. **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main` / `/ (root)` → Save
4. 몇 분 뒤 `https://<계정명>.github.io/<리포명>/` 로 접속 확인

### 4. 도메인 연결 (가비아)
1. 가비아 → 도메인 관리 → **포워딩 설정 삭제**
2. **DNS 설정**에서 아래 레코드 등록
   - A · 호스트 `@` · 값 `185.199.108.153`
   - A · 호스트 `@` · 값 `185.199.109.153`
   - A · 호스트 `@` · 값 `185.199.110.153`
   - A · 호스트 `@` · 값 `185.199.111.153`
   - CNAME · 호스트 `www` · 값 `<계정명>.github.io.`
3. GitHub → Settings → Pages → **Custom domain**에 `homestead.ai.kr` 입력 → Save
4. `Enforce HTTPS` 체크 (인증서 발급까지 최대 24시간)

### 5. 링크 정리
- 설정 시트 `웹앱주소` → `https://homestead.ai.kr`
- 문자 템플릿의 주차 링크 → `https://homestead.ai.kr/parking.html`
- 비틀리 목적지도 새 도메인으로 교체

## 주의
- `app.js`의 `API_URL`을 바꾸지 않으면 아무 기능도 작동하지 않습니다.
- 관리자 페이지는 Apps Script(`?page=admin`)에 그대로 남아 있습니다.
