// conversation.js
// 총 65개 주제, 각 6문장
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
      { speaker: "B", en: "Nice to meet you, Minho. I'm Sarah.", kr: "반가워요, 민호 씨. 저는 사라예요." },
      { speaker: "A", en: "I just joined the sales team last week.", kr: "지난주에 영업팀에 막 들어왔어요." },
      { speaker: "B", en: "Oh, welcome aboard! How are you liking it so far?", kr: "아, 환영해요! 지금까지는 어때요?" },
      { speaker: "A", en: "So far so good, but I'm still learning the ropes.", kr: "지금까진 좋아요. 그래도 아직 일 배우는 중이에요." },
      { speaker: "B", en: "Don't worry. You'll get the hang of it soon.", kr: "걱정 마요. 금방 익숙해질 거예요." }
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
      { speaker: "A", en: "Is that a camera? Are you into photography?", kr: "그거 카메라야? 너 사진 좋아해?" },
      { speaker: "B", en: "Yeah, I just picked it up as a hobby.", kr: "응, 얼마 전에 취미로 시작했어." },
      { speaker: "A", en: "Cool. Is it hard to learn?", kr: "멋지다. 배우기 어려워?" },
      { speaker: "B", en: "A little, but it's a lot of fun.", kr: "조금. 그래도 엄청 재밌어." },
      { speaker: "A", en: "I've been looking for a new hobby too.", kr: "나도 새로운 취미 찾고 있었는데." },
      { speaker: "B", en: "Then come take photos with me this weekend!", kr: "그럼 이번 주말에 같이 사진 찍으러 가자!" }
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
      { speaker: "A", en: "I'll get this. It's my treat.", kr: "이건 내가 낼게. 내가 쏘는 거야." },
      { speaker: "B", en: "No way. Let's split it.", kr: "안 돼. 나눠 내자." },
      { speaker: "A", en: "I insist. You paid last time.", kr: "진짜 내가 낼게. 저번에 네가 냈잖아." },
      { speaker: "B", en: "Okay, if you insist.", kr: "정 그렇다면 알겠어." },
      { speaker: "A", en: "The next one's on you.", kr: "다음엔 네가 사." },
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
      { speaker: "B", en: "Got it. It'll take about 30 minutes.", kr: "알겠어. 30분 정도 걸릴 거야." }
    ]
  },

  // ==================================================
  // 3. 여행 & 길찾기 (Travel)
  // ==================================================
  {
    id: "conv-011",
    title: "길 묻기 (Directions)",
    lines: [
      { speaker: "A", en: "Excuse me, how do I get to the subway station?", kr: "실례합니다, 지하철역 어떻게 가요?" },
      { speaker: "B", en: "Just go straight for two blocks.", kr: "두 블록만 쭉 가세요." },
      { speaker: "A", en: "And then do I turn left or right?", kr: "그다음엔 왼쪽이에요, 오른쪽이에요?" },
      { speaker: "B", en: "Turn left at the bank.", kr: "은행에서 왼쪽으로 도세요." },
      { speaker: "A", en: "Got it. Thanks so much!", kr: "알겠어요. 정말 고마워요!" },
      { speaker: "B", en: "No problem. You can't miss it.", kr: "별말씀을요. 금방 찾으실 거예요." }
    ]
  },
  {
    id: "conv-012",
    title: "체크인 (Check-in)",
    lines: [
      { speaker: "A", en: "Hi, I'd like to check in. It's under Lee.", kr: "안녕하세요, 체크인하려고요. 이(Lee) 이름으로 예약했어요." },
      { speaker: "B", en: "Sure. Can I see your ID, please?", kr: "네. 신분증 좀 보여주시겠어요?" },
      { speaker: "A", en: "Here you go. Is breakfast included?", kr: "여기요. 조식 포함인가요?" },
      { speaker: "B", en: "Yes, it is. Any room preference?", kr: "네, 포함입니다. 원하시는 객실 있으세요?" },
      { speaker: "A", en: "An ocean view, if possible.", kr: "가능하면 바다 전망으로요." },
      { speaker: "B", en: "No problem. Here's your key card.", kr: "알겠습니다. 여기 카드 키예요." }
    ]
  },
  {
    id: "conv-013",
    title: "사진 요청 (Photo)",
    lines: [
      { speaker: "A", en: "Excuse me, could you take a picture of us?", kr: "실례지만, 저희 사진 좀 찍어주실래요?" },
      { speaker: "B", en: "Sure. Do I just press this button?", kr: "그럼요. 이 버튼만 누르면 되나요?" },
      { speaker: "A", en: "Yes. Could you get the tower in the background?", kr: "네. 뒤에 타워 나오게 찍어주실 수 있어요?" },
      { speaker: "B", en: "Okay, say cheese! Let me take one more.", kr: "자, 치즈! 한 장 더 찍을게요." },
      { speaker: "A", en: "These look great. Thanks so much.", kr: "잘 나왔네요. 정말 감사해요." },
      { speaker: "B", en: "You're welcome. Enjoy your trip!", kr: "천만에요. 즐거운 여행 되세요!" }
    ]
  },
  {
    id: "conv-014",
    title: "수하물 찾기 (Baggage)",
    lines: [
      { speaker: "A", en: "Which carousel is our flight on?", kr: "우리 비행기 짐 몇 번 벨트에서 나와?" },
      { speaker: "B", en: "Number 4. It's right over there.", kr: "4번. 바로 저기야." },
      { speaker: "A", en: "Ugh, my bag is taking forever.", kr: "아, 내 가방 진짜 안 나오네." },
      { speaker: "B", en: "I hope it didn't get lost.", kr: "분실된 건 아니었으면 좋겠다." },
      { speaker: "A", en: "Oh, there it is! Finally.", kr: "아, 저기 있다! 드디어." },
      { speaker: "B", en: "Great. Let's grab a taxi.", kr: "잘됐다. 택시 잡자." }
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
      { speaker: "A", en: "Meeting room B. I'll send you an invite.", kr: "B 회의실. 캘린더 초대 보낼게." },
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
      { speaker: "A", en: "Do you have a sec?", kr: "잠깐 시간 괜찮으세요?" },
      { speaker: "B", en: "Sure. What's up?", kr: "그럼요. 무슨 일이에요?" },
      { speaker: "A", en: "Would it be okay if I took next Friday off?", kr: "다음 주 금요일에 하루 쉬어도 될까요?" },
      { speaker: "B", en: "Of course. Is everything okay?", kr: "물론이죠. 별일 없는 거죠?" },
      { speaker: "A", en: "Yeah, it's just a family thing.", kr: "네, 그냥 가족 일이 좀 있어서요." },
      { speaker: "B", en: "No problem. Just put it on the team calendar.", kr: "괜찮아요. 팀 캘린더에만 올려 줘요." }
    ]
  },
  {
    id: "conv-019",
    title: "기기 고장 (Broken)",
    lines: [
      { speaker: "A", en: "The printer is jammed again.", kr: "프린터 또 종이 걸렸어." },
      { speaker: "B", en: "Seriously? That thing is ancient.", kr: "진짜? 그거 너무 오래됐잖아." },
      { speaker: "A", en: "I can't fix it this time.", kr: "이번엔 나도 못 고치겠어." },
      { speaker: "B", en: "We should probably call IT.", kr: "IT팀 불러야 할 것 같아." },
      { speaker: "A", en: "I'll put in a ticket right now.", kr: "내가 지금 바로 요청 넣을게." },
      { speaker: "B", en: "Thanks. Let me know when it's working.", kr: "고마워. 다시 되면 알려줘." }
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
      { speaker: "A", en: "Good idea. He'd love that.", kr: "좋은 생각이다. 엄청 좋아하시겠다." },
      { speaker: "B", en: "Let's go check out the outdoor store.", kr: "아웃도어 매장 가보자." }
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
      { speaker: "A", en: "Hi, I have a sore throat.", kr: "안녕하세요, 목이 아파서 왔어요." },
      { speaker: "B", en: "How long has it been bothering you?", kr: "언제부터 그러셨어요?" },
      { speaker: "A", en: "Since yesterday. It hurts when I swallow.", kr: "어제부터요. 침 삼킬 때 아파요." },
      { speaker: "B", en: "Take one of these every four hours.", kr: "이거 4시간마다 한 알씩 드세요." },
      { speaker: "A", en: "Will it make me sleepy?", kr: "먹으면 졸린가요?" },
      { speaker: "B", en: "No, it's non-drowsy.", kr: "아뇨, 졸음 안 오는 약이에요." }
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
      { speaker: "A", en: "My neighbor's been blasting music all night.", kr: "옆집이 밤새 음악을 크게 틀어놨어." },
      { speaker: "B", en: "At this hour? Seriously?", kr: "이 시간에? 진짜?" },
      { speaker: "A", en: "It's driving me crazy.", kr: "미쳐버리겠어." },
      { speaker: "B", en: "Have you called the landlord?", kr: "집주인한테 연락해 봤어?" },
      { speaker: "A", en: "Twice. Nothing's changed.", kr: "두 번이나. 달라진 게 없어." },
      { speaker: "B", en: "Ugh, that's so frustrating.", kr: "아, 진짜 짜증 나겠다." }
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
      { speaker: "A", en: "Look! Here's the ticket.", kr: "봐봐! 이게 그 복권이야." },
      { speaker: "B", en: "Oh my god. That's amazing.", kr: "맙소사. 대박이다." },
      { speaker: "A", en: "I still can't believe it.", kr: "아직도 믿기지가 않아." },
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
      { speaker: "B", en: "Yeah, it's not working for me either.", kr: "응, 나도 안 되네." },
      { speaker: "A", en: "I already restarted the router.", kr: "공유기 이미 재부팅 해봤는데." },
      { speaker: "B", en: "Still nothing?", kr: "아직도 안 돼?" },
      { speaker: "A", en: "Nope. I'll just use my data.", kr: "응. 그냥 데이터 써야겠다." },
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
      { speaker: "A", en: "I need something to watch. Any ideas?", kr: "뭐 볼 거 없나? 추천 좀 해줘." },
      { speaker: "B", en: "Have you seen 'The Glory'?", kr: "'더 글로리' 봤어?" },
      { speaker: "A", en: "No, is it any good?", kr: "아니, 재밌어?" },
      { speaker: "B", en: "It's crazy good. I binged it.", kr: "진짜 재밌어. 나 몰아서 다 봤어." },
      { speaker: "A", en: "Is it scary?", kr: "무서워?" },
      { speaker: "B", en: "Not really. Just give it a try.", kr: "별로. 그냥 한번 봐봐." }
    ]
  },
  {
    id: "conv-039",
    title: "SNS 끊기 (Social Media)",
    lines: [
      { speaker: "A", en: "Did you see my post?", kr: "내 게시물 봤어?" },
      { speaker: "B", en: "No, I deleted Instagram.", kr: "아니, 나 인스타 지웠어." },
      { speaker: "A", en: "Really? Why?", kr: "정말? 왜?" },
      { speaker: "B", en: "It was wasting too much of my time.", kr: "시간을 너무 많이 뺏겨서." },
      { speaker: "A", en: "I should do that too.", kr: "나도 그래야 하는데." },
      { speaker: "B", en: "Try it. It feels so freeing.", kr: "해봐. 엄청 홀가분해." }
    ]
  },
  {
    id: "conv-040",
    title: "사진 공유 (Sharing)",
    lines: [
      { speaker: "A", en: "The lighting here is great.", kr: "여기 조명 진짜 좋다." },
      { speaker: "B", en: "Let's take a selfie.", kr: "셀카 찍자." },
      { speaker: "A", en: "How does it look?", kr: "어때?" },
      { speaker: "B", en: "Looks good. Send it to me.", kr: "잘 나왔네. 나한테 보내줘." },
      { speaker: "A", en: "Can I AirDrop it to you?", kr: "에어드롭으로 보내도 돼?" },
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
      { speaker: "A", en: "The people upstairs are way too loud.", kr: "윗집 너무 시끄러워." },
      { speaker: "B", en: "At midnight? That's so inconsiderate.", kr: "밤 12시에? 진짜 배려 없다." },
      { speaker: "A", en: "I'm gonna go talk to them.", kr: "올라가서 말 좀 해야겠어." },
      { speaker: "B", en: "Just don't start a fight.", kr: "싸우지는 마." },
      { speaker: "A", en: "Don't worry, I'll be polite.", kr: "걱정 마, 정중하게 말할게." },
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
      { speaker: "A", en: "Have you ever tried bibimbap?", kr: "비빔밥 먹어본 적 있어?" },
      { speaker: "B", en: "No, is it good?", kr: "아니, 맛있어?" },
      { speaker: "A", en: "It's so good. It's rice mixed with veggies.", kr: "진짜 맛있어. 밥에 야채 넣고 비벼 먹는 거야." },
      { speaker: "B", en: "Is it spicy?", kr: "매워?" },
      { speaker: "A", en: "You can adjust how spicy it is.", kr: "매운 정도는 조절할 수 있어." },
      { speaker: "B", en: "Sounds great. I'll give it a try.", kr: "좋다. 한번 먹어볼게." }
    ]
  },
  {
    id: "conv-047",
    title: "케이팝 (K-Pop)",
    lines: [
      { speaker: "A", en: "Are you into K-pop?", kr: "너 케이팝 좋아해?" },
      { speaker: "B", en: "Yeah, I've been obsessed with it lately.", kr: "응, 요즘 완전 빠졌어." },
      { speaker: "A", en: "Who's your favorite group?", kr: "제일 좋아하는 그룹이 누구야?" },
      { speaker: "B", en: "Honestly, there are too many to choose from.", kr: "솔직히 너무 많아서 못 고르겠어." },
      { speaker: "A", en: "Have you ever been to a concert?", kr: "콘서트 가본 적 있어?" },
      { speaker: "B", en: "Not yet, but it's on my bucket list.", kr: "아직. 근데 버킷리스트에 있어." }
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
  },

  // ==================================================
  // 11. 실전 필수 상황 (Essentials)
  // ==================================================
  {
    id: "conv-051",
    title: "못 알아들었을 때 (Sorry?)",
    lines: [
      { speaker: "A", en: "Excuse me, does this train go downtown?", kr: "실례합니다, 이 기차 시내로 가요?" },
      { speaker: "B", en: "Yes, but you need to transfer at Central Station.", kr: "네, 근데 센트럴 역에서 갈아타야 해요." },
      { speaker: "A", en: "Sorry, could you say that again a little slower?", kr: "죄송한데, 조금만 천천히 다시 말해 주시겠어요?" },
      { speaker: "B", en: "Sure. Get off at Central, then transfer.", kr: "그럼요. 센트럴에서 내려서 갈아타세요." },
      { speaker: "A", en: "Got it. How many stops is that?", kr: "알겠어요. 거기까지 몇 정거장이에요?" },
      { speaker: "B", en: "Just three stops from here.", kr: "여기서 딱 세 정거장이에요." }
    ]
  },
  {
    id: "conv-052",
    title: "식당 주문 (Ordering)",
    lines: [
      { speaker: "A", en: "Are you ready to order?", kr: "주문하시겠어요?" },
      { speaker: "B", en: "Yes, I'll have the chicken salad, please.", kr: "네, 치킨 샐러드로 할게요." },
      { speaker: "A", en: "Sure. Anything to drink?", kr: "네. 음료는요?" },
      { speaker: "B", en: "Just water is fine. Oh, and no onions, please.", kr: "그냥 물이면 돼요. 아, 그리고 양파는 빼 주세요." },
      { speaker: "A", en: "No problem. Anything else?", kr: "알겠습니다. 더 필요하신 건요?" },
      { speaker: "B", en: "That's it for now, thanks.", kr: "일단 그거면 돼요, 감사해요." }
    ]
  },
  {
    id: "conv-053",
    title: "전화 통화 (Phone Call)",
    lines: [
      { speaker: "A", en: "Hi, this is Minji. Can I speak to David?", kr: "안녕하세요, 민지인데요. 데이비드 씨랑 통화할 수 있을까요?" },
      { speaker: "B", en: "Sorry, he's not in right now.", kr: "죄송한데, 지금 자리에 안 계세요." },
      { speaker: "A", en: "Oh, okay. Could you ask him to call me back?", kr: "아, 그렇군요. 다시 전화 좀 달라고 전해 주시겠어요?" },
      { speaker: "B", en: "Sure. What's your number?", kr: "그럼요. 번호가 어떻게 되세요?" },
      { speaker: "A", en: "It's 555-0123. Thanks a lot.", kr: "555-0123이에요. 정말 감사해요." },
      { speaker: "B", en: "No problem. I'll let him know.", kr: "별말씀을요. 전해 드릴게요." }
    ]
  },
  {
    id: "conv-054",
    title: "지각 사과 (Running Late)",
    lines: [
      { speaker: "A", en: "I'm so sorry I'm late. Traffic was terrible.", kr: "늦어서 정말 죄송해요. 차가 엄청 막혔어요." },
      { speaker: "B", en: "Don't worry about it. We just got started.", kr: "걱정 마세요. 방금 시작했어요." },
      { speaker: "A", en: "Did I miss anything important?", kr: "중요한 거 놓친 거 있어요?" },
      { speaker: "B", en: "Not really. We're still on the first item.", kr: "별로요. 아직 첫 번째 안건이에요." },
      { speaker: "A", en: "Okay, good. It won't happen again.", kr: "다행이네요. 다시는 이런 일 없을 거예요." },
      { speaker: "B", en: "It's fine, really. Grab a seat.", kr: "진짜 괜찮아요. 앉으세요." }
    ]
  },
  {
    id: "conv-055",
    title: "초대와 거절 (Invitation)",
    lines: [
      { speaker: "A", en: "Hey, we're having a barbecue on Saturday. Want to come?", kr: "야, 우리 토요일에 바비큐 하는데, 올래?" },
      { speaker: "B", en: "Oh, I'd love to, but I already have plans.", kr: "아, 진짜 가고 싶은데 벌써 약속이 있어." },
      { speaker: "A", en: "That's too bad. Maybe next time?", kr: "아쉽다. 그럼 다음에?" },
      { speaker: "B", en: "Definitely. Thanks for inviting me, though.", kr: "당연하지. 그래도 초대해 줘서 고마워." },
      { speaker: "A", en: "Of course. I'll let you know about the next one.", kr: "뭘. 다음번에 하면 알려 줄게." },
      { speaker: "B", en: "Sounds great. Have fun this weekend!", kr: "좋아. 주말 재밌게 보내!" }
    ]
  },
  {
    id: "conv-056",
    title: "택시 타기 (Taxi)",
    lines: [
      { speaker: "A", en: "Hi, can you take me to the airport?", kr: "안녕하세요, 공항까지 가 주실 수 있어요?" },
      { speaker: "B", en: "Sure. Which terminal?", kr: "그럼요. 몇 터미널이세요?" },
      { speaker: "A", en: "Terminal 2, please. How long will it take?", kr: "2터미널이요. 얼마나 걸려요?" },
      { speaker: "B", en: "About thirty minutes, depending on traffic.", kr: "차 막히는 거에 따라 다르지만 30분 정도요." },
      { speaker: "A", en: "Okay. Can I pay by card?", kr: "알겠어요. 카드로 결제해도 돼요?" },
      { speaker: "B", en: "Yes, card is fine.", kr: "네, 카드 돼요." }
    ]
  },
  {
    id: "conv-057",
    title: "병원 예약 (Appointment)",
    lines: [
      { speaker: "A", en: "Hi, I'd like to make an appointment, please.", kr: "안녕하세요, 진료 예약하고 싶은데요." },
      { speaker: "B", en: "Sure. What's the reason for your visit?", kr: "네. 어떤 일로 오시는 거예요?" },
      { speaker: "A", en: "I've had a bad cough for about a week.", kr: "일주일쯤 기침이 심해서요." },
      { speaker: "B", en: "Okay. Can you come in tomorrow at ten?", kr: "알겠습니다. 내일 10시에 오실 수 있어요?" },
      { speaker: "A", en: "Do you have anything later in the day?", kr: "좀 더 늦은 시간은 없나요?" },
      { speaker: "B", en: "We have an opening at 3:30. Does that work?", kr: "3시 반에 자리가 있어요. 괜찮으세요?" }
    ]
  },
  {
    id: "conv-058",
    title: "입국 심사 (Immigration)",
    lines: [
      { speaker: "A", en: "What's the purpose of your visit?", kr: "방문 목적이 뭐예요?" },
      { speaker: "B", en: "I'm here on vacation.", kr: "휴가차 왔어요." },
      { speaker: "A", en: "How long are you staying?", kr: "얼마나 머무르실 거예요?" },
      { speaker: "B", en: "About a week.", kr: "일주일 정도요." },
      { speaker: "A", en: "Where will you be staying?", kr: "어디서 지내실 거예요?" },
      { speaker: "B", en: "At a hotel downtown. Here's my reservation.", kr: "시내에 있는 호텔이요. 여기 예약 확인서요." }
    ]
  },
  {
    id: "conv-059",
    title: "호텔 문제 (Room Problem)",
    lines: [
      { speaker: "A", en: "Hi, I'm calling from room 512.", kr: "안녕하세요, 512호인데요." },
      { speaker: "B", en: "Yes, how can I help you?", kr: "네, 무엇을 도와드릴까요?" },
      { speaker: "A", en: "The air conditioner isn't working.", kr: "에어컨이 안 돼요." },
      { speaker: "B", en: "I'm sorry about that. I'll send someone up right away.", kr: "죄송합니다. 바로 사람 올려 보낼게요." },
      { speaker: "A", en: "Thanks. Could I also get some extra towels?", kr: "고마워요. 수건도 좀 더 받을 수 있을까요?" },
      { speaker: "B", en: "Of course. I'll have those brought up too.", kr: "물론이죠. 같이 갖다 드릴게요." }
    ]
  },
  {
    id: "conv-060",
    title: "식당 예약 (Reservation)",
    lines: [
      { speaker: "A", en: "Hi, I'd like to book a table for Friday night.", kr: "안녕하세요, 금요일 저녁에 자리 예약하고 싶어요." },
      { speaker: "B", en: "Sure. For how many people?", kr: "네. 몇 분이세요?" },
      { speaker: "A", en: "Four people, around seven o'clock.", kr: "네 명이고, 7시쯤이요." },
      { speaker: "B", en: "Let me check... We have a table at 7:30.", kr: "확인해 볼게요... 7시 반에 자리가 있어요." },
      { speaker: "A", en: "That works. It's under Kim.", kr: "좋아요. 김으로 예약해 주세요." },
      { speaker: "B", en: "Perfect. See you on Friday!", kr: "좋습니다. 금요일에 뵐게요!" }
    ]
  },
  {
    id: "conv-061",
    title: "칭찬하기 (Compliment)",
    lines: [
      { speaker: "A", en: "I love your jacket! Where did you get it?", kr: "재킷 너무 예쁘다! 어디서 샀어?" },
      { speaker: "B", en: "Thanks! I got it on sale online.", kr: "고마워! 온라인에서 세일할 때 샀어." },
      { speaker: "A", en: "It looks really good on you.", kr: "너한테 진짜 잘 어울린다." },
      { speaker: "B", en: "Aw, that's so nice of you to say.", kr: "아, 그렇게 말해 줘서 고마워." },
      { speaker: "A", en: "Seriously. The color is perfect for you.", kr: "진짜야. 색깔이 너한테 딱이야." },
      { speaker: "B", en: "Thanks, you just made my day!", kr: "고마워, 덕분에 기분 최고야!" }
    ]
  },
  {
    id: "conv-062",
    title: "도움 요청 (Asking for Help)",
    lines: [
      { speaker: "A", en: "Excuse me, could you help me for a second?", kr: "실례합니다, 잠깐 좀 도와주실 수 있어요?" },
      { speaker: "B", en: "Sure. What do you need?", kr: "그럼요. 뭐가 필요하세요?" },
      { speaker: "A", en: "I can't figure out how to use this ticket machine.", kr: "이 발권기 어떻게 쓰는지 모르겠어요." },
      { speaker: "B", en: "Oh, it's a bit tricky. Tap here first.", kr: "아, 좀 헷갈리죠. 먼저 여기를 누르세요." },
      { speaker: "A", en: "Ah, I see. Then I just put my card in?", kr: "아, 알겠어요. 그다음에 카드만 넣으면 돼요?" },
      { speaker: "B", en: "Yep, that's it. You're all set.", kr: "네, 그거예요. 다 됐어요." }
    ]
  },
  {
    id: "conv-063",
    title: "면접 (Job Interview)",
    lines: [
      { speaker: "A", en: "Thanks for coming in today. Did you find us okay?", kr: "오늘 와 주셔서 감사해요. 찾아오시는 데 괜찮으셨어요?" },
      { speaker: "B", en: "Yes, thanks. It was easy to find.", kr: "네, 감사합니다. 찾기 쉬웠어요." },
      { speaker: "A", en: "Great. So, tell me a little about yourself.", kr: "다행이네요. 그럼, 본인 소개를 좀 해 주시겠어요?" },
      { speaker: "B", en: "Sure. I've worked in marketing for five years.", kr: "네. 저는 마케팅 분야에서 5년 일했어요." },
      { speaker: "A", en: "What made you apply for this position?", kr: "이 자리에 지원하신 이유가 뭐예요?" },
      { speaker: "B", en: "I'm looking for a new challenge, and I love your products.", kr: "새로운 도전을 해 보고 싶었고, 이 회사 제품을 정말 좋아해서요." }
    ]
  },
  {
    id: "conv-064",
    title: "공항 체크인 (Flight Check-in)",
    lines: [
      { speaker: "A", en: "Hi, can I see your passport, please?", kr: "안녕하세요, 여권 좀 보여 주시겠어요?" },
      { speaker: "B", en: "Here you go. Can I get a window seat?", kr: "여기요. 창가 자리로 받을 수 있을까요?" },
      { speaker: "A", en: "Sure, I have one left. Are you checking any bags?", kr: "네, 하나 남아 있네요. 부치실 짐 있으세요?" },
      { speaker: "B", en: "Just this one. What time does boarding start?", kr: "이거 하나요. 탑승은 몇 시에 시작해요?" },
      { speaker: "A", en: "At 2:15, from Gate 23.", kr: "2시 15분에 23번 게이트에서요." },
      { speaker: "B", en: "Great, thank you so much.", kr: "좋아요, 정말 감사해요." }
    ]
  },
  {
    id: "conv-065",
    title: "은행 (Bank)",
    lines: [
      { speaker: "A", en: "Hi, I'd like to open a bank account.", kr: "안녕하세요, 계좌를 개설하고 싶어요." },
      { speaker: "B", en: "Sure. Do you have a photo ID with you?", kr: "네. 사진 있는 신분증 가지고 오셨어요?" },
      { speaker: "A", en: "Yes, here's my passport.", kr: "네, 여기 여권이요." },
      { speaker: "B", en: "Thanks. Would you like a checking or savings account?", kr: "감사합니다. 입출금 계좌로 하실래요, 저축 계좌로 하실래요?" },
      { speaker: "A", en: "Checking, please. Is there a monthly fee?", kr: "입출금 계좌요. 월 수수료가 있어요?" },
      { speaker: "B", en: "Not if you keep at least 500 dollars in it.", kr: "잔액을 최소 500달러 유지하시면 없어요." }
    ]
  }
];
