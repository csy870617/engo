const wordsLevel1_Part1 = [
  {
    id: "L1-001",
    word: "the",
    meaning: "그, 그 특정",
    examples: [
      { en: "Did you see the movie I told you about?", kr: "내가 말한 그 영화 봤어?" },
      { en: "Can you pass me the salt?", kr: "소금 좀 건네줄래?" }
    ]
  },
  {
    id: "L1-002",
    word: "be",
    meaning: "~이다, (~에) 있다",
    examples: [
      { en: "Don't be late, okay? The movie starts at seven.", kr: "늦지 마, 알았지? 영화 7시에 시작해." },
      { en: "I'll be there in ten minutes.", kr: "10분 안에 거기 도착할게." }
    ]
  },
  {
    id: "L1-003",
    word: "to",
    meaning: "~로, ~에게, ~하기 위해",
    examples: [
      { en: "I need to go to the store.", kr: "가게에 가야 해." },
      { en: "Did you talk to your boss about it?", kr: "그거 상사한테 얘기해 봤어?" }
    ]
  },
  {
    id: "L1-004",
    word: "of",
    meaning: "~의, ~ 중에서",
    examples: [
      { en: "Can I get a cup of coffee, please?", kr: "커피 한 잔 주시겠어요?" },
      { en: "She's one of my best friends.", kr: "걔는 내 제일 친한 친구 중 하나야." }
    ]
  },
  {
    id: "L1-005",
    word: "and",
    meaning: "그리고, ~와",
    examples: [
      { en: "I'd like a burger and fries, please.", kr: "햄버거랑 감자튀김 주세요." },
      { en: "I'm tired and hungry. Let's eat first.", kr: "피곤하고 배고파. 먼저 먹자." }
    ]
  },
  {
    id: "L1-006",
    word: "a",
    meaning: "하나의, 어떤",
    examples: [
      { en: "Do you have a minute to talk?", kr: "잠깐 얘기할 시간 있어?" },
      { en: "I'd like a glass of water, please.", kr: "물 한 잔 주세요." }
    ]
  },
  {
    id: "L1-007",
    word: "in",
    meaning: "~ 안에, ~에",
    examples: [
      { en: "Your keys are in the drawer.", kr: "네 열쇠 서랍 안에 있어." },
      { en: "I've lived in Seoul for five years.", kr: "서울에서 5년째 살고 있어." }
    ]
  },
  {
    id: "L1-008",
    word: "that",
    meaning: "저것, 그것, ~라는 것",
    examples: [
      { en: "What's that? It smells amazing.", kr: "저거 뭐야? 냄새 진짜 좋다." },
      { en: "I think that's a great idea.", kr: "그거 좋은 생각인 것 같아." }
    ]
  },
  {
    id: "L1-009",
    word: "have",
    meaning: "가지다, 먹다",
    examples: [
      { en: "Do you have any plans this weekend?", kr: "이번 주말에 계획 있어?" },
      { en: "Let's have dinner together sometime.", kr: "언제 같이 저녁 먹자." }
    ]
  },
  {
    id: "L1-010",
    word: "I",
    meaning: "나, 저",
    examples: [
      { en: "I'm so happy to see you.", kr: "만나서 너무 반가워." },
      { en: "I work from home on Fridays.", kr: "나는 금요일엔 재택근무해." }
    ]
  },
  {
    id: "L1-011",
    word: "it",
    meaning: "그것",
    examples: [
      { en: "Did you finish it already? That was fast.", kr: "벌써 다 끝냈어? 빠르다." },
      { en: "I love this jacket. Where did you get it?", kr: "이 재킷 너무 좋다. 어디서 샀어?" }
    ]
  },
  {
    id: "L1-012",
    word: "for",
    meaning: "~을 위해, ~ 동안",
    examples: [
      { en: "This gift is for you. Happy birthday!", kr: "이 선물 너 주는 거야. 생일 축하해!" },
      { en: "I waited for an hour at the station.", kr: "역에서 한 시간이나 기다렸어." }
    ]
  },
  {
    id: "L1-013",
    word: "not",
    meaning: "~ 않다, 아니다",
    examples: [
      { en: "I'm not hungry right now, thanks.", kr: "지금은 배 안 고파, 고마워." },
      { en: "That's not what I meant.", kr: "그런 뜻이 아니었어." }
    ]
  },
  {
    id: "L1-014",
    word: "on",
    meaning: "~ 위에, (요일·날짜)에",
    examples: [
      { en: "Your phone is on the kitchen table.", kr: "네 폰 식탁 위에 있어." },
      { en: "Let's meet on Friday after work.", kr: "금요일 퇴근하고 만나자." }
    ]
  },
  {
    id: "L1-015",
    word: "with",
    meaning: "~와 함께, ~을 넣은",
    examples: [
      { en: "Do you want to come with us?", kr: "우리랑 같이 갈래?" },
      { en: "Can I get a coffee with milk, please?", kr: "우유 넣은 커피로 주시겠어요?" }
    ]
  },
  {
    id: "L1-016",
    word: "he",
    meaning: "그, 그 남자",
    examples: [
      { en: "He's my coworker from the marketing team.", kr: "그 사람 마케팅팀 동료야." },
      { en: "Is he coming to the party tonight?", kr: "그 사람 오늘 밤 파티에 와?" }
    ]
  },
  {
    id: "L1-017",
    word: "as",
    meaning: "~로서, ~처럼, ~만큼",
    examples: [
      { en: "She works as a nurse at a big hospital.", kr: "그녀는 큰 병원에서 간호사로 일해." },
      { en: "Come as soon as you can.", kr: "최대한 빨리 와." }
    ]
  },
  {
    id: "L1-018",
    word: "you",
    meaning: "너, 당신",
    examples: [
      { en: "How are you doing today?", kr: "오늘 잘 지내?" },
      { en: "Are you free for lunch tomorrow?", kr: "내일 점심 시간 돼?" }
    ]
  },
  {
    id: "L1-019",
    word: "do",
    meaning: "하다",
    examples: [
      { en: "What do you do for fun?", kr: "재미로 뭐 하면서 놀아?" },
      { en: "Can you do me a favor?", kr: "부탁 하나 들어줄래?" }
    ]
  },
  {
    id: "L1-020",
    word: "at",
    meaning: "~에 (장소, 시간)",
    examples: [
      { en: "I'll meet you at the cafe.", kr: "카페에서 만나." },
      { en: "The store opens at nine.", kr: "그 가게 9시에 문 열어." }
    ]
  },
  {
    id: "L1-021",
    word: "this",
    meaning: "이것, 이",
    examples: [
      { en: "Is this your bag on the chair?", kr: "의자 위에 있는 이거 네 가방이야?" },
      { en: "I really like this song. Who sings it?", kr: "이 노래 진짜 좋다. 누가 불러?" }
    ]
  },
  {
    id: "L1-022",
    word: "but",
    meaning: "그러나, 하지만",
    examples: [
      { en: "It's raining, but I still want to go out.", kr: "비 오는데 그래도 나가고 싶어." },
      { en: "Sorry, but I can't make it tonight.", kr: "미안한데 오늘 밤엔 못 가." }
    ]
  },
  {
    id: "L1-023",
    word: "his",
    meaning: "그의",
    examples: [
      { en: "I forgot his name. What was it again?", kr: "그 사람 이름 까먹었어. 뭐였더라?" },
      { en: "His new car is really nice.", kr: "그 사람 새 차 진짜 좋더라." }
    ]
  },
  {
    id: "L1-024",
    word: "by",
    meaning: "~까지, ~ 옆에",
    examples: [
      { en: "Can you finish the report by Friday?", kr: "금요일까지 보고서 끝낼 수 있어?" },
      { en: "Can we get a table by the window?", kr: "창가 쪽 자리로 주실 수 있어요?" }
    ]
  },
  {
    id: "L1-025",
    word: "from",
    meaning: "~에서, ~로부터",
    examples: [
      { en: "I just got a text from my mom.", kr: "방금 엄마한테서 문자 왔어." },
      { en: "Where are you from originally?", kr: "원래 어디 출신이에요?" }
    ]
  },
  {
    id: "L1-026",
    word: "they",
    meaning: "그들, 그 사람들",
    examples: [
      { en: "Where are your parents? Are they coming?", kr: "부모님은 어디 계셔? 오셔?" },
      { en: "I love my neighbors. They're really friendly.", kr: "우리 이웃들 너무 좋아. 진짜 친절해." }
    ]
  },
  {
    id: "L1-027",
    word: "we",
    meaning: "우리",
    examples: [
      { en: "We're going to the movies. Want to come?", kr: "우리 영화 보러 가. 같이 갈래?" },
      { en: "We should help him move this weekend.", kr: "이번 주말에 우리가 그 사람 이사 도와줘야 해." }
    ]
  },
  {
    id: "L1-028",
    word: "say",
    meaning: "말하다",
    examples: [
      { en: "What did he say to you?", kr: "그 사람이 너한테 뭐라고 했어?" },
      { en: "Sorry, could you say that again?", kr: "죄송한데 다시 한 번 말씀해 주시겠어요?" }
    ]
  },
  {
    id: "L1-029",
    word: "her",
    meaning: "그녀의, 그녀를",
    examples: [
      { en: "I saw her at the supermarket yesterday.", kr: "어제 마트에서 그녀를 봤어." },
      { en: "Do you have her phone number?", kr: "그녀 전화번호 있어?" }
    ]
  },
  {
    id: "L1-030",
    word: "she",
    meaning: "그녀, 그 여자",
    examples: [
      { en: "She lives next door with her two kids.", kr: "그녀는 옆집에 아이 둘이랑 살아." },
      { en: "Is she your sister? You look alike.", kr: "저 사람 네 여동생이야? 둘이 닮았다." }
    ]
  },
  {
    id: "L1-031",
    word: "or",
    meaning: "또는, 아니면",
    examples: [
      { en: "Do you want coffee or tea?", kr: "커피 마실래, 아니면 차 마실래?" },
      { en: "Hurry up, or we'll miss the bus.", kr: "서둘러, 안 그러면 버스 놓쳐." }
    ]
  },
  {
    id: "L1-032",
    word: "will",
    meaning: "~할 것이다, ~할게",
    examples: [
      { en: "Will you be home for dinner?", kr: "저녁 먹으러 집에 올 거야?" },
      { en: "Don't worry, I will be there on time.", kr: "걱정 마, 제시간에 갈게." }
    ]
  },
  {
    id: "L1-033",
    word: "my",
    meaning: "나의, 내",
    examples: [
      { en: "This is my favorite song.", kr: "이거 내가 제일 좋아하는 노래야." },
      { en: "Have you seen my phone anywhere?", kr: "내 폰 어디서 못 봤어?" }
    ]
  },
  {
    id: "L1-034",
    word: "one",
    meaning: "하나, (앞서 말한) 것",
    examples: [
      { en: "Can I have one more piece of cake?", kr: "케이크 한 조각 더 먹어도 돼?" },
      { en: "I like the blue one better.", kr: "난 파란 게 더 좋아." }
    ]
  },
  {
    id: "L1-035",
    word: "all",
    meaning: "모든, 전부",
    examples: [
      { en: "Who ate all the cookies?", kr: "누가 쿠키 다 먹었어?" },
      { en: "That's all for today. Thanks, everyone!", kr: "오늘은 여기까지예요. 모두 감사합니다!" }
    ]
  },
  {
    id: "L1-036",
    word: "would",
    meaning: "~할 텐데, ~하시겠어요",
    examples: [
      { en: "Would you like something to drink?", kr: "마실 것 좀 드릴까요?" },
      { en: "I would buy it if it were cheaper.", kr: "더 싸면 살 텐데." }
    ]
  },
  {
    id: "L1-037",
    word: "there",
    meaning: "거기에, ~이 있다",
    examples: [
      { en: "Is there a bathroom around here?", kr: "이 근처에 화장실 있어요?" },
      { en: "I went there last week. It was great.", kr: "지난주에 거기 가 봤어. 좋더라." }
    ]
  },
  {
    id: "L1-038",
    word: "their",
    meaning: "그들의",
    examples: [
      { en: "Have you been to their new place yet?", kr: "그 사람들 새집에 가 봤어?" },
      { en: "I don't remember their names.", kr: "그 사람들 이름이 기억 안 나." }
    ]
  },
  {
    id: "L1-039",
    word: "what",
    meaning: "무엇, ~하는 것",
    examples: [
      { en: "What are you doing this weekend?", kr: "이번 주말에 뭐 해?" },
      { en: "Tell me what happened.", kr: "무슨 일 있었는지 말해 봐." }
    ]
  },
  {
    id: "L1-040",
    word: "so",
    meaning: "그래서, 정말",
    examples: [
      { en: "It was raining, so I stayed home.", kr: "비가 와서 집에 있었어." },
      { en: "I'm so tired after work today.", kr: "오늘 퇴근하고 너무 피곤해." }
    ]
  },
  {
    id: "L1-041",
    word: "up",
    meaning: "위로, (가격·수치가) 올라",
    examples: [
      { en: "What's up? You look worried.", kr: "무슨 일이야? 걱정 있어 보여." },
      { en: "Prices went up again at the grocery store.", kr: "마트 물가가 또 올랐어." }
    ]
  },
  {
    id: "L1-042",
    word: "out",
    meaning: "밖으로, 밖에, 다 떨어진",
    examples: [
      { en: "Let's go out for dinner tonight.", kr: "오늘 저녁에 외식하자." },
      { en: "We're out of milk. Can you grab some?", kr: "우유 다 떨어졌어. 좀 사 올래?" }
    ]
  },
  {
    id: "L1-043",
    word: "if",
    meaning: "만약 ~라면, ~인지",
    examples: [
      { en: "If you're ready, let's go.", kr: "준비됐으면 가자." },
      { en: "I'm not sure if he's coming.", kr: "그 사람이 올지 잘 모르겠어." }
    ]
  },
  {
    id: "L1-044",
    word: "about",
    meaning: "~에 대해, 대략",
    examples: [
      { en: "What's the movie about?", kr: "그 영화 무슨 내용이야?" },
      { en: "It's about ten minutes from here.", kr: "여기서 10분쯤 걸려." }
    ]
  },
  {
    id: "L1-045",
    word: "who",
    meaning: "누구, ~하는 (사람)",
    examples: [
      { en: "Who's that person by the door?", kr: "문 옆에 있는 저 사람 누구야?" },
      { en: "That's the guy who helped me yesterday.", kr: "저 사람이 어제 나 도와준 사람이야." }
    ]
  },
  {
    id: "L1-046",
    word: "get",
    meaning: "얻다, 사다, 도착하다",
    examples: [
      { en: "I need to get a new phone.", kr: "새 폰 사야 돼." },
      { en: "What time did you get home last night?", kr: "어젯밤에 몇 시에 집에 왔어?" }
    ]
  },
  {
    id: "L1-047",
    word: "which",
    meaning: "어느, 어느 것",
    examples: [
      { en: "Which one do you like better?", kr: "어느 게 더 좋아?" },
      { en: "Which seat would you like, window or aisle?", kr: "창가석과 통로석 중 어느 자리로 드릴까요?" }
    ]
  },
  {
    id: "L1-048",
    word: "go",
    meaning: "가다",
    examples: [
      { en: "It's late. Let's go home.", kr: "늦었다. 집에 가자." },
      { en: "Where did you go on vacation?", kr: "휴가 때 어디 갔어?" }
    ]
  },
  {
    id: "L1-049",
    word: "me",
    meaning: "나를, 나에게",
    examples: [
      { en: "Can you help me with this?", kr: "이것 좀 도와줄래?" },
      { en: "Text me when you get there.", kr: "도착하면 문자해." }
    ]
  },
  {
    id: "L1-050",
    word: "when",
    meaning: "언제, ~할 때",
    examples: [
      { en: "When is your flight back home?", kr: "집에 돌아가는 비행기 언제야?" },
      { en: "Call me when you're done.", kr: "끝나면 전화해." }
    ]
  },
  {
    id: "L1-051",
    word: "make",
    meaning: "만들다, ~하게 하다",
    examples: [
      { en: "I'll make some pasta for dinner.", kr: "저녁으로 파스타 만들게." },
      { en: "That song always makes me happy.", kr: "그 노래 들으면 항상 기분이 좋아져." }
    ]
  },
  {
    id: "L1-052",
    word: "can",
    meaning: "~할 수 있다, ~해도 되다",
    examples: [
      { en: "Can you open the door for me?", kr: "문 좀 열어 줄래?" },
      { en: "Can I sit here?", kr: "여기 앉아도 돼요?" }
    ]
  },
  {
    id: "L1-053",
    word: "like",
    meaning: "좋아하다, ~ 같은",
    examples: [
      { en: "I like spending time with you.", kr: "너랑 시간 보내는 게 좋아." },
      { en: "It looks like it's going to rain.", kr: "비 올 것 같아." }
    ]
  },
  {
    id: "L1-054",
    word: "time",
    meaning: "시간, 때",
    examples: [
      { en: "What time is it now?", kr: "지금 몇 시야?" },
      { en: "We had a great time last night.", kr: "어젯밤 정말 즐거웠어." }
    ]
  },
  {
    id: "L1-055",
    word: "no",
    meaning: "아니요, 없는",
    examples: [
      { en: "No, thanks. I'm full.", kr: "아니요, 괜찮아요. 배불러요." },
      { en: "There's no milk left in the fridge.", kr: "냉장고에 우유가 하나도 없어." }
    ]
  },
  {
    id: "L1-056",
    word: "just",
    meaning: "그냥, 방금",
    examples: [
      { en: "I was just checking the news.", kr: "그냥 뉴스 보고 있었어." },
      { en: "He just left five minutes ago.", kr: "그 사람 5분 전에 막 나갔어." }
    ]
  },
  {
    id: "L1-057",
    word: "him",
    meaning: "그를, 그에게",
    examples: [
      { en: "I saw him at the gym this morning.", kr: "오늘 아침에 헬스장에서 그 사람 봤어." },
      { en: "Can you give him this tomorrow?", kr: "내일 이거 그 사람한테 좀 전해 줄래?" }
    ]
  },
  {
    id: "L1-058",
    word: "know",
    meaning: "알다",
    examples: [
      { en: "I don't know. Let me check.", kr: "모르겠어. 확인해 볼게." },
      { en: "Do you know a good place to eat around here?", kr: "이 근처에 맛집 알아?" }
    ]
  },
  {
    id: "L1-059",
    word: "take",
    meaning: "가져가다, (시간이) 걸리다",
    examples: [
      { en: "Take your coat. It's cold outside.", kr: "코트 챙겨. 밖에 추워." },
      { en: "How long does it take to get there?", kr: "거기까지 얼마나 걸려?" }
    ]
  },
  {
    id: "L1-060",
    word: "people",
    meaning: "사람들",
    examples: [
      { en: "How many people are coming tonight?", kr: "오늘 밤에 몇 명 와?" },
      { en: "I like meeting new people.", kr: "새로운 사람 만나는 거 좋아해." }
    ]
  },
  {
    id: "L1-061",
    word: "into",
    meaning: "~ 안으로, ~으로 (변화)",
    examples: [
      { en: "Put everything into this bag.", kr: "다 이 가방 안에 넣어." },
      { en: "I ran into an old friend at the mall.", kr: "쇼핑몰에서 옛 친구를 우연히 만났어." }
    ]
  },
  {
    id: "L1-062",
    word: "year",
    meaning: "년, 해",
    examples: [
      { en: "I started this job last year.", kr: "작년에 이 일 시작했어." },
      { en: "I've been learning English for two years.", kr: "영어 배운 지 2년 됐어." }
    ]
  },
  {
    id: "L1-063",
    word: "your",
    meaning: "당신의, 너의",
    examples: [
      { en: "Excuse me, is this your umbrella?", kr: "저기요, 이거 혹시 그쪽 우산이에요?" },
      { en: "What's your favorite food?", kr: "제일 좋아하는 음식이 뭐야?" }
    ]
  },
  {
    id: "L1-064",
    word: "good",
    meaning: "좋은, 맛있는",
    examples: [
      { en: "Have a good weekend, see you Monday!", kr: "주말 잘 보내, 월요일에 봐!" },
      { en: "This pizza is really good.", kr: "이 피자 진짜 맛있다." }
    ]
  },
  {
    id: "L1-065",
    word: "some",
    meaning: "약간의, 몇몇",
    examples: [
      { en: "Can I get some water, please?", kr: "물 좀 주시겠어요?" },
      { en: "Some of my coworkers left early today.", kr: "오늘 동료 몇 명은 일찍 퇴근했어." }
    ]
  },
  {
    id: "L1-066",
    word: "could",
    meaning: "~할 수 있었다, ~해 주시겠어요",
    examples: [
      { en: "Could you close the window, please?", kr: "창문 좀 닫아 주시겠어요?" },
      { en: "When I was a kid, I could swim really well.", kr: "어렸을 때는 수영 정말 잘했어." }
    ]
  },
  {
    id: "L1-067",
    word: "them",
    meaning: "그들을, 그것들을",
    examples: [
      { en: "Tell them the good news!", kr: "그 사람들한테 좋은 소식 전해 줘!" },
      { en: "These shoes are cute. Where did you buy them?", kr: "이 신발 예쁘다. 어디서 샀어?" }
    ]
  },
  {
    id: "L1-068",
    word: "see",
    meaning: "보다, 만나다",
    examples: [
      { en: "Did you see the game last night?", kr: "어젯밤 경기 봤어?" },
      { en: "Nice to see you again!", kr: "다시 만나서 반가워!" }
    ]
  },
  {
    id: "L1-069",
    word: "other",
    meaning: "다른",
    examples: [
      { en: "Do you have any other colors?", kr: "다른 색상도 있나요?" },
      { en: "Sorry, I have other plans today.", kr: "미안, 오늘 다른 약속 있어." }
    ]
  },
  {
    id: "L1-070",
    word: "than",
    meaning: "~보다 (비교)",
    examples: [
      { en: "It's bigger than I expected.", kr: "생각했던 것보다 크네." },
      { en: "I'd rather stay home than go out tonight.", kr: "오늘 밤엔 나가는 것보다 집에 있고 싶어." }
    ]
  },
  {
    id: "L1-071",
    word: "then",
    meaning: "그때, 그러고 나서",
    examples: [
      { en: "Okay, see you then!", kr: "좋아, 그때 봐!" },
      { en: "Finish your dinner, and then you can play.", kr: "저녁 다 먹고 나서 놀아." }
    ]
  },
  {
    id: "L1-072",
    word: "now",
    meaning: "지금",
    examples: [
      { en: "We should leave now, or we'll be late.", kr: "지금 출발해야 해, 안 그러면 늦어." },
      { en: "I'm busy right now. Can I call you back?", kr: "지금 좀 바빠. 이따 다시 전화해도 돼?" }
    ]
  },
  {
    id: "L1-073",
    word: "look",
    meaning: "보다, ~처럼 보이다",
    examples: [
      { en: "Look at this picture of my dog.", kr: "우리 강아지 사진 좀 봐." },
      { en: "You look happy today.", kr: "오늘 기분 좋아 보이네." }
    ]
  },
  {
    id: "L1-074",
    word: "only",
    meaning: "오직, 단지, ~밖에",
    examples: [
      { en: "I only have ten minutes for lunch.", kr: "점심 먹을 시간이 10분밖에 없어." },
      { en: "Don't worry, it's only a small scratch.", kr: "걱정 마, 그냥 살짝 긁힌 거야." }
    ]
  },
  {
    id: "L1-075",
    word: "come",
    meaning: "오다",
    examples: [
      { en: "Can you come to my birthday party?", kr: "내 생일 파티에 올 수 있어?" },
      { en: "The bus is coming. Let's hurry!", kr: "버스 온다. 서두르자!" }
    ]
  },
  {
    id: "L1-076",
    word: "its",
    meaning: "그것의",
    examples: [
      { en: "The dog is wagging its tail.", kr: "강아지가 꼬리를 흔들고 있어." },
      { en: "This café is famous for its cheesecake.", kr: "이 카페는 치즈케이크로 유명해." }
    ]
  },
  {
    id: "L1-077",
    word: "over",
    meaning: "끝난, ~ 위에, ~ 쪽으로",
    examples: [
      { en: "The meeting is over, so let's grab lunch.", kr: "회의 끝났으니까 점심 먹으러 가자." },
      { en: "Come over to my place after work.", kr: "퇴근하고 우리 집에 놀러 와." }
    ]
  },
  {
    id: "L1-078",
    word: "think",
    meaning: "생각하다",
    examples: [
      { en: "I think you're right.", kr: "네 말이 맞는 것 같아." },
      { en: "What do you think of my new haircut?", kr: "내 새 머리 어때?" }
    ]
  },
  {
    id: "L1-079",
    word: "also",
    meaning: "또한, ~도",
    examples: [
      { en: "I'm hungry, and I'm also really tired.", kr: "배고프고 너무 피곤하기도 해." },
      { en: "Can I also get a bottle of water?", kr: "물 한 병도 주시겠어요?" }
    ]
  },
  {
    id: "L1-080",
    word: "back",
    meaning: "되돌아, 뒤로, 뒤쪽",
    examples: [
      { en: "I'll be back in five minutes.", kr: "5분 후에 돌아올게." },
      { en: "Can I sit in the back?", kr: "뒤에 앉아도 돼?" }
    ]
  },
  {
    id: "L1-081",
    word: "after",
    meaning: "~ 후에",
    examples: [
      { en: "Let's talk about it after lunch.", kr: "점심 먹고 나서 얘기하자." },
      { en: "What do you usually do after work?", kr: "퇴근하고 보통 뭐 해?" }
    ]
  },
  {
    id: "L1-082",
    word: "use",
    meaning: "사용하다, 쓰다",
    examples: [
      { en: "Can I use your charger for a minute?", kr: "충전기 잠깐 써도 돼?" },
      { en: "We use this app to split the bill.", kr: "우리는 이 앱으로 더치페이해." }
    ]
  },
  {
    id: "L1-083",
    word: "how",
    meaning: "어떻게, 얼마나",
    examples: [
      { en: "How are you feeling today? Any better?", kr: "오늘 몸은 좀 어때? 좀 나아졌어?" },
      { en: "Can you show me how to do this?", kr: "이거 어떻게 하는지 보여 줄래?" }
    ]
  },
  {
    id: "L1-084",
    word: "our",
    meaning: "우리의",
    examples: [
      { en: "This is our new apartment.", kr: "여기가 우리 새 아파트야." },
      { en: "Our team won the game last night!", kr: "어젯밤에 우리 팀이 이겼어!" }
    ]
  },
  {
    id: "L1-085",
    word: "work",
    meaning: "일하다, 일, 작동하다",
    examples: [
      { en: "I have a lot of work to do today.", kr: "오늘 할 일이 많아." },
      { en: "My phone isn't working. Can I use yours?", kr: "내 폰이 안 돼. 네 거 써도 돼?" }
    ]
  },
  {
    id: "L1-086",
    word: "well",
    meaning: "잘, 건강한",
    examples: [
      { en: "You speak English really well!", kr: "영어 정말 잘하시네요!" },
      { en: "I didn't sleep well last night.", kr: "어젯밤에 잠을 잘 못 잤어." }
    ]
  },
  {
    id: "L1-087",
    word: "way",
    meaning: "길, 방법, 쪽",
    examples: [
      { en: "Which way is the subway station?", kr: "지하철역이 어느 쪽이에요?" },
      { en: "I'm on my way. See you soon!", kr: "지금 가는 중이야. 곧 봐!" }
    ]
  },
  {
    id: "L1-088",
    word: "even",
    meaning: "심지어, ~조차",
    examples: [
      { en: "He didn't even say hello.", kr: "그 사람은 인사조차 안 했어." },
      { en: "I can't even cook ramen.", kr: "난 라면도 못 끓여." }
    ]
  },
  {
    id: "L1-089",
    word: "first",
    meaning: "첫 번째의, 먼저, 처음",
    examples: [
      { en: "Is this your first time in Korea?", kr: "한국은 처음이세요?" },
      { en: "Let's eat first and talk later.", kr: "먼저 먹고 나중에 얘기하자." }
    ]
  },
  {
    id: "L1-090",
    word: "new",
    meaning: "새로운",
    examples: [
      { en: "I bought a new pair of shoes.", kr: "새 신발 한 켤레 샀어." },
      { en: "So, what's new with you?", kr: "그래서, 요즘 별일 없어?" }
    ]
  },
  {
    id: "L1-091",
    word: "want",
    meaning: "원하다, ~하고 싶다",
    examples: [
      { en: "What do you want for dinner?", kr: "저녁에 뭐 먹고 싶어?" },
      { en: "Do you want to come with me?", kr: "나랑 같이 갈래?" }
    ]
  },
  {
    id: "L1-092",
    word: "because",
    meaning: "왜냐하면, ~ 때문에",
    examples: [
      { en: "I was late because of the traffic.", kr: "차가 막혀서 늦었어." },
      { en: "I'm staying home because I have a cold.", kr: "감기 걸려서 집에 있을 거야." }
    ]
  },
  {
    id: "L1-093",
    word: "any",
    meaning: "어떤 (부정문, 의문문), 아무",
    examples: [
      { en: "Do you have any pets?", kr: "반려동물 키워?" },
      { en: "Sorry, I don't have any cash on me.", kr: "미안, 지금 현금이 하나도 없어." }
    ]
  },
  {
    id: "L1-094",
    word: "these",
    meaning: "이것들, 이 ~들",
    examples: [
      { en: "These shoes are too small. Do you have a bigger size?", kr: "이 신발 너무 작아요. 더 큰 사이즈 있나요?" },
      { en: "Excuse me, are these seats taken?", kr: "실례지만, 이 자리들 주인 있나요?" }
    ]
  },
  {
    id: "L1-095",
    word: "give",
    meaning: "주다",
    examples: [
      { en: "Can you give me a ride home?", kr: "집까지 태워 줄 수 있어?" },
      { en: "Give me a call when you're free.", kr: "시간 될 때 전화 줘." }
    ]
  },
  {
    id: "L1-096",
    word: "day",
    meaning: "날, 하루",
    examples: [
      { en: "So, how was your day?", kr: "그래서, 오늘 하루 어땠어?" },
      { en: "I work eight hours a day.", kr: "나는 하루에 8시간 일해." }
    ]
  },
  {
    id: "L1-097",
    word: "most",
    meaning: "대부분의, 가장",
    examples: [
      { en: "Most of my friends are married now.", kr: "내 친구들 대부분 이제 결혼했어." },
      { en: "What do you miss most about home?", kr: "고향에서 제일 그리운 게 뭐야?" }
    ]
  },
  {
    id: "L1-098",
    word: "us",
    meaning: "우리를, 우리에게",
    examples: [
      { en: "She invited us to her party.", kr: "그녀가 우리를 파티에 초대했어." },
      { en: "Could you take a picture of us?", kr: "저희 사진 좀 찍어 주실래요?" }
    ]
  },
  {
    id: "L1-099",
    word: "much",
    meaning: "많은, 많이",
    examples: [
      { en: "How much is this jacket?", kr: "이 재킷 얼마예요?" },
      { en: "Thank you so much for your help.", kr: "도와줘서 정말 고마워." }
    ]
  },
  {
    id: "L1-100",
    word: "thing",
    meaning: "것, 물건, 일",
    examples: [
      { en: "What's that thing on your desk?", kr: "네 책상 위에 있는 그거 뭐야?" },
      { en: "The best thing about this job is the people.", kr: "이 일의 제일 좋은 점은 사람들이야." }
    ]
  }
];

const wordsLevel1_Part2 = [
  {
    id: "L1-101",
    word: "man",
    meaning: "남자, 사람",
    examples: [
      { en: "Who's the man in the blue jacket?", kr: "파란 재킷 입은 남자 누구야?" },
      { en: "A man was waiting for you at the door.", kr: "어떤 남자가 문 앞에서 너 기다리고 있었어." }
    ]
  },
  {
    id: "L1-401",
    word: "great",
    meaning: "훌륭한, 대단한, 아주 좋은",
    examples: [
      { en: "You did a great job today.", kr: "오늘 정말 잘했어." },
      { en: "This café has great coffee and fast Wi-Fi.", kr: "이 카페 커피도 맛있고 와이파이도 빨라." }
    ]
  },
  {
    id: "L1-103",
    word: "world",
    meaning: "세계, 세상",
    examples: [
      { en: "I want to travel around the world someday.", kr: "언젠가 세계 여행을 하고 싶어." },
      { en: "It's a small world! How do you know her?", kr: "세상 좁다! 그녀를 어떻게 알아?" }
    ]
  },
  {
    id: "L1-104",
    word: "through",
    meaning: "~을 통해, ~을 지나",
    examples: [
      { en: "We walked through the park to get here.", kr: "우리 공원을 지나서 여기 왔어." },
      { en: "I found this apartment through a friend.", kr: "친구를 통해 이 아파트 구했어." }
    ]
  },
  {
    id: "L1-105",
    word: "should",
    meaning: "~해야 한다, ~하는 게 좋다",
    examples: [
      { en: "You should get some rest.", kr: "좀 쉬는 게 좋겠어." },
      { en: "We should hang out again soon.", kr: "조만간 또 놀자." }
    ]
  },
  {
    id: "L1-106",
    word: "call",
    meaning: "전화하다, 부르다",
    examples: [
      { en: "Call me when you get home.", kr: "집에 도착하면 전화해." },
      { en: "What do you call this in English?", kr: "이거 영어로 뭐라고 불러?" }
    ]
  },
  {
    id: "L1-107",
    word: "down",
    meaning: "아래로, (소리 등을) 낮춰",
    examples: [
      { en: "Please sit down and make yourself comfortable.", kr: "앉으셔서 편하게 계세요." },
      { en: "Can you turn the music down a little?", kr: "음악 소리 좀 줄여 줄래?" }
    ]
  },
  {
    id: "L1-108",
    word: "before",
    meaning: "~ 전에",
    examples: [
      { en: "Let's grab a coffee before the meeting.", kr: "회의 전에 커피 한잔하자." },
      { en: "Have you been here before?", kr: "여기 와 본 적 있어?" }
    ]
  },
  {
    id: "L1-109",
    word: "since",
    meaning: "~ 이후로, ~이니까",
    examples: [
      { en: "I haven't seen him since last year.", kr: "작년 이후로 그 사람 못 봤어." },
      { en: "Since you're here, can you help me?", kr: "온 김에 나 좀 도와줄래?" }
    ]
  },
  {
    id: "L1-110",
    word: "turn",
    meaning: "돌다, 돌리다, 차례",
    examples: [
      { en: "Turn left at the corner, please.", kr: "모퉁이에서 왼쪽으로 돌아 주세요." },
      { en: "It's your turn to do the dishes.", kr: "이번엔 네가 설거지할 차례야." }
    ]
  },
  {
    id: "L1-111",
    word: "place",
    meaning: "장소, 곳, 집",
    examples: [
      { en: "Do you know a good place for brunch?", kr: "브런치 먹기 좋은 데 알아?" },
      { en: "Let's watch a movie at my place.", kr: "우리 집에서 영화 보자." }
    ]
  },
  {
    id: "L1-112",
    word: "hand",
    meaning: "손, 도움",
    examples: [
      { en: "Wash your hands before dinner.", kr: "저녁 먹기 전에 손 씻어." },
      { en: "Can you give me a hand with these boxes?", kr: "이 상자들 옮기는 것 좀 도와줄래?" }
    ]
  },
  {
    id: "L1-113",
    word: "where",
    meaning: "어디에, 어디",
    examples: [
      { en: "Where are you going this summer?", kr: "이번 여름에 어디 가?" },
      { en: "Where can I buy a ticket?", kr: "표는 어디서 사요?" }
    ]
  },
  {
    id: "L1-114",
    word: "while",
    meaning: "~ 동안, 잠시",
    examples: [
      { en: "Can you watch my bag while I'm in the restroom?", kr: "저 화장실 다녀오는 동안 가방 좀 봐 주실래요?" },
      { en: "I haven't seen you in a while!", kr: "오랜만이다!" }
    ]
  },
  {
    id: "L1-115",
    word: "tell",
    meaning: "말하다, 알리다",
    examples: [
      { en: "Tell me what happened last night.", kr: "어젯밤에 무슨 일 있었는지 말해 봐." },
      { en: "Please tell her that I called.", kr: "제가 전화했다고 그녀에게 전해 주세요." }
    ]
  },
  {
    id: "L1-116",
    word: "general",
    meaning: "일반적인, 대략적인",
    examples: [
      { en: "In general, I prefer staying home on weekends.", kr: "보통 주말엔 집에 있는 게 좋아." },
      { en: "I have a general idea of what to do.", kr: "뭘 해야 할지 대충은 알아." }
    ]
  },
  {
    id: "L1-501",
    word: "phone",
    meaning: "전화, 휴대폰, 전화하다",
    examples: [
      { en: "Can I borrow your phone for a second?", kr: "폰 잠깐 빌려도 돼?" },
      { en: "Sorry, my phone died. That's why I didn't answer.", kr: "미안, 폰 배터리가 나가서 전화 못 받았어." }
    ]
  },
  {
    id: "L1-118",
    word: "small",
    meaning: "작은",
    examples: [
      { en: "Can I get a small coffee, please?", kr: "커피 작은 사이즈로 주세요." },
      { en: "Don't worry about the small stuff.", kr: "사소한 일로 걱정하지 마." }
    ]
  },
  {
    id: "L1-119",
    word: "number",
    meaning: "번호, 숫자, 수",
    examples: [
      { en: "What's your phone number?", kr: "전화번호가 뭐야?" },
      { en: "Sorry, I think you have the wrong number.", kr: "죄송한데 전화 잘못 거신 것 같아요." }
    ]
  },
  {
    id: "L1-120",
    word: "end",
    meaning: "끝, 끝나다",
    examples: [
      { en: "What time does the movie end?", kr: "영화 몇 시에 끝나?" },
      { en: "I'm moving at the end of the month.", kr: "나 이달 말에 이사해." }
    ]
  },
  {
    id: "L1-121",
    word: "form",
    meaning: "양식, 서식, 방식",
    examples: [
      { en: "Please fill out this form first.", kr: "먼저 이 양식을 작성해 주세요." },
      { en: "What forms of payment do you accept?", kr: "어떤 결제 수단을 받으세요?" }
    ]
  },
  {
    id: "L1-122",
    word: "less",
    meaning: "더 적은, 덜",
    examples: [
      { en: "Can I get it with less sugar?", kr: "설탕 좀 덜 넣어 주실 수 있어요?" },
      { en: "It costs less than ten dollars.", kr: "10달러도 안 해." }
    ]
  },
  {
    id: "L1-123",
    word: "life",
    meaning: "삶, 인생, 생활",
    examples: [
      { en: "Life is too short to worry so much.", kr: "그렇게 걱정하기엔 인생이 너무 짧아." },
      { en: "How's life in the new city?", kr: "새 도시에서의 생활은 어때?" }
    ]
  },
  {
    id: "L1-124",
    word: "public",
    meaning: "공공의, 대중의",
    examples: [
      { en: "I usually take public transportation to work.", kr: "나는 보통 대중교통으로 출근해." },
      { en: "Is there a public restroom near here?", kr: "이 근처에 공중화장실 있어요?" }
    ]
  },
  {
    id: "L1-125",
    word: "present",
    meaning: "선물, 현재, 참석한",
    examples: [
      { en: "I got you a little birthday present.", kr: "작은 생일 선물 준비했어." },
      { en: "What should we get Mom for a present?", kr: "엄마 선물로 뭘 사 드릴까?" }
    ]
  },
  {
    id: "L1-126",
    word: "case",
    meaning: "경우, 만일의 경우, 케이스",
    examples: [
      { en: "Take an umbrella, just in case.", kr: "혹시 모르니까 우산 챙겨." },
      { en: "I need a new case for my phone.", kr: "폰 케이스 새로 사야 돼." }
    ]
  },
  {
    id: "L1-127",
    word: "point",
    meaning: "요점, 의미, 지적",
    examples: [
      { en: "That's a good point. I didn't think of that.", kr: "좋은 지적이야. 그건 생각 못 했네." },
      { en: "What's the point of waiting?", kr: "기다려서 뭐 해?" }
    ]
  },
  {
    id: "L1-128",
    word: "area",
    meaning: "지역, 동네, 분야",
    examples: [
      { en: "Do you live in this area?", kr: "이 동네 사세요?" },
      { en: "Are there any good restaurants in the area?", kr: "이 근처에 괜찮은 식당 있어요?" }
    ]
  },
  {
    id: "L1-129",
    word: "book",
    meaning: "책, 예약하다",
    examples: [
      { en: "I'm reading a really good book.", kr: "나 진짜 재밌는 책 읽고 있어." },
      { en: "Let's book a table for dinner.", kr: "저녁 식사 자리 예약하자." }
    ]
  },
  {
    id: "L1-130",
    word: "power",
    meaning: "전기, 힘, 권력",
    examples: [
      { en: "The storm knocked out the power last night.", kr: "어젯밤에 폭풍 때문에 정전됐어." },
      { en: "Is there a power outlet near my seat?", kr: "제 자리 근처에 콘센트 있나요?" }
    ]
  },
  {
    id: "L1-502",
    word: "cheap",
    meaning: "싼, 저렴한",
    examples: [
      { en: "Wow, that's really cheap!", kr: "와, 진짜 싸다!" },
      { en: "Excuse me, do you have anything cheaper?", kr: "저기요, 더 싼 거 있어요?" }
    ]
  },
  {
    id: "L1-132",
    word: "problem",
    meaning: "문제",
    examples: [
      { en: "No problem. Happy to help.", kr: "천만에요. 도와드려서 기뻐요." },
      { en: "Is there a problem with my order?", kr: "제 주문에 문제가 있나요?" }
    ]
  },
  {
    id: "L1-133",
    word: "face",
    meaning: "얼굴, 직면하다",
    examples: [
      { en: "Wash your face before bed.", kr: "자기 전에 세수해." },
      { en: "Why the long face? What's wrong?", kr: "왜 그렇게 시무룩해? 무슨 일 있어?" }
    ]
  },
  {
    id: "L1-134",
    word: "side",
    meaning: "쪽, 편, 곁들임",
    examples: [
      { en: "Whose side are you on, anyway?", kr: "도대체 넌 누구 편이야?" },
      { en: "Can I get the salad on the side?", kr: "샐러드는 따로 주실 수 있어요?" }
    ]
  },
  {
    id: "L1-135",
    word: "try",
    meaning: "해 보다, 노력하다, 입어 보다",
    examples: [
      { en: "I'll try my best.", kr: "최선을 다해 볼게." },
      { en: "Can I try this on?", kr: "이거 입어 봐도 돼요?" }
    ]
  },
  {
    id: "L1-136",
    word: "group",
    meaning: "그룹, 모임, 무리",
    examples: [
      { en: "We're in the same study group.", kr: "우리 같은 스터디 모임이야." },
      { en: "Can you add me to the group chat?", kr: "나 단톡방에 초대해 줄래?" }
    ]
  },
  {
    id: "L1-137",
    word: "next",
    meaning: "다음의",
    examples: [
      { en: "What are you doing next week?", kr: "다음 주에 뭐 해?" },
      { en: "The next bus comes in ten minutes.", kr: "다음 버스는 10분 후에 와." }
    ]
  },
  {
    id: "L1-138",
    word: "long",
    meaning: "긴, 오래",
    examples: [
      { en: "It was a long day at work.", kr: "오늘 회사에서 긴 하루였어." },
      { en: "How long are you staying in Seoul?", kr: "서울에 얼마나 있을 거예요?" }
    ]
  },
  {
    id: "L1-139",
    word: "last",
    meaning: "마지막의, 지난",
    examples: [
      { en: "Can I have the last piece of cake?", kr: "마지막 케이크 한 조각 내가 먹어도 돼?" },
      { en: "Where were you last night?", kr: "어젯밤에 어디 있었어?" }
    ]
  },
  {
    id: "L1-140",
    word: "hold",
    meaning: "잡다, 들고 있다, 기다리다",
    examples: [
      { en: "Can you hold my bag for a second?", kr: "가방 잠깐 들어 줄래?" },
      { en: "Please hold on a moment.", kr: "잠시만 기다려 주세요." }
    ]
  },
  {
    id: "L1-141",
    word: "stand",
    meaning: "서다, 참다",
    examples: [
      { en: "I can't stand this hot weather.", kr: "이 더운 날씨 못 참겠어." },
      { en: "We had to stand the whole way home.", kr: "집에 오는 내내 서서 와야 했어." }
    ]
  },
  {
    id: "L1-142",
    word: "own",
    meaning: "자신의, 소유하다",
    examples: [
      { en: "I want to start my own business someday.", kr: "언젠가 내 사업을 시작하고 싶어." },
      { en: "Do you live on your own?", kr: "혼자 살아?" }
    ]
  },
  {
    id: "L1-143",
    word: "pay",
    meaning: "지불하다, 내다",
    examples: [
      { en: "Can I pay by card?", kr: "카드로 계산해도 돼요?" },
      { en: "How much did you pay for it?", kr: "그거 얼마 주고 샀어?" }
    ]
  },
  {
    id: "L1-144",
    word: "little",
    meaning: "작은, 조금",
    examples: [
      { en: "I need a little more time.", kr: "시간이 조금 더 필요해." },
      { en: "She's my little sister.", kr: "얘는 내 여동생이야." }
    ]
  },
  {
    id: "L1-145",
    word: "school",
    meaning: "학교",
    examples: [
      { en: "My kids walk to school every morning.", kr: "우리 애들은 매일 아침 걸어서 학교 가." },
      { en: "We went to the same high school.", kr: "우리 같은 고등학교 다녔어." }
    ]
  },
  {
    id: "L1-503",
    word: "friend",
    meaning: "친구",
    examples: [
      { en: "This is my friend from work.", kr: "이쪽은 회사 친구야." },
      { en: "I'm meeting some friends for dinner tonight.", kr: "오늘 저녁에 친구들이랑 밥 먹어." }
    ]
  },
  {
    id: "L1-147",
    word: "feel",
    meaning: "느끼다, (기분이) 들다",
    examples: [
      { en: "I feel really tired today.", kr: "오늘 너무 피곤해." },
      { en: "Do you feel like getting some pizza?", kr: "피자 먹을래?" }
    ]
  },
  {
    id: "L1-148",
    word: "change",
    meaning: "바꾸다, 변화, 잔돈",
    examples: [
      { en: "Can I change my seat?", kr: "자리 바꿀 수 있을까요?" },
      { en: "Here's your change. Have a nice day!", kr: "여기 잔돈입니다. 좋은 하루 보내세요!" }
    ]
  },
  {
    id: "L1-149",
    word: "put",
    meaning: "놓다, 넣다",
    examples: [
      { en: "Where did you put my car keys?", kr: "내 차 열쇠 어디에 뒀어?" },
      { en: "Can you put this in the fridge?", kr: "이거 냉장고에 넣어 줄래?" }
    ]
  },
  {
    id: "L1-150",
    word: "keep",
    meaning: "유지하다, 계속하다, 보관하다",
    examples: [
      { en: "Keep the change. Thanks a lot.", kr: "잔돈은 가지세요. 정말 감사합니다." },
      { en: "Why do you keep checking your phone?", kr: "왜 자꾸 폰을 확인해?" }
    ]
  },
  {
    id: "L1-151",
    word: "house",
    meaning: "집",
    examples: [
      { en: "Do you want to come to my house for dinner?", kr: "우리 집에 저녁 먹으러 올래?" },
      { en: "Their new house is so nice.", kr: "그 사람들 새집 정말 좋더라." }
    ]
  },
  {
    id: "L1-504",
    word: "eat",
    meaning: "먹다",
    examples: [
      { en: "Have you eaten yet?", kr: "밥 먹었어?" },
      { en: "What do you want to eat tonight?", kr: "오늘 저녁에 뭐 먹고 싶어?" }
    ]
  },
  {
    id: "L1-153",
    word: "family",
    meaning: "가족",
    examples: [
      { en: "How's your family doing?", kr: "가족들은 잘 지내?" },
      { en: "We had a family dinner last night.", kr: "어젯밤에 가족끼리 저녁 먹었어." }
    ]
  },
  {
    id: "L1-154",
    word: "allow",
    meaning: "허락하다, 허용하다",
    examples: [
      { en: "Are pets allowed in this café?", kr: "이 카페에 반려동물 데려와도 되나요?" },
      { en: "Sorry, you're not allowed to take photos here.", kr: "죄송하지만 여기서는 사진 촬영이 안 됩니다." }
    ]
  },
  {
    id: "L1-155",
    word: "ask",
    meaning: "묻다, 요청하다",
    examples: [
      { en: "Can I ask you a question?", kr: "질문 하나 해도 될까요?" },
      { en: "Why don't you ask him for help?", kr: "그 사람한테 도와달라고 해 보는 게 어때?" }
    ]
  },
  {
    id: "L1-156",
    word: "follow",
    meaning: "따라가다, 따르다, 팔로우하다",
    examples: [
      { en: "Follow me. I'll show you the way.", kr: "따라오세요. 길 알려 드릴게요." },
      { en: "I follow a lot of cooking accounts online.", kr: "나는 온라인에서 요리 계정을 많이 팔로우해." }
    ]
  },
  {
    id: "L1-157",
    word: "woman",
    meaning: "여자, 여성",
    examples: [
      { en: "The woman at the front desk was really nice.", kr: "프런트 데스크 여자분이 정말 친절했어." },
      { en: "Who's that woman talking to your mom?", kr: "너희 엄마랑 얘기하는 저 여자분 누구야?" }
    ]
  },
  {
    id: "L1-158",
    word: "member",
    meaning: "회원, 구성원",
    examples: [
      { en: "Are you a member? You get ten percent off.", kr: "회원이세요? 10% 할인돼요." },
      { en: "She's the newest member of our team.", kr: "그녀는 우리 팀에 새로 들어온 멤버야." }
    ]
  },
  {
    id: "L1-159",
    word: "study",
    meaning: "공부하다, 전공하다",
    examples: [
      { en: "I need to study for the test tonight.", kr: "오늘 밤에 시험공부 해야 해." },
      { en: "What did you study in college?", kr: "대학에서 뭐 전공했어?" }
    ]
  },
  {
    id: "L1-160",
    word: "control",
    meaning: "통제하다, 조절하다, 리모컨",
    examples: [
      { en: "Where's the remote control?", kr: "리모컨 어디 있어?" },
      { en: "Calm down. Everything is under control.", kr: "진정해. 다 잘 처리되고 있어." }
    ]
  },
  {
    id: "L1-161",
    word: "set",
    meaning: "놓다, (알람 등을) 맞추다, 세트",
    examples: [
      { en: "I set my alarm for six.", kr: "알람 6시로 맞춰 놨어." },
      { en: "Can you help me set the table?", kr: "상 차리는 것 좀 도와줄래?" }
    ]
  },
  {
    id: "L1-162",
    word: "word",
    meaning: "단어, 말",
    examples: [
      { en: "What does this word mean?", kr: "이 단어 무슨 뜻이야?" },
      { en: "Can I have a word with you?", kr: "잠깐 얘기 좀 할 수 있을까요?" }
    ]
  },
  {
    id: "L1-505",
    word: "tired",
    meaning: "피곤한, 지친, 싫증 난",
    examples: [
      { en: "I'm so tired. I'm going to bed early.", kr: "너무 피곤해. 일찍 잘래." },
      { en: "I'm tired of eating the same thing every day.", kr: "매일 같은 거 먹는 거 지겨워." }
    ]
  },
  {
    id: "L1-164",
    word: "run",
    meaning: "달리다, 운영하다",
    examples: [
      { en: "I go for a run every morning.", kr: "나 매일 아침 달리기해." },
      { en: "Who runs this restaurant? The food is amazing.", kr: "이 식당 누가 운영해? 음식 진짜 맛있다." }
    ]
  },
  {
    id: "L1-165",
    word: "result",
    meaning: "결과",
    examples: [
      { en: "When will I get my test results?", kr: "검사 결과는 언제 나와요?" },
      { en: "So what was the result? Did you get the job?", kr: "그래서 결과는 어떻게 됐어? 합격했어?" }
    ]
  },
  {
    id: "L1-166",
    word: "order",
    meaning: "주문하다, 순서",
    examples: [
      { en: "Are you ready to order?", kr: "주문하시겠어요?" },
      { en: "I ordered a pizza. It'll be here soon.", kr: "피자 시켰어. 곧 올 거야." }
    ]
  },
  {
    id: "L1-167",
    word: "money",
    meaning: "돈",
    examples: [
      { en: "Can I borrow some money until Friday?", kr: "금요일까지 돈 좀 빌려도 돼?" },
      { en: "I'm trying to save money this month.", kr: "이번 달엔 돈 좀 아끼려고 해." }
    ]
  },
  {
    id: "L1-168",
    word: "read",
    meaning: "읽다",
    examples: [
      { en: "Did you read my message?", kr: "내 메시지 읽었어?" },
      { en: "Could you read this sign for me?", kr: "이 표지판 좀 읽어 주시겠어요?" }
    ]
  },
  {
    id: "L1-169",
    word: "interest",
    meaning: "관심, 흥미, 이자",
    examples: [
      { en: "I've always had an interest in cooking.", kr: "난 항상 요리에 관심이 있었어." },
      { en: "What's the interest rate on this loan?", kr: "이 대출 이자율이 어떻게 돼요?" }
    ]
  },
  {
    id: "L1-170",
    word: "body",
    meaning: "몸",
    examples: [
      { en: "My whole body hurts after the hike.", kr: "등산하고 나서 온몸이 아파." },
      { en: "Yoga is really good for your body.", kr: "요가는 몸에 정말 좋아." }
    ]
  },
  {
    id: "L1-171",
    word: "fact",
    meaning: "사실",
    examples: [
      { en: "In fact, I've never been to Japan.", kr: "사실 나 일본에 가 본 적 없어." },
      { en: "Is that a fact, or just your opinion?", kr: "그거 사실이야, 아니면 그냥 네 생각이야?" }
    ]
  },
  {
    id: "L1-172",
    word: "war",
    meaning: "전쟁",
    examples: [
      { en: "Did you watch that new war movie?", kr: "그 새로 나온 전쟁 영화 봤어?" },
      { en: "My grandpa still talks about the war sometimes.", kr: "우리 할아버지는 아직도 가끔 전쟁 얘기를 하셔." }
    ]
  },
  {
    id: "L1-173",
    word: "view",
    meaning: "경치, 전망, 관점",
    examples: [
      { en: "The apartment has a great view of the city.", kr: "그 아파트 도시 전망이 정말 좋아." },
      { en: "Can we get a room with an ocean view?", kr: "바다 전망 방으로 받을 수 있을까요?" }
    ]
  },
  {
    id: "L1-174",
    word: "move",
    meaning: "이사하다, 움직이다, 옮기다",
    examples: [
      { en: "We're moving to a new place next month.", kr: "우리 다음 달에 이사해." },
      { en: "Could you move your car a little?", kr: "차 좀 조금만 빼 주실 수 있어요?" }
    ]
  },
  {
    id: "L1-175",
    word: "reason",
    meaning: "이유",
    examples: [
      { en: "What's the reason for the delay?", kr: "지연되는 이유가 뭐예요?" },
      { en: "Is there any reason you didn't call me?", kr: "나한테 전화 안 한 이유라도 있어?" }
    ]
  },
  {
    id: "L1-176",
    word: "meet",
    meaning: "만나다",
    examples: [
      { en: "Let's meet for lunch tomorrow.", kr: "내일 점심 때 만나자." },
      { en: "Nice to meet you. I'm Sam.", kr: "만나서 반가워요. 저는 샘이에요." }
    ]
  },
  {
    id: "L1-177",
    word: "real",
    meaning: "진짜의, 실제의",
    examples: [
      { en: "Is this real leather?", kr: "이거 진짜 가죽이에요?" },
      { en: "Are you for real? That's amazing!", kr: "진짜야? 대박이다!" }
    ]
  },
  {
    id: "L1-178",
    word: "name",
    meaning: "이름",
    examples: [
      { en: "Sorry, what was your name again?", kr: "죄송한데 성함이 뭐였죠?" },
      { en: "I have a reservation under the name Kim.", kr: "김이라는 이름으로 예약했어요." }
    ]
  },
  {
    id: "L1-179",
    word: "course",
    meaning: "강좌, 과정, (of course) 물론",
    examples: [
      { en: "I'm taking an English course online.", kr: "온라인으로 영어 강좌 듣고 있어." },
      { en: "Of course! I'd love to come.", kr: "물론이지! 꼭 갈게." }
    ]
  },
  {
    id: "L1-180",
    word: "report",
    meaning: "보고서, 신고하다, 보고하다",
    examples: [
      { en: "I need to finish this report by tomorrow.", kr: "내일까지 이 보고서 끝내야 해." },
      { en: "I'd like to report a lost wallet.", kr: "지갑 분실 신고를 하고 싶어요." }
    ]
  },
  {
    id: "L1-181",
    word: "service",
    meaning: "서비스, (휴대폰) 신호",
    examples: [
      { en: "The food was okay, but the service was terrible.", kr: "음식은 괜찮았는데 서비스가 엉망이었어." },
      { en: "I can't get any cell service in here.", kr: "여기 안에선 휴대폰이 안 터져." }
    ]
  },
  {
    id: "L1-182",
    word: "line",
    meaning: "줄, 선, (전화) 회선",
    examples: [
      { en: "Are you waiting in line?", kr: "줄 서 계신 거예요?" },
      { en: "Sorry, the line was busy when I called.", kr: "미안, 전화했을 때 통화 중이었어." }
    ]
  },
  {
    id: "L1-183",
    word: "level",
    meaning: "수준, 층, 단계",
    examples: [
      { en: "What's your English level?", kr: "영어 실력이 어느 정도예요?" },
      { en: "I parked on level two of the garage.", kr: "주차장 2층에 주차했어." }
    ]
  },
  {
    id: "L1-184",
    word: "table",
    meaning: "테이블, 식탁",
    examples: [
      { en: "Can we get a table for four?", kr: "4명 자리 있을까요?" },
      { en: "Can you help me clean the table?", kr: "식탁 치우는 것 좀 도와줄래?" }
    ]
  },
  {
    id: "L1-185",
    word: "city",
    meaning: "도시",
    examples: [
      { en: "Which city are you from?", kr: "어느 도시 출신이에요?" },
      { en: "I'd rather live in the city than the countryside.", kr: "시골보다 도시에 사는 게 더 좋아." }
    ]
  },
  {
    id: "L1-506",
    word: "room",
    meaning: "방, 공간, 자리",
    examples: [
      { en: "Do you have a room for two tonight?", kr: "오늘 밤 두 명 묵을 방 있나요?" },
      { en: "Is there room for one more in the car?", kr: "차에 한 명 더 탈 자리 있어?" }
    ]
  },
  {
    id: "L1-187",
    word: "hour",
    meaning: "시간 (60분)",
    examples: [
      { en: "I'll be there in an hour.", kr: "한 시간 후에 도착할게." },
      { en: "I only slept for a few hours.", kr: "몇 시간밖에 못 잤어." }
    ]
  },
  {
    id: "L1-188",
    word: "market",
    meaning: "시장",
    examples: [
      { en: "I bought fresh fruit at the market.", kr: "시장에서 신선한 과일 샀어." },
      { en: "Let's check out the night market tonight.", kr: "오늘 밤에 야시장 구경 가자." }
    ]
  },
  {
    id: "L1-189",
    word: "social",
    meaning: "사교적인, 사회의",
    examples: [
      { en: "I'm not very social at big parties.", kr: "나는 큰 파티에서는 별로 사교적이지 않아." },
      { en: "I spend too much time on social media.", kr: "나 SNS에 시간을 너무 많이 써." }
    ]
  },
  {
    id: "L1-190",
    word: "major",
    meaning: "전공, 주요한, 큰",
    examples: [
      { en: "What was your major in college?", kr: "대학교 때 전공이 뭐였어?" },
      { en: "It's not a major problem. Don't worry.", kr: "큰 문제 아니야. 걱정 마." }
    ]
  },
  {
    id: "L1-191",
    word: "sure",
    meaning: "확신하는, 물론",
    examples: [
      { en: "Are you sure you want to go?", kr: "진짜 가고 싶은 거 맞아?" },
      { en: "Sure, I'd love to help.", kr: "그럼, 기꺼이 도와줄게." }
    ]
  },
  {
    id: "L1-192",
    word: "full",
    meaning: "배부른, 가득 찬",
    examples: [
      { en: "I'm so full. I can't eat another bite.", kr: "너무 배불러. 한 입도 더 못 먹겠어." },
      { en: "Sorry, we're full tonight.", kr: "죄송합니다, 오늘 밤은 자리가 다 찼어요." }
    ]
  },
  {
    id: "L1-193",
    word: "right",
    meaning: "옳은, 오른쪽, 바로",
    examples: [
      { en: "You're absolutely right about that.", kr: "그건 네 말이 완전히 맞아." },
      { en: "Turn right at the next traffic light.", kr: "다음 신호등에서 우회전하세요." }
    ]
  },
  {
    id: "L1-194",
    word: "high",
    meaning: "높은, (가격이) 비싼",
    examples: [
      { en: "He has a really high fever.", kr: "그 사람 열이 많이 나." },
      { en: "Prices are so high these days.", kr: "요즘 물가가 너무 비싸." }
    ]
  },
  {
    id: "L1-195",
    word: "able",
    meaning: "~할 수 있는",
    examples: [
      { en: "Will you be able to come tomorrow?", kr: "내일 올 수 있어?" },
      { en: "She won't be able to make it to the party.", kr: "그녀는 파티에 못 올 거야." }
    ]
  },
  {
    id: "L1-402",
    word: "home",
    meaning: "집, 집에, 집처럼 편한 곳",
    examples: [
      { en: "I usually get home around seven after work.", kr: "보통 퇴근하고 7시쯤 집에 와." },
      { en: "Make yourself at home while I finish cooking.", kr: "요리 마무리하는 동안 편하게 있어." }
    ]
  },
  {
    id: "L1-197",
    word: "ready",
    meaning: "준비된",
    examples: [
      { en: "Are you ready to go?", kr: "갈 준비 됐어?" },
      { en: "Dinner's ready! Come and eat.", kr: "저녁 다 됐어! 와서 먹어." }
    ]
  },
  {
    id: "L1-198",
    word: "show",
    meaning: "보여주다, (TV) 프로그램",
    examples: [
      { en: "Can you show me your new phone?", kr: "새 폰 좀 보여 줄래?" },
      { en: "What's your favorite TV show?", kr: "제일 좋아하는 TV 프로그램이 뭐야?" }
    ]
  },
  {
    id: "L1-403",
    word: "find",
    meaning: "찾다, 발견하다, ~라고 느끼다",
    examples: [
      { en: "I can't find my car keys anywhere.", kr: "차 열쇠를 아무 데도 못 찾겠어." },
      { en: "Did you find the place okay?", kr: "여기 찾아오기 어렵진 않았어?" }
    ]
  },
  {
    id: "L1-200",
    word: "same",
    meaning: "같은",
    examples: [
      { en: "I'll have the same, please.", kr: "저도 같은 걸로 주세요." },
      { en: "Your shirt is the same as mine!", kr: "네 셔츠 내 거랑 똑같다!" }
    ]
  }
];

const wordsLevel1_Part3 = [
  {
    id: "L1-201",
    word: "open",
    meaning: "열다, 열려 있는",
    examples: [
      { en: "What time does the pharmacy open?", kr: "약국 몇 시에 문 열어요?" },
      { en: "Please open the window for some fresh air.", kr: "바람 좀 들어오게 창문 좀 열어 주세요." }
    ]
  },
  {
    id: "L1-202",
    word: "provide",
    meaning: "제공하다",
    examples: [
      { en: "Does the hotel provide free breakfast?", kr: "그 호텔은 조식을 무료로 제공해요?" },
      { en: "We'll provide lunch, so you don't need to bring anything.", kr: "점심은 저희가 제공하니까 아무것도 안 가져오셔도 돼요." }
    ]
  },
  {
    id: "L1-203",
    word: "party",
    meaning: "파티, 일행",
    examples: [
      { en: "Are you coming to my birthday party?", kr: "내 생일 파티에 올 거야?" },
      { en: "Hi, we're a party of four.", kr: "안녕하세요, 저희 일행은 네 명이에요." }
    ]
  },
  {
    id: "L1-204",
    word: "big",
    meaning: "큰",
    examples: [
      { en: "Wow, your new apartment is so big!", kr: "와, 너 새 아파트 진짜 크다!" },
      { en: "Is that table big enough for four people?", kr: "그 테이블 네 명 앉기에 충분히 커요?" }
    ]
  },
  {
    id: "L1-205",
    word: "bring",
    meaning: "가져오다",
    examples: [
      { en: "Should I bring anything to the party?", kr: "파티에 뭐 좀 가져갈까?" },
      { en: "Did you bring your umbrella?", kr: "우산 가져왔어?" }
    ]
  },
  {
    id: "L1-206",
    word: "possible",
    meaning: "가능한",
    examples: [
      { en: "Is it possible to finish this by today?", kr: "오늘까지 이거 끝내는 게 가능해요?" },
      { en: "Please call me back as soon as possible.", kr: "가능한 한 빨리 다시 전화 주세요." }
    ]
  },
  {
    id: "L1-207",
    word: "program",
    meaning: "프로그램",
    examples: [
      { en: "I watched an interesting TV program last night.", kr: "어젯밤에 재밌는 TV 프로그램을 봤어." },
      { en: "This program is really useful for editing photos.", kr: "이 프로그램 사진 편집할 때 진짜 유용해요." }
    ]
  },
  {
    id: "L1-208",
    word: "understand",
    meaning: "이해하다",
    examples: [
      { en: "Sorry, I don't understand. Could you say that again?", kr: "죄송한데 이해를 못 했어요. 다시 말씀해 주시겠어요?" },
      { en: "Do you understand what I mean?", kr: "내 말 무슨 뜻인지 알겠어?" }
    ]
  },
  {
    id: "L1-209",
    word: "kind",
    meaning: "종류, 친절한",
    examples: [
      { en: "What kind of music do you like?", kr: "어떤 종류의 음악 좋아해?" },
      { en: "That's so kind of you. Thank you!", kr: "정말 친절하시네요. 감사합니다!" }
    ]
  },
  {
    id: "L1-210",
    word: "need",
    meaning: "필요하다",
    examples: [
      { en: "I need to grab some groceries on the way home.", kr: "집에 가는 길에 장 좀 봐야 해." },
      { en: "Do you need help carrying those boxes?", kr: "그 상자들 나르는 거 도와줄까?" }
    ]
  },
  {
    id: "L1-211",
    word: "almost",
    meaning: "거의, 하마터면",
    examples: [
      { en: "It's almost midnight. We should go home.", kr: "거의 자정이야. 이제 집에 가야겠다." },
      { en: "I almost forgot your birthday!", kr: "하마터면 네 생일 잊어버릴 뻔했어!" }
    ]
  },
  {
    id: "L1-212",
    word: "important",
    meaning: "중요한",
    examples: [
      { en: "Sorry, I can't talk now. I'm in an important meeting.", kr: "미안, 지금 통화 못 해. 중요한 회의 중이야." },
      { en: "Is it important, or can it wait?", kr: "중요한 거야, 아니면 나중에 해도 돼?" }
    ]
  },
  {
    id: "L1-213",
    word: "play",
    meaning: "놀다, 연주하다",
    examples: [
      { en: "Let's go play outside for a bit.", kr: "나가서 좀 놀자." },
      { en: "He can play the piano really well.", kr: "그는 피아노를 정말 잘 쳐." }
    ]
  },
  {
    id: "L1-214",
    word: "write",
    meaning: "쓰다",
    examples: [
      { en: "Can you write your name here?", kr: "여기에 성함 좀 써 주시겠어요?" },
      { en: "Could you write that down for me?", kr: "그거 좀 적어 주시겠어요?" }
    ]
  },
  {
    id: "L1-215",
    word: "become",
    meaning: "~이 되다",
    examples: [
      { en: "My sister just became a mom!", kr: "우리 언니 얼마 전에 엄마 됐어!" },
      { en: "How did you become a teacher?", kr: "어떻게 선생님이 되셨어요?" }
    ]
  },
  {
    id: "L1-216",
    word: "inside",
    meaning: "안에",
    examples: [
      { en: "It's too cold, let's stay inside.", kr: "너무 추워, 안에 있자." },
      { en: "Is it okay if we sit inside?", kr: "안에 앉아도 될까요?" }
    ]
  },
  {
    id: "L1-217",
    word: "street",
    meaning: "거리, 길",
    examples: [
      { en: "He lives just down the street from me.", kr: "그 사람 우리 집에서 길 따라 조금만 가면 나오는 데 살아." },
      { en: "Be careful when you cross the street.", kr: "길 건널 때 조심해." }
    ]
  },
  {
    id: "L1-218",
    word: "second",
    meaning: "두 번째의, 초",
    examples: [
      { en: "This is my second cup of coffee today.", kr: "이거 오늘 두 번째 커피야." },
      { en: "Wait a second, I need to check something.", kr: "잠깐만, 확인할 게 있어." }
    ]
  },
  {
    id: "L1-219",
    word: "talk",
    meaning: "말하다, 이야기하다",
    examples: [
      { en: "Let's talk about your plan.", kr: "네 계획에 대해 얘기해 보자." },
      { en: "Can I talk to you for a minute?", kr: "잠깐 얘기 좀 할 수 있을까?" }
    ]
  },
  {
    id: "L1-220",
    word: "soon",
    meaning: "곧",
    examples: [
      { en: "I hope to see you again soon.", kr: "곧 또 만났으면 좋겠어요." },
      { en: "Dinner will be ready soon.", kr: "저녁 곧 다 돼." }
    ]
  },
  {
    id: "L1-221",
    word: "continue",
    meaning: "계속하다",
    examples: [
      { en: "Sorry for interrupting. Please continue.", kr: "말 끊어서 죄송해요. 계속하세요." },
      { en: "Let's continue this tomorrow. I'm exhausted.", kr: "이건 내일 계속하자. 나 완전 지쳤어." }
    ]
  },
  {
    id: "L1-222",
    word: "build",
    meaning: "짓다, 쌓다",
    examples: [
      { en: "They're going to build a new bridge here.", kr: "여기에 새 다리를 지을 거래." },
      { en: "It takes time to build trust.", kr: "신뢰를 쌓는 데는 시간이 걸려요." }
    ]
  },
  {
    id: "L1-223",
    word: "increase",
    meaning: "늘리다, 증가하다",
    examples: [
      { en: "Can we increase the budget a little?", kr: "예산을 조금 늘릴 수 있을까요?" },
      { en: "Gas prices have increased a lot recently.", kr: "요즘 기름값이 많이 올랐어요." }
    ]
  },
  {
    id: "L1-224",
    word: "week",
    meaning: "주(週)",
    examples: [
      { en: "I'll be on vacation next week.", kr: "나 다음 주에 휴가야." },
      { en: "I go to the gym three times a week.", kr: "나 일주일에 세 번 헬스장 가." }
    ]
  },
  {
    id: "L1-225",
    word: "president",
    meaning: "대통령, 회장, 사장",
    examples: [
      { en: "Did you watch the president's speech last night?", kr: "어젯밤에 대통령 연설 봤어?" },
      { en: "She's the president of the company.", kr: "그분이 그 회사 사장님이에요." }
    ]
  },
  {
    id: "L1-226",
    word: "history",
    meaning: "역사",
    examples: [
      { en: "I was never good at history in school.", kr: "나 학교 다닐 때 역사를 진짜 못했어." },
      { en: "This city has a really long history.", kr: "이 도시는 역사가 정말 길어요." }
    ]
  },
  {
    id: "L1-227",
    word: "approach",
    meaning: "다가가다, 접근법",
    examples: [
      { en: "A stranger approached me at the station.", kr: "역에서 낯선 사람이 나한테 다가왔어." },
      { en: "We need a new approach to this problem.", kr: "이 문제는 새로운 접근법이 필요해." }
    ]
  },
  {
    id: "L1-228",
    word: "different",
    meaning: "다른",
    examples: [
      { en: "You look different today. Did you get a haircut?", kr: "너 오늘 좀 달라 보인다. 머리 잘랐어?" },
      { en: "Can I try a different size?", kr: "다른 사이즈 입어 봐도 돼요?" }
    ]
  },
  {
    id: "L1-229",
    word: "offer",
    meaning: "제안하다, 제안",
    examples: [
      { en: "They offered me a job!", kr: "그 회사에서 나한테 일자리를 제안했어!" },
      { en: "Thanks for the offer, but I'm okay.", kr: "제안은 고맙지만 괜찮아요." }
    ]
  },
  {
    id: "L1-230",
    word: "local",
    meaning: "지역의, 현지의",
    examples: [
      { en: "Do you know any good local restaurants?", kr: "괜찮은 현지 맛집 아는 데 있어요?" },
      { en: "Is this a local beer?", kr: "이거 이 지역 맥주예요?" }
    ]
  },
  {
    id: "L1-231",
    word: "cover",
    meaning: "덮다, (비용을) 부담하다",
    examples: [
      { en: "Cover the food so it stays warm.", kr: "음식 식지 않게 덮어 둬." },
      { en: "Don't worry, the company will cover the cost.", kr: "걱정 마, 비용은 회사가 부담할 거야." }
    ]
  },
  {
    id: "L1-232",
    word: "hear",
    meaning: "듣다",
    examples: [
      { en: "Can you hear me okay now?", kr: "이제 제 목소리 잘 들려요?" },
      { en: "I'm so sorry to hear that.", kr: "그 얘기 들으니 정말 마음이 안 좋다." }
    ]
  },
  {
    id: "L1-233",
    word: "easy",
    meaning: "쉬운",
    examples: [
      { en: "The test was surprisingly easy.", kr: "시험이 의외로 쉬웠어." },
      { en: "Take it easy. There's no rush.", kr: "천천히 해. 급할 거 없어." }
    ]
  },
  {
    id: "L1-234",
    word: "special",
    meaning: "특별한",
    examples: [
      { en: "Are you doing anything special for your birthday?", kr: "생일에 뭐 특별한 거 해?" },
      { en: "Do you have any specials today?", kr: "오늘 특별 메뉴 있어요?" }
    ]
  },
  {
    id: "L1-235",
    word: "picture",
    meaning: "사진, 그림",
    examples: [
      { en: "Did you see the picture I sent you?", kr: "내가 보낸 사진 봤어?" },
      { en: "Excuse me, could you take a picture of us?", kr: "실례지만 저희 사진 좀 찍어 주시겠어요?" }
    ]
  },
  {
    id: "L1-236",
    word: "receive",
    meaning: "받다",
    examples: [
      { en: "Did you receive the package I sent?", kr: "내가 보낸 택배 받았어?" },
      { en: "I received a weird text from an unknown number.", kr: "모르는 번호로 이상한 문자를 받았어." }
    ]
  },
  {
    id: "L1-237",
    word: "five",
    meaning: "다섯",
    examples: [
      { en: "We're about five minutes away.", kr: "우리 5분 정도 거리에 있어." },
      { en: "The meeting starts in five minutes.", kr: "회의 5분 뒤에 시작해요." }
    ]
  },
  {
    id: "L1-238",
    word: "sense",
    meaning: "감각, 의미",
    examples: [
      { en: "That doesn't make any sense.", kr: "그건 전혀 말이 안 돼." },
      { en: "He has a great sense of humor.", kr: "그 사람 유머 감각이 정말 좋아." }
    ]
  },
  {
    id: "L1-239",
    word: "health",
    meaning: "건강",
    examples: [
      { en: "How's your health these days?", kr: "요즘 건강은 좀 어떠세요?" },
      { en: "I quit smoking for my health.", kr: "건강 때문에 담배 끊었어." }
    ]
  },
  {
    id: "L1-240",
    word: "lose",
    meaning: "잃어버리다, 지다, (살을) 빼다",
    examples: [
      { en: "I think I lost my wallet somewhere.", kr: "지갑을 어디서 잃어버린 것 같아." },
      { en: "We lost the game again last night.", kr: "우리 어젯밤에 또 졌어." }
    ]
  },
  {
    id: "L1-241",
    word: "wait",
    meaning: "기다리다",
    examples: [
      { en: "Please wait for me at the entrance.", kr: "입구에서 기다려 주세요." },
      { en: "I can't wait to see the movie.", kr: "그 영화 빨리 보고 싶어 죽겠어." }
    ]
  },
  {
    id: "L1-242",
    word: "expect",
    meaning: "예상하다, 기대하다",
    examples: [
      { en: "I'm expecting a call, so I'll keep my phone on.", kr: "전화 올 데가 있어서 폰 켜 둘게." },
      { en: "I didn't expect to see you here!", kr: "여기서 너를 볼 줄은 몰랐어!" }
    ]
  },
  {
    id: "L1-243",
    word: "position",
    meaning: "직위, 자리, 입장",
    examples: [
      { en: "What position are you applying for?", kr: "어떤 자리에 지원하시는 거예요?" },
      { en: "I'm not in a position to decide that.", kr: "제가 그걸 결정할 입장은 아니에요." }
    ]
  },
  {
    id: "L1-244",
    word: "decide",
    meaning: "결정하다",
    examples: [
      { en: "We need to decide quickly.", kr: "빨리 결정해야 해요." },
      { en: "Have you decided what to eat?", kr: "뭐 먹을지 정했어?" }
    ]
  },
  {
    id: "L1-245",
    word: "stay",
    meaning: "머무르다",
    examples: [
      { en: "How long will you stay in London?", kr: "런던에 얼마나 오래 머무를 거예요?" },
      { en: "Why don't you stay for dinner?", kr: "저녁 먹고 가지 그래?" }
    ]
  },
  {
    id: "L1-246",
    word: "contain",
    meaning: "포함하다, (안에) 들어 있다",
    examples: [
      { en: "Wow, this drink contains a ton of sugar.", kr: "와, 이 음료 설탕이 엄청 들어 있네." },
      { en: "Does this contain any nuts? I'm allergic.", kr: "이거 견과류 들어 있어요? 저 알레르기 있어서요." }
    ]
  },
  {
    id: "L1-247",
    word: "remember",
    meaning: "기억하다",
    examples: [
      { en: "I can't remember his name.", kr: "그 사람 이름이 기억이 안 나." },
      { en: "Remember to lock the door.", kr: "문 잠그는 거 잊지 마." }
    ]
  },
  {
    id: "L1-248",
    word: "finish",
    meaning: "끝내다",
    examples: [
      { en: "Did you finish your dinner?", kr: "저녁 다 먹었어?" },
      { en: "What time do you finish work today?", kr: "오늘 몇 시에 일 끝나?" }
    ]
  },
  {
    id: "L1-249",
    word: "spend",
    meaning: "(돈을) 쓰다, (시간을) 보내다",
    examples: [
      { en: "I want to spend more time with my kids.", kr: "애들이랑 시간을 더 보내고 싶어." },
      { en: "How much did you spend on this trip?", kr: "이번 여행에 돈 얼마 썼어?" }
    ]
  },
  {
    id: "L1-250",
    word: "morning",
    meaning: "아침",
    examples: [
      { en: "I'm not really a morning person.", kr: "나 아침형 인간은 아니야." },
      { en: "Good morning! How did you sleep?", kr: "좋은 아침! 잘 잤어?" }
    ]
  },
  {
    id: "L1-251",
    word: "education",
    meaning: "교육",
    examples: [
      { en: "I want my kids to get a good education.", kr: "우리 애들이 좋은 교육을 받았으면 좋겠어." },
      { en: "My parents spent a lot of money on my education.", kr: "부모님이 내 교육에 돈을 많이 쓰셨어." }
    ]
  },
  {
    id: "L1-252",
    word: "price",
    meaning: "가격",
    examples: [
      { en: "The price of gas went up again.", kr: "기름값이 또 올랐어." },
      { en: "What's the price of this jacket?", kr: "이 재킷 가격이 얼마예요?" }
    ]
  },
  {
    id: "L1-253",
    word: "short",
    meaning: "짧은, 부족한, (키가) 작은",
    examples: [
      { en: "I prefer short hair in the summer.", kr: "여름엔 짧은 머리가 좋아." },
      { en: "Sorry, I'm a little short on cash right now.", kr: "미안, 지금 현금이 좀 모자라." }
    ]
  },
  {
    id: "L1-254",
    word: "win",
    meaning: "이기다, (상을) 타다, 당첨되다",
    examples: [
      { en: "Who do you think will win tonight?", kr: "오늘 밤 누가 이길 것 같아?" },
      { en: "I won a free coffee from the app!", kr: "앱에서 공짜 커피 당첨됐어!" }
    ]
  },
  {
    id: "L1-255",
    word: "experience",
    meaning: "경험",
    examples: [
      { en: "Do you have any experience in teaching?", kr: "가르쳐 본 경험 있으세요?" },
      { en: "It was a wonderful experience.", kr: "정말 멋진 경험이었어." }
    ]
  },
  {
    id: "L1-256",
    word: "describe",
    meaning: "묘사하다, 설명하다",
    examples: [
      { en: "Can you describe what he looked like?", kr: "그 사람 어떻게 생겼는지 설명해 줄 수 있어요?" },
      { en: "How would you describe your new boss?", kr: "새 상사는 어떤 사람이야?" }
    ]
  },
  {
    id: "L1-257",
    word: "join",
    meaning: "참여하다, 합류하다",
    examples: [
      { en: "Would you like to join us for dinner?", kr: "저녁 같이 하실래요?" },
      { en: "Do you mind if I join you?", kr: "저도 같이 껴도 될까요?" }
    ]
  },
  {
    id: "L1-258",
    word: "difficult",
    meaning: "어려운, 까다로운",
    examples: [
      { en: "This is a really difficult decision for me.", kr: "이건 나한테 정말 어려운 결정이야." },
      { en: "Why are you being so difficult today?", kr: "오늘 왜 이렇게 까다롭게 굴어?" }
    ]
  },
  {
    id: "L1-259",
    word: "imagine",
    meaning: "상상하다, 생각하다",
    examples: [
      { en: "Can you imagine living without your phone?", kr: "폰 없이 사는 거 상상이 돼?" },
      { en: "I can't imagine how tired you must be.", kr: "네가 얼마나 피곤할지 상상도 안 된다." }
    ]
  },
  {
    id: "L1-260",
    word: "sound",
    meaning: "소리, ~처럼 들리다",
    examples: [
      { en: "What's that weird sound?", kr: "저 이상한 소리 뭐야?" },
      { en: "That sounds like a great idea!", kr: "그거 좋은 생각 같은데!" }
    ]
  },
  {
    id: "L1-261",
    word: "manage",
    meaning: "관리하다, 어떻게든 해내다",
    examples: [
      { en: "I'm trying to manage my time better.", kr: "시간 관리를 더 잘해 보려고 해." },
      { en: "Don't worry, I'll manage on my own.", kr: "걱정 마, 나 혼자 어떻게든 할게." }
    ]
  },
  {
    id: "L1-262",
    word: "clear",
    meaning: "분명한, 맑은",
    examples: [
      { en: "The sky is so clear today!", kr: "오늘 하늘 엄청 맑다!" },
      { en: "Is that clear, or should I explain again?", kr: "이해되셨어요, 아니면 다시 설명할까요?" }
    ]
  },
  {
    id: "L1-263",
    word: "create",
    meaning: "만들다, 창조하다",
    examples: [
      { en: "Did you create this logo yourself?", kr: "이 로고 직접 만든 거예요?" },
      { en: "We need to create a plan for next month.", kr: "다음 달 계획을 세워야 해요." }
    ]
  },
  {
    id: "L1-264",
    word: "base",
    meaning: "기반, ~에 근거를 두다",
    examples: [
      { en: "Is this movie based on a true story?", kr: "이 영화 실화를 바탕으로 한 거야?" },
      { en: "Our company is based in Seoul.", kr: "우리 회사는 서울에 기반을 두고 있어요." }
    ]
  },
  {
    id: "L1-265",
    word: "value",
    meaning: "가치, 소중히 여기다",
    examples: [
      { en: "What's the value of this old coin?", kr: "이 오래된 동전 가치가 얼마나 돼요?" },
      { en: "I really value your advice.", kr: "네 조언 정말 소중하게 생각해." }
    ]
  },
  {
    id: "L1-266",
    word: "moment",
    meaning: "순간",
    examples: [
      { en: "Wait a moment, I'll be right back.", kr: "잠깐만 기다려, 바로 돌아올게." },
      { en: "Sorry, he's not available at the moment.", kr: "죄송하지만 그분은 지금 자리에 안 계세요." }
    ]
  },
  {
    id: "L1-267",
    word: "voice",
    meaning: "목소리",
    examples: [
      { en: "Are you sick? Your voice sounds weird.", kr: "너 아파? 목소리가 이상해." },
      { en: "Can you lower your voice a little?", kr: "목소리 좀 낮춰 줄래?" }
    ]
  },
  {
    id: "L1-268",
    word: "entire",
    meaning: "전체의",
    examples: [
      { en: "I slept the entire day yesterday.", kr: "어제 하루 종일 잤어." },
      { en: "The entire office is talking about it.", kr: "사무실 전체가 그 얘기야." }
    ]
  },
  {
    id: "L1-269",
    word: "love",
    meaning: "사랑, 사랑하다, 아주 좋아하다",
    examples: [
      { en: "I love spending time with my family.", kr: "나는 가족이랑 시간 보내는 게 정말 좋아." },
      { en: "Love you! See you tonight.", kr: "사랑해! 이따 밤에 봐." }
    ]
  },
  {
    id: "L1-270",
    word: "alone",
    meaning: "혼자",
    examples: [
      { en: "Do you live alone?", kr: "혼자 사세요?" },
      { en: "Just leave me alone for a bit.", kr: "잠깐만 나 좀 혼자 내버려 둬." }
    ]
  },
  {
    id: "L1-271",
    word: "period",
    meaning: "기간",
    examples: [
      { en: "It was a really hard period in my life.", kr: "내 인생에서 정말 힘든 기간이었어." },
      { en: "There's a 30-day trial period, right?", kr: "30일 체험 기간이 있는 거 맞죠?" }
    ]
  },
  {
    id: "L1-272",
    word: "store",
    meaning: "가게, 저장하다, 보관하다",
    examples: [
      { en: "I'm going to the store. Need anything?", kr: "나 가게 가는데, 뭐 필요한 거 있어?" },
      { en: "Where do you store all your photos?", kr: "사진은 다 어디에 저장해?" }
    ]
  },
  {
    id: "L1-273",
    word: "simply",
    meaning: "단순히, 그저, 정말로",
    examples: [
      { en: "I simply don't have time today.", kr: "오늘은 그냥 시간이 없어." },
      { en: "The view was simply amazing.", kr: "경치가 정말 끝내줬어." }
    ]
  },
  {
    id: "L1-274",
    word: "various",
    meaning: "다양한",
    examples: [
      { en: "I've tried various diets, but nothing worked.", kr: "다양한 다이어트를 해 봤는데 효과가 하나도 없었어." },
      { en: "I've lived in various cities over the years.", kr: "그동안 여러 도시에서 살아 봤어." }
    ]
  },
  {
    id: "L1-275",
    word: "private",
    meaning: "사적인, 개인 소유의, 개인 전용의",
    examples: [
      { en: "This is a private conversation.", kr: "이건 사적인 대화예요." },
      { en: "Is this a private beach?", kr: "여기 개인 소유 해변이에요?" }
    ]
  },
  {
    id: "L1-276",
    word: "current",
    meaning: "현재의",
    examples: [
      { en: "What's your current address?", kr: "현재 주소가 어떻게 되세요?" },
      { en: "What's the current exchange rate?", kr: "현재 환율이 어떻게 돼요?" }
    ]
  },
  {
    id: "L1-277",
    word: "wrong",
    meaning: "틀린, 잘못된, 문제가 있는",
    examples: [
      { en: "Sorry, I think you have the wrong number.", kr: "죄송한데 전화 잘못 거신 것 같아요." },
      { en: "What's wrong? You look upset.", kr: "무슨 일 있어? 기분 안 좋아 보여." }
    ]
  },
  {
    id: "L1-278",
    word: "express",
    meaning: "표현하다, 급행의",
    examples: [
      { en: "I'm not good at expressing my feelings.", kr: "나는 감정 표현을 잘 못해." },
      { en: "Let's take the express train. It's much faster.", kr: "급행열차 타자. 훨씬 빨라." }
    ]
  },
  {
    id: "L1-279",
    word: "suppose",
    meaning: "생각하다, 가정하다, ~하기로 되어 있다",
    examples: [
      { en: "I suppose we should get going.", kr: "이제 슬슬 가야 할 것 같아." },
      { en: "You're supposed to be here at nine.", kr: "너 9시까지 여기 와야 하는 거잖아." }
    ]
  },
  {
    id: "L1-280",
    word: "necessary",
    meaning: "필요한, 꼭 해야 하는",
    examples: [
      { en: "Is it really necessary to dress up?", kr: "꼭 차려입어야 돼?" },
      { en: "Is it necessary to book in advance?", kr: "미리 예약하는 게 필요해요?" }
    ]
  },
  {
    id: "L1-281",
    word: "finally",
    meaning: "마침내",
    examples: [
      { en: "The rain finally stopped. Let's go out!", kr: "드디어 비가 그쳤어. 나가자!" },
      { en: "We finally finished the project.", kr: "우리 마침내 프로젝트 끝냈어." }
    ]
  },
  {
    id: "L1-282",
    word: "instead",
    meaning: "대신에",
    examples: [
      { en: "I'll have tea instead of coffee.", kr: "커피 대신 차를 마실게요." },
      { en: "Let's just stay home and order pizza instead.", kr: "그냥 집에서 피자 시켜 먹자." }
    ]
  },
  {
    id: "L1-283",
    word: "send",
    meaning: "보내다",
    examples: [
      { en: "Can you send me the address?", kr: "주소 좀 보내 줄래?" },
      { en: "I need to send this package to Canada.", kr: "이 소포를 캐나다로 보내야 해요." }
    ]
  },
  {
    id: "L1-284",
    word: "check",
    meaning: "확인하다, 점검하다, 계산서",
    examples: [
      { en: "Can you check if the door is locked?", kr: "문 잠겼는지 확인 좀 해 줄래?" },
      { en: "Could we get the check, please?", kr: "계산서 좀 주시겠어요?" }
    ]
  },
  {
    id: "L1-285",
    word: "figure",
    meaning: "알아내다, ~라고 생각하다, 수치",
    examples: [
      { en: "I can't figure out how this works.", kr: "이게 어떻게 돌아가는지 알아낼 수가 없어." },
      { en: "I figured you'd be hungry, so I made dinner.", kr: "배고플 것 같아서 저녁 만들었어." }
    ]
  },
  {
    id: "L1-286",
    word: "common",
    meaning: "흔한, 공통의",
    examples: [
      { en: "Kim is a really common last name in Korea.", kr: "김 씨는 한국에서 정말 흔한 성이에요." },
      { en: "Wow, we have a lot in common.", kr: "와, 우리 공통점이 많네." }
    ]
  },
  {
    id: "L1-287",
    word: "behind",
    meaning: "뒤에, 뒤처진",
    examples: [
      { en: "The restroom is behind the stairs.", kr: "화장실은 계단 뒤에 있어요." },
      { en: "I'm a little behind on my work this week.", kr: "이번 주에 일이 좀 뒤처졌어." }
    ]
  },
  {
    id: "L1-288",
    word: "direction",
    meaning: "방향, 길 안내",
    examples: [
      { en: "Which direction is the park?", kr: "공원은 어느 방향이에요?" },
      { en: "Could you give me directions to the station?", kr: "역까지 가는 길 좀 안내해 주시겠어요?" }
    ]
  },
  {
    id: "L1-289",
    word: "single",
    meaning: "독신의, 단 하나의, 1인용의",
    examples: [
      { en: "Are you single, or are you seeing someone?", kr: "너 싱글이야, 아니면 만나는 사람 있어?" },
      { en: "I didn't eat a single thing all day.", kr: "하루 종일 아무것도 안 먹었어." }
    ]
  },
  {
    id: "L1-290",
    word: "personal",
    meaning: "개인적인",
    examples: [
      { en: "Please keep your personal belongings with you.", kr: "개인 소지품은 잘 챙기세요." },
      { en: "I don't want to talk about my personal life.", kr: "개인적인 얘기는 하고 싶지 않아요." }
    ]
  },
  {
    id: "L1-291",
    word: "industry",
    meaning: "산업, 업계",
    examples: [
      { en: "What industry are you in?", kr: "어느 업계에서 일하세요?" },
      { en: "He works in the tech industry.", kr: "그 사람 IT 업계에서 일해." }
    ]
  },
  {
    id: "L1-292",
    word: "material",
    meaning: "소재, 재료, 자료",
    examples: [
      { en: "What material is this jacket made of?", kr: "이 재킷 소재가 뭐예요?" },
      { en: "Did you get the materials for the meeting?", kr: "회의 자료 받았어?" }
    ]
  },
  {
    id: "L1-293",
    word: "quite",
    meaning: "꽤, 상당히, 완전히",
    examples: [
      { en: "It's quite cold today, isn't it?", kr: "오늘 꽤 춥죠?" },
      { en: "I'm not quite ready yet. Give me five minutes.", kr: "아직 준비 다 안 됐어. 5분만 줘." }
    ]
  },
  {
    id: "L1-294",
    word: "future",
    meaning: "미래, 앞으로",
    examples: [
      { en: "What are your plans for the future?", kr: "앞으로 계획이 뭐야?" },
      { en: "Let's be more careful in the future.", kr: "앞으로는 좀 더 조심하자." }
    ]
  },
  {
    id: "L1-295",
    word: "evidence",
    meaning: "증거",
    examples: [
      { en: "Do you have any evidence for that?", kr: "그거 증거 있어?" },
      { en: "There's no evidence that it actually works.", kr: "그게 실제로 효과 있다는 증거는 없어." }
    ]
  },
  {
    id: "L1-296",
    word: "appear",
    meaning: "나타나다, ~처럼 보이다",
    examples: [
      { en: "He suddenly appeared at the door.", kr: "그가 갑자기 문 앞에 나타났어." },
      { en: "Sorry, your name doesn't appear on the list.", kr: "죄송한데 명단에 성함이 안 보이네요." }
    ]
  },
  {
    id: "L1-297",
    word: "design",
    meaning: "디자인, 설계하다",
    examples: [
      { en: "I love the modern design of this building.", kr: "이 건물 현대적인 디자인이 정말 좋아." },
      { en: "Who's going to design the website?", kr: "웹사이트 디자인은 누가 해요?" }
    ]
  },
  {
    id: "L1-507",
    word: "weekend",
    meaning: "주말",
    examples: [
      { en: "What are you doing this weekend?", kr: "이번 주말에 뭐 해?" },
      { en: "How was your weekend? Anything fun?", kr: "주말 어땠어? 뭐 재밌는 거 했어?" }
    ]
  },
  {
    id: "L1-299",
    word: "mention",
    meaning: "언급하다, 말하다",
    examples: [
      { en: "Did he mention what time the meeting is?", kr: "그 사람이 회의 몇 시인지 말했어?" },
      { en: "Don't mention it. I was happy to help.", kr: "별말씀을요. 도울 수 있어서 기뻤어요." }
    ]
  },
  {
    id: "L1-300",
    word: "truth",
    meaning: "진실",
    examples: [
      { en: "Just tell me the truth.", kr: "그냥 진실을 말해 줘." },
      { en: "To tell you the truth, I didn't like the movie.", kr: "사실대로 말하면 그 영화 별로였어." }
    ]
  }
];

const wordsLevel1_Part4 = [
  {
    id: "L1-301",
    word: "cause",
    meaning: "원인, 일으키다",
    examples: [
      { en: "What was the cause of the fire?", kr: "그 화재 원인이 뭐였어요?" },
      { en: "Do you know what's causing the delay?", kr: "뭐 때문에 지연되고 있는지 아세요?" }
    ]
  },
  {
    id: "L1-302",
    word: "force",
    meaning: "강요하다, 억지로 하다",
    examples: [
      { en: "I don't want to force you to come.", kr: "억지로 오라고 강요하고 싶진 않아." },
      { en: "My parents forced me to take piano lessons.", kr: "부모님이 억지로 피아노 레슨을 받게 하셨어." }
    ]
  },
  {
    id: "L1-303",
    word: "answer",
    meaning: "대답, 대답하다, (전화를) 받다",
    examples: [
      { en: "I don't know the answer to this question.", kr: "이 질문 답을 모르겠어요." },
      { en: "Can you answer the phone? I'm driving.", kr: "전화 좀 받아 줄래? 나 운전 중이야." }
    ]
  },
  {
    id: "L1-404",
    word: "help",
    meaning: "돕다, 도움",
    examples: [
      { en: "Could you help me carry these boxes to the car?", kr: "이 상자들 차까지 옮기는 것 좀 도와줄래요?" },
      { en: "Thanks for your help with the report yesterday.", kr: "어제 보고서 작업에 도움 줘서 고마워요." }
    ]
  },
  {
    id: "L1-305",
    word: "apply",
    meaning: "적용하다, 지원하다",
    examples: [
      { en: "This rule doesn't apply to everyone.", kr: "이 규칙이 모두한테 적용되는 건 아니에요." },
      { en: "I decided to apply for the new job.", kr: "그 새 일자리에 지원하기로 했어." }
    ]
  },
  {
    id: "L1-306",
    word: "term",
    meaning: "용어, 사이(관계), 기간",
    examples: [
      { en: "Can you explain that term in simple words?", kr: "그 용어 쉬운 말로 설명해 줄 수 있어요?" },
      { en: "We had a fight, but we're on good terms now.", kr: "우리 싸웠었는데 지금은 사이 좋아." }
    ]
  },
  {
    id: "L1-405",
    word: "team",
    meaning: "팀, 조",
    examples: [
      { en: "Our team meets every Monday morning.", kr: "우리 팀은 매주 월요일 아침에 회의해요." },
      { en: "Which team are you rooting for tonight?", kr: "오늘 밤 어느 팀 응원해?" }
    ]
  },
  {
    id: "L1-406",
    word: "company",
    meaning: "회사, 함께 있음",
    examples: [
      { en: "Which company do you work for?", kr: "어느 회사 다니세요?" },
      { en: "Thanks for the company. I had a great time.", kr: "같이 있어 줘서 고마워. 정말 즐거웠어." }
    ]
  },
  {
    id: "L1-309",
    word: "concern",
    meaning: "걱정, 우려",
    examples: [
      { en: "My main concern is the cost.", kr: "제일 걱정되는 건 비용이에요." },
      { en: "Thanks for your concern, but I'm fine.", kr: "걱정해 줘서 고마운데 나 괜찮아." }
    ]
  },
  {
    id: "L1-310",
    word: "suggest",
    meaning: "제안하다, 추천하다",
    examples: [
      { en: "I suggest we take a short break now.", kr: "지금 잠깐 쉬는 게 어떨까요." },
      { en: "Can you suggest a good restaurant nearby?", kr: "근처에 괜찮은 식당 추천해 줄래요?" }
    ]
  },
  {
    id: "L1-407",
    word: "business",
    meaning: "사업, 업무, 상관할 일",
    examples: [
      { en: "Are you here for business or pleasure?", kr: "출장으로 오셨어요, 여행으로 오셨어요?" },
      { en: "Sorry, but that's none of your business.", kr: "미안하지만 그건 네가 상관할 일 아니야." }
    ]
  },
  {
    id: "L1-312",
    word: "whether",
    meaning: "~인지 아닌지",
    examples: [
      { en: "I don't know whether he'll come or not.", kr: "그가 올지 안 올지 모르겠어." },
      { en: "Let me know whether you can make it.", kr: "올 수 있는지 없는지 알려 줘." }
    ]
  },
  {
    id: "L1-313",
    word: "reach",
    meaning: "도달하다, 닿다, 연락하다",
    examples: [
      { en: "What's the best way to reach you?", kr: "어떻게 연락드리는 게 제일 좋을까요?" },
      { en: "Can you reach the book on the top shelf?", kr: "맨 위 선반에 있는 책에 손 닿아?" }
    ]
  },
  {
    id: "L1-408",
    word: "care",
    meaning: "돌보다, 신경 쓰다, 상관하다",
    examples: [
      { en: "Take care of yourself and get some rest.", kr: "몸 잘 돌보고 좀 쉬어." },
      { en: "I don't care where we eat, as long as it's quick.", kr: "빨리만 먹을 수 있으면 어디서 먹든 상관없어." }
    ]
  },
  {
    id: "L1-315",
    word: "community",
    meaning: "공동체, 커뮤니티",
    examples: [
      { en: "It's a really friendly community here.", kr: "여기 동네 사람들은 다들 정말 친절해요." },
      { en: "I joined an online community for runners.", kr: "러너들 온라인 커뮤니티에 가입했어." }
    ]
  },
  {
    id: "L1-508",
    word: "kitchen",
    meaning: "부엌, 주방",
    examples: [
      { en: "Can you grab some cups from the kitchen?", kr: "부엌에서 컵 좀 갖다줄래?" },
      { en: "Sorry, the kitchen closes at ten.", kr: "죄송하지만 주방은 10시에 마감해요." }
    ]
  },
  {
    id: "L1-317",
    word: "effect",
    meaning: "효과, 영향",
    examples: [
      { en: "Coffee doesn't seem to have any effect on me today.", kr: "오늘은 커피가 나한테 전혀 효과가 없는 것 같아." },
      { en: "Does this medicine have any side effects?", kr: "이 약 부작용 있어요?" }
    ]
  },
  {
    id: "L1-409",
    word: "person",
    meaning: "사람, 개인",
    examples: [
      { en: "She's the best person to ask about that.", kr: "그건 그 사람한테 물어보는 게 제일 좋아." },
      { en: "Tickets cost twenty dollars per person.", kr: "티켓은 1인당 20달러예요." }
    ]
  },
  {
    id: "L1-319",
    word: "nature",
    meaning: "자연, 본성",
    examples: [
      { en: "I love spending time in nature.", kr: "나는 자연 속에서 시간 보내는 게 좋아." },
      { en: "It's in his nature to be kind.", kr: "친절한 건 그 사람 본성이야." }
    ]
  },
  {
    id: "L1-320",
    word: "data",
    meaning: "데이터, 자료",
    examples: [
      { en: "We need more data before we decide.", kr: "결정하기 전에 데이터가 더 필요해요." },
      { en: "I ran out of data on my phone.", kr: "휴대폰 데이터를 다 썼어." }
    ]
  },
  {
    id: "L1-321",
    word: "support",
    meaning: "지지하다, 지원, 응원",
    examples: [
      { en: "I totally support your decision.", kr: "네 결정 전적으로 지지해." },
      { en: "Thanks for all your support.", kr: "그동안 응원해 줘서 고마워." }
    ]
  },
  {
    id: "L1-410",
    word: "today",
    meaning: "오늘, 요즘",
    examples: [
      { en: "I have three meetings today, so I'm pretty busy.", kr: "오늘 회의가 세 개라서 좀 바빠요." },
      { en: "How are you feeling today?", kr: "오늘 몸은 좀 어때?" }
    ]
  },
  {
    id: "L1-411",
    word: "enough",
    meaning: "충분한, 충분히",
    examples: [
      { en: "Do we have enough chairs for everyone?", kr: "모두 앉을 의자가 충분히 있나요?" },
      { en: "I didn't get enough sleep last night.", kr: "어젯밤에 잠을 충분히 못 잤어." }
    ]
  },
  {
    id: "L1-412",
    word: "hard",
    meaning: "어려운, 열심히, 딱딱한",
    examples: [
      { en: "Is it hard to learn Korean?", kr: "한국어 배우기 어려워?" },
      { en: "You've been working so hard lately.", kr: "너 요즘 진짜 열심히 일하더라." }
    ]
  },
  {
    id: "L1-325",
    word: "act",
    meaning: "행동하다, 굴다",
    examples: [
      { en: "Stop acting like a child.", kr: "애처럼 굴지 마." },
      { en: "He always acts like he knows everything.", kr: "그는 항상 다 아는 것처럼 행동해." }
    ]
  },
  {
    id: "L1-326",
    word: "add",
    meaning: "추가하다, 더하다, 넣다",
    examples: [
      { en: "Do you want me to add some sugar?", kr: "설탕 좀 넣어 줄까?" },
      { en: "Let me add your number to my phone.", kr: "네 번호 내 폰에 추가할게." }
    ]
  },
  {
    id: "L1-413",
    word: "mean",
    meaning: "의미하다, ~할 생각이다, 못된",
    examples: [
      { en: "What does this word mean in English?", kr: "이 단어는 영어로 무슨 뜻이에요?" },
      { en: "Sorry, I didn't mean to interrupt you.", kr: "죄송해요, 말씀을 끊으려던 건 아니었어요." }
    ]
  },
  {
    id: "L1-328",
    word: "learn",
    meaning: "배우다",
    examples: [
      { en: "I want to learn how to cook Italian food.", kr: "나 이탈리아 요리 배우고 싶어." },
      { en: "Where did you learn to speak English so well?", kr: "영어 어디서 그렇게 잘 배웠어요?" }
    ]
  },
  {
    id: "L1-329",
    word: "grow",
    meaning: "자라다, 키우다",
    examples: [
      { en: "I grew up in a small town.", kr: "나는 작은 동네에서 자랐어." },
      { en: "Wow, your kids have grown so much!", kr: "와, 애들 진짜 많이 컸네!" }
    ]
  },
  {
    id: "L1-414",
    word: "job",
    meaning: "일, 직업, 일자리",
    examples: [
      { en: "She just got a new job at a bank.", kr: "그녀는 얼마 전에 은행에 새 일자리를 구했어요." },
      { en: "Good job! You did great.", kr: "잘했어! 정말 훌륭했어." }
    ]
  },
  {
    id: "L1-415",
    word: "actually",
    meaning: "사실은, 실제로",
    examples: [
      { en: "I thought it would be hard, but it was actually easy.", kr: "어려울 줄 알았는데 사실은 쉬웠어." },
      { en: "Actually, I changed my mind.", kr: "사실은 나 마음 바뀌었어." }
    ]
  },
  {
    id: "L1-416",
    word: "country",
    meaning: "나라, 시골",
    examples: [
      { en: "How many countries have you visited so far?", kr: "지금까지 몇 나라를 가 봤어요?" },
      { en: "They moved to the country for a quieter life.", kr: "그 사람들 좀 더 조용히 살려고 시골로 이사 갔어." }
    ]
  },
  {
    id: "L1-333",
    word: "lead",
    meaning: "이끌다, 진행하다, (길이) 이어지다",
    examples: [
      { en: "Who's going to lead the meeting today?", kr: "오늘 회의 누가 진행해요?" },
      { en: "Does this road lead to the beach?", kr: "이 길로 가면 해변 나와요?" }
    ]
  },
  {
    id: "L1-417",
    word: "thank",
    meaning: "감사하다, 고마워하다",
    examples: [
      { en: "I just wanted to thank you for yesterday.", kr: "어제 일 고맙다고 말하고 싶었어." },
      { en: "Don't forget to thank Grandma for the gift.", kr: "할머니께 선물 감사하다고 인사드리는 거 잊지 마." }
    ]
  },
  {
    id: "L1-418",
    word: "situation",
    meaning: "상황, 처지",
    examples: [
      { en: "What would you do in my situation?", kr: "너라면 내 상황에서 어떻게 할 것 같아?" },
      { en: "Money is tight, so I'm in a tough situation right now.", kr: "돈이 빠듯해서 지금 힘든 상황이에요." }
    ]
  },
  {
    id: "L1-419",
    word: "together",
    meaning: "함께, 같이",
    examples: [
      { en: "Let's have lunch together after the meeting.", kr: "회의 끝나고 같이 점심 먹어요." },
      { en: "If we work together, we can finish by Friday.", kr: "우리가 함께 일하면 금요일까지 끝낼 수 있어요." }
    ]
  },
  {
    id: "L1-337",
    word: "free",
    meaning: "무료의, 한가한, 자유로운",
    examples: [
      { en: "The concert tickets are free.", kr: "그 콘서트 티켓은 무료예요." },
      { en: "Are you free this Saturday?", kr: "이번 토요일에 시간 돼?" }
    ]
  },
  {
    id: "L1-420",
    word: "whole",
    meaning: "전체의, 온, 모든",
    examples: [
      { en: "I spent the whole weekend cleaning the apartment.", kr: "주말 내내 아파트 청소를 했어요." },
      { en: "The whole team stayed late to meet the deadline.", kr: "팀 전체가 마감을 맞추려고 늦게까지 남았어요." }
    ]
  },
  {
    id: "L1-339",
    word: "listen",
    meaning: "듣다",
    examples: [
      { en: "Are you even listening to me?", kr: "너 내 말 듣고 있긴 해?" },
      { en: "I listen to podcasts on my way to work.", kr: "나 출근길에 팟캐스트 들어." }
    ]
  },
  {
    id: "L1-340",
    word: "sell",
    meaning: "팔다",
    examples: [
      { en: "Do you sell phone chargers here?", kr: "여기 휴대폰 충전기 팔아요?" },
      { en: "I'm trying to sell my old car.", kr: "내 옛날 차 팔려고 하는 중이야." }
    ]
  },
  {
    id: "L1-341",
    word: "believe",
    meaning: "믿다",
    examples: [
      { en: "I can't believe it's already Friday!", kr: "벌써 금요일이라니 믿기지가 않아!" },
      { en: "Do you believe his story?", kr: "넌 걔 얘기 믿어?" }
    ]
  },
  {
    id: "L1-342",
    word: "close",
    meaning: "닫다, 가까운, 친한",
    examples: [
      { en: "What time do you close tonight?", kr: "오늘 밤 몇 시에 문 닫아요?" },
      { en: "We're really close. We talk every day.", kr: "우리 정말 친해. 매일 얘기해." }
    ]
  },
  {
    id: "L1-343",
    word: "happen",
    meaning: "일어나다, 발생하다",
    examples: [
      { en: "What happened to you last night?", kr: "어젯밤에 무슨 일 있었어?" },
      { en: "Don't worry, these things happen.", kr: "걱정 마, 그럴 수도 있지." }
    ]
  },
  {
    id: "L1-421",
    word: "maybe",
    meaning: "아마, 어쩌면",
    examples: [
      { en: "Maybe we should take a taxi instead of walking.", kr: "어쩌면 걷지 말고 택시를 타는 게 나을지도 몰라." },
      { en: "I can't come today, but maybe next weekend.", kr: "오늘은 못 가지만 어쩌면 다음 주말엔 갈 수 있을 거야." }
    ]
  },
  {
    id: "L1-345",
    word: "stop",
    meaning: "멈추다, 그만하다, 세우다",
    examples: [
      { en: "Can you stop at the next corner, please?", kr: "다음 모퉁이에서 세워 주시겠어요?" },
      { en: "Stop worrying. Everything will be fine.", kr: "걱정 그만해. 다 잘될 거야." }
    ]
  },
  {
    id: "L1-422",
    word: "hope",
    meaning: "바라다, 희망",
    examples: [
      { en: "I hope you feel better soon.", kr: "곧 몸이 나아지길 바라요." },
      { en: "Don't lose hope; you'll find a job soon.", kr: "희망을 잃지 마, 곧 일자리를 찾을 거야." }
    ]
  },
  {
    id: "L1-423",
    word: "information",
    meaning: "정보",
    examples: [
      { en: "Where can I get more information about the tour?", kr: "투어에 대한 정보는 어디서 더 얻을 수 있어요?" },
      { en: "Thanks for the information. That really helps.", kr: "정보 고마워요. 정말 도움 돼요." }
    ]
  },
  {
    id: "L1-424",
    word: "idea",
    meaning: "생각, 아이디어, 짐작",
    examples: [
      { en: "That's a great idea! Let's do it.", kr: "좋은 생각이다! 그렇게 하자." },
      { en: "I have no idea where I left my phone.", kr: "휴대폰을 어디 뒀는지 전혀 모르겠어." }
    ]
  },
  {
    id: "L1-349",
    word: "live",
    meaning: "살다",
    examples: [
      { en: "Where do you live?", kr: "어디 살아요?" },
      { en: "My grandparents live in a small village.", kr: "우리 조부모님은 작은 시골 마을에 사셔." }
    ]
  },
  {
    id: "L1-425",
    word: "office",
    meaning: "사무실, (병원) 진료실",
    examples: [
      { en: "I'll be in the office until six today.", kr: "오늘은 6시까지 사무실에 있을 거예요." },
      { en: "The doctor's office called to confirm my appointment.", kr: "병원에서 예약 확인 전화가 왔어요." }
    ]
  },
  {
    id: "L1-426",
    word: "true",
    meaning: "사실인, 진짜의, 진정한",
    examples: [
      { en: "Is it true that the store is closing next month?", kr: "그 가게가 다음 달에 문 닫는다는 게 사실이에요?" },
      { en: "That's so true. I totally agree.", kr: "진짜 그래. 완전 동의해." }
    ]
  },
  {
    id: "L1-427",
    word: "matter",
    meaning: "중요하다, 문제, 일",
    examples: [
      { en: "It doesn't matter if you're a little late.", kr: "조금 늦어도 상관없어요." },
      { en: "What's the matter? You look worried.", kr: "무슨 일이야? 걱정 있어 보여." }
    ]
  },
  {
    id: "L1-353",
    word: "age",
    meaning: "나이",
    examples: [
      { en: "What's the legal drinking age here?", kr: "여기는 법적으로 술 마실 수 있는 나이가 몇 살이에요?" },
      { en: "We're about the same age.", kr: "우리 나이가 비슷하네요." }
    ]
  },
  {
    id: "L1-354",
    word: "center",
    meaning: "중심, 중앙",
    examples: [
      { en: "Put the vase in the center of the table.", kr: "꽃병을 테이블 가운데에 놔 줘." },
      { en: "How do I get to the city center?", kr: "시내 중심가에 어떻게 가요?" }
    ]
  },
  {
    id: "L1-355",
    word: "couple",
    meaning: "커플, 두어 개, 몇몇",
    examples: [
      { en: "They make a really cute couple.", kr: "둘이 진짜 잘 어울리는 커플이야." },
      { en: "I'll be there in a couple of minutes.", kr: "나 몇 분 안에 도착해." }
    ]
  },
  {
    id: "L1-356",
    word: "site",
    meaning: "사이트, 현장, 장소",
    examples: [
      { en: "This site is really slow. Is it just me?", kr: "이 사이트 진짜 느리다. 나만 그래?" },
      { en: "I visited the construction site this morning.", kr: "오늘 아침에 공사 현장에 다녀왔어요." }
    ]
  },
  {
    id: "L1-357",
    word: "require",
    meaning: "필요로 하다, 요구하다",
    examples: [
      { en: "This job requires strong communication skills.", kr: "이 일은 뛰어난 소통 능력이 필요해요." },
      { en: "Is a reservation required?", kr: "예약이 필요한가요?" }
    ]
  },
  {
    id: "L1-358",
    word: "space",
    meaning: "공간, 자리",
    examples: [
      { en: "I need more space for my books.", kr: "책 둘 공간이 더 필요해." },
      { en: "Do you have space for one more in the car?", kr: "차에 한 명 더 탈 자리 있어?" }
    ]
  },
  {
    id: "L1-359",
    word: "staff",
    meaning: "직원",
    examples: [
      { en: "The hotel staff were really friendly.", kr: "호텔 직원들이 정말 친절했어요." },
      { en: "Is this area for staff only?", kr: "여기 직원 전용 구역이에요?" }
    ]
  },
  {
    id: "L1-428",
    word: "pretty",
    meaning: "꽤, 예쁜",
    examples: [
      { en: "The test was pretty easy, actually.", kr: "시험이 사실 꽤 쉬웠어." },
      { en: "What a pretty garden you have!", kr: "정원이 정말 예쁘네요!" }
    ]
  },
  {
    id: "L1-361",
    word: "rule",
    meaning: "규칙",
    examples: [
      { en: "What are the rules of this game?", kr: "이 게임 규칙이 뭐야?" },
      { en: "Sorry, those are the rules.", kr: "죄송하지만 규칙이 그래요." }
    ]
  },
  {
    id: "L1-362",
    word: "among",
    meaning: "~ 사이에서, ~ 중에서",
    examples: [
      { en: "She's the best singer among her friends.", kr: "그녀는 친구들 중에서 노래를 제일 잘해." },
      { en: "This app is really popular among teenagers.", kr: "이 앱은 십 대들 사이에서 인기가 많아." }
    ]
  },
  {
    id: "L1-363",
    word: "start",
    meaning: "시작하다",
    examples: [
      { en: "The game will start in ten minutes.", kr: "경기 10분 뒤에 시작해요." },
      { en: "Where did you start your career?", kr: "어디서 처음 일을 시작하셨어요?" }
    ]
  },
  {
    id: "L1-364",
    word: "class",
    meaning: "수업, 반, 등급",
    examples: [
      { en: "I have a yoga class at seven.", kr: "나 7시에 요가 수업 있어." },
      { en: "We're flying business class this time!", kr: "우리 이번엔 비즈니스석 타고 가!" }
    ]
  },
  {
    id: "L1-429",
    word: "probably",
    meaning: "아마, 아마도",
    examples: [
      { en: "It will probably rain this afternoon, so bring an umbrella.", kr: "오후에 아마 비가 올 테니 우산 챙겨." },
      { en: "He's probably stuck in traffic again.", kr: "그 사람 아마 또 차가 막혀서 못 오나 봐." }
    ]
  },
  {
    id: "L1-430",
    word: "question",
    meaning: "질문, 문제, 의문",
    examples: [
      { en: "Does anyone have any questions before we finish?", kr: "마치기 전에 질문 있는 분 계신가요?" },
      { en: "Can I ask you a quick question?", kr: "잠깐 질문 하나 해도 돼요?" }
    ]
  },
  {
    id: "L1-367",
    word: "air",
    meaning: "공기",
    examples: [
      { en: "I need to go outside for some fresh air.", kr: "밖에 나가서 신선한 공기 좀 마셔야겠어." },
      { en: "The air is so dry in here.", kr: "여기 공기 너무 건조하다." }
    ]
  },
  {
    id: "L1-431",
    word: "late",
    meaning: "늦은, 늦게",
    examples: [
      { en: "Sorry I'm late; the bus didn't come.", kr: "늦어서 미안해, 버스가 안 왔어." },
      { en: "I stayed up late watching a movie last night.", kr: "어젯밤에 영화 보느라 늦게까지 안 잤어." }
    ]
  },
  {
    id: "L1-432",
    word: "leave",
    meaning: "떠나다, 출발하다, 남기다",
    examples: [
      { en: "What time does your flight leave tomorrow?", kr: "내일 비행기 몇 시에 출발해요?" },
      { en: "Can I leave a message for Ms. Park?", kr: "박 선생님께 메시지를 남겨도 될까요?" }
    ]
  },
  {
    id: "L1-433",
    word: "deal",
    meaning: "거래, 다루다, 처리하다",
    examples: [
      { en: "We got a great deal on our new sofa.", kr: "새 소파를 아주 좋은 조건으로 샀어요." },
      { en: "I'll deal with the customer complaint this afternoon.", kr: "고객 불만은 오늘 오후에 제가 처리할게요." }
    ]
  },
  {
    id: "L1-371",
    word: "head",
    meaning: "머리, 책임자",
    examples: [
      { en: "Ouch! I hit my head on the door.", kr: "아야! 문에 머리 부딪쳤어." },
      { en: "She's the head of the marketing department.", kr: "그분이 마케팅 부서 책임자예요." }
    ]
  },
  {
    id: "L1-434",
    word: "rather",
    meaning: "차라리, 오히려, 꽤",
    examples: [
      { en: "I'd rather stay home tonight than go out.", kr: "오늘 밤엔 나가느니 차라리 집에 있고 싶어." },
      { en: "Would you rather go out or stay in tonight?", kr: "오늘 밤에 나갈래, 아니면 집에 있을래?" }
    ]
  },
  {
    id: "L1-373",
    word: "travel",
    meaning: "여행하다, 이동하다, 여행",
    examples: [
      { en: "I'd love to travel around Europe someday.", kr: "언젠가 유럽 여행 다녀 보고 싶어." },
      { en: "Do you travel a lot for work?", kr: "일 때문에 출장 많이 다니세요?" }
    ]
  },
  {
    id: "L1-435",
    word: "plan",
    meaning: "계획, 계획하다",
    examples: [
      { en: "Do you have any plans for the weekend?", kr: "주말에 무슨 계획 있어요?" },
      { en: "We're planning to open a second store next year.", kr: "내년에 두 번째 매장을 열 계획이에요." }
    ]
  },
  {
    id: "L1-375",
    word: "return",
    meaning: "돌아오다, 반납하다, 반품하다",
    examples: [
      { en: "When do you return from your trip?", kr: "여행에서 언제 돌아와?" },
      { en: "You can return the product within 30 days.", kr: "제품은 30일 이내에 반품하실 수 있어요." }
    ]
  },
  {
    id: "L1-376",
    word: "direct",
    meaning: "직접적인, 직행의, 감독하다",
    examples: [
      { en: "Is there a direct flight to Seoul?", kr: "서울 가는 직항편 있어요?" },
      { en: "He's going to direct the new movie.", kr: "그가 새 영화를 감독할 거래." }
    ]
  },
  {
    id: "L1-377",
    word: "early",
    meaning: "일찍, 이른",
    examples: [
      { en: "I need to get up early tomorrow.", kr: "나 내일 일찍 일어나야 돼." },
      { en: "It's still too early to tell.", kr: "아직 판단하기엔 너무 일러." }
    ]
  },
  {
    id: "L1-436",
    word: "available",
    meaning: "이용 가능한, 구할 수 있는, 시간이 있는",
    examples: [
      { en: "Are you available for a quick call this afternoon?", kr: "오늘 오후에 잠깐 통화할 시간 있으세요?" },
      { en: "Sorry, that size isn't available right now.", kr: "죄송하지만 그 사이즈는 지금 구하실 수 없어요." }
    ]
  },
  {
    id: "L1-437",
    word: "final",
    meaning: "마지막의, 최종의",
    examples: [
      { en: "Is that your final answer?", kr: "그게 최종 답이야?" },
      { en: "The boss will make the final decision tomorrow.", kr: "최종 결정은 내일 사장님이 내릴 거예요." }
    ]
  },
  {
    id: "L1-380",
    word: "buy",
    meaning: "사다",
    examples: [
      { en: "Let me buy you a coffee.", kr: "내가 커피 한 잔 살게." },
      { en: "Where did you buy that jacket? I love it.", kr: "그 재킷 어디서 샀어? 너무 예쁘다." }
    ]
  },
  {
    id: "L1-381",
    word: "sit",
    meaning: "앉다",
    examples: [
      { en: "Please sit here and wait.", kr: "여기 앉아서 기다려 주세요." },
      { en: "Can I sit next to you?", kr: "옆에 앉아도 돼요?" }
    ]
  },
  {
    id: "L1-438",
    word: "chance",
    meaning: "기회, 가능성",
    examples: [
      { en: "If you get a chance, give me a call.", kr: "시간 나면 전화 줘." },
      { en: "There's a good chance it will snow tomorrow.", kr: "내일 눈이 올 가능성이 높아요." }
    ]
  },
  {
    id: "L1-439",
    word: "cost",
    meaning: "비용, (비용이) 들다",
    examples: [
      { en: "How much does it cost to ship this package?", kr: "이 소포 보내는 데 비용이 얼마나 들어요?" },
      { en: "Fixing my car cost me a fortune.", kr: "차 고치는 데 돈이 엄청 들었어." }
    ]
  },
  {
    id: "L1-384",
    word: "fall",
    meaning: "넘어지다, 떨어지다, 가을",
    examples: [
      { en: "I fell down the stairs this morning.", kr: "오늘 아침에 계단에서 굴러떨어졌어." },
      { en: "Fall is my favorite season.", kr: "가을은 내가 제일 좋아하는 계절이야." }
    ]
  },
  {
    id: "L1-385",
    word: "die",
    meaning: "죽다, (배터리가) 나가다",
    examples: [
      { en: "My plants died while I was on vacation.", kr: "휴가 간 사이에 화분이 다 죽었어." },
      { en: "My phone died, so I couldn't call you.", kr: "폰 배터리가 나가서 전화를 못 했어." }
    ]
  },
  {
    id: "L1-440",
    word: "project",
    meaning: "프로젝트, 과제, 계획",
    examples: [
      { en: "How's the new project going?", kr: "새 프로젝트는 잘 돼 가?" },
      { en: "My son is working on a science project for school.", kr: "아들이 학교 과학 과제를 하고 있어요." }
    ]
  },
  {
    id: "L1-387",
    word: "national",
    meaning: "국가의, 국립의",
    examples: [
      { en: "We visited the national museum in Seoul.", kr: "서울에 있는 국립 박물관에 가 봤어요." },
      { en: "Is today a national holiday?", kr: "오늘 국가 공휴일이에요?" }
    ]
  },
  {
    id: "L1-388",
    word: "strong",
    meaning: "강한, 진한",
    examples: [
      { en: "This coffee is too strong for me.", kr: "이 커피 나한텐 너무 진해." },
      { en: "The wind was really strong last night.", kr: "어젯밤에 바람이 엄청 강했어." }
    ]
  },
  {
    id: "L1-441",
    word: "account",
    meaning: "계좌, 계정",
    examples: [
      { en: "I'd like to open a savings account, please.", kr: "저축 계좌를 하나 개설하고 싶어요." },
      { en: "I forgot the password for my email account.", kr: "이메일 계정 비밀번호를 잊어버렸어." }
    ]
  },
  {
    id: "L1-442",
    word: "especially",
    meaning: "특히, 특별히",
    examples: [
      { en: "I love summer, especially the long evenings.", kr: "저는 여름이 좋아요, 특히 해가 긴 저녁이요." },
      { en: "Drive carefully, especially when the roads are wet.", kr: "운전 조심해, 특히 길이 젖어 있을 땐." }
    ]
  },
  {
    id: "L1-391",
    word: "loss",
    meaning: "상실, 손실, 감량",
    examples: [
      { en: "I'm so sorry for your loss.", kr: "소중한 분을 잃으셔서 얼마나 마음 아프세요." },
      { en: "Weight loss isn't easy after forty.", kr: "마흔 넘으면 체중 감량이 쉽지 않아." }
    ]
  },
  {
    id: "L1-443",
    word: "include",
    meaning: "포함하다",
    examples: [
      { en: "Does the price include tax?", kr: "가격에 세금 포함돼 있어요?" },
      { en: "Is the tip included in the bill?", kr: "계산서에 팁도 포함된 거예요?" }
    ]
  },
  {
    id: "L1-393",
    word: "mother",
    meaning: "어머니, 엄마",
    examples: [
      { en: "My mother calls me every Sunday.", kr: "우리 엄마는 일요일마다 나한테 전화하셔." },
      { en: "She became a mother last year.", kr: "그녀는 작년에 엄마가 됐어." }
    ]
  },
  {
    id: "L1-444",
    word: "perfect",
    meaning: "완벽한, 딱 맞는",
    examples: [
      { en: "This weather is perfect for a picnic.", kr: "피크닉하기에 딱 맞는 날씨네요." },
      { en: "Nobody is perfect, so don't be too hard on yourself.", kr: "완벽한 사람은 없으니까 자신을 너무 몰아붙이지 마." }
    ]
  },
  {
    id: "L1-395",
    word: "share",
    meaning: "공유하다, 나누다",
    examples: [
      { en: "Can you share your notes with me?", kr: "네 노트 나랑 공유해 줄 수 있어?" },
      { en: "Do you want to share a pizza?", kr: "피자 하나 나눠 먹을래?" }
    ]
  },
  {
    id: "L1-445",
    word: "record",
    meaning: "기록, 기록하다, 녹음하다",
    examples: [
      { en: "Is it okay if I record our call?", kr: "우리 통화 녹음해도 괜찮을까요?" },
      { en: "Keep a record of what you spend this month.", kr: "이번 달에 쓴 돈 기록해 둬." }
    ]
  },
  {
    id: "L1-397",
    word: "student",
    meaning: "학생",
    examples: [
      { en: "She's a university student.", kr: "그녀는 대학생이에요." },
      { en: "Is there a student discount?", kr: "학생 할인 있어요?" }
    ]
  },
  {
    id: "L1-446",
    word: "test",
    meaning: "시험, 검사, 테스트하다",
    examples: [
      { en: "I have a driving test next Tuesday.", kr: "다음 주 화요일에 운전면허 시험이 있어요." },
      { en: "We need to test the app before launching it.", kr: "출시하기 전에 앱을 테스트해야 해요." }
    ]
  },
  {
    id: "L1-447",
    word: "event",
    meaning: "행사, 이벤트, 사건",
    examples: [
      { en: "Are you going to the company event on Friday?", kr: "금요일 회사 행사 갈 거야?" },
      { en: "There's a fun event at the mall this weekend.", kr: "이번 주말에 쇼핑몰에서 재밌는 행사 해." }
    ]
  },
  {
    id: "L1-448",
    word: "training",
    meaning: "훈련, 교육, 연수",
    examples: [
      { en: "I have training all day tomorrow.", kr: "나 내일 하루 종일 교육 있어." },
      { en: "She's in training for her first marathon.", kr: "그녀는 첫 마라톤을 위해 훈련 중이에요." }
    ]
  }
];

const wordsLevel2_Part1 = [
  {
    id: "L2-001",
    word: "achieve",
    meaning: "이루다, 달성하다",
    examples: [
      { en: "She worked really hard to achieve her goal.", kr: "그녀는 목표를 이루려고 정말 열심히 노력했어요." },
      { en: "What do you want to achieve this year?", kr: "올해 뭘 이루고 싶어요?" }
    ]
  },
  {
    id: "L2-401",
    word: "consider",
    meaning: "고려하다, 여기다",
    examples: [
      { en: "Have you ever considered working abroad?", kr: "해외에서 일하는 걸 고려해 본 적 있어요?" },
      { en: "She is considered one of the best designers here.", kr: "그녀는 이곳 최고의 디자이너 중 한 명으로 여겨져요." }
    ]
  },
  {
    id: "L2-003",
    word: "concept",
    meaning: "개념, 콘셉트",
    examples: [
      { en: "I like the concept, but the design needs work.", kr: "콘셉트는 좋은데 디자인은 좀 손봐야겠어요." },
      { en: "Time travel is such a cool concept, right?", kr: "시간 여행은 정말 멋진 개념이야, 그렇지?" }
    ]
  },
  {
    id: "L2-004",
    word: "consist",
    meaning: "(~로) 구성되다, 이루어지다",
    examples: [
      { en: "Our team consists of five people.", kr: "우리 팀은 다섯 명으로 이루어져 있어요." },
      { en: "The set menu consists of soup, salad, and pasta.", kr: "세트 메뉴는 수프, 샐러드, 파스타로 구성돼 있어요." }
    ]
  },
  {
    id: "L2-005",
    word: "consequence",
    meaning: "결과, 영향",
    examples: [
      { en: "If you skip class, there will be consequences.", kr: "수업 빼먹으면 그에 따른 결과가 있을 거야." },
      { en: "Did you think about the consequences before quitting?", kr: "그만두기 전에 그 결과를 생각해 봤어?" }
    ]
  },
  {
    id: "L2-006",
    word: "conduct",
    meaning: "실시하다, 수행하다, 행동",
    examples: [
      { en: "We'll conduct a short survey after the event.", kr: "행사 끝나고 간단한 설문 조사를 실시할 거예요." },
      { en: "His conduct at the meeting was really unprofessional.", kr: "회의에서 그 사람 행동은 정말 프로답지 못했어요." }
    ]
  },
  {
    id: "L2-007",
    word: "define",
    meaning: "정의하다",
    examples: [
      { en: "How would you define success?", kr: "넌 성공을 어떻게 정의해?" },
      { en: "It's hard to define what makes a good friend.", kr: "좋은 친구가 뭔지 정의하기는 어려워요." }
    ]
  },
  {
    id: "L2-008",
    word: "distribute",
    meaning: "나눠 주다, 배포하다, 분배하다",
    examples: [
      { en: "Can you distribute these handouts before the meeting?", kr: "회의 전에 이 유인물 좀 나눠 줄래요?" },
      { en: "We distributed flyers all over the neighborhood.", kr: "우리 동네 곳곳에 전단지를 배포했어요." }
    ]
  },
  {
    id: "L2-009",
    word: "establish",
    meaning: "설립하다, 세우다, 확립하다",
    examples: [
      { en: "Wow, this bakery was established in 1950? That's so old!", kr: "와, 이 빵집이 1950년에 세워졌다고? 진짜 오래됐다!" },
      { en: "Let's establish some ground rules first.", kr: "먼저 기본 규칙부터 세우자." }
    ]
  },
  {
    id: "L2-010",
    word: "factor",
    meaning: "요인, 요소",
    examples: [
      { en: "Price was the main factor in my decision.", kr: "가격이 내 결정의 주된 요인이었어." },
      { en: "Location is a big factor when you rent an apartment.", kr: "아파트 구할 때 위치가 큰 요소예요." }
    ]
  },
  {
    id: "L2-011",
    word: "generate",
    meaning: "만들어 내다, 생성하다, 발생시키다",
    examples: [
      { en: "Her video generated so many comments overnight!", kr: "걔 영상에 하룻밤 사이에 댓글이 엄청 달렸어!" },
      { en: "The app can generate a strong password for you.", kr: "그 앱이 강력한 비밀번호를 생성해 줄 수 있어요." }
    ]
  },
  {
    id: "L2-012",
    word: "imply",
    meaning: "암시하다, 넌지시 말하다",
    examples: [
      { en: "Are you implying that I'm lying?", kr: "지금 내가 거짓말한다고 넌지시 말하는 거야?" },
      { en: "I didn't mean to imply that it was your fault.", kr: "네 잘못이라고 암시하려던 건 아니었어." }
    ]
  },
  {
    id: "L2-013",
    word: "indicate",
    meaning: "나타내다, 표시하다, 가리키다",
    examples: [
      { en: "Did the doctor indicate how long it'll take to heal?", kr: "낫는 데 얼마나 걸릴지 의사 선생님이 말씀하셨어?" },
      { en: "Please indicate your seat preference when you book.", kr: "예약하실 때 원하는 좌석을 표시해 주세요." }
    ]
  },
  {
    id: "L2-014",
    word: "involve",
    meaning: "포함하다, 수반하다, 관련시키다",
    examples: [
      { en: "The job involves a lot of traveling.", kr: "그 일에는 출장이 많이 포함돼요." },
      { en: "I don't want to get involved in their argument.", kr: "걔네 싸움에 휘말리고 싶지 않아." }
    ]
  },
  {
    id: "L2-402",
    word: "contact",
    meaning: "연락하다, 연락",
    examples: [
      { en: "Please contact me if you have any questions.", kr: "질문이 있으시면 저에게 연락 주세요." },
      { en: "Do you still keep in contact with your old classmates?", kr: "아직도 옛날 반 친구들과 연락하고 지내?" }
    ]
  },
  {
    id: "L2-501",
    word: "wonder",
    meaning: "궁금하다, 궁금해하다",
    examples: [
      { en: "I wonder if she's coming tonight.", kr: "걔 오늘 밤에 올지 궁금하네." },
      { en: "I was wondering if you could help me move this weekend.", kr: "이번 주말에 이사하는 거 좀 도와줄 수 있나 해서." }
    ]
  },
  {
    id: "L2-017",
    word: "proceed",
    meaning: "진행하다, (~로) 가다",
    examples: [
      { en: "You can proceed with your presentation now.", kr: "이제 발표 진행하셔도 돼요." },
      { en: "Please proceed to gate 12 for boarding.", kr: "탑승을 위해 12번 게이트로 이동해 주십시오." }
    ]
  },
  {
    id: "L2-018",
    word: "react",
    meaning: "반응하다",
    examples: [
      { en: "How did he react to the news?", kr: "그 사람 그 소식 듣고 어떻게 반응했어?" },
      { en: "I didn't know how to react when she cried.", kr: "그녀가 울었을 때 어떻게 반응해야 할지 몰랐어." }
    ]
  },
  {
    id: "L2-403",
    word: "drop",
    meaning: "떨어뜨리다, 떨어지다, (차에서) 내려 주다",
    examples: [
      { en: "Be careful not to drop your phone in the water.", kr: "휴대폰을 물에 떨어뜨리지 않게 조심해." },
      { en: "Can you drop me off at the station?", kr: "역에 좀 내려 줄 수 있어요?" }
    ]
  },
  {
    id: "L2-020",
    word: "strategy",
    meaning: "전략",
    examples: [
      { en: "What's your strategy for the job interview?", kr: "면접 전략이 뭐예요?" },
      { en: "We need a better marketing strategy this year.", kr: "올해는 더 나은 마케팅 전략이 필요해요." }
    ]
  },
  {
    id: "L2-502",
    word: "plenty",
    meaning: "많음, 충분함",
    examples: [
      { en: "Don't worry, we have plenty of time.", kr: "걱정 마, 시간 충분해." },
      { en: "Help yourself, there's plenty of food.", kr: "마음껏 먹어, 음식 많아." }
    ]
  },
  {
    id: "L2-022",
    word: "unique",
    meaning: "독특한, 고유한",
    examples: [
      { en: "Your style is so unique. I love it!", kr: "네 스타일 진짜 독특하다. 완전 좋아!" },
      { en: "Every city has its own unique charm.", kr: "도시마다 고유한 매력이 있어요." }
    ]
  },
  {
    id: "L2-023",
    word: "vary",
    meaning: "다양하다, 달라지다",
    examples: [
      { en: "Prices vary depending on the season.", kr: "가격은 계절에 따라 달라져요." },
      { en: "Opinions vary a lot on this issue.", kr: "이 문제에 대해서는 의견이 정말 다양해요." }
    ]
  },
  {
    id: "L2-024",
    word: "crucial",
    meaning: "매우 중요한, 결정적인",
    examples: [
      { en: "Timing is crucial in a negotiation.", kr: "협상에선 타이밍이 결정적이에요." },
      { en: "This meeting is crucial for our project.", kr: "이번 회의는 우리 프로젝트에 정말 중요해요." }
    ]
  },
  {
    id: "L2-025",
    word: "acquire",
    meaning: "습득하다, 얻다, 인수하다",
    examples: [
      { en: "I acquired a lot of new skills at that job.", kr: "그 일 하면서 새로운 기술을 많이 습득했어요." },
      { en: "I heard a bigger company acquired our competitor.", kr: "더 큰 회사가 우리 경쟁사를 인수했대요." }
    ]
  },
  {
    id: "L2-026",
    word: "alternative",
    meaning: "대안의, 대안",
    examples: [
      { en: "Is there an alternative route to the airport?", kr: "공항 가는 대체 경로가 있어요?" },
      { en: "If that doesn't work, what's the alternative?", kr: "그게 안 되면 대안이 뭐야?" }
    ]
  },
  {
    id: "L2-027",
    word: "analyze",
    meaning: "분석하다",
    examples: [
      { en: "Let's analyze the sales data before we decide.", kr: "결정하기 전에 판매 데이터를 분석해 보자." },
      { en: "Stop analyzing every little thing he says.", kr: "그 사람이 하는 말 하나하나 분석하지 좀 마." }
    ]
  },
  {
    id: "L2-028",
    word: "assess",
    meaning: "평가하다, 판단하다",
    examples: [
      { en: "We need to assess the risks first.", kr: "먼저 위험성을 평가해야 해요." },
      { en: "The doctor will assess your condition tomorrow.", kr: "내일 의사 선생님이 상태를 보고 평가해 주실 거예요." }
    ]
  },
  {
    id: "L2-029",
    word: "complex",
    meaning: "복잡한",
    examples: [
      { en: "It's a very complex issue with no easy solution.", kr: "쉬운 해결책이 없는 정말 복잡한 문제야." },
      { en: "The instructions are too complex for me.", kr: "설명서가 나한텐 너무 복잡해." }
    ]
  },
  {
    id: "L2-030",
    word: "dimension",
    meaning: "차원, 측면, 치수",
    examples: [
      { en: "Having a baby adds a whole new dimension to life.", kr: "아기가 생기면 삶에 완전히 새로운 차원이 더해져요." },
      { en: "Can you check the dimensions of the sofa?", kr: "소파 치수 좀 확인해 줄래요?" }
    ]
  },
  {
    id: "L2-031",
    word: "demonstrate",
    meaning: "보여주다, 시연하다, 입증하다",
    examples: [
      { en: "Let me demonstrate how the app works.", kr: "앱이 어떻게 작동하는지 보여 드릴게요." },
      { en: "This project really demonstrates his leadership skills.", kr: "이 프로젝트가 그의 리더십을 확실히 입증해 줘요." }
    ]
  },
  {
    id: "L2-032",
    word: "distinct",
    meaning: "뚜렷한, 별개의, 확실히 다른",
    examples: [
      { en: "The two flavors are really distinct from each other.", kr: "두 맛은 서로 확실히 달라요." },
      { en: "I had the distinct feeling someone was watching me.", kr: "누가 날 보고 있다는 뚜렷한 느낌이 들었어." }
    ]
  },
  {
    id: "L2-033",
    word: "emphasize",
    meaning: "강조하다",
    examples: [
      { en: "My boss emphasized the importance of deadlines.", kr: "상사가 마감의 중요성을 강조했어요." },
      { en: "I can't emphasize this enough: back up your files.", kr: "이건 아무리 강조해도 지나치지 않아요. 파일 백업하세요." }
    ]
  },
  {
    id: "L2-034",
    word: "evolve",
    meaning: "진화하다, 발전하다",
    examples: [
      { en: "Our relationship has evolved over the years.", kr: "우리 관계는 몇 년에 걸쳐 발전해 왔어요." },
      { en: "Smartphones have evolved so quickly, haven't they?", kr: "스마트폰은 정말 빨리 진화했죠, 그렇죠?" }
    ]
  },
  {
    id: "L2-035",
    word: "feature",
    meaning: "기능, 특징, 등장시키다",
    examples: [
      { en: "This phone has some really cool features.", kr: "이 폰에는 정말 멋진 기능이 몇 개 있어요." },
      { en: "The movie features a lot of famous actors.", kr: "그 영화엔 유명한 배우들이 많이 등장해요." }
    ]
  },
  {
    id: "L2-036",
    word: "identify",
    meaning: "알아보다, 식별하다, 찾아내다",
    examples: [
      { en: "Can you identify the man in this photo?", kr: "이 사진 속 남자가 누군지 알아볼 수 있어요?" },
      { en: "We need to identify the root of the problem.", kr: "문제의 근본 원인을 찾아내야 해요." }
    ]
  },
  {
    id: "L2-503",
    word: "borrow",
    meaning: "빌리다",
    examples: [
      { en: "Can I borrow your umbrella? I'll bring it back tomorrow.", kr: "우산 좀 빌려도 될까? 내일 돌려줄게." },
      { en: "I borrowed this book from the library.", kr: "이 책 도서관에서 빌렸어." }
    ]
  },
  {
    id: "L2-038",
    word: "invest",
    meaning: "투자하다",
    examples: [
      { en: "Investing in your health is never a waste.", kr: "건강에 투자하는 건 절대 낭비가 아니야." },
      { en: "Have you ever invested in stocks?", kr: "주식에 투자해 본 적 있어요?" }
    ]
  },
  {
    id: "L2-039",
    word: "maintain",
    meaning: "유지하다, 주장하다",
    examples: [
      { en: "It's hard to maintain a healthy diet when traveling.", kr: "여행할 때는 건강한 식단을 유지하기가 어려워요." },
      { en: "He still maintains that he did nothing wrong.", kr: "그는 아직도 자기가 잘못한 게 없다고 주장해요." }
    ]
  },
  {
    id: "L2-504",
    word: "anyway",
    meaning: "어쨌든, 아무튼, 그래도",
    examples: [
      { en: "Anyway, how was your weekend?", kr: "아무튼, 주말은 어땠어?" },
      { en: "It's raining, but I'm going out anyway.", kr: "비 오는데 그래도 나 나갈 거야." }
    ]
  },
  {
    id: "L2-041",
    word: "occur",
    meaning: "일어나다, 발생하다, (생각이) 떠오르다",
    examples: [
      { en: "When did the accident occur?", kr: "그 사고는 언제 일어났어요?" },
      { en: "It never occurred to me to ask him.", kr: "그에게 물어볼 생각이 전혀 안 떠올랐어." }
    ]
  },
  {
    id: "L2-042",
    word: "phase",
    meaning: "단계, 국면, 한때",
    examples: [
      { en: "The project is in its final phase now.", kr: "프로젝트는 이제 마지막 단계에 있어요." },
      { en: "Don't worry, it's just a phase. He'll grow out of it.", kr: "걱정 마, 그냥 한때야. 크면서 괜찮아질 거야." }
    ]
  },
  {
    id: "L2-043",
    word: "primary",
    meaning: "주된, 가장 중요한",
    examples: [
      { en: "What's the primary goal of this meeting?", kr: "이 회의의 주된 목표가 뭐예요?" },
      { en: "Safety is our primary concern.", kr: "안전이 우리의 가장 중요한 관심사예요." }
    ]
  },
  {
    id: "L2-505",
    word: "portion",
    meaning: "(음식의) 양, 1인분, 부분",
    examples: [
      { en: "The portions at this restaurant are huge!", kr: "이 식당 음식 양이 엄청 많아!" },
      { en: "Can I get a smaller portion for my kid?", kr: "아이 먹을 거라 양을 좀 적게 주실 수 있어요?" }
    ]
  },
  {
    id: "L2-045",
    word: "resource",
    meaning: "자원, 자료",
    examples: [
      { en: "This website is a great resource for learning English.", kr: "이 웹사이트는 영어 공부하기에 정말 좋은 자료예요." },
      { en: "We don't have enough resources for this project.", kr: "이 프로젝트를 할 자원이 충분하지 않아요." }
    ]
  },
  {
    id: "L2-046",
    word: "stable",
    meaning: "안정된, 안정적인",
    examples: [
      { en: "I want a stable job with good benefits.", kr: "복지 좋은 안정적인 직장을 원해요." },
      { en: "The patient is in stable condition now.", kr: "환자는 이제 안정된 상태예요." }
    ]
  },
  {
    id: "L2-047",
    word: "technique",
    meaning: "기술, 기법, 요령",
    examples: [
      { en: "What's your technique for remembering names?", kr: "이름 기억하는 너만의 요령이 뭐야?" },
      { en: "This breathing technique really helps when I'm nervous.", kr: "이 호흡 기법은 긴장될 때 정말 도움이 돼." }
    ]
  },
  {
    id: "L2-048",
    word: "trigger",
    meaning: "유발하다, 촉발하다",
    examples: [
      { en: "Stress can trigger my headaches.", kr: "스트레스가 내 두통을 유발할 수 있어." },
      { en: "His comment triggered a huge argument.", kr: "그 사람 말 한마디가 큰 말다툼을 촉발했어." }
    ]
  },
  {
    id: "L2-049",
    word: "ultimate",
    meaning: "궁극적인, 최고의",
    examples: [
      { en: "My ultimate goal is to start my own business.", kr: "내 궁극적인 목표는 내 사업을 시작하는 거야." },
      { en: "This trip was the ultimate adventure for me.", kr: "이번 여행은 나한테 최고의 모험이었어." }
    ]
  },
  {
    id: "L2-506",
    word: "popular",
    meaning: "인기 있는, 대중적인",
    examples: [
      { en: "This café is really popular with students.", kr: "이 카페 학생들한테 진짜 인기 많아." },
      { en: "Which dish is the most popular here?", kr: "여기서 제일 인기 있는 메뉴가 뭐예요?" }
    ]
  },
  {
    id: "L2-051",
    word: "adjust",
    meaning: "조절하다, 조정하다, 적응하다",
    examples: [
      { en: "Can you help me adjust my seat?", kr: "좌석 조절하는 것 좀 도와줄래요?" },
      { en: "It took me months to adjust to life in Seoul.", kr: "서울 생활에 적응하는 데 몇 달 걸렸어요." }
    ]
  },
  {
    id: "L2-052",
    word: "apparent",
    meaning: "분명한, 명백한, 뚜렷한",
    examples: [
      { en: "It was apparent that he was lying.", kr: "그가 거짓말하고 있다는 게 분명했어." },
      { en: "For no apparent reason, my laptop just shut down.", kr: "뚜렷한 이유도 없이 노트북이 그냥 꺼졌어." }
    ]
  },
  {
    id: "L2-053",
    word: "brief",
    meaning: "간단한, 짧은",
    examples: [
      { en: "Can you give me a brief summary of the meeting?", kr: "회의 내용 간단하게 요약해 줄래요?" },
      { en: "I'll keep this brief because we're running late.", kr: "시간이 늦어지고 있으니까 짧게 할게요." }
    ]
  },
  {
    id: "L2-507",
    word: "rumor",
    meaning: "소문, 루머",
    examples: [
      { en: "Is it true, or is it just a rumor?", kr: "그거 사실이야, 아니면 그냥 소문이야?" },
      { en: "I heard a rumor that Jake is quitting.", kr: "제이크가 그만둔다는 소문 들었어." }
    ]
  },
  {
    id: "L2-508",
    word: "stuck",
    meaning: "갇힌, 꼼짝 못 하는, 막힌",
    examples: [
      { en: "Sorry, I'm stuck in traffic. I'll be a bit late.", kr: "미안, 차가 막혀서 꼼짝 못 하고 있어. 좀 늦을 것 같아." },
      { en: "I'm stuck on this question. Can you help me?", kr: "이 문제에서 막혔어. 좀 도와줄래?" }
    ]
  },
  {
    id: "L2-056",
    word: "corporate",
    meaning: "기업의, 회사의",
    examples: [
      { en: "She works in corporate finance at a big bank.", kr: "그녀는 큰 은행에서 기업 금융 일을 해요." },
      { en: "I'm tired of corporate life; I want something different.", kr: "회사 생활에 지쳤어. 뭔가 다른 걸 하고 싶어." }
    ]
  },
  {
    id: "L2-057",
    word: "domestic",
    meaning: "국내의, 국산의, 가정의",
    examples: [
      { en: "Domestic flights leave from Terminal 2.", kr: "국내선 항공편은 2터미널에서 출발해요." },
      { en: "Do you prefer domestic or imported beer?", kr: "국산 맥주가 좋아, 수입 맥주가 좋아?" }
    ]
  },
  {
    id: "L2-058",
    word: "dramatic",
    meaning: "극적인, 호들갑스러운",
    examples: [
      { en: "There's been a dramatic change in the weather.", kr: "날씨에 극적인 변화가 있었어요." },
      { en: "Stop being so dramatic. It's just a scratch.", kr: "그렇게 호들갑 떨지 마. 그냥 긁힌 거야." }
    ]
  },
  {
    id: "L2-059",
    word: "edit",
    meaning: "편집하다, 수정하다",
    examples: [
      { en: "I spent hours editing my video last night.", kr: "어젯밤에 영상 편집하느라 몇 시간을 보냈어." },
      { en: "Can you edit my essay before I submit it?", kr: "제출하기 전에 내 에세이 좀 수정해 줄래?" }
    ]
  },
  {
    id: "L2-060",
    word: "expose",
    meaning: "노출시키다, 폭로하다",
    examples: [
      { en: "Don't expose the camera to direct sunlight.", kr: "카메라를 직사광선에 노출시키지 마세요." },
      { en: "The reporter exposed the company's lies.", kr: "그 기자가 회사의 거짓말을 폭로했어요." }
    ]
  },
  {
    id: "L2-061",
    word: "financial",
    meaning: "재정적인, 금융의, 재무의",
    examples: [
      { en: "I'm having some financial problems right now.", kr: "지금 재정적인 문제가 좀 있어요." },
      { en: "You should talk to a financial advisor.", kr: "재무 상담사랑 얘기해 보는 게 좋겠어요." }
    ]
  },
  {
    id: "L2-509",
    word: "neighbor",
    meaning: "이웃, 옆집 사람",
    examples: [
      { en: "Our new neighbors seem really friendly.", kr: "새로 온 이웃들 진짜 친절한 것 같아." },
      { en: "Can you ask the neighbor to turn down the music?", kr: "옆집에 음악 소리 좀 줄여 달라고 해 줄래?" }
    ]
  },
  {
    id: "L2-510",
    word: "complain",
    meaning: "불평하다, 항의하다",
    examples: [
      { en: "Stop complaining and just eat your dinner.", kr: "불평 그만하고 저녁이나 먹어." },
      { en: "I called the hotel to complain about the noise.", kr: "소음 때문에 호텔에 전화해서 항의했어." }
    ]
  },
  {
    id: "L2-404",
    word: "fair",
    meaning: "공정한, 공평한, 박람회",
    examples: [
      { en: "It's not fair that I have to work every weekend.", kr: "내가 주말마다 일해야 하는 건 공평하지 않아." },
      { en: "We met many new clients at the trade fair.", kr: "무역 박람회에서 새 고객을 많이 만났어요." }
    ]
  },
  {
    id: "L2-065",
    word: "liberal",
    meaning: "진보적인, 자유로운",
    examples: [
      { en: "My parents are pretty liberal about curfews.", kr: "우리 부모님은 통금 시간에 꽤 자유로운 편이야." },
      { en: "She has very liberal views on most issues.", kr: "그녀는 대부분의 문제에 대해 꽤 진보적인 시각을 갖고 있어요." }
    ]
  },
  {
    id: "L2-066",
    word: "minimal",
    meaning: "최소한의, 아주 적은",
    examples: [
      { en: "The damage was minimal, thank goodness.", kr: "다행히 피해가 최소한에 그쳤어요." },
      { en: "This recipe takes minimal effort but tastes amazing.", kr: "이 레시피는 최소한의 노력으로 끝내주는 맛이 나요." }
    ]
  },
  {
    id: "L2-067",
    word: "perspective",
    meaning: "관점, 시각",
    examples: [
      { en: "Try to look at the problem from a different perspective.", kr: "다른 관점에서 그 문제를 한번 봐 봐." },
      { en: "Traveling really gave me a new perspective on life.", kr: "여행이 삶을 보는 새로운 시각을 줬어요." }
    ]
  },
  {
    id: "L2-068",
    word: "precise",
    meaning: "정확한, 정밀한",
    examples: [
      { en: "Can you be more precise about the time?", kr: "시간을 좀 더 정확하게 말해 줄래요?" },
      { en: "To be precise, we've been waiting for forty minutes.", kr: "정확히 말하면, 우리 40분째 기다리고 있어요." }
    ]
  },
  {
    id: "L2-069",
    word: "pursue",
    meaning: "추구하다, 좇다",
    examples: [
      { en: "He decided to pursue a career in medicine.", kr: "그는 의학 쪽으로 진로를 정했어요." },
      { en: "You should pursue your dreams while you're young.", kr: "젊을 때 꿈을 좇아야 해." }
    ]
  },
  {
    id: "L2-511",
    word: "recipe",
    meaning: "요리법, 레시피",
    examples: [
      { en: "Can you send me the recipe for this pasta?", kr: "이 파스타 레시피 좀 보내 줄래?" },
      { en: "I followed the recipe, but it tastes weird.", kr: "레시피대로 했는데 맛이 이상해." }
    ]
  },
  {
    id: "L2-071",
    word: "reject",
    meaning: "거절하다, 거부하다",
    examples: [
      { en: "My application was rejected again.", kr: "내 지원서가 또 거절됐어." },
      { en: "She politely rejected his offer.", kr: "그녀는 그의 제안을 정중하게 거절했어요." }
    ]
  },
  {
    id: "L2-072",
    word: "resolve",
    meaning: "해결하다, 결심하다",
    examples: [
      { en: "Let's resolve this issue before the weekend.", kr: "주말 전에 이 문제를 해결하자." },
      { en: "I resolved to exercise every morning this year.", kr: "올해는 매일 아침 운동하기로 결심했어." }
    ]
  },
  {
    id: "L2-073",
    word: "restore",
    meaning: "복원하다, 되돌리다, 회복시키다",
    examples: [
      { en: "They restored the old house beautifully.", kr: "그 오래된 집을 아름답게 복원했어요." },
      { en: "I need to restore my phone to factory settings.", kr: "휴대폰을 공장 초기 상태로 되돌려야 해." }
    ]
  },
  {
    id: "L2-074",
    word: "revise",
    meaning: "수정하다, 개정하다",
    examples: [
      { en: "Please revise the document before submitting it.", kr: "제출하기 전에 문서를 수정해 주세요." },
      { en: "We had to revise our travel plans because of the rain.", kr: "비 때문에 여행 계획을 수정해야 했어요." }
    ]
  },
  {
    id: "L2-512",
    word: "coworker",
    meaning: "직장 동료",
    examples: [
      { en: "I'm grabbing lunch with a coworker today.", kr: "오늘 직장 동료랑 점심 먹으러 가." },
      { en: "My coworkers threw me a surprise party.", kr: "동료들이 나한테 깜짝 파티를 해 줬어." }
    ]
  },
  {
    id: "L2-513",
    word: "shy",
    meaning: "수줍어하는, 부끄럼 타는",
    examples: [
      { en: "Don't be shy. Come and join us!", kr: "부끄러워하지 말고 와서 같이 해!" },
      { en: "He's a bit shy around new people.", kr: "걔는 처음 보는 사람 앞에서 좀 수줍어해." }
    ]
  },
  {
    id: "L2-514",
    word: "ahead",
    meaning: "앞에, 먼저, 미리",
    examples: [
      { en: "Go ahead, I'll catch up with you.", kr: "먼저 가, 금방 따라갈게." },
      { en: "Let's book the tickets ahead of time.", kr: "표는 미리 예매하자." }
    ]
  },
  {
    id: "L2-515",
    word: "blanket",
    meaning: "담요, 이불",
    examples: [
      { en: "Can I get an extra blanket, please?", kr: "담요 하나 더 주실 수 있나요?" },
      { en: "I just want to stay under my blanket all day.", kr: "하루 종일 이불 속에만 있고 싶어." }
    ]
  },
  {
    id: "L2-516",
    word: "souvenir",
    meaning: "기념품",
    examples: [
      { en: "I bought some souvenirs for my family.", kr: "가족들 주려고 기념품 좀 샀어." },
      { en: "Is there a souvenir shop near here?", kr: "이 근처에 기념품 가게 있어요?" }
    ]
  },
  {
    id: "L2-080",
    word: "submit",
    meaning: "제출하다",
    examples: [
      { en: "You must submit your application by Friday.", kr: "금요일까지 신청서를 제출해야 해요." },
      { en: "Did you submit the report yet?", kr: "보고서 벌써 제출했어?" }
    ]
  },
  {
    id: "L2-081",
    word: "temporary",
    meaning: "일시적인, 임시의",
    examples: [
      { en: "This is just a temporary solution.", kr: "이건 그냥 임시 해결책일 뿐이야." },
      { en: "We're working in a temporary office during the renovation.", kr: "리모델링 기간 동안 임시 사무실에서 일하고 있어요." }
    ]
  },
  {
    id: "L2-517",
    word: "charger",
    meaning: "충전기",
    examples: [
      { en: "Can I borrow your phone charger?", kr: "휴대폰 충전기 좀 빌려도 돼?" },
      { en: "Oh no, I left my charger at the hotel.", kr: "아 이런, 충전기를 호텔에 두고 왔어." }
    ]
  },
  {
    id: "L2-405",
    word: "positive",
    meaning: "긍정적인, 확신하는",
    examples: [
      { en: "Try to stay positive, even on bad days.", kr: "힘든 날에도 긍정적인 태도를 유지하려고 해 봐." },
      { en: "Are you positive you locked the front door?", kr: "현관문 잠근 거 확실해?" }
    ]
  },
  {
    id: "L2-084",
    word: "visualize",
    meaning: "시각화하다, 머릿속에 그리다",
    examples: [
      { en: "Close your eyes and visualize your goal.", kr: "눈을 감고 목표를 머릿속에 그려 봐요." },
      { en: "I can't visualize how the room will look.", kr: "방이 어떻게 보일지 머릿속에 안 그려져." }
    ]
  },
  {
    id: "L2-085",
    word: "abstract",
    meaning: "추상적인",
    examples: [
      { en: "Love is such an abstract concept.", kr: "사랑은 정말 추상적인 개념이야." },
      { en: "I don't really get abstract art.", kr: "난 추상 미술은 잘 이해가 안 돼." }
    ]
  },
  {
    id: "L2-086",
    word: "collaborate",
    meaning: "협력하다, 협업하다",
    examples: [
      { en: "Let's collaborate on this project.", kr: "이 프로젝트 같이 협업해요." },
      { en: "I've collaborated with their design team before.", kr: "전에 그쪽 디자인 팀이랑 협업한 적 있어요." }
    ]
  },
  {
    id: "L2-087",
    word: "commit",
    meaning: "전념하다, 약속하다",
    examples: [
      { en: "I'm fully committed to this project.", kr: "저는 이 프로젝트에 완전히 전념하고 있어요." },
      { en: "I can't commit to anything until I check my schedule.", kr: "일정 확인하기 전엔 아무것도 약속 못 해." }
    ]
  },
  {
    id: "L2-518",
    word: "celebrate",
    meaning: "축하하다, 기념하다",
    examples: [
      { en: "Let's go out and celebrate tonight!", kr: "오늘 밤에 나가서 축하하자!" },
      { en: "How are you celebrating your birthday this year?", kr: "올해 생일은 어떻게 축하할 거야?" }
    ]
  },
  {
    id: "L2-519",
    word: "shortcut",
    meaning: "지름길, 단축키",
    examples: [
      { en: "I know a shortcut to the station.", kr: "역까지 가는 지름길 알아." },
      { en: "What's the keyboard shortcut for copy and paste?", kr: "복사해서 붙여 넣는 단축키가 뭐야?" }
    ]
  },
  {
    id: "L2-520",
    word: "wallet",
    meaning: "지갑",
    examples: [
      { en: "I think I left my wallet in the taxi.", kr: "택시에 지갑 두고 내린 것 같아." },
      { en: "Have you seen my wallet anywhere?", kr: "내 지갑 어디서 못 봤어?" }
    ]
  },
  {
    id: "L2-091",
    word: "flexible",
    meaning: "유연한, 융통성 있는",
    examples: [
      { en: "I've been doing yoga to get more flexible.", kr: "몸 좀 유연해지려고 요가하고 있어." },
      { en: "My schedule's flexible, so pick any day you want.", kr: "내 일정은 유연하니까 원하는 날 아무 때나 골라." }
    ]
  },
  {
    id: "L2-521",
    word: "traffic",
    meaning: "교통, 교통량, 차량 흐름",
    examples: [
      { en: "Traffic is terrible this morning.", kr: "오늘 아침 차 엄청 막히네." },
      { en: "Let's leave early to avoid the traffic.", kr: "차 막히는 거 피하려면 일찍 출발하자." }
    ]
  },
  {
    id: "L2-093",
    word: "massive",
    meaning: "거대한, 엄청난, 대규모의",
    examples: [
      { en: "There was a massive line outside the store.", kr: "가게 밖에 줄이 어마어마하게 길었어." },
      { en: "We had a massive fight last night.", kr: "우리 어젯밤에 엄청 크게 싸웠어." }
    ]
  },
  {
    id: "L2-522",
    word: "unpack",
    meaning: "(짐을) 풀다",
    examples: [
      { en: "I'm too tired to unpack tonight.", kr: "너무 피곤해서 오늘 밤엔 짐 못 풀겠어." },
      { en: "Have you finished unpacking after the move?", kr: "이사하고 짐 다 풀었어?" }
    ]
  },
  {
    id: "L2-095",
    word: "negotiate",
    meaning: "협상하다",
    examples: [
      { en: "Don't be afraid to negotiate your salary.", kr: "연봉 협상하는 걸 두려워하지 마." },
      { en: "Can we negotiate the price a little?", kr: "가격 좀 협상할 수 있을까요?" }
    ]
  },
  {
    id: "L2-096",
    word: "overcome",
    meaning: "극복하다",
    examples: [
      { en: "She finally overcame her fear of flying.", kr: "그녀는 결국 비행 공포증을 극복했어요." },
      { en: "We'll overcome this together, I promise.", kr: "우리 이거 같이 극복할 거야, 약속해." }
    ]
  },
  {
    id: "L2-523",
    word: "battery",
    meaning: "배터리, 건전지",
    examples: [
      { en: "My phone battery is almost dead.", kr: "휴대폰 배터리 거의 다 됐어." },
      { en: "Does this remote need new batteries?", kr: "이 리모컨 건전지 새로 갈아야 하나?" }
    ]
  },
  {
    id: "L2-524",
    word: "fix",
    meaning: "고치다, 해결하다, (음식을) 만들어 주다",
    examples: [
      { en: "Can you fix my bike this weekend?", kr: "이번 주말에 내 자전거 좀 고쳐 줄 수 있어?" },
      { en: "Sit down, I'll fix you something to eat.", kr: "앉아 있어, 내가 먹을 것 좀 만들어 줄게." }
    ]
  },
  {
    id: "L2-099",
    word: "severe",
    meaning: "심한, 심각한",
    examples: [
      { en: "I have a severe headache today.", kr: "오늘 두통이 심해요." },
      { en: "The forecast says severe storms are coming tonight.", kr: "일기 예보에서 오늘 밤에 심한 폭풍이 온대요." }
    ]
  },
  {
    id: "L2-100",
    word: "sophisticated",
    meaning: "정교한, 세련된",
    examples: [
      { en: "She has very sophisticated taste in wine.", kr: "그녀는 와인 취향이 정말 세련됐어요." },
      { en: "This phone has a pretty sophisticated camera system.", kr: "이 폰은 카메라 시스템이 꽤 정교해요." }
    ]
  }
];

const wordsLevel2_Part2 = [
  {
    id: "L2-525",
    word: "exhausted",
    meaning: "몹시 지친, 기진맥진한",
    examples: [
      { en: "I'm exhausted after that long flight.", kr: "긴 비행 끝에 완전 녹초가 됐어." },
      { en: "You look exhausted. Go get some sleep.", kr: "너 완전 지쳐 보여. 가서 좀 자." }
    ]
  },
  {
    id: "L2-526",
    word: "owe",
    meaning: "빚지다, 신세 지다",
    examples: [
      { en: "How much do I owe you for dinner?", kr: "저녁값 내가 얼마 주면 돼?" },
      { en: "Thanks for covering for me. I owe you one!", kr: "대신 해 줘서 고마워. 신세 졌다!" }
    ]
  },
  {
    id: "L2-103",
    word: "bias",
    meaning: "편견, 편향",
    examples: [
      { en: "I think the article has a strong bias.", kr: "그 기사는 편향이 심한 것 같아." },
      { en: "Try not to let your personal bias affect your decision.", kr: "개인적인 편견이 결정에 영향을 주지 않게 해." }
    ]
  },
  {
    id: "L2-104",
    word: "capable",
    meaning: "능력 있는, 유능한, ~할 수 있는",
    examples: [
      { en: "I know you're capable of much more than this.", kr: "넌 이것보다 훨씬 더 잘할 능력이 있다는 거 알아." },
      { en: "She's a very capable manager.", kr: "그녀는 정말 유능한 매니저예요." }
    ]
  },
  {
    id: "L2-105",
    word: "clarify",
    meaning: "명확히 하다, 분명히 하다",
    examples: [
      { en: "Could you clarify what you mean by that?", kr: "그게 무슨 뜻인지 명확히 말해 줄래요?" },
      { en: "Let me clarify one thing before we start.", kr: "시작하기 전에 한 가지만 분명히 할게요." }
    ]
  },
  {
    id: "L2-106",
    word: "compensate",
    meaning: "보상하다, 보완하다",
    examples: [
      { en: "The airline compensated us for the delay.", kr: "항공사가 지연에 대해 우리한테 보상해 줬어요." },
      { en: "His hard work compensates for his lack of experience.", kr: "그의 성실함이 경험 부족을 보완해 줘요." }
    ]
  },
  {
    id: "L2-527",
    word: "delete",
    meaning: "삭제하다, 지우다",
    examples: [
      { en: "Oops, I accidentally deleted the photo.", kr: "앗, 실수로 사진 지워 버렸어." },
      { en: "Can you delete that picture of me? I look terrible.", kr: "나 나온 그 사진 지워 줄래? 너무 이상하게 나왔어." }
    ]
  },
  {
    id: "L2-528",
    word: "homesick",
    meaning: "향수병에 걸린, 집이 그리운",
    examples: [
      { en: "I was so homesick during my first month here.", kr: "여기 온 첫 달엔 집이 너무 그리웠어." },
      { en: "Do you ever get homesick?", kr: "너도 집 그리울 때 있어?" }
    ]
  },
  {
    id: "L2-109",
    word: "cooperate",
    meaning: "협력하다, 협조하다",
    examples: [
      { en: "If everyone cooperates, we'll finish early.", kr: "다들 협조하면 일찍 끝낼 수 있어요." },
      { en: "The kids wouldn't cooperate at bedtime last night.", kr: "어젯밤에 애들이 잘 시간에 도무지 협조를 안 했어." }
    ]
  },
  {
    id: "L2-529",
    word: "guess",
    meaning: "추측하다, 맞히다, ~인 것 같다",
    examples: [
      { en: "Guess what? I got the job!", kr: "맞혀 봐! 나 그 회사 붙었어!" },
      { en: "I guess I'll just stay home tonight.", kr: "오늘 밤엔 그냥 집에 있어야 할 것 같아." }
    ]
  },
  {
    id: "L2-530",
    word: "nap",
    meaning: "낮잠, 낮잠 자다",
    examples: [
      { en: "I'm going to take a quick nap.", kr: "잠깐 낮잠 좀 잘게." },
      { en: "The baby naps for two hours every afternoon.", kr: "아기는 매일 오후에 두 시간씩 낮잠 자." }
    ]
  },
  {
    id: "L2-112",
    word: "diverse",
    meaning: "다양한",
    examples: [
      { en: "Our team has people from really diverse backgrounds.", kr: "우리 팀에는 정말 다양한 배경의 사람들이 있어요." },
      { en: "The city has a really diverse food scene.", kr: "그 도시는 음식 문화가 정말 다양해요." }
    ]
  },
  {
    id: "L2-113",
    word: "eliminate",
    meaning: "없애다, 제거하다, 탈락시키다",
    examples: [
      { en: "We need to eliminate unnecessary spending.", kr: "불필요한 지출을 없애야 해요." },
      { en: "Our team got eliminated in the first round.", kr: "우리 팀은 첫 라운드에서 탈락했어." }
    ]
  },
  {
    id: "L2-114",
    word: "enhance",
    meaning: "향상시키다, 높이다",
    examples: [
      { en: "A pinch of salt will enhance the flavor.", kr: "소금 한 꼬집이 풍미를 높여 줄 거예요." },
      { en: "This app can enhance the quality of your photos.", kr: "이 앱으로 사진 화질을 향상시킬 수 있어요." }
    ]
  },
  {
    id: "L2-115",
    word: "exclude",
    meaning: "제외하다, 배제하다",
    examples: [
      { en: "Drinks are excluded from the set price.", kr: "음료는 세트 가격에서 제외돼요." },
      { en: "I felt excluded from the conversation.", kr: "대화에서 배제된 느낌이었어." }
    ]
  },
  {
    id: "L2-116",
    word: "exploit",
    meaning: "착취하다, 악용하다, 이용하다",
    examples: [
      { en: "Don't let people exploit your kindness.", kr: "사람들이 네 친절을 이용하게 두지 마." },
      { en: "I feel like my company is exploiting me.", kr: "회사가 날 착취하는 것 같아." }
    ]
  },
  {
    id: "L2-531",
    word: "messy",
    meaning: "지저분한, 엉망인, 복잡한",
    examples: [
      { en: "Sorry, my room is really messy.", kr: "미안, 내 방이 너무 지저분해." },
      { en: "Their breakup got pretty messy.", kr: "걔네 헤어지는 과정이 꽤 지저분했어." }
    ]
  },
  {
    id: "L2-532",
    word: "deadline",
    meaning: "마감, 마감일, 기한",
    examples: [
      { en: "When's the deadline for this report?", kr: "이 보고서 마감이 언제예요?" },
      { en: "Sorry, I'm on a tight deadline this week.", kr: "미안, 이번 주는 마감이 빠듯해." }
    ]
  },
  {
    id: "L2-119",
    word: "hostile",
    meaning: "적대적인",
    examples: [
      { en: "The crowd was openly hostile to the speaker.", kr: "관중은 연사에게 대놓고 적대적이었어요." },
      { en: "Why are you being so hostile? I'm just asking.", kr: "왜 그렇게 적대적이야? 그냥 물어본 거야." }
    ]
  },
  {
    id: "L2-120",
    word: "incentive",
    meaning: "동기 부여, 장려책, 인센티브",
    examples: [
      { en: "Money isn't my only incentive for working hard.", kr: "돈이 내가 열심히 일하는 유일한 동기는 아니야." },
      { en: "The company offers incentives for hitting sales targets.", kr: "회사는 판매 목표를 달성하면 인센티브를 줘요." }
    ]
  },
  {
    id: "L2-533",
    word: "leak",
    meaning: "새다, 새는 곳, 유출하다",
    examples: [
      { en: "There's a leak under the kitchen sink.", kr: "부엌 싱크대 밑에 물 새는 데가 있어요." },
      { en: "Did someone leak the ending online?", kr: "누가 인터넷에 결말 유출했어?" }
    ]
  },
  {
    id: "L2-122",
    word: "initial",
    meaning: "처음의, 초기의",
    examples: [
      { en: "What was your initial impression of him?", kr: "그 사람에 대한 처음 인상이 어땠어요?" },
      { en: "My initial reaction was total shock.", kr: "내 처음 반응은 완전 충격이었어." }
    ]
  },
  {
    id: "L2-123",
    word: "input",
    meaning: "의견, 조언",
    examples: [
      { en: "Thanks for your input on the new design.", kr: "새 디자인에 대한 의견 고마워요." },
      { en: "We'd love some input from the whole team.", kr: "팀 전체의 의견을 듣고 싶어요." }
    ]
  },
  {
    id: "L2-124",
    word: "install",
    meaning: "설치하다",
    examples: [
      { en: "Did you install the latest update?", kr: "최신 업데이트 설치했어?" },
      { en: "They're coming to install the air conditioner tomorrow.", kr: "내일 에어컨 설치하러 와요." }
    ]
  },
  {
    id: "L2-125",
    word: "interact",
    meaning: "상호 작용하다, 소통하다, 어울리다",
    examples: [
      { en: "He finds it hard to interact with strangers.", kr: "그는 낯선 사람들과 어울리는 걸 힘들어해요." },
      { en: "Kids learn a lot by interacting with others.", kr: "아이들은 다른 사람들과 소통하면서 많이 배워요." }
    ]
  },
  {
    id: "L2-126",
    word: "interpret",
    meaning: "해석하다, 통역하다",
    examples: [
      { en: "How should I interpret his silence?", kr: "그의 침묵을 어떻게 해석해야 할까?" },
      { en: "Could you interpret for me at the meeting?", kr: "회의에서 저 대신 통역해 줄 수 있어요?" }
    ]
  },
  {
    id: "L2-127",
    word: "justify",
    meaning: "정당화하다, 해명하다",
    examples: [
      { en: "How can you justify spending that much on shoes?", kr: "신발에 그렇게 많이 쓰는 걸 어떻게 정당화할 수 있어?" },
      { en: "You don't have to justify your decision to me.", kr: "나한테 네 결정을 해명할 필요 없어." }
    ]
  },
  {
    id: "L2-128",
    word: "label",
    meaning: "라벨을 붙이다, 라벨, 꼬리표",
    examples: [
      { en: "Please label the boxes clearly.", kr: "상자에 라벨을 잘 보이게 붙여 주세요." },
      { en: "He hates being labeled as lazy.", kr: "그는 게으르다는 꼬리표가 붙는 걸 싫어해요." }
    ]
  },
  {
    id: "L2-534",
    word: "apologize",
    meaning: "사과하다",
    examples: [
      { en: "I apologize for the wait.", kr: "기다리게 해서 죄송합니다." },
      { en: "I think you should apologize to her.", kr: "너 걔한테 사과해야 할 것 같아." }
    ]
  },
  {
    id: "L2-130",
    word: "monitor",
    meaning: "지켜보다, 감시하다, 관찰하다",
    examples: [
      { en: "We need to monitor the situation closely.", kr: "상황을 면밀히 지켜봐야 해요." },
      { en: "The nurse will monitor your heart rate overnight.", kr: "간호사가 밤새 심박수를 관찰할 거예요." }
    ]
  },
  {
    id: "L2-131",
    word: "neutral",
    meaning: "중립적인, 무난한(색)",
    examples: [
      { en: "I'm staying neutral in their fight.", kr: "난 걔네 싸움에서 중립을 지킬 거야." },
      { en: "I prefer neutral colors like beige and gray.", kr: "난 베이지나 회색 같은 무난한 중간색이 좋아." }
    ]
  },
  {
    id: "L2-535",
    word: "takeout",
    meaning: "포장 음식, 테이크아웃",
    examples: [
      { en: "Let's just get takeout tonight.", kr: "오늘 밤엔 그냥 포장해 와서 먹자." },
      { en: "Can I get this as takeout, please?", kr: "이거 포장으로 해 주실 수 있나요?" }
    ]
  },
  {
    id: "L2-536",
    word: "passport",
    meaning: "여권",
    examples: [
      { en: "Don't forget your passport!", kr: "여권 잊지 마!" },
      { en: "My passport expires next month, so I need a new one.", kr: "여권이 다음 달에 만료돼서 새로 만들어야 해." }
    ]
  },
  {
    id: "L2-134",
    word: "oppose",
    meaning: "반대하다",
    examples: [
      { en: "Most people I know oppose the new tax.", kr: "내 주변 사람들은 대부분 새 세금에 반대해." },
      { en: "My parents strongly opposed my decision to quit.", kr: "부모님이 내가 그만두겠다는 결정에 강하게 반대하셨어." }
    ]
  },
  {
    id: "L2-135",
    word: "participate",
    meaning: "참여하다",
    examples: [
      { en: "Everyone is encouraged to participate in the discussion.", kr: "모두 토론에 적극 참여해 주세요." },
      { en: "Did you participate in the charity run last year?", kr: "작년에 자선 달리기에 참여했어요?" }
    ]
  },
  {
    id: "L2-479",
    word: "appointment",
    meaning: "예약, 약속",
    examples: [
      { en: "I have a dentist appointment at three, so I'll leave early.", kr: "3시에 치과 예약이 있어서 일찍 나갈게요." },
      { en: "Can I make an appointment for next Tuesday?", kr: "다음 주 화요일로 예약할 수 있을까요?" }
    ]
  },
  {
    id: "L2-137",
    word: "potential",
    meaning: "잠재적인, 잠재력",
    examples: [
      { en: "I think this idea has a lot of potential.", kr: "이 아이디어 잠재력이 크다고 생각해요." },
      { en: "We're meeting a potential client tomorrow.", kr: "내일 잠재 고객을 만나요." }
    ]
  },
  {
    id: "L2-537",
    word: "ingredient",
    meaning: "재료, 성분",
    examples: [
      { en: "What ingredients do I need for this?", kr: "이거 만들려면 무슨 재료가 필요해?" },
      { en: "Are there any nuts in the ingredients? I'm allergic.", kr: "재료에 견과류 들어가요? 제가 알레르기가 있어서요." }
    ]
  },
  {
    id: "L2-139",
    word: "predict",
    meaning: "예측하다",
    examples: [
      { en: "Nobody can predict the future.", kr: "아무도 미래를 예측할 수 없어." },
      { en: "They predicted rain, so bring an umbrella.", kr: "비가 온다고 예측했으니까 우산 챙겨." }
    ]
  },
  {
    id: "L2-140",
    word: "preserve",
    meaning: "보존하다",
    examples: [
      { en: "They're trying to preserve the old buildings downtown.", kr: "시내의 오래된 건물들을 보존하려고 하고 있어요." },
      { en: "Salt helps preserve the meat longer.", kr: "소금은 고기를 더 오래 보존하는 데 도움이 돼요." }
    ]
  },
  {
    id: "L2-141",
    word: "prioritize",
    meaning: "우선순위를 정하다, 우선시하다",
    examples: [
      { en: "You need to prioritize your tasks today.", kr: "오늘 할 일의 우선순위를 정해야 해." },
      { en: "I'm trying to prioritize my health this year.", kr: "올해는 건강을 우선시하려고 해요." }
    ]
  },
  {
    id: "L2-142",
    word: "prohibit",
    meaning: "금지하다",
    examples: [
      { en: "Smoking is prohibited inside the building.", kr: "건물 안에서는 흡연이 금지돼 있어요." },
      { en: "Are pets prohibited in this apartment?", kr: "이 아파트는 반려동물이 금지예요?" }
    ]
  },
  {
    id: "L2-143",
    word: "promote",
    meaning: "승진시키다, 홍보하다, 촉진하다",
    examples: [
      { en: "She was promoted to manager last month.", kr: "그녀는 지난달에 매니저로 승진했어요." },
      { en: "We're running ads to promote the new menu.", kr: "새 메뉴를 홍보하려고 광고를 하고 있어요." }
    ]
  },
  {
    id: "L2-538",
    word: "curious",
    meaning: "궁금한, 호기심 많은",
    examples: [
      { en: "I'm curious, what made you move here?", kr: "궁금해서 그러는데, 여기로 왜 이사 왔어?" },
      { en: "Kids are naturally curious about everything.", kr: "아이들은 원래 모든 것에 호기심이 많아." }
    ]
  },
  {
    id: "L2-539",
    word: "laundry",
    meaning: "빨래, 세탁물",
    examples: [
      { en: "I have to do laundry tonight.", kr: "오늘 밤에 빨래해야 해." },
      { en: "Where's the laundry room in this building?", kr: "이 건물에 세탁실이 어디예요?" }
    ]
  },
  {
    id: "L2-146",
    word: "relevant",
    meaning: "관련된, 적절한",
    examples: [
      { en: "Do you have any relevant work experience?", kr: "관련된 업무 경험이 있으세요?" },
      { en: "That's not really relevant to what we're discussing.", kr: "그건 지금 우리가 얘기하는 거랑 별로 관련이 없어요." }
    ]
  },
  {
    id: "L2-147",
    word: "rely",
    meaning: "의지하다, 믿다",
    examples: [
      { en: "You can always rely on me.", kr: "언제든 나한테 의지해도 돼." },
      { en: "I rely on my phone for everything.", kr: "난 모든 걸 휴대폰에 의지해." }
    ]
  },
  {
    id: "L2-540",
    word: "copy",
    meaning: "복사하다, 따라 하다, 복사본",
    examples: [
      { en: "Can you make a copy of this for me?", kr: "이거 한 부 복사해 주실 수 있어요?" },
      { en: "Stop copying everything I do!", kr: "나 하는 거 다 따라 하지 마!" }
    ]
  },
  {
    id: "L2-541",
    word: "forgive",
    meaning: "용서하다",
    examples: [
      { en: "Please forgive me. I didn't mean it.", kr: "제발 용서해 줘. 일부러 그런 거 아니야." },
      { en: "I'll never forgive him for lying to me.", kr: "걔가 나한테 거짓말한 거 절대 용서 안 할 거야." }
    ]
  },
  {
    id: "L2-150",
    word: "reveal",
    meaning: "드러내다, 밝히다",
    examples: [
      { en: "He refused to reveal his source.", kr: "그는 정보 출처를 밝히기를 거부했어요." },
      { en: "Don't reveal the ending! I haven't seen it yet.", kr: "결말 밝히지 마! 아직 못 봤단 말이야." }
    ]
  },
  {
    id: "L2-151",
    word: "scheme",
    meaning: "계략, 수법, 계획",
    examples: [
      { en: "It's a get-rich-quick scheme. Don't fall for it.", kr: "그거 일확천금 사기 수법이야. 넘어가지 마." },
      { en: "He came up with a scheme to skip work.", kr: "그는 회사 빠질 계략을 꾸몄어." }
    ]
  },
  {
    id: "L2-542",
    word: "client",
    meaning: "고객, 의뢰인, 거래처",
    examples: [
      { en: "I have a meeting with a client at two.", kr: "두 시에 고객이랑 미팅 있어요." },
      { en: "Our biggest client just called.", kr: "우리 제일 큰 거래처에서 방금 전화 왔어요." }
    ]
  },
  {
    id: "L2-153",
    word: "secure",
    meaning: "안전한, 확보하다",
    examples: [
      { en: "Is this Wi-Fi connection secure?", kr: "이 와이파이 연결 안전해요?" },
      { en: "We finally secured the contract!", kr: "드디어 계약을 확보했어요!" }
    ]
  },
  {
    id: "L2-154",
    word: "shift",
    meaning: "변화, 교대 근무",
    examples: [
      { en: "There's been a big shift in how people shop.", kr: "사람들이 쇼핑하는 방식에 큰 변화가 있었어요." },
      { en: "I'm working the night shift this week.", kr: "이번 주엔 야간 교대 근무를 해요." }
    ]
  },
  {
    id: "L2-155",
    word: "substitute",
    meaning: "대체하다, 대용품",
    examples: [
      { en: "You can substitute chicken for beef in this recipe.", kr: "이 레시피에선 소고기 대신 닭고기를 써도 돼요." },
      { en: "Honey is a healthy substitute for sugar.", kr: "꿀은 설탕 대신 쓰기 좋은 건강한 대용품이에요." }
    ]
  },
  {
    id: "L2-543",
    word: "quit",
    meaning: "그만두다, 끊다",
    examples: [
      { en: "I'm thinking about quitting my job.", kr: "나 회사 그만둘까 생각 중이야." },
      { en: "My dad finally quit smoking.", kr: "우리 아빠 드디어 담배 끊으셨어." }
    ]
  },
  {
    id: "L2-157",
    word: "tolerate",
    meaning: "용인하다, 참다, 견디다",
    examples: [
      { en: "I can't tolerate rude people.", kr: "난 무례한 사람들은 못 참아." },
      { en: "My stomach can't tolerate spicy food anymore.", kr: "내 위는 이제 매운 음식을 못 견뎌." }
    ]
  },
  {
    id: "L2-158",
    word: "transfer",
    meaning: "이전하다, 이체하다, 갈아타다",
    examples: [
      { en: "I'll transfer the money to you tonight.", kr: "오늘 밤에 돈 이체해 줄게." },
      { en: "You'll need to transfer to Line 2 at the next station.", kr: "다음 역에서 2호선으로 갈아타셔야 해요." }
    ]
  },
  {
    id: "L2-159",
    word: "transform",
    meaning: "완전히 바꾸다, 변신시키다, 탈바꿈시키다",
    examples: [
      { en: "Wow, that haircut totally transformed your look!", kr: "와, 그 머리 하니까 분위기가 완전 바뀌었다!" },
      { en: "They transformed the garage into a small studio.", kr: "그들은 차고를 작은 작업실로 탈바꿈시켰어요." }
    ]
  },
  {
    id: "L2-544",
    word: "trust",
    meaning: "믿다, 신뢰하다, 신뢰",
    examples: [
      { en: "Trust me, you'll love this place.", kr: "날 믿어, 너 여기 완전 마음에 들 거야." },
      { en: "I don't really trust that website.", kr: "그 웹사이트는 별로 못 믿겠어." }
    ]
  },
  {
    id: "L2-545",
    word: "download",
    meaning: "다운로드하다, 내려받다",
    examples: [
      { en: "You can download the app for free.", kr: "그 앱 무료로 다운받을 수 있어." },
      { en: "This file is taking forever to download.", kr: "이 파일 다운받는 데 엄청 오래 걸리네." }
    ]
  },
  {
    id: "L2-162",
    word: "validate",
    meaning: "확인하다, 인정해 주다, 입증하다",
    examples: [
      { en: "Don't forget to validate your ticket before boarding.", kr: "타기 전에 개찰기에 표 찍는 거 잊지 마." },
      { en: "Sometimes you just need someone to validate your feelings.", kr: "가끔은 그냥 누군가 내 감정을 인정해 줬으면 할 때가 있잖아." }
    ]
  },
  {
    id: "L2-546",
    word: "password",
    meaning: "비밀번호",
    examples: [
      { en: "What's the Wi-Fi password?", kr: "와이파이 비밀번호가 뭐예요?" },
      { en: "I forgot my password again.", kr: "나 또 비밀번호 까먹었어." }
    ]
  },
  {
    id: "L2-164",
    word: "decline",
    meaning: "감소하다, 거절하다",
    examples: [
      { en: "Sorry, your card was declined.", kr: "죄송하지만 카드 승인이 거절됐어요." },
      { en: "Sales have been declining since last summer.", kr: "작년 여름부터 매출이 계속 감소하고 있어요." }
    ]
  },
  {
    id: "L2-165",
    word: "draft",
    meaning: "초안, 초안을 작성하다",
    examples: [
      { en: "Can you look over my first draft?", kr: "내 초안 좀 봐 줄래?" },
      { en: "I need to draft an email to the client.", kr: "고객한테 보낼 이메일 초안을 써야 해요." }
    ]
  },
  {
    id: "L2-547",
    word: "bother",
    meaning: "귀찮게 하다, 신경 쓰이게 하다",
    examples: [
      { en: "Sorry to bother you, but can I ask something?", kr: "귀찮게 해서 죄송한데, 뭐 좀 여쭤봐도 될까요?" },
      { en: "Does the noise bother you?", kr: "소음 때문에 신경 쓰이세요?" }
    ]
  },
  {
    id: "L2-167",
    word: "expel",
    meaning: "퇴학시키다, 쫓아내다",
    examples: [
      { en: "He was expelled from school for cheating.", kr: "그는 부정행위로 학교에서 퇴학당했어요." },
      { en: "If you fight again, you'll be expelled.", kr: "또 싸우면 쫓겨날 거야." }
    ]
  },
  {
    id: "L2-168",
    word: "fictional",
    meaning: "허구의, 가상의",
    examples: [
      { en: "The characters in the show are completely fictional.", kr: "그 드라마 속 인물들은 완전히 허구예요." },
      { en: "Is that town real or fictional?", kr: "그 마을은 실제로 있는 데야, 아니면 가상이야?" }
    ]
  },
  {
    id: "L2-169",
    word: "hesitate",
    meaning: "망설이다, 주저하다",
    examples: [
      { en: "Please don't hesitate to contact us.", kr: "언제든 주저하지 말고 연락 주세요." },
      { en: "She hesitated before answering my question.", kr: "그녀는 내 질문에 대답하기 전에 망설였어." }
    ]
  },
  {
    id: "L2-548",
    word: "interview",
    meaning: "면접, 인터뷰, 면접을 보다",
    examples: [
      { en: "I have a job interview tomorrow morning.", kr: "나 내일 아침에 면접 있어." },
      { en: "How did the interview go?", kr: "면접 어떻게 됐어?" }
    ]
  },
  {
    id: "L2-549",
    word: "injury",
    meaning: "부상, 상처",
    examples: [
      { en: "He missed the game because of a knee injury.", kr: "걔 무릎 부상 때문에 경기에 못 나왔어." },
      { en: "Luckily, nobody had any serious injuries.", kr: "다행히 아무도 크게 다치지 않았어." }
    ]
  },
  {
    id: "L2-550",
    word: "blame",
    meaning: "탓하다, 책임을 묻다",
    examples: [
      { en: "Don't blame me. It wasn't my fault!", kr: "나 탓하지 마. 내 잘못 아니었어!" },
      { en: "I don't blame you for being upset.", kr: "네가 속상한 것도 당연해." }
    ]
  },
  {
    id: "L2-173",
    word: "legitimate",
    meaning: "정당한, 합법적인, 진짜인",
    examples: [
      { en: "He had a legitimate complaint about the service.", kr: "그는 서비스에 대해 정당한 불만이 있었어요." },
      { en: "Is this website legitimate or a scam?", kr: "이 웹사이트 합법적인 곳이야, 아니면 사기야?" }
    ]
  },
  {
    id: "L2-174",
    word: "manipulate",
    meaning: "조종하다, 조작하다",
    examples: [
      { en: "I feel like he's trying to manipulate me.", kr: "그 사람이 날 조종하려는 것 같아." },
      { en: "The photos were clearly manipulated.", kr: "그 사진들은 확실히 조작됐어요." }
    ]
  },
  {
    id: "L2-551",
    word: "tidy",
    meaning: "깔끔한, 정돈된, 정리하다",
    examples: [
      { en: "Please tidy up your room before dinner.", kr: "저녁 먹기 전에 방 좀 치워." },
      { en: "Your desk is always so tidy.", kr: "네 책상은 항상 정말 깔끔하다." }
    ]
  },
  {
    id: "L2-176",
    word: "overwhelm",
    meaning: "압도하다, 감당 못 하게 하다",
    examples: [
      { en: "I'm totally overwhelmed with work right now.", kr: "지금 일이 너무 많아서 감당이 안 돼." },
      { en: "The view from the top just overwhelmed me.", kr: "정상에서 본 경치에 그냥 압도됐어." }
    ]
  },
  {
    id: "L2-552",
    word: "joke",
    meaning: "농담, 농담하다",
    examples: [
      { en: "Are you joking? That's way too expensive!", kr: "농담이지? 그거 너무 비싸잖아!" },
      { en: "He always tells the same jokes.", kr: "걔는 맨날 똑같은 농담만 해." }
    ]
  },
  {
    id: "L2-553",
    word: "screenshot",
    meaning: "화면 캡처, 스크린샷",
    examples: [
      { en: "Can you send me a screenshot of the error?", kr: "오류 화면 캡처해서 보내 줄래?" },
      { en: "I took a screenshot of the receipt just in case.", kr: "혹시 몰라서 영수증 캡처해 놨어." }
    ]
  },
  {
    id: "L2-554",
    word: "fever",
    meaning: "열, 발열",
    examples: [
      { en: "I think I have a fever.", kr: "나 열이 있는 것 같아." },
      { en: "Her fever went down after she took some medicine.", kr: "약 먹고 나서 걔 열이 내렸어." }
    ]
  },
  {
    id: "L2-555",
    word: "repeat",
    meaning: "반복하다, 다시 말하다",
    examples: [
      { en: "Sorry, could you repeat that?", kr: "죄송한데, 다시 한번 말씀해 주시겠어요?" },
      { en: "Don't make me repeat myself!", kr: "같은 말 두 번 하게 하지 마!" }
    ]
  },
  {
    id: "L2-181",
    word: "restrict",
    meaning: "제한하다, 한정하다",
    examples: [
      { en: "The app restricts screen time for kids.", kr: "그 앱은 아이들 화면 사용 시간을 제한해요." },
      { en: "I'm restricting sugar to lose some weight.", kr: "살 좀 빼려고 설탕을 제한하고 있어." }
    ]
  },
  {
    id: "L2-556",
    word: "paycheck",
    meaning: "월급, 급여",
    examples: [
      { en: "I'm broke until my next paycheck.", kr: "다음 월급 나올 때까지 나 빈털터리야." },
      { en: "Did you get your paycheck yet?", kr: "월급 들어왔어?" }
    ]
  },
  {
    id: "L2-557",
    word: "jealous",
    meaning: "질투하는, 부러워하는",
    examples: [
      { en: "Are you jealous of his new car?", kr: "너 걔 새 차 부러워?" },
      { en: "I'm so jealous! I want to go to Hawaii too.", kr: "완전 부럽다! 나도 하와이 가고 싶어." }
    ]
  },
  {
    id: "L2-184",
    word: "specialize",
    meaning: "전문으로 하다",
    examples: [
      { en: "This restaurant specializes in seafood.", kr: "이 식당은 해산물을 전문으로 해요." },
      { en: "What do you specialize in?", kr: "어떤 분야를 전문으로 하세요?" }
    ]
  },
  {
    id: "L2-406",
    word: "welcome",
    meaning: "환영하다, 환영받는",
    examples: [
      { en: "Welcome to the team; we're glad to have you.", kr: "팀에 오신 걸 환영해요. 함께하게 되어 기뻐요." },
      { en: "Feel free to ask; questions are always welcome.", kr: "편하게 물어보세요. 질문은 언제나 환영이에요." }
    ]
  },
  {
    id: "L2-186",
    word: "sustainable",
    meaning: "지속 가능한",
    examples: [
      { en: "I try to buy more sustainable products these days.", kr: "요즘엔 지속 가능한 제품을 더 사려고 해요." },
      { en: "Working eighty hours a week isn't sustainable.", kr: "일주일에 80시간 일하는 건 지속 가능하지 않아요." }
    ]
  },
  {
    id: "L2-187",
    word: "tempt",
    meaning: "유혹하다",
    examples: [
      { en: "Don't tempt me. I'm on a diet!", kr: "유혹하지 마. 나 다이어트 중이야!" },
      { en: "The higher salary tempted her to switch jobs.", kr: "더 높은 연봉의 유혹에 그녀는 이직하고 싶어졌어요." }
    ]
  },
  {
    id: "L2-480",
    word: "schedule",
    meaning: "일정, 스케줄, 일정을 잡다",
    examples: [
      { en: "Let me check my schedule and get back to you.", kr: "제 일정 확인해 보고 다시 연락드릴게요." },
      { en: "Can we schedule the meeting for Friday morning?", kr: "회의를 금요일 오전으로 잡을 수 있을까요?" }
    ]
  },
  {
    id: "L2-558",
    word: "sneeze",
    meaning: "재채기하다, 재채기",
    examples: [
      { en: "Sorry, I can't stop sneezing today.", kr: "미안, 오늘 재채기가 계속 나와." },
      { en: "Please cover your mouth when you sneeze.", kr: "재채기할 때는 입 좀 가려 줘." }
    ]
  },
  {
    id: "L2-559",
    word: "reschedule",
    meaning: "일정을 다시 잡다, 일정을 변경하다",
    examples: [
      { en: "Can we reschedule our meeting to next week?", kr: "회의를 다음 주로 다시 잡을 수 있을까요?" },
      { en: "My dentist appointment got rescheduled again.", kr: "치과 예약이 또 변경됐어." }
    ]
  },
  {
    id: "L2-191",
    word: "verify",
    meaning: "확인하다, 인증하다, 검증하다",
    examples: [
      { en: "Please verify your email address to continue.", kr: "계속하려면 이메일 주소를 인증해 주세요." },
      { en: "Let me verify the information before we post it.", kr: "올리기 전에 정보부터 확인할게요." }
    ]
  },
  {
    id: "L2-192",
    word: "vulnerable",
    meaning: "취약한, 무방비한, 상처받기 쉬운",
    examples: [
      { en: "Older people are more vulnerable to the flu.", kr: "어르신들은 독감에 더 취약해요." },
      { en: "I felt really vulnerable after sharing my story.", kr: "내 얘기를 털어놓고 나니까 완전히 무방비해진 기분이었어." }
    ]
  },
  {
    id: "L2-193",
    word: "withdraw",
    meaning: "인출하다, 철회하다",
    examples: [
      { en: "I need to withdraw some cash from the ATM.", kr: "ATM에서 현금 좀 인출해야 해." },
      { en: "He withdrew his offer at the last minute.", kr: "그는 마지막 순간에 제안을 철회했어." }
    ]
  },
  {
    id: "L2-560",
    word: "hug",
    meaning: "안다, 포옹, 포옹하다",
    examples: [
      { en: "Come here and give me a hug!", kr: "이리 와서 한번 안아 줘!" },
      { en: "We hugged and said goodbye at the airport.", kr: "우리는 공항에서 포옹하고 작별 인사를 했어." }
    ]
  },
  {
    id: "L2-195",
    word: "allegedly",
    meaning: "듣기로는, (주장·혐의에 따르면) ~했다고 하는",
    examples: [
      { en: "He allegedly stole money from the company.", kr: "그가 회사 돈을 훔쳤다는 혐의를 받고 있대." },
      { en: "Allegedly, the restaurant is closing next month.", kr: "듣기로는 그 식당이 다음 달에 문 닫는대." }
    ]
  },
  {
    id: "L2-196",
    word: "conscious",
    meaning: "의식하는, 의식이 있는",
    examples: [
      { en: "I'm very conscious of my weight these days.", kr: "요즘 몸무게를 많이 의식하고 있어." },
      { en: "Was he conscious when the ambulance arrived?", kr: "구급차가 왔을 때 그 사람 의식이 있었어요?" }
    ]
  },
  {
    id: "L2-561",
    word: "leftovers",
    meaning: "남은 음식, 먹다 남은 것",
    examples: [
      { en: "Want to finish the leftovers from last night?", kr: "어젯밤에 남은 음식 마저 먹을래?" },
      { en: "Can I take the leftovers home?", kr: "남은 음식 싸 가도 될까요?" }
    ]
  },
  {
    id: "L2-198",
    word: "mandatory",
    meaning: "의무적인, 필수의",
    examples: [
      { en: "Attendance at the safety meeting is mandatory.", kr: "안전 회의 참석은 필수예요." },
      { en: "Is it mandatory to wear a helmet here?", kr: "여기서 헬멧 쓰는 게 의무예요?" }
    ]
  },
  {
    id: "L2-199",
    word: "necessity",
    meaning: "필수품, 필요성",
    examples: [
      { en: "Is a car a luxury or a necessity for you?", kr: "너한테 차는 사치품이야, 필수품이야?" },
      { en: "Coffee is a necessity for me in the morning.", kr: "아침엔 커피가 나한테 필수품이야." }
    ]
  },
  {
    id: "L2-200",
    word: "obvious",
    meaning: "분명한, 뻔한",
    examples: [
      { en: "Isn't it obvious? She likes you!", kr: "뻔하지 않아? 그녀가 너 좋아하잖아!" },
      { en: "The answer seems obvious, but it's not.", kr: "답이 뻔해 보이지만 그렇지 않아요." }
    ]
  }
];

const wordsLevel2_Part3 = [
  {
    id: "L2-562",
    word: "stairs",
    meaning: "계단",
    examples: [
      { en: "Let's take the stairs, the elevator is packed.", kr: "계단으로 가자, 엘리베이터 꽉 찼어." },
      { en: "I almost fell down the stairs this morning.", kr: "오늘 아침에 계단에서 넘어질 뻔했어." }
    ]
  },
  {
    id: "L2-202",
    word: "overlap",
    meaning: "겹치다, 중복되다",
    examples: [
      { en: "Our meetings overlap, so I can't make both.", kr: "회의 시간이 겹쳐서 둘 다는 못 가요." },
      { en: "Your job and mine overlap a lot, don't they?", kr: "네 일이랑 내 일이 많이 겹치지 않아?" }
    ]
  },
  {
    id: "L2-203",
    word: "panel",
    meaning: "패널, 토론자단, 판",
    examples: [
      { en: "I'm speaking on a panel at the conference next week.", kr: "다음 주 학회에서 패널 토론자로 나가요." },
      { en: "We're thinking about putting solar panels on our roof.", kr: "우리 집 지붕에 태양광 패널을 달까 생각 중이에요." }
    ]
  },
  {
    id: "L2-204",
    word: "pose",
    meaning: "(위험 등을) 초래하다, (질문을) 제기하다, 포즈를 취하다",
    examples: [
      { en: "Does this storm pose any risk to our flight?", kr: "이 폭풍이 우리 비행기에 위험이 될까요?" },
      { en: "Okay, everyone pose for the picture and smile!", kr: "자, 다들 사진 찍게 포즈 잡고 웃어!" }
    ]
  },
  {
    id: "L2-563",
    word: "ticket",
    meaning: "표, 티켓, (교통) 딱지",
    examples: [
      { en: "Did you already buy the movie tickets?", kr: "영화표 벌써 샀어?" },
      { en: "I got a parking ticket again today.", kr: "나 오늘 또 주차 딱지 뗐어." }
    ]
  },
  {
    id: "L2-206",
    word: "profound",
    meaning: "깊은, 심오한",
    examples: [
      { en: "That movie had a profound effect on me.", kr: "그 영화는 나한테 깊은 영향을 줬어." },
      { en: "Wow, that's a pretty profound thing to say.", kr: "와, 꽤 심오한 말인데." }
    ]
  },
  {
    id: "L2-207",
    word: "prompt",
    meaning: "~하게 하다, 촉발하다, 즉각적인",
    examples: [
      { en: "What prompted you to quit your job?", kr: "뭐 때문에 회사를 그만두게 된 거예요?" },
      { en: "Thanks for the prompt reply; I really appreciate it.", kr: "빨리 답장해 주셔서 정말 감사해요." }
    ]
  },
  {
    id: "L2-208",
    word: "qualify",
    meaning: "자격을 얻다, 자격이 되다",
    examples: [
      { en: "Do I qualify for the student discount?", kr: "저도 학생 할인 받을 자격이 되나요?" },
      { en: "She finally qualified as a nurse last year.", kr: "그녀는 작년에 드디어 간호사 자격을 땄어요." }
    ]
  },
  {
    id: "L2-407",
    word: "absolutely",
    meaning: "완전히, 정말, 물론이죠",
    examples: [
      { en: "You're absolutely right about the deadline.", kr: "마감에 대해서는 당신 말이 전적으로 맞아요." },
      { en: "The food at the wedding was absolutely delicious.", kr: "결혼식 음식이 정말 더할 나위 없이 맛있었어요." }
    ]
  },
  {
    id: "L2-564",
    word: "memory",
    meaning: "기억, 추억, 기억력",
    examples: [
      { en: "I have a really bad memory for names.", kr: "나 이름 진짜 잘 못 외워." },
      { en: "That trip is still my favorite memory.", kr: "그 여행이 아직도 내 최고의 추억이야." }
    ]
  },
  {
    id: "L2-211",
    word: "refer",
    meaning: "언급하다, 가리키다, 참고하다",
    examples: [
      { en: "Wait, who exactly are you referring to?", kr: "잠깐, 정확히 누구 얘기하는 거야?" },
      { en: "Feel free to refer to your notes during the talk.", kr: "발표하는 동안 메모 참고해도 괜찮아요." }
    ]
  },
  {
    id: "L2-408",
    word: "additional",
    meaning: "추가의, 부가적인",
    examples: [
      { en: "There is an additional fee for extra luggage.", kr: "초과 수하물에는 추가 요금이 붙습니다." },
      { en: "Is there an additional charge for delivery?", kr: "배달하면 추가 요금 있어요?" }
    ]
  },
  {
    id: "L2-213",
    word: "reluctant",
    meaning: "꺼리는, 마지못해 하는",
    examples: [
      { en: "She was reluctant to admit her mistake.", kr: "그녀는 자기 실수를 인정하기 꺼렸어요." },
      { en: "I'm a bit reluctant to lend him money again.", kr: "그 사람한테 또 돈 빌려주기는 좀 꺼려져요." }
    ]
  },
  {
    id: "L2-565",
    word: "apartment",
    meaning: "아파트, (공동주택의) 집",
    examples: [
      { en: "Is your apartment close to the station?", kr: "너희 집 역에서 가까워?" },
      { en: "We just moved into a new apartment last month.", kr: "우리 지난달에 새 집으로 이사했어." }
    ]
  },
  {
    id: "L2-215",
    word: "restrain",
    meaning: "억누르다, 참다, 제지하다",
    examples: [
      { en: "I had to restrain myself from laughing during the meeting.", kr: "회의 중에 웃음 참느라 혼났어요." },
      { en: "Can you restrain your dog? He's jumping on everyone.", kr: "개 좀 붙잡아 줄래요? 사람들한테 막 뛰어오르잖아요." }
    ]
  },
  {
    id: "L2-216",
    word: "rigid",
    meaning: "엄격한, 융통성 없는, 딱딱한",
    examples: [
      { en: "My boss is so rigid about the dress code.", kr: "우리 상사는 복장 규정에 너무 융통성이 없어." },
      { en: "The schedule is too rigid; can we make it more flexible?", kr: "일정이 너무 딱딱하게 정해져 있어요. 좀 더 유연하게 할 수 있을까요?" }
    ]
  },
  {
    id: "L2-217",
    word: "sequence",
    meaning: "순서, 연속, (영화의) 장면",
    examples: [
      { en: "Please put the pictures in the correct sequence.", kr: "사진들을 올바른 순서대로 놓아 주세요." },
      { en: "I loved the opening sequence of that movie.", kr: "그 영화 오프닝 장면 정말 좋았어." }
    ]
  },
  {
    id: "L2-566",
    word: "crowded",
    meaning: "붐비는, 혼잡한, 사람이 많은",
    examples: [
      { en: "The subway is so crowded at this hour.", kr: "이 시간엔 지하철이 너무 붐벼." },
      { en: "Let's go somewhere less crowded; I can't hear you.", kr: "좀 덜 붐비는 데로 가자, 네 말이 안 들려." }
    ]
  },
  {
    id: "L2-219",
    word: "specify",
    meaning: "명시하다, 구체적으로 말하다",
    examples: [
      { en: "You didn't specify a size, so I got you a medium.", kr: "사이즈를 말 안 해서 그냥 미디엄으로 샀어." },
      { en: "Did they specify a time for the delivery?", kr: "배송 시간을 구체적으로 정해 줬어요?" }
    ]
  },
  {
    id: "L2-220",
    word: "static",
    meaning: "정적인, 변화 없는, (전파) 잡음",
    examples: [
      { en: "The radio's full of static; I can't hear anything.", kr: "라디오에 잡음이 너무 심해서 하나도 안 들려." },
      { en: "My salary has been static for three years.", kr: "내 월급은 3년째 그대로야." }
    ]
  },
  {
    id: "L2-409",
    word: "immediately",
    meaning: "즉시, 바로",
    examples: [
      { en: "Please call me immediately if anything goes wrong.", kr: "문제가 생기면 즉시 전화 주세요." },
      { en: "I recognized her immediately when she walked in.", kr: "그녀가 들어오자마자 바로 알아봤어요." }
    ]
  },
  {
    id: "L2-222",
    word: "supplement",
    meaning: "보충하다, 영양제, 보충제",
    examples: [
      { en: "She takes a vitamin C supplement every morning.", kr: "그녀는 매일 아침 비타민 C 영양제를 먹어요." },
      { en: "I drive for a delivery app to supplement my income.", kr: "수입을 보충하려고 배달 앱으로 운전 일을 해요." }
    ]
  },
  {
    id: "L2-223",
    word: "suspend",
    meaning: "중단하다, 정지시키다, 정학시키다",
    examples: [
      { en: "The game was suspended due to heavy rain.", kr: "폭우 때문에 경기가 중단됐어요." },
      { en: "He got suspended from school for fighting.", kr: "걔 싸워서 정학 당했어." }
    ]
  },
  {
    id: "L2-224",
    word: "tendency",
    meaning: "경향, 성향",
    examples: [
      { en: "He has a tendency to procrastinate.", kr: "그는 일을 미루는 경향이 있어요." },
      { en: "I have a tendency to talk too fast when I'm nervous.", kr: "저는 긴장하면 말이 너무 빨라지는 경향이 있어요." }
    ]
  },
  {
    id: "L2-410",
    word: "significant",
    meaning: "상당한, 중요한, 의미 있는",
    examples: [
      { en: "That's a significant price difference. Let's get the cheaper one.", kr: "가격 차이가 꽤 크네요. 더 싼 걸로 해요." },
      { en: "So, are you bringing your significant other to the party?", kr: "그래서, 파티에 애인 데려올 거야?" }
    ]
  },
  {
    id: "L2-567",
    word: "split",
    meaning: "나누다, (비용을) 나눠 내다, 헤어지다(split up)",
    examples: [
      { en: "Should we split the bill or take turns paying?", kr: "우리 나눠서 낼까, 아니면 번갈아 가며 낼까?" },
      { en: "Did you hear? Jake and Mia split up last week.", kr: "들었어? 제이크랑 미아 지난주에 헤어졌대." }
    ]
  },
  {
    id: "L2-227",
    word: "viable",
    meaning: "실행 가능한, 현실성 있는",
    examples: [
      { en: "Is that really a viable option for us?", kr: "그게 우리한테 정말 실행 가능한 방법일까?" },
      { en: "Without more funding, the business just isn't viable.", kr: "자금이 더 없으면 그 사업은 현실성이 없어요." }
    ]
  },
  {
    id: "L2-568",
    word: "wash",
    meaning: "씻다, 빨다, 설거지하다",
    examples: [
      { en: "Can you wash the dishes tonight?", kr: "오늘 밤에 설거지 좀 해줄래?" },
      { en: "Go wash your hands before dinner.", kr: "저녁 먹기 전에 손 씻고 와." }
    ]
  },
  {
    id: "L2-229",
    word: "accompany",
    meaning: "동행하다, 함께 가다, 동반하다",
    examples: [
      { en: "Kids under twelve need to be accompanied by an adult, sir.", kr: "12세 미만 아이는 보호자가 동반해야 해요, 손님." },
      { en: "Would you like me to accompany you to the hospital?", kr: "병원까지 같이 가 드릴까요?" }
    ]
  },
  {
    id: "L2-230",
    word: "acknowledge",
    meaning: "인정하다, 아는 척하다",
    examples: [
      { en: "He finally acknowledged that he was wrong.", kr: "그는 결국 자기가 틀렸다고 인정했어요." },
      { en: "She didn't even acknowledge me when I said hi.", kr: "내가 인사했는데 그녀는 아는 척도 안 했어." }
    ]
  },
  {
    id: "L2-411",
    word: "recommend",
    meaning: "추천하다, 권하다",
    examples: [
      { en: "Can you recommend a good restaurant near the hotel?", kr: "호텔 근처에 괜찮은 식당 추천해 주실 수 있어요?" },
      { en: "The doctor recommended that I get more exercise.", kr: "의사가 저에게 운동을 더 하라고 권했어요." }
    ]
  },
  {
    id: "L2-232",
    word: "confidential",
    meaning: "기밀의, 비밀의",
    examples: [
      { en: "Keep this confidential, okay? I haven't told anyone else.", kr: "이거 비밀로 해 줘, 알았지? 아직 아무한테도 말 안 했어." },
      { en: "Don't worry, everything you tell me here is confidential.", kr: "걱정 마세요, 여기서 말씀하시는 건 전부 비밀이 보장돼요." }
    ]
  },
  {
    id: "L2-233",
    word: "contrast",
    meaning: "대조, 차이, 대조를 이루다",
    examples: [
      { en: "There's such a contrast between city life and country life.", kr: "도시 생활이랑 시골 생활은 정말 대조적이에요." },
      { en: "In contrast to last year, sales are way up.", kr: "작년과는 대조적으로 매출이 확 늘었어요." }
    ]
  },
  {
    id: "L2-234",
    word: "coordinate",
    meaning: "조율하다, 조정하다, 협력하다",
    examples: [
      { en: "We need to coordinate with the other team first.", kr: "먼저 다른 팀이랑 조율해야 해요." },
      { en: "She coordinates schedules for all the executives.", kr: "그녀가 임원들 일정을 전부 조율해요." }
    ]
  },
  {
    id: "L2-235",
    word: "dedicate",
    meaning: "바치다, 헌신하다",
    examples: [
      { en: "She's so dedicated; she's always the first one in the office.", kr: "그녀는 정말 헌신적이야, 항상 사무실에 제일 먼저 와." },
      { en: "I'd like to dedicate this song to my mom.", kr: "이 노래를 엄마께 바치고 싶어요." }
    ]
  },
  {
    id: "L2-236",
    word: "devote",
    meaning: "(시간·노력을) 쏟다, 바치다, 전념하다",
    examples: [
      { en: "I want to devote more time to my family this year.", kr: "올해는 가족한테 시간을 더 쏟고 싶어요." },
      { en: "I devote a few hours every day to exercise.", kr: "저는 매일 몇 시간씩 운동에 할애해요." }
    ]
  },
  {
    id: "L2-237",
    word: "dispose",
    meaning: "(of와 함께) 처리하다, 버리다",
    examples: [
      { en: "Where can I dispose of these old batteries?", kr: "이 폐건전지는 어디에 버리면 돼요?" },
      { en: "Please dispose of your trash before leaving the room.", kr: "방에서 나가기 전에 쓰레기를 버려 주세요." }
    ]
  },
  {
    id: "L2-238",
    word: "duration",
    meaning: "지속 기간, (~하는) 동안",
    examples: [
      { en: "What's the total duration of the course?", kr: "그 강좌 총 기간이 얼마나 돼요?" },
      { en: "She slept for the entire duration of the flight.", kr: "그녀는 비행하는 동안 내내 잠만 잤어요." }
    ]
  },
  {
    id: "L2-239",
    word: "exceed",
    meaning: "초과하다, 넘어서다",
    examples: [
      { en: "Your bag can't exceed twenty-three kilograms.", kr: "가방은 23킬로그램을 초과하면 안 돼요." },
      { en: "Honestly, the hotel exceeded all my expectations.", kr: "솔직히 그 호텔은 기대를 훨씬 넘어섰어요." }
    ]
  },
  {
    id: "L2-240",
    word: "exhibit",
    meaning: "전시하다, (증상·특징을) 보이다",
    examples: [
      { en: "My friend is exhibiting her paintings at a café downtown.", kr: "친구가 시내 카페에서 자기 그림을 전시하고 있어." },
      { en: "Has he exhibited any other symptoms?", kr: "다른 증상을 보인 적 있나요?" }
    ]
  },
  {
    id: "L2-412",
    word: "agree",
    meaning: "동의하다, 합의하다",
    examples: [
      { en: "I agree with you about the new design.", kr: "새 디자인에 대해서는 당신 의견에 동의해요." },
      { en: "Okay, so we agreed on seven o'clock, right?", kr: "좋아, 그럼 7시로 하기로 한 거 맞지?" }
    ]
  },
  {
    id: "L2-569",
    word: "sleepy",
    meaning: "졸린",
    examples: [
      { en: "I always get sleepy after lunch.", kr: "나 점심 먹고 나면 항상 졸려." },
      { en: "You look sleepy, did you stay up late?", kr: "너 졸려 보인다, 늦게 잤어?" }
    ]
  },
  {
    id: "L2-243",
    word: "foundation",
    meaning: "기초, 재단, 파운데이션(화장품)",
    examples: [
      { en: "Trust is the foundation of any good relationship.", kr: "신뢰는 모든 좋은 관계의 기초예요." },
      { en: "What foundation shade do you use? Your skin looks great.", kr: "파운데이션 몇 호 써? 피부 진짜 좋아 보여." }
    ]
  },
  {
    id: "L2-244",
    word: "inevitable",
    meaning: "피할 수 없는, 불가피한",
    examples: [
      { en: "Honestly, a little arguing is inevitable when you live with roommates.", kr: "솔직히 룸메이트랑 살면 조금 다투는 건 어쩔 수 없어." },
      { en: "With this traffic, being late is inevitable.", kr: "이렇게 막히면 지각은 피할 수 없겠다." }
    ]
  },
  {
    id: "L2-245",
    word: "inspect",
    meaning: "검사하다, 점검하다, 살펴보다",
    examples: [
      { en: "Security will inspect your bag at the entrance.", kr: "입구에서 보안 요원이 가방을 검사할 거예요." },
      { en: "Inspect the car carefully before you rent it.", kr: "렌트하기 전에 차를 꼼꼼히 점검하세요." }
    ]
  },
  {
    id: "L2-246",
    word: "instruct",
    meaning: "지시하다, 알려 주다",
    examples: [
      { en: "The nurse instructed me not to eat before the test.", kr: "간호사가 검사 전에 아무것도 먹지 말라고 지시했어요." },
      { en: "Just do as the guide instructs, and you'll be fine.", kr: "가이드가 지시하는 대로만 하면 괜찮을 거예요." }
    ]
  },
  {
    id: "L2-413",
    word: "statement",
    meaning: "명세서, 진술, 성명",
    examples: [
      { en: "Wait, is that a question or a statement?", kr: "잠깐, 그거 질문이야 아니면 그냥 하는 말이야?" },
      { en: "Check your bank statement for any strange charges.", kr: "은행 거래 명세서에 이상한 결제가 없는지 확인해 봐." }
    ]
  },
  {
    id: "L2-248",
    word: "internal",
    meaning: "내부의, 체내의",
    examples: [
      { en: "This is just an internal memo, so don't share it.", kr: "이건 내부 메모일 뿐이니까 공유하지 마." },
      { en: "The doctors are checking him for internal bleeding.", kr: "의사들이 그 사람한테 내출혈이 있는지 확인하고 있어요." }
    ]
  },
  {
    id: "L2-249",
    word: "locate",
    meaning: "(위치를) 찾아내다, ~에 위치하다",
    examples: [
      { en: "I'm trying to locate my lost luggage. Can you help me?", kr: "잃어버린 짐을 찾고 있는데 좀 도와주시겠어요?" },
      { en: "Our office is located right next to the subway station.", kr: "저희 사무실은 지하철역 바로 옆에 위치해 있어요." }
    ]
  },
  {
    id: "L2-414",
    word: "ability",
    meaning: "능력, 재능",
    examples: [
      { en: "Wow, you have an amazing ability to remember names.", kr: "와, 너 이름 기억하는 능력 진짜 대단하다." },
      { en: "I'll do it to the best of my ability, I promise.", kr: "제 능력이 닿는 데까지 최선을 다할게요, 약속해요." }
    ]
  },
  {
    id: "L2-251",
    word: "mature",
    meaning: "성숙한, 어른스러운",
    examples: [
      { en: "She's very mature for her age.", kr: "그 애는 나이에 비해 정말 성숙해요." },
      { en: "Come on, try to be a little more mature about this.", kr: "에이, 이 일은 좀 더 어른스럽게 받아들여 봐." }
    ]
  },
  {
    id: "L2-252",
    word: "modify",
    meaning: "수정하다, 변경하다",
    examples: [
      { en: "Can I modify my order? No onions, please.", kr: "주문 좀 수정할 수 있을까요? 양파 빼 주세요." },
      { en: "We need to modify the design slightly.", kr: "디자인을 조금 수정해야 해요." }
    ]
  },
  {
    id: "L2-253",
    word: "multiple",
    meaning: "여러, 다수의",
    examples: [
      { en: "I've called him multiple times, but he won't pick up.", kr: "걔한테 여러 번 전화했는데 안 받아." },
      { en: "You can select multiple answers on this form.", kr: "이 양식에서는 답을 여러 개 고를 수 있어요." }
    ]
  },
  {
    id: "L2-570",
    word: "tip",
    meaning: "팁, 조언, 팁을 주다",
    examples: [
      { en: "How much should we tip here?", kr: "여기 팁 얼마 줘야 돼?" },
      { en: "Thanks for the tip, that really helped.", kr: "조언 고마워, 진짜 도움 됐어." }
    ]
  },
  {
    id: "L2-415",
    word: "definitely",
    meaning: "확실히, 분명히, 꼭",
    examples: [
      { en: "I'll definitely be there by seven.", kr: "7시까지는 꼭 갈게." },
      { en: "This is definitely the best pizza in town.", kr: "이건 확실히 이 동네에서 제일 맛있는 피자야." }
    ]
  },
  {
    id: "L2-256",
    word: "occupy",
    meaning: "차지하다, 사용 중이다, 점령하다",
    examples: [
      { en: "Excuse me, is this seat occupied?", kr: "실례지만 이 자리 사용 중인가요?" },
      { en: "The sofa occupies too much space in the room.", kr: "소파가 방에서 공간을 너무 많이 차지해요." }
    ]
  },
  {
    id: "L2-571",
    word: "commute",
    meaning: "통근하다, 출퇴근(길)",
    examples: [
      { en: "How long is your commute to work?", kr: "출근하는 데 얼마나 걸려?" },
      { en: "I commute by subway, so I usually read on the way.", kr: "지하철로 출퇴근해서 보통 가는 길에 책 읽어." }
    ]
  },
  {
    id: "L2-258",
    word: "parallel",
    meaning: "평행한, 나란한, 유사점",
    examples: [
      { en: "I'm terrible at parallel parking. Can you do it?", kr: "나 평행 주차 진짜 못해. 네가 해 줄래?" },
      { en: "I see a lot of parallels between our two situations.", kr: "우리 둘 상황에 유사한 점이 많은 것 같아." }
    ]
  },
  {
    id: "L2-416",
    word: "knowledge",
    meaning: "지식, 알고 있음",
    examples: [
      { en: "Wow, your knowledge of wine is really impressive.", kr: "와, 너 와인에 대해 진짜 많이 안다." },
      { en: "To my knowledge, the meeting hasn't been canceled.", kr: "제가 알기로는 회의가 취소되지 않았어요." }
    ]
  },
  {
    id: "L2-417",
    word: "claim",
    meaning: "주장하다, (보험금 등의) 청구",
    examples: [
      { en: "He claims he never received the email.", kr: "그는 그 이메일을 받은 적이 없다고 주장해요." },
      { en: "I filed an insurance claim after the accident.", kr: "사고 후에 보험금 청구를 했어요." }
    ]
  },
  {
    id: "L2-572",
    word: "scared",
    meaning: "무서워하는, 겁먹은, 걱정되는",
    examples: [
      { en: "I'm scared of dogs, so please keep yours on a leash.", kr: "제가 개를 무서워해서요, 목줄 좀 채워 주세요." },
      { en: "Don't be scared; the doctor is really gentle.", kr: "겁먹지 마, 의사 선생님 진짜 살살 해 주셔." }
    ]
  },
  {
    id: "L2-262",
    word: "previous",
    meaning: "이전의",
    examples: [
      { en: "Do you have any previous experience in sales?", kr: "이전에 영업 경험 있으세요?" },
      { en: "I liked the previous version of the app better.", kr: "그 앱 이전 버전이 더 좋았어." }
    ]
  },
  {
    id: "L2-263",
    word: "priority",
    meaning: "우선순위",
    examples: [
      { en: "Safety is our top priority.", kr: "안전이 저희의 최우선 순위예요." },
      { en: "My family is my priority right now.", kr: "지금은 가족이 제 우선순위예요." }
    ]
  },
  {
    id: "L2-418",
    word: "opportunity",
    meaning: "기회",
    examples: [
      { en: "This internship is a great opportunity to learn.", kr: "이 인턴십은 배울 수 있는 좋은 기회예요." },
      { en: "Don't miss this opportunity; it might not come again.", kr: "이 기회 놓치지 마, 다시 안 올 수도 있어." }
    ]
  },
  {
    id: "L2-265",
    word: "quote",
    meaning: "인용하다, 견적(을 내다)",
    examples: [
      { en: "Can you give me a quote for painting the kitchen?", kr: "부엌 페인트칠 견적 좀 내 주실 수 있어요?" },
      { en: "Don't quote me on that, but I think it's true.", kr: "확실한 건 아니니까 내 말이라고 옮기진 마, 근데 맞는 것 같아." }
    ]
  },
  {
    id: "L2-266",
    word: "random",
    meaning: "무작위의, 임의의, 낯선",
    examples: [
      { en: "The winner was chosen at random.", kr: "당첨자는 무작위로 뽑혔어요." },
      { en: "A random guy just asked me for my number.", kr: "웬 모르는 남자가 방금 내 번호를 물어봤어." }
    ]
  },
  {
    id: "L2-267",
    word: "range",
    meaning: "범위, 다양하다",
    examples: [
      { en: "The prices range from $10 to $50.", kr: "가격은 10달러에서 50달러까지 해요." },
      { en: "The store carries a wide range of products.", kr: "그 가게는 정말 다양한 제품을 팔아요." }
    ]
  },
  {
    id: "L2-268",
    word: "release",
    meaning: "개봉하다, 공개하다, 놓다(풀어 주다)",
    examples: [
      { en: "The film will be released next month.", kr: "그 영화는 다음 달에 개봉해요." },
      { en: "Don't release the brake until I tell you.", kr: "내가 말할 때까지 브레이크 놓지 마." }
    ]
  },
  {
    id: "L2-419",
    word: "regular",
    meaning: "규칙적인, 정기적인, 단골",
    examples: [
      { en: "Regular exercise really helps me handle stress at work.", kr: "규칙적인 운동은 직장 스트레스를 다스리는 데 정말 도움이 돼요." },
      { en: "He's a regular at the coffee shop downstairs.", kr: "그 사람은 아래층 커피숍 단골이에요." }
    ]
  },
  {
    id: "L2-420",
    word: "annual",
    meaning: "연간의, 매년의, 연례의",
    examples: [
      { en: "Our annual company picnic is next Saturday.", kr: "우리 회사의 연례 야유회가 다음 주 토요일이에요." },
      { en: "What is your annual salary before taxes?", kr: "세전 연봉이 얼마예요?" }
    ]
  },
  {
    id: "L2-271",
    word: "reverse",
    meaning: "후진하다, 뒤집다, 반대(의)",
    examples: [
      { en: "Can you reverse into that parking spot? I'll guide you.", kr: "저 주차 자리에 후진으로 넣을 수 있어? 내가 봐 줄게." },
      { en: "It was the reverse of what I expected; he was super nice.", kr: "내가 예상한 거랑 정반대였어, 그 사람 엄청 친절했어." }
    ]
  },
  {
    id: "L2-272",
    word: "route",
    meaning: "경로, 길, 노선",
    examples: [
      { en: "Which route are you taking to the airport?", kr: "공항까지 어느 길로 갈 거야?" },
      { en: "Does this bus route still run after midnight?", kr: "이 버스 노선 자정 이후에도 다녀요?" }
    ]
  },
  {
    id: "L2-421",
    word: "degree",
    meaning: "학위, (온도·각도의) 도, 정도",
    examples: [
      { en: "She has a degree in computer science.", kr: "그녀는 컴퓨터 공학 학위가 있어요." },
      { en: "It's going to be ninety degrees tomorrow.", kr: "내일은 기온이 화씨 90도까지 올라간대요." }
    ]
  },
  {
    id: "L2-422",
    word: "insurance",
    meaning: "보험",
    examples: [
      { en: "Does your insurance cover dental work?", kr: "보험에서 치과 치료도 보장돼요?" },
      { en: "Don't forget to buy travel insurance before your trip.", kr: "여행 가기 전에 여행자 보험 드는 거 잊지 마." }
    ]
  },
  {
    id: "L2-423",
    word: "majority",
    meaning: "대다수, 과반수",
    examples: [
      { en: "The majority of my friends are already married.", kr: "내 친구들 대부분은 벌써 결혼했어." },
      { en: "Okay, majority wins. We're getting pizza tonight.", kr: "좋아, 다수결이야. 오늘 밤은 피자 먹자." }
    ]
  },
  {
    id: "L2-424",
    word: "opinion",
    meaning: "의견, 견해",
    examples: [
      { en: "In my opinion, we should wait until next month.", kr: "제 의견으로는 다음 달까지 기다려야 할 것 같아요." },
      { en: "I'd like to hear your honest opinion about the design.", kr: "디자인에 대한 솔직한 의견을 듣고 싶어요." }
    ]
  },
  {
    id: "L2-425",
    word: "successful",
    meaning: "성공한, 성공적인",
    examples: [
      { en: "Congrats! I heard the surgery was successful.", kr: "축하해! 수술이 성공적으로 끝났다며." },
      { en: "She runs a successful bakery in her neighborhood.", kr: "그녀는 동네에서 성공한 빵집을 운영하고 있어요." }
    ]
  },
  {
    id: "L2-426",
    word: "effort",
    meaning: "노력, 수고",
    examples: [
      { en: "Thanks for all your effort on this project.", kr: "이 프로젝트에 쏟아 준 노력에 감사해요." },
      { en: "It takes a lot of effort to learn a new language.", kr: "새 언어를 배우는 데는 많은 노력이 들어요." }
    ]
  },
  {
    id: "L2-427",
    word: "lack",
    meaning: "부족, ~이 부족하다",
    examples: [
      { en: "Sorry I'm grumpy; it's just a lack of sleep.", kr: "짜증 내서 미안, 그냥 잠이 부족해서 그래." },
      { en: "Our new intern doesn't lack confidence at all.", kr: "우리 새 인턴은 자신감이 전혀 부족하지 않아요." }
    ]
  },
  {
    id: "L2-280",
    word: "uniform",
    meaning: "유니폼, 제복, 균일한",
    examples: [
      { en: "Do you have to wear a uniform at work?", kr: "직장에서 유니폼 입어야 해요?" },
      { en: "Let's keep the font uniform across all the slides.", kr: "모든 슬라이드에서 글꼴을 균일하게 맞추자." }
    ]
  },
  {
    id: "L2-428",
    word: "latest",
    meaning: "최신의, 가장 최근의, (at the latest) 늦어도",
    examples: [
      { en: "Have you seen the latest version of the app?", kr: "그 앱 최신 버전 봤어요?" },
      { en: "Please submit the report by Friday at the latest.", kr: "늦어도 금요일까지는 보고서를 제출해 주세요." }
    ]
  },
  {
    id: "L2-282",
    word: "vision",
    meaning: "시력, 시야, 비전",
    examples: [
      { en: "My vision gets blurry when I'm tired.", kr: "피곤하면 시야가 흐려져요." },
      { en: "I really like the CEO's vision for the company.", kr: "대표님이 그리는 회사의 비전이 정말 마음에 들어요." }
    ]
  },
  {
    id: "L2-283",
    word: "welfare",
    meaning: "복지",
    examples: [
      { en: "We should think about the welfare of the animals.", kr: "동물들의 복지도 생각해야 해요." },
      { en: "Is the company doing enough for employee welfare?", kr: "회사가 직원 복지에 충분히 신경 쓰고 있을까요?" }
    ]
  },
  {
    id: "L2-284",
    word: "accommodate",
    meaning: "수용하다, (요구를) 들어주다",
    examples: [
      { en: "Can you accommodate a group of ten tonight?", kr: "오늘 밤 열 명 단체 받으실 수 있어요?" },
      { en: "We'll do our best to accommodate your request.", kr: "요청하신 대로 해 드릴 수 있도록 최선을 다할게요." }
    ]
  },
  {
    id: "L2-285",
    word: "anticipate",
    meaning: "예상하다, 예측하다",
    examples: [
      { en: "We don't anticipate any delays, but I'll keep you posted.", kr: "지연은 없을 거라 예상하지만 계속 알려 드릴게요." },
      { en: "I didn't anticipate this much traffic on a Sunday.", kr: "일요일에 차가 이렇게 막힐 줄은 예상 못 했어." }
    ]
  },
  {
    id: "L2-286",
    word: "authorize",
    meaning: "승인하다, 허가하다",
    examples: [
      { en: "Only the manager can authorize a refund.", kr: "환불은 매니저만 승인할 수 있어요." },
      { en: "Did you authorize this charge on your card?", kr: "이 카드 결제 직접 승인하신 거 맞아요?" }
    ]
  },
  {
    id: "L2-287",
    word: "component",
    meaning: "구성 요소, 부품",
    examples: [
      { en: "Trust is a key component of a good relationship.", kr: "신뢰는 좋은 관계의 핵심 구성 요소예요." },
      { en: "Can I just replace that one component instead?", kr: "그 부품 하나만 교체하면 안 될까요?" }
    ]
  },
  {
    id: "L2-573",
    word: "cashier",
    meaning: "계산원, 캐셔",
    examples: [
      { en: "The cashier gave me the wrong change.", kr: "계산원이 거스름돈을 잘못 줬어." },
      { en: "I worked as a cashier in college.", kr: "나 대학 때 계산원 알바했어." }
    ]
  },
  {
    id: "L2-289",
    word: "curriculum",
    meaning: "교육 과정, 커리큘럼",
    examples: [
      { en: "What's on the curriculum this semester?", kr: "이번 학기 커리큘럼에 뭐 있어?" },
      { en: "She designed the curriculum for the online course.", kr: "그녀가 그 온라인 강좌의 커리큘럼을 짰어요." }
    ]
  },
  {
    id: "L2-290",
    word: "deduct",
    meaning: "공제하다, 빼다",
    examples: [
      { en: "They deduct taxes straight from my paycheck.", kr: "세금은 내 월급에서 바로 공제돼." },
      { en: "They'll deduct the damage from your deposit.", kr: "파손된 부분은 보증금에서 빼고 돌려줄 거예요." }
    ]
  },
  {
    id: "L2-291",
    word: "deploy",
    meaning: "배치하다, 파병하다, (시스템을) 배포하다",
    examples: [
      { en: "We're deploying the update to all users tonight.", kr: "오늘 밤 모든 사용자에게 업데이트를 배포할 거예요." },
      { en: "My brother's unit is being deployed overseas next month.", kr: "우리 형 부대가 다음 달에 해외로 파병된대." }
    ]
  },
  {
    id: "L2-292",
    word: "dynamic",
    meaning: "역동적인, 활기찬",
    examples: [
      { en: "I like working here; the atmosphere is really dynamic.", kr: "여기서 일하는 거 좋아요, 분위기가 정말 활기차요." },
      { en: "She's a dynamic speaker who always grabs the audience.", kr: "그녀는 늘 청중을 사로잡는 역동적인 연사예요." }
    ]
  },
  {
    id: "L2-429",
    word: "protect",
    meaning: "보호하다, 지키다",
    examples: [
      { en: "Wear sunscreen to protect your skin from the sun.", kr: "햇볕으로부터 피부를 보호하려면 선크림을 발라." },
      { en: "I'm just trying to protect you; that guy is bad news.", kr: "난 그냥 널 지켜 주려는 거야, 그 남자 질이 안 좋아." }
    ]
  },
  {
    id: "L2-294",
    word: "exclusively",
    meaning: "오로지, ~전용으로, 독점적으로",
    examples: [
      { en: "This offer is exclusively for our members.", kr: "이 혜택은 오로지 회원 전용이에요." },
      { en: "I've been working exclusively from home since March.", kr: "3월부터 오로지 재택으로만 일하고 있어요." }
    ]
  },
  {
    id: "L2-430",
    word: "senior",
    meaning: "고위의, 선임의, 어르신",
    examples: [
      { en: "He was promoted to senior manager last year.", kr: "그는 작년에 선임 매니저로 승진했어요." },
      { en: "The museum offers discounts for seniors and students.", kr: "그 박물관은 어르신과 학생에게 할인을 해 줘요." }
    ]
  },
  {
    id: "L2-296",
    word: "fundamentally",
    meaning: "근본적으로",
    examples: [
      { en: "We fundamentally disagree on this, and that's okay.", kr: "우리는 이 문제에 근본적으로 생각이 달라, 그래도 괜찮아." },
      { en: "Moving abroad fundamentally changed how I see things.", kr: "해외로 이사하면서 세상을 보는 방식이 근본적으로 바뀌었어요." }
    ]
  },
  {
    id: "L2-297",
    word: "guarantee",
    meaning: "보장하다, 장담하다, 보증",
    examples: [
      { en: "I can't guarantee it'll be ready by Friday.", kr: "금요일까지 준비된다고 장담은 못 해요." },
      { en: "Does this come with a money-back guarantee?", kr: "이거 환불 보증 되나요?" }
    ]
  },
  {
    id: "L2-298",
    word: "immune",
    meaning: "면역이 있는, 영향을 받지 않는",
    examples: [
      { en: "I had chickenpox as a kid, so I'm immune.", kr: "어렸을 때 수두를 앓아서 면역이 있어요." },
      { en: "After years in sales, I'm immune to rejection.", kr: "영업 몇 년 하다 보니 거절에는 면역이 됐어요." }
    ]
  },
  {
    id: "L2-299",
    word: "index",
    meaning: "지수, 색인, 검지(index finger)",
    examples: [
      { en: "Did you see the stock index today? It's way up.", kr: "오늘 주가 지수 봤어? 엄청 올랐어." },
      { en: "I cut my index finger while I was cooking.", kr: "요리하다가 검지를 베였어." }
    ]
  },
  {
    id: "L2-431",
    word: "address",
    meaning: "주소, (문제를) 다루다, 해결하다",
    examples: [
      { en: "Could you send me your email address?", kr: "이메일 주소 좀 보내 주실래요?" },
      { en: "We need to address this problem before it gets worse.", kr: "더 악화되기 전에 이 문제를 해결해야 해요." }
    ]
  }
];

const wordsLevel2_Part4 = [
  {
    id: "L2-432",
    word: "analysis",
    meaning: "분석",
    examples: [
      { en: "Okay, enough analysis; let's just pick a restaurant.", kr: "자, 분석은 그만하고 그냥 식당 고르자." },
      { en: "Can you send me your analysis of the sales numbers?", kr: "매출 수치 분석한 거 좀 보내 줄래요?" }
    ]
  },
  {
    id: "L2-302",
    word: "isolate",
    meaning: "격리하다, 고립시키다, 분리하다",
    examples: [
      { en: "If you test positive, you'll need to isolate for five days.", kr: "양성이 나오면 5일 동안 격리해야 해요." },
      { en: "Working from home can feel really isolating sometimes.", kr: "재택근무는 가끔 정말 고립된 느낌이 들어요." }
    ]
  },
  {
    id: "L2-303",
    word: "likewise",
    meaning: "마찬가지로, 저도요",
    examples: [
      { en: "Likewise! It's great to finally meet you in person.", kr: "저도요! 드디어 직접 만나서 반가워요." },
      { en: "He apologized to me, and I did likewise.", kr: "그가 나한테 사과해서 나도 마찬가지로 사과했어." }
    ]
  },
  {
    id: "L2-433",
    word: "choose",
    meaning: "고르다, 선택하다",
    examples: [
      { en: "It's hard to choose between these two hotels.", kr: "이 두 호텔 중에서 고르기가 어려워요." },
      { en: "You can choose any seat you like.", kr: "원하는 자리를 아무 데나 선택하시면 돼요." }
    ]
  },
  {
    id: "L2-305",
    word: "maximize",
    meaning: "극대화하다, 최대한 활용하다, (창을) 최대화하다",
    examples: [
      { en: "Can you maximize the window? I can't read the text.", kr: "창 좀 최대화해 줄래? 글씨가 안 보여." },
      { en: "How can I maximize my time on a short trip?", kr: "짧은 여행에서 시간을 최대한 활용하려면 어떻게 해야 할까요?" }
    ]
  },
  {
    id: "L2-306",
    word: "minimum",
    meaning: "최소, 최소한의",
    examples: [
      { en: "Is there a minimum order for free delivery?", kr: "무료 배송받으려면 최소 주문 금액이 있나요?" },
      { en: "Please keep the noise to a minimum after 10 p.m.", kr: "밤 10시 이후에는 소음을 최소한으로 줄여 주세요." }
    ]
  },
  {
    id: "L2-307",
    word: "neglect",
    meaning: "소홀히 하다, 방치하다",
    examples: [
      { en: "I've been neglecting my health lately.", kr: "요즘 건강을 너무 소홀히 했어요." },
      { en: "Don't neglect your friends just because you're busy.", kr: "바쁘다고 친구들한테 소홀하면 안 돼." }
    ]
  },
  {
    id: "L2-434",
    word: "competition",
    meaning: "경쟁, 대회",
    examples: [
      { en: "There's a lot of competition for this position.", kr: "이 자리는 경쟁이 아주 치열해요." },
      { en: "My daughter won first prize in a singing competition.", kr: "딸이 노래 대회에서 1등을 했어요." }
    ]
  },
  {
    id: "L2-309",
    word: "ongoing",
    meaning: "진행 중인, 계속되는",
    examples: [
      { en: "This is an ongoing problem; we need a real fix.", kr: "이건 계속되는 문제라서 제대로 된 해결책이 필요해요." },
      { en: "Sorry, I can't comment; it's an ongoing investigation.", kr: "죄송하지만 진행 중인 수사라서 말씀드릴 수 없어요." }
    ]
  },
  {
    id: "L2-310",
    word: "oversee",
    meaning: "감독하다, 관리하다",
    examples: [
      { en: "Who's going to oversee the project while you're away?", kr: "자리 비우신 동안 프로젝트는 누가 감독해요?" },
      { en: "My job is to oversee the daily operations here.", kr: "제 일은 여기 일상 운영을 관리하는 거예요." }
    ]
  },
  {
    id: "L2-435",
    word: "detail",
    meaning: "세부 사항, 자세한 내용",
    examples: [
      { en: "Please send me the details of your flight.", kr: "항공편 세부 사항을 보내 주세요." },
      { en: "She always pays attention to every small detail.", kr: "그녀는 항상 작은 세부 사항 하나하나에 신경 써요." }
    ]
  },
  {
    id: "L2-481",
    word: "mistake",
    meaning: "실수, 잘못",
    examples: [
      { en: "Sorry, I think there's a mistake on my bill.", kr: "죄송한데, 계산서에 뭔가 잘못된 것 같아요." },
      { en: "Don't worry, everyone makes mistakes on their first day.", kr: "걱정 마, 첫날엔 다들 실수해." }
    ]
  },
  {
    id: "L2-313",
    word: "persuade",
    meaning: "설득하다",
    examples: [
      { en: "Can you persuade him to change his mind?", kr: "그 사람 마음 바꾸게 좀 설득해 줄 수 있어요?" },
      { en: "My friends finally persuaded me to try skydiving.", kr: "친구들이 결국 날 설득해서 스카이다이빙을 해 보게 됐어." }
    ]
  },
  {
    id: "L2-436",
    word: "damage",
    meaning: "손상, 피해, 손상시키다",
    examples: [
      { en: "Did the movers damage anything during the move?", kr: "이사 업체가 짐 옮기면서 뭐 망가뜨린 거 있어?" },
      { en: "Too much sun can damage your eyes.", kr: "햇빛을 너무 많이 쬐면 눈이 손상될 수 있어요." }
    ]
  },
  {
    id: "L2-574",
    word: "fridge",
    meaning: "냉장고",
    examples: [
      { en: "There's some pizza in the fridge if you're hungry.", kr: "배고프면 냉장고에 피자 있어." },
      { en: "Can you put the milk back in the fridge?", kr: "우유 냉장고에 다시 넣어줄래?" }
    ]
  },
  {
    id: "L2-437",
    word: "doubt",
    meaning: "의심, 의심하다, ~일 것 같지 않다",
    examples: [
      { en: "I doubt he'll arrive on time in this traffic.", kr: "이렇게 막히는데 걔 제시간에 못 올 것 같아." },
      { en: "If you're in doubt, ask your manager.", kr: "확신이 서지 않으면 매니저에게 물어보세요." }
    ]
  },
  {
    id: "L2-438",
    word: "notice",
    meaning: "알아차리다, 통지, 공지",
    examples: [
      { en: "Did you notice anything strange about his behavior?", kr: "그의 행동에서 이상한 점을 알아차렸어요?" },
      { en: "Sorry for the short notice, but can we meet tomorrow instead?", kr: "갑자기 말해서 미안한데, 대신 내일 만날 수 있을까?" }
    ]
  },
  {
    id: "L2-318",
    word: "protocol",
    meaning: "규약, 절차, 규정",
    examples: [
      { en: "What's the protocol if someone gets hurt at work?", kr: "회사에서 누가 다치면 어떤 절차를 따라야 해요?" },
      { en: "Sorry, it's protocol; I need to see your ID.", kr: "죄송하지만 규정상 신분증을 확인해야 해요." }
    ]
  },
  {
    id: "L2-319",
    word: "rational",
    meaning: "합리적인, 이성적인",
    examples: [
      { en: "Let's try to make a rational decision, not an emotional one.", kr: "감정적으로 말고 이성적으로 결정해 보자." },
      { en: "That's not a rational reason to quit your job.", kr: "그건 회사를 그만둘 합리적인 이유가 아니야." }
    ]
  },
  {
    id: "L2-320",
    word: "recover",
    meaning: "회복하다, 되찾다, 복구하다",
    examples: [
      { en: "It took me months to fully recover from surgery.", kr: "수술 후 완전히 회복하는 데 몇 달 걸렸어요." },
      { en: "Can you help me recover my deleted files?", kr: "삭제된 파일 복구하는 것 좀 도와줄래요?" }
    ]
  },
  {
    id: "L2-439",
    word: "overall",
    meaning: "전반적인, 전반적으로, 전체의",
    examples: [
      { en: "Overall, the trip was a great success.", kr: "전반적으로 그 여행은 대성공이었어요." },
      { en: "What's the overall cost of the project?", kr: "그 프로젝트의 전체 비용이 얼마예요?" }
    ]
  },
  {
    id: "L2-440",
    word: "explain",
    meaning: "설명하다",
    examples: [
      { en: "Could you explain how this machine works?", kr: "이 기계가 어떻게 작동하는지 설명해 주실래요?" },
      { en: "Let me explain why we changed the plan.", kr: "우리가 왜 계획을 바꿨는지 설명할게요." }
    ]
  },
  {
    id: "L2-441",
    word: "effective",
    meaning: "효과적인, (법·규정이) 시행되는",
    examples: [
      { en: "This medicine is very effective for headaches.", kr: "이 약은 두통에 아주 효과적이에요." },
      { en: "The new rules are effective starting Monday, so heads up.", kr: "새 규칙은 월요일부터 적용되니까 참고해." }
    ]
  },
  {
    id: "L2-442",
    word: "advice",
    meaning: "조언, 충고",
    examples: [
      { en: "Can I ask you for some advice about my career?", kr: "제 진로에 대해 조언 좀 구해도 될까요?" },
      { en: "My best advice is to start saving money early.", kr: "내가 해 줄 수 있는 최고의 조언은 일찍부터 저축을 시작하라는 거야." }
    ]
  },
  {
    id: "L2-443",
    word: "agreement",
    meaning: "합의, 협정, 의견 일치",
    examples: [
      { en: "So do we have an agreement? You cook, I'll do the dishes.", kr: "그럼 합의 된 거지? 네가 요리하고 내가 설거지할게." },
      { en: "We're in agreement that the deadline is too tight.", kr: "우리는 마감이 너무 빠듯하다는 데 의견이 일치해요." }
    ]
  },
  {
    id: "L2-444",
    word: "challenge",
    meaning: "도전, 어려운 일, 이의를 제기하다",
    examples: [
      { en: "Moving to a new city was a big challenge for me.", kr: "새 도시로 이사하는 건 저에게 큰 도전이었어요." },
      { en: "Don't be afraid to challenge your boss's ideas.", kr: "상사의 생각에 이의를 제기하는 걸 두려워하지 마." }
    ]
  },
  {
    id: "L2-445",
    word: "responsible",
    meaning: "책임이 있는, 담당하는, 책임감 있는",
    examples: [
      { en: "Who is responsible for ordering office supplies?", kr: "사무용품 주문은 누가 담당해요?" },
      { en: "She's a very responsible student who never misses class.", kr: "그녀는 수업을 한 번도 빠지지 않는 아주 책임감 있는 학생이에요." }
    ]
  },
  {
    id: "L2-446",
    word: "avoid",
    meaning: "피하다, 방지하다",
    examples: [
      { en: "Let's leave early to avoid the rush-hour traffic.", kr: "출퇴근 시간 교통 체증을 피하려면 일찍 출발하자." },
      { en: "Try to avoid eating late at night.", kr: "밤늦게 먹는 건 피하도록 해 봐." }
    ]
  },
  {
    id: "L2-329",
    word: "shrink",
    meaning: "줄어들다, 축소되다",
    examples: [
      { en: "My sweater shrank when I washed it in hot water.", kr: "뜨거운 물에 빨았더니 스웨터가 줄어들었어." },
      { en: "Our team keeps shrinking, but the work doesn't.", kr: "팀은 계속 줄어드는데 일은 안 줄어." }
    ]
  },
  {
    id: "L2-447",
    word: "environment",
    meaning: "환경",
    examples: [
      { en: "We all need to do more to protect the environment.", kr: "우리 모두 환경을 보호하기 위해 더 노력해야 해요." },
      { en: "I work best in a quiet environment.", kr: "저는 조용한 환경에서 일이 가장 잘 돼요." }
    ]
  },
  {
    id: "L2-331",
    word: "stabilize",
    meaning: "안정시키다, 안정되다",
    examples: [
      { en: "His condition has stabilized after the operation.", kr: "수술 후에 그의 상태가 안정됐어요." },
      { en: "I hope prices stabilize after the holidays.", kr: "연휴 지나면 물가가 좀 안정되면 좋겠어요." }
    ]
  },
  {
    id: "L2-448",
    word: "executive",
    meaning: "임원, 경영진, 경영의",
    examples: [
      { en: "My sister's an executive at a big tech company.", kr: "우리 언니 큰 IT 회사 임원이야." },
      { en: "The executive team will announce the decision tomorrow.", kr: "경영진이 내일 결정을 발표할 거예요." }
    ]
  },
  {
    id: "L2-449",
    word: "therefore",
    meaning: "그러므로, 따라서",
    examples: [
      { en: "The flight got canceled, and therefore we're stuck here overnight.", kr: "비행기가 취소됐어, 그래서 우리 여기서 하룻밤 꼼짝없이 있어야 해." },
      { en: "The budget's been cut; therefore, we'll need to delay the launch.", kr: "예산이 삭감됐어요. 그래서 출시를 미뤄야 해요." }
    ]
  },
  {
    id: "L2-575",
    word: "thirsty",
    meaning: "목마른",
    examples: [
      { en: "I'm so thirsty, can I get some water?", kr: "나 너무 목말라, 물 좀 마셔도 돼?" },
      { en: "Aren't you thirsty after that long walk?", kr: "그렇게 오래 걸었는데 목 안 말라?" }
    ]
  },
  {
    id: "L2-335",
    word: "summary",
    meaning: "요약",
    examples: [
      { en: "In summary, we need more time and more money.", kr: "요약하자면, 시간이랑 돈이 더 필요해요." },
      { en: "Please give me a quick summary of the meeting.", kr: "회의 내용 간단히 요약해 주세요." }
    ]
  },
  {
    id: "L2-450",
    word: "accept",
    meaning: "받아들이다, 수락하다, 받다",
    examples: [
      { en: "We accept both cash and credit cards.", kr: "저희는 현금과 신용카드 모두 받습니다." },
      { en: "She accepted the job offer right away.", kr: "그녀는 그 일자리 제안을 바로 수락했어요." }
    ]
  },
  {
    id: "L2-337",
    word: "target",
    meaning: "목표, 대상, 목표로 하다",
    examples: [
      { en: "Our target market is young adults.", kr: "우리 목표 시장은 젊은 성인층이에요." },
      { en: "Are we still on target to finish by Friday?", kr: "우리 아직 금요일까지 끝낸다는 목표대로 가고 있어요?" }
    ]
  },
  {
    id: "L2-451",
    word: "attempt",
    meaning: "시도, 시도하다",
    examples: [
      { en: "He passed the driving test on his first attempt.", kr: "그는 첫 시도에 운전면허 시험에 합격했어요." },
      { en: "Please don't attempt to fix the printer yourself.", kr: "프린터를 직접 고치려고 시도하지 마세요." }
    ]
  },
  {
    id: "L2-339",
    word: "theory",
    meaning: "이론, 가설",
    examples: [
      { en: "I have a theory about why he quit.", kr: "걔가 왜 그만뒀는지 나 나름의 가설이 있어." },
      { en: "In theory, this plan should work perfectly.", kr: "이론상으로는 이 계획이 완벽하게 통해야 해요." }
    ]
  },
  {
    id: "L2-452",
    word: "exchange",
    meaning: "교환하다, 환전하다, 교환",
    examples: [
      { en: "Can I exchange this shirt for a larger size?", kr: "이 셔츠를 더 큰 사이즈로 교환할 수 있을까요?" },
      { en: "Where can I exchange dollars for local currency?", kr: "달러를 현지 통화로 어디서 환전할 수 있어요?" }
    ]
  },
  {
    id: "L2-453",
    word: "demand",
    meaning: "수요, 요구, 요구하다",
    examples: [
      { en: "There's high demand for electric cars these days.", kr: "요즘 전기차 수요가 높아요." },
      { en: "The angry customer demanded a full refund.", kr: "화가 난 고객은 전액 환불을 요구했어요." }
    ]
  },
  {
    id: "L2-454",
    word: "investment",
    meaning: "투자, 투자금",
    examples: [
      { en: "Buying a good laptop is a smart investment.", kr: "좋은 노트북을 사는 건 현명한 투자예요." },
      { en: "How much was your initial investment in the café?", kr: "카페 처음 차릴 때 투자금 얼마나 들었어?" }
    ]
  },
  {
    id: "L2-455",
    word: "solution",
    meaning: "해결책, 해법",
    examples: [
      { en: "We need to find a solution before the client arrives.", kr: "고객이 도착하기 전에 해결책을 찾아야 해요." },
      { en: "Working from home was the perfect solution for my family.", kr: "재택근무는 우리 가족에게 완벽한 해결책이었어요." }
    ]
  },
  {
    id: "L2-344",
    word: "volume",
    meaning: "음량, 볼륨, 양",
    examples: [
      { en: "Can you turn the volume down a little?", kr: "볼륨 좀 줄여 줄래?" },
      { en: "We've had a huge volume of orders this week.", kr: "이번 주에 주문량이 엄청 많았어요." }
    ]
  },
  {
    id: "L2-576",
    word: "excuse",
    meaning: "핑계, 변명, 용서하다",
    examples: [
      { en: "That's not a good excuse for being late.", kr: "그건 늦은 거에 대한 핑계가 안 돼." },
      { en: "Excuse me, is this seat taken?", kr: "저기요, 여기 자리 있어요?" }
    ]
  },
  {
    id: "L2-456",
    word: "worry",
    meaning: "걱정하다, 걱정",
    examples: [
      { en: "Don't worry; I'll take care of everything.", kr: "걱정 마, 내가 다 알아서 할게." },
      { en: "My biggest worry is finding a place to live.", kr: "제 가장 큰 걱정은 살 곳을 구하는 거예요." }
    ]
  },
  {
    id: "L2-347",
    word: "access",
    meaning: "접근, 이용 권한, 접속하다",
    examples: [
      { en: "Do you have access to the shared drive?", kr: "공유 드라이브 접근 권한 있어요?" },
      { en: "How can I access my email account?", kr: "제 이메일 계정에 어떻게 접속하죠?" }
    ]
  },
  {
    id: "L2-457",
    word: "critical",
    meaning: "매우 중요한, 비판적인, 위독한",
    examples: [
      { en: "It's critical that we leave by six, or we'll miss the train.", kr: "6시까지는 꼭 출발해야 해, 안 그러면 기차 놓쳐." },
      { en: "Don't be so critical of yourself; you did fine.", kr: "너무 자신한테 엄격하게 굴지 마, 잘했어." }
    ]
  },
  {
    id: "L2-349",
    word: "alter",
    meaning: "바꾸다, 변경하다, (옷을) 수선하다",
    examples: [
      { en: "Can you alter these pants? They're a bit long.", kr: "이 바지 수선해 주실 수 있어요? 좀 길어서요." },
      { en: "Nothing will alter my decision at this point.", kr: "이제 와서 뭐가 있어도 제 결정은 안 바뀌어요." }
    ]
  },
  {
    id: "L2-350",
    word: "analogy",
    meaning: "비유, 유사점",
    examples: [
      { en: "Let me use an analogy to explain it.", kr: "비유를 들어서 설명해 볼게요." },
      { en: "That's a good analogy; now I finally get it.", kr: "좋은 비유네요, 이제야 이해가 돼요." }
    ]
  },
  {
    id: "L2-351",
    word: "aware",
    meaning: "알고 있는, 자각하는",
    examples: [
      { en: "Are you aware that the store closes early today?", kr: "오늘 가게 일찍 닫는 거 알고 계세요?" },
      { en: "I'm well aware that I made a mistake.", kr: "제가 실수한 거 잘 알고 있어요." }
    ]
  },
  {
    id: "L2-577",
    word: "delivery",
    meaning: "배달, 배송",
    examples: [
      { en: "How long does delivery usually take?", kr: "배송은 보통 얼마나 걸려요?" },
      { en: "Let's just order delivery tonight; I'm too tired to cook.", kr: "오늘 밤엔 그냥 배달시키자, 너무 피곤해서 요리 못 하겠어." }
    ]
  },
  {
    id: "L2-578",
    word: "mirror",
    meaning: "거울",
    examples: [
      { en: "Can I check my hair in the mirror real quick?", kr: "거울 보고 머리 좀 빨리 확인해도 돼?" },
      { en: "The bathroom mirror is all foggy.", kr: "화장실 거울에 김이 잔뜩 서렸어." }
    ]
  },
  {
    id: "L2-354",
    word: "context",
    meaning: "맥락, 상황, 전후 사정",
    examples: [
      { en: "You took my words out of context.", kr: "내 말을 맥락 다 빼고 받아들였잖아." },
      { en: "Can you give me a little more context?", kr: "전후 사정을 좀 더 설명해 줄래요?" }
    ]
  },
  {
    id: "L2-355",
    word: "contract",
    meaning: "계약, 계약서",
    examples: [
      { en: "I just signed a two-year contract for my apartment.", kr: "아파트 2년 계약을 막 했어요." },
      { en: "Did you read the contract before signing it?", kr: "서명하기 전에 계약서 읽어 봤어?" }
    ]
  },
  {
    id: "L2-458",
    word: "realize",
    meaning: "깨닫다, 알아차리다, 실현하다",
    examples: [
      { en: "I didn't realize it was already midnight.", kr: "벌써 자정이 된 줄 미처 깨닫지 못했어." },
      { en: "She finally realized her dream of opening a café.", kr: "그녀는 마침내 카페를 여는 꿈을 실현했어요." }
    ]
  },
  {
    id: "L2-459",
    word: "separate",
    meaning: "따로따로의, 별개의, 분리하다",
    examples: [
      { en: "Could we get separate checks, please?", kr: "계산서를 따로따로 주시겠어요?" },
      { en: "Please separate the plastic from the paper.", kr: "플라스틱과 종이를 분리해 주세요." }
    ]
  },
  {
    id: "L2-460",
    word: "budget",
    meaning: "예산",
    examples: [
      { en: "We're already over budget on this project.", kr: "이 프로젝트는 벌써 예산을 초과했어요." },
      { en: "I'm looking for a hotel that fits my budget.", kr: "제 예산에 맞는 호텔을 찾고 있어요." }
    ]
  },
  {
    id: "L2-461",
    word: "benefit",
    meaning: "혜택, 이익, ~에 도움이 되다",
    examples: [
      { en: "The job comes with great health benefits.", kr: "그 직장은 의료 혜택이 아주 좋아요." },
      { en: "Walking every day can benefit your heart.", kr: "매일 걸으면 심장에 도움이 될 수 있어요." }
    ]
  },
  {
    id: "L2-462",
    word: "afford",
    meaning: "(~할) 여유가 있다, 감당하다",
    examples: [
      { en: "I'd love to go, but I can't afford it this month.", kr: "가고 싶은데 이번 달은 그럴 여유가 없어." },
      { en: "We can't afford to make any mistakes on this deal.", kr: "이번 거래에서는 실수할 여유가 전혀 없어요." }
    ]
  },
  {
    id: "L2-361",
    word: "economy",
    meaning: "경제, 경기, 이코노미석",
    examples: [
      { en: "How's the economy affecting your business these days?", kr: "요즘 경기가 사업에 어떤 영향을 주고 있어요?" },
      { en: "I always fly economy to save money.", kr: "돈 아끼려고 항상 이코노미석 타요." }
    ]
  },
  {
    id: "L2-579",
    word: "yawn",
    meaning: "하품하다, 하품",
    examples: [
      { en: "Stop yawning, you're making me sleepy too.", kr: "하품 그만해, 나까지 졸리잖아." },
      { en: "Sorry, that yawn wasn't about you.", kr: "미안, 그 하품은 너 때문이 아니야." }
    ]
  },
  {
    id: "L2-463",
    word: "supply",
    meaning: "공급하다, 공급, 용품",
    examples: [
      { en: "The hotel supplies towels, so don't pack any.", kr: "호텔에서 수건 주니까 챙기지 마." },
      { en: "We're running low on office supplies.", kr: "사무용품이 다 떨어져 가요." }
    ]
  },
  {
    id: "L2-364",
    word: "estimate",
    meaning: "추정하다, 견적, 추정치",
    examples: [
      { en: "Can you give me a rough estimate for the repairs?", kr: "수리비 대략적인 견적 좀 내 주실 수 있어요?" },
      { en: "I estimate it'll take about two hours to get there.", kr: "제 추정으로는 거기까지 두 시간쯤 걸릴 거예요." }
    ]
  },
  {
    id: "L2-580",
    word: "chore",
    meaning: "집안일, 귀찮은 일",
    examples: [
      { en: "How do you and your roommate divide the chores?", kr: "너랑 룸메이트는 집안일 어떻게 나눠?" },
      { en: "Grocery shopping feels like such a chore after work.", kr: "퇴근하고 장 보는 건 진짜 귀찮은 일 같아." }
    ]
  },
  {
    id: "L2-366",
    word: "export",
    meaning: "수출하다, (파일을) 내보내다, 수출품",
    examples: [
      { en: "These Korean snacks are exported all over the world now.", kr: "이 한국 과자 요즘 전 세계로 수출돼." },
      { en: "Can you export this file as a PDF?", kr: "이 파일 PDF로 내보내 줄 수 있어요?" }
    ]
  },
  {
    id: "L2-464",
    word: "option",
    meaning: "선택지, 선택권, 옵션",
    examples: [
      { en: "We have two options: wait here or take a taxi.", kr: "우리에겐 두 가지 선택지가 있어. 여기서 기다리거나 택시를 타거나." },
      { en: "Is there a vegetarian option on the menu?", kr: "메뉴에 채식 옵션이 있나요?" }
    ]
  },
  {
    id: "L2-368",
    word: "finance",
    meaning: "자금을 대다, 금융, 재정",
    examples: [
      { en: "How are you planning to finance your new car?", kr: "새 차 살 자금은 어떻게 마련할 계획이에요?" },
      { en: "She works in finance at a big bank.", kr: "그녀는 대형 은행에서 금융 쪽 일을 해요." }
    ]
  },
  {
    id: "L2-369",
    word: "formula",
    meaning: "공식, 비결, 분유",
    examples: [
      { en: "There's no magic formula for losing weight.", kr: "살 빼는 데 마법 같은 공식은 없어요." },
      { en: "Does this baby formula need to be warmed up?", kr: "이 분유 데워야 해요?" }
    ]
  },
  {
    id: "L2-370",
    word: "function",
    meaning: "기능, 작동하다, 제 기능을 하다",
    examples: [
      { en: "What's the function of this button?", kr: "이 버튼은 무슨 기능이에요?" },
      { en: "I can't function without my morning coffee.", kr: "아침 커피 없으면 제 기능을 못 해요." }
    ]
  },
  {
    id: "L2-465",
    word: "handle",
    meaning: "다루다, 처리하다, 손잡이",
    examples: [
      { en: "She handles customer complaints very professionally.", kr: "그녀는 고객 불만을 아주 전문적으로 처리해요." },
      { en: "The handle on the door is broken.", kr: "문 손잡이가 고장 났어요." }
    ]
  },
  {
    id: "L2-372",
    word: "income",
    meaning: "소득, 수입",
    examples: [
      { en: "It's hard to live on just one income.", kr: "한 사람 수입만으로 살기는 힘들어요." },
      { en: "Do I need to report this side income?", kr: "이 부수입도 신고해야 하나요?" }
    ]
  },
  {
    id: "L2-466",
    word: "improve",
    meaning: "개선하다, 향상시키다, 나아지다",
    examples: [
      { en: "I want to improve my English speaking skills.", kr: "영어 말하기 실력을 향상시키고 싶어요." },
      { en: "Her health has improved a lot since last month.", kr: "그녀의 건강은 지난달 이후로 많이 나아졌어요." }
    ]
  },
  {
    id: "L2-374",
    word: "individual",
    meaning: "개인의, 개별의, 사람",
    examples: [
      { en: "We offer both group and individual lessons.", kr: "단체 수업이랑 개인 수업 둘 다 있어요." },
      { en: "He's a strange individual, isn't he?", kr: "그 사람 좀 특이한 사람이지 않아?" }
    ]
  },
  {
    id: "L2-467",
    word: "prevent",
    meaning: "막다, 예방하다",
    examples: [
      { en: "Washing your hands helps prevent the spread of colds.", kr: "손을 씻으면 감기 확산을 예방하는 데 도움이 돼요." },
      { en: "Heavy snow prevented us from leaving the hotel.", kr: "폭설 때문에 우리는 호텔을 떠나지 못했어요." }
    ]
  },
  {
    id: "L2-468",
    word: "advantage",
    meaning: "이점, 장점, 유리함",
    examples: [
      { en: "One advantage of this job is the flexible schedule.", kr: "이 일의 장점 중 하나는 유연한 근무 시간이에요." },
      { en: "Let's take advantage of the sale this weekend.", kr: "이번 주말 세일을 잘 활용하자." }
    ]
  },
  {
    id: "L2-377",
    word: "issue",
    meaning: "문제, 사안, 발급하다",
    examples: [
      { en: "Is there an issue with my order?", kr: "제 주문에 무슨 문제 있나요?" },
      { en: "They issued me a new card after I lost mine.", kr: "카드를 잃어버려서 새 카드를 발급해 줬어요." }
    ]
  },
  {
    id: "L2-378",
    word: "labor",
    meaning: "노동, 인건비, 진통",
    examples: [
      { en: "The repair cost is mostly labor, not parts.", kr: "수리비는 부품보다 대부분 인건비예요." },
      { en: "She went into labor at two in the morning.", kr: "그녀는 새벽 2시에 진통이 시작됐어요." }
    ]
  },
  {
    id: "L2-379",
    word: "legal",
    meaning: "법적인, 합법적인",
    examples: [
      { en: "Is it legal to park here overnight?", kr: "여기 밤새 주차해도 합법이에요?" },
      { en: "You should get legal advice before you sign that.", kr: "그거 서명하기 전에 법률 상담을 받아 봐." }
    ]
  },
  {
    id: "L2-482",
    word: "deserve",
    meaning: "~할 자격이 있다, ~을 받을 만하다",
    examples: [
      { en: "You worked so hard. You totally deserve this promotion.", kr: "정말 열심히 일했잖아요. 이번 승진은 충분히 받을 만해요." },
      { en: "After this week, I deserve a long nap.", kr: "이번 주 보내고 나니까 나 낮잠 길게 잘 자격 있어." }
    ]
  },
  {
    id: "L2-469",
    word: "influence",
    meaning: "영향, 영향을 미치다",
    examples: [
      { en: "My father had a big influence on my career.", kr: "아버지는 제 진로에 큰 영향을 주셨어요." },
      { en: "Don't let him influence your decision.", kr: "그 사람이 네 결정에 영향 주게 두지 마." }
    ]
  },
  {
    id: "L2-382",
    word: "method",
    meaning: "방법, 방식",
    examples: [
      { en: "What's the best method for learning English?", kr: "영어를 배우는 가장 좋은 방법이 뭐예요?" },
      { en: "What payment methods do you accept?", kr: "어떤 결제 방법을 받으세요?" }
    ]
  },
  {
    id: "L2-470",
    word: "progress",
    meaning: "진전, 진행, 발전",
    examples: [
      { en: "We're making good progress on the new website.", kr: "새 웹사이트 작업이 좋은 진전을 보이고 있어요." },
      { en: "The meeting is in progress, so please wait outside.", kr: "회의가 진행 중이니 밖에서 기다려 주세요." }
    ]
  },
  {
    id: "L2-384",
    word: "percent",
    meaning: "퍼센트, 백분율",
    examples: [
      { en: "Only ten percent of the applicants were accepted.", kr: "지원자 중에 10퍼센트만 합격했어요." },
      { en: "Do I need to leave a 20 percent tip here?", kr: "여기서 팁을 20퍼센트 남겨야 해요?" }
    ]
  },
  {
    id: "L2-471",
    word: "proud",
    meaning: "자랑스러운, 자부심을 느끼는",
    examples: [
      { en: "I'm so proud of you for finishing the marathon.", kr: "마라톤을 완주하다니 네가 정말 자랑스러워." },
      { en: "He's proud of the small business he built.", kr: "그는 자신이 일군 작은 사업에 자부심을 갖고 있어요." }
    ]
  },
  {
    id: "L2-472",
    word: "skill",
    meaning: "기술, 능력, 솜씨",
    examples: [
      { en: "Wow, your drawing skills are amazing!", kr: "와, 너 그림 실력 대단하다!" },
      { en: "Cooking is a useful skill when you live alone.", kr: "혼자 살 때 요리는 유용한 기술이에요." }
    ]
  },
  {
    id: "L2-387",
    word: "principle",
    meaning: "원칙, 원리",
    examples: [
      { en: "I don't lie; it's a matter of principle.", kr: "난 거짓말 안 해, 원칙의 문제야." },
      { en: "In principle, I agree, but the timing is bad.", kr: "원칙적으로는 동의하지만 타이밍이 안 좋아요." }
    ]
  },
  {
    id: "L2-473",
    word: "balance",
    meaning: "균형, 잔액",
    examples: [
      { en: "It's hard to find a good work-life balance.", kr: "일과 삶의 균형을 잘 맞추기는 어려워요." },
      { en: "Please check your account balance before paying.", kr: "결제하기 전에 계좌 잔액을 확인해 주세요." }
    ]
  },
  {
    id: "L2-474",
    word: "request",
    meaning: "요청, 요청하다",
    examples: [
      { en: "I'd like to request a day off next Friday.", kr: "다음 주 금요일에 하루 휴가를 요청하고 싶어요." },
      { en: "Can I make a special request? No ice, please.", kr: "특별히 하나 부탁해도 될까요? 얼음 빼 주세요." }
    ]
  },
  {
    id: "L2-475",
    word: "connection",
    meaning: "연결, 관계, 연결편",
    examples: [
      { en: "The internet connection here is really slow.", kr: "여기 인터넷 연결이 정말 느려요." },
      { en: "I missed my connection and had to stay overnight.", kr: "연결 항공편을 놓쳐서 하룻밤 묵어야 했어요." }
    ]
  },
  {
    id: "L2-391",
    word: "research",
    meaning: "연구, 조사, 조사하다",
    examples: [
      { en: "I did some research before buying this laptop.", kr: "이 노트북 사기 전에 조사를 좀 했어요." },
      { en: "You should research the neighborhood before you move.", kr: "이사하기 전에 동네를 조사해 보는 게 좋아." }
    ]
  },
  {
    id: "L2-392",
    word: "respond",
    meaning: "응답하다, 반응하다",
    examples: [
      { en: "Please respond to the invitation by Friday.", kr: "금요일까지 초대에 답해 주세요." },
      { en: "Sorry I didn't respond sooner; I was swamped.", kr: "더 빨리 응답 못 해서 미안해요, 너무 바빴어요." }
    ]
  },
  {
    id: "L2-393",
    word: "role",
    meaning: "역할",
    examples: [
      { en: "What's your role on the team?", kr: "팀에서 무슨 역할 맡고 있어요?" },
      { en: "She played the lead role in the school play.", kr: "그녀가 학교 연극에서 주연 역할을 맡았어요." }
    ]
  },
  {
    id: "L2-394",
    word: "section",
    meaning: "부분, 구역, 코너",
    examples: [
      { en: "Where's the frozen food section?", kr: "냉동식품 구역이 어디예요?" },
      { en: "Which section are our seats in?", kr: "우리 자리 어느 구역이에요?" }
    ]
  },
  {
    id: "L2-476",
    word: "conversation",
    meaning: "대화",
    examples: [
      { en: "We had a long conversation about our future plans.", kr: "우리는 미래 계획에 대해 긴 대화를 나눴어요." },
      { en: "It's hard to have a conversation in this noisy café.", kr: "이 시끄러운 카페에서는 대화하기가 힘들어요." }
    ]
  },
  {
    id: "L2-396",
    word: "similar",
    meaning: "비슷한, 유사한",
    examples: [
      { en: "Your jacket is really similar to mine.", kr: "네 재킷 내 거랑 진짜 비슷하다." },
      { en: "We have similar tastes in music.", kr: "우리 음악 취향이 비슷해요." }
    ]
  },
  {
    id: "L2-397",
    word: "source",
    meaning: "출처, 원천, 근원",
    examples: [
      { en: "Where did you hear that? What's your source?", kr: "그거 어디서 들었어? 출처가 어디야?" },
      { en: "Coffee is my main source of energy in the morning.", kr: "아침엔 커피가 제 주된 에너지원이에요." }
    ]
  },
  {
    id: "L2-398",
    word: "structure",
    meaning: "구조, 구성하다",
    examples: [
      { en: "I like how this course is structured.", kr: "이 강좌가 구성된 방식이 마음에 들어요." },
      { en: "We need a clearer structure for our weekly meetings.", kr: "주간 회의에 좀 더 명확한 구조가 필요해요." }
    ]
  },
  {
    id: "L2-477",
    word: "responsibility",
    meaning: "책임, 의무",
    examples: [
      { en: "Taking care of a pet is a big responsibility.", kr: "반려동물을 돌보는 건 큰 책임이에요." },
      { en: "Who will take responsibility for this mistake?", kr: "이 실수에 대해 누가 책임질 거예요?" }
    ]
  },
  {
    id: "L2-478",
    word: "appreciate",
    meaning: "고마워하다, 진가를 알아보다",
    examples: [
      { en: "I really appreciate your help with the move.", kr: "이사 도와준 거 정말 고마워." },
      { en: "You learn to appreciate home cooking when you live abroad.", kr: "외국에 살면 집밥의 소중함을 알게 돼요." }
    ]
  }
];

const wordsLevel3_Part1 = [
  {
    id: "L3-401",
    word: "arrival",
    meaning: "도착, 등장",
    examples: [
      { en: "What's your arrival time? I'll pick you up.", kr: "도착 시간이 언제야? 내가 데리러 갈게." },
      { en: "Please text me on arrival so I know you're safe.", kr: "도착하면 문자 줘, 그래야 안심하지." }
    ]
  },
  {
    id: "L3-402",
    word: "badly",
    meaning: "나쁘게, 서투르게, 몹시",
    examples: [
      { en: "The interview went badly, so I'm not expecting a call.", kr: "면접이 잘 안 풀려서 연락은 기대하지 않고 있어요." },
      { en: "I badly need a vacation after this project.", kr: "이 프로젝트가 끝나면 휴가가 몹시 필요해요." }
    ]
  },
  {
    id: "L3-701",
    word: "typo",
    meaning: "오타",
    examples: [
      { en: "Sorry, typo. I meant Tuesday, not Thursday.", kr: "미안, 오타야. 목요일 말고 화요일이라고 하려던 거야." },
      { en: "There's a typo in your email address on the form.", kr: "양식에 적힌 이메일 주소에 오타가 있어요." }
    ]
  },
  {
    id: "L3-403",
    word: "concrete",
    meaning: "구체적인, 확실한",
    examples: [
      { en: "Can you give me a concrete example?", kr: "구체적인 예를 하나 들어 주시겠어요?" },
      { en: "We need concrete plans, not just good ideas.", kr: "좋은 아이디어만이 아니라 구체적인 계획이 필요해요." }
    ]
  },
  {
    id: "L3-404",
    word: "deeply",
    meaning: "깊이, 몹시",
    examples: [
      { en: "I'm deeply sorry for the delay in my reply.", kr: "답장이 늦어진 점 깊이 사과드립니다." },
      { en: "She cares deeply about the people on her team.", kr: "그녀는 팀원들을 진심으로 깊이 아껴요." }
    ]
  },
  {
    id: "L3-006",
    word: "arbitrary",
    meaning: "임의적인, 제멋대로인",
    examples: [
      { en: "Honestly, that rule seems totally arbitrary to me.", kr: "솔직히 그 규칙은 완전히 제멋대로인 것 같아요." },
      { en: "Why seven o'clock? That deadline feels kind of arbitrary.", kr: "왜 7시예요? 그 마감 시간은 좀 임의로 정한 것 같아요." }
    ]
  },
  {
    id: "L3-702",
    word: "upset",
    meaning: "속상한, 화가 난, (배탈이 나) 불편한",
    examples: [
      { en: "Are you still upset about what I said yesterday?", kr: "어제 내가 한 말 때문에 아직 속상해?" },
      { en: "I think I have an upset stomach from that sushi.", kr: "그 초밥 먹고 배탈 난 것 같아." }
    ]
  },
  {
    id: "L3-405",
    word: "explanation",
    meaning: "설명, 해명",
    examples: [
      { en: "Thanks for the clear explanation of the new policy.", kr: "새 정책을 명확하게 설명해 주셔서 감사합니다." },
      { en: "He left the office early without any explanation.", kr: "그는 아무 해명도 없이 일찍 퇴근했어요." }
    ]
  },
  {
    id: "L3-009",
    word: "assume",
    meaning: "(당연히) ~라고 생각하다, 추정하다, (책임을) 맡다",
    examples: [
      { en: "I assume you've already read the email?", kr: "이메일은 이미 읽으셨다고 생각해도 되죠?" },
      { en: "Don't just assume I'm free every weekend.", kr: "내가 주말마다 한가하다고 멋대로 생각하지 마." }
    ]
  },
  {
    id: "L3-703",
    word: "chatty",
    meaning: "수다스러운, 말이 많은",
    examples: [
      { en: "You're very chatty this morning!", kr: "너 오늘 아침에 말 엄청 많다!" },
      { en: "My taxi driver was super chatty.", kr: "택시 기사님이 엄청 수다스러우셨어." }
    ]
  },
  {
    id: "L3-406",
    word: "fiction",
    meaning: "소설, 허구",
    examples: [
      { en: "I mostly read fiction on long flights.", kr: "긴 비행 중에는 주로 소설을 읽어요." },
      { en: "His story about the accident turned out to be pure fiction.", kr: "사고에 대한 그의 이야기는 완전히 지어낸 것으로 드러났어요." }
    ]
  },
  {
    id: "L3-704",
    word: "resign",
    meaning: "사직하다, 그만두다",
    examples: [
      { en: "He resigned after only three months.", kr: "그 사람 석 달 만에 그만뒀어." },
      { en: "I'm thinking about resigning next year.", kr: "나 내년에 회사 그만둘까 생각 중이야." }
    ]
  },
  {
    id: "L3-407",
    word: "ideal",
    meaning: "이상적인, 가장 알맞은",
    examples: [
      { en: "This quiet café is ideal for studying.", kr: "이 조용한 카페는 공부하기에 딱 좋아요." },
      { en: "In an ideal world, we'd finish this by Friday.", kr: "이상적인 상황이라면 금요일까지 이걸 끝낼 텐데요." }
    ]
  },
  {
    id: "L3-014",
    word: "compatible",
    meaning: "호환되는, (서로) 잘 맞는",
    examples: [
      { en: "Is this new software compatible with my old computer?", kr: "이 새 소프트웨어가 제 오래된 컴퓨터와 호환되나요?" },
      { en: "We're just not compatible as roommates.", kr: "우린 룸메이트로는 정말 안 맞아." }
    ]
  },
  {
    id: "L3-705",
    word: "lazy",
    meaning: "게으른, 느긋한",
    examples: [
      { en: "I'm feeling lazy today, let's order in.", kr: "오늘 귀찮다, 배달시키자." },
      { en: "It was a nice, lazy Sunday.", kr: "느긋하고 좋은 일요일이었어." }
    ]
  },
  {
    id: "L3-016",
    word: "concise",
    meaning: "간결한",
    examples: [
      { en: "Can you keep your answer short and concise?", kr: "답변을 짧고 간결하게 해 줄래요?" },
      { en: "Her emails are always clear and concise.", kr: "그녀의 이메일은 항상 명확하고 간결해요." }
    ]
  },
  {
    id: "L3-017",
    word: "consensus",
    meaning: "합의, 의견 일치",
    examples: [
      { en: "We couldn't reach a consensus, so we'll meet again tomorrow.", kr: "합의를 못 해서 내일 다시 모이기로 했어요." },
      { en: "Is there a consensus on where to have lunch?", kr: "점심 어디서 먹을지 의견 모였어요?" }
    ]
  },
  {
    id: "L3-706",
    word: "picky",
    meaning: "까다로운, 입이 짧은",
    examples: [
      { en: "My son is a really picky eater. He won't touch vegetables.", kr: "우리 아들은 진짜 편식이 심해. 채소는 손도 안 대." },
      { en: "Don't be so picky. Just pick a restaurant!", kr: "너무 까다롭게 굴지 말고 그냥 식당 하나 골라!" }
    ]
  },
  {
    id: "L3-408",
    word: "mood",
    meaning: "기분, 분위기",
    examples: [
      { en: "I'm not in the mood for pizza tonight.", kr: "오늘 밤엔 피자 먹을 기분이 아니야." },
      { en: "The good news lifted the mood in the office.", kr: "좋은 소식 덕분에 사무실 분위기가 밝아졌어요." }
    ]
  },
  {
    id: "L3-020",
    word: "convert",
    meaning: "변환하다, 개조하다",
    examples: [
      { en: "Can you convert this file to a PDF?", kr: "이 파일 PDF로 변환해 줄 수 있어요?" },
      { en: "They converted the garage into a home office.", kr: "그들은 차고를 홈오피스로 개조했어요." }
    ]
  },
  {
    id: "L3-707",
    word: "hangover",
    meaning: "숙취",
    examples: [
      { en: "I have a terrible hangover. Never drinking again.", kr: "숙취가 너무 심해. 다시는 술 안 마셔." },
      { en: "What's your go-to hangover food?", kr: "너는 해장할 때 주로 뭐 먹어?" }
    ]
  },
  {
    id: "L3-409",
    word: "passion",
    meaning: "열정, 애정",
    examples: [
      { en: "She has a real passion for teaching.", kr: "그녀는 가르치는 일에 진정한 열정을 가지고 있어요." },
      { en: "Follow your passion, but don't forget to pay the bills.", kr: "열정을 따르되 공과금 내는 것도 잊지 마." }
    ]
  },
  {
    id: "L3-410",
    word: "producer",
    meaning: "제작자, 프로듀서, 생산자",
    examples: [
      { en: "My cousin works as a music producer in Seoul.", kr: "내 사촌은 서울에서 음악 프로듀서로 일해." },
      { en: "The producer wants to change the ending of the movie.", kr: "제작자가 영화 결말을 바꾸고 싶어 해." }
    ]
  },
  {
    id: "L3-411",
    word: "replacement",
    meaning: "교체(품), 후임자",
    examples: [
      { en: "We need to find a replacement for Jenny before she leaves.", kr: "제니가 떠나기 전에 후임자를 찾아야 해요." },
      { en: "The store gave me a free replacement for my broken phone.", kr: "가게에서 고장 난 휴대폰을 무료로 교체해 줬어요." }
    ]
  },
  {
    id: "L3-412",
    word: "shadow",
    meaning: "그림자",
    examples: [
      { en: "The kids were chasing their shadows on the sidewalk.", kr: "아이들이 인도에서 자기 그림자를 쫓아다니고 있었어요." },
      { en: "The new trainee followed her like a shadow all week.", kr: "신입 연수생이 일주일 내내 그림자처럼 그녀를 따라다녔어요." }
    ]
  },
  {
    id: "L3-413",
    word: "boring",
    meaning: "지루한, 재미없는",
    examples: [
      { en: "The meeting was so boring that I almost fell asleep.", kr: "회의가 너무 지루해서 거의 잠들 뻔했어요." },
      { en: "My job isn't boring, but it can be stressful.", kr: "제 일은 지루하지는 않지만 스트레스를 받을 때가 있어요." }
    ]
  },
  {
    id: "L3-655",
    word: "meal",
    meaning: "식사, 끼니",
    examples: [
      { en: "Thanks for the meal. Everything was great!", kr: "잘 먹었어요. 다 정말 맛있었어요!" },
      { en: "I usually skip meals when I'm really busy at work.", kr: "회사에서 너무 바쁠 땐 보통 끼니를 걸러요." }
    ]
  },
  {
    id: "L3-028",
    word: "deprive",
    meaning: "빼앗다, 박탈하다",
    examples: [
      { en: "I'm so sleep-deprived, I can barely think.", kr: "잠이 너무 부족해서 생각이 잘 안 돼." },
      { en: "Don't deprive yourself. Have a piece of cake!", kr: "너무 참지 말고 케이크 한 조각 먹어!" }
    ]
  },
  {
    id: "L3-414",
    word: "clock",
    meaning: "시계",
    examples: [
      { en: "The clock on the wall is five minutes fast.", kr: "벽에 걸린 시계가 5분 빨라요." },
      { en: "We're working around the clock to meet the deadline.", kr: "마감을 맞추려고 밤낮없이 일하고 있어요." }
    ]
  },
  {
    id: "L3-415",
    word: "confident",
    meaning: "자신 있는, 확신하는",
    examples: [
      { en: "I feel confident about tomorrow's presentation.", kr: "내일 발표에 자신이 있어요." },
      { en: "We're confident that sales will recover next quarter.", kr: "다음 분기에는 매출이 회복될 것이라고 확신합니다." }
    ]
  },
  {
    id: "L3-708",
    word: "cheat",
    meaning: "바람피우다, 부정행위를 하다, 속이다",
    examples: [
      { en: "I can't believe he cheated on her.", kr: "그 사람이 바람을 피웠다니 믿을 수가 없어." },
      { en: "No cheating, put your phone away!", kr: "커닝 금지, 폰 집어넣어!" }
    ]
  },
  {
    id: "L3-032",
    word: "discriminate",
    meaning: "차별하다",
    examples: [
      { en: "I felt like they discriminated against me because of my accent.", kr: "내 억양 때문에 차별받은 느낌이었어." },
      { en: "You can't discriminate against people because of their age.", kr: "나이 때문에 사람을 차별하면 안 되지." }
    ]
  },
  {
    id: "L3-416",
    word: "helpful",
    meaning: "도움이 되는, 잘 도와주는",
    examples: [
      { en: "Thanks, your advice was really helpful.", kr: "고마워요, 조언이 정말 도움이 됐어요." },
      { en: "The hotel staff were friendly and very helpful.", kr: "호텔 직원들이 친절하고 많이 도와줬어요." }
    ]
  },
  {
    id: "L3-709",
    word: "blurry",
    meaning: "흐릿한, 초점이 안 맞은",
    examples: [
      { en: "This photo is blurry. Can you take another one?", kr: "이 사진 흐릿하게 나왔어요. 한 장 더 찍어 주실래요?" },
      { en: "Everything looks blurry without my glasses.", kr: "안경 없으면 다 흐릿하게 보여." }
    ]
  },
  {
    id: "L3-417",
    word: "pitch",
    meaning: "(아이디어를) 제안하다, 홍보, 영업 설명",
    examples: [
      { en: "She gave a great sales pitch to the client.", kr: "그녀는 고객에게 훌륭한 영업 설명을 했어요." },
      { en: "We have five minutes to pitch our idea to investors.", kr: "투자자들에게 우리 아이디어를 제안할 시간이 5분 있어요." }
    ]
  },
  {
    id: "L3-710",
    word: "voicemail",
    meaning: "음성 메시지, 음성사서함",
    examples: [
      { en: "I left you a voicemail, did you get it?", kr: "음성 메시지 남겼는데 들었어?" },
      { en: "It went straight to voicemail.", kr: "바로 음성사서함으로 넘어갔어." }
    ]
  },
  {
    id: "L3-418",
    word: "plain",
    meaning: "평범한, 무늬 없는, 꾸밈없는",
    examples: [
      { en: "I'll just have a plain bagel with cream cheese.", kr: "그냥 크림치즈 바른 플레인 베이글로 할게요." },
      { en: "She wore a plain white shirt to the interview.", kr: "그녀는 면접에 무늬 없는 흰 셔츠를 입고 갔어요." }
    ]
  },
  {
    id: "L3-419",
    word: "romantic",
    meaning: "낭만적인, 로맨틱한",
    examples: [
      { en: "We found a romantic restaurant with a view of the river.", kr: "강이 보이는 낭만적인 식당을 찾았어요." },
      { en: "He's not very romantic, but he always remembers my birthday.", kr: "그는 별로 로맨틱하지 않지만 내 생일은 항상 기억해." }
    ]
  },
  {
    id: "L3-711",
    word: "stain",
    meaning: "얼룩, 얼룩지게 하다",
    examples: [
      { en: "Oh no, I got a coffee stain on my shirt.", kr: "아 안 돼, 셔츠에 커피 얼룩 묻었어." },
      { en: "Can you get this wine stain out of my jacket?", kr: "재킷에 묻은 이 와인 얼룩 지울 수 있을까요?" }
    ]
  },
  {
    id: "L3-420",
    word: "afterwards",
    meaning: "그 후에, 나중에",
    examples: [
      { en: "Let's finish the report and grab dinner afterwards.", kr: "보고서 끝내고 나서 저녁 먹으러 가자." },
      { en: "She apologized and felt much better afterwards.", kr: "그녀는 사과했고 그 후에 기분이 훨씬 나아졌어요." }
    ]
  },
  {
    id: "L3-712",
    word: "bandage",
    meaning: "붕대, 반창고, 붕대를 감다",
    examples: [
      { en: "Do you have a bandage? I cut my finger.", kr: "반창고 있어? 손가락 베였어." },
      { en: "The nurse bandaged my wrist.", kr: "간호사가 내 손목에 붕대를 감아줬어." }
    ]
  },
  {
    id: "L3-042",
    word: "embrace",
    meaning: "포용하다, 받아들이다, 포옹하다",
    examples: [
      { en: "We need to embrace change instead of fighting it.", kr: "변화에 맞서기보다는 받아들여야 해요." },
      { en: "She embraced her friend warmly at the airport.", kr: "그녀는 공항에서 친구를 꼭 껴안았어요." }
    ]
  },
  {
    id: "L3-421",
    word: "architecture",
    meaning: "건축(양식), 구조",
    examples: [
      { en: "I love the old architecture in this neighborhood.", kr: "이 동네 오래된 건축물들 너무 좋다." },
      { en: "Our team is redesigning the system architecture.", kr: "우리 팀은 시스템 구조를 다시 설계하고 있어요." }
    ]
  },
  {
    id: "L3-656",
    word: "hungry",
    meaning: "배고픈",
    examples: [
      { en: "I'm starving. Are you hungry too?", kr: "나 배고파 죽겠어. 너도 배고파?" },
      { en: "Let's grab something to eat before we get too hungry.", kr: "너무 배고파지기 전에 뭐 좀 먹자." }
    ]
  },
  {
    id: "L3-713",
    word: "workout",
    meaning: "운동",
    examples: [
      { en: "That was a tough workout. My legs are shaking.", kr: "운동 진짜 힘들었어. 다리가 후들거려." },
      { en: "I usually do a quick workout before work.", kr: "나는 보통 출근 전에 간단히 운동해." }
    ]
  },
  {
    id: "L3-714",
    word: "generous",
    meaning: "너그러운, 후한, 넉넉한",
    examples: [
      { en: "That's really generous of you, thank you.", kr: "정말 통 크시네요, 고마워요." },
      { en: "They give generous portions at that place.", kr: "거기 양을 진짜 넉넉하게 줘." }
    ]
  },
  {
    id: "L3-422",
    word: "behalf",
    meaning: "(on behalf of) ~을 대신하여, ~을 대표하여",
    examples: [
      { en: "I'm calling on behalf of my manager.", kr: "매니저를 대신해서 전화드렸어요." },
      { en: "On behalf of the company, thank you for your hard work.", kr: "회사를 대표하여 여러분의 노고에 감사드립니다." }
    ]
  },
  {
    id: "L3-423",
    word: "capture",
    meaning: "포착하다, 담아내다, 사로잡다",
    examples: [
      { en: "You really captured the moment in this photo!", kr: "이 사진에 그 순간을 제대로 담았네!" },
      { en: "That song captures exactly how I feel right now.", kr: "그 노래가 지금 내 기분을 딱 담아내고 있어." }
    ]
  },
  {
    id: "L3-657",
    word: "cancel",
    meaning: "취소하다",
    examples: [
      { en: "Sorry, I have to cancel our lunch today.", kr: "미안해요, 오늘 점심 약속 취소해야 할 것 같아요." },
      { en: "Our flight got canceled because of the storm.", kr: "폭풍 때문에 비행기가 결항됐어요." }
    ]
  },
  {
    id: "L3-050",
    word: "equivalent",
    meaning: "동등한, ~에 해당하는 (것)",
    examples: [
      { en: "What's the Korean equivalent of this word?", kr: "이 단어에 해당하는 한국어는 뭐예요?" },
      { en: "Is this certificate equivalent to a college degree?", kr: "이 자격증이 대학 학위랑 동등한 건가요?" }
    ]
  },
  {
    id: "L3-715",
    word: "sunscreen",
    meaning: "선크림, 자외선 차단제",
    examples: [
      { en: "Did you put on sunscreen? It's really sunny.", kr: "선크림 발랐어? 햇빛 진짜 세." },
      { en: "I forgot my sunscreen and got burned.", kr: "선크림 깜빡해서 탔어." }
    ]
  },
  {
    id: "L3-052",
    word: "ethical",
    meaning: "윤리적인",
    examples: [
      { en: "Is it ethical to check your partner's phone?", kr: "애인 휴대폰을 확인하는 게 윤리적인가요?" },
      { en: "I try to buy from ethical brands when I can.", kr: "가능하면 윤리적인 브랜드에서 사려고 해요." }
    ]
  },
  {
    id: "L3-716",
    word: "flirt",
    meaning: "추파를 던지다, 작업 걸다",
    examples: [
      { en: "Was he flirting with you just now?", kr: "방금 그 사람 너한테 작업 건 거야?" },
      { en: "Stop flirting and just ask her out.", kr: "작업만 걸지 말고 그냥 데이트 신청해." }
    ]
  },
  {
    id: "L3-424",
    word: "disappointed",
    meaning: "실망한",
    examples: [
      { en: "I was disappointed with the hotel room.", kr: "호텔 방에 실망했어요." },
      { en: "Don't be disappointed if you don't get a job right away.", kr: "바로 취업이 안 되더라도 실망하지 마." }
    ]
  },
  {
    id: "L3-425",
    word: "odd",
    meaning: "이상한, 특이한",
    examples: [
      { en: "It's odd that he hasn't replied to my email.", kr: "그가 내 이메일에 답장하지 않은 게 이상해." },
      { en: "I noticed an odd smell in the kitchen.", kr: "부엌에서 이상한 냄새가 났어요." }
    ]
  },
  {
    id: "L3-426",
    word: "stomach",
    meaning: "위, 배",
    examples: [
      { en: "I have a stomach ache after eating too much.", kr: "너무 많이 먹었더니 배가 아파요." },
      { en: "Don't take this medicine on an empty stomach.", kr: "빈속에 이 약을 먹지 마세요." }
    ]
  },
  {
    id: "L3-717",
    word: "frustrated",
    meaning: "답답한, 짜증 난, 좌절한",
    examples: [
      { en: "I'm so frustrated. My computer keeps crashing.", kr: "진짜 답답해. 컴퓨터가 계속 멈춰." },
      { en: "He gets frustrated when people don't listen.", kr: "걔는 사람들이 말을 안 들으면 짜증 내." }
    ]
  },
  {
    id: "L3-427",
    word: "ugly",
    meaning: "못생긴, 흉한, 험악한",
    examples: [
      { en: "That building is so ugly that it ruins the view.", kr: "저 건물은 너무 흉해서 경치를 망쳐요." },
      { en: "The argument turned ugly when they started yelling.", kr: "소리를 지르기 시작하자 말다툼이 험악해졌어요." }
    ]
  },
  {
    id: "L3-428",
    word: "virus",
    meaning: "바이러스",
    examples: [
      { en: "There's a stomach virus going around the office.", kr: "사무실에 장염이 돌고 있어." },
      { en: "Don't open that file. It might contain a virus.", kr: "그 파일 열지 마. 바이러스가 있을 수도 있어." }
    ]
  },
  {
    id: "L3-429",
    word: "aspect",
    meaning: "측면, 요소",
    examples: [
      { en: "What's the best aspect of your new job?", kr: "새 직장에서 제일 좋은 점이 뭐야?" },
      { en: "We talked about every aspect of the trip.", kr: "우리는 여행에 대해 하나하나 다 얘기했어." }
    ]
  },
  {
    id: "L3-718",
    word: "toothache",
    meaning: "치통",
    examples: [
      { en: "I have a bad toothache. I need to see a dentist.", kr: "이가 너무 아파. 치과 가 봐야겠어." },
      { en: "Do you have anything for a toothache?", kr: "치통에 먹는 약 있나요?" }
    ]
  },
  {
    id: "L3-062",
    word: "feasible",
    meaning: "실행 가능한",
    examples: [
      { en: "Is that plan even feasible with our budget?", kr: "그 계획이 우리 예산으로 실행 가능하긴 해요?" },
      { en: "Finishing by Friday just isn't feasible.", kr: "금요일까지 끝내는 건 현실적으로 실행 불가능해요." }
    ]
  },
  {
    id: "L3-430",
    word: "comfort",
    meaning: "편안함, 위로하다",
    examples: [
      { en: "She tried to comfort her friend after the breakup.", kr: "그녀는 이별한 친구를 위로하려고 했어요." },
      { en: "These shoes are designed for comfort, not style.", kr: "이 신발은 스타일보다 편안함을 위해 만들어졌어요." }
    ]
  },
  {
    id: "L3-064",
    word: "fund",
    meaning: "자금, 자금을 대다",
    examples: [
      { en: "We're raising funds for the local animal shelter.", kr: "지역 동물 보호소를 위해 기금을 모으고 있어요." },
      { en: "Who's going to fund this project?", kr: "이 프로젝트 자금은 누가 대요?" }
    ]
  },
  {
    id: "L3-065",
    word: "fundamental",
    meaning: "근본적인, 기본적인",
    examples: [
      { en: "There's a fundamental problem with this plan.", kr: "이 계획에는 근본적인 문제가 있어요." },
      { en: "Trust is fundamental in any relationship.", kr: "신뢰는 어떤 관계에서든 가장 기본이에요." }
    ]
  },
  {
    id: "L3-066",
    word: "generalize",
    meaning: "일반화하다",
    examples: [
      { en: "You can't generalize about a whole country from one person.", kr: "한 사람만 보고 나라 전체를 일반화하면 안 돼요." },
      { en: "I don't want to generalize, but most kids love pizza.", kr: "일반화하고 싶진 않지만, 대부분의 아이들은 피자를 좋아하잖아요." }
    ]
  },
  {
    id: "L3-431",
    word: "crack",
    meaning: "금, 갈라지다",
    examples: [
      { en: "There's a crack in my phone screen.", kr: "내 휴대폰 화면에 금이 갔어." },
      { en: "Please don't crack your knuckles. It drives me crazy.", kr: "손가락 좀 꺾지 마. 그거 진짜 거슬려." }
    ]
  },
  {
    id: "L3-432",
    word: "repair",
    meaning: "수리하다, 수리",
    examples: [
      { en: "How much will it cost to repair my laptop?", kr: "노트북 수리하는 데 얼마나 들까요?" },
      { en: "The road is closed for repairs until Monday.", kr: "그 도로는 월요일까지 보수 공사로 폐쇄됩니다." }
    ]
  },
  {
    id: "L3-719",
    word: "hilarious",
    meaning: "엄청 웃긴",
    examples: [
      { en: "That video was hilarious! Send me the link.", kr: "그 영상 진짜 웃겼어! 링크 보내 줘." },
      { en: "Your brother is hilarious. I couldn't stop laughing.", kr: "너희 오빠 진짜 웃기다. 웃음이 안 멈췄어." }
    ]
  },
  {
    id: "L3-070",
    word: "identical",
    meaning: "동일한, 똑같은",
    examples: [
      { en: "You and your sister look almost identical!", kr: "너랑 언니랑 거의 똑같이 생겼다!" },
      { en: "These two shirts are identical except for the color.", kr: "이 두 셔츠는 색깔만 빼고 똑같아요." }
    ]
  },
  {
    id: "L3-433",
    word: "annoying",
    meaning: "짜증 나는, 성가신",
    examples: [
      { en: "It's annoying when people talk during movies.", kr: "영화 볼 때 사람들이 떠들면 짜증 나." },
      { en: "My phone keeps making this annoying noise.", kr: "내 휴대폰에서 계속 이 거슬리는 소리가 나." }
    ]
  },
  {
    id: "L3-072",
    word: "immigrant",
    meaning: "이민자",
    examples: [
      { en: "My grandparents were immigrants from Korea.", kr: "우리 조부모님은 한국에서 온 이민자셨어." },
      { en: "Lots of immigrants run small shops in this neighborhood.", kr: "이 동네엔 작은 가게를 하는 이민자들이 많아." }
    ]
  },
  {
    id: "L3-434",
    word: "confirm",
    meaning: "확인하다, 확정하다",
    examples: [
      { en: "Please confirm your reservation by email.", kr: "이메일로 예약을 확인해 주세요." },
      { en: "Can you confirm the meeting time for tomorrow?", kr: "내일 회의 시간을 확정해 주시겠어요?" }
    ]
  },
  {
    id: "L3-074",
    word: "impose",
    meaning: "(부담을) 지우다, 강요하다, 폐를 끼치다",
    examples: [
      { en: "I don't want to impose, but could I stay one more night?", kr: "폐 끼치기 싫은데, 하룻밤만 더 자고 가도 될까?" },
      { en: "Don't impose your opinions on other people.", kr: "남한테 네 의견을 강요하지 마." }
    ]
  },
  {
    id: "L3-435",
    word: "convinced",
    meaning: "확신하는, 납득한",
    examples: [
      { en: "I'm convinced that this is the right decision.", kr: "이게 옳은 결정이라고 확신해요." },
      { en: "She wasn't convinced by his explanation.", kr: "그녀는 그의 설명에 납득하지 않았어요." }
    ]
  },
  {
    id: "L3-658",
    word: "hurry",
    meaning: "서두르다, 서두름",
    examples: [
      { en: "Hurry up, or we'll miss the train!", kr: "서둘러, 안 그러면 기차 놓쳐!" },
      { en: "No hurry. Just send it when you're ready.", kr: "급할 거 없어요. 준비되면 보내 주세요." }
    ]
  },
  {
    id: "L3-720",
    word: "wrap",
    meaning: "싸다, 포장하다, 마무리하다",
    examples: [
      { en: "Can you wrap this up as a gift?", kr: "이거 선물 포장해 주실 수 있어요?" },
      { en: "Let's wrap up the meeting here.", kr: "회의는 여기서 마무리하죠." }
    ]
  },
  {
    id: "L3-721",
    word: "sightseeing",
    meaning: "관광",
    examples: [
      { en: "Are you here on business or sightseeing?", kr: "출장으로 오셨어요, 관광으로 오셨어요?" },
      { en: "Let's do some sightseeing before the conference starts.", kr: "회의 시작하기 전에 관광 좀 하자." }
    ]
  },
  {
    id: "L3-722",
    word: "sweaty",
    meaning: "땀에 젖은, 땀나는",
    examples: [
      { en: "I'm all sweaty, let me shower first.", kr: "나 땀범벅이야, 먼저 샤워할게." },
      { en: "My hands get sweaty when I'm nervous.", kr: "나 긴장하면 손에 땀 나." }
    ]
  },
  {
    id: "L3-723",
    word: "hint",
    meaning: "힌트, 암시, 넌지시 알리다",
    examples: [
      { en: "I'm not telling you the answer, but I'll give you a hint.", kr: "정답은 안 알려 줄 건데 힌트는 줄게." },
      { en: "Are you hinting that I should leave?", kr: "나보고 가라고 돌려 말하는 거야?" }
    ]
  },
  {
    id: "L3-436",
    word: "decent",
    meaning: "괜찮은, 적절한, 품위 있는",
    examples: [
      { en: "It's not fancy, but the food is decent.", kr: "고급스럽진 않지만 음식은 괜찮아요." },
      { en: "Everyone deserves a decent salary and a safe workplace.", kr: "모든 사람은 적절한 급여와 안전한 직장을 누릴 자격이 있어요." }
    ]
  },
  {
    id: "L3-437",
    word: "nurse",
    meaning: "간호사",
    examples: [
      { en: "The nurse will take your blood pressure first.", kr: "간호사가 먼저 혈압을 잴 거예요." },
      { en: "My sister works as a nurse at a children's hospital.", kr: "제 여동생은 어린이 병원에서 간호사로 일해요." }
    ]
  },
  {
    id: "L3-438",
    word: "ownership",
    meaning: "소유(권), 주인 의식",
    examples: [
      { en: "The restaurant is under new ownership now.", kr: "그 식당은 이제 주인이 바뀌었어." },
      { en: "Take ownership of your mistakes and learn from them.", kr: "네 실수는 네가 책임지고 거기서 배워." }
    ]
  },
  {
    id: "L3-084",
    word: "insight",
    meaning: "통찰(력), 깊은 이해",
    examples: [
      { en: "Thanks, that's a really helpful insight.", kr: "고마워요, 정말 도움 되는 통찰이네요." },
      { en: "Living abroad gave me insight into different cultures.", kr: "해외에 살면서 다른 문화를 깊이 이해하게 됐어요." }
    ]
  },
  {
    id: "L3-085",
    word: "instance",
    meaning: "예, 사례, 경우",
    examples: [
      { en: "I love outdoor sports. For instance, hiking and surfing.", kr: "저는 야외 스포츠를 좋아해요. 예를 들면 등산이랑 서핑이요." },
      { en: "In this instance, I think we should make an exception.", kr: "이번 경우에는 예외를 두는 게 좋을 것 같아요." }
    ]
  },
  {
    id: "L3-439",
    word: "recall",
    meaning: "기억해 내다, (제품을) 회수하다",
    examples: [
      { en: "I can't recall where I parked the car.", kr: "차를 어디에 주차했는지 기억이 안 나요." },
      { en: "The company recalled thousands of cars because of a brake problem.", kr: "그 회사는 브레이크 결함으로 수천 대의 차량을 리콜했습니다." }
    ]
  },
  {
    id: "L3-724",
    word: "microwave",
    meaning: "전자레인지, 전자레인지에 데우다",
    examples: [
      { en: "Just microwave it for two minutes.", kr: "그냥 전자레인지에 2분 돌려." },
      { en: "Is it okay to put this bowl in the microwave?", kr: "이 그릇 전자레인지에 넣어도 돼?" }
    ]
  },
  {
    id: "L3-088",
    word: "intense",
    meaning: "강렬한, (강도가) 센, 극심한",
    examples: [
      { en: "That workout was way too intense for me.", kr: "그 운동은 나한테 너무 강도가 셌어." },
      { en: "The pressure at work has been really intense lately.", kr: "요즘 회사에서 압박이 정말 심해요." }
    ]
  },
  {
    id: "L3-440",
    word: "sake",
    meaning: "(for the sake of) ~을 위해서",
    examples: [
      { en: "Let's take a short break for everyone's sake.", kr: "모두를 위해서 잠깐 쉬어요." },
      { en: "For the sake of time, let's skip the introductions.", kr: "시간 관계상 소개는 건너뜁시다." }
    ]
  },
  {
    id: "L3-441",
    word: "smooth",
    meaning: "매끄러운, 순조로운",
    examples: [
      { en: "The flight was smooth and arrived on time.", kr: "비행은 순조로웠고 제시간에 도착했어요." },
      { en: "This lotion keeps your skin soft and smooth.", kr: "이 로션은 피부를 부드럽고 매끄럽게 유지해 줘요." }
    ]
  },
  {
    id: "L3-442",
    word: "abroad",
    meaning: "해외에(서), 해외로",
    examples: [
      { en: "I'd love to study abroad for a year.", kr: "1년 동안 해외에서 공부해 보고 싶어요." },
      { en: "Many of our customers live abroad.", kr: "우리 고객 중 상당수는 해외에 살아요." }
    ]
  },
  {
    id: "L3-659",
    word: "delicious",
    meaning: "맛있는",
    examples: [
      { en: "Wow, this pasta is absolutely delicious!", kr: "와, 이 파스타 진짜 맛있다!" },
      { en: "Do you know any place with delicious Korean food around here?", kr: "이 근처에 한국 음식 맛있는 데 알아요?" }
    ]
  },
  {
    id: "L3-443",
    word: "broadcast",
    meaning: "방송하다, 방송",
    examples: [
      { en: "Is the game being broadcast on regular TV?", kr: "그 경기 일반 TV에서 방송해?" },
      { en: "They're going to broadcast the concert live tonight.", kr: "오늘 밤에 그 콘서트를 생중계한대." }
    ]
  },
  {
    id: "L3-444",
    word: "compete",
    meaning: "경쟁하다, 겨루다",
    examples: [
      { en: "Small shops can't compete with big online stores on price.", kr: "작은 가게들은 가격 면에서 대형 온라인 상점과 경쟁할 수 없어요." },
      { en: "More than fifty teams will compete in the tournament.", kr: "50개가 넘는 팀이 그 대회에서 겨룰 거예요." }
    ]
  },
  {
    id: "L3-445",
    word: "disaster",
    meaning: "재난, 엉망인 일",
    examples: [
      { en: "My first day at work was a complete disaster.", kr: "출근 첫날은 완전 엉망이었어." },
      { en: "The picnic was a total disaster because of the rain.", kr: "비 때문에 소풍은 완전히 망했어." }
    ]
  },
  {
    id: "L3-446",
    word: "lifetime",
    meaning: "평생, 일생",
    examples: [
      { en: "This trip was the chance of a lifetime.", kr: "이번 여행은 일생일대의 기회였어요." },
      { en: "Members get a lifetime discount at the store.", kr: "회원은 그 매장에서 평생 할인을 받아요." }
    ]
  },
  {
    id: "L3-097",
    word: "layer",
    meaning: "층, 겹",
    examples: [
      { en: "This cake has three layers of cream and sponge.", kr: "이 케이크는 크림이랑 스펀지가 세 층으로 되어 있어요." },
      { en: "It's cold out, so wear a few layers.", kr: "밖이 추우니까 옷을 몇 겹 껴입어." }
    ]
  },
  {
    id: "L3-447",
    word: "mortgage",
    meaning: "주택 담보 대출",
    examples: [
      { en: "We're still paying off our mortgage.", kr: "우리는 아직 주택 담보 대출을 갚고 있어." },
      { en: "Are you thinking about getting a mortgage?", kr: "주택 담보 대출 받을 생각 있어?" }
    ]
  },
  {
    id: "L3-099",
    word: "license",
    meaning: "면허(증), 허가",
    examples: [
      { en: "You need a special license to drive a motorcycle.", kr: "오토바이를 운전하려면 별도 면허가 필요해요." },
      { en: "Did you remember to bring your driver's license?", kr: "운전면허증 챙겼어?" }
    ]
  },
  {
    id: "L3-100",
    word: "logic",
    meaning: "논리",
    examples: [
      { en: "Sorry, I don't follow your logic here.", kr: "미안, 여기서 네 논리가 이해가 안 돼." },
      { en: "There's no logic in buying a car you can't afford.", kr: "감당도 못 할 차를 사는 건 논리적으로 말이 안 돼." }
    ]
  }
];

const wordsLevel3_Part2 = [
  {
    id: "L3-725",
    word: "freezing",
    meaning: "몹시 추운, 얼어붙을 듯한",
    examples: [
      { en: "It's freezing outside. Grab a warm jacket.", kr: "밖에 엄청 추워. 따뜻한 재킷 챙겨." },
      { en: "Can you turn up the heat? I'm freezing.", kr: "난방 좀 올려 줄래? 나 얼어 죽겠어." }
    ]
  },
  {
    id: "L3-448",
    word: "narrow",
    meaning: "좁은, 좁히다",
    examples: [
      { en: "The streets in the old town are very narrow.", kr: "구시가지의 거리는 매우 좁아요." },
      { en: "We narrowed the list down to three candidates.", kr: "후보를 세 명으로 좁혔어요." }
    ]
  },
  {
    id: "L3-726",
    word: "unplug",
    meaning: "플러그를 뽑다, 잠시 손 놓고 쉬다",
    examples: [
      { en: "Did you unplug the iron before we left?", kr: "우리 나오기 전에 다리미 플러그 뽑았어?" },
      { en: "I need to unplug for a weekend.", kr: "주말 동안은 좀 다 끄고 쉬어야겠어." }
    ]
  },
  {
    id: "L3-449",
    word: "reduction",
    meaning: "감소, 삭감, 할인",
    examples: [
      { en: "Is there a price reduction for students?", kr: "학생 할인 있나요?" },
      { en: "I asked my boss for a reduction in my hours.", kr: "상사한테 근무 시간 좀 줄여 달라고 했어." }
    ]
  },
  {
    id: "L3-450",
    word: "silly",
    meaning: "어리석은, 바보 같은",
    examples: [
      { en: "Sorry, that was a silly mistake.", kr: "죄송해요, 어리석은 실수였어요." },
      { en: "Don't be silly, you're always welcome here.", kr: "바보 같은 소리 하지 마, 넌 언제든 환영이야." }
    ]
  },
  {
    id: "L3-451",
    word: "belong",
    meaning: "~의 것이다, 속하다, 어울리다",
    examples: [
      { en: "Does this jacket belong to you?", kr: "이 재킷 당신 거예요?" },
      { en: "I finally feel like I belong on this team.", kr: "드디어 이 팀의 일원이라는 느낌이 들어요." }
    ]
  },
  {
    id: "L3-107",
    word: "mutual",
    meaning: "서로의, 상호의, 공통의",
    examples: [
      { en: "We met through a mutual friend.", kr: "서로 아는 친구 소개로 만났어요." },
      { en: "We broke up by mutual agreement, so there's no drama.", kr: "서로 합의해서 헤어진 거라 별문제 없어." }
    ]
  },
  {
    id: "L3-727",
    word: "crispy",
    meaning: "바삭바삭한",
    examples: [
      { en: "I love it when the fries are extra crispy.", kr: "감자튀김이 아주 바삭할 때가 제일 좋아." },
      { en: "How do you get the skin so crispy?", kr: "껍질을 어떻게 이렇게 바삭하게 해?" }
    ]
  },
  {
    id: "L3-452",
    word: "connect",
    meaning: "연결하다, 접속하다",
    examples: [
      { en: "I can't connect to the hotel Wi-Fi.", kr: "호텔 와이파이에 연결이 안 돼요." },
      { en: "Let me connect you with our sales team.", kr: "영업팀과 연결해 드릴게요." }
    ]
  },
  {
    id: "L3-110",
    word: "notorious",
    meaning: "악명 높은",
    examples: [
      { en: "This road is notorious for traffic jams.", kr: "이 길은 교통 체증으로 악명 높아요." },
      { en: "That restaurant is notorious for its terrible service.", kr: "그 식당은 서비스가 형편없기로 악명 높아요." }
    ]
  },
  {
    id: "L3-660",
    word: "confused",
    meaning: "혼란스러운, 헷갈리는",
    examples: [
      { en: "Sorry, I'm a little confused. Can you explain that again?", kr: "죄송한데 좀 헷갈려요. 다시 설명해 주실래요?" },
      { en: "I always get confused by the subway map here.", kr: "여기 지하철 노선도는 볼 때마다 헷갈려요." }
    ]
  },
  {
    id: "L3-112",
    word: "objective",
    meaning: "객관적인, 목표",
    examples: [
      { en: "Try to be objective. Don't take it personally.", kr: "객관적으로 생각해 봐. 개인적으로 받아들이지 말고." },
      { en: "What's the main objective of this meeting?", kr: "이번 회의의 주요 목표가 뭐예요?" }
    ]
  },
  {
    id: "L3-453",
    word: "efficiency",
    meaning: "효율(성), 능률",
    examples: [
      { en: "This car has great fuel efficiency.", kr: "이 차는 연비가 정말 좋아." },
      { en: "We need to work on our team's efficiency.", kr: "우리 팀 효율 좀 높여야 해요." }
    ]
  },
  {
    id: "L3-114",
    word: "outcome",
    meaning: "결과, 성과",
    examples: [
      { en: "Whatever the outcome, I'm proud of you.", kr: "결과가 어떻든 난 네가 자랑스러워." },
      { en: "I'm still waiting for the outcome of the interview.", kr: "아직 면접 결과를 기다리고 있어요." }
    ]
  },
  {
    id: "L3-728",
    word: "scroll",
    meaning: "스크롤하다, 넘겨 보다",
    examples: [
      { en: "I was just scrolling on my phone all night.", kr: "밤새 그냥 폰만 넘겨 보고 있었어." },
      { en: "Scroll down, it's at the bottom.", kr: "아래로 내려 봐, 맨 밑에 있어." }
    ]
  },
  {
    id: "L3-454",
    word: "experiment",
    meaning: "실험, 실험하다, 시도해 보다",
    examples: [
      { en: "My son did a science experiment with plants for school.", kr: "아들이 학교 숙제로 식물 과학 실험을 했어." },
      { en: "I like to experiment with new recipes on weekends.", kr: "나는 주말에 새로운 요리법을 시도해 보는 걸 좋아해." }
    ]
  },
  {
    id: "L3-455",
    word: "increasingly",
    meaning: "점점 더, 갈수록",
    examples: [
      { en: "It's getting increasingly hard to find a cheap apartment.", kr: "싼 집 구하기가 갈수록 어려워지고 있어." },
      { en: "I'm increasingly worried about him. He never calls.", kr: "걔가 점점 더 걱정돼. 연락을 통 안 해." }
    ]
  },
  {
    id: "L3-729",
    word: "layover",
    meaning: "(항공) 경유 대기, 환승 대기",
    examples: [
      { en: "We have a three-hour layover in Tokyo.", kr: "도쿄에서 세 시간 경유 대기가 있어." },
      { en: "Is there anything to do during a long layover here?", kr: "여기서 오래 환승 대기할 때 할 만한 거 있어요?" }
    ]
  },
  {
    id: "L3-730",
    word: "mute",
    meaning: "음소거하다, 음소거",
    examples: [
      { en: "You're on mute, we can't hear you.", kr: "음소거 돼 있어요, 안 들려요." },
      { en: "I muted the group chat, it was too noisy.", kr: "단톡방 너무 시끄러워서 알림 껐어." }
    ]
  },
  {
    id: "L3-456",
    word: "passenger",
    meaning: "승객",
    examples: [
      { en: "All passengers must wear a seatbelt.", kr: "모든 승객은 안전벨트를 착용해야 합니다." },
      { en: "I fell asleep in the passenger seat.", kr: "조수석에서 잠들었어요." }
    ]
  },
  {
    id: "L3-457",
    word: "rapid",
    meaning: "빠른, 급속한",
    examples: [
      { en: "Did you take a rapid test before coming?", kr: "오기 전에 신속 검사 받았어?" },
      { en: "There's been a rapid rise in rent around here.", kr: "이 근처 월세가 급격히 올랐어." }
    ]
  },
  {
    id: "L3-458",
    word: "suitable",
    meaning: "적합한, 알맞은",
    examples: [
      { en: "This movie isn't suitable for young children.", kr: "이 영화는 어린아이들에게 적합하지 않아요." },
      { en: "We're still looking for a suitable venue for the event.", kr: "행사에 알맞은 장소를 아직 찾고 있어요." }
    ]
  },
  {
    id: "L3-731",
    word: "weird",
    meaning: "이상한, 기묘한",
    examples: [
      { en: "That's weird. The door was locked a minute ago.", kr: "이상하네. 방금 전까지 문이 잠겨 있었는데." },
      { en: "Is it weird if I go to the movies alone?", kr: "혼자 영화 보러 가면 이상한가?" }
    ]
  },
  {
    id: "L3-459",
    word: "vital",
    meaning: "필수적인, 매우 중요한",
    examples: [
      { en: "Drinking enough water is vital in this heat.", kr: "이 더위엔 물을 충분히 마시는 게 정말 중요해." },
      { en: "Good communication is vital for any team.", kr: "어떤 팀이든 소통이 정말 중요해." }
    ]
  },
  {
    id: "L3-732",
    word: "checkout",
    meaning: "계산대, (호텔) 체크아웃",
    examples: [
      { en: "What time is checkout tomorrow?", kr: "내일 체크아웃이 몇 시예요?" },
      { en: "The line at the checkout is really long today.", kr: "오늘 계산대 줄이 진짜 길다." }
    ]
  },
  {
    id: "L3-126",
    word: "prior",
    meaning: "이전의, (prior to) ~ 전에",
    examples: [
      { en: "Do I need any prior experience for this job?", kr: "이 일에 이전 경력이 필요한가요?" },
      { en: "Please arrive 30 minutes prior to departure.", kr: "출발 30분 전까지 도착해 주세요." }
    ]
  },
  {
    id: "L3-461",
    word: "fraud",
    meaning: "사기",
    examples: [
      { en: "Call the bank right away if you think it's fraud.", kr: "사기 같으면 바로 은행에 전화해." },
      { en: "That 'free prize' text is obviously fraud.", kr: "그 '무료 경품' 문자는 누가 봐도 사기야." }
    ]
  },
  {
    id: "L3-462",
    word: "genuine",
    meaning: "진짜의, 진심 어린",
    examples: [
      { en: "Is this bag made of genuine leather?", kr: "이 가방은 진짜 가죽으로 만든 거예요?" },
      { en: "She showed genuine interest in my ideas.", kr: "그녀는 내 아이디어에 진심으로 관심을 보였어요." }
    ]
  },
  {
    id: "L3-463",
    word: "introduce",
    meaning: "소개하다, 도입하다",
    examples: [
      { en: "Let me introduce you to my coworker.", kr: "내 동료를 소개해 줄게." },
      { en: "When are you going to introduce the new menu?", kr: "새 메뉴는 언제 내놓으실 거예요?" }
    ]
  },
  {
    id: "L3-464",
    word: "legacy",
    meaning: "유산, (오래된) 기존의",
    examples: [
      { en: "Grandpa's recipes are his real legacy.", kr: "할아버지의 요리법이 진짜 유산이야." },
      { en: "We're still using a legacy system from the 1990s.", kr: "우리는 아직도 1990년대의 오래된 시스템을 쓰고 있어요." }
    ]
  },
  {
    id: "L3-131",
    word: "quantity",
    meaning: "양",
    examples: [
      { en: "When it comes to friends, I prefer quality over quantity.", kr: "친구는 수보다 질이라고 생각해." },
      { en: "Do you give discounts if I buy a large quantity?", kr: "대량으로 사면 할인해 주세요?" }
    ]
  },
  {
    id: "L3-132",
    word: "quota",
    meaning: "할당량",
    examples: [
      { en: "I still need two more sales to hit my quota.", kr: "할당량을 채우려면 아직 두 건 더 팔아야 해요." },
      { en: "We each have a monthly quota of calls to make.", kr: "우리는 각자 매달 채워야 하는 통화 할당량이 있어요." }
    ]
  },
  {
    id: "L3-133",
    word: "radical",
    meaning: "근본적인, 급진적인",
    examples: [
      { en: "We need a radical change, not small fixes.", kr: "작은 수정이 아니라 근본적인 변화가 필요해요." },
      { en: "Some of his political views are pretty radical.", kr: "그의 정치적 견해 중 일부는 꽤 급진적이에요." }
    ]
  },
  {
    id: "L3-465",
    word: "remind",
    meaning: "상기시키다, 생각나게 하다",
    examples: [
      { en: "Please remind me to call the dentist tomorrow.", kr: "내일 치과에 전화하라고 다시 알려 주세요." },
      { en: "This song reminds me of my college days.", kr: "이 노래를 들으면 대학 시절이 생각나요." }
    ]
  },
  {
    id: "L3-466",
    word: "scary",
    meaning: "무서운, 겁나는",
    examples: [
      { en: "Speaking in front of a big crowd is scary.", kr: "많은 사람 앞에서 말하는 건 무서워요." },
      { en: "We watched a scary movie last night.", kr: "어젯밤에 무서운 영화를 봤어요." }
    ]
  },
  {
    id: "L3-467",
    word: "survival",
    meaning: "생존",
    examples: [
      { en: "I'm in survival mode until payday.", kr: "월급날까지 버티기 모드야." },
      { en: "Basic survival skills are useful when you go camping.", kr: "캠핑 갈 때 기본적인 생존 기술이 있으면 유용해." }
    ]
  },
  {
    id: "L3-468",
    word: "achievement",
    meaning: "성취, 업적",
    examples: [
      { en: "Finishing a marathon is a big achievement.", kr: "마라톤 완주는 큰 성취야." },
      { en: "Getting him to eat broccoli was a real achievement!", kr: "걔한테 브로콜리를 먹인 건 진짜 대단한 성과였어!" }
    ]
  },
  {
    id: "L3-469",
    word: "asleep",
    meaning: "잠든",
    examples: [
      { en: "The baby is finally asleep, so please be quiet.", kr: "아기가 드디어 잠들었으니 조용히 해 주세요." },
      { en: "I fell asleep during the long meeting.", kr: "긴 회의 중에 잠이 들었어요." }
    ]
  },
  {
    id: "L3-139",
    word: "reflect",
    meaning: "반영하다, 비추다",
    examples: [
      { en: "Your grades don't reflect how smart you are.", kr: "성적이 네 똑똑함을 반영하는 건 아니야." },
      { en: "The lake reflects the mountains perfectly.", kr: "호수에 산이 그대로 비쳐요." }
    ]
  },
  {
    id: "L3-140",
    word: "reform",
    meaning: "개혁하다, 개혁, (사람이) 개과천선하다",
    examples: [
      { en: "He says he's reformed, but I don't believe him.", kr: "걔는 사람 됐다고 하는데 난 안 믿어." },
      { en: "Do you think school reform will actually help kids?", kr: "교육 개혁이 진짜 애들한테 도움이 될 것 같아?" }
    ]
  },
  {
    id: "L3-470",
    word: "automatic",
    meaning: "자동의, 자동적인",
    examples: [
      { en: "The doors are automatic, so you don't need to push.", kr: "문이 자동이라서 밀 필요가 없어요." },
      { en: "I set up automatic payments for my phone bill.", kr: "휴대폰 요금을 자동 이체로 설정했어요." }
    ]
  },
  {
    id: "L3-471",
    word: "consent",
    meaning: "동의, 동의하다",
    examples: [
      { en: "We can't share your data without your consent.", kr: "귀하의 동의 없이는 데이터를 공유할 수 없습니다." },
      { en: "Both parents must consent before the school trip.", kr: "수학여행 전에 부모 모두 동의해야 합니다." }
    ]
  },
  {
    id: "L3-472",
    word: "divorce",
    meaning: "이혼, 이혼하다",
    examples: [
      { en: "They decided to get a divorce after ten years.", kr: "그들은 10년 만에 이혼하기로 했어요." },
      { en: "Her parents divorced when she was young.", kr: "그녀의 부모님은 그녀가 어렸을 때 이혼했어요." }
    ]
  },
  {
    id: "L3-473",
    word: "extraordinary",
    meaning: "놀라운, 비범한",
    examples: [
      { en: "The view from the top was extraordinary.", kr: "정상에서 본 경치는 놀라웠어요." },
      { en: "She has an extraordinary talent for languages.", kr: "그녀는 언어에 비범한 재능이 있어요." }
    ]
  },
  {
    id: "L3-733",
    word: "toddler",
    meaning: "아장아장 걷는 아기, 유아",
    examples: [
      { en: "Having a toddler at home is exhausting but fun.", kr: "집에 어린 아기가 있으면 힘들지만 재밌어." },
      { en: "Is this restaurant okay for toddlers?", kr: "이 식당 어린 아이 데려가도 괜찮나요?" }
    ]
  },
  {
    id: "L3-146",
    word: "resort",
    meaning: "(최후 수단에) 의지하다, 리조트",
    examples: [
      { en: "I hope we don't have to resort to cutting jobs.", kr: "인원 감축이라는 수단까지 쓰는 일은 없었으면 좋겠어요." },
      { en: "We stayed at a beach resort in Bali.", kr: "발리에 있는 해변 리조트에서 묵었어요." }
    ]
  },
  {
    id: "L3-734",
    word: "subway",
    meaning: "지하철",
    examples: [
      { en: "Let's just take the subway, it's faster.", kr: "그냥 지하철 타자, 그게 더 빨라." },
      { en: "The subway was so packed this morning.", kr: "오늘 아침 지하철 완전 꽉 찼었어." }
    ]
  },
  {
    id: "L3-735",
    word: "rinse",
    meaning: "헹구다",
    examples: [
      { en: "Just rinse the cups and leave them there.", kr: "컵은 그냥 헹궈서 거기 둬." },
      { en: "Rinse your mouth after brushing.", kr: "양치하고 입 헹궈." }
    ]
  },
  {
    id: "L3-475",
    word: "heritage",
    meaning: "(문화) 유산",
    examples: [
      { en: "Is this palace a World Heritage site?", kr: "이 궁궐이 세계 문화유산이에요?" },
      { en: "My dad is really proud of his Irish heritage.", kr: "우리 아빠는 아일랜드 혈통이라는 걸 정말 자랑스러워해." }
    ]
  },
  {
    id: "L3-476",
    word: "landscape",
    meaning: "풍경, (분야의) 판도",
    examples: [
      { en: "The landscape here is beautiful in the fall.", kr: "여기 풍경은 가을에 정말 아름다워." },
      { en: "AI is quickly changing the job landscape.", kr: "AI가 일자리 판도를 빠르게 바꾸고 있어." }
    ]
  },
  {
    id: "L3-477",
    word: "privacy",
    meaning: "사생활, 개인 정보 보호",
    examples: [
      { en: "Please respect my privacy and knock first.", kr: "내 사생활 좀 존중해 주고 먼저 노크해 줘." },
      { en: "I'm a little worried about privacy on this app.", kr: "이 앱 개인 정보 보호가 좀 걱정돼." }
    ]
  },
  {
    id: "L3-152",
    word: "scenario",
    meaning: "시나리오, 예상되는 상황",
    examples: [
      { en: "Let's plan for the worst-case scenario.", kr: "최악의 시나리오에 대비해서 계획을 세워 두자." },
      { en: "In the best-case scenario, we'll finish by Friday.", kr: "최상의 시나리오라면 금요일까지 끝낼 수 있어요." }
    ]
  },
  {
    id: "L3-736",
    word: "rent",
    meaning: "집세, 월세, 빌리다",
    examples: [
      { en: "How much is your rent here?", kr: "여기 월세 얼마야?" },
      { en: "Let's rent a car and drive along the coast.", kr: "차 빌려서 해안 따라 드라이브하자." }
    ]
  },
  {
    id: "L3-154",
    word: "security",
    meaning: "보안, 안전, 안정",
    examples: [
      { en: "It took forever to get through airport security.", kr: "공항 보안 검색대 통과하는 데 한참 걸렸어요." },
      { en: "Job security is more important to me than salary.", kr: "저한텐 연봉보다 고용 안정이 더 중요해요." }
    ]
  },
  {
    id: "L3-479",
    word: "salary",
    meaning: "급여, 월급",
    examples: [
      { en: "The job offers a good salary and benefits.", kr: "그 일자리는 급여랑 복지가 좋아." },
      { en: "Is the salary negotiable?", kr: "급여는 협상 가능한가요?" }
    ]
  },
  {
    id: "L3-480",
    word: "ambassador",
    meaning: "대사, 홍보대사",
    examples: [
      { en: "She was named a brand ambassador for a sports company.", kr: "그녀는 스포츠 회사 홍보대사로 뽑혔어." },
      { en: "My uncle used to work for the ambassador in Paris.", kr: "우리 삼촌은 예전에 파리에서 대사 밑에서 일했어." }
    ]
  },
  {
    id: "L3-737",
    word: "babysit",
    meaning: "아이를 봐 주다",
    examples: [
      { en: "Could you babysit for us on Saturday night?", kr: "토요일 밤에 우리 애 좀 봐 줄 수 있어?" },
      { en: "I used to babysit my neighbor's kids for pocket money.", kr: "예전에 용돈 벌려고 이웃집 애들을 봐 줬어." }
    ]
  },
  {
    id: "L3-738",
    word: "craving",
    meaning: "갈망, (음식이) 몹시 당김",
    examples: [
      { en: "I have a craving for fried chicken right now.", kr: "지금 치킨이 너무 당겨." },
      { en: "Late-night cravings are ruining my diet.", kr: "야식 욕구 때문에 다이어트가 망하고 있어." }
    ]
  },
  {
    id: "L3-159",
    word: "survey",
    meaning: "설문 조사, 조사하다",
    examples: [
      { en: "Could you take a few minutes to fill out our survey?", kr: "잠깐 시간 내서 설문 조사 좀 작성해 주실래요?" },
      { en: "We surveyed our customers, and most want longer hours.", kr: "고객들을 조사해 봤더니 대부분 영업시간을 늘려 주길 원했어요." }
    ]
  },
  {
    id: "L3-482",
    word: "discount",
    meaning: "할인, 할인하다",
    examples: [
      { en: "Do you offer a discount for groups?", kr: "단체 할인이 있나요?" },
      { en: "I bought these shoes at a 30 percent discount.", kr: "이 신발을 30% 할인된 가격에 샀어요." }
    ]
  },
  {
    id: "L3-161",
    word: "symbol",
    meaning: "상징, 기호",
    examples: [
      { en: "What does this symbol on the washing label mean?", kr: "세탁 라벨에 있는 이 기호 무슨 뜻이야?" },
      { en: "For me, this ring is a symbol of our friendship.", kr: "나한텐 이 반지가 우리 우정의 상징이야." }
    ]
  },
  {
    id: "L3-483",
    word: "exit",
    meaning: "출구, 나가다",
    examples: [
      { en: "The emergency exit is at the back of the room.", kr: "비상구는 방 뒤쪽에 있어요." },
      { en: "Please exit the building through the side door.", kr: "옆문을 통해 건물 밖으로 나가 주세요." }
    ]
  },
  {
    id: "L3-163",
    word: "theme",
    meaning: "주제, 테마",
    examples: [
      { en: "What's the theme of the party this year?", kr: "올해 파티 테마가 뭐야?" },
      { en: "Friendship is the main theme of the movie.", kr: "우정이 그 영화의 주된 주제예요." }
    ]
  },
  {
    id: "L3-164",
    word: "transition",
    meaning: "과도기, 전환",
    examples: [
      { en: "The transition from school to work was hard for me.", kr: "학교에서 직장으로 넘어가는 전환기가 저한텐 힘들었어요." },
      { en: "We're in a transition period, so things are a bit messy.", kr: "지금은 과도기라 좀 정신없어요." }
    ]
  },
  {
    id: "L3-165",
    word: "trend",
    meaning: "유행, 추세, 경향",
    examples: [
      { en: "Is this a new trend on social media?", kr: "이거 SNS에서 새로 유행하는 거야?" },
      { en: "More people work remotely now. It's a growing trend.", kr: "요즘 재택근무하는 사람이 늘고 있어요. 점점 커지는 추세예요." }
    ]
  },
  {
    id: "L3-484",
    word: "gorgeous",
    meaning: "아주 멋진, 아름다운",
    examples: [
      { en: "You look gorgeous in that dress!", kr: "그 드레스 입으니까 정말 멋져요!" },
      { en: "We had gorgeous weather for the wedding.", kr: "결혼식 날 날씨가 정말 화창했어요." }
    ]
  },
  {
    id: "L3-739",
    word: "starving",
    meaning: "배고파 죽겠는, 몹시 배고픈",
    examples: [
      { en: "I'm starving, let's eat now.", kr: "배고파 죽겠어, 지금 먹자." },
      { en: "Aren't you starving? You skipped lunch.", kr: "배 안 고파? 점심 걸렀잖아." }
    ]
  },
  {
    id: "L3-168",
    word: "utility",
    meaning: "공공요금, 공과금, 공공시설",
    examples: [
      { en: "Does the rent include utilities?", kr: "월세에 공과금도 포함돼요?" },
      { en: "My utility bills went way up this winter.", kr: "이번 겨울에 공과금이 확 올랐어요." }
    ]
  },
  {
    id: "L3-169",
    word: "valid",
    meaning: "유효한, 타당한",
    examples: [
      { en: "Is this parking ticket still valid?", kr: "이 주차권 아직 유효해요?" },
      { en: "That's a valid point. I hadn't thought of that.", kr: "타당한 지적이네요. 그건 생각 못 했어요." }
    ]
  },
  {
    id: "L3-170",
    word: "vehicle",
    meaning: "차량, 탈것",
    examples: [
      { en: "Is your vehicle parked in the visitor lot?", kr: "차를 방문객 주차장에 세우셨어요?" },
      { en: "Please don't leave anything valuable in your vehicle.", kr: "차 안에 귀중품을 두지 마세요." }
    ]
  },
  {
    id: "L3-171",
    word: "venue",
    meaning: "장소",
    examples: [
      { en: "The venue for the concert has been changed.", kr: "콘서트 장소가 바뀌었어요." },
      { en: "We still haven't found a venue for the wedding.", kr: "아직 결혼식 장소를 못 구했어요." }
    ]
  },
  {
    id: "L3-172",
    word: "versus",
    meaning: "~ 대(對), ~와 비교하여",
    examples: [
      { en: "It's Korea versus Japan in the final tonight.", kr: "오늘 밤 결승은 한국 대 일본이에요." },
      { en: "Let's compare the cost of renting versus buying.", kr: "월세로 사는 거랑 집을 사는 거랑 비용을 비교해 보자." }
    ]
  },
  {
    id: "L3-173",
    word: "via",
    meaning: "~을 통하여, ~을 경유하여",
    examples: [
      { en: "I'll send you the file via email.", kr: "파일은 이메일로 보내 드릴게요." },
      { en: "We're flying to New York via Chicago.", kr: "시카고를 경유해서 뉴욕으로 가요." }
    ]
  },
  {
    id: "L3-174",
    word: "virtual",
    meaning: "가상의, 온라인의",
    examples: [
      { en: "Can we just have a virtual meeting instead?", kr: "대신 그냥 온라인 회의로 하면 안 될까요?" },
      { en: "It's a virtual tour, so you can see the house online.", kr: "가상 투어라서 온라인으로 집을 볼 수 있어요." }
    ]
  },
  {
    id: "L3-175",
    word: "visible",
    meaning: "눈에 보이는",
    examples: [
      { en: "The mountains are clearly visible from my window.", kr: "제 방 창문에서 산이 선명하게 보여요." },
      { en: "Is the stain still visible after washing?", kr: "빨았는데도 얼룩이 아직 보여요?" }
    ]
  },
  {
    id: "L3-176",
    word: "voluntary",
    meaning: "자발적인, 자율적인",
    examples: [
      { en: "Don't worry, the survey is completely voluntary.", kr: "걱정 마세요, 설문 참여는 완전히 자율이에요." },
      { en: "Is the training mandatory or voluntary?", kr: "그 교육은 필수예요, 아니면 자율이에요?" }
    ]
  },
  {
    id: "L3-661",
    word: "complicated",
    meaning: "복잡한",
    examples: [
      { en: "It's complicated. I'll tell you about it later.", kr: "좀 복잡해. 나중에 얘기해 줄게." },
      { en: "This form is way too complicated to fill out.", kr: "이 서류 작성하기 너무 복잡해요." }
    ]
  },
  {
    id: "L3-485",
    word: "impression",
    meaning: "인상, 느낌",
    examples: [
      { en: "First impressions matter in a job interview.", kr: "면접에서는 첫인상이 중요해요." },
      { en: "I got the impression that he wasn't happy.", kr: "그가 기분이 좋지 않다는 느낌을 받았어요." }
    ]
  },
  {
    id: "L3-179",
    word: "wherever",
    meaning: "어디든지",
    examples: [
      { en: "You can sit wherever you like.", kr: "편한 데 아무 데나 앉으세요." },
      { en: "I'll go wherever the job takes me.", kr: "일 때문이라면 어디든지 갈 거예요." }
    ]
  },
  {
    id: "L3-662",
    word: "ignore",
    meaning: "무시하다, 모른 척하다",
    examples: [
      { en: "Just ignore him. He's in a bad mood today.", kr: "그냥 신경 쓰지 마. 걔 오늘 기분 안 좋아." },
      { en: "Why did you ignore my texts all weekend?", kr: "주말 내내 왜 내 문자 씹었어?" }
    ]
  },
  {
    id: "L3-663",
    word: "relax",
    meaning: "쉬다, 긴장을 풀다",
    examples: [
      { en: "I just want to stay home and relax this weekend.", kr: "이번 주말엔 그냥 집에서 쉬고 싶어요." },
      { en: "Relax, the interview will go fine.", kr: "긴장 풀어, 면접 잘 될 거야." }
    ]
  },
  {
    id: "L3-182",
    word: "whose",
    meaning: "누구의",
    examples: [
      { en: "Whose car is parked outside?", kr: "밖에 주차된 차 누구 거예요?" },
      { en: "She's the person whose advice I trust most.", kr: "그녀는 내가 조언을 가장 믿는 사람이야." }
    ]
  },
  {
    id: "L3-486",
    word: "luxury",
    meaning: "사치(품), 고급(의)",
    examples: [
      { en: "They stayed at a luxury hotel by the beach.", kr: "그들은 해변가의 고급 호텔에 묵었어요." },
      { en: "Having a free weekend is a luxury these days.", kr: "요즘은 주말에 쉬는 것도 사치예요." }
    ]
  },
  {
    id: "L3-184",
    word: "accurate",
    meaning: "정확한",
    examples: [
      { en: "Is this map accurate? I think we're lost.", kr: "이 지도 정확한 거 맞아? 우리 길 잃은 것 같아." },
      { en: "Can you give me an accurate estimate of the cost?", kr: "비용을 정확하게 견적 내 주실 수 있어요?" }
    ]
  },
  {
    id: "L3-185",
    word: "accountable",
    meaning: "책임이 있는",
    examples: [
      { en: "Who's going to be held accountable for this mistake?", kr: "이 실수는 누가 책임지게 되는 거예요?" },
      { en: "I'm accountable for my team's results.", kr: "저는 우리 팀 성과에 책임이 있어요." }
    ]
  },
  {
    id: "L3-740",
    word: "spill",
    meaning: "엎지르다, 쏟다",
    examples: [
      { en: "Oops, I spilled coffee all over the table.", kr: "앗, 테이블에 커피를 다 쏟았어." },
      { en: "Excuse me, someone spilled a drink in aisle three.", kr: "저기요, 3번 통로에 누가 음료를 쏟았어요." }
    ]
  },
  {
    id: "L3-487",
    word: "contribution",
    meaning: "기여, 기부(금)",
    examples: [
      { en: "Thanks for your contribution to the project.", kr: "프로젝트에 기여해 주셔서 감사해요." },
      { en: "Every contribution helps, no matter how small.", kr: "아무리 적어도 기부는 다 도움이 돼요." }
    ]
  },
  {
    id: "L3-188",
    word: "bizarre",
    meaning: "기이한, 아주 이상한",
    examples: [
      { en: "That was the most bizarre dream I've ever had.", kr: "살면서 꾼 꿈 중에 제일 기이했어." },
      { en: "It's bizarre that nobody noticed the mistake.", kr: "아무도 그 실수를 못 알아챘다니 정말 이상하네요." }
    ]
  },
  {
    id: "L3-488",
    word: "deny",
    meaning: "부인하다, 거절하다",
    examples: [
      { en: "He denied taking the money from the drawer.", kr: "그는 서랍에서 돈을 가져간 것을 부인했어요." },
      { en: "My request for extra vacation days was denied.", kr: "추가 휴가 신청이 거절됐어요." }
    ]
  },
  {
    id: "L3-489",
    word: "extend",
    meaning: "연장하다, 늘리다",
    examples: [
      { en: "Can I extend my stay for two more nights?", kr: "이틀 더 숙박을 연장할 수 있을까요?" },
      { en: "The store extended its hours for the holidays.", kr: "그 가게는 연휴 동안 영업시간을 늘렸어요." }
    ]
  },
  {
    id: "L3-490",
    word: "flood",
    meaning: "홍수, 쇄도하다",
    examples: [
      { en: "Our basement flooded during the storm.", kr: "폭풍 때 우리 집 지하실이 물에 잠겼어." },
      { en: "We were flooded with calls after the ad came out.", kr: "광고 나간 뒤에 전화가 쏟아졌어." }
    ]
  },
  {
    id: "L3-192",
    word: "consult",
    meaning: "상담하다, 참고하다",
    examples: [
      { en: "You should consult a doctor about your symptoms.", kr: "증상에 대해 의사와 상담해 보세요." },
      { en: "Let me consult my calendar and get back to you.", kr: "제 일정표를 참고해 보고 다시 연락드릴게요." }
    ]
  },
  {
    id: "L3-193",
    word: "contrary",
    meaning: "반대의, (on the contrary) 오히려",
    examples: [
      { en: "I'm not tired. On the contrary, I feel great!", kr: "안 피곤해. 오히려 기분이 엄청 좋아!" },
      { en: "Contrary to popular belief, bats aren't actually blind.", kr: "흔히 알려진 것과 반대로 박쥐는 사실 앞을 못 보는 게 아니에요." }
    ]
  },
  {
    id: "L3-194",
    word: "convenient",
    meaning: "편리한",
    examples: [
      { en: "Is tomorrow at 3 convenient for you?", kr: "내일 3시가 편하세요?" },
      { en: "The hotel is in a really convenient location.", kr: "호텔 위치가 정말 편리해요." }
    ]
  },
  {
    id: "L3-491",
    word: "impressed",
    meaning: "감명받은, 좋은 인상을 받은",
    examples: [
      { en: "I was impressed by her presentation skills.", kr: "그녀의 발표 실력에 감명받았어요." },
      { en: "The client seemed impressed with our proposal.", kr: "고객이 우리 제안서에 좋은 인상을 받은 것 같았어요." }
    ]
  },
  {
    id: "L3-492",
    word: "punishment",
    meaning: "처벌, 벌",
    examples: [
      { en: "Being grounded was his punishment for lying.", kr: "외출 금지가 거짓말한 벌이었어." },
      { en: "Doing the dishes for a week? That's a harsh punishment!", kr: "일주일 동안 설거지? 그건 너무 가혹한 벌이다!" }
    ]
  },
  {
    id: "L3-741",
    word: "suitcase",
    meaning: "여행 가방, 캐리어",
    examples: [
      { en: "My suitcase is too heavy. I have to pay extra.", kr: "캐리어가 너무 무거워서 추가 요금 내야 해." },
      { en: "Have you finished packing your suitcase yet?", kr: "캐리어 짐 다 쌌어?" }
    ]
  },
  {
    id: "L3-493",
    word: "rapidly",
    meaning: "빠르게, 급속히",
    examples: [
      { en: "Prices are rising rapidly this year.", kr: "올해 물가가 빠르게 오르고 있어." },
      { en: "Things are changing rapidly at work these days.", kr: "요즘 회사 상황이 빠르게 바뀌고 있어." }
    ]
  },
  {
    id: "L3-494",
    word: "upcoming",
    meaning: "다가오는, 곧 있을",
    examples: [
      { en: "Are you ready for the upcoming exam?", kr: "다가오는 시험 준비됐어?" },
      { en: "Check our website for upcoming events.", kr: "곧 있을 행사는 저희 웹사이트에서 확인하세요." }
    ]
  },
  {
    id: "L3-495",
    word: "alert",
    meaning: "경보, 알림, 정신이 깨어 있는",
    examples: [
      { en: "I got a weather alert on my phone.", kr: "휴대폰으로 기상 경보를 받았어요." },
      { en: "Stay alert while driving at night.", kr: "밤에 운전할 때는 정신을 바짝 차리세요." }
    ]
  }
];

const wordsLevel3_Part3 = [
  {
    id: "L3-496",
    word: "brave",
    meaning: "용감한",
    examples: [
      { en: "It was brave of you to speak up in the meeting.", kr: "회의에서 나서서 말하다니 정말 용감했어." },
      { en: "Come on, be brave and ask her out.", kr: "에이, 용기 내서 그녀한테 데이트 신청해 봐." }
    ]
  },
  {
    id: "L3-497",
    word: "difficulty",
    meaning: "어려움, 곤란",
    examples: [
      { en: "I had difficulty finding the hotel.", kr: "호텔 찾는 데 애먹었어." },
      { en: "Let me know if you have any difficulty logging in.", kr: "로그인하는 데 문제 있으면 알려 주세요." }
    ]
  },
  {
    id: "L3-498",
    word: "greatly",
    meaning: "크게, 대단히",
    examples: [
      { en: "Your help would be greatly appreciated.", kr: "도와주시면 정말 감사하겠습니다." },
      { en: "My English has greatly improved since I started this app.", kr: "이 앱 시작하고 나서 영어가 많이 늘었어." }
    ]
  },
  {
    id: "L3-499",
    word: "infection",
    meaning: "감염, 염증",
    examples: [
      { en: "I think I have an ear infection. It really hurts.", kr: "귀에 염증이 생긴 것 같아. 진짜 아파." },
      { en: "Keep the cut clean, or you'll get an infection.", kr: "상처 깨끗하게 해, 안 그러면 감염돼." }
    ]
  },
  {
    id: "L3-500",
    word: "intention",
    meaning: "의도, 생각",
    examples: [
      { en: "I had no intention of hurting your feelings.", kr: "네 기분 상하게 할 생각은 전혀 없었어." },
      { en: "I have every intention of paying you back.", kr: "돈은 꼭 갚을 생각이야." }
    ]
  },
  {
    id: "L3-501",
    word: "pretend",
    meaning: "~인 척하다",
    examples: [
      { en: "Just pretend you didn't see me, okay?", kr: "그냥 나 못 본 척해, 알았지?" },
      { en: "Let's not pretend that everything is fine.", kr: "다 괜찮은 척하지 말자." }
    ]
  },
  {
    id: "L3-207",
    word: "expand",
    meaning: "확장하다, 넓히다",
    examples: [
      { en: "We're expanding the store, so it'll be closed next week.", kr: "매장 확장 공사 때문에 다음 주에 문 닫아요." },
      { en: "I want to expand my network at this conference.", kr: "이번 컨퍼런스에서 인맥을 넓히고 싶어요." }
    ]
  },
  {
    id: "L3-742",
    word: "outgoing",
    meaning: "외향적인, 사교적인",
    examples: [
      { en: "She's so outgoing, she talks to everyone.", kr: "걔는 진짜 외향적이라 아무하고나 얘기해." },
      { en: "I'm not very outgoing at parties.", kr: "나는 파티에서 그렇게 사교적이진 않아." }
    ]
  },
  {
    id: "L3-503",
    word: "substantial",
    meaning: "상당한, 많은",
    examples: [
      { en: "That's a substantial amount of money to spend on a bag.", kr: "가방 하나에 쓰기엔 상당히 큰돈이네." },
      { en: "We got a pretty substantial raise this year.", kr: "올해 월급이 꽤 많이 올랐어." }
    ]
  },
  {
    id: "L3-210",
    word: "external",
    meaning: "외부의, 외장의",
    examples: [
      { en: "We might need some external help on this project.", kr: "이 프로젝트엔 외부 도움이 좀 필요할 것 같아요." },
      { en: "Do I need an external hard drive for backups?", kr: "백업하려면 외장 하드가 필요할까?" }
    ]
  },
  {
    id: "L3-504",
    word: "complaint",
    meaning: "불만, 항의",
    examples: [
      { en: "We got a complaint from the neighbors about the noise.", kr: "이웃들한테서 소음 때문에 항의가 들어왔어." },
      { en: "I'd like to make a complaint about my room.", kr: "제 방 문제로 항의하고 싶은데요." }
    ]
  },
  {
    id: "L3-505",
    word: "cure",
    meaning: "치료법, 치료하다, 해결하다",
    examples: [
      { en: "There's no cure for the common cold, so just rest.", kr: "감기엔 약이 없으니까 그냥 푹 쉬어." },
      { en: "Nothing cures a bad day like fried chicken.", kr: "기분 안 좋은 날엔 치킨만 한 약이 없지." }
    ]
  },
  {
    id: "L3-506",
    word: "desperate",
    meaning: "절실한, 필사적인",
    examples: [
      { en: "I'm desperate for a cup of coffee.", kr: "커피 한 잔이 너무 간절해." },
      { en: "Don't look so desperate. Just be yourself.", kr: "너무 절박해 보이지 말고 그냥 너답게 해." }
    ]
  },
  {
    id: "L3-507",
    word: "feedback",
    meaning: "피드백, 의견",
    examples: [
      { en: "Thanks for your feedback on my report.", kr: "제 보고서에 피드백 주셔서 감사합니다." },
      { en: "Can you give me some honest feedback on my presentation?", kr: "제 발표에 대해 솔직한 피드백 좀 주실래요?" }
    ]
  },
  {
    id: "L3-508",
    word: "innovation",
    meaning: "혁신",
    examples: [
      { en: "Our boss keeps talking about innovation, but nothing changes.", kr: "우리 사장님은 맨날 혁신 얘기만 하는데 바뀌는 건 없어." },
      { en: "Honestly, this new feature isn't much of an innovation.", kr: "솔직히 이 새 기능은 혁신이라고 할 것까진 없어." }
    ]
  },
  {
    id: "L3-743",
    word: "nearby",
    meaning: "근처에, 가까운",
    examples: [
      { en: "Is there a good coffee shop nearby?", kr: "근처에 괜찮은 카페 있어?" },
      { en: "My parents live nearby, so I visit a lot.", kr: "부모님이 근처에 사셔서 자주 가." }
    ]
  },
  {
    id: "L3-217",
    word: "goal",
    meaning: "목표, (축구 등의) 골",
    examples: [
      { en: "My goal this year is to run a half marathon.", kr: "올해 내 목표는 하프 마라톤 뛰는 거야." },
      { en: "Did you see that goal last night? Unbelievable!", kr: "어젯밤 그 골 봤어? 말도 안 돼!" }
    ]
  },
  {
    id: "L3-509",
    word: "investigate",
    meaning: "조사하다, 알아보다",
    examples: [
      { en: "We'll investigate the problem and get back to you.", kr: "문제를 확인해 보고 다시 연락드리겠습니다." },
      { en: "I heard a strange noise downstairs, so I went to investigate.", kr: "아래층에서 이상한 소리가 나서 확인하러 내려갔어." }
    ]
  },
  {
    id: "L3-219",
    word: "graphic",
    meaning: "그래픽의, 생생한, 적나라한",
    examples: [
      { en: "That movie was way too graphic for me.", kr: "그 영화는 나한테 너무 적나라했어." },
      { en: "She works as a graphic designer at a startup.", kr: "그녀는 스타트업에서 그래픽 디자이너로 일해." }
    ]
  },
  {
    id: "L3-744",
    word: "sour",
    meaning: "신, 시큼한, (우유가) 상한",
    examples: [
      { en: "This lemonade is way too sour.", kr: "이 레모네이드 너무 셔." },
      { en: "I think the milk went sour.", kr: "우유 상한 것 같아." }
    ]
  },
  {
    id: "L3-221",
    word: "hierarchy",
    meaning: "위계질서, 서열",
    examples: [
      { en: "There's not much hierarchy at our startup.", kr: "우리 스타트업은 위계질서가 별로 없어." },
      { en: "In Korean companies, hierarchy is really important.", kr: "한국 회사에서는 위계질서가 정말 중요해." }
    ]
  },
  {
    id: "L3-510",
    word: "presentation",
    meaning: "발표, 프레젠테이션",
    examples: [
      { en: "I have to give a presentation tomorrow morning.", kr: "나 내일 아침에 발표해야 돼." },
      { en: "Your presentation was great! Everyone loved it.", kr: "발표 정말 좋았어요! 다들 엄청 좋아했어요." }
    ]
  },
  {
    id: "L3-511",
    word: "stability",
    meaning: "안정(성)",
    examples: [
      { en: "Honestly, I care more about job stability than salary.", kr: "솔직히 난 연봉보다 직업 안정성이 더 중요해." },
      { en: "The new update really improved the app's stability.", kr: "새 업데이트로 앱 안정성이 확실히 좋아졌어." }
    ]
  },
  {
    id: "L3-224",
    word: "impact",
    meaning: "영향, 영향을 주다",
    examples: [
      { en: "How will this change impact our team?", kr: "이 변화가 우리 팀에 어떤 영향을 줄까요?" },
      { en: "Your speech really had an impact on me.", kr: "네 연설이 나한테 정말 큰 영향을 줬어." }
    ]
  },
  {
    id: "L3-512",
    word: "unlikely",
    meaning: "가능성이 낮은, ~할 것 같지 않은",
    examples: [
      { en: "It's unlikely to rain this weekend, so let's go camping.", kr: "이번 주말엔 비 올 가능성이 낮으니까 캠핑 가자." },
      { en: "He's unlikely to say yes, but it's worth asking.", kr: "그 사람이 승낙할 것 같진 않지만 물어볼 만은 해." }
    ]
  },
  {
    id: "L3-745",
    word: "selfish",
    meaning: "이기적인",
    examples: [
      { en: "Don't be selfish, share some with your brother.", kr: "이기적으로 굴지 말고 동생이랑 좀 나눠." },
      { en: "Is it selfish to want some time alone?", kr: "혼자 있고 싶은 게 이기적인 걸까?" }
    ]
  },
  {
    id: "L3-513",
    word: "calendar",
    meaning: "달력, 일정표",
    examples: [
      { en: "Let me check my calendar and get back to you.", kr: "일정 확인해 보고 다시 연락드릴게요." },
      { en: "I'll put your birthday on my calendar so I don't forget.", kr: "안 잊어버리게 네 생일 달력에 적어 둘게." }
    ]
  },
  {
    id: "L3-514",
    word: "enable",
    meaning: "(기능을) 켜다, 가능하게 하다",
    examples: [
      { en: "Please enable notifications to get updates.", kr: "업데이트를 받으려면 알림을 켜 주세요." },
      { en: "How do I enable dark mode on this phone?", kr: "이 폰에서 다크 모드 어떻게 켜?" }
    ]
  },
  {
    id: "L3-515",
    word: "invite",
    meaning: "초대하다",
    examples: [
      { en: "Thanks for inviting me to your party!", kr: "파티에 초대해 줘서 고마워!" },
      { en: "Should we invite your coworkers to the housewarming?", kr: "집들이에 네 회사 동료들도 초대할까?" }
    ]
  },
  {
    id: "L3-516",
    word: "phrase",
    meaning: "표현, 구절",
    examples: [
      { en: "Can you explain what this phrase means?", kr: "이 표현이 무슨 뜻인지 설명해 줄 수 있어?" },
      { en: "Learning a few useful phrases makes travel much easier.", kr: "유용한 표현 몇 개만 알아도 여행이 훨씬 편해져." }
    ]
  },
  {
    id: "L3-517",
    word: "wisdom",
    meaning: "지혜, 조언",
    examples: [
      { en: "Thanks for the words of wisdom, Grandma.", kr: "좋은 말씀 감사해요, 할머니." },
      { en: "My grandpa is full of wisdom. You should talk to him.", kr: "우리 할아버지는 지혜가 넘치셔. 너도 얘기 좀 해 봐." }
    ]
  },
  {
    id: "L3-518",
    word: "awkward",
    meaning: "어색한, 곤란한, 민망한",
    examples: [
      { en: "There was an awkward silence after his joke.", kr: "그 사람 농담 끝나고 어색한 침묵이 흘렀어." },
      { en: "It's awkward to ask my boss for a raise.", kr: "상사한테 월급 올려 달라고 하기가 좀 민망해." }
    ]
  },
  {
    id: "L3-519",
    word: "celebrity",
    meaning: "유명인, 연예인",
    examples: [
      { en: "Guess what? A celebrity came into our cafe today!", kr: "있잖아, 오늘 우리 카페에 연예인 왔어!" },
      { en: "Do you have a celebrity crush?", kr: "좋아하는 연예인 있어?" }
    ]
  },
  {
    id: "L3-520",
    word: "eligible",
    meaning: "자격이 있는, 대상이 되는",
    examples: [
      { en: "You're eligible for a full refund within 30 days.", kr: "30일 이내에는 전액 환불 받으실 수 있어요." },
      { en: "Am I eligible for the student discount?", kr: "저도 학생 할인 받을 수 있나요?" }
    ]
  },
  {
    id: "L3-521",
    word: "intelligent",
    meaning: "똑똑한, 지능적인",
    examples: [
      { en: "She's really intelligent, but she never shows off.", kr: "그녀는 진짜 똑똑한데 절대 잘난 척을 안 해." },
      { en: "Wow, your dog is so intelligent!", kr: "와, 너네 강아지 정말 똑똑하다!" }
    ]
  },
  {
    id: "L3-522",
    word: "reliable",
    meaning: "믿을 만한, 신뢰할 수 있는",
    examples: [
      { en: "This car is old, but it's very reliable.", kr: "이 차 오래됐지만 아주 믿을 만해." },
      { en: "Is this website reliable? The prices seem too low.", kr: "이 사이트 믿을 만해? 가격이 너무 싼 것 같은데." }
    ]
  },
  {
    id: "L3-523",
    word: "sacrifice",
    meaning: "희생, 희생하다",
    examples: [
      { en: "My parents made a lot of sacrifices for me.", kr: "우리 부모님은 날 위해 많은 걸 희생하셨어." },
      { en: "I don't want to sacrifice my health for my career.", kr: "일 때문에 건강을 희생하고 싶진 않아." }
    ]
  },
  {
    id: "L3-524",
    word: "satisfied",
    meaning: "만족한",
    examples: [
      { en: "Are you satisfied with the service?", kr: "서비스에 만족하셨나요?" },
      { en: "I'm not satisfied with how my haircut turned out.", kr: "이번에 머리 자른 게 별로 만족스럽지 않아." }
    ]
  },
  {
    id: "L3-525",
    word: "spare",
    meaning: "여분의, (시간 등을) 내주다",
    examples: [
      { en: "Do you have a spare charger I can borrow?", kr: "빌릴 수 있는 여분 충전기 있어?" },
      { en: "Can you spare a few minutes to talk?", kr: "잠깐 얘기할 시간 좀 내줄 수 있어?" }
    ]
  },
  {
    id: "L3-526",
    word: "stranger",
    meaning: "낯선 사람, 모르는 사람",
    examples: [
      { en: "A stranger helped me carry my bags up the stairs.", kr: "모르는 사람이 계단 위로 짐 옮기는 걸 도와줬어." },
      { en: "Hey, don't be a stranger! Call me sometime.", kr: "야, 연락 좀 하고 지내! 가끔 전화해." }
    ]
  },
  {
    id: "L3-527",
    word: "acceptable",
    meaning: "받아들일 수 있는, 괜찮은",
    examples: [
      { en: "Is it acceptable to wear jeans to the office?", kr: "사무실에 청바지 입고 가도 괜찮아요?" },
      { en: "Sorry, but being two hours late is not acceptable.", kr: "미안하지만 두 시간 늦는 건 용납이 안 돼." }
    ]
  },
  {
    id: "L3-528",
    word: "dispute",
    meaning: "분쟁, 이의를 제기하다",
    examples: [
      { en: "I called the bank to dispute a charge on my card.", kr: "카드 결제 건에 이의 제기하려고 은행에 전화했어." },
      { en: "They're in a dispute with their landlord over the deposit.", kr: "그 사람들 보증금 때문에 집주인이랑 분쟁 중이야." }
    ]
  },
  {
    id: "L3-529",
    word: "margin",
    meaning: "(이익) 폭, 차이, 여백",
    examples: [
      { en: "The profit margin on coffee is surprisingly high.", kr: "커피는 이윤이 생각보다 엄청 높아." },
      { en: "Can you make the margins a little wider?", kr: "여백을 조금만 더 넓혀 줄래?" }
    ]
  },
  {
    id: "L3-530",
    word: "announce",
    meaning: "발표하다, 알리다",
    examples: [
      { en: "They announced their engagement at a family dinner.", kr: "그 둘은 가족 저녁 자리에서 약혼을 발표했어." },
      { en: "When are they going to announce the winners?", kr: "우승자는 언제 발표한대?" }
    ]
  },
  {
    id: "L3-531",
    word: "breathe",
    meaning: "숨 쉬다, 호흡하다",
    examples: [
      { en: "Just relax and breathe. You've got this.", kr: "긴장 풀고 숨 쉬어. 너 할 수 있어." },
      { en: "The subway was so crowded I could barely breathe.", kr: "지하철이 너무 붐벼서 숨도 제대로 못 쉬었어." }
    ]
  },
  {
    id: "L3-532",
    word: "convince",
    meaning: "설득하다, 납득시키다",
    examples: [
      { en: "I convinced my boss to let me work from home.", kr: "상사를 설득해서 재택근무 허락받았어." },
      { en: "You don't have to convince me; I already agree.", kr: "나 설득 안 해도 돼, 이미 동의하니까." }
    ]
  },
  {
    id: "L3-533",
    word: "panic",
    meaning: "당황하다, 공황, 극심한 공포",
    examples: [
      { en: "Don't panic; we still have time to fix this.", kr: "당황하지 마, 아직 고칠 시간 있어." },
      { en: "I panicked when I couldn't find my passport.", kr: "여권이 안 보여서 완전 패닉 왔어." }
    ]
  },
  {
    id: "L3-248",
    word: "leverage",
    meaning: "활용하다, 협상력, 영향력",
    examples: [
      { en: "Let's leverage AI to save time on reports.", kr: "AI를 활용해서 보고서 쓰는 시간을 줄여 봅시다." },
      { en: "Another job offer would give you some leverage.", kr: "다른 회사 오퍼가 있으면 협상할 때 유리할 거야." }
    ]
  },
  {
    id: "L3-534",
    word: "arrangement",
    meaning: "합의, 준비, (꽃) 장식",
    examples: [
      { en: "I have an arrangement with my boss to work from home on Fridays.", kr: "금요일엔 재택근무하기로 상사랑 합의했어." },
      { en: "Who did the flower arrangements? They're beautiful.", kr: "꽃 장식 누가 했어요? 너무 예뻐요." }
    ]
  },
  {
    id: "L3-535",
    word: "enormous",
    meaning: "거대한, 엄청난",
    examples: [
      { en: "Have you seen their new TV? It's enormous!", kr: "걔네 새 TV 봤어? 완전 거대해!" },
      { en: "The portions here are enormous, so let's share.", kr: "여기 양이 엄청 많으니까 나눠 먹자." }
    ]
  },
  {
    id: "L3-536",
    word: "inquiry",
    meaning: "문의, 조사",
    examples: [
      { en: "We've had a lot of inquiries about the new menu.", kr: "새 메뉴에 대한 문의가 많이 들어왔어요." },
      { en: "I'm calling with an inquiry about my order.", kr: "제 주문 관련해서 문의드리려고 전화했어요." }
    ]
  },
  {
    id: "L3-537",
    word: "lonely",
    meaning: "외로운, 쓸쓸한",
    examples: [
      { en: "I felt lonely when I first moved to the city.", kr: "처음 이 도시로 이사 왔을 땐 외로웠어." },
      { en: "Don't you get lonely living by yourself?", kr: "혼자 살면 외롭지 않아?" }
    ]
  },
  {
    id: "L3-538",
    word: "nevertheless",
    meaning: "그럼에도 불구하고, 그래도",
    examples: [
      { en: "I know it's risky. Nevertheless, I want to try.", kr: "위험한 거 알아. 그래도 해 보고 싶어." },
      { en: "It didn't work out, but thanks nevertheless.", kr: "잘 안 됐지만 그래도 고마워." }
    ]
  },
  {
    id: "L3-539",
    word: "rude",
    meaning: "무례한, 버릇없는",
    examples: [
      { en: "It's rude to check your phone during dinner.", kr: "밥 먹을 때 휴대폰 보는 건 예의가 아니야." },
      { en: "I'm sorry if I sounded rude on the phone.", kr: "통화할 때 무례하게 들렸다면 죄송해요." }
    ]
  },
  {
    id: "L3-540",
    word: "signature",
    meaning: "서명, 대표적인",
    examples: [
      { en: "I just need your signature at the bottom here.", kr: "여기 아래에 서명만 해 주시면 돼요." },
      { en: "What's the chef's signature dish?", kr: "셰프 대표 메뉴가 뭐예요?" }
    ]
  },
  {
    id: "L3-541",
    word: "destination",
    meaning: "목적지, 여행지",
    examples: [
      { en: "What's your final destination?", kr: "최종 목적지가 어디세요?" },
      { en: "Where's your dream vacation destination?", kr: "꿈꾸는 휴가 여행지가 어디야?" }
    ]
  },
  {
    id: "L3-542",
    word: "upgrade",
    meaning: "업그레이드하다, 상위 등급으로 바꾸다",
    examples: [
      { en: "I finally upgraded my phone to the latest model.", kr: "드디어 폰을 최신 모델로 바꿨어." },
      { en: "Is there any chance I could get a free upgrade?", kr: "혹시 무료로 업그레이드 받을 수 있을까요?" }
    ]
  },
  {
    id: "L3-543",
    word: "bath",
    meaning: "목욕, 욕조",
    examples: [
      { en: "I take a hot bath after a long day at work.", kr: "힘든 하루 끝나면 뜨거운 물에 목욕해." },
      { en: "Can you give the kids a bath tonight?", kr: "오늘 밤에 애들 목욕 좀 시켜 줄래?" }
    ]
  },
  {
    id: "L3-544",
    word: "chase",
    meaning: "뒤쫓다, 좇다, 쫓아다니다",
    examples: [
      { en: "Our dog chased a cat all the way down the street.", kr: "우리 개가 길 끝까지 고양이를 쫓아갔어." },
      { en: "Stop chasing guys who don't text you back.", kr: "답장도 안 하는 남자들 그만 쫓아다녀." }
    ]
  },
  {
    id: "L3-545",
    word: "exposure",
    meaning: "노출, (경험할) 기회, 접함",
    examples: [
      { en: "Too much sun exposure is bad for your skin.", kr: "햇볕에 너무 많이 노출되면 피부에 안 좋아." },
      { en: "This internship gave me a lot of exposure to real projects.", kr: "이번 인턴십으로 실제 프로젝트를 많이 경험해 봤어." }
    ]
  },
  {
    id: "L3-546",
    word: "happiness",
    meaning: "행복",
    examples: [
      { en: "Money can't buy happiness, but it helps pay the rent.", kr: "돈으로 행복을 살 순 없지만 월세 내는 덴 도움 되잖아." },
      { en: "I wish you both lots of happiness together.", kr: "두 분 함께 행복하시길 바랄게요." }
    ]
  },
  {
    id: "L3-547",
    word: "horrible",
    meaning: "끔찍한, 지독한",
    examples: [
      { en: "The traffic this morning was absolutely horrible.", kr: "오늘 아침 교통 체증 진짜 끔찍했어." },
      { en: "I have a horrible headache, so I'm leaving early.", kr: "머리가 너무 아파서 일찍 들어갈게요." }
    ]
  },
  {
    id: "L3-548",
    word: "legend",
    meaning: "전설, 전설적인 인물, 최고",
    examples: [
      { en: "Our old manager is a legend in this industry.", kr: "우리 예전 팀장님은 이 업계의 전설이야." },
      { en: "You brought pizza for everyone? You're a legend!", kr: "다 먹으라고 피자 사 왔어? 너 진짜 최고다!" }
    ]
  },
  {
    id: "L3-549",
    word: "muscle",
    meaning: "근육",
    examples: [
      { en: "I pulled a muscle in my back while moving boxes.", kr: "상자 옮기다가 허리 근육이 결렸어." },
      { en: "Wow, you've really built some muscle!", kr: "와, 너 근육 진짜 많이 붙었다!" }
    ]
  },
  {
    id: "L3-550",
    word: "procedure",
    meaning: "절차, 수술, 시술",
    examples: [
      { en: "What's the procedure for getting a refund?", kr: "환불 받으려면 절차가 어떻게 돼요?" },
      { en: "Don't worry, it's a simple procedure that takes an hour.", kr: "걱정 마세요, 한 시간이면 끝나는 간단한 시술이에요." }
    ]
  },
  {
    id: "L3-551",
    word: "rank",
    meaning: "순위, 계급, 순위를 차지하다",
    examples: [
      { en: "Where does this place rank on your list of favorite restaurants?", kr: "네 맛집 리스트에서 여기는 몇 위쯤이야?" },
      { en: "What rank was he in the army?", kr: "그 사람 군대에서 계급이 뭐였어?" }
    ]
  },
  {
    id: "L3-552",
    word: "retired",
    meaning: "은퇴한",
    examples: [
      { en: "My dad is retired and spends his days fishing.", kr: "우리 아빠는 은퇴하시고 매일 낚시하며 지내셔." },
      { en: "Are your parents retired yet?", kr: "부모님은 은퇴하셨어?" }
    ]
  },
  {
    id: "L3-553",
    word: "tag",
    meaning: "꼬리표, 태그, 태그하다",
    examples: [
      { en: "Did you check the price tag before buying it?", kr: "사기 전에 가격표 확인했어?" },
      { en: "Tag me in the photos from the team dinner.", kr: "회식 사진에 나 태그해 줘." }
    ]
  },
  {
    id: "L3-554",
    word: "thread",
    meaning: "실, (메시지·이메일의) 스레드",
    examples: [
      { en: "I need a needle and thread to fix this button.", kr: "이 단추 달려면 바늘이랑 실이 필요해." },
      { en: "I'll reply to your question in the email thread.", kr: "질문은 메일 스레드에 답장할게요." }
    ]
  },
  {
    id: "L3-555",
    word: "wage",
    meaning: "임금, 급여, 시급",
    examples: [
      { en: "Did you hear they raised the minimum wage again?", kr: "최저임금 또 올랐다는 얘기 들었어?" },
      { en: "The wage is low, but the hours are flexible.", kr: "시급은 낮은데 근무 시간이 유연해." }
    ]
  },
  {
    id: "L3-746",
    word: "greasy",
    meaning: "기름진, 느끼한, 기름기 있는",
    examples: [
      { en: "I'm craving something greasy, like fries.", kr: "감자튀김 같은 기름진 게 땡겨." },
      { en: "My hair gets greasy so fast.", kr: "내 머리는 진짜 금방 떡져." }
    ]
  },
  {
    id: "L3-556",
    word: "avenue",
    meaning: "대로, (해결) 방안",
    examples: [
      { en: "Our hotel is on the main avenue, so it's easy to find.", kr: "우리 호텔은 큰길가에 있어서 찾기 쉬워." },
      { en: "Let's explore every avenue before we give up.", kr: "포기하기 전에 모든 방법을 다 알아보자." }
    ]
  },
  {
    id: "L3-557",
    word: "commitment",
    meaning: "약속, 헌신, 책무",
    examples: [
      { en: "Sorry, I can't make it. I have a prior commitment on Friday.", kr: "미안, 못 가. 금요일에 선약이 있어." },
      { en: "He's scared of commitment, so he never dates anyone for long.", kr: "그 사람은 진지한 관계를 무서워해서 연애를 오래 못 해." }
    ]
  },
  {
    id: "L3-558",
    word: "custom",
    meaning: "관습, 풍습, 맞춤의",
    examples: [
      { en: "In Korea, it's a custom to bow when you greet someone.", kr: "한국에서는 인사할 때 고개 숙이는 게 관습이야." },
      { en: "We ordered custom T-shirts for the company picnic.", kr: "회사 야유회 때 입을 맞춤 티셔츠를 주문했어." }
    ]
  },
  {
    id: "L3-559",
    word: "desk",
    meaning: "책상, 창구, 데스크",
    examples: [
      { en: "Please leave the documents on my desk.", kr: "서류는 제 책상 위에 두세요." },
      { en: "Ask at the front desk if you need extra towels.", kr: "수건이 더 필요하시면 프런트에 말씀하세요." }
    ]
  },
  {
    id: "L3-560",
    word: "electricity",
    meaning: "전기",
    examples: [
      { en: "Our electricity bill doubled this summer.", kr: "이번 여름에 전기 요금이 두 배로 나왔어." },
      { en: "The storm knocked out the electricity for hours.", kr: "폭풍 때문에 몇 시간 동안 전기가 나갔어." }
    ]
  },
  {
    id: "L3-561",
    word: "gym",
    meaning: "헬스장, 체육관",
    examples: [
      { en: "I go to the gym before work three times a week.", kr: "일주일에 세 번 출근 전에 헬스장 가." },
      { en: "Want to hit the gym with me after work?", kr: "퇴근하고 나랑 헬스장 갈래?" }
    ]
  },
  {
    id: "L3-562",
    word: "horror",
    meaning: "공포, 경악",
    examples: [
      { en: "I can't watch horror movies alone at night.", kr: "밤에 혼자서는 공포 영화 못 봐." },
      { en: "To my horror, I'd sent the email to the wrong client.", kr: "맙소사, 내가 그 메일을 엉뚱한 고객한테 보냈더라고." }
    ]
  },
  {
    id: "L3-563",
    word: "rear",
    meaning: "뒤쪽, 뒤의",
    examples: [
      { en: "Please exit through the rear door of the bus.", kr: "버스 뒷문으로 내려 주세요." },
      { en: "Someone hit the rear of my car in the parking lot.", kr: "주차장에서 누가 내 차 뒤쪽을 박았어." }
    ]
  },
  {
    id: "L3-564",
    word: "strategic",
    meaning: "전략적인",
    examples: [
      { en: "We need to be more strategic about marketing.", kr: "마케팅은 좀 더 전략적으로 해야 해요." },
      { en: "Sitting near the exit was a strategic move.", kr: "출구 근처에 앉은 건 전략적인 선택이었어." }
    ]
  },
  {
    id: "L3-281",
    word: "articulate",
    meaning: "분명히 표현하다, 말로 표현하다",
    examples: [
      { en: "She articulated her ideas really clearly in the meeting.", kr: "그녀는 회의에서 자기 생각을 정말 명확하게 표현했어." },
      { en: "I find it hard to articulate how I feel.", kr: "내 기분을 말로 표현하기가 어려워." }
    ]
  },
  {
    id: "L3-747",
    word: "grab",
    meaning: "잡다, 간단히 먹다, 가져오다",
    examples: [
      { en: "Want to grab lunch later?", kr: "이따 점심 간단히 먹을래?" },
      { en: "Can you grab my jacket on your way out?", kr: "나가는 길에 내 재킷 좀 가져다줄래?" }
    ]
  },
  {
    id: "L3-283",
    word: "candid",
    meaning: "솔직한",
    examples: [
      { en: "Thanks for being so candid with me.", kr: "나한테 그렇게 솔직하게 말해 줘서 고마워." },
      { en: "To be candid, I don't think the plan will work.", kr: "솔직히 말하면 그 계획은 안 될 것 같아요." }
    ]
  },
  {
    id: "L3-284",
    word: "circulate",
    meaning: "(소문 등이) 퍼지다, 순환하다",
    examples: [
      { en: "Open the window to let the air circulate.", kr: "공기 좀 통하게 창문 열어." },
      { en: "A rumor is circulating that our boss is quitting.", kr: "사장님이 그만둔다는 소문이 돌고 있어." }
    ]
  },
  {
    id: "L3-565",
    word: "wire",
    meaning: "전선, 철사, 송금하다",
    examples: [
      { en: "Careful, don't trip over that wire.", kr: "조심해, 그 전선에 걸려 넘어지지 마." },
      { en: "I'll wire the money to your account tomorrow.", kr: "내일 네 계좌로 돈 송금할게." }
    ]
  },
  {
    id: "L3-566",
    word: "alright",
    meaning: "괜찮은, 좋아",
    examples: [
      { en: "Are you alright? You look a little pale.", kr: "괜찮아? 얼굴이 좀 창백해 보여." },
      { en: "Alright, let's get started with today's meeting.", kr: "자, 오늘 회의 시작합시다." }
    ]
  },
  {
    id: "L3-567",
    word: "anger",
    meaning: "분노, 화",
    examples: [
      { en: "He couldn't hide his anger after the meeting.", kr: "회의 끝나고 그는 화를 감추지 못했어." },
      { en: "Don't send that email in anger. Wait until tomorrow.", kr: "화난 상태로 그 메일 보내지 마. 내일까지 기다려." }
    ]
  },
  {
    id: "L3-664",
    word: "awful",
    meaning: "끔찍한, (기분이) 너무 안 좋은",
    examples: [
      { en: "The weather was awful during our whole trip.", kr: "여행 내내 날씨가 끔찍했어." },
      { en: "I feel awful about forgetting your birthday.", kr: "네 생일 잊어버려서 마음이 너무 안 좋아." }
    ]
  },
  {
    id: "L3-748",
    word: "peel",
    meaning: "껍질을 벗기다, 벗겨지다",
    examples: [
      { en: "Can you peel the potatoes for me?", kr: "감자 껍질 좀 까줄래?" },
      { en: "My nose is peeling from the sunburn.", kr: "햇볕에 타서 코 껍질이 벗겨지고 있어." }
    ]
  },
  {
    id: "L3-749",
    word: "chilly",
    meaning: "쌀쌀한, 으스스한",
    examples: [
      { en: "It's a bit chilly, bring a jacket.", kr: "좀 쌀쌀하니까 재킷 챙겨." },
      { en: "Is it just me, or is it chilly in here?", kr: "나만 그래, 아니면 여기 좀 쌀쌀해?" }
    ]
  },
  {
    id: "L3-750",
    word: "secret",
    meaning: "비밀, 비결, 비밀의",
    examples: [
      { en: "Can you keep a secret? Promise you won't tell anyone.", kr: "비밀 지킬 수 있어? 아무한테도 말 안 한다고 약속해." },
      { en: "What's your secret? You look great!", kr: "비결이 뭐야? 너 진짜 좋아 보인다!" }
    ]
  },
  {
    id: "L3-568",
    word: "assist",
    meaning: "돕다, 지원하다",
    examples: [
      { en: "Can I assist you with anything else today?", kr: "오늘 더 도와드릴 일 있으실까요?" },
      { en: "A new intern will assist us with the event.", kr: "새 인턴이 행사 준비를 도와줄 거예요." }
    ]
  },
  {
    id: "L3-293",
    word: "expedite",
    meaning: "신속히 처리하다, 앞당기다",
    examples: [
      { en: "Can you expedite my order? I need it by Friday.", kr: "주문 좀 빨리 처리해 주실 수 있나요? 금요일까지 필요해서요." },
      { en: "Paying extra will expedite your visa application.", kr: "추가 요금을 내시면 비자 신청이 빨리 처리돼요." }
    ]
  },
  {
    id: "L3-294",
    word: "foster",
    meaning: "(동물·아이를) 임시로 맡아 기르다, 조성하다",
    examples: [
      { en: "We're fostering a puppy until it finds a home.", kr: "새 가족 찾을 때까지 강아지를 임시 보호하고 있어." },
      { en: "We want to foster a friendly culture on our team.", kr: "우리 팀에 친근한 분위기를 만들고 싶어요." }
    ]
  },
  {
    id: "L3-569",
    word: "belt",
    meaning: "벨트, 허리띠",
    examples: [
      { en: "Please fasten your seat belt.", kr: "안전벨트를 매 주세요." },
      { en: "These pants are too loose without a belt.", kr: "이 바지는 벨트 없으면 너무 헐렁해." }
    ]
  },
  {
    id: "L3-751",
    word: "parking",
    meaning: "주차, 주차 공간",
    examples: [
      { en: "Is there free parking around here?", kr: "이 근처에 무료 주차 돼?" },
      { en: "Finding parking downtown is a nightmare.", kr: "시내에서 주차 자리 찾는 건 악몽이야." }
    ]
  },
  {
    id: "L3-570",
    word: "ceremony",
    meaning: "식, 의식",
    examples: [
      { en: "The wedding ceremony starts at two, so don't be late.", kr: "결혼식 2시에 시작하니까 늦지 마." },
      { en: "Are you going to the graduation ceremony?", kr: "졸업식 갈 거야?" }
    ]
  },
  {
    id: "L3-298",
    word: "invincible",
    meaning: "무적의, 천하무적의",
    examples: [
      { en: "When I was twenty, I felt invincible.", kr: "스무 살 땐 내가 무적인 줄 알았어." },
      { en: "Our team looked invincible this season.", kr: "이번 시즌 우리 팀은 무적 같았어." }
    ]
  },
  {
    id: "L3-571",
    word: "diamond",
    meaning: "다이아몬드",
    examples: [
      { en: "Is that a real diamond? It's gorgeous!", kr: "그거 진짜 다이아몬드야? 너무 예쁘다!" },
      { en: "She showed everyone her new diamond ring.", kr: "그녀가 새 다이아몬드 반지를 모두에게 자랑했어." }
    ]
  },
  {
    id: "L3-572",
    word: "efficient",
    meaning: "효율적인, 능률적인",
    examples: [
      { en: "This new software makes our work much more efficient.", kr: "이 새 프로그램 덕분에 일이 훨씬 효율적이야." },
      { en: "Taking the subway is the most efficient way to get downtown.", kr: "시내 가는 데는 지하철이 제일 효율적이야." }
    ]
  }
];

const wordsLevel3_Part4 = [
  {
    id: "L3-573",
    word: "ghost",
    meaning: "유령",
    examples: [
      { en: "My little brother thinks there's a ghost in the attic.", kr: "남동생은 다락방에 유령이 있다고 믿어." },
      { en: "The office feels like a ghost town on Fridays.", kr: "금요일엔 사무실이 유령 도시처럼 텅 비어." }
    ]
  },
  {
    id: "L3-574",
    word: "lab",
    meaning: "검사실, 실험실, 연구실",
    examples: [
      { en: "The lab results should be ready by Monday.", kr: "검사 결과는 월요일까지 나올 거예요." },
      { en: "She works in a research lab at the university.", kr: "그녀는 대학교 연구실에서 일해." }
    ]
  },
  {
    id: "L3-303",
    word: "permanent",
    meaning: "영구적인, 정규직의",
    examples: [
      { en: "Is this a permanent job or just a contract?", kr: "이거 정규직이에요, 아니면 계약직이에요?" },
      { en: "Careful, that marker is permanent.", kr: "조심해, 그 마커 안 지워지는 거야." }
    ]
  },
  {
    id: "L3-575",
    word: "nervous",
    meaning: "긴장한, 불안한",
    examples: [
      { en: "I always get nervous before a job interview.", kr: "난 면접 전에 항상 긴장돼." },
      { en: "Don't be nervous; you've practiced this a lot.", kr: "긴장하지 마, 이거 많이 연습했잖아." }
    ]
  },
  {
    id: "L3-576",
    word: "ordinary",
    meaning: "평범한, 보통의",
    examples: [
      { en: "It was just an ordinary day at the office.", kr: "그냥 회사에서의 평범한 하루였어." },
      { en: "I don't want an ordinary birthday. Let's do something fun!", kr: "평범한 생일은 싫어. 뭔가 재밌는 거 하자!" }
    ]
  },
  {
    id: "L3-577",
    word: "prayer",
    meaning: "기도",
    examples: [
      { en: "She says a short prayer before every meal.", kr: "그녀는 매 식사 전에 짧게 기도해." },
      { en: "You're in my prayers. Get well soon.", kr: "너 위해 기도할게. 빨리 나아." }
    ]
  },
  {
    id: "L3-578",
    word: "rarely",
    meaning: "좀처럼 ~않는, 드물게",
    examples: [
      { en: "I rarely eat breakfast on weekdays.", kr: "평일엔 아침을 거의 안 먹어." },
      { en: "He rarely calls, so it must be important.", kr: "걔 전화 거의 안 하는데, 중요한 일인가 봐." }
    ]
  },
  {
    id: "L3-579",
    word: "solve",
    meaning: "해결하다, 풀다",
    examples: [
      { en: "We need to solve this problem before the launch.", kr: "출시 전에 이 문제 해결해야 해." },
      { en: "Crying won't solve anything, but I understand.", kr: "운다고 해결되는 건 없지만 이해해." }
    ]
  },
  {
    id: "L3-580",
    word: "trash",
    meaning: "쓰레기, 쓰레기통",
    examples: [
      { en: "Can you take out the trash on your way out?", kr: "나가는 길에 쓰레기 좀 버려 줄래?" },
      { en: "I accidentally threw my receipt in the trash.", kr: "실수로 영수증을 쓰레기통에 버렸어." }
    ]
  },
  {
    id: "L3-581",
    word: "whoever",
    meaning: "누구든지, ~하는 사람은 누구나",
    examples: [
      { en: "Whoever finishes first can go home early.", kr: "먼저 끝내는 사람은 누구든 일찍 퇴근해도 돼." },
      { en: "Whoever took my lunch from the fridge, please return it.", kr: "냉장고에서 내 점심 가져간 사람, 누군지 몰라도 돌려줘." }
    ]
  },
  {
    id: "L3-582",
    word: "boost",
    meaning: "북돋우다, 높이다, 상승",
    examples: [
      { en: "A short walk can boost your energy in the afternoon.", kr: "오후에 잠깐 걸으면 기운이 나." },
      { en: "Thanks, I really needed that confidence boost.", kr: "고마워, 그런 자신감 충전이 정말 필요했어." }
    ]
  },
  {
    id: "L3-583",
    word: "cousin",
    meaning: "사촌",
    examples: [
      { en: "My cousin is getting married next month.", kr: "내 사촌이 다음 달에 결혼해." },
      { en: "I grew up with my cousins, so we're really close.", kr: "사촌들이랑 같이 자라서 우리 정말 친해." }
    ]
  },
  {
    id: "L3-584",
    word: "deck",
    meaning: "발표 자료, 테라스, 갑판",
    examples: [
      { en: "Can you send me the slide deck before the meeting?", kr: "회의 전에 발표 자료 좀 보내 줄래요?" },
      { en: "Let's have coffee out on the deck.", kr: "테라스에 나가서 커피 마시자." }
    ]
  },
  {
    id: "L3-585",
    word: "dust",
    meaning: "먼지, 먼지를 털다",
    examples: [
      { en: "Achoo! There's so much dust in here.", kr: "에취! 여기 먼지가 엄청 많네." },
      { en: "I dust the shelves every Saturday morning.", kr: "난 토요일 아침마다 선반 먼지를 털어." }
    ]
  },
  {
    id: "L3-752",
    word: "promotion",
    meaning: "승진, 판촉 할인",
    examples: [
      { en: "Congrats on the promotion, you deserve it!", kr: "승진 축하해, 너 그럴 자격 있어!" },
      { en: "They're running a promotion this week, buy one get one free.", kr: "이번 주에 1+1 행사하고 있어." }
    ]
  },
  {
    id: "L3-587",
    word: "illness",
    meaning: "병, 질병",
    examples: [
      { en: "He's been off work for two weeks due to illness.", kr: "그는 병 때문에 2주째 출근을 못 하고 있어." },
      { en: "Is it a serious illness, or just a cold?", kr: "심각한 병이야, 아니면 그냥 감기야?" }
    ]
  },
  {
    id: "L3-753",
    word: "dentist",
    meaning: "치과 의사, 치과",
    examples: [
      { en: "I have a dentist appointment tomorrow.", kr: "나 내일 치과 예약 있어." },
      { en: "I'm scared of going to the dentist.", kr: "나 치과 가는 거 무서워." }
    ]
  },
  {
    id: "L3-589",
    word: "lately",
    meaning: "최근에, 요즘",
    examples: [
      { en: "I've been really busy at work lately.", kr: "요즘 회사 일 때문에 정말 바빴어." },
      { en: "Have you talked to Mom lately?", kr: "최근에 엄마랑 통화했어?" }
    ]
  },
  {
    id: "L3-590",
    word: "remote",
    meaning: "원격의, 외딴, 리모컨",
    examples: [
      { en: "Our company lets us do remote work on Fridays.", kr: "우리 회사는 금요일에 재택근무를 할 수 있어." },
      { en: "Where's the remote? I can't find it anywhere.", kr: "리모컨 어디 있어? 아무리 찾아도 없어." }
    ]
  },
  {
    id: "L3-591",
    word: "root",
    meaning: "뿌리, 근원",
    examples: [
      { en: "We need to find the root of the problem.", kr: "문제의 근본 원인을 찾아야 해." },
      { en: "Your roots are showing. Time to dye your hair again?", kr: "머리 뿌리 올라왔다. 다시 염색할 때 됐나?" }
    ]
  },
  {
    id: "L3-592",
    word: "steal",
    meaning: "훔치다, 거저나 다름없는 물건",
    examples: [
      { en: "Someone stole my bike from outside the office.", kr: "누가 회사 앞에 세워 둔 내 자전거를 훔쳐 갔어." },
      { en: "This jacket was a steal at only twenty dollars.", kr: "이 재킷 20달러밖에 안 해서 거의 거저였어." }
    ]
  },
  {
    id: "L3-593",
    word: "precious",
    meaning: "소중한, 귀중한, 사랑스러운",
    examples: [
      { en: "Time with family is precious, so put your phone away.", kr: "가족과 보내는 시간은 소중하니까 폰은 내려놔." },
      { en: "Aww, look at that baby! She's so precious.", kr: "어머, 저 아기 좀 봐! 너무 사랑스러워." }
    ]
  },
  {
    id: "L3-754",
    word: "breakup",
    meaning: "이별, 헤어짐",
    examples: [
      { en: "She's still not over the breakup.", kr: "걔 아직 이별에서 못 벗어났어." },
      { en: "That was the worst breakup I've ever had.", kr: "그게 내 인생 최악의 이별이었어." }
    ]
  },
  {
    id: "L3-595",
    word: "bid",
    meaning: "입찰하다, 입찰",
    examples: [
      { en: "I bid on a used camera online and won.", kr: "온라인에서 중고 카메라에 입찰했는데 낙찰됐어." },
      { en: "Should I place a bid on this vintage bag?", kr: "이 빈티지 가방에 입찰해 볼까?" }
    ]
  },
  {
    id: "L3-596",
    word: "buddy",
    meaning: "친구, 단짝",
    examples: [
      { en: "My workout buddy keeps me motivated at the gym.", kr: "운동 친구 덕분에 헬스장에서 의욕이 생겨." },
      { en: "Hey buddy, can you help me move this weekend?", kr: "야, 이번 주말에 이사하는 것 좀 도와줄 수 있어?" }
    ]
  },
  {
    id: "L3-597",
    word: "conclusion",
    meaning: "결론, 결말",
    examples: [
      { en: "Don't jump to conclusions before you hear the whole story.", kr: "얘기 다 듣기 전에 섣불리 결론 내리지 마." },
      { en: "So what's the conclusion? Are we going or not?", kr: "그래서 결론이 뭐야? 가는 거야, 마는 거야?" }
    ]
  },
  {
    id: "L3-598",
    word: "congratulations",
    meaning: "축하해요, 축하 (인사)",
    examples: [
      { en: "Congratulations on your promotion! You really deserve it.", kr: "승진 축하해! 넌 정말 그럴 자격 있어." },
      { en: "I heard you're having a baby. Congratulations!", kr: "아기 생긴다며. 축하해!" }
    ]
  },
  {
    id: "L3-599",
    word: "delay",
    meaning: "지연, 미루다, 지연시키다",
    examples: [
      { en: "Our flight had a two-hour delay because of the weather.", kr: "날씨 때문에 비행기가 두 시간 지연됐어." },
      { en: "Sorry for the delay in getting back to you.", kr: "답장이 늦어서 죄송합니다." }
    ]
  },
  {
    id: "L3-600",
    word: "downtown",
    meaning: "시내, 도심(에)",
    examples: [
      { en: "I work downtown, so I usually take the subway.", kr: "시내에서 일해서 보통 지하철 타." },
      { en: "Parking downtown is expensive on weekdays.", kr: "평일엔 시내 주차비가 비싸." }
    ]
  },
  {
    id: "L3-601",
    word: "hire",
    meaning: "고용하다, 채용하다, (업체를) 부르다",
    examples: [
      { en: "We're planning to hire two new designers this year.", kr: "올해 디자이너 두 명을 새로 뽑을 계획이에요." },
      { en: "Should we hire a moving company or do it ourselves?", kr: "이삿짐센터 부를까, 아니면 우리가 직접 할까?" }
    ]
  },
  {
    id: "L3-602",
    word: "insane",
    meaning: "말도 안 되는, 미친",
    examples: [
      { en: "The line for the new phone was insane.", kr: "새 폰 사려는 줄이 말도 안 됐어." },
      { en: "You drove ten hours straight? That's insane!", kr: "열 시간을 쉬지 않고 운전했다고? 미쳤다!" }
    ]
  },
  {
    id: "L3-603",
    word: "marry",
    meaning: "결혼하다",
    examples: [
      { en: "Will you marry me?", kr: "나랑 결혼해 줄래?" },
      { en: "He married his college girlfriend last year.", kr: "그는 작년에 대학 때 여자 친구랑 결혼했어." }
    ]
  },
  {
    id: "L3-604",
    word: "nowhere",
    meaning: "아무 데도 (없다), 어디에도",
    examples: [
      { en: "My keys are nowhere to be found.", kr: "열쇠가 어디에도 안 보여." },
      { en: "This argument is going nowhere, so let's take a break.", kr: "이 논쟁은 끝이 안 나니까 좀 쉬자." }
    ]
  },
  {
    id: "L3-605",
    word: "organic",
    meaning: "유기농의, 자연스러운",
    examples: [
      { en: "I try to buy organic vegetables when I can.", kr: "난 웬만하면 유기농 채소를 사려고 해." },
      { en: "Is this coffee organic?", kr: "이 커피 유기농인가요?" }
    ]
  },
  {
    id: "L3-606",
    word: "poetry",
    meaning: "시, 시가",
    examples: [
      { en: "She reads poetry before going to bed.", kr: "그녀는 자기 전에 시를 읽어." },
      { en: "I wrote poetry in college but never showed anyone.", kr: "대학 때 시를 썼는데 아무한테도 안 보여 줬어." }
    ]
  },
  {
    id: "L3-607",
    word: "pray",
    meaning: "기도하다, 간절히 바라다",
    examples: [
      { en: "My grandmother prays every morning for our family.", kr: "할머니는 매일 아침 우리 가족을 위해 기도하셔." },
      { en: "I'm praying it doesn't rain during our picnic.", kr: "소풍 때 비 안 오길 간절히 바라고 있어." }
    ]
  },
  {
    id: "L3-608",
    word: "sheet",
    meaning: "(종이) 한 장, 시트",
    examples: [
      { en: "Can you print the schedule on one sheet of paper?", kr: "일정표를 종이 한 장에 출력해 줄래?" },
      { en: "I changed the bed sheets this morning.", kr: "오늘 아침에 침대 시트 갈았어." }
    ]
  },
  {
    id: "L3-609",
    word: "spiritual",
    meaning: "정신적인, 영적인",
    examples: [
      { en: "For me, yoga is both physical and spiritual.", kr: "나한테 요가는 신체적이면서 정신적인 거야." },
      { en: "I'm not religious, but I'm kind of spiritual.", kr: "종교는 없지만 영적인 건 좀 믿는 편이야." }
    ]
  },
  {
    id: "L3-610",
    word: "sudden",
    meaning: "갑작스러운",
    examples: [
      { en: "Why the sudden change of plans?", kr: "왜 갑자기 계획이 바뀐 거야?" },
      { en: "All of a sudden, the lights went out.", kr: "갑자기 불이 나갔어." }
    ]
  },
  {
    id: "L3-611",
    word: "vacation",
    meaning: "휴가, 방학",
    examples: [
      { en: "I'm taking a week of vacation in August.", kr: "8월에 일주일 휴가 낼 거야." },
      { en: "Where did you go on summer vacation?", kr: "여름휴가 어디 갔다 왔어?" }
    ]
  },
  {
    id: "L3-612",
    word: "associate",
    meaning: "연관 짓다, 동료, 직원",
    examples: [
      { en: "I always associate the smell of coffee with mornings.", kr: "난 커피 냄새를 맡으면 항상 아침이 떠올라." },
      { en: "Let me ask one of our associates to help you.", kr: "직원 중 한 명한테 도와드리라고 할게요." }
    ]
  },
  {
    id: "L3-613",
    word: "bench",
    meaning: "벤치, 긴 의자",
    examples: [
      { en: "Let's sit on that bench and eat our sandwiches.", kr: "저 벤치에 앉아서 샌드위치 먹자." },
      { en: "He spent most of the game on the bench.", kr: "그는 경기 대부분을 벤치에서 보냈어." }
    ]
  },
  {
    id: "L3-614",
    word: "citizen",
    meaning: "시민, 국민",
    examples: [
      { en: "She became a U.S. citizen last year.", kr: "그녀는 작년에 미국 시민이 됐어." },
      { en: "Are you a citizen, or are you here on a visa?", kr: "시민권자세요, 아니면 비자로 계신 거예요?" }
    ]
  },
  {
    id: "L3-615",
    word: "discover",
    meaning: "발견하다, 알게 되다",
    examples: [
      { en: "I discovered a great noodle place near the office.", kr: "회사 근처에서 끝내주는 국숫집을 발견했어." },
      { en: "We discovered a mistake in the report after sending it.", kr: "보고서를 보내고 나서야 실수를 발견했어." }
    ]
  },
  {
    id: "L3-616",
    word: "entrance",
    meaning: "입구, 입장",
    examples: [
      { en: "Meet me at the main entrance of the building.", kr: "건물 정문에서 만나." },
      { en: "How much is the entrance fee?", kr: "입장료가 얼마예요?" }
    ]
  },
  {
    id: "L3-617",
    word: "fitness",
    meaning: "체력, 건강, 피트니스",
    examples: [
      { en: "I joined a fitness class to get in better shape.", kr: "몸 만들려고 피트니스 수업에 등록했어." },
      { en: "Do you use any fitness apps?", kr: "운동 앱 쓰는 거 있어?" }
    ]
  },
  {
    id: "L3-618",
    word: "friendship",
    meaning: "우정",
    examples: [
      { en: "Our friendship started on the first day of college.", kr: "우리 우정은 대학 첫날 시작됐어." },
      { en: "Don't let money ruin a good friendship.", kr: "돈 때문에 좋은 우정을 망치지 마." }
    ]
  },
  {
    id: "L3-619",
    word: "liquid",
    meaning: "액체, 액체의",
    examples: [
      { en: "You can't bring liquids over 100 milliliters on the plane.", kr: "100밀리리터 넘는 액체는 비행기에 못 가지고 타요." },
      { en: "I prefer liquid soap because it's cleaner to use.", kr: "난 쓰기 깔끔해서 액체 비누가 더 좋아." }
    ]
  },
  {
    id: "L3-620",
    word: "medal",
    meaning: "메달",
    examples: [
      { en: "Everyone who finishes the race gets a medal.", kr: "완주하는 사람은 모두 메달을 받아." },
      { en: "Did you watch? Korea won another gold medal!", kr: "봤어? 한국이 또 금메달 땄어!" }
    ]
  },
  {
    id: "L3-755",
    word: "selfie",
    meaning: "셀카",
    examples: [
      { en: "Can we take a quick selfie together?", kr: "우리 같이 셀카 하나 빨리 찍을까?" },
      { en: "Your selfies always look so good.", kr: "너는 셀카가 항상 너무 잘 나와." }
    ]
  },
  {
    id: "L3-622",
    word: "occasionally",
    meaning: "가끔, 때때로",
    examples: [
      { en: "I occasionally work from home on Fridays.", kr: "금요일엔 가끔 재택근무해." },
      { en: "We still meet for coffee occasionally.", kr: "우리 아직도 가끔 커피 마시러 만나." }
    ]
  },
  {
    id: "L3-623",
    word: "physics",
    meaning: "물리학",
    examples: [
      { en: "I struggled with physics in high school.", kr: "고등학교 때 물리 때문에 고생했어." },
      { en: "My sister teaches physics at a middle school.", kr: "우리 언니는 중학교에서 물리를 가르쳐." }
    ]
  },
  {
    id: "L3-624",
    word: "refuse",
    meaning: "거절하다, 거부하다",
    examples: [
      { en: "It was hard to refuse such a generous offer.", kr: "그렇게 좋은 제안을 거절하긴 어려웠어." },
      { en: "My son refuses to eat vegetables.", kr: "우리 아들은 채소를 절대 안 먹으려고 해." }
    ]
  },
  {
    id: "L3-625",
    word: "shell",
    meaning: "껍데기, 조개껍데기",
    examples: [
      { en: "The kids collected shells on the beach all afternoon.", kr: "애들이 오후 내내 해변에서 조개껍데기를 주웠어." },
      { en: "Peel the shells off the boiled eggs carefully.", kr: "삶은 달걀 껍데기 조심해서 까." }
    ]
  },
  {
    id: "L3-626",
    word: "translation",
    meaning: "번역, 통역",
    examples: [
      { en: "Can you check my translation before I send it?", kr: "보내기 전에 내 번역 좀 봐 줄래?" },
      { en: "Some jokes get lost in translation.", kr: "어떤 농담은 번역하면 재미가 없어져." }
    ]
  },
  {
    id: "L3-627",
    word: "angle",
    meaning: "각도, 관점",
    examples: [
      { en: "Try taking the photo from a different angle.", kr: "다른 각도에서 사진 찍어 봐." },
      { en: "Let's look at this from the customer's angle.", kr: "이걸 고객 입장에서 한번 봅시다." }
    ]
  },
  {
    id: "L3-628",
    word: "arrive",
    meaning: "도착하다",
    examples: [
      { en: "What time does your flight arrive in Seoul?", kr: "비행기 서울에 몇 시에 도착해?" },
      { en: "The package arrived two days early.", kr: "택배가 이틀 일찍 도착했어." }
    ]
  },
  {
    id: "L3-629",
    word: "defensive",
    meaning: "방어적인, 수비의",
    examples: [
      { en: "Why are you getting so defensive? I'm just asking.", kr: "왜 그렇게 방어적으로 나와? 그냥 물어보는 거야." },
      { en: "Our team played a strong defensive game tonight.", kr: "오늘 밤 우리 팀 수비 진짜 잘했어." }
    ]
  },
  {
    id: "L3-756",
    word: "intern",
    meaning: "인턴, 인턴으로 일하다",
    examples: [
      { en: "The new intern is really quick to learn.", kr: "새로 온 인턴 진짜 빨리 배워." },
      { en: "I interned there last summer.", kr: "나 작년 여름에 거기서 인턴 했어." }
    ]
  },
  {
    id: "L3-631",
    word: "grass",
    meaning: "풀, 잔디",
    examples: [
      { en: "Please keep off the grass.", kr: "잔디에 들어가지 마세요." },
      { en: "I need to cut the grass this weekend.", kr: "이번 주말에 잔디 깎아야 해." }
    ]
  },
  {
    id: "L3-632",
    word: "incredibly",
    meaning: "엄청나게, 믿을 수 없을 정도로",
    examples: [
      { en: "The new phone is incredibly fast.", kr: "새 폰 엄청 빨라." },
      { en: "I'm incredibly grateful for all your help this year.", kr: "올 한 해 도와줘서 정말 너무 고마워." }
    ]
  },
  {
    id: "L3-633",
    word: "journalist",
    meaning: "기자, 언론인",
    examples: [
      { en: "She worked as a journalist before going into marketing.", kr: "그녀는 마케팅 쪽으로 가기 전에 기자였어." },
      { en: "A journalist called me asking for an interview.", kr: "기자가 인터뷰하고 싶다고 나한테 전화했어." }
    ]
  },
  {
    id: "L3-634",
    word: "occasion",
    meaning: "특별한 날(행사), 때, 경우",
    examples: [
      { en: "This dress is perfect for a special occasion.", kr: "이 드레스는 특별한 날 입기 딱이야." },
      { en: "What's the occasion? You look so dressed up!", kr: "무슨 날이야? 완전 차려입었네!" }
    ]
  },
  {
    id: "L3-635",
    word: "pace",
    meaning: "속도, 페이스",
    examples: [
      { en: "Can you slow down? I can't keep up with your pace.", kr: "좀 천천히 가 줄래? 네 속도를 못 따라가겠어." },
      { en: "Just work at your own pace.", kr: "그냥 네 속도대로 해." }
    ]
  },
  {
    id: "L3-636",
    word: "premium",
    meaning: "고급의, 프리미엄, 추가 요금",
    examples: [
      { en: "Is the premium plan worth the extra money?", kr: "프리미엄 요금제가 돈 더 낼 가치가 있어?" },
      { en: "We paid a premium for the ocean view room.", kr: "바다 전망 방이라 돈을 더 냈어." }
    ]
  },
  {
    id: "L3-637",
    word: "possession",
    meaning: "소유물, 가진 물건, 소유",
    examples: [
      { en: "This guitar is my most prized possession.", kr: "이 기타는 내가 제일 아끼는 물건이야." },
      { en: "We lost most of our possessions in the flood.", kr: "홍수 때문에 가진 물건을 거의 다 잃었어." }
    ]
  },
  {
    id: "L3-638",
    word: "resident",
    meaning: "주민, 거주자",
    examples: [
      { en: "Sorry, only residents can park in this lot.", kr: "죄송하지만 이 주차장은 주민만 주차할 수 있어요." },
      { en: "Are you a resident of this building?", kr: "이 건물에 사세요?" }
    ]
  },
  {
    id: "L3-639",
    word: "spin",
    meaning: "돌다, 회전하다, (머리가) 핑 돌다",
    examples: [
      { en: "The washing machine makes a loud noise when it spins.", kr: "세탁기가 탈수할 때 소리가 엄청 커." },
      { en: "My head is spinning after that long meeting.", kr: "긴 회의 끝나니까 머리가 핑핑 돌아." }
    ]
  },
  {
    id: "L3-757",
    word: "grocery",
    meaning: "식료품, 식료품점, 장보기",
    examples: [
      { en: "I need to stop by the grocery store on the way home.", kr: "집에 가는 길에 마트에 들러야 해." },
      { en: "Our grocery bill is getting crazy these days.", kr: "요즘 장 보는 비용이 장난 아니야." }
    ]
  },
  {
    id: "L3-641",
    word: "collect",
    meaning: "모으다, 수집하다, 걷다",
    examples: [
      { en: "My son has been collecting baseball cards for years.", kr: "우리 아들은 몇 년째 야구 카드를 모으고 있어." },
      { en: "I'll collect everyone's money for the gift.", kr: "선물 살 돈은 내가 다 걷을게." }
    ]
  },
  {
    id: "L3-642",
    word: "currency",
    meaning: "통화, 화폐",
    examples: [
      { en: "Where can I exchange currency around here?", kr: "이 근처에 환전할 수 있는 곳이 어디예요?" },
      { en: "Do you accept foreign currency, or just won?", kr: "외화도 받으세요, 아니면 원화만 받으세요?" }
    ]
  },
  {
    id: "L3-643",
    word: "exhibition",
    meaning: "전시회, 박람회",
    examples: [
      { en: "There's a photo exhibition at the art center this week.", kr: "이번 주에 아트센터에서 사진 전시회 해." },
      { en: "Do you want to check out the exhibition this weekend?", kr: "이번 주말에 전시회 보러 갈래?" }
    ]
  },
  {
    id: "L3-644",
    word: "funeral",
    meaning: "장례식",
    examples: [
      { en: "I'm taking tomorrow off to attend a funeral.", kr: "장례식 참석하려고 내일 휴가 내요." },
      { en: "Are you going to the funeral on Saturday?", kr: "토요일 장례식에 갈 거야?" }
    ]
  },
  {
    id: "L3-645",
    word: "log",
    meaning: "기록하다, 기록, 로그인하다(log in)",
    examples: [
      { en: "Please log your hours in the system every Friday.", kr: "매주 금요일에 시스템에 근무 시간 기록해 주세요." },
      { en: "I can't log in. Did you change the password?", kr: "로그인이 안 돼. 비밀번호 바꿨어?" }
    ]
  },
  {
    id: "L3-646",
    word: "regret",
    meaning: "후회하다, 유감스럽게 생각하다",
    examples: [
      { en: "I regret not studying English harder in school.", kr: "학교 다닐 때 영어 공부 더 열심히 안 한 게 후회돼." },
      { en: "Buy it. You won't regret it!", kr: "사. 후회 안 할 거야!" }
    ]
  },
  {
    id: "L3-665",
    word: "ridiculous",
    meaning: "말도 안 되는, 터무니없는",
    examples: [
      { en: "Twelve dollars for a coffee? That's ridiculous!", kr: "커피 한 잔에 12달러? 말도 안 돼!" },
      { en: "Stop being ridiculous. Nobody's mad at you.", kr: "말도 안 되는 소리 하지 마. 아무도 너한테 화 안 났어." }
    ]
  },
  {
    id: "L3-666",
    word: "grateful",
    meaning: "고마워하는, 감사하는",
    examples: [
      { en: "I'm really grateful for all your help this week.", kr: "이번 주에 도와준 거 정말 고마워." },
      { en: "We'd be grateful if you could reply by Friday.", kr: "금요일까지 답변 주시면 감사하겠습니다." }
    ]
  },
  {
    id: "L3-758",
    word: "swollen",
    meaning: "부은, 부어오른",
    examples: [
      { en: "My ankle is still swollen from yesterday.", kr: "어제 다친 발목이 아직 부어 있어." },
      { en: "Your eyes look swollen, did you cry?", kr: "너 눈 부었다, 울었어?" }
    ]
  },
  {
    id: "L3-759",
    word: "stuffed",
    meaning: "배부른, 꽉 찬, 속을 채운",
    examples: [
      { en: "No more for me, I'm stuffed.", kr: "난 그만, 배 터질 것 같아." },
      { en: "Have you tried the stuffed peppers here?", kr: "여기 속 채운 피망 요리 먹어 봤어?" }
    ]
  },
  {
    id: "L3-647",
    word: "routine",
    meaning: "일과, 루틴, 정기적인",
    examples: [
      { en: "Exercise is part of my morning routine.", kr: "운동은 내 아침 루틴의 일부야." },
      { en: "It's just a routine check, so don't worry.", kr: "그냥 정기 검사니까 걱정 마." }
    ]
  },
  {
    id: "L3-381",
    word: "briefly",
    meaning: "잠깐, 간단히",
    examples: [
      { en: "Can I talk to you briefly after the meeting?", kr: "회의 끝나고 잠깐 얘기할 수 있을까요?" },
      { en: "I only saw her briefly in the hallway.", kr: "복도에서 그녀를 잠깐 봤을 뿐이야." }
    ]
  },
  {
    id: "L3-648",
    word: "settle",
    meaning: "해결하다, 정착하다, 자리 잡다",
    examples: [
      { en: "Let's settle this before the client arrives.", kr: "고객 오기 전에 이 문제 해결하자." },
      { en: "Have you settled into your new place yet?", kr: "새집엔 좀 자리 잡았어?" }
    ]
  },
  {
    id: "L3-383",
    word: "currently",
    meaning: "현재, 지금",
    examples: [
      { en: "I'm currently looking for a new job.", kr: "지금 새 일자리 알아보는 중이야." },
      { en: "Sorry, that item is currently out of stock.", kr: "죄송하지만 그 상품은 현재 품절이에요." }
    ]
  },
  {
    id: "L3-384",
    word: "distinctly",
    meaning: "분명히, 뚜렷하게",
    examples: [
      { en: "I distinctly remember meeting you last year.", kr: "작년에 너 만난 거 확실히 기억나." },
      { en: "I distinctly heard someone knock on the door.", kr: "누가 문 두드리는 소리를 분명히 들었어." }
    ]
  },
  {
    id: "L3-385",
    word: "equally",
    meaning: "똑같이, 동등하게",
    examples: [
      { en: "Let's split the bill equally.", kr: "계산은 똑같이 나눠서 하자." },
      { en: "Both options are equally good, so you choose.", kr: "둘 다 똑같이 좋으니까 네가 골라." }
    ]
  },
  {
    id: "L3-386",
    word: "essentially",
    meaning: "사실상, 본질적으로",
    examples: [
      { en: "So essentially, you're saying we need more time?", kr: "그러니까 결국 시간이 더 필요하다는 말씀이죠?" },
      { en: "The two phones are essentially the same.", kr: "그 두 폰은 사실상 똑같아." }
    ]
  },
  {
    id: "L3-387",
    word: "eventually",
    meaning: "결국, 마침내",
    examples: [
      { en: "Don't worry, you'll get used to it eventually.", kr: "걱정 마, 결국엔 익숙해질 거야." },
      { en: "We eventually found the restaurant after getting lost twice.", kr: "두 번이나 길을 잃고 결국 식당을 찾았어." }
    ]
  },
  {
    id: "L3-388",
    word: "explicitly",
    meaning: "분명히, 명시적으로",
    examples: [
      { en: "The lease explicitly says no pets allowed.", kr: "임대 계약서에 반려동물 금지라고 분명히 적혀 있어." },
      { en: "I explicitly told you not to touch my laptop.", kr: "내 노트북 만지지 말라고 분명히 말했잖아." }
    ]
  },
  {
    id: "L3-760",
    word: "humid",
    meaning: "습한, 후덥지근한",
    examples: [
      { en: "It's so humid today, my hair is a mess.", kr: "오늘 너무 습해서 머리가 엉망이야." },
      { en: "I hate humid summers.", kr: "난 습한 여름이 너무 싫어." }
    ]
  },
  {
    id: "L3-649",
    word: "spell",
    meaning: "철자를 말하다, 한동안의 기간",
    examples: [
      { en: "Could you spell your last name for me, please?", kr: "성 철자 좀 불러 주시겠어요?" },
      { en: "We've had a dry spell with no rain for weeks.", kr: "몇 주째 비 한 방울 안 오는 날씨가 이어지고 있어." }
    ]
  },
  {
    id: "L3-650",
    word: "coat",
    meaning: "외투, 코트, (페인트 등의) 칠",
    examples: [
      { en: "Take a warm coat; it's freezing outside.", kr: "따뜻한 코트 챙겨, 밖에 엄청 추워." },
      { en: "The wall needs another coat of paint.", kr: "벽에 페인트 한 번 더 칠해야 해." }
    ]
  },
  {
    id: "L3-651",
    word: "engage",
    meaning: "참여시키다, 소통하다, 약혼하다(engaged)",
    examples: [
      { en: "Good teachers know how to engage their students.", kr: "좋은 선생님은 학생들을 참여시키는 법을 알아." },
      { en: "Did you hear? Mina and Jake just got engaged!", kr: "들었어? 미나랑 제이크 약혼했대!" }
    ]
  },
  {
    id: "L3-393",
    word: "initially",
    meaning: "처음에, 원래",
    examples: [
      { en: "Initially, I hated the new job, but now I love it.", kr: "처음엔 새 직장이 싫었는데 지금은 정말 좋아." },
      { en: "We initially planned to leave at six.", kr: "원래는 6시에 출발할 계획이었어." }
    ]
  },
  {
    id: "L3-761",
    word: "rainy",
    meaning: "비가 오는, 비 많은",
    examples: [
      { en: "What do you like to do on rainy days?", kr: "비 오는 날엔 뭐 하는 거 좋아해?" },
      { en: "It's been rainy all week.", kr: "이번 주 내내 비가 왔어." }
    ]
  },
  {
    id: "L3-395",
    word: "largely",
    meaning: "주로, 대체로",
    examples: [
      { en: "The trip was a success, largely thanks to you.", kr: "여행이 잘된 건 대부분 네 덕분이야." },
      { en: "Our customers are largely young professionals.", kr: "우리 고객은 대체로 젊은 직장인들이에요." }
    ]
  },
  {
    id: "L3-652",
    word: "fate",
    meaning: "운명",
    examples: [
      { en: "It was fate that we met on that train.", kr: "우리가 그 기차에서 만난 건 운명이었어." },
      { en: "Do you believe in fate?", kr: "너 운명 믿어?" }
    ]
  },
  {
    id: "L3-653",
    word: "headquarters",
    meaning: "본사, 본부",
    examples: [
      { en: "Our headquarters is in Seoul, but we have offices worldwide.", kr: "본사는 서울에 있지만 전 세계에 지사가 있어요." },
      { en: "I have to go to headquarters for a meeting tomorrow.", kr: "내일 회의 때문에 본사에 가야 해." }
    ]
  },
  {
    id: "L3-654",
    word: "initiative",
    meaning: "주도권, 진취성, (새로운) 계획",
    examples: [
      { en: "She took the initiative and fixed the problem herself.", kr: "그녀가 먼저 나서서 직접 문제를 해결했어." },
      { en: "I like that you show initiative. Keep it up!", kr: "적극적으로 나서는 모습 좋아. 계속 그렇게 해!" }
    ]
  },
  {
    id: "L3-762",
    word: "fancy",
    meaning: "고급스러운, 화려한, 멋진",
    examples: [
      { en: "Let's go somewhere fancy for your birthday.", kr: "네 생일엔 좀 고급스러운 데 가자." },
      { en: "This place is way too fancy for me.", kr: "여긴 나한테 너무 고급스러워." }
    ]
  },
  {
    id: "L3-400",
    word: "objectively",
    meaning: "객관적으로",
    examples: [
      { en: "Objectively speaking, his idea is better than mine.", kr: "객관적으로 말하면 그 사람 아이디어가 내 것보다 나아." },
      { en: "Try to look at the situation objectively.", kr: "상황을 객관적으로 보려고 해 봐." }
    ]
  }
];

const wordsLevel4_Part1 = [
  {
    id: "L4-001",
    word: "acquisition",
    meaning: "인수, 습득",
    examples: [
      { en: "Did you hear about the acquisition? We're getting new owners.", kr: "인수 소식 들었어? 우리 회사 주인이 바뀐대." },
      { en: "Language acquisition is way easier for kids than adults.", kr: "언어 습득은 어른보다 아이들한테 훨씬 쉬워." }
    ]
  },
  {
    id: "L4-401",
    word: "adviser",
    meaning: "고문, 조언자",
    examples: [
      { en: "My financial adviser told me to save more each month.", kr: "내 재무 고문이 매달 저축을 더 하라고 했어." },
      { en: "She works as a senior adviser to the CEO.", kr: "그녀는 CEO의 선임 고문으로 일하고 있습니다." }
    ]
  },
  {
    id: "L4-701",
    word: "cram",
    meaning: "벼락치기하다, 쑤셔 넣다",
    examples: [
      { en: "I have to cram for my exam tonight.", kr: "오늘 밤에 시험 벼락치기 해야 돼." },
      { en: "Can we cram one more person in the car?", kr: "차에 한 명 더 낑겨 탈 수 있을까?" }
    ]
  },
  {
    id: "L4-004",
    word: "ambiguous",
    meaning: "모호한, 애매한",
    examples: [
      { en: "Sorry, your last email was a bit ambiguous. What did you mean?", kr: "죄송한데, 지난번 이메일이 좀 애매했어요. 무슨 뜻이었어요?" },
      { en: "His answer was so ambiguous. I still don't know what he meant.", kr: "그 사람 대답이 너무 모호했어. 무슨 뜻인지 아직도 모르겠어." }
    ]
  },
  {
    id: "L4-403",
    word: "chess",
    meaning: "체스",
    examples: [
      { en: "We play chess every Sunday at the coffee shop.", kr: "우리는 매주 일요일 카페에서 체스를 둬." },
      { en: "Negotiating with that client feels like a game of chess.", kr: "그 고객과의 협상은 마치 체스 게임 같아요." }
    ]
  },
  {
    id: "L4-702",
    word: "hassle",
    meaning: "번거로운 일, 귀찮은 일, 들볶다",
    examples: [
      { en: "Renewing my passport was such a hassle.", kr: "여권 갱신하는 거 진짜 번거로웠어." },
      { en: "Stop hassling me. I'll do it after lunch.", kr: "그만 좀 들볶아. 점심 먹고 할게." }
    ]
  },
  {
    id: "L4-703",
    word: "jittery",
    meaning: "초조한, 신경이 곤두선",
    examples: [
      { en: "I always get jittery before job interviews.", kr: "나는 면접 전에 항상 초조해져." },
      { en: "Too much coffee makes me jittery.", kr: "커피를 너무 많이 마시면 신경이 곤두서." }
    ]
  },
  {
    id: "L4-404",
    word: "dull",
    meaning: "지루한, 따분한, 무딘",
    examples: [
      { en: "The meeting was so dull that I almost fell asleep.", kr: "회의가 너무 지루해서 거의 잠들 뻔했어." },
      { en: "This knife is too dull to cut tomatoes.", kr: "이 칼은 너무 무뎌서 토마토가 안 잘려." }
    ]
  },
  {
    id: "L4-405",
    word: "float",
    meaning: "뜨다, 떠다니다",
    examples: [
      { en: "We floated in the pool all afternoon.", kr: "우리는 오후 내내 수영장에 둥둥 떠 있었어." },
      { en: "Relax and let yourself float. I've got you.", kr: "힘 빼고 그냥 떠 있어 봐. 내가 잡고 있어." }
    ]
  },
  {
    id: "L4-704",
    word: "splurge",
    meaning: "(큰돈을) 펑펑 쓰다, 돈을 확 쓰다",
    examples: [
      { en: "I splurged on a fancy dinner for my birthday.", kr: "생일이라 비싼 저녁에 돈 좀 썼어." },
      { en: "Should I splurge on the nicer headphones?", kr: "좀 더 좋은 헤드폰에 돈을 확 써 버릴까?" }
    ]
  },
  {
    id: "L4-406",
    word: "grind",
    meaning: "갈다, 빻다",
    examples: [
      { en: "I grind fresh coffee beans every morning.", kr: "나는 매일 아침 신선한 원두를 갈아." },
      { en: "Can you grind some black pepper over the salad?", kr: "샐러드 위에 후추 좀 갈아 줄래?" }
    ]
  },
  {
    id: "L4-407",
    word: "gum",
    meaning: "껌, 잇몸",
    examples: [
      { en: "Do you have any gum? My breath smells like garlic.", kr: "껌 있어? 입에서 마늘 냄새 나." },
      { en: "The dentist said my gums are a little swollen.", kr: "치과 의사가 내 잇몸이 조금 부었대." }
    ]
  },
  {
    id: "L4-408",
    word: "idol",
    meaning: "우상, 아이돌",
    examples: [
      { en: "Growing up, my older brother was my idol.", kr: "어릴 때 우리 형이 내 우상이었어." },
      { en: "Who was your idol when you were a teenager?", kr: "너 10대 때 우상이 누구였어?" }
    ]
  },
  {
    id: "L4-705",
    word: "antsy",
    meaning: "좀이 쑤시는, 안달 난",
    examples: [
      { en: "I'm getting antsy just sitting here.", kr: "여기 그냥 앉아 있으니까 좀이 쑤셔." },
      { en: "The dog gets antsy before his walk.", kr: "강아지가 산책 전엔 안달이 나." }
    ]
  },
  {
    id: "L4-409",
    word: "incorrect",
    meaning: "틀린, 부정확한",
    examples: [
      { en: "The address on the invoice is incorrect.", kr: "청구서에 적힌 주소가 틀렸어요." },
      { en: "Sorry, I gave you incorrect information yesterday.", kr: "죄송해요, 어제 제가 잘못된 정보를 드렸어요." }
    ]
  },
  {
    id: "L4-410",
    word: "junction",
    meaning: "교차로, 분기점",
    examples: [
      { en: "Turn left at the next junction and look for the gas station.", kr: "다음 교차로에서 좌회전해서 주유소를 찾아봐." },
      { en: "Is this the junction where we turn off?", kr: "여기가 우리가 빠져야 하는 분기점이야?" }
    ]
  },
  {
    id: "L4-706",
    word: "hunch",
    meaning: "직감, 예감",
    examples: [
      { en: "I have a hunch she's going to say yes.", kr: "왠지 그녀가 좋다고 할 것 같은 느낌이 들어." },
      { en: "It's just a hunch, but I think he's lying.", kr: "그냥 감인데, 걔 거짓말하는 것 같아." }
    ]
  },
  {
    id: "L4-707",
    word: "acquaintance",
    meaning: "아는 사람, 지인",
    examples: [
      { en: "He's not really a friend, just an acquaintance.", kr: "걔는 친구라기보다는 그냥 아는 사람이야." },
      { en: "I ran into an old acquaintance at the airport.", kr: "공항에서 예전에 알던 사람을 우연히 만났어." }
    ]
  },
  {
    id: "L4-708",
    word: "cope",
    meaning: "대처하다, 견디다, 감당하다",
    examples: [
      { en: "How are you coping with the new job?", kr: "새 직장은 어떻게 버티고 있어?" },
      { en: "I can't cope with this heat anymore.", kr: "이 더위는 더 이상 못 견디겠어." }
    ]
  },
  {
    id: "L4-709",
    word: "gulp",
    meaning: "꿀꺽 삼키다, 벌컥벌컥 마시다",
    examples: [
      { en: "He gulped down his coffee and ran out.", kr: "걔 커피 벌컥 마시고 뛰쳐나갔어." },
      { en: "Don't gulp your food, slow down.", kr: "음식 꿀꺽 삼키지 말고 천천히 먹어." }
    ]
  },
  {
    id: "L4-710",
    word: "touchy",
    meaning: "예민한, 민감한",
    examples: [
      { en: "He's a little touchy about his weight.", kr: "걔 몸무게 얘기엔 좀 예민해." },
      { en: "Money is a touchy subject in my family.", kr: "우리 집에선 돈이 민감한 주제야." }
    ]
  },
  {
    id: "L4-411",
    word: "leap",
    meaning: "뛰어오르다, 도약",
    examples: [
      { en: "The cat leaped onto the kitchen counter.", kr: "고양이가 부엌 조리대 위로 뛰어올랐어." },
      { en: "Quitting my job to start a business was a huge leap.", kr: "회사를 그만두고 창업한 건 엄청난 도약이었어." }
    ]
  },
  {
    id: "L4-023",
    word: "demographic",
    meaning: "(특정) 연령층, 인구층, 인구 통계의",
    examples: [
      { en: "Our main demographic is people in their twenties.", kr: "우리 주요 타깃 연령층은 20대예요." },
      { en: "That show isn't really aimed at my demographic.", kr: "그 프로그램은 딱히 내 연령층을 겨냥한 게 아니야." }
    ]
  },
  {
    id: "L4-412",
    word: "motive",
    meaning: "동기, 이유",
    examples: [
      { en: "What was your motive for changing careers?", kr: "직업을 바꾼 동기가 뭐였어요?" },
      { en: "Honestly, I had no hidden motive. I just wanted to help.", kr: "솔직히 숨은 의도 같은 건 없었어. 그냥 돕고 싶었어." }
    ]
  },
  {
    id: "L4-413",
    word: "overtime",
    meaning: "초과 근무, 야근",
    examples: [
      { en: "I worked overtime three nights this week.", kr: "이번 주에 사흘 밤이나 야근했어." },
      { en: "Do we get paid extra for overtime?", kr: "초과 근무하면 수당이 따로 나와요?" }
    ]
  },
  {
    id: "L4-711",
    word: "pothole",
    meaning: "(도로의) 움푹 팬 곳, 포트홀",
    examples: [
      { en: "Watch out for that pothole!", kr: "저 패인 데 조심해!" },
      { en: "I hit a pothole and got a flat tire.", kr: "포트홀 밟아서 타이어 펑크 났어." }
    ]
  },
  {
    id: "L4-414",
    word: "postal",
    meaning: "우편의",
    examples: [
      { en: "Please include your postal code on the form.", kr: "양식에 우편번호를 꼭 적어 주세요." },
      { en: "The postal service is slower during the holidays.", kr: "연휴 기간에는 우편 서비스가 더 느려요." }
    ]
  },
  {
    id: "L4-712",
    word: "spoiler",
    meaning: "스포일러, (줄거리) 미리 말하기",
    examples: [
      { en: "No spoilers! I haven't seen the finale yet.", kr: "스포 하지 마! 나 아직 마지막 회 안 봤어." },
      { en: "Spoiler alert: the dog survives.", kr: "스포 주의: 강아지는 살아." }
    ]
  },
  {
    id: "L4-713",
    word: "stubborn",
    meaning: "고집이 센, 완고한, 잘 안 없어지는",
    examples: [
      { en: "My dad is too stubborn to ask for directions.", kr: "우리 아빠는 고집이 세서 길을 절대 안 물어보셔." },
      { en: "This stain is really stubborn. It won't come out.", kr: "이 얼룩 진짜 안 지워져. 빠지질 않아." }
    ]
  },
  {
    id: "L4-030",
    word: "dubious",
    meaning: "의심스러운, 미심쩍은",
    examples: [
      { en: "That deal sounds a little dubious to me.", kr: "그 거래는 나한테는 좀 미심쩍게 들려." },
      { en: "I'm dubious about his excuse for being late again.", kr: "또 늦은 거에 대한 그 사람 핑계, 난 좀 의심스러워." }
    ]
  },
  {
    id: "L4-031",
    word: "eccentric",
    meaning: "별난, 특이한",
    examples: [
      { en: "My uncle is a bit eccentric, but he's really fun.", kr: "우리 삼촌은 좀 별나긴 한데 진짜 재밌어." },
      { en: "She has really eccentric taste in clothes.", kr: "그녀는 옷 취향이 진짜 특이해." }
    ]
  },
  {
    id: "L4-714",
    word: "sarcastic",
    meaning: "비꼬는, 빈정대는",
    examples: [
      { en: "Was that sarcastic, or do you really like it?", kr: "그거 비꼬는 거야, 아니면 진짜 좋다는 거야?" },
      { en: "Sorry, I was being sarcastic. I didn't mean it.", kr: "미안, 비꼬듯이 말한 거야. 진심 아니었어." }
    ]
  },
  {
    id: "L4-415",
    word: "prosecutor",
    meaning: "검사",
    examples: [
      { en: "Did you see the prosecutor in that drama? She was amazing.", kr: "그 드라마에 나온 검사 봤어? 진짜 멋있더라." },
      { en: "My cousin wants to become a prosecutor after law school.", kr: "내 사촌은 로스쿨을 마치고 검사가 되고 싶어 해." }
    ]
  },
  {
    id: "L4-715",
    word: "thaw",
    meaning: "해동하다, 녹다",
    examples: [
      { en: "Did you take the chicken out to thaw?", kr: "닭고기 해동하려고 꺼내놨어?" },
      { en: "It takes a few hours for the meat to thaw.", kr: "고기 해동되는 데 몇 시간 걸려." }
    ]
  },
  {
    id: "L4-035",
    word: "entail",
    meaning: "수반하다, (일에) 포함되다",
    examples: [
      { en: "So what exactly does the job entail?", kr: "그래서 그 일엔 정확히 어떤 업무가 포함돼요?" },
      { en: "Moving abroad entails a lot of paperwork.", kr: "해외로 이사하면 서류 작업이 엄청 따라와." }
    ]
  },
  {
    id: "L4-716",
    word: "refill",
    meaning: "리필, 다시 채우다",
    examples: [
      { en: "Can I get a refill on my coffee?", kr: "커피 리필 좀 해 주실 수 있어요?" },
      { en: "I need to refill my water bottle before the hike.", kr: "등산 전에 물병을 다시 채워야 해." }
    ]
  },
  {
    id: "L4-717",
    word: "tacky",
    meaning: "촌스러운, 싸구려 같은",
    examples: [
      { en: "Is this sweater too tacky for the party?", kr: "이 스웨터 파티에 입기엔 너무 촌스러워?" },
      { en: "They had tacky decorations everywhere.", kr: "여기저기 촌스러운 장식이 있었어." }
    ]
  },
  {
    id: "L4-718",
    word: "bruise",
    meaning: "멍, 멍이 들다",
    examples: [
      { en: "Where did you get that bruise on your arm?", kr: "팔에 그 멍은 어디서 생긴 거야?" },
      { en: "I bumped into the table and bruised my knee.", kr: "탁자에 부딪혀서 무릎에 멍이 들었어." }
    ]
  },
  {
    id: "L4-416",
    word: "recipient",
    meaning: "받는 사람, 수령인, 수상자",
    examples: [
      { en: "Double-check the recipient before you send the email.", kr: "이메일 보내기 전에 받는 사람을 다시 확인해." },
      { en: "She was the recipient of this year's top sales award.", kr: "그녀가 올해 최고 영업상 수상자였어요." }
    ]
  },
  {
    id: "L4-417",
    word: "risky",
    meaning: "위험한, 모험적인",
    examples: [
      { en: "Investing all your savings in one stock is risky.", kr: "저축한 돈을 전부 한 종목에 투자하는 건 위험해." },
      { en: "Driving on icy roads at night is really risky.", kr: "밤에 빙판길을 운전하는 건 정말 위험해요." }
    ]
  },
  {
    id: "L4-418",
    word: "scam",
    meaning: "사기, 사기 치다",
    examples: [
      { en: "That text message about a prize is obviously a scam.", kr: "경품 당첨됐다는 그 문자는 뻔한 사기야." },
      { en: "My uncle got scammed out of a thousand dollars online.", kr: "우리 삼촌이 온라인에서 천 달러를 사기당했어." }
    ]
  },
  {
    id: "L4-419",
    word: "sober",
    meaning: "술 취하지 않은, 술을 끊은",
    examples: [
      { en: "Make sure someone sober drives us home tonight.", kr: "오늘 밤엔 꼭 술 안 마신 사람이 운전해서 데려다 주게 해." },
      { en: "He has been sober for five years now.", kr: "그는 술을 끊은 지 이제 5년 됐어요." }
    ]
  },
  {
    id: "L4-043",
    word: "generic",
    meaning: "뻔한, 일반적인, 상표 없는",
    examples: [
      { en: "The generic version is just as good and much cheaper.", kr: "상표 없는 제품도 똑같이 좋고 훨씬 싸." },
      { en: "His speech felt so generic, like he'd copied it online.", kr: "그 사람 연설이 너무 뻔했어, 인터넷에서 베낀 것처럼." }
    ]
  },
  {
    id: "L4-719",
    word: "bland",
    meaning: "싱거운, 밋밋한, 특색 없는",
    examples: [
      { en: "The soup is a bit bland. Can you pass the salt?", kr: "국이 좀 싱겁다. 소금 좀 줄래?" },
      { en: "The hotel was clean, but the decor was kind of bland.", kr: "호텔은 깨끗했는데 인테리어가 좀 밋밋했어." }
    ]
  },
  {
    id: "L4-420",
    word: "squeeze",
    meaning: "짜다, (시간을) 겨우 내다",
    examples: [
      { en: "Squeeze some lemon juice over the fish.", kr: "생선 위에 레몬즙을 좀 짜." },
      { en: "I can squeeze you in at three o'clock tomorrow.", kr: "내일 3시에 시간을 내서 만나 드릴 수 있어요." }
    ]
  },
  {
    id: "L4-720",
    word: "downpour",
    meaning: "폭우, 억수 같은 비",
    examples: [
      { en: "We got caught in a downpour on the way home.", kr: "집에 오는 길에 폭우를 만났어." },
      { en: "Wait until the downpour stops.", kr: "비 쏟아지는 거 그칠 때까지 기다려." }
    ]
  },
  {
    id: "L4-721",
    word: "sprain",
    meaning: "(발목 등을) 삐다, 접질리다",
    examples: [
      { en: "I sprained my ankle playing basketball.", kr: "농구하다가 발목을 삐었어." },
      { en: "Is it broken, or just a sprain?", kr: "부러진 거야, 아니면 그냥 삔 거야?" }
    ]
  },
  {
    id: "L4-614",
    word: "colleague",
    meaning: "동료",
    examples: [
      { en: "My colleague is covering for me while I'm on vacation.", kr: "제가 휴가 가 있는 동안 동료가 대신 일해 줘요." },
      { en: "Let me introduce you to my colleague, Jenna.", kr: "제 동료 제나 소개해 드릴게요." }
    ]
  },
  {
    id: "L4-722",
    word: "homebody",
    meaning: "집순이, 집돌이",
    examples: [
      { en: "I'm a homebody, I'd rather stay in tonight.", kr: "나 집순이라 오늘 밤엔 그냥 집에 있을래." },
      { en: "He used to be a homebody, but now he travels a lot.", kr: "걔 예전엔 집돌이였는데 지금은 여행 엄청 다녀." }
    ]
  },
  {
    id: "L4-723",
    word: "gloat",
    meaning: "고소해하다, 잘난 척하며 우쭐대다",
    examples: [
      { en: "Okay, you were right. Stop gloating.", kr: "그래, 네 말이 맞았어. 그만 우쭐대." },
      { en: "He's still gloating about winning the bet.", kr: "걔 내기 이긴 걸로 아직도 으스대고 있어." }
    ]
  },
  {
    id: "L4-051",
    word: "incoherent",
    meaning: "앞뒤가 안 맞는, 횡설수설하는",
    examples: [
      { en: "He was so drunk that he was totally incoherent.", kr: "그는 너무 취해서 완전히 횡설수설했어." },
      { en: "Sorry if I sound incoherent. I've barely slept.", kr: "말이 앞뒤가 안 맞으면 미안해. 거의 못 잤거든." }
    ]
  },
  {
    id: "L4-421",
    word: "swap",
    meaning: "바꾸다, 교환하다",
    examples: [
      { en: "Can we swap seats so I can sit by the window?", kr: "내가 창가에 앉게 자리 좀 바꿔 줄래?" },
      { en: "I swapped shifts with a coworker to attend the wedding.", kr: "결혼식에 가려고 동료와 근무를 바꿨어." }
    ]
  },
  {
    id: "L4-422",
    word: "terrain",
    meaning: "지형, 지역",
    examples: [
      { en: "Is this bike good for rough terrain?", kr: "이 자전거 험한 길에서도 잘 나가요?" },
      { en: "The hiking trail crosses rocky terrain near the top.", kr: "그 등산로는 정상 근처에서 바위 지형을 지나가." }
    ]
  },
  {
    id: "L4-724",
    word: "warranty",
    meaning: "품질 보증(서), 보증 기간",
    examples: [
      { en: "Is this laptop still under warranty?", kr: "이 노트북 아직 보증 기간 안이에요?" },
      { en: "The warranty covers repairs for two years.", kr: "보증으로 2년 동안 수리를 받을 수 있어요." }
    ]
  },
  {
    id: "L4-423",
    word: "threaten",
    meaning: "위협하다, 협박하다",
    examples: [
      { en: "The customer threatened to cancel his contract.", kr: "그 고객은 계약을 해지하겠다고 위협했어요." },
      { en: "My sister threatened to tell Mom if I didn't clean up.", kr: "내가 안 치우면 엄마한테 이르겠다고 언니가 협박했어." }
    ]
  },
  {
    id: "L4-725",
    word: "glitch",
    meaning: "(작은) 오류, 결함, 버그",
    examples: [
      { en: "The app keeps crashing. It must be a glitch.", kr: "앱이 계속 꺼져. 오류인가 봐." },
      { en: "Sorry, there was a glitch with your order.", kr: "죄송합니다, 주문 처리에 오류가 있었어요." }
    ]
  },
  {
    id: "L4-726",
    word: "witty",
    meaning: "재치 있는",
    examples: [
      { en: "Your best man speech was so witty!", kr: "네 신랑 들러리 축사 진짜 재치 있었어!" },
      { en: "She's smart and witty. You'll like her.", kr: "그녀는 똑똑하고 재치 있어. 너도 좋아할 거야." }
    ]
  },
  {
    id: "L4-727",
    word: "overcharge",
    meaning: "(요금을) 더 받다, 바가지 씌우다",
    examples: [
      { en: "Excuse me, I think you overcharged me for the drinks.", kr: "저기요, 음료값을 더 받으신 것 같아요." },
      { en: "Taxi drivers sometimes overcharge tourists.", kr: "택시 기사들이 가끔 관광객한테 바가지를 씌워." }
    ]
  },
  {
    id: "L4-059",
    word: "integrity",
    meaning: "정직함, 진실성, 온전함",
    examples: [
      { en: "I trust her because she has real integrity.", kr: "그녀는 정말 정직한 사람이라서 믿어." },
      { en: "Don't cheat. Your integrity matters more than your grade.", kr: "커닝하지 마. 성적보다 네 정직함이 더 중요해." }
    ]
  },
  {
    id: "L4-424",
    word: "towel",
    meaning: "수건",
    examples: [
      { en: "Don't forget to bring a towel to the beach.", kr: "해변에 수건 가져가는 거 잊지 마." },
      { en: "Could we get some extra towels in our room?", kr: "저희 방에 수건 좀 더 주실 수 있나요?" }
    ]
  },
  {
    id: "L4-425",
    word: "unconscious",
    meaning: "의식을 잃은, 무의식적인",
    examples: [
      { en: "He fell and was unconscious for a few minutes.", kr: "그는 넘어져서 몇 분 동안 의식을 잃었어." },
      { en: "It's an unconscious habit. I don't even notice I'm doing it.", kr: "무의식적인 습관이야. 내가 그러는 줄도 몰라." }
    ]
  },
  {
    id: "L4-426",
    word: "vegetable",
    meaning: "채소",
    examples: [
      { en: "Try to eat more fresh vegetables every day.", kr: "매일 신선한 채소를 더 많이 먹도록 해." },
      { en: "My favorite vegetable is roasted sweet potato.", kr: "내가 제일 좋아하는 채소는 군고구마야." }
    ]
  },
  {
    id: "L4-427",
    word: "virtue",
    meaning: "미덕, 장점",
    examples: [
      { en: "Patience is a virtue, especially when you have kids.", kr: "인내는 미덕이야, 특히 아이가 있을 때는." },
      { en: "Being on time isn't really one of my virtues.", kr: "시간 약속 지키는 건 솔직히 내 장점은 아니야." }
    ]
  },
  {
    id: "L4-064",
    word: "irrelevant",
    meaning: "무관한, 상관없는",
    examples: [
      { en: "Whether I like him is irrelevant. He's good at his job.", kr: "내가 그를 좋아하는지는 상관없어. 그는 일을 잘해." },
      { en: "Sorry, that question is irrelevant to today's meeting.", kr: "죄송하지만, 그 질문은 오늘 회의와는 무관해요." }
    ]
  },
  {
    id: "L4-428",
    word: "workforce",
    meaning: "전 직원, 인력, 노동력",
    examples: [
      { en: "Our workforce has almost doubled since last year.", kr: "우리 회사 인력이 작년보다 거의 두 배가 됐어요." },
      { en: "Women now make up half of our workforce.", kr: "이제 여성이 우리 전체 직원의 절반을 차지해요." }
    ]
  },
  {
    id: "L4-728",
    word: "layoff",
    meaning: "정리 해고",
    examples: [
      { en: "Did you hear about the layoffs at his company?", kr: "그 사람 회사 정리 해고 소식 들었어?" },
      { en: "I'm worried there'll be more layoffs this year.", kr: "올해 정리 해고가 더 있을까 봐 걱정돼." }
    ]
  },
  {
    id: "L4-067",
    word: "metaphor",
    meaning: "은유",
    examples: [
      { en: "Is that a metaphor, or do you actually mean it?", kr: "그거 은유야, 아니면 진짜 그런 뜻이야?" },
      { en: "Life is a rollercoaster. It's a cheesy metaphor, but true.", kr: "인생은 롤러코스터야. 진부한 은유지만 사실이야." }
    ]
  },
  {
    id: "L4-729",
    word: "itchy",
    meaning: "가려운, 따가운",
    examples: [
      { en: "My eyes are so itchy. Must be allergies.", kr: "눈이 너무 가려워. 알레르기인가 봐." },
      { en: "This sweater is too itchy to wear.", kr: "이 스웨터는 너무 따가워서 못 입겠어." }
    ]
  },
  {
    id: "L4-730",
    word: "skimp",
    meaning: "아끼다, 인색하게 굴다",
    examples: [
      { en: "Don't skimp on the cheese!", kr: "치즈는 아끼지 마!" },
      { en: "I never skimp on a good mattress.", kr: "좋은 매트리스엔 절대 돈 안 아껴." }
    ]
  },
  {
    id: "L4-731",
    word: "sneaky",
    meaning: "몰래 하는, 교활한, 치사한",
    examples: [
      { en: "That's so sneaky! You read my texts?", kr: "진짜 치사하다! 내 문자 몰래 봤어?" },
      { en: "Watch out for sneaky fees when you book flights.", kr: "항공권 예약할 때 몰래 붙는 수수료 조심해." }
    ]
  },
  {
    id: "L4-429",
    word: "acre",
    meaning: "에이커(약 4,047㎡)",
    examples: [
      { en: "They own a farm of about fifty acres.", kr: "그들은 약 50에이커 규모의 농장을 소유하고 있어." },
      { en: "Wow, how many acres is your parents' farm?", kr: "와, 너희 부모님 농장 몇 에이커야?" }
    ]
  },
  {
    id: "L4-732",
    word: "mechanic",
    meaning: "정비사",
    examples: [
      { en: "My car's making a weird noise. I should see a mechanic.", kr: "차에서 이상한 소리가 나. 정비사한테 가 봐야겠어." },
      { en: "Do you know a good mechanic around here?", kr: "이 근처에 괜찮은 정비사 알아?" }
    ]
  },
  {
    id: "L4-431",
    word: "bore",
    meaning: "지루하게 하다",
    examples: [
      { en: "I won't bore you with all the details.", kr: "세세한 얘기로 지루하게 하지 않을게." },
      { en: "Am I boring you? You keep checking your phone.", kr: "나 얘기 지루해? 계속 폰만 보네." }
    ]
  },
  {
    id: "L4-733",
    word: "clutter",
    meaning: "잡동사니, 어수선함, 어지럽히다",
    examples: [
      { en: "I need to get rid of all this clutter.", kr: "이 잡동사니 다 치워 버려야겠어." },
      { en: "Don't clutter the table with your stuff.", kr: "네 물건으로 식탁 어지럽히지 마." }
    ]
  },
  {
    id: "L4-075",
    word: "plausible",
    meaning: "그럴듯한, 있을 법한",
    examples: [
      { en: "That's a plausible excuse, but I don't buy it.", kr: "그럴듯한 핑계긴 한데, 난 안 믿어." },
      { en: "His story sounds plausible, but something feels off.", kr: "그 사람 얘기가 그럴듯하게 들리긴 하는데, 뭔가 이상해." }
    ]
  },
  {
    id: "L4-076",
    word: "precedent",
    meaning: "선례, 전례",
    examples: [
      { en: "If we let him leave early, it'll set a precedent.", kr: "그 사람을 일찍 보내 주면 선례가 될 거야." },
      { en: "There's no precedent for a situation like this.", kr: "이런 상황은 전례가 없어요." }
    ]
  },
  {
    id: "L4-734",
    word: "detour",
    meaning: "우회로, 돌아가는 길",
    examples: [
      { en: "The road's closed, so we have to take a detour.", kr: "길이 막혀서 돌아가야 해." },
      { en: "Let's make a quick detour to the bakery.", kr: "잠깐 빵집에 들렀다 가자." }
    ]
  },
  {
    id: "L4-432",
    word: "butterfly",
    meaning: "나비, (긴장으로) 속이 울렁거림",
    examples: [
      { en: "A butterfly landed on my shoulder in the garden.", kr: "정원에서 나비 한 마리가 내 어깨에 앉았어." },
      { en: "I always get butterflies before a big presentation.", kr: "큰 발표 전에는 항상 긴장돼서 속이 울렁거려." }
    ]
  },
  {
    id: "L4-079",
    word: "premise",
    meaning: "전제, (작품의) 기본 설정",
    examples: [
      { en: "The premise of the movie is great, but the ending's weak.", kr: "영화 기본 설정은 좋은데 결말이 약해." },
      { en: "Your whole argument is based on a false premise.", kr: "네 주장은 전부 잘못된 전제에 기반하고 있어." }
    ]
  },
  {
    id: "L4-433",
    word: "desktop",
    meaning: "데스크톱 컴퓨터, 바탕화면",
    examples: [
      { en: "I saved the file on my desktop.", kr: "파일을 바탕화면에 저장했어." },
      { en: "I use a laptop at home and a desktop at work.", kr: "집에서는 노트북을, 회사에서는 데스크톱을 써." }
    ]
  },
  {
    id: "L4-434",
    word: "directory",
    meaning: "안내판, 주소록, (컴퓨터) 폴더",
    examples: [
      { en: "Check the building directory to find the dentist's office.", kr: "건물 안내판에서 치과 위치를 확인해 봐." },
      { en: "Save the report in the shared project directory.", kr: "보고서를 공유 프로젝트 폴더에 저장하세요." }
    ]
  },
  {
    id: "L4-082",
    word: "pristine",
    meaning: "새것 같은, 아주 깨끗한, 훼손되지 않은",
    examples: [
      { en: "The car is ten years old but still in pristine condition.", kr: "그 차는 10년 됐는데 아직도 새것 같은 상태야." },
      { en: "The beaches there are pristine. You'll love it.", kr: "거기 해변들은 정말 깨끗해. 너 엄청 좋아할 거야." }
    ]
  },
  {
    id: "L4-435",
    word: "dodge",
    meaning: "피하다, 회피하다",
    examples: [
      { en: "He dodged the question about his salary.", kr: "그는 연봉에 대한 질문을 피했어." },
      { en: "I had to dodge a cyclist on the sidewalk.", kr: "인도에서 자전거 탄 사람을 피해야 했어." }
    ]
  },
  {
    id: "L4-084",
    word: "proposition",
    meaning: "제안, (해 볼 만한) 일",
    examples: [
      { en: "I have a business proposition for you. Interested?", kr: "너한테 사업 제안이 하나 있어. 관심 있어?" },
      { en: "Living downtown is an expensive proposition.", kr: "시내에 사는 건 돈이 많이 드는 일이야." }
    ]
  },
  {
    id: "L4-436",
    word: "ginger",
    meaning: "생강",
    examples: [
      { en: "Ginger tea helps when I have an upset stomach.", kr: "배탈 났을 때 생강차가 도움이 돼." },
      { en: "Add a little fresh ginger to the stir-fry.", kr: "볶음 요리에 신선한 생강을 조금 넣어." }
    ]
  },
  {
    id: "L4-735",
    word: "haggle",
    meaning: "(값을) 흥정하다, 깎다",
    examples: [
      { en: "Don't be shy. Everyone haggles at this market.", kr: "부끄러워하지 마. 이 시장에선 다들 흥정해." },
      { en: "I haggled and got ten dollars off.", kr: "흥정해서 10달러 깎았어." }
    ]
  },
  {
    id: "L4-736",
    word: "comeback",
    meaning: "받아치는 말, 재기, 컴백",
    examples: [
      { en: "I thought of a great comeback, but way too late.", kr: "끝내주게 받아칠 말이 생각났는데, 너무 늦게 떠올랐어." },
      { en: "That singer is making a comeback this year.", kr: "그 가수가 올해 컴백한대." }
    ]
  },
  {
    id: "L4-437",
    word: "halt",
    meaning: "멈추다, 중단(시키다)",
    examples: [
      { en: "Everything came to a halt when the power went out.", kr: "정전되자 모든 게 멈춰 버렸어." },
      { en: "The bus came to a sudden halt at the crosswalk.", kr: "버스가 횡단보도에서 갑자기 멈춰 섰어." }
    ]
  },
  {
    id: "L4-737",
    word: "unfollow",
    meaning: "팔로우를 끊다, 언팔하다",
    examples: [
      { en: "Why did you unfollow me? Are you mad at me?", kr: "왜 나 언팔했어? 나한테 화났어?" },
      { en: "I unfollowed a lot of accounts that stressed me out.", kr: "스트레스 주는 계정들을 많이 언팔했어." }
    ]
  },
  {
    id: "L4-090",
    word: "repertoire",
    meaning: "레퍼토리, 할 줄 아는 것들",
    examples: [
      { en: "Pasta is the only dish in my cooking repertoire.", kr: "내 요리 레퍼토리에 있는 건 파스타뿐이야." },
      { en: "The band added some new songs to its repertoire.", kr: "그 밴드가 레퍼토리에 새 노래를 몇 곡 추가했어." }
    ]
  },
  {
    id: "L4-091",
    word: "resilience",
    meaning: "회복력, 탄력성",
    examples: [
      { en: "Kids have amazing resilience. She bounced back so quickly.", kr: "애들은 회복력이 놀라워. 그 애는 정말 금방 회복했어." },
      { en: "This job requires a lot of resilience under pressure.", kr: "이 일은 압박 속에서도 버티는 회복력이 많이 필요해요." }
    ]
  },
  {
    id: "L4-092",
    word: "retrospect",
    meaning: "돌이켜 봄, 회고",
    examples: [
      { en: "In retrospect, taking that job was a mistake.", kr: "돌이켜 보면, 그 일자리를 받아들인 건 실수였어." },
      { en: "In retrospect, I should have studied harder in college.", kr: "돌이켜 보면, 대학 때 공부를 더 열심히 했어야 했어요." }
    ]
  },
  {
    id: "L4-738",
    word: "slammed",
    meaning: "엄청 바쁜, 일이 몰린",
    examples: [
      { en: "Sorry, I'm totally slammed at work this week.", kr: "미안, 이번 주에 일이 완전 몰렸어." },
      { en: "The restaurant was slammed on Friday night.", kr: "금요일 밤에 식당이 미어터졌어." }
    ]
  },
  {
    id: "L4-739",
    word: "nitpick",
    meaning: "트집 잡다, 사소한 것까지 지적하다",
    examples: [
      { en: "Stop nitpicking. The report is fine.", kr: "트집 좀 그만 잡아. 보고서 괜찮아." },
      { en: "My boss nitpicks every little thing I do.", kr: "우리 상사는 내가 하는 사소한 것까지 다 지적해." }
    ]
  },
  {
    id: "L4-095",
    word: "skeptical",
    meaning: "회의적인",
    examples: [
      { en: "I'm a little skeptical about those diet pills.", kr: "그 다이어트 약에 대해선 좀 회의적이야." },
      { en: "My boss was skeptical at first, but she loved the idea.", kr: "상사가 처음엔 회의적이었는데, 결국 그 아이디어를 엄청 좋아했어." }
    ]
  },
  {
    id: "L4-438",
    word: "impress",
    meaning: "깊은 인상을 주다, 감동시키다",
    examples: [
      { en: "She really impressed the interviewers with her answers.", kr: "그녀는 답변으로 면접관들에게 강한 인상을 남겼어." },
      { en: "I cooked dinner to impress my girlfriend's parents.", kr: "여자 친구 부모님께 잘 보이려고 저녁을 요리했어." }
    ]
  },
  {
    id: "L4-097",
    word: "stance",
    meaning: "입장, 태도",
    examples: [
      { en: "What's your stance on working from home?", kr: "재택근무에 대해 어떤 입장이세요?" },
      { en: "My parents have a pretty strict stance on curfews.", kr: "우리 부모님은 통금에 대해 꽤 엄격한 입장이셔." }
    ]
  },
  {
    id: "L4-439",
    word: "mentor",
    meaning: "멘토, 조언자, 지도하다",
    examples: [
      { en: "My first manager became my mentor for life.", kr: "내 첫 상사가 평생의 멘토가 됐어." },
      { en: "Would you be willing to mentor me this year?", kr: "올해 제 멘토가 되어 주실 수 있을까요?" }
    ]
  },
  {
    id: "L4-099",
    word: "stigma",
    meaning: "낙인, 오명, 편견",
    examples: [
      { en: "There's still a stigma around seeing a therapist.", kr: "심리 상담 받는 것에 대한 낙인이 아직도 있어." },
      { en: "Getting divorced doesn't carry the same stigma anymore.", kr: "이혼한다고 예전처럼 낙인찍히진 않아." }
    ]
  },
  {
    id: "L4-440",
    word: "norm",
    meaning: "일반적인 일, 표준, 규범",
    examples: [
      { en: "Working from home has become the norm for many people.", kr: "재택근무는 많은 사람에게 일반적인 일이 되었어요." },
      { en: "In some cultures, tipping is not the norm.", kr: "어떤 문화에서는 팁을 주는 게 일반적이지 않아." }
    ]
  }
];

const wordsLevel4_Part2 = [
  {
    id: "L4-101",
    word: "subjective",
    meaning: "주관적인",
    examples: [
      { en: "Taste in music is totally subjective, right?", kr: "음악 취향은 완전히 주관적인 거잖아, 그렇지?" },
      { en: "That's just your subjective opinion, not a fact.", kr: "그건 그냥 네 주관적인 의견이지, 사실이 아니야." }
    ]
  },
  {
    id: "L4-740",
    word: "freelance",
    meaning: "프리랜서로 일하다, 프리랜서의",
    examples: [
      { en: "I quit my job and started to freelance.", kr: "회사 그만두고 프리랜서로 일하기 시작했어." },
      { en: "Do you do any freelance work on the side?", kr: "부업으로 프리랜서 일 하는 거 있어?" }
    ]
  },
  {
    id: "L4-741",
    word: "voucher",
    meaning: "상품권, 쿠폰, 바우처",
    examples: [
      { en: "Can I use this voucher for the meal?", kr: "식사에 이 쿠폰 써도 되나요?" },
      { en: "The airline gave us a meal voucher for the delay.", kr: "항공사가 지연 보상으로 식사 쿠폰을 줬어." }
    ]
  },
  {
    id: "L4-615",
    word: "reservation",
    meaning: "예약",
    examples: [
      { en: "Hi, I have a reservation for two at seven.", kr: "안녕하세요, 7시에 두 명 예약했어요." },
      { en: "Do I need to make a reservation for the tour?", kr: "그 투어 예약해야 하나요?" }
    ]
  },
  {
    id: "L4-105",
    word: "tentative",
    meaning: "잠정적인, 임시의, 머뭇거리는",
    examples: [
      { en: "We have a tentative date for the wedding: June tenth.", kr: "결혼식 날짜를 잠정적으로 6월 10일로 정했어." },
      { en: "Let's make a tentative plan and confirm it next week.", kr: "일단 잠정적인 계획을 세우고 다음 주에 확정하자." }
    ]
  },
  {
    id: "L4-441",
    word: "prone",
    meaning: "~하기 쉬운, ~하는 경향이 있는",
    examples: [
      { en: "I'm prone to headaches when I don't sleep enough.", kr: "나는 잠을 충분히 못 자면 두통이 잘 생겨." },
      { en: "This area is prone to flooding in the summer.", kr: "이 지역은 여름에 홍수가 나기 쉬워요." }
    ]
  },
  {
    id: "L4-616",
    word: "headache",
    meaning: "두통, 골칫거리",
    examples: [
      { en: "I've had a headache since this morning.", kr: "아침부터 계속 머리가 아파요." },
      { en: "Parking downtown is such a headache.", kr: "시내 주차는 진짜 골칫거리야." }
    ]
  },
  {
    id: "L4-742",
    word: "outdated",
    meaning: "구식의, 시대에 뒤떨어진, 예전 것인",
    examples: [
      { en: "My phone is so outdated. It won't update anymore.", kr: "내 폰은 너무 구식이라 업데이트도 안 돼." },
      { en: "Sorry, the info on the website is outdated.", kr: "죄송해요, 웹사이트에 있는 정보는 예전 거예요." }
    ]
  },
  {
    id: "L4-442",
    word: "reunion",
    meaning: "재회, 동창회",
    examples: [
      { en: "Our high school reunion is next month.", kr: "우리 고등학교 동창회가 다음 달이야." },
      { en: "It was an emotional reunion at the airport.", kr: "공항에서의 감동적인 재회였어요." }
    ]
  },
  {
    id: "L4-743",
    word: "bossy",
    meaning: "이래라저래라 하는, 대장 노릇 하는",
    examples: [
      { en: "Stop being so bossy. I know what I'm doing.", kr: "그만 좀 이래라저래라 해. 나도 알아서 해." },
      { en: "My older sister was really bossy when we were kids.", kr: "어릴 때 우리 언니는 엄청 대장 노릇을 했어." }
    ]
  },
  {
    id: "L4-443",
    word: "sleeve",
    meaning: "소매",
    examples: [
      { en: "Roll up your sleeves before you wash the dishes.", kr: "설거지하기 전에 소매를 걷어." },
      { en: "I prefer shirts with short sleeves in summer.", kr: "여름에는 반소매 셔츠가 더 좋아." }
    ]
  },
  {
    id: "L4-444",
    word: "soundtrack",
    meaning: "영화 음악, 사운드트랙",
    examples: [
      { en: "I listen to movie soundtracks while I work.", kr: "나는 일할 때 영화 음악을 들어." },
      { en: "That song is from the soundtrack of my favorite movie.", kr: "그 노래 내가 제일 좋아하는 영화 OST에 나와." }
    ]
  },
  {
    id: "L4-744",
    word: "burnout",
    meaning: "번아웃, 극도의 피로",
    examples: [
      { en: "I took a week off to avoid burnout.", kr: "번아웃 오지 않게 일주일 휴가를 냈어." },
      { en: "Working every weekend is a recipe for burnout.", kr: "주말마다 일하면 번아웃 오기 딱 좋아." }
    ]
  },
  {
    id: "L4-446",
    word: "thankful",
    meaning: "감사하는, 고맙게 여기는",
    examples: [
      { en: "I'm thankful for all your help this year.", kr: "올해 도와준 모든 것에 감사해." },
      { en: "We should be thankful that nobody got hurt.", kr: "아무도 다치지 않은 걸 감사하게 생각해야 해." }
    ]
  },
  {
    id: "L4-115",
    word: "volatile",
    meaning: "변동이 심한, 불안정한, (성격이) 욱하는",
    examples: [
      { en: "The stock market has been really volatile this week.", kr: "이번 주 주식 시장이 정말 변동이 심했어." },
      { en: "Be careful around him. He has a volatile temper.", kr: "그 사람 앞에선 조심해. 성격이 욱하는 편이야." }
    ]
  },
  {
    id: "L4-617",
    word: "luggage",
    meaning: "짐, 수하물",
    examples: [
      { en: "Can I leave my luggage here until check-in?", kr: "체크인할 때까지 짐을 여기 맡겨도 될까요?" },
      { en: "My luggage didn't show up at baggage claim.", kr: "수하물 찾는 곳에 제 짐이 안 나왔어요." }
    ]
  },
  {
    id: "L4-745",
    word: "fluke",
    meaning: "요행, 우연, 운",
    examples: [
      { en: "I won the first game, but it was a total fluke.", kr: "첫 판은 이겼는데 완전 운이었어." },
      { en: "Was your test score a fluke, or did you study?", kr: "시험 점수가 요행이었어, 아니면 공부한 거야?" }
    ]
  },
  {
    id: "L4-746",
    word: "ramble",
    meaning: "횡설수설하다, 장황하게 늘어놓다",
    examples: [
      { en: "Sorry, I'm rambling. What was the question?", kr: "미안, 내가 말이 길어졌네. 질문이 뭐였지?" },
      { en: "He rambled on about his car for an hour.", kr: "그는 한 시간 동안 자기 차 얘기를 늘어놓았어." }
    ]
  },
  {
    id: "L4-119",
    word: "coherent",
    meaning: "조리 있는, 일관성 있는",
    examples: [
      { en: "I was too tired to give a coherent answer.", kr: "너무 피곤해서 조리 있게 대답을 못 했어." },
      { en: "We need a more coherent plan before we pitch this.", kr: "이거 제안하기 전에 좀 더 일관성 있는 계획이 필요해요." }
    ]
  },
  {
    id: "L4-447",
    word: "treasurer",
    meaning: "회계 담당자, 재무 담당",
    examples: [
      { en: "She was elected treasurer of the parents' association.", kr: "그녀는 학부모회 회계 담당자로 뽑혔어." },
      { en: "Send all receipts to the club treasurer by Friday.", kr: "금요일까지 모든 영수증을 동아리 회계 담당에게 보내 줘." }
    ]
  },
  {
    id: "L4-121",
    word: "conviction",
    meaning: "확신, 신념, 유죄 판결",
    examples: [
      { en: "She said it with such conviction that I believed her.", kr: "그녀가 너무 확신에 차서 말해서 믿었어." },
      { en: "He had a previous conviction, so he didn't get the job.", kr: "그는 유죄 판결을 받은 전과가 있어서 그 일자리를 못 얻었어." }
    ]
  },
  {
    id: "L4-448",
    word: "unclear",
    meaning: "불분명한, 확실하지 않은",
    examples: [
      { en: "The instructions were unclear, so I called customer support.", kr: "설명서가 불분명해서 고객센터에 전화했어." },
      { en: "It's still unclear when the store will reopen.", kr: "그 가게가 언제 다시 문을 열지는 아직 확실하지 않아요." }
    ]
  },
  {
    id: "L4-747",
    word: "uptight",
    meaning: "긴장한, 깐깐한, 예민한",
    examples: [
      { en: "Relax. Why are you so uptight today?", kr: "긴장 좀 풀어. 오늘 왜 이렇게 예민해?" },
      { en: "My new manager is a little uptight about rules.", kr: "새로 온 매니저는 규칙에 좀 깐깐해." }
    ]
  },
  {
    id: "L4-748",
    word: "rant",
    meaning: "(화나서) 마구 떠들다, 불평을 늘어놓다, 열변",
    examples: [
      { en: "Sorry for the rant. I just needed to vent.", kr: "푸념 늘어놔서 미안. 그냥 털어놓고 싶었어." },
      { en: "He ranted about the traffic all through dinner.", kr: "그는 저녁 내내 교통 체증에 대해 불평을 늘어놓았어." }
    ]
  },
  {
    id: "L4-449",
    word: "altitude",
    meaning: "고도, 해발",
    examples: [
      { en: "My ears always pop when the plane changes altitude.", kr: "비행기 고도가 바뀔 때면 항상 귀가 먹먹해져." },
      { en: "Some people get headaches at high altitude.", kr: "어떤 사람들은 고지대에서 두통이 생겨." }
    ]
  },
  {
    id: "L4-450",
    word: "beautifully",
    meaning: "아름답게, 훌륭하게",
    examples: [
      { en: "The cake was beautifully decorated with fresh fruit.", kr: "케이크가 신선한 과일로 아름답게 장식되어 있었어." },
      { en: "Everything went beautifully at the product launch.", kr: "제품 출시 행사에서 모든 게 훌륭하게 진행됐어요." }
    ]
  },
  {
    id: "L4-749",
    word: "stuffy",
    meaning: "답답한, 통풍이 안 되는, 코가 막힌",
    examples: [
      { en: "It's so stuffy in here. Can I open a window?", kr: "여기 너무 답답하다. 창문 좀 열어도 돼?" },
      { en: "I have a stuffy nose and a sore throat.", kr: "코가 막히고 목이 아파." }
    ]
  },
  {
    id: "L4-750",
    word: "creepy",
    meaning: "소름 끼치는, 으스스한",
    examples: [
      { en: "That guy keeps staring at us. It's creepy.", kr: "저 남자가 계속 우리를 쳐다봐. 소름 끼쳐." },
      { en: "This old house is kind of creepy at night.", kr: "이 오래된 집은 밤에 좀 으스스해." }
    ]
  },
  {
    id: "L4-129",
    word: "dismantle",
    meaning: "분해하다, 해체하다",
    examples: [
      { en: "We had to dismantle the bed to get it upstairs.", kr: "위층으로 옮기려고 침대를 분해해야 했어." },
      { en: "Can you help me dismantle the tent?", kr: "텐트 해체하는 것 좀 도와줄래?" }
    ]
  },
  {
    id: "L4-130",
    word: "distraught",
    meaning: "몹시 괴로워하는, 제정신이 아닌",
    examples: [
      { en: "She was distraught when her dog went missing.", kr: "강아지가 없어졌을 때 그녀는 제정신이 아니었어." },
      { en: "He sounded distraught on the phone. Is he okay?", kr: "통화할 때 그 사람 엄청 괴로워하는 것 같았어. 괜찮대?" }
    ]
  },
  {
    id: "L4-751",
    word: "nibble",
    meaning: "조금씩 뜯어먹다, 야금야금 먹다",
    examples: [
      { en: "I'm not hungry, I'll just nibble on some chips.", kr: "배 안 고파, 그냥 과자나 좀 집어먹을게." },
      { en: "The fish nibble at your toes, it tickles!", kr: "물고기들이 발가락을 쪼아서 간지러워!" }
    ]
  },
  {
    id: "L4-132",
    word: "ecstatic",
    meaning: "너무 기쁜, 황홀해하는",
    examples: [
      { en: "I was ecstatic when I heard I got the job!", kr: "합격 소식 들었을 때 날아갈 듯 기뻤어!" },
      { en: "The kids are ecstatic about our trip to the amusement park.", kr: "애들이 놀이공원 간다고 엄청 기뻐하고 있어." }
    ]
  },
  {
    id: "L4-451",
    word: "competent",
    meaning: "유능한, 능숙한",
    examples: [
      { en: "We need a competent engineer to lead this project.", kr: "이 프로젝트를 이끌 유능한 엔지니어가 필요해요." },
      { en: "She's a competent driver, even in heavy snow.", kr: "그녀는 폭설 속에서도 운전을 능숙하게 해." }
    ]
  },
  {
    id: "L4-752",
    word: "copycat",
    meaning: "따라쟁이, 모방한 것",
    examples: [
      { en: "Stop copying my outfit, you copycat!", kr: "내 옷 따라 입지 마, 따라쟁이야!" },
      { en: "Their new app is a total copycat of ours.", kr: "걔네 새 앱은 우리 거 완전히 베낀 거야." }
    ]
  },
  {
    id: "L4-753",
    word: "introvert",
    meaning: "내성적인 사람, 내향인",
    examples: [
      { en: "I'm an introvert, so big parties drain me.", kr: "나는 내향적이라 큰 파티에 가면 진이 빠져." },
      { en: "He seems outgoing, but he's actually an introvert.", kr: "그 사람 외향적으로 보이지만 사실 내성적이야." }
    ]
  },
  {
    id: "L4-754",
    word: "binge",
    meaning: "몰아서 보다, 폭식하다",
    examples: [
      { en: "I binged the whole season this weekend.", kr: "이번 주말에 시즌 전체를 몰아서 봤어." },
      { en: "I tend to binge on snacks when I'm stressed.", kr: "나는 스트레스 받으면 과자를 폭식하는 편이야." }
    ]
  },
  {
    id: "L4-452",
    word: "delegation",
    meaning: "대표단, (권한) 위임",
    examples: [
      { en: "A delegation from Japan will visit our factory next week.", kr: "다음 주에 일본 대표단이 우리 공장을 방문할 예정입니다." },
      { en: "I'm bad at delegation. I always try to do everything myself.", kr: "난 일을 잘 못 맡겨. 늘 다 혼자 하려고 해." }
    ]
  },
  {
    id: "L4-453",
    word: "inequality",
    meaning: "불평등",
    examples: [
      { en: "Do you think income inequality is getting worse here?", kr: "여기 소득 불평등이 점점 심해지고 있다고 생각해?" },
      { en: "There's still a lot of gender inequality in tech jobs.", kr: "IT 업계엔 아직도 성 불평등이 많아." }
    ]
  },
  {
    id: "L4-454",
    word: "leisure",
    meaning: "여가, 레저",
    examples: [
      { en: "What do you like to do in your leisure time?", kr: "여가 시간에 뭐 하는 걸 좋아해?" },
      { en: "This trip is for leisure, not business.", kr: "이번 여행은 출장이 아니라 여가를 위한 거예요." }
    ]
  },
  {
    id: "L4-455",
    word: "luckily",
    meaning: "운 좋게도, 다행히",
    examples: [
      { en: "Luckily, I found my wallet in the taxi.", kr: "다행히 택시에서 지갑을 찾았어." },
      { en: "It rained all day, but luckily we had umbrellas.", kr: "하루 종일 비가 왔지만, 운 좋게도 우산이 있었어." }
    ]
  },
  {
    id: "L4-456",
    word: "notification",
    meaning: "알림, 통지",
    examples: [
      { en: "I turned off notifications so I can focus.", kr: "집중하려고 알림을 꺼 뒀어." },
      { en: "You'll receive a notification when your order ships.", kr: "주문 상품이 발송되면 알림을 받으실 거예요." }
    ]
  },
  {
    id: "L4-457",
    word: "pasta",
    meaning: "파스타",
    examples: [
      { en: "Let's make pasta with tomato sauce for dinner.", kr: "저녁으로 토마토소스 파스타 만들자." },
      { en: "Don't overcook the pasta, or it gets mushy.", kr: "파스타를 너무 오래 삶지 마, 안 그러면 퍼져." }
    ]
  },
  {
    id: "L4-458",
    word: "runway",
    meaning: "활주로, 런웨이",
    examples: [
      { en: "Our plane waited on the runway for an hour.", kr: "우리 비행기는 활주로에서 한 시간 동안 대기했어." },
      { en: "The models walked down the runway in winter coats.", kr: "모델들이 겨울 코트를 입고 런웨이를 걸었어요." }
    ]
  },
  {
    id: "L4-144",
    word: "hypothetical",
    meaning: "가상의, 가정의",
    examples: [
      { en: "Just a hypothetical question: what if you won the lottery?", kr: "그냥 가정해서 묻는 건데, 복권에 당첨되면 어떡할 거야?" },
      { en: "Let's not worry about hypothetical problems yet.", kr: "아직 가상의 문제까지 걱정하지는 말자." }
    ]
  },
  {
    id: "L4-755",
    word: "shady",
    meaning: "수상한, 미심쩍은",
    examples: [
      { en: "That website looks shady. Don't enter your card number.", kr: "그 사이트 수상해 보여. 카드 번호 넣지 마." },
      { en: "He's been acting kind of shady lately.", kr: "걔 요즘 좀 수상하게 굴어." }
    ]
  },
  {
    id: "L4-618",
    word: "roommate",
    meaning: "룸메이트, 같이 사는 사람",
    examples: [
      { en: "My roommate always leaves dirty dishes in the sink.", kr: "내 룸메이트는 맨날 설거지거리를 싱크대에 쌓아 둬." },
      { en: "Are you looking for a roommate to split the rent?", kr: "월세 나눠 낼 룸메이트 구하고 있어요?" }
    ]
  },
  {
    id: "L4-619",
    word: "bargain",
    meaning: "싸게 산 물건, 흥정하다",
    examples: [
      { en: "This jacket was only twenty bucks. What a bargain!", kr: "이 재킷 20달러밖에 안 했어. 완전 득템이야!" },
      { en: "You can bargain with the vendors at the night market.", kr: "야시장에서는 상인들이랑 흥정할 수 있어요." }
    ]
  },
  {
    id: "L4-756",
    word: "brunch",
    meaning: "브런치",
    examples: [
      { en: "Want to grab brunch on Sunday?", kr: "일요일에 브런치 먹으러 갈래?" },
      { en: "This place has the best brunch in town.", kr: "여기가 이 동네에서 브런치가 제일 맛있어." }
    ]
  },
  {
    id: "L4-459",
    word: "sensor",
    meaning: "감지기, 센서",
    examples: [
      { en: "The lights turn on automatically with a motion sensor.", kr: "동작 감지 센서 덕분에 불이 자동으로 켜져." },
      { en: "A sensor in the car warns you if you drift out of your lane.", kr: "차에 있는 센서가 차선을 벗어나면 경고해 줘요." }
    ]
  },
  {
    id: "L4-460",
    word: "ambition",
    meaning: "야망, 포부",
    examples: [
      { en: "Her ambition is to open her own restaurant.", kr: "그녀의 포부는 자기 식당을 여는 거야." },
      { en: "He's talented, but he lacks ambition.", kr: "그는 재능은 있지만 야망이 부족해." }
    ]
  },
  {
    id: "L4-461",
    word: "bake",
    meaning: "(빵 등을) 굽다",
    examples: [
      { en: "My mom bakes bread every Saturday morning.", kr: "우리 엄마는 매주 토요일 아침에 빵을 구우셔." },
      { en: "Bake the cookies for about twelve minutes.", kr: "쿠키를 12분 정도 구워." }
    ]
  },
  {
    id: "L4-757",
    word: "groggy",
    meaning: "(잠이 덜 깨) 몽롱한, 비몽사몽인",
    examples: [
      { en: "I'm still groggy. Let me grab some coffee first.", kr: "아직 비몽사몽이야. 커피부터 좀 마실게." },
      { en: "This cold medicine makes me feel groggy.", kr: "이 감기약 먹으면 정신이 몽롱해져." }
    ]
  },
  {
    id: "L4-758",
    word: "flustered",
    meaning: "당황한, 허둥대는",
    examples: [
      { en: "I got so flustered when he asked me out.", kr: "그가 데이트 신청했을 때 너무 당황했어." },
      { en: "Don't get flustered. Just take a deep breath.", kr: "허둥대지 마. 그냥 숨 한번 크게 쉬어." }
    ]
  },
  {
    id: "L4-759",
    word: "tipsy",
    meaning: "알딸딸한, 약간 취한",
    examples: [
      { en: "I'm a little tipsy after two glasses of wine.", kr: "와인 두 잔 마셨더니 좀 알딸딸해." },
      { en: "Were you tipsy when you sent me that text?", kr: "나한테 그 문자 보낼 때 좀 취했었어?" }
    ]
  },
  {
    id: "L4-462",
    word: "compliment",
    meaning: "칭찬, 칭찬하다",
    examples: [
      { en: "Thanks for the compliment on my presentation!", kr: "내 발표 칭찬해 줘서 고마워!" },
      { en: "My boss complimented me on my report today.", kr: "오늘 상사가 내 보고서를 칭찬해 줬어." }
    ]
  },
  {
    id: "L4-760",
    word: "perk",
    meaning: "(직장의) 혜택, 특전",
    examples: [
      { en: "Free lunch is the best perk of this job.", kr: "무료 점심이 이 회사 최고의 복지야." },
      { en: "Does the job come with any perks?", kr: "그 일에 따로 혜택이 있어?" }
    ]
  },
  {
    id: "L4-761",
    word: "spotty",
    meaning: "(연결이) 자꾸 끊기는, 들쭉날쭉한",
    examples: [
      { en: "Sorry, my signal is spotty. Can you repeat that?", kr: "미안, 신호가 자꾸 끊겨. 다시 말해 줄래?" },
      { en: "The Wi-Fi in this cafe is really spotty.", kr: "이 카페 와이파이 진짜 자꾸 끊겨." }
    ]
  },
  {
    id: "L4-620",
    word: "annoyed",
    meaning: "짜증 난, 언짢은",
    examples: [
      { en: "I'm annoyed that the bus was late again.", kr: "버스가 또 늦게 와서 짜증 나." },
      { en: "Don't get annoyed, he's just trying to help.", kr: "짜증 내지 마, 그냥 도와주려는 거잖아." }
    ]
  },
  {
    id: "L4-463",
    word: "coordinator",
    meaning: "진행 담당자, 코디네이터",
    examples: [
      { en: "Please contact the event coordinator about parking.", kr: "주차 관련해서는 행사 담당자에게 문의해 주세요." },
      { en: "She works as a project coordinator at a design firm.", kr: "그녀는 디자인 회사에서 프로젝트 코디네이터로 일해." }
    ]
  },
  {
    id: "L4-464",
    word: "enjoyable",
    meaning: "즐거운, 재미있는",
    examples: [
      { en: "Thanks for dinner; it was a very enjoyable evening.", kr: "저녁 고마워, 정말 즐거운 저녁이었어." },
      { en: "The training was more enjoyable than I expected.", kr: "교육이 생각보다 재미있었어요." }
    ]
  },
  {
    id: "L4-465",
    word: "exterior",
    meaning: "외부, 외관, 겉모습",
    examples: [
      { en: "They painted the exterior of the house light blue.", kr: "그들은 집 외관을 하늘색으로 칠했어." },
      { en: "Behind his tough exterior, he's actually very kind.", kr: "강해 보이는 겉모습과 달리 그는 사실 아주 다정해." }
    ]
  },
  {
    id: "L4-466",
    word: "glance",
    meaning: "힐끗 보다, 힐끗 봄",
    examples: [
      { en: "She glanced at her watch during the meeting.", kr: "그녀는 회의 중에 시계를 힐끗 봤어." },
      { en: "At first glance, the contract looked fine.", kr: "처음 봤을 때는 계약서에 문제가 없어 보였어요." }
    ]
  },
  {
    id: "L4-467",
    word: "hometown",
    meaning: "고향",
    examples: [
      { en: "I visit my hometown every Lunar New Year.", kr: "나는 설날마다 고향에 가." },
      { en: "My hometown is a small fishing village.", kr: "내 고향은 작은 어촌 마을이야." }
    ]
  },
  {
    id: "L4-164",
    word: "meticulous",
    meaning: "꼼꼼한, 세심한",
    examples: [
      { en: "She's meticulous about keeping her desk organized.", kr: "그녀는 책상 정리에 엄청 꼼꼼해." },
      { en: "Thanks for the meticulous notes from the meeting.", kr: "회의 내용을 세심하게 정리해 줘서 고마워요." }
    ]
  },
  {
    id: "L4-468",
    word: "immunity",
    meaning: "면역(력), 면책",
    examples: [
      { en: "Getting enough sleep helps boost your immunity.", kr: "충분히 자는 게 면역력을 높이는 데 도움이 돼." },
      { en: "My immunity is low these days. I keep catching colds.", kr: "요즘 면역력이 떨어졌나 봐. 계속 감기에 걸려." }
    ]
  },
  {
    id: "L4-762",
    word: "drowsy",
    meaning: "졸리는, 나른한",
    examples: [
      { en: "This medicine might make you drowsy.", kr: "이 약 먹으면 졸릴 수도 있어요." },
      { en: "I get drowsy when I drive at night.", kr: "밤에 운전하면 졸음이 와." }
    ]
  },
  {
    id: "L4-167",
    word: "novice",
    meaning: "초보자",
    examples: [
      { en: "I'm a total novice at golf, so go easy on me.", kr: "나 골프 완전 초보자니까 살살 해 줘." },
      { en: "This software is easy enough for a novice to use.", kr: "이 소프트웨어는 초보자도 쓸 만큼 쉬워요." }
    ]
  },
  {
    id: "L4-168",
    word: "oblivious",
    meaning: "눈치채지 못하는, 의식하지 못하는",
    examples: [
      { en: "He was totally oblivious to the fact that she liked him.", kr: "그는 그녀가 자기를 좋아한다는 걸 전혀 눈치채지 못했어." },
      { en: "People who text while walking are oblivious to traffic.", kr: "걸으면서 문자하는 사람들은 차가 오는 걸 의식하지 못해." }
    ]
  },
  {
    id: "L4-469",
    word: "likelihood",
    meaning: "가능성",
    examples: [
      { en: "There's a strong likelihood of rain this weekend.", kr: "이번 주말에 비가 올 가능성이 높아." },
      { en: "What's the likelihood he'll actually show up on time?", kr: "그 사람이 진짜 제시간에 올 가능성이 얼마나 될까?" }
    ]
  },
  {
    id: "L4-763",
    word: "housewarming",
    meaning: "집들이",
    examples: [
      { en: "We're having a housewarming party on Saturday. Come!", kr: "토요일에 집들이 해. 와!" },
      { en: "What should I bring as a housewarming gift?", kr: "집들이 선물로 뭘 가져가야 할까?" }
    ]
  },
  {
    id: "L4-764",
    word: "soggy",
    meaning: "눅눅한, 질척한",
    examples: [
      { en: "The fries got soggy on the way home.", kr: "집에 오는 길에 감자튀김이 눅눅해졌어." },
      { en: "Eat your cereal before it gets soggy.", kr: "시리얼 눅눅해지기 전에 먹어." }
    ]
  },
  {
    id: "L4-765",
    word: "cramp",
    meaning: "(근육) 경련, 쥐, 생리통",
    examples: [
      { en: "Ouch, I've got a cramp in my leg!", kr: "아야, 다리에 쥐 났어!" },
      { en: "I have bad cramps today, so I'm staying home.", kr: "오늘 생리통이 심해서 집에 있을 거야." }
    ]
  },
  {
    id: "L4-766",
    word: "cheesy",
    meaning: "오글거리는, 느끼한, 뻔한",
    examples: [
      { en: "That pickup line is so cheesy.", kr: "그 작업 멘트 진짜 오글거린다." },
      { en: "I love cheesy romantic comedies.", kr: "난 뻔한 로맨틱 코미디가 좋아." }
    ]
  },
  {
    id: "L4-767",
    word: "donate",
    meaning: "기부하다, 헌혈하다",
    examples: [
      { en: "I donated my old clothes to charity.", kr: "안 입는 옷을 자선 단체에 기부했어." },
      { en: "Have you ever donated blood?", kr: "헌혈해 본 적 있어?" }
    ]
  },
  {
    id: "L4-175",
    word: "plummet",
    meaning: "급락하다, 뚝 떨어지다",
    examples: [
      { en: "My phone battery plummeted to five percent in an hour.", kr: "휴대폰 배터리가 한 시간 만에 5퍼센트로 뚝 떨어졌어." },
      { en: "Temperatures will plummet tonight, so dress warmly.", kr: "오늘 밤 기온이 뚝 떨어진대, 따뜻하게 입어." }
    ]
  },
  {
    id: "L4-768",
    word: "tearjerker",
    meaning: "눈물 짜는 영화, 최루성 작품",
    examples: [
      { en: "Bring tissues. That movie is a real tearjerker.", kr: "휴지 챙겨. 그 영화 진짜 눈물 쏙 빼." },
      { en: "I'm not in the mood for a tearjerker tonight.", kr: "오늘 밤엔 슬픈 영화 볼 기분 아니야." }
    ]
  },
  {
    id: "L4-769",
    word: "wobbly",
    meaning: "흔들거리는, 후들거리는, 불안정한",
    examples: [
      { en: "This table is wobbly. Can we move?", kr: "이 테이블 흔들거려요. 자리 옮겨도 될까요?" },
      { en: "My legs felt wobbly after the long run.", kr: "오래 달리고 나니 다리가 후들거렸어." }
    ]
  },
  {
    id: "L4-178",
    word: "pragmatic",
    meaning: "현실적인, 실용적인",
    examples: [
      { en: "Let's be pragmatic. We can't afford a new office.", kr: "현실적으로 생각하자. 새 사무실 얻을 돈은 없어." },
      { en: "She's very pragmatic when it comes to money.", kr: "그녀는 돈 문제에 있어서는 아주 현실적이야." }
    ]
  },
  {
    id: "L4-621",
    word: "relieved",
    meaning: "안심한, 다행으로 여기는",
    examples: [
      { en: "I was so relieved when I found my wallet.", kr: "지갑 찾았을 때 정말 안심했어요." },
      { en: "We're relieved the meeting got pushed to Friday.", kr: "회의가 금요일로 미뤄져서 다행이에요." }
    ]
  },
  {
    id: "L4-770",
    word: "nag",
    meaning: "잔소리하다, 계속 졸라 대다",
    examples: [
      { en: "Stop nagging me. I'll clean my room later.", kr: "잔소리 그만해. 방은 나중에 치울게." },
      { en: "My mom keeps nagging me about getting married.", kr: "엄마가 결혼하라고 계속 잔소리하셔." }
    ]
  },
  {
    id: "L4-771",
    word: "potluck",
    meaning: "각자 음식을 가져오는 모임, 포틀럭",
    examples: [
      { en: "It's a potluck, so bring a dish to share.", kr: "포틀럭 파티니까 같이 먹을 음식 하나 가져와." },
      { en: "Our office has a potluck lunch every Friday.", kr: "우리 사무실은 금요일마다 각자 음식을 가져와서 점심을 같이 먹어." }
    ]
  },
  {
    id: "L4-772",
    word: "snooze",
    meaning: "(알람을) 미루다, 잠깐 졸다",
    examples: [
      { en: "I hit snooze three times this morning.", kr: "오늘 아침에 알람을 세 번이나 미뤘어." },
      { en: "I snoozed on the couch after lunch.", kr: "점심 먹고 소파에서 잠깐 졸았어." }
    ]
  },
  {
    id: "L4-183",
    word: "rationalize",
    meaning: "합리화하다",
    examples: [
      { en: "Stop trying to rationalize buying another pair of shoes.", kr: "신발 또 산 걸 합리화하려고 하지 마." },
      { en: "I rationalized skipping the gym because it was raining.", kr: "비가 와서 헬스장 안 간 걸 합리화했어." }
    ]
  },
  {
    id: "L4-184",
    word: "recluse",
    meaning: "은둔자, 사람을 피하는 사람",
    examples: [
      { en: "My neighbor is a bit of a recluse. I rarely see him.", kr: "옆집 사람은 좀 은둔자 같아. 거의 못 봐." },
      { en: "Working from home turned me into a total recluse.", kr: "재택근무하다 보니 완전 은둔자가 됐어." }
    ]
  },
  {
    id: "L4-773",
    word: "deposit",
    meaning: "보증금, 계약금, 입금하다",
    examples: [
      { en: "Will I get my deposit back when I move out?", kr: "이사 나갈 때 보증금 돌려받을 수 있어요?" },
      { en: "I deposited my paycheck this morning.", kr: "오늘 아침에 월급을 입금했어." }
    ]
  },
  {
    id: "L4-774",
    word: "nosy",
    meaning: "참견하기 좋아하는, 오지랖 넓은",
    examples: [
      { en: "Sorry to be nosy, but are you two dating?", kr: "오지랖 같아서 미안한데, 너희 둘 사귀어?" },
      { en: "My neighbor is so nosy. She watches everyone.", kr: "우리 옆집 사람은 오지랖이 너무 넓어. 모든 사람을 지켜봐." }
    ]
  },
  {
    id: "L4-187",
    word: "remorse",
    meaning: "후회, 뉘우침, 양심의 가책",
    examples: [
      { en: "He showed no remorse for lying to us.", kr: "그는 우리한테 거짓말한 걸 전혀 뉘우치지 않았어." },
      { en: "I felt a lot of remorse after yelling at my mom.", kr: "엄마한테 소리 지르고 나서 정말 후회됐어." }
    ]
  },
  {
    id: "L4-775",
    word: "petty",
    meaning: "쩨쩨한, 옹졸한, 사소한",
    examples: [
      { en: "Don't be petty. Just let it go.", kr: "쩨쩨하게 굴지 마. 그냥 넘어가." },
      { en: "We broke up over something so petty.", kr: "우리 정말 사소한 일로 헤어졌어." }
    ]
  },
  {
    id: "L4-470",
    word: "offshore",
    meaning: "해외로, 역외의, 해상의",
    examples: [
      { en: "The company moved its call center offshore.", kr: "그 회사는 콜센터를 해외로 옮겼어요." },
      { en: "My dad works on an offshore oil rig.", kr: "우리 아빠는 해상 석유 시추선에서 일해." }
    ]
  },
  {
    id: "L4-776",
    word: "renew",
    meaning: "갱신하다, 연장하다",
    examples: [
      { en: "I need to renew my passport before the trip.", kr: "여행 전에 여권을 갱신해야 해." },
      { en: "Are you going to renew your lease?", kr: "임대 계약 연장할 거야?" }
    ]
  },
  {
    id: "L4-622",
    word: "fortunately",
    meaning: "다행히, 운 좋게도",
    examples: [
      { en: "Fortunately, nobody got hurt in the accident.", kr: "다행히 그 사고로 다친 사람은 없었어요." },
      { en: "I missed my train, but fortunately another one came soon.", kr: "기차를 놓쳤는데, 다행히 금방 다음 차가 왔어." }
    ]
  },
  {
    id: "L4-623",
    word: "elevator",
    meaning: "엘리베이터",
    examples: [
      { en: "The elevator's out of order, so let's take the stairs.", kr: "엘리베이터가 고장 났으니까 계단으로 가자." },
      { en: "Take the elevator to the fifth floor.", kr: "엘리베이터 타고 5층으로 가세요." }
    ]
  },
  {
    id: "L4-777",
    word: "cranky",
    meaning: "짜증을 잘 내는, 까칠한, 칭얼거리는",
    examples: [
      { en: "Sorry I'm cranky. I didn't sleep well.", kr: "까칠하게 굴어서 미안. 잠을 잘 못 잤어." },
      { en: "The baby gets cranky when she's hungry.", kr: "아기가 배고프면 칭얼거려." }
    ]
  },
  {
    id: "L4-624",
    word: "spicy",
    meaning: "매운, 얼큰한",
    examples: [
      { en: "Is this dish spicy? I can't handle much heat.", kr: "이 음식 매워요? 저 매운 거 잘 못 먹어요." },
      { en: "I love spicy food, the hotter the better.", kr: "난 매운 음식 좋아해, 매울수록 좋아." }
    ]
  },
  {
    id: "L4-778",
    word: "rusty",
    meaning: "(실력이) 녹슨, 서툴러진, 녹이 슨",
    examples: [
      { en: "My French is a little rusty these days.", kr: "요즘 내 프랑스어 실력이 좀 녹슬었어." },
      { en: "This old bike is pretty rusty, but it still works.", kr: "이 낡은 자전거는 꽤 녹슬었지만 아직 잘 굴러가." }
    ]
  },
  {
    id: "L4-779",
    word: "drizzle",
    meaning: "이슬비(가 내리다), (소스를) 살짝 뿌리다",
    examples: [
      { en: "It's just drizzling. We don't need an umbrella.", kr: "그냥 이슬비야. 우산 필요 없어." },
      { en: "Drizzle some olive oil over the salad.", kr: "샐러드 위에 올리브유를 살짝 뿌려." }
    ]
  },
  {
    id: "L4-471",
    word: "pioneer",
    meaning: "선구자, 개척자, 개척하다",
    examples: [
      { en: "She was a pioneer in online education.", kr: "그녀는 온라인 교육 분야의 선구자였어." },
      { en: "My grandma was a pioneer. She drove a taxi in the 70s.", kr: "우리 할머니는 선구자셨어. 70년대에 택시 운전을 하셨거든." }
    ]
  },
  {
    id: "L4-198",
    word: "synergy",
    meaning: "시너지 (효과)",
    examples: [
      { en: "There's great synergy between our design and sales teams.", kr: "우리 디자인팀과 영업팀 사이에 시너지가 엄청 좋아." },
      { en: "Working together creates synergy we can't get alone.", kr: "함께 일하면 혼자서는 못 내는 시너지가 생겨." }
    ]
  },
  {
    id: "L4-780",
    word: "crush",
    meaning: "짝사랑, 반한 상대, 으깨다",
    examples: [
      { en: "I had a huge crush on my teacher in high school.", kr: "고등학교 때 선생님을 엄청 짝사랑했어." },
      { en: "Crush the garlic before you add it to the pan.", kr: "마늘은 팬에 넣기 전에 으깨." }
    ]
  },
  {
    id: "L4-625",
    word: "dessert",
    meaning: "디저트, 후식",
    examples: [
      { en: "Should we save room for dessert?", kr: "디저트 먹을 배는 남겨 둘까?" },
      { en: "Can we see the dessert menu, please?", kr: "디저트 메뉴 좀 볼 수 있을까요?" }
    ]
  }
];

const wordsLevel4_Part3 = [
  {
    id: "L4-201",
    word: "tenacious",
    meaning: "끈질긴, 집요한",
    examples: [
      { en: "She's so tenacious; she never gives up on a deal.", kr: "그녀는 정말 끈질겨. 거래를 절대 포기하지 않아." },
      { en: "You have to be tenacious when you're job hunting.", kr: "구직할 때는 끈기 있게 버텨야 해." }
    ]
  },
  {
    id: "L4-781",
    word: "freebie",
    meaning: "공짜 물건, 사은품",
    examples: [
      { en: "They were handing out freebies at the event.", kr: "행사에서 공짜로 이것저것 나눠주고 있었어." },
      { en: "Is this a freebie, or do I have to pay?", kr: "이거 공짜예요, 아니면 돈 내야 돼요?" }
    ]
  },
  {
    id: "L4-472",
    word: "recreational",
    meaning: "취미로 하는, 여가의",
    examples: [
      { en: "I play in a recreational soccer league on Sundays.", kr: "나 일요일마다 취미 축구 리그에서 뛰어." },
      { en: "I only play tennis at a recreational level.", kr: "나는 그냥 취미 수준으로 테니스 쳐." }
    ]
  },
  {
    id: "L4-782",
    word: "declutter",
    meaning: "(집·공간을) 정리하다, 잡동사니를 치우다",
    examples: [
      { en: "I really need to declutter my closet this weekend.", kr: "이번 주말엔 옷장 정리 좀 진짜 해야겠어." },
      { en: "We decluttered the garage and found my old bike.", kr: "차고 정리하다가 내 옛날 자전거를 찾았어." }
    ]
  },
  {
    id: "L4-783",
    word: "clogged",
    meaning: "막힌",
    examples: [
      { en: "The kitchen sink is clogged again.", kr: "부엌 싱크대 또 막혔어." },
      { en: "My nose is all clogged from this cold.", kr: "감기 때문에 코가 꽉 막혔어." }
    ]
  },
  {
    id: "L4-784",
    word: "bummed",
    meaning: "실망한, 우울한",
    examples: [
      { en: "I'm so bummed I missed the show.", kr: "공연 놓쳐서 너무 아쉬워." },
      { en: "Are you still bummed about the job?", kr: "그 일자리 때문에 아직도 기운 없어?" }
    ]
  },
  {
    id: "L4-785",
    word: "overpriced",
    meaning: "너무 비싼, 바가지인",
    examples: [
      { en: "The drinks here are way overpriced.", kr: "여기 음료 너무 비싸." },
      { en: "It's a nice hotel, but it's a bit overpriced.", kr: "좋은 호텔이긴 한데 값이 좀 비싸요." }
    ]
  },
  {
    id: "L4-786",
    word: "cozy",
    meaning: "아늑한, 포근한",
    examples: [
      { en: "Your apartment is so cozy! I love it.", kr: "너네 집 진짜 아늑하다! 너무 좋아." },
      { en: "Let's find a cozy café and warm up.", kr: "아늑한 카페 찾아서 몸 좀 녹이자." }
    ]
  },
  {
    id: "L4-209",
    word: "hiatus",
    meaning: "공백기, 일시 중단, 휴방",
    examples: [
      { en: "My favorite show is on hiatus until next spring.", kr: "내가 제일 좋아하는 드라마가 내년 봄까지 휴방이야." },
      { en: "I'm taking a short hiatus from social media.", kr: "SNS는 잠깐 쉬는 중이야." }
    ]
  },
  {
    id: "L4-787",
    word: "skim",
    meaning: "훑어보다, 대충 읽다",
    examples: [
      { en: "I only skimmed the email, what did it say?", kr: "메일 대충 훑어만 봤는데, 뭐래?" },
      { en: "Just skim the report before the meeting.", kr: "회의 전에 보고서 그냥 훑어만 봐." }
    ]
  },
  {
    id: "L4-788",
    word: "cheapskate",
    meaning: "구두쇠, 짠돌이",
    examples: [
      { en: "Don't be a cheapskate, leave a decent tip.", kr: "짠돌이처럼 굴지 말고 팁 제대로 놔." },
      { en: "My brother is such a cheapskate.", kr: "우리 형은 완전 구두쇠야." }
    ]
  },
  {
    id: "L4-789",
    word: "stingy",
    meaning: "인색한, 쩨쩨한",
    examples: [
      { en: "Don't be stingy; it's your sister's birthday!", kr: "쩨쩨하게 굴지 마, 네 동생 생일이잖아!" },
      { en: "This restaurant is so stingy with the sauce.", kr: "이 식당은 소스를 너무 쥐꼬리만큼 줘." }
    ]
  },
  {
    id: "L4-473",
    word: "renewable",
    meaning: "재생 가능한, 갱신 가능한",
    examples: [
      { en: "Is the contract renewable after a year?", kr: "그 계약 1년 후에 갱신 가능해요?" },
      { en: "Our new apartment runs on renewable energy, which is cool.", kr: "우리 새 아파트는 재생 에너지로 돌아가서 좋아." }
    ]
  },
  {
    id: "L4-790",
    word: "swamped",
    meaning: "(일이) 몹시 바쁜, 정신없는",
    examples: [
      { en: "Sorry, I'm swamped with work today.", kr: "미안, 오늘 일이 너무 많아서 정신없어." },
      { en: "Can we talk tomorrow? I'm totally swamped right now.", kr: "내일 얘기해도 될까? 지금 완전 바빠." }
    ]
  },
  {
    id: "L4-791",
    word: "fidget",
    meaning: "꼼지락거리다, 안절부절 만지작거리다",
    examples: [
      { en: "Stop fidgeting, you're making me nervous.", kr: "꼼지락거리지 좀 마, 나까지 긴장돼." },
      { en: "I always fidget with my pen in meetings.", kr: "난 회의 때 항상 펜을 만지작거려." }
    ]
  },
  {
    id: "L4-474",
    word: "suburban",
    meaning: "교외의, 변두리의",
    examples: [
      { en: "I grew up in a quiet suburban neighborhood.", kr: "나는 조용한 교외 동네에서 자랐어." },
      { en: "Suburban life is nice, but I miss the city.", kr: "교외 생활도 좋은데 도시가 그리워." }
    ]
  },
  {
    id: "L4-475",
    word: "toss",
    meaning: "(가볍게) 던지다, 버리다",
    examples: [
      { en: "Can you toss me the remote, please?", kr: "리모컨 좀 던져 줄래?" },
      { en: "Let's toss a coin to decide who pays.", kr: "누가 낼지 동전 던져서 정하자." }
    ]
  },
  {
    id: "L4-476",
    word: "aftermath",
    meaning: "여파, 후유증, 뒷수습",
    examples: [
      { en: "I'm still dealing with the aftermath of the move.", kr: "이사 뒷수습을 아직도 하고 있어." },
      { en: "The kitchen was a total mess in the aftermath of the party.", kr: "파티 끝나고 나니 부엌이 완전 엉망이었어." }
    ]
  },
  {
    id: "L4-792",
    word: "comfy",
    meaning: "편안한, 아늑한",
    examples: [
      { en: "These shoes are super comfy.", kr: "이 신발 진짜 편해." },
      { en: "Make yourself comfy, I'll get you a drink.", kr: "편하게 있어, 마실 거 갖다줄게." }
    ]
  },
  {
    id: "L4-793",
    word: "pushy",
    meaning: "강요하는, 밀어붙이는, 극성스러운",
    examples: [
      { en: "The salesman was way too pushy.", kr: "그 판매원 너무 강매하듯 굴었어." },
      { en: "I don't want to sound pushy, but did you decide?", kr: "재촉하는 것 같긴 한데, 결정했어?" }
    ]
  },
  {
    id: "L4-477",
    word: "arguably",
    meaning: "(~라고) 해도 될 만큼, 아마도",
    examples: [
      { en: "This is arguably the best pizza in town.", kr: "여기가 동네에서 제일 맛있는 피자집이라고 해도 될 거야." },
      { en: "She's arguably the funniest person in our office.", kr: "그녀가 우리 사무실에서 제일 웃긴 사람이라고 할 만해." }
    ]
  },
  {
    id: "L4-478",
    word: "balloon",
    meaning: "풍선",
    examples: [
      { en: "We decorated the room with balloons for her birthday.", kr: "그녀 생일을 위해 풍선으로 방을 꾸몄어." },
      { en: "The kid cried when his balloon floated away.", kr: "풍선이 날아가 버리자 아이가 울었어." }
    ]
  },
  {
    id: "L4-479",
    word: "conclude",
    meaning: "결론을 내리다, 끝내다, 마치다",
    examples: [
      { en: "So what did you conclude from all that?", kr: "그래서 그걸로 무슨 결론을 내렸어?" },
      { en: "Let's conclude the meeting with a quick summary.", kr: "간단히 요약하고 회의 마치죠." }
    ]
  },
  {
    id: "L4-480",
    word: "discretion",
    meaning: "재량, 신중함",
    examples: [
      { en: "Tipping is at your discretion.", kr: "팁은 손님 재량이에요." },
      { en: "Please handle this with discretion; it's personal.", kr: "개인적인 일이니까 조심스럽게 처리해 줘." }
    ]
  },
  {
    id: "L4-481",
    word: "drought",
    meaning: "가뭄, (오랜) 부진",
    examples: [
      { en: "We haven't had rain in months; it's a real drought.", kr: "몇 달째 비가 안 와. 진짜 가뭄이야." },
      { en: "Our team finally ended its scoring drought last night.", kr: "우리 팀이 어젯밤에 드디어 득점 가뭄을 끝냈어." }
    ]
  },
  {
    id: "L4-482",
    word: "esteem",
    meaning: "자존감(self-esteem), 존경, 존중",
    examples: [
      { en: "Praise can really boost a kid's self-esteem.", kr: "칭찬은 아이 자존감을 정말 높여 줘." },
      { en: "She's held in high esteem by everyone here.", kr: "그녀는 여기 모든 사람한테 존경받아." }
    ]
  },
  {
    id: "L4-483",
    word: "fog",
    meaning: "안개",
    examples: [
      { en: "Our flight got delayed because of the fog.", kr: "안개 때문에 비행기가 지연됐어." },
      { en: "Drive slowly; the fog is really thick this morning.", kr: "천천히 운전해, 오늘 아침 안개가 정말 짙어." }
    ]
  },
  {
    id: "L4-484",
    word: "historian",
    meaning: "역사가, 역사학자",
    examples: [
      { en: "My uncle is a historian, so he knows everything about this palace.", kr: "삼촌이 역사학자라서 이 궁에 대해 모르는 게 없어." },
      { en: "You sound like a historian! How do you know all this?", kr: "역사학자 같다! 이걸 다 어떻게 알아?" }
    ]
  },
  {
    id: "L4-485",
    word: "hospitality",
    meaning: "환대, 접객업",
    examples: [
      { en: "Thank you so much for your warm hospitality.", kr: "따뜻하게 맞아 주셔서 정말 감사해요." },
      { en: "My sister works in hospitality, mostly at hotels.", kr: "우리 언니는 주로 호텔 쪽 서비스업에서 일해." }
    ]
  },
  {
    id: "L4-794",
    word: "carsick",
    meaning: "차멀미하는",
    examples: [
      { en: "I get carsick if I read in the car.", kr: "나 차에서 뭐 읽으면 멀미해." },
      { en: "Are you feeling carsick? Should we stop?", kr: "차멀미 나? 잠깐 세울까?" }
    ]
  },
  {
    id: "L4-486",
    word: "moisture",
    meaning: "습기, 수분",
    examples: [
      { en: "This cream keeps moisture in your skin all day.", kr: "이 크림은 하루 종일 피부 수분을 지켜 줘요." },
      { en: "There's moisture in the bathroom, so open the window.", kr: "화장실에 습기 찼으니까 창문 열어." }
    ]
  },
  {
    id: "L4-795",
    word: "mooch",
    meaning: "빈대 붙다, 얻어먹다",
    examples: [
      { en: "He's always mooching food off me.", kr: "걔는 맨날 나한테 음식 얻어먹어." },
      { en: "Can I mooch a ride home?", kr: "집까지 좀 얻어 타도 돼?" }
    ]
  },
  {
    id: "L4-488",
    word: "opt",
    meaning: "고르다, 선택하다, (opt out) 빠지다",
    examples: [
      { en: "I opted for the cheaper room to save money.", kr: "돈 아끼려고 더 싼 방으로 골랐어." },
      { en: "You can opt out of marketing emails anytime.", kr: "마케팅 이메일은 언제든 수신 거부할 수 있어요." }
    ]
  },
  {
    id: "L4-489",
    word: "peanut",
    meaning: "땅콩",
    examples: [
      { en: "I'm allergic to peanuts, so I can't eat this.", kr: "나 땅콩 알레르기가 있어서 이거 못 먹어." },
      { en: "Can I get a peanut butter sandwich, please?", kr: "땅콩버터 샌드위치 하나 주시겠어요?" }
    ]
  },
  {
    id: "L4-490",
    word: "persistent",
    meaning: "끈질긴, 계속되는",
    examples: [
      { en: "I've had a persistent cough for two weeks.", kr: "2주째 기침이 안 떨어져요." },
      { en: "That salesman was really persistent; he called three times.", kr: "그 영업 사원 진짜 끈질겼어. 세 번이나 전화했어." }
    ]
  },
  {
    id: "L4-796",
    word: "plumber",
    meaning: "배관공",
    examples: [
      { en: "The sink is leaking again; we need a plumber.", kr: "싱크대가 또 새. 배관공 불러야겠어." },
      { en: "The plumber said he can come tomorrow morning.", kr: "배관공이 내일 아침에 올 수 있대." }
    ]
  },
  {
    id: "L4-492",
    word: "rebuild",
    meaning: "다시 짓다, 재건하다, 다시 쌓다",
    examples: [
      { en: "It took me a year to rebuild my savings.", kr: "저축을 다시 모으는 데 1년 걸렸어." },
      { en: "After the fight, they're trying to rebuild trust.", kr: "싸운 뒤로 둘은 신뢰를 다시 쌓으려고 노력 중이야." }
    ]
  },
  {
    id: "L4-493",
    word: "reservoir",
    meaning: "저수지",
    examples: [
      { en: "We went for a walk around the reservoir.", kr: "우리 저수지 둘레를 산책했어." },
      { en: "Want to go jogging by the reservoir tomorrow?", kr: "내일 저수지 근처에서 조깅할래?" }
    ]
  },
  {
    id: "L4-494",
    word: "scrap",
    meaning: "조각, 버리다, 취소하다",
    examples: [
      { en: "Write the number on a scrap of paper.", kr: "종이 쪼가리에 번호 적어 둬." },
      { en: "Let's scrap that idea and start over.", kr: "그 아이디어는 버리고 다시 시작하자." }
    ]
  },
  {
    id: "L4-797",
    word: "tease",
    meaning: "놀리다, 장난치다",
    examples: [
      { en: "Stop teasing your brother; he's upset.", kr: "동생 그만 놀려. 걔 속상해하잖아." },
      { en: "Relax, I'm just teasing you!", kr: "진정해, 그냥 장난친 거야!" }
    ]
  },
  {
    id: "L4-495",
    word: "sensation",
    meaning: "느낌, 감각, 큰 화제",
    examples: [
      { en: "I felt a burning sensation in my throat.", kr: "목이 타는 듯한 느낌이 들었어요." },
      { en: "Her dance video became an overnight sensation.", kr: "그녀의 춤 영상이 하룻밤 새 큰 화제가 됐어." }
    ]
  },
  {
    id: "L4-496",
    word: "slope",
    meaning: "경사, 비탈, (스키장) 슬로프",
    examples: [
      { en: "Careful, the slope is pretty steep here.", kr: "조심해, 여기 경사가 꽤 가파르다." },
      { en: "We spent the whole day on the slopes.", kr: "우리 하루 종일 스키장 슬로프에 있었어." }
    ]
  },
  {
    id: "L4-798",
    word: "bloated",
    meaning: "더부룩한, 배가 빵빵한",
    examples: [
      { en: "I feel so bloated after that burger.", kr: "그 버거 먹고 속이 너무 더부룩해." },
      { en: "Soda always makes me bloated.", kr: "탄산 마시면 항상 배가 빵빵해져." }
    ]
  },
  {
    id: "L4-497",
    word: "spotlight",
    meaning: "주목, 스포트라이트",
    examples: [
      { en: "She doesn't like being in the spotlight.", kr: "그녀는 주목받는 걸 안 좋아해." },
      { en: "Okay, let's put the spotlight on our new intern!", kr: "자, 이제 우리 새 인턴에게 주목해 볼까요!" }
    ]
  },
  {
    id: "L4-498",
    word: "transparency",
    meaning: "투명성",
    examples: [
      { en: "I appreciate your transparency about the costs.", kr: "비용에 대해 투명하게 말씀해 주셔서 감사해요." },
      { en: "We need more transparency about how decisions are made.", kr: "결정이 어떻게 내려지는지 좀 더 투명했으면 좋겠어요." }
    ]
  },
  {
    id: "L4-246",
    word: "maverick",
    meaning: "독불장군, 이단아",
    examples: [
      { en: "He's a bit of a maverick and rarely follows the rules.", kr: "그는 좀 독불장군이라 규칙을 잘 안 따라." },
      { en: "We need a maverick to shake things up around here.", kr: "여기 분위기를 확 바꿀 이단아가 필요해." }
    ]
  },
  {
    id: "L4-499",
    word: "unemployed",
    meaning: "실직한, 일자리가 없는",
    examples: [
      { en: "I've been unemployed for three months now.", kr: "나 실직한 지 벌써 석 달 됐어." },
      { en: "My cousin's unemployed, so he's looking for anything.", kr: "사촌이 실직 중이라 아무 일이나 찾고 있어." }
    ]
  },
  {
    id: "L4-500",
    word: "unlock",
    meaning: "(잠금을) 열다, 해제하다",
    examples: [
      { en: "I can't unlock my phone; I forgot the password.", kr: "휴대폰 잠금을 못 풀겠어, 비밀번호를 잊어버렸어." },
      { en: "Use this key card to unlock the office door.", kr: "이 카드키로 사무실 문을 열어." }
    ]
  },
  {
    id: "L4-501",
    word: "biography",
    meaning: "전기, 약력",
    examples: [
      { en: "I'm reading a really good biography right now.", kr: "나 지금 진짜 재밌는 전기 읽고 있어." },
      { en: "Can you send me a short biography for the event?", kr: "행사용으로 짧은 약력 좀 보내 주실래요?" }
    ]
  },
  {
    id: "L4-502",
    word: "browser",
    meaning: "(인터넷) 브라우저",
    examples: [
      { en: "Try clearing your browser history and refreshing the page.", kr: "브라우저 기록을 지우고 페이지를 새로고침해 봐." },
      { en: "Which browser do you use at work?", kr: "회사에서 어떤 브라우저 써?" }
    ]
  },
  {
    id: "L4-503",
    word: "destructive",
    meaning: "파괴적인, 해로운",
    examples: [
      { en: "Our puppy is so destructive; he chewed my shoes.", kr: "우리 강아지 진짜 다 망가뜨려. 내 신발을 씹어 놨어." },
      { en: "Constant criticism can be really destructive to a team.", kr: "계속 비판만 하면 팀에 정말 해로워." }
    ]
  },
  {
    id: "L4-799",
    word: "flashy",
    meaning: "화려한, 번쩍거리는, 과시적인",
    examples: [
      { en: "He drives a really flashy car.", kr: "걔 진짜 번쩍번쩍한 차 몰아." },
      { en: "I like simple clothes, nothing too flashy.", kr: "난 너무 튀지 않는 심플한 옷이 좋아." }
    ]
  },
  {
    id: "L4-504",
    word: "foolish",
    meaning: "어리석은, 바보 같은",
    examples: [
      { en: "It was foolish of me to trust that website.", kr: "그 사이트를 믿은 내가 바보였어." },
      { en: "I felt so foolish when I realized my mistake.", kr: "내 실수를 깨닫고 너무 바보가 된 기분이었어." }
    ]
  },
  {
    id: "L4-505",
    word: "landmark",
    meaning: "랜드마크, 획기적인 사건",
    examples: [
      { en: "The tower is the city's most famous landmark.", kr: "그 탑이 이 도시에서 제일 유명한 랜드마크야." },
      { en: "Is there a landmark near your house I can look for?", kr: "너희 집 근처에 찾기 쉬운 랜드마크 있어?" }
    ]
  },
  {
    id: "L4-506",
    word: "liable",
    meaning: "책임이 있는, ~하기 쉬운",
    examples: [
      { en: "You'll be liable for any damage to the rental car.", kr: "렌터카 손상은 전부 고객님 책임입니다." },
      { en: "Careful, that old ladder is liable to break.", kr: "조심해, 그 낡은 사다리 부러지기 쉬워." }
    ]
  },
  {
    id: "L4-800",
    word: "hog",
    meaning: "독차지하다, 혼자 다 쓰다",
    examples: [
      { en: "Stop hogging the remote!", kr: "리모컨 독차지 좀 그만해!" },
      { en: "My roommate hogs the bathroom every morning.", kr: "내 룸메가 아침마다 화장실을 독차지해." }
    ]
  },
  {
    id: "L4-507",
    word: "recruit",
    meaning: "채용하다, 모집하다, 신입",
    examples: [
      { en: "We're trying to recruit more engineers this year.", kr: "올해 엔지니어를 더 채용하려고 해요." },
      { en: "He recruited me to join his soccer team.", kr: "걔가 자기 축구팀에 나를 끌어들였어." }
    ]
  },
  {
    id: "L4-508",
    word: "sharply",
    meaning: "급격히, 날카롭게",
    examples: [
      { en: "Prices went up sharply after the storm.", kr: "폭풍 이후로 물가가 확 올랐어." },
      { en: "Why did you speak so sharply to her?", kr: "왜 그녀한테 그렇게 날카롭게 말했어?" }
    ]
  },
  {
    id: "L4-509",
    word: "trim",
    meaning: "다듬다, 줄이다",
    examples: [
      { en: "I just need a trim, not a whole new haircut.", kr: "완전히 새로 자르는 게 아니라 그냥 다듬기만 하면 돼요." },
      { en: "We need to trim our budget by five percent.", kr: "예산을 5퍼센트 줄여야 해요." }
    ]
  },
  {
    id: "L4-510",
    word: "voyage",
    meaning: "항해, (배로 하는 긴) 여행",
    examples: [
      { en: "Our cruise was a relaxing seven-day voyage.", kr: "우리 크루즈는 7일 동안의 여유로운 항해였어." },
      { en: "How was the voyage? Did you get seasick?", kr: "항해는 어땠어? 뱃멀미 했어?" }
    ]
  },
  {
    id: "L4-511",
    word: "confession",
    meaning: "고백, 자백",
    examples: [
      { en: "I have a confession: I ate the last slice of cake.", kr: "고백할 게 있어. 마지막 케이크 조각 내가 먹었어." },
      { en: "Confession time: I've never actually been to the gym.", kr: "고백하자면, 나 사실 헬스장 한 번도 안 가 봤어." }
    ]
  },
  {
    id: "L4-512",
    word: "corridor",
    meaning: "복도",
    examples: [
      { en: "The meeting room is at the end of the corridor.", kr: "회의실은 복도 끝에 있어요." },
      { en: "Can you wait for me in the corridor?", kr: "복도에서 좀 기다려 줄래?" }
    ]
  },
  {
    id: "L4-513",
    word: "critically",
    meaning: "비판적으로, 심각하게",
    examples: [
      { en: "Try to think critically about what you read online.", kr: "온라인에서 읽는 건 비판적으로 생각해 봐." },
      { en: "Is he critically injured, or just a few scratches?", kr: "그 사람 심하게 다쳤어, 아니면 그냥 좀 긁힌 거야?" }
    ]
  },
  {
    id: "L4-514",
    word: "gossip",
    meaning: "소문, 험담, 수다(를 떨다)",
    examples: [
      { en: "Don't believe office gossip until you hear it officially.", kr: "공식적으로 듣기 전까지는 사내 소문을 믿지 마." },
      { en: "They spent the whole lunch gossiping about their boss.", kr: "그들은 점심 내내 상사 험담을 했어." }
    ]
  },
  {
    id: "L4-515",
    word: "haul",
    meaning: "끌다, 나르다, (쇼핑) 득템한 물건",
    examples: [
      { en: "We hauled the old sofa down three flights of stairs.", kr: "낡은 소파를 계단으로 세 층이나 끌고 내려왔어." },
      { en: "Check out my shopping haul from the outlet!", kr: "아웃렛에서 득템한 것 좀 봐!" }
    ]
  },
  {
    id: "L4-516",
    word: "interfere",
    meaning: "간섭하다, 방해하다",
    examples: [
      { en: "Please don't interfere in our argument.", kr: "우리 싸움에 끼어들지 마." },
      { en: "Coffee at night really interferes with my sleep.", kr: "밤에 커피 마시면 잠을 진짜 설쳐." }
    ]
  },
  {
    id: "L4-517",
    word: "qualification",
    meaning: "자격, 자격 요건",
    examples: [
      { en: "What qualifications do I need for this job?", kr: "이 일에는 어떤 자격이 필요해요?" },
      { en: "She's got all the qualifications, but no experience.", kr: "그녀는 자격은 다 갖췄는데 경험이 없어." }
    ]
  },
  {
    id: "L4-518",
    word: "stressful",
    meaning: "스트레스가 많은",
    examples: [
      { en: "Moving to a new city can be very stressful.", kr: "새 도시로 이사하는 건 스트레스가 클 수 있어." },
      { en: "This has been the most stressful week of my career.", kr: "이번 주가 내 경력에서 가장 스트레스 많은 한 주였어." }
    ]
  },
  {
    id: "L4-519",
    word: "whistle",
    meaning: "휘파람(을 불다), 호루라기",
    examples: [
      { en: "My dad whistles while he cooks.", kr: "우리 아빠는 요리하실 때 휘파람을 부셔." },
      { en: "The referee blew the whistle to end the game.", kr: "심판이 호루라기를 불어 경기를 끝냈어." }
    ]
  },
  {
    id: "L4-520",
    word: "thief",
    meaning: "도둑",
    examples: [
      { en: "Some thief stole my bike right outside the office.", kr: "어떤 도둑이 사무실 바로 앞에서 내 자전거를 훔쳐 갔어." },
      { en: "Watch your bag; there are thieves around here.", kr: "가방 조심해. 이 근처에 도둑 많아." }
    ]
  },
  {
    id: "L4-521",
    word: "undoubtedly",
    meaning: "의심할 여지 없이, 확실히",
    examples: [
      { en: "She's undoubtedly the best person for the job.", kr: "그 일엔 의심할 여지 없이 그녀가 적임자야." },
      { en: "That was undoubtedly the best meal of our trip.", kr: "그건 확실히 이번 여행 최고의 식사였어." }
    ]
  },
  {
    id: "L4-801",
    word: "workaholic",
    meaning: "일 중독자, 워커홀릭",
    examples: [
      { en: "My dad is a total workaholic.", kr: "우리 아빠는 완전 일 중독자야." },
      { en: "Don't be such a workaholic, take a day off.", kr: "그렇게 일만 하지 말고 하루 쉬어." }
    ]
  },
  {
    id: "L4-522",
    word: "backyard",
    meaning: "뒷마당",
    examples: [
      { en: "We're having a barbecue in the backyard this weekend.", kr: "이번 주말에 뒷마당에서 바비큐 파티를 해." },
      { en: "The kids are playing soccer in the backyard.", kr: "아이들이 뒷마당에서 축구를 하고 있어." }
    ]
  },
  {
    id: "L4-523",
    word: "fare",
    meaning: "요금, 운임",
    examples: [
      { en: "How much is the bus fare to the airport?", kr: "공항까지 버스 요금이 얼마예요?" },
      { en: "Taxi fares go up after midnight in this city.", kr: "이 도시는 자정이 지나면 택시 요금이 올라요." }
    ]
  },
  {
    id: "L4-524",
    word: "generator",
    meaning: "발전기",
    examples: [
      { en: "Do you have a generator in case the power goes out?", kr: "정전될 때 대비해서 발전기 있어?" },
      { en: "We rented a small generator for the camping trip.", kr: "캠핑 가려고 작은 발전기를 빌렸어." }
    ]
  },
  {
    id: "L4-802",
    word: "scorching",
    meaning: "타는 듯이 더운, 몹시 뜨거운",
    examples: [
      { en: "It's scorching outside, stay in the shade.", kr: "밖에 완전 찜통이야, 그늘에 있어." },
      { en: "The sand was scorching hot.", kr: "모래가 엄청 뜨거웠어." }
    ]
  },
  {
    id: "L4-525",
    word: "hobby",
    meaning: "취미",
    examples: [
      { en: "Do you have any hobbies?", kr: "취미 있어요?" },
      { en: "Photography started as a hobby, but now it's my job.", kr: "사진은 취미로 시작했는데 지금은 내 직업이야." }
    ]
  },
  {
    id: "L4-526",
    word: "illusion",
    meaning: "착각, 환상, 착시",
    examples: [
      { en: "Mirrors create the illusion of a bigger room.", kr: "거울은 방이 더 넓어 보이는 착시 효과를 만들어요." },
      { en: "Don't be under the illusion that this job is easy.", kr: "이 일이 쉽다는 착각은 하지 마세요." }
    ]
  },
  {
    id: "L4-527",
    word: "optimal",
    meaning: "최적의, 가장 좋은",
    examples: [
      { en: "Is there an optimal time to drink coffee?", kr: "커피 마시기에 가장 좋은 시간이 있어?" },
      { en: "I'm still looking for the optimal spot for my desk.", kr: "책상 놓기 제일 좋은 자리를 아직 찾는 중이야." }
    ]
  },
  {
    id: "L4-626",
    word: "appetite",
    meaning: "식욕, 입맛",
    examples: [
      { en: "I've lost my appetite since I got sick.", kr: "아프고 나서 입맛이 없어졌어요." },
      { en: "Don't eat snacks now, you'll spoil your appetite.", kr: "지금 간식 먹지 마, 그러면 밥 못 먹어." }
    ]
  },
  {
    id: "L4-528",
    word: "refund",
    meaning: "환불, 환불하다",
    examples: [
      { en: "Can I get a refund if the shoes don't fit?", kr: "신발이 안 맞으면 환불받을 수 있나요?" },
      { en: "The airline refunded my ticket after the flight was canceled.", kr: "항공편이 취소되자 항공사가 제 티켓을 환불해 줬어요." }
    ]
  },
  {
    id: "L4-803",
    word: "grumpy",
    meaning: "짜증 난, 심술궂은",
    examples: [
      { en: "Sorry I'm grumpy; I didn't sleep well.", kr: "짜증 내서 미안, 잠을 잘 못 잤어." },
      { en: "Why is the boss so grumpy today?", kr: "오늘 부장님 왜 이렇게 기분이 안 좋으셔?" }
    ]
  },
  {
    id: "L4-529",
    word: "robust",
    meaning: "튼튼한, 탄탄한",
    examples: [
      { en: "This laptop feels really robust.", kr: "이 노트북 진짜 튼튼한 느낌이야." },
      { en: "We need a more robust plan before we pitch it.", kr: "발표하기 전에 좀 더 탄탄한 계획이 필요해요." }
    ]
  },
  {
    id: "L4-804",
    word: "hangry",
    meaning: "배고파서 짜증 난",
    examples: [
      { en: "Sorry I snapped, I'm just hangry.", kr: "짜증 내서 미안, 그냥 배고파서 그래." },
      { en: "Feed him quick before he gets hangry.", kr: "쟤 배고파서 예민해지기 전에 빨리 먹여." }
    ]
  },
  {
    id: "L4-627",
    word: "sore",
    meaning: "아픈, 쑤시는",
    examples: [
      { en: "My legs are sore from yesterday's workout.", kr: "어제 운동해서 다리가 쑤셔." },
      { en: "I have a sore throat, so I'm staying home.", kr: "목이 아파서 집에 있을게요." }
    ]
  },
  {
    id: "L4-530",
    word: "spice",
    meaning: "향신료, 양념",
    examples: [
      { en: "This curry has too much spice for me.", kr: "이 카레는 나한테 향신료가 너무 세." },
      { en: "I bought some local spices at the market.", kr: "시장에서 현지 향신료를 좀 샀어." }
    ]
  },
  {
    id: "L4-531",
    word: "supervision",
    meaning: "감독, 관리",
    examples: [
      { en: "Kids can't use the pool without adult supervision.", kr: "아이들은 어른 감독 없이 수영장 이용 못 해요." },
      { en: "New staff work under supervision for the first month.", kr: "신입 직원은 첫 달 동안 감독을 받으며 일해요." }
    ]
  },
  {
    id: "L4-805",
    word: "vent",
    meaning: "(감정을) 털어놓다, 하소연하다, 환기구",
    examples: [
      { en: "Can I vent for a minute? Work was awful.", kr: "잠깐 하소연 좀 해도 돼? 오늘 일이 최악이었어." },
      { en: "Sometimes you just need to vent to a friend.", kr: "가끔은 친구한테 털어놓는 게 필요해." }
    ]
  },
  {
    id: "L4-289",
    word: "cynicism",
    meaning: "냉소, 냉소적인 태도",
    examples: [
      { en: "There's a lot of cynicism about politicians these days.", kr: "요즘 정치인들에 대한 냉소가 많아." },
      { en: "I get your cynicism, but give the new boss a chance.", kr: "네 냉소적인 마음은 이해하는데, 새 상사한테 기회 좀 줘 봐." }
    ]
  },
  {
    id: "L4-532",
    word: "terrified",
    meaning: "겁에 질린, 몹시 무서워하는",
    examples: [
      { en: "I'm terrified of flying, so I usually take the train.", kr: "저는 비행기 타는 게 너무 무서워서 보통 기차를 타요." },
      { en: "She was terrified before her first big presentation.", kr: "그녀는 첫 큰 발표를 앞두고 겁에 질려 있었어요." }
    ]
  },
  {
    id: "L4-806",
    word: "pout",
    meaning: "입을 삐죽 내밀다, 뿌루퉁하다",
    examples: [
      { en: "Don't pout, we'll go next weekend.", kr: "입 내밀지 마, 다음 주말에 가자." },
      { en: "She pouts for the camera in every photo.", kr: "걔는 사진마다 입술 내밀고 찍어." }
    ]
  },
  {
    id: "L4-533",
    word: "thrilled",
    meaning: "아주 신이 난, 몹시 기쁜",
    examples: [
      { en: "We're thrilled to welcome you to the team!", kr: "팀에 오신 걸 진심으로 환영합니다!" },
      { en: "My kids were thrilled when it finally snowed.", kr: "드디어 눈이 오자 우리 애들이 엄청 신났어." }
    ]
  },
  {
    id: "L4-534",
    word: "vibe",
    meaning: "분위기, 느낌",
    examples: [
      { en: "I love the relaxed vibe of this café.", kr: "이 카페의 편안한 분위기가 정말 좋아요." },
      { en: "He gave off a friendly vibe during the interview.", kr: "그는 면접 내내 친근한 느낌을 풍겼어요." }
    ]
  },
  {
    id: "L4-535",
    word: "arise",
    meaning: "생기다, 발생하다",
    examples: [
      { en: "Call me if any problems arise while I'm away.", kr: "제가 없는 동안 문제가 생기면 전화 주세요." },
      { en: "Opportunities like this don't arise very often.", kr: "이런 기회는 자주 생기지 않아요." }
    ]
  },
  {
    id: "L4-536",
    word: "bloom",
    meaning: "꽃이 피다, 꽃",
    examples: [
      { en: "The cherry trees bloom in early April here.", kr: "여기 벚나무는 4월 초에 꽃이 펴요." },
      { en: "The roses in our garden are in full bloom.", kr: "우리 정원의 장미가 활짝 피었어요." }
    ]
  },
  {
    id: "L4-537",
    word: "bundle",
    meaning: "묶음, 묶음 상품, (bundle up) 따뜻하게 껴입다",
    examples: [
      { en: "If you get the internet and TV bundle, it's cheaper.", kr: "인터넷이랑 TV 묶음 상품으로 하시면 더 싸요." },
      { en: "Bundle up; it's freezing outside!", kr: "옷 따뜻하게 껴입어. 밖에 엄청 추워!" }
    ]
  },
  {
    id: "L4-628",
    word: "cough",
    meaning: "기침, 기침하다",
    examples: [
      { en: "I can't stop coughing. I think I'm catching a cold.", kr: "기침이 안 멈춰요. 감기 걸리려나 봐요." },
      { en: "Do you have anything for a dry cough?", kr: "마른기침에 먹는 약 있어요?" }
    ]
  },
  {
    id: "L4-807",
    word: "rash",
    meaning: "발진, 두드러기, 성급한",
    examples: [
      { en: "I got a rash after eating shrimp.", kr: "새우 먹고 두드러기가 났어." },
      { en: "Let's not make a rash decision; sleep on it.", kr: "성급하게 결정하지 말고 하룻밤 생각해 봐." }
    ]
  },
  {
    id: "L4-538",
    word: "costly",
    meaning: "비용이 많이 드는, 대가가 큰",
    examples: [
      { en: "Fixing the roof turned out to be really costly.", kr: "지붕 고치는 데 돈이 엄청 들었어." },
      { en: "That one typo was a costly mistake.", kr: "그 오타 하나가 큰 대가를 치른 실수였어." }
    ]
  },
  {
    id: "L4-539",
    word: "dial",
    meaning: "전화를 걸다, 다이얼",
    examples: [
      { en: "Dial 911 right away if someone gets hurt.", kr: "누가 다치면 바로 911에 전화해." },
      { en: "Turn the dial to adjust the oven temperature.", kr: "다이얼을 돌려서 오븐 온도를 맞춰." }
    ]
  }
];

const wordsLevel4_Part4 = [
  {
    id: "L4-808",
    word: "flaky",
    meaning: "약속을 잘 어기는, 믿음직하지 못한, 잘 부서지는",
    examples: [
      { en: "He's so flaky; he canceled on me again.", kr: "걔 진짜 못 믿겠어. 또 약속 취소했어." },
      { en: "I love this flaky, buttery croissant.", kr: "결이 바삭하고 버터 향 진한 이 크루아상 너무 좋아." }
    ]
  },
  {
    id: "L4-541",
    word: "jar",
    meaning: "병, 단지",
    examples: [
      { en: "Can you help me open this jar of pickles?", kr: "이 피클 병 여는 것 좀 도와줄래?" },
      { en: "We keep spare coins in a jar on the kitchen counter.", kr: "우리는 남는 동전을 부엌 조리대 위의 병에 모아 둬요." }
    ]
  },
  {
    id: "L4-542",
    word: "merchandise",
    meaning: "상품, 물품, 굿즈",
    examples: [
      { en: "All merchandise on this shelf is 30 percent off.", kr: "이 선반에 있는 상품은 전부 30퍼센트 할인이에요." },
      { en: "I bought a T-shirt at the merchandise booth after the concert.", kr: "콘서트 끝나고 굿즈 부스에서 티셔츠 샀어." }
    ]
  },
  {
    id: "L4-543",
    word: "offended",
    meaning: "기분이 상한, 불쾌한",
    examples: [
      { en: "I hope you weren't offended by my joke.", kr: "제 농담에 기분 상하지 않으셨길 바라요." },
      { en: "She felt offended when nobody thanked her for her help.", kr: "도와줬는데 아무도 고마워하지 않자 그녀는 기분이 상했어요." }
    ]
  },
  {
    id: "L4-544",
    word: "overhead",
    meaning: "머리 위의, 간접비, 운영비",
    examples: [
      { en: "Please put your bags in the overhead bin.", kr: "가방은 머리 위 짐칸에 넣어 주세요." },
      { en: "Working from home cuts down on overhead costs.", kr: "재택근무를 하면 운영비가 줄어요." }
    ]
  },
  {
    id: "L4-809",
    word: "brainstorm",
    meaning: "아이디어를 내다, 브레인스토밍하다",
    examples: [
      { en: "Let's brainstorm some ideas for the party.", kr: "파티 아이디어 좀 같이 짜 보자." },
      { en: "We brainstormed names for the new café all night.", kr: "우리 밤새 새 카페 이름 아이디어를 냈어." }
    ]
  },
  {
    id: "L4-545",
    word: "texture",
    meaning: "질감, 식감",
    examples: [
      { en: "I love the soft texture of this sweater.", kr: "이 스웨터의 부드러운 질감이 정말 좋아요." },
      { en: "The cake has a light, fluffy texture.", kr: "이 케이크는 가볍고 폭신한 식감이에요." }
    ]
  },
  {
    id: "L4-546",
    word: "translate",
    meaning: "번역하다, 통역하다",
    examples: [
      { en: "Could you translate this email into Korean for me?", kr: "이 이메일 한국어로 번역해 줄 수 있어?" },
      { en: "Can you translate for me at the pharmacy?", kr: "약국에서 통역 좀 해 줄 수 있어?" }
    ]
  },
  {
    id: "L4-547",
    word: "recession",
    meaning: "경기 침체, 불황",
    examples: [
      { en: "Lots of small shops closed during the recession.", kr: "불황 때 작은 가게들이 많이 문을 닫았어." },
      { en: "Do you think there'll be a recession next year?", kr: "내년에 경기 침체 올 것 같아?" }
    ]
  },
  {
    id: "L4-548",
    word: "countryside",
    meaning: "시골, 전원 지역",
    examples: [
      { en: "We spent the weekend relaxing in the countryside.", kr: "우리는 시골에서 쉬면서 주말을 보냈어요." },
      { en: "My grandparents live in a quiet house in the countryside.", kr: "조부모님은 시골의 조용한 집에 사세요." }
    ]
  },
  {
    id: "L4-549",
    word: "donor",
    meaning: "기부자, 기증자, 헌혈자",
    examples: [
      { en: "She became a blood donor after her father's surgery.", kr: "그녀는 아버지 수술 후에 헌혈을 시작했어." },
      { en: "Are you an organ donor? It's on your license.", kr: "너 장기 기증자야? 면허증에 나와 있네." }
    ]
  },
  {
    id: "L4-550",
    word: "educate",
    meaning: "교육하다, 가르치다, 알려 주다",
    examples: [
      { en: "Can you educate me on how this app works?", kr: "이 앱 어떻게 쓰는지 좀 알려 줄래?" },
      { en: "We need to educate kids about online safety.", kr: "아이들한테 온라인 안전 교육을 해야 해." }
    ]
  },
  {
    id: "L4-313",
    word: "prolific",
    meaning: "다작하는, 왕성한",
    examples: [
      { en: "She's a prolific writer who publishes two books a year.", kr: "그녀는 1년에 책을 두 권씩 내는 다작 작가야." },
      { en: "He's a prolific YouTuber; he uploads every single day.", kr: "그는 정말 왕성한 유튜버야. 매일 영상을 올려." }
    ]
  },
  {
    id: "L4-810",
    word: "restless",
    meaning: "안절부절못하는, 들썩이는, 잠 못 이루는",
    examples: [
      { en: "I felt restless all day, I couldn't focus.", kr: "하루 종일 안절부절해서 집중이 안 됐어." },
      { en: "The kids get restless on long car rides.", kr: "애들은 차를 오래 타면 가만히 있질 못해." }
    ]
  },
  {
    id: "L4-551",
    word: "enrollment",
    meaning: "등록, 입학, 수강 신청",
    examples: [
      { en: "When does enrollment for summer classes start?", kr: "여름 강좌 등록 언제 시작해요?" },
      { en: "Enrollment is full, so I'm on the waiting list.", kr: "등록이 다 차서 대기자 명단에 올라 있어." }
    ]
  },
  {
    id: "L4-552",
    word: "fierce",
    meaning: "치열한, 격렬한, 사나운",
    examples: [
      { en: "There's fierce competition for jobs at tech companies.", kr: "IT 회사 취업 경쟁이 엄청 치열해." },
      { en: "The wind was so fierce last night.", kr: "어젯밤 바람이 엄청 거셌어." }
    ]
  },
  {
    id: "L4-317",
    word: "rancid",
    meaning: "상한, 쩐내 나는",
    examples: [
      { en: "Ugh, this butter smells rancid.", kr: "윽, 이 버터 상한 냄새 나." },
      { en: "Throw out that oil; it's gone rancid.", kr: "그 기름 버려. 쩐내 나게 상했어." }
    ]
  },
  {
    id: "L4-553",
    word: "garlic",
    meaning: "마늘",
    examples: [
      { en: "Korean dishes often use a lot of garlic.", kr: "한국 요리에는 마늘이 많이 들어가는 경우가 많아요." },
      { en: "Could you make mine without garlic, please?", kr: "제 건 마늘 빼고 만들어 주실 수 있나요?" }
    ]
  },
  {
    id: "L4-554",
    word: "gratitude",
    meaning: "감사, 고마움",
    examples: [
      { en: "I can't express my gratitude enough.", kr: "감사한 마음을 다 표현할 수가 없어요." },
      { en: "She sent flowers to show her gratitude.", kr: "그녀는 고마운 마음을 표현하려고 꽃을 보냈어." }
    ]
  },
  {
    id: "L4-555",
    word: "indicator",
    meaning: "표시등, 지표, (차) 깜빡이",
    examples: [
      { en: "The red indicator light means the battery is low.", kr: "빨간 표시등은 배터리가 부족하다는 뜻이야." },
      { en: "Your indicator is still on, but you're not turning.", kr: "너 깜빡이 아직 켜져 있어. 안 꺾잖아." }
    ]
  },
  {
    id: "L4-556",
    word: "lend",
    meaning: "빌려주다",
    examples: [
      { en: "Could you lend me your charger for a minute?", kr: "충전기 잠깐 빌려줄 수 있어?" },
      { en: "Can you lend me a hand with these boxes?", kr: "이 상자들 옮기는 것 좀 도와줄래?" }
    ]
  },
  {
    id: "L4-811",
    word: "insecure",
    meaning: "자신감 없는, 불안한, 보안이 취약한",
    examples: [
      { en: "I feel insecure about my English sometimes.", kr: "가끔 내 영어에 자신이 없어." },
      { en: "Don't use that public Wi-Fi; it's insecure.", kr: "그 공용 와이파이 쓰지 마. 보안이 취약해." }
    ]
  },
  {
    id: "L4-557",
    word: "lounge",
    meaning: "라운지, 휴게실",
    examples: [
      { en: "Let's wait in the airport lounge until boarding.", kr: "탑승 전까지 공항 라운지에서 기다리자." },
      { en: "The staff lounge has free coffee and snacks.", kr: "직원 휴게실에는 무료 커피와 간식이 있어요." }
    ]
  },
  {
    id: "L4-629",
    word: "allergic",
    meaning: "알레르기가 있는",
    examples: [
      { en: "I'm allergic to peanuts. Does this have any nuts?", kr: "저 땅콩 알레르기 있어요. 이거 견과류 들어 있어요?" },
      { en: "My sister's allergic to cats, so she can't visit.", kr: "우리 언니가 고양이 알레르기가 있어서 못 와." }
    ]
  },
  {
    id: "L4-558",
    word: "outline",
    meaning: "개요, 윤곽, 대략 설명하다",
    examples: [
      { en: "Can you send me an outline of your presentation by Friday?", kr: "금요일까지 발표 개요 보내 줄 수 있어요?" },
      { en: "Let me quickly outline the plan for today.", kr: "오늘 계획을 간단히 설명할게요." }
    ]
  },
  {
    id: "L4-559",
    word: "polite",
    meaning: "예의 바른, 공손한",
    examples: [
      { en: "It's polite to say thank you to the bus driver.", kr: "버스 기사님께 감사하다고 말하는 게 예의예요." },
      { en: "The hotel staff were very polite and helpful.", kr: "호텔 직원들은 아주 공손하고 친절했어요." }
    ]
  },
  {
    id: "L4-560",
    word: "receipt",
    meaning: "영수증",
    examples: [
      { en: "Do you want your receipt in the bag?", kr: "영수증을 봉투에 넣어 드릴까요?" },
      { en: "Keep your receipts so you can claim travel expenses.", kr: "출장비를 청구할 수 있도록 영수증을 보관하세요." }
    ]
  },
  {
    id: "L4-561",
    word: "reliability",
    meaning: "신뢰성, 믿음직함",
    examples: [
      { en: "I chose this car for its reliability.", kr: "믿을 만해서 이 차를 골랐어." },
      { en: "How's the reliability of the buses here? Are they usually on time?", kr: "여기 버스 믿을 만해? 보통 제시간에 와?" }
    ]
  },
  {
    id: "L4-329",
    word: "waive",
    meaning: "(요금 등을) 면제하다, 포기하다",
    examples: [
      { en: "Can you waive the late fee just this once?", kr: "이번 한 번만 연체료를 면제해 주실 수 있어요?" },
      { en: "The hotel waived the cleaning charge for us.", kr: "호텔에서 청소비를 면제해 줬어요." }
    ]
  },
  {
    id: "L4-812",
    word: "chug",
    meaning: "벌컥벌컥 들이켜다, 원샷하다",
    examples: [
      { en: "Don't chug your beer, it's not a race.", kr: "맥주 원샷하지 마, 시합하는 거 아니잖아." },
      { en: "He chugged a whole bottle of water after the run.", kr: "걔 달리고 나서 물 한 병을 원샷했어." }
    ]
  },
  {
    id: "L4-813",
    word: "fuss",
    meaning: "호들갑, 법석, 야단 떨다",
    examples: [
      { en: "What's all the fuss about?", kr: "왜 이렇게 난리야?" },
      { en: "Please don't fuss over me, I'm fine.", kr: "나 괜찮으니까 너무 신경 쓰지 마." }
    ]
  },
  {
    id: "L4-562",
    word: "showcase",
    meaning: "선보이다, 보여 주다, 진열장",
    examples: [
      { en: "This is your chance to showcase your skills.", kr: "이번이 네 실력을 보여 줄 기회야." },
      { en: "Her portfolio showcases her best design work.", kr: "그녀의 포트폴리오엔 최고의 디자인 작업이 담겨 있어." }
    ]
  },
  {
    id: "L4-563",
    word: "accountability",
    meaning: "책임, 책임감",
    examples: [
      { en: "We need some accountability; who forgot to lock up?", kr: "책임을 따져 봐야겠어. 누가 문 안 잠갔어?" },
      { en: "A gym buddy really helps with accountability.", kr: "운동 친구가 있으면 책임감이 확실히 생겨." }
    ]
  },
  {
    id: "L4-564",
    word: "amazed",
    meaning: "놀란, 감탄한",
    examples: [
      { en: "I was amazed at how fast she learned Spanish.", kr: "그녀가 스페인어를 얼마나 빨리 배웠는지 놀랐어요." },
      { en: "Visitors are always amazed by the view from the top.", kr: "방문객들은 꼭대기에서 보는 경치에 늘 감탄해요." }
    ]
  },
  {
    id: "L4-630",
    word: "pharmacy",
    meaning: "약국",
    examples: [
      { en: "Is there a pharmacy open late around here?", kr: "이 근처에 늦게까지 하는 약국 있어요?" },
      { en: "I'll pick up your prescription at the pharmacy.", kr: "내가 약국에서 네 처방약 받아 올게." }
    ]
  },
  {
    id: "L4-565",
    word: "automated",
    meaning: "자동화된, 자동의",
    examples: [
      { en: "You'll get an automated email when your order ships.", kr: "주문이 발송되면 자동 이메일이 갈 거예요." },
      { en: "I hate automated phone systems; I just want a person.", kr: "자동 응답 전화 너무 싫어. 그냥 사람이랑 통화하고 싶어." }
    ]
  },
  {
    id: "L4-814",
    word: "reheat",
    meaning: "다시 데우다",
    examples: [
      { en: "Can you reheat this soup for me?", kr: "이 수프 좀 다시 데워줄래?" },
      { en: "Pizza tastes great when you reheat it in a pan.", kr: "피자는 팬에 다시 데우면 진짜 맛있어." }
    ]
  },
  {
    id: "L4-566",
    word: "batch",
    meaning: "한 회분, 한 묶음, 일괄",
    examples: [
      { en: "I made a batch of cookies for the office party.", kr: "사무실 파티용으로 쿠키를 한 판 구웠어요." },
      { en: "We process the orders in batches every afternoon.", kr: "우리는 매일 오후에 주문을 일괄로 처리합니다." }
    ]
  },
  {
    id: "L4-815",
    word: "stoked",
    meaning: "완전 신난, 들뜬",
    examples: [
      { en: "I'm so stoked about the concert tonight!", kr: "오늘 밤 콘서트 때문에 완전 신나!" },
      { en: "Are you stoked for your trip?", kr: "여행 가는 거 신나?" }
    ]
  },
  {
    id: "L4-567",
    word: "catalog",
    meaning: "카탈로그, 목록",
    examples: [
      { en: "Can you send me your latest product catalog?", kr: "최신 제품 카탈로그를 보내 주실 수 있나요?" },
      { en: "The library's catalog is available online.", kr: "도서관 소장 목록은 온라인에서 볼 수 있어요." }
    ]
  },
  {
    id: "L4-631",
    word: "supervisor",
    meaning: "상사, 관리자, 책임자",
    examples: [
      { en: "I need to check with my supervisor first.", kr: "먼저 상사한테 확인해 봐야 해요." },
      { en: "Can I speak to your supervisor, please?", kr: "책임자분이랑 얘기할 수 있을까요?" }
    ]
  },
  {
    id: "L4-342",
    word: "condone",
    meaning: "용납하다, 묵인하다",
    examples: [
      { en: "I don't condone cheating, but I get why he did it.", kr: "부정행위를 용납하진 않지만 그가 왜 그랬는지는 이해해." },
      { en: "We won't condone that kind of behavior here.", kr: "여기선 그런 행동은 용납하지 않아요." }
    ]
  },
  {
    id: "L4-343",
    word: "conundrum",
    meaning: "난제, 수수께끼",
    examples: [
      { en: "Pizza or tacos? That's a real conundrum.", kr: "피자냐 타코냐? 이거 진짜 난제다." },
      { en: "Finding good childcare is a conundrum for working parents.", kr: "좋은 보육 시설 찾기는 맞벌이 부모에게 난제예요." }
    ]
  },
  {
    id: "L4-568",
    word: "charitable",
    meaning: "너그러운, 자선의",
    examples: [
      { en: "Let's be charitable and assume he made an honest mistake.", kr: "너그럽게 봐서 걔가 그냥 실수한 걸로 치자." },
      { en: "I donate to a charitable group every month.", kr: "나 매달 자선 단체에 기부해." }
    ]
  },
  {
    id: "L4-569",
    word: "continually",
    meaning: "계속해서, 끊임없이",
    examples: [
      { en: "My phone continually loses signal in this building.", kr: "이 건물에선 폰 신호가 계속 끊겨." },
      { en: "He continually interrupts me in meetings.", kr: "그는 회의 때 계속 내 말을 끊어." }
    ]
  },
  {
    id: "L4-570",
    word: "exotic",
    meaning: "이국적인",
    examples: [
      { en: "I love trying exotic fruits when I travel abroad.", kr: "해외여행을 가면 이국적인 과일을 먹어 보는 걸 좋아해요." },
      { en: "The hotel garden is full of exotic plants.", kr: "호텔 정원은 이국적인 식물로 가득해요." }
    ]
  },
  {
    id: "L4-571",
    word: "fountain",
    meaning: "분수, 식수대",
    examples: [
      { en: "Let's meet by the fountain in the park.", kr: "공원 분수 옆에서 만나자." },
      { en: "There's a water fountain next to the restrooms.", kr: "화장실 옆에 식수대가 있어요." }
    ]
  },
  {
    id: "L4-816",
    word: "marinate",
    meaning: "양념에 재우다, (생각을) 묵히다",
    examples: [
      { en: "Marinate the chicken overnight.", kr: "닭고기를 밤새 양념에 재워 둬." },
      { en: "Let that idea marinate for a few days.", kr: "그 아이디어는 며칠 묵혀 봐." }
    ]
  },
  {
    id: "L4-632",
    word: "paperwork",
    meaning: "서류 작업, 서류",
    examples: [
      { en: "I'm stuck at the office finishing paperwork.", kr: "서류 작업 마무리하느라 사무실에 붙잡혀 있어." },
      { en: "You'll need to fill out some paperwork first.", kr: "먼저 서류 몇 장 작성하셔야 해요." }
    ]
  },
  {
    id: "L4-572",
    word: "glow",
    meaning: "빛나다, 은은한 빛, 혈색",
    examples: [
      { en: "The city lights glow beautifully at night.", kr: "밤에는 도시 불빛이 아름답게 빛나." },
      { en: "You're glowing! Did you just get back from vacation?", kr: "얼굴에서 빛이 나! 휴가 다녀왔어?" }
    ]
  },
  {
    id: "L4-817",
    word: "pamper",
    meaning: "애지중지하다, 호강시키다",
    examples: [
      { en: "Go pamper yourself, you've earned it.", kr: "가서 좀 호강해 봐, 너 그럴 자격 있어." },
      { en: "My grandma pampers her dog like a baby.", kr: "우리 할머니는 강아지를 아기처럼 애지중지하셔." }
    ]
  },
  {
    id: "L4-633",
    word: "coupon",
    meaning: "쿠폰, 할인권",
    examples: [
      { en: "Can I use this coupon on sale items?", kr: "이 쿠폰 세일 상품에도 쓸 수 있어요?" },
      { en: "I got a coupon for a free coffee.", kr: "커피 무료 쿠폰 받았어." }
    ]
  },
  {
    id: "L4-574",
    word: "optional",
    meaning: "선택적인, 선택 사항인",
    examples: [
      { en: "Attendance at the Friday workshop is optional.", kr: "금요일 워크숍 참석은 선택 사항입니다." },
      { en: "Tipping is optional, but it's always appreciated.", kr: "팁은 선택이지만, 주시면 언제나 감사하죠." }
    ]
  },
  {
    id: "L4-575",
    word: "paste",
    meaning: "붙여 넣다, 반죽, 풀",
    examples: [
      { en: "Copy the link and paste it into the chat.", kr: "링크를 복사해서 채팅창에 붙여 넣으세요." },
      { en: "Mix the flour and water into a thick paste.", kr: "밀가루와 물을 섞어 걸쭉한 반죽을 만드세요." }
    ]
  },
  {
    id: "L4-576",
    word: "prosperity",
    meaning: "번영, 번창",
    examples: [
      { en: "We wish you health and prosperity in the new year.", kr: "새해에 건강하시고 번창하시길 바랍니다." },
      { en: "Here's to your new shop's prosperity! Cheers!", kr: "새 가게의 번창을 위하여! 건배!" }
    ]
  },
  {
    id: "L4-634",
    word: "tricky",
    meaning: "까다로운, 곤란한",
    examples: [
      { en: "This question's a little tricky. Let me think.", kr: "이 질문 좀 까다롭네요. 생각 좀 해 볼게요." },
      { en: "Parking here can be tricky on weekends.", kr: "주말엔 여기 주차하기가 좀 어려울 수 있어요." }
    ]
  },
  {
    id: "L4-577",
    word: "shortage",
    meaning: "부족, 품귀",
    examples: [
      { en: "Is there an egg shortage? The shelves are empty.", kr: "계란이 품귀인가? 진열대가 텅 비었네." },
      { en: "We're short-staffed because of a nurse shortage.", kr: "간호사가 부족해서 일손이 모자라요." }
    ]
  },
  {
    id: "L4-578",
    word: "stare",
    meaning: "빤히 쳐다보다, 응시하다",
    examples: [
      { en: "It's rude to stare at people on the subway.", kr: "지하철에서 사람들을 빤히 쳐다보는 건 무례해요." },
      { en: "I stared at my screen for an hour without writing anything.", kr: "한 시간 동안 아무것도 못 쓰고 화면만 멍하니 쳐다봤어요." }
    ]
  },
  {
    id: "L4-579",
    word: "terribly",
    meaning: "몹시, 정말, 형편없이",
    examples: [
      { en: "I'm terribly sorry for the delay.", kr: "늦어져서 정말 죄송합니다." },
      { en: "The team played terribly in the second half.", kr: "그 팀은 후반전에 형편없이 경기했어요." }
    ]
  },
  {
    id: "L4-580",
    word: "verbal",
    meaning: "말의, 구두의",
    examples: [
      { en: "We have a verbal agreement, but we need it in writing.", kr: "구두로는 합의했지만 서면으로 받아 둬야 해요." },
      { en: "The manager gave him a verbal warning for being late.", kr: "매니저는 지각한 그에게 구두 경고를 줬어요." }
    ]
  },
  {
    id: "L4-581",
    word: "blunt",
    meaning: "직설적인, 무딘",
    examples: [
      { en: "To be blunt, your report needs a lot of work.", kr: "직설적으로 말하자면, 보고서에 손볼 데가 많아요." },
      { en: "This knife is too blunt to cut the tomatoes.", kr: "이 칼은 너무 무뎌서 토마토가 안 잘려요." }
    ]
  },
  {
    id: "L4-582",
    word: "clarity",
    meaning: "명확성, 선명함",
    examples: [
      { en: "I just need some clarity on who's doing what.", kr: "누가 뭘 하는지만 좀 확실히 해 줬으면 해." },
      { en: "Wow, the picture clarity on this TV is amazing.", kr: "와, 이 TV 화질 진짜 선명하다." }
    ]
  },
  {
    id: "L4-583",
    word: "gesture",
    meaning: "몸짓, 제스처, (마음의) 표시",
    examples: [
      { en: "He made a gesture for me to sit down.", kr: "그는 나에게 앉으라는 몸짓을 했어요." },
      { en: "Bringing coffee for the whole team was a kind gesture.", kr: "팀 전체에 커피를 사 온 건 친절한 마음의 표시였어요." }
    ]
  },
  {
    id: "L4-364",
    word: "inundated",
    meaning: "(일·연락 등이) 쇄도하는, 파묻힌",
    examples: [
      { en: "I'm inundated with emails after my vacation.", kr: "휴가 갔다 왔더니 이메일이 산더미처럼 쏟아졌어." },
      { en: "The shop was inundated with customers on Black Friday.", kr: "블랙프라이데이에 가게에 손님이 쇄도했어요." }
    ]
  },
  {
    id: "L4-584",
    word: "literacy",
    meaning: "읽고 쓰는 능력, 활용 능력",
    examples: [
      { en: "My dad's computer literacy is pretty low, so I help him.", kr: "아빠가 컴퓨터를 잘 못 다루셔서 내가 도와드려." },
      { en: "She volunteers at an adult literacy class.", kr: "그녀는 성인 문해 교실에서 봉사해." }
    ]
  },
  {
    id: "L4-585",
    word: "misleading",
    meaning: "오해의 소지가 있는, 사실과 다른",
    examples: [
      { en: "That headline is misleading, so read the whole article.", kr: "그 제목은 오해의 소지가 있으니까 기사 전체를 읽어 봐." },
      { en: "The photos were totally misleading; the room is tiny.", kr: "사진이랑 완전 달라. 방이 엄청 작아." }
    ]
  },
  {
    id: "L4-818",
    word: "sunburn",
    meaning: "햇볕에 탐, 햇볕 화상",
    examples: [
      { en: "Put on sunscreen or you'll get a sunburn.", kr: "선크림 발라, 안 그러면 햇볕에 다 탄다." },
      { en: "My sunburn hurts so much I can't sleep.", kr: "햇볕에 덴 데가 너무 아파서 잠을 못 자겠어." }
    ]
  },
  {
    id: "L4-586",
    word: "monument",
    meaning: "기념물, 기념비",
    examples: [
      { en: "We visited a bunch of famous monuments on our trip.", kr: "여행 가서 유명한 기념물을 여러 개 봤어." },
      { en: "Let's meet in front of the monument in the square.", kr: "광장에 있는 기념비 앞에서 만나자." }
    ]
  },
  {
    id: "L4-587",
    word: "obsession",
    meaning: "집착, 강박, 푹 빠진 것",
    examples: [
      { en: "His obsession with his phone is ruining our dinners.", kr: "그가 휴대폰에 집착하는 바람에 우리 저녁 식사가 엉망이 되고 있어요." },
      { en: "My latest obsession is Korean-style fried chicken.", kr: "요즘 제가 푹 빠진 건 한국식 치킨이에요." }
    ]
  },
  {
    id: "L4-819",
    word: "nostalgic",
    meaning: "옛날이 그리운, 향수를 불러일으키는",
    examples: [
      { en: "This song makes me so nostalgic.", kr: "이 노래 들으면 옛날 생각이 너무 나." },
      { en: "I'm feeling nostalgic; let's visit our old school.", kr: "옛날 생각 나네. 우리 모교에 한번 가 보자." }
    ]
  },
  {
    id: "L4-588",
    word: "rack",
    meaning: "걸이, 선반, 거치대",
    examples: [
      { en: "Hang your coat on the rack by the door.", kr: "코트는 문 옆 옷걸이에 걸어 주세요." },
      { en: "There's a bike rack in front of the office.", kr: "사무실 앞에 자전거 거치대가 있어요." }
    ]
  },
  {
    id: "L4-589",
    word: "rejection",
    meaning: "거절, 불합격",
    examples: [
      { en: "I got a rejection email from the company today.", kr: "오늘 그 회사에서 불합격 메일 받았어." },
      { en: "I'm scared of rejection, so I never ask anyone out.", kr: "거절당하는 게 무서워서 누구한테도 데이트 신청을 못 해." }
    ]
  },
  {
    id: "L4-590",
    word: "shuttle",
    meaning: "셔틀, 셔틀버스",
    examples: [
      { en: "Is there a free shuttle to the airport?", kr: "공항까지 무료 셔틀 있어요?" },
      { en: "The shuttle bus runs every fifteen minutes.", kr: "셔틀버스는 15분마다 다녀요." }
    ]
  },
  {
    id: "L4-820",
    word: "sloppy",
    meaning: "엉성한, 대충 한, 지저분한",
    examples: [
      { en: "Sorry, that was a sloppy mistake on my part.", kr: "미안, 내가 대충 해서 생긴 실수야." },
      { en: "His handwriting is so sloppy.", kr: "걔 글씨 진짜 엉망이야." }
    ]
  },
  {
    id: "L4-591",
    word: "snack",
    meaning: "간식",
    examples: [
      { en: "I always keep a healthy snack in my desk drawer.", kr: "저는 늘 책상 서랍에 건강한 간식을 넣어 둬요." },
      { en: "Let's grab a quick snack before the movie starts.", kr: "영화 시작하기 전에 간단히 간식 좀 먹자." }
    ]
  },
  {
    id: "L4-821",
    word: "sulk",
    meaning: "삐지다, 뾰로통하다",
    examples: [
      { en: "Are you still sulking about yesterday?", kr: "너 어제 일로 아직도 삐져 있어?" },
      { en: "He sulks whenever he loses a game.", kr: "걔는 게임에서 지면 맨날 삐져." }
    ]
  },
  {
    id: "L4-592",
    word: "stiff",
    meaning: "뻣뻣한, 뻐근한, 딱딱한",
    examples: [
      { en: "My neck is stiff from sitting at the computer all day.", kr: "하루 종일 컴퓨터 앞에 앉아 있었더니 목이 뻐근해요." },
      { en: "These new shoes feel a bit stiff.", kr: "이 새 신발은 좀 딱딱해요." }
    ]
  },
  {
    id: "L4-593",
    word: "terrific",
    meaning: "아주 좋은, 훌륭한",
    examples: [
      { en: "You did a terrific job on the presentation.", kr: "발표 정말 훌륭하게 했어요." },
      { en: "We had terrific weather for the company picnic.", kr: "회사 야유회 날 날씨가 정말 좋았어요." }
    ]
  },
  {
    id: "L4-594",
    word: "unite",
    meaning: "단결하다, 하나로 뭉치다",
    examples: [
      { en: "We need to unite as a team to hit this deadline.", kr: "이 마감 맞추려면 팀으로 똘똘 뭉쳐야 해." },
      { en: "Nothing unites my family like a good soccer game.", kr: "우리 가족을 하나로 만드는 데는 축구 경기만 한 게 없어." }
    ]
  },
  {
    id: "L4-822",
    word: "devastated",
    meaning: "큰 충격을 받은, 망연자실한",
    examples: [
      { en: "She was devastated when her dog died.", kr: "그녀는 강아지가 죽었을 때 큰 충격을 받았어." },
      { en: "I'd be devastated if I lost these photos.", kr: "이 사진들 잃어버리면 난 진짜 무너질 거야." }
    ]
  },
  {
    id: "L4-596",
    word: "broker",
    meaning: "중개인, 브로커",
    examples: [
      { en: "We used a broker to find our apartment.", kr: "우리 중개인 통해서 아파트 구했어." },
      { en: "My broker told me to sell the stock.", kr: "증권사 담당자가 그 주식 팔라고 했어." }
    ]
  },
  {
    id: "L4-597",
    word: "bury",
    meaning: "묻다, 매장하다",
    examples: [
      { en: "My dog likes to bury his toys in the backyard.", kr: "우리 개는 뒷마당에 장난감을 묻는 걸 좋아해요." },
      { en: "The important details were buried at the bottom of the email.", kr: "중요한 내용이 이메일 맨 아래에 묻혀 있었어요." }
    ]
  },
  {
    id: "L4-598",
    word: "dislike",
    meaning: "싫어하다, 반감",
    examples: [
      { en: "I dislike talking on the phone, so I prefer texting.", kr: "저는 통화하는 걸 싫어해서 문자를 더 좋아해요." },
      { en: "She has a strong dislike of crowded places.", kr: "그녀는 붐비는 곳을 몹시 싫어해요." }
    ]
  },
  {
    id: "L4-599",
    word: "farewell",
    meaning: "작별, 송별",
    examples: [
      { en: "We're having a farewell party for Jenny on Friday.", kr: "금요일에 제니 송별회를 할 거예요." },
      { en: "He said farewell to his coworkers on his last day.", kr: "그는 마지막 출근 날 동료들에게 작별 인사를 했어요." }
    ]
  },
  {
    id: "L4-600",
    word: "fond",
    meaning: "좋아하는, 애정 어린",
    examples: [
      { en: "I'm not very fond of spicy food.", kr: "저는 매운 음식을 그다지 좋아하지 않아요." },
      { en: "I have fond memories of my first job.", kr: "첫 직장에 대해서는 좋은 추억이 있어요." }
    ]
  },
  {
    id: "L4-601",
    word: "landlord",
    meaning: "집주인, 임대인",
    examples: [
      { en: "Our landlord raised the rent again this year.", kr: "우리 집주인이 올해 또 월세를 올렸어요." },
      { en: "Call the landlord if the heating stops working.", kr: "난방이 고장 나면 집주인에게 전화하세요." }
    ]
  },
  {
    id: "L4-602",
    word: "misery",
    meaning: "비참함, 고통",
    examples: [
      { en: "The long commute is making his life a misery.", kr: "긴 출퇴근 때문에 그의 삶이 너무 고달파." },
      { en: "This flu has been pure misery.", kr: "이번 독감은 진짜 고통 그 자체였어." }
    ]
  },
  {
    id: "L4-635",
    word: "handy",
    meaning: "편리한, 가까이 있는",
    examples: [
      { en: "This app is really handy for splitting bills.", kr: "이 앱 더치페이할 때 진짜 편해." },
      { en: "Keep your passport handy at the airport.", kr: "공항에서는 여권을 바로 꺼낼 수 있게 갖고 있어." }
    ]
  },
  {
    id: "L4-603",
    word: "sincerely",
    meaning: "진심으로",
    examples: [
      { en: "I sincerely apologize for the inconvenience.", kr: "불편을 끼쳐 드려 진심으로 사과드립니다." },
      { en: "I sincerely hope you enjoy your new job.", kr: "새 직장 생활이 즐겁기를 진심으로 바라요." }
    ]
  },
  {
    id: "L4-604",
    word: "specialty",
    meaning: "대표 요리, 특기, 전문 분야",
    examples: [
      { en: "What's the specialty of the house?", kr: "이 집 대표 요리가 뭐예요?" },
      { en: "Pasta is my specialty, so I'll cook tonight.", kr: "파스타는 내 특기니까 오늘 저녁은 내가 할게." }
    ]
  },
  {
    id: "L4-605",
    word: "trademark",
    meaning: "트레이드마크(특징), 상표",
    examples: [
      { en: "That big smile is his trademark.", kr: "그 환한 미소가 그의 트레이드마크야." },
      { en: "She showed up late, as usual; it's her trademark.", kr: "그녀는 늘 그렇듯 늦게 왔어. 그게 그녀 트레이드마크야." }
    ]
  },
  {
    id: "L4-606",
    word: "umbrella",
    meaning: "우산",
    examples: [
      { en: "Don't forget your umbrella because it's going to rain.", kr: "비가 올 거니까 우산 잊지 마." },
      { en: "I left my umbrella on the bus again.", kr: "버스에 또 우산을 두고 내렸어요." }
    ]
  },
  {
    id: "L4-607",
    word: "adjustment",
    meaning: "조정, 적응",
    examples: [
      { en: "We made a few adjustments to the budget.", kr: "예산을 몇 가지 조정했습니다." },
      { en: "Moving to a new country takes some adjustment.", kr: "새로운 나라로 이주하면 적응하는 데 시간이 좀 걸려요." }
    ]
  },
  {
    id: "L4-608",
    word: "attachment",
    meaning: "첨부 파일, 애착",
    examples: [
      { en: "I forgot to add the attachment; I'll resend it.", kr: "첨부 파일 넣는 걸 깜빡했어요. 다시 보낼게요." },
      { en: "My son has a strong attachment to his teddy bear.", kr: "우리 아들은 곰 인형에 애착이 강해." }
    ]
  },
  {
    id: "L4-823",
    word: "foodie",
    meaning: "미식가, 맛집 탐방 좋아하는 사람",
    examples: [
      { en: "She's a total foodie, ask her where to eat.", kr: "걔 완전 미식가야, 어디서 먹을지 걔한테 물어봐." },
      { en: "This city is a paradise for foodies.", kr: "이 도시는 맛집 좋아하는 사람들한테 천국이야." }
    ]
  },
  {
    id: "L4-609",
    word: "consume",
    meaning: "소비하다, 먹다, 소모하다",
    examples: [
      { en: "This old fridge consumes too much electricity.", kr: "이 낡은 냉장고는 전기를 너무 많이 먹어." },
      { en: "Work has completely consumed my life lately.", kr: "요즘 일이 내 삶을 완전히 집어삼켰어." }
    ]
  },
  {
    id: "L4-610",
    word: "credibility",
    meaning: "신뢰성, 신빙성",
    examples: [
      { en: "Lying to clients will destroy our credibility.", kr: "고객에게 거짓말하면 우리의 신뢰성이 무너질 거예요." },
      { en: "If you keep exaggerating, you'll lose all credibility.", kr: "자꾸 과장하면 신뢰를 완전히 잃을 거야." }
    ]
  },
  {
    id: "L4-611",
    word: "allowance",
    meaning: "용돈, 수당, 허용량",
    examples: [
      { en: "My kids get a weekly allowance for doing chores.", kr: "우리 아이들은 집안일을 하고 매주 용돈을 받아요." },
      { en: "The baggage allowance on this flight is 23 kilograms.", kr: "이 항공편의 수하물 허용량은 23킬로그램입니다." }
    ]
  },
  {
    id: "L4-612",
    word: "immense",
    meaning: "엄청난, 막대한",
    examples: [
      { en: "I'm under immense pressure at work right now.", kr: "요즘 회사에서 엄청난 압박을 받고 있어." },
      { en: "Thanks, your help made an immense difference.", kr: "고마워, 네 도움이 엄청 큰 힘이 됐어." }
    ]
  },
  {
    id: "L4-613",
    word: "intersection",
    meaning: "교차로",
    examples: [
      { en: "Turn left at the next intersection.", kr: "다음 교차로에서 좌회전하세요." },
      { en: "There was an accident at the busy intersection downtown.", kr: "시내의 붐비는 교차로에서 사고가 났어요." }
    ]
  }
];

const wordsLevel5_Part1 = [
  {
    id: "L5-401",
    word: "commuter",
    meaning: "통근자, 출퇴근하는 사람",
    examples: [
      { en: "The train was packed with commuters this morning.", kr: "오늘 아침 기차가 출근하는 사람들로 꽉 찼어." },
      { en: "Are you a commuter, or do you live on campus?", kr: "너 통학해, 아니면 기숙사 살아?" }
    ]
  },
  {
    id: "L5-801",
    word: "savvy",
    meaning: "(~에) 밝은, 요령 있는, 잘 아는",
    examples: [
      { en: "My mom's pretty tech-savvy for her age.", kr: "우리 엄마 나이에 비해 전자기기 꽤 잘 다루셔." },
      { en: "She's really savvy when it comes to money.", kr: "걔는 돈 문제에 있어서는 진짜 똑똑해." }
    ]
  },
  {
    id: "L5-402",
    word: "duly",
    meaning: "(duly noted) 잘 알겠다, 정식으로, 적절히",
    examples: [
      { en: "Duly noted. I'll keep that in mind next time.", kr: "잘 알겠어. 다음엔 명심할게." },
      { en: "Okay, duly noted. No more pineapple on the pizza.", kr: "알았어, 접수했어. 피자에 파인애플은 이제 안 넣을게." }
    ]
  },
  {
    id: "L5-403",
    word: "fulfillment",
    meaning: "성취감, (주문의) 처리·이행",
    examples: [
      { en: "Teaching gives me a real sense of fulfillment.", kr: "가르치는 일은 나한테 진짜 성취감을 줘." },
      { en: "Why is my order still stuck at the fulfillment center?", kr: "내 주문이 왜 아직 물류센터에 머물러 있지?" }
    ]
  },
  {
    id: "L5-404",
    word: "inject",
    meaning: "주사하다, (활력·자금 등을) 불어넣다",
    examples: [
      { en: "Do they inject it, or is it a pill?", kr: "그거 주사로 맞는 거야, 아니면 알약이야?" },
      { en: "We need to inject some fun into these meetings.", kr: "이 회의에 재미 좀 불어넣어야겠어." }
    ]
  },
  {
    id: "L5-405",
    word: "outset",
    meaning: "시작, 처음",
    examples: [
      { en: "I told him from the outset that I couldn't stay late.", kr: "처음부터 늦게까지는 못 있는다고 걔한테 말했어." },
      { en: "Let's be clear about the budget from the outset.", kr: "처음부터 예산에 대해 확실히 해 두죠." }
    ]
  },
  {
    id: "L5-802",
    word: "inkling",
    meaning: "짐작, 낌새, 어렴풋한 느낌",
    examples: [
      { en: "I had an inkling you'd say that.", kr: "네가 그렇게 말할 줄 어렴풋이 알았어." },
      { en: "Do you have any inkling what the surprise is?", kr: "깜짝 선물이 뭔지 짐작 가는 거 있어?" }
    ]
  },
  {
    id: "L5-008",
    word: "apathy",
    meaning: "무관심, 무감각",
    examples: [
      { en: "I can't stand his apathy. He doesn't care about anything.", kr: "난 걔의 무관심을 못 참겠어. 아무것도 신경을 안 써." },
      { en: "There's a lot of apathy about voting among my friends.", kr: "내 친구들 사이에선 투표에 무관심한 분위기가 많아." }
    ]
  },
  {
    id: "L5-407",
    word: "purposely",
    meaning: "일부러, 고의로",
    examples: [
      { en: "I purposely left early to avoid the traffic.", kr: "차 막히는 거 피하려고 일부러 일찍 나왔어." },
      { en: "Did you purposely ignore my texts all weekend?", kr: "주말 내내 내 문자 일부러 씹은 거야?" }
    ]
  },
  {
    id: "L5-408",
    word: "swarm",
    meaning: "떼, 무리, 떼 지어 몰려들다",
    examples: [
      { en: "A swarm of bees just came out of that tree!", kr: "저 나무에서 방금 벌 떼가 나왔어!" },
      { en: "The mall was swarming with people this weekend.", kr: "이번 주말에 쇼핑몰에 사람이 바글바글했어." }
    ]
  },
  {
    id: "L5-803",
    word: "jargon",
    meaning: "전문 용어, 특수 용어",
    examples: [
      { en: "Can you explain that without all the jargon?", kr: "그 전문 용어들 빼고 설명해 줄 수 있어?" },
      { en: "I didn't understand the doctor. It was all medical jargon.", kr: "의사 말을 이해 못 했어. 전부 의학 용어였거든." }
    ]
  },
  {
    id: "L5-804",
    word: "slacker",
    meaning: "게으름뱅이, 농땡이",
    examples: [
      { en: "Don't call me a slacker, I worked all weekend.", kr: "나 농땡이라고 하지 마, 주말 내내 일했어." },
      { en: "There's always one slacker in every group project.", kr: "조별 과제엔 꼭 무임승차하는 사람이 하나 있어." }
    ]
  },
  {
    id: "L5-409",
    word: "ache",
    meaning: "아픔, 통증, 아프다",
    examples: [
      { en: "My back aches from sitting all day.", kr: "하루 종일 앉아 있었더니 허리가 아파." },
      { en: "I woke up with a dull ache in my shoulder.", kr: "어깨가 뻐근하게 아픈 채로 일어났어." }
    ]
  },
  {
    id: "L5-805",
    word: "eavesdrop",
    meaning: "엿듣다",
    examples: [
      { en: "Were you eavesdropping on our conversation?", kr: "너 우리 대화 엿들었어?" },
      { en: "I didn't mean to eavesdrop, but you were pretty loud.", kr: "엿들으려던 건 아닌데, 너희 꽤 시끄러웠어." }
    ]
  },
  {
    id: "L5-411",
    word: "disbelief",
    meaning: "믿기지 않음, 불신",
    examples: [
      { en: "I just stared at the bill in disbelief.", kr: "믿기지가 않아서 계산서만 멍하니 쳐다봤어." },
      { en: "We all shook our heads in disbelief when he quit.", kr: "걔가 그만뒀을 때 우리 다 믿기지 않아서 고개를 저었어." }
    ]
  },
  {
    id: "L5-412",
    word: "grit",
    meaning: "투지, 근성, 모래알",
    examples: [
      { en: "It takes real grit to start your own business.", kr: "자기 사업 시작하려면 진짜 근성이 있어야 해." },
      { en: "I've got some grit in my shoe from the beach.", kr: "해변에서 신발에 모래알이 들어갔어." }
    ]
  },
  {
    id: "L5-413",
    word: "horrendous",
    meaning: "끔찍한, 지독한",
    examples: [
      { en: "The traffic this morning was horrendous.", kr: "오늘 아침 교통 체증 진짜 끔찍했어." },
      { en: "Have you seen the line outside? It's horrendous!", kr: "밖에 줄 봤어? 완전 끔찍해!" }
    ]
  },
  {
    id: "L5-414",
    word: "incompetence",
    meaning: "무능, 무능력",
    examples: [
      { en: "I'm so tired of the airline's incompetence.", kr: "그 항공사의 무능함에 진짜 질렸어." },
      { en: "Was it bad luck or just incompetence?", kr: "운이 나빴던 거야, 아니면 그냥 무능했던 거야?" }
    ]
  },
  {
    id: "L5-415",
    word: "lingering",
    meaning: "오래 남아 있는, 가시지 않는",
    examples: [
      { en: "I still have a lingering cough from my cold.", kr: "감기 때문에 아직 기침이 안 떨어져." },
      { en: "Is there any lingering tension between you two?", kr: "너희 둘 사이에 아직 남아 있는 앙금 같은 거 있어?" }
    ]
  },
  {
    id: "L5-416",
    word: "mundane",
    meaning: "평범한, 일상적인, 재미없는",
    examples: [
      { en: "I spend most of my day on mundane stuff like email.", kr: "하루 대부분을 이메일 같은 시시한 일에 써." },
      { en: "Even mundane chores feel better with good music.", kr: "좋은 음악 틀면 지루한 집안일도 좀 나아." }
    ]
  },
  {
    id: "L5-417",
    word: "stale",
    meaning: "(음식이) 오래된, 눅눅한, 진부한",
    examples: [
      { en: "Ugh, these chips are stale.", kr: "윽, 이 과자 눅눅해." },
      { en: "His jokes are getting a little stale.", kr: "걔 농담은 좀 식상해지고 있어." }
    ]
  },
  {
    id: "L5-418",
    word: "unjust",
    meaning: "부당한, 불공평한",
    examples: [
      { en: "It's unjust to blame her for everyone's mistakes.", kr: "모두의 실수를 걔 탓으로 돌리는 건 부당해." },
      { en: "Don't you think that rule is a bit unjust?", kr: "그 규칙 좀 불공평하다고 생각 안 해?" }
    ]
  },
  {
    id: "L5-419",
    word: "cultivate",
    meaning: "기르다, 재배하다, (관계·능력을) 쌓다",
    examples: [
      { en: "I'm trying to cultivate better sleep habits these days.", kr: "요즘 수면 습관을 좀 더 좋게 들이려고 노력 중이야." },
      { en: "It's worth cultivating good relationships with your clients.", kr: "고객들이랑 좋은 관계를 쌓아 두는 건 가치가 있어." }
    ]
  },
  {
    id: "L5-420",
    word: "defy",
    meaning: "거역하다, 무시하다, (예상·확률을) 뒤엎다",
    examples: [
      { en: "My son defied me and stayed out until two.", kr: "우리 아들이 내 말을 무시하고 2시까지 밖에 있었어." },
      { en: "Even the doctors were surprised. She really defied the odds.", kr: "의사들도 놀랐어. 걔는 정말 모든 예상을 뒤엎었어." }
    ]
  },
  {
    id: "L5-806",
    word: "cringe",
    meaning: "민망하다, 오글거리다, 움찔하다",
    examples: [
      { en: "I cringe every time I watch my old videos.", kr: "옛날 내 영상 볼 때마다 오글거려." },
      { en: "That joke made me cringe so hard.", kr: "그 농담 진짜 너무 민망했어." }
    ]
  },
  {
    id: "L5-746",
    word: "postpone",
    meaning: "미루다, 연기하다",
    examples: [
      { en: "Can we postpone the meeting until Friday?", kr: "회의를 금요일로 미룰 수 있을까요?" },
      { en: "They had to postpone their wedding because of the storm.", kr: "폭풍 때문에 걔네 결혼식을 연기해야 했어." }
    ]
  },
  {
    id: "L5-807",
    word: "lowball",
    meaning: "후려치다, 터무니없이 낮게 부르다",
    examples: [
      { en: "They tried to lowball me on my old car.", kr: "내 중고차 값을 후려치려고 하더라." },
      { en: "Don't lowball your salary in the interview.", kr: "면접에서 연봉을 너무 낮게 부르지 마." }
    ]
  },
  {
    id: "L5-423",
    word: "extraordinarily",
    meaning: "엄청나게, 대단히, 이례적으로",
    examples: [
      { en: "The new intern is extraordinarily talented.", kr: "새 인턴 엄청나게 재능 있어." },
      { en: "It was extraordinarily hot in Tokyo last week.", kr: "지난주 도쿄는 이례적으로 더웠어." }
    ]
  },
  {
    id: "L5-424",
    word: "lavish",
    meaning: "호화로운, 아낌없는, 아낌없이 주다",
    examples: [
      { en: "They threw a lavish party for their anniversary.", kr: "걔네 기념일에 엄청 호화로운 파티 열었어." },
      { en: "Grandma always lavishes the kids with gifts.", kr: "할머니는 항상 애들한테 선물을 아낌없이 주셔." }
    ]
  },
  {
    id: "L5-425",
    word: "miscellaneous",
    meaning: "여러 가지의, 잡다한, 기타의",
    examples: [
      { en: "I keep miscellaneous receipts in this drawer.", kr: "잡다한 영수증은 이 서랍에 넣어 둬." },
      { en: "Just put that under miscellaneous expenses.", kr: "그건 그냥 기타 비용으로 넣어." }
    ]
  },
  {
    id: "L5-808",
    word: "cocky",
    meaning: "건방진, 자만하는",
    examples: [
      { en: "Don't get cocky, the game isn't over yet.", kr: "자만하지 마, 경기 아직 안 끝났어." },
      { en: "He's good, but he's a little cocky.", kr: "걔 잘하긴 하는데 좀 건방져." }
    ]
  },
  {
    id: "L5-426",
    word: "reluctance",
    meaning: "꺼림, 마지못해 함",
    examples: [
      { en: "I understand your reluctance, but just give it a try.", kr: "망설이는 거 이해하는데, 그냥 한번 해 봐." },
      { en: "She agreed to come, but with some reluctance.", kr: "걔가 오겠다고는 했는데, 좀 마지못해 하더라." }
    ]
  },
  {
    id: "L5-427",
    word: "stumble",
    meaning: "발이 걸려 비틀거리다, 우연히 발견하다",
    examples: [
      { en: "I stumbled on the stairs and nearly dropped my coffee.", kr: "계단에서 발이 걸려서 커피 쏟을 뻔했어." },
      { en: "We stumbled across a great little cafe downtown.", kr: "시내에서 우연히 괜찮은 카페를 발견했어." }
    ]
  },
  {
    id: "L5-428",
    word: "unnecessarily",
    meaning: "불필요하게, 쓸데없이",
    examples: [
      { en: "The meeting dragged on unnecessarily for two hours.", kr: "회의가 쓸데없이 두 시간이나 질질 끌었어." },
      { en: "You're making this unnecessarily complicated.", kr: "너 이걸 쓸데없이 복잡하게 만들고 있어." }
    ]
  },
  {
    id: "L5-429",
    word: "agile",
    meaning: "민첩한, 날렵한, 기민한",
    examples: [
      { en: "The cat is so agile it can jump onto the fridge.", kr: "고양이가 너무 날렵해서 냉장고 위로도 뛰어올라." },
      { en: "Small teams are usually more agile than big ones.", kr: "작은 팀이 보통 큰 팀보다 더 기민하게 움직여." }
    ]
  },
  {
    id: "L5-430",
    word: "commonplace",
    meaning: "흔한, 아주 평범한",
    examples: [
      { en: "Working from home is pretty commonplace now.", kr: "재택근무는 이제 꽤 흔한 일이야." },
      { en: "Delays like this are commonplace at this airport.", kr: "이 공항에선 이런 지연이 흔해." }
    ]
  },
  {
    id: "L5-747",
    word: "annoy",
    meaning: "짜증 나게 하다, 귀찮게 하다",
    examples: [
      { en: "It really annoys me when people cut in line.", kr: "사람들이 새치기하면 진짜 짜증 나." },
      { en: "Stop annoying your brother and finish your homework.", kr: "동생 그만 귀찮게 하고 숙제 끝내." }
    ]
  },
  {
    id: "L5-431",
    word: "confidently",
    meaning: "자신 있게, 확신을 갖고",
    examples: [
      { en: "She walked confidently into the interview.", kr: "걔는 자신 있게 면접장에 들어갔어." },
      { en: "I can confidently say this is the best pizza in town.", kr: "여기가 동네에서 제일 맛있는 피자집이라고 자신 있게 말할 수 있어." }
    ]
  },
  {
    id: "L5-432",
    word: "heartbroken",
    meaning: "비통한, 마음이 아픈, 몹시 속상한",
    examples: [
      { en: "She was heartbroken when her dog died.", kr: "강아지가 죽었을 때 걔 정말 가슴 아파했어." },
      { en: "I'm heartbroken that you can't come to the wedding.", kr: "네가 결혼식에 못 온다니 너무 속상해." }
    ]
  },
  {
    id: "L5-433",
    word: "indefinite",
    meaning: "무기한의, 불확실한",
    examples: [
      { en: "The gym is closed for an indefinite period.", kr: "그 헬스장은 무기한 휴업이래." },
      { en: "He's on indefinite leave until he feels better.", kr: "걔는 몸이 나아질 때까지 무기한 휴직 중이야." }
    ]
  },
  {
    id: "L5-809",
    word: "frugal",
    meaning: "검소한, 알뜰한",
    examples: [
      { en: "My dad is super frugal. He never eats out.", kr: "우리 아빠는 엄청 알뜰하셔서 외식을 절대 안 하셔." },
      { en: "I'm trying to be more frugal this month.", kr: "이번 달엔 좀 더 아껴 쓰려고 해." }
    ]
  },
  {
    id: "L5-434",
    word: "reputable",
    meaning: "평판이 좋은, 믿을 만한",
    examples: [
      { en: "Only buy used cars from a reputable dealer.", kr: "중고차는 믿을 만한 딜러한테서만 사." },
      { en: "Do you know a reputable dentist around here?", kr: "이 근처에 평판 좋은 치과 알아?" }
    ]
  },
  {
    id: "L5-435",
    word: "spacious",
    meaning: "널찍한, 넓은",
    examples: [
      { en: "Wow, your new apartment is so spacious!", kr: "와, 너 새 아파트 엄청 넓다!" },
      { en: "Is the SUV spacious enough for five people?", kr: "그 SUV 다섯 명 타기에 충분히 넓어?" }
    ]
  },
  {
    id: "L5-810",
    word: "gullible",
    meaning: "잘 속는, 귀가 얇은",
    examples: [
      { en: "Don't be so gullible. That email is obviously a scam.", kr: "그렇게 잘 속지 마. 그 이메일 딱 봐도 사기야." },
      { en: "I was so gullible back then. I believed everything he said.", kr: "그땐 내가 너무 잘 속았어. 걔 말을 다 믿었거든." }
    ]
  },
  {
    id: "L5-811",
    word: "feisty",
    meaning: "기운 넘치는, 당찬, 깡 있는",
    examples: [
      { en: "My grandma is still so feisty at ninety.", kr: "우리 할머니는 아흔인데도 여전히 기운이 넘치셔." },
      { en: "That little puppy is really feisty.", kr: "저 강아지 쪼그만 게 성깔 있네." }
    ]
  },
  {
    id: "L5-437",
    word: "bribery",
    meaning: "뇌물, 뇌물 수수",
    examples: [
      { en: "Bribery won't work on me, but cookies might.", kr: "뇌물은 나한테 안 통해, 근데 쿠키라면 얘기가 다르지." },
      { en: "The mayor was arrested for bribery? No way!", kr: "시장이 뇌물죄로 체포됐다고? 말도 안 돼!" }
    ]
  },
  {
    id: "L5-438",
    word: "culprit",
    meaning: "범인, (문제의) 원인",
    examples: [
      { en: "So you're the culprit who ate my cake!", kr: "내 케이크 먹은 범인이 너구나!" },
      { en: "Sugar is the main culprit behind my weight gain.", kr: "내가 살찐 주범은 설탕이야." }
    ]
  },
  {
    id: "L5-439",
    word: "entrepreneurial",
    meaning: "기업가의, 사업 수완이 있는",
    examples: [
      { en: "She's always had an entrepreneurial spirit.", kr: "걘 항상 기업가 정신이 있었어." },
      { en: "My cousin is really entrepreneurial. He runs three online shops.", kr: "내 사촌은 사업 수완이 진짜 좋아. 온라인 쇼핑몰을 세 개나 해." }
    ]
  },
  {
    id: "L5-440",
    word: "extravagant",
    meaning: "사치스러운, 낭비하는, 과한",
    examples: [
      { en: "Buying a new phone every year is a bit extravagant.", kr: "매년 새 폰 사는 건 좀 사치야." },
      { en: "You didn't have to get me such an extravagant gift!", kr: "이렇게 비싼 선물 안 사 줘도 됐는데!" }
    ]
  },
  {
    id: "L5-812",
    word: "sketchy",
    meaning: "수상한, 미심쩍은, 엉성한",
    examples: [
      { en: "This neighborhood looks a little sketchy at night.", kr: "이 동네 밤에는 좀 수상해 보여." },
      { en: "That website seems sketchy. Don't enter your card number.", kr: "그 웹사이트 좀 수상해. 카드 번호 넣지 마." }
    ]
  },
  {
    id: "L5-442",
    word: "professionalism",
    meaning: "전문성, 프로 의식",
    examples: [
      { en: "I really appreciate your professionalism on this project.", kr: "이번 프로젝트에서 보여 주신 프로 정신에 정말 감사드려요." },
      { en: "Showing up late to a client meeting? That's a lack of professionalism.", kr: "고객 미팅에 늦게 나타나다니? 그건 프로 의식이 부족한 거지." }
    ]
  },
  {
    id: "L5-443",
    word: "futile",
    meaning: "소용없는, 헛된",
    examples: [
      { en: "It's futile to argue with him when he's angry.", kr: "걔 화났을 때 말싸움해 봤자 소용없어." },
      { en: "I tried to fix the printer, but it was futile.", kr: "프린터 고치려고 해 봤는데 헛수고였어." }
    ]
  },
  {
    id: "L5-444",
    word: "negligible",
    meaning: "무시해도 될 정도의, 미미한",
    examples: [
      { en: "The price difference is negligible, so get the nicer one.", kr: "가격 차이가 미미하니까 더 좋은 거 사." },
      { en: "The side effects are negligible, so don't worry.", kr: "부작용은 거의 없으니까 걱정하지 마세요." }
    ]
  },
  {
    id: "L5-813",
    word: "bicker",
    meaning: "(사소한 일로) 티격태격하다, 말다툼하다",
    examples: [
      { en: "My kids bicker about everything, even the TV remote.", kr: "우리 애들은 TV 리모컨까지 모든 걸로 티격태격해." },
      { en: "Can you two stop bickering for five minutes?", kr: "너희 둘 5분만이라도 그만 좀 투닥거릴래?" }
    ]
  },
  {
    id: "L5-814",
    word: "overdue",
    meaning: "기한이 지난, 연체된, 진작 했어야 할",
    examples: [
      { en: "My library books are two weeks overdue.", kr: "도서관 책 반납이 2주나 밀렸어." },
      { en: "This vacation is long overdue.", kr: "이번 휴가는 진작 갔어야 했어." }
    ]
  },
  {
    id: "L5-446",
    word: "scramble",
    meaning: "허둥지둥 서두르다, 앞다투어 ~하다, (달걀을) 휘저어 익히다",
    examples: [
      { en: "Everyone scrambled to finish the report before the deadline.", kr: "다들 마감 전에 보고서 끝내려고 허둥지둥했어." },
      { en: "Want me to scramble some eggs for breakfast?", kr: "아침으로 스크램블 에그 해 줄까?" }
    ]
  },
  {
    id: "L5-447",
    word: "troublesome",
    meaning: "골치 아픈, 성가신",
    examples: [
      { en: "This printer has been troublesome since day one.", kr: "이 프린터 처음부터 골치 아팠어." },
      { en: "I've got a troublesome client who calls me every hour.", kr: "한 시간마다 전화하는 골치 아픈 고객이 있어." }
    ]
  },
  {
    id: "L5-448",
    word: "adversity",
    meaning: "역경, 고난",
    examples: [
      { en: "She stayed positive even in the face of adversity.", kr: "걔는 역경 속에서도 긍정적이었어." },
      { en: "Going through adversity together made us closer.", kr: "같이 힘든 일을 겪으면서 우리가 더 가까워졌어." }
    ]
  },
  {
    id: "L5-449",
    word: "inquire",
    meaning: "문의하다, 묻다",
    examples: [
      { en: "Hi, I'm calling to inquire about the apartment for rent.", kr: "안녕하세요, 월세 나온 아파트 문의하려고 전화드렸어요." },
      { en: "You can inquire at the front desk.", kr: "프런트 데스크에 문의하시면 돼요." }
    ]
  },
  {
    id: "L5-450",
    word: "colossal",
    meaning: "거대한, 엄청난",
    examples: [
      { en: "Canceling the trip was a colossal waste of money.", kr: "여행 취소한 건 엄청난 돈 낭비였어." },
      { en: "I made a colossal mistake at work today.", kr: "오늘 회사에서 대형 사고 쳤어." }
    ]
  },
  {
    id: "L5-451",
    word: "curfew",
    meaning: "통행금지, 귀가 시간",
    examples: [
      { en: "My parents set a curfew of ten o'clock.", kr: "부모님이 귀가 시간을 10시로 정하셨어." },
      { en: "What time is your curfew tonight?", kr: "오늘 밤 통금 몇 시야?" }
    ]
  },
  {
    id: "L5-452",
    word: "delusion",
    meaning: "망상, 착각",
    examples: [
      { en: "He's under the delusion that he never makes mistakes.", kr: "걘 자기가 절대 실수 안 한다고 착각하고 있어." },
      { en: "Sorry, but thinking he'll change is a total delusion.", kr: "미안한데, 걔가 바뀔 거라고 생각하는 건 완전 착각이야." }
    ]
  },
  {
    id: "L5-453",
    word: "designate",
    meaning: "지정하다, 지명하다",
    examples: [
      { en: "Who's the designated driver tonight?", kr: "오늘 밤 술 안 마시고 운전할 사람 누구야?" },
      { en: "Is this area designated for smoking?", kr: "여기 흡연 구역으로 지정된 곳이에요?" }
    ]
  },
  {
    id: "L5-454",
    word: "juggle",
    meaning: "(여러 일을) 동시에 해내다, 저글링하다",
    examples: [
      { en: "It's hard to juggle work and two kids.", kr: "일이랑 애 둘을 동시에 챙기는 거 힘들어." },
      { en: "Can you juggle? My son wants to learn.", kr: "너 저글링 할 줄 알아? 우리 아들이 배우고 싶어 해." }
    ]
  },
  {
    id: "L5-455",
    word: "inclination",
    meaning: "~하고 싶은 마음, 의향, 성향",
    examples: [
      { en: "I have no inclination to go out in this rain.", kr: "이 비에 나가고 싶은 마음 전혀 없어." },
      { en: "My first inclination was to say no.", kr: "처음에는 거절하고 싶었어." }
    ]
  },
  {
    id: "L5-456",
    word: "interpersonal",
    meaning: "대인 관계의",
    examples: [
      { en: "You need good interpersonal skills for this job.", kr: "이 일엔 좋은 대인 관계 능력이 필요해." },
      { en: "Most of our problems at work are interpersonal, not technical.", kr: "회사에서 우리 문제 대부분은 기술적인 게 아니라 사람 관계 문제야." }
    ]
  },
  {
    id: "L5-457",
    word: "lessen",
    meaning: "줄이다, 완화하다",
    examples: [
      { en: "Stretching can lessen the risk of injury.", kr: "스트레칭하면 부상 위험을 줄일 수 있어." },
      { en: "Take this. It'll lessen the pain a bit.", kr: "이거 먹어. 통증이 좀 줄어들 거야." }
    ]
  },
  {
    id: "L5-458",
    word: "originate",
    meaning: "비롯되다, 유래하다, 시작되다",
    examples: [
      { en: "Where did this tradition originate?", kr: "이 전통은 어디서 유래했어?" },
      { en: "The fire originated in the kitchen, right?", kr: "불이 주방에서 시작된 거 맞지?" }
    ]
  },
  {
    id: "L5-815",
    word: "rummage",
    meaning: "뒤지다, 샅샅이 찾다",
    examples: [
      { en: "I rummaged through my bag but couldn't find my keys.", kr: "가방을 다 뒤졌는데 열쇠를 못 찾았어." },
      { en: "I had a quick rummage in the fridge, but there's nothing.", kr: "냉장고 좀 뒤져 봤는데 아무것도 없어." }
    ]
  },
  {
    id: "L5-460",
    word: "cosmopolitan",
    meaning: "국제적인, 세계적인, 다양한 문화가 섞인",
    examples: [
      { en: "Seoul feels really cosmopolitan these days.", kr: "요즘 서울은 정말 국제적인 도시 같아." },
      { en: "She's very cosmopolitan. She's lived in five countries.", kr: "걔는 진짜 세계적인 감각이 있어. 다섯 나라에서 살았거든." }
    ]
  },
  {
    id: "L5-816",
    word: "legwork",
    meaning: "발품, 사전 작업, 잡일",
    examples: [
      { en: "I did all the legwork, you just have to sign.", kr: "발품은 내가 다 팔았으니까 넌 서명만 하면 돼." },
      { en: "Finding a good apartment takes a lot of legwork.", kr: "좋은 집 구하려면 발품을 많이 팔아야 해." }
    ]
  },
  {
    id: "L5-461",
    word: "deductible",
    meaning: "공제 가능한, (보험의) 자기부담금",
    examples: [
      { en: "Is this business lunch tax deductible?", kr: "이 업무 점심은 세금 공제돼?" },
      { en: "My insurance has a five-hundred-dollar deductible.", kr: "내 보험은 자기부담금이 500달러야." }
    ]
  },
  {
    id: "L5-817",
    word: "gist",
    meaning: "요점, 요지, 대강의 내용",
    examples: [
      { en: "I didn't catch every word, but I got the gist.", kr: "다 알아듣진 못했지만 대충 무슨 말인지는 알았어." },
      { en: "Can you give me the gist of the meeting?", kr: "회의 요점만 좀 말해 줄래?" }
    ]
  },
  {
    id: "L5-462",
    word: "intrigue",
    meaning: "흥미를 불러일으키다, 음모",
    examples: [
      { en: "The title intrigued me, so I bought the book.", kr: "제목이 흥미로워서 그 책 샀어." },
      { en: "I'm intrigued. Tell me more about this new job.", kr: "궁금하다. 새 직장에 대해 더 얘기해 줘." }
    ]
  },
  {
    id: "L5-463",
    word: "plentiful",
    meaning: "풍부한, 많은",
    examples: [
      { en: "Fresh fruit is plentiful at the market in summer.", kr: "여름에는 시장에 신선한 과일이 넘쳐나." },
      { en: "Don't worry, parking is plentiful over there.", kr: "걱정 마, 거기 주차 공간 많아." }
    ]
  },
  {
    id: "L5-464",
    word: "undesirable",
    meaning: "바람직하지 않은, 원치 않는",
    examples: [
      { en: "This medicine might have some undesirable side effects.", kr: "이 약은 원치 않는 부작용이 좀 있을 수 있어요." },
      { en: "Living right next to the highway is pretty undesirable.", kr: "고속도로 바로 옆에 사는 건 꽤 별로야." }
    ]
  },
  {
    id: "L5-465",
    word: "exaggerate",
    meaning: "과장하다",
    examples: [
      { en: "Don't exaggerate. It wasn't that bad.", kr: "과장하지 마. 그렇게 나쁘진 않았어." },
      { en: "I'm not exaggerating, the line was two hours long!", kr: "과장 아니고, 줄이 두 시간짜리였어!" }
    ]
  },
  {
    id: "L5-466",
    word: "ingenious",
    meaning: "기발한, 독창적인",
    examples: [
      { en: "What an ingenious way to save space!", kr: "공간을 아끼는 정말 기발한 방법이네!" },
      { en: "Who came up with this idea? It's ingenious!", kr: "이 아이디어 누가 냈어? 완전 기발해!" }
    ]
  },
  {
    id: "L5-818",
    word: "smitten",
    meaning: "홀딱 반한",
    examples: [
      { en: "He's totally smitten with his new girlfriend.", kr: "걔 새 여자친구한테 완전 푹 빠졌어." },
      { en: "I was smitten the moment I saw that puppy.", kr: "그 강아지 보는 순간 반해 버렸어." }
    ]
  },
  {
    id: "L5-467",
    word: "outspoken",
    meaning: "거침없이 말하는, 솔직한",
    examples: [
      { en: "My uncle is very outspoken about politics at dinner.", kr: "우리 삼촌은 저녁 식사 때 정치에 대해 거침없이 말씀하셔." },
      { en: "She's outspoken, but she's usually right.", kr: "걔는 할 말은 다 하는 편인데, 보통 맞는 말이야." }
    ]
  },
  {
    id: "L5-468",
    word: "unavoidable",
    meaning: "불가피한, 피할 수 없는",
    examples: [
      { en: "Some delays are unavoidable during the holidays.", kr: "연휴 기간에는 어느 정도 지연이 불가피해." },
      { en: "Sorry I'm late. It was unavoidable.", kr: "늦어서 미안. 어쩔 수 없었어." }
    ]
  },
  {
    id: "L5-819",
    word: "smug",
    meaning: "우쭐대는, 잘난 체하는",
    examples: [
      { en: "Wipe that smug look off your face.", kr: "그 우쭐한 표정 좀 집어치워." },
      { en: "He was so smug after winning the bet.", kr: "걔 내기 이기고 엄청 우쭐대더라." }
    ]
  },
  {
    id: "L5-470",
    word: "divisive",
    meaning: "분열을 일으키는, 의견이 갈리는",
    examples: [
      { en: "Pineapple on pizza is a surprisingly divisive topic.", kr: "피자에 파인애플은 의외로 의견이 갈리는 주제야." },
      { en: "The movie's ending was really divisive among fans.", kr: "그 영화 결말은 팬들 사이에서 의견이 엄청 갈렸어." }
    ]
  },
  {
    id: "L5-471",
    word: "hindsight",
    meaning: "지나고 나서 깨달음, 뒤늦은 깨달음",
    examples: [
      { en: "In hindsight, I should have saved more money.", kr: "지나고 보니 돈을 더 모아 둘걸 그랬어." },
      { en: "Hindsight is twenty-twenty, right?", kr: "원래 지나고 나면 다 보이는 법이잖아, 그치?" }
    ]
  },
  {
    id: "L5-472",
    word: "ludicrous",
    meaning: "터무니없는, 어처구니없는",
    examples: [
      { en: "Ten dollars for a bottle of water? That's ludicrous!", kr: "물 한 병에 10달러? 말도 안 돼!" },
      { en: "That's a ludicrous excuse for missing the meeting.", kr: "회의 빠진 핑계치고는 어처구니없다." }
    ]
  },
  {
    id: "L5-473",
    word: "perseverance",
    meaning: "인내, 끈기",
    examples: [
      { en: "Learning a language takes a lot of perseverance.", kr: "언어를 배우는 데는 끈기가 많이 필요해." },
      { en: "Her perseverance finally paid off with a promotion.", kr: "걔 끈기가 결국 승진으로 보상받았어." }
    ]
  },
  {
    id: "L5-474",
    word: "pricey",
    meaning: "값비싼, 비싼",
    examples: [
      { en: "This place is a bit pricey, but the food is amazing.", kr: "여기 좀 비싸긴 한데 음식이 끝내줘." },
      { en: "Hotels near the beach get pricey in summer.", kr: "해변 근처 호텔은 여름에 비싸져." }
    ]
  },
  {
    id: "L5-475",
    word: "sincerity",
    meaning: "진심, 성실",
    examples: [
      { en: "I never doubted the sincerity of his apology.", kr: "난 걔 사과가 진심이라는 걸 의심한 적 없어." },
      { en: "You can hear the sincerity in her voice.", kr: "걔 목소리에서 진심이 느껴져." }
    ]
  },
  {
    id: "L5-476",
    word: "undeniable",
    meaning: "부인할 수 없는, 명백한",
    examples: [
      { en: "Her talent for design is undeniable.", kr: "걔 디자인 재능은 부인할 수 없어." },
      { en: "There's an undeniable chemistry between those two.", kr: "그 둘 사이엔 부인할 수 없는 케미가 있어." }
    ]
  },
  {
    id: "L5-477",
    word: "exponential",
    meaning: "기하급수적인",
    examples: [
      { en: "Our followers have grown at an exponential rate.", kr: "우리 팔로워가 기하급수적으로 늘었어." },
      { en: "The app has seen exponential growth this year.", kr: "그 앱은 올해 기하급수적으로 성장했어." }
    ]
  },
  {
    id: "L5-478",
    word: "grudge",
    meaning: "원한, 앙심",
    examples: [
      { en: "Is he still holding a grudge against his old boss?", kr: "걔 아직도 전 상사한테 앙심 품고 있어?" },
      { en: "Life's too short to hold grudges.", kr: "원한 품고 살기엔 인생이 너무 짧아." }
    ]
  },
  {
    id: "L5-820",
    word: "sugarcoat",
    meaning: "좋게 포장하다, 돌려 말하다",
    examples: [
      { en: "Just tell me the truth, don't sugarcoat it.", kr: "좋게 포장하지 말고 그냥 사실대로 말해." },
      { en: "I'm not going to sugarcoat this, it's bad.", kr: "돌려 말하지 않을게, 상황 안 좋아." }
    ]
  },
  {
    id: "L5-480",
    word: "optimize",
    meaning: "최적화하다",
    examples: [
      { en: "We need to optimize the website for phones.", kr: "웹사이트를 휴대폰에 맞게 최적화해야 해요." },
      { en: "This app helps me optimize my daily schedule.", kr: "이 앱으로 하루 일정을 최적화하고 있어." }
    ]
  },
  {
    id: "L5-821",
    word: "gutsy",
    meaning: "배짱 있는, 대담한",
    examples: [
      { en: "That was a gutsy move, quitting your job like that.", kr: "그렇게 회사 그만둔 거 진짜 배짱 있었다." },
      { en: "I admire how gutsy she is.", kr: "난 걔의 그 대담함이 존경스러워." }
    ]
  },
  {
    id: "L5-481",
    word: "persuasion",
    meaning: "설득, 설득력",
    examples: [
      { en: "After a little persuasion, she agreed to come.", kr: "조금 설득했더니 걔가 오겠다고 했어." },
      { en: "Good salespeople are masters of persuasion.", kr: "잘 파는 영업사원은 설득의 달인이야." }
    ]
  },
  {
    id: "L5-482",
    word: "precedence",
    meaning: "(take precedence) 우선하다, 우선, 우선권",
    examples: [
      { en: "Family takes precedence over work for me.", kr: "나한테는 일보다 가족이 우선이야." },
      { en: "Safety always takes precedence over speed here.", kr: "여기서는 항상 속도보다 안전이 우선이에요." }
    ]
  },
  {
    id: "L5-483",
    word: "forfeit",
    meaning: "(벌로) 잃다, 몰수당하다, 기권하다",
    examples: [
      { en: "If you cancel late, you'll forfeit your deposit.", kr: "늦게 취소하시면 보증금은 돌려받지 못해요." },
      { en: "Our team had to forfeit because only four people showed up.", kr: "네 명밖에 안 와서 우리 팀이 기권해야 했어." }
    ]
  },
  {
    id: "L5-484",
    word: "redundancy",
    meaning: "불필요한 중복, (영국) 정리해고",
    examples: [
      { en: "Let's cut some redundancy from the report.", kr: "보고서에서 중복되는 부분 좀 줄이자." },
      { en: "My dad got redundancy pay when the factory closed.", kr: "공장 문 닫았을 때 우리 아빠는 정리해고 수당을 받으셨어." }
    ]
  },
  {
    id: "L5-485",
    word: "treacherous",
    meaning: "위험한, 믿을 수 없는, 배신하는",
    examples: [
      { en: "The roads are treacherous this morning, so drive carefully.", kr: "오늘 아침 길이 위험하니까 조심해서 운전해." },
      { en: "That hiking trail gets treacherous after it rains.", kr: "그 등산로는 비 오고 나면 위험해져." }
    ]
  },
  {
    id: "L5-486",
    word: "uplifting",
    meaning: "기분을 북돋아 주는, 희망을 주는",
    examples: [
      { en: "I need some uplifting music after this week.", kr: "이번 주 지나고 나니 기분 좋아지는 음악이 필요해." },
      { en: "It's such an uplifting movie. You'll love it.", kr: "진짜 희망을 주는 영화야. 너 좋아할 거야." }
    ]
  }
];

const wordsLevel5_Part2 = [
  {
    id: "L5-822",
    word: "unwind",
    meaning: "긴장을 풀다, 쉬다",
    examples: [
      { en: "I like to unwind with a hot bath after work.", kr: "퇴근하고 뜨거운 물에 목욕하면서 쉬는 걸 좋아해." },
      { en: "What do you do to unwind on weekends?", kr: "주말에 긴장 풀려고 뭐 해?" }
    ]
  },
  {
    id: "L5-488",
    word: "cohesive",
    meaning: "결속력 있는, 잘 어우러지는, 일관된",
    examples: [
      { en: "Our team is small but really cohesive.", kr: "우리 팀은 작지만 진짜 똘똘 뭉쳐 있어." },
      { en: "The colors in your living room look really cohesive.", kr: "너희 거실 색깔들 진짜 잘 어우러진다." }
    ]
  },
  {
    id: "L5-823",
    word: "hoard",
    meaning: "사재기하다, 쌓아두다",
    examples: [
      { en: "Why do you hoard so many shopping bags?", kr: "쇼핑백을 왜 그렇게 쌓아둬?" },
      { en: "People started hoarding toilet paper again.", kr: "사람들이 또 휴지를 사재기하기 시작했어." }
    ]
  },
  {
    id: "L5-490",
    word: "intimidate",
    meaning: "겁주다, 주눅 들게 하다, 위협하다",
    examples: [
      { en: "Don't let the size of the project intimidate you.", kr: "프로젝트 규모에 겁먹지 마." },
      { en: "His deep voice intimidates a lot of people.", kr: "걔 굵은 목소리에 많은 사람들이 주눅 들어." }
    ]
  },
  {
    id: "L5-491",
    word: "lousy",
    meaning: "형편없는, 엉망인",
    examples: [
      { en: "The weather was lousy our whole vacation.", kr: "휴가 내내 날씨가 엉망이었어." },
      { en: "I feel lousy today, so I'm staying home.", kr: "오늘 몸이 영 안 좋아서 집에 있을래." }
    ]
  },
  {
    id: "L5-492",
    word: "unethical",
    meaning: "비윤리적인",
    examples: [
      { en: "Isn't it unethical to read her private messages?", kr: "걔 개인 메시지 읽는 거 비윤리적이지 않아?" },
      { en: "I quit because my boss asked me to do something unethical.", kr: "상사가 비윤리적인 일을 시켜서 그만뒀어." }
    ]
  },
  {
    id: "L5-493",
    word: "attentive",
    meaning: "세심한, 배려하는, 주의 깊은",
    examples: [
      { en: "The staff at that hotel were super attentive.", kr: "그 호텔 직원들 엄청 세심했어." },
      { en: "He's very attentive. He always remembers what I like.", kr: "그 사람은 정말 자상해. 내가 좋아하는 걸 항상 기억해." }
    ]
  },
  {
    id: "L5-494",
    word: "ballpark",
    meaning: "대략적인 (수치), 야구장",
    examples: [
      { en: "Can you give me a ballpark figure for the repairs?", kr: "수리비 대략 얼마 나올지 알려 주실 수 있어요?" },
      { en: "We took the kids to the ballpark on Saturday.", kr: "토요일에 애들 데리고 야구장 갔어." }
    ]
  },
  {
    id: "L5-495",
    word: "errand",
    meaning: "심부름, 볼일",
    examples: [
      { en: "I have a few errands to run this afternoon.", kr: "오늘 오후에 볼일이 몇 개 있어." },
      { en: "Can you run an errand for me and grab some milk?", kr: "심부름 좀 해서 우유 좀 사 올래?" }
    ]
  },
  {
    id: "L5-496",
    word: "exhaustive",
    meaning: "철저한, 빠짐없는",
    examples: [
      { en: "This isn't an exhaustive list, just a few ideas.", kr: "이게 전부는 아니고, 그냥 아이디어 몇 개야." },
      { en: "We did an exhaustive search but couldn't find my ring.", kr: "샅샅이 찾아봤는데 내 반지를 못 찾았어." }
    ]
  },
  {
    id: "L5-824",
    word: "devour",
    meaning: "게걸스럽게 먹다, 순식간에 읽어치우다",
    examples: [
      { en: "The kids devoured the whole pizza in minutes.", kr: "애들이 피자 한 판을 몇 분 만에 해치웠어." },
      { en: "I devoured that book in one night.", kr: "그 책 하룻밤 만에 다 읽어 버렸어." }
    ]
  },
  {
    id: "L5-497",
    word: "fruitful",
    meaning: "생산적인, 유익한, 성과가 있는",
    examples: [
      { en: "Thanks, that was a really fruitful meeting.", kr: "감사합니다, 정말 유익한 회의였어요." },
      { en: "Was your business trip to Busan fruitful?", kr: "부산 출장 성과 있었어?" }
    ]
  },
  {
    id: "L5-113",
    word: "inept",
    meaning: "서툰, 무능한",
    examples: [
      { en: "I'm totally inept at small talk with strangers.", kr: "난 모르는 사람이랑 잡담하는 거 완전 서툴러." },
      { en: "The customer service was so inept that I gave up.", kr: "고객 서비스가 너무 엉망이라 포기했어." }
    ]
  },
  {
    id: "L5-114",
    word: "infamous",
    meaning: "악명 높은",
    examples: [
      { en: "This intersection is infamous for traffic jams.", kr: "이 교차로는 교통 체증으로 악명 높아." },
      { en: "Our boss is infamous for his endless meetings.", kr: "우리 사장님은 끝없는 회의로 악명 높아." }
    ]
  },
  {
    id: "L5-498",
    word: "hastily",
    meaning: "급히, 서둘러, 성급하게",
    examples: [
      { en: "He hastily packed his bag and ran for the bus.", kr: "걔 급하게 가방 싸서 버스 타러 뛰어갔어." },
      { en: "Let's not decide anything too hastily.", kr: "너무 성급하게 아무것도 결정하지 말자." }
    ]
  },
  {
    id: "L5-499",
    word: "reassure",
    meaning: "안심시키다",
    examples: [
      { en: "The doctor reassured me it was nothing serious.", kr: "의사가 별거 아니라고 날 안심시켜 줬어." },
      { en: "I just need you to reassure me everything's okay.", kr: "그냥 다 괜찮다고 날 안심시켜 줬으면 좋겠어." }
    ]
  },
  {
    id: "L5-117",
    word: "insatiable",
    meaning: "채울 수 없는, 끝없는",
    examples: [
      { en: "My kids have an insatiable appetite for snacks.", kr: "우리 애들은 간식 욕심이 끝이 없어." },
      { en: "She has an insatiable curiosity about everything.", kr: "걔는 모든 것에 호기심이 끝이 없어." }
    ]
  },
  {
    id: "L5-500",
    word: "omission",
    meaning: "누락, 빠뜨림",
    examples: [
      { en: "Not telling me is still a lie of omission, you know.", kr: "나한테 말 안 한 것도 결국 숨긴 거짓말이야, 알지?" },
      { en: "Was that an honest omission, or did he lie?", kr: "그게 그냥 실수로 빠뜨린 거야, 아니면 걔가 거짓말한 거야?" }
    ]
  },
  {
    id: "L5-825",
    word: "queasy",
    meaning: "메스꺼운, 속이 울렁거리는",
    examples: [
      { en: "I feel a little queasy after that boat ride.", kr: "배 타고 나니 속이 좀 메스꺼워." },
      { en: "Roller coasters make me queasy.", kr: "롤러코스터 타면 속이 울렁거려." }
    ]
  },
  {
    id: "L5-826",
    word: "tinker",
    meaning: "이것저것 만지다, 손보다",
    examples: [
      { en: "He loves tinkering with old cars.", kr: "걔는 오래된 차 만지작거리는 걸 좋아해." },
      { en: "I tinkered with the settings and now it works.", kr: "설정 이것저것 만져 봤더니 이제 돼." }
    ]
  },
  {
    id: "L5-827",
    word: "thermostat",
    meaning: "온도 조절기",
    examples: [
      { en: "Can you turn up the thermostat? It's freezing in here.", kr: "온도 좀 올려 줄래? 여기 너무 추워." },
      { en: "Who keeps messing with the thermostat?", kr: "누가 자꾸 온도 조절기를 건드려?" }
    ]
  },
  {
    id: "L5-828",
    word: "carpool",
    meaning: "카풀하다, 차를 함께 타다, 카풀",
    examples: [
      { en: "Do you want to carpool to work tomorrow?", kr: "내일 출근할 때 카풀할래?" },
      { en: "We started a carpool with our neighbors for school.", kr: "이웃들이랑 등교 카풀을 시작했어." }
    ]
  },
  {
    id: "L5-123",
    word: "intricate",
    meaning: "복잡한, 정교한, 뒤얽힌",
    examples: [
      { en: "Look at the intricate details on this old clock.", kr: "이 오래된 시계의 정교한 디테일 좀 봐." },
      { en: "The plot was so intricate that I got lost halfway.", kr: "줄거리가 너무 복잡해서 중간에 헷갈렸어." }
    ]
  },
  {
    id: "L5-503",
    word: "proficient",
    meaning: "능숙한, 숙달된",
    examples: [
      { en: "Are you proficient in Excel?", kr: "엑셀 잘 다루세요?" },
      { en: "She got proficient at piano in just two years.", kr: "걔 2년 만에 피아노를 능숙하게 치게 됐어." }
    ]
  },
  {
    id: "L5-504",
    word: "adamant",
    meaning: "단호한, 확고한",
    examples: [
      { en: "She was adamant that she had locked the door.", kr: "걔는 문을 잠갔다고 단호하게 말했어." },
      { en: "My dad is adamant about not getting a dog.", kr: "우리 아빠는 개 안 키운다고 완강하셔." }
    ]
  },
  {
    id: "L5-505",
    word: "interchangeable",
    meaning: "서로 바꿔 쓸 수 있는, 호환되는",
    examples: [
      { en: "Are these two words interchangeable?", kr: "이 두 단어 서로 바꿔 써도 돼?" },
      { en: "The chargers are interchangeable, so just use mine.", kr: "충전기 서로 호환되니까 그냥 내 거 써." }
    ]
  },
  {
    id: "L5-829",
    word: "quirky",
    meaning: "별난, 독특한, 개성 있는",
    examples: [
      { en: "I love this cafe. It's small and quirky.", kr: "이 카페 너무 좋아. 작고 개성 있어." },
      { en: "My roommate has some quirky habits.", kr: "내 룸메이트는 좀 별난 습관이 있어." }
    ]
  },
  {
    id: "L5-507",
    word: "tweak",
    meaning: "약간 수정하다, 미세 조정",
    examples: [
      { en: "Let me tweak the slides before the meeting.", kr: "회의 전에 슬라이드 좀 손볼게." },
      { en: "A small tweak to the recipe made it way better.", kr: "레시피를 살짝 바꿨더니 훨씬 맛있어졌어." }
    ]
  },
  {
    id: "L5-508",
    word: "impulsive",
    meaning: "충동적인",
    examples: [
      { en: "I regret my impulsive decision to buy those shoes.", kr: "그 신발을 충동적으로 산 거 후회돼." },
      { en: "He's smart but way too impulsive with money.", kr: "걔는 똑똑한데 돈 쓰는 게 너무 충동적이야." }
    ]
  },
  {
    id: "L5-509",
    word: "knack",
    meaning: "요령, 재주",
    examples: [
      { en: "She has a knack for making people feel comfortable.", kr: "걔는 사람들을 편하게 해 주는 재주가 있어." },
      { en: "It's easy once you get the knack of it.", kr: "요령만 익히면 쉬워." }
    ]
  },
  {
    id: "L5-510",
    word: "nuanced",
    meaning: "미묘한 차이를 반영한, 섬세한",
    examples: [
      { en: "It's more nuanced than you think.", kr: "그건 네 생각보다 미묘한 문제야." },
      { en: "I liked her nuanced performance in that movie.", kr: "그 영화에서 그 배우의 섬세한 연기가 좋았어." }
    ]
  },
  {
    id: "L5-511",
    word: "outage",
    meaning: "(전기·서비스의) 정전, 중단",
    examples: [
      { en: "Did you lose power during the outage last night?", kr: "어젯밤 정전 때 너네도 전기 나갔어?" },
      { en: "There's an internet outage in our whole building.", kr: "우리 건물 전체에 인터넷이 끊겼어." }
    ]
  },
  {
    id: "L5-512",
    word: "preoccupied",
    meaning: "~에 정신이 팔린, 몰두한",
    examples: [
      { en: "Sorry, I was preoccupied and missed your call.", kr: "미안, 딴 데 정신 팔려서 전화 못 받았어." },
      { en: "You seem preoccupied today. Everything okay?", kr: "너 오늘 정신이 딴 데 가 있는 것 같아. 괜찮아?" }
    ]
  },
  {
    id: "L5-513",
    word: "revoke",
    meaning: "취소하다, 철회하다, 박탈하다",
    examples: [
      { en: "His license was revoked after the accident.", kr: "사고 후에 걔 면허가 취소됐어." },
      { en: "They revoked my access to the shared folder.", kr: "공유 폴더 접근 권한이 취소됐어." }
    ]
  },
  {
    id: "L5-514",
    word: "dependable",
    meaning: "믿을 수 있는, 신뢰할 만한",
    examples: [
      { en: "We need a dependable car for the road trip.", kr: "자동차 여행 가려면 믿을 만한 차가 필요해." },
      { en: "Mark is the most dependable guy on our team.", kr: "마크는 우리 팀에서 제일 믿음직한 사람이야." }
    ]
  },
  {
    id: "L5-515",
    word: "manipulative",
    meaning: "조종하려 드는, 교묘하게 이용하는",
    examples: [
      { en: "She finally realized her ex was manipulative.", kr: "걔는 전 애인이 자기를 조종하려 했다는 걸 마침내 깨달았어." },
      { en: "Don't be so manipulative. Just ask me directly.", kr: "그렇게 사람 조종하려 들지 말고 그냥 직접 물어봐." }
    ]
  },
  {
    id: "L5-830",
    word: "insomnia",
    meaning: "불면증",
    examples: [
      { en: "I've had insomnia since I started this new job.", kr: "새 직장 다니고 나서부터 불면증이 생겼어." },
      { en: "Coffee at night gives me insomnia.", kr: "밤에 커피 마시면 잠이 안 와." }
    ]
  },
  {
    id: "L5-831",
    word: "squabble",
    meaning: "티격태격하다, 말다툼",
    examples: [
      { en: "My kids squabble over everything.", kr: "우리 애들은 모든 걸로 티격태격해." },
      { en: "It was just a silly squabble, we're fine now.", kr: "그냥 별거 아닌 말다툼이었어, 이제 괜찮아." }
    ]
  },
  {
    id: "L5-517",
    word: "derogatory",
    meaning: "경멸적인, 비하하는",
    examples: [
      { en: "Please don't use derogatory words like that.", kr: "그런 비하하는 말 쓰지 마." },
      { en: "He made a derogatory comment about her accent.", kr: "걔가 그 사람 억양을 비하하는 말을 했어." }
    ]
  },
  {
    id: "L5-518",
    word: "drawback",
    meaning: "단점, 문제점",
    examples: [
      { en: "The only drawback of this apartment is the noise.", kr: "이 아파트의 유일한 단점은 소음이야." },
      { en: "What are the drawbacks of working from home?", kr: "재택근무의 단점은 뭐야?" }
    ]
  },
  {
    id: "L5-519",
    word: "relentlessly",
    meaning: "끈질기게, 가차 없이",
    examples: [
      { en: "It rained relentlessly for three days.", kr: "사흘 동안 쉬지 않고 비가 왔어." },
      { en: "My little brother teased me relentlessly about it.", kr: "남동생이 그걸로 나를 끈질기게 놀렸어." }
    ]
  },
  {
    id: "L5-520",
    word: "negotiable",
    meaning: "협상의 여지가 있는",
    examples: [
      { en: "Is the price negotiable?", kr: "가격 협상 가능한가요?" },
      { en: "Bedtime is not negotiable, okay?", kr: "자는 시간은 타협 없어, 알았지?" }
    ]
  },
  {
    id: "L5-521",
    word: "unsolicited",
    meaning: "요청하지 않은, 원치 않는",
    examples: [
      { en: "I'm tired of unsolicited advice from my relatives.", kr: "친척들이 원하지도 않는 조언 하는 거 지겨워." },
      { en: "Sorry for the unsolicited opinion, but I think you should take the job.", kr: "묻지도 않았는데 의견 내서 미안한데, 그 일 하는 게 좋을 것 같아." }
    ]
  },
  {
    id: "L5-522",
    word: "groundwork",
    meaning: "기초 작업, 토대",
    examples: [
      { en: "Let's do the groundwork before we pitch to investors.", kr: "투자자들한테 발표하기 전에 기초 작업부터 하자." },
      { en: "I've laid the groundwork, so the rest should be easy.", kr: "기초 작업은 내가 해 놨으니까 나머지는 쉬울 거야." }
    ]
  },
  {
    id: "L5-523",
    word: "foresee",
    meaning: "예견하다, 내다보다",
    examples: [
      { en: "Do you foresee any problems with the new schedule?", kr: "새 일정에 무슨 문제가 있을 것 같아요?" },
      { en: "Nobody could have foreseen this traffic.", kr: "이렇게 차가 막힐 줄 아무도 몰랐지." }
    ]
  },
  {
    id: "L5-524",
    word: "rapport",
    meaning: "친밀한 관계, 유대감",
    examples: [
      { en: "She's great at building rapport with new clients.", kr: "걔는 새 고객이랑 친해지는 데 탁월해." },
      { en: "We have a good rapport, so we work well together.", kr: "우리는 관계가 좋아서 같이 일이 잘 돼." }
    ]
  },
  {
    id: "L5-525",
    word: "unforeseen",
    meaning: "예상치 못한, 뜻밖의",
    examples: [
      { en: "Due to unforeseen circumstances, the concert is canceled.", kr: "예상치 못한 사정으로 콘서트가 취소됐대." },
      { en: "Always keep some cash for unforeseen expenses.", kr: "예상치 못한 지출에 대비해서 현금을 좀 갖고 있어." }
    ]
  },
  {
    id: "L5-526",
    word: "deteriorate",
    meaning: "악화되다, 나빠지다",
    examples: [
      { en: "Her health started to deteriorate after the surgery.", kr: "수술 후에 그분 건강이 나빠지기 시작했어." },
      { en: "The weather's deteriorating, so let's head back.", kr: "날씨가 나빠지고 있으니까 돌아가자." }
    ]
  },
  {
    id: "L5-527",
    word: "complacency",
    meaning: "안주, 자만, 자기만족",
    examples: [
      { en: "Don't let complacency set in just because we won.", kr: "이겼다고 안주하지 마." },
      { en: "Complacency is the biggest danger after a big win.", kr: "크게 이긴 뒤에 제일 위험한 게 자만이야." }
    ]
  },
  {
    id: "L5-528",
    word: "procrastination",
    meaning: "미루는 버릇, 꾸물거림",
    examples: [
      { en: "Procrastination is my biggest problem when I study.", kr: "공부할 때 내 최대 문제는 미루는 버릇이야." },
      { en: "Is this procrastination, or are you actually taking a break?", kr: "이거 미루는 거야, 아니면 진짜 쉬는 거야?" }
    ]
  },
  {
    id: "L5-529",
    word: "ambivalent",
    meaning: "마음이 반반인, 애매한 태도의, 양면 감정의",
    examples: [
      { en: "I feel ambivalent about moving to a new city.", kr: "새 도시로 이사 가는 거 마음이 반반이야." },
      { en: "I'm kind of ambivalent about going to the reunion.", kr: "동창회 가는 거 좀 갈까 말까 해." }
    ]
  },
  {
    id: "L5-530",
    word: "contingency",
    meaning: "만일의 사태, 비상 대책",
    examples: [
      { en: "We need a contingency plan in case it rains.", kr: "비 올 경우를 대비해서 비상 계획이 필요해." },
      { en: "Always keep a contingency fund for car repairs.", kr: "차 수리에 대비해서 비상금을 항상 모아 둬." }
    ]
  },
  {
    id: "L5-531",
    word: "insistence",
    meaning: "고집, 강한 주장",
    examples: [
      { en: "At my mom's insistence, I finally went to the doctor.", kr: "엄마가 하도 우겨서 결국 병원에 갔어." },
      { en: "Why the insistence on paying for everything?", kr: "왜 다 네가 내겠다고 고집이야?" }
    ]
  },
  {
    id: "L5-532",
    word: "preferable",
    meaning: "더 나은, 바람직한",
    examples: [
      { en: "A morning meeting would be preferable for me.", kr: "저는 오전 회의가 더 좋아요." },
      { en: "Taking the train is preferable to driving in this traffic.", kr: "이렇게 막힐 땐 운전보다 기차 타는 게 나아." }
    ]
  },
  {
    id: "L5-533",
    word: "questionnaire",
    meaning: "설문지",
    examples: [
      { en: "Please fill out this questionnaire before your appointment.", kr: "진료 전에 이 설문지 작성해 주세요." },
      { en: "Do I have to fill out the whole questionnaire?", kr: "설문지 전부 다 작성해야 해요?" }
    ]
  },
  {
    id: "L5-832",
    word: "snag",
    meaning: "문제, 걸림돌, 운 좋게 잡다",
    examples: [
      { en: "We hit a small snag with the booking.", kr: "예약에 작은 문제가 생겼어." },
      { en: "I snagged the last two tickets!", kr: "마지막 표 두 장 겨우 잡았어!" }
    ]
  },
  {
    id: "L5-535",
    word: "discreet",
    meaning: "신중한, 조심스러운, 티 나지 않는",
    examples: [
      { en: "Please be discreet. Nobody else knows yet.", kr: "아직 아무도 모르니까 조용히 해 줘." },
      { en: "Don't worry, I'll be discreet.", kr: "걱정 마, 티 안 낼게." }
    ]
  },
  {
    id: "L5-833",
    word: "belated",
    meaning: "뒤늦은, 늦은",
    examples: [
      { en: "Happy belated birthday! Sorry I missed it.", kr: "늦었지만 생일 축하해! 못 챙겨서 미안." },
      { en: "I sent her a belated thank-you card.", kr: "걔한테 늦게나마 감사 카드 보냈어." }
    ]
  },
  {
    id: "L5-537",
    word: "mildly",
    meaning: "약간, 다소, 순하게",
    examples: [
      { en: "I was mildly surprised he showed up on time.", kr: "걔가 제시간에 와서 살짝 놀랐어." },
      { en: "To put it mildly, the meeting didn't go well.", kr: "좋게 말해서, 회의가 잘 안 풀렸어." }
    ]
  },
  {
    id: "L5-538",
    word: "nutshell",
    meaning: "(in a nutshell) 요컨대, 간단히 말해",
    examples: [
      { en: "In a nutshell, we need more time and money.", kr: "요컨대 우리는 시간이랑 돈이 더 필요해." },
      { en: "Can you explain the plan in a nutshell?", kr: "그 계획 간단히 설명해 줄 수 있어?" }
    ]
  },
  {
    id: "L5-161",
    word: "palpable",
    meaning: "확연한, 뚜렷이 느껴지는",
    examples: [
      { en: "The tension in the room was palpable.", kr: "방 안에 긴장감이 확 느껴졌어." },
      { en: "Her excitement was palpable when she got the offer.", kr: "합격 연락 받았을 때 걔가 들뜬 게 확 느껴졌어." }
    ]
  },
  {
    id: "L5-539",
    word: "poised",
    meaning: "침착한, ~할 태세를 갖춘",
    examples: [
      { en: "She stayed calm and poised during the interview.", kr: "걔는 면접 내내 차분하고 침착했어." },
      { en: "Our team is poised to win the championship this year.", kr: "우리 팀이 올해 우승할 기세야." }
    ]
  },
  {
    id: "L5-540",
    word: "stereotype",
    meaning: "고정관념, 정형화된 이미지",
    examples: [
      { en: "Not all engineers fit the stereotype of being shy.", kr: "모든 엔지니어가 수줍음 많다는 고정관념에 들어맞는 건 아니야." },
      { en: "That's such a lazy stereotype.", kr: "그거 진짜 뻔한 고정관념이다." }
    ]
  },
  {
    id: "L5-834",
    word: "squeamish",
    meaning: "비위가 약한, (피·벌레 등을) 잘 못 보는",
    examples: [
      { en: "I'm a bit squeamish about blood, so I can't watch this.", kr: "나 피 보는 거에 좀 약해서 이거 못 보겠어." },
      { en: "Don't be so squeamish. It's just a little spider.", kr: "그렇게 질겁하지 마. 그냥 작은 거미야." }
    ]
  },
  {
    id: "L5-542",
    word: "upbringing",
    meaning: "양육, 가정교육, 성장 배경",
    examples: [
      { en: "Her strict upbringing made her very disciplined.", kr: "엄격한 가정교육 덕분에 걔는 자기 관리가 철저해." },
      { en: "We had very different upbringings, but we get along great.", kr: "우리는 자란 환경이 완전 다르지만 정말 잘 맞아." }
    ]
  },
  {
    id: "L5-543",
    word: "betray",
    meaning: "배신하다, (감정·비밀을) 드러내다",
    examples: [
      { en: "I can't believe my best friend betrayed me.", kr: "제일 친한 친구가 날 배신하다니 믿을 수가 없어." },
      { en: "His face betrayed how nervous he was.", kr: "걔 얼굴에 긴장한 게 다 드러났어." }
    ]
  },
  {
    id: "L5-544",
    word: "compliant",
    meaning: "(규정을) 준수하는, 따르는",
    examples: [
      { en: "Is our website compliant with the new privacy rules?", kr: "우리 웹사이트가 새 개인정보 규정을 준수하고 있나요?" },
      { en: "Don't worry, all our products are fully compliant with safety standards.", kr: "걱정 마세요, 저희 제품은 전부 안전 기준을 완벽히 준수해요." }
    ]
  },
  {
    id: "L5-545",
    word: "facade",
    meaning: "겉모습, 허울, (건물의) 정면",
    examples: [
      { en: "Behind her cheerful facade, she's really stressed.", kr: "밝은 겉모습 뒤로 걔 사실 엄청 스트레스 받고 있어." },
      { en: "The hotel's old stone facade is beautiful.", kr: "그 호텔의 오래된 석조 외관이 정말 예뻐." }
    ]
  },
  {
    id: "L5-546",
    word: "misguided",
    meaning: "잘못 판단한, 잘못된",
    examples: [
      { en: "It was a misguided attempt to save money.", kr: "돈 아끼려다 잘못 판단한 거였어." },
      { en: "I think his loyalty to that company is misguided.", kr: "그 회사에 대한 걔 충성심은 잘못된 것 같아." }
    ]
  },
  {
    id: "L5-547",
    word: "override",
    meaning: "(결정 등을) 뒤집다, 무시하다, ~보다 우선하다",
    examples: [
      { en: "The manager can override the price if it's wrong.", kr: "가격이 틀렸으면 매니저가 수정해 줄 수 있어요." },
      { en: "Don't let your emotions override common sense.", kr: "감정이 상식을 앞서게 두지 마." }
    ]
  },
  {
    id: "L5-548",
    word: "paranoia",
    meaning: "편집증, 과도한 의심",
    examples: [
      { en: "There's a lot of paranoia about layoffs in the office.", kr: "사무실에 정리해고 걱정 때문에 다들 엄청 예민해." },
      { en: "Checking the lock five times is just paranoia.", kr: "자물쇠를 다섯 번 확인하는 건 그냥 과민한 거야." }
    ]
  },
  {
    id: "L5-549",
    word: "unnoticed",
    meaning: "눈에 띄지 않는, 아무도 모르는",
    examples: [
      { en: "The mistake went unnoticed until the client called.", kr: "고객이 전화할 때까지 아무도 그 실수를 몰랐어." },
      { en: "I slipped out of the party unnoticed.", kr: "아무도 모르게 파티에서 빠져나왔어." }
    ]
  },
  {
    id: "L5-550",
    word: "visionary",
    meaning: "선견지명이 있는, 비전 있는, 선각자",
    examples: [
      { en: "Our founder was a real visionary.", kr: "우리 창업자는 진짜 선견지명이 있는 사람이었어." },
      { en: "That's a pretty visionary idea for a small company.", kr: "작은 회사치고 꽤 비전 있는 아이디어네." }
    ]
  },
  {
    id: "L5-551",
    word: "anonymously",
    meaning: "익명으로",
    examples: [
      { en: "You can submit your feedback anonymously.", kr: "피드백은 익명으로 제출하셔도 돼요." },
      { en: "Someone anonymously paid for our dinner!", kr: "누가 익명으로 우리 저녁값을 내 줬어!" }
    ]
  },
  {
    id: "L5-835",
    word: "muggy",
    meaning: "후덥지근한, 습하고 더운",
    examples: [
      { en: "It's so muggy today. I'm sweating already.", kr: "오늘 너무 후덥지근해. 벌써 땀 나." },
      { en: "I hate muggy summer nights.", kr: "후덥지근한 여름밤은 정말 싫어." }
    ]
  },
  {
    id: "L5-553",
    word: "contemplate",
    meaning: "곰곰이 생각하다, 고려하다",
    examples: [
      { en: "Have you ever contemplated quitting your job?", kr: "회사 그만둘까 고민해 본 적 있어?" },
      { en: "I'm contemplating a move to the suburbs.", kr: "교외로 이사 갈까 생각 중이야." }
    ]
  },
  {
    id: "L5-177",
    word: "pundit",
    meaning: "(TV 등의) 논객, 전문가",
    examples: [
      { en: "All the pundits on TV got the election wrong.", kr: "TV 논객들이 전부 선거 예측을 틀렸어." },
      { en: "I stopped listening to political pundits.", kr: "정치 평론가들 말은 이제 안 들어." }
    ]
  },
  {
    id: "L5-554",
    word: "diagnose",
    meaning: "진단하다, (문제의) 원인을 찾아내다",
    examples: [
      { en: "She was diagnosed with diabetes last year.", kr: "걔 작년에 당뇨 진단받았어." },
      { en: "The mechanic couldn't diagnose the problem with my car.", kr: "정비사가 내 차 문제를 못 찾아냈어." }
    ]
  },
  {
    id: "L5-555",
    word: "embarrass",
    meaning: "당황하게 하다, 창피를 주다",
    examples: [
      { en: "Please don't embarrass me in front of my coworkers.", kr: "동료들 앞에서 나 창피 주지 마." },
      { en: "Mom, you're embarrassing me!", kr: "엄마, 창피하게 왜 그래!" }
    ]
  },
  {
    id: "L5-556",
    word: "eviction",
    meaning: "퇴거, (집에서) 쫓겨남",
    examples: [
      { en: "They got an eviction notice for not paying rent.", kr: "월세 안 내서 퇴거 통지를 받았대." },
      { en: "My neighbor is facing eviction, and I feel terrible for her.", kr: "옆집 사람이 집에서 쫓겨나게 생겼는데, 너무 안됐어." }
    ]
  },
  {
    id: "L5-557",
    word: "hesitant",
    meaning: "주저하는, 망설이는",
    examples: [
      { en: "I was hesitant to ask for a raise.", kr: "월급 올려 달라고 하기가 망설여졌어." },
      { en: "Don't be hesitant to ask questions.", kr: "질문하는 거 망설이지 마." }
    ]
  },
  {
    id: "L5-836",
    word: "frazzled",
    meaning: "기진맥진한, 정신이 하나도 없는",
    examples: [
      { en: "I'm totally frazzled after this week.", kr: "이번 주 지나고 나니 완전 녹초야." },
      { en: "She looked frazzled after watching three kids all day.", kr: "걔 하루 종일 애 셋 보고 나서 정신없어 보였어." }
    ]
  },
  {
    id: "L5-559",
    word: "proactive",
    meaning: "주도적인, 선제적인",
    examples: [
      { en: "Be proactive and fix problems before customers notice.", kr: "고객이 알아채기 전에 먼저 나서서 문제를 해결하세요." },
      { en: "I like that you're so proactive about your health.", kr: "네가 건강 관리에 적극적인 게 좋아." }
    ]
  },
  {
    id: "L5-560",
    word: "prominently",
    meaning: "눈에 잘 띄게, 두드러지게",
    examples: [
      { en: "Make sure the price is displayed prominently.", kr: "가격이 눈에 잘 띄게 표시되도록 해 주세요." },
      { en: "Your photo is featured prominently on their website.", kr: "네 사진이 그 웹사이트에 크게 실려 있더라." }
    ]
  },
  {
    id: "L5-561",
    word: "solemn",
    meaning: "엄숙한, 진지한",
    examples: [
      { en: "The ceremony was quiet and solemn.", kr: "식은 조용하고 엄숙했어." },
      { en: "He made a solemn promise to take care of his family.", kr: "걔는 가족을 책임지겠다고 굳게 약속했어." }
    ]
  },
  {
    id: "L5-837",
    word: "mull",
    meaning: "곰곰이 생각하다, 고민하다",
    examples: [
      { en: "Let me mull it over and call you tomorrow.", kr: "좀 생각해 보고 내일 전화할게." },
      { en: "I've been mulling over that job offer all week.", kr: "그 일자리 제안을 일주일 내내 고민 중이야." }
    ]
  },
  {
    id: "L5-563",
    word: "heartfelt",
    meaning: "진심 어린",
    examples: [
      { en: "Thank you for your heartfelt message.", kr: "진심 어린 메시지 고마워." },
      { en: "She gave a heartfelt speech at her dad's retirement party.", kr: "걔가 아빠 은퇴 파티에서 진심 어린 연설을 했어." }
    ]
  },
  {
    id: "L5-564",
    word: "newcomer",
    meaning: "새로 온 사람, 신참",
    examples: [
      { en: "As a newcomer to the city, I'm still learning the bus routes.", kr: "이 도시에 새로 와서 아직 버스 노선 익히는 중이야." },
      { en: "Let's make the newcomer feel welcome.", kr: "새로 온 사람이 환영받는 느낌 들게 해 주자." }
    ]
  },
  {
    id: "L5-565",
    word: "ominous",
    meaning: "불길한",
    examples: [
      { en: "Those clouds look ominous. Let's go inside.", kr: "저 구름 불길해 보여. 안으로 들어가자." },
      { en: "There was an ominous silence after the boss read the email.", kr: "사장님이 이메일 읽고 나서 불길한 침묵이 흘렀어." }
    ]
  },
  {
    id: "L5-566",
    word: "precaution",
    meaning: "예방 조치, 조심",
    examples: [
      { en: "Just as a precaution, back up your files.", kr: "만약을 위해서 파일 백업해 둬." },
      { en: "Take extra precautions when driving on icy roads.", kr: "빙판길 운전할 때는 더 조심해." }
    ]
  },
  {
    id: "L5-567",
    word: "skepticism",
    meaning: "회의론, 의심",
    examples: [
      { en: "Sorry for my skepticism, but that sounds too good to be true.", kr: "의심해서 미안한데, 그거 너무 좋은 얘기라 믿기 힘들어." },
      { en: "A little skepticism helps you avoid online scams.", kr: "의심을 조금 하면 인터넷 사기를 피할 수 있어." }
    ]
  },
  {
    id: "L5-568",
    word: "startling",
    meaning: "깜짝 놀랄 만한, 놀라운",
    examples: [
      { en: "The results were pretty startling.", kr: "결과가 꽤 놀라웠어." },
      { en: "Prices have gone up at a startling rate this year.", kr: "올해 물가가 깜짝 놀랄 속도로 올랐어." }
    ]
  },
  {
    id: "L5-569",
    word: "turnaround",
    meaning: "처리 기간, 호전, 반전",
    examples: [
      { en: "What's the turnaround time for a passport renewal?", kr: "여권 갱신 처리 기간이 얼마나 걸려요?" },
      { en: "The team made an amazing turnaround this season.", kr: "그 팀이 이번 시즌에 놀라운 반전을 이뤘어." }
    ]
  },
  {
    id: "L5-570",
    word: "counterfeit",
    meaning: "위조의, 가짜의, 위조품",
    examples: [
      { en: "Be careful, that bag might be counterfeit.", kr: "조심해, 그 가방 가짜일 수도 있어." },
      { en: "The store got a counterfeit bill yesterday.", kr: "가게에 어제 위조지폐가 들어왔어." }
    ]
  },
  {
    id: "L5-571",
    word: "stamina",
    meaning: "체력, 지구력",
    examples: [
      { en: "Running every morning has improved my stamina.", kr: "매일 아침 달리기를 했더니 체력이 좋아졌어." },
      { en: "You need a lot of stamina to work night shifts.", kr: "야간 근무하려면 체력이 많이 필요해." }
    ]
  },
  {
    id: "L5-572",
    word: "subconscious",
    meaning: "잠재의식의, 잠재의식",
    examples: [
      { en: "Maybe your subconscious is telling you to slow down.", kr: "어쩌면 네 잠재의식이 속도를 좀 늦추라고 말하는 걸지도 몰라." },
      { en: "It was a subconscious habit. I didn't even notice.", kr: "무의식적인 습관이었어. 나도 몰랐어." }
    ]
  },
  {
    id: "L5-573",
    word: "vanish",
    meaning: "사라지다",
    examples: [
      { en: "My headache vanished after a good night's sleep.", kr: "푹 자고 나니 두통이 싹 사라졌어." },
      { en: "The cookies vanished from the break room in minutes.", kr: "휴게실 쿠키가 몇 분 만에 사라졌어." }
    ]
  },
  {
    id: "L5-574",
    word: "abrupt",
    meaning: "갑작스러운, 퉁명스러운",
    examples: [
      { en: "The movie had a really abrupt ending.", kr: "그 영화 결말이 너무 갑작스러웠어." },
      { en: "Sorry if I sounded abrupt on the phone earlier.", kr: "아까 전화로 퉁명스럽게 들렸다면 미안해." }
    ]
  },
  {
    id: "L5-575",
    word: "downright",
    meaning: "완전히, 순전히",
    examples: [
      { en: "Some of his comments were downright rude.", kr: "걔가 한 말 중 몇 개는 완전 무례했어." },
      { en: "Driving in this snow is downright dangerous.", kr: "이 눈에 운전하는 건 정말 위험해." }
    ]
  },
  {
    id: "L5-576",
    word: "impartial",
    meaning: "공정한, 치우치지 않은",
    examples: [
      { en: "We need someone impartial to settle this.", kr: "이거 해결하려면 공정한 사람이 필요해." },
      { en: "If you're the referee, you have to stay impartial.", kr: "네가 심판이면 공정해야지." }
    ]
  }
];

const wordsLevel5_Part3 = [
  {
    id: "L5-577",
    word: "incremental",
    meaning: "점진적인, 조금씩 늘어나는",
    examples: [
      { en: "It's not a big change, just an incremental update.", kr: "큰 변화는 아니고, 그냥 조금 개선된 업데이트야." },
      { en: "Small, incremental changes are easier to stick with.", kr: "작고 점진적인 변화가 꾸준히 하기 더 쉬워." }
    ]
  },
  {
    id: "L5-578",
    word: "manageable",
    meaning: "감당할 수 있는, 할 만한",
    examples: [
      { en: "Let's break this project into manageable chunks.", kr: "이 프로젝트를 감당할 만한 단위로 나누자." },
      { en: "Traffic was heavy, but it was manageable this morning.", kr: "오늘 아침 차가 많긴 했는데 그럭저럭 괜찮았어." }
    ]
  },
  {
    id: "L5-579",
    word: "misfortune",
    meaning: "불운, 불행",
    examples: [
      { en: "I had the misfortune of sitting next to a crying baby.", kr: "운 나쁘게 우는 아기 옆자리에 앉았어." },
      { en: "Don't laugh at other people's misfortunes.", kr: "남의 불행을 비웃지 마." }
    ]
  },
  {
    id: "L5-580",
    word: "ambiguity",
    meaning: "모호함, 애매함",
    examples: [
      { en: "Just to avoid any ambiguity, the meeting's at three, our time.", kr: "헷갈리지 않게 말씀드리면, 회의는 우리 시간으로 3시예요." },
      { en: "There's some ambiguity about who's in charge here.", kr: "여기 누가 책임자인지 좀 애매해요." }
    ]
  },
  {
    id: "L5-581",
    word: "discard",
    meaning: "버리다, 폐기하다",
    examples: [
      { en: "Should I discard these old receipts or keep them?", kr: "이 오래된 영수증들 버릴까요, 아니면 보관할까요?" },
      { en: "We discarded the first design and started over.", kr: "첫 번째 디자인은 버리고 처음부터 다시 했어." }
    ]
  },
  {
    id: "L5-582",
    word: "hallmark",
    meaning: "특징, 전형적인 특징",
    examples: [
      { en: "Long lines are the hallmark of a good restaurant around here.", kr: "이 근처에선 줄이 길면 맛집이라는 표시야." },
      { en: "This email has all the hallmarks of a scam.", kr: "이 이메일은 딱 사기 메일 특징을 다 갖췄네." }
    ]
  },
  {
    id: "L5-583",
    word: "haste",
    meaning: "서두름, 급함",
    examples: [
      { en: "In my haste, I left my phone at home.", kr: "서두르다가 휴대폰을 집에 두고 왔어." },
      { en: "We made that decision in haste, and now we regret it.", kr: "그 결정을 급하게 내려서 지금 후회하고 있어." }
    ]
  },
  {
    id: "L5-584",
    word: "immaculate",
    meaning: "티 없이 깨끗한, 흠잡을 데 없는",
    examples: [
      { en: "Wow, your apartment is always immaculate!", kr: "와, 너희 집은 항상 티끌 하나 없이 깨끗하다!" },
      { en: "The car's ten years old, but it's in immaculate condition.", kr: "그 차 10년 됐는데 상태가 완벽해요." }
    ]
  },
  {
    id: "L5-838",
    word: "shrewd",
    meaning: "빈틈없는, 영리한, 약삭빠른",
    examples: [
      { en: "That was a shrewd decision, buying early.", kr: "일찍 산 거 진짜 영리한 판단이었어." },
      { en: "She's a shrewd negotiator, be careful.", kr: "걔 협상 진짜 노련하니까 조심해." }
    ]
  },
  {
    id: "L5-585",
    word: "lifespan",
    meaning: "수명",
    examples: [
      { en: "What's the usual lifespan of a phone battery?", kr: "휴대폰 배터리 수명이 보통 얼마나 돼요?" },
      { en: "Cats have a longer lifespan than dogs, right?", kr: "고양이가 개보다 수명이 더 길지 않아?" }
    ]
  },
  {
    id: "L5-211",
    word: "subliminal",
    meaning: "잠재의식의, 무의식적인",
    examples: [
      { en: "Do you think ads use subliminal messages on us?", kr: "광고가 우리한테 잠재의식 메시지를 쓴다고 생각해?" },
      { en: "Maybe that song had a subliminal effect on me.", kr: "어쩌면 그 노래가 나한테 무의식적으로 영향을 줬나 봐." }
    ]
  },
  {
    id: "L5-212",
    word: "subvert",
    meaning: "(예상·관습을) 뒤엎다, 전복시키다",
    examples: [
      { en: "The movie totally subverts the usual superhero story.", kr: "그 영화는 뻔한 슈퍼히어로 이야기를 완전히 뒤집어." },
      { en: "I love shows that subvert your expectations.", kr: "예상을 뒤엎는 드라마가 정말 좋아." }
    ]
  },
  {
    id: "L5-586",
    word: "mischief",
    meaning: "장난, 말썽",
    examples: [
      { en: "The kids got into mischief while we were cooking.", kr: "우리가 요리하는 동안 애들이 말썽을 부렸어." },
      { en: "Our puppy is always up to some mischief.", kr: "우리 강아지는 늘 무슨 장난을 치고 있어." }
    ]
  },
  {
    id: "L5-587",
    word: "revisit",
    meaning: "다시 논의하다, 다시 찾아가다",
    examples: [
      { en: "Can we revisit this next week? I need more time.", kr: "이건 다음 주에 다시 얘기할 수 있을까요? 시간이 좀 더 필요해서요." },
      { en: "I'd love to revisit Kyoto in the fall.", kr: "가을에 교토에 다시 가 보고 싶어." }
    ]
  },
  {
    id: "L5-588",
    word: "sparse",
    meaning: "드문드문한, 듬성듬성한, 휑한",
    examples: [
      { en: "The crowd was pretty sparse for a Friday night.", kr: "금요일 밤치고는 사람이 꽤 없었어." },
      { en: "His room is kind of sparse, just a bed and a desk.", kr: "걔 방은 좀 휑해. 침대랑 책상밖에 없어." }
    ]
  },
  {
    id: "L5-589",
    word: "temperament",
    meaning: "기질, 성격, 성미",
    examples: [
      { en: "Our dog has a really calm temperament.", kr: "우리 개는 성격이 정말 차분해." },
      { en: "You need the right temperament to work in customer service.", kr: "고객 서비스 일을 하려면 그에 맞는 성격이 필요해." }
    ]
  },
  {
    id: "L5-590",
    word: "conspicuous",
    meaning: "눈에 띄는, 두드러진",
    examples: [
      { en: "I felt so conspicuous in my bright red jacket.", kr: "새빨간 재킷을 입어서 너무 눈에 띄는 것 같았어." },
      { en: "Put the spare key somewhere less conspicuous.", kr: "여분 열쇠는 덜 눈에 띄는 곳에 둬." }
    ]
  },
  {
    id: "L5-591",
    word: "contradict",
    meaning: "반박하다, 모순되다",
    examples: [
      { en: "Please don't contradict me in front of the client.", kr: "고객 앞에서 제 말에 반박하지 말아 주세요." },
      { en: "Wait, that contradicts what you told me yesterday.", kr: "잠깐, 그건 어제 네가 한 말이랑 다르잖아." }
    ]
  },
  {
    id: "L5-839",
    word: "giddy",
    meaning: "들뜬, 신이 난, 어지러운",
    examples: [
      { en: "I was giddy with excitement all day.", kr: "하루 종일 신나서 들떠 있었어." },
      { en: "She gets giddy every time he texts her.", kr: "걔는 그 남자가 문자할 때마다 들떠." }
    ]
  },
  {
    id: "L5-840",
    word: "dawdle",
    meaning: "꾸물거리다, 늑장 부리다",
    examples: [
      { en: "Come on, don't dawdle, we're already late!", kr: "빨리 와, 꾸물대지 마, 우리 벌써 늦었어!" },
      { en: "She always dawdles in the morning and misses the bus.", kr: "걔는 아침마다 꾸물대다가 버스를 놓쳐." }
    ]
  },
  {
    id: "L5-221",
    word: "tenuous",
    meaning: "미약한, 빈약한, 억지스러운",
    examples: [
      { en: "Honestly, the link between those two things seems pretty tenuous.", kr: "솔직히 그 두 가지 사이의 연관성은 좀 억지 같아." },
      { en: "I only have a tenuous grasp of tax rules.", kr: "세금 규정은 어렴풋이밖에 몰라." }
    ]
  },
  {
    id: "L5-222",
    word: "tirade",
    meaning: "장황한 비난, 길게 퍼붓는 독설",
    examples: [
      { en: "My boss went on a tirade about the late reports.", kr: "부장님이 늦은 보고서 때문에 한참을 퍼부으셨어." },
      { en: "Sorry about that tirade; I was just really frustrated.", kr: "아까 막 쏟아내서 미안해. 그냥 너무 답답했어." }
    ]
  },
  {
    id: "L5-594",
    word: "pinpoint",
    meaning: "정확히 찾아내다, 집어내다",
    examples: [
      { en: "I can't pinpoint exactly what's wrong, but something's off.", kr: "뭐가 문제인지 딱 짚을 순 없는데 뭔가 이상해." },
      { en: "The app can pinpoint your location within a few meters.", kr: "그 앱은 몇 미터 안까지 위치를 정확히 찾아내." }
    ]
  },
  {
    id: "L5-841",
    word: "schmooze",
    meaning: "비위를 맞추다, 인맥 쌓으려 친한 척하다",
    examples: [
      { en: "He loves to schmooze with the boss at parties.", kr: "걔는 파티에서 사장한테 붙어 비위 맞추는 걸 좋아해." },
      { en: "I hate having to schmooze with clients.", kr: "고객들 비위 맞춰야 하는 거 너무 싫어." }
    ]
  },
  {
    id: "L5-595",
    word: "vigilant",
    meaning: "경계하는, 방심하지 않는",
    examples: [
      { en: "Stay vigilant about phishing emails, okay?", kr: "피싱 메일 조심해, 알았지?" },
      { en: "You have to be vigilant when kids swim in the ocean.", kr: "애들이 바다에서 수영할 땐 방심하면 안 돼." }
    ]
  },
  {
    id: "L5-596",
    word: "foreseeable",
    meaning: "예측할 수 있는, (가까운 미래) 당분간",
    examples: [
      { en: "I'm working from home for the foreseeable future.", kr: "당분간은 재택근무를 해." },
      { en: "Honestly, that problem was totally foreseeable.", kr: "솔직히 그 문제는 충분히 예상할 수 있었어." }
    ]
  },
  {
    id: "L5-597",
    word: "charisma",
    meaning: "카리스마, 사람을 끄는 매력",
    examples: [
      { en: "Our new manager has so much charisma.", kr: "새로 온 매니저님은 카리스마가 대단해." },
      { en: "He's not that handsome, but he's got charisma.", kr: "그 사람 그렇게 잘생기진 않았는데 매력이 있어." }
    ]
  },
  {
    id: "L5-598",
    word: "loom",
    meaning: "(일이) 다가오다, 불쑥 나타나다",
    examples: [
      { en: "With the deadline looming, everyone's working late.", kr: "마감이 다가와서 다들 늦게까지 일해." },
      { en: "I've got exams looming, so I can't go out this weekend.", kr: "시험이 코앞이라 이번 주말엔 못 나가." }
    ]
  },
  {
    id: "L5-599",
    word: "spontaneously",
    meaning: "즉흥적으로, 자발적으로",
    examples: [
      { en: "We spontaneously decided to drive to the beach.", kr: "우리 즉흥적으로 바닷가에 가기로 했어." },
      { en: "Everyone spontaneously started clapping.", kr: "다들 자연스럽게 박수를 치기 시작했어." }
    ]
  },
  {
    id: "L5-600",
    word: "adept",
    meaning: "능숙한, 숙련된",
    examples: [
      { en: "She's really adept at handling difficult customers.", kr: "그분은 까다로운 손님을 정말 능숙하게 응대해." },
      { en: "Kids are so adept with new technology these days.", kr: "요즘 애들은 새로운 기술을 정말 잘 다뤄." }
    ]
  },
  {
    id: "L5-601",
    word: "deterrent",
    meaning: "억지력, 막는 수단, 걸림돌",
    examples: [
      { en: "Do security cameras actually work as a deterrent?", kr: "보안 카메라가 정말 범죄를 막는 효과가 있어?" },
      { en: "The high price is a big deterrent for me.", kr: "높은 가격이 나한텐 큰 걸림돌이야." }
    ]
  },
  {
    id: "L5-602",
    word: "grieve",
    meaning: "몹시 슬퍼하다, 애도하다",
    examples: [
      { en: "Give yourself time to grieve, okay?", kr: "슬퍼할 시간을 충분히 가져, 알았지?" },
      { en: "She's still grieving the loss of her dog.", kr: "걔는 아직도 강아지를 잃은 슬픔에 잠겨 있어." }
    ]
  },
  {
    id: "L5-603",
    word: "hectic",
    meaning: "정신없이 바쁜",
    examples: [
      { en: "It's been a hectic week at the office.", kr: "이번 주 회사 일이 정말 정신없었어." },
      { en: "Our schedule in Paris was too hectic to relax.", kr: "파리 일정이 너무 빡빡해서 쉴 틈이 없었어." }
    ]
  },
  {
    id: "L5-234",
    word: "unscrupulous",
    meaning: "부도덕한, 비양심적인, 악덕",
    examples: [
      { en: "Watch out for unscrupulous landlords who keep your deposit.", kr: "보증금 안 돌려주는 악덕 집주인 조심해." },
      { en: "Some unscrupulous taxi drivers overcharge tourists.", kr: "어떤 비양심적인 택시 기사들은 관광객한테 바가지를 씌워." }
    ]
  },
  {
    id: "L5-604",
    word: "relatable",
    meaning: "공감할 수 있는, 공감 가는",
    examples: [
      { en: "Her stories about being a working mom are so relatable.", kr: "워킹맘으로서의 그녀 이야기는 정말 공감 돼." },
      { en: "Ha, that meme is way too relatable.", kr: "하, 그 밈 너무 공감된다." }
    ]
  },
  {
    id: "L5-842",
    word: "oversleep",
    meaning: "늦잠 자다",
    examples: [
      { en: "Sorry I'm late, I overslept again.", kr: "늦어서 미안, 또 늦잠 잤어." },
      { en: "Set two alarms so you don't oversleep tomorrow.", kr: "내일 늦잠 안 자게 알람 두 개 맞춰 둬." }
    ]
  },
  {
    id: "L5-606",
    word: "prognosis",
    meaning: "예후, 전망",
    examples: [
      { en: "What did the doctor say about the prognosis?", kr: "의사가 예후에 대해 뭐라고 했어?" },
      { en: "The prognosis is good, so try not to worry.", kr: "예후가 좋대, 그러니까 너무 걱정하지 마." }
    ]
  },
  {
    id: "L5-607",
    word: "uncanny",
    meaning: "신기한, 묘한, 기이한",
    examples: [
      { en: "You have an uncanny resemblance to your dad.", kr: "너 아빠랑 신기할 정도로 닮았다." },
      { en: "She has an uncanny ability to remember everyone's birthday.", kr: "걔는 모든 사람 생일을 기억하는 신기한 능력이 있어." }
    ]
  },
  {
    id: "L5-843",
    word: "gridlock",
    meaning: "교통 정체, 꽉 막힘, 교착 상태",
    examples: [
      { en: "The highway was total gridlock this morning.", kr: "오늘 아침 고속도로가 완전히 꽉 막혔어." },
      { en: "Leave early to beat the holiday gridlock.", kr: "연휴 교통 체증 피하려면 일찍 출발해." }
    ]
  },
  {
    id: "L5-844",
    word: "curveball",
    meaning: "예상 밖의 일, 뜻밖의 변수",
    examples: [
      { en: "Life threw me a curveball this year.", kr: "올해 인생에 예상 못 한 일이 터졌어." },
      { en: "That interview question was a total curveball.", kr: "그 면접 질문은 완전 예상 밖이었어." }
    ]
  },
  {
    id: "L5-610",
    word: "simplistic",
    meaning: "지나치게 단순한",
    examples: [
      { en: "That's a pretty simplistic way to look at it.", kr: "그건 좀 너무 단순하게 보는 거야." },
      { en: "His answer sounds nice, but it's too simplistic.", kr: "그 사람 대답은 그럴듯하지만 너무 단순해." }
    ]
  },
  {
    id: "L5-748",
    word: "brag",
    meaning: "자랑하다, 뽐내다",
    examples: [
      { en: "He keeps bragging about his new car.", kr: "걔 새 차 자랑을 계속해." },
      { en: "I don't mean to brag, but I got the promotion.", kr: "자랑하려는 건 아닌데, 나 승진했어." }
    ]
  },
  {
    id: "L5-749",
    word: "upfront",
    meaning: "선불로, 미리, 솔직한",
    examples: [
      { en: "Do I have to pay upfront, or can I pay later?", kr: "선불로 내야 하나요, 아니면 나중에 내도 되나요?" },
      { en: "I'll be upfront with you, the budget is really tight.", kr: "솔직히 말씀드리면 예산이 정말 빠듯해요." }
    ]
  },
  {
    id: "L5-611",
    word: "contentious",
    meaning: "논란이 많은, 말다툼이 벌어지는",
    examples: [
      { en: "Let's not bring up politics; it's too contentious.", kr: "정치 얘기는 꺼내지 말자. 너무 논란이 많잖아." },
      { en: "The budget meeting got pretty contentious.", kr: "예산 회의가 꽤 험악해졌어." }
    ]
  },
  {
    id: "L5-612",
    word: "hypocritical",
    meaning: "위선적인",
    examples: [
      { en: "Isn't it a little hypocritical to complain about waste and buy bottled water?", kr: "쓰레기 문제로 불평하면서 생수 사 마시는 건 좀 위선적이지 않아?" },
      { en: "I'd feel hypocritical telling you to quit sugar.", kr: "너한테 설탕 끊으라고 하면 내가 위선적인 것 같아." }
    ]
  },
  {
    id: "L5-613",
    word: "nurture",
    meaning: "기르다, 키우다, 보살피다",
    examples: [
      { en: "Good managers nurture talent instead of controlling it.", kr: "좋은 관리자는 사람을 통제하지 않고 재능을 키워 줘." },
      { en: "She's been nurturing those plants all winter.", kr: "걔는 겨울 내내 그 화분들을 정성껏 키웠어." }
    ]
  },
  {
    id: "L5-845",
    word: "blatant",
    meaning: "노골적인, 뻔한, 대놓고 하는",
    examples: [
      { en: "That was a blatant lie, and you know it.", kr: "그건 뻔한 거짓말이었어, 너도 알잖아." },
      { en: "It's a blatant copy of another brand's logo.", kr: "그건 다른 브랜드 로고를 대놓고 베낀 거야." }
    ]
  },
  {
    id: "L5-248",
    word: "vindictive",
    meaning: "앙심을 품은, 보복하려는",
    examples: [
      { en: "Don't be vindictive; just let it go.", kr: "앙심 품지 말고 그냥 잊어버려." },
      { en: "My ex got really vindictive after we broke up.", kr: "전 애인이 헤어지고 나서 정말 보복하려고 들었어." }
    ]
  },
  {
    id: "L5-846",
    word: "contagious",
    meaning: "전염성의, 잘 옮는, (웃음 등이) 전염되는",
    examples: [
      { en: "Stay home, you might still be contagious.", kr: "집에 있어, 아직 옮길 수도 있잖아." },
      { en: "Her laugh is so contagious.", kr: "걔 웃음소리 들으면 나도 따라 웃게 돼." }
    ]
  },
  {
    id: "L5-750",
    word: "workload",
    meaning: "업무량, 일의 양",
    examples: [
      { en: "My workload has doubled since Jake left the team.", kr: "제이크가 팀을 떠난 뒤로 내 업무량이 두 배가 됐어." },
      { en: "Can we talk about splitting the workload more evenly?", kr: "업무를 좀 더 공평하게 나누는 것에 대해 얘기할 수 있을까요?" }
    ]
  },
  {
    id: "L5-615",
    word: "prematurely",
    meaning: "너무 이르게, 시기상조로",
    examples: [
      { en: "Don't celebrate prematurely; the deal isn't signed yet.", kr: "너무 일찍 축하하지 마. 아직 계약서에 사인 안 했어." },
      { en: "My dad went gray prematurely.", kr: "우리 아빠는 일찍 머리가 세셨어." }
    ]
  },
  {
    id: "L5-616",
    word: "aspiration",
    meaning: "포부, 열망, 꿈",
    examples: [
      { en: "My aspiration is to open my own bakery someday.", kr: "내 꿈은 언젠가 내 빵집을 여는 거야." },
      { en: "What are your career aspirations, if you don't mind me asking?", kr: "실례가 아니라면, 커리어 목표가 뭔지 여쭤봐도 될까요?" }
    ]
  },
  {
    id: "L5-617",
    word: "considerate",
    meaning: "사려 깊은, 배려하는",
    examples: [
      { en: "That's so considerate of you to call ahead.", kr: "미리 전화해 주시다니 정말 사려 깊으시네요." },
      { en: "Please be considerate and keep it down after ten.", kr: "열 시 이후엔 배려해서 좀 조용히 해 주세요." }
    ]
  },
  {
    id: "L5-618",
    word: "exponentially",
    meaning: "기하급수적으로",
    examples: [
      { en: "My stress level went up exponentially this week.", kr: "이번 주에 스트레스가 기하급수적으로 늘었어." },
      { en: "Our online sales have grown exponentially this year.", kr: "올해 온라인 매출이 기하급수적으로 늘었어요." }
    ]
  },
  {
    id: "L5-619",
    word: "fiasco",
    meaning: "대실패, 낭패, 엉망",
    examples: [
      { en: "The whole camping trip was a total fiasco.", kr: "캠핑 여행 전체가 완전 엉망이었어." },
      { en: "After last year's fiasco, let's hire a real planner.", kr: "작년 대참사도 있었으니, 이번엔 제대로 된 플래너를 고용하자." }
    ]
  },
  {
    id: "L5-847",
    word: "snarky",
    meaning: "비꼬는, 빈정거리는",
    examples: [
      { en: "There's no need to be so snarky.", kr: "그렇게 비꼴 필요는 없잖아." },
      { en: "She left a snarky comment on my post.", kr: "걔가 내 게시물에 비꼬는 댓글 달았어." }
    ]
  },
  {
    id: "L5-620",
    word: "unresolved",
    meaning: "해결되지 않은, 정리되지 않은",
    examples: [
      { en: "We still have a few unresolved issues from last week.", kr: "지난주에 해결 못 한 문제가 아직 몇 개 있어요." },
      { en: "I think they still have unresolved feelings for each other.", kr: "그 둘은 아직 서로에게 정리 안 된 감정이 있는 것 같아." }
    ]
  },
  {
    id: "L5-848",
    word: "pushover",
    meaning: "만만한 사람, 호구, 거절을 못 하는 사람",
    examples: [
      { en: "Say no sometimes; don't be such a pushover.", kr: "가끔은 거절해. 그렇게 호구처럼 굴지 마." },
      { en: "My mom's strict, but my dad's a total pushover.", kr: "엄마는 엄하신데 아빠는 완전 무르셔." }
    ]
  },
  {
    id: "L5-849",
    word: "gripe",
    meaning: "불평하다, 투덜거리다, 불만",
    examples: [
      { en: "What's your gripe with him anyway?", kr: "도대체 걔한테 뭐가 불만이야?" },
      { en: "He gripes about his commute every single day.", kr: "걔는 매일같이 출퇴근길 얘기로 투덜거려." }
    ]
  },
  {
    id: "L5-850",
    word: "overthink",
    meaning: "지나치게 생각하다, 생각이 많다",
    examples: [
      { en: "You're overthinking it, just send the text.", kr: "너무 깊게 생각하지 말고 그냥 문자 보내." },
      { en: "I tend to overthink everything at night.", kr: "나 밤만 되면 모든 걸 너무 곱씹어." }
    ]
  },
  {
    id: "L5-624",
    word: "unsettling",
    meaning: "불안하게 하는, 뒤숭숭한, 찜찜한",
    examples: [
      { en: "It was unsettling to hear footsteps in the empty office.", kr: "빈 사무실에서 발소리가 들려서 불안했어." },
      { en: "That ending was kind of unsettling, right?", kr: "그 결말 좀 찜찜하지 않았어?" }
    ]
  },
  {
    id: "L5-625",
    word: "constraint",
    meaning: "제약, 제한",
    examples: [
      { en: "Because of time constraints, we'll skip the Q and A.", kr: "시간 제약 때문에 질의응답은 건너뛸게요." },
      { en: "What are the budget constraints for this project?", kr: "이 프로젝트의 예산 제약이 어떻게 되나요?" }
    ]
  },
  {
    id: "L5-626",
    word: "frail",
    meaning: "노쇠한, 허약한",
    examples: [
      { en: "Grandma's getting frail, so we visit her often.", kr: "할머니가 기력이 약해지셔서 우리가 자주 찾아뵈어." },
      { en: "He's still too frail to travel after the surgery.", kr: "그분은 수술 후라 아직 여행하기엔 몸이 너무 약하세요." }
    ]
  },
  {
    id: "L5-851",
    word: "baffled",
    meaning: "어리둥절한, 도무지 이해가 안 되는",
    examples: [
      { en: "I'm totally baffled, how did that happen?", kr: "완전 어리둥절해, 그게 어떻게 된 거야?" },
      { en: "The mechanic was baffled by the noise.", kr: "정비사도 그 소리가 왜 나는지 도무지 모르더라." }
    ]
  },
  {
    id: "L5-627",
    word: "impractical",
    meaning: "비현실적인, 실용적이지 않은",
    examples: [
      { en: "White sofas are so impractical when you have kids.", kr: "애가 있으면 흰 소파는 정말 실용적이지 않아." },
      { en: "Those shoes are cute but totally impractical for hiking.", kr: "그 신발 예쁘긴 한데 등산하기엔 전혀 실용적이지 않아." }
    ]
  },
  {
    id: "L5-628",
    word: "irreversible",
    meaning: "되돌릴 수 없는",
    examples: [
      { en: "Are you sure? Deleting the account is irreversible.", kr: "확실해요? 계정 삭제는 되돌릴 수 없어요." },
      { en: "Think it over; a tattoo is pretty much irreversible.", kr: "잘 생각해 봐. 문신은 거의 되돌릴 수 없어." }
    ]
  },
  {
    id: "L5-751",
    word: "inconvenient",
    meaning: "불편한, 곤란한",
    examples: [
      { en: "Sorry, is this an inconvenient time to talk?", kr: "죄송한데, 지금 통화하기 곤란하신가요?" },
      { en: "The new bus schedule is really inconvenient for me.", kr: "새 버스 시간표가 나한테 너무 불편해." }
    ]
  },
  {
    id: "L5-629",
    word: "unintended",
    meaning: "의도하지 않은, 예상치 못한",
    examples: [
      { en: "Sorry, the pun was totally unintended.", kr: "미안, 말장난은 전혀 의도한 게 아니었어." },
      { en: "Moving the meeting had some unintended consequences.", kr: "회의 시간을 옮겼더니 예상치 못한 결과가 좀 생겼어." }
    ]
  },
  {
    id: "L5-630",
    word: "whim",
    meaning: "변덕, 즉흥적인 생각",
    examples: [
      { en: "We booked the trip on a whim last night.", kr: "어젯밤에 즉흥적으로 여행을 예약했어." },
      { en: "The schedule keeps changing at the boss's whim.", kr: "사장님 기분 따라 일정이 계속 바뀌어." }
    ]
  },
  {
    id: "L5-631",
    word: "withhold",
    meaning: "숨기다, 주지 않다, 보류하다",
    examples: [
      { en: "Please don't withhold anything from your doctor.", kr: "의사한테 아무것도 숨기지 마세요." },
      { en: "They can withhold your deposit if you damage the apartment.", kr: "집을 손상시키면 보증금을 안 돌려줄 수도 있어요." }
    ]
  },
  {
    id: "L5-632",
    word: "astonished",
    meaning: "깜짝 놀란",
    examples: [
      { en: "I was astonished at how cheap the flights were.", kr: "항공권이 너무 싸서 깜짝 놀랐어." },
      { en: "You'd be astonished how much she's grown!", kr: "걔가 얼마나 컸는지 보면 깜짝 놀랄 거야!" }
    ]
  },
  {
    id: "L5-633",
    word: "flatter",
    meaning: "아첨하다, 우쭐하게 하다",
    examples: [
      { en: "You're just flattering me because you want a favor.", kr: "부탁할 게 있어서 아부하는 거지?" },
      { en: "I'm flattered you asked me to give the speech.", kr: "연설을 부탁해 주셔서 영광이에요." }
    ]
  },
  {
    id: "L5-634",
    word: "unthinkable",
    meaning: "상상도 할 수 없는",
    examples: [
      { en: "Ten years ago, working from home was unthinkable.", kr: "10년 전엔 재택근무는 상상도 못 했지." },
      { en: "Missing my best friend's wedding is unthinkable.", kr: "제일 친한 친구 결혼식에 빠지는 건 생각도 못 할 일이야." }
    ]
  },
  {
    id: "L5-635",
    word: "dismay",
    meaning: "실망, 당황, 낙담",
    examples: [
      { en: "To my dismay, the store had already closed.", kr: "실망스럽게도 가게는 이미 문을 닫았더라." },
      { en: "Much to my dismay, my flight got canceled again.", kr: "정말 당황스럽게도 비행기가 또 취소됐어." }
    ]
  },
  {
    id: "L5-636",
    word: "understandably",
    meaning: "당연히, 이해할 만하게",
    examples: [
      { en: "She was understandably upset after losing her job.", kr: "직장을 잃었으니 그녀가 속상한 건 당연했어." },
      { en: "Understandably, customers are annoyed about the long wait.", kr: "당연하게도 손님들이 오래 기다려서 짜증이 났어요." }
    ]
  },
  {
    id: "L5-852",
    word: "backpedal",
    meaning: "말을 바꾸다, 발뺌하다",
    examples: [
      { en: "Don't backpedal now, you said you'd come.", kr: "이제 와서 말 바꾸지 마, 온다고 했잖아." },
      { en: "He backpedaled as soon as his boss walked in.", kr: "사장님 들어오자마자 걔가 말을 싹 바꿨어." }
    ]
  },
  {
    id: "L5-853",
    word: "banter",
    meaning: "(친한 사이의) 농담, 티격태격, 농담을 주고받다",
    examples: [
      { en: "I love the banter between those two hosts.", kr: "그 두 진행자가 티격태격하는 게 너무 좋아." },
      { en: "Don't take it seriously; it's just friendly banter.", kr: "진지하게 받아들이지 마. 그냥 친해서 하는 농담이야." }
    ]
  },
  {
    id: "L5-639",
    word: "fathom",
    meaning: "이해하다, 헤아리다",
    examples: [
      { en: "I can't fathom why anyone would pay that much for coffee.", kr: "커피 한 잔에 그렇게 돈을 쓰는 게 이해가 안 돼." },
      { en: "I can't even fathom how you raised three kids alone.", kr: "혼자서 애 셋을 어떻게 키우셨는지 상상도 안 돼요." }
    ]
  },
  {
    id: "L5-640",
    word: "firsthand",
    meaning: "직접, 직접 경험한",
    examples: [
      { en: "I've seen firsthand how stressful that job can be.", kr: "그 일이 얼마나 스트레스 받는지 내가 직접 봤어." },
      { en: "You should experience it firsthand before you judge.", kr: "판단하기 전에 직접 경험해 봐." }
    ]
  },
  {
    id: "L5-641",
    word: "impeccable",
    meaning: "흠잡을 데 없는, 완벽한",
    examples: [
      { en: "The service at that restaurant was impeccable.", kr: "그 식당 서비스는 흠잡을 데가 없었어." },
      { en: "Wow, you have impeccable taste in music.", kr: "와, 너 음악 취향 완벽하다." }
    ]
  },
  {
    id: "L5-642",
    word: "pessimistic",
    meaning: "비관적인",
    examples: [
      { en: "Don't be so pessimistic; we still have a chance.", kr: "너무 비관적으로 생각하지 마. 아직 기회 있어." },
      { en: "I'm a bit pessimistic about getting tickets.", kr: "표 구하는 건 좀 비관적이야." }
    ]
  },
  {
    id: "L5-643",
    word: "sluggish",
    meaning: "나른한, 느릿느릿한, 부진한",
    examples: [
      { en: "I always feel sluggish after a heavy lunch.", kr: "점심을 많이 먹으면 항상 나른해." },
      { en: "My laptop's been really sluggish lately.", kr: "요즘 내 노트북이 너무 느려." }
    ]
  },
  {
    id: "L5-644",
    word: "timid",
    meaning: "소심한, 겁 많은",
    examples: [
      { en: "He's too timid to speak up in meetings.", kr: "그는 너무 소심해서 회의 때 말을 못 해." },
      { en: "Our cat was timid at first, but now she loves everyone.", kr: "우리 고양이는 처음엔 겁이 많았는데 이젠 모두를 좋아해." }
    ]
  },
  {
    id: "L5-645",
    word: "ultimatum",
    meaning: "최후통첩",
    examples: [
      { en: "My landlord gave me an ultimatum: pay or move out.", kr: "집주인이 최후통첩을 했어. 돈 내든지 나가든지." },
      { en: "Don't give me an ultimatum; let's talk about it.", kr: "최후통첩하지 말고 얘기 좀 하자." }
    ]
  },
  {
    id: "L5-646",
    word: "prerequisite",
    meaning: "선수 과목, 필수 조건, 전제 조건",
    examples: [
      { en: "Is there a prerequisite for this class?", kr: "이 수업 들으려면 선수 과목이 있어요?" },
      { en: "Is a driver's license a prerequisite for this job?", kr: "이 일은 운전면허가 필수 조건인가요?" }
    ]
  },
  {
    id: "L5-647",
    word: "diligent",
    meaning: "성실한, 부지런한, 꼼꼼한",
    examples: [
      { en: "She's super diligent; she never misses a deadline.", kr: "그녀는 정말 성실해서 마감을 놓친 적이 없어." },
      { en: "Be diligent about backing up your files.", kr: "파일 백업은 꼼꼼하게 챙겨." }
    ]
  },
  {
    id: "L5-648",
    word: "ingenuity",
    meaning: "기발함, 독창성",
    examples: [
      { en: "With a little ingenuity, we fixed the leak with tape.", kr: "약간의 기지를 발휘해서 테이프로 새는 걸 막았어." },
      { en: "I'm amazed by your ingenuity; who'd think of that?", kr: "네 기발함에 놀랐어. 누가 그런 생각을 하겠어?" }
    ]
  },
  {
    id: "L5-288",
    word: "legitimately",
    meaning: "진짜로, 정당하게",
    examples: [
      { en: "Are you legitimately sick, or do you just want a day off?", kr: "진짜 아픈 거야, 아니면 그냥 하루 쉬고 싶은 거야?" },
      { en: "That was legitimately the best pizza I've ever had.", kr: "그건 진짜로 내가 먹어 본 최고의 피자였어." }
    ]
  },
  {
    id: "L5-289",
    word: "meticulously",
    meaning: "꼼꼼하게, 세심하게",
    examples: [
      { en: "She meticulously planned every detail of our wedding.", kr: "그녀가 우리 결혼식의 모든 걸 꼼꼼하게 계획했어." },
      { en: "I meticulously checked the numbers, but I still missed one.", kr: "숫자를 꼼꼼히 확인했는데도 하나를 놓쳤어." }
    ]
  },
  {
    id: "L5-649",
    word: "itinerary",
    meaning: "여행 일정(표)",
    examples: [
      { en: "Can you email me the itinerary for the trip?", kr: "여행 일정표를 이메일로 보내 줄래?" },
      { en: "Our itinerary is way too packed; let's cut something.", kr: "우리 일정이 너무 빡빡해. 뭐 하나 빼자." }
    ]
  },
  {
    id: "L5-650",
    word: "plagiarism",
    meaning: "표절",
    examples: [
      { en: "Is it plagiarism if I just change a few words?", kr: "단어 몇 개만 바꾸면 표절이야?" },
      { en: "Always cite your sources to avoid plagiarism.", kr: "표절을 피하려면 항상 출처를 밝혀." }
    ]
  },
  {
    id: "L5-651",
    word: "unfounded",
    meaning: "근거 없는, 괜한",
    examples: [
      { en: "See? Your fears about the interview were totally unfounded.", kr: "봐, 면접 걱정은 완전히 괜한 걱정이었잖아." },
      { en: "Don't worry, those layoff rumors are unfounded.", kr: "걱정 마, 정리 해고 소문은 근거 없는 얘기야." }
    ]
  },
  {
    id: "L5-652",
    word: "frivolous",
    meaning: "쓸데없는, 하찮은, 경박한",
    examples: [
      { en: "Stop spending money on frivolous things.", kr: "쓸데없는 데 돈 쓰지 마." },
      { en: "It sounds frivolous, but this candle makes me happy.", kr: "쓸데없어 보이겠지만 이 양초가 날 행복하게 해." }
    ]
  },
  {
    id: "L5-653",
    word: "misconception",
    meaning: "오해, 잘못된 생각",
    examples: [
      { en: "It's a common misconception that introverts don't like people.", kr: "내향적인 사람이 사람을 싫어한다는 건 흔한 오해야." },
      { en: "Let me clear up a few misconceptions about the job.", kr: "그 일에 대한 몇 가지 오해를 풀어 드릴게요." }
    ]
  },
  {
    id: "L5-654",
    word: "nudge",
    meaning: "(팔꿈치로) 쿡 찌르다, 슬쩍 재촉하다",
    examples: [
      { en: "She nudged me when the boss walked in.", kr: "사장님이 들어오자 그녀가 나를 쿡 찔렀어." },
      { en: "Can you nudge the team to send their reports by Friday?", kr: "팀원들한테 금요일까지 보고서 보내라고 슬쩍 말해 줄래?" }
    ]
  },
  {
    id: "L5-854",
    word: "clingy",
    meaning: "들러붙는, 집착하는, 껌딱지 같은",
    examples: [
      { en: "My boyfriend gets clingy when I travel without him.", kr: "남자친구는 내가 혼자 여행 가면 엄청 들러붙어." },
      { en: "Our puppy is so clingy; she follows me everywhere.", kr: "우리 강아지는 완전 껌딱지야. 어디든 따라와." }
    ]
  },
  {
    id: "L5-656",
    word: "anecdote",
    meaning: "일화, 에피소드",
    examples: [
      { en: "He opened his speech with a funny anecdote.", kr: "그는 재밌는 일화로 연설을 시작했어." },
      { en: "That's just an anecdote; it doesn't prove anything.", kr: "그건 그냥 개인적인 일화일 뿐이지, 아무것도 증명하지 못해." }
    ]
  },
  {
    id: "L5-657",
    word: "backlog",
    meaning: "밀린 일, 잔무",
    examples: [
      { en: "I have a huge backlog of emails after my vacation.", kr: "휴가 다녀왔더니 이메일이 산더미처럼 밀려 있어." },
      { en: "Sorry for the delay, we're dealing with a backlog of orders.", kr: "늦어서 죄송해요, 밀린 주문을 처리하고 있어서요." }
    ]
  },
  {
    id: "L5-658",
    word: "clumsy",
    meaning: "덜렁대는, 서투른, 어설픈",
    examples: [
      { en: "I'm so clumsy; I spilled coffee on my laptop again.", kr: "나 진짜 덜렁대. 노트북에 또 커피 쏟았어." },
      { en: "His apology was clumsy, but I knew he meant it.", kr: "그의 사과는 어설펐지만 진심이란 건 알았어." }
    ]
  },
  {
    id: "L5-659",
    word: "deprivation",
    meaning: "부족, 결핍, 박탈",
    examples: [
      { en: "Sleep deprivation is making me so cranky.", kr: "잠이 부족해서 너무 예민해졌어." },
      { en: "Long-term sleep deprivation is really bad for your health.", kr: "장기적인 수면 부족은 건강에 정말 안 좋아." }
    ]
  }
];

const wordsLevel5_Part4 = [
  {
    id: "L5-660",
    word: "feasibility",
    meaning: "실현 가능성, 타당성",
    examples: [
      { en: "Did anyone actually do a feasibility study on this?", kr: "이거 실현 가능성 검토를 누가 하긴 했어요?" },
      { en: "Let's check the feasibility before we promise anything.", kr: "뭔가 약속하기 전에 실현 가능한지부터 확인합시다." }
    ]
  },
  {
    id: "L5-661",
    word: "frenzy",
    meaning: "광란, 열광, 북새통",
    examples: [
      { en: "The holiday sale turned the mall into a shopping frenzy.", kr: "연말 세일 때문에 쇼핑몰이 북새통이 됐어." },
      { en: "The kids went into a frenzy when they saw the cake.", kr: "애들이 케이크를 보고 난리가 났어." }
    ]
  },
  {
    id: "L5-662",
    word: "indifferent",
    meaning: "무관심한, 개의치 않는",
    examples: [
      { en: "I'm pretty indifferent; you pick the restaurant.", kr: "난 아무래도 상관없어. 식당은 네가 골라." },
      { en: "He seemed totally indifferent to what his boss said.", kr: "그는 상사가 한 말에 전혀 신경 안 쓰는 것 같았어." }
    ]
  },
  {
    id: "L5-663",
    word: "powerhouse",
    meaning: "강자, 실력자, 강국",
    examples: [
      { en: "Korea has become a global powerhouse in pop culture.", kr: "한국은 대중문화 분야에서 세계적인 강국이 됐어." },
      { en: "Our new sales manager is an absolute powerhouse.", kr: "새로 온 영업 매니저님은 진짜 능력자야." }
    ]
  },
  {
    id: "L5-664",
    word: "provocative",
    meaning: "도발적인, 자극적인",
    examples: [
      { en: "That's a provocative question, but I'll answer it.", kr: "도발적인 질문이지만 대답할게요." },
      { en: "Her outfit was a bit provocative for a work party.", kr: "회사 파티에 입기엔 그녀 옷차림이 좀 자극적이었어." }
    ]
  },
  {
    id: "L5-855",
    word: "jinx",
    meaning: "(말해서) 부정 타게 하다, 징크스",
    examples: [
      { en: "Don't say we'll win; you'll jinx it!", kr: "우리가 이긴다고 말하지 마. 부정 타!" },
      { en: "Ugh, I said it wouldn't rain, and I totally jinxed it.", kr: "아, 비 안 올 거라고 했더니 완전 부정 탔네." }
    ]
  },
  {
    id: "L5-665",
    word: "reclaim",
    meaning: "되찾다, 환급받다, 회수하다",
    examples: [
      { en: "I finally reclaimed my weekends after quitting that job.", kr: "그 일을 그만두고 드디어 주말을 되찾았어." },
      { en: "You can reclaim the tax at the airport before you fly home.", kr: "귀국하기 전에 공항에서 세금을 환급받을 수 있어요." }
    ]
  },
  {
    id: "L5-666",
    word: "relocate",
    meaning: "이사하다, 이전하다",
    examples: [
      { en: "Would you be willing to relocate for this job?", kr: "이 일을 위해 이사할 의향이 있으세요?" },
      { en: "We're relocating to Busan next spring.", kr: "우리 내년 봄에 부산으로 이사 가." }
    ]
  },
  {
    id: "L5-667",
    word: "repayment",
    meaning: "상환, 갚음",
    examples: [
      { en: "When's your next loan repayment due?", kr: "다음 대출 상환일이 언제야?" },
      { en: "I set up automatic repayment so I never miss a payment.", kr: "절대 안 놓치게 자동 상환을 설정해 뒀어." }
    ]
  },
  {
    id: "L5-856",
    word: "micromanage",
    meaning: "사사건건 간섭하다, 세세하게 관리하다",
    examples: [
      { en: "My boss micromanages everything, even my emails.", kr: "우리 상사는 내 이메일까지 하나하나 간섭해." },
      { en: "I trust you, so I won't micromanage.", kr: "너를 믿으니까 일일이 간섭하진 않을게." }
    ]
  },
  {
    id: "L5-668",
    word: "sturdy",
    meaning: "튼튼한, 견고한",
    examples: [
      { en: "Get a sturdy suitcase if you travel a lot.", kr: "여행을 자주 하면 튼튼한 여행 가방을 사." },
      { en: "Is this chair sturdy enough to stand on?", kr: "이 의자 올라서도 될 만큼 튼튼해?" }
    ]
  },
  {
    id: "L5-669",
    word: "timetable",
    meaning: "시간표, 일정표",
    examples: [
      { en: "Check the train timetable before we leave the hotel.", kr: "호텔 나가기 전에 기차 시간표 확인해." },
      { en: "What's the timetable for finishing the renovation?", kr: "리모델링 끝나는 일정이 어떻게 돼요?" }
    ]
  },
  {
    id: "L5-857",
    word: "hustle",
    meaning: "열심히 뛰다, 서두르다, 부업",
    examples: [
      { en: "We need to hustle or we'll miss the train.", kr: "서둘러야 돼, 안 그러면 기차 놓쳐." },
      { en: "She's got a side hustle selling cakes.", kr: "걔는 부업으로 케이크 팔아." }
    ]
  },
  {
    id: "L5-671",
    word: "appraisal",
    meaning: "평가, 감정",
    examples: [
      { en: "My performance appraisal is next week, and I'm nervous.", kr: "다음 주에 인사 평가가 있어서 긴장돼." },
      { en: "The bank needs a home appraisal before approving the loan.", kr: "은행에서 대출 승인 전에 집 감정이 필요하대요." }
    ]
  },
  {
    id: "L5-672",
    word: "bleak",
    meaning: "암울한, 황량한",
    examples: [
      { en: "Things look pretty bleak right now, but we'll get through it.", kr: "지금은 상황이 꽤 암울하지만 우린 이겨낼 거야." },
      { en: "The town looks so bleak in the winter.", kr: "그 마을은 겨울엔 너무 황량해 보여." }
    ]
  },
  {
    id: "L5-673",
    word: "dizzy",
    meaning: "어지러운",
    examples: [
      { en: "I felt dizzy after standing up too fast.", kr: "너무 빨리 일어났더니 어지러웠어." },
      { en: "If you feel dizzy, sit down and drink some water.", kr: "어지러우면 앉아서 물 좀 마셔." }
    ]
  },
  {
    id: "L5-858",
    word: "savory",
    meaning: "짭짤한, 감칠맛 나는",
    examples: [
      { en: "I'm not into sweets; I prefer savory snacks.", kr: "난 단 거 별로야. 짭짤한 간식이 더 좋아." },
      { en: "Do you want something sweet or savory for breakfast?", kr: "아침으로 단 거 먹을래, 짭짤한 거 먹을래?" }
    ]
  },
  {
    id: "L5-674",
    word: "expressive",
    meaning: "표현력이 풍부한, 감정이 잘 드러나는",
    examples: [
      { en: "She has really expressive eyes.", kr: "그녀는 눈으로 감정을 참 잘 드러내." },
      { en: "Kids are usually more expressive than adults.", kr: "애들은 보통 어른보다 감정 표현을 잘해." }
    ]
  },
  {
    id: "L5-675",
    word: "livelihood",
    meaning: "생계, 생계 수단",
    examples: [
      { en: "This shop is my whole livelihood, so I can't close it.", kr: "이 가게가 내 생계 전부라서 문을 닫을 수 없어." },
      { en: "Bad reviews can really hurt a small restaurant's livelihood.", kr: "나쁜 리뷰는 작은 식당의 생계에 큰 타격을 줄 수 있어." }
    ]
  },
  {
    id: "L5-676",
    word: "miraculous",
    meaning: "기적적인, 기적 같은",
    examples: [
      { en: "She made a miraculous recovery after the accident.", kr: "그녀는 사고 후 기적적으로 회복했어." },
      { en: "Finding my lost wallet in the taxi felt miraculous.", kr: "택시에서 잃어버린 지갑을 찾은 건 기적 같았어." }
    ]
  },
  {
    id: "L5-752",
    word: "attire",
    meaning: "복장, 옷차림",
    examples: [
      { en: "Is casual attire okay for the party tonight?", kr: "오늘 밤 파티에 편한 복장 괜찮아요?" },
      { en: "The invitation says formal attire, so wear a suit.", kr: "초대장에 정장 차림이라고 쓰여 있으니 정장 입어." }
    ]
  },
  {
    id: "L5-677",
    word: "mourn",
    meaning: "애도하다, 슬퍼하다",
    examples: [
      { en: "It's okay to mourn after a breakup.", kr: "헤어지고 나서 슬퍼하는 건 괜찮아." },
      { en: "The whole neighborhood mourned when the old baker passed away.", kr: "그 나이 든 제빵사 분이 돌아가셨을 때 동네 전체가 애도했어." }
    ]
  },
  {
    id: "L5-859",
    word: "procrastinate",
    meaning: "(할 일을) 미루다, 꾸물거리다",
    examples: [
      { en: "Stop procrastinating and just start the report.", kr: "그만 미루고 일단 보고서부터 시작해." },
      { en: "I always procrastinate when I have a big exam coming up.", kr: "난 큰 시험이 다가오면 항상 할 일을 미뤄." }
    ]
  },
  {
    id: "L5-678",
    word: "obsessive",
    meaning: "집착하는, 강박적인",
    examples: [
      { en: "He's a little obsessive about keeping his desk clean.", kr: "그는 책상 깨끗하게 하는 데 좀 집착해." },
      { en: "My obsessive email checking is ruining my weekends.", kr: "강박적으로 이메일 확인하는 습관 때문에 주말을 망치고 있어." }
    ]
  },
  {
    id: "L5-679",
    word: "proficiency",
    meaning: "능숙함, 실력, 숙달",
    examples: [
      { en: "This job requires proficiency in English and Excel.", kr: "이 일은 영어와 엑셀 실력이 필요해요." },
      { en: "Do I need a language proficiency test for the visa?", kr: "비자 받으려면 어학 능력 시험이 필요한가요?" }
    ]
  },
  {
    id: "L5-680",
    word: "reinforcement",
    meaning: "강화, 보강, 지원 인력",
    examples: [
      { en: "Positive reinforcement works better than yelling with kids.", kr: "애들한테는 소리 지르는 것보다 칭찬으로 북돋아 주는 게 더 효과적이야." },
      { en: "We're short-staffed; we need reinforcements!", kr: "일손이 부족해요, 지원 인력이 필요해요!" }
    ]
  },
  {
    id: "L5-681",
    word: "divert",
    meaning: "우회시키다, (주의를) 돌리다",
    examples: [
      { en: "Our flight got diverted because of fog.", kr: "안개 때문에 우리 비행기가 다른 공항으로 우회했어." },
      { en: "Stop trying to divert attention from your mistake.", kr: "네 실수에서 관심 돌리려고 하지 마." }
    ]
  },
  {
    id: "L5-682",
    word: "elegance",
    meaning: "우아함, 세련됨, 품격",
    examples: [
      { en: "I love the simple elegance of this dress.", kr: "이 드레스의 심플하면서 우아한 느낌이 좋아." },
      { en: "The hotel lobby has a quiet elegance.", kr: "호텔 로비가 은은하게 고급스러워." }
    ]
  },
  {
    id: "L5-683",
    word: "irritation",
    meaning: "짜증, (피부) 자극",
    examples: [
      { en: "She couldn't hide her irritation during the long meeting.", kr: "긴 회의 동안 그녀는 짜증을 숨기지 못했어." },
      { en: "Stop using that cream if you get any irritation.", kr: "자극이 느껴지면 그 크림 쓰지 마세요." }
    ]
  },
  {
    id: "L5-684",
    word: "solitude",
    meaning: "고독, 혼자 있는 시간",
    examples: [
      { en: "I enjoy the solitude of early morning walks.", kr: "이른 아침 혼자 걷는 시간이 좋아." },
      { en: "After a busy week, I just need some solitude.", kr: "바빴던 한 주가 지나서 그냥 혼자 있는 시간이 필요해." }
    ]
  },
  {
    id: "L5-685",
    word: "truthful",
    meaning: "솔직한, 정직한, 사실대로의",
    examples: [
      { en: "Please be truthful with me about what happened.", kr: "무슨 일이 있었는지 솔직하게 말해 줘." },
      { en: "To be truthful, I didn't read the whole report.", kr: "사실대로 말하면 보고서를 다 읽진 않았어요." }
    ]
  },
  {
    id: "L5-686",
    word: "unconventional",
    meaning: "독특한, 색다른, 관례를 벗어난",
    examples: [
      { en: "Her unconventional approach to marketing really paid off.", kr: "그녀의 독특한 마케팅 방식이 정말 효과를 봤어." },
      { en: "We had an unconventional wedding on a hiking trail.", kr: "우리는 등산로에서 색다른 결혼식을 했어." }
    ]
  },
  {
    id: "L5-687",
    word: "hurdle",
    meaning: "장애물, 난관, 고비",
    examples: [
      { en: "Getting a work visa was the biggest hurdle for me.", kr: "취업 비자 받는 게 나한테 제일 큰 난관이었어." },
      { en: "We cleared the last hurdle, so let's celebrate!", kr: "마지막 고비를 넘겼으니 축하하자!" }
    ]
  },
  {
    id: "L5-860",
    word: "killjoy",
    meaning: "분위기 깨는 사람, 흥을 깨는 사람",
    examples: [
      { en: "Don't be a killjoy, stay for one more song.", kr: "분위기 깨지 말고 한 곡만 더 있다 가." },
      { en: "I hate being the killjoy, but we have to leave.", kr: "분위기 깨는 사람 되기 싫지만 우리 가야 돼." }
    ]
  },
  {
    id: "L5-688",
    word: "insightful",
    meaning: "통찰력 있는, 예리한",
    examples: [
      { en: "Thanks for the insightful feedback on my presentation.", kr: "제 발표에 대한 날카로운 피드백 감사합니다." },
      { en: "That's a really insightful point; I never thought of that.", kr: "정말 예리한 지적이네. 그건 생각 못 했어." }
    ]
  },
  {
    id: "L5-689",
    word: "persuasive",
    meaning: "설득력 있는",
    examples: [
      { en: "You're very persuasive; fine, I'll come along.", kr: "너 정말 설득력 있다. 알았어, 같이 갈게." },
      { en: "Good salespeople are persuasive without being pushy.", kr: "좋은 영업 사원은 강요하지 않으면서 설득력이 있어." }
    ]
  },
  {
    id: "L5-690",
    word: "tremendously",
    meaning: "엄청나게, 대단히",
    examples: [
      { en: "Your support has helped me tremendously this year.", kr: "올해 네 응원이 나한테 엄청 큰 힘이 됐어." },
      { en: "I enjoyed the concert tremendously.", kr: "콘서트 정말 엄청 재밌었어." }
    ]
  },
  {
    id: "L5-691",
    word: "unleash",
    meaning: "마음껏 발휘하게 하다, (감정을) 쏟아내다, 풀어놓다",
    examples: [
      { en: "This class will help you unleash your creativity.", kr: "이 수업은 여러분의 창의력을 마음껏 발휘하게 도와줄 거예요." },
      { en: "She unleashed all her anger on me.", kr: "그녀가 나한테 화를 다 쏟아냈어." }
    ]
  },
  {
    id: "L5-692",
    word: "authoritative",
    meaning: "신뢰할 만한, 권위 있는, 단호한",
    examples: [
      { en: "Is this website an authoritative source, or just a blog?", kr: "이 웹사이트가 믿을 만한 출처야, 아니면 그냥 블로그야?" },
      { en: "She has a calm but authoritative voice.", kr: "그녀는 차분하지만 단호한 목소리를 가졌어." }
    ]
  },
  {
    id: "L5-753",
    word: "catchy",
    meaning: "귀에 쏙 들어오는, 기억하기 쉬운, 중독성 있는",
    examples: [
      { en: "This song is so catchy, I can't stop humming it.", kr: "이 노래 너무 중독성 있어서 계속 흥얼거리게 돼." },
      { en: "We need a catchy name for the new product.", kr: "신제품에 기억하기 쉬운 이름이 필요해." }
    ]
  },
  {
    id: "L5-693",
    word: "bureaucratic",
    meaning: "관료적인, 절차가 번거로운",
    examples: [
      { en: "Getting a refund was such a bureaucratic nightmare.", kr: "환불받는 건 절차가 끔찍하게 번거로웠어." },
      { en: "Our company has gotten way too bureaucratic.", kr: "우리 회사는 너무 관료적으로 변했어." }
    ]
  },
  {
    id: "L5-694",
    word: "chronological",
    meaning: "시간 순서의, 연대순의",
    examples: [
      { en: "List your jobs in reverse chronological order.", kr: "경력을 최신순으로 적어 주세요." },
      { en: "Should we watch the movies in chronological order?", kr: "영화를 시간 순서대로 볼까?" }
    ]
  },
  {
    id: "L5-695",
    word: "daunting",
    meaning: "벅찬, 엄두가 안 나는, 주눅 들게 하는",
    examples: [
      { en: "Moving to a new country alone sounds so daunting.", kr: "혼자 새로운 나라로 이사 가는 건 너무 벅차게 들려." },
      { en: "This pile of laundry is daunting.", kr: "이 빨래 더미 보니까 엄두가 안 나." }
    ]
  },
  {
    id: "L5-696",
    word: "distrust",
    meaning: "불신, 믿지 않다",
    examples: [
      { en: "I distrust any deal that sounds too good to be true.", kr: "너무 좋아 보이는 거래는 다 믿지 않아." },
      { en: "There's a lot of distrust between the two teams.", kr: "두 팀 사이에 불신이 많아." }
    ]
  },
  {
    id: "L5-697",
    word: "embark",
    meaning: "시작하다, 착수하다, 승선하다",
    examples: [
      { en: "She embarked on a new career after turning forty.", kr: "그녀는 마흔이 넘어서 새로운 일을 시작했어." },
      { en: "We're embarking on a big kitchen renovation next month.", kr: "우리 다음 달에 부엌 리모델링을 크게 시작해." }
    ]
  },
  {
    id: "L5-698",
    word: "etiquette",
    meaning: "예절, 에티켓",
    examples: [
      { en: "Is it bad etiquette to tip here?", kr: "여기서 팁 주는 게 예의에 어긋나나요?" },
      { en: "Hitting reply all is sometimes bad email etiquette.", kr: "전체 답장은 가끔 이메일 예절에 어긋나." }
    ]
  },
  {
    id: "L5-347",
    word: "debacle",
    meaning: "대실패, 대참사",
    examples: [
      { en: "Remember the debacle at last year's company picnic?", kr: "작년 회사 야유회 대참사 기억나?" },
      { en: "The new website launch was a complete debacle.", kr: "새 웹사이트 출시는 완전 실패였어." }
    ]
  },
  {
    id: "L5-699",
    word: "hypocrite",
    meaning: "위선자",
    examples: [
      { en: "He lectures us about saving money, but he's a total hypocrite.", kr: "그는 우리한테 돈 아끼라고 잔소리하면서 정작 완전 위선자야." },
      { en: "I'd be a hypocrite if I told you to never eat junk food.", kr: "너한테 정크 푸드 절대 먹지 말라고 하면 나는 위선자일 거야." }
    ]
  },
  {
    id: "L5-700",
    word: "reassuring",
    meaning: "안심시키는, 위안이 되는",
    examples: [
      { en: "It's reassuring to know you're nearby.", kr: "네가 근처에 있다니 안심이 돼." },
      { en: "The doctor was very reassuring, so I feel better.", kr: "의사 선생님이 안심시켜 주셔서 기분이 나아졌어." }
    ]
  },
  {
    id: "L5-701",
    word: "reliably",
    meaning: "확실하게, 믿을 수 있게, 안정적으로",
    examples: [
      { en: "This old car still runs reliably every day.", kr: "이 오래된 차는 아직도 매일 문제없이 잘 굴러가." },
      { en: "The Wi-Fi here doesn't work reliably, so download it first.", kr: "여기 와이파이가 불안정하니까 먼저 다운받아 둬." }
    ]
  },
  {
    id: "L5-702",
    word: "cornerstone",
    meaning: "초석, 근간, 핵심",
    examples: [
      { en: "Trust is the cornerstone of any good relationship.", kr: "신뢰는 모든 좋은 관계의 기본이야." },
      { en: "Good coffee is the cornerstone of my morning routine.", kr: "좋은 커피는 내 아침 루틴의 핵심이야." }
    ]
  },
  {
    id: "L5-703",
    word: "evade",
    meaning: "피하다, 회피하다, 모면하다",
    examples: [
      { en: "Stop evading the question and just answer me.", kr: "질문 피하지 말고 그냥 대답해." },
      { en: "He always evades responsibility when things go wrong.", kr: "그는 일이 잘못되면 항상 책임을 회피해." }
    ]
  },
  {
    id: "L5-704",
    word: "gloomy",
    meaning: "우울한, 어두운, 흐린",
    examples: [
      { en: "It's been gloomy and rainy all week.", kr: "일주일 내내 흐리고 비가 왔어." },
      { en: "Don't look so gloomy; it's not the end of the world.", kr: "그렇게 우울한 표정 짓지 마. 세상이 끝난 것도 아니잖아." }
    ]
  },
  {
    id: "L5-705",
    word: "heartbreak",
    meaning: "상심, 비통, 실연의 아픔",
    examples: [
      { en: "It took her months to get over the heartbreak.", kr: "그녀가 실연의 아픔을 극복하는 데 몇 달이 걸렸어." },
      { en: "Losing in the last minute was total heartbreak.", kr: "마지막 1분에 진 건 정말 가슴 아팠어." }
    ]
  },
  {
    id: "L5-706",
    word: "obligatory",
    meaning: "의무적인, 필수의, 의례적인",
    examples: [
      { en: "Is the safety training obligatory for everyone?", kr: "안전 교육은 모두 필수인가요?" },
      { en: "He made the obligatory joke about the weather.", kr: "그는 의례적으로 날씨 농담을 했어." }
    ]
  },
  {
    id: "L5-707",
    word: "prescribe",
    meaning: "처방하다, 규정하다",
    examples: [
      { en: "The doctor prescribed antibiotics for my sore throat.", kr: "의사가 목 아픈 데 항생제를 처방해 줬어." },
      { en: "Can you prescribe something stronger for the pain?", kr: "통증에 좀 더 센 약을 처방해 주실 수 있나요?" }
    ]
  },
  {
    id: "L5-708",
    word: "shameless",
    meaning: "뻔뻔한, 염치없는",
    examples: [
      { en: "That was a shameless attempt to take credit for my work.", kr: "그건 내 공을 가로채려는 뻔뻔한 시도였어." },
      { en: "Sorry for the shameless plug, but please follow my channel.", kr: "뻔뻔한 홍보 죄송하지만, 제 채널 팔로우해 주세요." }
    ]
  },
  {
    id: "L5-709",
    word: "vigorously",
    meaning: "힘차게, 격렬하게, 강력히",
    examples: [
      { en: "Stir the sauce vigorously so it doesn't burn.", kr: "소스가 타지 않게 힘차게 저어." },
      { en: "He vigorously denied eating my leftovers.", kr: "그는 내 남은 음식을 먹은 걸 극구 부인했어." }
    ]
  },
  {
    id: "L5-710",
    word: "deceive",
    meaning: "속이다, 기만하다",
    examples: [
      { en: "Don't let first impressions deceive you.", kr: "첫인상에 속지 마." },
      { en: "I felt deceived when I saw the real hotel room.", kr: "실제 호텔 방을 보고 속은 기분이었어." }
    ]
  },
  {
    id: "L5-711",
    word: "exemplary",
    meaning: "모범적인, 훌륭한",
    examples: [
      { en: "Your work on this project has been exemplary.", kr: "이 프로젝트에서 보여 주신 업무는 정말 모범적이었어요." },
      { en: "The customer service there was exemplary.", kr: "거기 고객 서비스는 정말 훌륭했어." }
    ]
  },
  {
    id: "L5-712",
    word: "obnoxious",
    meaning: "밉살스러운, 아주 불쾌한, 거슬리는",
    examples: [
      { en: "The guy next to me on the plane was so obnoxious.", kr: "비행기에서 내 옆자리 남자가 너무 밉상이었어." },
      { en: "That ringtone is so obnoxious; please change it.", kr: "그 벨소리 너무 거슬려. 제발 바꿔." }
    ]
  },
  {
    id: "L5-713",
    word: "resent",
    meaning: "원망하다, 분개하다, 불쾌하게 여기다",
    examples: [
      { en: "I resent being treated like a child at work.", kr: "회사에서 애 취급받는 게 정말 불쾌해." },
      { en: "Do you still resent him for what he said?", kr: "그가 했던 말 때문에 아직도 그 사람 원망해?" }
    ]
  },
  {
    id: "L5-714",
    word: "affluent",
    meaning: "부유한, 풍족한",
    examples: [
      { en: "They live in a pretty affluent neighborhood.", kr: "그 사람들은 꽤 부유한 동네에 살아." },
      { en: "This brand mostly targets young, affluent professionals.", kr: "이 브랜드는 주로 젊고 부유한 직장인을 겨냥해." }
    ]
  },
  {
    id: "L5-364",
    word: "eulogy",
    meaning: "추도사, 추도 연설",
    examples: [
      { en: "Her best friend gave a beautiful eulogy at the funeral.", kr: "그녀의 가장 친한 친구가 장례식에서 아름다운 추도사를 했어." },
      { en: "I've been asked to give the eulogy, and I'm nervous.", kr: "추도사를 부탁받았는데 긴장돼." }
    ]
  },
  {
    id: "L5-861",
    word: "mortified",
    meaning: "몹시 창피한, 민망해 죽을 것 같은",
    examples: [
      { en: "I was mortified when I tripped on stage.", kr: "무대에서 넘어졌을 때 창피해 죽는 줄 알았어." },
      { en: "My mom showed my baby photos, and I was mortified.", kr: "엄마가 내 아기 때 사진을 보여 줘서 너무 민망했어." }
    ]
  },
  {
    id: "L5-862",
    word: "rehash",
    meaning: "(같은 얘기를) 되풀이하다, 재탕하다",
    examples: [
      { en: "Let's not rehash the same old argument.", kr: "또 같은 얘기로 싸우지 말자." },
      { en: "This movie is just a rehash of the first one.", kr: "이 영화 그냥 1편 재탕이야." }
    ]
  },
  {
    id: "L5-863",
    word: "flabbergasted",
    meaning: "어안이 벙벙한, 기가 막힌",
    examples: [
      { en: "I was flabbergasted when I saw the bill.", kr: "계산서 보고 기가 막혔어." },
      { en: "She was flabbergasted that he remembered her birthday.", kr: "걔는 그 사람이 생일을 기억해서 어안이 벙벙했어." }
    ]
  },
  {
    id: "L5-718",
    word: "brochure",
    meaning: "안내 책자, 팸플릿",
    examples: [
      { en: "Can I grab a brochure for the city tours?", kr: "시내 투어 안내 책자 하나 가져가도 될까요?" },
      { en: "The hotel looked way nicer in the brochure.", kr: "호텔이 팸플릿에서는 훨씬 좋아 보였는데." }
    ]
  },
  {
    id: "L5-864",
    word: "sheepish",
    meaning: "멋쩍은, 머쓱한",
    examples: [
      { en: "He gave me a sheepish smile and said sorry.", kr: "걔가 멋쩍게 웃으면서 미안하다고 했어." },
      { en: "I felt a little sheepish asking for help again.", kr: "또 도와 달라고 하려니 좀 머쓱했어." }
    ]
  },
  {
    id: "L5-720",
    word: "setback",
    meaning: "차질, 좌절",
    examples: [
      { en: "Don't let one setback stop you from trying again.", kr: "한 번의 좌절 때문에 다시 도전하는 걸 멈추지 마." },
      { en: "The delay is a setback, but we can still make it.", kr: "지연된 건 차질이지만 그래도 해낼 수 있어." }
    ]
  },
  {
    id: "L5-721",
    word: "surpass",
    meaning: "능가하다, 넘어서다",
    examples: [
      { en: "Wow, our sales surpassed all expectations this month!", kr: "와, 이번 달 매출이 모든 기대를 넘어섰어!" },
      { en: "Honestly, the sequel surpassed the original.", kr: "솔직히 속편이 원작보다 나았어." }
    ]
  },
  {
    id: "L5-865",
    word: "overshare",
    meaning: "사생활을 지나치게 털어놓다, TMI를 말하다",
    examples: [
      { en: "Sorry, I think I overshared just now.", kr: "미안, 방금 TMI였던 것 같아." },
      { en: "My uncle always overshares at family dinners.", kr: "우리 삼촌은 가족 식사 때마다 너무 많은 걸 얘기해." }
    ]
  },
  {
    id: "L5-866",
    word: "windfall",
    meaning: "뜻밖의 횡재, 공돈",
    examples: [
      { en: "What would you do with a sudden windfall?", kr: "갑자기 공돈 생기면 뭐 할 거야?" },
      { en: "The tax refund was a nice little windfall.", kr: "세금 환급금이 쏠쏠한 횡재였어." }
    ]
  },
  {
    id: "L5-723",
    word: "discredit",
    meaning: "신빙성을 떨어뜨리다, 믿지 못하게 하다",
    examples: [
      { en: "Are you trying to discredit me in front of everyone?", kr: "모두 앞에서 내 말을 못 믿게 만들려는 거야?" },
      { en: "One fake review can discredit a whole business.", kr: "가짜 리뷰 하나로 가게 전체 신뢰가 떨어질 수 있어." }
    ]
  },
  {
    id: "L5-724",
    word: "dysfunctional",
    meaning: "제대로 굴러가지 않는, 엉망인, 역기능적인",
    examples: [
      { en: "Working on a dysfunctional team is exhausting.", kr: "제대로 안 굴러가는 팀에서 일하는 건 너무 지쳐." },
      { en: "Every family is a little dysfunctional, right?", kr: "모든 가족이 조금씩은 엉망이잖아, 그렇지?" }
    ]
  },
  {
    id: "L5-725",
    word: "hefty",
    meaning: "(액수가) 상당한, 두둑한, 무거운",
    examples: [
      { en: "I had to pay a hefty fine for parking there.", kr: "거기 주차해서 벌금을 꽤 많이 냈어." },
      { en: "Congrats! I heard you got a hefty raise.", kr: "축하해! 월급이 꽤 많이 올랐다며." }
    ]
  },
  {
    id: "L5-726",
    word: "noticeably",
    meaning: "눈에 띄게, 현저히",
    examples: [
      { en: "You look noticeably happier these days.", kr: "너 요즘 눈에 띄게 행복해 보여." },
      { en: "He was noticeably nervous before the interview.", kr: "그는 면접 전에 눈에 띄게 긴장했어." }
    ]
  },
  {
    id: "L5-867",
    word: "finicky",
    meaning: "까다로운, 깐깐한",
    examples: [
      { en: "My cat is so finicky about her food.", kr: "우리 고양이는 먹는 거에 진짜 까다로워." },
      { en: "This printer is finicky, you have to jiggle it.", kr: "이 프린터 까다로워서 좀 흔들어야 돼." }
    ]
  },
  {
    id: "L5-868",
    word: "stumped",
    meaning: "막막한, 말문이 막힌, 쩔쩔매는",
    examples: [
      { en: "That question has me totally stumped.", kr: "그 질문엔 완전히 말문이 막혔어." },
      { en: "I'm stumped; I have no idea what to buy her.", kr: "막막해. 걔한테 뭘 사 줘야 할지 전혀 모르겠어." }
    ]
  },
  {
    id: "L5-728",
    word: "rebellious",
    meaning: "반항적인",
    examples: [
      { en: "I went through a rebellious phase as a teenager.", kr: "나는 10대 때 반항기를 겪었어." },
      { en: "My daughter's being rebellious and dyed her hair green.", kr: "우리 딸이 반항하느라 머리를 초록색으로 염색했어." }
    ]
  },
  {
    id: "L5-729",
    word: "slump",
    meaning: "슬럼프, 부진, 침체",
    examples: [
      { en: "I've been in a slump at work lately.", kr: "요즘 일에 슬럼프가 왔어." },
      { en: "He's in a hitting slump this season.", kr: "그는 이번 시즌 타격 부진에 빠졌어." }
    ]
  },
  {
    id: "L5-730",
    word: "understatement",
    meaning: "절제된 표현, 줄여서 말하기",
    examples: [
      { en: "Saying the trip was tiring is an understatement.", kr: "그 여행이 피곤했다는 말로는 한참 부족해." },
      { en: "Calling her talented would be an understatement.", kr: "그녀를 재능 있다고 하는 건 너무 약한 표현이야." }
    ]
  },
  {
    id: "L5-731",
    word: "complimentary",
    meaning: "무료의, 칭찬하는",
    examples: [
      { en: "Is breakfast complimentary, or do I pay extra?", kr: "조식이 무료인가요, 아니면 추가 요금을 내야 하나요?" },
      { en: "My boss was really complimentary about my report.", kr: "상사가 내 보고서를 정말 칭찬해 줬어." }
    ]
  },
  {
    id: "L5-732",
    word: "crackdown",
    meaning: "단속, 엄중 단속",
    examples: [
      { en: "Slow down; there's a crackdown on speeding this week.", kr: "속도 줄여. 이번 주에 과속 단속하고 있어." },
      { en: "The school's doing a crackdown on phones in class.", kr: "학교에서 수업 중 휴대폰 사용을 단속하고 있어." }
    ]
  },
  {
    id: "L5-733",
    word: "escalate",
    meaning: "악화되다, 확대되다, (상부로) 넘기다",
    examples: [
      { en: "The argument escalated into a shouting match.", kr: "말다툼이 고함치는 싸움으로 번졌어." },
      { en: "If he's still unhappy, escalate it to your manager.", kr: "그 손님이 계속 불만이면 매니저에게 넘기세요." }
    ]
  },
  {
    id: "L5-734",
    word: "excessively",
    meaning: "지나치게, 과도하게",
    examples: [
      { en: "Don't you think he's excessively strict with his kids?", kr: "그 사람 애들한테 지나치게 엄하다고 생각하지 않아?" },
      { en: "I sweat excessively when I'm nervous.", kr: "난 긴장하면 땀을 과하게 흘려." }
    ]
  },
  {
    id: "L5-735",
    word: "reimbursement",
    meaning: "비용 정산, 환급, 상환",
    examples: [
      { en: "Submit your receipts to get reimbursement for travel expenses.", kr: "출장비 정산을 받으려면 영수증을 제출하세요." },
      { en: "Did you get your reimbursement for the taxi yet?", kr: "택시비 정산 받았어?" }
    ]
  },
  {
    id: "L5-736",
    word: "borderline",
    meaning: "경계선상의, 아슬아슬한, 거의 ~한",
    examples: [
      { en: "His comments were borderline rude.", kr: "그의 말은 거의 무례한 수준이었어." },
      { en: "Your blood pressure is borderline high, so watch your salt.", kr: "혈압이 경계선상으로 높으니까 소금 섭취 조심하세요." }
    ]
  },
  {
    id: "L5-737",
    word: "deceptive",
    meaning: "겉보기와 다른, 현혹하는, 기만적인",
    examples: [
      { en: "The photos were deceptive; the room was tiny.", kr: "사진이 속임수였어. 방이 엄청 작았거든." },
      { en: "Be careful, the calm water can be deceptive.", kr: "조심해, 잔잔한 물이 겉보기와 다를 수 있어." }
    ]
  },
  {
    id: "L5-390",
    word: "juggernaut",
    meaning: "막강한 존재, 거대 세력",
    examples: [
      { en: "That company has become a total juggernaut in streaming.", kr: "그 회사는 스트리밍 분야에서 완전 막강한 존재가 됐어." },
      { en: "Our team was a juggernaut this season; nobody could beat us.", kr: "이번 시즌 우리 팀은 무적이었어. 아무도 우릴 못 이겼어." }
    ]
  },
  {
    id: "L5-869",
    word: "whine",
    meaning: "징징대다, 투덜대다",
    examples: [
      { en: "Stop whining and just do your homework.", kr: "징징대지 말고 숙제나 해." },
      { en: "Sorry to whine, but this week has been awful.", kr: "투덜대서 미안한데, 이번 주 정말 최악이었어." }
    ]
  },
  {
    id: "L5-738",
    word: "disproportionate",
    meaning: "불균형한, 지나친",
    examples: [
      { en: "His reaction was totally disproportionate to the mistake.", kr: "그의 반응은 실수에 비해 너무 지나쳤어." },
      { en: "I do a disproportionate amount of the housework.", kr: "집안일을 내가 너무 많이 해." }
    ]
  },
  {
    id: "L5-739",
    word: "erratic",
    meaning: "불규칙한, 불안정한, 변덕스러운",
    examples: [
      { en: "My internet connection has been erratic all day.", kr: "하루 종일 인터넷 연결이 들쭉날쭉해." },
      { en: "His sleep schedule's been so erratic since the new job.", kr: "새 직장 다니고 나서 그의 수면 패턴이 너무 불규칙해." }
    ]
  },
  {
    id: "L5-740",
    word: "ridicule",
    meaning: "조롱, 비웃다",
    examples: [
      { en: "Never ridicule someone for asking a question.", kr: "질문했다고 누군가를 비웃지 마." },
      { en: "Everyone ridiculed my haircut back in middle school.", kr: "중학교 때 다들 내 머리 스타일을 놀렸어." }
    ]
  },
  {
    id: "L5-870",
    word: "scrounge",
    meaning: "여기저기서 구하다, 얻어내다",
    examples: [
      { en: "Let me scrounge up something for dinner.", kr: "저녁거리로 뭐라도 좀 찾아볼게." },
      { en: "I had to scrounge for change for the parking meter.", kr: "주차 미터기에 넣을 잔돈을 여기저기서 긁어모았어." }
    ]
  },
  {
    id: "L5-871",
    word: "loophole",
    meaning: "허점, 빠져나갈 구멍",
    examples: [
      { en: "There has to be a loophole somewhere.", kr: "어딘가에 허점이 있을 거야." },
      { en: "He found a loophole and got his money back.", kr: "걔가 허점을 찾아서 돈을 돌려받았어." }
    ]
  },
  {
    id: "L5-742",
    word: "disdain",
    meaning: "경멸, 하찮게 여기다",
    examples: [
      { en: "She looked at my cheap shoes with disdain.", kr: "그녀가 내 싸구려 신발을 경멸하듯 쳐다봤어." },
      { en: "He has total disdain for small talk.", kr: "그는 잡담을 아주 하찮게 여겨." }
    ]
  },
  {
    id: "L5-743",
    word: "eerie",
    meaning: "으스스한, 섬뜩한",
    examples: [
      { en: "The empty office feels eerie late at night.", kr: "늦은 밤 텅 빈 사무실은 으스스해." },
      { en: "It's eerie how much you look like your mom.", kr: "네가 엄마랑 소름 끼칠 정도로 닮았어." }
    ]
  },
  {
    id: "L5-744",
    word: "frantic",
    meaning: "정신없는, 다급한, 미친 듯한",
    examples: [
      { en: "It was a frantic morning trying to catch my flight.", kr: "비행기 타려고 정신없는 아침이었어." },
      { en: "She made a frantic call when she lost her passport.", kr: "그녀는 여권을 잃어버리고 다급하게 전화했어." }
    ]
  },
  {
    id: "L5-745",
    word: "holistic",
    meaning: "총체적인, 전체적인",
    examples: [
      { en: "My doctor takes a holistic approach to health.", kr: "우리 의사 선생님은 건강을 전체적으로 보는 방식으로 접근해." },
      { en: "We need a more holistic view of the problem, not quick fixes.", kr: "임시방편 말고 문제를 좀 더 전체적으로 봐야 해." }
    ]
  }
];

// --------------------------
// 레벨/파트별 단어 합치기
// --------------------------

// Level 1
const wordsLevel1 = [
  ...(typeof wordsLevel1_Part1 !== "undefined" ? wordsLevel1_Part1 : []),
  ...(typeof wordsLevel1_Part2 !== "undefined" ? wordsLevel1_Part2 : []),
  ...(typeof wordsLevel1_Part3 !== "undefined" ? wordsLevel1_Part3 : []),
  ...(typeof wordsLevel1_Part4 !== "undefined" ? wordsLevel1_Part4 : [])
];

// Level 2
const wordsLevel2 = [
  ...(typeof wordsLevel2_Part1 !== "undefined" ? wordsLevel2_Part1 : []),
  ...(typeof wordsLevel2_Part2 !== "undefined" ? wordsLevel2_Part2 : []),
  ...(typeof wordsLevel2_Part3 !== "undefined" ? wordsLevel2_Part3 : []),
  ...(typeof wordsLevel2_Part4 !== "undefined" ? wordsLevel2_Part4 : [])
];

// Level 3
const wordsLevel3 = [
  ...(typeof wordsLevel3_Part1 !== "undefined" ? wordsLevel3_Part1 : []),
  ...(typeof wordsLevel3_Part2 !== "undefined" ? wordsLevel3_Part2 : []),
  ...(typeof wordsLevel3_Part3 !== "undefined" ? wordsLevel3_Part3 : []),
  ...(typeof wordsLevel3_Part4 !== "undefined" ? wordsLevel3_Part4 : [])
];

// Level 4
const wordsLevel4 = [
  ...(typeof wordsLevel4_Part1 !== "undefined" ? wordsLevel4_Part1 : []),
  ...(typeof wordsLevel4_Part2 !== "undefined" ? wordsLevel4_Part2 : []),
  ...(typeof wordsLevel4_Part3 !== "undefined" ? wordsLevel4_Part3 : []),
  ...(typeof wordsLevel4_Part4 !== "undefined" ? wordsLevel4_Part4 : [])
];

// Level 5
const wordsLevel5 = [
  ...(typeof wordsLevel5_Part1 !== "undefined" ? wordsLevel5_Part1 : []),
  ...(typeof wordsLevel5_Part2 !== "undefined" ? wordsLevel5_Part2 : []),
  ...(typeof wordsLevel5_Part3 !== "undefined" ? wordsLevel5_Part3 : []),
  ...(typeof wordsLevel5_Part4 !== "undefined" ? wordsLevel5_Part4 : [])
];

// --------------------------
// script.js에서 사용할 최종 단어 배열
// --------------------------
const wordData = [
  ...wordsLevel1,
  ...wordsLevel2,
  ...wordsLevel3,
  ...wordsLevel4,
  ...wordsLevel5
];

// 학습 데이터 정리로 합쳐진 중복 단어: 예전 ID → 남은 같은 단어 ID (암기 기록 이어받기용, js/storage.js)
const wordIdAliases = {"L1-102": "L1-066", "L1-196": "L1-137", "L1-199": "L1-149", "L1-304": "L1-160", "L1-307": "L1-154", "L1-308": "L1-125", "L1-311": "L1-180", "L1-318": "L1-198", "L1-322": "L1-263", "L1-324": "L1-124", "L1-327": "L1-176", "L1-330": "L1-148", "L1-331": "L1-161", "L1-332": "L1-174", "L1-334": "L1-115", "L1-335": "L1-156", "L1-336": "L1-135", "L1-338": "L1-201", "L1-344": "L1-137", "L1-346": "L1-189", "L1-347": "L1-130", "L1-348": "L1-249", "L1-350": "L1-242", "L1-351": "L1-173", "L1-352": "L1-143", "L1-360": "L1-214", "L1-365": "L1-176", "L1-366": "L1-110", "L1-368": "L1-150", "L1-369": "L1-302", "L1-370": "L1-222", "L1-372": "L1-242", "L1-374": "L1-241", "L1-378": "L1-174", "L1-379": "L1-148", "L1-382": "L1-313", "L1-383": "L1-339", "L1-386": "L1-310", "L1-389": "L1-349", "L1-390": "L1-147", "L1-392": "L1-242", "L1-394": "L1-273", "L1-396": "L1-235", "L1-398": "L1-309", "L1-399": "L1-236", "L1-400": "L1-122", "L2-002": "L1-227", "L2-015": "L1-190", "L2-019": "L1-357", "L2-225": "L2-049", "L2-247": "L2-125", "L2-264": "L2-142", "L2-269": "L2-147", "L2-275": "L2-155", "L2-277": "L2-081", "L2-295": "L2-091", "L2-311": "L2-135", "L2-317": "L2-141", "L2-324": "L2-071", "L2-325": "L2-072", "L2-327": "L2-271", "L2-328": "L2-217", "L2-333": "L2-155", "L2-336": "L2-223", "L2-342": "L2-022", "L2-343": "L2-162", "L2-346": "L2-085", "L2-348": "L2-284", "L2-356": "L1-263", "L2-357": "L1-320", "L2-358": "L2-007", "L2-360": "L2-008", "L2-363": "L2-009", "L2-367": "L2-010", "L2-371": "L2-036", "L2-373": "L2-013", "L2-375": "L2-126", "L2-376": "L2-014", "L2-381": "L1-190", "L2-383": "L2-041", "L2-385": "L1-271", "L2-388": "L2-017", "L2-390": "L1-357", "L2-399": "L2-023", "L2-400": "L2-001", "L3-004": "L2-350", "L3-005": "L2-285", "L3-008": "L2-028", "L3-011": "L2-103", "L3-013": "L2-105", "L3-019": "L2-233", "L3-022": "L2-024", "L3-023": "L2-164", "L3-025": "L2-007", "L3-026": "L2-031", "L3-030": "L2-030", "L3-033": "L2-237", "L3-035": "L2-112", "L3-037": "L2-165", "L3-038": "L2-292", "L3-040": "L2-113", "L3-048": "L2-114", "L3-054": "L2-034", "L3-055": "L2-239", "L3-056": "L2-115", "L3-058": "L2-240", "L3-059": "L2-116", "L3-060": "L2-060", "L3-067": "L2-011", "L3-073": "L2-012", "L3-075": "L2-120", "L3-083": "L2-122", "L3-089": "L2-125", "L3-090": "L2-126", "L3-093": "L2-038", "L3-094": "L2-302", "L3-095": "L2-127", "L3-096": "L2-128", "L3-098": "L2-065", "L3-104": "L2-066", "L3-105": "L2-252", "L3-106": "L2-130", "L3-116": "L2-202", "L3-117": "L2-203", "L3-121": "L2-067", "L3-122": "L2-042", "L3-124": "L2-204", "L3-128": "L2-206", "L3-129": "L2-318", "L3-130": "L2-208", "L3-134": "L2-266", "L3-136": "L2-319", "L3-138": "L2-211", "L3-142": "L2-071", "L3-143": "L2-146", "L3-147": "L2-215", "L3-150": "L2-216", "L3-151": "L2-272", "L3-156": "L2-331", "L3-158": "L2-335", "L3-162": "L2-224", "L3-183": "L2-193", "L3-187": "L2-195", "L3-189": "L3-014", "L3-191": "L2-196", "L3-195": "L2-056", "L3-196": "L2-290", "L3-198": "L2-291", "L3-199": "L2-236", "L3-202": "L2-238", "L3-203": "L2-292", "L3-204": "L2-033", "L3-205": "L2-115", "L3-206": "L2-240", "L3-208": "L2-116", "L3-209": "L2-366", "L3-211": "L3-062", "L3-212": "L2-369", "L3-213": "L2-243", "L3-215": "L3-064", "L3-223": "L3-072", "L3-227": "L2-012", "L3-228": "L3-074", "L3-229": "L2-120", "L3-236": "L2-122", "L3-237": "L3-084", "L3-238": "L3-085", "L3-240": "L3-088", "L3-241": "L2-038", "L3-242": "L2-302", "L3-243": "L2-377", "L3-244": "L2-127", "L3-245": "L2-378", "L3-246": "L2-379", "L3-249": "L2-065", "L3-250": "L3-099", "L3-251": "L2-303", "L3-252": "L2-305", "L3-256": "L2-306", "L3-257": "L2-252", "L3-258": "L2-130", "L3-259": "L2-253", "L3-260": "L3-107", "L3-261": "L2-307", "L3-262": "L2-095", "L3-263": "L2-131", "L3-266": "L3-110", "L3-267": "L3-112", "L3-269": "L2-041", "L3-270": "L2-309", "L3-272": "L2-134", "L3-275": "L3-114", "L3-277": "L2-310", "L3-278": "L2-176", "L3-279": "L2-202", "L3-299": "L3-248", "L3-301": "L2-258", "L3-304": "L2-067", "L3-305": "L2-042", "L3-307": "L2-068", "L3-308": "L2-139", "L3-312": "L3-126", "L3-314": "L2-142", "L3-315": "L2-206", "L3-316": "L2-143", "L3-317": "L2-318", "L3-318": "L2-208", "L3-319": "L3-131", "L3-320": "L3-132", "L3-321": "L3-133", "L3-322": "L2-266", "L3-323": "L2-267", "L3-324": "L2-319", "L3-326": "L2-320", "L3-327": "L2-211", "L3-328": "L3-139", "L3-329": "L3-140", "L3-332": "L2-071", "L3-333": "L2-146", "L3-336": "L3-146", "L3-337": "L2-215", "L3-340": "L2-271", "L3-341": "L2-216", "L3-342": "L2-272", "L3-343": "L3-152", "L3-345": "L3-154", "L3-346": "L2-217", "L3-348": "L2-331", "L3-350": "L2-335", "L3-351": "L3-159", "L3-352": "L2-223", "L3-353": "L3-161", "L3-354": "L2-337", "L3-355": "L2-224", "L3-356": "L3-163", "L3-357": "L3-164", "L3-358": "L3-165", "L3-361": "L3-168", "L3-362": "L3-170", "L3-363": "L3-171", "L3-364": "L3-172", "L3-365": "L3-173", "L3-366": "L3-174", "L3-367": "L3-175", "L3-368": "L3-176", "L3-369": "L2-283", "L3-374": "L3-182", "L3-380": "L2-195", "L3-390": "L2-296", "L3-396": "L2-303", "L3-398": "L2-066", "L4-005": "L2-350", "L4-008": "L3-006", "L4-012": "L3-014", "L4-022": "L2-164", "L4-040": "L3-062", "L4-042": "L3-294", "L4-060": "L2-125", "L4-063": "L3-298", "L4-065": "L2-173", "L4-085": "L2-318", "L4-098": "L2-220", "L4-112": "L2-162", "L4-114": "L2-227", "L4-120": "L3-016", "L4-137": "L3-293", "L4-143": "L3-221", "L5-039": "L4-289", "L5-056": "L4-031", "L5-092": "L4-209", "L5-152": "L3-110", "L5-183": "L4-183", "L5-185": "L4-184", "L5-186": "L4-187", "L5-199": "L4-095", "L5-252": "L4-115", "L5-261": "L2-195", "L5-262": "L3-381", "L5-266": "L3-383", "L5-269": "L3-384", "L5-271": "L3-385", "L5-272": "L3-386", "L5-273": "L3-387", "L5-274": "L3-388", "L5-277": "L2-296", "L5-282": "L3-393", "L5-287": "L3-395", "L5-291": "L2-066", "L5-293": "L3-400"};
