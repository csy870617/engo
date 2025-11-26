const conversationData = [
  // -------------------------
  // 1. 일상 & 스몰토크 (1~10)
  // -------------------------
  {
    id: "conv-001",
    title: "자기소개",
    lines: [
      { speaker: "A", en: "Hi, I'm new here. My name is Minho.", kr: "안녕하세요, 새로 왔습니다. 제 이름은 민호입니다." },
      { speaker: "B", en: "Nice to meet you, Minho. I'm Sarah.", kr: "반가워요, 민호 씨. 저는 사라입니다." },
      { speaker: "A", en: "Is this your first time in Korea?", kr: "한국은 처음이신가요?" },
      { speaker: "B", en: "Yes, I just arrived yesterday.", kr: "네, 어제 막 도착했어요." }
    ]
  },
  {
    id: "conv-002",
    title: "날씨 이야기",
    lines: [
      { speaker: "A", en: "It's freezing outside today.", kr: "오늘 밖이 정말 춥네요." },
      { speaker: "B", en: "I know. The temperature dropped a lot.", kr: "그러게요. 기온이 많이 떨어졌어요." },
      { speaker: "A", en: "Make sure to bundle up.", kr: "옷 따뜻하게 챙겨 입으세요." },
      { speaker: "B", en: "Thanks. You too.", kr: "고마워요. 당신도요." }
    ]
  },
  {
    id: "conv-003",
    title: "주말 계획",
    lines: [
      { speaker: "A", en: "Do you have any plans for this weekend?", kr: "이번 주말에 계획 있어요?" },
      { speaker: "B", en: "I'm going to see a movie with my friends.", kr: "친구들이랑 영화 보러 갈 거예요." },
      { speaker: "A", en: "That sounds fun. Which movie?", kr: "재밌겠네요. 무슨 영화요?" },
      { speaker: "B", en: "We haven't decided yet.", kr: "아직 결정은 안 했어요." }
    ]
  },
  {
    id: "conv-004",
    title: "취미 묻기",
    lines: [
      { speaker: "A", en: "What do you do in your free time?", kr: "여가 시간에는 주로 뭘 하세요?" },
      { speaker: "B", en: "I usually go jogging at the park.", kr: "주로 공원에서 조깅을 해요." },
      { speaker: "A", en: "Wow, you must be very fit.", kr: "와, 정말 건강하시겠네요." },
      { speaker: "B", en: "I try to stay healthy.", kr: "건강을 유지하려고 노력 중이에요." }
    ]
  },
  {
    id: "conv-005",
    title: "약속 시간 정하기",
    lines: [
      { speaker: "A", en: "When should we meet?", kr: "우리 언제 만날까요?" },
      { speaker: "B", en: "How about 7 pm on Friday?", kr: "금요일 저녁 7시 어때요?" },
      { speaker: "A", en: "I have a meeting then. Can we make it 8?", kr: "그때는 회의가 있어서요. 8시로 할 수 있을까요?" },
      { speaker: "B", en: "Sure, 8 works for me.", kr: "네, 8시도 좋아요." }
    ]
  },
  {
    id: "conv-006",
    title: "안부 묻기",
    lines: [
      { speaker: "A", en: "Long time no see! How have you been?", kr: "오랜만이야! 그동안 잘 지냈어?" },
      { speaker: "B", en: "I've been busy with work. You?", kr: "일 때문에 좀 바빴어. 너는?" },
      { speaker: "A", en: "I'm doing great. I started learning English.", kr: "난 잘 지내. 영어 공부를 시작했어." },
      { speaker: "B", en: "That's awesome! Good luck.", kr: "멋지다! 행운을 빌어." }
    ]
  },
  {
    id: "conv-007",
    title: "좋아하는 음식",
    lines: [
      { speaker: "A", en: "What is your favorite food?", kr: "가장 좋아하는 음식이 뭐예요?" },
      { speaker: "B", en: "I love pizza. What about you?", kr: "저는 피자를 좋아해요. 당신은요?" },
      { speaker: "A", en: "I'm a big fan of Korean BBQ.", kr: "저는 한국식 고기구이를 정말 좋아해요." },
      { speaker: "B", en: "Oh, that makes me hungry.", kr: "아, 얘기하니까 배고프네요." }
    ]
  },
  {
    id: "conv-008",
    title: "가족 소개",
    lines: [
      { speaker: "A", en: "Do you have any siblings?", kr: "형제자매가 있나요?" },
      { speaker: "B", en: "Yes, I have an older brother.", kr: "네, 형이 한 명 있어요." },
      { speaker: "A", en: "Do you live together?", kr: "같이 사나요?" },
      { speaker: "B", en: "No, he lives in another city.", kr: "아니요, 형은 다른 도시에 살아요." }
    ]
  },
  {
    id: "conv-009",
    title: "반려동물",
    lines: [
      { speaker: "A", en: "Do you have any pets?", kr: "반려동물 키우세요?" },
      { speaker: "B", en: "I have a cat named Luna.", kr: "루나라는 고양이를 키워요." },
      { speaker: "A", en: "Is she cute?", kr: "귀여운가요?" },
      { speaker: "B", en: "She is adorable but very lazy.", kr: "사랑스럽지만 아주 게을러요." }
    ]
  },
  {
    id: "conv-010",
    title: "피곤한 하루",
    lines: [
      { speaker: "A", en: "You look tired today.", kr: "오늘 피곤해 보이네요." },
      { speaker: "B", en: "Yeah, I stayed up late last night.", kr: "네, 어젯밤에 늦게 잤거든요." },
      { speaker: "A", en: "Did you have work to do?", kr: "할 일이 있었나요?" },
      { speaker: "B", en: "No, I was just watching Netflix.", kr: "아니요, 그냥 넷플릭스 봤어요." }
    ]
  },

  // -------------------------
  // 2. 여행 & 교통 (11~20)
  // -------------------------
  {
    id: "conv-011",
    title: "길 묻기",
    lines: [
      { speaker: "A", en: "Excuse me, where is the nearest subway station?", kr: "실례합니다, 가장 가까운 지하철역이 어디인가요?" },
      { speaker: "B", en: "Go straight and turn left at the corner.", kr: "직진하시다가 모퉁이에서 왼쪽으로 도세요." },
      { speaker: "A", en: "Is it far from here?", kr: "여기서 먼가요?" },
      { speaker: "B", en: "No, it takes about 5 minutes on foot.", kr: "아니요, 걸어서 5분 정도 걸려요." }
    ]
  },
  {
    id: "conv-012",
    title: "호텔 체크인",
    lines: [
      { speaker: "A", en: "Hello, I'd like to check in.", kr: "안녕하세요, 체크인하려고 합니다." },
      { speaker: "B", en: "Can I see your ID and credit card?", kr: "신분증과 신용카드를 보여주시겠어요?" },
      { speaker: "A", en: "Here you go. I booked a double room.", kr: "여기 있습니다. 더블룸으로 예약했어요." },
      { speaker: "B", en: "Confirmed. Here is your key.", kr: "확인되었습니다. 여기 열쇠입니다." }
    ]
  },
  {
    id: "conv-013",
    title: "공항 입국 심사",
    lines: [
      { speaker: "A", en: "What is the purpose of your visit?", kr: "방문 목적이 무엇입니까?" },
      { speaker: "B", en: "I'm here for traveling.", kr: "여행하러 왔습니다." },
      { speaker: "A", en: "How long will you stay?", kr: "얼마나 머무르실 겁니까?" },
      { speaker: "B", en: "I'll stay for one week.", kr: "일주일 동안 머물 겁니다." }
    ]
  },
  {
    id: "conv-014",
    title: "택시 타기",
    lines: [
      { speaker: "A", en: "Where to, sir?", kr: "어디로 모실까요?" },
      { speaker: "B", en: "Please take me to Seoul Station.", kr: "서울역으로 가주세요." },
      { speaker: "A", en: "Okay. Put on your seatbelt, please.", kr: "알겠습니다. 안전벨트 매주세요." },
      { speaker: "B", en: "How long will it take?", kr: "얼마나 걸릴까요?" }
    ]
  },
  {
    id: "conv-015",
    title: "사진 부탁하기",
    lines: [
      { speaker: "A", en: "Excuse me, could you take a picture of us?", kr: "실례지만, 저희 사진 좀 찍어주실 수 있나요?" },
      { speaker: "B", en: "Sure. Just press this button?", kr: "물론이죠. 이 버튼 누르면 되나요?" },
      { speaker: "A", en: "Yes. Can you take one more, please?", kr: "네. 한 장만 더 찍어주세요." },
      { speaker: "B", en: "Okay. 1, 2, 3, cheese!", kr: "알겠습니다. 하나, 둘, 셋, 치즈!" }
    ]
  },
  {
    id: "conv-016",
    title: "버스 요금",
    lines: [
      { speaker: "A", en: "Does this bus go to downtown?", kr: "이 버스 시내로 가나요?" },
      { speaker: "B", en: "Yes, it does.", kr: "네, 갑니다." },
      { speaker: "A", en: "How much is the fare?", kr: "요금이 얼마인가요?" },
      { speaker: "B", en: "It's 2 dollars.", kr: "2달러입니다." }
    ]
  },
  {
    id: "conv-017",
    title: "호텔 수건 요청",
    lines: [
      { speaker: "A", en: "Front desk, how can I help you?", kr: "프런트 데스크입니다. 무엇을 도와드릴까요?" },
      { speaker: "B", en: "We need more towels in room 302.", kr: "302호인데 수건이 더 필요해요." },
      { speaker: "A", en: "I'll send someone right up.", kr: "바로 직원을 보내드리겠습니다." },
      { speaker: "B", en: "Thank you.", kr: "감사합니다." }
    ]
  },
  {
    id: "conv-018",
    title: "기념품 사기",
    lines: [
      { speaker: "A", en: "How much is this keychain?", kr: "이 열쇠고리 얼마예요?" },
      { speaker: "B", en: "It's 5 dollars.", kr: "5달러입니다." },
      { speaker: "A", en: "Can you give me a discount?", kr: "할인 좀 해주실 수 있나요?" },
      { speaker: "B", en: "Okay, 3 for 12 dollars.", kr: "좋아요, 3개에 12달러 드릴게요." }
    ]
  },
  {
    id: "conv-019",
    title: "비행기 좌석",
    lines: [
      { speaker: "A", en: "Excuse me, I think you're in my seat.", kr: "실례합니다만, 제 자리에 앉아 계신 것 같아요." },
      { speaker: "B", en: "Oh, let me check my ticket.", kr: "아, 제 표 좀 확인해 볼게요." },
      { speaker: "B", en: "You're right. My seat is 12C.", kr: "맞네요. 제 자리는 12C네요." },
      { speaker: "A", en: "No problem.", kr: "괜찮습니다." }
    ]
  },
  {
    id: "conv-020",
    title: "환전",
    lines: [
      { speaker: "A", en: "I'd like to exchange dollars for won.", kr: "달러를 원화로 환전하고 싶어요." },
      { speaker: "B", en: "How much would you like to exchange?", kr: "얼마를 환전하시겠어요?" },
      { speaker: "A", en: "100 dollars, please.", kr: "100달러요." },
      { speaker: "B", en: "Here is your money and receipt.", kr: "여기 돈과 영수증입니다." }
    ]
  },

  // -------------------------
  // 3. 식당 & 카페 (21~30)
  // -------------------------
  {
    id: "conv-021",
    title: "커피 주문",
    lines: [
      { speaker: "A", en: "Can I get an Iced Americano?", kr: "아이스 아메리카노 한 잔 주세요." },
      { speaker: "B", en: "For here or to go?", kr: "드시고 가시나요, 가져가시나요?" },
      { speaker: "A", en: "To go, please.", kr: "가져갈게요." },
      { speaker: "B", en: "That will be 4 dollars.", kr: "4달러입니다." }
    ]
  },
  {
    id: "conv-022",
    title: "식당 예약",
    lines: [
      { speaker: "A", en: "I'd like to make a reservation for two.", kr: "두 명 예약하고 싶은데요." },
      { speaker: "B", en: "For what time?", kr: "몇 시로 하시겠어요?" },
      { speaker: "A", en: "At 7 pm tonight.", kr: "오늘 저녁 7시요." },
      { speaker: "B", en: "Okay, can I get your name?", kr: "알겠습니다. 성함이 어떻게 되시나요?" }
    ]
  },
  {
    id: "conv-023",
    title: "메뉴 추천",
    lines: [
      { speaker: "A", en: "Are you ready to order?", kr: "주문하시겠습니까?" },
      { speaker: "B", en: "What do you recommend here?", kr: "여기 추천 메뉴가 뭔가요?" },
      { speaker: "A", en: "The steak is very popular.", kr: "스테이크가 아주 인기 많아요." },
      { speaker: "B", en: "I'll have that, then.", kr: "그럼 그걸로 할게요." }
    ]
  },
  {
    id: "conv-024",
    title: "알레르기 문의",
    lines: [
      { speaker: "A", en: "Does this soup contain peanuts?", kr: "이 수프에 땅콩이 들어갔나요?" },
      { speaker: "B", en: "Yes, it does.", kr: "네, 들어갔습니다." },
      { speaker: "A", en: "I'm allergic to peanuts.", kr: "제가 땅콩 알레르기가 있어서요." },
      { speaker: "B", en: "Then I recommend the tomato soup.", kr: "그럼 토마토 수프를 추천해 드려요." }
    ]
  },
  {
    id: "conv-025",
    title: "계산서 요청",
    lines: [
      { speaker: "A", en: "Check, please.", kr: "계산서 주세요." },
      { speaker: "B", en: "Here you are. How was everything?", kr: "여기 있습니다. 음식은 어떠셨나요?" },
      { speaker: "A", en: "It was delicious.", kr: "맛있었어요." },
      { speaker: "B", en: "Glad to hear that.", kr: "다행이네요." }
    ]
  },
  {
    id: "conv-026",
    title: "맵기 조절",
    lines: [
      { speaker: "A", en: "Can you make it less spicy?", kr: "덜 맵게 해주실 수 있나요?" },
      { speaker: "B", en: "Sure. Mild or extra mild?", kr: "네. 순한 맛으로 해드릴까요, 아주 순하게 해드릴까요?" },
      { speaker: "A", en: "Just mild, please.", kr: "그냥 순한 맛으로 주세요." }
    ]
  },
  {
    id: "conv-027",
    title: "잘못된 주문",
    lines: [
      { speaker: "A", en: "Excuse me, I didn't order this.", kr: "실례지만, 저 이거 안 시켰는데요." },
      { speaker: "B", en: "Oh, I'm so sorry. Let me check.", kr: "아, 정말 죄송합니다. 확인해 볼게요." },
      { speaker: "B", en: "I'll bring the right dish immediately.", kr: "바로 맞는 음식으로 가져다드릴게요." },
      { speaker: "A", en: "Thank you.", kr: "감사합니다." }
    ]
  },
  {
    id: "conv-028",
    title: "패스트푸드 주문",
    lines: [
      { speaker: "A", en: "I'll have a cheeseburger set.", kr: "치즈버거 세트 하나 주세요." },
      { speaker: "B", en: "What drink would you like?", kr: "음료는 뭘로 하시겠어요?" },
      { speaker: "A", en: "Coke, please. No ice.", kr: "콜라요. 얼음은 빼주세요." }
    ]
  },
  {
    id: "conv-029",
    title: "물 리필",
    lines: [
      { speaker: "A", en: "Can we get some more water?", kr: "물 좀 더 주실 수 있나요?" },
      { speaker: "B", en: "Certainly. I'll bring a bottle.", kr: "물론이죠. 병으로 가져다드릴게요." },
      { speaker: "A", en: "Thanks.", kr: "감사합니다." }
    ]
  },
  {
    id: "conv-030",
    title: "영업 시간",
    lines: [
      { speaker: "A", en: "What time do you close?", kr: "몇 시에 문 닫나요?" },
      { speaker: "B", en: "We close at 10 pm.", kr: "오후 10시에 닫습니다." },
      { speaker: "A", en: "Is the kitchen still open?", kr: "주방은 아직 열려 있나요?" },
      { speaker: "B", en: "Yes, last order is at 9:30.", kr: "네, 마지막 주문은 9시 30분까지입니다." }
    ]
  },

  // -------------------------
  // 4. 쇼핑 & 편의시설 (31~40)
  // -------------------------
  {
    id: "conv-031",
    title: "옷 사이즈 문의",
    lines: [
      { speaker: "A", en: "Do you have this in a medium?", kr: "이거 미디엄 사이즈 있나요?" },
      { speaker: "B", en: "Let me check the stock.", kr: "재고 확인해 볼게요." },
      { speaker: "B", en: "Yes, here it is.", kr: "네, 여기 있습니다." },
      { speaker: "A", en: "Can I try it on?", kr: "입어봐도 되나요?" }
    ]
  },
  {
    id: "conv-032",
    title: "탈의실 위치",
    lines: [
      { speaker: "A", en: "Where is the fitting room?", kr: "탈의실이 어디인가요?" },
      { speaker: "B", en: "It's right over there, next to the mirror.", kr: "저기 거울 옆에 바로 있어요." },
      { speaker: "A", en: "Thank you.", kr: "감사합니다." }
    ]
  },
  {
    id: "conv-033",
    title: "환불 요청",
    lines: [
      { speaker: "A", en: "I'd like to return this shirt.", kr: "이 셔츠를 반품하고 싶어요." },
      { speaker: "B", en: "What seems to be the problem?", kr: "무슨 문제가 있나요?" },
      { speaker: "A", en: "It's too small for me.", kr: "저한테 너무 작아서요." },
      { speaker: "B", en: "Do you have the receipt?", kr: "영수증 가지고 계신가요?" }
    ]
  },
  {
    id: "conv-034",
    title: "계산 줄 서기",
    lines: [
      { speaker: "A", en: "Are you in line?", kr: "줄 서 계신 건가요?" },
      { speaker: "B", en: "Yes, I am.", kr: "네, 맞아요." },
      { speaker: "A", en: "Okay, thanks.", kr: "알겠습니다, 감사합니다." }
    ]
  },
  {
    id: "conv-035",
    title: "선물 포장",
    lines: [
      { speaker: "A", en: "Can you wrap this as a gift?", kr: "이거 선물 포장해주실 수 있나요?" },
      { speaker: "B", en: "Sure. It costs an extra 1 dollar.", kr: "그럼요. 1달러 추가됩니다." },
      { speaker: "A", en: "That's fine.", kr: "괜찮아요." }
    ]
  },
  {
    id: "conv-036",
    title: "약국에서",
    lines: [
      { speaker: "A", en: "I have a terrible headache.", kr: "두통이 너무 심해요." },
      { speaker: "B", en: "How long have you had it?", kr: "얼마나 되셨나요?" },
      { speaker: "A", en: "Since this morning.", kr: "오늘 아침부터요." },
      { speaker: "B", en: "Take these pills twice a day.", kr: "이 약을 하루에 두 번 드세요." }
    ]
  },
  {
    id: "conv-037",
    title: "마트에서",
    lines: [
      { speaker: "A", en: "Where can I find milk?", kr: "우유는 어디에 있나요?" },
      { speaker: "B", en: "It's in the dairy section, aisle 3.", kr: "유제품 코너인 3번 통로에 있습니다." },
      { speaker: "A", en: "Thanks.", kr: "감사합니다." }
    ]
  },
  {
    id: "conv-038",
    title: "편의점",
    lines: [
      { speaker: "A", en: "Do you sell umbrellas?", kr: "우산 파나요?" },
      { speaker: "B", en: "Yes, they are right next to the door.", kr: "네, 문 바로 옆에 있어요." },
      { speaker: "A", en: "I'll take one.", kr: "하나 살게요." }
    ]
  },
  {
    id: "conv-039",
    title: "미용실 예약",
    lines: [
      { speaker: "A", en: "I want to get a haircut.", kr: "머리를 자르고 싶어요." },
      { speaker: "B", en: "Do you have a reservation?", kr: "예약하셨나요?" },
      { speaker: "A", en: "No, can I get it done now?", kr: "아니요, 지금 바로 할 수 있나요?" },
      { speaker: "B", en: "Wait a moment, let me check.", kr: "잠시만요, 확인해 볼게요." }
    ]
  },
  {
    id: "conv-040",
    title: "분실물 센터",
    lines: [
      { speaker: "A", en: "I lost my wallet.", kr: "지갑을 잃어버렸어요." },
      { speaker: "B", en: "Where did you last see it?", kr: "마지막으로 어디서 보셨나요?" },
      { speaker: "A", en: "I think I left it in the restroom.", kr: "화장실에 두고 온 것 같아요." },
      { speaker: "B", en: "Let's go check the lost and found.", kr: "분실물 센터를 확인해 봅시다." }
    ]
  },

  // -------------------------
  // 5. 비즈니스 & 학교 (41~50)
  // -------------------------
  {
    id: "conv-041",
    title: "회의 일정",
    lines: [
      { speaker: "A", en: "Can we reschedule the meeting?", kr: "회의 일정을 다시 잡을 수 있을까요?" },
      { speaker: "B", en: "Sure. When are you free?", kr: "네. 언제 시간 되세요?" },
      { speaker: "A", en: "I'm free tomorrow afternoon.", kr: "내일 오후에 시간 됩니다." },
      { speaker: "B", en: "Okay, let's meet at 2 pm.", kr: "좋아요, 오후 2시에 봅시다." }
    ]
  },
  {
    id: "conv-042",
    title: "병가 내기",
    lines: [
      { speaker: "A", en: "I don't feel well today.", kr: "오늘 몸이 좀 안 좋아요." },
      { speaker: "B", en: "You should go home and rest.", kr: "집에 가서 쉬는 게 좋겠어요." },
      { speaker: "A", en: "I think I need to take a sick day.", kr: "병가를 내야 할 것 같아요." },
      { speaker: "B", en: "Don't worry about work. Get better soon.", kr: "일 걱정 말고 푹 쉬세요. 빨리 낫고요." }
    ]
  },
  {
    id: "conv-043",
    title: "마감 기한",
    lines: [
      { speaker: "A", en: "When is the deadline for this report?", kr: "이 보고서 마감일이 언제죠?" },
      { speaker: "B", en: "It's due by next Monday.", kr: "다음 주 월요일까지입니다." },
      { speaker: "A", en: "I'll try to finish it by Friday.", kr: "금요일까지 끝내보도록 할게요." },
      { speaker: "B", en: "That would be great.", kr: "그러면 아주 좋죠." }
    ]
  },
  {
    id: "conv-044",
    title: "와이파이 비번",
    lines: [
      { speaker: "A", en: "What's the Wi-Fi password?", kr: "와이파이 비밀번호가 뭐예요?" },
      { speaker: "B", en: "It's written on the whiteboard.", kr: "화이트보드에 적혀 있어요." },
      { speaker: "A", en: "Oh, I see it. Thanks.", kr: "아, 보이네요. 고마워요." }
    ]
  },
  {
    id: "conv-045",
    title: "면접 질문",
    lines: [
      { speaker: "A", en: "Tell me about yourself.", kr: "본인에 대해 이야기해 주세요." },
      { speaker: "B", en: "I am a software engineer with 5 years of experience.", kr: "저는 5년 경력의 소프트웨어 엔지니어입니다." },
      { speaker: "A", en: "Why do you want to work here?", kr: "왜 여기서 일하고 싶으신가요?" },
      { speaker: "B", en: "I admire your company's culture.", kr: "이 회사의 문화를 존경하기 때문입니다." }
    ]
  },
  {
    id: "conv-046",
    title: "숙제 질문",
    lines: [
      { speaker: "A", en: "Did you finish the homework?", kr: "숙제 다 했어?" },
      { speaker: "B", en: "No, it was too difficult.", kr: "아니, 너무 어려웠어." },
      { speaker: "A", en: "Do you want me to help you?", kr: "내가 좀 도와줄까?" },
      { speaker: "B", en: "Really? That would be a lifesaver.", kr: "정말? 그러면 진짜 살 것 같아." }
    ]
  },
  {
    id: "conv-047",
    title: "프린터 고장",
    lines: [
      { speaker: "A", en: "The printer isn't working.", kr: "프린터가 작동을 안 해요." },
      { speaker: "B", en: "Did you check the paper tray?", kr: "용지함 확인해 봤어요?" },
      { speaker: "A", en: "Yeah, it's full of paper.", kr: "네, 종이는 가득 차 있어요." },
      { speaker: "B", en: "I'll call tech support.", kr: "기술 지원 팀에 전화해 볼게요." }
    ]
  },
  {
    id: "conv-048",
    title: "점심 메뉴 고르기",
    lines: [
      { speaker: "A", en: "What should we have for lunch?", kr: "점심 뭐 먹을까요?" },
      { speaker: "B", en: "I'm craving sushi.", kr: "초밥이 땡기네요." },
      { speaker: "A", en: "There is a good sushi place nearby.", kr: "근처에 괜찮은 초밥집 있어요." },
      { speaker: "B", en: "Let's go there.", kr: "거기로 가요." }
    ]
  },
  {
    id: "conv-049",
    title: "엘리베이터",
    lines: [
      { speaker: "A", en: "Hold the elevator, please!", kr: "엘리베이터 좀 잡아주세요!" },
      { speaker: "B", en: "I got it. Hurry up.", kr: "잡았어요. 서두르세요." },
      { speaker: "A", en: "Thanks. Which floor?", kr: "감사합니다. 몇 층 가세요?" },
      { speaker: "B", en: "10th floor, please.", kr: "10층이요." }
    ]
  },
  {
    id: "conv-050",
    title: "퇴근 인사",
    lines: [
      { speaker: "A", en: "I'm leaving now. See you tomorrow.", kr: "저 먼저 가볼게요. 내일 봬요." },
      { speaker: "B", en: "Okay, have a good evening.", kr: "네, 좋은 저녁 보내세요." },
      { speaker: "A", en: "You too. Don't work too late.", kr: "당신도요. 너무 늦게까지 일하지 마시고요." },
      { speaker: "B", en: "Thanks. Bye!", kr: "고마워요. 안녕히 가세요!" }
    ]
  }
];
