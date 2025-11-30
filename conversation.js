// conversation.js
// 주제별 실전 대화 데이터 (각 6문장, 간결하고 자연스러운 표현)

const conversationData = [
  // ==================================================
  // 1. 일상 & 스몰토크 (Daily Life & Small Talk)
  // ==================================================
  {
    id: "conv-001",
    title: "자기소개 (Self Introduction)",
    lines: [
      { speaker: "A", en: "Hi, I don't think we've met. I'm Minho.", kr: "안녕하세요, 우리 초면인 것 같네요. 민호입니다." },
      { speaker: "B", en: "Nice to meet you. I'm Sarah from Marketing.", kr: "반가워요. 저는 마케팅 팀의 사라예요." },
      { speaker: "A", en: "Marketing? I just joined Sales this week.", kr: "마케팅이요? 저는 이번 주에 영업팀에 왔어요." },
      { speaker: "B", en: "Welcome! How do you like it so far?", kr: "환영해요! 지금까지는 어때요?" },
      { speaker: "A", en: "People are nice, but I'm still learning.", kr: "다들 친절한데, 아직 배우는 중이에요." },
      { speaker: "B", en: "Don't worry. You'll get used to it soon.", kr: "걱정 마세요. 금방 적응하실 거예요." }
    ]
  },
  {
    id: "conv-002",
    title: "날씨 이야기 (Weather)",
    lines: [
      { speaker: "A", en: "It is absolutely freezing today.", kr: "오늘 진짜 너무 춥네요." },
      { speaker: "B", en: "I know. The wind is no joke.", kr: "그러니까요. 바람이 장난 아니에요." },
      { speaker: "A", en: "I regret not wearing a thicker coat.", kr: "더 두꺼운 코트 입고 올 걸 그랬어요." },
      { speaker: "B", en: "You really need to bundle up.", kr: "정말 꽁꽁 싸매고 다녀야 해요." },
      { speaker: "A", en: "I need some hot coffee to warm up.", kr: "몸 좀 녹이게 따뜻한 커피가 필요해요." },
      { speaker: "B", en: "Good idea. Stay warm!", kr: "좋은 생각이네요. 따뜻하게 계세요!" }
    ]
  },
  {
    id: "conv-003",
    title: "주말 계획 (Weekend Plans)",
    lines: [
      { speaker: "A", en: "Any plans for the weekend?", kr: "주말에 무슨 계획 있어요?" },
      { speaker: "B", en: "Just chilling at home. I need sleep.", kr: "그냥 집에서 쉬려고요. 잠이 부족해서요." },
      { speaker: "A", en: "Sounds relaxing. I'm jealous.", kr: "편하겠네요. 부러워요." },
      { speaker: "B", en: "How about you? Anything special?", kr: "당신은요? 뭐 특별한 거 있어요?" },
      { speaker: "A", en: "I'm going hiking if the weather's good.", kr: "날씨 좋으면 등산 갈 거예요." },
      { speaker: "B", en: "Hope the weather is nice!", kr: "날씨가 좋기를 바랄게요!" }
    ]
  },
  {
    id: "conv-004",
    title: "취미 공유 (Hobbies)",
    lines: [
      { speaker: "A", en: "Nice guitar case. Do you play?", kr: "기타 케이스 멋지네요. 연주하세요?" },
      { speaker: "B", en: "Yeah, for a few years now.", kr: "네, 몇 년 정도 됐어요." },
      { speaker: "A", en: "Cool. What do you usually play?", kr: "멋지네요. 주로 뭐 치세요?" },
      { speaker: "B", en: "Mostly acoustic pop. It's relaxing.", kr: "주로 어쿠스틱 팝이요. 마음이 편해져요." },
      { speaker: "A", en: "I've always wanted to learn.", kr: "저도 항상 배우고 싶었어요." },
      { speaker: "B", en: "Give it a shot! It's never too late.", kr: "한번 해보세요! 절대 늦지 않았어요." }
    ]
  },

  // ==================================================
  // 2. 식당 & 카페 (Restaurant & Cafe)
  // ==================================================
  {
    id: "conv-048",
    title: "점심 메뉴 고르기 (Choosing Lunch)",
    lines: [
      { speaker: "A", en: "I'm starving. What's for lunch?", kr: "배고파 죽겠어요. 점심 뭐 먹을까요?" },
      { speaker: "B", en: "Not sure. Something light?", kr: "글쎄요. 좀 가벼운 거 어때요?" },
      { speaker: "A", en: "How about that new poke place?", kr: "새로 생긴 포케집 어때요?" },
      { speaker: "B", en: "Sounds good. I wanted to try it.", kr: "좋아요. 가보고 싶었거든요." },
      { speaker: "A", en: "Let's go before it gets busy.", kr: "사람 몰리기 전에 얼른 가요." },
      { speaker: "B", en: "Lead the way. I'm hungry.", kr: "앞장서세요. 배고프네요." }
    ]
  },
  {
    id: "conv-050",
    title: "카페 주문 (Ordering Coffee)",
    lines: [
      { speaker: "A", en: "Hi, what can I get for you?", kr: "안녕하세요, 주문하시겠어요?" },
      { speaker: "B", en: "Iced Americano, extra shot, please.", kr: "아이스 아메리카노 샷 추가해 주세요." },
      { speaker: "A", en: "Sure. Room for cream?", kr: "네. 크림 넣으실 건가요?" },
      { speaker: "B", en: "No, thanks. To go, please.", kr: "아뇨, 괜찮아요. 가져갈게요." },
      { speaker: "A", en: "Okay. You can pick it up over there.", kr: "네. 저쪽에서 받으시면 됩니다." },
      { speaker: "B", en: "Thanks. Have a good one!", kr: "감사합니다. 수고하세요!" }
    ]
  },
  {
    id: "conv-051",
    title: "맛집 추천 (Recommending Food)",
    lines: [
      { speaker: "A", en: "Know any good dinner spots nearby?", kr: "근처에 저녁 먹을 만한 곳 알아요?" },
      { speaker: "B", en: "There's a great BBQ place down the street.", kr: "이 길 따라가면 맛있는 고깃집 있어요." },
      { speaker: "A", en: "Is it crowded? We didn't book.", kr: "사람 많나요? 예약을 안 해서요." },
      { speaker: "B", en: "It's busy, but you'll get a table.", kr: "붐비긴 하는데 자리는 있을 거예요." },
      { speaker: "A", en: "Is the food good?", kr: "음식 맛은 괜찮나요?" },
      { speaker: "B", en: "Yeah, the pork belly is amazing.", kr: "네, 삼겹살이 끝내줘요." }
    ]
  },

  // ==================================================
  // 3. 여행 & 길찾기 (Travel & Directions)
  // ==================================================
  {
    id: "conv-060",
    title: "길 묻기 (Asking Directions)",
    lines: [
      { speaker: "A", en: "Excuse me, I think I'm lost.", kr: "실례합니다, 길을 잃은 것 같아요." },
      { speaker: "B", en: "Where are you headed?", kr: "어디로 가시는데요?" },
      { speaker: "A", en: "I'm looking for the National Museum.", kr: "국립 박물관을 찾고 있어요." },
      { speaker: "B", en: "Not at all. It's very close.", kr: "전혀 안 멀어요. 아주 가까워요." },
      { speaker: "A", en: "Which way should I go?", kr: "어느 쪽으로 가야 하죠?" },
      { speaker: "B", en: "Straight two blocks, then left.", kr: "두 블록 직진해서 왼쪽입니다." }
    ]
  },
  {
    id: "conv-061",
    title: "호텔 체크인 (Hotel Check-in)",
    lines: [
      { speaker: "A", en: "Hi, I'd like to check in.", kr: "안녕하세요, 체크인할게요." },
      { speaker: "B", en: "Sure. ID and credit card, please.", kr: "네. 신분증이랑 카드 주세요." },
      { speaker: "A", en: "Here. It's under the name Kim.", kr: "여기요. 김(Kim)으로 예약했어요." },
      { speaker: "B", en: "Found it. Do you prefer a high floor?", kr: "찾았습니다. 높은 층 원하세요?" },
      { speaker: "A", en: "Yes, ocean view please.", kr: "네, 바다 전망으로 부탁해요." },
      { speaker: "B", en: "All set. Here's your key. Enjoy!", kr: "다 됐습니다. 키 여기 있어요. 즐거운 시간 되세요!" }
    ]
  },
  {
    id: "conv-062",
    title: "사진 부탁하기 (Asking for a Photo)",
    lines: [
      { speaker: "A", en: "Excuse me, could you take a photo for us?", kr: "실례지만, 사진 좀 찍어주시겠어요?" },
      { speaker: "B", en: "Sure. Just press this button?", kr: "네. 이 버튼 누르면 되나요?" },
      { speaker: "A", en: "Yes. Please get the tower in the shot.", kr: "네. 타워가 나오게 찍어주세요." },
      { speaker: "B", en: "Say cheese! One more just in case.", kr: "치즈! 혹시 모르니 한 장 더 찍을게요." },
      { speaker: "A", en: "Thanks! That looks great.", kr: "감사합니다! 잘 나왔네요." },
      { speaker: "B", en: "No problem. Enjoy your trip!", kr: "별말씀을요. 즐거운 여행 되세요!" }
    ]
  },

  // ==================================================
  // 4. 회사 & 비즈니스 (Business)
  // ==================================================
  {
    id: "conv-047",
    title: "프린터 고장 (Office Equipment)",
    lines: [
      { speaker: "A", en: "Ugh, the printer is acting up.", kr: "아, 프린터가 또 말썽이네." },
      { speaker: "B", en: "Paper jam or out of toner?", kr: "종이 걸림? 아님 토너 부족?" },
      { speaker: "A", en: "It says error, but I don't see a jam.", kr: "에러라고 뜨는데 종이는 안 보여." },
      { speaker: "B", en: "It's too old. We need a new one.", kr: "너무 낡았어. 새걸로 바꿔야 돼." },
      { speaker: "A", en: "I'll call IT support.", kr: "IT 팀에 전화해 봐야겠다." },
      { speaker: "B", en: "Good luck. Let me know if you need help.", kr: "수고해. 도움 필요하면 말하고." }
    ]
  },
  {
    id: "conv-081",
    title: "회의 일정 잡기 (Scheduling Meeting)",
    lines: [
      { speaker: "A", en: "Are you free for a meeting this afternoon?", kr: "오늘 오후에 회의 시간 돼요?" },
      { speaker: "B", en: "Let me check. What time?", kr: "확인해 볼게요. 몇 시요?" },
      { speaker: "A", en: "How about 3 PM?", kr: "오후 3시 어때요?" },
      { speaker: "B", en: "I'm busy until 4. Can we do later?", kr: "4시까진 바쁜데. 더 늦게 될까요?" },
      { speaker: "A", en: "4 PM works. I'll send an invite.", kr: "4시 괜찮아요. 초대장 보낼게요." },
      { speaker: "B", en: "Great. See you then.", kr: "좋아요. 그때 봐요." }
    ]
  },
  {
    id: "conv-049",
    title: "엘리베이터 (Elevator Talk)",
    lines: [
      { speaker: "A", en: "Hold the elevator!", kr: "엘리베이터 잠시만요!" },
      { speaker: "B", en: "Got it. Take your time.", kr: "잡았어요. 천천히 오세요." },
      { speaker: "A", en: "Thanks. I'm running late.", kr: "감사해요. 제가 좀 늦어서요." },
      { speaker: "B", en: "No worries. Which floor?", kr: "괜찮아요. 몇 층 가세요?" },
      { speaker: "A", en: "10th, please. You going up?", kr: "10층이요. 올라가시나요?" },
      { speaker: "B", en: "Yes, to the 15th. Busy morning?", kr: "네, 15층요. 바쁜 아침이네요?" }
    ]
  },

  // ==================================================
  // 5. 쇼핑 (Shopping)
  // ==================================================
  {
    id: "conv-090",
    title: "옷 환불 (Returning Clothes)",
    lines: [
      { speaker: "A", en: "Hi, I'd like to return this.", kr: "안녕하세요, 이거 반품하려고요." },
      { speaker: "B", en: "Is there anything wrong with it?", kr: "제품에 문제가 있나요?" },
      { speaker: "A", en: "It doesn't fit. It's too tight.", kr: "안 맞아요. 너무 꽉 끼네요." },
      { speaker: "B", en: "Do you have the receipt?", kr: "영수증 가지고 계신가요?" },
      { speaker: "A", en: "Yes, here. Can I get a refund?", kr: "네, 여기요. 환불되나요?" },
      { speaker: "B", en: "Sure. I'll refund your card now.", kr: "그럼요. 바로 카드 취소해 드릴게요." }
    ]
  },
  {
    id: "conv-091",
    title: "가격 흥정 (Bargaining)",
    lines: [
      { speaker: "A", en: "How much is this?", kr: "이거 얼마예요?" },
      { speaker: "B", en: "It's 20 dollars. It's handmade.", kr: "20달러입니다. 수제품이에요." },
      { speaker: "A", en: "It's a bit pricey. Can I get a discount?", kr: "좀 비싸네요. 할인 안 되나요?" },
      { speaker: "B", en: "If you buy two, I'll do 35.", kr: "두 개 사시면 35에 드릴게요." },
      { speaker: "A", en: "Okay, I'll take two. Thanks!", kr: "좋아요, 두 개 주세요. 고마워요!" },
      { speaker: "B", en: "Great. Let me wrap them up.", kr: "잘하셨어요. 포장해 드릴게요." }
    ]
  }
];
