// conversation.js
// 총 68개 주제, 각 6~8문장 · 실제 상황별 10개 카테고리 (category 필드: 쉐도잉 목록 상황별 보기에 사용)
// 학습 포인트: 실제 상황에서 바로 쓰는 짧은 원어민 회화체

const conversationData = [
  // ==================================================
  // 1. 만남·일상 (Daily Life)
  // ==================================================
  {
    id: "conv-001",
    title: "자기소개 (Intro)",
    category: "만남·일상",
    lines: [
      { speaker: "A", en: "Hi, I don't think we've met. I'm Minho.", kr: "안녕하세요, 처음 뵙는 것 같네요. 민호예요." },
      { speaker: "B", en: "Oh, hi Minho! I'm Sarah, from marketing.", kr: "아, 안녕하세요 민호 씨! 저는 마케팅팀 사라예요." },
      { speaker: "A", en: "Nice to meet you. I just started on the sales team.", kr: "반가워요. 영업팀에 막 들어왔어요." },
      { speaker: "B", en: "Welcome aboard! How's your first week going?", kr: "환영해요! 첫 주는 어때요?" },
      { speaker: "A", en: "Pretty good, but I'm still learning the ropes.", kr: "꽤 좋아요. 그래도 아직 일 배우는 중이에요." },
      { speaker: "B", en: "You'll get the hang of it. Where are you from originally?", kr: "금방 익숙해질 거예요. 원래 어디 출신이에요?" },
      { speaker: "A", en: "I'm from Seoul. I moved here about a month ago.", kr: "서울에서 왔어요. 한 달 전쯤 이사 왔어요." },
      { speaker: "B", en: "Oh, cool! Let me know if you need anything.", kr: "오, 멋지네요! 필요한 거 있으면 말해요." }
    ]
  },
  {
    id: "conv-002",
    title: "안부 묻기 (Catching Up)",
    category: "만남·일상",
    lines: [
      { speaker: "A", en: "Jiwoo! Long time no see. How've you been?", kr: "지우야! 진짜 오랜만이다. 어떻게 지냈어?" },
      { speaker: "B", en: "Hey! I've been good, just super busy with work.", kr: "야! 잘 지냈지, 그냥 일 때문에 엄청 바빴어." },
      { speaker: "A", en: "I hear you. Are you still at the same company?", kr: "무슨 말인지 알아. 아직 같은 회사 다녀?" },
      { speaker: "B", en: "Actually, I switched jobs in March. How about you?", kr: "사실 3월에 이직했어. 너는?" },
      { speaker: "A", en: "Same old, same old. But I moved to Brooklyn.", kr: "나야 늘 똑같지. 근데 브루클린으로 이사했어." },
      { speaker: "B", en: "No way! We should catch up properly sometime.", kr: "진짜? 언제 제대로 한번 얘기 좀 하자." },
      { speaker: "A", en: "Totally. Are you free for dinner next Thursday?", kr: "완전. 다음 주 목요일 저녁 시간 돼?" },
      { speaker: "B", en: "Thursday works. Text me the details!", kr: "목요일 좋아. 자세한 건 문자 줘!" }
    ]
  },
  {
    id: "conv-003",
    title: "주말 계획 (Weekend)",
    category: "만남·일상",
    lines: [
      { speaker: "A", en: "Got any plans for the weekend?", kr: "주말에 뭐 계획 있어?" },
      { speaker: "B", en: "Not really, just chilling at home. You?", kr: "딱히. 그냥 집에서 쉬려고. 너는?" },
      { speaker: "A", en: "I'm going camping at Lake Tahoe with some friends.", kr: "친구들이랑 레이크 타호로 캠핑 가." },
      { speaker: "B", en: "Oh, nice! How long are you staying?", kr: "오, 좋다! 얼마나 있다 와?" },
      { speaker: "A", en: "Just two nights. We're leaving Saturday morning.", kr: "딱 2박. 토요일 아침에 출발해." },
      { speaker: "B", en: "I heard it might rain on Sunday, though.", kr: "근데 일요일에 비 올 수도 있다던데." },
      { speaker: "A", en: "Really? I'd better pack a rain jacket, then.", kr: "진짜? 그럼 우비 챙겨야겠다." },
      { speaker: "B", en: "Good call. Have fun and send me pictures!", kr: "잘 생각했어. 재밌게 놀고 사진 보내 줘!" }
    ]
  },
  {
    id: "conv-004",
    title: "날씨 (Weather)",
    category: "만남·일상",
    lines: [
      { speaker: "A", en: "Wow, it's freezing out there today.", kr: "와, 오늘 밖에 진짜 춥다." },
      { speaker: "B", en: "I know. And it's supposed to snow tonight.", kr: "그러니까. 게다가 오늘 밤에 눈 온대." },
      { speaker: "A", en: "Seriously? I didn't even bring a scarf.", kr: "진짜? 나 목도리도 안 가져왔는데." },
      { speaker: "B", en: "You should bundle up. Want to borrow my hat?", kr: "단단히 껴입어야 해. 내 모자 빌려줄까?" },
      { speaker: "A", en: "That's okay. Let's just grab a hot coffee inside.", kr: "괜찮아. 그냥 안에 들어가서 따뜻한 커피 마시자." },
      { speaker: "B", en: "Good idea. The café on the corner is open.", kr: "좋은 생각이야. 모퉁이 카페 열었어." },
      { speaker: "A", en: "Perfect. I need to warm up before I drive home.", kr: "딱이다. 운전해서 집에 가기 전에 몸 좀 녹여야겠어." },
      { speaker: "B", en: "Yeah, be careful. The roads might get icy.", kr: "응, 조심해. 길이 얼 수도 있어." }
    ]
  },
  {
    id: "conv-035",
    title: "헤어짐 (Bye)",
    category: "만남·일상",
    lines: [
      { speaker: "A", en: "Well, I should get going.", kr: "자, 이제 슬슬 가봐야겠다." },
      { speaker: "B", en: "Already? It's only nine thirty.", kr: "벌써? 이제 9시 반인데." },
      { speaker: "A", en: "I know, but I have an early flight tomorrow.", kr: "알아, 근데 내일 아침 일찍 비행기야." },
      { speaker: "B", en: "Oh right, your trip to Seattle!", kr: "아 맞다, 시애틀 여행!" },
      { speaker: "A", en: "Yeah. It was really great seeing you tonight.", kr: "응. 오늘 봐서 정말 좋았어." },
      { speaker: "B", en: "Same here. Text me when you get home.", kr: "나도. 집에 도착하면 문자해." },
      { speaker: "A", en: "Will do. Let's catch up when I'm back.", kr: "그럴게. 돌아오면 또 만나자." },
      { speaker: "B", en: "Sounds good. Have a safe flight!", kr: "좋아. 조심히 다녀와!" }
    ]
  },
  {
    id: "conv-045",
    title: "부탁 (Favor)",
    category: "만남·일상",
    lines: [
      { speaker: "A", en: "Hey, can I ask you a favor?", kr: "야, 부탁 하나 해도 돼?" },
      { speaker: "B", en: "Sure, what's up?", kr: "그럼, 뭔데?" },
      { speaker: "A", en: "I'm going to Chicago this weekend. Could you feed my cat?", kr: "나 이번 주말에 시카고 가거든. 고양이 밥 좀 줄 수 있어?" },
      { speaker: "B", en: "Of course. How often does she need to eat?", kr: "당연하지. 하루에 몇 번 줘야 해?" },
      { speaker: "A", en: "Twice a day, morning and night. The food's under the sink.", kr: "하루 두 번, 아침이랑 밤에. 사료는 싱크대 밑에 있어." },
      { speaker: "B", en: "Got it. When should I pick up your key?", kr: "알겠어. 열쇠는 언제 받으러 갈까?" },
      { speaker: "A", en: "I'll drop it off Friday night. I owe you one!", kr: "금요일 밤에 갖다줄게. 신세 한 번 졌다!" },
      { speaker: "B", en: "No worries. Have a safe trip!", kr: "별거 아냐. 조심히 다녀와!" }
    ]
  },
  {
    id: "conv-055",
    title: "초대와 거절 (Invitation)",
    category: "만남·일상",
    lines: [
      { speaker: "A", en: "Hey, we're having a barbecue on Saturday. Want to come?", kr: "야, 우리 토요일에 바비큐 하는데, 올래?" },
      { speaker: "B", en: "Oh, I'd love to! What time?", kr: "오, 가고 싶다! 몇 시야?" },
      { speaker: "A", en: "Around four, at my place.", kr: "네 시쯤, 우리 집에서." },
      { speaker: "B", en: "Ah, I have my cousin's wedding that afternoon.", kr: "아, 그날 오후에 사촌 결혼식이 있어." },
      { speaker: "A", en: "That's too bad. Maybe next time?", kr: "아쉽다. 그럼 다음에?" },
      { speaker: "B", en: "Definitely. Thanks for inviting me, though.", kr: "당연하지. 그래도 초대해 줘서 고마워." },
      { speaker: "A", en: "Of course. I'll let you know about the next one.", kr: "뭘. 다음번에 하면 알려 줄게." },
      { speaker: "B", en: "Sounds great. Have fun this weekend!", kr: "좋아. 주말 재밌게 보내!" }
    ]
  },
  {
    id: "conv-061",
    title: "칭찬하기 (Compliment)",
    category: "만남·일상",
    lines: [
      { speaker: "A", en: "I love your jacket! Where did you get it?", kr: "재킷 너무 예쁘다! 어디서 샀어?" },
      { speaker: "B", en: "Thanks! I got it on sale online.", kr: "고마워! 온라인에서 세일할 때 샀어." },
      { speaker: "A", en: "No way. Do you remember which site?", kr: "진짜? 어느 사이트인지 기억나?" },
      { speaker: "B", en: "It was Uniqlo. It was only forty bucks.", kr: "유니클로였어. 40달러밖에 안 했어." },
      { speaker: "A", en: "That's a steal! It looks really good on you.", kr: "완전 득템이네! 너한테 진짜 잘 어울려." },
      { speaker: "B", en: "Aw, that's so nice of you to say.", kr: "아, 그렇게 말해 줘서 고마워." },
      { speaker: "A", en: "Seriously. The color is perfect for you.", kr: "진짜야. 색깔이 너한테 딱이야." },
      { speaker: "B", en: "Thanks, you just made my day!", kr: "고마워, 덕분에 기분 최고야!" }
    ]
  },
  {
    id: "conv-080",
    title: "파티 스몰토크 (Party Small Talk)",
    category: "만남·일상",
    lines: [
      { speaker: "A", en: "Hi, I'm Minho. Great party, isn't it?", kr: "안녕하세요, 저는 민호예요. 파티 좋네요, 그렇죠?" },
      { speaker: "B", en: "It really is. I'm Rachel. Nice to meet you.", kr: "정말 그러네요. 저는 레이첼이에요. 반가워요." },
      { speaker: "A", en: "So how do you know Jake?", kr: "그럼 제이크랑은 어떻게 아는 사이세요?" },
      { speaker: "B", en: "We went to college together. How about you?", kr: "대학 동기예요. 민호 씨는요?" },
      { speaker: "A", en: "We work together. I just moved here from Seoul.", kr: "같이 일해요. 저는 서울에서 얼마 전에 이사 왔어요." },
      { speaker: "B", en: "Oh, cool! How do you like the city?", kr: "오, 그렇군요! 이 도시는 마음에 드세요?" },
      { speaker: "A", en: "I love it. The food scene here is amazing.", kr: "너무 좋아요. 여기 맛집이 정말 많더라고요." },
      { speaker: "B", en: "Right? Can I get you something to drink?", kr: "그렇죠? 뭐 마실 것 좀 갖다 드릴까요?" }
    ]
  },

  // ==================================================
  // 2. 식당·카페 (Food & Cafe)
  // ==================================================
  {
    id: "conv-006",
    title: "점심 메뉴 (Lunch)",
    category: "식당·카페",
    lines: [
      { speaker: "A", en: "I'm starving. Want to grab lunch?", kr: "배고파 죽겠다. 점심 먹으러 갈래?" },
      { speaker: "B", en: "Sure. What are you in the mood for?", kr: "좋아. 뭐 땡기는 거 있어?" },
      { speaker: "A", en: "How about that new taco place on Main Street?", kr: "메인 스트리트에 새로 생긴 타코집 어때?" },
      { speaker: "B", en: "I've been wanting to try it. Is it far?", kr: "거기 가 보고 싶었어. 멀어?" },
      { speaker: "A", en: "It's about a ten-minute walk from here.", kr: "여기서 걸어서 10분 정도야." },
      { speaker: "B", en: "Okay, but I have a meeting at one.", kr: "좋아, 근데 나 1시에 회의 있어." },
      { speaker: "A", en: "No problem. Let's go now and beat the rush.", kr: "괜찮아. 지금 가서 사람 몰리기 전에 먹자." },
      { speaker: "B", en: "Sounds good. Let me grab my wallet.", kr: "좋아. 지갑 좀 챙길게." }
    ]
  },
  {
    id: "conv-007",
    title: "커피 주문 (Coffee)",
    category: "식당·카페",
    lines: [
      { speaker: "A", en: "Hi, can I get an iced latte with oat milk?", kr: "안녕하세요, 아이스 라떼 오트 밀크로 주시겠어요?" },
      { speaker: "B", en: "Sure. What size would you like?", kr: "네. 사이즈는 어떤 걸로 드릴까요?" },
      { speaker: "A", en: "Medium, please. Sorry, is oat milk extra?", kr: "미디엄으로 주세요. 저기, 오트 밀크는 추가 요금 있나요?" },
      { speaker: "B", en: "Yes, it's 75 cents extra. Is that okay?", kr: "네, 75센트 추가돼요. 괜찮으세요?" },
      { speaker: "A", en: "That's fine. And it's for here, please.", kr: "괜찮아요. 그리고 먹고 갈게요." },
      { speaker: "B", en: "Got it. Can I get a name for the order?", kr: "알겠습니다. 주문하시는 분 성함이 어떻게 되세요?" },
      { speaker: "A", en: "It's Minho. M-I-N-H-O.", kr: "민호예요. M-I-N-H-O." },
      { speaker: "B", en: "Thanks, Minho. That'll be $6.25. Tap whenever you're ready.", kr: "감사합니다, 민호 씨. 6달러 25센트입니다. 준비되시면 카드 대 주세요." }
    ]
  },
  {
    id: "conv-008",
    title: "맛집 추천 (Recommendation)",
    category: "식당·카페",
    lines: [
      { speaker: "A", en: "Do you know any good sushi places around here?", kr: "이 근처에 괜찮은 초밥집 알아?" },
      { speaker: "B", en: "Yeah, there's a great one called Sakura down the street.", kr: "응, 길 따라가면 사쿠라라는 데 진짜 맛있어." },
      { speaker: "A", en: "Oh, nice. Is it pricey?", kr: "오, 좋다. 비싸?" },
      { speaker: "B", en: "Not really. Lunch specials are around fifteen bucks.", kr: "별로. 점심 특선이 15달러 정도야." },
      { speaker: "A", en: "That's not bad. What do you recommend there?", kr: "나쁘지 않네. 거기서 뭐가 맛있어?" },
      { speaker: "B", en: "Definitely get the salmon roll. It's amazing.", kr: "연어 롤은 꼭 먹어 봐. 완전 맛있어." },
      { speaker: "A", en: "Got it. Do I need a reservation?", kr: "알겠어. 예약해야 해?" },
      { speaker: "B", en: "For dinner, I would. It gets packed on weekends.", kr: "저녁이면 하는 게 좋아. 주말엔 사람 꽉 차." }
    ]
  },
  {
    id: "conv-052",
    title: "식당 주문 (Ordering)",
    category: "식당·카페",
    lines: [
      { speaker: "A", en: "Excuse me, I think we're ready to order.", kr: "저기요, 주문할게요." },
      { speaker: "B", en: "Great. What can I get for you?", kr: "네. 뭘로 드릴까요?" },
      { speaker: "A", en: "I'll have the chicken salad, but no onions, please.", kr: "치킨 샐러드 주세요. 양파는 빼 주시고요." },
      { speaker: "B", en: "Sure. Which dressing would you like? Ranch or Italian?", kr: "네. 드레싱은 뭐로 하시겠어요? 랜치랑 이탈리안 있어요." },
      { speaker: "A", en: "Sorry, what was the second one?", kr: "죄송한데, 두 번째 게 뭐였죠?" },
      { speaker: "B", en: "Italian. It's a light vinaigrette.", kr: "이탈리안이요. 가벼운 비네그레트예요." },
      { speaker: "A", en: "I'll go with that. And just water for me, thanks.", kr: "그걸로 할게요. 음료는 그냥 물 주세요." },
      { speaker: "B", en: "You got it. I'll put that right in.", kr: "알겠습니다. 바로 주문 넣을게요." }
    ]
  },
  {
    id: "conv-060",
    title: "식당 예약 (Reservation)",
    category: "식당·카페",
    lines: [
      { speaker: "A", en: "Hi, I'd like to book a table for Friday night.", kr: "안녕하세요, 금요일 저녁에 자리 예약하고 싶어요." },
      { speaker: "B", en: "Sure. For how many people?", kr: "네. 몇 분이세요?" },
      { speaker: "A", en: "Four people, around seven o'clock.", kr: "네 명이고, 7시쯤이요." },
      { speaker: "B", en: "Let me check... Seven's full, but we have 7:30.", kr: "확인해 볼게요... 7시는 꽉 찼고, 7시 반은 돼요." },
      { speaker: "A", en: "That works. Could we get a table by the window?", kr: "좋아요. 창가 자리로 될까요?" },
      { speaker: "B", en: "I'll note that, but I can't promise. Name, please?", kr: "적어 둘게요, 근데 장담은 못 해요. 성함이요?" },
      { speaker: "A", en: "It's under Kim. K-I-M.", kr: "김으로 해 주세요. K-I-M이요." },
      { speaker: "B", en: "Perfect. Four at 7:30 on Friday. See you then!", kr: "좋습니다. 금요일 7시 반, 네 분이요. 그때 뵐게요!" }
    ]
  },
  {
    id: "conv-009",
    title: "계산하기 (Check)",
    category: "식당·카페",
    lines: [
      { speaker: "A", en: "Excuse me, could we get the check, please?", kr: "저기요, 계산서 좀 주시겠어요?" },
      { speaker: "B", en: "Sure. Will that be together or separate?", kr: "네. 같이 계산하실 건가요, 따로 하실 건가요?" },
      { speaker: "A", en: "Could you split it evenly between the two of us?", kr: "저희 둘이 반반 나눠 주실 수 있나요?" },
      { speaker: "B", en: "Of course. That comes to $34.50 each.", kr: "그럼요. 한 분당 34달러 50센트예요." },
      { speaker: "A", en: "Great. Can we both pay by card right here?", kr: "좋아요. 여기서 둘 다 카드로 계산해도 되나요?" },
      { speaker: "B", en: "Sure, I'll bring the card reader over.", kr: "그럼요, 카드 단말기 가져다 드릴게요." },
      { speaker: "A", en: "Thanks. Sorry, could I also get a receipt?", kr: "감사합니다. 저기, 영수증도 받을 수 있을까요?" },
      { speaker: "B", en: "Of course. Would you like it printed or emailed?", kr: "그럼요. 출력해 드릴까요, 이메일로 보내 드릴까요?" }
    ]
  },
  {
    id: "conv-010",
    title: "배달 음식 (Delivery)",
    category: "식당·카페",
    lines: [
      { speaker: "A", en: "I'm too tired to cook. Want to order in?", kr: "너무 피곤해서 요리 못 하겠어. 시켜 먹을래?" },
      { speaker: "B", en: "I'm down. Pizza or fried chicken?", kr: "좋아. 피자? 프라이드치킨?" },
      { speaker: "A", en: "I'm craving fried chicken. Let's check the app.", kr: "프라이드치킨 땡긴다. 앱 확인해 보자." },
      { speaker: "B", en: "Oh, there's a deal. Ten wings and fries for 22 dollars.", kr: "오, 할인 있다. 윙 10개랑 감자튀김이 22달러야." },
      { speaker: "A", en: "Nice. Can you get half spicy, half honey garlic?", kr: "좋다. 반은 매운맛, 반은 허니 갈릭으로 해 줄래?" },
      { speaker: "B", en: "Sure. The delivery fee is four bucks, though.", kr: "그래. 근데 배달비가 4달러야." },
      { speaker: "A", en: "That's fine. I'll Venmo you half.", kr: "괜찮아. 반은 벤모로 보내 줄게." },
      { speaker: "B", en: "Cool. It says about 35 minutes.", kr: "좋아. 35분 정도 걸린대." }
    ]
  },
  {
    id: "conv-044",
    title: "음식 지연 (Slow Service)",
    category: "식당·카페",
    lines: [
      { speaker: "A", en: "Excuse me, we ordered about 40 minutes ago.", kr: "저기요, 저희 40분 전쯤 주문했는데요." },
      { speaker: "B", en: "I'm so sorry about that. What did you order?", kr: "정말 죄송합니다. 뭐 주문하셨죠?" },
      { speaker: "A", en: "Two burgers and a Caesar salad.", kr: "버거 두 개랑 시저 샐러드요." },
      { speaker: "B", en: "Let me check with the kitchen. One moment.", kr: "주방에 확인해 볼게요. 잠시만요." },
      { speaker: "A", en: "Thanks. We have to leave by 8, though.", kr: "감사해요. 근데 저희가 8시까지는 나가야 해서요." },
      { speaker: "B", en: "It's coming out now. Sorry for the wait.", kr: "지금 나오고 있어요. 기다리게 해서 죄송해요." },
      { speaker: "A", en: "No worries. Could we get the check with it?", kr: "괜찮아요. 계산서도 같이 주실 수 있어요?" },
      { speaker: "B", en: "Sure. And your drinks are on us tonight.", kr: "물론이죠. 그리고 음료는 저희가 서비스로 드릴게요." }
    ]
  },
  {
    id: "conv-046",
    title: "한국 음식 (K-Food)",
    category: "식당·카페",
    lines: [
      { speaker: "A", en: "Have you ever tried Korean food?", kr: "한국 음식 먹어본 적 있어?" },
      { speaker: "B", en: "Just Korean barbecue once. What would you recommend?", kr: "코리안 바비큐 한 번 먹어봤어. 뭐 추천해?" },
      { speaker: "A", en: "You should try bibimbap. It's rice mixed with veggies and egg.", kr: "비빔밥 먹어봐. 밥에 야채랑 계란 넣고 비벼 먹는 거야." },
      { speaker: "B", en: "Sounds healthy. Is it spicy?", kr: "건강해 보이네. 매워?" },
      { speaker: "A", en: "Only if you add a lot of red pepper paste.", kr: "고추장을 많이 넣으면 매워." },
      { speaker: "B", en: "Okay, I can handle a little spice.", kr: "오케이, 조금 매운 건 괜찮아." },
      { speaker: "A", en: "There's a great place on 5th Street. Want to go Friday?", kr: "5번가에 진짜 맛있는 데 있어. 금요일에 갈래?" },
      { speaker: "B", en: "I'm in! You can order for me.", kr: "콜! 주문은 네가 해 줘." }
    ]
  },
  {
    id: "conv-079",
    title: "팁 문화 (Tipping)",
    category: "식당·카페",
    lines: [
      { speaker: "A", en: "Hey, quick question. How much should I tip here?", kr: "야, 하나만 물어볼게. 여기선 팁 얼마나 줘야 해?" },
      { speaker: "B", en: "Usually 18 to 20 percent at a sit-down place.", kr: "앉아서 먹는 식당이면 보통 18에서 20퍼센트야." },
      { speaker: "A", en: "Is that before or after tax?", kr: "그거 세금 전 기준이야, 후 기준이야?" },
      { speaker: "B", en: "Most people just do it before tax.", kr: "대부분 그냥 세금 전 금액으로 해." },
      { speaker: "A", en: "Got it. What about coffee shops?", kr: "알겠어. 커피숍은?" },
      { speaker: "B", en: "That's optional. A dollar or so is fine.", kr: "그건 선택이야. 1달러 정도면 충분해." },
      { speaker: "A", en: "Wait, the bill already says 'service charge included.'", kr: "잠깐, 계산서에 이미 '봉사료 포함'이라고 쓰여 있는데." },
      { speaker: "B", en: "Oh, then you don't need to tip extra.", kr: "아, 그럼 팁 따로 안 줘도 돼." }
    ]
  },

  // ==================================================
  // 3. 쇼핑·생활 서비스 (Shopping & Services)
  // ==================================================
  {
    id: "conv-021",
    title: "사이즈 (Size)",
    category: "쇼핑·생활 서비스",
    lines: [
      { speaker: "A", en: "Excuse me, do you have this in a medium?", kr: "실례합니다, 이거 미디엄 있어요?" },
      { speaker: "B", en: "Let me check in the back. One second.", kr: "창고 확인해 볼게요. 잠시만요." },
      { speaker: "A", en: "Thanks. The large is a little too big.", kr: "감사해요. 라지는 좀 커서요." },
      { speaker: "B", en: "You're in luck. This is our last medium.", kr: "운이 좋으시네요. 이게 마지막 미디엄이에요." },
      { speaker: "A", en: "Great! Can I try it on?", kr: "잘됐다! 입어 봐도 될까요?" },
      { speaker: "B", en: "Sure. The fitting rooms are right over there.", kr: "그럼요. 탈의실은 바로 저쪽이에요." },
      { speaker: "A", en: "Thanks. Oh, do you have it in navy, too?", kr: "감사해요. 아, 이거 네이비도 있어요?" },
      { speaker: "B", en: "Only online, but we can order it for you.", kr: "온라인에만 있는데, 주문해 드릴 수 있어요." }
    ]
  },
  {
    id: "conv-022",
    title: "반품 (Return)",
    category: "쇼핑·생활 서비스",
    lines: [
      { speaker: "A", en: "Hi, I'd like to return this sweater.", kr: "안녕하세요, 이 스웨터 반품하고 싶어요." },
      { speaker: "B", en: "Sure. Was there a problem with it?", kr: "네. 문제가 있었나요?" },
      { speaker: "A", en: "No, it just doesn't fit well.", kr: "아뇨, 그냥 잘 안 맞아서요." },
      { speaker: "B", en: "Okay. Do you have the receipt?", kr: "네. 영수증 있으세요?" },
      { speaker: "A", en: "Yes, here it is. I bought it last week.", kr: "네, 여기요. 지난주에 샀어요." },
      { speaker: "B", en: "Thanks. Would you like a refund or an exchange?", kr: "감사합니다. 환불해 드릴까요, 교환해 드릴까요?" },
      { speaker: "A", en: "A refund, please. I paid with my credit card.", kr: "환불로 해 주세요. 신용카드로 결제했어요." },
      { speaker: "B", en: "All set. It'll show up in 3 to 5 business days.", kr: "다 됐습니다. 영업일 기준 3~5일 안에 들어올 거예요." }
    ]
  },
  {
    id: "conv-024",
    title: "장보기 (Grocery)",
    category: "쇼핑·생활 서비스",
    lines: [
      { speaker: "A", en: "Excuse me, where can I find the eggs?", kr: "실례합니다, 달걀 어디 있어요?" },
      { speaker: "B", en: "They're in aisle 7, next to the milk.", kr: "7번 통로, 우유 옆에 있어요." },
      { speaker: "A", en: "Thanks. Do you have oat milk too?", kr: "감사합니다. 귀리 우유도 있어요?" },
      { speaker: "B", en: "We do, but we're out of the large ones.", kr: "있긴 한데 큰 건 다 떨어졌어요." },
      { speaker: "A", en: "That's okay. I'll grab two small ones.", kr: "괜찮아요. 작은 거 두 개 살게요." },
      { speaker: "B", en: "Do you have our rewards card? Eggs are on sale.", kr: "저희 포인트 카드 있으세요? 달걀 세일 중이거든요." },
      { speaker: "A", en: "No, can I sign up at checkout?", kr: "아뇨, 계산대에서 가입할 수 있어요?" },
      { speaker: "B", en: "Sure, just give them your phone number.", kr: "그럼요, 전화번호만 알려주시면 돼요." }
    ]
  },
  {
    id: "conv-025",
    title: "선물 (Gift)",
    category: "쇼핑·생활 서비스",
    lines: [
      { speaker: "A", en: "Hi, I'm looking for a gift for my dad.", kr: "안녕하세요, 아빠 선물을 찾고 있어요." },
      { speaker: "B", en: "Sure. What kind of things does he like?", kr: "네. 아버님이 어떤 걸 좋아하세요?" },
      { speaker: "A", en: "He loves hiking. My budget's around 80 dollars.", kr: "등산을 정말 좋아하세요. 예산은 80달러 정도예요." },
      { speaker: "B", en: "This daypack is really popular. It's 75.", kr: "이 데이팩이 인기가 많아요. 75달러예요." },
      { speaker: "A", en: "Oh, that's nice. Does it come in navy?", kr: "오, 좋네요. 남색도 있어요?" },
      { speaker: "B", en: "Yes, let me grab one from the back.", kr: "네, 창고에서 하나 가져다드릴게요." },
      { speaker: "A", en: "Great. Could you gift wrap it, please?", kr: "좋아요. 선물 포장 해주실 수 있어요?" },
      { speaker: "B", en: "Of course. Here's a gift receipt, just in case.", kr: "물론이죠. 혹시 몰라서 교환용 영수증도 넣어 드릴게요." }
    ]
  },
  {
    id: "conv-037",
    title: "새 폰 (New Phone)",
    category: "쇼핑·생활 서비스",
    lines: [
      { speaker: "A", en: "Hi, I'd like to upgrade my phone.", kr: "안녕하세요, 폰을 바꾸고 싶어서요." },
      { speaker: "B", en: "Sure. Are you an existing customer with us?", kr: "네. 저희 기존 고객이세요?" },
      { speaker: "A", en: "Yes, the account's under Minho Kim.", kr: "네, 김민호 이름으로 돼 있어요." },
      { speaker: "B", en: "Got it. You're eligible for an upgrade. Which model?", kr: "확인됐습니다. 기기 변경 가능하세요. 어떤 모델로 하시겠어요?" },
      { speaker: "A", en: "The new iPhone, 256 gigs. What's the monthly payment?", kr: "새 아이폰 256기가요. 한 달 할부금이 얼마예요?" },
      { speaker: "B", en: "About 35 dollars a month for 24 months.", kr: "24개월 동안 한 달에 35달러 정도예요." },
      { speaker: "A", en: "Okay. Can you transfer my photos and contacts?", kr: "좋아요. 사진이랑 연락처도 옮겨주실 수 있어요?" },
      { speaker: "B", en: "Of course. It'll take about 20 minutes.", kr: "물론이죠. 20분 정도 걸릴 거예요." }
    ]
  },
  {
    id: "conv-065",
    title: "은행 (Bank)",
    category: "쇼핑·생활 서비스",
    lines: [
      { speaker: "A", en: "Hi, I'd like to open a bank account.", kr: "안녕하세요, 계좌를 개설하고 싶어요." },
      { speaker: "B", en: "Sure. Do you have a photo ID with you?", kr: "네. 사진 있는 신분증 가지고 오셨어요?" },
      { speaker: "A", en: "Yes, here's my passport.", kr: "네, 여기 여권이요." },
      { speaker: "B", en: "Thanks. Would you like a checking or savings account?", kr: "감사합니다. 입출금 계좌로 하실래요, 저축 계좌로 하실래요?" },
      { speaker: "A", en: "Checking, please. Is there a monthly fee?", kr: "입출금 계좌요. 월 수수료가 있어요?" },
      { speaker: "B", en: "It's 10 dollars, but it's waived if you keep 500 dollars in it.", kr: "10달러인데, 잔액을 500달러 이상 유지하시면 면제돼요." },
      { speaker: "A", en: "That makes sense. When will I get my debit card?", kr: "그렇군요. 체크카드는 언제 받을 수 있어요?" },
      { speaker: "B", en: "It'll arrive by mail in about a week.", kr: "일주일쯤 후에 우편으로 도착할 거예요." }
    ]
  },
  {
    id: "conv-066",
    title: "미용실 (Haircut)",
    category: "쇼핑·생활 서비스",
    lines: [
      { speaker: "A", en: "Hi, I have a 2 o'clock with Emily.", kr: "안녕하세요, 2시에 에밀리 씨한테 예약했어요." },
      { speaker: "B", en: "Hi, have a seat. What are we doing today?", kr: "안녕하세요, 앉으세요. 오늘은 어떻게 해 드릴까요?" },
      { speaker: "A", en: "Just a trim. About an inch off, please.", kr: "그냥 다듬기만요. 1인치 정도 잘라 주세요." },
      { speaker: "B", en: "Sure. Do you want to keep the layers?", kr: "네. 층은 그대로 둘까요?" },
      { speaker: "A", en: "Yes, and could you thin it out a little?", kr: "네, 그리고 숱 좀 쳐 주실 수 있어요?" },
      { speaker: "B", en: "No problem. Bangs too, or leave them?", kr: "그럼요. 앞머리도 자를까요, 그냥 둘까요?" },
      { speaker: "A", en: "Leave them. I'm growing them out.", kr: "그냥 두세요. 기르는 중이에요." },
      { speaker: "B", en: "Got it. Let's get you shampooed first.", kr: "알겠습니다. 먼저 머리부터 감겨 드릴게요." }
    ]
  },
  {
    id: "conv-071",
    title: "택배 보내기 (Post Office)",
    category: "쇼핑·생활 서비스",
    lines: [
      { speaker: "A", en: "Hi, I'd like to send this package to Korea.", kr: "안녕하세요, 이 소포를 한국으로 보내고 싶어요." },
      { speaker: "B", en: "Sure. What's inside?", kr: "네. 안에 뭐가 들어 있나요?" },
      { speaker: "A", en: "Just some clothes and snacks.", kr: "그냥 옷이랑 과자 좀이요." },
      { speaker: "B", en: "Okay. Please fill out this customs form.", kr: "알겠습니다. 이 세관 신고서 작성해 주세요." },
      { speaker: "A", en: "How long will it take to get there?", kr: "도착하는 데 얼마나 걸려요?" },
      { speaker: "B", en: "Priority is about 7 to 10 days. It's 65 dollars.", kr: "우선 배송은 7일에서 10일 정도요. 65달러예요." },
      { speaker: "A", en: "That's fine. Does it come with tracking?", kr: "괜찮아요. 배송 조회도 되나요?" },
      { speaker: "B", en: "Yes, the tracking number is on your receipt.", kr: "네, 조회 번호는 영수증에 있어요." }
    ]
  },

  // ==================================================
  // 4. 교통·길찾기 (Getting Around)
  // ==================================================
  {
    id: "conv-011",
    title: "길 묻기 (Directions)",
    category: "교통·길찾기",
    lines: [
      { speaker: "A", en: "Excuse me, is there a subway station near here?", kr: "실례합니다, 이 근처에 지하철역 있나요?" },
      { speaker: "B", en: "Yeah, just go straight for two blocks.", kr: "네, 두 블록만 쭉 가세요." },
      { speaker: "A", en: "Two blocks, and then which way?", kr: "두 블록이요, 그다음엔 어느 쪽이요?" },
      { speaker: "B", en: "Turn left at the bank. You'll see the entrance.", kr: "은행에서 왼쪽으로 도세요. 입구가 보일 거예요." },
      { speaker: "A", en: "Sorry, did you say left at the bank?", kr: "죄송한데, 은행에서 왼쪽이라고 하셨어요?" },
      { speaker: "B", en: "That's right. It's about a five-minute walk.", kr: "맞아요. 걸어서 5분 정도예요." },
      { speaker: "A", en: "Great. Thank you so much!", kr: "좋네요. 정말 감사합니다!" },
      { speaker: "B", en: "No problem. You can't miss it.", kr: "별말씀을요. 쉽게 찾으실 거예요." }
    ]
  },
  {
    id: "conv-015",
    title: "버스 (Bus)",
    category: "교통·길찾기",
    lines: [
      { speaker: "A", en: "Excuse me, does this bus go to City Hall?", kr: "실례합니다, 이 버스 시청 가나요?" },
      { speaker: "B", en: "No, you need the one across the street.", kr: "아뇨, 길 건너편에서 타셔야 해요." },
      { speaker: "A", en: "Oh, thanks. Which number should I take?", kr: "아, 감사해요. 몇 번 타야 해요?" },
      { speaker: "B", en: "Take the 42. It comes every ten minutes.", kr: "42번 타세요. 10분마다 와요." },
      { speaker: "A", en: "Can I pay with cash on the bus?", kr: "버스에서 현금 내도 돼요?" },
      { speaker: "B", en: "Yes, but you need exact change. It's $2.75.", kr: "네, 근데 잔돈 맞춰서 내야 해요. 2달러 75센트예요." },
      { speaker: "A", en: "Got it. How many stops is it?", kr: "알겠어요. 몇 정거장이에요?" },
      { speaker: "B", en: "About six. Just listen for the announcement.", kr: "여섯 정거장쯤이요. 안내 방송 잘 들으세요." }
    ]
  },
  {
    id: "conv-056",
    title: "택시 타기 (Taxi)",
    category: "교통·길찾기",
    lines: [
      { speaker: "A", en: "Hi, could you take me to JFK Airport, please?", kr: "안녕하세요, JFK 공항까지 가 주시겠어요?" },
      { speaker: "B", en: "Sure. Which terminal?", kr: "네. 몇 터미널이세요?" },
      { speaker: "A", en: "Terminal 4, please. How long will it take?", kr: "4터미널이요. 얼마나 걸려요?" },
      { speaker: "B", en: "About forty minutes, depending on traffic.", kr: "차 막히는 거에 따라 다르지만 40분 정도요." },
      { speaker: "A", en: "My flight's at six. Will I make it?", kr: "제 비행기가 6시인데, 늦지 않을까요?" },
      { speaker: "B", en: "You should be fine. I'll take the expressway.", kr: "괜찮을 거예요. 고속도로로 갈게요." },
      { speaker: "A", en: "Thanks. Can I pay by card?", kr: "감사해요. 카드로 결제해도 돼요?" },
      { speaker: "B", en: "Yes, there's a card reader right in front of you.", kr: "네, 바로 앞에 카드 단말기 있어요." }
    ]
  },
  {
    id: "conv-068",
    title: "기차표 (Train Ticket)",
    category: "교통·길찾기",
    lines: [
      { speaker: "A", en: "Hi, one ticket to Boston, please.", kr: "안녕하세요, 보스턴 가는 표 한 장 주세요." },
      { speaker: "B", en: "One way or round trip?", kr: "편도요, 왕복이요?" },
      { speaker: "A", en: "Round trip. I'm coming back Sunday.", kr: "왕복이요. 일요일에 돌아와요." },
      { speaker: "B", en: "The next train leaves at 10:40. Is that okay?", kr: "다음 열차가 10시 40분에 출발해요. 괜찮으세요?" },
      { speaker: "A", en: "Perfect. Can I get a window seat?", kr: "좋아요. 창가 자리로 할 수 있어요?" },
      { speaker: "B", en: "Seating's first come, first served. That's 98 dollars total.", kr: "좌석은 선착순이에요. 전부 98달러입니다." },
      { speaker: "A", en: "Here you go. Which track does it leave from?", kr: "여기요. 몇 번 승강장에서 출발해요?" },
      { speaker: "B", en: "Track 6. Boarding starts 15 minutes before.", kr: "6번 승강장이요. 탑승은 15분 전에 시작해요." }
    ]
  },
  {
    id: "conv-070",
    title: "렌터카 (Car Rental)",
    category: "교통·길찾기",
    lines: [
      { speaker: "A", en: "Hi, I have a reservation under Park.", kr: "안녕하세요, 박(Park) 이름으로 예약했어요." },
      { speaker: "B", en: "Got it. Can I see your license and a credit card?", kr: "네. 면허증이랑 신용카드 좀 보여 주시겠어요?" },
      { speaker: "A", en: "Here you go. Is insurance included?", kr: "여기요. 보험은 포함돼 있나요?" },
      { speaker: "B", en: "Basic is. Full coverage is 20 dollars a day.", kr: "기본 보험은요. 완전 보장은 하루 20달러예요." },
      { speaker: "A", en: "I'll take full coverage, just in case.", kr: "혹시 모르니까 완전 보장으로 할게요." },
      { speaker: "B", en: "Sure. It comes with a full tank.", kr: "네. 기름은 가득 채워져 있어요." },
      { speaker: "A", en: "So I return it full too, right?", kr: "그럼 반납할 때도 가득 채워서 오면 되죠?" },
      { speaker: "B", en: "Exactly. Just drop it off by 10 a.m. Friday.", kr: "맞아요. 금요일 오전 10시까지만 반납해 주세요." }
    ]
  },
  {
    id: "conv-062",
    title: "도움 요청 (Asking for Help)",
    category: "교통·길찾기",
    lines: [
      { speaker: "A", en: "Excuse me, could you help me for a second?", kr: "실례합니다, 잠깐 좀 도와주실 수 있어요?" },
      { speaker: "B", en: "Sure. What do you need?", kr: "그럼요. 뭐가 필요하세요?" },
      { speaker: "A", en: "I can't figure out how to use this ticket machine.", kr: "이 발권기 어떻게 쓰는지 모르겠어요." },
      { speaker: "B", en: "Oh, it's a bit tricky. Where are you headed?", kr: "아, 좀 헷갈리죠. 어디 가세요?" },
      { speaker: "A", en: "Union Station. Just one way.", kr: "유니언 역이요. 편도로요." },
      { speaker: "B", en: "Okay, tap 'Single Ride' first, then pick Union Station.", kr: "네, 먼저 '편도'를 누르고 유니언 역을 고르세요." },
      { speaker: "A", en: "Ah, I see. Then I just tap my card here?", kr: "아, 알겠어요. 그다음에 카드를 여기 대면 돼요?" },
      { speaker: "B", en: "Yep, that's it. You're all set.", kr: "네, 그거예요. 다 됐어요." }
    ]
  },
  {
    id: "conv-051",
    title: "못 알아들었을 때 (Sorry?)",
    category: "교통·길찾기",
    lines: [
      { speaker: "A", en: "Excuse me, does this train go downtown?", kr: "실례합니다, 이 기차 시내로 가요?" },
      { speaker: "B", en: "Not directly. You'll need to transfer to the Blue Line at Central.", kr: "바로는 안 가요. 센트럴에서 블루 라인으로 갈아타셔야 해요." },
      { speaker: "A", en: "Sorry, could you say that again a little slower?", kr: "죄송한데, 조금만 천천히 다시 말씀해 주시겠어요?" },
      { speaker: "B", en: "Sure. Get off at Central, then take the Blue Line.", kr: "그럼요. 센트럴에서 내려서 블루 라인 타세요." },
      { speaker: "A", en: "Central, then the Blue Line. Got it.", kr: "센트럴에서 블루 라인. 알겠어요." },
      { speaker: "B", en: "Yep. Central's three stops from here.", kr: "네. 센트럴은 여기서 세 정거장이에요." },
      { speaker: "A", en: "Thanks so much. I really appreciate it.", kr: "정말 고마워요. 큰 도움 됐어요." },
      { speaker: "B", en: "No problem. Have a good one!", kr: "별말씀을요. 좋은 하루 보내세요!" }
    ]
  },
  {
    id: "conv-013",
    title: "사진 요청 (Photo)",
    category: "교통·길찾기",
    lines: [
      { speaker: "A", en: "Excuse me, could you take a picture of us?", kr: "실례지만, 저희 사진 좀 찍어 주실래요?" },
      { speaker: "B", en: "Sure! Do I just tap this button?", kr: "그럼요! 이 버튼만 누르면 되나요?" },
      { speaker: "A", en: "Yes. Could you get the bridge in the background?", kr: "네. 뒤에 다리 나오게 찍어 주실 수 있어요?" },
      { speaker: "B", en: "No problem. Vertical or horizontal?", kr: "그럼요. 세로로 찍을까요, 가로로 찍을까요?" },
      { speaker: "A", en: "Vertical, please. Full body, if possible.", kr: "세로로요. 가능하면 전신으로요." },
      { speaker: "B", en: "Okay, ready? One, two, three! I took a few.", kr: "자, 준비됐죠? 하나, 둘, 셋! 몇 장 찍었어요." },
      { speaker: "A", en: "These look great. Thank you so much!", kr: "잘 나왔네요. 정말 감사합니다!" },
      { speaker: "B", en: "You're welcome. Enjoy your trip!", kr: "천만에요. 즐거운 여행 되세요!" }
    ]
  },

  // ==================================================
  // 5. 공항·호텔 (Airport & Hotel)
  // ==================================================
  {
    id: "conv-064",
    title: "공항 체크인 (Flight Check-in)",
    category: "공항·호텔",
    lines: [
      { speaker: "A", en: "Hi, I'm checking in for the flight to Seoul.", kr: "안녕하세요, 서울행 비행기 체크인하려고요." },
      { speaker: "B", en: "Sure. Can I see your passport, please?", kr: "네. 여권 좀 보여 주시겠어요?" },
      { speaker: "A", en: "Here you go. Could I get a window seat?", kr: "여기요. 창가 자리로 받을 수 있을까요?" },
      { speaker: "B", en: "Let me see... I have one left in row 32.", kr: "잠시만요... 32열에 하나 남았네요." },
      { speaker: "A", en: "Great, I'll take it. I'm checking one bag.", kr: "좋아요, 그걸로 할게요. 짐은 하나 부칠게요." },
      { speaker: "B", en: "Please put it on the scale. Okay, you're all set.", kr: "저울에 올려 주세요. 네, 다 됐습니다." },
      { speaker: "A", en: "What time does boarding start?", kr: "탑승은 몇 시에 시작해요?" },
      { speaker: "B", en: "At 2:15, from Gate 23. Have a nice flight!", kr: "2시 15분에 23번 게이트에서요. 즐거운 비행 되세요!" }
    ]
  },
  {
    id: "conv-058",
    title: "입국 심사 (Immigration)",
    category: "공항·호텔",
    lines: [
      { speaker: "A", en: "Hi, good morning.", kr: "안녕하세요." },
      { speaker: "B", en: "Morning. Passport, please. What's the purpose of your visit?", kr: "안녕하세요. 여권 주세요. 방문 목적이 뭐예요?" },
      { speaker: "A", en: "Here you go. I'm here on vacation.", kr: "여기요. 휴가차 왔어요." },
      { speaker: "B", en: "How long are you staying?", kr: "얼마나 머무르실 거예요?" },
      { speaker: "A", en: "Sorry, did you say how long?", kr: "죄송한데, 얼마나라고 하셨어요?" },
      { speaker: "B", en: "Yes, how many days will you be here?", kr: "네, 며칠 계실 거예요?" },
      { speaker: "A", en: "Ten days. I'm staying at a hotel in Manhattan.", kr: "열흘이요. 맨해튼에 있는 호텔에 묵어요." },
      { speaker: "B", en: "All right. Enjoy your stay.", kr: "알겠습니다. 즐거운 여행 되세요." }
    ]
  },
  {
    id: "conv-014",
    title: "수하물 찾기 (Baggage)",
    category: "공항·호텔",
    lines: [
      { speaker: "A", en: "Excuse me, my bag didn't come out on carousel 4.", kr: "실례합니다, 4번 벨트에서 제 가방이 안 나왔어요." },
      { speaker: "B", en: "I'm sorry about that. Can I see your baggage tag?", kr: "죄송합니다. 수하물 표 좀 보여주시겠어요?" },
      { speaker: "A", en: "Sure, it's on the back of my boarding pass.", kr: "네, 탑승권 뒤에 붙어 있어요." },
      { speaker: "B", en: "Thanks. It looks like it's still in Chicago.", kr: "감사합니다. 아직 시카고에 있는 것 같네요." },
      { speaker: "A", en: "Oh no. When will it get here?", kr: "아이고. 언제 도착해요?" },
      { speaker: "B", en: "It should come on the next flight, around 9 tonight.", kr: "다음 비행기로 오늘 밤 9시쯤 올 거예요." },
      { speaker: "A", en: "Can you deliver it to my hotel?", kr: "호텔로 배달해 주실 수 있나요?" },
      { speaker: "B", en: "Yes. Just fill out this form with the address.", kr: "네. 이 양식에 주소만 적어 주세요." }
    ]
  },
  {
    id: "conv-069",
    title: "비행기 지연 (Flight Delay)",
    category: "공항·호텔",
    lines: [
      { speaker: "A", en: "Excuse me, is flight 302 delayed?", kr: "실례합니다, 302편 지연됐나요?" },
      { speaker: "B", en: "I'm afraid it's been canceled due to a mechanical issue.", kr: "죄송하지만 정비 문제로 결항됐어요." },
      { speaker: "A", en: "Oh no. I have a connection in Chicago.", kr: "아 이런. 시카고에서 환승해야 하는데요." },
      { speaker: "B", en: "I can rebook you on the 6:15 flight.", kr: "6시 15분 비행기로 다시 예약해 드릴 수 있어요." },
      { speaker: "A", en: "Will I still make my connection?", kr: "그래도 환승편 탈 수 있을까요?" },
      { speaker: "B", en: "Yes, you'll have about an hour.", kr: "네, 한 시간 정도 여유가 있을 거예요." },
      { speaker: "A", en: "Okay. Do you offer meal vouchers?", kr: "알겠어요. 식사 쿠폰도 주시나요?" },
      { speaker: "B", en: "Yes, here's a 15-dollar voucher for the food court.", kr: "네, 여기 푸드코트용 15달러 쿠폰이요." }
    ]
  },
  {
    id: "conv-067",
    title: "환전 (Currency Exchange)",
    category: "공항·호텔",
    lines: [
      { speaker: "A", en: "Hi, I'd like to exchange some won for dollars.", kr: "안녕하세요, 원화를 달러로 좀 환전하고 싶어요." },
      { speaker: "B", en: "Sure. How much would you like to exchange?", kr: "네. 얼마나 환전하시겠어요?" },
      { speaker: "A", en: "500,000 won. What's the rate today?", kr: "50만 원이요. 오늘 환율이 어떻게 돼요?" },
      { speaker: "B", en: "It's 1,350 won to the dollar.", kr: "1달러에 1,350원입니다." },
      { speaker: "A", en: "Is there a fee on top of that?", kr: "그것 말고 수수료가 따로 있나요?" },
      { speaker: "B", en: "Yes, a flat five-dollar fee.", kr: "네, 고정 수수료 5달러가 있어요." },
      { speaker: "A", en: "Okay. Could I get some small bills, please?", kr: "알겠어요. 소액권으로 좀 주실 수 있어요?" },
      { speaker: "B", en: "Of course. Twenties and tens okay?", kr: "물론이죠. 20달러, 10달러짜리로 괜찮으세요?" }
    ]
  },
  {
    id: "conv-012",
    title: "호텔 체크인 (Hotel Check-in)",
    category: "공항·호텔",
    lines: [
      { speaker: "A", en: "Hi, I'd like to check in. It's under Lee.", kr: "안녕하세요, 체크인하려고요. 이(Lee) 이름으로 예약했어요." },
      { speaker: "B", en: "Sure. Can I see your ID and a credit card?", kr: "네. 신분증이랑 신용카드 좀 보여주시겠어요?" },
      { speaker: "A", en: "Here you go. Is breakfast included?", kr: "여기요. 조식 포함인가요?" },
      { speaker: "B", en: "Yes, it's served from 7 to 10 on the second floor.", kr: "네, 2층에서 7시부터 10시까지 제공돼요." },
      { speaker: "A", en: "Great. And what's the Wi-Fi password?", kr: "좋네요. 그리고 와이파이 비밀번호가 뭐예요?" },
      { speaker: "B", en: "It's written on your key card envelope.", kr: "카드 키 봉투에 적혀 있어요." },
      { speaker: "A", en: "Perfect. What time is checkout?", kr: "좋아요. 체크아웃은 몇 시예요?" },
      { speaker: "B", en: "It's at 11. You're in room 1204. Enjoy your stay!", kr: "11시입니다. 1204호예요. 즐거운 시간 되세요!" }
    ]
  },
  {
    id: "conv-059",
    title: "호텔 문제 (Room Problem)",
    category: "공항·호텔",
    lines: [
      { speaker: "A", en: "Hi, I'm calling from room 512.", kr: "안녕하세요, 512호인데요." },
      { speaker: "B", en: "Yes, how can I help you?", kr: "네, 무엇을 도와드릴까요?" },
      { speaker: "A", en: "The air conditioner isn't working. It's really hot in here.", kr: "에어컨이 안 돼요. 방이 너무 더워요." },
      { speaker: "B", en: "I'm sorry about that. I'll send someone up right away.", kr: "죄송합니다. 바로 사람 올려 보낼게요." },
      { speaker: "A", en: "Thanks. About how long will that take?", kr: "감사해요. 대략 얼마나 걸릴까요?" },
      { speaker: "B", en: "About fifteen minutes. If it can't be fixed, we'll move you.", kr: "15분 정도요. 고쳐지지 않으면 방을 바꿔 드릴게요." },
      { speaker: "A", en: "That'd be great. Could I also get some extra towels?", kr: "그럼 좋겠어요. 수건도 좀 더 받을 수 있을까요?" },
      { speaker: "B", en: "Of course. I'll have those brought up too.", kr: "물론이죠. 같이 갖다 드릴게요." }
    ]
  },
  {
    id: "conv-074",
    title: "호텔 체크아웃 (Check-out)",
    category: "공항·호텔",
    lines: [
      { speaker: "A", en: "Hi, I'd like to check out. Room 803.", kr: "안녕하세요, 체크아웃하려고요. 803호예요." },
      { speaker: "B", en: "Sure. Did you have anything from the minibar?", kr: "네. 미니바 이용하신 거 있으세요?" },
      { speaker: "A", en: "Just two bottles of water.", kr: "물 두 병만요." },
      { speaker: "B", en: "Okay, here's your bill. Please take a look.", kr: "네, 계산서 여기 있습니다. 확인해 보세요." },
      { speaker: "A", en: "Sorry, what's this 30-dollar charge?", kr: "죄송한데, 이 30달러는 뭐예요?" },
      { speaker: "B", en: "That's the resort fee. It's 15 dollars a night.", kr: "리조트 이용료예요. 1박에 15달러입니다." },
      { speaker: "A", en: "I see. Could you hold my bags until 3?", kr: "그렇군요. 3시까지 짐 좀 맡아 주실 수 있어요?" },
      { speaker: "B", en: "Of course. Here's your claim ticket.", kr: "물론이죠. 여기 보관증입니다." }
    ]
  },

  // ==================================================
  // 6. 회사·업무 (Work)
  // ==================================================
  {
    id: "conv-016",
    title: "회의 (Meeting)",
    category: "회사·업무",
    lines: [
      { speaker: "A", en: "Thanks for joining, Sarah. Here's a quick update on the Q4 campaign.", kr: "와 주셔서 고마워요, 사라 씨. 4분기 캠페인 진행 상황 간단히 공유할게요." },
      { speaker: "B", en: "Great. Where are we at with it?", kr: "좋아요. 지금 어디까지 진행됐어요?" },
      { speaker: "A", en: "The design is done, but the video is a week behind.", kr: "디자인은 끝났는데, 영상이 일주일 정도 늦어지고 있어요." },
      { speaker: "B", en: "Got it. What's holding it up?", kr: "알겠어요. 뭐 때문에 늦어지는 거예요?" },
      { speaker: "A", en: "Legal hasn't approved the script yet. Could you follow up with them?", kr: "법무팀에서 아직 대본 승인을 안 해 줬어요. 그쪽에 한번 확인해 주실 수 있어요?" },
      { speaker: "B", en: "Sure, I'll email them today. Can we still launch November 1st?", kr: "그럼요, 오늘 메일 보낼게요. 11월 1일 출시는 아직 가능해요?" },
      { speaker: "A", en: "I think so, as long as we get approval by Friday.", kr: "금요일까지만 승인 나면 가능할 것 같아요." },
      { speaker: "B", en: "Okay. So I'll follow up with legal, and Minho, you'll update the timeline.", kr: "좋아요. 그럼 저는 법무팀에 확인하고, 민호 씨는 일정표 업데이트해 주세요." }
    ]
  },
  {
    id: "conv-017",
    title: "야근 (Overtime)",
    category: "회사·업무",
    lines: [
      { speaker: "A", en: "You're still here? It's almost nine.", kr: "아직 계세요? 벌써 9시 다 됐어요." },
      { speaker: "B", en: "Yeah, the client report is due tomorrow morning.", kr: "네, 고객 보고서가 내일 아침 마감이라서요." },
      { speaker: "A", en: "Oh, that's rough. Is there anything I can help with?", kr: "아, 힘드시겠어요. 제가 도울 거 있어요?" },
      { speaker: "B", en: "Could you double-check the numbers in section two?", kr: "2장 수치 좀 다시 확인해 주실 수 있어요?" },
      { speaker: "A", en: "Sure. Just send me the file.", kr: "그럼요. 파일만 보내 주세요." },
      { speaker: "B", en: "Thanks so much. You're a lifesaver.", kr: "정말 고마워요. 덕분에 살았어요." },
      { speaker: "A", en: "No worries. Want me to order some food?", kr: "별말씀을요. 먹을 거라도 시킬까요?" },
      { speaker: "B", en: "That'd be great. I haven't eaten since lunch.", kr: "그럼 너무 좋죠. 점심 이후로 아무것도 못 먹었어요." }
    ]
  },
  {
    id: "conv-018",
    title: "휴가 (Day Off)",
    category: "회사·업무",
    lines: [
      { speaker: "A", en: "Hi Mike, do you have a sec?", kr: "마이크, 잠깐 시간 괜찮으세요?" },
      { speaker: "B", en: "Sure. What's up?", kr: "그럼요. 무슨 일이에요?" },
      { speaker: "A", en: "Would it be okay if I took next Friday off?", kr: "다음 주 금요일에 하루 쉬어도 될까요?" },
      { speaker: "B", en: "Should be fine. Is everything okay?", kr: "괜찮을 거예요. 별일 없는 거죠?" },
      { speaker: "A", en: "Yeah, my parents are visiting from Korea.", kr: "네, 부모님이 한국에서 오셔서요." },
      { speaker: "B", en: "Oh, that's nice! Who's covering the client call?", kr: "아, 좋네요! 고객 통화는 누가 맡아요?" },
      { speaker: "A", en: "Jiwoo said she can handle it. I'll brief her Thursday.", kr: "지우 씨가 맡아 준대요. 목요일에 인수인계할게요." },
      { speaker: "B", en: "Great. Just put it on the team calendar.", kr: "좋아요. 팀 캘린더에만 올려 주세요." }
    ]
  },
  {
    id: "conv-053",
    title: "전화 통화 (Phone Call)",
    category: "회사·업무",
    lines: [
      { speaker: "A", en: "Hi, this is Minji from ABC Design. Can I speak to David?", kr: "안녕하세요, ABC 디자인의 민지인데요. 데이비드 씨랑 통화할 수 있을까요?" },
      { speaker: "B", en: "Sorry, he's in a meeting right now. Can I take a message?", kr: "죄송한데, 지금 회의 중이세요. 메시지 남겨 드릴까요?" },
      { speaker: "A", en: "Yes, could you ask him to call me back?", kr: "네, 다시 전화 좀 달라고 전해 주시겠어요?" },
      { speaker: "B", en: "Sure. What's the best number to reach you?", kr: "그럼요. 어느 번호로 연락드리면 될까요?" },
      { speaker: "A", en: "It's 555-0123. It's about Thursday's meeting.", kr: "555-0123이에요. 목요일 회의 건이에요." },
      { speaker: "B", en: "Let me read that back. 555-0123, right?", kr: "확인할게요. 555-0123 맞죠?" },
      { speaker: "A", en: "That's right. Thanks so much.", kr: "네, 맞아요. 정말 감사합니다." },
      { speaker: "B", en: "No problem. I'll make sure he gets it.", kr: "별말씀을요. 꼭 전해 드릴게요." }
    ]
  },
  {
    id: "conv-054",
    title: "지각 사과 (Running Late)",
    category: "회사·업무",
    lines: [
      { speaker: "A", en: "I'm so sorry I'm late. Traffic was terrible.", kr: "늦어서 정말 죄송해요. 차가 엄청 막혔어요." },
      { speaker: "B", en: "Don't worry about it. We just got started.", kr: "걱정 마세요. 방금 시작했어요." },
      { speaker: "A", en: "Did I miss anything important?", kr: "중요한 거 놓친 거 있어요?" },
      { speaker: "B", en: "Not really. We're just going over last week's numbers.", kr: "별로요. 지난주 실적 보고 있었어요." },
      { speaker: "A", en: "Okay, good. Could you send me the slides later?", kr: "다행이네요. 이따 슬라이드 좀 보내 주실래요?" },
      { speaker: "B", en: "Sure, I'll email them after the meeting.", kr: "그럼요, 회의 끝나고 메일로 보낼게요." },
      { speaker: "A", en: "Thanks. I'll leave earlier next time.", kr: "감사해요. 다음엔 더 일찍 나올게요." },
      { speaker: "B", en: "No worries. Grab a seat.", kr: "괜찮아요. 앉으세요." }
    ]
  },
  {
    id: "conv-063",
    title: "면접 (Job Interview)",
    category: "회사·업무",
    lines: [
      { speaker: "A", en: "Thanks for having me today.", kr: "오늘 불러 주셔서 감사합니다." },
      { speaker: "B", en: "Of course. Did you find us okay?", kr: "별말씀을요. 찾아오시는 데 괜찮으셨어요?" },
      { speaker: "A", en: "Yes, it was easy to find.", kr: "네, 찾기 쉬웠어요." },
      { speaker: "B", en: "Great. So, tell me a little about yourself.", kr: "다행이네요. 그럼, 본인 소개를 좀 해 주시겠어요?" },
      { speaker: "A", en: "Sure. I've worked in digital marketing for five years.", kr: "네. 저는 디지털 마케팅 분야에서 5년 일했어요." },
      { speaker: "B", en: "What made you apply for this position?", kr: "이 자리에 지원하신 이유가 뭐예요?" },
      { speaker: "A", en: "I'm looking for a new challenge, and I love your products.", kr: "새로운 도전을 하고 싶었고, 이 회사 제품을 정말 좋아해서요." },
      { speaker: "B", en: "That's great to hear. Let's talk about your last project.", kr: "좋네요. 그럼 지난 프로젝트 얘기를 해 볼까요." }
    ]
  },
  {
    id: "conv-073",
    title: "일정 변경 (Rescheduling)",
    category: "회사·업무",
    lines: [
      { speaker: "A", en: "Hi Mike, it's Minho. Do you have a sec?", kr: "안녕하세요 마이크 씨, 민호예요. 잠깐 시간 괜찮으세요?" },
      { speaker: "B", en: "Sure, what's up?", kr: "그럼요, 무슨 일이에요?" },
      { speaker: "A", en: "Can we push our Thursday meeting to next week?", kr: "목요일 미팅을 다음 주로 미룰 수 있을까요?" },
      { speaker: "B", en: "Sure. Is everything okay?", kr: "네. 무슨 일 있으세요?" },
      { speaker: "A", en: "Yeah, something came up with a client.", kr: "네, 거래처 쪽에 일이 좀 생겨서요." },
      { speaker: "B", en: "No worries. How's Tuesday at 2?", kr: "괜찮아요. 화요일 2시 어때요?" },
      { speaker: "A", en: "Tuesday works. Sorry for the short notice.", kr: "화요일 좋아요. 갑자기 말씀드려서 죄송해요." },
      { speaker: "B", en: "Not a problem. I'll update the invite.", kr: "괜찮아요. 일정 초대 수정해 둘게요." }
    ]
  },
  {
    id: "conv-078",
    title: "화상 회의 (Video Call)",
    category: "회사·업무",
    lines: [
      { speaker: "A", en: "Hi everyone. Can you hear me okay?", kr: "안녕하세요 여러분. 제 목소리 잘 들리세요?" },
      { speaker: "B", en: "Sorry, Jiwoo, you're on mute.", kr: "지우 씨, 죄송한데 음소거 되어 있어요." },
      { speaker: "A", en: "Oops, how about now?", kr: "아이고, 이제는 어때요?" },
      { speaker: "B", en: "Much better. You're breaking up a little, though.", kr: "훨씬 나아요. 근데 소리가 조금씩 끊겨요." },
      { speaker: "A", en: "Let me turn off my camera. That might help.", kr: "카메라를 끌게요. 그럼 좀 나을 거예요." },
      { speaker: "B", en: "Yeah, that's clear now. Go ahead.", kr: "네, 이제 잘 들려요. 시작하세요." },
      { speaker: "A", en: "Okay, I'll share my screen. Can you see the slides?", kr: "네, 화면 공유할게요. 슬라이드 보이세요?" },
      { speaker: "B", en: "Yep, we can see them. Looks good.", kr: "네, 보여요. 좋네요." }
    ]
  },

  // ==================================================
  // 7. 병원·건강 (Health)
  // ==================================================
  {
    id: "conv-026",
    title: "아픔 (Sick)",
    category: "병원·건강",
    lines: [
      { speaker: "A", en: "Hey Sarah, do you have a minute?", kr: "사라, 잠깐 시간 괜찮아요?" },
      { speaker: "B", en: "Sure. Are you okay? You look pale.", kr: "그럼요. 괜찮아요? 얼굴이 창백해요." },
      { speaker: "A", en: "Not really. I think I'm coming down with something.", kr: "별로요. 뭔가 걸리려는 것 같아요." },
      { speaker: "B", en: "Oh no. You should go home and rest.", kr: "저런. 집에 가서 쉬는 게 좋겠어요." },
      { speaker: "A", en: "Would that be okay? The report's due tomorrow.", kr: "그래도 괜찮을까요? 보고서가 내일 마감이라서요." },
      { speaker: "B", en: "Don't worry. The report can wait a day.", kr: "걱정 마요. 보고서는 하루 늦어도 괜찮아요." },
      { speaker: "A", en: "Thanks. I'll check my email from home.", kr: "감사해요. 집에서 이메일 확인할게요." },
      { speaker: "B", en: "No, just get some rest. Feel better!", kr: "아니에요, 그냥 푹 쉬어요. 얼른 나아요!" }
    ]
  },
  {
    id: "conv-027",
    title: "약국 (Medicine)",
    category: "병원·건강",
    lines: [
      { speaker: "A", en: "Hi, do you have anything for a sore throat?", kr: "안녕하세요, 목 아픈 데 먹는 약 있어요?" },
      { speaker: "B", en: "Sure. How long has it been bothering you?", kr: "네. 언제부터 아프셨어요?" },
      { speaker: "A", en: "Since yesterday. It hurts when I swallow.", kr: "어제부터요. 삼킬 때 아파요." },
      { speaker: "B", en: "Any fever or cough?", kr: "열이나 기침은 있으세요?" },
      { speaker: "A", en: "A little cough, but no fever.", kr: "기침은 조금 하는데 열은 없어요." },
      { speaker: "B", en: "Try these lozenges. Take one every two hours.", kr: "이 트로키 드셔 보세요. 두 시간마다 하나씩이요." },
      { speaker: "A", en: "Will they make me drowsy?", kr: "먹으면 졸려요?" },
      { speaker: "B", en: "No, they're non-drowsy. If it gets worse, see a doctor.", kr: "아뇨, 졸리지 않아요. 더 심해지면 병원에 가보세요." }
    ]
  },
  {
    id: "conv-057",
    title: "병원 예약 (Appointment)",
    category: "병원·건강",
    lines: [
      { speaker: "A", en: "Hi, I'd like to make an appointment, please.", kr: "안녕하세요, 진료 예약하고 싶은데요." },
      { speaker: "B", en: "Sure. Are you a new patient?", kr: "네. 처음 오시는 건가요?" },
      { speaker: "A", en: "Yes, I am. I've had a bad cough for about a week.", kr: "네. 일주일쯤 기침이 심해서요." },
      { speaker: "B", en: "Okay. Can you come in tomorrow at ten?", kr: "알겠습니다. 내일 10시에 오실 수 있어요?" },
      { speaker: "A", en: "I have work then. Do you have anything later?", kr: "그때 일이 있어서요. 좀 더 늦은 시간은 없나요?" },
      { speaker: "B", en: "We have an opening at 3:30. Does that work?", kr: "3시 반에 자리가 있어요. 괜찮으세요?" },
      { speaker: "A", en: "That's perfect. Should I bring my insurance card?", kr: "딱 좋아요. 보험 카드 가져가야 하나요?" },
      { speaker: "B", en: "Yes, and please come 15 minutes early.", kr: "네, 그리고 15분 일찍 와 주세요." }
    ]
  },
  {
    id: "conv-075",
    title: "응급 상황 (Emergency)",
    category: "병원·건강",
    lines: [
      { speaker: "A", en: "Hi, I need an ambulance. My friend just collapsed.", kr: "여보세요, 구급차가 필요해요. 친구가 방금 쓰러졌어요." },
      { speaker: "B", en: "Okay. What's the address?", kr: "알겠습니다. 주소가 어떻게 되세요?" },
      { speaker: "A", en: "1420 Oak Street, apartment 3C.", kr: "오크 스트리트 1420번지, 3C호예요." },
      { speaker: "B", en: "Is he conscious? Is he breathing?", kr: "의식 있나요? 숨은 쉬고 있어요?" },
      { speaker: "A", en: "He's breathing, but he's not responding.", kr: "숨은 쉬는데, 반응이 없어요." },
      { speaker: "B", en: "Help is on the way. Stay on the line.", kr: "구조대가 가고 있어요. 전화 끊지 마세요." },
      { speaker: "A", en: "Okay. What should I do now?", kr: "알겠어요. 지금 뭘 해야 하죠?" },
      { speaker: "B", en: "Turn him on his side and stay with him.", kr: "옆으로 눕히고 곁에 있어 주세요." }
    ]
  },

  // ==================================================
  // 8. 생활 문제 해결 (Problems)
  // ==================================================
  {
    id: "conv-036",
    title: "와이파이 (Wi-Fi)",
    category: "생활 문제 해결",
    lines: [
      { speaker: "A", en: "Excuse me, do you have Wi-Fi here?", kr: "실례합니다, 여기 와이파이 있어요?" },
      { speaker: "B", en: "Yes, the password's on your receipt.", kr: "네, 비밀번호는 영수증에 있어요." },
      { speaker: "A", en: "Thanks. Hmm, it says connected, but nothing loads.", kr: "감사해요. 음, 연결은 됐다는데 아무것도 안 떠요." },
      { speaker: "B", en: "Did you get the login page? You need to accept the terms.", kr: "로그인 페이지 떴어요? 약관에 동의하셔야 돼요." },
      { speaker: "A", en: "Oh, I didn't see that. Let me try again.", kr: "아, 그걸 못 봤네요. 다시 해볼게요." },
      { speaker: "B", en: "If that doesn't work, forget the network and reconnect.", kr: "안 되면 네트워크 삭제하고 다시 연결해 보세요." },
      { speaker: "A", en: "Okay, it's working now. Thanks so much!", kr: "아, 이제 돼요. 정말 감사해요!" },
      { speaker: "B", en: "No problem. Just so you know, it times out after two hours.", kr: "별말씀을요. 참고로 두 시간 지나면 끊겨요." }
    ]
  },
  {
    id: "conv-077",
    title: "고객센터 (Customer Support)",
    category: "생활 문제 해결",
    lines: [
      { speaker: "A", en: "Hi, I can't log in to my account.", kr: "안녕하세요, 제 계정에 로그인이 안 돼요." },
      { speaker: "B", en: "Sorry about that. Can I get the email on the account?", kr: "불편을 드려 죄송합니다. 계정 이메일 주소 알려주시겠어요?" },
      { speaker: "A", en: "Sure, it's minho.kim@gmail.com.", kr: "네, minho.kim@gmail.com이에요." },
      { speaker: "B", en: "Thanks. It looks like it got locked after too many failed attempts.", kr: "감사합니다. 로그인 실패가 너무 많아서 잠긴 것 같네요." },
      { speaker: "A", en: "Oh, I see. Can you unlock it for me?", kr: "아, 그렇군요. 잠금 좀 풀어 주실 수 있나요?" },
      { speaker: "B", en: "Sure. I just sent you a reset link.", kr: "네. 방금 재설정 링크를 보내 드렸어요." },
      { speaker: "A", en: "Got it. And how long is the link good for?", kr: "알겠어요. 그런데 링크는 얼마 동안 유효해요?" },
      { speaker: "B", en: "24 hours. Is there anything else I can help with?", kr: "24시간이요. 더 도와드릴 일 있으실까요?" }
    ]
  },
  {
    id: "conv-041",
    title: "지갑 분실 (Wallet)",
    category: "생활 문제 해결",
    lines: [
      { speaker: "A", en: "Hi, I was here about an hour ago.", kr: "안녕하세요, 제가 한 시간쯤 전에 여기 왔었는데요." },
      { speaker: "B", en: "Okay. How can I help you?", kr: "네. 무엇을 도와드릴까요?" },
      { speaker: "A", en: "I think I left my wallet. Did anyone turn one in?", kr: "지갑을 두고 간 것 같아서요. 혹시 누가 맡긴 거 있어요?" },
      { speaker: "B", en: "Let me check. What does it look like?", kr: "확인해 볼게요. 어떻게 생겼어요?" },
      { speaker: "A", en: "It's a small black leather one.", kr: "작은 검은색 가죽 지갑이에요." },
      { speaker: "B", en: "Is this it? What name is on the cards?", kr: "이거 맞아요? 카드에 적힌 이름이 뭐예요?" },
      { speaker: "A", en: "Jiwoo Park. Oh, thank goodness!", kr: "박지우요. 아, 다행이다!" },
      { speaker: "B", en: "Here you go. Lucky someone turned it in.", kr: "여기 있어요. 누가 맡겨줘서 다행이에요." }
    ]
  },
  {
    id: "conv-043",
    title: "소음 (Noise)",
    category: "생활 문제 해결",
    lines: [
      { speaker: "A", en: "Hi, sorry to bother you. I live right downstairs.", kr: "안녕하세요, 귀찮게 해서 죄송해요. 바로 아랫집 살아요." },
      { speaker: "B", en: "Oh, hi. Is everything okay?", kr: "아, 안녕하세요. 무슨 일 있으세요?" },
      { speaker: "A", en: "It's just that the music's a little loud, and it's almost midnight.", kr: "다름이 아니라 음악 소리가 좀 커서요. 거의 자정이라서요." },
      { speaker: "B", en: "Oh, I'm so sorry. I didn't realize.", kr: "어머, 정말 죄송해요. 몰랐어요." },
      { speaker: "A", en: "No worries. I just have to get up early for work.", kr: "괜찮아요. 제가 내일 일찍 출근해야 해서요." },
      { speaker: "B", en: "Totally understand. I'll turn it down right now.", kr: "충분히 이해해요. 지금 바로 줄일게요." },
      { speaker: "A", en: "Thanks so much. I really appreciate it.", kr: "정말 감사합니다. 진짜 고마워요." },
      { speaker: "B", en: "Sure. Just knock if it happens again.", kr: "네. 또 그러면 그냥 문 두드려 주세요." }
    ]
  },
  {
    id: "conv-072",
    title: "수리 요청 (Repair Request)",
    category: "생활 문제 해결",
    lines: [
      { speaker: "A", en: "Hi, this is Jiwoo in unit 4B.", kr: "안녕하세요, 4B호 지우인데요." },
      { speaker: "B", en: "Hi, Jiwoo. What's going on?", kr: "안녕하세요, 지우 씨. 무슨 일이세요?" },
      { speaker: "A", en: "There's been no hot water since last night.", kr: "어젯밤부터 온수가 안 나와요." },
      { speaker: "B", en: "Oh no. Is it the shower or the whole unit?", kr: "아이고. 샤워기만 그래요, 집 전체가 그래요?" },
      { speaker: "A", en: "The whole unit. The sink's cold too.", kr: "집 전체요. 싱크대도 찬물만 나와요." },
      { speaker: "B", en: "Sounds like the water heater. I'll send someone tomorrow.", kr: "온수기 문제 같네요. 내일 사람 보낼게요." },
      { speaker: "A", en: "What time should I expect them?", kr: "몇 시쯤 오실까요?" },
      { speaker: "B", en: "Between 9 and noon. Is that okay?", kr: "9시에서 12시 사이요. 괜찮으세요?" }
    ]
  },

  // ==================================================
  // 9. 감정·관계 (Feelings)
  // ==================================================
  {
    id: "conv-076",
    title: "좋은 소식 (Good News)",
    category: "감정·관계",
    lines: [
      { speaker: "A", en: "Hey, guess what? I got the job!", kr: "야, 있잖아! 나 그 회사 붙었어!" },
      { speaker: "B", en: "No way! The marketing one? Congrats!", kr: "말도 안 돼! 그 마케팅 자리? 축하해!" },
      { speaker: "A", en: "Yeah! They called me this morning.", kr: "응! 오늘 아침에 전화 왔어." },
      { speaker: "B", en: "I knew you'd get it. I'm so happy for you!", kr: "네가 될 줄 알았어. 진짜 내 일처럼 기쁘다!" },
      { speaker: "A", en: "Thanks. I still can't believe it, honestly.", kr: "고마워. 솔직히 아직도 안 믿겨." },
      { speaker: "B", en: "So when do you start?", kr: "그럼 언제부터 출근해?" },
      { speaker: "A", en: "In two weeks, on the 15th.", kr: "2주 뒤에, 15일부터." },
      { speaker: "B", en: "This calls for a celebration. Let me take you out Friday!", kr: "이건 축하해야지. 금요일에 내가 한턱낼게!" }
    ]
  },
  {
    id: "conv-029",
    title: "스트레스 (Stress)",
    category: "감정·관계",
    lines: [
      { speaker: "A", en: "Ugh, I'm so stressed out this week.", kr: "으, 이번 주 스트레스 너무 받아." },
      { speaker: "B", en: "What's going on? Is it work?", kr: "무슨 일 있어? 일 때문이야?" },
      { speaker: "A", en: "Yeah, I have two deadlines on Friday.", kr: "응, 금요일에 마감이 두 개야." },
      { speaker: "B", en: "That's rough. Are you sleeping okay?", kr: "힘들겠다. 잠은 잘 자고 있어?" },
      { speaker: "A", en: "Not really. Maybe five hours a night.", kr: "별로. 하루에 다섯 시간쯤." },
      { speaker: "B", en: "You need a break. Want to grab a coffee?", kr: "좀 쉬어야 해. 커피 한잔할래?" },
      { speaker: "A", en: "Okay, but just for 20 minutes.", kr: "좋아, 근데 딱 20분만." },
      { speaker: "B", en: "Deal. It'll help clear your head.", kr: "콜. 머리 좀 맑아질 거야." }
    ]
  },
  {
    id: "conv-031",
    title: "화남 (Angry)",
    category: "감정·관계",
    lines: [
      { speaker: "A", en: "I'm so mad right now.", kr: "나 지금 진짜 화나." },
      { speaker: "B", en: "Whoa, what happened?", kr: "헐, 무슨 일이야?" },
      { speaker: "A", en: "My landlord's keeping my whole security deposit.", kr: "집주인이 보증금을 통째로 안 돌려준대." },
      { speaker: "B", en: "Seriously? How much was it?", kr: "진짜? 얼마였는데?" },
      { speaker: "A", en: "Twelve hundred dollars. For one small stain!", kr: "1,200달러. 작은 얼룩 하나 때문에!" },
      { speaker: "B", en: "That's not fair. Did you take move-in photos?", kr: "그건 말도 안 되지. 입주할 때 사진 찍어놨어?" },
      { speaker: "A", en: "Yeah, I have them on my phone.", kr: "응, 폰에 있어." },
      { speaker: "B", en: "Then email them to him. That should help.", kr: "그럼 그거 이메일로 보내. 도움 될 거야." }
    ]
  },
  {
    id: "conv-032",
    title: "위로 (Comfort)",
    category: "감정·관계",
    lines: [
      { speaker: "A", en: "I totally messed up my presentation today.", kr: "오늘 프레젠테이션 완전 망쳤어." },
      { speaker: "B", en: "Oh no. What happened?", kr: "저런. 무슨 일 있었어?" },
      { speaker: "A", en: "I froze and forgot half of what I wanted to say.", kr: "머리가 하얘져서 하려던 말을 반이나 까먹었어." },
      { speaker: "B", en: "That happens to everyone. Did anyone say anything?", kr: "그건 누구나 그래. 누가 뭐라고 했어?" },
      { speaker: "A", en: "My boss said it was fine, but I felt awful.", kr: "상사는 괜찮았다고 했는데 기분이 너무 안 좋았어." },
      { speaker: "B", en: "See? You're being too hard on yourself.", kr: "봐봐. 너 너무 자책하는 거야." },
      { speaker: "A", en: "Maybe you're right. Thanks, I needed that.", kr: "네 말이 맞을지도. 고마워, 그 말 듣고 싶었어." },
      { speaker: "B", en: "Anytime. Come on, dinner's on me tonight.", kr: "언제든지. 가자, 오늘 저녁은 내가 쏠게." }
    ]
  },
  {
    id: "conv-034",
    title: "고민 (Decision)",
    category: "감정·관계",
    lines: [
      { speaker: "A", en: "Can I get your advice on something?", kr: "나 뭐 좀 조언 구해도 돼?" },
      { speaker: "B", en: "Sure. What's up?", kr: "그럼. 무슨 일인데?" },
      { speaker: "A", en: "I'm torn between two apartments.", kr: "아파트 두 군데 중에 고민 중이야." },
      { speaker: "B", en: "What's the difference?", kr: "뭐가 다른데?" },
      { speaker: "A", en: "One's 1,500 a month, but it's a long commute.", kr: "하나는 한 달에 1,500달러인데 출퇴근이 멀어." },
      { speaker: "B", en: "And the other one?", kr: "다른 하나는?" },
      { speaker: "A", en: "It's 1,800, but it's a ten-minute walk to work.", kr: "1,800달러인데 회사까지 걸어서 10분이야." },
      { speaker: "B", en: "Honestly, I'd pay more and save the time.", kr: "솔직히 난 돈 더 내고 시간 아끼겠어." }
    ]
  },

  // ==================================================
  // 10. 취미·여가 (Free Time)
  // ==================================================
  {
    id: "conv-005",
    title: "취미 (Hobbies)",
    category: "취미·여가",
    lines: [
      { speaker: "A", en: "Is that a new camera? Are you into photography?", kr: "그거 새 카메라야? 너 사진 좋아해?" },
      { speaker: "B", en: "Yeah, I picked it up as a hobby a few months ago.", kr: "응, 몇 달 전에 취미로 시작했어." },
      { speaker: "A", en: "Cool! What do you usually take pictures of?", kr: "멋지다! 주로 뭐 찍어?" },
      { speaker: "B", en: "Mostly street scenes and sunsets around the city.", kr: "주로 거리 풍경이랑 시내 노을." },
      { speaker: "A", en: "Is it hard to learn? I've been looking for a new hobby.", kr: "배우기 어려워? 나도 새 취미 찾고 있었거든." },
      { speaker: "B", en: "Not really. You can start with just your phone.", kr: "별로. 그냥 폰으로 시작해도 돼." },
      { speaker: "A", en: "Really? Maybe I'll give it a try.", kr: "진짜? 나도 한번 해 볼까." },
      { speaker: "B", en: "You should! Come shoot with me this Saturday.", kr: "해 봐! 이번 토요일에 같이 찍으러 가자." }
    ]
  },
  {
    id: "conv-048",
    title: "영화 (Movie)",
    category: "취미·여가",
    lines: [
      { speaker: "A", en: "Hey, did you end up seeing that new Marvel movie?", kr: "야, 그 새 마블 영화 결국 봤어?" },
      { speaker: "B", en: "Yeah, last night. Honestly, it was kind of boring.", kr: "응, 어젯밤에. 솔직히 좀 지루했어." },
      { speaker: "A", en: "Really? The trailer looked so good.", kr: "진짜? 예고편은 엄청 재밌어 보이던데." },
      { speaker: "B", en: "I know. But it was almost three hours long.", kr: "그러니까. 근데 거의 세 시간짜리야." },
      { speaker: "A", en: "Wow, that's long. Was the ending at least good?", kr: "와, 길다. 결말이라도 괜찮았어?" },
      { speaker: "B", en: "Not really. It felt kind of rushed.", kr: "별로. 좀 급하게 끝난 느낌이었어." },
      { speaker: "A", en: "Hmm, maybe I'll just wait till it's streaming.", kr: "음, 그냥 스트리밍 나올 때까지 기다려야겠다." },
      { speaker: "B", en: "Good call. Save your money.", kr: "잘 생각했어. 돈 아껴." }
    ]
  },
  {
    id: "conv-050",
    title: "반려동물 (Pet)",
    category: "취미·여가",
    lines: [
      { speaker: "A", en: "Oh my gosh, he's so cute! Can I pet him?", kr: "어머, 너무 귀엽다! 만져 봐도 돼요?" },
      { speaker: "B", en: "Sure, go ahead. He loves people.", kr: "그럼요, 만지세요. 사람 엄청 좋아해요." },
      { speaker: "A", en: "What's his name?", kr: "이름이 뭐예요?" },
      { speaker: "B", en: "This is Max. He's a golden retriever.", kr: "맥스예요. 골든 리트리버고요." },
      { speaker: "A", en: "How old is he?", kr: "몇 살이에요?" },
      { speaker: "B", en: "He just turned two. Still a puppy at heart.", kr: "이제 막 두 살 됐어요. 마음은 아직 강아지예요." },
      { speaker: "A", en: "He's adorable. I really want a dog someday.", kr: "진짜 사랑스럽네요. 저도 언젠가 꼭 강아지 키우고 싶어요." },
      { speaker: "B", en: "You should! Check out the local shelter.", kr: "키워 보세요! 동네 보호소 한번 가 보세요." }
    ]
  }
];
