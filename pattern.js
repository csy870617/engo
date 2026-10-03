// pattern.js
// 패턴 90개 · 쓰는 상황별 10개 카테고리 (category 필드: 패턴 목록 상황별 보기에 사용)

const patternData = [
  // ===== 1. 주문·쇼핑 =====
  {
    id: "can-i-get",
    title: "Can I get...?",
    category: "주문·쇼핑",
    desc: "카페나 식당에서 주문, 요청할 때 가장 흔한 말. 끝에 please를 붙이면 더 공손해요. 'Can I have ~?'도 같은 뜻이에요.",
    examples: [
      { en: "Can I get the check, please?", kr: "계산서 좀 주시겠어요?" },
      { en: "Can I get an iced latte to go?", kr: "아이스 라떼 테이크아웃으로 주세요." },
      { en: "Can I get this in a larger size?", kr: "이거 더 큰 사이즈로 있을까요?" },
      { en: "Can I get a window seat, please?", kr: "창가 자리로 주실 수 있나요?" },
      { en: "Can I get your number?", kr: "번호 좀 알려줄래요?" }
    ]
  },
  {
    id: "ill-have",
    title: "I'll have...",
    category: "주문·쇼핑",
    desc: "식당, 카페에서 주문할 때 가장 자연스러운 말. 일행과 같은 걸로 할 땐 'I'll have the same.'이라고 하면 돼요.",
    examples: [
      { en: "I'll have the same, please.", kr: "저도 같은 걸로 주세요." },
      { en: "I'll have a large iced americano.", kr: "아이스 아메리카노 큰 걸로 주세요." },
      { en: "I'll have a burger with no onions.", kr: "버거 양파 빼고 주세요." },
      { en: "I'll have the steak, medium rare.", kr: "스테이크 미디엄 레어로 주세요." },
      { en: "I'll just have water, thanks.", kr: "저는 그냥 물 주세요." }
    ]
  },
  {
    id: "ill-take",
    title: "I'll take...",
    category: "주문·쇼핑",
    desc: "여러 개 중 골라서 '이걸로 할게요'라고 결정할 때. 'I'll take it.'은 가게에서 '이거 살게요'라는 뜻이에요.",
    examples: [
      { en: "I'll take it. Can I pay by card?", kr: "이거 살게요. 카드 되나요?" },
      { en: "I'll take two of these croissants, please.", kr: "이 크루아상 두 개 주세요." },
      { en: "I'll take the room with the ocean view.", kr: "바다 보이는 방으로 할게요." },
      { en: "I'll take the seven o'clock train.", kr: "7시 기차로 할게요." },
      { en: "I'll take the last slice if no one wants it.", kr: "아무도 안 먹으면 마지막 조각 내가 먹을게." }
    ]
  },
  {
    id: "im-looking-for",
    title: "I'm looking for...",
    category: "주문·쇼핑",
    desc: "가게나 길에서 뭔가 찾을 때. 점원이 'Can I help you?' 하면 이렇게 답하고, 구경만 할 땐 'Just looking.'",
    examples: [
      { en: "Excuse me, I'm looking for the restroom.", kr: "실례지만, 화장실 찾고 있는데요." },
      { en: "I'm looking for a gift for my mom.", kr: "엄마한테 드릴 선물 찾고 있어요." },
      { en: "I'm looking for my phone. Have you seen it?", kr: "나 폰 찾고 있는데, 혹시 봤어?" },
      { en: "Hi, I'm looking for Gate 23.", kr: "안녕하세요, 23번 게이트 찾고 있는데요." },
      { en: "I'm looking for a new job closer to home.", kr: "집에서 더 가까운 직장을 알아보고 있어요." }
    ]
  },
  {
    id: "do-you-have-any",
    title: "Do you have any...?",
    category: "주문·쇼핑",
    desc: "상대에게 '~ 있어요?'라고 물을 때. 장소에 있는지 묻는 'Is there...?'와 달리 상대가 가진 걸 묻고, 셀 수 있는 명사는 복수형으로.",
    examples: [
      { en: "Do you have any vegetarian options?", kr: "채식 메뉴 있어요?" },
      { en: "Do you have any rooms available tonight?", kr: "오늘 밤 빈 방 있어요?" },
      { en: "Do you have any questions before we start?", kr: "시작하기 전에 질문 있으세요?" },
      { en: "Do you have any plans this weekend?", kr: "이번 주말에 무슨 계획 있어?" },
      { en: "Do you have any of these in a smaller size?", kr: "이거 더 작은 사이즈 있어요?" }
    ]
  },
  {
    id: "is-there",
    title: "Is there...?",
    category: "주문·쇼핑",
    desc: "어떤 것이 있는지 물을 때. 여러 개를 물을 땐 Are there ~?, 장소를 찾을 땐 뒤에 near here를 붙여요.",
    examples: [
      { en: "Is there a pharmacy near here?", kr: "이 근처에 약국 있어요?" },
      { en: "Is there a vegetarian option on the menu?", kr: "메뉴에 채식 메뉴 있어요?" },
      { en: "Is there anything I can do to help?", kr: "내가 도울 수 있는 거 있어?" },
      { en: "Is there free Wi-Fi in the hotel?", kr: "호텔에 무료 와이파이 있어요?" },
      { en: "Is there a problem with my order?", kr: "제 주문에 무슨 문제 있나요?" }
    ]
  },
  {
    id: "id-like-to",
    title: "I'd like to...",
    category: "주문·쇼핑",
    desc: "'I want to'의 공손한 버전. 예약, 반품, 변경 등 가게나 회사에서 원하는 것을 정중히 말할 때 기본 표현이에요.",
    examples: [
      { en: "I'd like to make a reservation for two.", kr: "두 명 예약하고 싶은데요." },
      { en: "I'd like to return this, please.", kr: "이거 반품하고 싶어요." },
      { en: "I'd like to change my seat if possible.", kr: "가능하면 자리를 바꾸고 싶어요." },
      { en: "I'd like to schedule a meeting for next Tuesday.", kr: "다음 주 화요일로 회의를 잡고 싶습니다." },
      { en: "I'd like to open a bank account.", kr: "은행 계좌를 하나 만들고 싶어요." }
    ]
  },

  // ===== 2. 부탁·허락 =====
  {
    id: "could-you",
    title: "Could you...?",
    category: "부탁·허락",
    desc: "정중하게 부탁할 때 가장 무난한 표현. 'Can you'보다 공손해서 낯선 사람이나 직장에서 좋고, please를 붙이면 더 부드러워요.",
    examples: [
      { en: "Could you speak a little more slowly?", kr: "조금만 더 천천히 말해 주시겠어요?" },
      { en: "Could you take a picture of us?", kr: "저희 사진 좀 찍어 주시겠어요?" },
      { en: "Could you turn the music down a little?", kr: "음악 소리 좀 줄여 주시겠어요?" },
      { en: "Could you call a taxi for me, please?", kr: "택시 좀 불러 주시겠어요?" },
      { en: "Could you send me the file by tomorrow?", kr: "내일까지 파일 좀 보내 주시겠어요?" }
    ]
  },
  {
    id: "can-you-help-me",
    title: "Can you help me...?",
    category: "부탁·허락",
    desc: "구체적인 도움을 청할 때. 'help me + 동사원형' 또는 'help me with + 명사'. 'Could you'면 더 정중해요.",
    examples: [
      { en: "Can you help me carry these bags?", kr: "이 가방들 드는 것 좀 도와줄래?" },
      { en: "Can you help me with this? It's stuck.", kr: "이것 좀 도와줄래? 꽉 껴서 안 빠져." },
      { en: "Can you help me find this address?", kr: "이 주소 찾는 것 좀 도와주실 수 있어요?" },
      { en: "Can you help me set up the projector?", kr: "프로젝터 설치하는 것 좀 도와줄래요?" },
      { en: "Can you help me pick a gift for my wife?", kr: "아내 선물 고르는 것 좀 도와주실래요?" }
    ]
  },
  {
    id: "can-you-tell-me",
    title: "Can you tell me...?",
    category: "부탁·허락",
    desc: "정보나 길을 물을 때. 뒤에는 'where the station is'처럼 평서문 어순! 'where is the station'은 흔한 실수.",
    examples: [
      { en: "Can you tell me how much this is?", kr: "이거 얼마인지 알려 주시겠어요?" },
      { en: "Can you tell me the Wi-Fi password?", kr: "와이파이 비밀번호 좀 알려 주실래요?" },
      { en: "Can you tell me where the station is?", kr: "역이 어디 있는지 알려 주시겠어요?" },
      { en: "Can you tell me what time the museum closes?", kr: "박물관 몇 시에 닫는지 알려 주실 수 있나요?" },
      { en: "Can you tell me what happened last night?", kr: "어젯밤에 무슨 일 있었는지 말해 줄래?" }
    ]
  },
  {
    id: "do-you-happen-to-know",
    title: "Do you happen to know...?",
    category: "부탁·허락",
    desc: "'혹시 ~ 아세요?'라고 부담 없이 물을 때. 'Can you tell me...?'보다 조심스럽고, 상대가 몰라도 괜찮다는 뉘앙스예요.",
    examples: [
      { en: "Do you happen to know where the restroom is?", kr: "혹시 화장실이 어디 있는지 아세요?" },
      { en: "Do you happen to know if this bus goes downtown?", kr: "혹시 이 버스 시내 가는지 아세요?" },
      { en: "Do you happen to know her phone number?", kr: "혹시 걔 전화번호 알아?" },
      { en: "Do you happen to know what time the pharmacy closes?", kr: "혹시 약국 몇 시에 닫는지 아세요?" },
      { en: "Do you happen to know a good lunch place around here?", kr: "혹시 이 근처에 점심 먹기 좋은 데 아세요?" }
    ]
  },
  {
    id: "would-you-mind",
    title: "Would you mind ~ing?",
    category: "부탁·허락",
    desc: "'~해 주시겠어요?'라고 정중히 부탁할 때. 내가 해도 되냐는 'Do you mind if...?'와 달리 상대에게 부탁해요. 수락은 'Not at all.'",
    examples: [
      { en: "Would you mind closing the window?", kr: "창문 좀 닫아 주시겠어요?" },
      { en: "Would you mind taking a picture of us?", kr: "저희 사진 좀 찍어 주시겠어요?" },
      { en: "Would you mind waiting a few minutes?", kr: "몇 분만 기다려 주시겠어요?" },
      { en: "Would you mind speaking a little slower?", kr: "조금만 천천히 말씀해 주시겠어요?" },
      { en: "Would you mind switching seats with me?", kr: "저랑 자리 좀 바꿔 주시겠어요?" }
    ]
  },
  {
    id: "do-you-mind-if",
    title: "Do you mind if...?",
    category: "부탁·허락",
    desc: "'~해도 될까요?'라고 정중히 허락을 구할 때. 괜찮다는 대답은 'No, go ahead.'(아니요, 하세요)라는 점에 주의.",
    examples: [
      { en: "Do you mind if I join you?", kr: "저도 같이 껴도 될까요?" },
      { en: "Do you mind if I sit here?", kr: "여기 앉아도 될까요?" },
      { en: "Do you mind if I open the window?", kr: "창문 좀 열어도 될까요?" },
      { en: "Do you mind if I record the meeting?", kr: "회의 녹음해도 괜찮을까요?" },
      { en: "Do you mind if I take this call?", kr: "이 전화 좀 받아도 될까요?" }
    ]
  },
  {
    id: "is-it-okay-if",
    title: "Is it okay if...?",
    category: "부탁·허락",
    desc: "~해도 되는지 편하게 허락을 구할 때. 'Do you mind if'보다 가벼워요. 괜찮으면 'Sure!'나 'Of course.'로 답해요.",
    examples: [
      { en: "Is it okay if I pay by card?", kr: "카드로 계산해도 될까요?" },
      { en: "Is it okay if I call you back in ten minutes?", kr: "10분 뒤에 다시 전화해도 될까요?" },
      { en: "Is it okay if I bring a friend?", kr: "친구 데려가도 괜찮아?" },
      { en: "Is it okay if I leave my bag here?", kr: "가방 여기 둬도 괜찮을까요?" },
      { en: "Is it okay if I work from home on Friday?", kr: "금요일에 재택근무해도 괜찮을까요?" }
    ]
  },
  {
    id: "is-it-possible-to",
    title: "Is it possible to...?",
    category: "부탁·허락",
    desc: "'~하는 게 가능할까요?'라고 규정이나 사정상 되는지 물을 때. 호텔, 식당, 병원 등에서 요청을 부드럽게 꺼내기 좋아요.",
    examples: [
      { en: "Is it possible to check in early?", kr: "일찍 체크인할 수 있을까요?" },
      { en: "Is it possible to change my reservation to Friday?", kr: "예약을 금요일로 바꿀 수 있을까요?" },
      { en: "Is it possible to get this without onions?", kr: "이거 양파 빼고 주실 수 있을까요?" },
      { en: "Is it possible to see the doctor today?", kr: "오늘 진료받을 수 있을까요?" },
      { en: "Is it possible to get a refund without a receipt?", kr: "영수증 없이 환불 가능할까요?" }
    ]
  },
  {
    id: "i-was-wondering-if",
    title: "I was wondering if...",
    category: "부탁·허락",
    desc: "아주 공손하게 부탁하거나 물을 때. 과거형이지만 지금의 부탁이에요. 상사나 처음 보는 사람에게 말 꺼내기 좋아요.",
    examples: [
      { en: "I was wondering if you're free this Saturday.", kr: "혹시 이번 토요일에 시간 되나 해서요." },
      { en: "I was wondering if you could give me a ride.", kr: "혹시 차 좀 태워 줄 수 있나 해서." },
      { en: "I was wondering if you have this in black.", kr: "혹시 이거 검은색도 있나 해서요." },
      { en: "I was wondering if I could leave early today.", kr: "혹시 오늘 좀 일찍 가도 될까 해서요." },
      { en: "I was wondering if we could move our meeting to Friday.", kr: "혹시 회의를 금요일로 옮길 수 있을까 해서요." }
    ]
  },
  {
    id: "im-calling-to",
    title: "I'm calling to...",
    category: "부탁·허락",
    desc: "전화를 걸어 용건을 먼저 밝힐 때. 'Hi, this is 이름.'으로 자기소개한 뒤 바로 'I'm calling to...'로 이어 말해요.",
    examples: [
      { en: "I'm calling to make a reservation for tonight.", kr: "오늘 저녁 예약하려고 전화드렸어요." },
      { en: "I'm calling to confirm my appointment tomorrow.", kr: "내일 진료 예약 확인하려고 전화드렸어요." },
      { en: "I'm calling to ask about the apartment for rent.", kr: "세입자 구하는 아파트 문의하려고 전화드렸어요." },
      { en: "I'm just calling to see how you're doing.", kr: "그냥 잘 지내나 해서 전화했어." },
      { en: "I'm calling to cancel my online order.", kr: "온라인 주문 취소하려고 전화드렸어요." }
    ]
  },
  {
    id: "im-here-to",
    title: "I'm here to...",
    category: "부탁·허락",
    desc: "호텔, 병원, 가게에 와서 용건을 밝힐 때. 명사가 오면 'I'm here for my appointment.'처럼 for를 써요.",
    examples: [
      { en: "Hi, I'm here to check in.", kr: "안녕하세요, 체크인하러 왔어요." },
      { en: "I'm here to see Dr. Kim.", kr: "김 선생님 진료 보러 왔어요." },
      { en: "I'm here to pick up my order.", kr: "주문한 거 찾으러 왔어요." },
      { en: "I'm here to meet a friend. She's running late.", kr: "친구 만나러 왔는데, 좀 늦는대요." },
      { en: "I'm here to interview for the marketing position.", kr: "마케팅 직무 면접 보러 왔습니다." }
    ]
  },

  // ===== 3. 제안·약속 =====
  {
    id: "lets",
    title: "Let's...",
    category: "제안·약속",
    desc: "'~하자'라고 같이 하자고 제안하는 가장 기본 표현. 'Why don't we...?'보다 직접적이고, 하지 말자는 'Let's not...'이에요.",
    examples: [
      { en: "Let's meet at the station at seven.", kr: "7시에 역에서 만나자." },
      { en: "Let's take a short break.", kr: "잠깐 쉬었다 하죠." },
      { en: "Let's just split the bill.", kr: "그냥 반반 내자." },
      { en: "Let's take a taxi, it's getting late.", kr: "늦었으니까 택시 타자." },
      { en: "Let's not talk about work tonight.", kr: "오늘 밤엔 일 얘기 하지 말자." }
    ]
  },
  {
    id: "why-dont-we",
    title: "Why don't we...?",
    category: "제안·약속",
    desc: "'우리 ~할까요?'라고 부드럽게 제안할 때. 이유를 묻는 말이 아니에요. 좋다는 대답은 Sounds good!",
    examples: [
      { en: "Why don't we grab lunch together?", kr: "같이 점심 먹을까요?" },
      { en: "Why don't we take a short break?", kr: "잠깐 쉬었다 할까요?" },
      { en: "Why don't we meet at the station?", kr: "역에서 만나는 게 어때?" },
      { en: "Why don't we split the bill?", kr: "계산은 나눠서 할까?" },
      { en: "Why don't we talk about this tomorrow?", kr: "이건 내일 얘기하는 게 어때요?" }
    ]
  },
  {
    id: "how-about",
    title: "How about...?",
    category: "제안·약속",
    desc: "가볍게 제안할 때. 뒤에 명사, -ing, 'we + 동사'가 와요. 'How about you?'는 '너는 어때?'라고 되물을 때 써요.",
    examples: [
      { en: "I'm doing great. How about you?", kr: "잘 지내요. 그쪽은요?" },
      { en: "How about this one in blue?", kr: "이거 파란색은 어때요?" },
      { en: "How about Friday night instead?", kr: "대신 금요일 밤은 어때?" },
      { en: "How about we just order pizza?", kr: "그냥 피자 시켜 먹는 거 어때?" },
      { en: "How about meeting in front of the station at seven?", kr: "7시에 역 앞에서 만나는 거 어때?" }
    ]
  },
  {
    id: "do-you-want-to",
    title: "Do you want to...?",
    category: "제안·약속",
    desc: "친구나 동료에게 '~할래?' 하고 가볍게 제안할 때. 구어로는 'Wanna ~?', 더 정중하게는 'Would you like to'.",
    examples: [
      { en: "Do you want to grab lunch?", kr: "점심 같이 먹을래?" },
      { en: "Do you want to watch a movie tonight?", kr: "오늘 밤에 영화 볼래?" },
      { en: "Do you want to split the bill?", kr: "반반 나눠서 낼까?" },
      { en: "Do you want to come over for dinner?", kr: "우리 집에 저녁 먹으러 올래?" },
      { en: "Do you want to take a quick break before the next meeting?", kr: "다음 회의 전에 잠깐 쉴래요?" }
    ]
  },
  {
    id: "would-you-like-to",
    title: "Would you like to...?",
    category: "제안·약속",
    desc: "공손하게 초대하거나 권할 때. 수락은 'I'd love to.', 거절은 'I'd love to, but ~.'처럼 부드럽게 해요.",
    examples: [
      { en: "Would you like to join us?", kr: "저희랑 같이 하실래요?" },
      { en: "Would you like to try this?", kr: "이거 한번 드셔 보실래요?" },
      { en: "Would you like to leave a message?", kr: "메시지 남기시겠어요?" },
      { en: "Would you like to sit by the window?", kr: "창가 쪽에 앉으시겠어요?" },
      { en: "Would you like to grab dinner after work on Friday?", kr: "금요일 퇴근하고 저녁 같이 드실래요?" }
    ]
  },
  {
    id: "are-you-free",
    title: "Are you free...?",
    category: "제안·약속",
    desc: "약속이나 부탁 전에 '~에 시간 돼?'라고 상대 일정을 먼저 물을 때. 'Are you free for lunch?'처럼 for + 명사도 자주 써요.",
    examples: [
      { en: "Are you free this Saturday?", kr: "이번 토요일에 시간 돼?" },
      { en: "Are you free for lunch tomorrow?", kr: "내일 점심 시간 돼?" },
      { en: "Are you free to talk for a minute?", kr: "잠깐 얘기할 시간 있으세요?" },
      { en: "Are you free after work today?", kr: "오늘 퇴근하고 시간 돼?" },
      { en: "Are you free next Tuesday for a quick call?", kr: "다음 주 화요일에 잠깐 통화 가능하세요?" }
    ]
  },
  {
    id: "what-if",
    title: "What if...?",
    category: "제안·약속",
    desc: "'~하면 어떡하지?'라는 걱정과 '~하면 어때?'라는 제안 둘 다에 써요. 상황과 말투로 구분해요.",
    examples: [
      { en: "What if we leave a little earlier?", kr: "좀 더 일찍 출발하면 어때?" },
      { en: "What if it rains on the day?", kr: "그날 비 오면 어떡해?" },
      { en: "What if we get takeout instead?", kr: "대신 포장해 오는 건 어때?" },
      { en: "What if we miss the last train?", kr: "막차 놓치면 어떡하지?" },
      { en: "What if the client doesn't like our idea?", kr: "고객이 우리 아이디어를 마음에 안 들어 하면 어쩌죠?" }
    ]
  },
  {
    id: "should-i",
    title: "Should I...?",
    category: "제안·약속",
    desc: "'내가 ~하는 게 좋을까?'라고 조언을 구할 때. 'Yes, you should.' 또는 'I wouldn't.'(나라면 안 해)로 답해요.",
    examples: [
      { en: "Should I text him first?", kr: "내가 먼저 문자 보낼까?" },
      { en: "Should I bring anything to the party?", kr: "파티에 뭐 가져갈까?" },
      { en: "Should I book a table in advance?", kr: "미리 자리 예약하는 게 좋을까요?" },
      { en: "Should I wear a suit to the interview?", kr: "면접에 정장 입고 가는 게 좋을까요?" },
      { en: "Should I take the bus or the subway from here?", kr: "여기서 버스 타는 게 나아요, 지하철 타는 게 나아요?" }
    ]
  },

  // ===== 4. 계획·할 일 =====
  {
    id: "im-going-to",
    title: "I'm going to...",
    category: "계획·할 일",
    desc: "이미 마음먹었거나 정해진 계획을 말할 때. 실제 대화에서는 'I'm gonna'로 줄여 발음하는 경우가 많아요.",
    examples: [
      { en: "I'm going to grab a coffee. Want one?", kr: "커피 사러 갈 건데, 너도 마실래?" },
      { en: "I'm going to visit my parents this weekend.", kr: "이번 주말에 부모님 뵈러 갈 거예요." },
      { en: "I'm going to rent a car when we get there.", kr: "거기 도착하면 차 빌릴 거야." },
      { en: "I'm going to be a little late tonight.", kr: "오늘 좀 늦을 거야." },
      { en: "I'm going to start a new job next month.", kr: "다음 달에 새 직장 다니기 시작해요." }
    ]
  },
  {
    id: "im-thinking-about",
    title: "I'm thinking about...",
    category: "계획·할 일",
    desc: "아직 확정 안 된 계획이나 고민을 말할 때. 뒤에는 명사나 -ing가 와요. 'I'm thinking of ~'도 거의 같은 뜻이에요.",
    examples: [
      { en: "I'm thinking about changing jobs.", kr: "이직할까 고민 중이에요." },
      { en: "I'm thinking about getting a dog.", kr: "강아지 키울까 생각 중이야." },
      { en: "I'm thinking about the salmon. What about you?", kr: "난 연어 시킬까 하는데, 넌?" },
      { en: "I'm thinking about cutting my hair short.", kr: "머리 짧게 자를까 생각 중이야." },
      { en: "I'm thinking about going to Jeju for the holidays.", kr: "연휴에 제주도 갈까 생각 중이에요." }
    ]
  },
  {
    id: "im-about-to",
    title: "I'm about to...",
    category: "계획·할 일",
    desc: "'막 ~하려던 참이야'. 'I was about to call you!'처럼 과거형으로 쓰면 '안 그래도 ~하려던 참이었어'가 돼요.",
    examples: [
      { en: "I'm about to board the plane. Talk later!", kr: "나 이제 비행기 타. 이따 얘기해!" },
      { en: "I'm about to order food. Want anything?", kr: "음식 시키려던 참인데, 너도 뭐 먹을래?" },
      { en: "I'm about to go into a meeting. Can I call you back?", kr: "곧 회의 들어가야 해서요. 다시 전화드려도 될까요?" },
      { en: "Oh, I was about to call you!", kr: "어, 안 그래도 너한테 전화하려던 참이었어!" },
      { en: "My phone is about to die.", kr: "폰 배터리 곧 꺼질 것 같아." }
    ]
  },
  {
    id: "im-on-my-way",
    title: "I'm on my way...",
    category: "계획·할 일",
    desc: "'지금 가는 중이야'라고 이미 출발했음을 알릴 때. 계획을 말하는 'I'm going to...'와 달리 지금 이동 중인 상태예요.",
    examples: [
      { en: "I'm on my way to the office now.", kr: "지금 사무실 가는 중이에요." },
      { en: "I'm on my way home. Need anything?", kr: "집에 가는 중이야. 뭐 필요한 거 있어?" },
      { en: "Sorry, I'm on my way, just stuck in traffic.", kr: "미안, 가는 중인데 차가 막혀." },
      { en: "I'm on my way to the airport.", kr: "공항 가는 중이에요." },
      { en: "I'm on my way to pick up the kids.", kr: "애들 데리러 가는 중이야." }
    ]
  },
  {
    id: "i-need-to",
    title: "I need to...",
    category: "계획·할 일",
    desc: "꼭 해야 하는 일을 말할 때. 스스로 필요해서 하는 느낌이에요. 자리를 떠야 할 땐 'Sorry, I need to go.'라고 해요.",
    examples: [
      { en: "I need to charge my phone.", kr: "나 폰 충전해야 돼." },
      { en: "I need to get some sleep.", kr: "잠 좀 자야겠어." },
      { en: "I need to exchange some money at the airport.", kr: "공항에서 환전 좀 해야 해요." },
      { en: "Sorry, I need to take this call.", kr: "죄송해요, 이 전화 좀 받아야 해서요." },
      { en: "I need to call my mom back before dinner.", kr: "저녁 먹기 전에 엄마한테 다시 전화해야 해." }
    ]
  },
  {
    id: "im-trying-to",
    title: "I'm trying to...",
    category: "계획·할 일",
    desc: "'~하려고 애쓰는 중'일 때. 습관을 바꾸는 중이거나, 지금 뭔가 하는 중이니 방해하지 말라고 할 때도 써요.",
    examples: [
      { en: "I'm trying to cut down on coffee.", kr: "커피 좀 줄이려고 하는 중이에요." },
      { en: "Shh, I'm trying to concentrate here.", kr: "쉿, 나 지금 집중하려는 중이야." },
      { en: "I'm trying to find a cheaper flight to Tokyo.", kr: "도쿄 가는 더 싼 항공편 찾아보는 중이에요." },
      { en: "I'm trying to reach the manager. Is she in?", kr: "매니저님과 연락하려고 하는데요. 자리에 계세요?" },
      { en: "I'm trying to put the baby to sleep.", kr: "애기 재우려는 중이야." }
    ]
  },
  {
    id: "its-time-to",
    title: "It's time to...",
    category: "계획·할 일",
    desc: "'이제 ~할 시간이야, ~할 때가 됐어'라고 말할 때. 명사가 올 땐 It's time for lunch.처럼 for를 써요.",
    examples: [
      { en: "It's time to go home.", kr: "이제 집에 갈 시간이야." },
      { en: "It's time to wrap up the meeting.", kr: "이제 회의 마무리할 시간이에요." },
      { en: "It's time to get a new phone.", kr: "이제 새 폰 살 때가 됐어." },
      { en: "It's time to wake up, kids.", kr: "얘들아, 일어날 시간이야." },
      { en: "It's time to start looking for a new job.", kr: "이제 새 직장을 알아볼 때가 됐어." }
    ]
  },
  {
    id: "i-cant-wait-to",
    title: "I can't wait to...",
    category: "계획·할 일",
    desc: "'빨리 ~하고 싶어!'라고 설레는 기대감을 말할 때. 못 기다린다는 불평이 아니에요. 명사가 올 땐 'I can't wait for...'.",
    examples: [
      { en: "I can't wait to see you this weekend!", kr: "이번 주말에 빨리 너 보고 싶어!" },
      { en: "I can't wait to try that new ramen place.", kr: "그 새로 생긴 라멘집 빨리 가 보고 싶어." },
      { en: "I can't wait to get home and sleep.", kr: "빨리 집에 가서 자고 싶다." },
      { en: "I can't wait to start my new job.", kr: "새 직장 빨리 다니고 싶어." },
      { en: "I can't wait to hit the beach in Bali.", kr: "빨리 발리 해변에 가고 싶어." }
    ]
  },
  {
    id: "im-supposed-to",
    title: "I'm supposed to...",
    category: "계획·할 일",
    desc: "약속, 규칙, 일정상 '원래 ~하기로 돼 있다'. 뒤에 but을 붙이면 '~해야 하는데 (못 하고 있다)'는 뉘앙스가 돼요.",
    examples: [
      { en: "I'm supposed to meet him at three.", kr: "3시에 그 사람 만나기로 했어요." },
      { en: "I'm supposed to pick up my kids at five.", kr: "5시에 애들 데리러 가기로 돼 있어요." },
      { en: "I'm supposed to check out by noon, right?", kr: "정오까지 체크아웃하면 되는 거죠?" },
      { en: "Where am I supposed to put this?", kr: "이거 어디에 두면 돼요?" },
      { en: "I'm supposed to be on a diet, but this looks amazing.", kr: "다이어트 해야 하는데, 이거 너무 맛있어 보여." }
    ]
  },
  {
    id: "im-running-out-of",
    title: "I'm running out of...",
    category: "계획·할 일",
    desc: "'~가 다 떨어져 가'라고 시간, 돈, 물건이 바닥나고 있을 때. 이미 다 떨어졌으면 'I ran out of...'라고 해요.",
    examples: [
      { en: "I'm running out of battery. Can I charge my phone?", kr: "배터리가 다 돼 가요. 폰 좀 충전해도 될까요?" },
      { en: "We're running out of milk, can you grab some?", kr: "우유 다 떨어져 가는데, 좀 사 올래?" },
      { en: "I'm running out of money this month.", kr: "이번 달 돈이 다 떨어져 가." },
      { en: "We're running out of time, so let's wrap up.", kr: "시간이 얼마 안 남았으니 마무리하죠." },
      { en: "I'm running out of ideas for dinner.", kr: "저녁 뭐 할지 이제 아이디어가 바닥나 가." }
    ]
  },

  // ===== 5. 취향·의견 =====
  {
    id: "i-prefer",
    title: "I prefer...",
    category: "취향·의견",
    desc: "평소 취향을 말할 때. 비교할 땐 'A to B'(B보다 A)처럼 than이 아니라 to를 쓴다는 점이 헷갈리기 쉬워요.",
    examples: [
      { en: "I prefer the aisle seat, please.", kr: "통로 쪽 자리로 주세요." },
      { en: "I prefer tea to coffee.", kr: "저는 커피보다 차가 더 좋아요." },
      { en: "I prefer texting to calling.", kr: "난 전화보다 문자가 더 편해." },
      { en: "I prefer working in the morning.", kr: "저는 오전에 일하는 게 더 좋아요." },
      { en: "Which do you prefer, cats or dogs?", kr: "고양이랑 강아지 중에 뭐가 더 좋아?" }
    ]
  },
  {
    id: "id-rather",
    title: "I'd rather...",
    category: "취향·의견",
    desc: "'차라리 ~할래'라며 더 나은 쪽을 고를 때. 'I'd rather not.'만으로도 '별로 내키지 않아요'라는 부드러운 거절이 돼요.",
    examples: [
      { en: "I'd rather stay in tonight. I'm beat.", kr: "오늘은 그냥 집에 있을래. 너무 피곤해." },
      { en: "I'd rather not talk about it.", kr: "그 얘기는 안 하고 싶어." },
      { en: "I'd rather walk. It's a nice day.", kr: "걸어갈래. 날씨 좋잖아." },
      { en: "I'd rather sit inside. It's too cold out here.", kr: "안에 앉을래요. 밖은 너무 추워요." },
      { en: "I'd rather take the train than drive in traffic.", kr: "막히는 길 운전하느니 기차 탈래요." }
    ]
  },
  {
    id: "im-not-a-big-fan-of",
    title: "I'm not a big fan of...",
    category: "취향·의견",
    desc: "'~는 별로 안 좋아해요'라고 완곡하게 말할 때. 'I don't like...'나 'I can't stand...'보다 부드러운 표현이에요.",
    examples: [
      { en: "I'm not a big fan of spicy food.", kr: "저 매운 음식 별로 안 좋아해요." },
      { en: "I'm not a big fan of horror movies.", kr: "나 공포 영화 별로 안 좋아해." },
      { en: "Honestly, I'm not a big fan of crowded places.", kr: "솔직히 사람 많은 데는 별로야." },
      { en: "I'm not a big fan of working on weekends.", kr: "주말 근무는 별로 안 좋아해요." },
      { en: "I'm not a big fan of coffee, so I'll have tea.", kr: "커피는 별로라서 차로 할게요." }
    ]
  },
  {
    id: "i-cant-stand",
    title: "I can't stand...",
    category: "취향·의견",
    desc: "'~는 정말 못 참겠어, 질색이야'라고 강하게 싫어할 때. 'I'm not a big fan of...'보다 훨씬 세서 사람에게 쓸 땐 조심하세요.",
    examples: [
      { en: "I can't stand the heat in summer.", kr: "여름 더위는 정말 못 참겠어." },
      { en: "I can't stand waiting in long lines.", kr: "길게 줄 서서 기다리는 거 정말 싫어." },
      { en: "I can't stand people who talk during movies.", kr: "영화 볼 때 떠드는 사람들 진짜 싫어." },
      { en: "I can't stand the noise from upstairs.", kr: "윗집 소음 정말 못 참겠어." },
      { en: "I can't stand it when the Wi-Fi keeps cutting out.", kr: "와이파이 계속 끊기면 진짜 짜증 나." }
    ]
  },
  {
    id: "i-feel-like",
    title: "I feel like...",
    category: "취향·의견",
    desc: "'feel like + 명사/-ing'는 '~하고 싶다, 당긴다'. 'feel like + 문장'이면 '~인 것 같아'라는 느낌을 말해요.",
    examples: [
      { en: "I feel like eating something sweet.", kr: "뭔가 달달한 게 당겨." },
      { en: "I don't really feel like going out tonight.", kr: "오늘 밤엔 별로 나가고 싶지 않아." },
      { en: "I feel like I've seen her somewhere.", kr: "저 사람 어디서 본 것 같아." },
      { en: "I feel like I'm coming down with a cold.", kr: "감기 기운이 있는 것 같아요." },
      { en: "I feel like going somewhere warm this winter.", kr: "이번 겨울엔 따뜻한 데 가고 싶어." }
    ]
  },
  {
    id: "what-do-you-think-about",
    title: "What do you think about...?",
    category: "취향·의견",
    desc: "상대의 의견을 물을 때. 우리말 '어떻게 생각해?' 때문에 'How do you think'라고 하기 쉬운데, 꼭 What을 써요.",
    examples: [
      { en: "What do you think about this color?", kr: "이 색깔 어때요?" },
      { en: "What do you think about my new haircut?", kr: "나 머리 새로 한 거 어때?" },
      { en: "What do you think about the new manager?", kr: "새로 온 매니저 어떻게 생각해요?" },
      { en: "What do you think about working from home?", kr: "재택근무 어떻게 생각해요?" },
      { en: "What do you think about going to the beach this weekend?", kr: "이번 주말에 바다 가는 거 어때?" }
    ]
  },
  {
    id: "that-sounds",
    title: "That sounds...",
    category: "취향·의견",
    desc: "상대 말에 '~하겠네요'라고 반응할 때. 형용사는 That sounds great.처럼 바로, 명사는 That sounds like ~로 써요.",
    examples: [
      { en: "That sounds really tough. Are you okay?", kr: "정말 힘들었겠다. 괜찮아요?" },
      { en: "That sounds great. Let's do it.", kr: "좋네요. 그렇게 해요." },
      { en: "Hmm, that sounds a little too spicy for me.", kr: "음, 저한텐 좀 너무 매울 것 같아요." },
      { en: "That sounds like a lot of work.", kr: "일이 엄청 많겠네요." },
      { en: "That sounds perfect. I'll see you at six.", kr: "딱 좋네요. 6시에 봐요." }
    ]
  },
  {
    id: "it-depends-on",
    title: "It depends on...",
    category: "취향·의견",
    desc: "'~에 따라 달라요'라고 답할 때. 짧게 It depends.만 해도 되지만, 뒤에 예시를 덧붙이면 더 친절해요.",
    examples: [
      { en: "It depends on the weather.", kr: "날씨에 따라 달라요." },
      { en: "It depends on how much it costs.", kr: "가격이 얼마냐에 따라 달라." },
      { en: "It depends on traffic, but usually about thirty minutes.", kr: "교통 상황에 따라 다른데, 보통 30분 정도요." },
      { en: "It depends on what time you finish work.", kr: "네가 몇 시에 퇴근하느냐에 달렸어." },
      { en: "It depends on the client's budget.", kr: "고객 예산에 따라 달라요." }
    ]
  },
  {
    id: "im-sure",
    title: "I'm sure...",
    category: "취향·의견",
    desc: "'분명 ~일 거야'라고 확신하거나 상대를 안심시킬 때. 확신이 덜하면 I think ~를 써요.",
    examples: [
      { en: "I'm sure you'll do great.", kr: "넌 분명 잘할 거야." },
      { en: "I'm sure she'll understand if you explain.", kr: "설명하면 그녀도 분명 이해해 줄 거예요." },
      { en: "I'm sure we can figure it out.", kr: "우리가 분명 해결할 수 있을 거예요." },
      { en: "I'm sure I left my keys here.", kr: "분명 여기에 열쇠를 뒀는데." },
      { en: "I'm sure it's nothing serious.", kr: "분명 별일 아닐 거야." }
    ]
  },
  {
    id: "im-not-sure-if",
    title: "I'm not sure if...",
    category: "취향·의견",
    desc: "~인지 확신이 없을 때. 'I can't' 대신 'I'm not sure if I can'이라고 하면 거절이 훨씬 부드러워져요.",
    examples: [
      { en: "I'm not sure if I can make it tonight.", kr: "오늘 밤에 갈 수 있을지 잘 모르겠어." },
      { en: "I'm not sure if they take credit cards here.", kr: "여기 카드 받는지 모르겠네요." },
      { en: "I'm not sure if this is the right line.", kr: "여기가 맞는 줄인지 잘 모르겠어요." },
      { en: "I'm not sure if I sent the file to everyone.", kr: "파일을 모두에게 보냈는지 잘 모르겠어요." },
      { en: "I'm not sure if this color suits me.", kr: "이 색이 나한테 어울리는지 모르겠어." }
    ]
  },

  // ===== 6. 추측·설명 =====
  {
    id: "it-looks-like",
    title: "It looks like...",
    category: "추측·설명",
    desc: "눈에 보이는 것을 근거로 '~인 것 같다, ~할 것 같다'고 할 때. 날씨, 표정, 상황을 보고 말할 때 딱 좋아요.",
    examples: [
      { en: "It looks like they're closed.", kr: "문 닫은 것 같아요." },
      { en: "It looks like it's going to rain.", kr: "비 올 것 같아." },
      { en: "It looks like our flight is delayed.", kr: "우리 비행기 지연된 것 같아요." },
      { en: "It looks like we're out of milk.", kr: "우유 다 떨어진 것 같아." },
      { en: "It looks like you've lost some weight.", kr: "너 살 좀 빠진 것 같다." }
    ]
  },
  {
    id: "it-feels-like",
    title: "It feels like...",
    category: "추측·설명",
    desc: "몸이나 마음으로 느껴지는 걸 말할 때. 날씨 체감, 시간 감각에 자주 써요. 'It feels like forever.'(엄청 오래된 듯)",
    examples: [
      { en: "It feels like home here.", kr: "여기 오면 집에 온 것 같아요." },
      { en: "It feels like winter already. It's freezing!", kr: "벌써 겨울 같아. 완전 추워!" },
      { en: "It feels like only yesterday that we met.", kr: "우리 만난 게 엊그제 같은데." },
      { en: "It feels like I've been here before.", kr: "여기 전에 와 본 것 같은 느낌이야." },
      { en: "It feels like this week is never going to end.", kr: "이번 주는 영영 안 끝날 것 같아." }
    ]
  },
  {
    id: "thats-why",
    title: "That's why...",
    category: "추측·설명",
    desc: "앞에 말한 이유를 받아 '그래서 ~한 거야'라고 결론 낼 때. That's because(그건 ~때문이야)와 순서가 반대예요.",
    examples: [
      { en: "That's why I called you.", kr: "그래서 전화한 거예요." },
      { en: "My alarm didn't go off. That's why I'm late.", kr: "알람이 안 울렸어요. 그래서 늦은 거예요." },
      { en: "The coffee's amazing. That's why I always come here.", kr: "커피가 진짜 맛있어. 그래서 내가 맨날 여기 오는 거야." },
      { en: "That's why I always bring an umbrella.", kr: "그래서 저는 항상 우산을 챙겨요." },
      { en: "That's why we need to book the hotel early.", kr: "그래서 호텔을 일찍 예약해야 해요." }
    ]
  },
  {
    id: "thats-because",
    title: "That's because...",
    category: "추측·설명",
    desc: "'그건 ~때문이에요'라고 이유를 설명할 때. 상대가 Why?로 물었을 때 대답으로 딱 좋아요.",
    examples: [
      { en: "That's because I was stuck in a meeting.", kr: "회의에 붙잡혀 있어서 그랬어요." },
      { en: "That's because we started late.", kr: "우리가 늦게 시작해서 그래요." },
      { en: "That's because it's a holiday.", kr: "공휴일이라서 그래요." },
      { en: "That's because the traffic was terrible this morning.", kr: "오늘 아침에 차가 엄청 막혀서 그래요." },
      { en: "That's because I didn't get enough sleep last night.", kr: "어젯밤에 잠을 제대로 못 자서 그래요." }
    ]
  },
  {
    id: "its-not-that",
    title: "It's not that...",
    category: "추측·설명",
    desc: "'~라서 그런 게 아니라'라고 오해를 풀 때. 주로 'It's not that ..., it's just ...'로 진짜 이유를 이어 말해요.",
    examples: [
      { en: "It's not that I don't like it, it's just too expensive.", kr: "마음에 안 드는 게 아니라, 그냥 너무 비싸요." },
      { en: "It's not that I'm angry, I'm just tired.", kr: "화난 게 아니라 그냥 피곤해서 그래." },
      { en: "It's not that the food is bad, it's just a bit salty.", kr: "음식이 맛없는 건 아닌데, 그냥 좀 짜요." },
      { en: "It's not that I don't want to go, I'm just busy.", kr: "가기 싫은 게 아니라 그냥 바빠서 그래." },
      { en: "It's not that I disagree, I just need more time.", kr: "반대하는 게 아니라 시간이 좀 더 필요해서요." }
    ]
  },
  {
    id: "its-hard-to",
    title: "It's hard to...",
    category: "추측·설명",
    desc: "'~하기가 어렵다'고 일반적인 어려움을 말할 때. 나 개인의 어려움은 I have trouble ~ing로도 말해요.",
    examples: [
      { en: "It's hard to explain. You just have to see it.", kr: "설명하기가 어려워. 직접 봐야 알아." },
      { en: "It's hard to say no to dessert.", kr: "디저트는 거절하기 힘들어요." },
      { en: "It's hard to find time to exercise.", kr: "운동할 시간을 내기가 어려워요." },
      { en: "It's hard to get a taxi around here at night.", kr: "밤에 이 근처에서 택시 잡기 힘들어요." },
      { en: "It's hard to focus when the office is this noisy.", kr: "사무실이 이렇게 시끄러우면 집중하기 힘들어요." }
    ]
  },
  {
    id: "its-worth",
    title: "It's worth ~ing",
    category: "추측·설명",
    desc: "'~할 만한 가치가 있어'라고 추천할 때. 뒤에 동사ing가 와요. 반대로 'It's not worth it.'(그럴 가치 없어)도 자주 써요.",
    examples: [
      { en: "It's worth visiting if you're in Seoul.", kr: "서울에 가면 가 볼 만해요." },
      { en: "Trust me, it's worth waiting in line for.", kr: "진짜야, 줄 서서 기다릴 만해." },
      { en: "It's worth paying a little more for quality.", kr: "품질 생각하면 조금 더 낼 만해요." },
      { en: "It's worth watching, especially the last episode.", kr: "볼 만해, 특히 마지막 화." },
      { en: "It's worth asking your manager about it.", kr: "그건 매니저한테 물어볼 만해요." }
    ]
  },
  {
    id: "theres-no-way",
    title: "There's no way...",
    category: "추측·설명",
    desc: "'절대 ~일 리 없어, ~할 수 없어'라고 불가능하다고 강하게 말할 때. 짧게 'No way!'(말도 안 돼!)라고도 해요.",
    examples: [
      { en: "There's no way I can finish this by Friday.", kr: "금요일까지 이거 절대 못 끝내요." },
      { en: "There's no way he's fifty!", kr: "그 사람이 쉰 살일 리가 없어!" },
      { en: "There's no way we'll make it in time.", kr: "우리 절대 제시간에 못 가." },
      { en: "There's no way I'm paying that much for coffee.", kr: "커피에 그렇게 많이 낼 순 없지." },
      { en: "There's no way she forgot your birthday.", kr: "걔가 네 생일을 잊었을 리가 없어." }
    ]
  },

  // ===== 7. 감정·인사 =====
  {
    id: "thank-you-for",
    title: "Thank you for...",
    category: "감정·인사",
    desc: "고마운 이유를 콕 집어 말할 때. for 뒤에 명사나 ~ing가 와요. 대답은 No problem. 또는 Anytime.",
    examples: [
      { en: "Thank you for having me tonight.", kr: "오늘 밤 초대해 줘서 고마워요." },
      { en: "Thank you for your help with the report.", kr: "보고서 도와주셔서 감사해요." },
      { en: "Thank you for waiting. I'll be right with you.", kr: "기다려 주셔서 고마워요. 금방 도와드릴게요." },
      { en: "Thank you for letting me know.", kr: "알려 줘서 고마워요." },
      { en: "Thank you for picking me up at the airport.", kr: "공항에 데리러 와 줘서 고마워." }
    ]
  },
  {
    id: "im-sorry-for",
    title: "I'm sorry for...",
    category: "감정·인사",
    desc: "내 잘못을 사과할 때. for 뒤에 명사나 ~ing가 오고, 친한 사이엔 Sorry for ~로 줄여 말해도 돼요.",
    examples: [
      { en: "I'm sorry for being late again.", kr: "또 늦어서 미안해요." },
      { en: "I'm sorry for the confusion earlier.", kr: "아까 헷갈리게 해서 죄송해요." },
      { en: "I'm sorry for not calling you back yesterday.", kr: "어제 다시 전화 못 해서 미안해." },
      { en: "I'm sorry for the short notice.", kr: "급하게 말씀드려서 죄송해요." },
      { en: "I'm sorry for what I said last night.", kr: "어젯밤에 내가 한 말 미안해." }
    ]
  },
  {
    id: "im-sorry-to-hear",
    title: "I'm sorry to hear...",
    category: "감정·인사",
    desc: "안 좋은 소식에 위로할 때. 내 사과가 아니라 '안타깝다'는 공감 표현이에요. 짧게 Sorry to hear that.도 자주 써요.",
    examples: [
      { en: "I'm sorry to hear about your grandmother.", kr: "할머니 일은 정말 유감이에요." },
      { en: "I'm sorry to hear that you're sick.", kr: "아프다니 마음이 안 좋네요." },
      { en: "I'm sorry to hear the interview didn't go well.", kr: "면접이 잘 안 됐다니 안타깝다." },
      { en: "I'm sorry to hear you lost your job.", kr: "일자리를 잃었다니 정말 안됐어요." },
      { en: "I'm sorry to hear about your flight delay.", kr: "비행기가 지연됐다니 안됐네요." }
    ]
  },
  {
    id: "congratulations-on",
    title: "Congratulations on...",
    category: "감정·인사",
    desc: "좋은 일을 축하할 때. on 뒤에 명사나 ~ing가 오고 꼭 복수형 Congratulations로 말해요. 친구끼린 Congrats!",
    examples: [
      { en: "Congratulations on your promotion! You deserve it.", kr: "승진 축하해요! 충분히 그럴 만해요." },
      { en: "Congratulations on your new baby!", kr: "아기 태어난 거 축하해요!" },
      { en: "Congratulations on getting into grad school!", kr: "대학원 합격 축하해!" },
      { en: "Congratulations on your wedding, you two!", kr: "두 사람 결혼 축하해요!" },
      { en: "Congratulations on finishing the marathon!", kr: "마라톤 완주 축하해!" }
    ]
  },
  {
    id: "im-glad-to",
    title: "I'm glad to...",
    category: "감정·인사",
    desc: "~하게 돼서 기쁘다는 따뜻한 표현. 'I'm glad to hear that.'(다행이네요)은 좋은 소식에 맞장구칠 때 자주 써요.",
    examples: [
      { en: "I'm glad to hear that.", kr: "그렇다니 다행이에요." },
      { en: "I'm glad to finally meet you in person.", kr: "드디어 직접 뵙게 돼서 반가워요." },
      { en: "I'm so glad to be back home.", kr: "집에 돌아오니 너무 좋다." },
      { en: "No problem. I'm always glad to help.", kr: "별말씀을요. 언제든 기꺼이 도와드릴게요." },
      { en: "I'm glad to see you're feeling better.", kr: "몸이 좀 나아진 것 같아서 다행이야." }
    ]
  },
  {
    id: "im-worried-about",
    title: "I'm worried about...",
    category: "감정·인사",
    desc: "걱정되는 대상을 말할 때. 동사가 오면 -ing 형태로 써요. 걱정하는 상대에겐 'Don't worry about it.'으로 안심시켜 주세요.",
    examples: [
      { en: "I'm worried about missing my flight.", kr: "비행기 놓칠까 봐 걱정돼요." },
      { en: "I'm worried about the presentation tomorrow.", kr: "내일 발표가 걱정돼요." },
      { en: "I'm a little worried about my dad's health.", kr: "아빠 건강이 좀 걱정돼요." },
      { en: "I'm worried about my friend. She seems really down.", kr: "친구가 걱정돼. 요즘 많이 처져 보여." },
      { en: "I'm worried about the price. It's a bit much.", kr: "가격이 좀 걱정되네요. 좀 비싸서요." }
    ]
  },
  {
    id: "i-cant-believe",
    title: "I can't believe...",
    category: "감정·인사",
    desc: "놀람, 충격, 감동을 모두 담는 감탄 표현. 좋은 일에도 나쁜 일에도 쓰니 말투에 감정을 실어 말해 보세요.",
    examples: [
      { en: "I can't believe you ate the whole pizza!", kr: "피자를 혼자 다 먹었다니 말도 안 돼!" },
      { en: "I can't believe how cheap this is.", kr: "이게 이렇게 싸다니 믿기지 않아요." },
      { en: "I can't believe it's already December.", kr: "벌써 12월이라니 믿기지 않아요." },
      { en: "I can't believe we missed the bus again.", kr: "우리 또 버스 놓쳤다니 말도 안 돼." },
      { en: "I can't believe you remembered my birthday!", kr: "내 생일을 기억하다니 믿기지 않아!" }
    ]
  },
  {
    id: "im-afraid",
    title: "I'm afraid...",
    category: "감정·인사",
    desc: "안 좋은 소식이나 거절을 정중히 전할 때 쓰는 '죄송하지만, 아쉽지만'. 무섭다는 뜻이 아니니 주의하세요.",
    examples: [
      { en: "I'm afraid we're fully booked tonight.", kr: "죄송하지만 오늘 밤은 예약이 다 찼어요." },
      { en: "I'm afraid I can't make it to the party.", kr: "아쉽지만 파티에 못 갈 것 같아." },
      { en: "I'm afraid that's not possible.", kr: "죄송하지만 그건 안 될 것 같아요." },
      { en: "I'm afraid I have some bad news.", kr: "안타깝지만 안 좋은 소식이 있어요." },
      { en: "I'm afraid the store is closed today.", kr: "죄송하지만 오늘 가게는 문을 닫았어요." }
    ]
  },
  {
    id: "i-didnt-mean-to",
    title: "I didn't mean to...",
    category: "감정·인사",
    desc: "'일부러 그런 건 아니에요'라고 의도를 해명하며 사과할 때. 앞에 Sorry,를 붙이면 더 부드러워요.",
    examples: [
      { en: "Sorry, I didn't mean to be rude earlier.", kr: "아까 무례하게 굴려던 건 아니었어요. 죄송해요." },
      { en: "I didn't mean to hurt your feelings.", kr: "네 기분 상하게 하려던 건 아니었어." },
      { en: "I didn't mean to wake you up.", kr: "깨우려던 건 아니었어요." },
      { en: "I didn't mean to interrupt. Go ahead.", kr: "말 끊으려던 건 아니었어요. 계속하세요." },
      { en: "I didn't mean to take your seat. Sorry about that.", kr: "자리 뺏으려던 건 아니었어요. 죄송해요." }
    ]
  },
  {
    id: "i-wish-i-could",
    title: "I wish I could...",
    category: "감정·인사",
    desc: "할 수 없어서 아쉬울 때. 초대를 거절할 때 I wish I could, but ~이라고 하면 아주 부드러워요.",
    examples: [
      { en: "I wish I could stay longer.", kr: "더 있다 갈 수 있으면 좋을 텐데." },
      { en: "I wish I could eat spicy food like you.", kr: "나도 너처럼 매운 거 잘 먹으면 좋겠다." },
      { en: "I wish I could come, but I have plans.", kr: "가고 싶은데 선약이 있어요." },
      { en: "I wish I could help, but I'm swamped.", kr: "도와주고 싶은데 일이 너무 많아." },
      { en: "I wish I could take a week off.", kr: "일주일 쉴 수 있으면 좋겠다." }
    ]
  },
  {
    id: "i-should-have",
    title: "I should have...",
    category: "감정·인사",
    desc: "이미 지난 일을 후회할 때 '~했어야 했는데'. 실제 대화에선 should've로 줄여 발음해요.",
    examples: [
      { en: "I should have left earlier.", kr: "더 일찍 출발했어야 했는데." },
      { en: "I should have listened to you.", kr: "네 말을 들었어야 했어." },
      { en: "I should have brought a jacket.", kr: "재킷을 챙겨 왔어야 했어." },
      { en: "I should have checked the email first.", kr: "이메일을 먼저 확인했어야 했어요." },
      { en: "I should have ordered what you got.", kr: "너 시킨 거 시킬 걸 그랬어." }
    ]
  },

  // ===== 8. 질문·되묻기 =====
  {
    id: "how-was",
    title: "How was...?",
    category: "질문·되묻기",
    desc: "지난 일이 어땠는지 안부처럼 물을 때. 대답은 It was great!처럼 짧게 시작하고 한두 마디 덧붙이면 자연스러워요.",
    examples: [
      { en: "How was your weekend? Anything fun?", kr: "주말 어땠어요? 재밌는 일 있었어요?" },
      { en: "How was the meeting with the client?", kr: "고객이랑 미팅 어땠어요?" },
      { en: "How was your trip to Japan?", kr: "일본 여행 어땠어?" },
      { en: "How was the movie last night?", kr: "어젯밤 영화 어땠어?" },
      { en: "How was your first day at work?", kr: "출근 첫날 어땠어요?" }
    ]
  },
  {
    id: "have-you-ever",
    title: "Have you ever...?",
    category: "질문·되묻기",
    desc: "'~해 본 적 있어요?'라고 경험을 물을 때. 뒤엔 been, tried 같은 과거분사가 와요. 대답은 Yes, I have. / No, never.",
    examples: [
      { en: "Have you ever been to New York?", kr: "뉴욕에 가 본 적 있어요?" },
      { en: "Have you ever tried Korean barbecue?", kr: "한국식 바비큐 먹어 본 적 있어요?" },
      { en: "Have you ever used this software before?", kr: "전에 이 소프트웨어 써 본 적 있어요?" },
      { en: "Have you ever thought about moving abroad?", kr: "해외로 이사 가는 거 생각해 본 적 있어?" },
      { en: "Have you ever missed a flight?", kr: "비행기 놓쳐 본 적 있어?" }
    ]
  },
  {
    id: "how-often-do-you",
    title: "How often do you...?",
    category: "질문·되묻기",
    desc: "얼마나 자주 하는지 물을 때. 대답은 Once a week., Twice a month., Almost every day.처럼 해요.",
    examples: [
      { en: "How often do you work out?", kr: "운동 얼마나 자주 해요?" },
      { en: "How often do you go back to Korea?", kr: "한국에 얼마나 자주 가요?" },
      { en: "How often do you eat out?", kr: "외식 얼마나 자주 해?" },
      { en: "How often do you check your email?", kr: "이메일 얼마나 자주 확인해요?" },
      { en: "How often do you see your parents?", kr: "부모님은 얼마나 자주 봬요?" }
    ]
  },
  {
    id: "what-kind-of",
    title: "What kind of...?",
    category: "질문·되묻기",
    desc: "종류나 취향을 물을 때. 대화를 이어가기 좋은 질문이에요. 대답은 I like ~ 또는 Anything is fine.",
    examples: [
      { en: "What kind of music do you like?", kr: "어떤 음악 좋아해요?" },
      { en: "What kind of work do you do?", kr: "어떤 일 하세요?" },
      { en: "What kind of room would you like?", kr: "어떤 객실을 원하세요?" },
      { en: "What kind of food do you want tonight?", kr: "오늘 저녁엔 어떤 음식 먹고 싶어?" },
      { en: "What kind of movies are you into?", kr: "어떤 영화 좋아해?" }
    ]
  },
  {
    id: "when-was-the-last-time",
    title: "When was the last time...?",
    category: "질문·되묻기",
    desc: "마지막으로 ~한 게 언제인지 물을 때. '꽤 오래됐지?'라는 뉘앙스도 담기고, 병원에서도 자주 들어요.",
    examples: [
      { en: "When was the last time you saw a dentist?", kr: "마지막으로 치과 간 게 언제예요?" },
      { en: "When was the last time we hung out?", kr: "우리 마지막으로 논 게 언제였지?" },
      { en: "When was the last time you took a vacation?", kr: "마지막으로 휴가 간 게 언제예요?" },
      { en: "When was the last time you updated this file?", kr: "이 파일 마지막으로 업데이트한 게 언제예요?" },
      { en: "When was the last time you ate something?", kr: "마지막으로 뭐 먹은 게 언제야?" }
    ]
  },
  {
    id: "whats-the-best-way-to",
    title: "What's the best way to...?",
    category: "질문·되묻기",
    desc: "가장 좋은 방법이나 요령을 물을 때. 길 찾기, 연락 방법, 생활 팁 등 조언을 구할 때 두루 써요.",
    examples: [
      { en: "What's the best way to get downtown?", kr: "시내로 가는 가장 좋은 방법이 뭐예요?" },
      { en: "What's the best way to contact you?", kr: "연락드리려면 어떻게 하는 게 제일 좋아요?" },
      { en: "What's the best way to get rid of hiccups?", kr: "딸꾹질 멈추는 제일 좋은 방법이 뭐야?" },
      { en: "What's the best way to save money?", kr: "돈 모으는 가장 좋은 방법이 뭐야?" },
      { en: "What's the best way to cook salmon?", kr: "연어는 어떻게 요리하는 게 제일 좋아?" }
    ]
  },
  {
    id: "did-you-get-a-chance-to",
    title: "Did you get a chance to...?",
    category: "질문·되묻기",
    desc: "'혹시 ~해 보셨어요?'라고 재촉하는 느낌 없이 부드럽게 확인할 때. 직장에서 특히 유용해요.",
    examples: [
      { en: "Did you get a chance to read my email?", kr: "제 이메일 읽어 보셨어요?" },
      { en: "Did you get a chance to look at the report?", kr: "보고서 한번 보셨어요?" },
      { en: "Did you get a chance to eat lunch?", kr: "점심은 먹었어?" },
      { en: "Did you get a chance to talk to him?", kr: "그 사람이랑 얘기해 봤어?" },
      { en: "Did you get a chance to visit the museum?", kr: "박물관에는 가 봤어요?" }
    ]
  },
  {
    id: "how-long-does-it-take-to",
    title: "How long does it take to...?",
    category: "질문·되묻기",
    desc: "걸리는 시간을 물을 때. 대답은 It takes about 20 minutes.처럼 It takes로 해요.",
    examples: [
      { en: "How long does it take to get to the airport?", kr: "공항까지 얼마나 걸려요?" },
      { en: "How long does it take to fix a phone screen?", kr: "휴대폰 화면 고치는 데 얼마나 걸려요?" },
      { en: "How long does it take to get a refund?", kr: "환불받는 데 얼마나 걸려요?" },
      { en: "How long does it take to cook this?", kr: "이거 요리하는 데 얼마나 걸려?" },
      { en: "How long does it take to get the test results?", kr: "검사 결과 나오는 데 얼마나 걸려요?" }
    ]
  },
  {
    id: "how-come",
    title: "How come...?",
    category: "질문·되묻기",
    desc: "'어째서 ~야?'라고 의외라서 이유를 물을 때. 'Why'보다 구어적이고, 'How come you're late?'처럼 뒤에 평서문 어순이 와요.",
    examples: [
      { en: "How come you're still awake?", kr: "왜 아직 안 자?" },
      { en: "How come you didn't call me back?", kr: "왜 나한테 다시 전화 안 했어?" },
      { en: "How come it's so cheap here?", kr: "여기는 어떻게 이렇게 싸요?" },
      { en: "How come the train is late again?", kr: "기차가 왜 또 늦어?" },
      { en: "How come the meeting got canceled?", kr: "회의가 왜 취소됐어요?" }
    ]
  },
  {
    id: "what-do-you-mean",
    title: "What do you mean...?",
    category: "질문·되묻기",
    desc: "상대 말이 이해 안 되거나 의외일 때 '무슨 말이야?'라고 되묻는 말. 억양에 따라 따지는 느낌이 나니 부드럽게 말하세요.",
    examples: [
      { en: "What do you mean by that?", kr: "그게 무슨 뜻이야?" },
      { en: "What do you mean the flight is canceled?", kr: "비행기가 취소됐다니 무슨 말씀이세요?" },
      { en: "Wait, what do you mean you're quitting?", kr: "잠깐, 그만둔다니 무슨 말이야?" },
      { en: "What do you mean breakfast isn't included?", kr: "조식이 포함 안 됐다니 무슨 말씀이세요?" },
      { en: "What do you mean I need more tests?", kr: "검사를 더 받아야 한다니 무슨 말씀이세요?" }
    ]
  },
  {
    id: "are-you-sure",
    title: "Are you sure...?",
    category: "질문·되묻기",
    desc: "상대 말이 맞는지 다시 확인하거나, 사양하는 사람에게 한 번 더 권할 때. 'Are you sure?'만 말해도 '정말?'이라는 뜻이에요.",
    examples: [
      { en: "Are you sure about that?", kr: "그거 확실해?" },
      { en: "Are you sure? I can pay for mine.", kr: "정말요? 제 건 제가 내도 되는데요." },
      { en: "Are you sure this is the right bus?", kr: "이 버스 맞는 거 확실해요?" },
      { en: "Are you sure you don't want dessert?", kr: "정말 디저트 안 먹을 거야?" },
      { en: "Are you sure you turned off the stove?", kr: "가스불 끈 거 확실해?" }
    ]
  },
  {
    id: "sorry-i-didnt-catch",
    title: "Sorry, I didn't catch...",
    category: "질문·되묻기",
    desc: "상대 말을 잘 못 들었을 때 '죄송한데 ~를 못 들었어요'라고 되묻는 말. 'What?'보다 공손하고 이름을 다시 물을 때 특히 좋아요.",
    examples: [
      { en: "Sorry, I didn't catch your name.", kr: "죄송한데 성함을 못 들었어요." },
      { en: "Sorry, I didn't catch that. Could you repeat it?", kr: "죄송해요, 못 들었어요. 다시 말씀해 주시겠어요?" },
      { en: "Sorry, I didn't catch the last part.", kr: "미안, 마지막 부분 못 들었어." },
      { en: "Sorry, I didn't catch what you said about the price.", kr: "죄송한데 가격 말씀하신 거 못 들었어요." },
      { en: "Sorry, I didn't catch the gate number.", kr: "죄송한데 탑승구 번호를 못 들었어요." }
    ]
  },
  {
    id: "let-me-check",
    title: "Let me check...",
    category: "질문·되묻기",
    desc: "바로 답하기 어려울 때 '확인해 볼게요'. 뒤에 'and get back to you'(확인하고 연락드릴게요)를 붙이면 업무에서 아주 유용해요.",
    examples: [
      { en: "Let me check my schedule.", kr: "제 일정 좀 확인해 볼게요." },
      { en: "Let me check with my wife first.", kr: "아내한테 먼저 물어볼게요." },
      { en: "Let me check if we have it in stock.", kr: "재고 있는지 확인해 볼게요." },
      { en: "Let me check my email and get back to you.", kr: "메일 확인해 보고 다시 연락드릴게요." },
      { en: "Let me check what time the last train is.", kr: "막차가 몇 시인지 확인해 볼게." }
    ]
  },

  // ===== 9. 경험·습관 =====
  {
    id: "i-used-to",
    title: "I used to...",
    category: "경험·습관",
    desc: "예전엔 그랬지만 지금은 아닌 습관이나 상태를 말할 때. I'm used to ~ing(~에 익숙하다)와 헷갈리지 마세요.",
    examples: [
      { en: "I used to live in Busan.", kr: "예전에 부산에 살았어요." },
      { en: "I used to play soccer every weekend.", kr: "예전엔 주말마다 축구를 했어." },
      { en: "I used to hate coffee, but now I love it.", kr: "예전엔 커피를 싫어했는데 지금은 정말 좋아해." },
      { en: "I used to work at a bank.", kr: "전에 은행에서 일했어요." },
      { en: "I used to be really shy in college.", kr: "대학 때는 정말 수줍음이 많았어요." }
    ]
  },
  {
    id: "im-used-to",
    title: "I'm used to...",
    category: "경험·습관",
    desc: "이미 익숙하다고 말할 때. to 뒤에 동사원형이 아니라 명사나 ~ing가 와요. I used to와 구별하세요.",
    examples: [
      { en: "I'm used to getting up early.", kr: "일찍 일어나는 데 익숙해요." },
      { en: "I'm used to spicy food.", kr: "매운 음식엔 익숙해." },
      { en: "I'm used to working late on Fridays.", kr: "금요일에 늦게까지 일하는 데 익숙해요." },
      { en: "I'm used to the cold weather now.", kr: "이제 추운 날씨에 익숙해졌어요." },
      { en: "Don't worry, I'm used to long flights.", kr: "걱정 마세요, 장거리 비행엔 익숙해요." }
    ]
  },
  {
    id: "ive-been-ing",
    title: "I've been ~ing",
    category: "경험·습관",
    desc: "과거부터 지금까지 계속 해 온 일을 말할 때. for(기간), since(시점), lately(요즘)와 함께 자주 써요.",
    examples: [
      { en: "I've been working here for three years.", kr: "여기서 3년째 일하고 있어요." },
      { en: "I've been going to the gym since January.", kr: "1월부터 헬스장 다니고 있어요." },
      { en: "I've been waiting for you for an hour!", kr: "너 한 시간째 기다리고 있었어!" },
      { en: "I've been feeling tired all week.", kr: "이번 주 내내 피곤했어." },
      { en: "I've been looking for a new apartment lately.", kr: "요즘 새 아파트 알아보고 있어요." }
    ]
  },
  {
    id: "i-ended-up",
    title: "I ended up ~ing",
    category: "경험·습관",
    desc: "'결국 ~하게 됐어'라고 계획과 다르게 흘러간 결과를 말할 때. 뒤에 동사ing가 오고, 지난 일을 얘기할 때 정말 자주 써요.",
    examples: [
      { en: "I ended up staying home all weekend.", kr: "결국 주말 내내 집에 있었어." },
      { en: "We ended up eating at a different restaurant.", kr: "우리 결국 다른 식당에서 먹었어." },
      { en: "I ended up buying two pairs instead of one.", kr: "결국 한 켤레 대신 두 켤레 샀어." },
      { en: "I ended up working late again.", kr: "결국 또 야근했어." },
      { en: "I ended up missing my flight.", kr: "결국 비행기를 놓쳤어." }
    ]
  },
  {
    id: "i-have-trouble-ing",
    title: "I have trouble ~ing",
    category: "경험·습관",
    desc: "'~하는 게 잘 안 돼요'라고 어려움을 말할 때. trouble 뒤엔 to부정사가 아니라 ~ing가 온다는 점에 주의.",
    examples: [
      { en: "I have trouble remembering names.", kr: "이름을 잘 기억 못 해요." },
      { en: "I have trouble waking up on Mondays.", kr: "월요일엔 일어나기가 너무 힘들어." },
      { en: "Doctor, I have trouble falling asleep at night.", kr: "선생님, 밤에 잠드는 게 힘들어요." },
      { en: "Sorry, I'm having trouble hearing you. Can you speak up?", kr: "죄송해요, 잘 안 들려요. 좀 크게 말씀해 주실래요?" },
      { en: "I have trouble saying no to my coworkers.", kr: "동료들한테 거절을 잘 못 해요." }
    ]
  },
  {
    id: "im-interested-in",
    title: "I'm interested in...",
    category: "경험·습관",
    desc: "관심 있다고 말할 때. 가게나 구인 공고 앞에선 '사고 싶다, 지원하고 싶다'는 뜻. I'm interesting과 혼동 주의.",
    examples: [
      { en: "I'm interested in learning how to cook.", kr: "요리 배우는 데 관심 있어요." },
      { en: "I'm interested in the job you posted.", kr: "올리신 채용 공고에 관심이 있어요." },
      { en: "I'm interested in photography these days.", kr: "요즘 사진에 관심이 있어." },
      { en: "I'm interested in joining your book club.", kr: "독서 모임에 들어가는 데 관심 있어요." },
      { en: "I'm interested in the two-bedroom apartment.", kr: "방 두 개짜리 아파트에 관심 있어요." }
    ]
  },

  // ===== 10. 조언·안내 =====
  {
    id: "you-should",
    title: "You should...",
    category: "조언·안내",
    desc: "조언이나 추천을 할 때 '~해 봐, ~하는 게 좋겠어'. 더 부드럽게 말하려면 앞에 Maybe를 붙여요.",
    examples: [
      { en: "You should try the pasta here.", kr: "여기 파스타 꼭 먹어 봐요." },
      { en: "You should get some rest.", kr: "좀 쉬는 게 좋겠어." },
      { en: "You should ask your manager first.", kr: "먼저 매니저한테 물어보는 게 좋겠어요." },
      { en: "You should bring an umbrella today.", kr: "오늘 우산 챙기는 게 좋겠어." },
      { en: "You should see a doctor about that cough.", kr: "그 기침은 병원에 가 보는 게 좋겠어요." }
    ]
  },
  {
    id: "you-dont-have-to",
    title: "You don't have to...",
    category: "조언·안내",
    desc: "'안 해도 돼요'라고 부담을 덜어 줄 때. '~하면 안 돼'라는 금지의 뜻이 아니니 헷갈리지 마세요.",
    examples: [
      { en: "You don't have to pay me back.", kr: "돈 안 갚아도 돼." },
      { en: "You don't have to come if you're busy.", kr: "바쁘면 안 와도 돼요." },
      { en: "You don't have to apologize.", kr: "사과 안 해도 돼요." },
      { en: "You don't have to wear a suit tomorrow.", kr: "내일 정장 안 입어도 돼요." },
      { en: "You don't have to decide right now.", kr: "지금 당장 결정 안 해도 돼." }
    ]
  },
  {
    id: "dont-forget-to",
    title: "Don't forget to...",
    category: "조언·안내",
    desc: "잊지 말고 하라고 챙겨 줄 때. 대답은 I won't.(안 잊을게). Don't forget your keys.처럼 명사만 써도 돼요.",
    examples: [
      { en: "Don't forget to lock the door.", kr: "문 잠그는 거 잊지 마." },
      { en: "Don't forget to bring your passport.", kr: "여권 챙기는 거 잊지 마세요." },
      { en: "Don't forget to send me the file.", kr: "파일 보내 주는 거 잊지 마요." },
      { en: "Don't forget to call your mom.", kr: "엄마한테 전화하는 거 잊지 마." },
      { en: "Don't forget to sign up by Friday.", kr: "금요일까지 신청하는 거 잊지 마세요." }
    ]
  },
  {
    id: "make-sure-to",
    title: "Make sure to...",
    category: "조언·안내",
    desc: "'꼭 ~해'라고 당부할 때. 'Don't forget to...'보다 빠뜨리지 말고 확실히 챙기라는 느낌이 강해요. 답은 'I will.'",
    examples: [
      { en: "Make sure to lock the door when you leave.", kr: "나갈 때 꼭 문 잠가." },
      { en: "Make sure to bring your passport.", kr: "여권 꼭 챙기세요." },
      { en: "Make sure to take this medicine after meals.", kr: "이 약은 꼭 식후에 드세요." },
      { en: "Make sure to save the file before you close it.", kr: "파일 닫기 전에 꼭 저장하세요." },
      { en: "Make sure to try the tacos there.", kr: "거기 가면 타코 꼭 먹어 봐." }
    ]
  },
  {
    id: "feel-free-to",
    title: "Feel free to...",
    category: "조언·안내",
    desc: "'편하게 ~하세요'라고 허락하거나 권할 때. 손님을 맞을 때나 이메일 끝인사로 자주 써요.",
    examples: [
      { en: "Feel free to ask me anything.", kr: "뭐든 편하게 물어보세요." },
      { en: "Feel free to call me anytime.", kr: "언제든 편하게 전화해." },
      { en: "Feel free to help yourself to some coffee.", kr: "커피 편하게 드세요." },
      { en: "Feel free to use my laptop.", kr: "내 노트북 편하게 써." },
      { en: "Feel free to join us after work.", kr: "퇴근 후에 편하게 같이 와요." }
    ]
  },
  {
    id: "let-me-know-if",
    title: "Let me know if...",
    category: "조언·안내",
    desc: "'~하면 말해 줘'. 대화나 메일 끝에 배려의 한마디로 자주 써요. 'Let me know when ~'도 함께 익혀 두세요.",
    examples: [
      { en: "Let me know if it's too spicy.", kr: "너무 매우면 말해." },
      { en: "Let me know if you need anything.", kr: "필요한 거 있으면 말해." },
      { en: "Let me know if you're free tomorrow.", kr: "내일 시간 되면 알려 줘." },
      { en: "Let me know if you have any questions.", kr: "궁금한 점 있으시면 말씀해 주세요." },
      { en: "Let me know if you're running late, okay?", kr: "늦을 것 같으면 알려 줘, 알았지?" }
    ]
  }
];
