// conversation.js
// 총 50개 주제, 각 6문장
// 학습 포인트: 간결하고 짧은 원어민 회화체

const conversationData = [
  // ==================================================
  // 1. 일상 & 만남 (Daily Life)
  // ==================================================
  {
    id: "conv-001",
    title: "자기소개 (Intro)",
    lines: [
      { speaker: "A", en: "I don't think we've met. I'm Minho.", kr: "우리 초면인 것 같네요. 민호예요." },
      { speaker: "B", en: "Nice to meet you. I'm Sarah.", kr: "반가워요. 저는 사라입니다." },
      { speaker: "A", en: "I just joined the Sales team.", kr: "이번에 영업팀에 들어왔어요." },
      { speaker: "B", en: "Welcome! How do you like it?", kr: "환영해요! 다닐만해요?" },
      { speaker: "A", en: "It's great, but I'm still learning.", kr: "좋아요. 아직 배우는 중이지만요." },
      { speaker: "B", en: "You'll get used to it soon.", kr: "금방 적응하실 거예요." }
    ]
  },
  {
    id: "conv-002",
    title: "안부 묻기 (Catching Up)",
    lines: [
      { speaker: "A", en: "Long time no see! How are you?", kr: "오랜만이다! 잘 지냈어?" },
      { speaker: "B", en: "I've been good. Busy with work.", kr: "잘 지냈지. 일하느라 바빴어." },
      { speaker: "A", en: "Same here. Time flies, huh?", kr: "나도 그래. 시간 진짜 빠르지?" },
      { speaker: "B", en: "Totally. We should hang out soon.", kr: "그러니까. 조만간 한번 놀자." },
      { speaker: "A", en: "Let's grab dinner next week.", kr: "다음 주에 저녁 먹자." },
      { speaker: "B", en: "Sounds like a plan. Text me.", kr: "좋아. 문자 해." }
    ]
  },
  {
    id: "conv-003",
    title: "주말 계획 (Weekend)",
    lines: [
      { speaker: "A", en: "Any plans for the weekend?", kr: "주말에 계획 있어?" },
      { speaker: "B", en: "Not really. Just relaxing at home.", kr: "딱히. 그냥 집에서 쉬려고." },
      { speaker: "A", en: "Nice. I'm going camping.", kr: "좋네. 난 캠핑 갈 거야." },
      { speaker: "B", en: "Hope the weather is good.", kr: "날씨 좋았으면 좋겠다." },
      { speaker: "A", en: "Thanks. You should come next time.", kr: "고마워. 다음엔 너도 같이 가자." },
      { speaker: "B", en: "I might take you up on that.", kr: "진짜 따라갈지도 몰라." }
    ]
  },
  {
    id: "conv-004",
    title: "날씨 (Weather)",
    lines: [
      { speaker: "A", en: "It's freezing out there today.", kr: "오늘 밖에 진짜 춥다." },
      { speaker: "B", en: "I know. The wind is crazy.", kr: "알아. 바람이 장난 아니야." },
      { speaker: "A", en: "I should've worn a scarf.", kr: "목도리 하고 올 걸 그랬어." },
      { speaker: "B", en: "You definitely need to bundle up.", kr: "단단히 껴입어야겠다." },
      { speaker: "A", en: "Let's get something warm to drink.", kr: "따뜻한 것 좀 마시자." },
      { speaker: "B", en: "Good idea. Let's go inside.", kr: "좋은 생각이야. 들어가자." }
    ]
  },
  {
    id: "conv-005",
    title: "취미 (Hobbies)",
    lines: [
      { speaker: "A", en: "Is that a camera? Do you take photos?", kr: "그거 카메라야? 사진 찍어?" },
      { speaker: "B", en: "Yeah, it's my new hobby.", kr: "응, 내 새로운 취미야." },
      { speaker: "A", en: "Cool. Is it hard to learn?", kr: "멋지다. 배우기 어려워?" },
      { speaker: "B", en: "A little, but it's fun.", kr: "조금, 그래도 재밌어." },
      { speaker: "A", en: "I need a hobby too.", kr: "나도 취미가 필요한데." },
      { speaker: "B", en: "Join me this weekend!", kr: "이번 주말에 같이 가자!" }
    ]
  },

  // ==================================================
  // 2. 식당 & 카페 (Food)
  // ==================================================
  {
    id: "conv-006",
    title: "점심 메뉴 (Lunch)",
    lines: [
      { speaker: "A", en: "I'm starving. What's for lunch?", kr: "배고파. 점심 뭐 먹을까?" },
      { speaker: "B", en: "Not sure. Maybe something spicy?", kr: "글쎄. 매운 거 어때?" },
      { speaker: "A", en: "How about that new taco place?", kr: "새로 생긴 타코집 어때?" },
      { speaker: "B", en: "Sounds good. I wanted to try it.", kr: "좋아. 가보고 싶었어." },
      { speaker: "A", en: "Let's go before the rush.", kr: "사람 몰리기 전에 가자." },
      { speaker: "B", en: "Lead the way.", kr: "앞장서." }
    ]
  },
  {
    id: "conv-007",
    title: "커피 주문 (Coffee)",
    lines: [
      { speaker: "A", en: "Hi, what can I get for you?", kr: "안녕하세요, 주문하시겠어요?" },
      { speaker: "B", en: "Iced latte with oat milk, please.", kr: "아이스 라떼 오트 밀크로 주세요." },
      { speaker: "A", en: "Sure. Anything else?", kr: "네. 더 필요하신 건요?" },
      { speaker: "B", en: "That's it. For here, please.", kr: "그게 다예요. 먹고 갈게요." },
      { speaker: "A", en: "Okay. It'll be ready soon.", kr: "네. 금방 나옵니다." },
      { speaker: "B", en: "Thanks a lot.", kr: "감사합니다." }
    ]
  },
  {
    id: "conv-008",
    title: "맛집 추천 (Recommendation)",
    lines: [
      { speaker: "A", en: "Know any good sushi spots nearby?", kr: "근처에 괜찮은 초밥집 알아?" },
      { speaker: "B", en: "There's a great one down the street.", kr: "저 길 아래에 맛집 하나 있어." },
      { speaker: "A", en: "Is it expensive?", kr: "비싸?" },
      { speaker: "B", en: "No, it's actually quite cheap.", kr: "아니, 꽤 저렴한 편이야." },
      { speaker: "A", en: "Perfect. Do we need to book?", kr: "딱이네. 예약해야 해?" },
      { speaker: "B", en: "I would, just to be safe.", kr: "혹시 모르니까 하는 게 좋을 거야." }
    ]
  },
  {
    id: "conv-009",
    title: "계산하기 (Check)",
    lines: [
      { speaker: "A", en: "I'll get this. It's my treat.", kr: "이건 내가 낼게. 내가 사는 거야." },
      { speaker: "B", en: "No way. Let's split it.", kr: "안 돼. 나눠 내자." },
      { speaker: "A", en: "I insist. You paid last time.", kr: "낼게. 저번에 네가 냈잖아." },
      { speaker: "B", en: "Okay, if you insist.", kr: "정 그렇다면 알겠어." },
      { speaker: "A", en: "The next one's on you.", kr: "다음 건 네가 사." },
      { speaker: "B", en: "Deal. Let's get dessert.", kr: "콜. 디저트 먹으러 가자." }
    ]
  },
  {
    id: "conv-010",
    title: "배달 음식 (Delivery)",
    lines: [
      { speaker: "A", en: "Too tired to cook. Let's order in.", kr: "너무 피곤해서 요리 못 하겠어. 시켜 먹자." },
      { speaker: "B", en: "I'm down. Pizza or chicken?", kr: "좋아. 피자? 치킨?" },
      { speaker: "A", en: "I'm craving fried chicken.", kr: "프라이드치킨 땡겨." },
      { speaker: "B", en: "Sounds delicious. I'll order it.", kr: "맛있겠다. 내가 주문할게." },
      { speaker: "A", en: "Get the spicy sauce too.", kr: "매운 소스도 추가해 줘." },
      { speaker: "B", en: "Got it. It'll take 30 minutes.", kr: "알겠어. 30분 걸린대." }
    ]
  },

  // ==================================================
  // 3. 여행 & 길찾기 (Travel)
  // ==================================================
  {
    id: "conv-011",
    title: "길 묻기 (Directions)",
    lines: [
      { speaker: "A", en: "Excuse me, where is the station?", kr: "실례합니다, 역이 어디죠?" },
      { speaker: "B", en: "Just go straight two blocks.", kr: "두 블록만 쭉 가세요." },
      { speaker: "A", en: "Do I turn left or right?", kr: "왼쪽인가요 오른쪽인가요?" },
      { speaker: "B", en: "Turn left at the bank.", kr: "은행에서 왼쪽으로 도세요." },
      { speaker: "A", en: "Got it. Thanks!", kr: "알겠습니다. 감사해요!" },
      { speaker: "B", en: "No problem. It's very close.", kr: "별말씀을요. 아주 가까워요." }
    ]
  },
  {
    id: "conv-012",
    title: "체크인 (Check-in)",
    lines: [
      { speaker: "A", en: "Hi, checking in. Name's Lee.", kr: "안녕하세요, 체크인이요. 이(Lee)입니다." },
      { speaker: "B", en: "Okay. Can I see your ID?", kr: "네. 신분증 좀 볼까요?" },
      { speaker: "A", en: "Here. Is breakfast included?", kr: "여기요. 조식 포함인가요?" },
      { speaker: "B", en: "Yes, it is. Any room preference?", kr: "네, 포함입니다. 원하시는 객실 있으세요?" },
      { speaker: "A", en: "An ocean view, if possible.", kr: "가능하면 바다 전망으로요." },
      { speaker: "B", en: "No problem. Here's your key.", kr: "알겠습니다. 키 여기 있습니다." }
    ]
  },
  {
    id: "conv-013",
    title: "사진 요청 (Photo)",
    lines: [
      { speaker: "A", en: "Could you take a picture of us?", kr: "저희 사진 좀 찍어주실래요?" },
      { speaker: "B", en: "Sure. Just press this?", kr: "그럼요. 이거 누르면 되나요?" },
      { speaker: "A", en: "Yes. Please get the tower in the shot.", kr: "네. 타워 나오게 해주세요." },
      { speaker: "B", en: "Okay, say cheese! One more.", kr: "자, 치즈! 한 장 더요." },
      { speaker: "A", en: "Perfect. Thanks a lot.", kr: "완벽해요. 정말 감사합니다." },
      { speaker: "B", en: "You're welcome. Enjoy!", kr: "천만에요. 즐거운 여행 되세요!" }
    ]
  },
  {
    id: "conv-014",
    title: "수하물 찾기 (Baggage)",
    lines: [
      { speaker: "A", en: "Where is the baggage claim?", kr: "수하물 찾는 곳이 어디죠?" },
      { speaker: "B", en: "It's right over there, number 4.", kr: "저기 바로 4번이에요." },
      { speaker: "A", en: "My bag is taking forever.", kr: "가방이 진짜 안 나오네." },
      { speaker: "B", en: "I hope it's not lost.", kr: "분실된 거 아니겠지." },
      { speaker: "A", en: "Oh, there it is! Finally.", kr: "아, 저기 있다! 드디어." },
      { speaker: "B", en: "Great. Let's go home.", kr: "잘됐네. 집에 가자." }
    ]
  },
  {
    id: "conv-015",
    title: "버스 (Bus)",
    lines: [
      { speaker: "A", en: "Does this bus go to City Hall?", kr: "이 버스 시청 가나요?" },
      { speaker: "B", en: "No, you need to cross the street.", kr: "아뇨, 길 건너셔야 해요." },
      { speaker: "A", en: "Oh, thanks. Which number?", kr: "아, 고마워요. 몇 번 타야 해요?" },
      { speaker: "B", en: "Take number 402.", kr: "402번 타세요." },
      { speaker: "A", en: "Does it come often?", kr: "자주 오나요?" },
      { speaker: "B", en: "Every 10 minutes.", kr: "10분마다 와요." }
    ]
  },

  // ==================================================
  // 4. 회사 & 비즈니스 (Business)
  // ==================================================
  {
    id: "conv-016",
    title: "회의 (Meeting)",
    lines: [
      { speaker: "A", en: "Are you free this afternoon?", kr: "오늘 오후에 시간 돼?" },
      { speaker: "B", en: "Let me check. How about 3?", kr: "확인해 볼게. 3시 어때?" },
      { speaker: "A", en: "Can we do 3:30 instead?", kr: "3시 반으로 해도 될까?" },
      { speaker: "B", en: "Works for me. Where?", kr: "난 좋아. 어디서?" },
      { speaker: "A", en: "Meeting room B. I'll send an invite.", kr: "회의실 B. 초대장 보낼게." },
      { speaker: "B", en: "Okay. See you then.", kr: "알겠어. 그때 봐." }
    ]
  },
  {
    id: "conv-017",
    title: "야근 (Overtime)",
    lines: [
      { speaker: "A", en: "Still working? It's late.", kr: "아직 일해? 늦었어." },
      { speaker: "B", en: "I have a deadline tomorrow.", kr: "내일 마감이 있어서." },
      { speaker: "A", en: "Need any help?", kr: "도와줄 거 있어?" },
      { speaker: "B", en: "Thanks, but I'm almost done.", kr: "고맙지만 거의 다 했어." },
      { speaker: "A", en: "Okay, don't work too hard.", kr: "그래, 너무 무리하지 마." },
      { speaker: "B", en: "I'm leaving soon. Good night.", kr: "곧 갈 거야. 잘 가." }
    ]
  },
  {
    id: "conv-018",
    title: "휴가 (Day Off)",
    lines: [
      { speaker: "A", en: "Can I talk to you for a sec?", kr: "잠깐 얘기 좀 할 수 있을까?" },
      { speaker: "B", en: "Sure. What's up?", kr: "그럼. 무슨 일이야?" },
      { speaker: "A", en: "I need next Friday off.", kr: "다음 주 금요일에 쉬어야 해서." },
      { speaker: "B", en: "Everything okay?", kr: "무슨 일 있어?" },
      { speaker: "A", en: "Just a family event.", kr: "그냥 가족 행사가 있어서." },
      { speaker: "B", en: "No problem. Put it on the calendar.", kr: "문제없어. 캘린더에 올려놔." }
    ]
  },
  {
    id: "conv-019",
    title: "기기 고장 (Broken)",
    lines: [
      { speaker: "A", en: "The printer is jammed again.", kr: "프린터 또 종이 걸렸어." },
      { speaker: "B", en: "Seriously? It's so old.", kr: "진짜? 너무 낡았어." },
      { speaker: "A", en: "I can't fix it this time.", kr: "이번엔 못 고치겠어." },
      { speaker: "B", en: "We should call IT.", kr: "IT 팀 불러야겠다." },
      { speaker: "A", en: "I'll call them now.", kr: "지금 전화할게." },
      { speaker: "B", en: "Let me know when it's fixed.", kr: "고쳐지면 알려줘." }
    ]
  },
  {
    id: "conv-020",
    title: "승진 (Promotion)",
    lines: [
      { speaker: "A", en: "Congrats on your promotion!", kr: "승진 축하해!" },
      { speaker: "B", en: "Thanks! I'm so happy.", kr: "고마워! 진짜 기분 좋아." },
      { speaker: "A", en: "You totally deserve it.", kr: "넌 받을 자격 있어." },
      { speaker: "B", en: "I couldn't have done it without you.", kr: "네 덕분이야." },
      { speaker: "A", en: "Drinks on me tonight.", kr: "오늘 술은 내가 살게." },
      { speaker: "B", en: "Let's go!", kr: "가자!" }
    ]
  },

  // ==================================================
  // 5. 쇼핑 & 서비스 (Shopping)
  // ==================================================
  {
    id: "conv-021",
    title: "사이즈 (Size)",
    lines: [
      { speaker: "A", en: "Do you have this in Medium?", kr: "이거 미디엄 있어요?" },
      { speaker: "B", en: "Let me check the back.", kr: "창고 확인해 볼게요." },
      { speaker: "A", en: "Thanks. Large is too big.", kr: "감사해요. 라지는 너무 커서요." },
      { speaker: "B", en: "We have one left.", kr: "하나 남았네요." },
      { speaker: "A", en: "Can I try it on?", kr: "입어봐도 될까요?" },
      { speaker: "B", en: "Sure. The fitting room is over there.", kr: "네. 탈의실 저쪽입니다." }
    ]
  },
  {
    id: "conv-022",
    title: "반품 (Return)",
    lines: [
      { speaker: "A", en: "I'd like to return this.", kr: "이거 반품하고 싶어요." },
      { speaker: "B", en: "Is there a problem with it?", kr: "문제가 있나요?" },
      { speaker: "A", en: "No, I just changed my mind.", kr: "아뇨, 그냥 마음이 바뀌어서요." },
      { speaker: "B", en: "Do you have the receipt?", kr: "영수증 있으세요?" },
      { speaker: "A", en: "Yes, here it is.", kr: "네, 여기요." },
      { speaker: "B", en: "Okay. I'll refund it to your card.", kr: "네. 카드 취소해 드릴게요." }
    ]
  },
  {
    id: "conv-023",
    title: "흥정 (Discount)",
    lines: [
      { speaker: "A", en: "How much is this?", kr: "이거 얼마예요?" },
      { speaker: "B", en: "It's 50 dollars.", kr: "50달러입니다." },
      { speaker: "A", en: "That's a bit pricey. Any discount?", kr: "좀 비싸네요. 할인 안 돼요?" },
      { speaker: "B", en: "I can do 40 for cash.", kr: "현금이면 40에 드릴게요." },
      { speaker: "A", en: "Can you do 35?", kr: "35는 안 돼요?" },
      { speaker: "B", en: "Okay, deal. Just for you.", kr: "알겠어요. 손님한테만 드리는 거예요." }
    ]
  },
  {
    id: "conv-024",
    title: "장보기 (Grocery)",
    lines: [
      { speaker: "A", en: "We're out of milk.", kr: "우리 우유 다 떨어졌어." },
      { speaker: "B", en: "I'll stop by the store later.", kr: "나중에 마트 들를게." },
      { speaker: "A", en: "Get some eggs too.", kr: "달걀도 좀 사와." },
      { speaker: "B", en: "Sure. Anything else?", kr: "알겠어. 또 뭐?" },
      { speaker: "A", en: "Texting you the list.", kr: "리스트 문자로 보낼게." },
      { speaker: "B", en: "Okay. See you soon.", kr: "오케이. 이따 봐." }
    ]
  },
  {
    id: "conv-025",
    title: "선물 (Gift)",
    lines: [
      { speaker: "A", en: "I need a gift for my dad.", kr: "아빠 선물 사야 돼." },
      { speaker: "B", en: "What does he like?", kr: "뭐 좋아하시는데?" },
      { speaker: "A", en: "He loves hiking.", kr: "등산 좋아하셔." },
      { speaker: "B", en: "How about a backpack?", kr: "배낭은 어때?" },
      { speaker: "A", en: "Good idea.", kr: "좋은 생각이다." },
      { speaker: "B", en: "Let's go check the outdoor shop.", kr: "아웃도어 매장 가보자." }
    ]
  },

  // ==================================================
  // 6. 건강 & 운동 (Health)
  // ==================================================
  {
    id: "conv-026",
    title: "아픔 (Sick)",
    lines: [
      { speaker: "A", en: "You look pale. You okay?", kr: "너 창백해. 괜찮아?" },
      { speaker: "B", en: "I think I caught a cold.", kr: "감기 걸린 것 같아." },
      { speaker: "A", en: "Go home and rest.", kr: "집에 가서 쉬어." },
      { speaker: "B", en: "I have too much work.", kr: "할 일이 너무 많아." },
      { speaker: "A", en: "Health comes first.", kr: "건강이 우선이지." },
      { speaker: "B", en: "You're right. I'll leave early.", kr: "네 말이 맞아. 일찍 가야겠다." }
    ]
  },
  {
    id: "conv-027",
    title: "약국 (Medicine)",
    lines: [
      { speaker: "A", en: "I have a sore throat.", kr: "목이 아파요." },
      { speaker: "B", en: "How long has it been?", kr: "얼마나 됐나요?" },
      { speaker: "A", en: "Since yesterday. It hurts.", kr: "어제부터요. 아파요." },
      { speaker: "B", en: "Take this every 4 hours.", kr: "이걸 4시간마다 드세요." },
      { speaker: "A", en: "Will it make me sleepy?", kr: "먹으면 졸린가요?" },
      { speaker: "B", en: "No, it's non-drowsy.", kr: "아뇨, 졸음 성분 없습니다." }
    ]
  },
  {
    id: "conv-028",
    title: "운동 (Gym)",
    lines: [
      { speaker: "A", en: "Can you spot me?", kr: "보조 좀 해줄 수 있어?" },
      { speaker: "B", en: "Sure. How many reps?", kr: "그럼. 몇 개 하게?" },
      { speaker: "A", en: "Aiming for 10.", kr: "10개 목표야." },
      { speaker: "B", en: "I got you.", kr: "내가 잡아줄게." },
      { speaker: "A", en: "Thanks. That was heavy.", kr: "고마워. 진짜 무겁네." },
      { speaker: "B", en: "Good form though.", kr: "그래도 자세 좋았어." }
    ]
  },
  {
    id: "conv-029",
    title: "스트레스 (Stress)",
    lines: [
      { speaker: "A", en: "I'm so stressed out.", kr: "나 스트레스 너무 받아." },
      { speaker: "B", en: "You need a break.", kr: "쉬어야 해." },
      { speaker: "A", en: "No time for that.", kr: "그럴 시간 없어." },
      { speaker: "B", en: "Just take a short walk.", kr: "잠깐 산책이라도 해." },
      { speaker: "A", en: "Maybe I will.", kr: "그래야겠다." },
      { speaker: "B", en: "It'll clear your head.", kr: "머리가 맑아질 거야." }
    ]
  },
  {
    id: "conv-030",
    title: "다이어트 (Diet)",
    lines: [
      { speaker: "A", en: "I'm cutting carbs.", kr: "나 탄수화물 줄이고 있어." },
      { speaker: "B", en: "Are you on a diet?", kr: "다이어트해?" },
      { speaker: "A", en: "Yeah, my jeans are tight.", kr: "응, 청바지가 껴서." },
      { speaker: "B", en: "You look fine to me.", kr: "내가 보기엔 괜찮은데." },
      { speaker: "A", en: "I want to be healthier.", kr: "더 건강해지고 싶어서." },
      { speaker: "B", en: "Good for you.", kr: "잘 생각했네." }
    ]
  },

  // ==================================================
  // 7. 감정 (Emotions)
  // ==================================================
  {
    id: "conv-031",
    title: "화남 (Angry)",
    lines: [
      { speaker: "A", en: "My neighbor is so loud.", kr: "옆집 진짜 시끄러워." },
      { speaker: "B", en: "At this hour? Seriously?", kr: "이 시간에? 진짜?" },
      { speaker: "A", en: "It's driving me crazy.", kr: "미쳐버리겠어." },
      { speaker: "B", en: "You should complain.", kr: "항의해야지." },
      { speaker: "A", en: "I did. They don't care.", kr: "했어. 신경도 안 써." },
      { speaker: "B", en: "That's terrible.", kr: "최악이다." }
    ]
  },
  {
    id: "conv-032",
    title: "위로 (Comfort)",
    lines: [
      { speaker: "A", en: "I messed up my presentation.", kr: "프레젠테이션 망쳤어." },
      { speaker: "B", en: "It happens. Don't worry.", kr: "그럴 수 있어. 걱정 마." },
      { speaker: "A", en: "Everyone was staring.", kr: "다들 쳐다봤단 말이야." },
      { speaker: "B", en: "You're overthinking it.", kr: "너무 깊게 생각하는 거야." },
      { speaker: "A", en: "Thanks. I needed that.", kr: "고마워. 위로가 되네." },
      { speaker: "B", en: "Cheer up! Let's eat.", kr: "기운 내! 밥 먹자." }
    ]
  },
  {
    id: "conv-033",
    title: "당첨 (Lottery)",
    lines: [
      { speaker: "A", en: "I won the lottery!", kr: "나 복권 당첨됐어!" },
      { speaker: "B", en: "No way! Really?", kr: "말도 안 돼! 진짜?" },
      { speaker: "A", en: "Look at the ticket.", kr: "이 티켓 봐봐." },
      { speaker: "B", en: "Oh my god. That's amazing.", kr: "맙소사. 대박이다." },
      { speaker: "A", en: "I can't believe it.", kr: "믿기지가 않아." },
      { speaker: "B", en: "Dinner's on you!", kr: "저녁은 네가 쏴!" }
    ]
  },
  {
    id: "conv-034",
    title: "고민 (Decision)",
    lines: [
      { speaker: "A", en: "Which phone should I buy?", kr: "어떤 폰 살까?" },
      { speaker: "B", en: "Can't decide?", kr: "결정 못 했어?" },
      { speaker: "A", en: "This one has a better camera.", kr: "이게 카메라는 더 좋아." },
      { speaker: "B", en: "But the other one is cheaper.", kr: "근데 저게 더 싸잖아." },
      { speaker: "A", en: "True. I'll go with the cheaper one.", kr: "맞아. 싼 걸로 할래." },
      { speaker: "B", en: "Good choice.", kr: "좋은 선택이야." }
    ]
  },
  {
    id: "conv-035",
    title: "헤어짐 (Bye)",
    lines: [
      { speaker: "A", en: "It was great seeing you.", kr: "봐서 정말 좋았어." },
      { speaker: "B", en: "Time flew by.", kr: "시간 진짜 빨리 갔다." },
      { speaker: "A", en: "I gotta go now.", kr: "나 이제 가야 돼." },
      { speaker: "B", en: "Get home safe.", kr: "조심히 들어가." },
      { speaker: "A", en: "Let's keep in touch.", kr: "연락하자." },
      { speaker: "B", en: "See you soon!", kr: "또 봐!" }
    ]
  },

  // ==================================================
  // 8. 테크 & 미디어 (Tech)
  // ==================================================
  {
    id: "conv-036",
    title: "와이파이 (Wi-Fi)",
    lines: [
      { speaker: "A", en: "Is the Wi-Fi down?", kr: "와이파이 안 돼?" },
      { speaker: "B", en: "Yeah, it's not working.", kr: "응, 안 되네." },
      { speaker: "A", en: "I restarted it.", kr: "재부팅 해봤는데." },
      { speaker: "B", en: "Still nothing?", kr: "아직도 안 돼?" },
      { speaker: "A", en: "Nope. I'll use my data.", kr: "어. 데이터 써야겠다." },
      { speaker: "B", en: "Can I use your hotspot?", kr: "나도 네 핫스팟 좀 써도 돼?" }
    ]
  },
  {
    id: "conv-037",
    title: "새 폰 (New Phone)",
    lines: [
      { speaker: "A", en: "Did you see the new iPhone?", kr: "새 아이폰 봤어?" },
      { speaker: "B", en: "Yeah, looks nice but pricey.", kr: "응, 좋은데 비싸더라." },
      { speaker: "A", en: "I want to upgrade.", kr: "나 바꾸고 싶어." },
      { speaker: "B", en: "Didn't you just buy yours?", kr: "너 산 지 얼마 안 됐잖아?" },
      { speaker: "A", en: "But the camera is better.", kr: "근데 카메라가 더 좋대." },
      { speaker: "B", en: "You're addicted.", kr: "너 중독이야." }
    ]
  },
  {
    id: "conv-038",
    title: "넷플릭스 (Netflix)",
    lines: [
      { speaker: "A", en: "Need something to watch.", kr: "뭐 볼 거 없어?" },
      { speaker: "B", en: "Seen 'The Glory'?", kr: "'더 글로리' 봤어?" },
      { speaker: "A", en: "No, is it good?", kr: "아니, 재밌어?" },
      { speaker: "B", en: "It's crazy good.", kr: "진짜 재밌어." },
      { speaker: "A", en: "Is it scary?", kr: "무서워?" },
      { speaker: "B", en: "Not really. Just watch it.", kr: "별로. 그냥 봐봐." }
    ]
  },
  {
    id: "conv-039",
    title: "SNS 끊기 (Social Media)",
    lines: [
      { speaker: "A", en: "Did you see my post?", kr: "내 게시물 봤어?" },
      { speaker: "B", en: "No, I deleted Instagram.", kr: "아니, 나 인스타 지웠어." },
      { speaker: "A", en: "Really? Why?", kr: "정말? 왜?" },
      { speaker: "B", en: "It was wasting too much of my time.", kr: "시간 너무 뺏겨서." },
      { speaker: "A", en: "I should do that too.", kr: "나도 그래야 하는데." },
      { speaker: "B", en: "Try it. It's refreshing.", kr: "해봐. 기분 좋아." }
    ]
  },
  {
    id: "conv-040",
    title: "사진 공유 (Sharing)",
    lines: [
      { speaker: "A", en: "Great lighting here.", kr: "여기 조명 좋다." },
      { speaker: "B", en: "Let's take a selfie.", kr: "셀카 찍자." },
      { speaker: "A", en: "How does it look?", kr: "어때?" },
      { speaker: "B", en: "Looks good. Send it to me.", kr: "잘 나왔네. 보내줘." },
      { speaker: "A", en: "Airdrop okay?", kr: "에어드랍 돼?" },
      { speaker: "B", en: "Yeah, go ahead.", kr: "응, 보내." }
    ]
  },

  // ==================================================
  // 9. 문제 상황 (Problems)
  // ==================================================
  {
    id: "conv-041",
    title: "지갑 분실 (Wallet)",
    lines: [
      { speaker: "A", en: "I lost my wallet.", kr: "나 지갑 잃어버렸어." },
      { speaker: "B", en: "Check your bag.", kr: "가방 확인해 봐." },
      { speaker: "A", en: "It's not there.", kr: "거기 없어." },
      { speaker: "B", en: "Where were you last?", kr: "마지막에 어디 있었어?" },
      { speaker: "A", en: "At the coffee shop.", kr: "커피숍에 있었어." },
      { speaker: "B", en: "Let's go back.", kr: "다시 가보자." }
    ]
  },
  {
    id: "conv-042",
    title: "차 고장 (Car)",
    lines: [
      { speaker: "A", en: "Car won't start.", kr: "시동이 안 걸려." },
      { speaker: "B", en: "Dead battery?", kr: "배터리 나갔어?" },
      { speaker: "A", en: "I think so.", kr: "그런 것 같아." },
      { speaker: "B", en: "I have jumper cables.", kr: "나 점프 케이블 있어." },
      { speaker: "A", en: "You're a lifesaver.", kr: "살았다." },
      { speaker: "B", en: "Pop the hood.", kr: "보닛 열어봐." }
    ]
  },
  {
    id: "conv-043",
    title: "소음 (Noise)",
    lines: [
      { speaker: "A", en: "The people upstairs are too loud.", kr: "윗집 너무 시끄러워." },
      { speaker: "B", en: "It's midnight.", kr: "자정인데 말이야." },
      { speaker: "A", en: "I'm gonna talk to them.", kr: "가서 말해야겠어." },
      { speaker: "B", en: "Don't fight.", kr: "싸우진 마." },
      { speaker: "A", en: "I'll be polite.", kr: "정중하게 할게." },
      { speaker: "B", en: "Good luck.", kr: "잘해봐." }
    ]
  },
  {
    id: "conv-044",
    title: "서비스 (Service)",
    lines: [
      { speaker: "A", en: "The food is taking forever.", kr: "음식 엄청 안 나오네." },
      { speaker: "B", en: "I know. 40 minutes.", kr: "그러게. 40분 됐어." },
      { speaker: "A", en: "The waiter is ignoring us.", kr: "웨이터가 우릴 무시해." },
      { speaker: "B", en: "Let's just leave.", kr: "그냥 가자." },
      { speaker: "A", en: "I lost my appetite.", kr: "입맛 떨어졌어." },
      { speaker: "B", en: "Me too.", kr: "나도." }
    ]
  },
  {
    id: "conv-045",
    title: "부탁 (Favor)",
    lines: [
      { speaker: "A", en: "Can you do me a favor?", kr: "부탁 하나만 들어줄래?" },
      { speaker: "B", en: "What is it?", kr: "뭔데?" },
      { speaker: "A", en: "Feed my cat this weekend?", kr: "주말에 우리 고양이 밥 좀 줄래?" },
      { speaker: "B", en: "Sure! I love cats.", kr: "그럼! 나 고양이 좋아해." },
      { speaker: "A", en: "Thanks so much.", kr: "진짜 고마워." },
      { speaker: "B", en: "No problem.", kr: "별거 아냐." }
    ]
  },

  // ==================================================
  // 10. 문화 (Culture)
  // ==================================================
  {
    id: "conv-046",
    title: "한국 음식 (K-Food)",
    lines: [
      { speaker: "A", en: "Tried Bibimbap?", kr: "비빔밥 먹어봤어?" },
      { speaker: "B", en: "No, is it good?", kr: "아니, 맛있어?" },
      { speaker: "A", en: "It's delicious. It's rice mixed with veggies.", kr: "맛있어. 밥에 야채를 넣고 비벼 먹는 거야." },
      { speaker: "B", en: "Is it spicy?", kr: "매워?" },
      { speaker: "A", en: "You can adjust how spicy it is.", kr: "매운 정도는 조절할 수 있어." },
      { speaker: "B", en: "I'll try it.", kr: "먹어볼게." }
    ]
  },
  {
    id: "conv-047",
    title: "케이팝 (K-Pop)",
    lines: [
      { speaker: "A", en: "You like BTS?", kr: "BTS 좋아해?" },
      { speaker: "B", en: "Yeah, I love them.", kr: "응, 완전 좋아해." },
      { speaker: "A", en: "Who's your bias?", kr: "최애가 누구야?" },
      { speaker: "B", en: "Probably V.", kr: "아마 뷔." },
      { speaker: "A", en: "He has a great voice.", kr: "목소리가 좋지." },
      { speaker: "B", en: "I want to see their concert.", kr: "콘서트 가보고 싶어." }
    ]
  },
  {
    id: "conv-048",
    title: "영화 (Movie)",
    lines: [
      { speaker: "A", en: "How was the movie?", kr: "영화 어땠어?" },
      { speaker: "B", en: "It was boring.", kr: "지루했어." },
      { speaker: "A", en: "Really? The trailer looked good.", kr: "진짜? 예고편은 좋던데." },
      { speaker: "B", en: "The plot was bad.", kr: "줄거리가 별로야." },
      { speaker: "A", en: "I'll skip it then.", kr: "그럼 안 봐야겠다." },
      { speaker: "B", en: "Save your money.", kr: "돈 아껴." }
    ]
  },
  {
    id: "conv-049",
    title: "새해 (New Year)",
    lines: [
      { speaker: "A", en: "Any New Year's resolutions?", kr: "새해 다짐 있어?" },
      { speaker: "B", en: "Learn Spanish.", kr: "스페인어 배우기." },
      { speaker: "A", en: "That's cool.", kr: "멋지네." },
      { speaker: "B", en: "What about you?", kr: "너는?" },
      { speaker: "A", en: "Quit smoking.", kr: "담배 끊기." },
      { speaker: "B", en: "You can do it.", kr: "할 수 있어." }
    ]
  },
  {
    id: "conv-050",
    title: "반려동물 (Pet)",
    lines: [
      { speaker: "A", en: "Is that your dog?", kr: "네 강아지야?" },
      { speaker: "B", en: "Yes, his name is Max.", kr: "응, 이름은 맥스야." },
      { speaker: "A", en: "He's so cute.", kr: "너무 귀엽다." },
      { speaker: "B", en: "He's my best friend.", kr: "내 가장 친한 친구야." },
      { speaker: "A", en: "I want a dog too.", kr: "나도 강아지 키우고 싶어." },
      { speaker: "B", en: "You should adopt one.", kr: "입양해 봐." }
    ]
  }
];
