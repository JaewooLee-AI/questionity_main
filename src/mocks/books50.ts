export interface CuratedBook {
  id: string;
  category: "경제경영" | "자기계발" | "인문학" | "IT/컴퓨터" | "소설/시/희곡" | "사회과학";
  title: string;
  author: string;
  publisher: string;
  cover: string;
  description: string;
  tags: string[];
}

export const CURATED_50_BOOKS: CuratedBook[] = [
  // 1. 경제경영 (8 books)
  {
    id: "b-101",
    category: "경제경영",
    title: "아토믹 해빗 (Atomic Habits)",
    author: "제임스 클리어",
    publisher: "비즈니스북스",
    cover: "https://image.aladin.co.kr/product/37944/74/cover200/k672033454_3.jpg",
    description: "매일 1%씩 변하면 1년 뒤 37배 성장한다. 습관 형성의 과학적 메커니즘.",
    tags: ["베스트셀러", "습관", "자기관리"]
  },
  {
    id: "b-102",
    category: "경제경영",
    title: "제로 투 원 (Zero to One)",
    author: "피터 틸",
    publisher: "한국경제신문",
    cover: "https://image.aladin.co.kr/product/36235/91/cover200/k102038607_1.jpg",
    description: "새로운 것을 창조하는 수직적 진보와 독점 기업 구축의 법칙.",
    tags: ["스타트업", "혁신", "비즈니스"]
  },
  {
    id: "b-103",
    category: "경제경영",
    title: "돈의 속성",
    author: "김승호",
    publisher: "스노우폭스북스",
    cover: "https://image.aladin.co.kr/product/35910/69/cover200/k412037592_3.jpg",
    description: "돈을 대하는 태도와 부의 법칙을 담은 한인 최초 글로벌 기업가의 자산 철학.",
    tags: ["재테크", "부자", "자산관리"]
  },
  {
    id: "b-104",
    category: "경제경영",
    title: "원칙 (Principles)",
    author: "레이 달리오",
    publisher: "한빛비즈",
    cover: "https://image.aladin.co.kr/product/22991/63/cover200/s492638220_1.jpg",
    description: "세계 최대 헤지펀드 브릿지워터 창업자의 일과 삶의 원칙 체계.",
    tags: ["리더십", "의사결정", "경영"]
  },
  {
    id: "b-105",
    category: "경제경영",
    title: "트렌드 코리아 2026",
    author: "김난도 외",
    publisher: "미래의창",
    cover: "https://image.aladin.co.kr/product/37771/28/cover200/s122033568_1.jpg",
    description: "대한민국 소비 트렌드의 흐름과 다가올 키워드 전격 분석.",
    tags: ["트렌드", "소비자", "마케팅"]
  },
  {
    id: "b-106",
    category: "경제경영",
    title: "생각에 관한 생각",
    author: "대니얼 카너먼",
    publisher: "김영사",
    cover: "https://image.aladin.co.kr/product/14013/55/cover200/8934981210_1.jpg",
    description: "노벨 경제학상 수상자가 밝혀낸 인간 행동의 편향과 의사결정의 비밀.",
    tags: ["행동경제학", "심리학", "판단력"]
  },
  {
    id: "b-107",
    category: "경제경영",
    title: "부의 대이동",
    author: "오건영",
    publisher: "페이지2",
    cover: "https://image.aladin.co.kr/product/24607/53/cover200/k922631278_1.jpg",
    description: "금리와 환율로 파악하는 세계 경제와 투자 자산의 미래 지도.",
    tags: ["금리", "환율", "거시경제"]
  },
  {
    id: "b-108",
    category: "경제경영",
    title: "역행자",
    author: "자청",
    publisher: "웅진지식하우스",
    cover: "https://image.aladin.co.kr/product/31730/9/cover200/k162936876_1.jpg",
    description: "운명에 맞서 인생을 역전시키는 사고방식과 7단계 실행 전략.",
    tags: ["자기계발", "성공", "사고방식"]
  },

  // 2. 자기계발 (9 books)
  {
    id: "b-201",
    category: "자기계발",
    title: "도둑맞은 집중력",
    author: "요한 하리",
    publisher: "어크로스",
    cover: "https://image.aladin.co.kr/product/31559/97/cover200/s102936816_3.jpg",
    description: "스마트폰과 숏폼 시대, 우리의 깊은 몰입과 집중력을 되찾는 법.",
    tags: ["집중력", "디지털디톡스", "몰입"]
  },
  {
    id: "b-202",
    category: "자기계발",
    title: "미움받을 용기",
    author: "기시미 이치로",
    publisher: "인플루엔셜",
    cover: "https://image.aladin.co.kr/product/30782/55/cover200/k442831368_1.jpg",
    description: "아들러 심리학을 통해 타인의 인정 욕구에서 벗어나 나답게 사는 삶.",
    tags: ["아들러", "자유", "인간관계"]
  },
  {
    id: "b-203",
    category: "자기계발",
    title: "데일 카네기 인간관계론",
    author: "데일 카네기",
    publisher: "현대지성",
    cover: "https://image.aladin.co.kr/product/20945/79/cover200/s652933016_2.jpg",
    description: "사람을 끌어당기고 마음을 얻는 불멸의 대화와 경청 원칙.",
    tags: ["대화법", "소통", "클래식"]
  },
  {
    id: "b-204",
    category: "자기계발",
    title: "몰입 (Flow)",
    author: "황농문",
    publisher: "랜덤하우스",
    cover: "https://image.aladin.co.kr/product/33850/89/cover200/8925575027_1.jpg",
    description: "뇌 과학 기반의 100% 한계 수준 딥 워킹과 몰입의 즐거움.",
    tags: ["몰입", "성공", "두뇌실험"]
  },
  {
    id: "b-205",
    category: "자기계발",
    title: "타이탄의 도구들",
    author: "팀 페리스",
    publisher: "토네이도",
    cover: "https://image.aladin.co.kr/product/29714/21/cover200/k232838895_1.jpg",
    description: "세계 최고 승자들의 아침 루틴과 압도적 성과를 만드는 팁.",
    tags: ["루틴", "동기부여", "성공"]
  },
  {
    id: "b-206",
    category: "자기계발",
    title: "그릿 (GRIT)",
    author: "앤절라 더크워스",
    publisher: "비즈니스북스",
    cover: "https://image.aladin.co.kr/product/30657/56/cover200/k272830938_1.jpg",
    description: "IQ보다 중요한 성공의 핵심 동력, 열정과 집념의 힘.",
    tags: ["끈기", "열정", "성공학"]
  },
  {
    id: "b-207",
    category: "자기계발",
    title: "퓨처 셀프 (Future Self)",
    author: "벤저민 하디",
    publisher: "상상스퀘어",
    cover: "https://image.aladin.co.kr/product/34795/5/cover200/k782933126_2.jpg",
    description: "미래의 나를 현재로 불러와 오늘 의사결정을 완전히 개조하는 법.",
    tags: ["미래의나", "목표달성", "성장"]
  },
  {
    id: "b-208",
    category: "자기계발",
    title: "원씽 (The ONE Thing)",
    author: "게리 켈러",
    publisher: "비즈니스북스",
    cover: "https://image.aladin.co.kr/product/33147/58/cover200/k812937035_1.jpg",
    description: "복잡한 세상을 이기는 단 하나의 단순하고 단단한 핵심에 집중하라.",
    tags: ["단하나", "우선순위", "생산성"]
  },
  {
    id: "b-209",
    category: "자기계발",
    title: "초집중 (Indistractable)",
    author: "니르 에얄",
    publisher: "안드로메다",
    cover: "https://image.aladin.co.kr/product/26549/79/cover200/8925589060_1.jpg",
    description: "외부 자극을 차단하고 스스로 일상을 컨트롤하는 강력한 집중 기술.",
    tags: ["집중력", "자기통제", "시간관리"]
  },

  // 3. 인문학 (8 books)
  {
    id: "b-301",
    category: "인문학",
    title: "사피엔스 (Sapiens)",
    author: "유발 하라리",
    publisher: "김영사",
    cover: "https://image.aladin.co.kr/product/31424/4/cover200/k482832219_1.jpg",
    description: "인지혁명, 농업혁명, 과학혁명을 거친 인류의 위대한 종적 여정.",
    tags: ["인류학", "역사", "문명"]
  },
  {
    id: "b-302",
    category: "인문학",
    title: "니체의 말",
    author: "프리드리히 니체",
    publisher: "삼호미디어",
    cover: "https://image.aladin.co.kr/product/29982/17/cover200/8978496628_1.jpg",
    description: "삶의 고난을 직면하고 스스로의 주인이 되도록 자극하는 니체의 정수.",
    tags: ["철학", "니체", "삶의지혜"]
  },
  {
    id: "b-303",
    category: "인문학",
    title: "데미안 (Demian)",
    author: "헤르만 헤세",
    publisher: "민음사",
    cover: "https://image.aladin.co.kr/product/26/0/cover200/s452139198_1.jpg",
    description: "알을 깨고 나와 자기 자신에게로 이르는 청춘의 자아 탐구 명작.",
    tags: ["고전", "자아성찰", "성장소설"]
  },
  {
    id: "b-304",
    category: "인문학",
    title: "정의란 무엇인가",
    author: "마이클 샌델",
    publisher: "와이즈베리",
    cover: "https://image.aladin.co.kr/product/4898/84/cover200/s812035947_1.jpg",
    description: "도덕적 딜레마를 통한 철학적 담론과 정의로운 사회에 대한 탐구.",
    tags: ["정의", "윤리학", "하버드"]
  },
  {
    id: "b-305",
    category: "인문학",
    title: "총 균 쇠 (Guns, Germs, and Steel)",
    author: "재레드 다이아몬드",
    publisher: "문학사상",
    cover: "https://image.aladin.co.kr/product/31629/43/cover200/8934942460_1.jpg",
    description: "무엇이 인간 사회의 운명을 갈라놓았는가? 지리적 환경과 문명의 역사.",
    tags: ["문명사", "인류학", "지리학"]
  },
  {
    id: "b-306",
    category: "인문학",
    title: "코스모스 (Cosmos)",
    author: "칼 세이건",
    publisher: "사이언스북스",
    cover: "https://image.aladin.co.kr/product/39676/50/cover200/k382130398_1.jpg",
    description: "우주의 시공간과 인간 존재에 대한 다정하고 거대한 인문적 철학 서사.",
    tags: ["우주", "천문학", "인문철학"]
  },
  {
    id: "b-307",
    category: "인문학",
    title: "군주론 (The Prince)",
    author: "마키아벨리",
    publisher: "돋을새김",
    cover: "https://image.aladin.co.kr/product/24943/22/cover200/k032632692_2.jpg",
    description: "권력의 속성과 리더의 결단력을 냉혹할 정도로 예리하게 해부한 클래식.",
    tags: ["정치철학", "리더십", "고전"]
  },
  {
    id: "b-308",
    category: "인문학",
    title: "그리스인 조르바",
    author: "니코스 카잔차키스",
    publisher: "열린책들",
    cover: "https://image.aladin.co.kr/product/603/79/cover200/8932909342_1.jpg",
    description: "이성과 규범을 넘어 야성적인 생의 열정으로 자유를 노래하는 조르바.",
    tags: ["자유", "문학", "인생관"]
  },

  // 4. IT/컴퓨터 (8 books)
  {
    id: "b-401",
    category: "IT/컴퓨터",
    title: "클린 코드 (Clean Code)",
    author: "로버트 C. 마틴",
    publisher: "인사이트",
    cover: "https://image.aladin.co.kr/product/3408/36/cover200/8966260950_2.jpg",
    description: "애자일 소프트웨어 혁명가를 위한 가독성 높은 코드 작성 바이블.",
    tags: ["프로그래밍", "개발자", "가독성"]
  },
  {
    id: "b-402",
    category: "IT/컴퓨터",
    title: "프롬프트 엔지니어링 교과서",
    author: "서승완",
    publisher: "길벗",
    cover: "https://image.aladin.co.kr/product/39905/72/cover200/k832130029_1.jpg",
    description: "ChatGPT와 LLM을 내 조수처럼 다루는 AI 프롬프트 설계의 모든 것.",
    tags: ["생성형AI", "ChatGPT", "프롬프트"]
  },
  {
    id: "b-403",
    category: "IT/컴퓨터",
    title: "슈퍼인텔리전스 (Superintelligence)",
    author: "닉 보스트롬",
    publisher: "까치",
    cover: "https://image.aladin.co.kr/product/10044/18/cover200/8972916323_1.jpg",
    description: "초지능 AI의 도래와 인류의 통제권, 제어 문제에 대한 철학적·기술적 경고.",
    tags: ["AI윤리", "초지능", "미래학"]
  },
  {
    id: "b-404",
    category: "IT/컴퓨터",
    title: "객체지향의 사실과 오해",
    author: "조영호",
    publisher: "위키북스",
    cover: "https://image.aladin.co.kr/product/6055/2/cover200/8998139766_1.jpg",
    description: "역할, 책임, 협력 관점에서 바라보는 객체지향 설계의 진정한 본질.",
    tags: ["소프트웨어설계", "객체지향", "아키텍처"]
  },
  {
    id: "b-405",
    category: "IT/컴퓨터",
    title: "해커와 화가 (Hackers & Painters)",
    author: "폴 그레이엄",
    publisher: "한빛미디어",
    cover: "https://image.aladin.co.kr/product/3447/15/cover200/8968480710_1.jpg",
    description: "Y Combinator 창업자 폴 그레이엄이 전하는 기술, 창업, 아이디어의 예술.",
    tags: ["해커", "스타트업", "통찰"]
  },
  {
    id: "b-406",
    category: "IT/컴퓨터",
    title: "혼자 공부하는 머신러닝+딥러닝",
    author: "박해선",
    publisher: "한빛미디어",
    cover: "https://image.aladin.co.kr/product/36114/6/cover200/k862038063_2.jpg",
    description: "비전공자도 이해할 수 있는 머신러닝과 딥러닝의 직관적 입문서.",
    tags: ["머신러닝", "딥러닝", "입문서"]
  },
  {
    id: "b-407",
    category: "IT/컴퓨터",
    title: "밑바닥부터 시작하는 딥러닝",
    author: "사이토 고키",
    publisher: "한빛미디어",
    cover: "https://image.aladin.co.kr/product/35639/92/cover200/k222036504_1.jpg",
    description: "라이브러리 없이 직접 구현하며 배우는 딥러닝의 핵심 원리.",
    tags: ["딥러닝", "파이썬", "구현"]
  },
  {
    id: "b-408",
    category: "IT/컴퓨터",
    title: "도메인 주도 설계 (DDD)",
    author: "에릭 에반스",
    publisher: "위키북스",
    cover: "https://image.aladin.co.kr/product/1217/42/cover200/899293985x_1.jpg",
    description: "소프트웨어의 복잡성을 다루는 핵심 아키텍처 방법론의 집대성.",
    tags: ["DDD", "아키텍처", "대규모시스템"]
  },

  // 5. 소설/시/희곡 (9 books)
  {
    id: "b-501",
    category: "소설/시/희곡",
    title: "소년이 온다",
    author: "한강",
    publisher: "창비",
    cover: "https://image.aladin.co.kr/product/4086/97/cover200/8936434128_2.jpg",
    description: "노벨문학상 수상 작가 한강이 5·18 광주를 섬세하고 서늘한 문체로 보듬은 수작.",
    tags: ["노벨문학상", "한강", "한국소설"]
  },
  {
    id: "b-502",
    category: "소설/시/희곡",
    title: "불편한 편의점",
    author: "김호연",
    publisher: "나무옆의의자",
    cover: "https://image.aladin.co.kr/product/29045/74/cover200/k192836746_2.jpg",
    description: "청파동 골목 편의점에서 펼쳐지는 이웃들의 가슴 따뜻한 위로와 연대의 서사.",
    tags: ["힐링소설", "베스트셀러", "따뜻함"]
  },
  {
    id: "b-503",
    category: "소설/시/희곡",
    title: "구의 증명",
    author: "최진영",
    publisher: "은행나무",
    cover: "https://image.aladin.co.kr/product/31561/46/cover200/k782832854_1.jpg",
    description: "상실과 슬픔 너머 사랑의 처절한 깊이를 처연하게 담아낸 소설.",
    tags: ["감성소설", "사랑", "애도"]
  },
  {
    id: "b-504",
    category: "소설/시/희곡",
    title: "작별하지 않는다",
    author: "한강",
    publisher: "문학동네",
    cover: "https://image.aladin.co.kr/product/27877/5/cover200/8954682154_3.jpg",
    description: "제주 4·3의 기억과 지극한 사랑을 눈보라 속에 펼쳐낸 지극한 지상 문학.",
    tags: ["한강", "문학동네", "감동"]
  },
  {
    id: "b-505",
    category: "소설/시/희곡",
    title: "달러구트 꿈 백화점",
    author: "이미예",
    publisher: "팩토리나인",
    cover: "https://image.aladin.co.kr/product/39638/93/cover200/k382130171_1.jpg",
    description: "잠들어야만 입장할 수 있는 독특한 꿈 백화점의 환상적이고 포근한 팬터지.",
    tags: ["판타지", "꿈", "힐링"]
  },
  {
    id: "b-506",
    category: "소설/시/희곡",
    title: "아몬드",
    author: "손원평",
    publisher: "창비",
    cover: "https://image.aladin.co.kr/product/31893/32/cover200/k212833749_2.jpg",
    description: "감정을 느끼지 못하는 Boy와 괴물이라 불린 Boy의 뜨거운 성장 서사.",
    tags: ["성장소설", "공감", "창비"]
  },
  {
    id: "b-507",
    category: "소설/시/희곡",
    title: "지구 끝의 온실",
    author: "김초엽",
    publisher: "자이언트북스",
    cover: "https://image.aladin.co.kr/product/27692/63/cover200/s222930473_1.jpg",
    description: "멸망 이후의 세계, 마스커블 식물 붉은이슬이 지배한 지구를 구한 식물학 이야기.",
    tags: ["SF소설", "김초엽", "온실"]
  },
  {
    id: "b-508",
    category: "소설/시/희곡",
    title: "모순",
    author: "양귀자",
    publisher: "쓰다",
    cover: "https://image.aladin.co.kr/product/2584/37/cover200/8998441012_3.jpg",
    description: "삶의 모순을 응시하는 스물다섯 안진진의 치열한 선택과 삶의 미학.",
    tags: ["한국고전소설", "삶의모순", "양귀자"]
  },
  {
    id: "b-509",
    category: "소설/시/희곡",
    title: "채식주의자",
    author: "한강",
    publisher: "창비",
    cover: "https://image.aladin.co.kr/product/29137/2/cover200/8936434594_2.jpg",
    description: "한강의 맨부커상 수상작. 고기를 거부하며 식물이 되려는 한 여자의 처절한 변신.",
    tags: ["노벨문학상", "한강", "맨부커상"]
  },

  // 6. 사회과학 (8 books)
  {
    id: "b-601",
    category: "사회과학",
    title: "공간이 만든 공간",
    author: "유현준",
    publisher: "을유문화사",
    cover: "https://image.aladin.co.kr/product/23776/63/cover200/8932474273_3.jpg",
    description: "건축과 도시가 인류의 역사, 문화, 심리에 미친 기묘하고 흥미로운 연결고리.",
    tags: ["건축", "인류학", "도시"]
  },
  {
    id: "b-602",
    category: "사회과학",
    title: "공정하다는 착각",
    author: "마이클 샌델",
    publisher: "와이즈베리",
    cover: "https://image.aladin.co.kr/product/25470/6/cover200/k092633826_3.jpg",
    description: "능력주의가 어떻게 승자에게 오만을, 패자에게 모욕감을 주며 사회를 분열시키는가.",
    tags: ["능력주의", "사회비판", "공정"]
  },
  {
    id: "b-603",
    category: "사회과학",
    title: "침묵의 봄 (Silent Spring)",
    author: "레이첼 카슨",
    publisher: "에코리브르",
    cover: "https://image.aladin.co.kr/product/33853/72/cover200/8962632721_1.jpg",
    description: "환경 운동의 출발점이 된 화학 물질과 생태계 파괴에 관한 결정적 보고서.",
    tags: ["환경", "생태학", "고전"]
  },
  {
    id: "b-604",
    category: "사회과학",
    title: "피로사회",
    author: "한병철",
    publisher: "문학과지성사",
    cover: "https://image.aladin.co.kr/product/1571/20/cover200/8932022887_3.jpg",
    description: "규율 사회를 넘어 '할 수 있다'는 과잉 긍정이 초래한 현대인들의 영혼적 피로.",
    tags: ["철학적사회학", "현대사회", "피로"]
  },
  {
    id: "b-605",
    category: "사회과학",
    title: "국가는 왜 실패하는가",
    author: "대론 아세모글루",
    publisher: "시공사",
    cover: "https://image.aladin.co.kr/product/1992/2/cover200/8952766989_2.jpg",
    description: "권력과 제도, 포용적 기구가 국가의 부와 가난을 가르는 근본 원인이다.",
    tags: ["정치경제", "제도", "국가론"]
  },
  {
    id: "b-606",
    category: "사회과학",
    title: "소유냐 존재냐",
    author: "에리히 프롬",
    publisher: "까치",
    cover: "https://image.aladin.co.kr/product/23365/34/cover200/8972917036_2.jpg",
    description: "물질 소유 양식에서 벗어나 실존적 존재 양식으로 전환하는 사회적 길 제시.",
    tags: ["실존철학", "에리히프롬", "사회학"]
  },
  {
    id: "b-607",
    category: "사회과학",
    title: "팩트풀니스 (Factfulness)",
    author: "한스 로슬링",
    publisher: "김영사",
    cover: "https://image.aladin.co.kr/product/34538/43/cover200/8934933879_1.jpg",
    description: "10가지 인간 본능이 만드는 세계에 대한 왜곡된 시선을 데이터로 바로잡는다.",
    tags: ["데이터", "글로벌", "팩트체크"]
  },
  {
    id: "b-608",
    category: "사회과학",
    title: "21세기 자본",
    author: "토마 피케티",
    publisher: "글항아리",
    cover: "https://image.aladin.co.kr/product/4482/44/cover200/8967351275_2.jpg",
    description: "300년에 걸친 자본 수익률과 불평등의 수치적 증명 및 사회 정책 제언.",
    tags: ["불평등", "피케티", "자본주의"]
  }
];
