// pattern.js

const patternData = [
  {
    id: "im-looking-for",
    title: "I'm looking for...",
    desc: "무언가를 찾고 있을 때 쓰는 기본 표현.",
    examples: [
      { en: "I'm looking for my keys.", kr: "열쇠를 찾고 있어요." },
      { en: "I'm looking for the restroom.", kr: "화장실을 찾고 있어요." },
      { en: "I'm looking for a gift for my mom.", kr: "엄마한테 줄 선물을 찾고 있어요." },
      { en: "I'm looking for a good restaurant around here.", kr: "이 근처에 좋은 식당을 찾고 있어요." },
      { en: "I'm looking for a new job closer to home.", kr: "집에서 더 가까운 직장을 찾고 있어요." }
    ]
  },
  {
    id: "im-trying-to",
    title: "I'm trying to...",
    desc: "무언가를 하려고 노력 중일 때 쓰는 표현.",
    examples: [
      { en: "I'm trying to learn English.", kr: "영어를 배우려고 노력 중이에요." },
      { en: "I'm trying to focus on my work.", kr: "일에 집중하려고 하고 있어요." },
      { en: "I'm trying to cut down on coffee.", kr: "커피를 줄이려고 하고 있어요." },
      { en: "I'm trying to find a cheaper flight to Tokyo.", kr: "도쿄 가는 더 싼 항공편을 찾아보는 중이에요." },
      { en: "I'm trying to save money for a trip with friends.", kr: "친구들이랑 여행 가려고 돈 모으는 중이에요." }
    ]
  },
  {
    id: "im-here-to",
    title: "I'm here to...",
    desc: "어디에 온 목적을 말할 때 쓰는 표현.",
    examples: [
      { en: "I'm here to check in.", kr: "체크인하러 왔어요." },
      { en: "I'm here to see Dr. Kim.", kr: "김 선생님 뵈러 왔어요." },
      { en: "I'm here to pick up my order.", kr: "주문한 걸 찾으러 왔어요." },
      { en: "I'm here to return this jacket.", kr: "이 재킷 반품하러 왔어요." },
      { en: "I'm here to interview for the marketing position.", kr: "마케팅 직무 면접 보러 왔어요." }
    ]
  },
  {
    id: "im-glad-to",
    title: "I'm glad to...",
    desc: "무언가를 하게 되어 기쁠 때 쓰는 표현.",
    examples: [
      { en: "I'm glad to meet you.", kr: "만나서 반가워요." },
      { en: "I'm glad to hear that.", kr: "그 말을 들으니 기쁘네요." },
      { en: "I'm glad to be back home.", kr: "집에 돌아오니 좋네요." },
      { en: "I'm glad to help if you need anything.", kr: "필요한 거 있으면 기꺼이 도와줄게요." },
      { en: "I'm glad to finally be working with your team.", kr: "드디어 그쪽 팀이랑 같이 일하게 돼서 기뻐요." }
    ]
  },
  {
    id: "im-about-to",
    title: "I'm about to...",
    desc: "막 ~하려던 참일 때 쓰는 표현.",
    examples: [
      { en: "I'm about to board the plane.", kr: "이제 막 비행기 타려는 참이에요." },
      { en: "I'm about to start a meeting.", kr: "지금 회의 시작하려던 참이에요." },
      { en: "I'm about to leave the office.", kr: "이제 막 퇴근하려던 참이에요." },
      { en: "I'm about to order food. Want anything?", kr: "막 음식 주문하려던 참인데, 뭐 먹을래요?" },
      { en: "I'm about to head out. Do you need a ride?", kr: "막 나가려던 참인데, 태워다 줄까요?" }
    ]
  },
  {
    id: "im-not-sure-if",
    title: "I'm not sure if...",
    desc: "확신이 없을 때, 조심스럽게 말할 때 쓰는 표현.",
    examples: [
      { en: "I'm not sure if this is right.", kr: "이게 맞는지 잘 모르겠어요." },
      { en: "I'm not sure if I can make it.", kr: "제가 갈 수 있을지 잘 모르겠어요." },
      { en: "I'm not sure if they take credit cards.", kr: "여기 카드 받는지 잘 모르겠어요." },
      { en: "I'm not sure if the store is open today.", kr: "그 가게 오늘 문 여는지 잘 모르겠어요." },
      { en: "I'm not sure if I sent the file to everyone.", kr: "파일을 모두에게 보냈는지 잘 모르겠어요." }
    ]
  },
  {
    id: "im-supposed-to",
    title: "I'm supposed to...",
    desc: "규칙, 약속, 의무 등 '원래 ~하기로 되어 있다'를 말할 때.",
    examples: [
      { en: "I'm supposed to meet him at 3.", kr: "3시에 그 사람 만나기로 했어요." },
      { en: "I'm supposed to finish this today.", kr: "이거 오늘 끝내기로 돼 있어요." },
      { en: "I'm supposed to check out by noon.", kr: "정오까지 체크아웃해야 돼요." },
      { en: "I'm supposed to pick up my kids at five.", kr: "5시에 애들 데리러 가기로 돼 있어요." },
      { en: "I'm supposed to be on a diet, but this looks amazing.", kr: "다이어트 해야 하는데, 이거 너무 맛있어 보여요." }
    ]
  },
  {
    id: "im-worried-about",
    title: "I'm worried about...",
    desc: "걱정되는 대상을 말할 때 쓰는 표현.",
    examples: [
      { en: "I'm worried about the exam.", kr: "시험이 걱정돼요." },
      { en: "I'm worried about my health.", kr: "건강이 걱정돼요." },
      { en: "I'm worried about missing my flight.", kr: "비행기 놓칠까 봐 걱정돼요." },
      { en: "I'm worried about the presentation tomorrow.", kr: "내일 발표가 걱정돼요." },
      { en: "I'm worried about my friend. She seems really down.", kr: "친구가 걱정돼요. 요즘 많이 우울해 보여서요." }
    ]
  },
  {
    id: "im-ready-to",
    title: "I'm ready to...",
    desc: "무언가를 할 준비가 되었음을 말할 때.",
    examples: [
      { en: "I'm ready to order now.", kr: "이제 주문할 준비 됐어요." },
      { en: "I'm ready to go when you are.", kr: "그쪽만 준비되면 저는 바로 출발할 수 있어요." },
      { en: "I'm ready to share my screen now.", kr: "이제 화면 공유할 준비 됐어요." },
      { en: "I'm ready to pay. Can I get the check?", kr: "계산할게요. 계산서 좀 주시겠어요?" },
      { en: "I'm ready to take on more responsibility at work.", kr: "회사에서 더 많은 책임을 맡을 준비가 됐어요." }
    ]
  },
  {
    id: "i-feel-like",
    title: "I feel like...",
    desc: "막연히 ~하고 싶은 기분일 때 쓰는 표현.",
    examples: [
      { en: "I feel like taking a walk.", kr: "산책하고 싶은 기분이에요." },
      { en: "I feel like staying in tonight.", kr: "오늘 밤은 그냥 집에 있고 싶어요." },
      { en: "I feel like eating something sweet.", kr: "달달한 게 먹고 싶어요." },
      { en: "I feel like having pizza for dinner.", kr: "저녁으로 피자 먹고 싶어요." },
      { en: "I feel like going somewhere warm this winter.", kr: "이번 겨울엔 따뜻한 데 가고 싶어요." }
    ]
  },
  {
    id: "can-i-get",
    title: "Can I get...?",
    desc: "가게나 식당에서 주문하거나, 무엇을 요청할 때.",
    examples: [
      { en: "Can I get the check, please?", kr: "계산서 좀 주시겠어요?" },
      { en: "Can I get a cup of coffee?", kr: "커피 한 잔 주실 수 있나요?" },
      { en: "Can I get a refill on my drink?", kr: "음료 리필해 주실 수 있나요?" },
      { en: "Can I get this in a larger size?", kr: "이거 더 큰 사이즈로 받을 수 있을까요?" },
      { en: "Can I get a window seat on this flight?", kr: "이 비행기 창가 자리로 받을 수 있을까요?" }
    ]
  },
  {
    id: "can-you-help-me",
    title: "Can you help me...?",
    desc: "구체적인 도움을 요청할 때 쓰는 표현.",
    examples: [
      { en: "Can you help me with this?", kr: "이것 좀 도와줄래요?" },
      { en: "Can you help me with my homework?", kr: "숙제 좀 도와줄래요?" },
      { en: "Can you help me carry these bags?", kr: "이 가방들 드는 것 좀 도와줄래요?" },
      { en: "Can you help me find this address?", kr: "이 주소 찾는 것 좀 도와줄 수 있어요?" },
      { en: "Can you help me set up the projector for the meeting?", kr: "회의용 프로젝터 설치하는 것 좀 도와줄래요?" }
    ]
  },
  {
    id: "can-you-tell-me",
    title: "Can you tell me...?",
    desc: "정보를 물어볼 때 공손하게 쓰는 표현.",
    examples: [
      { en: "Can you tell me how much this is?", kr: "이거 얼마인지 알려줄 수 있어요?" },
      { en: "Can you tell me the Wi-Fi password?", kr: "와이파이 비밀번호 좀 알려줄래요?" },
      { en: "Can you tell me where the station is?", kr: "역이 어디 있는지 알려줄 수 있어요?" },
      { en: "Can you tell me what time the museum closes?", kr: "박물관 몇 시에 닫는지 알려줄 수 있어요?" },
      { en: "Can you tell me a little more about the job?", kr: "그 일에 대해 좀 더 얘기해 줄 수 있어요?" }
    ]
  },
  {
    id: "let-me-know-if",
    title: "Let me know if...",
    desc: "~하면 나에게 알려 달라고 부탁할 때.",
    examples: [
      { en: "Let me know if it's too spicy.", kr: "너무 매우면 말해요." },
      { en: "Let me know if you need anything.", kr: "필요한 게 있으면 말해요." },
      { en: "Let me know if you're free tomorrow.", kr: "내일 시간 되면 알려줘요." },
      { en: "Let me know if you have any questions.", kr: "궁금한 거 있으면 알려줘요." },
      { en: "Let me know if you're running late, okay?", kr: "늦을 것 같으면 알려줘요, 알았죠?" }
    ]
  },
  {
    id: "let-me-see",
    title: "Let me see...",
    desc: "상황을 확인하거나, 생각해 볼 때 쓰는 말.",
    examples: [
      { en: "Let me see the menu.", kr: "메뉴 좀 볼게요." },
      { en: "Let me see what I can do.", kr: "제가 뭘 할 수 있을지 좀 볼게요." },
      { en: "Let me see... I think it's this way.", kr: "어디 보자... 이쪽인 것 같아요." },
      { en: "Let me see if there's a table available.", kr: "빈 테이블 있는지 볼게요." },
      { en: "Let me see your ticket and passport, please.", kr: "티켓이랑 여권 좀 보여주세요." }
    ]
  },
  {
    id: "let-me-check",
    title: "Let me check...",
    desc: "확인해 보고 말하겠다고 할 때.",
    examples: [
      { en: "Let me check my schedule.", kr: "제 일정 좀 확인해 볼게요." },
      { en: "Let me check with my boss.", kr: "상사한테 한번 확인해 볼게요." },
      { en: "Let me check the weather first.", kr: "먼저 날씨 좀 확인해 볼게요." },
      { en: "Let me check if we have it in stock.", kr: "재고 있는지 확인해 볼게요." },
      { en: "Let me check my email and get back to you.", kr: "메일 확인해 보고 다시 연락드릴게요." }
    ]
  },
  {
    id: "ill-take",
    title: "I'll take...",
    desc: "이걸로 하겠다고 선택을 말할 때.",
    examples: [
      { en: "I'll take this one, please.", kr: "이걸로 할게요." },
      { en: "I'll take the window seat.", kr: "창가 쪽 자리로 할게요." },
      { en: "I'll take two of these, please.", kr: "이거 두 개 주세요." },
      { en: "I'll take the blue one. It looks better.", kr: "파란 걸로 할게요. 그게 더 나아 보여요." },
      { en: "I'll take the room with the ocean view.", kr: "바다 보이는 방으로 할게요." }
    ]
  },
  {
    id: "ill-have",
    title: "I'll have...",
    desc: "식당, 카페에서 주문할 때 자주 쓰는 표현.",
    examples: [
      { en: "I'll have the same, please.", kr: "저도 같은 걸로 주세요." },
      { en: "I'll have the pasta, please.", kr: "파스타로 주세요." },
      { en: "I'll have an iced americano.", kr: "아이스 아메리카노로 할게요." },
      { en: "I'll have a burger with no onions.", kr: "버거 양파 빼고 주세요." },
      { en: "I'll have the steak, medium rare, with a side salad.", kr: "스테이크 미디엄 레어로, 샐러드 곁들여서 주세요." }
    ]
  },
  {
    id: "i-need-to",
    title: "I need to...",
    desc: "해야만 하는 일, 필요해서 해야 하는 일을 말할 때.",
    examples: [
      { en: "I need to charge my phone.", kr: "휴대폰 충전해야 해요." },
      { en: "I need to get some sleep.", kr: "잠을 좀 자야겠어요." },
      { en: "I need to finish this today.", kr: "이걸 오늘 끝내야 해요." },
      { en: "I need to exchange some money at the airport.", kr: "공항에서 환전 좀 해야 해요." },
      { en: "I need to call my mom back before dinner.", kr: "저녁 먹기 전에 엄마한테 다시 전화해야 해요." }
    ]
  },
  {
    id: "i-want-to",
    title: "I want to...",
    desc: "하고 싶은 행동, 바람을 말할 때.",
    examples: [
      { en: "I want to travel the world.", kr: "세계 여행을 하고 싶어요." },
      { en: "I want to try something new.", kr: "뭔가 새로운 걸 해보고 싶어요." },
      { en: "I want to improve my English.", kr: "영어 실력을 늘리고 싶어요." },
      { en: "I want to talk to you about the project.", kr: "프로젝트에 대해 얘기 좀 하고 싶어요." },
      { en: "I want to see the city lights from up there.", kr: "저 위에서 야경 보고 싶어요." }
    ]
  },
  {
    id: "im-going-to",
    title: "I'm going to...",
    desc: "이미 정해진 미래 계획을 말할 때.",
    examples: [
      { en: "I'm going to grab a coffee.", kr: "커피 한잔 하러 갈게요." },
      { en: "I'm going to cook dinner tonight.", kr: "오늘 저녁은 제가 요리할 거예요." },
      { en: "I'm going to rent a car when we get there.", kr: "거기 도착하면 차를 빌릴 거예요." },
      { en: "I'm going to visit my parents this weekend.", kr: "이번 주말에 부모님 뵈러 갈 거예요." },
      { en: "I'm going to start a new job next month.", kr: "다음 달에 새 직장에 출근해요." }
    ]
  },
  {
    id: "im-planning-to",
    title: "I'm planning to...",
    desc: "현재 계획 중인 일을 말할 때.",
    examples: [
      { en: "I'm planning to move next year.", kr: "내년에 이사할 계획이에요." },
      { en: "I'm planning to take a break.", kr: "좀 쉴 계획이에요." },
      { en: "I'm planning to visit Japan this fall.", kr: "이번 가을에 일본에 갈 계획이에요." },
      { en: "I'm planning to throw a party for her birthday.", kr: "걔 생일 파티를 열어줄 계획이에요." },
      { en: "I'm planning to take a few days off in May.", kr: "5월에 며칠 휴가 낼 계획이에요." }
    ]
  },
  {
    id: "id-like-to",
    title: "I'd like to...",
    desc: "공손하게 자신의 희망이나 요청을 말할 때.",
    examples: [
      { en: "I'd like to make a reservation.", kr: "예약을 하고 싶어요." },
      { en: "I'd like to ask you something.", kr: "뭐 하나 여쭤보고 싶어요." },
      { en: "I'd like to return this, please.", kr: "이거 반품하고 싶어요." },
      { en: "I'd like to change my seat if possible.", kr: "가능하면 자리를 바꾸고 싶어요." },
      { en: "I'd like to schedule a meeting for next Tuesday.", kr: "다음 주 화요일로 회의를 잡고 싶어요." }
    ]
  },
  {
    id: "id-rather",
    title: "I'd rather...",
    desc: "둘 중 하나를 더 선호할 때 쓰는 표현.",
    examples: [
      { en: "I'd rather stay home.", kr: "집에 있는 게 더 좋겠어요." },
      { en: "I'd rather not talk about it.", kr: "그 얘기는 안 하는 게 좋겠어요." },
      { en: "I'd rather walk. It's a nice day.", kr: "걸어갈래요. 날씨 좋잖아요." },
      { en: "I'd rather sit inside. It's too cold out here.", kr: "안에 앉을래요. 밖은 너무 추워요." },
      { en: "I'd rather take the train than drive in traffic.", kr: "막히는 길 운전하느니 기차 탈래요." }
    ]
  },
  {
    id: "i-prefer",
    title: "I prefer...",
    desc: "일반적인 취향, 선호를 말할 때.",
    examples: [
      { en: "I prefer the aisle seat.", kr: "통로 쪽 자리가 더 좋아요." },
      { en: "I prefer tea to coffee.", kr: "커피보다 차를 더 좋아해요." },
      { en: "I prefer texting to calling.", kr: "전화보다 문자가 더 편해요." },
      { en: "I prefer working in the morning.", kr: "아침에 일하는 걸 더 선호해요." },
      { en: "I prefer small restaurants with a cozy atmosphere.", kr: "아늑한 분위기의 작은 식당이 더 좋아요." }
    ]
  },
  {
    id: "im-thinking-about",
    title: "I'm thinking about...",
    desc: "고민 중인 계획, 아이디어를 말할 때.",
    examples: [
      { en: "I'm thinking about changing jobs.", kr: "이직을 고민 중이에요." },
      { en: "I'm thinking about getting a dog.", kr: "강아지를 키울까 생각 중이에요." },
      { en: "I'm thinking about joining a gym.", kr: "헬스장을 다녀볼까 생각 중이에요." },
      { en: "I'm thinking about cutting my hair short.", kr: "머리를 짧게 자를까 생각 중이에요." },
      { en: "I'm thinking about going to Jeju for the holidays.", kr: "연휴에 제주도 갈까 생각 중이에요." }
    ]
  },
  {
    id: "i-was-wondering-if",
    title: "I was wondering if...",
    desc: "매우 공손하게 부탁이나 질문을 꺼낼 때.",
    examples: [
      { en: "I was wondering if you're free tomorrow.", kr: "혹시 내일 시간 괜찮으신가 해서요." },
      { en: "I was wondering if you could help me.", kr: "혹시 저 좀 도와주실 수 있나 해서요." },
      { en: "I was wondering if you have this in black.", kr: "혹시 이거 검은색도 있나 해서요." },
      { en: "I was wondering if I could leave early today.", kr: "혹시 오늘 좀 일찍 가도 될까 해서요." },
      { en: "I was wondering if we could move our meeting to Friday.", kr: "혹시 회의를 금요일로 옮길 수 있을까 해서요." }
    ]
  },
  {
    id: "it-seems-like",
    title: "It seems like...",
    desc: "상황을 보고 추측할 때 쓰는 표현.",
    examples: [
      { en: "It seems like a good idea.", kr: "좋은 생각인 것 같아요." },
      { en: "It seems like he's busy.", kr: "그 사람 바쁜 것 같아요." },
      { en: "It seems like everyone's already here.", kr: "다들 벌써 와 있는 것 같네요." },
      { en: "It seems like the printer isn't working again.", kr: "프린터가 또 안 되는 것 같아요." },
      { en: "It seems like you've had a really long day.", kr: "오늘 하루 정말 길었던 것 같네요." }
    ]
  },
  {
    id: "it-looks-like",
    title: "It looks like...",
    desc: "보이는 모습으로 판단할 때.",
    examples: [
      { en: "It looks like they're closed.", kr: "문을 닫은 것 같아요." },
      { en: "It looks like it's going to rain.", kr: "비 올 것 같아요." },
      { en: "It looks like our flight is delayed.", kr: "우리 비행기 지연된 것 같아요." },
      { en: "It looks like you've lost some weight.", kr: "살 좀 빠진 것 같아요." },
      { en: "It looks like we'll need a bigger table for everyone.", kr: "다 앉으려면 더 큰 테이블이 필요할 것 같아요." }
    ]
  },
  {
    id: "it-feels-like",
    title: "It feels like...",
    desc: "느낌, 분위기를 말할 때.",
    examples: [
      { en: "It feels like home here.", kr: "여기 오면 집에 온 것 같아요." },
      { en: "It feels like summer today.", kr: "오늘은 여름 같아요." },
      { en: "It feels like we just met.", kr: "우리 엊그제 만난 것 같아요." },
      { en: "It feels like I've been here before.", kr: "여기 전에 와 본 것 같은 느낌이에요." },
      { en: "It feels like this week is never going to end.", kr: "이번 주는 영영 안 끝날 것 같아요." }
    ]
  },
  {
    id: "do-you-want-to",
    title: "Do you want to...?",
    desc: "상대에게 제안하거나 함께 하자고 할 때.",
    examples: [
      { en: "Do you want to grab lunch?", kr: "점심 같이 먹을래요?" },
      { en: "Do you want to watch a movie?", kr: "영화 볼래요?" },
      { en: "Do you want to split the bill?", kr: "나눠서 계산할래요?" },
      { en: "Do you want to come over for dinner?", kr: "저녁 먹으러 우리 집에 올래요?" },
      { en: "Do you want to take a quick break before the next meeting?", kr: "다음 회의 전에 잠깐 쉴래요?" }
    ]
  },
  {
    id: "do-you-mind-if",
    title: "Do you mind if...?",
    desc: "내가 ~해도 괜찮은지 예의를 갖춰 물을 때.",
    examples: [
      { en: "Do you mind if I join you?", kr: "같이 껴도 될까요?" },
      { en: "Do you mind if I sit here?", kr: "여기 앉아도 괜찮을까요?" },
      { en: "Do you mind if I open the window?", kr: "창문 열어도 괜찮을까요?" },
      { en: "Do you mind if I record the meeting?", kr: "회의 녹음해도 괜찮을까요?" },
      { en: "Do you mind if I switch seats with you?", kr: "저랑 자리 바꿔도 괜찮을까요?" }
    ]
  },
  {
    id: "what-do-you-think-about",
    title: "What do you think about...?",
    desc: "상대의 의견을 물을 때.",
    examples: [
      { en: "What do you think about this color?", kr: "이 색깔 어때요?" },
      { en: "What do you think about this plan?", kr: "이 계획 어떻게 생각해요?" },
      { en: "What do you think about the new manager?", kr: "새로 온 매니저 어떻게 생각해요?" },
      { en: "What do you think about working from home?", kr: "재택근무에 대해 어떻게 생각해요?" },
      { en: "What do you think about going to the beach this weekend?", kr: "이번 주말에 바다 가는 거 어때요?" }
    ]
  },
  {
    id: "how-about",
    title: "How about...?",
    desc: "대안을 제안하거나 의견을 낼 때.",
    examples: [
      { en: "How about taking a break?", kr: "잠깐 쉬는 건 어때요?" },
      { en: "How about this one in blue?", kr: "이거 파란색은 어때요?" },
      { en: "How about Friday night instead?", kr: "대신 금요일 밤은 어때요?" },
      { en: "How about we order some pizza?", kr: "피자 시켜 먹는 거 어때요?" },
      { en: "How about meeting in front of the station at seven?", kr: "7시에 역 앞에서 만나는 거 어때요?" }
    ]
  },
  {
    id: "what-if",
    title: "What if...?",
    desc: "가정이나 다른 가능성을 제안할 때.",
    examples: [
      { en: "What if we try again?", kr: "다시 한번 해보면 어때요?" },
      { en: "What if it doesn't work?", kr: "만약 그게 안 되면 어떡하죠?" },
      { en: "What if we get takeout instead?", kr: "대신 포장해 오면 어때요?" },
      { en: "What if we miss the last train?", kr: "막차 놓치면 어떡하죠?" },
      { en: "What if the client doesn't like our idea?", kr: "고객이 우리 아이디어를 마음에 안 들어 하면 어쩌죠?" }
    ]
  },
  {
    id: "is-it-okay-if",
    title: "Is it okay if...?",
    desc: "~해도 괜찮을지 허락을 구할 때.",
    examples: [
      { en: "Is it okay if I pay by card?", kr: "카드로 계산해도 괜찮을까요?" },
      { en: "Is it okay if I call you later?", kr: "나중에 전화해도 괜찮을까요?" },
      { en: "Is it okay if I bring a friend?", kr: "친구 데려가도 괜찮을까요?" },
      { en: "Is it okay if I leave my bag here?", kr: "가방 여기 둬도 괜찮을까요?" },
      { en: "Is it okay if I work from home on Friday?", kr: "금요일에 재택근무해도 괜찮을까요?" }
    ]
  },
  {
    id: "could-you",
    title: "Could you...?",
    desc: "공손하게 도움이나 행동을 부탁할 때.",
    examples: [
      { en: "Could you speak more slowly?", kr: "좀 더 천천히 말해 주시겠어요?" },
      { en: "Could you pass me the salt?", kr: "소금 좀 건네주시겠어요?" },
      { en: "Could you take a picture of us?", kr: "저희 사진 좀 찍어 주시겠어요?" },
      { en: "Could you call a taxi for me, please?", kr: "택시 좀 불러 주시겠어요?" },
      { en: "Could you send me the file by tomorrow?", kr: "내일까지 파일 좀 보내 주시겠어요?" }
    ]
  },
  {
    id: "should-i",
    title: "Should I...?",
    desc: "내가 ~하는 게 좋을지 의견을 물을 때.",
    examples: [
      { en: "Should I call her now?", kr: "지금 걔한테 전화하는 게 좋을까요?" },
      { en: "Should I bring anything to the party?", kr: "파티에 뭐 가져가는 게 좋을까요?" },
      { en: "Should I book a table in advance?", kr: "미리 자리 예약하는 게 좋을까요?" },
      { en: "Should I wear a suit to the interview?", kr: "면접에 정장 입고 가는 게 좋을까요?" },
      { en: "Should I take the bus or the subway from here?", kr: "여기서 버스 타는 게 나아요, 지하철 타는 게 나아요?" }
    ]
  },
  {
    id: "would-you-like-to",
    title: "Would you like to...?",
    desc: "공손하게 초대하거나 제안할 때.",
    examples: [
      { en: "Would you like to join us?", kr: "같이 하실래요?" },
      { en: "Would you like to try this?", kr: "이거 한번 드셔 보실래요?" },
      { en: "Would you like to leave a message?", kr: "메시지 남기시겠어요?" },
      { en: "Would you like to sit by the window?", kr: "창가 쪽에 앉으시겠어요?" },
      { en: "Would you like to grab dinner after work on Friday?", kr: "금요일 퇴근하고 저녁 같이 드실래요?" }
    ]
  },
  {
    id: "are-you-sure",
    title: "Are you sure...?",
    desc: "상대의 확신을 다시 확인할 때.",
    examples: [
      { en: "Are you sure about that?", kr: "그거 확실해요?" },
      { en: "Are you sure it's okay?", kr: "정말 괜찮은 거 맞아요?" },
      { en: "Are you sure this is the right bus?", kr: "이 버스 맞는 거 확실해요?" },
      { en: "Are you sure you don't want dessert?", kr: "정말 디저트 안 먹어요?" },
      { en: "Are you sure we turned off the stove before leaving?", kr: "나오기 전에 가스레인지 끈 거 확실해요?" }
    ]
  },
  {
    id: "i-have-no-idea",
    title: "I have no idea...",
    desc: "전혀 모르겠다고 말할 때.",
    examples: [
      { en: "I have no idea where it is.", kr: "그게 어디 있는지 전혀 모르겠어요." },
      { en: "I have no idea how to fix this.", kr: "이거 어떻게 고치는지 전혀 모르겠어요." },
      { en: "I have no idea what you're talking about.", kr: "무슨 말 하는 건지 전혀 모르겠어요." },
      { en: "I have no idea why the meeting got canceled.", kr: "회의가 왜 취소됐는지 전혀 모르겠어요." },
      { en: "I have no idea what to get him for his birthday.", kr: "걔 생일 선물로 뭘 사줘야 할지 전혀 모르겠어요." }
    ]
  },
  {
    id: "i-have-trouble-ing",
    title: "I have trouble ~ing",
    desc: "~하는 데 어려움이 있을 때.",
    examples: [
      { en: "I have trouble remembering names.", kr: "이름을 잘 기억 못 해요." },
      { en: "I have trouble waking up early.", kr: "일찍 일어나는 게 힘들어요." },
      { en: "I have trouble sleeping at night.", kr: "밤에 잠을 잘 못 자요." },
      { en: "I have trouble understanding fast English.", kr: "빠른 영어는 알아듣기 힘들어요." },
      { en: "I have trouble saying no to my coworkers.", kr: "동료들한테 거절을 잘 못 해요." }
    ]
  },
  {
    id: "i-cant-believe",
    title: "I can't believe...",
    desc: "믿기 힘든 일을 들었을 때 감탄/충격 표현.",
    examples: [
      { en: "I can't believe you did that.", kr: "네가 그런 일을 했다니 믿기지 않아." },
      { en: "I can't believe how cheap this is.", kr: "이게 이렇게 싸다니 믿기지 않아요." },
      { en: "I can't believe it's already December.", kr: "벌써 12월이라니 믿기지 않아요." },
      { en: "I can't believe we missed the bus again.", kr: "우리 또 버스 놓쳤다니 말도 안 돼." },
      { en: "I can't believe you remembered my birthday!", kr: "내 생일을 기억하다니 믿기지 않아!" }
    ]
  },
  {
    id: "i-didnt-mean-to",
    title: "I didn't mean to...",
    desc: "의도한 것이 아니었다고 사과할 때.",
    examples: [
      { en: "I didn't mean to be rude.", kr: "무례하게 굴려고 한 건 아니었어요." },
      { en: "I didn't mean to hurt you.", kr: "너한테 상처 주려던 건 아니었어." },
      { en: "I didn't mean to wake you up.", kr: "깨우려던 건 아니었어요." },
      { en: "I didn't mean to interrupt. Go ahead.", kr: "말 끊으려던 건 아니었어요. 계속하세요." },
      { en: "I didn't mean to take your seat. Sorry about that.", kr: "자리 뺏으려던 건 아니었어요. 죄송해요." }
    ]
  },
  {
    id: "i-didnt-expect-to",
    title: "I didn't expect to...",
    desc: "~하게 될 줄 몰랐다고 놀라움을 표현할 때.",
    examples: [
      { en: "I didn't expect to see you here.", kr: "여기서 널 볼 줄은 몰랐어." },
      { en: "I didn't expect to get the job.", kr: "제가 합격할 줄은 몰랐어요." },
      { en: "I didn't expect to wait this long.", kr: "이렇게 오래 기다릴 줄은 몰랐어요." },
      { en: "I didn't expect to like it this much.", kr: "이렇게까지 마음에 들 줄은 몰랐어요." },
      { en: "I didn't expect to have so much fun at the party.", kr: "파티가 이렇게 재밌을 줄은 몰랐어요." }
    ]
  },
  {
    id: "that-sounds",
    title: "That sounds...",
    desc: "상대가 한 말에 대한 반응(좋다/별로다 등)을 표현.",
    examples: [
      { en: "That sounds really tough. Are you okay?", kr: "정말 힘들었겠다. 괜찮아요?" },
      { en: "That sounds great. Let's do it.", kr: "좋네요. 그렇게 해요." },
      { en: "That sounds a little boring to me.", kr: "저한텐 좀 지루할 것 같아요." },
      { en: "That sounds like a lot of work.", kr: "일이 엄청 많겠네요." },
      { en: "That sounds perfect. I'll see you at six.", kr: "딱 좋네요. 6시에 봐요." }
    ]
  },
  {
    id: "thats-why",
    title: "That's why...",
    desc: "그래서 ~인 거야, 이유를 강조할 때.",
    examples: [
      { en: "That's why I called you.", kr: "그래서 전화한 거예요." },
      { en: "That's why I'm late today.", kr: "그래서 오늘 늦은 거예요." },
      { en: "That's why I love this place.", kr: "그래서 내가 여기를 좋아해." },
      { en: "That's why I always bring an umbrella.", kr: "그래서 저는 항상 우산을 챙겨요." },
      { en: "That's why we need to book the hotel early.", kr: "그래서 호텔을 일찍 예약해야 해요." }
    ]
  },
  {
    id: "thats-because",
    title: "That's because...",
    desc: "무언가의 이유를 설명할 때.",
    examples: [
      { en: "That's because I was busy.", kr: "그건 제가 바빴기 때문이에요." },
      { en: "That's because we started late.", kr: "우리가 늦게 시작해서 그래요." },
      { en: "That's because it's a holiday.", kr: "공휴일이라서 그래요." },
      { en: "That's because the traffic was terrible this morning.", kr: "오늘 아침에 차가 엄청 막혀서 그래요." },
      { en: "That's because I didn't get enough sleep last night.", kr: "어젯밤에 잠을 제대로 못 자서 그래요." }
    ]
  },
  {
    id: "its-hard-to",
    title: "It's hard to...",
    desc: "~하기 어렵다고 말할 때.",
    examples: [
      { en: "It's hard to explain in English.", kr: "영어로 설명하기가 어려워요." },
      { en: "It's hard to say no to dessert.", kr: "디저트는 거절하기 힘들어요." },
      { en: "It's hard to find time to exercise.", kr: "운동할 시간을 내기가 어려워요." },
      { en: "It's hard to get a taxi around here at night.", kr: "밤에 이 근처에서 택시 잡기 힘들어요." },
      { en: "It's hard to focus when the office is this noisy.", kr: "사무실이 이렇게 시끄러우면 집중하기 힘들어요." }
    ]
  },
  {
    id: "its-easy-to",
    title: "It's easy to...",
    desc: "~하기 쉽다고 말할 때.",
    examples: [
      { en: "It's easy to use this app.", kr: "이 앱은 사용하기 쉬워요." },
      { en: "It's easy to make. I'll show you.", kr: "만들기 쉬워요. 알려줄게요." },
      { en: "It's easy to learn if you practice.", kr: "연습하면 배우기 쉬워요." },
      { en: "It's easy to get lost in this area.", kr: "이 동네는 길 잃기 쉬워요." },
      { en: "It's easy to forget your password with so many accounts.", kr: "계정이 너무 많으면 비밀번호 잊어버리기 쉬워요." }
    ]
  },
  {
    id: "have-you-ever",
    title: "Have you ever...?",
    desc: "상대방의 경험을 물어볼 때 써요.",
    examples: [
      { en: "Have you ever been to New York?", kr: "뉴욕에 가 본 적 있어요?" },
      { en: "Have you ever tried Korean barbecue?", kr: "한국식 바비큐 먹어 본 적 있어요?" },
      { en: "Have you ever used this software before?", kr: "전에 이 소프트웨어 써 본 적 있어요?" },
      { en: "Have you ever thought about moving abroad?", kr: "해외로 이사 가는 거 생각해 본 적 있어?" },
      { en: "Have you ever missed a flight?", kr: "비행기 놓쳐 본 적 있어?" }
    ]
  },
  {
    id: "thank-you-for",
    title: "Thank you for...",
    desc: "상대방이 해 준 일에 고마움을 표현할 때 써요.",
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
    desc: "내 잘못이나 실수에 대해 사과할 때 써요.",
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
    desc: "상대방의 안 좋은 소식에 위로와 공감을 표현할 때 써요.",
    examples: [
      { en: "I'm sorry to hear about your grandmother.", kr: "할머니 일은 정말 유감이에요." },
      { en: "I'm sorry to hear that you're sick.", kr: "아프다니 마음이 안 좋네요." },
      { en: "I'm sorry to hear the interview didn't go well.", kr: "면접이 잘 안 됐다니 안타깝다." },
      { en: "I'm sorry to hear you lost your job.", kr: "일자리를 잃었다니 정말 안됐어요." },
      { en: "I'm sorry to hear about your flight delay.", kr: "비행기가 지연됐다니 안됐네요." }
    ]
  },
  {
    id: "i-used-to",
    title: "I used to...",
    desc: "예전에는 했지만 지금은 하지 않는 습관이나 상태를 말할 때 써요.",
    examples: [
      { en: "I used to live in Busan.", kr: "예전에 부산에 살았어요." },
      { en: "I used to play soccer every weekend.", kr: "예전엔 주말마다 축구를 했어." },
      { en: "I used to hate coffee, but now I love it.", kr: "예전엔 커피를 싫어했는데 지금은 정말 좋아해." },
      { en: "I used to work at a bank.", kr: "전에 은행에서 일했어요." },
      { en: "I used to be really shy in college.", kr: "대학 때는 정말 수줍음이 많았어요." }
    ]
  },
  {
    id: "how-was",
    title: "How was...?",
    desc: "상대방이 겪은 일이 어땠는지 물어볼 때 써요.",
    examples: [
      { en: "How was your weekend? Anything fun?", kr: "주말 어땠어요? 재밌는 일 있었어요?" },
      { en: "How was the meeting with the client?", kr: "고객이랑 미팅 어땠어요?" },
      { en: "How was your trip to Japan?", kr: "일본 여행 어땠어?" },
      { en: "How was the movie last night?", kr: "어젯밤 영화 어땠어?" },
      { en: "How was your first day at work?", kr: "출근 첫날 어땠어요?" }
    ]
  },
  {
    id: "why-dont-we",
    title: "Why don't we...?",
    desc: "함께 무언가를 하자고 가볍게 제안할 때 써요.",
    examples: [
      { en: "Why don't we grab lunch together?", kr: "같이 점심 먹을까요?" },
      { en: "Why don't we take a short break?", kr: "잠깐 쉬었다 할까요?" },
      { en: "Why don't we meet at the station?", kr: "역에서 만나는 게 어때?" },
      { en: "Why don't we split the bill?", kr: "계산은 나눠서 할까?" },
      { en: "Why don't we talk about this tomorrow?", kr: "이건 내일 얘기하는 게 어때요?" }
    ]
  },
  {
    id: "you-should",
    title: "You should...",
    desc: "상대방에게 조언이나 추천을 할 때 써요.",
    examples: [
      { en: "You should try the pasta here.", kr: "여기 파스타 꼭 먹어 봐요." },
      { en: "You should get some rest.", kr: "좀 쉬는 게 좋겠어." },
      { en: "You should ask your manager first.", kr: "먼저 매니저한테 물어보는 게 좋겠어요." },
      { en: "You should bring an umbrella today.", kr: "오늘 우산 챙기는 게 좋겠어." },
      { en: "You should see a doctor about that cough.", kr: "그 기침은 병원에 가 보는 게 좋겠어요." }
    ]
  },
  {
    id: "is-there",
    title: "Is there...?",
    desc: "어떤 장소나 물건이 있는지 물어볼 때 써요.",
    examples: [
      { en: "Is there a pharmacy near here?", kr: "이 근처에 약국 있어요?" },
      { en: "Is there a vegetarian option on the menu?", kr: "메뉴에 채식 메뉴 있어요?" },
      { en: "Is there anything I can do to help?", kr: "내가 도울 수 있는 거 있어?" },
      { en: "Is there free Wi-Fi in the hotel?", kr: "호텔에 무료 와이파이 있어요?" },
      { en: "Is there a problem with my order?", kr: "제 주문에 무슨 문제 있나요?" }
    ]
  },
  {
    id: "how-long-does-it-take-to",
    title: "How long does it take to...?",
    desc: "어떤 일에 시간이 얼마나 걸리는지 물어볼 때 써요.",
    examples: [
      { en: "How long does it take to get to the airport?", kr: "공항까지 얼마나 걸려요?" },
      { en: "How long does it take to walk there?", kr: "거기까지 걸어서 얼마나 걸려요?" },
      { en: "How long does it take to get a refund?", kr: "환불받는 데 얼마나 걸려요?" },
      { en: "How long does it take to cook this?", kr: "이거 요리하는 데 얼마나 걸려?" },
      { en: "How long does it take to get there by bus?", kr: "버스로 거기까지 얼마나 걸려요?" }
    ]
  },
  {
    id: "ive-been-ing",
    title: "I've been ~ing",
    desc: "과거부터 지금까지 계속 해 오고 있는 일을 말할 때 써요.",
    examples: [
      { en: "I've been working here for three years.", kr: "여기서 3년째 일하고 있어요." },
      { en: "I've been learning English since last spring.", kr: "작년 봄부터 영어 공부하고 있어요." },
      { en: "I've been waiting for you for an hour!", kr: "너 한 시간째 기다리고 있었어!" },
      { en: "I've been feeling tired all week.", kr: "이번 주 내내 피곤했어." },
      { en: "I've been looking for a new apartment lately.", kr: "요즘 새 아파트 알아보고 있어요." }
    ]
  },
  {
    id: "im-used-to",
    title: "I'm used to...",
    desc: "어떤 일에 이미 익숙하다고 말할 때 써요.",
    examples: [
      { en: "I'm used to getting up early.", kr: "일찍 일어나는 데 익숙해요." },
      { en: "I'm used to spicy food.", kr: "매운 음식엔 익숙해." },
      { en: "I'm used to working late on Fridays.", kr: "금요일에 늦게까지 일하는 데 익숙해요." },
      { en: "I'm used to the cold weather now.", kr: "이제 추운 날씨에 익숙해졌어요." },
      { en: "I'm used to taking the subway to work.", kr: "지하철로 출근하는 데 익숙해요." }
    ]
  },
  {
    id: "you-dont-have-to",
    title: "You don't have to...",
    desc: "상대방에게 그럴 필요가 없다고 말할 때 써요.",
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
    desc: "상대방에게 잊지 말고 하라고 상기시킬 때 써요.",
    examples: [
      { en: "Don't forget to lock the door.", kr: "문 잠그는 거 잊지 마." },
      { en: "Don't forget to bring your passport.", kr: "여권 챙기는 거 잊지 마세요." },
      { en: "Don't forget to send me the file.", kr: "파일 보내 주는 거 잊지 마요." },
      { en: "Don't forget to call your mom.", kr: "엄마한테 전화하는 거 잊지 마." },
      { en: "Don't forget to sign up by Friday.", kr: "금요일까지 신청하는 거 잊지 마세요." }
    ]
  },
  {
    id: "it-depends-on",
    title: "It depends on...",
    desc: "상황이나 조건에 따라 달라진다고 답할 때 써요.",
    examples: [
      { en: "It depends on the weather.", kr: "날씨에 따라 달라요." },
      { en: "It depends on how much it costs.", kr: "가격이 얼마냐에 따라 달라." },
      { en: "It depends on traffic, but usually about thirty minutes.", kr: "교통 상황에 따라 다른데, 보통 30분 정도요." },
      { en: "It depends on what time you finish work.", kr: "네가 몇 시에 퇴근하느냐에 달렸어." },
      { en: "It depends on the client's budget.", kr: "고객 예산에 따라 달라요." }
    ]
  },
  {
    id: "im-afraid",
    title: "I'm afraid...",
    desc: "안 좋은 소식이나 거절을 정중하게 전할 때 써요.",
    examples: [
      { en: "I'm afraid we're fully booked tonight.", kr: "죄송하지만 오늘 밤은 예약이 다 찼어요." },
      { en: "I'm afraid I can't make it to the party.", kr: "아쉽지만 파티에 못 갈 것 같아." },
      { en: "I'm afraid that's not possible.", kr: "죄송하지만 그건 안 될 것 같아요." },
      { en: "I'm afraid I have some bad news.", kr: "안타깝지만 안 좋은 소식이 있어요." },
      { en: "I'm afraid the store is closed today.", kr: "죄송하지만 오늘 가게는 문을 닫았어요." }
    ]
  },
  {
    id: "how-often-do-you",
    title: "How often do you...?",
    desc: "상대방이 어떤 일을 얼마나 자주 하는지 물어볼 때 써요.",
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
    desc: "어떤 종류나 스타일인지 물어볼 때 써요.",
    examples: [
      { en: "What kind of music do you like?", kr: "어떤 음악 좋아해요?" },
      { en: "What kind of work do you do?", kr: "어떤 일 하세요?" },
      { en: "What kind of room would you like?", kr: "어떤 객실을 원하세요?" },
      { en: "What kind of food do you want tonight?", kr: "오늘 저녁엔 어떤 음식 먹고 싶어?" },
      { en: "What kind of movies are you into?", kr: "어떤 영화 좋아해?" }
    ]
  },
  {
    id: "im-interested-in",
    title: "I'm interested in...",
    desc: "어떤 것에 관심이 있다고 말할 때 써요.",
    examples: [
      { en: "I'm interested in learning how to cook.", kr: "요리 배우는 데 관심 있어요." },
      { en: "I'm interested in the job you posted.", kr: "올리신 채용 공고에 관심이 있어요." },
      { en: "I'm interested in photography these days.", kr: "요즘 사진에 관심이 있어." },
      { en: "I'm interested in joining your book club.", kr: "독서 모임에 들어가는 데 관심 있어요." },
      { en: "I'm interested in the two-bedroom apartment.", kr: "방 두 개짜리 아파트에 관심 있어요." }
    ]
  },
  {
    id: "im-good-at",
    title: "I'm good at...",
    desc: "내가 잘하는 것을 말할 때 써요.",
    examples: [
      { en: "I'm good at remembering names.", kr: "저는 이름을 잘 기억해요." },
      { en: "I'm good at fixing computers.", kr: "컴퓨터 고치는 거 잘해." },
      { en: "I'm good at cooking Korean food.", kr: "한국 음식 잘 만들어요." },
      { en: "I'm good at working under pressure.", kr: "압박감 속에서도 일을 잘해요." },
      { en: "I'm good at math, but bad at spelling.", kr: "수학은 잘하는데 철자는 약해." }
    ]
  },
  {
    id: "i-wish-i-could",
    title: "I wish I could...",
    desc: "하고 싶지만 할 수 없는 일에 대한 아쉬움을 말할 때 써요.",
    examples: [
      { en: "I wish I could stay longer.", kr: "더 있다 갈 수 있으면 좋을 텐데." },
      { en: "I wish I could speak English fluently.", kr: "영어를 유창하게 할 수 있으면 좋겠어요." },
      { en: "I wish I could come, but I have plans.", kr: "가고 싶은데 선약이 있어요." },
      { en: "I wish I could help, but I'm swamped.", kr: "도와주고 싶은데 일이 너무 많아." },
      { en: "I wish I could take a week off.", kr: "일주일 쉴 수 있으면 좋겠다." }
    ]
  },
  {
    id: "i-should-have",
    title: "I should have...",
    desc: "하지 않은 일에 대해 후회할 때 써요.",
    examples: [
      { en: "I should have left earlier.", kr: "더 일찍 출발했어야 했는데." },
      { en: "I should have listened to you.", kr: "네 말을 들었어야 했어." },
      { en: "I should have brought a jacket.", kr: "재킷을 챙겨 왔어야 했어." },
      { en: "I should have checked the email first.", kr: "이메일을 먼저 확인했어야 했어요." },
      { en: "I should have booked the tickets earlier.", kr: "표를 더 일찍 예매했어야 했는데." }
    ]
  },
  {
    id: "whats-the-best-way-to",
    title: "What's the best way to...?",
    desc: "어떤 일을 하는 가장 좋은 방법을 물어볼 때 써요.",
    examples: [
      { en: "What's the best way to get downtown?", kr: "시내로 가는 가장 좋은 방법이 뭐예요?" },
      { en: "What's the best way to contact you?", kr: "연락드리려면 어떻게 하는 게 제일 좋아요?" },
      { en: "What's the best way to improve my English?", kr: "영어 실력 늘리는 가장 좋은 방법이 뭘까?" },
      { en: "What's the best way to save money?", kr: "돈 모으는 가장 좋은 방법이 뭐야?" },
      { en: "What's the best way to cook salmon?", kr: "연어는 어떻게 요리하는 게 제일 좋아?" }
    ]
  },
  {
    id: "did-you-get-a-chance-to",
    title: "Did you get a chance to...?",
    desc: "상대방이 어떤 일을 할 기회가 있었는지 부드럽게 확인할 때 써요.",
    examples: [
      { en: "Did you get a chance to read my email?", kr: "제 이메일 읽어 보셨어요?" },
      { en: "Did you get a chance to look at the report?", kr: "보고서 한번 보셨어요?" },
      { en: "Did you get a chance to eat lunch?", kr: "점심은 먹었어?" },
      { en: "Did you get a chance to talk to him?", kr: "그 사람이랑 얘기해 봤어?" },
      { en: "Did you get a chance to visit the museum?", kr: "박물관에는 가 봤어요?" }
    ]
  },
  {
    id: "feel-free-to",
    title: "Feel free to...",
    desc: "부담 갖지 말고 편하게 하라고 권할 때 써요.",
    examples: [
      { en: "Feel free to ask me anything.", kr: "뭐든 편하게 물어보세요." },
      { en: "Feel free to call me anytime.", kr: "언제든 편하게 전화해." },
      { en: "Feel free to help yourself to some coffee.", kr: "커피 편하게 드세요." },
      { en: "Feel free to use my laptop.", kr: "내 노트북 편하게 써." },
      { en: "Feel free to join us after work.", kr: "퇴근 후에 편하게 같이 와요." }
    ]
  },
  {
    id: "im-sure",
    title: "I'm sure...",
    desc: "확신을 표현하거나 상대방을 안심시킬 때 써요.",
    examples: [
      { en: "I'm sure you'll do great.", kr: "넌 분명 잘할 거야." },
      { en: "I'm sure she'll understand if you explain.", kr: "설명하면 그녀도 분명 이해해 줄 거예요." },
      { en: "I'm sure we can figure it out.", kr: "우리가 분명 해결할 수 있을 거예요." },
      { en: "I'm sure I left my keys here.", kr: "분명 여기에 열쇠를 뒀는데." },
      { en: "I'm sure it's nothing serious.", kr: "분명 별일 아닐 거야." }
    ]
  },
  {
    id: "its-time-to",
    title: "It's time to...",
    desc: "이제 무언가를 해야 할 때가 되었다고 말할 때 써요.",
    examples: [
      { en: "It's time to go home.", kr: "이제 집에 갈 시간이야." },
      { en: "It's time to wrap up the meeting.", kr: "이제 회의 마무리할 시간이에요." },
      { en: "It's time to get a new phone.", kr: "이제 새 폰 살 때가 됐어." },
      { en: "It's time to wake up, kids.", kr: "얘들아, 일어날 시간이야." },
      { en: "It's time to start looking for a new job.", kr: "이제 새 직장을 알아볼 때가 됐어." }
    ]
  },
  {
    id: "when-was-the-last-time",
    title: "When was the last time...?",
    desc: "어떤 일을 마지막으로 한 게 언제인지 물어볼 때 써요.",
    examples: [
      { en: "When was the last time you saw a dentist?", kr: "마지막으로 치과 간 게 언제예요?" },
      { en: "When was the last time we hung out?", kr: "우리 마지막으로 논 게 언제였지?" },
      { en: "When was the last time you took a vacation?", kr: "마지막으로 휴가 간 게 언제예요?" },
      { en: "When was the last time you updated this file?", kr: "이 파일 마지막으로 업데이트한 게 언제예요?" },
      { en: "When was the last time you ate something?", kr: "마지막으로 뭐 먹은 게 언제야?" }
    ]
  },
  {
    id: "congratulations-on",
    title: "Congratulations on...",
    desc: "상대방의 좋은 일을 축하할 때 써요.",
    examples: [
      { en: "Congratulations on your promotion! You deserve it.", kr: "승진 축하해요! 충분히 그럴 만해요." },
      { en: "Congratulations on your new baby!", kr: "아기 태어난 거 축하해요!" },
      { en: "Congratulations on getting into grad school!", kr: "대학원 합격 축하해!" },
      { en: "Congratulations on your wedding, you two!", kr: "두 사람 결혼 축하해요!" },
      { en: "Congratulations on finishing the marathon!", kr: "마라톤 완주 축하해!" }
    ]
  }
];
