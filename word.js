const wordsLevel1_Part1 = [
  {
    id: "L1-001",
    word: "the",
    meaning: "그, 그 특정",
    examples: [
      { en: "I saw the movie you recommended.", kr: "네가 추천한 그 영화를 봤어." },
      { en: "The cat is sleeping on the table.", kr: "그 고양이는 테이블 위에서 자고 있어." }
    ]
  },
  {
    id: "L1-002",
    word: "be",
    meaning: "~이다, (~에) 있다",
    examples: [
      { en: "She's a nurse, and her husband is a teacher.", kr: "그녀는 간호사고, 남편은 선생님이야." },
      { en: "We're at home now. Want to come over?", kr: "우리 지금 집에 있어. 놀러 올래?" }
    ]
  },
  {
    id: "L1-003",
    word: "to",
    meaning: "~로, ~에, ~하기 위해",
    examples: [
      { en: "I need to go to the store.", kr: "나는 가게에 가야 해." },
      { en: "I want to learn English.", kr: "나는 영어를 배우고 싶어." }
    ]
  },
  {
    id: "L1-004",
    word: "of",
    meaning: "~의, ~ 중에서",
    examples: [
      { en: "Can I get a cup of coffee, please?", kr: "커피 한 잔 주시겠어요?" },
      { en: "She is one of my best friends.", kr: "그녀는 내 가장 친한 친구들 중 한 명이야." }
    ]
  },
  {
    id: "L1-005",
    word: "and",
    meaning: "그리고",
    examples: [
      { en: "I'd like a burger and fries, please.", kr: "햄버거랑 감자튀김 주세요." },
      { en: "He is tall and handsome.", kr: "그는 키가 크고 잘생겼어." }
    ]
  },
  {
    id: "L1-006",
    word: "a",
    meaning: "하나의, 어떤",
    examples: [
      { en: "I need a new book.", kr: "나는 새 책 한 권이 필요해." },
      { en: "Do you have a minute to talk?", kr: "잠깐 얘기할 시간 있어?" }
    ]
  },
  {
    id: "L1-007",
    word: "in",
    meaning: "~ 안에, ~에",
    examples: [
      { en: "The keys are in the box.", kr: "열쇠는 상자 안에 있어." },
      { en: "I've lived in Seoul for five years.", kr: "저는 서울에서 5년째 살고 있어요." }
    ]
  },
  {
    id: "L1-008",
    word: "that",
    meaning: "저것, ~라는 것",
    examples: [
      { en: "I think that he is right.", kr: "나는 그가 옳다고 생각해." },
      { en: "Look at that beautiful car.", kr: "저 아름다운 차를 봐." }
    ]
  },
  {
    id: "L1-009",
    word: "have",
    meaning: "가지다, 먹다",
    examples: [
      { en: "Do you have any plans this weekend?", kr: "이번 주말에 무슨 계획 있어?" },
      { en: "Let's have dinner together sometime.", kr: "언제 같이 저녁 먹자." }
    ]
  },
  {
    id: "L1-010",
    word: "I",
    meaning: "나",
    examples: [
      { en: "I'm so happy to see you.", kr: "만나서 정말 반가워요." },
      { en: "I work from home on Fridays.", kr: "저는 금요일엔 재택근무해요." }
    ]
  },
  {
    id: "L1-011",
    word: "it",
    meaning: "그것",
    examples: [
      { en: "It is a beautiful day.", kr: "날씨 정말 좋다." },
      { en: "Did you finish it already? That was fast.", kr: "벌써 그거 끝냈어? 빠르다." }
    ]
  },
  {
    id: "L1-012",
    word: "for",
    meaning: "~을 위해, ~동안",
    examples: [
      { en: "This gift is for you.", kr: "이 선물은 널 위한 거야." },
      { en: "I waited for an hour.", kr: "나는 한 시간 동안 기다렸어." }
    ]
  },
  {
    id: "L1-013",
    word: "not",
    meaning: "~ 않다",
    examples: [
      { en: "I'm not hungry right now, thanks.", kr: "지금은 배 안 고파요, 고마워요." },
      { en: "That's not what I meant.", kr: "그런 뜻으로 한 말 아니었어." }
    ]
  },
  {
    id: "L1-014",
    word: "on",
    meaning: "~ 위에, (요일·날짜)에",
    examples: [
      { en: "The book is on the desk.", kr: "책이 책상 위에 있어." },
      { en: "Let's meet on Friday after work.", kr: "금요일 퇴근 후에 만나자." }
    ]
  },
  {
    id: "L1-015",
    word: "with",
    meaning: "~와 함께",
    examples: [
      { en: "I went with my friends.", kr: "나는 내 친구들과 함께 갔어." },
      { en: "Mix the flour with water.", kr: "밀가루를 물과 섞어." }
    ]
  },
  {
    id: "L1-016",
    word: "he",
    meaning: "그 (남자)",
    examples: [
      { en: "He's my coworker from the marketing team.", kr: "그는 마케팅팀 동료야." },
      { en: "He works at a hospital.", kr: "그는 병원에서 일해." }
    ]
  },
  {
    id: "L1-017",
    word: "as",
    meaning: "~로서, ~처럼, ~만큼",
    examples: [
      { en: "She works as a teacher.", kr: "그녀는 선생님으로 일해." },
      { en: "It's as cold today as it was yesterday.", kr: "오늘도 어제만큼 추워." }
    ]
  },
  {
    id: "L1-018",
    word: "you",
    meaning: "너, 당신, 너희",
    examples: [
      { en: "How are you doing today?", kr: "오늘 하루 어때요?" },
      { en: "Are you free for lunch tomorrow?", kr: "내일 점심 시간 돼?" }
    ]
  },
  {
    id: "L1-019",
    word: "do",
    meaning: "하다",
    examples: [
      { en: "What do you do for fun?", kr: "취미로 뭐 해?" },
      { en: "Can you do me a favor?", kr: "부탁 하나 들어줄 수 있어?" }
    ]
  },
  {
    id: "L1-020",
    word: "at",
    meaning: "~에 (장소, 시간)",
    examples: [
      { en: "I will meet you at the cafe.", kr: "카페에서 만날게." },
      { en: "The store opens at nine.", kr: "가게는 9시에 문을 열어." }
    ]
  },
  {
    id: "L1-021",
    word: "this",
    meaning: "이것, 이",
    examples: [
      { en: "Is this your bag on the chair?", kr: "의자 위에 있는 이거 네 가방이야?" },
      { en: "I really like this song. Who sings it?", kr: "이 노래 진짜 좋다. 누가 불렀어?" }
    ]
  },
  {
    id: "L1-022",
    word: "but",
    meaning: "그러나, ~을 제외하고",
    examples: [
      { en: "It's raining, but I still want to go out.", kr: "비 오는데 그래도 나가고 싶어." },
      { en: "Everyone was there but my boss.", kr: "우리 상사 빼고 다 왔어." }
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
      { en: "Can you finish the report by Friday?", kr: "금요일까지 보고서 끝낼 수 있어요?" },
      { en: "Let's get a table by the window.", kr: "창가 자리에 앉자." }
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
    meaning: "그들, 그것들",
    examples: [
      { en: "They are waiting for you.", kr: "그 사람들이 너 기다리고 있어." },
      { en: "I love my neighbors. They're really friendly.", kr: "우리 이웃들 너무 좋아. 정말 친절해." }
    ]
  },
  {
    id: "L1-027",
    word: "we",
    meaning: "우리",
    examples: [
      { en: "We are going to the movies.", kr: "우리 영화 보러 갈 거야." },
      { en: "We should help him move this weekend.", kr: "이번 주말에 그 사람 이사하는 거 도와줘야 해." }
    ]
  },
  {
    id: "L1-028",
    word: "say",
    meaning: "말하다",
    examples: [
      { en: "What did he say to you?", kr: "그가 너에게 뭐라고 말했니?" },
      { en: "She said that she would be late today.", kr: "그녀는 오늘 늦을 거라고 말했어." }
    ]
  },
  {
    id: "L1-029",
    word: "her",
    meaning: "그녀의, 그녀를",
    examples: [
      { en: "Her dress is very beautiful.", kr: "그녀의 드레스는 매우 아름다워." },
      { en: "I saw her at the market.", kr: "나는 시장에서 그녀를 봤어." }
    ]
  },
  {
    id: "L1-030",
    word: "she",
    meaning: "그녀 (여자)",
    examples: [
      { en: "She is a good singer.", kr: "그녀는 노래를 잘해." },
      { en: "She lives next door with her two kids.", kr: "그녀는 아이 둘이랑 옆집에 살아." }
    ]
  },
  {
    id: "L1-031",
    word: "or",
    meaning: "또는, 혹은",
    examples: [
      { en: "Do you want coffee or tea?", kr: "커피 마실래, 아니면 차 마실래?" },
      { en: "It might rain or snow.", kr: "비나 눈이 올 수도 있어." }
    ]
  },
  {
    id: "L1-032",
    word: "will",
    meaning: "~할 것이다, ~할게",
    examples: [
      { en: "I will call you later.", kr: "나중에 전화할게." },
      { en: "The store will be open tomorrow.", kr: "가게는 내일 문을 열 거야." }
    ]
  },
  {
    id: "L1-033",
    word: "my",
    meaning: "나의",
    examples: [
      { en: "This is my favorite song.", kr: "이거 내가 제일 좋아하는 노래야." },
      { en: "My sister is a doctor.", kr: "우리 언니는 의사야." }
    ]
  },
  {
    id: "L1-034",
    word: "one",
    meaning: "하나, (앞서 말한) 것",
    examples: [
      { en: "Can I have one more piece of cake?", kr: "케이크 한 조각 더 먹어도 돼?" },
      { en: "I like the blue one better.", kr: "나는 파란 게 더 좋아." }
    ]
  },
  {
    id: "L1-035",
    word: "all",
    meaning: "모든, 전부",
    examples: [
      { en: "All students passed the test.", kr: "모든 학생들이 시험에 합격했어." },
      { en: "I ate all the cookies.", kr: "나는 쿠키를 전부 먹었어." }
    ]
  },
  {
    id: "L1-036",
    word: "would",
    meaning: "~할 것이다 (추측, 가정)",
    examples: [
      { en: "I would buy a new car if I had money.", kr: "돈이 있다면 새 차를 살 텐데." },
      { en: "He would never lie to you.", kr: "그는 너에게 절대 거짓말하지 않을 거야." }
    ]
  },
  {
    id: "L1-037",
    word: "there",
    meaning: "거기에, ~이 있다",
    examples: [
      { en: "There is a cat in the garden.", kr: "정원에 고양이 한 마리가 있어." },
      { en: "I went there last week.", kr: "나는 지난주에 거기에 갔어." }
    ]
  },
  {
    id: "L1-038",
    word: "their",
    meaning: "그들의",
    examples: [
      { en: "Their house is very big.", kr: "그들의 집은 매우 커." },
      { en: "I don't know their names.", kr: "나는 그들의 이름을 몰라." }
    ]
  },
  {
    id: "L1-039",
    word: "what",
    meaning: "무엇, ~하는 것",
    examples: [
      { en: "What are you doing this weekend?", kr: "이번 주말에 뭐 해?" },
      { en: "Tell me what you saw.", kr: "네가 본 거 말해줘." }
    ]
  },
  {
    id: "L1-040",
    word: "so",
    meaning: "그래서, 그렇게",
    examples: [
      { en: "It was raining, so I stayed inside.", kr: "비가 와서 집에 있었어." },
      { en: "I'm so tired after work today.", kr: "오늘 퇴근하고 너무 피곤해." }
    ]
  },
  {
    id: "L1-041",
    word: "up",
    meaning: "위로, (가격·수치가) 올라",
    examples: [
      { en: "Look up at the sky.", kr: "하늘을 올려다 봐." },
      { en: "Prices went up again at the grocery store.", kr: "마트 물가가 또 올랐어." }
    ]
  },
  {
    id: "L1-042",
    word: "out",
    meaning: "밖으로",
    examples: [
      { en: "Let's go out for dinner tonight.", kr: "오늘 밤에 나가서 저녁 먹자." },
      { en: "The cat ran out of the house.", kr: "고양이가 집 밖으로 뛰어나갔어." }
    ]
  },
  {
    id: "L1-043",
    word: "if",
    meaning: "만약 ~라면",
    examples: [
      { en: "If you are ready, let's go.", kr: "준비됐으면 가자." },
      { en: "I don't know if he will come.", kr: "그가 올지 모르겠어." }
    ]
  },
  {
    id: "L1-044",
    word: "about",
    meaning: "~에 대해, 대략",
    examples: [
      { en: "What is the book about?", kr: "그 책은 무엇에 관한 것이니?" },
      { en: "It cost about ten dollars.", kr: "그것은 대략 10달러 들었어." }
    ]
  },
  {
    id: "L1-045",
    word: "who",
    meaning: "누구, ~하는 (사람)",
    examples: [
      { en: "Who is that person by the door?", kr: "문 옆에 있는 저 사람 누구야?" },
      { en: "That's the guy who helped me yesterday.", kr: "저 사람이 어제 나 도와준 사람이야." }
    ]
  },
  {
    id: "L1-046",
    word: "get",
    meaning: "얻다, 받다, 되다",
    examples: [
      { en: "I need to get a new phone.", kr: "나는 새 휴대폰을 마련해야 해." },
      { en: "It's getting colder.", kr: "점점 추워지고 있어." }
    ]
  },
  {
    id: "L1-047",
    word: "which",
    meaning: "어느, 어느 것",
    examples: [
      { en: "Which color do you prefer?", kr: "어떤 색이 더 좋아?" },
      { en: "Which seat would you like, window or aisle?", kr: "창가석이랑 통로석 중 어느 자리로 드릴까요?" }
    ]
  },
  {
    id: "L1-048",
    word: "go",
    meaning: "가다",
    examples: [
      { en: "It's late. Let's go home now.", kr: "늦었다. 이제 집에 가자." },
      { en: "I want to go traveling this summer.", kr: "이번 여름에 여행 가고 싶어." }
    ]
  },
  {
    id: "L1-049",
    word: "me",
    meaning: "나를, 나에게",
    examples: [
      { en: "Can you help me with this?", kr: "이것 좀 도와줄래?" },
      { en: "Can you send me the file later?", kr: "나중에 그 파일 좀 보내줄래?" }
    ]
  },
  {
    id: "L1-050",
    word: "when",
    meaning: "언제, ~할 때",
    examples: [
      { en: "When is your flight back home?", kr: "집에 돌아가는 비행기 언제야?" },
      { en: "I was sleeping when he called.", kr: "그가 전화했을 때 나는 자고 있었어." }
    ]
  },
  {
    id: "L1-051",
    word: "make",
    meaning: "만들다, ~하게 하다",
    examples: [
      { en: "She makes delicious cookies.", kr: "그녀는 맛있는 쿠키를 만들어." },
      { en: "That song always makes me happy.", kr: "그 노래 들으면 항상 기분이 좋아져." }
    ]
  },
  {
    id: "L1-052",
    word: "can",
    meaning: "~할 수 있다, ~해도 되다",
    examples: [
      { en: "I can speak English well.", kr: "나는 영어를 잘 말할 수 있어." },
      { en: "Can you open the door?", kr: "문 좀 열어줄 수 있니?" }
    ]
  },
  {
    id: "L1-053",
    word: "like",
    meaning: "~와 같은, 좋아하다",
    examples: [
      { en: "She sings like a professional.", kr: "그녀는 전문가처럼 노래해." },
      { en: "I like spending time with you.", kr: "나는 너와 시간 보내는 것을 좋아해." }
    ]
  },
  {
    id: "L1-054",
    word: "time",
    meaning: "시간",
    examples: [
      { en: "What time is it now?", kr: "지금 몇 시니?" },
      { en: "We spent a lot of time talking.", kr: "우리는 이야기하는 데 많은 시간을 보냈어." }
    ]
  },
  {
    id: "L1-055",
    word: "no",
    meaning: "아니요, 없는",
    examples: [
      { en: "No, I am not ready.", kr: "아니요, 저는 아직 준비가 안 됐어요." },
      { en: "There is no food left.", kr: "남은 음식이 없어." }
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
      { en: "I saw him at the library.", kr: "도서관에서 그 사람 봤어." },
      { en: "Can you give him this book tomorrow?", kr: "내일 그 사람한테 이 책 좀 전해줄래?" }
    ]
  },
  {
    id: "L1-058",
    word: "know",
    meaning: "알다",
    examples: [
      { en: "I don't know the answer either.", kr: "나도 답을 모르겠어." },
      { en: "Do you know how to swim?", kr: "너 수영할 줄 알아?" }
    ]
  },
  {
    id: "L1-059",
    word: "take",
    meaning: "가져가다, (시간이) 걸리다",
    examples: [
      { en: "Take your coat. It's cold outside.", kr: "코트 챙겨 가. 밖에 추워." },
      { en: "It takes ten minutes to walk there.", kr: "거기까지 걸어서 10분 걸려." }
    ]
  },
  {
    id: "L1-060",
    word: "people",
    meaning: "사람들",
    examples: [
      { en: "Many people came to the party.", kr: "많은 사람들이 파티에 왔어." },
      { en: "I like meeting new people.", kr: "나는 새로운 사람들을 만나는 것을 좋아해." }
    ]
  },
  {
    id: "L1-061",
    word: "into",
    meaning: "~ 안으로, ~으로 (변화)",
    examples: [
      { en: "He walked into the room.", kr: "그는 방 안으로 걸어 들어갔어." },
      { en: "Let's turn the idea into reality.", kr: "그 아이디어를 현실로 바꾸자." }
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
      { en: "What's your opinion on this?", kr: "이거에 대해 네 생각은 어때?" }
    ]
  },
  {
    id: "L1-064",
    word: "good",
    meaning: "좋은",
    examples: [
      { en: "Have a good weekend, see you Monday!", kr: "주말 잘 보내, 월요일에 봐!" },
      { en: "She is a good person.", kr: "그녀는 좋은 사람이야." }
    ]
  },
  {
    id: "L1-065",
    word: "some",
    meaning: "약간의, 몇몇",
    examples: [
      { en: "Can I get some water, please?", kr: "물 좀 주시겠어요?" },
      { en: "Some of my coworkers left early today.", kr: "동료 몇 명은 오늘 일찍 퇴근했어." }
    ]
  },
  {
    id: "L1-066",
    word: "could",
    meaning: "~할 수 있었다, ~해 주시겠어요",
    examples: [
      { en: "I could swim when I was ten.", kr: "나는 열 살 때 수영할 수 있었어." },
      { en: "Could you close the window?", kr: "창문을 닫아 주시겠어요?" }
    ]
  },
  {
    id: "L1-067",
    word: "them",
    meaning: "그들을, 그들에게",
    examples: [
      { en: "I saw them at the mall.", kr: "나는 쇼핑몰에서 그들을 봤어." },
      { en: "Tell them the good news.", kr: "그들에게 좋은 소식을 말해줘." }
    ]
  },
  {
    id: "L1-068",
    word: "see",
    meaning: "보다",
    examples: [
      { en: "Did you see the movie?", kr: "그 영화 봤니?" },
      { en: "I can see the ocean from here.", kr: "나는 여기서 바다를 볼 수 있어." }
    ]
  },
  {
    id: "L1-069",
    word: "other",
    meaning: "다른",
    examples: [
      { en: "Do you have any other questions?", kr: "다른 질문 있니?" },
      { en: "I have other plans for today.", kr: "나는 오늘 다른 계획이 있어." }
    ]
  },
  {
    id: "L1-070",
    word: "than",
    meaning: "~보다 (비교)",
    examples: [
      { en: "She is taller than her brother.", kr: "그녀는 남동생보다 키가 커." },
      { en: "It's better late than never.", kr: "늦더라도 안 하는 것보다는 낫지." }
    ]
  },
  {
    id: "L1-071",
    word: "then",
    meaning: "그때, 그러고 나서",
    examples: [
      { en: "I was living in Busan back then.", kr: "그때 나는 부산에 살고 있었어." },
      { en: "I finished the work, and then I went home.", kr: "일 끝내고 나서 집에 갔어." }
    ]
  },
  {
    id: "L1-072",
    word: "now",
    meaning: "지금",
    examples: [
      { en: "We should start now, or we'll be late.", kr: "지금 출발해야 해, 안 그러면 늦어." },
      { en: "He is a doctor now.", kr: "그는 이제 의사야." }
    ]
  },
  {
    id: "L1-073",
    word: "look",
    meaning: "보다, ~처럼 보이다",
    examples: [
      { en: "Look at this picture of my dog.", kr: "우리 강아지 사진 좀 봐." },
      { en: "You look happy today.", kr: "너 오늘 기분 좋아 보인다." }
    ]
  },
  {
    id: "L1-074",
    word: "only",
    meaning: "오직, 단지",
    examples: [
      { en: "I have only one brother.", kr: "나는 남동생 한 명밖에 없어." },
      { en: "This is only a small problem.", kr: "이건 그냥 작은 문제일 뿐이야." }
    ]
  },
  {
    id: "L1-075",
    word: "come",
    meaning: "오다",
    examples: [
      { en: "Please come to my party.", kr: "내 파티에 와줘." },
      { en: "The bus is coming. Let's hurry!", kr: "버스 온다. 서두르자!" }
    ]
  },
  {
    id: "L1-076",
    word: "its",
    meaning: "그것의",
    examples: [
      { en: "The dog wagged its tail.", kr: "강아지가 꼬리를 흔들었어." },
      { en: "This café is famous for its cheesecake.", kr: "이 카페는 치즈케이크로 유명해." }
    ]
  },
  {
    id: "L1-077",
    word: "over",
    meaning: "~ 위에, ~을 넘어, 끝난",
    examples: [
      { en: "The plane flew over the city.", kr: "비행기가 도시 위로 날아갔어." },
      { en: "The meeting is over, so let's grab lunch.", kr: "회의 끝났으니까 점심 먹으러 가자." }
    ]
  },
  {
    id: "L1-078",
    word: "think",
    meaning: "생각하다",
    examples: [
      { en: "I think you are right.", kr: "나는 네가 옳다고 생각해." },
      { en: "What do you think about this idea?", kr: "이 아이디어에 대해 어떻게 생각하니?" }
    ]
  },
  {
    id: "L1-079",
    word: "also",
    meaning: "또한",
    examples: [
      { en: "I'm hungry, and I'm also really tired.", kr: "배도 고프고 또 너무 피곤해." },
      { en: "She is a student and also an artist.", kr: "그녀는 학생이면서 예술가이기도 해." }
    ]
  },
  {
    id: "L1-080",
    word: "back",
    meaning: "뒤로, 되돌아, 뒤쪽",
    examples: [
      { en: "I will be back soon.", kr: "곧 돌아올게." },
      { en: "The door is at the back of the house.", kr: "문은 집 뒤쪽에 있어." }
    ]
  },
  {
    id: "L1-081",
    word: "after",
    meaning: "~ 후에",
    examples: [
      { en: "Let's talk about it after lunch.", kr: "점심 먹고 나서 얘기하자." },
      { en: "He arrived after the party started.", kr: "그는 파티가 시작된 후에 도착했어." }
    ]
  },
  {
    id: "L1-082",
    word: "use",
    meaning: "사용하다",
    examples: [
      { en: "Can I use your computer?", kr: "컴퓨터를 사용해도 될까요?" },
      { en: "We use this app to track our expenses.", kr: "우리는 지출을 기록하는 데 이 앱을 사용해." }
    ]
  },
  {
    id: "L1-083",
    word: "how",
    meaning: "어떻게",
    examples: [
      { en: "How are you feeling today? Any better?", kr: "오늘 좀 어때? 좀 나아졌어?" },
      { en: "Tell me how to do it.", kr: "그거 어떻게 하는지 알려줘." }
    ]
  },
  {
    id: "L1-084",
    word: "our",
    meaning: "우리의",
    examples: [
      { en: "This is our new car.", kr: "이것은 우리의 새 차야." },
      { en: "Our team won the game.", kr: "우리 팀이 경기에서 이겼어." }
    ]
  },
  {
    id: "L1-085",
    word: "work",
    meaning: "일하다, 작업",
    examples: [
      { en: "I have a lot of work to do.", kr: "할 일이 많아." },
      { en: "He works really hard, even on weekends.", kr: "그는 주말에도 정말 열심히 일해." }
    ]
  },
  {
    id: "L1-086",
    word: "well",
    meaning: "잘, 건강한",
    examples: [
      { en: "She speaks English well.", kr: "그녀는 영어를 잘 말해." },
      { en: "I hope you are well.", kr: "네가 건강하기를 바라." }
    ]
  },
  {
    id: "L1-087",
    word: "way",
    meaning: "길, 방법",
    examples: [
      { en: "Which way should we go?", kr: "어느 길로 가야 할까요?" },
      { en: "What is the best way to learn?", kr: "배우는 가장 좋은 방법은 무엇이니?" }
    ]
  },
  {
    id: "L1-088",
    word: "even",
    meaning: "심지어, ~조차",
    examples: [
      { en: "He didn't even say hello.", kr: "그는 인사조차 안 했어." },
      { en: "She can't even cook ramen.", kr: "걔는 라면조차 못 끓여." }
    ]
  },
  {
    id: "L1-089",
    word: "first",
    meaning: "첫 번째의, 먼저",
    examples: [
      { en: "He was the first person to arrive.", kr: "그가 첫 번째로 도착한 사람이었어." },
      { en: "First, let's have a drink.", kr: "먼저, 음료수 한 잔 하자." }
    ]
  },
  {
    id: "L1-090",
    word: "new",
    meaning: "새로운",
    examples: [
      { en: "I bought a new pair of shoes.", kr: "나는 새 신발 한 켤레를 샀어." },
      { en: "We are moving to a new city.", kr: "우리는 새로운 도시로 이사 갈 거야." }
    ]
  },
  {
    id: "L1-091",
    word: "want",
    meaning: "원하다",
    examples: [
      { en: "What do you want for dinner?", kr: "저녁 뭐 먹고 싶어?" },
      { en: "I want to be a doctor.", kr: "나는 의사가 되고 싶어." }
    ]
  },
  {
    id: "L1-092",
    word: "because",
    meaning: "왜냐하면",
    examples: [
      { en: "I was late because of the traffic.", kr: "교통 체증 때문에 늦었어." },
      { en: "She is happy because she won the game.", kr: "그녀는 게임에서 이겼기 때문에 행복해." }
    ]
  },
  {
    id: "L1-093",
    word: "any",
    meaning: "어떤 (부정문, 의문문)",
    examples: [
      { en: "Do you have any pets?", kr: "반려동물 있니?" },
      { en: "I don't have any money.", kr: "나는 돈이 전혀 없어." }
    ]
  },
  {
    id: "L1-094",
    word: "these",
    meaning: "이것들, 이 ~들",
    examples: [
      { en: "These shoes are too small.", kr: "이 신발들은 너무 작아." },
      { en: "I need to read these documents.", kr: "나는 이 문서들을 읽어야 해." }
    ]
  },
  {
    id: "L1-095",
    word: "give",
    meaning: "주다",
    examples: [
      { en: "Can you give me a ride home?", kr: "집까지 좀 태워 줄래?" },
      { en: "She gave him a gift.", kr: "그녀는 그에게 선물을 줬어." }
    ]
  },
  {
    id: "L1-096",
    word: "day",
    meaning: "날, 하루",
    examples: [
      { en: "It was a cold day.", kr: "추운 날이었어." },
      { en: "I work eight hours a day.", kr: "나는 하루에 8시간 일해." }
    ]
  },
  {
    id: "L1-097",
    word: "most",
    meaning: "대부분의",
    examples: [
      { en: "Most people agree with the plan.", kr: "대부분의 사람들이 그 계획에 동의해." },
      { en: "She eats vegetables most of the time.", kr: "그녀는 대부분의 시간에 채소를 먹어." }
    ]
  },
  {
    id: "L1-098",
    word: "us",
    meaning: "우리를, 우리에게",
    examples: [
      { en: "She invited us to her party.", kr: "그녀는 우리를 파티에 초대했어." },
      { en: "Can you tell us the story?", kr: "우리에게 그 이야기를 해줄 수 있니?" }
    ]
  },
  {
    id: "L1-099",
    word: "much",
    meaning: "많은, 많이",
    examples: [
      { en: "I don't have much money.", kr: "나 돈이 별로 없어." },
      { en: "How much is this jacket?", kr: "이 재킷 얼마예요?" }
    ]
  },
  {
    id: "L1-100",
    word: "thing",
    meaning: "것, 물건",
    examples: [
      { en: "What's that thing on your desk?", kr: "책상 위에 있는 그거 뭐야?" },
      { en: "The most important thing is safety.", kr: "가장 중요한 건 안전이야." }
    ]
  }
];

const wordsLevel1_Part2 = [
  {
    id: "L1-101",
    word: "man",
    meaning: "남자, 사람",
    examples: [
      { en: "He is a very tall man.", kr: "그는 매우 키가 큰 남자야." },
      { en: "A man was waiting at the door.", kr: "한 남자가 문 앞에서 기다리고 있었어." }
    ]
  },
  {
    id: "L1-401",
    word: "great",
    meaning: "훌륭한, 대단한, 큰",
    examples: [
      { en: "You did a great job on the presentation today.", kr: "오늘 발표 정말 훌륭하게 해냈어요." },
      { en: "The new café downtown has great coffee and fast Wi-Fi.", kr: "시내에 새로 생긴 카페는 커피도 훌륭하고 와이파이도 빨라요." }
    ]
  },
  {
    id: "L1-103",
    word: "world",
    meaning: "세계",
    examples: [
      { en: "It is the biggest city in the world.", kr: "그곳은 세계에서 가장 큰 도시야." },
      { en: "I want to travel the world.", kr: "나는 세계를 여행하고 싶어." }
    ]
  },
  {
    id: "L1-104",
    word: "through",
    meaning: "~을 통해, ~을 통과하여",
    examples: [
      { en: "We walked through the forest.", kr: "우리는 숲을 통과하여 걸었어." },
      { en: "The news spread through social media.", kr: "그 소식은 소셜 미디어를 통해 퍼졌어." }
    ]
  },
  {
    id: "L1-105",
    word: "should",
    meaning: "~해야 한다",
    examples: [
      { en: "You should rest now.", kr: "너는 지금 쉬어야 해." },
      { en: "We should meet again soon.", kr: "우리는 곧 다시 만나야 해." }
    ]
  },
  {
    id: "L1-106",
    word: "call",
    meaning: "부르다, 전화하다",
    examples: [
      { en: "Call me when you arrive.", kr: "도착하면 나에게 전화해." },
      { en: "They call this flower a rose.", kr: "그들은 이 꽃을 장미라고 불러." }
    ]
  },
  {
    id: "L1-107",
    word: "down",
    meaning: "아래로, (소리 등을) 낮춰",
    examples: [
      { en: "Please sit down and make yourself comfortable.", kr: "앉아서 편하게 계세요." },
      { en: "Can you turn the music down a little?", kr: "음악 소리 좀 줄여 줄래?" }
    ]
  },
  {
    id: "L1-108",
    word: "before",
    meaning: "~ 전에",
    examples: [
      { en: "I woke up before sunrise.", kr: "나는 해 뜨기 전에 일어났어." },
      { en: "Finish your homework before you play.", kr: "놀기 전에 숙제를 끝내." }
    ]
  },
  {
    id: "L1-109",
    word: "since",
    meaning: "~ 이후로, ~이므로",
    examples: [
      { en: "I haven't seen him since last year.", kr: "작년 이후로 그를 못 봤어." },
      { en: "Since you asked, I will tell you.", kr: "네가 물어봤으니, 말해줄게." }
    ]
  },
  {
    id: "L1-110",
    word: "turn",
    meaning: "돌리다, 변하다",
    examples: [
      { en: "Turn left at the corner.", kr: "모퉁이에서 왼쪽으로 돌아." },
      { en: "The weather suddenly turned cold.", kr: "날씨가 갑자기 추워졌어." }
    ]
  },
  {
    id: "L1-111",
    word: "place",
    meaning: "장소",
    examples: [
      { en: "This is a beautiful place to visit.", kr: "여기는 방문하기에 아름다운 장소야." },
      { en: "Put the book back in its place.", kr: "책을 제자리에 다시 놔." }
    ]
  },
  {
    id: "L1-112",
    word: "hand",
    meaning: "손",
    examples: [
      { en: "Wash your hands before you eat.", kr: "먹기 전에 손 씻어." },
      { en: "She raised her hand to ask a question.", kr: "그녀는 질문하려고 손을 들었어." }
    ]
  },
  {
    id: "L1-113",
    word: "where",
    meaning: "어디에",
    examples: [
      { en: "Where are you going this summer?", kr: "이번 여름에 어디 가?" },
      { en: "That is the house where I was born.", kr: "저기가 내가 태어난 집이야." }
    ]
  },
  {
    id: "L1-114",
    word: "while",
    meaning: "~ 동안",
    examples: [
      { en: "I read a book while waiting.", kr: "기다리는 동안 책을 읽었어." },
      { en: "She fell asleep on the couch while I worked.", kr: "내가 일하는 동안 그녀는 소파에서 잠들었어." }
    ]
  },
  {
    id: "L1-115",
    word: "tell",
    meaning: "말하다, 알리다",
    examples: [
      { en: "Tell me what happened last night.", kr: "어젯밤에 무슨 일 있었는지 말해줘." },
      { en: "Please tell her that I called.", kr: "그녀에게 내가 전화했다고 전해줘." }
    ]
  },
  {
    id: "L1-116",
    word: "general",
    meaning: "일반적인, 대략적인",
    examples: [
      { en: "In general, I agree with you.", kr: "대체로 네 말에 동의해." },
      { en: "I have a general idea of the plan.", kr: "그 계획은 대충 알고 있어." }
    ]
  },
  {
    id: "L1-117",
    word: "system",
    meaning: "시스템, 체계",
    examples: [
      { en: "The new computer system is very fast.", kr: "새 컴퓨터 시스템은 매우 빨라." },
      { en: "We need a better public transport system.", kr: "우리는 더 나은 대중교통 체계가 필요해." }
    ]
  },
  {
    id: "L1-118",
    word: "small",
    meaning: "작은",
    examples: [
      { en: "We live in a small apartment.", kr: "우리는 작은 아파트에 살아." },
      { en: "Don't worry about the small problems.", kr: "작은 문제들은 걱정하지 마." }
    ]
  },
  {
    id: "L1-119",
    word: "number",
    meaning: "번호, 숫자, 수",
    examples: [
      { en: "What is your phone number?", kr: "전화번호가 뭐야?" },
      { en: "Wow, a huge number of people showed up!", kr: "와, 사람들이 엄청 많이 왔네!" }
    ]
  },
  {
    id: "L1-120",
    word: "end",
    meaning: "끝, 마치다",
    examples: [
      { en: "The movie ends at 10 PM.", kr: "영화는 저녁 10시에 끝나." },
      { en: "This is the end of the road.", kr: "여기가 길의 끝이야." }
    ]
  },
  {
    id: "L1-121",
    word: "form",
    meaning: "양식, 서식, 방식",
    examples: [
      { en: "Please fill out this form first.", kr: "먼저 이 양식부터 작성해 주세요." },
      { en: "What forms of payment do you accept?", kr: "결제는 어떤 방식으로 할 수 있어요?" }
    ]
  },
  {
    id: "L1-122",
    word: "less",
    meaning: "더 적은",
    examples: [
      { en: "I want less sugar in my coffee.", kr: "내 커피에 설탕을 더 적게 넣어줘." },
      { en: "It costs less than ten dollars.", kr: "그것은 10달러보다 가격이 더 저렴해." }
    ]
  },
  {
    id: "L1-123",
    word: "life",
    meaning: "삶, 인생, 생명",
    examples: [
      { en: "Life is too short to worry so much.", kr: "그렇게 걱정하며 살기엔 인생이 너무 짧아." },
      { en: "He saved a person's life.", kr: "그는 사람 목숨을 구했어." }
    ]
  },
  {
    id: "L1-124",
    word: "public",
    meaning: "대중의",
    examples: [
      { en: "The event is open to the public.", kr: "그 행사는 누구나 갈 수 있어." },
      { en: "I usually take public transportation to work.", kr: "저는 보통 대중교통으로 출근해요." }
    ]
  },
  {
    id: "L1-125",
    word: "present",
    meaning: "선물, 참석한",
    examples: [
      { en: "I received a present on my birthday.", kr: "생일에 선물 받았어." },
      { en: "Everyone was present at today's meeting.", kr: "오늘 회의에 다 참석했어." }
    ]
  },
  {
    id: "L1-126",
    word: "case",
    meaning: "경우, 만일의 경우",
    examples: [
      { en: "In that case, we should wait.", kr: "그렇다면 기다리는 게 좋겠다." },
      { en: "Take an umbrella, just in case.", kr: "혹시 모르니까 우산 챙겨." }
    ]
  },
  {
    id: "L1-127",
    word: "point",
    meaning: "요점, 지적, 점",
    examples: [
      { en: "What is the main point of the lesson?", kr: "이 수업의 요점이 뭐야?" },
      { en: "That's a good point. I didn't think of that.", kr: "좋은 지적이야. 그건 생각 못 했네." }
    ]
  },
  {
    id: "L1-128",
    word: "area",
    meaning: "지역, 분야",
    examples: [
      { en: "This is a quiet residential area.", kr: "여기는 조용한 주거 지역이야." },
      { en: "He is an expert in this area.", kr: "그는 이 분야의 전문가야." }
    ]
  },
  {
    id: "L1-129",
    word: "book",
    meaning: "책, 예약하다",
    examples: [
      { en: "I need to buy a new book.", kr: "나는 새 책을 사야 해." },
      { en: "Let's book a table for dinner.", kr: "저녁 식사를 위해 테이블을 예약하자." }
    ]
  },
  {
    id: "L1-130",
    word: "power",
    meaning: "힘, 권력, 전기",
    examples: [
      { en: "He has a lot of power in the company.", kr: "그 사람 회사에서 힘이 세." },
      { en: "The storm knocked out the power.", kr: "폭풍 때문에 정전됐어." }
    ]
  },
  {
    id: "L1-131",
    word: "policy",
    meaning: "정책",
    examples: [
      { en: "Did you hear about the new work-from-home policy?", kr: "새 재택근무 정책 얘기 들었어?" },
      { en: "What's your refund policy?", kr: "환불 규정이 어떻게 되나요?" }
    ]
  },
  {
    id: "L1-132",
    word: "problem",
    meaning: "문제",
    examples: [
      { en: "We have a big problem to solve.", kr: "우리는 해결해야 할 큰 문제가 있어." },
      { en: "Don't worry, it's not my problem.", kr: "걱정 마, 그건 내 문제가 아니야." }
    ]
  },
  {
    id: "L1-133",
    word: "face",
    meaning: "얼굴, 직면하다",
    examples: [
      { en: "Wash your face before bed.", kr: "자기 전에 얼굴을 씻어." },
      { en: "We need to face the truth.", kr: "우리는 진실에 직면해야 해." }
    ]
  },
  {
    id: "L1-134",
    word: "side",
    meaning: "쪽, 측면",
    examples: [
      { en: "Whose side are you on, anyway?", kr: "도대체 너 누구 편이야?" },
      { en: "The car was hit on the right side.", kr: "차 오른쪽 측면이 받혔어." }
    ]
  },
  {
    id: "L1-135",
    word: "try",
    meaning: "시도하다, 노력하다",
    examples: [
      { en: "I will try my best.", kr: "최선을 다할게." },
      { en: "Let's try a different approach.", kr: "다른 접근 방식을 시도해 보자." }
    ]
  },
  {
    id: "L1-136",
    word: "group",
    meaning: "그룹, 무리",
    examples: [
      { en: "We belong to the same study group.", kr: "우리는 같은 스터디 그룹에 속해 있어." },
      { en: "The tourists gathered in a group.", kr: "관광객들이 그룹으로 모였어." }
    ]
  },
  {
    id: "L1-137",
    word: "next",
    meaning: "다음의",
    examples: [
      { en: "What are you doing next week?", kr: "다음 주에 뭐 할 거야?" },
      { en: "The next bus comes in ten minutes.", kr: "다음 버스는 10분 후에 와." }
    ]
  },
  {
    id: "L1-138",
    word: "long",
    meaning: "긴",
    examples: [
      { en: "It was a long day at work.", kr: "직장에서 긴 하루였어." },
      { en: "How long will you stay?", kr: "얼마나 오래 머무를 거니?" }
    ]
  },
  {
    id: "L1-139",
    word: "last",
    meaning: "마지막의, 지난",
    examples: [
      { en: "This is the last piece of cake.", kr: "이것이 마지막 케이크 조각이야." },
      { en: "Where were you last night?", kr: "어젯밤에 어디 있었니?" }
    ]
  },
  {
    id: "L1-140",
    word: "hold",
    meaning: "잡다, 개최하다",
    examples: [
      { en: "Can you hold my bag for a second?", kr: "가방 좀 잠깐 들어줄래?" },
      { en: "The meeting will be held tomorrow.", kr: "회의는 내일 열려요." }
    ]
  },
  {
    id: "L1-141",
    word: "stand",
    meaning: "서다, 참다",
    examples: [
      { en: "Please stand up when your name is called.", kr: "이름이 불리면 일어나 주세요." },
      { en: "I can't stand this hot weather.", kr: "이 더운 날씨 못 참겠어." }
    ]
  },
  {
    id: "L1-142",
    word: "own",
    meaning: "자신의, 소유하다",
    examples: [
      { en: "I want to start my own business.", kr: "내 사업을 시작하고 싶어." },
      { en: "Do you own this car?", kr: "이 차 네 거야?" }
    ]
  },
  {
    id: "L1-143",
    word: "pay",
    meaning: "지불하다",
    examples: [
      { en: "I need to pay the bills.", kr: "공과금 내야 해." },
      { en: "How much did you pay for it?", kr: "그거 얼마 주고 샀어?" }
    ]
  },
  {
    id: "L1-144",
    word: "little",
    meaning: "작은, 약간",
    examples: [
      { en: "She has a little sister.", kr: "그녀에게는 여동생이 있어." },
      { en: "I need a little more time.", kr: "나는 약간의 시간이 더 필요해." }
    ]
  },
  {
    id: "L1-145",
    word: "school",
    meaning: "학교",
    examples: [
      { en: "What school do you go to?", kr: "어느 학교 다녀?" },
      { en: "My kids walk to school every morning.", kr: "우리 애들은 매일 아침 걸어서 학교에 가." }
    ]
  },
  {
    id: "L1-146",
    word: "state",
    meaning: "상태, 국가, (미국의) 주",
    examples: [
      { en: "The building is in a bad state.", kr: "그 건물은 나쁜 상태에 있어." },
      { en: "California is a large state.", kr: "캘리포니아는 큰 주(州)야." }
    ]
  },
  {
    id: "L1-147",
    word: "feel",
    meaning: "느끼다",
    examples: [
      { en: "I feel really tired today.", kr: "오늘 너무 피곤해." },
      { en: "How do you feel about the decision?", kr: "그 결정에 대해 어떻게 생각해?" }
    ]
  },
  {
    id: "L1-148",
    word: "change",
    meaning: "변화하다, 변화",
    examples: [
      { en: "The weather is starting to change.", kr: "날씨가 변하기 시작하고 있어." },
      { en: "We need a big change in our plan.", kr: "우리 계획에 큰 변화가 필요해." }
    ]
  },
  {
    id: "L1-149",
    word: "put",
    meaning: "놓다",
    examples: [
      { en: "Put the book on the shelf.", kr: "책을 선반 위에 놓아." },
      { en: "Where did you put my car keys?", kr: "내 차 열쇠를 어디에 놓았니?" }
    ]
  },
  {
    id: "L1-150",
    word: "keep",
    meaning: "유지하다, 계속하다, 보관하다",
    examples: [
      { en: "Keep quiet during the movie.", kr: "영화 보는 동안 조용히 해." },
      { en: "Where do you keep your keys?", kr: "열쇠를 어디에 보관하니?" }
    ]
  },
  {
    id: "L1-151",
    word: "house",
    meaning: "집",
    examples: [
      { en: "We bought a new house.", kr: "우리는 새 집을 샀어." },
      { en: "I will wait for you at my house.", kr: "우리 집에서 너를 기다릴게." }
    ]
  },
  {
    id: "L1-152",
    word: "develop",
    meaning: "발전시키다, 발전하다",
    examples: [
      { en: "We need to develop new skills.", kr: "우리는 새로운 기술을 발전시켜야 해." },
      { en: "The city is starting to develop rapidly.", kr: "도시가 빠르게 발전하기 시작하고 있어." }
    ]
  },
  {
    id: "L1-153",
    word: "family",
    meaning: "가족",
    examples: [
      { en: "Family is very important to me.", kr: "가족은 나에게 매우 중요해." },
      { en: "We had a family dinner last night.", kr: "우리는 어젯밤에 가족 저녁 식사를 했어." }
    ]
  },
  {
    id: "L1-154",
    word: "allow",
    meaning: "허락하다",
    examples: [
      { en: "Are phones allowed in the classroom?", kr: "교실에서 휴대폰 사용이 허용되니?" },
      { en: "My parents allow me to travel alone.", kr: "우리 부모님은 내가 혼자 여행하는 것을 허락해." }
    ]
  },
  {
    id: "L1-155",
    word: "ask",
    meaning: "묻다, 요청하다",
    examples: [
      { en: "Can I ask you a question?", kr: "질문 하나 해도 될까요?" },
      { en: "She asked for help with her homework.", kr: "그녀는 숙제하는 것을 도와달라고 요청했어." }
    ]
  },
  {
    id: "L1-156",
    word: "follow",
    meaning: "따르다",
    examples: [
      { en: "Please follow the instructions carefully.", kr: "지침을 주의 깊게 따라주세요." },
      { en: "I follow his work on social media.", kr: "나는 소셜 미디어에서 그의 작업을 팔로우해." }
    ]
  },
  {
    id: "L1-157",
    word: "woman",
    meaning: "여자",
    examples: [
      { en: "She is a kind woman.", kr: "그녀는 친절한 여자야." },
      { en: "The woman in the red dress is my mother.", kr: "빨간 드레스를 입은 여자는 우리 엄마야." }
    ]
  },
  {
    id: "L1-158",
    word: "member",
    meaning: "회원, 구성원",
    examples: [
      { en: "He is a member of the local club.", kr: "그는 동네 클럽 회원이야." },
      { en: "Are you a member? You get ten percent off.", kr: "회원이세요? 10% 할인돼요." }
    ]
  },
  {
    id: "L1-159",
    word: "study",
    meaning: "공부하다",
    examples: [
      { en: "I need to study for the test.", kr: "나는 시험공부를 해야 해." },
      { en: "She studies English every morning before work.", kr: "그녀는 매일 아침 출근 전에 영어를 공부해." }
    ]
  },
  {
    id: "L1-160",
    word: "control",
    meaning: "통제하다",
    examples: [
      { en: "She knows how to control the situation.", kr: "그녀는 상황을 통제하는 방법을 알아." },
      { en: "You must control your temper.", kr: "너는 화를 다스려야 해." }
    ]
  },
  {
    id: "L1-161",
    word: "set",
    meaning: "놓다, 세트",
    examples: [
      { en: "She set the plates on the table for dinner.", kr: "그녀는 저녁 식사를 위해 식탁에 접시들을 놓았어." },
      { en: "I bought a new dinner set.", kr: "나는 새 식기 세트를 샀어." }
    ]
  },
  {
    id: "L1-162",
    word: "word",
    meaning: "단어, 말",
    examples: [
      { en: "I learned a new English word today.", kr: "나는 오늘 새로운 영어 단어를 배웠어." },
      { en: "He said a few kind words.", kr: "그는 몇 마디 친절한 말을 했어." }
    ]
  },
  {
    id: "L1-163",
    word: "process",
    meaning: "과정, 절차, 처리하다",
    examples: [
      { en: "The visa process took about three months.", kr: "비자 절차가 3개월 정도 걸렸어." },
      { en: "Your order is being processed now.", kr: "주문이 지금 처리되고 있어요." }
    ]
  },
  {
    id: "L1-164",
    word: "run",
    meaning: "달리다, 운영하다",
    examples: [
      { en: "She can run very fast.", kr: "그녀는 엄청 빨리 달려." },
      { en: "Who runs this restaurant? The food is amazing.", kr: "이 식당 누가 운영해? 음식 진짜 맛있다." }
    ]
  },
  {
    id: "L1-165",
    word: "result",
    meaning: "결과",
    examples: [
      { en: "What was the result of the match?", kr: "경기 결과 어떻게 됐어?" },
      { en: "When will we get the test results?", kr: "검사 결과는 언제 나와요?" }
    ]
  },
  {
    id: "L1-166",
    word: "order",
    meaning: "순서, 주문하다",
    examples: [
      { en: "He placed an order for food.", kr: "그는 음식을 주문했어." },
      { en: "The files are kept in alphabetical order.", kr: "파일들은 알파벳 순서로 보관돼." }
    ]
  },
  {
    id: "L1-167",
    word: "money",
    meaning: "돈",
    examples: [
      { en: "I don't have enough money for a trip.", kr: "여행 갈 돈이 부족해." },
      { en: "Can I borrow some money until Friday?", kr: "금요일까지 돈 좀 빌릴 수 있을까?" }
    ]
  },
  {
    id: "L1-168",
    word: "read",
    meaning: "읽다",
    examples: [
      { en: "I read a book every week.", kr: "나는 매주 책을 읽어." },
      { en: "Can you read this sign?", kr: "이 표지판을 읽을 수 있니?" }
    ]
  },
  {
    id: "L1-169",
    word: "interest",
    meaning: "관심, 이자",
    examples: [
      { en: "I've always had an interest in history.", kr: "난 예전부터 역사에 관심이 많았어." },
      { en: "This bank pays a high interest rate.", kr: "이 은행은 이자를 많이 줘." }
    ]
  },
  {
    id: "L1-170",
    word: "body",
    meaning: "몸",
    examples: [
      { en: "Exercise is good for your body.", kr: "운동은 당신의 몸에 좋아." },
      { en: "My whole body hurts after the long hike.", kr: "긴 하이킹 후에 온몸이 아파." }
    ]
  },
  {
    id: "L1-171",
    word: "fact",
    meaning: "사실",
    examples: [
      { en: "In fact, I've never been to Japan.", kr: "사실 나 일본에 가 본 적 없어." },
      { en: "Let's get the facts before we decide.", kr: "결정하기 전에 사실관계부터 확인하자." }
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
    meaning: "관점, 경치, 보다",
    examples: [
      { en: "What's your view on this issue?", kr: "이 문제에 대해 어떻게 생각해요?" },
      { en: "The apartment has a great view of the city.", kr: "그 아파트는 시내 전망이 정말 좋아." }
    ]
  },
  {
    id: "L1-174",
    word: "move",
    meaning: "움직이다, 이사하다",
    examples: [
      { en: "Don't move from your seat.", kr: "자리에서 움직이지 마세요." },
      { en: "We plan to move to a new town.", kr: "우리는 새로운 마을로 이사 갈 계획이야." }
    ]
  },
  {
    id: "L1-175",
    word: "reason",
    meaning: "이유",
    examples: [
      { en: "What is the reason for the delay?", kr: "지연되는 이유가 뭐예요?" },
      { en: "Give me one good reason to agree.", kr: "내가 동의할 만한 이유 하나만 대 봐." }
    ]
  },
  {
    id: "L1-176",
    word: "meet",
    meaning: "만나다",
    examples: [
      { en: "Let's meet for lunch tomorrow.", kr: "내일 만나서 점심 먹자." },
      { en: "I met him at the airport.", kr: "나는 공항에서 그를 만났어." }
    ]
  },
  {
    id: "L1-177",
    word: "real",
    meaning: "실제의",
    examples: [
      { en: "Is this made of real gold?", kr: "이것이 실제 금으로 만들어졌니?" },
      { en: "Tell me your real feelings.", kr: "나에게 너의 진짜 감정을 말해줘." }
    ]
  },
  {
    id: "L1-178",
    word: "name",
    meaning: "이름, 명성",
    examples: [
      { en: "What is your full name?", kr: "성함이 어떻게 되세요?" },
      { en: "She made a name for herself as an artist.", kr: "그녀는 예술가로 이름을 알렸어." }
    ]
  },
  {
    id: "L1-179",
    word: "course",
    meaning: "과정",
    examples: [
      { en: "I am taking a language course.", kr: "나는 어학 과정을 수강하고 있어." },
      { en: "The course lasts for ten weeks.", kr: "그 과정은 10주 동안 진행돼." }
    ]
  },
  {
    id: "L1-180",
    word: "report",
    meaning: "보고하다, 신고하다, 보고서",
    examples: [
      { en: "You should report the accident to the police.", kr: "그 사고는 경찰에 신고해야 해요." },
      { en: "I need to finish this report by tomorrow.", kr: "내일까지 이 보고서 끝내야 해." }
    ]
  },
  {
    id: "L1-181",
    word: "service",
    meaning: "서비스, 봉사",
    examples: [
      { en: "The restaurant has excellent service.", kr: "그 식당은 서비스가 훌륭해." },
      { en: "We appreciate your years of service.", kr: "당신의 수년간의 봉사에 감사드립니다." }
    ]
  },
  {
    id: "L1-182",
    word: "line",
    meaning: "줄, 선",
    examples: [
      { en: "Are you waiting in line for the restroom?", kr: "화장실 줄 서 계신 거예요?" },
      { en: "Draw a straight line on the paper.", kr: "종이에 직선을 그려." }
    ]
  },
  {
    id: "L1-183",
    word: "level",
    meaning: "수준",
    examples: [
      { en: "She speaks English at an advanced level.", kr: "그녀는 고급 수준으로 영어를 말해." },
      { en: "The water level is low.", kr: "수위가 낮아." }
    ]
  },
  {
    id: "L1-184",
    word: "table",
    meaning: "테이블",
    examples: [
      { en: "Put the glasses on the table.", kr: "테이블 위에 잔들을 놓아." },
      { en: "We reserved a table for four.", kr: "우리는 4인용 테이블을 예약했어." }
    ]
  },
  {
    id: "L1-185",
    word: "city",
    meaning: "도시",
    examples: [
      { en: "Seoul is a very crowded city.", kr: "서울은 매우 붐비는 도시야." },
      { en: "I prefer living in a small city.", kr: "나는 작은 도시에 사는 것을 선호해." }
    ]
  },
  {
    id: "L1-186",
    word: "unit",
    meaning: "(아파트·건물의) 호, 세대",
    examples: [
      { en: "This unit has two bedrooms and a balcony.", kr: "이 집은 방 두 개에 발코니가 있어요." },
      { en: "Our unit is on the fifth floor.", kr: "우리 집은 5층이에요." }
    ]
  },
  {
    id: "L1-187",
    word: "hour",
    meaning: "시간 (60분)",
    examples: [
      { en: "The meeting lasted for an hour.", kr: "회의는 한 시간 동안 지속되었어." },
      { en: "I only slept for a few hours.", kr: "나는 겨우 몇 시간만 잤어." }
    ]
  },
  {
    id: "L1-188",
    word: "market",
    meaning: "시장",
    examples: [
      { en: "I bought fresh fruit at the market.", kr: "나는 시장에서 신선한 과일을 샀어." },
      { en: "The stock market is very volatile.", kr: "주식 시장은 매우 변동성이 커." }
    ]
  },
  {
    id: "L1-189",
    word: "social",
    meaning: "사교적인, 친목의",
    examples: [
      { en: "I'm not very social at big parties.", kr: "나는 큰 파티에서 사람들이랑 잘 못 어울려." },
      { en: "It's more of a social event than a work thing.", kr: "그건 업무라기보다는 친목 모임에 가까워." }
    ]
  },
  {
    id: "L1-190",
    word: "major",
    meaning: "주요한, 전공(하다)",
    examples: [
      { en: "This is a major problem we must solve.", kr: "이것은 우리가 해결해야 할 주요한 문제야." },
      { en: "She majors in English literature at college.", kr: "그녀는 대학에서 영문학을 전공해." }
    ]
  },
  {
    id: "L1-191",
    word: "sure",
    meaning: "확신하는",
    examples: [
      { en: "Are you sure you want to go?", kr: "가고 싶은 게 확실하니?" },
      { en: "I am sure he will agree.", kr: "나는 그가 동의할 것이라고 확신해." }
    ]
  },
  {
    id: "L1-192",
    word: "full",
    meaning: "가득 찬",
    examples: [
      { en: "The glass is full of water.", kr: "유리잔이 물로 가득 찼어." },
      { en: "The theater was full for the concert.", kr: "콘서트 때문에 극장이 꽉 찼어." }
    ]
  },
  {
    id: "L1-193",
    word: "right",
    meaning: "옳은, 오른쪽",
    examples: [
      { en: "You're absolutely right about that.", kr: "그건 네 말이 완전히 맞아." },
      { en: "Turn right at the next traffic light.", kr: "다음 신호등에서 우회전하세요." }
    ]
  },
  {
    id: "L1-194",
    word: "high",
    meaning: "높은",
    examples: [
      { en: "The mountain is very high.", kr: "산이 매우 높아." },
      { en: "He has a high fever.", kr: "그는 고열이 있어." }
    ]
  },
  {
    id: "L1-195",
    word: "able",
    meaning: "~할 수 있는",
    examples: [
      { en: "Will you be able to come tomorrow?", kr: "내일 올 수 있어?" },
      { en: "She won't be able to make it to the party.", kr: "걔 파티에 못 온대." }
    ]
  },
  {
    id: "L1-402",
    word: "home",
    meaning: "집, 집에, 집처럼 편한 곳",
    examples: [
      { en: "I usually get home around seven after work.", kr: "저는 보통 퇴근하고 7시쯤 집에 도착해요." },
      { en: "Make yourself at home while I finish cooking.", kr: "요리 마저 하는 동안 집처럼 편하게 있어." }
    ]
  },
  {
    id: "L1-197",
    word: "ready",
    meaning: "준비된",
    examples: [
      { en: "Are you ready to go now?", kr: "지금 갈 준비가 되었니?" },
      { en: "The food is ready to eat.", kr: "음식이 다 됐으니 먹어도 돼." }
    ]
  },
  {
    id: "L1-198",
    word: "show",
    meaning: "보여주다",
    examples: [
      { en: "Can you show me your new phone?", kr: "네 새 전화기 좀 보여줄래?" },
      { en: "The map shows the way to the city.", kr: "지도가 도시로 가는 길을 보여줘." }
    ]
  },
  {
    id: "L1-403",
    word: "find",
    meaning: "찾다, 발견하다, ~라고 느끼다",
    examples: [
      { en: "I can't find my car keys anywhere.", kr: "차 열쇠를 아무 데서도 못 찾겠어." },
      { en: "Did you find the new software easy to use?", kr: "새 소프트웨어가 쓰기 쉽다고 느꼈어요?" }
    ]
  },
  {
    id: "L1-200",
    word: "same",
    meaning: "같은",
    examples: [
      { en: "We go to the same school.", kr: "우리는 같은 학교에 다녀." },
      { en: "Your shirt is the same as mine.", kr: "네 셔츠는 내 것과 같아." }
    ]
  }
];

const wordsLevel1_Part3 = [
  {
    id: "L1-201",
    word: "open",
    meaning: "열린, 열다",
    examples: [
      { en: "The library is open until 9 PM.", kr: "도서관은 저녁 9시까지 열어요." },
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
      { en: "I saw a big dog in the park.", kr: "공원에서 엄청 큰 개를 봤어." },
      { en: "This is a big step for our team.", kr: "이건 우리 팀한테 큰 진전이에요." }
    ]
  },
  {
    id: "L1-205",
    word: "bring",
    meaning: "가져오다",
    examples: [
      { en: "Please bring a bottle of wine.", kr: "와인 한 병 가져와 주세요." },
      { en: "Did you bring your umbrella?", kr: "우산 가져왔니?" }
    ]
  },
  {
    id: "L1-206",
    word: "possible",
    meaning: "가능한",
    examples: [
      { en: "Is it possible to finish this by today?", kr: "오늘까지 이거 끝내는 게 가능해요?" },
      { en: "I'll do everything possible to help.", kr: "도울 수 있는 건 뭐든 다 할게요." }
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
      { en: "I don't understand this question.", kr: "이 질문을 이해할 수 없어요." },
      { en: "Do you understand what I mean?", kr: "내가 무슨 말 하는지 이해하니?" }
    ]
  },
  {
    id: "L1-209",
    word: "kind",
    meaning: "종류, 친절한",
    examples: [
      { en: "What kind of music do you like?", kr: "어떤 종류의 음악을 좋아하니?" },
      { en: "She is a very kind person.", kr: "그녀는 매우 친절한 사람이야." }
    ]
  },
  {
    id: "L1-210",
    word: "need",
    meaning: "필요하다",
    examples: [
      { en: "I need to buy some groceries.", kr: "나는 식료품을 좀 사야 해." },
      { en: "Do you need help carrying those boxes?", kr: "그 상자들 나르는 데 도움이 필요하니?" }
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
      { en: "This is a very important meeting.", kr: "이건 정말 중요한 회의예요." },
      { en: "It's important to be honest.", kr: "솔직한 게 중요해요." }
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
      { en: "I need to write a report.", kr: "나 보고서 써야 해." }
    ]
  },
  {
    id: "L1-215",
    word: "become",
    meaning: "~이 되다",
    examples: [
      { en: "She wants to become a doctor.", kr: "그녀는 의사가 되고 싶어 해요." },
      { en: "How did you become a teacher?", kr: "어떻게 선생님이 되셨어요?" }
    ]
  },
  {
    id: "L1-216",
    word: "inside",
    meaning: "안에",
    examples: [
      { en: "It's too cold, let's stay inside.", kr: "너무 추워, 안에 있자." },
      { en: "The key is hidden inside the box.", kr: "열쇠는 상자 안에 숨겨져 있어." }
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
      { en: "We decided to continue working late.", kr: "우리 늦게까지 계속 일하기로 했어." }
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
      { en: "Our opinions are very different.", kr: "우리 의견은 많이 달라요." }
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
      { en: "I was surprised to hear the news.", kr: "그 소식 듣고 놀랐어." }
    ]
  },
  {
    id: "L1-233",
    word: "easy",
    meaning: "쉬운",
    examples: [
      { en: "The test was surprisingly easy.", kr: "시험이 의외로 쉬웠어." },
      { en: "It's not easy to learn a new language.", kr: "새 언어 배우는 건 쉽지 않아요." }
    ]
  },
  {
    id: "L1-234",
    word: "special",
    meaning: "특별한",
    examples: [
      { en: "Today is a very special day.", kr: "오늘은 매우 특별한 날이야." },
      { en: "We have a special offer for new customers.", kr: "신규 고객을 위한 특별 혜택이 있습니다." }
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
      { en: "I received a letter from my cousin.", kr: "나는 사촌에게서 편지를 받았어." },
      { en: "Did you receive my email?", kr: "내 이메일 받았니?" }
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
      { en: "Exercise is important for good health.", kr: "운동은 건강을 지키는 데 중요합니다." },
      { en: "I wish you good health and happiness.", kr: "당신의 건강과 행복을 빌어요." }
    ]
  },
  {
    id: "L1-240",
    word: "lose",
    meaning: "잃다, 지다",
    examples: [
      { en: "Be careful not to lose your keys.", kr: "열쇠를 잃어버리지 않도록 조심해." },
      { en: "We don't want to lose the game.", kr: "우리는 그 게임에서 지고 싶지 않아." }
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
      { en: "I expect her to call soon.", kr: "그녀가 곧 전화할 것 같아." },
      { en: "Don't expect too much from others.", kr: "남한테 너무 많이 기대하지 마." }
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
      { en: "Stay calm and don't panic.", kr: "침착하게 있으세요. 당황하지 마세요." }
    ]
  },
  {
    id: "L1-246",
    word: "contain",
    meaning: "포함하다, (안에) 들어 있다",
    examples: [
      { en: "This bottle contains orange juice.", kr: "이 병에는 오렌지 주스가 들어 있어요." },
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
      { en: "Did you finish your dinner?", kr: "저녁 식사 다 했니?" },
      { en: "I need another hour to finish the job.", kr: "그 일을 끝내려면 한 시간이 더 필요해." }
    ]
  },
  {
    id: "L1-249",
    word: "spend",
    meaning: "(돈을) 쓰다, (시간을) 보내다",
    examples: [
      { en: "I like to spend time outdoors.", kr: "나는 야외에서 시간을 보내는 것을 좋아해." },
      { en: "How much did you spend on this trip?", kr: "이 여행에 얼마를 썼니?" }
    ]
  },
  {
    id: "L1-250",
    word: "morning",
    meaning: "아침",
    examples: [
      { en: "I usually wake up early in the morning.", kr: "나는 보통 아침에 일찍 일어나." },
      { en: "Good morning! How did you sleep?", kr: "좋은 아침! 잘 잤니?" }
    ]
  },
  {
    id: "L1-251",
    word: "education",
    meaning: "교육",
    examples: [
      { en: "I want my kids to get a good education.", kr: "우리 애들이 좋은 교육을 받았으면 좋겠어." },
      { en: "He went back to school to continue his education.", kr: "그는 교육을 계속 받으려고 다시 학교에 갔어." }
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
    meaning: "짧은",
    examples: [
      { en: "I prefer short hair in the summer.", kr: "여름엔 짧은 머리가 좋아." },
      { en: "We only had a short break.", kr: "쉬는 시간이 짧았어." }
    ]
  },
  {
    id: "L1-254",
    word: "win",
    meaning: "이기다",
    examples: [
      { en: "I hope our team will win the championship.", kr: "우리 팀이 챔피언십에서 이기기를 바랍니다." },
      { en: "He is determined to win the race.", kr: "그는 그 경주에서 이기기로 결심했습니다." }
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
    meaning: "묘사하다",
    examples: [
      { en: "Can you describe the person you saw?", kr: "당신이 본 사람을 묘사해 줄 수 있나요?" },
      { en: "Words cannot describe how happy I am.", kr: "말로 표현할 수 없을 만큼 행복해." }
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
    meaning: "어려운",
    examples: [
      { en: "It was a difficult decision to make.", kr: "그것은 내리기 어려운 결정이었어." },
      { en: "Learning a new skill can be difficult.", kr: "새로운 기술을 배우는 것은 어려울 수 있습니다." }
    ]
  },
  {
    id: "L1-259",
    word: "imagine",
    meaning: "상상하다",
    examples: [
      { en: "Can you imagine a world without cars?", kr: "자동차가 없는 세상을 상상할 수 있니?" },
      { en: "I can't imagine living anywhere else.", kr: "다른 곳에 사는 것은 상상할 수 없어." }
    ]
  },
  {
    id: "L1-260",
    word: "sound",
    meaning: "소리, ~처럼 들리다",
    examples: [
      { en: "What is that strange sound?", kr: "저 이상한 소리는 뭐야?" },
      { en: "That sounds like a good idea.", kr: "그거 좋은 생각처럼 들린다." }
    ]
  },
  {
    id: "L1-261",
    word: "manage",
    meaning: "관리하다",
    examples: [
      { en: "I need to learn how to manage my time.", kr: "나는 내 시간을 관리하는 법을 배워야 해." },
      { en: "She manages a team of ten people.", kr: "그녀는 열 명으로 이루어진 팀을 관리합니다." }
    ]
  },
  {
    id: "L1-262",
    word: "clear",
    meaning: "명확한, 맑은",
    examples: [
      { en: "The sky is clear today.", kr: "오늘은 하늘이 맑아." },
      { en: "I need a clear answer.", kr: "나는 명확한 대답이 필요해." }
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
      { en: "That was the proudest moment of my life.", kr: "그것은 내 인생의 가장 자랑스러운 순간이었어." }
    ]
  },
  {
    id: "L1-267",
    word: "voice",
    meaning: "목소리",
    examples: [
      { en: "She has a beautiful singing voice.", kr: "그녀는 노래하는 목소리가 정말 예뻐." },
      { en: "Can you lower your voice a little?", kr: "목소리 좀 낮춰 줄래?" }
    ]
  },
  {
    id: "L1-268",
    word: "entire",
    meaning: "전체의",
    examples: [
      { en: "I spent the entire day reading.", kr: "나는 하루 종일 책을 읽으며 보냈어." },
      { en: "The entire city was covered in snow.", kr: "도시 전체가 눈으로 덮여 있었어." }
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
      { en: "She doesn't like to travel alone.", kr: "그녀는 혼자 여행하는 것을 좋아하지 않아." },
      { en: "Leave me alone for a few minutes.", kr: "잠깐 동안 나를 혼자 있게 해줘." }
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
    meaning: "가게, 저장하다",
    examples: [
      { en: "I need to go to the grocery store.", kr: "나는 식료품점에 가야 해." },
      { en: "You can store the files in the cloud.", kr: "파일을 클라우드에 저장할 수 있습니다." }
    ]
  },
  {
    id: "L1-273",
    word: "simply",
    meaning: "단순히, 그저, 정말로",
    examples: [
      { en: "I simply don't have enough time.", kr: "나는 그저 시간이 부족할 뿐이야." },
      { en: "The design is simply beautiful.", kr: "그 디자인은 정말 아름답습니다." }
    ]
  },
  {
    id: "L1-274",
    word: "various",
    meaning: "다양한",
    examples: [
      { en: "I've tried various diets, but nothing worked.", kr: "다양한 다이어트를 해 봤는데 효과가 하나도 없었어." },
      { en: "We talked about the problem from various angles.", kr: "그 문제를 다양한 각도에서 얘기해 봤어요." }
    ]
  },
  {
    id: "L1-275",
    word: "private",
    meaning: "사적인, 전용의",
    examples: [
      { en: "This is a private conversation.", kr: "이건 사적인 대화예요." },
      { en: "Is this a private beach?", kr: "여기 전용 해변이에요?" }
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
    meaning: "틀린",
    examples: [
      { en: "I think you got the answer wrong.", kr: "네가 답을 틀렸다고 생각해." },
      { en: "Something is wrong with this machine.", kr: "이 기계에 뭔가 잘못된 것이 있어." }
    ]
  },
  {
    id: "L1-278",
    word: "express",
    meaning: "표현하다, 급행의",
    examples: [
      { en: "I want to express my thanks.", kr: "감사함을 표현하고 싶습니다." },
      { en: "The express train is much faster.", kr: "급행열차가 훨씬 더 빠릅니다." }
    ]
  },
  {
    id: "L1-279",
    word: "suppose",
    meaning: "가정하다, 생각하다",
    examples: [
      { en: "I suppose we should leave now.", kr: "이제 떠나야 할 것 같아요." },
      { en: "Suppose it rains tomorrow, what will we do?", kr: "내일 비가 온다고 가정해 봐, 우린 뭘 할까?" }
    ]
  },
  {
    id: "L1-280",
    word: "necessary",
    meaning: "필요한",
    examples: [
      { en: "A passport is necessary for international travel.", kr: "해외여행 갈 땐 여권이 꼭 필요해요." },
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
      { en: "She went to the meeting instead of him.", kr: "그녀는 그를 대신해서 회의에 갔어." }
    ]
  },
  {
    id: "L1-283",
    word: "send",
    meaning: "보내다",
    examples: [
      { en: "Did you send me an email?", kr: "나에게 이메일을 보냈니?" },
      { en: "I need to send this package overseas.", kr: "나는 이 소포를 해외로 보내야 해." }
    ]
  },
  {
    id: "L1-284",
    word: "check",
    meaning: "확인하다, 점검하다",
    examples: [
      { en: "Please check your email for the details.", kr: "자세한 내용은 이메일로 확인해 주세요." },
      { en: "The mechanic will check the car's engine.", kr: "정비사가 차 엔진을 점검해 줄 거예요." }
    ]
  },
  {
    id: "L1-285",
    word: "figure",
    meaning: "수치, 알아내다",
    examples: [
      { en: "I can't figure out how this works.", kr: "이게 어떻게 돌아가는지 알아낼 수가 없어." },
      { en: "Can you check the sales figures for March?", kr: "3월 매출 수치 좀 확인해 줄래요?" }
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
    meaning: "하나의, 독신의",
    examples: [
      { en: "Not a single person agreed with him.", kr: "단 한 명도 그에게 동의하지 않았어." },
      { en: "She is a single mother of two.", kr: "그녀는 두 아이를 혼자 키우는 엄마입니다." }
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
    meaning: "재료, 물질, 자료",
    examples: [
      { en: "What material is this chair made of?", kr: "이 의자는 어떤 재료로 만들어졌나요?" },
      { en: "I need to gather some reading material.", kr: "읽을 자료를 좀 모아야 해." }
    ]
  },
  {
    id: "L1-293",
    word: "quite",
    meaning: "꽤, 상당히",
    examples: [
      { en: "It was quite cold yesterday.", kr: "어제는 꽤 추웠어." },
      { en: "I'm quite happy with the result.", kr: "나는 그 결과에 상당히 만족해." }
    ]
  },
  {
    id: "L1-294",
    word: "future",
    meaning: "미래",
    examples: [
      { en: "We should plan for the future.", kr: "우리는 미래를 계획해야 해." },
      { en: "What do you want to be in the future?", kr: "미래에 무엇이 되고 싶니?" }
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
      { en: "She appears to be really tired.", kr: "그녀 정말 피곤해 보여요." }
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
    id: "L1-298",
    word: "determine",
    meaning: "결정하다, 알아내다",
    examples: [
      { en: "We need to determine the cause of the problem first.", kr: "먼저 문제 원인부터 알아내야 해요." },
      { en: "The weather will determine whether we go hiking.", kr: "등산 갈지 말지는 날씨가 결정할 거예요." }
    ]
  },
  {
    id: "L1-299",
    word: "mention",
    meaning: "언급하다",
    examples: [
      { en: "Did he mention the meeting time?", kr: "그가 회의 시간을 언급했니?" },
      { en: "She didn't mention her new job at dinner.", kr: "그녀는 저녁 식사 때 새 직장에 대해 언급하지 않았어." }
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
      { en: "Do you know what's causing the delay?", kr: "뭐가 지연을 일으키고 있는지 아세요?" }
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
    meaning: "용어, 임기, 기간",
    examples: [
      { en: "Can you explain that term in simple words?", kr: "그 용어 쉬운 말로 설명해 줄 수 있어요?" },
      { en: "In Korea, the president serves a five-year term.", kr: "한국에서는 대통령 임기가 5년이에요." }
    ]
  },
  {
    id: "L1-405",
    word: "team",
    meaning: "팀, 조",
    examples: [
      { en: "Our team meets every Monday morning to plan the week.", kr: "우리 팀은 매주 월요일 아침에 모여서 한 주 계획을 세워요." },
      { en: "Which team are you rooting for tonight?", kr: "오늘 밤 어느 팀 응원해?" }
    ]
  },
  {
    id: "L1-406",
    word: "company",
    meaning: "회사, 함께 있음",
    examples: [
      { en: "She has worked for the same company for ten years.", kr: "그녀는 같은 회사에서 10년 동안 일했어요." },
      { en: "I really enjoyed your company at dinner last night.", kr: "어젯밤 저녁 자리에 함께해서 정말 즐거웠어요." }
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
      { en: "I suggest we take a short break now.", kr: "제안하자면, 지금 잠깐 쉬었다 하죠." },
      { en: "Can you suggest a good restaurant nearby?", kr: "근처에 괜찮은 식당 추천해 줄래요?" }
    ]
  },
  {
    id: "L1-407",
    word: "business",
    meaning: "사업, 업무, 장사",
    examples: [
      { en: "I'm traveling on business next week, so let's meet after.", kr: "다음 주에 업무차 출장을 가니까 그 후에 만나요." },
      { en: "My parents run a small business selling handmade bread.", kr: "부모님은 수제 빵을 파는 작은 사업을 하세요." }
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
      { en: "It's a really friendly community here.", kr: "여기 커뮤니티는 다들 정말 친절해요." },
      { en: "I joined an online community for runners.", kr: "러너들 온라인 커뮤니티에 가입했어." }
    ]
  },
  {
    id: "L1-316",
    word: "remain",
    meaning: "계속 ~인 채로 있다, 남아 있다",
    examples: [
      { en: "Please remain seated until the plane comes to a stop.", kr: "비행기가 완전히 멈출 때까지 자리에 앉아 계십시오." },
      { en: "He remained silent during the whole meeting.", kr: "그는 회의 내내 아무 말 없이 있었어." }
    ]
  },
  {
    id: "L1-317",
    word: "effect",
    meaning: "효과, 영향",
    examples: [
      { en: "The medicine had an immediate effect.", kr: "그 약은 바로 효과가 있었어요." },
      { en: "Does this medicine have any side effects?", kr: "이 약 부작용 있어요?" }
    ]
  },
  {
    id: "L1-409",
    word: "person",
    meaning: "사람, 개인",
    examples: [
      { en: "She's the best person to ask about the budget.", kr: "예산에 대해서는 그녀가 물어보기 가장 좋은 사람이에요." },
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
    meaning: "오늘, 오늘날",
    examples: [
      { en: "I have three meetings today, so I'll be busy.", kr: "오늘 회의가 세 개라서 바쁠 거예요." },
      { en: "Most people today shop online rather than in stores.", kr: "오늘날 대부분의 사람들은 매장보다 온라인으로 쇼핑해요." }
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
      { en: "Learning a new language is hard, but it's worth it.", kr: "새 언어를 배우는 건 어렵지만 그만한 가치가 있어요." },
      { en: "He worked hard all year and finally got promoted.", kr: "그는 일 년 내내 열심히 일해서 마침내 승진했어요." }
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
    meaning: "추가하다",
    examples: [
      { en: "Please add some sugar to my coffee.", kr: "내 커피에 설탕을 좀 추가해 주세요." },
      { en: "I want to add a comment to the post.", kr: "게시물에 댓글을 추가하고 싶어." }
    ]
  },
  {
    id: "L1-413",
    word: "mean",
    meaning: "의미하다, ~할 의도이다",
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
      { en: "I want to learn how to cook Italian food.", kr: "나는 이탈리아 요리하는 법을 배우고 싶어." },
      { en: "It's never too late to learn a new skill.", kr: "새로운 기술을 배우는 데는 절대 늦지 않습니다." }
    ]
  },
  {
    id: "L1-329",
    word: "grow",
    meaning: "자라다, 키우다",
    examples: [
      { en: "I grew up in a small town.", kr: "나는 작은 동네에서 자랐어." },
      { en: "We grow our own tomatoes in the backyard.", kr: "우리는 뒷마당에서 토마토를 직접 키워요." }
    ]
  },
  {
    id: "L1-414",
    word: "job",
    meaning: "일, 직업, 일자리",
    examples: [
      { en: "She just got a new job at a bank.", kr: "그녀는 얼마 전에 은행에 새 일자리를 구했어요." },
      { en: "Fixing the roof turned out to be a bigger job than expected.", kr: "지붕 수리는 예상보다 큰 일이었어요." }
    ]
  },
  {
    id: "L1-415",
    word: "actually",
    meaning: "사실은, 실제로",
    examples: [
      { en: "I thought it would be hard, but it was actually easy.", kr: "어려울 줄 알았는데 사실은 쉬웠어." },
      { en: "Have you actually read the contract before signing it?", kr: "서명하기 전에 실제로 계약서를 읽어 봤어요?" }
    ]
  },
  {
    id: "L1-416",
    word: "country",
    meaning: "나라, 국가, 시골",
    examples: [
      { en: "How many countries have you visited so far?", kr: "지금까지 몇 나라를 가 봤어요?" },
      { en: "They moved to the country to enjoy a quieter life.", kr: "그들은 더 조용한 삶을 즐기려고 시골로 이사했어요." }
    ]
  },
  {
    id: "L1-333",
    word: "lead",
    meaning: "이끌다, (길이) 이어지다",
    examples: [
      { en: "Who will lead the team next year?", kr: "내년에 누가 팀을 이끌까요?" },
      { en: "This road leads to the beach.", kr: "이 길은 해변으로 이어집니다." }
    ]
  },
  {
    id: "L1-417",
    word: "thank",
    meaning: "감사하다, 고마워하다",
    examples: [
      { en: "I want to thank everyone for coming today.", kr: "오늘 와 주신 모든 분께 감사드리고 싶습니다." },
      { en: "Don't forget to thank your host before leaving.", kr: "떠나기 전에 초대해 준 분께 감사 인사하는 거 잊지 마." }
    ]
  },
  {
    id: "L1-418",
    word: "situation",
    meaning: "상황, 처지",
    examples: [
      { en: "We need to discuss the situation with our manager.", kr: "우리는 매니저와 그 상황에 대해 논의해야 해요." },
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
      { en: "Please listen carefully to the instructions.", kr: "지시 사항을 주의 깊게 들어주세요." },
      { en: "I love listening to jazz music.", kr: "나는 재즈 음악 듣는 것을 좋아해." }
    ]
  },
  {
    id: "L1-340",
    word: "sell",
    meaning: "팔다",
    examples: [
      { en: "They sell fresh bread every morning.", kr: "그들은 매일 아침 신선한 빵을 팝니다." },
      { en: "I want to sell my old computer.", kr: "나는 내 낡은 컴퓨터를 팔고 싶어." }
    ]
  },
  {
    id: "L1-341",
    word: "believe",
    meaning: "믿다",
    examples: [
      { en: "I believe in your ability.", kr: "나는 당신의 능력을 믿습니다." },
      { en: "Do you believe his story?", kr: "너는 그의 이야기를 믿니?" }
    ]
  },
  {
    id: "L1-342",
    word: "close",
    meaning: "닫다, 가까운",
    examples: [
      { en: "Please close the door when you leave.", kr: "나갈 때 문을 닫아주세요." },
      { en: "She is a very close friend of mine.", kr: "그녀는 나의 매우 가까운 친구입니다." }
    ]
  },
  {
    id: "L1-343",
    word: "happen",
    meaning: "일어나다, 발생하다",
    examples: [
      { en: "What happened to you last night?", kr: "어젯밤에 무슨 일이 있었니?" },
      { en: "Accidents often happen when people are tired.", kr: "사람들이 피곤할 때 종종 사고가 발생합니다." }
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
    meaning: "멈추다",
    examples: [
      { en: "Please stop talking and listen.", kr: "말하는 것을 멈추고 들어주세요." },
      { en: "The car stopped at the red light.", kr: "차가 빨간불에 멈췄습니다." }
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
      { en: "You can find more information on our website.", kr: "더 많은 정보는 저희 웹사이트에서 보실 수 있습니다." },
      { en: "Please don't share personal information over the phone.", kr: "전화로 개인 정보를 알려 주지 마세요." }
    ]
  },
  {
    id: "L1-424",
    word: "idea",
    meaning: "생각, 아이디어, 짐작",
    examples: [
      { en: "That's a great idea for the marketing campaign.", kr: "그거 마케팅 캠페인에 정말 좋은 아이디어네요." },
      { en: "I have no idea where I left my phone.", kr: "휴대폰을 어디 뒀는지 전혀 짐작이 안 가." }
    ]
  },
  {
    id: "L1-349",
    word: "live",
    meaning: "살다",
    examples: [
      { en: "I live in a big city.", kr: "나는 대도시에 삽니다." },
      { en: "My grandparents live in a small village.", kr: "우리 조부모님은 작은 마을에 사셔." }
    ]
  },
  {
    id: "L1-425",
    word: "office",
    meaning: "사무실, 진료소, 직책",
    examples: [
      { en: "I'll be in the office until six today.", kr: "오늘은 6시까지 사무실에 있을 거예요." },
      { en: "The doctor's office called to confirm my appointment.", kr: "병원 진료소에서 예약 확인 전화가 왔어요." }
    ]
  },
  {
    id: "L1-426",
    word: "true",
    meaning: "사실인, 진짜의, 진정한",
    examples: [
      { en: "Is it true that the store is closing next month?", kr: "그 가게가 다음 달에 문 닫는다는 게 사실이에요?" },
      { en: "A true friend tells you the truth, even when it hurts.", kr: "진정한 친구는 상처가 되더라도 진실을 말해 줘요." }
    ]
  },
  {
    id: "L1-427",
    word: "matter",
    meaning: "문제, 일, 중요하다",
    examples: [
      { en: "It doesn't matter if you're a little late.", kr: "조금 늦어도 상관없어요." },
      { en: "We need to discuss this matter in private.", kr: "이 문제는 따로 조용히 이야기해야 해요." }
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
      { en: "The newly married couple went on a trip.", kr: "새로 결혼한 부부는 여행을 떠났습니다." },
      { en: "I need a couple of days to finish this.", kr: "이것을 끝내는 데 이틀 정도 필요합니다." }
    ]
  },
  {
    id: "L1-356",
    word: "site",
    meaning: "장소, 사이트",
    examples: [
      { en: "The construction site is very noisy.", kr: "공사 현장이 매우 시끄럽습니다." },
      { en: "Please visit our site for more details.", kr: "자세한 내용은 저희 사이트를 방문해 주세요." }
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
      { en: "The hotel staff were very helpful.", kr: "호텔 직원들은 매우 도움이 되었습니다." },
      { en: "The manager will hire new staff.", kr: "매니저가 새로운 직원을 고용할 것입니다." }
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
    meaning: "수업, 계층, 등급",
    examples: [
      { en: "I have an English class every morning.", kr: "나는 매일 아침 영어 수업이 있습니다." },
      { en: "She travels first class on the train.", kr: "그녀는 기차에서 1등석으로 여행합니다." }
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
      { en: "It's only a question of time before prices go up.", kr: "가격이 오르는 건 시간문제일 뿐이에요." }
    ]
  },
  {
    id: "L1-367",
    word: "air",
    meaning: "공기",
    examples: [
      { en: "I need to go outside for some fresh air.", kr: "밖에 나가서 신선한 공기 좀 마셔야겠어." },
      { en: "The air in the mountains is clean and cool.", kr: "산 공기는 깨끗하고 시원해요." }
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
      { en: "The meeting ran rather long, so I missed lunch.", kr: "회의가 꽤 길어져서 점심을 놓쳤어요." }
    ]
  },
  {
    id: "L1-373",
    word: "travel",
    meaning: "여행하다",
    examples: [
      { en: "I love to travel to new countries.", kr: "나는 새로운 나라로 여행하는 것을 좋아합니다." },
      { en: "Air travel is getting cheaper.", kr: "항공 여행이 점점 저렴해지고 있습니다." }
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
      { en: "I woke up early this morning.", kr: "나는 오늘 아침 일찍 일어났어." },
      { en: "It's still too early to decide.", kr: "결정하기에는 아직 너무 이릅니다." }
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
      { en: "This is the final boarding call for Flight 302.", kr: "302편 탑승 마지막 안내입니다." },
      { en: "The boss will make the final decision tomorrow.", kr: "최종 결정은 내일 사장님이 내릴 거예요." }
    ]
  },
  {
    id: "L1-380",
    word: "buy",
    meaning: "사다",
    examples: [
      { en: "I want to buy a new computer.", kr: "나는 새 컴퓨터를 사고 싶어." },
      { en: "Did you buy a ticket for the concert?", kr: "콘서트 티켓을 샀니?" }
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
      { en: "This is a great chance to meet new clients.", kr: "새 고객들을 만날 좋은 기회예요." },
      { en: "There's a good chance it will snow tomorrow.", kr: "내일 눈이 올 가능성이 높아요." }
    ]
  },
  {
    id: "L1-439",
    word: "cost",
    meaning: "비용, (비용이) 들다",
    examples: [
      { en: "How much does it cost to ship this package?", kr: "이 소포 보내는 데 비용이 얼마나 들어요?" },
      { en: "We need to cut costs to stay within budget.", kr: "예산 안에서 맞추려면 비용을 줄여야 해요." }
    ]
  },
  {
    id: "L1-384",
    word: "fall",
    meaning: "떨어지다, 넘어지다, 가을",
    examples: [
      { en: "Be careful not to fall on the ice.", kr: "얼음 위에서 넘어지지 않도록 조심해." },
      { en: "Fall is my favorite season.", kr: "가을은 내가 가장 좋아하는 계절이야." }
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
      { en: "The project is due at the end of the month.", kr: "그 프로젝트는 이번 달 말이 마감이에요." },
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
      { en: "Does the hotel price include breakfast and parking?", kr: "호텔 가격에 조식과 주차가 포함돼 있나요?" },
      { en: "Please include your phone number in the email.", kr: "이메일에 전화번호를 포함해 주세요." }
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
      { en: "Please keep a record of all your travel expenses.", kr: "모든 출장 경비를 기록해 두세요." },
      { en: "Is it okay if I record this meeting?", kr: "이 회의를 녹음해도 괜찮을까요?" }
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
    meaning: "행사, 사건, 경우",
    examples: [
      { en: "The company is hosting a charity event this Friday.", kr: "회사가 이번 금요일에 자선 행사를 열어요." },
      { en: "In the event of a fire, please use the stairs.", kr: "화재가 발생할 경우에는 계단을 이용해 주세요." }
    ]
  },
  {
    id: "L1-448",
    word: "training",
    meaning: "훈련, 교육, 연수",
    examples: [
      { en: "All new employees must complete safety training.", kr: "모든 신입 사원은 안전 교육을 이수해야 합니다." },
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
      { en: "The company was established in 1998.", kr: "그 회사는 1998년에 설립됐어요." },
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
      { en: "Solar panels generate electricity for the whole house.", kr: "태양광 패널이 집 전체에 쓸 전기를 만들어 내요." },
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
      { en: "The numbers indicate that sales are going up.", kr: "이 수치는 매출이 오르고 있다는 걸 나타내요." },
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
    id: "L2-016",
    word: "perceive",
    meaning: "인식하다, 감지하다",
    examples: [
      { en: "How do you think customers perceive our brand?", kr: "고객들이 우리 브랜드를 어떻게 인식한다고 생각해요?" },
      { en: "I perceived a bit of tension between them.", kr: "둘 사이에 약간 긴장감이 있는 걸 감지했어요." }
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
    id: "L2-021",
    word: "sufficient",
    meaning: "충분한",
    examples: [
      { en: "Is one hour sufficient for the test?", kr: "시험 보는 데 한 시간이면 충분해요?" },
      { en: "Sorry, your balance isn't sufficient for this payment.", kr: "죄송하지만 잔액이 이 결제에 충분하지 않네요." }
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
    id: "L2-037",
    word: "integrate",
    meaning: "통합하다, 연동되다, 융화되다",
    examples: [
      { en: "The app integrates easily with your calendar.", kr: "그 앱은 캘린더랑 쉽게 연동돼요." },
      { en: "It took a while to integrate into the new team.", kr: "새 팀에 융화되는 데 시간이 좀 걸렸어요." }
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
    id: "L2-040",
    word: "merely",
    meaning: "단지, 그저",
    examples: [
      { en: "It was merely a misunderstanding, nothing more.", kr: "그건 그저 오해였을 뿐이야, 그 이상은 아니야." },
      { en: "I was merely trying to help.", kr: "난 그저 도와주려고 했을 뿐이야." }
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
    id: "L2-044",
    word: "proportion",
    meaning: "비율, 부분",
    examples: [
      { en: "A large proportion of my salary goes to rent.", kr: "내 월급의 상당 부분이 월세로 나가." },
      { en: "Mix the flour and water in equal proportions.", kr: "밀가루와 물을 같은 비율로 섞으세요." }
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
    id: "L2-050",
    word: "widespread",
    meaning: "널리 퍼진, 광범위한",
    examples: [
      { en: "Smartphone use is widespread, even among older people.", kr: "스마트폰 사용은 어르신들 사이에서도 널리 퍼져 있어요." },
      { en: "There's widespread concern about rising prices.", kr: "물가 상승에 대한 걱정이 광범위하게 퍼져 있어요." }
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
    id: "L2-054",
    word: "cite",
    meaning: "인용하다, (예로) 들다",
    examples: [
      { en: "He cited several examples to support his point.", kr: "그는 자기 주장을 뒷받침하려고 몇 가지 예를 들었어요." },
      { en: "Don't forget to cite your sources in the report.", kr: "보고서에 출처 인용하는 거 잊지 마세요." }
    ]
  },
  {
    id: "L2-055",
    word: "confine",
    meaning: "한정하다, 국한하다, 가두다",
    examples: [
      { en: "He was confined to bed for a week with the flu.", kr: "그는 독감 때문에 일주일 동안 침대에만 갇혀 지냈어요." },
      { en: "Let's confine our discussion to the budget today.", kr: "오늘은 예산 얘기로만 한정합시다." }
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
    meaning: "국내의, 가정의, 집안의",
    examples: [
      { en: "Domestic flights leave from Terminal 2.", kr: "국내선 항공편은 2터미널에서 출발해요." },
      { en: "We split the domestic chores fifty-fifty.", kr: "우리는 집안일을 반반씩 나눠서 해요." }
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
    id: "L2-062",
    word: "govern",
    meaning: "다스리다, 통치하다",
    examples: [
      { en: "It must be hard to govern such a big country.", kr: "그렇게 큰 나라를 다스리는 건 정말 어렵겠다." },
      { en: "Do you think he's fit to govern the country?", kr: "그 사람이 나라를 다스릴 자격이 있다고 생각해?" }
    ]
  },
  {
    id: "L2-063",
    word: "illustrate",
    meaning: "설명하다, 삽화를 넣다",
    examples: [
      { en: "Let me illustrate my point with an example.", kr: "예를 들어서 제 요점을 설명해 볼게요." },
      { en: "She wrote and illustrated the book herself.", kr: "그녀는 그 책을 직접 쓰고 삽화도 그렸어요." }
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
      { en: "He decided to pursue a career in medicine.", kr: "그는 의학 쪽 커리어를 추구하기로 했어요." },
      { en: "You should pursue your dreams while you're young.", kr: "젊을 때 꿈을 좇아야 해." }
    ]
  },
  {
    id: "L2-070",
    word: "ratio",
    meaning: "비율",
    examples: [
      { en: "What's the student-to-teacher ratio at that school?", kr: "그 학교 학생 대 교사 비율이 어떻게 돼요?" },
      { en: "Use a two-to-one ratio of water to rice.", kr: "물과 쌀을 2대 1 비율로 넣으세요." }
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
    id: "L2-075",
    word: "sector",
    meaning: "부문, 분야",
    examples: [
      { en: "She works in the public sector.", kr: "그녀는 공공 부문에서 일해요." },
      { en: "Jobs in the tech sector pay really well.", kr: "기술 분야 일자리는 급여가 정말 좋아요." }
    ]
  },
  {
    id: "L2-076",
    word: "simulate",
    meaning: "재현하다, 흉내 내다, 모의 실험하다",
    examples: [
      { en: "This app simulates a real job interview.", kr: "이 앱은 실제 면접을 그대로 재현해 줘요." },
      { en: "The ride simulates the feeling of flying.", kr: "그 놀이기구는 하늘을 나는 느낌을 흉내 내요." }
    ]
  },
  {
    id: "L2-077",
    word: "sole",
    meaning: "유일한, 단독의",
    examples: [
      { en: "He was the sole survivor of the crash.", kr: "그는 그 사고의 유일한 생존자였어요." },
      { en: "My sole purpose here is to help you.", kr: "내가 여기 온 유일한 목적은 널 돕는 거야." }
    ]
  },
  {
    id: "L2-078",
    word: "sphere",
    meaning: "영역, 구",
    examples: [
      { en: "Sorry, that's outside my sphere of expertise.", kr: "미안, 그건 내 전문 영역 밖이야." },
      { en: "The lamp is shaped like a glass sphere.", kr: "그 램프는 유리 구 모양이에요." }
    ]
  },
  {
    id: "L2-079",
    word: "subsequent",
    meaning: "그다음의, 이후의",
    examples: [
      { en: "The first meeting was fun, but subsequent ones were boring.", kr: "첫 회의는 재밌었는데 그 이후 회의들은 지루했어요." },
      { en: "Your first lesson is free; subsequent lessons are twenty dollars.", kr: "첫 수업은 무료고, 그다음 수업들은 20달러예요." }
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
    id: "L2-082",
    word: "transmit",
    meaning: "전송하다, 전달하다, 옮기다",
    examples: [
      { en: "Mosquitoes can transmit diseases, so wear repellent.", kr: "모기는 병을 옮길 수 있으니까 모기 기피제 발라." },
      { en: "The watch transmits data to your phone automatically.", kr: "그 시계는 데이터를 휴대폰으로 자동 전송해요." }
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
    id: "L2-088",
    word: "derive",
    meaning: "얻다, 유래하다",
    examples: [
      { en: "I derive a lot of joy from cooking for friends.", kr: "친구들한테 요리해 줄 때 큰 기쁨을 얻어요." },
      { en: "Apparently, the word 'salary' is derived from salt.", kr: "'salary'라는 단어가 소금에서 유래했대요." }
    ]
  },
  {
    id: "L2-089",
    word: "diminish",
    meaning: "줄어들다, 줄이다, 약화시키다",
    examples: [
      { en: "The pain should diminish in a few days.", kr: "통증은 며칠 지나면 줄어들 거예요." },
      { en: "Don't let one mistake diminish your confidence.", kr: "실수 하나로 자신감이 줄어들게 하지 마." }
    ]
  },
  {
    id: "L2-090",
    word: "emerge",
    meaning: "나타나다, 드러나다, 나오다",
    examples: [
      { en: "New details emerged after the investigation.", kr: "조사 후에 새로운 사실들이 드러났어요." },
      { en: "She emerged from the meeting looking really upset.", kr: "그녀가 회의실에서 나왔는데 정말 화나 보였어." }
    ]
  },
  {
    id: "L2-091",
    word: "flexible",
    meaning: "유연한, 융통성 있는",
    examples: [
      { en: "My work hours are pretty flexible.", kr: "제 근무 시간은 꽤 유연해요." },
      { en: "My schedule's flexible, so pick any day you want.", kr: "내 일정은 유연하니까 원하는 날 아무 때나 골라." }
    ]
  },
  {
    id: "L2-092",
    word: "infrastructure",
    meaning: "기반 시설, 인프라",
    examples: [
      { en: "The city's infrastructure is getting really old.", kr: "이 도시의 기반 시설이 정말 낡아 가고 있어요." },
      { en: "Good internet infrastructure is a must for remote work.", kr: "재택근무엔 좋은 인터넷 인프라가 꼭 필요해요." }
    ]
  },
  {
    id: "L2-093",
    word: "massive",
    meaning: "거대한, 엄청난, 대규모의",
    examples: [
      { en: "There was a massive line outside the store.", kr: "가게 밖에 줄이 어마어마하게 길었어." },
      { en: "The storm caused massive damage to the coast.", kr: "그 폭풍이 해안에 엄청난 피해를 입혔어요." }
    ]
  },
  {
    id: "L2-094",
    word: "migrate",
    meaning: "이동하다, 이주하다, 옮기다",
    examples: [
      { en: "Birds migrate south for the winter.", kr: "새들은 겨울을 나러 남쪽으로 이동해요." },
      { en: "We're migrating all our files to the new system.", kr: "파일을 전부 새 시스템으로 옮기고 있어요." }
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
    id: "L2-097",
    word: "sustain",
    meaning: "유지하다, 지속하다, 지탱하다",
    examples: [
      { en: "I can't sustain this pace much longer.", kr: "이 속도를 더는 오래 유지 못 하겠어." },
      { en: "Can this shelf sustain the weight of all these books?", kr: "이 선반이 이 책들 무게를 다 지탱할 수 있을까?" }
    ]
  },
  {
    id: "L2-098",
    word: "reinforce",
    meaning: "강화하다, 보강하다",
    examples: [
      { en: "We need to reinforce the weak parts of the wall.", kr: "벽의 약한 부분을 보강해야 해요." },
      { en: "This experience reinforced my decision to change jobs.", kr: "이번 경험이 이직하겠다는 결심을 더 강화해 줬어요." }
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
    id: "L2-101",
    word: "adequate",
    meaning: "충분한, 적절한, 그런대로 괜찮은",
    examples: [
      { en: "Do we have adequate time to prepare?", kr: "준비할 시간이 충분해요?" },
      { en: "The hotel was adequate, but nothing special.", kr: "호텔은 그런대로 괜찮았는데 특별하진 않았어요." }
    ]
  },
  {
    id: "L2-102",
    word: "allocate",
    meaning: "할당하다, 배정하다, 배분하다",
    examples: [
      { en: "How much should we allocate for the trip?", kr: "여행에 얼마를 배정해야 할까?" },
      { en: "Let's allocate tasks to everyone on the team.", kr: "팀원 모두에게 업무를 배분하자." }
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
    id: "L2-107",
    word: "comprehensive",
    meaning: "종합적인, 포괄적인",
    examples: [
      { en: "This guide is really comprehensive and easy to follow.", kr: "이 가이드는 정말 포괄적이고 따라 하기 쉬워요." },
      { en: "I'd like a comprehensive insurance plan.", kr: "종합 보험에 가입하고 싶어요." }
    ]
  },
  {
    id: "L2-108",
    word: "consequently",
    meaning: "결과적으로",
    examples: [
      { en: "I overslept and consequently missed my flight.", kr: "늦잠을 자서 결과적으로 비행기를 놓쳤어." },
      { en: "The road was closed; consequently, we had to take a detour.", kr: "도로가 통제돼서 결과적으로 돌아가야 했어요." }
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
    id: "L2-110",
    word: "deduce",
    meaning: "추론하다",
    examples: [
      { en: "From his accent, I deduced he was from Texas.", kr: "말투를 듣고 그가 텍사스 출신이라고 추론했어요." },
      { en: "What can we deduce from these numbers?", kr: "이 숫자들로 뭘 추론할 수 있을까요?" }
    ]
  },
  {
    id: "L2-111",
    word: "depict",
    meaning: "묘사하다, 나타내다",
    examples: [
      { en: "The movie depicts life in the 1980s.", kr: "그 영화는 1980년대의 삶을 묘사해요." },
      { en: "The painting depicts a busy market scene.", kr: "그 그림은 붐비는 시장 풍경을 묘사하고 있어요." }
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
      { en: "The company was accused of exploiting its workers.", kr: "그 회사는 직원들을 착취했다는 비난을 받았어요." },
      { en: "Hackers exploited a weakness in the system.", kr: "해커들이 시스템의 약점을 악용했어요." }
    ]
  },
  {
    id: "L2-117",
    word: "fluctuate",
    meaning: "변동하다, 오르내리다",
    examples: [
      { en: "Gas prices have been fluctuating a lot lately.", kr: "요즘 기름값이 많이 오르내리고 있어요." },
      { en: "My weight tends to fluctuate during the holidays.", kr: "명절 동안엔 몸무게가 오르락내리락하는 편이에요." }
    ]
  },
  {
    id: "L2-118",
    word: "framework",
    meaning: "틀, 체계, 골조",
    examples: [
      { en: "We need a clear framework for this project.", kr: "이 프로젝트에는 명확한 틀이 필요해요." },
      { en: "The house has a wooden framework.", kr: "그 집은 나무 골조로 되어 있어요." }
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
    id: "L2-121",
    word: "inhibit",
    meaning: "억제하다, 막다",
    examples: [
      { en: "Fear can inhibit you from speaking up.", kr: "두려움은 네가 의견을 말하는 걸 막을 수 있어." },
      { en: "This cream helps inhibit the growth of bacteria.", kr: "이 크림은 세균 번식을 억제하는 데 도움이 돼요." }
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
    id: "L2-129",
    word: "mediate",
    meaning: "중재하다",
    examples: [
      { en: "My mom had to mediate between me and my sister.", kr: "엄마가 나랑 언니 사이를 중재해야 했어." },
      { en: "We hired a lawyer to mediate the dispute.", kr: "분쟁을 중재하려고 변호사를 고용했어요." }
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
    id: "L2-132",
    word: "notion",
    meaning: "생각, 개념, 관념",
    examples: [
      { en: "I don't buy the notion that money equals happiness.", kr: "돈이 곧 행복이라는 생각엔 동의 안 해." },
      { en: "He has no notion of time.", kr: "그는 시간 개념이 전혀 없어." }
    ]
  },
  {
    id: "L2-133",
    word: "obtain",
    meaning: "얻다, 받다, 획득하다",
    examples: [
      { en: "Where can I obtain a visa?", kr: "비자는 어디서 받을 수 있어요?" },
      { en: "You need to obtain permission before filming here.", kr: "여기서 촬영하려면 먼저 허가를 받아야 해요." }
    ]
  },
  {
    id: "L2-134",
    word: "oppose",
    meaning: "반대하다",
    examples: [
      { en: "Most people oppose the new tax.", kr: "대부분의 사람들이 새 세금에 반대해요." },
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
    id: "L2-138",
    word: "precede",
    meaning: "선행하다, 앞서다",
    examples: [
      { en: "The movie is preceded by a short cartoon.", kr: "영화 시작 전에 짧은 만화가 앞서 상영돼요." },
      { en: "Lightning always precedes thunder during a storm.", kr: "폭풍이 칠 때 번개는 항상 천둥보다 앞서요." }
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
    id: "L2-144",
    word: "refine",
    meaning: "다듬다, 개선하다, 정제하다",
    examples: [
      { en: "Let's refine the plan a bit more.", kr: "계획을 좀 더 다듬어 보자." },
      { en: "You can refine your search by price.", kr: "가격 조건으로 검색을 더 정교하게 다듬을 수 있어요." }
    ]
  },
  {
    id: "L2-145",
    word: "regulate",
    meaning: "규제하다, 조절하다",
    examples: [
      { en: "The thermostat regulates the room temperature.", kr: "온도 조절기가 방 온도를 조절해 줘요." },
      { en: "The government should regulate these apps more strictly.", kr: "정부가 이런 앱들을 더 엄격하게 규제해야 해요." }
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
    id: "L2-148",
    word: "replicate",
    meaning: "복제하다, 재현하다",
    examples: [
      { en: "Scientists couldn't replicate the results.", kr: "과학자들은 그 결과를 재현하지 못했어요." },
      { en: "I tried to replicate my grandma's recipe, but failed.", kr: "할머니 레시피를 재현해 보려 했는데 실패했어." }
    ]
  },
  {
    id: "L2-149",
    word: "retain",
    meaning: "유지하다, 보유하다, 기억하다",
    examples: [
      { en: "She managed to retain her sense of humor.", kr: "그녀는 유머 감각을 끝까지 유지했어요." },
      { en: "It's hard to retain new words without reviewing.", kr: "복습 안 하면 새 단어를 기억하기 어려워요." }
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
    id: "L2-152",
    word: "scope",
    meaning: "범위",
    examples: [
      { en: "That's beyond the scope of this project.", kr: "그건 이 프로젝트의 범위를 벗어나요." },
      { en: "Let's limit the scope of the discussion.", kr: "논의 범위를 좀 제한해 봐요." }
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
    id: "L2-156",
    word: "terminate",
    meaning: "종료하다, 해지하다",
    examples: [
      { en: "I want to terminate my phone contract early.", kr: "휴대폰 계약을 일찍 해지하고 싶어요." },
      { en: "They terminated his contract after just two months.", kr: "두 달 만에 그 사람 계약을 종료했대." }
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
    meaning: "변형시키다, 완전히 바꾸다",
    examples: [
      { en: "The internet has transformed the way we communicate.", kr: "인터넷은 우리가 소통하는 방식을 완전히 바꿔 놓았어요." },
      { en: "They transformed the garage into a small studio.", kr: "그들은 차고를 작은 작업실로 탈바꿈시켰어요." }
    ]
  },
  {
    id: "L2-160",
    word: "unanimous",
    meaning: "만장일치의",
    examples: [
      { en: "The team's decision was unanimous.", kr: "팀의 결정은 만장일치였어요." },
      { en: "We were unanimous: pizza for dinner!", kr: "만장일치로 저녁은 피자로 결정!" }
    ]
  },
  {
    id: "L2-161",
    word: "utilize",
    meaning: "활용하다, 이용하다",
    examples: [
      { en: "We should utilize the extra space better.", kr: "남는 공간을 더 잘 활용해야 해요." },
      { en: "The company utilizes solar power to cut costs.", kr: "그 회사는 비용을 줄이려고 태양광 에너지를 이용해요." }
    ]
  },
  {
    id: "L2-162",
    word: "validate",
    meaning: "확인하다, 인정해 주다, 입증하다",
    examples: [
      { en: "Don't forget to validate your ticket before boarding.", kr: "탑승하기 전에 승차권 확인받는 거 잊지 마." },
      { en: "Sometimes you just need someone to validate your feelings.", kr: "가끔은 그냥 누군가 내 감정을 인정해 줬으면 할 때가 있잖아." }
    ]
  },
  {
    id: "L2-163",
    word: "compile",
    meaning: "모아서 정리하다, 취합하다",
    examples: [
      { en: "I compiled a list of restaurants for our trip.", kr: "여행 때 갈 식당 목록을 모아서 정리해 뒀어." },
      { en: "Can you compile the survey results by Monday?", kr: "월요일까지 설문 결과 취합해 줄래요?" }
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
    id: "L2-166",
    word: "enforce",
    meaning: "시행하다, 집행하다, 강제하다",
    examples: [
      { en: "The new rules will be strictly enforced from tomorrow.", kr: "새 규칙은 내일부터 엄격하게 시행돼요." },
      { en: "Nobody really enforces the dress code here.", kr: "여기선 아무도 복장 규정을 딱히 강제하지 않아요." }
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
    id: "L2-170",
    word: "implement",
    meaning: "실행하다, 시행하다, 도입하다",
    examples: [
      { en: "When are we going to implement the new system?", kr: "새 시스템을 언제 도입해요?" },
      { en: "It's a great idea, but hard to implement.", kr: "좋은 아이디어지만 실행하기가 어려워요." }
    ]
  },
  {
    id: "L2-171",
    word: "inflict",
    meaning: "(피해·고통을) 가하다, 입히다",
    examples: [
      { en: "The storm inflicted serious damage on the town.", kr: "폭풍이 마을에 심각한 피해를 입혔어요." },
      { en: "Why would you inflict that pain on yourself?", kr: "왜 굳이 스스로에게 그런 고통을 가해?" }
    ]
  },
  {
    id: "L2-172",
    word: "intervene",
    meaning: "개입하다, 끼어들다",
    examples: [
      { en: "The teacher had to intervene to stop the fight.", kr: "선생님이 싸움을 말리려고 개입해야 했어요." },
      { en: "I don't want to intervene, but you two need to talk.", kr: "끼어들고 싶진 않은데, 너희 둘 얘기 좀 해야 할 것 같아." }
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
    id: "L2-175",
    word: "marginal",
    meaning: "미미한, 아주 적은",
    examples: [
      { en: "The difference between the two phones is marginal.", kr: "두 폰의 차이는 미미해요." },
      { en: "We saw only a marginal improvement in sales.", kr: "매출은 미미하게 개선됐을 뿐이에요." }
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
    id: "L2-177",
    word: "paradox",
    meaning: "역설",
    examples: [
      { en: "It's a paradox: the more I rest, the more tired I feel.", kr: "역설이야. 쉬면 쉴수록 더 피곤하게 느껴져." },
      { en: "Isn't it a paradox that free apps make the most money?", kr: "무료 앱이 돈을 제일 많이 번다는 게 역설 아니야?" }
    ]
  },
  {
    id: "L2-178",
    word: "preliminary",
    meaning: "예비의, 사전의",
    examples: [
      { en: "These are just the preliminary results.", kr: "이건 그냥 예비 결과일 뿐이에요." },
      { en: "We had a preliminary meeting to discuss the budget.", kr: "예산을 논의하려고 사전 회의를 했어요." }
    ]
  },
  {
    id: "L2-179",
    word: "prosecute",
    meaning: "기소하다",
    examples: [
      { en: "The sign says shoplifters will be prosecuted.", kr: "표지판에 물건 훔치면 기소된다고 쓰여 있어." },
      { en: "Do you think they'll prosecute him?", kr: "검찰이 그 사람을 기소할 것 같아?" }
    ]
  },
  {
    id: "L2-180",
    word: "reiterate",
    meaning: "되풀이하다, 다시 말하다",
    examples: [
      { en: "Let me reiterate how important it is to be on time.", kr: "시간 지키는 게 얼마나 중요한지 다시 한번 말할게요." },
      { en: "He reiterated that he had nothing to do with it.", kr: "그는 자기는 그 일과 아무 상관이 없다고 거듭 말했어요." }
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
    id: "L2-182",
    word: "revenue",
    meaning: "수익, 매출",
    examples: [
      { en: "Our revenue went up twenty percent this year.", kr: "올해 우리 매출이 20퍼센트 올랐어요." },
      { en: "Most of the app's revenue comes from ads.", kr: "그 앱 수익의 대부분은 광고에서 나와요." }
    ]
  },
  {
    id: "L2-183",
    word: "speculate",
    meaning: "추측하다",
    examples: [
      { en: "We can only speculate about why he quit.", kr: "그가 왜 그만뒀는지는 추측만 할 수 있을 뿐이야." },
      { en: "I don't want to speculate until we know more.", kr: "더 알게 되기 전엔 추측하고 싶지 않아요." }
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
    id: "L2-189",
    word: "undergo",
    meaning: "겪다, (검사·수술 등을) 받다",
    examples: [
      { en: "My dad is undergoing surgery next week.", kr: "우리 아빠가 다음 주에 수술을 받으세요." },
      { en: "The office is undergoing renovations, so it's noisy.", kr: "사무실이 리모델링 공사 중이라 시끄러워요." }
    ]
  },
  {
    id: "L2-190",
    word: "undermine",
    meaning: "약화시키다, 깎아내리다",
    examples: [
      { en: "Don't let criticism undermine your confidence.", kr: "비판 때문에 자신감이 약해지게 두지 마." },
      { en: "He keeps undermining me in front of the boss.", kr: "그는 상사 앞에서 계속 나를 깎아내려." }
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
    id: "L2-194",
    word: "advocate",
    meaning: "지지하다, 옹호하다, 옹호자",
    examples: [
      { en: "She's a passionate advocate for mental health.", kr: "그녀는 정신 건강을 위한 열정적인 옹호자예요." },
      { en: "I strongly advocate taking breaks during work.", kr: "난 일하는 중간중간 쉬는 걸 강력하게 지지해." }
    ]
  },
  {
    id: "L2-195",
    word: "allegedly",
    meaning: "~라고 알려진, 듣기로는",
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
    id: "L2-197",
    word: "discrepancy",
    meaning: "불일치, 차이",
    examples: [
      { en: "There's a discrepancy between the bill and the receipt.", kr: "청구서랑 영수증 금액이 서로 불일치해요." },
      { en: "Can you explain this discrepancy in the numbers?", kr: "숫자가 왜 이렇게 차이가 나는지 설명해 줄래요?" }
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
    id: "L2-201",
    word: "orient",
    meaning: "방향을 잡다, ~을 대상으로 하다, 지향하게 하다",
    examples: [
      { en: "Give me a minute to orient myself; this station is huge.", kr: "방향 좀 잡게 잠깐만, 이 역 진짜 크다." },
      { en: "The workshop is oriented toward beginners, so don't worry.", kr: "그 워크숍은 초보자 위주라서 걱정 안 해도 돼." }
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
    id: "L2-205",
    word: "prevalent",
    meaning: "널리 퍼진, 흔한",
    examples: [
      { en: "Back pain is really prevalent among office workers.", kr: "허리 통증은 직장인들 사이에서 정말 흔해요." },
      { en: "That kind of scam is more prevalent than you think.", kr: "그런 사기가 생각보다 훨씬 흔해." }
    ]
  },
  {
    id: "L2-206",
    word: "profound",
    meaning: "깊은, 심오한, 엄청난",
    examples: [
      { en: "That movie had a profound effect on me.", kr: "그 영화는 나한테 엄청난 영향을 줬어." },
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
    meaning: "전적으로, 완전히, 물론이죠",
    examples: [
      { en: "You're absolutely right about the deadline.", kr: "마감에 대해서는 당신 말이 전적으로 맞아요." },
      { en: "The food at the wedding was absolutely delicious.", kr: "결혼식 음식이 정말 더할 나위 없이 맛있었어요." }
    ]
  },
  {
    id: "L2-210",
    word: "recollection",
    meaning: "기억, 회상",
    examples: [
      { en: "I have no recollection of saying that.", kr: "내가 그런 말을 한 기억이 전혀 없어." },
      { en: "I have a vague recollection of meeting her before.", kr: "전에 그녀를 만난 기억이 어렴풋이 나요." }
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
      { en: "Please let me know if you need additional information.", kr: "추가 정보가 필요하시면 알려 주세요." }
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
    id: "L2-214",
    word: "reside",
    meaning: "거주하다",
    examples: [
      { en: "How long have you resided in the United States?", kr: "미국에 거주하신 지 얼마나 되셨어요?" },
      { en: "Please list everyone who resides at this address.", kr: "이 주소에 거주하는 사람을 모두 적어 주세요." }
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
    id: "L2-218",
    word: "spatial",
    meaning: "공간의, 공간적인",
    examples: [
      { en: "I have terrible spatial awareness; I bump into everything.", kr: "나 공간 감각이 진짜 없어서 맨날 여기저기 부딪혀." },
      { en: "Good drivers have strong spatial skills, especially when parking.", kr: "운전 잘하는 사람들은 공간 감각이 좋아, 특히 주차할 때." }
    ]
  },
  {
    id: "L2-219",
    word: "specify",
    meaning: "명시하다, 구체적으로 말하다",
    examples: [
      { en: "Please specify the type of computer you need.", kr: "필요한 컴퓨터 종류를 구체적으로 말씀해 주세요." },
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
      { en: "There has been a significant increase in online sales.", kr: "온라인 매출이 상당히 증가했습니다." },
      { en: "Today is a significant day for our company.", kr: "오늘은 우리 회사에 의미 있는 날입니다." }
    ]
  },
  {
    id: "L2-226",
    word: "unify",
    meaning: "통합하다, 하나로 만들다",
    examples: [
      { en: "The new app will unify all our accounts in one place.", kr: "새 앱으로 우리 계정을 전부 한곳에 통합할 거예요." },
      { en: "Nothing unifies a team like a tough deadline.", kr: "빠듯한 마감만큼 팀을 하나로 뭉치게 하는 건 없어." }
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
    id: "L2-228",
    word: "whereas",
    meaning: "반면에",
    examples: [
      { en: "Some people like coffee, whereas others prefer tea.", kr: "커피를 좋아하는 사람이 있는 반면, 차를 더 좋아하는 사람도 있어요." },
      { en: "I'm a morning person, whereas my husband loves staying up late.", kr: "나는 아침형 인간인 반면, 남편은 늦게까지 깨어 있는 걸 좋아해." }
    ]
  },
  {
    id: "L2-229",
    word: "accompany",
    meaning: "동행하다, 함께 가다, 동반하다",
    examples: [
      { en: "Children must be accompanied by an adult.", kr: "어린이는 반드시 보호자와 동반해야 합니다." },
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
      { en: "All patient information remains strictly confidential.", kr: "모든 환자 정보는 철저히 비밀로 유지됩니다." }
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
      { en: "He dedicated his life to helping the poor.", kr: "그는 가난한 사람들을 돕는 데 평생을 바쳤어요." },
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
      { en: "Both sides finally agreed on a fair price.", kr: "양측은 마침내 적정한 가격에 합의했습니다." }
    ]
  },
  {
    id: "L2-242",
    word: "finite",
    meaning: "유한한, 한정된",
    examples: [
      { en: "Remember, our budget is finite, so choose wisely.", kr: "기억해, 예산은 한정돼 있으니까 잘 골라." },
      { en: "Time is finite, so let's not waste it arguing.", kr: "시간은 한정돼 있으니까 말다툼하느라 낭비하지 말자." }
    ]
  },
  {
    id: "L2-243",
    word: "foundation",
    meaning: "기초, 토대, 재단",
    examples: [
      { en: "Trust is the foundation of any good relationship.", kr: "신뢰는 모든 좋은 관계의 기초예요." },
      { en: "She set up a foundation to help homeless people.", kr: "그녀는 노숙인을 돕는 재단을 세웠어요." }
    ]
  },
  {
    id: "L2-244",
    word: "inevitable",
    meaning: "피할 수 없는, 불가피한",
    examples: [
      { en: "Change is an inevitable part of life.", kr: "변화는 삶에서 피할 수 없는 부분이에요." },
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
    meaning: "성명, 진술, 명세서",
    examples: [
      { en: "The company released a statement about the data leak.", kr: "회사는 데이터 유출에 관한 성명을 발표했습니다." },
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
      { en: "We couldn't locate the source of the noise.", kr: "소음이 어디서 나는지 찾아내지 못했어요." },
      { en: "Our office is located right next to the subway station.", kr: "저희 사무실은 지하철역 바로 옆에 위치해 있어요." }
    ]
  },
  {
    id: "L2-414",
    word: "ability",
    meaning: "능력, 재능",
    examples: [
      { en: "She has the ability to stay calm under pressure.", kr: "그녀는 압박 속에서도 침착함을 유지하는 능력이 있어요." },
      { en: "I'll do the job to the best of my ability.", kr: "제 능력이 닿는 데까지 최선을 다해 그 일을 하겠습니다." }
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
    id: "L2-254",
    word: "oblige",
    meaning: "의무를 지우다, (부탁을) 들어주다",
    examples: [
      { en: "I was happy to oblige when she asked for help.", kr: "그녀가 도와 달라고 해서 기꺼이 들어줬어요." },
      { en: "You're not obliged to answer that question.", kr: "그 질문에 대답할 의무는 없어요." }
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
    id: "L2-257",
    word: "optimum",
    meaning: "최적의",
    examples: [
      { en: "What's the optimum time to post on social media?", kr: "SNS에 글 올리기 최적의 시간이 언제예요?" },
      { en: "Eight hours is the optimum amount of sleep for me.", kr: "나한테는 8시간이 최적의 수면 시간이야." }
    ]
  },
  {
    id: "L2-258",
    word: "parallel",
    meaning: "평행한, 나란한, 유사점",
    examples: [
      { en: "The road runs parallel to the river.", kr: "그 도로는 강과 나란히 뻗어 있어요." },
      { en: "I see a lot of parallels between our two situations.", kr: "우리 둘 상황에 유사한 점이 많은 것 같아." }
    ]
  },
  {
    id: "L2-416",
    word: "knowledge",
    meaning: "지식, 알고 있음",
    examples: [
      { en: "He has a deep knowledge of local history.", kr: "그는 지역 역사에 대한 지식이 깊어요." },
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
    id: "L2-261",
    word: "presume",
    meaning: "추정하다, 가정하다, 감히 ~하다",
    examples: [
      { en: "I presume you're here for the meeting?", kr: "회의 때문에 오신 걸로 짐작되는데, 맞죠?" },
      { en: "Don't presume to tell me what to do.", kr: "감히 나한테 이래라저래라 하지 마." }
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
      { en: "I'd like to take this opportunity to thank everyone.", kr: "이 기회를 빌려 모든 분께 감사드리고 싶습니다." }
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
    meaning: "뒤집다, 반대의",
    examples: [
      { en: "The company decided to reverse its earlier decision.", kr: "그 회사는 이전의 결정을 뒤집기로 결정했습니다." },
      { en: "The names were listed in reverse order.", kr: "이름들이 역순으로 나열되었습니다." }
    ]
  },
  {
    id: "L2-272",
    word: "route",
    meaning: "경로, 길",
    examples: [
      { en: "We need to find the shortest route to the station.", kr: "우리는 역까지 가장 짧은 경로를 찾아야 합니다." },
      { en: "The delivery truck follows the same route every day.", kr: "그 배달 트럭은 매일 같은 경로로 다닙니다." }
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
      { en: "Does your insurance cover dental work?", kr: "당신 보험은 치과 치료도 보장되나요?" },
      { en: "Don't forget to buy travel insurance before your trip.", kr: "여행 가기 전에 여행자 보험 드는 거 잊지 마." }
    ]
  },
  {
    id: "L2-423",
    word: "majority",
    meaning: "대다수, 과반수",
    examples: [
      { en: "The majority of our customers shop on their phones.", kr: "우리 고객 대다수는 휴대폰으로 쇼핑해요." },
      { en: "The plan was approved by a majority vote.", kr: "그 계획은 과반수 찬성으로 승인됐습니다." }
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
      { en: "The product launch was very successful.", kr: "제품 출시는 매우 성공적이었어요." },
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
      { en: "The project failed due to a lack of funding.", kr: "그 프로젝트는 자금 부족으로 실패했어요." },
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
      { en: "The hotel can accommodate up to 300 guests.", kr: "그 호텔은 손님을 최대 300명까지 수용할 수 있어요." },
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
    id: "L2-288",
    word: "confer",
    meaning: "상의하다, 협의하다",
    examples: [
      { en: "Give me a minute to confer with my team.", kr: "팀이랑 잠깐 상의할 시간 좀 주세요." },
      { en: "The judges are conferring before they announce the winner.", kr: "심사위원들이 우승자 발표 전에 협의하고 있어요." }
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
      { en: "We use strong passwords to protect customer data.", kr: "우리는 고객 데이터를 보호하기 위해 강력한 비밀번호를 사용해요." }
    ]
  },
  {
    id: "L2-294",
    word: "exclusively",
    meaning: "오로지, ~전용으로, 독점적으로",
    examples: [
      { en: "This offer is exclusively for our members.", kr: "이 혜택은 오로지 회원 전용이에요." },
      { en: "The pool is exclusively for hotel guests.", kr: "그 수영장은 호텔 투숙객 전용이에요." }
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
    meaning: "지수, 색인",
    examples: [
      { en: "Did you see the stock index today? It's way up.", kr: "오늘 주가 지수 봤어? 엄청 올랐어." },
      { en: "Check the index at the back of the book.", kr: "책 뒤쪽에 있는 색인을 확인해 봐." }
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
      { en: "The team presented a detailed analysis of the market.", kr: "팀이 시장에 대한 자세한 분석을 발표했어요." },
      { en: "Further analysis is needed before we decide.", kr: "결정하기 전에 추가 분석이 필요합니다." }
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
    meaning: "극대화하다",
    examples: [
      { en: "We need to maximize our profits this quarter.", kr: "이번 분기에는 수익을 극대화해야 해요." },
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
      { en: "The storm caused serious damage to the roof.", kr: "폭풍으로 지붕이 심각한 피해를 입었어요." },
      { en: "Too much sun can damage your eyes.", kr: "햇빛을 너무 많이 쬐면 눈이 손상될 수 있어요." }
    ]
  },
  {
    id: "L2-315",
    word: "predominantly",
    meaning: "주로, 대부분",
    examples: [
      { en: "Our customers are predominantly young women.", kr: "우리 고객은 주로 젊은 여성이에요." },
      { en: "The team is predominantly engineers, so meetings get technical.", kr: "팀원이 대부분 엔지니어라 회의가 기술적으로 흘러가요." }
    ]
  },
  {
    id: "L2-437",
    word: "doubt",
    meaning: "의심, 의심하다, ~일 것 같지 않다",
    examples: [
      { en: "I doubt he'll arrive on time in this traffic.", kr: "이렇게 차가 막히는데 그가 제시간에 올지 의문이야." },
      { en: "If you're in doubt, ask your manager.", kr: "확신이 서지 않으면 매니저에게 물어보세요." }
    ]
  },
  {
    id: "L2-438",
    word: "notice",
    meaning: "알아차리다, 통지, 공지",
    examples: [
      { en: "Did you notice anything strange about his behavior?", kr: "그의 행동에서 이상한 점을 알아차렸어요?" },
      { en: "Employees must give two weeks' notice before quitting.", kr: "직원은 그만두기 2주 전에 통지해야 합니다." }
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
      { en: "The new policy becomes effective on January first.", kr: "새 정책은 1월 1일부터 시행됩니다." }
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
      { en: "Both companies signed the agreement this morning.", kr: "두 회사는 오늘 아침 합의서에 서명했습니다." },
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
      { en: "She became a top executive at a major bank.", kr: "그녀는 대형 은행의 최고 임원이 되었어요." },
      { en: "The executive team will announce the decision tomorrow.", kr: "경영진이 내일 결정을 발표할 거예요." }
    ]
  },
  {
    id: "L2-449",
    word: "therefore",
    meaning: "그러므로, 따라서",
    examples: [
      { en: "The flight was canceled; therefore, we stayed another night.", kr: "항공편이 취소됐고, 따라서 우리는 하룻밤 더 묵었어요." },
      { en: "Prices have risen, and therefore sales have dropped.", kr: "가격이 올랐고, 그러므로 판매량이 감소했습니다." }
    ]
  },
  {
    id: "L2-334",
    word: "suffice",
    meaning: "충분하다",
    examples: [
      { en: "A short email should suffice; no need for a meeting.", kr: "짧은 이메일이면 충분해요, 회의까지 할 필요는 없어요." },
      { en: "Two large pizzas should suffice for the party.", kr: "피자 큰 거 두 판이면 파티에 충분할 거야." }
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
      { en: "The company is looking for foreign investment.", kr: "그 회사는 해외 투자를 유치하려 하고 있습니다." }
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
    id: "L2-345",
    word: "warrant",
    meaning: "영장, ~할 만하다(정당화하다)",
    examples: [
      { en: "The police have a warrant to search the house.", kr: "경찰이 그 집 수색 영장을 갖고 있어요." },
      { en: "A small mistake like that doesn't warrant firing him.", kr: "그런 작은 실수로 그를 해고할 만하진 않아요." }
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
    meaning: "매우 중요한, 비판적인",
    examples: [
      { en: "Customer feedback is critical to our success.", kr: "고객 피드백은 우리의 성공에 매우 중요합니다." },
      { en: "My manager is often critical of my writing.", kr: "제 상사는 종종 제 글에 대해 비판적이에요." }
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
    id: "L2-352",
    word: "commence",
    meaning: "시작하다",
    examples: [
      { en: "Boarding will commence in about ten minutes.", kr: "탑승은 약 10분 후에 시작됩니다." },
      { en: "The ceremony will commence at 2 p.m. sharp.", kr: "기념식은 오후 2시 정각에 시작됩니다." }
    ]
  },
  {
    id: "L2-353",
    word: "constitute",
    meaning: "구성하다, (~을) 이루다, ~에 해당하다",
    examples: [
      { en: "Women constitute the majority of our staff.", kr: "우리 직원 대다수를 여성이 이루고 있어요." },
      { en: "Does this constitute a breach of contract?", kr: "이게 계약 위반에 해당하나요?" }
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
      { en: "Most young people can't afford rent in the city center.", kr: "대부분의 젊은이들은 도심의 월세를 감당할 수 없어요." },
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
    id: "L2-362",
    word: "equate",
    meaning: "동일시하다, 같게 여기다",
    examples: [
      { en: "You shouldn't equate money with happiness.", kr: "돈이랑 행복을 동일시하면 안 돼." },
      { en: "People often equate success with a high salary.", kr: "사람들은 흔히 성공을 높은 연봉과 동일시해요." }
    ]
  },
  {
    id: "L2-463",
    word: "supply",
    meaning: "공급하다, 공급, 용품",
    examples: [
      { en: "This company supplies parts to car makers.", kr: "이 회사는 자동차 제조업체에 부품을 공급해요." },
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
    id: "L2-365",
    word: "evident",
    meaning: "분명한, 명백한",
    examples: [
      { en: "It was evident that she was upset.", kr: "그녀가 속상해한다는 게 분명히 보였어요." },
      { en: "It's evident that you put a lot of work into this.", kr: "여기에 공을 많이 들인 게 확실히 보여요." }
    ]
  },
  {
    id: "L2-366",
    word: "export",
    meaning: "수출하다, (파일을) 내보내다, 수출품",
    examples: [
      { en: "Korea exports a lot of cars and phones.", kr: "한국은 자동차랑 휴대폰을 많이 수출해요." },
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
      { en: "Social media can influence what people buy.", kr: "소셜 미디어는 사람들이 무엇을 사는지에 영향을 미칠 수 있어요." }
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
      { en: "Communication is an important skill in any job.", kr: "의사소통은 어떤 직업에서든 중요한 능력이에요." },
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
      { en: "We received your request and will reply soon.", kr: "요청 사항을 받았으며 곧 답변드리겠습니다." }
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
      { en: "Read the third section of the textbook for homework.", kr: "숙제로 교과서 세 번째 부분을 읽어 오세요." }
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
      { en: "Please check the arrival time before you leave for the airport.", kr: "공항으로 출발하기 전에 도착 시간을 확인하세요." },
      { en: "Since the arrival of the new manager, our meetings have been shorter.", kr: "새 매니저가 온 이후로 회의가 짧아졌어요." }
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
    id: "L3-003",
    word: "amend",
    meaning: "수정하다, 개정하다",
    examples: [
      { en: "Can we amend the contract before we sign it?", kr: "서명하기 전에 계약서를 수정할 수 있을까요?" },
      { en: "I need to amend my tax return. I made a mistake.", kr: "세금 신고서를 수정해야 해요. 실수를 했거든요." }
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
    id: "L3-007",
    word: "assert",
    meaning: "주장하다, 단언하다",
    examples: [
      { en: "You need to assert yourself more in meetings.", kr: "회의에서 좀 더 자기 의견을 분명히 말해야 해요." },
      { en: "He keeps asserting that he did nothing wrong.", kr: "그는 자기가 잘못한 게 없다고 계속 주장해요." }
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
    meaning: "추정하다, (책임을) 맡다",
    examples: [
      { en: "I assume you've already read the email?", kr: "이메일은 이미 읽으셨다고 생각해도 되죠?" },
      { en: "Jake will assume the team leader role next month.", kr: "다음 달부터 제이크가 팀장 역할을 맡을 거예요." }
    ]
  },
  {
    id: "L3-010",
    word: "attribute",
    meaning: "(~의) 덕분/탓으로 돌리다, 자질, 속성",
    examples: [
      { en: "He attributes his success to hard work and luck.", kr: "그는 자기 성공이 노력과 운 덕분이라고 해요." },
      { en: "Patience is an important attribute of a good teacher.", kr: "인내심은 좋은 선생님의 중요한 자질이에요." }
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
    id: "L3-012",
    word: "cease",
    meaning: "중단하다, 멈추다",
    examples: [
      { en: "Your kids never cease to amaze me.", kr: "너희 애들은 볼 때마다 날 놀라게 해." },
      { en: "Thank goodness the noise finally ceased around midnight.", kr: "다행히 자정쯤 소음이 드디어 멈췄어요." }
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
    id: "L3-015",
    word: "concede",
    meaning: "(마지못해) 인정하다",
    examples: [
      { en: "Okay, I concede. You were right about the restaurant.", kr: "알았어, 인정할게. 그 식당은 네 말이 맞았어." },
      { en: "He conceded defeat and congratulated the winner.", kr: "그는 패배를 인정하고 이긴 사람을 축하해 줬어요." }
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
    id: "L3-018",
    word: "constrain",
    meaning: "제약하다, 얽매다",
    examples: [
      { en: "We're constrained by a tight budget this year.", kr: "올해는 빠듯한 예산 때문에 제약이 많아요." },
      { en: "I don't want to feel constrained by too many rules.", kr: "너무 많은 규칙에 얽매이고 싶지 않아요." }
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
    id: "L3-021",
    word: "correlation",
    meaning: "상관관계",
    examples: [
      { en: "I think there's a correlation between stress and my headaches.", kr: "스트레스랑 제 두통 사이에 상관관계가 있는 것 같아요." },
      { en: "That's just correlation, not proof that one causes the other.", kr: "그건 상관관계일 뿐이지, 하나가 다른 걸 일으킨다는 증거는 아니야." }
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
    meaning: "생산자, 생산국, 제작자",
    examples: [
      { en: "Korea is a major producer of semiconductors.", kr: "한국은 반도체의 주요 생산국입니다." },
      { en: "The producer wants to change the ending of the movie.", kr: "제작자가 영화 결말을 바꾸고 싶어 해요." }
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
      { en: "Crazy diets deprive your body of what it needs.", kr: "무리한 다이어트는 몸에 필요한 걸 빼앗아요." },
      { en: "I'm so sleep-deprived, I can barely think.", kr: "잠을 너무 못 자서 머리가 잘 안 돌아가요." }
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
    id: "L3-031",
    word: "disclose",
    meaning: "공개하다, 밝히다, 드러내다",
    examples: [
      { en: "Sorry, I'm not allowed to disclose that information.", kr: "죄송하지만 그 정보는 공개할 수 없어요." },
      { en: "Did they disclose how much the deal was worth?", kr: "그 거래가 얼마짜리였는지 밝혔어요?" }
    ]
  },
  {
    id: "L3-032",
    word: "discriminate",
    meaning: "차별하다",
    examples: [
      { en: "It's illegal to discriminate based on age or gender.", kr: "나이나 성별로 차별하는 건 불법이에요." },
      { en: "I felt like they discriminated against me because of my accent.", kr: "제 억양 때문에 차별당한 것 같았어요." }
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
    id: "L3-034",
    word: "distort",
    meaning: "왜곡하다",
    examples: [
      { en: "The media totally distorted what he actually said.", kr: "언론이 그가 실제로 한 말을 완전히 왜곡했어요." },
      { en: "This mirror distorts everything. I look so tall!", kr: "이 거울은 다 왜곡돼 보여. 나 엄청 커 보여!" }
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
    id: "L3-036",
    word: "domain",
    meaning: "분야, 영역, 도메인",
    examples: [
      { en: "Sorry, that's not really my domain. Ask Kevin.", kr: "미안, 그건 내 분야가 아니야. 케빈한테 물어봐." },
      { en: "Did you buy a domain name for your new site?", kr: "새 사이트용 도메인 이름 샀어?" }
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
    id: "L3-039",
    word: "elevate",
    meaning: "높이다, (수준을) 끌어올리다",
    examples: [
      { en: "Good lighting can really elevate your photos.", kr: "조명이 좋으면 사진 수준이 확 높아져요." },
      { en: "Keep your leg elevated to reduce the swelling.", kr: "붓기가 빠지도록 다리를 높이 올려 두세요." }
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
    id: "L3-041",
    word: "embed",
    meaning: "삽입하다, 박다",
    examples: [
      { en: "Can you embed the video in the slide?", kr: "슬라이드에 그 영상을 삽입할 수 있어요?" },
      { en: "There's a tiny piece of glass embedded in my foot.", kr: "발에 작은 유리 조각이 박혔어요." }
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
      { en: "The city is famous for its old architecture.", kr: "그 도시는 오래된 건축물로 유명해요." },
      { en: "Our team is redesigning the system architecture.", kr: "저희 팀은 시스템 구조를 재설계하고 있어요." }
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
    id: "L3-045",
    word: "endeavor",
    meaning: "노력, 시도, 도전",
    examples: [
      { en: "Good luck with all your future endeavors!", kr: "앞으로의 모든 도전에 행운을 빌어요!" },
      { en: "Starting a business is a risky endeavor.", kr: "창업은 위험 부담이 큰 도전이에요." }
    ]
  },
  {
    id: "L3-046",
    word: "endorse",
    meaning: "지지하다, 보증하다, (광고로) 홍보하다",
    examples: [
      { en: "I can't endorse a product I've never used.", kr: "써 보지도 않은 제품을 보증할 수는 없어요." },
      { en: "Lots of athletes endorse sports brands.", kr: "많은 운동선수들이 스포츠 브랜드를 광고해요." }
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
      { en: "This photo captures the beauty of the sunset.", kr: "이 사진은 석양의 아름다움을 잘 담아냈어요." },
      { en: "The ad captured the attention of young shoppers.", kr: "그 광고는 젊은 쇼핑객들의 관심을 사로잡았어요." }
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
    id: "L3-051",
    word: "erode",
    meaning: "침식하다, (서서히) 약화시키다",
    examples: [
      { en: "Lies slowly erode trust in any relationship.", kr: "거짓말은 어떤 관계에서든 신뢰를 서서히 무너뜨려요." },
      { en: "The beach is eroding a little more every year.", kr: "해변이 해마다 조금씩 더 깎여 나가고 있어요." }
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
    id: "L3-053",
    word: "evoke",
    meaning: "불러일으키다",
    examples: [
      { en: "The old photos evoked so many happy memories.", kr: "오래된 사진들을 보니 행복했던 기억이 많이 떠올랐어요." },
      { en: "The smell of rain evokes my childhood in the countryside.", kr: "비 냄새를 맡으면 시골에서 보낸 어린 시절이 떠올라요." }
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
    id: "L3-057",
    word: "exert",
    meaning: "(힘·영향력을) 행사하다, 무리해서 애쓰다",
    examples: [
      { en: "Don't exert yourself too much. You just got out of the hospital.", kr: "너무 무리하지 마. 퇴원한 지 얼마 안 됐잖아." },
      { en: "My parents exert a lot of pressure on me about grades.", kr: "부모님이 성적 때문에 나한테 압박을 많이 줘." }
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
      { en: "The virus spread quickly through the office.", kr: "바이러스가 사무실 안에 빠르게 퍼졌어요." },
      { en: "Don't open that file; it might contain a virus.", kr: "그 파일 열지 마, 바이러스가 있을지도 몰라." }
    ]
  },
  {
    id: "L3-429",
    word: "aspect",
    meaning: "측면, 요소",
    examples: [
      { en: "Price is the most important aspect for most customers.", kr: "대부분의 고객에게는 가격이 가장 중요한 요소예요." },
      { en: "We discussed every aspect of the plan in detail.", kr: "우리는 계획의 모든 측면을 자세히 논의했어요." }
    ]
  },
  {
    id: "L3-061",
    word: "extract",
    meaning: "추출하다, 뽑아내다",
    examples: [
      { en: "I had a wisdom tooth extracted yesterday.", kr: "어제 사랑니를 뽑았어요." },
      { en: "This app can extract text from photos.", kr: "이 앱은 사진에서 글자를 추출할 수 있어요." }
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
      { en: "There's a crack in my phone screen.", kr: "휴대폰 화면에 금이 갔어요." },
      { en: "The ice on the lake began to crack.", kr: "호수의 얼음이 갈라지기 시작했어요." }
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
    id: "L3-069",
    word: "hypothesis",
    meaning: "가설",
    examples: [
      { en: "That's just a hypothesis. We need to test it.", kr: "그건 가설일 뿐이에요. 검증해 봐야 해요." },
      { en: "My hypothesis is that people skip breakfast because they're busy.", kr: "내 가설은 사람들이 바빠서 아침을 거른다는 거야." }
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
      { en: "My grandparents were immigrants from Korea.", kr: "우리 조부모님은 한국에서 온 이민자셨어요." },
      { en: "Lots of immigrants run small businesses in this neighborhood.", kr: "이 동네에는 작은 가게를 하는 이민자들이 많아요." }
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
    meaning: "부과하다, 강요하다",
    examples: [
      { en: "They're going to impose a new tax on sugary drinks.", kr: "설탕 음료에 새 세금을 부과한대요." },
      { en: "Don't impose your opinions on other people.", kr: "네 생각을 다른 사람들한테 강요하지 마." }
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
    id: "L3-077",
    word: "incorporate",
    meaning: "포함하다, 반영하다, 통합하다",
    examples: [
      { en: "Let's incorporate their feedback into the next version.", kr: "그쪽 피드백을 다음 버전에 반영해요." },
      { en: "I try to incorporate more vegetables into my meals.", kr: "식단에 채소를 더 많이 넣으려고 해요." }
    ]
  },
  {
    id: "L3-078",
    word: "indigenous",
    meaning: "토착의, 토종의, 원주민의",
    examples: [
      { en: "Is this plant indigenous to Korea?", kr: "이 식물은 한국 토종이에요?" },
      { en: "We visited a museum about the island's indigenous people.", kr: "섬 원주민에 관한 박물관에 다녀왔어요." }
    ]
  },
  {
    id: "L3-079",
    word: "induce",
    meaning: "유도하다, 유발하다",
    examples: [
      { en: "The doctor decided to induce labor last night.", kr: "의사가 어젯밤에 유도 분만을 하기로 했어요." },
      { en: "Some medicines can induce drowsiness, so be careful.", kr: "어떤 약은 졸음을 유발할 수 있으니 조심하세요." }
    ]
  },
  {
    id: "L3-080",
    word: "infer",
    meaning: "추론하다, 짐작하다",
    examples: [
      { en: "From her tone, I inferred that she was upset.", kr: "말투로 봐서 그녀가 화났다고 짐작했어요." },
      { en: "So should I infer that you're not coming?", kr: "그럼 너 안 온다고 짐작하면 되는 거야?" }
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
      { en: "The restaurant is now under new ownership.", kr: "그 식당은 이제 주인이 바뀌었어요." },
      { en: "Take ownership of your mistakes and learn from them.", kr: "자신의 실수를 책임지고 거기서 배우세요." }
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
    id: "L3-087",
    word: "integral",
    meaning: "필수적인, 없어서는 안 될",
    examples: [
      { en: "You're an integral part of this team.", kr: "당신은 이 팀에 없어서는 안 될 사람이에요." },
      { en: "Music is an integral part of the movie.", kr: "음악은 이 영화에서 빼놓을 수 없는 부분이에요." }
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
      { en: "The game will be broadcast live tonight.", kr: "경기는 오늘 밤 생방송될 거예요." },
      { en: "The president's speech was broadcast on every channel.", kr: "대통령의 연설이 모든 채널에서 방송되었습니다." }
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
      { en: "The flood was the worst natural disaster in years.", kr: "그 홍수는 수년 만에 최악의 자연재해였어요." },
      { en: "The picnic was a total disaster because of the rain.", kr: "비 때문에 소풍은 완전히 엉망이었어요." }
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
      { en: "We're still paying off our mortgage.", kr: "우리는 아직 주택 담보 대출을 갚고 있어요." },
      { en: "Higher interest rates make mortgages more expensive.", kr: "금리가 오르면 주택 담보 대출 부담이 커집니다." }
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
    id: "L3-101",
    word: "magnitude",
    meaning: "규모, 크기",
    examples: [
      { en: "I don't think you understand the magnitude of this problem.", kr: "이 문제의 규모를 잘 모르시는 것 같아요." },
      { en: "Did you hear? It was a magnitude 6 earthquake.", kr: "들었어? 규모 6의 지진이었대." }
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
    id: "L3-103",
    word: "mechanism",
    meaning: "장치, 메커니즘, 체계",
    examples: [
      { en: "The lock mechanism on this door is broken.", kr: "이 문의 잠금장치가 고장 났어요." },
      { en: "We need a better mechanism for handling customer complaints.", kr: "고객 불만을 처리할 더 나은 체계가 필요해요." }
    ]
  },
  {
    id: "L3-449",
    word: "reduction",
    meaning: "감소, 삭감, 할인",
    examples: [
      { en: "The new system led to a big reduction in costs.", kr: "새 시스템 덕분에 비용이 크게 감소했어요." },
      { en: "Is there a price reduction for students?", kr: "학생 할인이 있나요?" }
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
    id: "L3-108",
    word: "notable",
    meaning: "주목할 만한, 눈에 띄는",
    examples: [
      { en: "The most notable change is the new design.", kr: "가장 눈에 띄는 변화는 새 디자인이에요." },
      { en: "Is there anything notable on the agenda today?", kr: "오늘 안건 중에 주목할 만한 거 있어요?" }
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
      { en: "The new software improved our team's efficiency.", kr: "새 소프트웨어가 우리 팀의 효율을 높였어요." },
      { en: "This car is known for its excellent fuel efficiency.", kr: "이 차는 연비가 뛰어나기로 유명해요." }
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
    id: "L3-115",
    word: "output",
    meaning: "생산량, 산출(물), 출력",
    examples: [
      { en: "Our team's output has really gone up this month.", kr: "이번 달 우리 팀 생산량이 확 늘었어요." },
      { en: "Plug the speakers into the audio output.", kr: "스피커를 오디오 출력 단자에 꽂아." }
    ]
  },
  {
    id: "L3-454",
    word: "experiment",
    meaning: "실험, 실험하다, 시도해 보다",
    examples: [
      { en: "The students did an experiment with plants and sunlight.", kr: "학생들은 식물과 햇빛으로 실험을 했어요." },
      { en: "I like to experiment with new recipes on weekends.", kr: "주말에는 새로운 요리법을 시도해 보는 걸 좋아해요." }
    ]
  },
  {
    id: "L3-455",
    word: "increasingly",
    meaning: "점점 더, 갈수록",
    examples: [
      { en: "It's becoming increasingly difficult to find cheap housing.", kr: "저렴한 집을 구하기가 점점 더 어려워지고 있어요." },
      { en: "Online shopping is increasingly popular among older people.", kr: "온라인 쇼핑은 노년층 사이에서 갈수록 인기를 얻고 있어요." }
    ]
  },
  {
    id: "L3-118",
    word: "paradigm",
    meaning: "패러다임, (사고의) 틀",
    examples: [
      { en: "Remote work caused a paradigm shift in how we work.", kr: "재택근무가 일하는 방식에 패러다임 전환을 가져왔어요." },
      { en: "Smartphones created a whole new paradigm for shopping.", kr: "스마트폰이 쇼핑에 완전히 새로운 패러다임을 만들었어요." }
    ]
  },
  {
    id: "L3-119",
    word: "parameter",
    meaning: "기준, (정해진) 범위",
    examples: [
      { en: "Let's set some parameters before we start the project.", kr: "프로젝트 시작 전에 기준을 좀 정해 둡시다." },
      { en: "We have to work within the parameters of the budget.", kr: "예산 범위 안에서 일해야 해요." }
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
      { en: "The city has seen rapid growth over the past decade.", kr: "그 도시는 지난 10년간 급속한 성장을 이뤘어요." },
      { en: "We need a rapid response to customer complaints.", kr: "고객 불만에 신속하게 대응해야 해요." }
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
    id: "L3-123",
    word: "phenomenon",
    meaning: "현상",
    examples: [
      { en: "The northern lights are an amazing natural phenomenon.", kr: "오로라는 정말 놀라운 자연 현상이에요." },
      { en: "That song going viral overnight was a strange phenomenon.", kr: "그 노래가 하룻밤 만에 뜬 건 이상한 현상이었어요." }
    ]
  },
  {
    id: "L3-459",
    word: "vital",
    meaning: "필수적인, 매우 중요한",
    examples: [
      { en: "Good communication is vital for any team.", kr: "좋은 소통은 어떤 팀에게나 필수적이에요." },
      { en: "Regular exercise is vital to your health.", kr: "규칙적인 운동은 건강에 매우 중요해요." }
    ]
  },
  {
    id: "L3-460",
    word: "commerce",
    meaning: "상업, 무역",
    examples: [
      { en: "The city has long been a center of trade and commerce.", kr: "그 도시는 오랫동안 무역과 상업의 중심지였어요." },
      { en: "The local chamber of commerce supports small businesses.", kr: "지역 상공회의소는 소상공인을 지원합니다." }
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
      { en: "Call the bank immediately if you suspect credit card fraud.", kr: "신용카드 사기가 의심되면 즉시 은행에 전화하세요." },
      { en: "He was fired for committing fraud.", kr: "그는 사기를 저질러 해고됐어요." }
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
      { en: "Let me introduce you to my coworker.", kr: "제 동료를 소개해 드릴게요." },
      { en: "The company will introduce a four-day workweek next year.", kr: "회사는 내년에 주 4일 근무제를 도입할 예정입니다." }
    ]
  },
  {
    id: "L3-464",
    word: "legacy",
    meaning: "유산, (오래된) 기존의",
    examples: [
      { en: "His greatest legacy is the school he built.", kr: "그의 가장 큰 유산은 그가 세운 학교예요." },
      { en: "We're still using a legacy system from the 1990s.", kr: "우리는 아직 1990년대의 구형 시스템을 쓰고 있어요." }
    ]
  },
  {
    id: "L3-131",
    word: "quantity",
    meaning: "양",
    examples: [
      { en: "When it comes to friends, I prefer quality over quantity.", kr: "친구는 양보다 질이라고 생각해요." },
      { en: "Do you sell these in large quantities?", kr: "이거 대량으로도 파세요?" }
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
      { en: "The survival of small businesses depends on loyal customers.", kr: "소상공인의 생존은 단골손님에게 달려 있어요." },
      { en: "Basic survival skills are useful when you go camping.", kr: "기본적인 생존 기술은 캠핑 갈 때 유용해요." }
    ]
  },
  {
    id: "L3-468",
    word: "achievement",
    meaning: "성취, 업적",
    examples: [
      { en: "Finishing a marathon is a big achievement.", kr: "마라톤 완주는 큰 성취예요." },
      { en: "The award recognizes her achievements in medical research.", kr: "그 상은 의학 연구에서 그녀가 이룬 업적을 인정한 것입니다." }
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
    meaning: "개혁하다, 개혁",
    examples: [
      { en: "The new president promised to reform the tax system.", kr: "새 대통령이 세금 제도를 개혁하겠다고 약속했어요." },
      { en: "Do you think school reform will actually help kids?", kr: "학교 개혁이 실제로 아이들한테 도움이 될까요?" }
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
    id: "L3-145",
    word: "reproduce",
    meaning: "복제하다, 재현하다",
    examples: [
      { en: "You can't reproduce these photos without permission.", kr: "허락 없이 이 사진들을 복제하면 안 돼요." },
      { en: "I can't reproduce the bug on my computer.", kr: "제 컴퓨터에서는 그 버그가 재현이 안 돼요." }
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
    id: "L3-474",
    word: "frequency",
    meaning: "빈도, 횟수",
    examples: [
      { en: "The frequency of buses increases during rush hour.", kr: "출퇴근 시간에는 버스 운행 빈도가 늘어요." },
      { en: "Reduce the frequency of your meetings to save time.", kr: "시간을 아끼려면 회의 횟수를 줄이세요." }
    ]
  },
  {
    id: "L3-148",
    word: "retrieve",
    meaning: "되찾다, 가져오다, 회수하다",
    examples: [
      { en: "I need to retrieve some files from my old laptop.", kr: "예전 노트북에서 파일 몇 개를 꺼내 와야 해요." },
      { en: "The dog ran to retrieve the ball.", kr: "개가 공을 물어 오려고 달려갔어요." }
    ]
  },
  {
    id: "L3-475",
    word: "heritage",
    meaning: "(문화) 유산",
    examples: [
      { en: "Korea has a rich cultural heritage.", kr: "한국은 풍부한 문화유산을 가지고 있어요." },
      { en: "The old palace is a protected heritage site.", kr: "그 고궁은 보호 대상인 문화유산이에요." }
    ]
  },
  {
    id: "L3-476",
    word: "landscape",
    meaning: "풍경, (분야의) 판도",
    examples: [
      { en: "The landscape here is beautiful in the fall.", kr: "이곳 풍경은 가을에 아름다워요." },
      { en: "AI is quickly changing the business landscape.", kr: "AI가 비즈니스 판도를 빠르게 바꾸고 있어요." }
    ]
  },
  {
    id: "L3-477",
    word: "privacy",
    meaning: "사생활, 개인 정보 보호",
    examples: [
      { en: "Please respect my privacy and knock first.", kr: "제 사생활을 존중해서 먼저 노크해 주세요." },
      { en: "The app was criticized for privacy issues.", kr: "그 앱은 개인 정보 보호 문제로 비판받았어요." }
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
    id: "L3-478",
    word: "residence",
    meaning: "거주지, 주택, 관저",
    examples: [
      { en: "Please enter your place of residence on the form.", kr: "양식에 거주지를 기입해 주세요." },
      { en: "The governor's residence is open to visitors on weekends.", kr: "주지사 관저는 주말에 방문객에게 개방됩니다." }
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
      { en: "The job offers a good salary and benefits.", kr: "그 일자리는 좋은 급여와 복리후생을 제공해요." },
      { en: "When do we get our salary this month?", kr: "이번 달 월급은 언제 나와요?" }
    ]
  },
  {
    id: "L3-480",
    word: "ambassador",
    meaning: "대사, 홍보대사",
    examples: [
      { en: "The ambassador met with the prime minister yesterday.", kr: "대사가 어제 총리와 회담했습니다." },
      { en: "She was named a brand ambassador for the sports company.", kr: "그녀는 그 스포츠 회사의 브랜드 홍보대사로 임명됐어요." }
    ]
  },
  {
    id: "L3-157",
    word: "statute",
    meaning: "법령, (statute of limitations) 공소시효",
    examples: [
      { en: "Is there a statute of limitations on this kind of crime?", kr: "이런 범죄에도 공소시효가 있나요?" },
      { en: "Is there a statute of limitations on unpaid parking tickets?", kr: "안 낸 주차 딱지에도 시효가 있어요?" }
    ]
  },
  {
    id: "L3-481",
    word: "consumption",
    meaning: "소비, 소비량",
    examples: [
      { en: "We need to cut our energy consumption at home.", kr: "집에서 에너지 소비를 줄여야 해요." },
      { en: "Coffee consumption has doubled in the last decade.", kr: "지난 10년간 커피 소비량이 두 배로 늘었어요." }
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
      { en: "The white dove is a symbol of peace.", kr: "흰 비둘기는 평화의 상징이에요." },
      { en: "What does this symbol on the washing label mean?", kr: "세탁 라벨에 있는 이 기호는 무슨 뜻이에요?" }
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
    id: "L3-167",
    word: "unprecedented",
    meaning: "전례 없는",
    examples: [
      { en: "We're living in unprecedented times.", kr: "우리는 전례 없는 시대를 살고 있어요." },
      { en: "Prices have gone up at an unprecedented rate this year.", kr: "올해 물가가 전례 없는 속도로 올랐어요." }
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
      { en: "Is your vehicle parked in the visitor lot?", kr: "차량을 방문자 주차장에 세우셨어요?" },
      { en: "No vehicles are allowed in this area on weekends.", kr: "주말에는 이 구역에 차량 진입이 금지돼요." }
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
    id: "L3-186",
    word: "adhere",
    meaning: "(규칙 등을) 지키다, 고수하다",
    examples: [
      { en: "Please adhere to the dress code at the event.", kr: "행사에서는 복장 규정을 꼭 지켜 주세요." },
      { en: "We really have to adhere to the deadline this time.", kr: "이번에는 마감 기한을 꼭 지켜야 해요." }
    ]
  },
  {
    id: "L3-487",
    word: "contribution",
    meaning: "기여, 기부(금)",
    examples: [
      { en: "Thank you for your contribution to the project.", kr: "프로젝트에 기여해 주셔서 감사합니다." },
      { en: "Every contribution helps, no matter how small.", kr: "아무리 적은 기부라도 모두 도움이 됩니다." }
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
      { en: "The flood damaged hundreds of homes.", kr: "홍수로 수백 채의 집이 피해를 입었어요." },
      { en: "We were flooded with calls after the ad aired.", kr: "광고가 나간 후 전화가 쏟아졌어요." }
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
      { en: "The punishment for drunk driving should be stricter.", kr: "음주 운전에 대한 처벌은 더 엄격해야 해요." },
      { en: "Being grounded was his punishment for lying.", kr: "거짓말한 벌로 그는 외출 금지를 당했어요." }
    ]
  },
  {
    id: "L3-197",
    word: "deficit",
    meaning: "적자, 부족(분)",
    examples: [
      { en: "The government is running a huge budget deficit.", kr: "정부가 막대한 재정 적자를 내고 있어요." },
      { en: "I've got a serious sleep deficit this week.", kr: "이번 주에 잠이 너무 부족해요." }
    ]
  },
  {
    id: "L3-493",
    word: "rapidly",
    meaning: "빠르게, 급속히",
    examples: [
      { en: "Prices are rising rapidly this year.", kr: "올해 물가가 빠르게 오르고 있어요." },
      { en: "The company is growing rapidly in Asia.", kr: "그 회사는 아시아에서 급속히 성장하고 있어요." }
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
      { en: "It was brave of you to speak up in the meeting.", kr: "회의에서 목소리를 낸 건 정말 용감했어요." },
      { en: "The brave firefighter saved a child from the fire.", kr: "용감한 소방관이 불 속에서 아이를 구했어요." }
    ]
  },
  {
    id: "L3-497",
    word: "difficulty",
    meaning: "어려움, 곤란",
    examples: [
      { en: "I had difficulty finding the hotel.", kr: "호텔을 찾느라 애를 먹었어요." },
      { en: "Let me know if you have any difficulty logging in.", kr: "로그인하는 데 어려움이 있으면 알려 주세요." }
    ]
  },
  {
    id: "L3-498",
    word: "greatly",
    meaning: "크게, 대단히",
    examples: [
      { en: "Your help would be greatly appreciated.", kr: "도와주시면 대단히 감사하겠습니다." },
      { en: "Prices vary greatly from store to store.", kr: "가게마다 가격 차이가 매우 커요." }
    ]
  },
  {
    id: "L3-499",
    word: "infection",
    meaning: "감염, 염증",
    examples: [
      { en: "Wash your hands often to prevent infection.", kr: "감염을 예방하려면 손을 자주 씻으세요." },
      { en: "The doctor gave me antibiotics for my ear infection.", kr: "의사가 귀에 생긴 염증 때문에 항생제를 처방해 줬어요." }
    ]
  },
  {
    id: "L3-500",
    word: "intention",
    meaning: "의도, 생각",
    examples: [
      { en: "I had no intention of hurting your feelings.", kr: "네 기분을 상하게 할 의도는 없었어." },
      { en: "I have every intention of paying you back.", kr: "돈은 꼭 갚을 생각이야." }
    ]
  },
  {
    id: "L3-501",
    word: "pretend",
    meaning: "~인 척하다",
    examples: [
      { en: "He pretended to be busy when the boss walked by.", kr: "상사가 지나가자 그는 바쁜 척했어요." },
      { en: "Let's not pretend that everything is fine.", kr: "모든 게 괜찮은 척하지 말자." }
    ]
  },
  {
    id: "L3-207",
    word: "expand",
    meaning: "확장하다, 넓히다",
    examples: [
      { en: "We're planning to expand our business into Europe next year.", kr: "내년에 유럽으로 사업을 확장할 계획이에요." },
      { en: "I want to expand my network at this conference.", kr: "이번 컨퍼런스에서 인맥을 넓히고 싶어요." }
    ]
  },
  {
    id: "L3-502",
    word: "prominent",
    meaning: "저명한, 눈에 띄는",
    examples: [
      { en: "She is a prominent lawyer in the city.", kr: "그녀는 그 도시에서 저명한 변호사예요." },
      { en: "Put the logo in a prominent place on the page.", kr: "로고를 페이지에서 눈에 잘 띄는 곳에 넣으세요." }
    ]
  },
  {
    id: "L3-503",
    word: "substantial",
    meaning: "상당한, 많은",
    examples: [
      { en: "That's a substantial amount of money to spend on a bag.", kr: "가방 하나에 쓰기엔 상당한 돈이네요." },
      { en: "There's been a substantial increase in rent this year.", kr: "올해 임대료가 상당히 올랐어요." }
    ]
  },
  {
    id: "L3-210",
    word: "external",
    meaning: "외부의, 외장의",
    examples: [
      { en: "We might need some external help on this project.", kr: "이 프로젝트엔 외부 도움이 좀 필요할 것 같아요." },
      { en: "Do I need an external hard drive for backups?", kr: "백업하려면 외장 하드가 필요할까요?" }
    ]
  },
  {
    id: "L3-504",
    word: "complaint",
    meaning: "불만, 항의",
    examples: [
      { en: "We received a complaint about the noise last night.", kr: "어젯밤 소음에 대한 항의를 받았어요." },
      { en: "If you have a complaint, please talk to the manager.", kr: "불만이 있으시면 매니저에게 말씀해 주세요." }
    ]
  },
  {
    id: "L3-505",
    word: "cure",
    meaning: "치료법, 치료하다, 해결하다",
    examples: [
      { en: "There is still no cure for the common cold.", kr: "감기에는 아직 치료법이 없어요." },
      { en: "A good night's sleep can cure a lot of problems.", kr: "푹 자고 나면 많은 문제가 해결될 수 있어요." }
    ]
  },
  {
    id: "L3-506",
    word: "desperate",
    meaning: "필사적인, 절실한",
    examples: [
      { en: "I'm desperate for a cup of coffee.", kr: "커피 한 잔이 너무 절실해." },
      { en: "The team made a desperate attempt to finish on time.", kr: "팀은 제시간에 끝내려고 필사적으로 애썼어요." }
    ]
  },
  {
    id: "L3-507",
    word: "feedback",
    meaning: "피드백, 의견",
    examples: [
      { en: "Thanks for your feedback on my report.", kr: "제 보고서에 의견 주셔서 감사해요." },
      { en: "We collect customer feedback after every purchase.", kr: "저희는 구매 때마다 고객 의견을 받습니다." }
    ]
  },
  {
    id: "L3-508",
    word: "innovation",
    meaning: "혁신",
    examples: [
      { en: "Our boss keeps talking about innovation, but nothing changes.", kr: "우리 상사는 맨날 혁신 얘기만 하는데 바뀌는 건 없어요." },
      { en: "The smartphone was a huge innovation in technology.", kr: "스마트폰은 기술 분야의 엄청난 혁신이었어요." }
    ]
  },
  {
    id: "L3-216",
    word: "furthermore",
    meaning: "게다가, 더욱이",
    examples: [
      { en: "The hotel was cheap, and furthermore, it was right by the beach.", kr: "호텔이 저렴했고, 게다가 바로 해변 옆이었어요." },
      { en: "I don't have time, and furthermore, I'm not interested.", kr: "시간도 없고, 게다가 관심도 없어요." }
    ]
  },
  {
    id: "L3-217",
    word: "goal",
    meaning: "목표, (축구 등의) 골",
    examples: [
      { en: "My goal this year is to run a half marathon.", kr: "올해 제 목표는 하프 마라톤을 뛰는 거예요." },
      { en: "He scored the winning goal in the final minute.", kr: "그 선수가 마지막 1분에 결승골을 넣었어요." }
    ]
  },
  {
    id: "L3-509",
    word: "investigate",
    meaning: "조사하다, 수사하다",
    examples: [
      { en: "The police are investigating the cause of the fire.", kr: "경찰이 화재 원인을 수사하고 있습니다." },
      { en: "We'll investigate the problem and get back to you.", kr: "문제를 조사한 뒤 다시 연락드리겠습니다." }
    ]
  },
  {
    id: "L3-219",
    word: "graphic",
    meaning: "그래픽의, 생생한, 적나라한",
    examples: [
      { en: "That movie was way too graphic for me.", kr: "그 영화는 나한테 너무 적나라했어." },
      { en: "She works as a graphic designer.", kr: "그녀는 그래픽 디자이너로 일해요." }
    ]
  },
  {
    id: "L3-220",
    word: "hence",
    meaning: "그래서, 그러므로",
    examples: [
      { en: "I didn't sleep last night, hence the coffee.", kr: "어젯밤에 잠을 못 잤어. 그래서 커피 마시는 거야." },
      { en: "It's a family recipe, hence the name 'Grandma's Pie.'", kr: "집안 대대로 내려온 레시피라서 이름이 '할머니 파이'예요." }
    ]
  },
  {
    id: "L3-221",
    word: "hierarchy",
    meaning: "위계질서, 계층",
    examples: [
      { en: "There's not much hierarchy at our startup.", kr: "우리 스타트업은 위계질서가 별로 없어요." },
      { en: "In Korean companies, hierarchy is really important.", kr: "한국 회사에서는 위계질서가 정말 중요해요." }
    ]
  },
  {
    id: "L3-510",
    word: "presentation",
    meaning: "발표, 프레젠테이션",
    examples: [
      { en: "I have to give a presentation tomorrow morning.", kr: "내일 아침에 발표를 해야 해요." },
      { en: "Her presentation on the new product impressed everyone.", kr: "신제품에 대한 그녀의 프레젠테이션은 모두에게 깊은 인상을 남겼어요." }
    ]
  },
  {
    id: "L3-511",
    word: "stability",
    meaning: "안정(성)",
    examples: [
      { en: "Many people value job stability more than a high salary.", kr: "많은 사람들이 높은 연봉보다 고용 안정을 더 중시해요." },
      { en: "The new update really improved the app's stability.", kr: "이번 업데이트로 앱 안정성이 정말 좋아졌어요." }
    ]
  },
  {
    id: "L3-224",
    word: "impact",
    meaning: "영향, 영향을 주다",
    examples: [
      { en: "How will the new policy impact our team?", kr: "새 정책이 우리 팀에 어떤 영향을 줄까요?" },
      { en: "Your speech really had an impact on me.", kr: "네 연설이 나한테 정말 큰 영향을 줬어." }
    ]
  },
  {
    id: "L3-512",
    word: "unlikely",
    meaning: "~할 것 같지 않은, 가능성이 낮은",
    examples: [
      { en: "It's unlikely to rain this weekend.", kr: "이번 주말에는 비가 올 것 같지 않아요." },
      { en: "He's unlikely to accept such a low offer.", kr: "그가 그렇게 낮은 제안을 받아들일 가능성은 낮아요." }
    ]
  },
  {
    id: "L3-226",
    word: "implicate",
    meaning: "연루시키다, 관련시키다",
    examples: [
      { en: "His own text messages implicated him in the scandal.", kr: "그 사람 문자 메시지 때문에 스캔들에 연루된 게 드러났대요." },
      { en: "I don't want to implicate anyone without proof.", kr: "증거 없이 누구도 연루시키고 싶지 않아요." }
    ]
  },
  {
    id: "L3-513",
    word: "calendar",
    meaning: "달력, 일정표",
    examples: [
      { en: "Let me check my calendar and get back to you.", kr: "일정 확인해 보고 다시 연락드릴게요." },
      { en: "I marked your birthday on the calendar.", kr: "네 생일을 달력에 표시해 뒀어." }
    ]
  },
  {
    id: "L3-514",
    word: "enable",
    meaning: "가능하게 하다, (기능을) 켜다",
    examples: [
      { en: "This app enables you to pay with your phone.", kr: "이 앱을 쓰면 휴대폰으로 결제할 수 있어요." },
      { en: "Please enable notifications to get updates.", kr: "업데이트를 받으려면 알림을 켜 주세요." }
    ]
  },
  {
    id: "L3-515",
    word: "invite",
    meaning: "초대하다",
    examples: [
      { en: "Thanks for inviting me to your party!", kr: "파티에 초대해 줘서 고마워!" },
      { en: "We invited all our clients to the opening event.", kr: "모든 고객을 개업 행사에 초대했어요." }
    ]
  },
  {
    id: "L3-516",
    word: "phrase",
    meaning: "구절, 표현",
    examples: [
      { en: "Can you explain what this phrase means?", kr: "이 표현이 무슨 뜻인지 설명해 주실래요?" },
      { en: "Learning a few useful phrases makes travel much easier.", kr: "유용한 표현 몇 개를 배워 두면 여행이 훨씬 쉬워져요." }
    ]
  },
  {
    id: "L3-517",
    word: "wisdom",
    meaning: "지혜, 통념",
    examples: [
      { en: "My grandmother always shared her wisdom with us.", kr: "할머니는 항상 우리에게 지혜를 나눠 주셨어요." },
      { en: "Conventional wisdom says you should buy a house early.", kr: "일반적인 통념으로는 집을 일찍 사야 한다고 해요." }
    ]
  },
  {
    id: "L3-518",
    word: "awkward",
    meaning: "어색한, 곤란한",
    examples: [
      { en: "There was an awkward silence after his joke.", kr: "그의 농담 후에 어색한 침묵이 흘렀어요." },
      { en: "It's awkward to ask my boss for a raise.", kr: "상사에게 월급을 올려 달라고 하는 건 곤란해요." }
    ]
  },
  {
    id: "L3-519",
    word: "celebrity",
    meaning: "유명인, 연예인",
    examples: [
      { en: "A celebrity was spotted at our restaurant last night.", kr: "어젯밤 우리 식당에서 유명 연예인이 목격됐어요." },
      { en: "Many brands pay celebrities to promote their products.", kr: "많은 브랜드가 제품 홍보를 위해 유명인에게 돈을 지불해요." }
    ]
  },
  {
    id: "L3-520",
    word: "eligible",
    meaning: "자격이 있는, 대상이 되는",
    examples: [
      { en: "You're eligible for a full refund within 30 days.", kr: "30일 이내에는 전액 환불을 받을 자격이 있어요." },
      { en: "Full-time employees are eligible for health insurance.", kr: "정규직 직원은 건강보험 가입 대상입니다." }
    ]
  },
  {
    id: "L3-521",
    word: "intelligent",
    meaning: "똑똑한, 지능적인",
    examples: [
      { en: "She's an intelligent and hardworking student.", kr: "그녀는 똑똑하고 성실한 학생이에요." },
      { en: "The new software makes intelligent suggestions as you type.", kr: "새 소프트웨어는 입력하는 동안 똑똑한 제안을 해 줘요." }
    ]
  },
  {
    id: "L3-522",
    word: "reliable",
    meaning: "믿을 만한, 신뢰할 수 있는",
    examples: [
      { en: "We need a reliable person to handle the money.", kr: "돈을 관리할 믿을 만한 사람이 필요해요." },
      { en: "This car is old, but it's very reliable.", kr: "이 차는 오래됐지만 매우 믿을 만해요." }
    ]
  },
  {
    id: "L3-523",
    word: "sacrifice",
    meaning: "희생, 희생하다",
    examples: [
      { en: "Parents make many sacrifices for their children.", kr: "부모는 자녀를 위해 많은 희생을 해요." },
      { en: "I don't want to sacrifice my health for my career.", kr: "커리어를 위해 건강을 희생하고 싶지 않아요." }
    ]
  },
  {
    id: "L3-524",
    word: "satisfied",
    meaning: "만족한",
    examples: [
      { en: "Are you satisfied with the service?", kr: "서비스에 만족하세요?" },
      { en: "Our goal is to keep every customer satisfied.", kr: "저희의 목표는 모든 고객을 만족시키는 것입니다." }
    ]
  },
  {
    id: "L3-525",
    word: "spare",
    meaning: "여분의, (시간 등을) 내주다",
    examples: [
      { en: "Do you have a spare charger I can borrow?", kr: "빌릴 수 있는 여분의 충전기 있어?" },
      { en: "Can you spare a few minutes to talk?", kr: "잠깐 이야기할 시간 좀 내줄 수 있어요?" }
    ]
  },
  {
    id: "L3-526",
    word: "stranger",
    meaning: "낯선 사람",
    examples: [
      { en: "Don't share personal information with strangers online.", kr: "온라인에서 낯선 사람과 개인 정보를 공유하지 마세요." },
      { en: "A stranger helped me carry my bags up the stairs.", kr: "낯선 사람이 계단 위로 짐 옮기는 걸 도와줬어요." }
    ]
  },
  {
    id: "L3-527",
    word: "acceptable",
    meaning: "받아들일 수 있는, 용인되는",
    examples: [
      { en: "Is it acceptable to wear jeans to the office?", kr: "사무실에 청바지를 입고 가도 괜찮나요?" },
      { en: "His behavior at the meeting was not acceptable.", kr: "회의에서 그가 보인 행동은 용납될 수 없었어요." }
    ]
  },
  {
    id: "L3-528",
    word: "dispute",
    meaning: "분쟁, 이의를 제기하다",
    examples: [
      { en: "The two companies settled their dispute out of court.", kr: "두 회사는 법정 밖에서 분쟁을 해결했어요." },
      { en: "I called the bank to dispute a charge on my card.", kr: "카드에 청구된 금액에 이의를 제기하려고 은행에 전화했어요." }
    ]
  },
  {
    id: "L3-529",
    word: "margin",
    meaning: "(이익) 폭, 차이, 여백",
    examples: [
      { en: "The profit margin on coffee is surprisingly high.", kr: "커피의 이윤 폭은 놀라울 정도로 커요." },
      { en: "She won the election by a narrow margin.", kr: "그녀는 근소한 차이로 선거에서 이겼어요." }
    ]
  },
  {
    id: "L3-530",
    word: "announce",
    meaning: "발표하다, 알리다",
    examples: [
      { en: "The company will announce the winners on Friday.", kr: "회사는 금요일에 수상자를 발표할 예정입니다." },
      { en: "They announced their engagement at a family dinner.", kr: "그들은 가족 저녁 식사 자리에서 약혼 소식을 알렸어요." }
    ]
  },
  {
    id: "L3-531",
    word: "breathe",
    meaning: "숨 쉬다, 호흡하다",
    examples: [
      { en: "Take a moment and breathe deeply before you start.", kr: "시작하기 전에 잠시 깊게 숨을 쉬세요." },
      { en: "It was so crowded that I could barely breathe.", kr: "너무 붐벼서 숨 쉬기도 힘들었어요." }
    ]
  },
  {
    id: "L3-532",
    word: "convince",
    meaning: "설득하다, 납득시키다",
    examples: [
      { en: "I convinced my boss to let me work from home.", kr: "상사를 설득해서 재택근무를 허락받았어요." },
      { en: "You don't have to convince me; I already agree.", kr: "날 설득할 필요 없어, 난 이미 동의하니까." }
    ]
  },
  {
    id: "L3-533",
    word: "panic",
    meaning: "당황하다, 공황, 극심한 공포",
    examples: [
      { en: "Don't panic; we still have time to fix this.", kr: "당황하지 마, 아직 고칠 시간 있어." },
      { en: "People rushed out in a panic when the alarm went off.", kr: "경보가 울리자 사람들이 겁에 질려 뛰쳐나갔어요." }
    ]
  },
  {
    id: "L3-248",
    word: "leverage",
    meaning: "협상력, 영향력, 활용하다",
    examples: [
      { en: "We can use our size as leverage in the negotiation.", kr: "협상할 때 우리 회사 규모를 무기로 쓸 수 있어요." },
      { en: "Let's leverage AI to save time on reports.", kr: "보고서 작업 시간을 줄이려면 AI를 활용해 보자." }
    ]
  },
  {
    id: "L3-534",
    word: "arrangement",
    meaning: "준비, 합의, 배치",
    examples: [
      { en: "We made arrangements for the client's visit next week.", kr: "다음 주 고객 방문을 위한 준비를 해 두었어요." },
      { en: "I have an arrangement with my boss to work from home on Fridays.", kr: "금요일에는 재택근무를 하기로 상사와 합의했어요." }
    ]
  },
  {
    id: "L3-535",
    word: "enormous",
    meaning: "거대한, 엄청난",
    examples: [
      { en: "They live in an enormous house by the lake.", kr: "그들은 호숫가의 거대한 집에 살아요." },
      { en: "The new product was an enormous success.", kr: "그 신제품은 엄청난 성공을 거뒀어요." }
    ]
  },
  {
    id: "L3-536",
    word: "inquiry",
    meaning: "문의, 조사",
    examples: [
      { en: "Thank you for your inquiry about our services.", kr: "저희 서비스에 대해 문의해 주셔서 감사합니다." },
      { en: "The government launched an inquiry into the accident.", kr: "정부는 그 사고에 대한 조사에 착수했습니다." }
    ]
  },
  {
    id: "L3-537",
    word: "lonely",
    meaning: "외로운, 쓸쓸한",
    examples: [
      { en: "I felt lonely when I first moved to the city.", kr: "처음 그 도시로 이사 왔을 때 외로웠어요." },
      { en: "Many elderly people live lonely lives.", kr: "많은 노인들이 쓸쓸한 삶을 살고 있어요." }
    ]
  },
  {
    id: "L3-538",
    word: "nevertheless",
    meaning: "그럼에도 불구하고",
    examples: [
      { en: "The plan was risky; nevertheless, we decided to try it.", kr: "그 계획은 위험했지만, 그럼에도 불구하고 우리는 시도해 보기로 했어요." },
      { en: "It was raining hard, but the game continued nevertheless.", kr: "비가 세차게 내렸지만 그럼에도 경기는 계속됐어요." }
    ]
  },
  {
    id: "L3-539",
    word: "rude",
    meaning: "무례한, 버릇없는",
    examples: [
      { en: "It's rude to check your phone during dinner.", kr: "식사 중에 휴대폰을 보는 건 무례해요." },
      { en: "I'm sorry if I sounded rude on the phone.", kr: "통화할 때 무례하게 들렸다면 죄송해요." }
    ]
  },
  {
    id: "L3-540",
    word: "signature",
    meaning: "서명, 대표적인",
    examples: [
      { en: "We need your signature at the bottom of the page.", kr: "페이지 하단에 서명해 주셔야 합니다." },
      { en: "This pasta is the chef's signature dish.", kr: "이 파스타는 셰프의 대표 요리예요." }
    ]
  },
  {
    id: "L3-541",
    word: "destination",
    meaning: "목적지, 여행지",
    examples: [
      { en: "We reached our destination after a five-hour drive.", kr: "다섯 시간 운전한 끝에 목적지에 도착했어요." },
      { en: "Jeju Island is a popular destination for honeymooners.", kr: "제주도는 신혼부부들에게 인기 있는 여행지예요." }
    ]
  },
  {
    id: "L3-542",
    word: "upgrade",
    meaning: "업그레이드하다, 상위 등급으로 바꾸다",
    examples: [
      { en: "I upgraded my phone to the latest model.", kr: "휴대폰을 최신 모델로 업그레이드했어요." },
      { en: "The airline gave us a free upgrade to business class.", kr: "항공사에서 비즈니스석으로 무료 업그레이드를 해 줬어요." }
    ]
  },
  {
    id: "L3-543",
    word: "bath",
    meaning: "목욕, 욕조",
    examples: [
      { en: "I take a hot bath after a long day at work.", kr: "회사에서 긴 하루를 보낸 후엔 뜨거운 물로 목욕해요." },
      { en: "The hotel room had a big bath with a view.", kr: "호텔 방에는 전망이 보이는 큰 욕조가 있었어요." }
    ]
  },
  {
    id: "L3-544",
    word: "chase",
    meaning: "뒤쫓다, 좇다, 추구하다",
    examples: [
      { en: "The dog chased the delivery truck down the street.", kr: "개가 배달 트럭을 길 따라 쫓아갔어요." },
      { en: "Don't chase quick money; build real skills instead.", kr: "쉽게 버는 돈을 좇지 말고 진짜 실력을 쌓아." }
    ]
  },
  {
    id: "L3-545",
    word: "exposure",
    meaning: "노출, (경험할) 기회, 접함",
    examples: [
      { en: "Too much sun exposure can damage your skin.", kr: "햇빛에 너무 많이 노출되면 피부가 상할 수 있어요." },
      { en: "This internship gave me exposure to real client projects.", kr: "이 인턴십 덕분에 실제 고객 프로젝트를 접해 볼 수 있었어요." }
    ]
  },
  {
    id: "L3-546",
    word: "happiness",
    meaning: "행복",
    examples: [
      { en: "Money can't buy happiness, but it helps pay the rent.", kr: "돈으로 행복을 살 순 없지만, 월세 내는 데는 도움이 되죠." },
      { en: "Her happiness was obvious when she got the job offer.", kr: "취업 제의를 받았을 때 그녀의 행복이 그대로 드러났어요." }
    ]
  },
  {
    id: "L3-547",
    word: "horrible",
    meaning: "끔찍한, 지독한",
    examples: [
      { en: "The traffic this morning was absolutely horrible.", kr: "오늘 아침 교통 체증은 정말 끔찍했어요." },
      { en: "I have a horrible headache, so I'm leaving early.", kr: "머리가 지독하게 아파서 일찍 들어갈게요." }
    ]
  },
  {
    id: "L3-548",
    word: "legend",
    meaning: "전설, 전설적인 인물",
    examples: [
      { en: "According to local legend, the lake is haunted.", kr: "그 지역 전설에 따르면 그 호수에는 유령이 나온대요." },
      { en: "Our old manager is a legend in this industry.", kr: "우리 전 매니저님은 이 업계의 전설이에요." }
    ]
  },
  {
    id: "L3-549",
    word: "muscle",
    meaning: "근육",
    examples: [
      { en: "I pulled a muscle in my back while moving boxes.", kr: "상자를 옮기다가 등 근육이 결렸어요." },
      { en: "Lifting weights helps you build muscle and stay strong.", kr: "웨이트를 하면 근육을 키우고 튼튼하게 지낼 수 있어요." }
    ]
  },
  {
    id: "L3-550",
    word: "procedure",
    meaning: "절차, 수술, 시술",
    examples: [
      { en: "Please follow the safety procedure before using the machine.", kr: "기계를 사용하기 전에 안전 절차를 따라 주세요." },
      { en: "The doctor said it's a simple procedure that takes an hour.", kr: "의사 선생님이 한 시간이면 끝나는 간단한 시술이라고 했어요." }
    ]
  },
  {
    id: "L3-551",
    word: "rank",
    meaning: "순위를 차지하다, 계급, 지위",
    examples: [
      { en: "Our app ranks first in its category this week.", kr: "우리 앱이 이번 주 해당 카테고리에서 1위를 차지했어요." },
      { en: "He quickly rose through the ranks at the company.", kr: "그는 회사에서 직급을 빠르게 올라갔어요." }
    ]
  },
  {
    id: "L3-552",
    word: "retired",
    meaning: "은퇴한",
    examples: [
      { en: "My dad is retired and spends his days fishing.", kr: "아버지는 은퇴하셔서 낚시하며 시간을 보내세요." },
      { en: "We hired a retired engineer as a part-time consultant.", kr: "은퇴한 엔지니어를 파트타임 컨설턴트로 고용했어요." }
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
      { en: "I need a needle and thread to fix this button.", kr: "이 단추를 달려면 바늘과 실이 필요해요." },
      { en: "I'll reply to your question in the email thread.", kr: "질문에는 이메일 스레드에서 답할게요." }
    ]
  },
  {
    id: "L3-555",
    word: "wage",
    meaning: "임금, 급여",
    examples: [
      { en: "Did you hear they raised the minimum wage again?", kr: "최저 임금 또 올랐다는 얘기 들었어?" },
      { en: "My wages haven't gone up in three years.", kr: "3년째 월급이 안 올랐어요." }
    ]
  },
  {
    id: "L3-271",
    word: "opaque",
    meaning: "불투명한, 이해하기 어려운",
    examples: [
      { en: "We put opaque film on the bathroom window.", kr: "욕실 창문에 불투명 필름을 붙였어요." },
      { en: "Their pricing is so opaque; I can't figure it out.", kr: "그 회사 가격 체계는 너무 불투명해서 도무지 모르겠어요." }
    ]
  },
  {
    id: "L3-556",
    word: "avenue",
    meaning: "대로, (해결) 방안",
    examples: [
      { en: "The new restaurant is on the main avenue downtown.", kr: "새 식당은 시내 중심 대로에 있어요." },
      { en: "We need to explore every avenue before cutting jobs.", kr: "인력 감축 전에 모든 방안을 검토해야 합니다." }
    ]
  },
  {
    id: "L3-557",
    word: "commitment",
    meaning: "헌신, 약속, 책무",
    examples: [
      { en: "Thank you for your commitment to this project.", kr: "이 프로젝트에 헌신해 주셔서 감사합니다." },
      { en: "I can't join; I have a prior commitment on Friday.", kr: "금요일에 선약이 있어서 참석 못 해요." }
    ]
  },
  {
    id: "L3-558",
    word: "custom",
    meaning: "관습, 풍습, 맞춤의",
    examples: [
      { en: "It's a Korean custom to bow when greeting elders.", kr: "어른께 인사할 때 고개 숙이는 건 한국의 관습이에요." },
      { en: "We ordered custom T-shirts for the company picnic.", kr: "회사 야유회용으로 맞춤 티셔츠를 주문했어요." }
    ]
  },
  {
    id: "L3-559",
    word: "desk",
    meaning: "책상, 창구, 데스크",
    examples: [
      { en: "Please leave the documents on my desk.", kr: "서류는 제 책상 위에 두세요." },
      { en: "Ask at the front desk if you need extra towels.", kr: "수건이 더 필요하면 프런트 데스크에 물어보세요." }
    ]
  },
  {
    id: "L3-560",
    word: "electricity",
    meaning: "전기",
    examples: [
      { en: "Our electricity bill doubled during the heat wave.", kr: "폭염 기간 동안 전기 요금이 두 배로 나왔어요." },
      { en: "The storm knocked out electricity for the whole neighborhood.", kr: "폭풍 때문에 동네 전체에 전기가 끊겼어요." }
    ]
  },
  {
    id: "L3-561",
    word: "gym",
    meaning: "체육관, 헬스장",
    examples: [
      { en: "I go to the gym before work three times a week.", kr: "일주일에 세 번 출근 전에 헬스장에 가요." },
      { en: "Our building has a small gym on the first floor.", kr: "우리 건물 1층에 작은 헬스장이 있어요." }
    ]
  },
  {
    id: "L3-562",
    word: "horror",
    meaning: "공포, 경악",
    examples: [
      { en: "I can't watch horror movies alone at night.", kr: "밤에 혼자서는 공포 영화를 못 봐요." },
      { en: "To my horror, I'd sent the email to the wrong client.", kr: "경악스럽게도 그 이메일을 엉뚱한 고객에게 보냈더라고요." }
    ]
  },
  {
    id: "L3-563",
    word: "rear",
    meaning: "뒤쪽, 뒤의",
    examples: [
      { en: "Please exit through the rear door of the bus.", kr: "버스 뒷문으로 내려 주세요." },
      { en: "Someone hit the rear of my car in the parking lot.", kr: "주차장에서 누가 내 차 뒤쪽을 박았어요." }
    ]
  },
  {
    id: "L3-564",
    word: "strategic",
    meaning: "전략적인",
    examples: [
      { en: "We need a more strategic approach to marketing.", kr: "마케팅에 좀 더 전략적인 접근이 필요해요." },
      { en: "The company made a strategic decision to enter Asia.", kr: "그 회사는 아시아에 진출하기로 전략적 결정을 내렸습니다." }
    ]
  },
  {
    id: "L3-281",
    word: "articulate",
    meaning: "분명히 표현하다, 말로 표현하다",
    examples: [
      { en: "She articulated her ideas really clearly in the meeting.", kr: "그녀는 회의에서 자기 생각을 정말 분명하게 표현했어요." },
      { en: "I find it hard to articulate how I feel.", kr: "내 감정을 말로 표현하기가 어려워." }
    ]
  },
  {
    id: "L3-282",
    word: "attest",
    meaning: "증언하다, 보증하다",
    examples: [
      { en: "I can attest to that; the food there is amazing.", kr: "그건 내가 보증해. 거기 음식 진짜 맛있어." },
      { en: "Anyone who's worked with him can attest to his honesty.", kr: "그와 일해 본 사람이라면 누구나 그가 정직하다고 말해 줄 거예요." }
    ]
  },
  {
    id: "L3-283",
    word: "candid",
    meaning: "솔직한",
    examples: [
      { en: "Thanks for being so candid with me.", kr: "솔직하게 말해 줘서 고마워." },
      { en: "To be candid, I don't think the plan will work.", kr: "솔직히 말하면 그 계획은 안 될 것 같아요." }
    ]
  },
  {
    id: "L3-284",
    word: "circulate",
    meaning: "순환하다, (소문 등이) 퍼지다",
    examples: [
      { en: "Open the window to let the air circulate.", kr: "공기가 통하게 창문 좀 열어." },
      { en: "A rumor is circulating that our boss is quitting.", kr: "우리 상사가 그만둔다는 소문이 돌고 있어요." }
    ]
  },
  {
    id: "L3-565",
    word: "wire",
    meaning: "전선, 철사, 송금하다",
    examples: [
      { en: "Be careful, that wire is still connected to power.", kr: "조심해, 그 전선 아직 전원에 연결돼 있어." },
      { en: "I'll wire the payment to your account tomorrow.", kr: "내일 대금을 계좌로 송금해 드릴게요." }
    ]
  },
  {
    id: "L3-566",
    word: "alright",
    meaning: "괜찮은, 좋아",
    examples: [
      { en: "Are you alright? You look a little pale.", kr: "괜찮아? 좀 창백해 보여." },
      { en: "Alright, let's get started with today's meeting.", kr: "좋아요, 오늘 회의 시작합시다." }
    ]
  },
  {
    id: "L3-567",
    word: "anger",
    meaning: "분노, 화",
    examples: [
      { en: "He couldn't hide his anger after the meeting.", kr: "그는 회의 후에 분노를 숨기지 못했어요." },
      { en: "Take a deep breath before you reply in anger.", kr: "화난 채로 답장하기 전에 심호흡 한번 해." }
    ]
  },
  {
    id: "L3-664",
    word: "awful",
    meaning: "끔찍한, (기분이) 너무 안 좋은",
    examples: [
      { en: "The weather was awful during our whole trip.", kr: "여행 내내 날씨가 정말 최악이었어요." },
      { en: "I feel awful about forgetting your birthday.", kr: "네 생일 깜빡해서 진짜 마음이 너무 안 좋아." }
    ]
  },
  {
    id: "L3-289",
    word: "curtail",
    meaning: "줄이다, 축소하다",
    examples: [
      { en: "We need to curtail spending until sales pick up.", kr: "매출이 회복될 때까지 지출을 줄여야 해요." },
      { en: "Bad weather curtailed our vacation, so we came home early.", kr: "날씨가 안 좋아서 휴가를 줄이고 일찍 돌아왔어요." }
    ]
  },
  {
    id: "L3-290",
    word: "disperse",
    meaning: "흩어지다, 해산하다",
    examples: [
      { en: "The crowd dispersed quickly after the concert ended.", kr: "콘서트가 끝나자 사람들이 금방 흩어졌어요." },
      { en: "The police asked the protesters to disperse.", kr: "경찰이 시위대에게 해산하라고 했어요." }
    ]
  },
  {
    id: "L3-291",
    word: "divulge",
    meaning: "(비밀을) 누설하다, 밝히다",
    examples: [
      { en: "I can't divulge the details yet, but it's big news.", kr: "아직 자세한 건 말할 수 없지만, 큰 소식이에요." },
      { en: "Never divulge your password to anyone.", kr: "비밀번호는 절대 누구에게도 알려 주지 마세요." }
    ]
  },
  {
    id: "L3-568",
    word: "assist",
    meaning: "돕다, 지원하다",
    examples: [
      { en: "Can I assist you with anything else today?", kr: "오늘 더 도와드릴 일이 있을까요?" },
      { en: "A new intern will assist us with data entry.", kr: "새 인턴이 데이터 입력 업무를 지원할 거예요." }
    ]
  },
  {
    id: "L3-293",
    word: "expedite",
    meaning: "신속히 처리하다, 앞당기다",
    examples: [
      { en: "Can you expedite my order? I need it by Friday.", kr: "제 주문 좀 빨리 처리해 주실 수 있어요? 금요일까지 필요해요." },
      { en: "Paying extra will expedite your visa application.", kr: "추가 요금을 내면 비자 신청이 더 빨리 처리돼요." }
    ]
  },
  {
    id: "L3-294",
    word: "foster",
    meaning: "조성하다, 육성하다, (아이·동물을) 맡아 기르다",
    examples: [
      { en: "We want to foster a friendly culture on our team.", kr: "우리 팀에 친근한 분위기를 만들어 가고 싶어요." },
      { en: "They're fostering a puppy until it finds a home.", kr: "새 주인을 찾을 때까지 강아지를 임시 보호하고 있어요." }
    ]
  },
  {
    id: "L3-569",
    word: "belt",
    meaning: "벨트, 허리띠",
    examples: [
      { en: "Please fasten your seat belt during takeoff.", kr: "이륙하는 동안 안전벨트를 매 주세요." },
      { en: "These pants are too loose without a belt.", kr: "이 바지는 벨트 없으면 너무 헐렁해." }
    ]
  },
  {
    id: "L3-296",
    word: "incur",
    meaning: "(비용 등을) 발생시키다, (손해를) 입다",
    examples: [
      { en: "You'll incur a late fee if you don't pay by Friday.", kr: "금요일까지 안 내면 연체료가 부과돼요." },
      { en: "We incurred a lot of extra costs because of the delay.", kr: "지연 때문에 추가 비용이 많이 발생했어요." }
    ]
  },
  {
    id: "L3-570",
    word: "ceremony",
    meaning: "의식, 식",
    examples: [
      { en: "The wedding ceremony starts at two o'clock.", kr: "결혼식은 두 시에 시작해요." },
      { en: "The company held an awards ceremony for top employees.", kr: "회사는 우수 직원을 위한 시상식을 열었습니다." }
    ]
  },
  {
    id: "L3-298",
    word: "invincible",
    meaning: "무적의, 천하무적의",
    examples: [
      { en: "When I was twenty, I felt invincible.", kr: "스무 살 때는 내가 천하무적인 줄 알았어." },
      { en: "Our team looked invincible this season.", kr: "우리 팀은 이번 시즌에 무적처럼 보였어요." }
    ]
  },
  {
    id: "L3-571",
    word: "diamond",
    meaning: "다이아몬드",
    examples: [
      { en: "She showed everyone her new diamond ring.", kr: "그녀는 모두에게 새 다이아몬드 반지를 보여줬어요." },
      { en: "Diamonds are expensive because they're rare and hard to mine.", kr: "다이아몬드는 희귀하고 채굴이 어려워서 비싸요." }
    ]
  },
  {
    id: "L3-572",
    word: "efficient",
    meaning: "효율적인, 능률적인",
    examples: [
      { en: "This new software makes our work much more efficient.", kr: "이 새 소프트웨어 덕분에 우리 일이 훨씬 효율적이 됐어요." },
      { en: "Taking the subway is the most efficient way to get downtown.", kr: "시내에 가는 데는 지하철이 가장 효율적이에요." }
    ]
  }
];

const wordsLevel3_Part4 = [
  {
    id: "L3-573",
    word: "ghost",
    meaning: "유령",
    examples: [
      { en: "My little brother thinks there's a ghost in the attic.", kr: "남동생은 다락방에 유령이 있다고 믿어요." },
      { en: "The office feels like a ghost town on Fridays.", kr: "금요일이면 사무실이 텅 빈 유령 도시 같아요." }
    ]
  },
  {
    id: "L3-574",
    word: "lab",
    meaning: "실험실, 연구실, 검사실",
    examples: [
      { en: "She works in a research lab at the university.", kr: "그녀는 대학교 연구실에서 일해요." },
      { en: "The lab results should be ready by Monday.", kr: "검사 결과는 월요일까지 나올 거예요." }
    ]
  },
  {
    id: "L3-303",
    word: "permanent",
    meaning: "영구적인, 정규직의",
    examples: [
      { en: "Is this a permanent job or just a contract?", kr: "이거 정규직이에요, 아니면 그냥 계약직이에요?" },
      { en: "Careful, that marker is permanent.", kr: "조심해, 그 마커는 안 지워지는 거야." }
    ]
  },
  {
    id: "L3-575",
    word: "nervous",
    meaning: "긴장한, 불안한",
    examples: [
      { en: "I always get nervous before a job interview.", kr: "면접 전에는 항상 긴장돼요." },
      { en: "Don't be nervous; you've practiced this presentation a lot.", kr: "긴장하지 마, 이 발표 많이 연습했잖아." }
    ]
  },
  {
    id: "L3-576",
    word: "ordinary",
    meaning: "평범한, 보통의",
    examples: [
      { en: "It was just an ordinary day at the office.", kr: "사무실에서 그냥 평범한 하루였어요." },
      { en: "These aren't ordinary sneakers; they're designed for marathon runners.", kr: "이건 평범한 운동화가 아니라 마라톤 선수용으로 만든 거예요." }
    ]
  },
  {
    id: "L3-577",
    word: "prayer",
    meaning: "기도",
    examples: [
      { en: "She says a short prayer before every meal.", kr: "그녀는 식사 전마다 짧게 기도해요." },
      { en: "Our thoughts and prayers are with the victims' families.", kr: "피해자 가족들을 위해 마음을 다해 기도합니다." }
    ]
  },
  {
    id: "L3-578",
    word: "rarely",
    meaning: "좀처럼 ~않는, 드물게",
    examples: [
      { en: "I rarely eat breakfast on weekdays.", kr: "평일에는 아침을 거의 안 먹어요." },
      { en: "Our manager rarely works late, so something must be wrong.", kr: "우리 매니저는 좀처럼 야근을 안 하는데, 뭔가 문제가 있나 봐요." }
    ]
  },
  {
    id: "L3-579",
    word: "solve",
    meaning: "해결하다, 풀다",
    examples: [
      { en: "We need to solve this problem before the launch.", kr: "출시 전에 이 문제를 해결해야 해요." },
      { en: "It took me an hour to solve the puzzle.", kr: "그 퍼즐을 푸는 데 한 시간 걸렸어요." }
    ]
  },
  {
    id: "L3-580",
    word: "trash",
    meaning: "쓰레기, 쓰레기통",
    examples: [
      { en: "Can you take out the trash on your way out?", kr: "나가는 길에 쓰레기 좀 버려 줄래?" },
      { en: "I accidentally threw my receipt in the trash.", kr: "실수로 영수증을 쓰레기통에 버렸어요." }
    ]
  },
  {
    id: "L3-581",
    word: "whoever",
    meaning: "누구든지, ~하는 사람은 누구나",
    examples: [
      { en: "Whoever finishes first can go home early.", kr: "먼저 끝내는 사람은 누구든 일찍 퇴근해도 돼요." },
      { en: "Whoever took my lunch from the fridge, please return it.", kr: "냉장고에서 제 점심 가져가신 분, 누구든 돌려주세요." }
    ]
  },
  {
    id: "L3-582",
    word: "boost",
    meaning: "북돋우다, 증가시키다, 상승",
    examples: [
      { en: "A short walk can boost your energy in the afternoon.", kr: "잠깐 산책하면 오후에 기운을 북돋울 수 있어요." },
      { en: "The new ad campaign gave our sales a big boost.", kr: "새 광고 캠페인 덕분에 매출이 크게 올랐어요." }
    ]
  },
  {
    id: "L3-583",
    word: "cousin",
    meaning: "사촌",
    examples: [
      { en: "My cousin is getting married next month.", kr: "사촌이 다음 달에 결혼해요." },
      { en: "I grew up with my cousins, so we're really close.", kr: "사촌들이랑 같이 자라서 정말 친해요." }
    ]
  },
  {
    id: "L3-584",
    word: "deck",
    meaning: "갑판, 테라스, 발표 자료",
    examples: [
      { en: "We had dinner on the deck of the ship.", kr: "배 갑판에서 저녁을 먹었어요." },
      { en: "Can you send me the slide deck before the meeting?", kr: "회의 전에 발표 자료 좀 보내 줄래요?" }
    ]
  },
  {
    id: "L3-585",
    word: "dust",
    meaning: "먼지, 먼지를 털다",
    examples: [
      { en: "The old books were covered in dust.", kr: "오래된 책들이 먼지로 덮여 있었어요." },
      { en: "I dust the shelves every Saturday morning.", kr: "매주 토요일 아침에 선반 먼지를 털어요." }
    ]
  },
  {
    id: "L3-586",
    word: "evolution",
    meaning: "진화, 발전",
    examples: [
      { en: "The museum has an exhibit on human evolution.", kr: "그 박물관에는 인류 진화에 관한 전시가 있어요." },
      { en: "The evolution of smartphones has changed how we work.", kr: "스마트폰의 발전은 우리가 일하는 방식을 바꿨습니다." }
    ]
  },
  {
    id: "L3-587",
    word: "illness",
    meaning: "병, 질병",
    examples: [
      { en: "He missed two weeks of work due to illness.", kr: "그는 병 때문에 2주 동안 결근했어요." },
      { en: "Stress can lead to serious illness if you ignore it.", kr: "스트레스를 방치하면 심각한 질병으로 이어질 수 있어요." }
    ]
  },
  {
    id: "L3-588",
    word: "institution",
    meaning: "기관",
    examples: [
      { en: "Banks and other financial institutions are closed on holidays.", kr: "은행 같은 금융 기관은 공휴일에 문을 닫아요." },
      { en: "He's worked at the same institution for thirty years.", kr: "그분은 같은 기관에서 30년 동안 일했어요." }
    ]
  },
  {
    id: "L3-589",
    word: "lately",
    meaning: "최근에, 요즘",
    examples: [
      { en: "I've been really busy at work lately.", kr: "요즘 회사 일로 정말 바빴어요." },
      { en: "Have you talked to Mom lately?", kr: "최근에 엄마랑 얘기해 봤어?" }
    ]
  },
  {
    id: "L3-590",
    word: "remote",
    meaning: "원격의, 외딴, 멀리 떨어진",
    examples: [
      { en: "Many companies now allow remote work on Fridays.", kr: "요즘 많은 회사가 금요일에 원격 근무를 허용해요." },
      { en: "They spent their vacation in a remote village in the mountains.", kr: "그들은 산속 외딴 마을에서 휴가를 보냈어요." }
    ]
  },
  {
    id: "L3-591",
    word: "root",
    meaning: "뿌리, 근원",
    examples: [
      { en: "We need to find the root of the problem.", kr: "문제의 근원을 찾아야 해요." },
      { en: "Water the plant until the roots are fully wet.", kr: "뿌리가 완전히 젖을 때까지 화분에 물을 주세요." }
    ]
  },
  {
    id: "L3-592",
    word: "steal",
    meaning: "훔치다, 거저나 다름없는 물건",
    examples: [
      { en: "Someone tried to steal my bike from outside the office.", kr: "누가 사무실 밖에 세워 둔 내 자전거를 훔치려고 했어요." },
      { en: "This jacket was a steal at only twenty dollars.", kr: "이 재킷은 20달러밖에 안 해서 거의 거저였어요." }
    ]
  },
  {
    id: "L3-593",
    word: "precious",
    meaning: "소중한, 귀중한",
    examples: [
      { en: "Time with family is precious, so put your phone away.", kr: "가족과 보내는 시간은 소중하니까 휴대폰은 내려놔." },
      { en: "The museum keeps precious jewels in a locked room.", kr: "박물관은 귀중한 보석들을 잠긴 방에 보관해요." }
    ]
  },
  {
    id: "L3-594",
    word: "alliance",
    meaning: "동맹, 연합, 제휴",
    examples: [
      { en: "The two airlines formed an alliance to share routes.", kr: "두 항공사는 노선을 공유하기 위해 제휴를 맺었습니다." },
      { en: "The alliance between the two countries has lasted for decades.", kr: "두 나라 간의 동맹은 수십 년간 이어져 왔습니다." }
    ]
  },
  {
    id: "L3-595",
    word: "bid",
    meaning: "입찰, 입찰하다",
    examples: [
      { en: "Three companies placed bids on the construction project.", kr: "세 회사가 그 건설 프로젝트에 입찰했습니다." },
      { en: "I bid on a used camera online and won.", kr: "온라인에서 중고 카메라에 입찰해서 낙찰받았어요." }
    ]
  },
  {
    id: "L3-596",
    word: "buddy",
    meaning: "친구, 단짝",
    examples: [
      { en: "My workout buddy keeps me motivated at the gym.", kr: "운동 친구 덕분에 헬스장에서 계속 의욕이 생겨요." },
      { en: "Hey buddy, can you help me move this weekend?", kr: "야, 친구야, 이번 주말에 이사 좀 도와줄래?" }
    ]
  },
  {
    id: "L3-597",
    word: "conclusion",
    meaning: "결론, 결말",
    examples: [
      { en: "After a long discussion, we came to a conclusion.", kr: "긴 논의 끝에 우리는 결론에 도달했어요." },
      { en: "Don't jump to conclusions before you hear the whole story.", kr: "이야기를 다 듣기 전에 성급하게 결론 내리지 마." }
    ]
  },
  {
    id: "L3-598",
    word: "congratulations",
    meaning: "축하해요, 축하 (인사)",
    examples: [
      { en: "Congratulations on your promotion! You really deserve it.", kr: "승진 축하해요! 정말 그럴 자격 있어요." },
      { en: "We sent our congratulations to the newly married couple.", kr: "갓 결혼한 부부에게 축하 인사를 보냈어요." }
    ]
  },
  {
    id: "L3-599",
    word: "delay",
    meaning: "지연, 미루다, 지연시키다",
    examples: [
      { en: "Our flight had a two-hour delay because of the weather.", kr: "날씨 때문에 비행기가 두 시간 지연됐어요." },
      { en: "Let's not delay the decision any longer.", kr: "더 이상 결정을 미루지 맙시다." }
    ]
  },
  {
    id: "L3-600",
    word: "downtown",
    meaning: "시내, 도심(에)",
    examples: [
      { en: "I work downtown, so I usually take the subway.", kr: "시내에서 일해서 보통 지하철을 타요." },
      { en: "Parking downtown is expensive on weekdays.", kr: "평일에 도심 주차는 비싸요." }
    ]
  },
  {
    id: "L3-601",
    word: "hire",
    meaning: "고용하다, 채용하다",
    examples: [
      { en: "We're planning to hire two new designers this year.", kr: "올해 디자이너 두 명을 새로 채용할 계획이에요." },
      { en: "They hired a lawyer to review the contract.", kr: "그들은 계약서 검토를 위해 변호사를 고용했어요." }
    ]
  },
  {
    id: "L3-602",
    word: "insane",
    meaning: "미친, 말도 안 되는",
    examples: [
      { en: "The line for the new phone was insane.", kr: "새 휴대폰 사려는 줄이 말도 안 되게 길었어." },
      { en: "It's insane to drive in this snowstorm.", kr: "이런 눈보라 속에서 운전하는 건 미친 짓이야." }
    ]
  },
  {
    id: "L3-603",
    word: "marry",
    meaning: "결혼하다",
    examples: [
      { en: "They plan to marry next spring in her hometown.", kr: "그들은 내년 봄에 그녀의 고향에서 결혼할 계획이에요." },
      { en: "He asked her to marry him on the beach at sunset.", kr: "그는 해 질 녘 해변에서 그녀에게 결혼해 달라고 했어요." }
    ]
  },
  {
    id: "L3-604",
    word: "nowhere",
    meaning: "아무 데도 (없다), 어디에도",
    examples: [
      { en: "My keys are nowhere to be found.", kr: "열쇠가 어디에도 안 보여." },
      { en: "This argument is going nowhere, so let's take a break.", kr: "이 논쟁은 끝이 안 나니까 잠깐 쉬자." }
    ]
  },
  {
    id: "L3-605",
    word: "organic",
    meaning: "유기농의, 자연 발생적인",
    examples: [
      { en: "I try to buy organic vegetables when I can.", kr: "가능하면 유기농 채소를 사려고 해요." },
      { en: "Our account grew through organic traffic, not paid ads.", kr: "우리 계정은 유료 광고가 아닌 자연 유입으로 성장했어요." }
    ]
  },
  {
    id: "L3-606",
    word: "poetry",
    meaning: "시, 시가",
    examples: [
      { en: "She reads poetry before going to bed.", kr: "그녀는 자기 전에 시를 읽어요." },
      { en: "I wrote poetry in college but never published it.", kr: "대학 때 시를 썼지만 출판한 적은 없어요." }
    ]
  },
  {
    id: "L3-607",
    word: "pray",
    meaning: "기도하다, 간절히 바라다",
    examples: [
      { en: "My grandmother prays every morning for our family.", kr: "할머니는 매일 아침 우리 가족을 위해 기도하세요." },
      { en: "I'm praying it doesn't rain during our picnic.", kr: "소풍 가는 동안 비가 안 오길 간절히 빌고 있어요." }
    ]
  },
  {
    id: "L3-608",
    word: "sheet",
    meaning: "(종이) 한 장, 시트",
    examples: [
      { en: "Please print the schedule on one sheet of paper.", kr: "일정표를 종이 한 장에 출력해 주세요." },
      { en: "I changed the bed sheets this morning.", kr: "오늘 아침에 침대 시트를 갈았어요." }
    ]
  },
  {
    id: "L3-609",
    word: "spiritual",
    meaning: "정신적인, 영적인",
    examples: [
      { en: "For many people, yoga is both physical and spiritual.", kr: "많은 사람에게 요가는 신체적이면서도 정신적인 활동이에요." },
      { en: "He went on a spiritual journey after losing his job.", kr: "그는 직장을 잃은 뒤 영적인 여정을 떠났어요." }
    ]
  },
  {
    id: "L3-610",
    word: "sudden",
    meaning: "갑작스러운",
    examples: [
      { en: "There was a sudden change in the meeting schedule.", kr: "회의 일정에 갑작스러운 변경이 있었어요." },
      { en: "All of a sudden, the lights went out.", kr: "갑자기 불이 꺼졌어요." }
    ]
  },
  {
    id: "L3-611",
    word: "vacation",
    meaning: "휴가, 방학",
    examples: [
      { en: "I'm taking a week of vacation in August.", kr: "8월에 일주일 휴가를 낼 거예요." },
      { en: "Where did you go on summer vacation?", kr: "여름휴가 때 어디 갔었어?" }
    ]
  },
  {
    id: "L3-612",
    word: "associate",
    meaning: "연관 짓다, 동료, 직원",
    examples: [
      { en: "I always associate the smell of coffee with mornings.", kr: "저는 커피 향을 항상 아침과 연관 지어요." },
      { en: "She's a sales associate at a clothing store.", kr: "그녀는 옷 가게 판매 직원이에요." }
    ]
  },
  {
    id: "L3-613",
    word: "bench",
    meaning: "벤치, 긴 의자",
    examples: [
      { en: "Let's sit on that bench and eat our sandwiches.", kr: "저 벤치에 앉아서 샌드위치 먹자." },
      { en: "He spent most of the game on the bench.", kr: "그는 경기 대부분을 벤치에서 보냈어요." }
    ]
  },
  {
    id: "L3-614",
    word: "citizen",
    meaning: "시민, 국민",
    examples: [
      { en: "Every citizen has the right to vote.", kr: "모든 시민은 투표할 권리가 있습니다." },
      { en: "She became a U.S. citizen last year.", kr: "그녀는 작년에 미국 시민이 됐어요." }
    ]
  },
  {
    id: "L3-615",
    word: "discover",
    meaning: "발견하다, 알게 되다",
    examples: [
      { en: "I discovered a great noodle place near the office.", kr: "사무실 근처에서 훌륭한 국숫집을 발견했어요." },
      { en: "We discovered a mistake in the report after sending it.", kr: "보고서를 보낸 후에야 실수를 발견했어요." }
    ]
  },
  {
    id: "L3-616",
    word: "entrance",
    meaning: "입구, 입장",
    examples: [
      { en: "Meet me at the main entrance of the building.", kr: "건물 정문 입구에서 만나자." },
      { en: "The entrance fee for the museum is ten dollars.", kr: "박물관 입장료는 10달러예요." }
    ]
  },
  {
    id: "L3-617",
    word: "fitness",
    meaning: "체력, 건강, 피트니스",
    examples: [
      { en: "I joined a fitness class to get in better shape.", kr: "몸을 만들려고 피트니스 수업에 등록했어요." },
      { en: "Regular exercise improves your overall fitness.", kr: "규칙적인 운동은 전반적인 체력을 향상시켜요." }
    ]
  },
  {
    id: "L3-618",
    word: "friendship",
    meaning: "우정",
    examples: [
      { en: "Our friendship started on the first day of college.", kr: "우리 우정은 대학교 첫날 시작됐어요." },
      { en: "Don't let money ruin a good friendship.", kr: "돈 때문에 좋은 우정을 망치지 마." }
    ]
  },
  {
    id: "L3-619",
    word: "liquid",
    meaning: "액체, 액체의",
    examples: [
      { en: "You can't bring liquids over 100 milliliters on the plane.", kr: "100밀리리터가 넘는 액체는 기내에 반입할 수 없어요." },
      { en: "I prefer liquid soap because it's cleaner to use.", kr: "쓰기에 더 깨끗해서 액체 비누를 선호해요." }
    ]
  },
  {
    id: "L3-620",
    word: "medal",
    meaning: "메달",
    examples: [
      { en: "She won a gold medal in the swimming competition.", kr: "그녀는 수영 대회에서 금메달을 땄어요." },
      { en: "Every runner gets a medal for finishing the race.", kr: "완주한 모든 주자는 메달을 받아요." }
    ]
  },
  {
    id: "L3-621",
    word: "narrative",
    meaning: "이야기, 서사",
    examples: [
      { en: "The movie has a simple but powerful narrative.", kr: "그 영화는 단순하지만 강렬한 서사를 담고 있어요." },
      { en: "The company is trying to change the narrative about its products.", kr: "그 회사는 자사 제품을 둘러싼 이야기의 흐름을 바꾸려 하고 있습니다." }
    ]
  },
  {
    id: "L3-622",
    word: "occasionally",
    meaning: "가끔, 때때로",
    examples: [
      { en: "I occasionally work from home on Fridays.", kr: "금요일에는 가끔 재택근무를 해요." },
      { en: "We still meet for coffee occasionally.", kr: "우리는 아직도 때때로 만나서 커피를 마셔요." }
    ]
  },
  {
    id: "L3-623",
    word: "physics",
    meaning: "물리학",
    examples: [
      { en: "I struggled with physics in high school.", kr: "고등학교 때 물리학 때문에 고생했어요." },
      { en: "My sister teaches physics at a middle school.", kr: "언니는 중학교에서 물리를 가르쳐요." }
    ]
  },
  {
    id: "L3-624",
    word: "refuse",
    meaning: "거절하다, 거부하다",
    examples: [
      { en: "He refused to sign the contract without changes.", kr: "그는 수정 없이는 계약서에 서명하기를 거부했어요." },
      { en: "It was hard to refuse such a generous offer.", kr: "그렇게 후한 제안을 거절하기는 어려웠어요." }
    ]
  },
  {
    id: "L3-625",
    word: "shell",
    meaning: "껍데기, 조개껍데기",
    examples: [
      { en: "The kids collected shells on the beach all afternoon.", kr: "아이들은 오후 내내 해변에서 조개껍데기를 주웠어요." },
      { en: "Peel the shells off the boiled eggs carefully.", kr: "삶은 달걀 껍데기를 조심해서 벗기세요." }
    ]
  },
  {
    id: "L3-626",
    word: "translation",
    meaning: "번역, 통역",
    examples: [
      { en: "The translation of the contract took three days.", kr: "계약서 번역에 사흘이 걸렸어요." },
      { en: "Something always gets lost in translation.", kr: "번역하다 보면 항상 뭔가 놓치게 돼요." }
    ]
  },
  {
    id: "L3-627",
    word: "angle",
    meaning: "각도, 관점",
    examples: [
      { en: "Try taking the photo from a different angle.", kr: "다른 각도에서 사진을 찍어 봐." },
      { en: "Let's look at this problem from the customer's angle.", kr: "이 문제를 고객의 관점에서 봅시다." }
    ]
  },
  {
    id: "L3-628",
    word: "arrive",
    meaning: "도착하다",
    examples: [
      { en: "What time does your flight arrive in Seoul?", kr: "비행기가 서울에 몇 시에 도착해?" },
      { en: "The package arrived two days earlier than expected.", kr: "택배가 예상보다 이틀 일찍 도착했어요." }
    ]
  },
  {
    id: "L3-629",
    word: "defensive",
    meaning: "방어적인, 수비의",
    examples: [
      { en: "He gets defensive whenever someone criticizes his work.", kr: "그는 누가 자기 일을 비판할 때마다 방어적으로 굴어요." },
      { en: "Our team played a strong defensive game tonight.", kr: "우리 팀은 오늘 밤 탄탄한 수비 경기를 펼쳤어요." }
    ]
  },
  {
    id: "L3-630",
    word: "enterprise",
    meaning: "기업, 사업",
    examples: [
      { en: "The software is designed for large enterprises.", kr: "그 소프트웨어는 대기업용으로 설계되었습니다." },
      { en: "Starting a small enterprise takes courage and planning.", kr: "작은 사업을 시작하려면 용기와 계획이 필요해요." }
    ]
  },
  {
    id: "L3-631",
    word: "grass",
    meaning: "풀, 잔디",
    examples: [
      { en: "Please keep off the grass in the park.", kr: "공원 잔디밭에 들어가지 마세요." },
      { en: "I need to cut the grass this weekend.", kr: "이번 주말에 잔디를 깎아야 해." }
    ]
  },
  {
    id: "L3-632",
    word: "incredibly",
    meaning: "믿을 수 없을 정도로, 엄청나게",
    examples: [
      { en: "The new phone is incredibly fast.", kr: "새 휴대폰은 믿을 수 없을 정도로 빨라요." },
      { en: "I'm incredibly grateful for all your help this year.", kr: "올 한 해 도와주셔서 정말 너무 감사해요." }
    ]
  },
  {
    id: "L3-633",
    word: "journalist",
    meaning: "기자, 언론인",
    examples: [
      { en: "The journalist asked the mayor a tough question.", kr: "그 기자는 시장에게 날카로운 질문을 했어요." },
      { en: "She worked as a journalist before going into marketing.", kr: "그녀는 마케팅 분야로 가기 전에 기자로 일했어요." }
    ]
  },
  {
    id: "L3-634",
    word: "occasion",
    meaning: "때, 경우, 특별한 행사",
    examples: [
      { en: "This dress is perfect for a special occasion.", kr: "이 드레스는 특별한 날에 딱이에요." },
      { en: "I've met him on several occasions at conferences.", kr: "그를 학회에서 여러 번 만난 적이 있어요." }
    ]
  },
  {
    id: "L3-635",
    word: "pace",
    meaning: "속도, 페이스",
    examples: [
      { en: "Please walk at a slower pace so I can keep up.", kr: "따라갈 수 있게 좀 더 느린 속도로 걸어 줘." },
      { en: "Technology is changing at a fast pace.", kr: "기술은 빠른 속도로 변하고 있어요." }
    ]
  },
  {
    id: "L3-636",
    word: "premium",
    meaning: "추가 요금, 할증금, 고급의",
    examples: [
      { en: "We pay a premium for faster shipping.", kr: "더 빠른 배송을 위해 추가 요금을 내요." },
      { en: "Our premium plan includes unlimited cloud storage.", kr: "프리미엄 요금제에는 클라우드 저장 공간 무제한이 포함돼요." }
    ]
  },
  {
    id: "L3-637",
    word: "possession",
    meaning: "소유, 소지품",
    examples: [
      { en: "Please keep your personal possessions with you at all times.", kr: "개인 소지품은 항상 몸에 지니고 계세요." },
      { en: "The house has been in my family's possession for generations.", kr: "그 집은 대대로 우리 가족 소유였어요." }
    ]
  },
  {
    id: "L3-638",
    word: "resident",
    meaning: "주민, 거주자",
    examples: [
      { en: "Only residents can park in this lot.", kr: "이 주차장은 주민만 주차할 수 있어요." },
      { en: "The residents complained about the noise from construction.", kr: "주민들이 공사 소음에 대해 항의했어요." }
    ]
  },
  {
    id: "L3-639",
    word: "spin",
    meaning: "돌다, 회전하다, 빙빙 돌다",
    examples: [
      { en: "The washing machine makes a loud noise when it spins.", kr: "세탁기가 돌 때 큰 소리가 나요." },
      { en: "My head is spinning after that long meeting.", kr: "그 긴 회의 끝나고 나니 머리가 빙빙 돌아." }
    ]
  },
  {
    id: "L3-640",
    word: "agriculture",
    meaning: "농업",
    examples: [
      { en: "I studied agriculture because I want to run a farm.", kr: "농장을 운영하고 싶어서 농업을 공부했어요." },
      { en: "Is agriculture still a big part of the economy here?", kr: "여기선 아직도 농업이 경제에서 큰 비중을 차지해요?" }
    ]
  },
  {
    id: "L3-641",
    word: "collect",
    meaning: "모으다, 수집하다",
    examples: [
      { en: "My son has been collecting baseball cards for years.", kr: "아들은 몇 년째 야구 카드를 모으고 있어요." },
      { en: "We collect feedback from customers after every purchase.", kr: "구매가 있을 때마다 고객 피드백을 수집해요." }
    ]
  },
  {
    id: "L3-642",
    word: "currency",
    meaning: "통화, 화폐",
    examples: [
      { en: "You can exchange foreign currency at the airport.", kr: "공항에서 외화를 환전할 수 있어요." },
      { en: "The local currency lost value against the dollar.", kr: "현지 통화가 달러 대비 가치가 떨어졌습니다." }
    ]
  },
  {
    id: "L3-643",
    word: "exhibition",
    meaning: "전시회, 박람회",
    examples: [
      { en: "There's a photo exhibition at the art center this week.", kr: "이번 주에 아트센터에서 사진 전시회가 열려요." },
      { en: "Our company will have a booth at the trade exhibition.", kr: "우리 회사는 무역 박람회에 부스를 낼 거예요." }
    ]
  },
  {
    id: "L3-644",
    word: "funeral",
    meaning: "장례식",
    examples: [
      { en: "I'm taking tomorrow off to attend a funeral.", kr: "장례식에 참석하려고 내일 휴가를 내요." },
      { en: "Many friends came to the funeral to say goodbye.", kr: "많은 친구가 작별 인사를 하러 장례식에 왔어요." }
    ]
  },
  {
    id: "L3-645",
    word: "log",
    meaning: "기록, 기록하다",
    examples: [
      { en: "Please log your hours in the system every Friday.", kr: "매주 금요일에 시스템에 근무 시간을 기록해 주세요." },
      { en: "Check the error log to see what went wrong.", kr: "무엇이 잘못됐는지 오류 기록을 확인해 봐." }
    ]
  },
  {
    id: "L3-646",
    word: "regret",
    meaning: "후회하다, 유감스럽게 생각하다",
    examples: [
      { en: "I regret not studying English harder in school.", kr: "학교 다닐 때 영어 공부를 더 열심히 안 한 게 후회돼요." },
      { en: "We regret to inform you that the event is canceled.", kr: "행사가 취소되었음을 알려 드리게 되어 유감입니다." }
    ]
  },
  {
    id: "L3-665",
    word: "ridiculous",
    meaning: "말도 안 되는, 터무니없는",
    examples: [
      { en: "Twelve dollars for a coffee? That's ridiculous!", kr: "커피 한 잔에 12달러요? 말도 안 돼요!" },
      { en: "Stop being ridiculous. Nobody's mad at you.", kr: "말도 안 되는 소리 하지 마. 아무도 너한테 화 안 났어." }
    ]
  },
  {
    id: "L3-666",
    word: "grateful",
    meaning: "고마워하는, 감사하는",
    examples: [
      { en: "I'm really grateful for all your help this week.", kr: "이번 주에 도와준 거 정말 고마워요." },
      { en: "We'd be grateful if you could reply by Friday.", kr: "금요일까지 답변 주시면 감사하겠습니다." }
    ]
  },
  {
    id: "L3-378",
    word: "acutely",
    meaning: "절실히, 예리하게",
    examples: [
      { en: "I'm acutely aware that we're behind schedule.", kr: "일정이 늦어지고 있다는 건 저도 뼈저리게 알고 있어요." },
      { en: "I felt his absence acutely during the busy season.", kr: "바쁜 시즌에 그 사람 빈자리가 정말 크게 느껴졌어요." }
    ]
  },
  {
    id: "L3-379",
    word: "adequately",
    meaning: "충분히, 적절하게",
    examples: [
      { en: "Are you adequately prepared for tomorrow's interview?", kr: "내일 면접 준비는 충분히 됐어요?" },
      { en: "This jacket won't adequately protect you from the cold.", kr: "이 재킷으로는 추위를 충분히 막을 수 없을 거야." }
    ]
  },
  {
    id: "L3-647",
    word: "routine",
    meaning: "일과, 루틴, 정기적인",
    examples: [
      { en: "Exercise is part of my morning routine.", kr: "운동은 제 아침 일과의 일부예요." },
      { en: "It's just a routine check, so don't worry.", kr: "그냥 정기 점검이니까 걱정하지 마." }
    ]
  },
  {
    id: "L3-381",
    word: "briefly",
    meaning: "잠깐, 간단히",
    examples: [
      { en: "Can I talk to you briefly after the meeting?", kr: "회의 끝나고 잠깐 얘기 좀 할 수 있을까요?" },
      { en: "I only saw her briefly in the hallway.", kr: "복도에서 그녀를 잠깐 봤을 뿐이에요." }
    ]
  },
  {
    id: "L3-648",
    word: "settle",
    meaning: "해결하다, 정착하다",
    examples: [
      { en: "Let's settle this issue before the client arrives.", kr: "고객이 오기 전에 이 문제를 해결합시다." },
      { en: "After years abroad, they settled in a small town.", kr: "몇 년간의 해외 생활 끝에 그들은 작은 마을에 정착했어요." }
    ]
  },
  {
    id: "L3-383",
    word: "currently",
    meaning: "현재, 지금",
    examples: [
      { en: "I'm currently looking for a new job.", kr: "저 지금 새 직장 알아보고 있어요." },
      { en: "Sorry, that item is currently out of stock.", kr: "죄송하지만 그 상품은 현재 품절이에요." }
    ]
  },
  {
    id: "L3-384",
    word: "distinctly",
    meaning: "분명히, 뚜렷하게",
    examples: [
      { en: "I distinctly remember meeting you last year.", kr: "작년에 만났던 게 분명히 기억나요." },
      { en: "I distinctly heard someone knock on the door.", kr: "누가 문 두드리는 소리를 분명히 들었어." }
    ]
  },
  {
    id: "L3-385",
    word: "equally",
    meaning: "똑같이, 동등하게",
    examples: [
      { en: "Let's split the bill equally.", kr: "계산은 똑같이 나눠서 하자." },
      { en: "Both options are equally good, so you choose.", kr: "두 옵션 다 똑같이 좋으니까 네가 골라." }
    ]
  },
  {
    id: "L3-386",
    word: "essentially",
    meaning: "사실상, 본질적으로",
    examples: [
      { en: "So essentially, you're saying we need more time?", kr: "그러니까 요컨대 시간이 더 필요하다는 말씀이시죠?" },
      { en: "The two phones are essentially the same.", kr: "두 휴대폰은 사실상 똑같아요." }
    ]
  },
  {
    id: "L3-387",
    word: "eventually",
    meaning: "결국, 마침내",
    examples: [
      { en: "Don't worry, you'll get used to it eventually.", kr: "걱정 마, 결국엔 익숙해질 거야." },
      { en: "We eventually found the restaurant after getting lost twice.", kr: "두 번이나 길을 잃은 끝에 마침내 식당을 찾았어요." }
    ]
  },
  {
    id: "L3-388",
    word: "explicitly",
    meaning: "분명히, 명시적으로",
    examples: [
      { en: "The lease explicitly says no pets allowed.", kr: "임대 계약서에 반려동물 금지라고 분명히 적혀 있어요." },
      { en: "I explicitly told you not to touch my laptop.", kr: "내 노트북 건드리지 말라고 분명히 말했잖아." }
    ]
  },
  {
    id: "L3-389",
    word: "externally",
    meaning: "외부에서, 겉으로",
    examples: [
      { en: "We decided to hire externally for the manager role.", kr: "매니저 자리는 외부에서 채용하기로 했어요." },
      { en: "The car looks fine externally, but the engine's a mess.", kr: "그 차는 겉으로는 멀쩡한데 엔진이 엉망이에요." }
    ]
  },
  {
    id: "L3-649",
    word: "spell",
    meaning: "철자를 말하다, 한동안의 기간",
    examples: [
      { en: "Could you spell your last name for me, please?", kr: "성의 철자를 말씀해 주시겠어요?" },
      { en: "We've had a dry spell with no rain for weeks.", kr: "몇 주째 비 한 방울 없는 건조한 기간이 이어지고 있어요." }
    ]
  },
  {
    id: "L3-650",
    word: "coat",
    meaning: "외투, 코트, (페인트 등의) 칠",
    examples: [
      { en: "Take a warm coat; it's freezing outside.", kr: "따뜻한 코트 챙겨, 밖에 엄청 추워." },
      { en: "The wall needs another coat of paint.", kr: "벽에 페인트를 한 번 더 칠해야 해요." }
    ]
  },
  {
    id: "L3-651",
    word: "engage",
    meaning: "참여시키다, 관여하다, 소통하다",
    examples: [
      { en: "Good teachers know how to engage their students.", kr: "좋은 선생님은 학생들을 참여시키는 법을 알아요." },
      { en: "We want more customers to engage with our posts.", kr: "더 많은 고객이 우리 게시물에 반응하고 소통하길 원해요." }
    ]
  },
  {
    id: "L3-393",
    word: "initially",
    meaning: "처음에, 원래",
    examples: [
      { en: "Initially, I hated the new job, but now I love it.", kr: "처음엔 새 직장이 싫었는데 지금은 정말 좋아요." },
      { en: "We initially planned to leave at six.", kr: "원래는 6시에 출발할 계획이었어요." }
    ]
  },
  {
    id: "L3-394",
    word: "invariably",
    meaning: "어김없이, 언제나",
    examples: [
      { en: "The bus is invariably late when it rains.", kr: "비가 오면 그 버스는 어김없이 늦어요." },
      { en: "Whenever we eat out, he invariably orders the steak.", kr: "외식할 때마다 그는 어김없이 스테이크를 시켜요." }
    ]
  },
  {
    id: "L3-395",
    word: "largely",
    meaning: "주로, 대체로",
    examples: [
      { en: "The trip was a success, largely thanks to you.", kr: "여행이 잘된 건 주로 네 덕분이야." },
      { en: "Our customers are largely young professionals.", kr: "우리 고객은 대체로 젊은 직장인들이에요." }
    ]
  },
  {
    id: "L3-652",
    word: "fate",
    meaning: "운명",
    examples: [
      { en: "It was fate that we met on that train.", kr: "그 기차에서 우리가 만난 건 운명이었어." },
      { en: "The fate of the project depends on next week's meeting.", kr: "그 프로젝트의 운명은 다음 주 회의에 달려 있어요." }
    ]
  },
  {
    id: "L3-653",
    word: "headquarters",
    meaning: "본사, 본부",
    examples: [
      { en: "Our headquarters is in Seoul, but we have offices worldwide.", kr: "본사는 서울에 있지만 전 세계에 사무소가 있어요." },
      { en: "The CEO flew to headquarters for an emergency meeting.", kr: "CEO가 긴급회의를 위해 비행기를 타고 본사로 갔어요." }
    ]
  },
  {
    id: "L3-654",
    word: "initiative",
    meaning: "(새로운) 계획, 주도권, 진취성",
    examples: [
      { en: "The company launched a new initiative to reduce waste.", kr: "그 회사는 폐기물을 줄이기 위한 새로운 계획을 시작했습니다." },
      { en: "She took the initiative and fixed the problem herself.", kr: "그녀는 주도적으로 나서서 그 문제를 직접 해결했어요." }
    ]
  },
  {
    id: "L3-399",
    word: "notably",
    meaning: "특히, 눈에 띄게",
    examples: [
      { en: "The food was great, notably the seafood pasta.", kr: "음식이 다 맛있었는데, 특히 해산물 파스타가 좋았어요." },
      { en: "Several of us, notably Jake, worked all weekend.", kr: "우리 중 몇몇, 특히 제이크는 주말 내내 일했어요." }
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
    id: "L4-402",
    word: "automobile",
    meaning: "자동차",
    examples: [
      { en: "Back then, owning an automobile was a big deal.", kr: "그때는 자동차를 갖는 게 대단한 일이었어." },
      { en: "My grandfather bought his first automobile in 1965.", kr: "할아버지는 1965년에 첫 자동차를 사셨어요." }
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
    id: "L4-006",
    word: "antithesis",
    meaning: "정반대",
    examples: [
      { en: "Honestly, he's the antithesis of a morning person.", kr: "솔직히 걔는 아침형 인간이랑 정반대야." },
      { en: "This cramped hotel room is the antithesis of relaxation.", kr: "이 비좁은 호텔 방은 편안함과는 정반대야." }
    ]
  },
  {
    id: "L4-007",
    word: "apprehension",
    meaning: "불안, 걱정",
    examples: [
      { en: "I had some apprehension about moving abroad, but it worked out.", kr: "해외로 이사하는 게 좀 불안했는데, 잘 풀렸어." },
      { en: "Is there any apprehension about the new manager?", kr: "새 매니저에 대해 걱정하는 분위기가 있어요?" }
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
      { en: "Oil floats on water because it's lighter.", kr: "기름은 더 가벼워서 물 위에 떠." }
    ]
  },
  {
    id: "L4-010",
    word: "augment",
    meaning: "늘리다, 보강하다",
    examples: [
      { en: "I teach on weekends to augment my income.", kr: "수입을 늘리려고 주말에 강의를 해." },
      { en: "We need to augment the team with two more developers.", kr: "개발자 두 명을 더 충원해서 팀을 보강해야 해요." }
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
      { en: "Thousands of fans waited at the airport for their idol.", kr: "수천 명의 팬들이 공항에서 자신들의 아이돌을 기다렸어요." }
    ]
  },
  {
    id: "L4-014",
    word: "comprise",
    meaning: "~로 구성되다, 이루어지다",
    examples: [
      { en: "Our team comprises five designers and two developers.", kr: "우리 팀은 디자이너 다섯 명과 개발자 두 명으로 구성돼 있어요." },
      { en: "The tour comprises three days in Rome and two in Florence.", kr: "그 투어는 로마 3일, 피렌체 2일로 이루어져 있어요." }
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
      { en: "There was a bad accident at the highway junction this morning.", kr: "오늘 아침 고속도로 분기점에서 큰 사고가 있었어요." }
    ]
  },
  {
    id: "L4-017",
    word: "conjecture",
    meaning: "추측, 짐작",
    examples: [
      { en: "That's just conjecture. We don't know what really happened.", kr: "그건 그냥 추측일 뿐이야. 실제로 무슨 일이 있었는지 우린 몰라." },
      { en: "Everything you read online about it is pure conjecture.", kr: "그거에 대해 네가 온라인에서 읽은 건 다 순전히 짐작이야." }
    ]
  },
  {
    id: "L4-018",
    word: "constituent",
    meaning: "(지역구) 유권자, 구성 요소",
    examples: [
      { en: "The senator should listen to her constituents more.", kr: "그 상원의원은 자기 지역 유권자들 말을 좀 더 들어야 해." },
      { en: "Flour and water are the basic constituents of bread.", kr: "밀가루와 물이 빵의 기본 구성 요소야." }
    ]
  },
  {
    id: "L4-019",
    word: "contend",
    meaning: "(문제와) 씨름하다, 주장하다",
    examples: [
      { en: "I've had to contend with a lot of noise from my neighbors.", kr: "이웃집 소음이랑 계속 씨름해야 했어." },
      { en: "He contends that the report is wrong, but nobody believes him.", kr: "그는 그 보고서가 틀렸다고 주장하는데, 아무도 안 믿어." }
    ]
  },
  {
    id: "L4-020",
    word: "contingent",
    meaning: "조건부의, ~에 달린",
    examples: [
      { en: "Our trip is contingent on whether I get time off.", kr: "우리 여행은 내가 휴가를 받을 수 있느냐에 달려 있어." },
      { en: "The job offer is contingent on passing a background check.", kr: "그 채용 제안은 신원 조회를 통과하는 게 조건이에요." }
    ]
  },
  {
    id: "L4-021",
    word: "criterion",
    meaning: "기준",
    examples: [
      { en: "What's your main criterion for picking an apartment?", kr: "아파트 고를 때 너한테 제일 중요한 기준이 뭐야?" },
      { en: "Price isn't my only criterion. Location matters too.", kr: "가격만 기준이 아니야. 위치도 중요해." }
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
      { en: "Police are still trying to find a motive for the crime.", kr: "경찰은 아직 범행 동기를 찾고 있습니다." }
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
    id: "L4-026",
    word: "detrimental",
    meaning: "해로운, 손해를 입히는",
    examples: [
      { en: "Staying up late is really detrimental to your health.", kr: "늦게까지 안 자는 건 건강에 정말 해로워." },
      { en: "Skipping the meeting could be detrimental to your career.", kr: "그 회의에 빠지면 네 커리어에 손해가 될 수도 있어." }
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
    id: "L4-028",
    word: "disseminate",
    meaning: "퍼뜨리다, 배포하다",
    examples: [
      { en: "Can you disseminate this info to the whole team?", kr: "이 정보를 팀 전체에 배포해 줄 수 있어요?" },
      { en: "Fake news gets disseminated so fast on social media.", kr: "가짜 뉴스는 SNS에서 정말 빠르게 퍼져." }
    ]
  },
  {
    id: "L4-029",
    word: "dissent",
    meaning: "반대 (의견), 이의",
    examples: [
      { en: "There was a lot of dissent in the meeting about the new schedule.", kr: "새 일정에 대해 회의에서 반대 의견이 많았어." },
      { en: "The boss doesn't tolerate any dissent, so nobody speaks up.", kr: "사장님이 반대 의견을 전혀 못 참아서 아무도 말을 안 해." }
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
    id: "L4-032",
    word: "elicit",
    meaning: "이끌어내다, 유도하다",
    examples: [
      { en: "My joke didn't elicit a single laugh.", kr: "내 농담은 웃음 한 번 못 끌어냈어." },
      { en: "The survey is meant to elicit honest feedback from customers.", kr: "그 설문조사는 고객들한테서 솔직한 피드백을 끌어내려는 거예요." }
    ]
  },
  {
    id: "L4-415",
    word: "prosecutor",
    meaning: "검사",
    examples: [
      { en: "The prosecutor asked the judge for a longer sentence.", kr: "검사는 판사에게 더 긴 형량을 요청했습니다." },
      { en: "My cousin wants to become a prosecutor after law school.", kr: "내 사촌은 로스쿨을 마치고 검사가 되고 싶어 해." }
    ]
  },
  {
    id: "L4-034",
    word: "encompass",
    meaning: "포함하다, 아우르다",
    examples: [
      { en: "My job encompasses everything from sales to customer service.", kr: "내 업무는 영업부터 고객 서비스까지 다 포함해." },
      { en: "The tour encompasses all the major sights in the city.", kr: "그 투어는 시내 주요 명소를 다 아울러요." }
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
    id: "L4-036",
    word: "equitable",
    meaning: "공평한, 공정한",
    examples: [
      { en: "Let's find an equitable way to split the bill.", kr: "계산을 공평하게 나눌 방법을 찾자." },
      { en: "Is the workload really equitable across the team?", kr: "팀 내 업무량이 정말 공평한 거예요?" }
    ]
  },
  {
    id: "L4-037",
    word: "erroneous",
    meaning: "잘못된, 틀린",
    examples: [
      { en: "There's an erroneous charge on my bill. Can you check it?", kr: "제 청구서에 잘못된 요금이 있어요. 확인해 주실 수 있어요?" },
      { en: "Sorry, the info I gave you earlier was erroneous.", kr: "죄송해요, 아까 드린 정보가 틀린 거였어요." }
    ]
  },
  {
    id: "L4-038",
    word: "exacerbate",
    meaning: "악화시키다",
    examples: [
      { en: "Yelling at him will only exacerbate the situation.", kr: "그 사람한테 소리 지르면 상황만 더 악화될 거야." },
      { en: "Stress can really exacerbate my back pain.", kr: "스트레스는 내 허리 통증을 정말 악화시켜." }
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
    id: "L4-044",
    word: "homogeneous",
    meaning: "동질적인, 균질한",
    examples: [
      { en: "Our team is too homogeneous. We need different perspectives.", kr: "우리 팀은 너무 동질적이야. 다양한 관점이 필요해." },
      { en: "Mix the batter until it's completely homogeneous.", kr: "반죽이 완전히 균일해질 때까지 섞어." }
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
    id: "L4-046",
    word: "imminent",
    meaning: "임박한, 곧 닥칠",
    examples: [
      { en: "The weather app says a storm is imminent. Let's head back.", kr: "날씨 앱에서 폭풍이 곧 닥친대. 돌아가자." },
      { en: "Are there any imminent changes I should know about?", kr: "곧 있을 변경 사항 중에 제가 알아야 할 게 있나요?" }
    ]
  },
  {
    id: "L4-047",
    word: "impair",
    meaning: "손상시키다, (능력을) 떨어뜨리다",
    examples: [
      { en: "Even one drink can impair your driving.", kr: "한 잔만 마셔도 운전 능력이 떨어질 수 있어." },
      { en: "Loud concerts can impair your hearing over time.", kr: "시끄러운 콘서트는 시간이 지나면 청력을 손상시킬 수 있어." }
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
    id: "L4-049",
    word: "implicit",
    meaning: "암묵적인, 은연중의",
    examples: [
      { en: "There was an implicit understanding that I'd pay for dinner.", kr: "저녁은 내가 사는 걸로 암묵적으로 다들 알고 있었어." },
      { en: "Even if she didn't say it, the criticism was implicit.", kr: "그녀가 직접 말은 안 했어도, 비판이 은연중에 담겨 있었어." }
    ]
  },
  {
    id: "L4-050",
    word: "inadvertently",
    meaning: "무심코, 실수로",
    examples: [
      { en: "I inadvertently deleted the wrong file. Can you resend it?", kr: "실수로 엉뚱한 파일을 지웠어. 다시 보내 줄 수 있어?" },
      { en: "She inadvertently spoiled the surprise party.", kr: "걔가 무심코 깜짝 파티를 들키게 해 버렸어." }
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
      { en: "This car handles rough terrain very well.", kr: "이 차는 험한 지형에서도 아주 잘 달려요." },
      { en: "The hiking trail crosses rocky terrain near the top.", kr: "그 등산로는 정상 근처에서 바위 지형을 지나가." }
    ]
  },
  {
    id: "L4-054",
    word: "indispensable",
    meaning: "없어서는 안 될, 필수적인",
    examples: [
      { en: "Honestly, my phone has become indispensable at work.", kr: "솔직히 휴대폰은 일할 때 없어서는 안 될 물건이 됐어." },
      { en: "You've been indispensable to this project. Thank you.", kr: "당신은 이 프로젝트에 없어서는 안 될 사람이었어요. 고마워요." }
    ]
  },
  {
    id: "L4-423",
    word: "threaten",
    meaning: "위협하다, 협박하다",
    examples: [
      { en: "The customer threatened to cancel his contract.", kr: "그 고객은 계약을 해지하겠다고 위협했어요." },
      { en: "Rising sea levels threaten many coastal cities.", kr: "해수면 상승이 많은 해안 도시들을 위협하고 있습니다." }
    ]
  },
  {
    id: "L4-056",
    word: "inherent",
    meaning: "내재하는, 본질적인",
    examples: [
      { en: "Every investment has some inherent risk, you know.", kr: "모든 투자에는 내재된 위험이 좀 있잖아." },
      { en: "There's an inherent problem with this design.", kr: "이 디자인엔 본질적인 문제가 있어요." }
    ]
  },
  {
    id: "L4-057",
    word: "innate",
    meaning: "타고난, 선천적인",
    examples: [
      { en: "She has an innate talent for making people laugh.", kr: "그녀는 사람들을 웃기는 타고난 재능이 있어." },
      { en: "Do you think leadership is innate or learned?", kr: "리더십은 타고나는 거라고 생각해, 아니면 배우는 거라고 생각해?" }
    ]
  },
  {
    id: "L4-058",
    word: "insufficient",
    meaning: "불충분한",
    examples: [
      { en: "Sorry, your card was declined due to insufficient funds.", kr: "죄송하지만 잔액이 불충분해서 카드가 거절됐어요." },
      { en: "Two days is insufficient time to finish this report.", kr: "이틀은 이 보고서를 끝내기엔 불충분한 시간이에요." }
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
      { en: "Many hiring decisions are affected by unconscious bias.", kr: "많은 채용 결정이 무의식적인 편견의 영향을 받습니다." }
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
      { en: "The virtue of this plan is that it's simple.", kr: "이 계획의 장점은 단순하다는 거예요." }
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
    meaning: "노동력, 전 직원",
    examples: [
      { en: "The company plans to cut its workforce by ten percent.", kr: "그 회사는 인력을 10퍼센트 줄일 계획입니다." },
      { en: "Women now make up half of our workforce.", kr: "이제 여성이 우리 전체 직원의 절반을 차지해요." }
    ]
  },
  {
    id: "L4-066",
    word: "mandate",
    meaning: "의무화하다, 명령하다",
    examples: [
      { en: "Our company mandates two office days a week now.", kr: "이제 우리 회사는 일주일에 이틀 출근을 의무화했어." },
      { en: "Masks were mandated on public transport for a while.", kr: "한동안 대중교통에서 마스크 착용이 의무화됐었지." }
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
    id: "L4-068",
    word: "mitigate",
    meaning: "완화하다, 줄이다",
    examples: [
      { en: "How can we mitigate the risk of delays?", kr: "지연될 위험을 어떻게 줄일 수 있을까요?" },
      { en: "Apologizing quickly helped mitigate the damage.", kr: "빨리 사과한 게 피해를 줄이는 데 도움이 됐어." }
    ]
  },
  {
    id: "L4-069",
    word: "monetary",
    meaning: "금전적인, 통화의",
    examples: [
      { en: "The prize isn't monetary. It's just a trophy.", kr: "상금은 없어. 금전적인 상이 아니라 그냥 트로피야." },
      { en: "The central bank is changing its monetary policy again.", kr: "중앙은행이 또 통화 정책을 바꾼대." }
    ]
  },
  {
    id: "L4-070",
    word: "nefarious",
    meaning: "사악한, 못된",
    examples: [
      { en: "I'm not planning anything nefarious, I promise!", kr: "나쁜 짓 꾸미는 거 아니야, 진짜야!" },
      { en: "That villain's plan is pretty nefarious.", kr: "그 악당 계획은 꽤 사악해." }
    ]
  },
  {
    id: "L4-429",
    word: "acre",
    meaning: "에이커(약 4,047㎡)",
    examples: [
      { en: "They own a farm of about fifty acres.", kr: "그들은 약 50에이커 규모의 농장을 소유하고 있어." },
      { en: "The new campus will cover twenty acres.", kr: "새 캠퍼스는 20에이커에 달할 겁니다." }
    ]
  },
  {
    id: "L4-430",
    word: "automotive",
    meaning: "자동차의",
    examples: [
      { en: "He's worked in the automotive industry for twenty years.", kr: "그는 20년 동안 자동차 업계에서 일했어요." },
      { en: "This shop sells automotive parts and tools.", kr: "이 가게는 자동차 부품과 공구를 팔아." }
    ]
  },
  {
    id: "L4-431",
    word: "bore",
    meaning: "지루하게 하다",
    examples: [
      { en: "I won't bore you with all the details.", kr: "세세한 얘기로 지루하게 하지 않을게." },
      { en: "Long speeches always bore the audience.", kr: "긴 연설은 항상 청중을 지루하게 만들어요." }
    ]
  },
  {
    id: "L4-074",
    word: "pervasive",
    meaning: "만연한, 곳곳에 퍼진",
    examples: [
      { en: "Smartphone addiction is pretty pervasive these days.", kr: "요즘 스마트폰 중독이 꽤 만연해 있어." },
      { en: "There's a pervasive smell of smoke in this hotel room.", kr: "이 호텔 방엔 담배 냄새가 곳곳에 배어 있어요." }
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
    id: "L4-077",
    word: "preclude",
    meaning: "막다, 불가능하게 하다",
    examples: [
      { en: "My knee injury precludes me from running the marathon.", kr: "무릎 부상 때문에 마라톤을 뛸 수가 없어." },
      { en: "Working part-time doesn't preclude you from getting benefits.", kr: "파트타임으로 일한다고 혜택을 못 받는 건 아니에요." }
    ]
  },
  {
    id: "L4-432",
    word: "butterfly",
    meaning: "나비",
    examples: [
      { en: "A butterfly landed on my shoulder in the garden.", kr: "정원에서 나비 한 마리가 내 어깨에 앉았어." },
      { en: "This butterfly garden has more than fifty different species.", kr: "이 나비 정원에는 50종이 넘는 나비가 있어요." }
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
    id: "L4-086",
    word: "quantify",
    meaning: "수치화하다, 정량화하다",
    examples: [
      { en: "It's hard to quantify how much she helped the team.", kr: "그녀가 팀에 얼마나 도움이 됐는지 수치화하긴 어려워." },
      { en: "Can you quantify the savings for the presentation?", kr: "발표용으로 절감액을 수치로 정리해 줄 수 있어요?" }
    ]
  },
  {
    id: "L4-087",
    word: "rebuttal",
    meaning: "반박",
    examples: [
      { en: "Do you have a rebuttal, or do you agree with me?", kr: "반박할 거 있어, 아니면 내 말에 동의해?" },
      { en: "Each team gets two minutes for its rebuttal.", kr: "각 팀에 반박 시간이 2분씩 주어집니다." }
    ]
  },
  {
    id: "L4-437",
    word: "halt",
    meaning: "멈추다, 중단(시키다)",
    examples: [
      { en: "Production was halted because of a power outage.", kr: "정전 때문에 생산이 중단되었습니다." },
      { en: "The bus came to a sudden halt at the crosswalk.", kr: "버스가 횡단보도에서 갑자기 멈춰 섰어." }
    ]
  },
  {
    id: "L4-089",
    word: "relinquish",
    meaning: "넘겨주다, 포기하다",
    examples: [
      { en: "My dad finally relinquished control of the TV remote.", kr: "아빠가 드디어 TV 리모컨을 넘겨주셨어." },
      { en: "She didn't want to relinquish her role as team leader.", kr: "그녀는 팀장 자리를 내놓고 싶어 하지 않았어." }
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
    id: "L4-093",
    word: "sanction",
    meaning: "제재, 승인",
    examples: [
      { en: "Did you hear? They're putting new sanctions on that country.", kr: "들었어? 그 나라에 새로운 제재를 가한대." },
      { en: "We can't start without official sanction from headquarters.", kr: "본사의 공식 승인 없이는 시작할 수 없어요." }
    ]
  },
  {
    id: "L4-094",
    word: "scrutiny",
    meaning: "면밀한 검토, 정밀 조사, 감시",
    examples: [
      { en: "The new CEO is under a lot of public scrutiny.", kr: "새 CEO는 대중의 감시를 많이 받고 있어." },
      { en: "Your expense report won't survive close scrutiny.", kr: "네 경비 보고서는 꼼꼼히 검토하면 통과 못 할 거야." }
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
      { en: "Senior staff are asked to mentor new employees.", kr: "선임 직원들은 신입 사원들을 지도해 달라는 요청을 받아요." }
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
    id: "L4-102",
    word: "subsidiary",
    meaning: "자회사, 부수적인",
    examples: [
      { en: "I work for a subsidiary of a big Japanese company.", kr: "난 큰 일본 회사의 자회사에서 일해." },
      { en: "That's a subsidiary issue. Let's focus on the main one.", kr: "그건 부수적인 문제야. 핵심 문제에 집중하자." }
    ]
  },
  {
    id: "L4-103",
    word: "subsidize",
    meaning: "보조금을 주다, 비용을 지원하다",
    examples: [
      { en: "My company subsidizes our gym memberships.", kr: "우리 회사가 헬스장 회원권 비용을 지원해 줘." },
      { en: "Should the government subsidize electric cars?", kr: "정부가 전기차에 보조금을 줘야 할까?" }
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
    id: "L4-108",
    word: "ubiquitous",
    meaning: "어디에나 있는, 아주 흔한",
    examples: [
      { en: "Coffee shops are ubiquitous in Seoul. They're everywhere!", kr: "서울엔 커피숍이 어디에나 있어. 진짜 사방에 있어!" },
      { en: "Those electric scooters have become ubiquitous downtown.", kr: "요즘 시내엔 어딜 가나 그 전동 킥보드가 있어." }
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
    id: "L4-110",
    word: "unilateral",
    meaning: "일방적인",
    examples: [
      { en: "My boss made a unilateral decision without asking us.", kr: "상사가 우리한테 묻지도 않고 일방적인 결정을 내렸어." },
      { en: "You can't just make unilateral changes to our plans.", kr: "우리 계획을 그렇게 일방적으로 바꾸면 안 돼." }
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
      { en: "The soundtrack of that film won several awards.", kr: "그 영화의 사운드트랙은 여러 상을 받았어요." }
    ]
  },
  {
    id: "L4-445",
    word: "tenure",
    meaning: "재임 기간, 종신 재직권",
    examples: [
      { en: "During her tenure as CEO, profits doubled.", kr: "그녀가 CEO로 재임하는 동안 수익이 두 배로 늘었습니다." },
      { en: "The professor finally got tenure after ten years.", kr: "그 교수는 10년 만에 마침내 종신 재직권을 받았어요." }
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
    id: "L4-117",
    word: "anomaly",
    meaning: "이례적인 일, 이상 현상",
    examples: [
      { en: "Last month's low sales were just an anomaly.", kr: "지난달 저조한 매출은 그냥 이례적인 일이었어." },
      { en: "The system flagged an anomaly in your account.", kr: "시스템이 고객님 계정에서 이상 현상을 감지했어요." }
    ]
  },
  {
    id: "L4-118",
    word: "brevity",
    meaning: "간결함",
    examples: [
      { en: "Brevity is key in emails. Nobody reads long ones.", kr: "이메일은 간결함이 핵심이야. 긴 건 아무도 안 읽어." },
      { en: "For the sake of brevity, I'll skip the details.", kr: "간결하게 하려고 세부 사항은 건너뛸게요." }
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
    id: "L4-123",
    word: "demeanor",
    meaning: "태도, 행동거지",
    examples: [
      { en: "Her calm demeanor really helped during the crisis.", kr: "위기 상황에서 그녀의 침착한 태도가 정말 도움이 됐어." },
      { en: "His whole demeanor changed when his boss walked in.", kr: "상사가 들어오자 그의 태도가 완전히 바뀌었어." }
    ]
  },
  {
    id: "L4-124",
    word: "denounce",
    meaning: "(공개적으로) 비난하다, 규탄하다",
    examples: [
      { en: "Lots of fans denounced the team's decision online.", kr: "많은 팬들이 온라인에서 그 팀의 결정을 비난했어." },
      { en: "Why hasn't anyone denounced what he said?", kr: "왜 아무도 그 사람이 한 말을 비난하지 않는 거야?" }
    ]
  },
  {
    id: "L4-449",
    word: "altitude",
    meaning: "고도, 해발",
    examples: [
      { en: "The plane is now cruising at an altitude of 35,000 feet.", kr: "비행기는 현재 고도 35,000피트에서 순항 중입니다." },
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
    id: "L4-127",
    word: "diffuse",
    meaning: "퍼뜨리다, 퍼지다",
    examples: [
      { en: "This lamp has a cover that diffuses the light nicely.", kr: "이 램프는 빛을 은은하게 퍼뜨리는 갓이 있어." },
      { en: "The scent of the candle diffused through the whole room.", kr: "캔들 향이 방 전체에 퍼졌어." }
    ]
  },
  {
    id: "L4-128",
    word: "disconcerting",
    meaning: "당황스러운, 불안하게 만드는",
    examples: [
      { en: "It's a little disconcerting when he stares like that.", kr: "그가 그렇게 빤히 쳐다보면 좀 당황스러워." },
      { en: "The silence after my joke was pretty disconcerting.", kr: "내 농담 뒤에 흐른 침묵은 꽤 당황스러웠어." }
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
    id: "L4-131",
    word: "docile",
    meaning: "순한, 유순한",
    examples: [
      { en: "Don't worry, our dog is very docile with kids.", kr: "걱정 마, 우리 개는 아이들한테 아주 순해." },
      { en: "The horses here are docile, so beginners can ride them.", kr: "여기 말들은 순해서 초보자도 탈 수 있어요." }
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
    id: "L4-134",
    word: "emulate",
    meaning: "본받다, 모방하다",
    examples: [
      { en: "I try to emulate my mentor's calm leadership style.", kr: "나는 멘토의 차분한 리더십 스타일을 본받으려고 해." },
      { en: "Lots of startups try to emulate that company's success.", kr: "많은 스타트업들이 그 회사의 성공을 모방하려고 해." }
    ]
  },
  {
    id: "L4-135",
    word: "enigma",
    meaning: "수수께끼, 불가사의한 사람",
    examples: [
      { en: "My new coworker is a total enigma. He never talks.", kr: "새 동료는 완전 수수께끼야. 말을 전혀 안 해." },
      { en: "How she stays so calm is an enigma to me.", kr: "그녀가 어떻게 그렇게 침착한지 나한텐 수수께끼야." }
    ]
  },
  {
    id: "L4-136",
    word: "ephemeral",
    meaning: "덧없는, 금방 사라지는",
    examples: [
      { en: "Social media trends are so ephemeral these days.", kr: "요즘 SNS 유행은 정말 금방 사라져." },
      { en: "Enjoy the cherry blossoms while you can. They're ephemeral.", kr: "벚꽃 볼 수 있을 때 즐겨. 금방 사라지니까." }
    ]
  },
  {
    id: "L4-452",
    word: "delegation",
    meaning: "대표단, (권한) 위임",
    examples: [
      { en: "A delegation from Japan will visit our factory next week.", kr: "다음 주에 일본 대표단이 우리 공장을 방문할 예정입니다." },
      { en: "Good delegation lets managers focus on the big picture.", kr: "업무를 잘 위임하면 관리자는 큰 그림에 집중할 수 있어요." }
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
    id: "L4-145",
    word: "illicit",
    meaning: "불법의, 부정한",
    examples: [
      { en: "They got caught selling illicit drugs near the school.", kr: "그들은 학교 근처에서 불법 약물을 팔다가 걸렸어." },
      { en: "The drama is about an illicit affair between coworkers.", kr: "그 드라마는 직장 동료 사이의 부정한 관계, 즉 불륜에 관한 얘기야." }
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
    id: "L4-148",
    word: "inception",
    meaning: "시작, 개시",
    examples: [
      { en: "I've been on this project since its inception.", kr: "난 이 프로젝트 시작부터 함께했어." },
      { en: "Since its inception, our club has doubled in size.", kr: "우리 동호회는 시작된 이후로 규모가 두 배가 됐어." }
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
    id: "L4-152",
    word: "inertia",
    meaning: "타성, 관성",
    examples: [
      { en: "Honestly, I stay at this job mostly out of inertia.", kr: "솔직히 이 직장에 있는 건 거의 타성 때문이야." },
      { en: "Hold on tight. Inertia pushes you forward when the bus stops.", kr: "꽉 잡아. 버스가 멈추면 관성 때문에 앞으로 쏠려." }
    ]
  },
  {
    id: "L4-153",
    word: "infallible",
    meaning: "절대 틀리지 않는, 완벽한",
    examples: [
      { en: "Relax, nobody's infallible. Everyone makes mistakes.", kr: "진정해, 절대 안 틀리는 사람은 없어. 누구나 실수해." },
      { en: "My GPS isn't infallible. It got us lost yesterday.", kr: "내 내비도 완벽하진 않아. 어제 우리 길 잃게 했잖아." }
    ]
  },
  {
    id: "L4-154",
    word: "innocuous",
    meaning: "악의 없는, 무해한",
    examples: [
      { en: "It was an innocuous question, but she got really upset.", kr: "악의 없는 질문이었는데, 그녀가 엄청 화를 냈어." },
      { en: "Don't worry, that spider is totally innocuous.", kr: "걱정 마, 그 거미는 완전히 무해해." }
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
    id: "L4-156",
    word: "intangible",
    meaning: "무형의, 눈에 보이지 않는",
    examples: [
      { en: "The job doesn't pay much, but the intangible benefits are great.", kr: "그 일은 돈은 많이 안 주지만, 눈에 보이지 않는 이점이 커." },
      { en: "Trust is intangible, but it's what keeps a team together.", kr: "신뢰는 눈에 보이지 않지만, 팀을 하나로 묶어 주는 거야." }
    ]
  },
  {
    id: "L4-157",
    word: "intermittent",
    meaning: "간헐적인, 끊겼다 이어졌다 하는",
    examples: [
      { en: "The Wi-Fi here is intermittent, so my calls keep dropping.", kr: "여기 와이파이가 끊겼다 됐다 해서 통화가 계속 끊겨." },
      { en: "There will be intermittent showers throughout the afternoon.", kr: "오후 내내 간헐적으로 소나기가 내리겠습니다." }
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
      { en: "The witness was given immunity in exchange for testifying.", kr: "그 증인은 증언하는 대가로 면책을 받았습니다." }
    ]
  },
  {
    id: "L4-166",
    word: "nomadic",
    meaning: "유목의, 떠돌아다니는",
    examples: [
      { en: "Working remotely lets me live a nomadic lifestyle.", kr: "원격 근무 덕분에 떠돌아다니는 생활을 할 수 있어." },
      { en: "Some families in Mongolia are still nomadic.", kr: "몽골의 일부 가족들은 아직도 유목 생활을 해." }
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
      { en: "Regular exercise reduces the likelihood of heart disease.", kr: "규칙적인 운동은 심장병에 걸릴 가능성을 낮춰요." }
    ]
  },
  {
    id: "L4-170",
    word: "ostensibly",
    meaning: "표면상으로는, 겉으로는",
    examples: [
      { en: "He called, ostensibly to say hi, but he wanted money.", kr: "걔가 겉으로는 안부 전화였는데, 사실은 돈이 필요했던 거야." },
      { en: "The meeting was ostensibly about the budget.", kr: "그 회의는 표면상으로는 예산 얘기였어." }
    ]
  },
  {
    id: "L4-171",
    word: "palatable",
    meaning: "먹을 만한, 받아들일 만한",
    examples: [
      { en: "Add some honey to make the medicine more palatable.", kr: "약이 좀 먹을 만하게 꿀을 조금 넣어." },
      { en: "How can we make this news more palatable for the team?", kr: "이 소식을 팀이 좀 더 받아들일 만하게 하려면 어떻게 하죠?" }
    ]
  },
  {
    id: "L4-172",
    word: "peripheral",
    meaning: "주변의, 부차적인",
    examples: [
      { en: "I saw something move in my peripheral vision.", kr: "주변 시야에서 뭔가 움직이는 게 보였어." },
      { en: "Let's skip the peripheral details and get to the point.", kr: "부차적인 세부 사항은 건너뛰고 본론으로 가죠." }
    ]
  },
  {
    id: "L4-173",
    word: "perpetuate",
    meaning: "계속 이어지게 하다, 영속시키다",
    examples: [
      { en: "Jokes like that just perpetuate stereotypes.", kr: "그런 농담은 고정관념을 계속 이어지게 할 뿐이야." },
      { en: "Let's not perpetuate that rumor. It's not even true.", kr: "그 소문이 계속 돌게 하지 말자. 사실도 아니야." }
    ]
  },
  {
    id: "L4-174",
    word: "philanthropy",
    meaning: "자선 (활동), 박애",
    examples: [
      { en: "After retiring, she got really into philanthropy.", kr: "은퇴 후에 그녀는 자선 활동에 푹 빠졌어." },
      { en: "Is that real philanthropy or just good PR?", kr: "그게 진짜 자선이야, 아니면 그냥 이미지 관리야?" }
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
    id: "L4-176",
    word: "poignant",
    meaning: "가슴 아픈, 가슴 뭉클한",
    examples: [
      { en: "The ending of that movie was so poignant. I cried.", kr: "그 영화 결말이 너무 가슴 뭉클했어. 나 울었어." },
      { en: "Her speech at the funeral was short but poignant.", kr: "장례식에서 그녀의 추도사는 짧았지만 가슴 아팠어." }
    ]
  },
  {
    id: "L4-177",
    word: "precarious",
    meaning: "불안정한, 위태로운",
    examples: [
      { en: "That ladder looks precarious. Let me hold it for you.", kr: "그 사다리 위태로워 보여. 내가 잡아 줄게." },
      { en: "With no savings, my finances are pretty precarious right now.", kr: "모아 둔 돈이 없어서 지금 내 재정 상태가 꽤 불안정해." }
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
    id: "L4-180",
    word: "propensity",
    meaning: "성향, 경향",
    examples: [
      { en: "My brother has a propensity to exaggerate.", kr: "우리 형은 과장하는 경향이 있어." },
      { en: "Little kids have a propensity for getting into trouble.", kr: "어린애들은 사고 치는 성향이 있잖아." }
    ]
  },
  {
    id: "L4-181",
    word: "proponent",
    meaning: "지지자, 옹호자",
    examples: [
      { en: "I'm a big proponent of the four-day work week.", kr: "나는 주 4일 근무제의 열렬한 지지자야." },
      { en: "Proponents of the plan say it'll save money.", kr: "그 계획 지지자들은 돈이 절약될 거라고 해." }
    ]
  },
  {
    id: "L4-182",
    word: "quell",
    meaning: "가라앉히다, 진압하다",
    examples: [
      { en: "The manager tried to quell the rumors about layoffs.", kr: "매니저가 정리해고 소문을 가라앉히려고 했어." },
      { en: "I drink chamomile tea to quell my nerves.", kr: "긴장을 가라앉히려고 캐모마일 차를 마셔." }
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
    id: "L4-185",
    word: "recoup",
    meaning: "(손실을) 만회하다, 되찾다",
    examples: [
      { en: "It'll take years to recoup what I spent on this car.", kr: "이 차에 쓴 돈을 되찾으려면 몇 년은 걸릴 거야." },
      { en: "The movie didn't even recoup its production costs.", kr: "그 영화는 제작비도 만회하지 못했어." }
    ]
  },
  {
    id: "L4-186",
    word: "refute",
    meaning: "반박하다",
    examples: [
      { en: "She couldn't refute anything I said, so she changed the subject.", kr: "그녀는 내 말을 하나도 반박하지 못해서 화제를 바꿨어." },
      { en: "The company quickly refuted the rumors online.", kr: "그 회사는 온라인 소문을 재빨리 반박했어요." }
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
    id: "L4-188",
    word: "reprehensible",
    meaning: "비난받을 만한",
    examples: [
      { en: "What he did to his coworker was reprehensible.", kr: "그가 동료한테 한 짓은 비난받을 만해." },
      { en: "Cheating customers like that is absolutely reprehensible.", kr: "그렇게 고객을 속이는 건 정말 비난받을 만한 짓이에요." }
    ]
  },
  {
    id: "L4-470",
    word: "offshore",
    meaning: "해외로, 역외의, 해상의",
    examples: [
      { en: "The company moved its call center offshore.", kr: "그 회사는 콜센터를 해외로 옮겼어요." },
      { en: "They're building a huge offshore wind farm.", kr: "대규모 해상 풍력 발전 단지를 짓고 있어요." }
    ]
  },
  {
    id: "L4-190",
    word: "rescind",
    meaning: "철회하다, 취소하다",
    examples: [
      { en: "They rescinded my job offer after the budget cuts.", kr: "예산이 삭감된 후에 내 채용 제안이 철회됐어." },
      { en: "Can I rescind my resignation? I changed my mind.", kr: "사직서를 철회할 수 있을까요? 마음이 바뀌었어요." }
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
    id: "L4-193",
    word: "rhetoric",
    meaning: "(말뿐인) 미사여구, 언사, 수사법",
    examples: [
      { en: "That's just political rhetoric. Nothing will actually change.", kr: "그건 그냥 정치적인 미사여구야. 실제론 아무것도 안 바뀔 거야." },
      { en: "I'm tired of all the angry rhetoric on the news.", kr: "뉴스에 나오는 격한 언사들에 질렸어." }
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
    id: "L4-195",
    word: "rudimentary",
    meaning: "기초적인, 기본적인",
    examples: [
      { en: "I only speak rudimentary Spanish, so please speak slowly.", kr: "스페인어는 기초적인 수준밖에 못 하니까 천천히 말해 주세요." },
      { en: "The cabin was pretty rudimentary. No Wi-Fi, no shower.", kr: "그 오두막은 꽤 기본적인 시설만 있었어. 와이파이도, 샤워실도 없었어." }
    ]
  },
  {
    id: "L4-196",
    word: "succinct",
    meaning: "간결한",
    examples: [
      { en: "Please keep your update succinct. We're short on time.", kr: "업데이트는 간결하게 해 주세요. 시간이 별로 없어요." },
      { en: "That was a succinct answer. I like it.", kr: "간결한 대답이네. 마음에 들어." }
    ]
  },
  {
    id: "L4-471",
    word: "pioneer",
    meaning: "선구자, 개척자, 개척하다",
    examples: [
      { en: "She was a pioneer in online education.", kr: "그녀는 온라인 교육 분야의 선구자였어." },
      { en: "This company pioneered the use of electric buses.", kr: "이 회사가 전기 버스 사용을 처음 개척했어요." }
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
    id: "L4-199",
    word: "tacit",
    meaning: "암묵적인, 무언의",
    examples: [
      { en: "We had a tacit agreement not to talk about work.", kr: "우리는 일 얘기는 안 하기로 암묵적으로 합의했어." },
      { en: "I think his silence was tacit approval.", kr: "그의 침묵은 무언의 승인이었던 것 같아." }
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
    meaning: "집요한, 끈기 있는",
    examples: [
      { en: "She's so tenacious; she never gives up on a deal.", kr: "그녀는 정말 끈질겨. 거래를 절대 포기하지 않아." },
      { en: "You have to be tenacious when you're job hunting.", kr: "구직할 때는 끈기 있게 버텨야 해." }
    ]
  },
  {
    id: "L4-202",
    word: "salient",
    meaning: "핵심적인, 두드러진",
    examples: [
      { en: "Just give me the salient points; I'm short on time.", kr: "시간이 별로 없으니까 핵심 요점만 말해 줘." },
      { en: "What's the most salient difference between these two plans?", kr: "이 두 안의 가장 두드러진 차이가 뭐예요?" }
    ]
  },
  {
    id: "L4-472",
    word: "recreational",
    meaning: "레크리에이션의, 취미의",
    examples: [
      { en: "The park has many recreational facilities for families.", kr: "그 공원에는 가족을 위한 레크리에이션 시설이 많아요." },
      { en: "I only play tennis at a recreational level.", kr: "나는 테니스를 그냥 취미 수준으로만 쳐." }
    ]
  },
  {
    id: "L4-204",
    word: "superfluous",
    meaning: "불필요한, 쓸데없는",
    examples: [
      { en: "Let's cut the superfluous slides and keep it short.", kr: "불필요한 슬라이드는 빼고 짧게 가자." },
      { en: "Honestly, half these kitchen gadgets are superfluous.", kr: "솔직히 이 주방 도구들 절반은 쓸데없어." }
    ]
  },
  {
    id: "L4-205",
    word: "esoteric",
    meaning: "난해한, 소수만 아는",
    examples: [
      { en: "His taste in music is a bit too esoteric for me.", kr: "걔 음악 취향은 나한텐 좀 너무 난해해." },
      { en: "Sorry, that joke was pretty esoteric; only programmers get it.", kr: "미안, 그 농담 좀 난해했지. 프로그래머들만 알아들어." }
    ]
  },
  {
    id: "L4-206",
    word: "clandestine",
    meaning: "비밀의, 은밀한",
    examples: [
      { en: "They had a clandestine meeting before the merger was announced.", kr: "합병 발표 전에 그들이 비밀리에 만났대." },
      { en: "Their clandestine office romance lasted two years.", kr: "그 둘의 은밀한 사내 연애는 2년이나 갔어." }
    ]
  },
  {
    id: "L4-207",
    word: "egregious",
    meaning: "지독한, 터무니없는",
    examples: [
      { en: "That's an egregious mistake for a senior engineer.", kr: "선임 엔지니어가 하기엔 정말 터무니없는 실수야." },
      { en: "The prices at this airport are egregious!", kr: "이 공항 물가는 진짜 터무니없어!" }
    ]
  },
  {
    id: "L4-208",
    word: "epitome",
    meaning: "전형, 완벽한 본보기",
    examples: [
      { en: "This little café is the epitome of coziness.", kr: "이 작은 카페는 아늑함의 전형이야." },
      { en: "My dad is the epitome of a gentleman.", kr: "우리 아빠는 신사의 전형이셔." }
    ]
  },
  {
    id: "L4-209",
    word: "hiatus",
    meaning: "일시 중단, 공백기",
    examples: [
      { en: "My favorite show is on hiatus until next spring.", kr: "내가 제일 좋아하는 드라마가 내년 봄까지 휴방이야." },
      { en: "I'm taking a short hiatus from social media.", kr: "SNS는 잠깐 쉬는 중이야." }
    ]
  },
  {
    id: "L4-210",
    word: "impetus",
    meaning: "계기, 자극, 추진력",
    examples: [
      { en: "What was the impetus for starting your own business?", kr: "창업하게 된 계기가 뭐였어요?" },
      { en: "That customer complaint was the impetus for the redesign.", kr: "그 고객 불만이 디자인 개편의 계기가 됐어요." }
    ]
  },
  {
    id: "L4-211",
    word: "lexicon",
    meaning: "어휘, 용어",
    examples: [
      { en: "'Ghosting' has become part of the dating lexicon.", kr: "'고스팅'은 이제 연애 용어의 일부가 됐어." },
      { en: "Every company has its own lexicon of acronyms.", kr: "회사마다 자기만의 약어 용어가 있어요." }
    ]
  },
  {
    id: "L4-212",
    word: "mercenary",
    meaning: "돈만 밝히는, 용병",
    examples: [
      { en: "Don't be so mercenary; not everything is about money.", kr: "그렇게 돈만 밝히지 마. 모든 게 돈 문제는 아니잖아." },
      { en: "The movie is about a mercenary hired to rescue a hostage.", kr: "그 영화는 인질 구출에 고용된 용병 이야기야." }
    ]
  },
  {
    id: "L4-473",
    word: "renewable",
    meaning: "재생 가능한",
    examples: [
      { en: "The city aims to use only renewable energy by 2040.", kr: "그 도시는 2040년까지 재생 에너지만 사용하는 것을 목표로 합니다." },
      { en: "Wind and solar are renewable sources of power.", kr: "풍력과 태양광은 재생 가능한 전력원이에요." }
    ]
  },
  {
    id: "L4-214",
    word: "paramount",
    meaning: "가장 중요한",
    examples: [
      { en: "For our team, customer privacy is paramount.", kr: "우리 팀에선 고객 개인정보 보호가 가장 중요해요." },
      { en: "When you travel alone, safety is paramount.", kr: "혼자 여행할 땐 안전이 가장 중요해." }
    ]
  },
  {
    id: "L4-215",
    word: "pernicious",
    meaning: "해로운, 악영향을 주는",
    examples: [
      { en: "Gossip can have a pernicious effect on team morale.", kr: "험담은 팀 사기에 해로운 영향을 줄 수 있어요." },
      { en: "Comparing yourself to others online is a pernicious habit.", kr: "온라인에서 남과 비교하는 건 정말 해로운 습관이야." }
    ]
  },
  {
    id: "L4-474",
    word: "suburban",
    meaning: "교외의",
    examples: [
      { en: "They moved to a quiet suburban neighborhood.", kr: "그들은 조용한 교외 동네로 이사했어." },
      { en: "Suburban commuters spend hours on the road each day.", kr: "교외 통근자들은 매일 길에서 몇 시간씩 보내요." }
    ]
  },
  {
    id: "L4-475",
    word: "toss",
    meaning: "던지다, (동전을) 던지다",
    examples: [
      { en: "Can you toss me the remote, please?", kr: "리모컨 좀 던져 줄래?" },
      { en: "Let's toss a coin to decide who pays.", kr: "누가 낼지 동전 던져서 정하자." }
    ]
  },
  {
    id: "L4-476",
    word: "aftermath",
    meaning: "여파, 후유증",
    examples: [
      { en: "Many families needed help in the aftermath of the flood.", kr: "홍수의 여파로 많은 가족이 도움이 필요했습니다." },
      { en: "In the aftermath of the merger, several managers quit.", kr: "합병의 여파로 관리자 여러 명이 그만뒀어요." }
    ]
  },
  {
    id: "L4-219",
    word: "solace",
    meaning: "위로, 위안",
    examples: [
      { en: "I take solace in knowing I did my best.", kr: "최선을 다했다는 걸 아니까 위안이 돼." },
      { en: "Music was my only solace during that tough year.", kr: "그 힘든 해에 음악이 내 유일한 위로였어." }
    ]
  },
  {
    id: "L4-220",
    word: "transient",
    meaning: "일시적인, 잠깐의",
    examples: [
      { en: "Don't worry, the side effects are usually transient.", kr: "걱정 마세요, 부작용은 보통 일시적이에요." },
      { en: "Fame is transient, so enjoy it while it lasts.", kr: "명성은 일시적인 거니까 있을 때 즐겨." }
    ]
  },
  {
    id: "L4-477",
    word: "arguably",
    meaning: "거의 틀림없이, 아마도",
    examples: [
      { en: "This is arguably the best pizza in town.", kr: "여기가 아마 이 동네에서 제일 맛있는 피자일 거야." },
      { en: "She is arguably our most valuable employee.", kr: "그녀는 거의 틀림없이 우리 회사에서 가장 소중한 직원이에요." }
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
    meaning: "결론을 내리다, 끝내다",
    examples: [
      { en: "Let's conclude the meeting with a quick summary.", kr: "간단한 요약으로 회의를 마무리합시다." },
      { en: "The study concluded that sleep affects memory.", kr: "그 연구는 수면이 기억력에 영향을 준다고 결론지었습니다." }
    ]
  },
  {
    id: "L4-480",
    word: "discretion",
    meaning: "재량, 신중함",
    examples: [
      { en: "Tipping is at the customer's discretion.", kr: "팁은 고객의 재량입니다." },
      { en: "Please handle this matter with discretion.", kr: "이 문제는 신중하게 처리해 주세요." }
    ]
  },
  {
    id: "L4-481",
    word: "drought",
    meaning: "가뭄",
    examples: [
      { en: "The long drought has hurt farmers across the region.", kr: "긴 가뭄이 지역 전체의 농민들에게 피해를 줬습니다." },
      { en: "Water use is limited during the drought.", kr: "가뭄 기간에는 물 사용이 제한돼요." }
    ]
  },
  {
    id: "L4-482",
    word: "esteem",
    meaning: "존경, 존중, 자존감(self-esteem)",
    examples: [
      { en: "Praise can really boost a child's self-esteem.", kr: "칭찬은 아이의 자존감을 정말 높여 줄 수 있어." },
      { en: "She is held in high esteem by her colleagues.", kr: "그녀는 동료들에게 크게 존경받고 있어요." }
    ]
  },
  {
    id: "L4-483",
    word: "fog",
    meaning: "안개",
    examples: [
      { en: "The flight was delayed because of heavy fog.", kr: "짙은 안개 때문에 비행기가 지연됐어." },
      { en: "Drive slowly; the fog is really thick this morning.", kr: "천천히 운전해, 오늘 아침 안개가 정말 짙어." }
    ]
  },
  {
    id: "L4-484",
    word: "historian",
    meaning: "역사가, 사학자",
    examples: [
      { en: "The historian explained the origins of the old palace.", kr: "그 역사학자가 오래된 궁궐의 기원을 설명해 줬어." },
      { en: "Historians still debate the causes of the war.", kr: "역사가들은 여전히 그 전쟁의 원인에 대해 논쟁합니다." }
    ]
  },
  {
    id: "L4-485",
    word: "hospitality",
    meaning: "환대, 접객업",
    examples: [
      { en: "Thank you so much for your warm hospitality.", kr: "따뜻하게 환대해 주셔서 정말 감사합니다." },
      { en: "My sister works in the hospitality industry.", kr: "우리 언니는 호텔·외식 같은 접객업계에서 일해." }
    ]
  },
  {
    id: "L4-230",
    word: "disparate",
    meaning: "서로 전혀 다른, 이질적인",
    examples: [
      { en: "Our team members come from disparate backgrounds.", kr: "우리 팀원들은 서로 전혀 다른 배경 출신이에요." },
      { en: "It's hard to combine such disparate ideas into one plan.", kr: "이렇게 서로 전혀 다른 아이디어들을 한 계획으로 합치기는 어려워요." }
    ]
  },
  {
    id: "L4-486",
    word: "moisture",
    meaning: "습기, 수분",
    examples: [
      { en: "This cream keeps moisture in your skin all day.", kr: "이 크림은 하루 종일 피부에 수분을 지켜 줘." },
      { en: "Moisture in the basement caused mold on the walls.", kr: "지하실의 습기 때문에 벽에 곰팡이가 생겼어." }
    ]
  },
  {
    id: "L4-487",
    word: "mortality",
    meaning: "사망률, 죽을 운명",
    examples: [
      { en: "Infant mortality has dropped sharply in recent decades.", kr: "영아 사망률이 최근 수십 년간 급격히 떨어졌습니다." },
      { en: "Getting older makes you think about your own mortality.", kr: "나이가 들면 자신도 언젠가 죽는다는 걸 생각하게 돼." }
    ]
  },
  {
    id: "L4-488",
    word: "opt",
    meaning: "선택하다, (opt out) 빠지다",
    examples: [
      { en: "Many employees opted to work from home on Fridays.", kr: "많은 직원이 금요일에 재택근무를 선택했어요." },
      { en: "You can opt out of marketing emails anytime.", kr: "언제든지 마케팅 이메일 수신을 거부할 수 있어요." }
    ]
  },
  {
    id: "L4-489",
    word: "peanut",
    meaning: "땅콩",
    examples: [
      { en: "I'm allergic to peanuts, so I can't eat this.", kr: "나 땅콩 알레르기가 있어서 이거 못 먹어." },
      { en: "He made a peanut butter sandwich for lunch.", kr: "그는 점심으로 땅콩버터 샌드위치를 만들었어." }
    ]
  },
  {
    id: "L4-490",
    word: "persistent",
    meaning: "끈질긴, 지속적인",
    examples: [
      { en: "I've had a persistent cough for two weeks.", kr: "2주째 기침이 계속되고 있어." },
      { en: "Be persistent; most sales take several follow-up calls.", kr: "끈질기게 하세요, 대부분의 판매는 여러 번의 후속 전화가 필요해요." }
    ]
  },
  {
    id: "L4-491",
    word: "pharmaceutical",
    meaning: "제약의, 의약품",
    examples: [
      { en: "She works for a large pharmaceutical company.", kr: "그녀는 큰 제약 회사에서 일해." },
      { en: "Pharmaceutical prices are a major issue in this election.", kr: "의약품 가격이 이번 선거의 주요 쟁점입니다." }
    ]
  },
  {
    id: "L4-492",
    word: "rebuild",
    meaning: "재건하다, 다시 쌓다",
    examples: [
      { en: "It took years to rebuild the town after the earthquake.", kr: "지진 이후 마을을 재건하는 데 몇 년이 걸렸어요." },
      { en: "After the scandal, the company worked hard to rebuild trust.", kr: "스캔들 이후 그 회사는 신뢰를 다시 쌓으려고 열심히 노력했습니다." }
    ]
  },
  {
    id: "L4-493",
    word: "reservoir",
    meaning: "저수지, 저장소",
    examples: [
      { en: "The city's main reservoir is nearly empty this summer.", kr: "올여름 시의 주 저수지가 거의 비었어요." },
      { en: "We went for a walk around the reservoir.", kr: "우리는 저수지 주변을 산책했어." }
    ]
  },
  {
    id: "L4-494",
    word: "scrap",
    meaning: "조각, 폐기하다, 취소하다",
    examples: [
      { en: "Write the number on a scrap of paper.", kr: "번호를 종잇조각에 적어 둬." },
      { en: "Management decided to scrap the project.", kr: "경영진은 그 프로젝트를 폐기하기로 결정했어요." }
    ]
  },
  {
    id: "L4-240",
    word: "innuendo",
    meaning: "빗대어 하는 말, 은근한 암시",
    examples: [
      { en: "His jokes are always full of innuendo.", kr: "그 사람 농담은 늘 은근히 빗대는 말투성이야." },
      { en: "I didn't like her innuendo about my long lunches.", kr: "내 점심시간이 길다고 은근히 빗대어 말한 거 별로였어." }
    ]
  },
  {
    id: "L4-495",
    word: "sensation",
    meaning: "느낌, 감각, 큰 화제",
    examples: [
      { en: "I felt a burning sensation in my throat.", kr: "목에 타는 듯한 느낌이 들었어." },
      { en: "The video became an overnight sensation online.", kr: "그 영상은 하룻밤 사이에 온라인에서 큰 화제가 됐어요." }
    ]
  },
  {
    id: "L4-496",
    word: "slope",
    meaning: "경사, 비탈, (스키장) 슬로프",
    examples: [
      { en: "The house sits on a steep slope.", kr: "그 집은 가파른 비탈에 있어." },
      { en: "We spent the whole day skiing on the slopes.", kr: "우리는 하루 종일 슬로프에서 스키를 탔어." }
    ]
  },
  {
    id: "L4-243",
    word: "juxtaposition",
    meaning: "나란히 놓음, 대비, 병치",
    examples: [
      { en: "I love the juxtaposition of old and new buildings here.", kr: "여기 옛 건물과 새 건물이 나란히 대비되는 게 너무 좋아." },
      { en: "The juxtaposition of sweet and salty makes this dish amazing.", kr: "단맛과 짠맛을 나란히 대비시킨 게 이 요리의 매력이야." }
    ]
  },
  {
    id: "L4-497",
    word: "spotlight",
    meaning: "주목, 집중 조명",
    examples: [
      { en: "She doesn't like being in the spotlight.", kr: "그녀는 주목받는 걸 좋아하지 않아." },
      { en: "The scandal put the spotlight on the company's practices.", kr: "그 스캔들로 그 회사의 관행이 주목받게 되었습니다." }
    ]
  },
  {
    id: "L4-498",
    word: "transparency",
    meaning: "투명성",
    examples: [
      { en: "Investors are demanding more transparency from the board.", kr: "투자자들은 이사회에 더 많은 투명성을 요구하고 있습니다." },
      { en: "Transparency about salaries can improve trust at work.", kr: "급여에 대한 투명성은 직장 내 신뢰를 높일 수 있어요." }
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
    meaning: "실직한, 실업자의",
    examples: [
      { en: "He's been unemployed since the factory closed.", kr: "그는 공장이 문을 닫은 이후로 실직 상태야." },
      { en: "The government offers training for unemployed workers.", kr: "정부는 실직자들을 위한 직업 훈련을 제공합니다." }
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
      { en: "I'm reading a biography of a famous inventor.", kr: "나는 유명한 발명가의 전기를 읽고 있어." },
      { en: "Please send a short biography for the conference program.", kr: "학회 프로그램에 실을 짧은 약력을 보내 주세요." }
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
      { en: "The storm was one of the most destructive in history.", kr: "그 폭풍은 역사상 가장 파괴적인 폭풍 중 하나였습니다." },
      { en: "Constant criticism can be destructive to a team.", kr: "끊임없는 비난은 팀에 해로울 수 있어요." }
    ]
  },
  {
    id: "L4-252",
    word: "penchant",
    meaning: "기호, 좋아하는 경향",
    examples: [
      { en: "She has a penchant for expensive shoes.", kr: "그녀는 유독 비싼 신발을 좋아해." },
      { en: "I have a penchant for late-night snacks.", kr: "나는 야식을 좋아하는 편이야." }
    ]
  },
  {
    id: "L4-504",
    word: "foolish",
    meaning: "어리석은, 바보 같은",
    examples: [
      { en: "It was foolish of me to trust that website.", kr: "그 웹사이트를 믿은 건 내가 어리석었어." },
      { en: "I felt foolish when I realized my mistake.", kr: "내 실수를 깨달았을 때 바보가 된 기분이었어." }
    ]
  },
  {
    id: "L4-505",
    word: "landmark",
    meaning: "랜드마크, 획기적인",
    examples: [
      { en: "The tower is the city's most famous landmark.", kr: "그 탑은 그 도시에서 가장 유명한 랜드마크예요." },
      { en: "The court made a landmark decision on privacy.", kr: "법원은 사생활에 관한 획기적인 판결을 내렸습니다." }
    ]
  },
  {
    id: "L4-506",
    word: "liable",
    meaning: "(법적) 책임이 있는",
    examples: [
      { en: "The landlord is liable for repairs to the building.", kr: "건물 수리는 집주인이 책임져야 해요." },
      { en: "You'll be liable for any damage to the rental car.", kr: "렌터카 손상에 대해서는 고객님이 책임지셔야 합니다." }
    ]
  },
  {
    id: "L4-256",
    word: "plethora",
    meaning: "아주 많음, 과다",
    examples: [
      { en: "This menu has a plethora of options; I can't decide.", kr: "이 메뉴는 선택지가 너무 많아서 못 고르겠어." },
      { en: "There's a plethora of cafés around my office.", kr: "우리 회사 근처엔 카페가 아주 많아." }
    ]
  },
  {
    id: "L4-507",
    word: "recruit",
    meaning: "채용하다, 모집하다, 신입",
    examples: [
      { en: "We're trying to recruit more software engineers this year.", kr: "올해 소프트웨어 엔지니어를 더 채용하려고 해요." },
      { en: "The new recruits start training on Monday.", kr: "신입 사원들은 월요일에 교육을 시작해요." }
    ]
  },
  {
    id: "L4-508",
    word: "sharply",
    meaning: "급격히, 날카롭게",
    examples: [
      { en: "Prices rose sharply after the storm.", kr: "폭풍 이후 가격이 급격히 올랐어." },
      { en: "She spoke sharply to the rude customer.", kr: "그녀는 무례한 손님에게 날카롭게 말했어." }
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
    meaning: "항해, (긴) 여행",
    examples: [
      { en: "The ship's first voyage across the ocean took two weeks.", kr: "그 배의 첫 대양 횡단 항해는 2주가 걸렸어." },
      { en: "Our cruise was a relaxing seven-day voyage along the coast.", kr: "우리 크루즈는 해안을 따라가는 편안한 7일간의 항해였어." }
    ]
  },
  {
    id: "L4-511",
    word: "confession",
    meaning: "고백, 자백",
    examples: [
      { en: "I have a confession: I ate the last slice of cake.", kr: "고백할 게 있어, 마지막 케이크 조각 내가 먹었어." },
      { en: "The suspect made a full confession to the police.", kr: "그 용의자는 경찰에 모든 것을 자백했습니다." }
    ]
  },
  {
    id: "L4-512",
    word: "corridor",
    meaning: "복도, 통로",
    examples: [
      { en: "The meeting room is at the end of the corridor.", kr: "회의실은 복도 끝에 있어요." },
      { en: "Students crowded the corridor between classes.", kr: "쉬는 시간에 학생들이 복도에 몰려 있었어." }
    ]
  },
  {
    id: "L4-513",
    word: "critically",
    meaning: "비판적으로, 심각하게",
    examples: [
      { en: "Try to think critically about what you read online.", kr: "온라인에서 읽는 것을 비판적으로 생각하도록 해." },
      { en: "Two people were critically injured in the crash.", kr: "그 사고로 두 명이 심각한 부상을 입었습니다." }
    ]
  },
  {
    id: "L4-514",
    word: "gossip",
    meaning: "소문, 험담, 수다 떨다",
    examples: [
      { en: "Don't believe office gossip until you hear it officially.", kr: "공식적으로 듣기 전까지는 사내 소문을 믿지 마." },
      { en: "They spent the whole lunch gossiping about their boss.", kr: "그들은 점심 내내 상사 험담을 했어." }
    ]
  },
  {
    id: "L4-515",
    word: "haul",
    meaning: "끌다, 운반하다",
    examples: [
      { en: "We hauled the old sofa down three flights of stairs.", kr: "우리는 낡은 소파를 세 층 계단 아래로 끌고 내려왔어." },
      { en: "Truck drivers haul goods across the country every day.", kr: "트럭 운전사들은 매일 전국으로 물건을 운반해요." }
    ]
  },
  {
    id: "L4-516",
    word: "interfere",
    meaning: "간섭하다, 방해하다",
    examples: [
      { en: "Please don't interfere in our argument.", kr: "우리 싸움에 끼어들지 마." },
      { en: "Loud music can interfere with your sleep.", kr: "시끄러운 음악은 수면을 방해할 수 있어." }
    ]
  },
  {
    id: "L4-517",
    word: "qualification",
    meaning: "자격, 자격 요건",
    examples: [
      { en: "What qualifications do you need for this job?", kr: "이 일을 하려면 어떤 자격이 필요해요?" },
      { en: "She has the right qualifications and plenty of experience.", kr: "그녀는 적합한 자격과 풍부한 경험을 갖추고 있어요." }
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
      { en: "A thief stole my bike right outside the office.", kr: "도둑이 사무실 바로 앞에서 내 자전거를 훔쳐 갔어." },
      { en: "Police caught the thief on a security camera.", kr: "경찰이 보안 카메라 영상으로 도둑을 잡았습니다." }
    ]
  },
  {
    id: "L4-521",
    word: "undoubtedly",
    meaning: "의심할 여지 없이, 확실히",
    examples: [
      { en: "She is undoubtedly the best candidate for the job.", kr: "그녀는 의심할 여지 없이 그 자리에 가장 적합한 후보야." },
      { en: "The new policy will undoubtedly affect small businesses.", kr: "새 정책은 확실히 소규모 사업체에 영향을 미칠 것입니다." }
    ]
  },
  {
    id: "L4-272",
    word: "travesty",
    meaning: "엉터리, 말도 안 되는 일",
    examples: [
      { en: "The trial was a total travesty of justice.", kr: "그 재판은 정의를 완전히 짓밟은 엉터리였어." },
      { en: "It's a travesty that this movie didn't win anything.", kr: "이 영화가 상을 하나도 못 받다니 말도 안 되는 일이야." }
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
      { en: "The hospital switched to a backup generator during the blackout.", kr: "정전 동안 병원은 예비 발전기로 전환했습니다." },
      { en: "We rented a small generator for the outdoor event.", kr: "야외 행사를 위해 작은 발전기를 빌렸어요." }
    ]
  },
  {
    id: "L4-276",
    word: "untenable",
    meaning: "유지할 수 없는, 옹호할 수 없는",
    examples: [
      { en: "Working three jobs is untenable in the long run.", kr: "일을 세 개나 하는 건 길게 보면 유지할 수가 없어." },
      { en: "Honestly, this situation is untenable for our team.", kr: "솔직히 이런 상황은 우리 팀이 더는 버틸 수 없어요." }
    ]
  },
  {
    id: "L4-525",
    word: "hobby",
    meaning: "취미",
    examples: [
      { en: "My hobby is baking bread on the weekends.", kr: "제 취미는 주말에 빵 굽는 거예요." },
      { en: "Photography started as a hobby, but now it's my job.", kr: "사진은 취미로 시작했는데 지금은 제 직업이에요." }
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
    meaning: "최적의",
    examples: [
      { en: "What's the optimal time to post on social media?", kr: "소셜 미디어에 글을 올리기에 최적의 시간은 언제예요?" },
      { en: "We adjusted the settings for optimal performance.", kr: "최적의 성능을 위해 설정을 조정했습니다." }
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
    id: "L4-282",
    word: "belligerent",
    meaning: "공격적인, 시비조의, 호전적인",
    examples: [
      { en: "The customer got belligerent when we refused a refund.", kr: "환불을 거절하자 그 손님이 공격적으로 변했어요." },
      { en: "He gets belligerent after a few drinks.", kr: "걔는 술 몇 잔만 들어가면 시비조로 변해." }
    ]
  },
  {
    id: "L4-529",
    word: "robust",
    meaning: "튼튼한, 견고한, 탄탄한",
    examples: [
      { en: "We need a robust security system to protect customer data.", kr: "고객 데이터를 보호하려면 견고한 보안 시스템이 필요합니다." },
      { en: "The economy showed robust growth last quarter.", kr: "지난 분기 경제는 탄탄한 성장세를 보였습니다." }
    ]
  },
  {
    id: "L4-284",
    word: "circumvent",
    meaning: "피하다, 우회하다",
    examples: [
      { en: "Some people use a VPN to circumvent the block.", kr: "어떤 사람들은 차단을 우회하려고 VPN을 써." },
      { en: "Please don't try to circumvent the approval process.", kr: "승인 절차를 피해 가려고 하지 마세요." }
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
      { en: "This curry has too much spice for me.", kr: "이 카레는 저한테는 향신료가 너무 많이 들어갔어요." },
      { en: "I bought some local spices at the market as souvenirs.", kr: "기념품으로 시장에서 현지 향신료를 좀 샀어요." }
    ]
  },
  {
    id: "L4-531",
    word: "supervision",
    meaning: "감독, 관리",
    examples: [
      { en: "New employees work under close supervision for the first month.", kr: "신입 직원은 첫 달 동안 면밀한 감독을 받으며 일합니다." },
      { en: "Children must not swim without adult supervision.", kr: "아이들은 어른의 감독 없이 수영하면 안 돼요." }
    ]
  },
  {
    id: "L4-288",
    word: "credence",
    meaning: "신뢰, 신빙성",
    examples: [
      { en: "I don't give much credence to online reviews.", kr: "난 온라인 후기를 그다지 신뢰하지 않아." },
      { en: "His story gained credence when the photos came out.", kr: "사진이 나오자 그의 이야기가 신빙성을 얻었어." }
    ]
  },
  {
    id: "L4-289",
    word: "cynicism",
    meaning: "냉소, 냉소주의",
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
    id: "L4-291",
    word: "dichotomy",
    meaning: "이분법, 양분, 괴리",
    examples: [
      { en: "That's a false dichotomy; you can be kind and still tough.", kr: "그건 잘못된 이분법이야. 친절하면서도 단호할 수 있잖아." },
      { en: "There's a weird dichotomy between his online and real-life personality.", kr: "그 사람은 온라인 성격과 실제 성격 사이에 묘한 괴리가 있어." }
    ]
  },
  {
    id: "L4-533",
    word: "thrilled",
    meaning: "아주 신이 난, 몹시 기쁜",
    examples: [
      { en: "We're thrilled to welcome you to the team!", kr: "팀에 합류하신 것을 정말 기쁘게 환영합니다!" },
      { en: "My kids were thrilled when it finally snowed.", kr: "드디어 눈이 오자 아이들이 무척 신이 났어요." }
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
    meaning: "묶음, 꾸러미, 묶음 상품",
    examples: [
      { en: "The phone company offers a bundle of internet and TV.", kr: "그 통신사는 인터넷과 TV 묶음 상품을 제공해요." },
      { en: "She tied the old newspapers into a bundle for recycling.", kr: "그녀는 재활용하려고 헌 신문을 한 묶음으로 묶었어요." }
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
    id: "L4-298",
    word: "incendiary",
    meaning: "선동적인, 자극적인",
    examples: [
      { en: "His incendiary posts got him into big trouble.", kr: "그는 선동적인 게시물 때문에 큰 곤경에 빠졌어." },
      { en: "Let's avoid incendiary topics like politics at dinner.", kr: "저녁 자리에선 정치 같은 자극적인 주제는 피하자." }
    ]
  },
  {
    id: "L4-538",
    word: "costly",
    meaning: "비용이 많이 드는, 대가가 큰",
    examples: [
      { en: "Repairing the old roof turned out to be very costly.", kr: "낡은 지붕을 고치는 데 돈이 아주 많이 들었어요." },
      { en: "One small typo became a costly mistake for the company.", kr: "작은 오타 하나가 회사에 큰 대가를 치르게 한 실수가 됐어요." }
    ]
  },
  {
    id: "L4-539",
    word: "dial",
    meaning: "전화를 걸다, 다이얼",
    examples: [
      { en: "Dial 911 immediately if someone is seriously hurt.", kr: "누군가 심하게 다쳤다면 즉시 911에 전화하세요." },
      { en: "Turn the dial to adjust the oven temperature.", kr: "다이얼을 돌려서 오븐 온도를 조절하세요." }
    ]
  }
];

const wordsLevel4_Part4 = [
  {
    id: "L4-540",
    word: "inability",
    meaning: "무능력, ~할 수 없음",
    examples: [
      { en: "His inability to manage time caused many missed deadlines.", kr: "그는 시간 관리를 못 해서 마감을 여러 번 놓쳤어요." },
      { en: "The project failed due to our inability to secure funding.", kr: "자금을 확보하지 못해서 프로젝트가 실패했습니다." }
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
      { en: "All merchandise on this shelf is 30 percent off.", kr: "이 선반에 있는 모든 상품은 30퍼센트 할인입니다." },
      { en: "The band sells T-shirts and other merchandise after concerts.", kr: "그 밴드는 콘서트가 끝나면 티셔츠와 다른 굿즈를 팔아요." }
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
      { en: "Please place your bags in the overhead bins.", kr: "가방은 머리 위 짐칸에 넣어 주세요." },
      { en: "Working from home helped the company cut overhead costs.", kr: "재택근무 덕분에 회사는 간접비를 줄일 수 있었습니다." }
    ]
  },
  {
    id: "L4-306",
    word: "nascent",
    meaning: "초기 단계의, 막 생겨난",
    examples: [
      { en: "Our app is still in its nascent stages, so expect bugs.", kr: "우리 앱은 아직 초기 단계라서 버그가 좀 있을 거예요." },
      { en: "The startup scene here is still nascent, but it's growing fast.", kr: "여기 스타트업 생태계는 아직 초기 단계지만 빠르게 크고 있어." }
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
      { en: "Could you translate this email into Korean for me?", kr: "이 이메일을 한국어로 번역해 주실 수 있나요?" },
      { en: "She translated for the visiting clients during the meeting.", kr: "그녀는 회의 중에 방문한 고객들을 위해 통역했어요." }
    ]
  },
  {
    id: "L4-547",
    word: "recession",
    meaning: "경기 침체, 불황",
    examples: [
      { en: "Many small businesses closed during the recession.", kr: "경기 침체 기간에 많은 소상공인이 문을 닫았습니다." },
      { en: "Experts warn that a recession could hit next year.", kr: "전문가들은 내년에 경기 침체가 올 수 있다고 경고합니다." }
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
    meaning: "기부자, 기증자",
    examples: [
      { en: "The new library was built with money from private donors.", kr: "새 도서관은 개인 기부자들의 돈으로 지어졌습니다." },
      { en: "She became a blood donor after her father's surgery.", kr: "그녀는 아버지가 수술을 받은 후 헌혈자가 되었어요." }
    ]
  },
  {
    id: "L4-550",
    word: "educate",
    meaning: "교육하다, 가르치다",
    examples: [
      { en: "We need to educate employees about online security.", kr: "직원들에게 온라인 보안에 대해 교육해야 합니다." },
      { en: "The campaign aims to educate parents about healthy eating.", kr: "이 캠페인은 부모들에게 건강한 식습관을 교육하는 것을 목표로 합니다." }
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
    id: "L4-314",
    word: "prudent",
    meaning: "신중한, 현명한",
    examples: [
      { en: "It'd be prudent to book the hotel early.", kr: "호텔은 일찍 예약하는 게 현명할 거야." },
      { en: "Saving a little each month is the prudent thing to do.", kr: "매달 조금씩 저축하는 게 신중한 선택이야." }
    ]
  },
  {
    id: "L4-551",
    word: "enrollment",
    meaning: "등록, 입학, 등록자 수",
    examples: [
      { en: "Enrollment for the fall semester opens next Monday.", kr: "가을 학기 등록은 다음 주 월요일에 시작됩니다." },
      { en: "The school's enrollment has doubled in five years.", kr: "그 학교의 등록 학생 수는 5년 만에 두 배가 됐어요." }
    ]
  },
  {
    id: "L4-552",
    word: "fierce",
    meaning: "치열한, 격렬한, 사나운",
    examples: [
      { en: "There's fierce competition for jobs at tech companies.", kr: "기술 기업 일자리를 두고 치열한 경쟁이 벌어지고 있어요." },
      { en: "The fierce wind knocked down several trees last night.", kr: "어젯밤 거센 바람에 나무 여러 그루가 쓰러졌어요." }
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
      { en: "I'd like to express my gratitude to everyone who helped.", kr: "도와주신 모든 분께 감사의 마음을 전하고 싶습니다." },
      { en: "She sent flowers to show her gratitude.", kr: "그녀는 고마움을 표현하려고 꽃을 보냈어요." }
    ]
  },
  {
    id: "L4-555",
    word: "indicator",
    meaning: "지표, 표시, 표시등",
    examples: [
      { en: "Customer satisfaction is a key indicator of success.", kr: "고객 만족도는 성공의 핵심 지표입니다." },
      { en: "The red indicator light means the battery is low.", kr: "빨간 표시등은 배터리가 부족하다는 뜻이에요." }
    ]
  },
  {
    id: "L4-556",
    word: "lend",
    meaning: "빌려주다",
    examples: [
      { en: "Could you lend me your charger for a minute?", kr: "잠깐 충전기 좀 빌려줄래?" },
      { en: "Banks are lending less money to small businesses this year.", kr: "올해 은행들은 소기업에 돈을 덜 빌려주고 있습니다." }
    ]
  },
  {
    id: "L4-322",
    word: "subversive",
    meaning: "체제 전복적인, 기존 질서를 뒤흔드는",
    examples: [
      { en: "The band was known for its subversive lyrics.", kr: "그 밴드는 체제 전복적인 가사로 유명했어." },
      { en: "Her humor is quietly subversive, and I love it.", kr: "그녀 유머는 은근히 기존 틀을 뒤흔들어서 너무 좋아." }
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
    meaning: "개요, 윤곽, 개요를 설명하다",
    examples: [
      { en: "Please send me an outline of your presentation by Friday.", kr: "금요일까지 발표 개요를 보내 주세요." },
      { en: "The manager outlined the new plan at the meeting.", kr: "매니저가 회의에서 새 계획의 개요를 설명했어요." }
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
      { en: "This brand is known for its reliability and low cost.", kr: "이 브랜드는 신뢰성과 저렴한 가격으로 유명해요." },
      { en: "We tested the reliability of the new software for weeks.", kr: "우리는 몇 주 동안 새 소프트웨어의 신뢰성을 테스트했습니다." }
    ]
  },
  {
    id: "L4-329",
    word: "waive",
    meaning: "포기하다, 면제하다",
    examples: [
      { en: "Can you waive the late fee just this once?", kr: "이번 한 번만 연체료를 면제해 주실 수 있어요?" },
      { en: "The hotel waived the cleaning charge for us.", kr: "호텔에서 청소비를 면제해 줬어요." }
    ]
  },
  {
    id: "L4-330",
    word: "wry",
    meaning: "비꼬는 듯한, 씁쓸한",
    examples: [
      { en: "She has a wry sense of humor.", kr: "그녀는 비꼬는 듯한 유머 감각이 있어." },
      { en: "He gave a wry smile and said, 'Typical Monday.'", kr: "그는 씁쓸하게 웃으며 '역시 월요일이네'라고 했어." }
    ]
  },
  {
    id: "L4-331",
    word: "aberration",
    meaning: "이례적인 일, 일탈",
    examples: [
      { en: "Last night's loss was just an aberration.", kr: "어젯밤 패배는 그냥 이례적인 일이었어." },
      { en: "This cold weather in May is a real aberration.", kr: "5월에 이렇게 추운 건 정말 이례적인 일이야." }
    ]
  },
  {
    id: "L4-562",
    word: "showcase",
    meaning: "선보이다, 보여 주다, 진열장",
    examples: [
      { en: "The trade fair is a great chance to showcase our products.", kr: "무역 박람회는 우리 제품을 선보일 좋은 기회예요." },
      { en: "Her portfolio showcases her best design work.", kr: "그녀의 포트폴리오는 그녀의 최고 디자인 작품들을 보여 줍니다." }
    ]
  },
  {
    id: "L4-563",
    word: "accountability",
    meaning: "책임, 책임감",
    examples: [
      { en: "Our team values honesty and accountability.", kr: "우리 팀은 정직과 책임감을 중요하게 여깁니다." },
      { en: "Citizens are demanding more accountability from the government.", kr: "시민들은 정부에 더 많은 책임을 요구하고 있습니다." }
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
      { en: "The factory uses an automated system to pack boxes.", kr: "그 공장은 상자 포장에 자동화된 시스템을 사용합니다." },
      { en: "You'll get an automated email when your order ships.", kr: "주문 상품이 발송되면 자동 이메일을 받으실 거예요." }
    ]
  },
  {
    id: "L4-337",
    word: "atrophy",
    meaning: "위축되다, 퇴화하다",
    examples: [
      { en: "My leg muscles atrophied after weeks in a cast.", kr: "몇 주 깁스를 했더니 다리 근육이 위축됐어." },
      { en: "If you don't practice, your language skills will atrophy.", kr: "연습 안 하면 언어 실력이 퇴화할 거야." }
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
    id: "L4-339",
    word: "auspicious",
    meaning: "길한, 상서로운",
    examples: [
      { en: "Rain on our first day wasn't an auspicious start.", kr: "첫날부터 비라니, 그다지 길한 출발은 아니었네." },
      { en: "In Korea, people often pick an auspicious date for weddings.", kr: "한국에서는 결혼식 날짜로 길한 날을 고르는 경우가 많아요." }
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
    meaning: "자선의, 너그러운",
    examples: [
      { en: "The company donates to several charitable organizations each year.", kr: "그 회사는 매년 여러 자선 단체에 기부합니다." },
      { en: "Let's be charitable and assume he made an honest mistake.", kr: "너그럽게 봐서 그가 고의 없이 실수한 거라고 생각하자." }
    ]
  },
  {
    id: "L4-569",
    word: "continually",
    meaning: "계속해서, 끊임없이",
    examples: [
      { en: "We continually update our app based on user feedback.", kr: "저희는 사용자 피드백을 바탕으로 앱을 계속해서 업데이트합니다." },
      { en: "He was continually interrupted during his speech.", kr: "그는 연설 중에 끊임없이 말을 끊겼어요." }
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
    id: "L4-348",
    word: "efficacy",
    meaning: "효능, 효과",
    examples: [
      { en: "I'm a bit skeptical about the efficacy of these supplements.", kr: "이 영양제 효능은 좀 의심스러워." },
      { en: "I heard the vaccine's efficacy drops after six months.", kr: "그 백신 효능이 6개월 후에는 떨어진다고 들었어." }
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
    meaning: "빛나다, 은은한 빛",
    examples: [
      { en: "The city lights glow beautifully at night.", kr: "밤이 되면 도시의 불빛이 아름답게 빛나요." },
      { en: "Her face glowed with happiness at the wedding.", kr: "결혼식에서 그녀의 얼굴은 행복으로 빛났어요." }
    ]
  },
  {
    id: "L4-573",
    word: "humanitarian",
    meaning: "인도주의적인, 인도적인",
    examples: [
      { en: "Several countries sent humanitarian aid to the flood victims.", kr: "여러 나라가 홍수 피해자들에게 인도적 지원을 보냈습니다." },
      { en: "She works for a humanitarian group that helps refugees.", kr: "그녀는 난민을 돕는 인도주의 단체에서 일해요." }
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
      { en: "The new trade deal brought prosperity to the region.", kr: "새 무역 협정은 그 지역에 번영을 가져왔습니다." },
      { en: "We wish you health and prosperity in the new year.", kr: "새해에 건강과 번창을 기원합니다." }
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
    meaning: "부족, 결핍",
    examples: [
      { en: "There's a shortage of nurses in many hospitals.", kr: "많은 병원에서 간호사가 부족합니다." },
      { en: "The water shortage forced the city to limit usage.", kr: "물 부족 때문에 시는 사용량을 제한할 수밖에 없었습니다." }
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
      { en: "To be blunt, your report needs a lot of work.", kr: "직설적으로 말하자면, 당신 보고서는 많이 손봐야 해요." },
      { en: "This knife is too blunt to cut the tomatoes.", kr: "이 칼은 너무 무뎌서 토마토가 안 잘려요." }
    ]
  },
  {
    id: "L4-582",
    word: "clarity",
    meaning: "명확성, 선명함",
    examples: [
      { en: "We need more clarity on who is responsible for what.", kr: "누가 무엇을 책임지는지 좀 더 명확히 할 필요가 있어요." },
      { en: "The new TV has amazing picture clarity.", kr: "새 TV는 화면 선명도가 놀라워요." }
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
    meaning: "쇄도하는, 넘쳐나는, 파묻힌",
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
      { en: "The program aims to improve literacy among adults.", kr: "이 프로그램은 성인의 읽고 쓰는 능력 향상을 목표로 합니다." },
      { en: "Digital literacy is essential in today's workplace.", kr: "디지털 활용 능력은 오늘날 직장에서 필수입니다." }
    ]
  },
  {
    id: "L4-585",
    word: "misleading",
    meaning: "오해의 소지가 있는, 호도하는",
    examples: [
      { en: "The ad was misleading about the product's real price.", kr: "그 광고는 제품의 실제 가격에 대해 오해를 불러일으켰어요." },
      { en: "That headline is misleading, so read the full article first.", kr: "그 헤드라인은 오해의 소지가 있으니 기사 전체를 먼저 읽어 봐." }
    ]
  },
  {
    id: "L4-367",
    word: "latent",
    meaning: "잠재적인, 잠복한",
    examples: [
      { en: "Maybe you have a latent talent for cooking!", kr: "어쩌면 너한테 요리에 잠재된 재능이 있을지도 몰라!" },
      { en: "The virus can stay latent for years before symptoms appear.", kr: "그 바이러스는 증상이 나타나기 전 몇 년간 잠복해 있을 수 있어요." }
    ]
  },
  {
    id: "L4-586",
    word: "monument",
    meaning: "기념물, 기념비",
    examples: [
      { en: "The monument was built to honor soldiers from the war.", kr: "그 기념비는 전쟁에 참전한 군인들을 기리기 위해 세워졌습니다." },
      { en: "We visited several famous monuments on our trip.", kr: "여행 중에 유명한 기념물을 여러 곳 방문했어요." }
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
    id: "L4-370",
    word: "mercurial",
    meaning: "변덕스러운, 기분이 자주 바뀌는",
    examples: [
      { en: "My boss is so mercurial; I never know what mood he's in.", kr: "우리 상사는 너무 변덕스러워서 기분이 어떤지 도통 모르겠어." },
      { en: "Her mercurial temper makes her hard to work with.", kr: "그녀는 변덕스러운 성격이라 같이 일하기 힘들어." }
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
    meaning: "거절, 거부, 불합격",
    examples: [
      { en: "Dealing with rejection is part of being a salesperson.", kr: "거절을 견디는 것도 영업 사원 일의 일부예요." },
      { en: "I got a rejection email from the company today.", kr: "오늘 그 회사에서 불합격 이메일을 받았어요." }
    ]
  },
  {
    id: "L4-590",
    word: "shuttle",
    meaning: "셔틀, 왕복 운행 차량",
    examples: [
      { en: "The hotel offers a free shuttle to the airport.", kr: "호텔에서 공항까지 무료 셔틀을 운행해요." },
      { en: "A shuttle bus runs between the parking lot and the stadium.", kr: "주차장과 경기장 사이에 셔틀버스가 다닙니다." }
    ]
  },
  {
    id: "L4-374",
    word: "palliative",
    meaning: "완화하는, 완화 치료의",
    examples: [
      { en: "My grandmother is receiving palliative care at home.", kr: "할머니는 집에서 완화 치료를 받고 계세요." },
      { en: "These painkillers are only palliative; they won't fix the problem.", kr: "이 진통제는 증상만 완화할 뿐 문제를 해결하진 못해요." }
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
    id: "L4-376",
    word: "parochial",
    meaning: "편협한, 시야가 좁은",
    examples: [
      { en: "His views are a bit parochial; he's never left his hometown.", kr: "그 사람 시각은 좀 편협해. 고향을 떠나 본 적이 없거든." },
      { en: "Let's not be so parochial about our own department.", kr: "우리 부서만 생각하는 편협한 태도는 버리자." }
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
    meaning: "단결하다, 통합하다",
    examples: [
      { en: "The tragedy united the whole community.", kr: "그 비극은 지역 사회 전체를 단결시켰습니다." },
      { en: "We need to unite as a team to meet this deadline.", kr: "이 마감을 맞추려면 팀으로 똘똘 뭉쳐야 해요." }
    ]
  },
  {
    id: "L4-595",
    word: "adverse",
    meaning: "부정적인, 불리한, 해로운",
    examples: [
      { en: "The medicine may have adverse effects on some patients.", kr: "이 약은 일부 환자에게 해로운 영향을 줄 수 있습니다." },
      { en: "Flights were delayed due to adverse weather conditions.", kr: "악천후로 항공편이 지연됐습니다." }
    ]
  },
  {
    id: "L4-596",
    word: "broker",
    meaning: "중개인, 브로커",
    examples: [
      { en: "We hired a real estate broker to find an office.", kr: "사무실을 구하려고 부동산 중개인을 고용했어요." },
      { en: "My broker advised me to sell the shares.", kr: "제 중개인이 그 주식을 팔라고 조언했어요." }
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
      { en: "The long commute is making his life a misery.", kr: "긴 출퇴근 때문에 그의 삶이 비참해지고 있어요." },
      { en: "The war brought misery to millions of people.", kr: "그 전쟁은 수백만 명에게 고통을 안겼습니다." }
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
    meaning: "전문 분야, 특기, 대표 요리",
    examples: [
      { en: "The chef's specialty is grilled seafood.", kr: "그 셰프의 대표 요리는 해산물 구이예요." },
      { en: "Her specialty is corporate tax law.", kr: "그녀의 전문 분야는 기업 세법이에요." }
    ]
  },
  {
    id: "L4-605",
    word: "trademark",
    meaning: "상표, 트레이드마크",
    examples: [
      { en: "The company registered the logo as a trademark.", kr: "그 회사는 로고를 상표로 등록했습니다." },
      { en: "That big smile is his trademark.", kr: "저 환한 미소가 그의 트레이드마크예요." }
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
      { en: "Please see the attachment for the full report.", kr: "전체 보고서는 첨부 파일을 확인해 주세요." },
      { en: "Kids often form a strong attachment to their teddy bears.", kr: "아이들은 곰 인형에 강한 애착을 갖는 경우가 많아요." }
    ]
  },
  {
    id: "L4-395",
    word: "titular",
    meaning: "명목상의, 제목과 같은 이름의",
    examples: [
      { en: "The titular character only shows up at the very end.", kr: "제목에 나오는 그 인물은 맨 마지막에야 나와." },
      { en: "He's just the titular head; his deputy makes the decisions.", kr: "그는 명목상의 대표일 뿐이고 결정은 부대표가 해." }
    ]
  },
  {
    id: "L4-609",
    word: "consume",
    meaning: "소비하다, 섭취하다, 소모하다",
    examples: [
      { en: "Americans consume a lot of sugar every day.", kr: "미국인들은 매일 많은 설탕을 섭취합니다." },
      { en: "This old fridge consumes too much electricity.", kr: "이 낡은 냉장고는 전기를 너무 많이 소모해요." }
    ]
  },
  {
    id: "L4-610",
    word: "credibility",
    meaning: "신뢰성, 신빙성",
    examples: [
      { en: "Lying to clients will destroy our credibility.", kr: "고객에게 거짓말하면 우리의 신뢰성이 무너질 거예요." },
      { en: "The new evidence gave her story more credibility.", kr: "새 증거 덕분에 그녀의 이야기에 신빙성이 더해졌어요." }
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
      { en: "The new manager is under immense pressure.", kr: "새 매니저는 엄청난 압박을 받고 있어요." },
      { en: "Your support has been of immense help to us.", kr: "여러분의 지원이 저희에게 엄청난 도움이 되었습니다." }
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
      { en: "The train was packed with commuters heading downtown.", kr: "기차는 시내로 향하는 통근자들로 꽉 차 있었어요." },
      { en: "As a daily commuter, I spend two hours on the road.", kr: "매일 출퇴근하는 사람으로서 저는 길에서 두 시간을 보내요." }
    ]
  },
  {
    id: "L5-002",
    word: "acumen",
    meaning: "통찰력, 안목",
    examples: [
      { en: "She's got real business acumen; she always spots trends early.", kr: "그녀는 사업 감각이 진짜 좋아. 항상 트렌드를 일찍 알아채더라." },
      { en: "You need some financial acumen to run your own startup.", kr: "직접 스타트업을 운영하려면 재정적 안목이 좀 있어야 해요." }
    ]
  },
  {
    id: "L5-402",
    word: "duly",
    meaning: "정식으로, 적절히",
    examples: [
      { en: "Your request has been duly noted, and we will respond soon.", kr: "요청 사항은 정식으로 접수되었으며 곧 답변드리겠습니다." },
      { en: "Duly noted. I'll keep that in mind next time.", kr: "잘 알겠어요. 다음번엔 명심할게요." }
    ]
  },
  {
    id: "L5-403",
    word: "fulfillment",
    meaning: "성취감, (주문·약속의) 이행",
    examples: [
      { en: "Volunteering on weekends gives me a real sense of fulfillment.", kr: "주말 봉사활동은 저에게 진정한 성취감을 줘요." },
      { en: "Order fulfillment usually takes two business days.", kr: "주문 처리는 보통 영업일 기준 이틀이 걸립니다." }
    ]
  },
  {
    id: "L5-404",
    word: "inject",
    meaning: "주사하다, (자금·활력 등을) 투입하다",
    examples: [
      { en: "The nurse injected the vaccine into my upper arm.", kr: "간호사가 제 위팔에 백신을 주사했어요." },
      { en: "The new manager injected fresh energy into the team.", kr: "새 매니저가 팀에 새로운 활력을 불어넣었어요." }
    ]
  },
  {
    id: "L5-405",
    word: "outset",
    meaning: "시작, 처음",
    examples: [
      { en: "Let's be clear about the budget from the outset.", kr: "처음부터 예산에 대해 분명히 해 둡시다." },
      { en: "At the outset, nobody expected the project to succeed.", kr: "시작할 때만 해도 아무도 그 프로젝트가 성공할 거라 예상하지 못했어요." }
    ]
  },
  {
    id: "L5-406",
    word: "precursor",
    meaning: "전조, 전신",
    examples: [
      { en: "Chest pain can be a precursor to a heart attack.", kr: "흉통은 심장마비의 전조일 수 있습니다." },
      { en: "This old phone was a precursor to today's smartphones.", kr: "이 옛날 전화기는 오늘날 스마트폰의 전신이었어요." }
    ]
  },
  {
    id: "L5-008",
    word: "apathy",
    meaning: "무관심, 무감각",
    examples: [
      { en: "There's so much apathy about voting among young people.", kr: "젊은 사람들 사이에 투표에 대한 무관심이 정말 심해요." },
      { en: "His apathy toward his own job is driving me crazy.", kr: "자기 일에 대한 그 사람의 무관심 때문에 미치겠어." }
    ]
  },
  {
    id: "L5-407",
    word: "purposely",
    meaning: "일부러, 고의로",
    examples: [
      { en: "I purposely left early to avoid the traffic.", kr: "차 막히는 걸 피하려고 일부러 일찍 나왔어." },
      { en: "He purposely ignored my messages all weekend.", kr: "그는 주말 내내 고의로 내 메시지를 무시했어." }
    ]
  },
  {
    id: "L5-408",
    word: "swarm",
    meaning: "떼, 무리, 떼 지어 몰려들다",
    examples: [
      { en: "A swarm of bees flew out of the old tree.", kr: "오래된 나무에서 벌 떼가 날아 나왔어요." },
      { en: "Reporters swarmed around the CEO after the press conference.", kr: "기자회견이 끝나자 기자들이 CEO 주위로 떼 지어 몰려들었어요." }
    ]
  },
  {
    id: "L5-011",
    word: "arcane",
    meaning: "난해한, 소수만 아는",
    examples: [
      { en: "The tax rules are so arcane that I hired an accountant.", kr: "세금 규정이 너무 난해해서 회계사를 고용했어요." },
      { en: "He knows a lot of arcane trivia about old movies.", kr: "그는 옛날 영화에 관해 아는 사람이 별로 없는 잡지식을 많이 알아요." }
    ]
  },
  {
    id: "L5-012",
    word: "arduous",
    meaning: "힘든, 고된",
    examples: [
      { en: "It was an arduous hike, but the view was worth it.", kr: "힘든 등산이었지만 경치가 그만한 가치가 있었어요." },
      { en: "Moving across the country was a really arduous process.", kr: "나라 반대편으로 이사하는 건 정말 고된 과정이었어." }
    ]
  },
  {
    id: "L5-409",
    word: "ache",
    meaning: "아픔, 통증, 아프다",
    examples: [
      { en: "My back aches after sitting at my desk all day.", kr: "하루 종일 책상에 앉아 있었더니 허리가 아파요." },
      { en: "I woke up with a dull ache in my shoulder.", kr: "어깨가 묵직하게 아픈 채로 잠에서 깼어요." }
    ]
  },
  {
    id: "L5-410",
    word: "collusion",
    meaning: "공모, 결탁",
    examples: [
      { en: "The two companies were fined for price collusion.", kr: "두 회사는 가격 담합으로 벌금을 물었습니다." },
      { en: "Investigators found no evidence of collusion between the officials.", kr: "수사관들은 그 공무원들 사이의 공모 증거를 찾지 못했습니다." }
    ]
  },
  {
    id: "L5-411",
    word: "disbelief",
    meaning: "믿기지 않음, 불신",
    examples: [
      { en: "She stared at the lottery ticket in disbelief.", kr: "그녀는 믿기지 않는다는 듯 복권을 바라봤어요." },
      { en: "Fans shook their heads in disbelief after the final whistle.", kr: "경기 종료 휘슬이 울리자 팬들은 믿을 수 없다는 듯 고개를 저었어요." }
    ]
  },
  {
    id: "L5-412",
    word: "grit",
    meaning: "투지, 근성, 모래알",
    examples: [
      { en: "It takes grit to start your own business.", kr: "자기 사업을 시작하려면 근성이 필요해요." },
      { en: "I've got some grit in my shoe from the beach.", kr: "해변에서 신발에 모래알이 좀 들어갔어." }
    ]
  },
  {
    id: "L5-413",
    word: "horrendous",
    meaning: "끔찍한, 지독한",
    examples: [
      { en: "The traffic on the freeway this morning was horrendous.", kr: "오늘 아침 고속도로 교통 체증은 끔찍했어요." },
      { en: "The hotel charged a horrendous fee for late checkout.", kr: "그 호텔은 늦은 체크아웃에 터무니없는 요금을 물렸어요." }
    ]
  },
  {
    id: "L5-414",
    word: "incompetence",
    meaning: "무능, 무능력",
    examples: [
      { en: "The project failed because of the manager's incompetence.", kr: "그 프로젝트는 관리자의 무능 때문에 실패했어요." },
      { en: "Customers are tired of the airline's incompetence.", kr: "고객들은 그 항공사의 무능함에 지쳤어요." }
    ]
  },
  {
    id: "L5-415",
    word: "lingering",
    meaning: "오래 남아 있는, 가시지 않는",
    examples: [
      { en: "I still have a lingering cough from last week's cold.", kr: "지난주 감기 때문에 아직도 기침이 가시지 않아요." },
      { en: "There were lingering doubts about the new policy.", kr: "새 정책에 대한 의구심이 여전히 남아 있었습니다." }
    ]
  },
  {
    id: "L5-416",
    word: "mundane",
    meaning: "평범한, 일상적인, 재미없는",
    examples: [
      { en: "I spend most of my day on mundane tasks like email.", kr: "저는 하루 대부분을 이메일 같은 일상적인 업무에 써요." },
      { en: "Even mundane chores feel better with good music.", kr: "좋은 음악이 있으면 지루한 집안일도 한결 나아요." }
    ]
  },
  {
    id: "L5-417",
    word: "stale",
    meaning: "(음식이) 오래된, 신선하지 않은, 진부한",
    examples: [
      { en: "The bread has gone stale, so let's make toast.", kr: "빵이 딱딱해졌으니 토스트를 만들자." },
      { en: "His jokes are getting a little stale.", kr: "그 사람 농담은 좀 식상해지고 있어." }
    ]
  },
  {
    id: "L5-418",
    word: "unjust",
    meaning: "부당한, 불공평한",
    examples: [
      { en: "Many people felt the court's decision was unjust.", kr: "많은 사람들이 법원의 판결이 부당하다고 느꼈습니다." },
      { en: "It's unjust to blame her for the team's mistakes.", kr: "팀의 실수를 그녀 탓으로 돌리는 건 부당해요." }
    ]
  },
  {
    id: "L5-419",
    word: "cultivate",
    meaning: "기르다, 재배하다, (관계·능력을) 쌓다",
    examples: [
      { en: "My grandparents cultivate rice and vegetables in the countryside.", kr: "우리 조부모님은 시골에서 쌀과 채소를 재배하세요." },
      { en: "It's important to cultivate good relationships with your clients.", kr: "고객과 좋은 관계를 쌓는 것이 중요해요." }
    ]
  },
  {
    id: "L5-420",
    word: "defy",
    meaning: "거역하다, 무시하다, 불가능하게 하다",
    examples: [
      { en: "The teenager defied his parents and stayed out late.", kr: "그 십대는 부모님 말을 거역하고 밤늦게까지 밖에 있었어요." },
      { en: "The view from the summit defies description.", kr: "정상에서 본 경치는 말로 표현할 수 없을 정도예요." }
    ]
  },
  {
    id: "L5-421",
    word: "devoid",
    meaning: "~이 전혀 없는",
    examples: [
      { en: "The report was devoid of any useful data.", kr: "그 보고서에는 쓸 만한 데이터가 전혀 없었어요." },
      { en: "His voice was completely devoid of emotion.", kr: "그의 목소리에는 감정이 전혀 담겨 있지 않았어요." }
    ]
  },
  {
    id: "L5-746",
    word: "postpone",
    meaning: "미루다, 연기하다",
    examples: [
      { en: "Can we postpone the meeting until Friday?", kr: "회의를 금요일로 미룰 수 있을까요?" },
      { en: "They had to postpone their wedding because of the storm.", kr: "폭풍 때문에 그 사람들 결혼식을 연기해야 했대요." }
    ]
  },
  {
    id: "L5-422",
    word: "disparity",
    meaning: "격차, 차이",
    examples: [
      { en: "There is a huge disparity between rich and poor here.", kr: "이곳은 빈부 격차가 엄청나요." },
      { en: "The study revealed a pay disparity between men and women.", kr: "그 연구는 남녀 간 임금 격차를 드러냈습니다." }
    ]
  },
  {
    id: "L5-423",
    word: "extraordinarily",
    meaning: "엄청나게, 대단히, 이례적으로",
    examples: [
      { en: "The new intern is extraordinarily talented.", kr: "새 인턴은 대단히 재능이 뛰어나요." },
      { en: "Housing prices rose extraordinarily fast this year.", kr: "올해 집값이 이례적으로 빠르게 올랐어요." }
    ]
  },
  {
    id: "L5-424",
    word: "lavish",
    meaning: "호화로운, 아낌없는, 아낌없이 주다",
    examples: [
      { en: "They threw a lavish party for their anniversary.", kr: "그들은 기념일에 호화로운 파티를 열었어요." },
      { en: "The boss lavished praise on the team after the launch.", kr: "출시 후 사장님이 팀에 아낌없이 칭찬을 쏟아부었어요." }
    ]
  },
  {
    id: "L5-425",
    word: "miscellaneous",
    meaning: "여러 가지의, 잡다한, 기타의",
    examples: [
      { en: "I keep miscellaneous receipts in this drawer.", kr: "이 서랍에 잡다한 영수증들을 보관해요." },
      { en: "Put those small purchases under miscellaneous expenses.", kr: "그 소소한 구매들은 기타 경비로 처리하세요." }
    ]
  },
  {
    id: "L5-031",
    word: "coercion",
    meaning: "강압, 강제",
    examples: [
      { en: "He says he only signed the contract under coercion.", kr: "그는 강압 때문에 어쩔 수 없이 계약서에 서명했다고 해요." },
      { en: "That's not persuasion, that's coercion.", kr: "그건 설득이 아니라 강압이야." }
    ]
  },
  {
    id: "L5-426",
    word: "reluctance",
    meaning: "꺼림, 마지못해 함",
    examples: [
      { en: "He showed some reluctance to share his salary.", kr: "그는 자기 연봉을 밝히는 걸 좀 꺼렸어요." },
      { en: "Despite her reluctance, she agreed to give the speech.", kr: "내키지 않았지만 그녀는 연설을 하기로 했어요." }
    ]
  },
  {
    id: "L5-427",
    word: "stumble",
    meaning: "발이 걸려 비틀거리다, 우연히 발견하다",
    examples: [
      { en: "I stumbled on the stairs and nearly dropped my coffee.", kr: "계단에서 발을 헛디뎌서 커피를 떨어뜨릴 뻔했어." },
      { en: "We stumbled across a great little cafe downtown.", kr: "시내에서 우연히 괜찮은 작은 카페를 발견했어." }
    ]
  },
  {
    id: "L5-428",
    word: "unnecessarily",
    meaning: "불필요하게, 쓸데없이",
    examples: [
      { en: "The meeting dragged on unnecessarily for two hours.", kr: "회의가 쓸데없이 두 시간이나 늘어졌어요." },
      { en: "Don't make the instructions unnecessarily complicated.", kr: "설명서를 불필요하게 복잡하게 만들지 마세요." }
    ]
  },
  {
    id: "L5-429",
    word: "agile",
    meaning: "민첩한, 기민한, 유연한",
    examples: [
      { en: "Small startups are often more agile than big companies.", kr: "작은 스타트업은 대기업보다 더 기민한 경우가 많아요." },
      { en: "The cat is so agile that it can jump onto the fridge.", kr: "그 고양이는 너무 민첩해서 냉장고 위로도 뛰어올라요." }
    ]
  },
  {
    id: "L5-430",
    word: "commonplace",
    meaning: "흔한, 아주 평범한",
    examples: [
      { en: "Working from home has become commonplace since the pandemic.", kr: "팬데믹 이후 재택근무가 흔한 일이 되었습니다." },
      { en: "Delays like this are commonplace at this airport.", kr: "이런 지연은 이 공항에서 흔해요." }
    ]
  },
  {
    id: "L5-747",
    word: "annoy",
    meaning: "짜증 나게 하다, 귀찮게 하다",
    examples: [
      { en: "It really annoys me when people cut in line.", kr: "사람들이 새치기하면 진짜 짜증 나요." },
      { en: "Stop annoying your brother and finish your homework.", kr: "동생 그만 귀찮게 하고 숙제 끝내." }
    ]
  },
  {
    id: "L5-431",
    word: "confidently",
    meaning: "자신 있게, 확신을 갖고",
    examples: [
      { en: "She walked confidently into the job interview.", kr: "그녀는 자신 있게 면접장으로 걸어 들어갔어요." },
      { en: "I can confidently say this is our best product yet.", kr: "이것이 지금까지 우리 최고의 제품이라고 자신 있게 말할 수 있어요." }
    ]
  },
  {
    id: "L5-432",
    word: "heartbroken",
    meaning: "비통한, 마음이 아픈",
    examples: [
      { en: "She was heartbroken when her dog passed away.", kr: "그녀는 강아지가 세상을 떠났을 때 몹시 비통해했어요." },
      { en: "The players were heartbroken after losing the final.", kr: "선수들은 결승전에서 지고 나서 마음이 찢어졌어요." }
    ]
  },
  {
    id: "L5-433",
    word: "indefinite",
    meaning: "무기한의, 불확실한",
    examples: [
      { en: "The factory has been closed for an indefinite period.", kr: "그 공장은 무기한 문을 닫은 상태입니다." },
      { en: "He's on indefinite leave until his health improves.", kr: "그는 건강이 나아질 때까지 무기한 휴가 중이에요." }
    ]
  },
  {
    id: "L5-041",
    word: "dearth",
    meaning: "부족, 결핍",
    examples: [
      { en: "There's a real dearth of good restaurants around here.", kr: "이 근처엔 괜찮은 식당이 정말 부족해." },
      { en: "There's no dearth of opinions in this office.", kr: "이 사무실엔 의견이 부족할 일은 없어요." }
    ]
  },
  {
    id: "L5-434",
    word: "reputable",
    meaning: "평판이 좋은, 믿을 만한",
    examples: [
      { en: "Always buy used cars from a reputable dealer.", kr: "중고차는 항상 믿을 만한 딜러에게서 사세요." },
      { en: "She works for a reputable law firm in the city.", kr: "그녀는 시내에 있는 평판 좋은 로펌에서 일해요." }
    ]
  },
  {
    id: "L5-435",
    word: "spacious",
    meaning: "널찍한, 넓은",
    examples: [
      { en: "Our new apartment has a spacious living room.", kr: "우리 새 아파트는 거실이 널찍해요." },
      { en: "The SUV is spacious enough for the whole family.", kr: "그 SUV는 온 가족이 타기에 충분히 넓어요." }
    ]
  },
  {
    id: "L5-044",
    word: "deference",
    meaning: "존중, 경의",
    examples: [
      { en: "I kept quiet out of deference to my boss.", kr: "상사를 존중하는 뜻에서 아무 말 안 했어요." },
      { en: "In deference to my parents, we had a small wedding.", kr: "부모님 뜻을 존중해서 우리는 결혼식을 작게 했어요." }
    ]
  },
  {
    id: "L5-436",
    word: "vitality",
    meaning: "활력, 생명력",
    examples: [
      { en: "Regular exercise keeps my grandmother full of vitality.", kr: "규칙적인 운동 덕분에 할머니는 활력이 넘치세요." },
      { en: "New businesses brought vitality back to the old neighborhood.", kr: "새 가게들이 그 오래된 동네에 활력을 되찾아 주었어요." }
    ]
  },
  {
    id: "L5-437",
    word: "bribery",
    meaning: "뇌물 수수, 뇌물 공여",
    examples: [
      { en: "The mayor was arrested on charges of bribery.", kr: "시장은 뇌물 수수 혐의로 체포되었습니다." },
      { en: "Our company has a strict policy against bribery.", kr: "우리 회사는 뇌물 제공에 대해 엄격한 방침을 갖고 있어요." }
    ]
  },
  {
    id: "L5-438",
    word: "culprit",
    meaning: "범인, (문제의) 원인",
    examples: [
      { en: "Police are still searching for the culprit.", kr: "경찰은 아직 범인을 찾고 있습니다." },
      { en: "Sugar is the main culprit behind my weight gain.", kr: "설탕이 내 체중 증가의 주범이야." }
    ]
  },
  {
    id: "L5-439",
    word: "entrepreneurial",
    meaning: "기업가의, 기업가 정신이 있는",
    examples: [
      { en: "She has a strong entrepreneurial spirit.", kr: "그녀는 기업가 정신이 강해요." },
      { en: "The city offers support for entrepreneurial young people.", kr: "그 시는 창업에 뜻이 있는 청년들을 지원합니다." }
    ]
  },
  {
    id: "L5-440",
    word: "extravagant",
    meaning: "낭비하는, 사치스러운, 과도한",
    examples: [
      { en: "Buying a new car every year is too extravagant.", kr: "매년 새 차를 사는 건 너무 사치스러워." },
      { en: "The company made extravagant promises it couldn't keep.", kr: "그 회사는 지키지도 못할 과도한 약속을 했어요." }
    ]
  },
  {
    id: "L5-441",
    word: "peril",
    meaning: "위험, 위태로움",
    examples: [
      { en: "The storm put the small fishing boats in peril.", kr: "폭풍 때문에 작은 어선들이 위험에 처했습니다." },
      { en: "Ignore customer feedback at your peril.", kr: "고객 의견을 무시하면 위험을 자초하는 거예요." }
    ]
  },
  {
    id: "L5-442",
    word: "professionalism",
    meaning: "전문성, 프로 의식",
    examples: [
      { en: "We appreciate your professionalism throughout the project.", kr: "프로젝트 내내 보여 주신 프로 의식에 감사드립니다." },
      { en: "Being late to client meetings shows a lack of professionalism.", kr: "고객 미팅에 늦는 건 프로 의식이 부족하다는 뜻이에요." }
    ]
  },
  {
    id: "L5-443",
    word: "futile",
    meaning: "소용없는, 헛된",
    examples: [
      { en: "It's futile to argue with him when he's angry.", kr: "그가 화났을 때 논쟁하는 건 소용없어." },
      { en: "Their efforts to save the old theater proved futile.", kr: "오래된 극장을 살리려던 그들의 노력은 헛수고로 끝났어요." }
    ]
  },
  {
    id: "L5-444",
    word: "negligible",
    meaning: "무시해도 될 정도의, 미미한",
    examples: [
      { en: "The difference in price between the two is negligible.", kr: "둘 사이의 가격 차이는 미미해요." },
      { en: "The side effects of this medicine are negligible.", kr: "이 약의 부작용은 무시해도 될 정도예요." }
    ]
  },
  {
    id: "L5-054",
    word: "dissonance",
    meaning: "불협화음, 불일치",
    examples: [
      { en: "There's a weird dissonance between what he says and what he does.", kr: "그 사람은 말과 행동이 묘하게 안 맞아." },
      { en: "The song uses dissonance to build tension.", kr: "그 노래는 불협화음을 써서 긴장감을 만들어요." }
    ]
  },
  {
    id: "L5-445",
    word: "punitive",
    meaning: "처벌의, 징벌적인, 가혹한",
    examples: [
      { en: "The court awarded punitive damages to the victims.", kr: "법원은 피해자들에게 징벌적 손해배상을 판결했습니다." },
      { en: "Many small businesses complain about punitive tax rates.", kr: "많은 소상공인들이 가혹한 세율에 대해 불만을 제기합니다." }
    ]
  },
  {
    id: "L5-446",
    word: "scramble",
    meaning: "허둥지둥 서두르다, 앞다투어 ~하다, (달걀을) 휘저어 익히다",
    examples: [
      { en: "Everyone scrambled to finish the report before the deadline.", kr: "모두가 마감 전에 보고서를 끝내려고 허둥지둥했어요." },
      { en: "I'll scramble some eggs for breakfast.", kr: "아침으로 스크램블 에그 좀 만들게." }
    ]
  },
  {
    id: "L5-447",
    word: "troublesome",
    meaning: "골치 아픈, 성가신",
    examples: [
      { en: "This printer has been troublesome since we bought it.", kr: "이 프린터는 산 뒤로 계속 말썽이에요." },
      { en: "Dealing with a troublesome client can be exhausting.", kr: "골치 아픈 고객을 상대하는 건 정말 지칠 수 있어요." }
    ]
  },
  {
    id: "L5-448",
    word: "adversity",
    meaning: "역경, 고난",
    examples: [
      { en: "She stayed positive in the face of adversity.", kr: "그녀는 역경 속에서도 긍정적인 태도를 유지했어요." },
      { en: "Overcoming adversity made our team stronger.", kr: "고난을 극복하면서 우리 팀은 더 강해졌어요." }
    ]
  },
  {
    id: "L5-449",
    word: "inquire",
    meaning: "문의하다, 묻다",
    examples: [
      { en: "I'm calling to inquire about the apartment for rent.", kr: "임대 아파트에 대해 문의하려고 전화드렸어요." },
      { en: "Please inquire at the front desk for more details.", kr: "자세한 사항은 프런트 데스크에 문의하세요." }
    ]
  },
  {
    id: "L5-450",
    word: "colossal",
    meaning: "거대한, 엄청난",
    examples: [
      { en: "Canceling the event was a colossal waste of money.", kr: "그 행사를 취소한 건 엄청난 돈 낭비였어요." },
      { en: "A colossal statue stands at the entrance of the park.", kr: "공원 입구에 거대한 동상이 서 있어요." }
    ]
  },
  {
    id: "L5-451",
    word: "curfew",
    meaning: "통행금지, 귀가 시간",
    examples: [
      { en: "My parents set a strict curfew of ten o'clock.", kr: "부모님은 귀가 시간을 밤 열 시로 엄격하게 정하셨어." },
      { en: "The city imposed a nighttime curfew after the riots.", kr: "폭동 이후 시는 야간 통행금지를 시행했습니다." }
    ]
  },
  {
    id: "L5-452",
    word: "delusion",
    meaning: "망상, 착각",
    examples: [
      { en: "He's under the delusion that he never makes mistakes.", kr: "그는 자기가 절대 실수를 안 한다고 착각하고 있어요." },
      { en: "Some patients suffer from delusions and hallucinations.", kr: "일부 환자들은 망상과 환각에 시달립니다." }
    ]
  },
  {
    id: "L5-453",
    word: "designate",
    meaning: "지정하다, 지명하다",
    examples: [
      { en: "This area is designated for smoking only.", kr: "이 구역은 흡연 전용으로 지정되어 있어요." },
      { en: "The team designated Sarah as the project leader.", kr: "팀은 사라를 프로젝트 리더로 지명했어요." }
    ]
  },
  {
    id: "L5-454",
    word: "juggle",
    meaning: "(여러 일을) 동시에 해내다, 저글링하다",
    examples: [
      { en: "Many parents juggle full-time jobs and childcare.", kr: "많은 부모들이 풀타임 직장과 육아를 동시에 해내고 있어요." },
      { en: "The street performer juggled five balls at once.", kr: "거리 공연자가 공 다섯 개로 한꺼번에 저글링을 했어요." }
    ]
  },
  {
    id: "L5-455",
    word: "inclination",
    meaning: "성향, 의향, ~하고 싶은 마음",
    examples: [
      { en: "I have no inclination to go out in this rain.", kr: "이렇게 비 오는데 나가고 싶은 마음이 전혀 없어." },
      { en: "Follow your natural inclination when choosing a career.", kr: "진로를 정할 때는 타고난 성향을 따르세요." }
    ]
  },
  {
    id: "L5-456",
    word: "interpersonal",
    meaning: "대인 관계의",
    examples: [
      { en: "Good interpersonal skills are essential in customer service.", kr: "고객 서비스에서는 좋은 대인 관계 능력이 필수예요." },
      { en: "Most workplace problems come from interpersonal conflicts.", kr: "직장 내 문제 대부분은 대인 갈등에서 비롯돼요." }
    ]
  },
  {
    id: "L5-457",
    word: "lessen",
    meaning: "줄이다, 완화하다",
    examples: [
      { en: "Stretching can lessen the risk of injury.", kr: "스트레칭은 부상 위험을 줄일 수 있어요." },
      { en: "Nothing could lessen the pain of losing her job.", kr: "그 무엇도 직장을 잃은 그녀의 아픔을 덜어 줄 수 없었어요." }
    ]
  },
  {
    id: "L5-458",
    word: "originate",
    meaning: "비롯되다, 유래하다, 시작되다",
    examples: [
      { en: "The custom originated in a small village in Italy.", kr: "그 풍습은 이탈리아의 작은 마을에서 유래했어요." },
      { en: "The fire originated in the kitchen of the restaurant.", kr: "화재는 식당 주방에서 시작되었습니다." }
    ]
  },
  {
    id: "L5-459",
    word: "scarcity",
    meaning: "부족, 결핍",
    examples: [
      { en: "The scarcity of rain has hurt local farmers.", kr: "비가 부족해서 지역 농민들이 피해를 입었습니다." },
      { en: "Scarcity of skilled workers is pushing wages higher.", kr: "숙련된 인력 부족으로 임금이 오르고 있습니다." }
    ]
  },
  {
    id: "L5-460",
    word: "cosmopolitan",
    meaning: "국제적인, 세계적인, 다양한 문화가 섞인",
    examples: [
      { en: "Seoul has become a truly cosmopolitan city.", kr: "서울은 진정한 국제도시가 되었어요." },
      { en: "She has a cosmopolitan outlook from living in five countries.", kr: "그녀는 다섯 나라에서 살아서 세계적인 안목을 갖고 있어요." }
    ]
  },
  {
    id: "L5-071",
    word: "expedient",
    meaning: "편의적인, 당장 유리한",
    examples: [
      { en: "It was expedient to just pay the fine and move on.", kr: "그냥 벌금 내고 넘어가는 게 당장은 편했어요." },
      { en: "Cutting corners might be expedient, but it's risky.", kr: "대충 하는 게 당장은 편할지 몰라도 위험해요." }
    ]
  },
  {
    id: "L5-461",
    word: "deductible",
    meaning: "공제 가능한, (보험의) 자기부담금",
    examples: [
      { en: "Is this business lunch tax deductible?", kr: "이 업무 점심 식사는 세금 공제가 되나요?" },
      { en: "My car insurance has a five-hundred-dollar deductible.", kr: "제 자동차 보험은 자기부담금이 500달러예요." }
    ]
  },
  {
    id: "L5-073",
    word: "fallacy",
    meaning: "오류, 잘못된 생각",
    examples: [
      { en: "It's a fallacy that you need a degree to succeed.", kr: "성공하려면 학위가 꼭 있어야 한다는 건 잘못된 생각이에요." },
      { en: "His whole argument is based on a logical fallacy.", kr: "그 사람 주장은 전부 논리적 오류에 기반하고 있어." }
    ]
  },
  {
    id: "L5-462",
    word: "intrigue",
    meaning: "호기심을 불러일으키다, 음모",
    examples: [
      { en: "The book's title intrigued me, so I bought it.", kr: "그 책의 제목이 호기심을 자극해서 샀어요." },
      { en: "The movie is full of political intrigue and betrayal.", kr: "그 영화는 정치적 음모와 배신으로 가득해요." }
    ]
  },
  {
    id: "L5-463",
    word: "plentiful",
    meaning: "풍부한, 많은",
    examples: [
      { en: "Fresh fruit is plentiful at the market in summer.", kr: "여름에는 시장에 신선한 과일이 풍부해요." },
      { en: "Jobs in the tech industry used to be plentiful.", kr: "예전에는 기술 업계에 일자리가 많았어요." }
    ]
  },
  {
    id: "L5-464",
    word: "undesirable",
    meaning: "바람직하지 않은, 원치 않는",
    examples: [
      { en: "The medicine may cause some undesirable side effects.", kr: "그 약은 원치 않는 부작용을 일으킬 수 있어요." },
      { en: "Raising prices now could have undesirable consequences.", kr: "지금 가격을 올리면 바람직하지 않은 결과가 생길 수 있어요." }
    ]
  },
  {
    id: "L5-465",
    word: "exaggerate",
    meaning: "과장하다",
    examples: [
      { en: "Don't exaggerate; it wasn't that bad.", kr: "과장하지 마, 그렇게 나쁘진 않았어." },
      { en: "The ad greatly exaggerated the benefits of the product.", kr: "그 광고는 제품의 효과를 크게 과장했어요." }
    ]
  },
  {
    id: "L5-466",
    word: "ingenious",
    meaning: "기발한, 독창적인",
    examples: [
      { en: "What an ingenious way to save space in a tiny kitchen!", kr: "좁은 주방에서 공간을 아끼는 정말 기발한 방법이네요!" },
      { en: "The engineer came up with an ingenious solution.", kr: "그 엔지니어가 독창적인 해결책을 생각해 냈어요." }
    ]
  },
  {
    id: "L5-079",
    word: "fidelity",
    meaning: "충실함, 정절, (음향의) 충실도",
    examples: [
      { en: "Trust and fidelity are the basis of any good marriage.", kr: "신뢰와 정절은 모든 좋은 결혼 생활의 기본이에요." },
      { en: "These speakers play music with amazing fidelity.", kr: "이 스피커는 음악을 놀라울 정도로 원음 그대로 들려줘요." }
    ]
  },
  {
    id: "L5-467",
    word: "outspoken",
    meaning: "거침없이 말하는, 솔직한",
    examples: [
      { en: "She is an outspoken critic of the new policy.", kr: "그녀는 새 정책을 거침없이 비판하는 사람이에요." },
      { en: "My uncle is very outspoken about politics at dinner.", kr: "우리 삼촌은 저녁 식사 때 정치 얘기를 아주 직설적으로 하세요." }
    ]
  },
  {
    id: "L5-468",
    word: "unavoidable",
    meaning: "불가피한, 피할 수 없는",
    examples: [
      { en: "Some delays are unavoidable during the holiday season.", kr: "연휴 시즌에는 어느 정도 지연이 불가피해요." },
      { en: "Layoffs seemed unavoidable after the company lost its biggest client.", kr: "회사가 최대 고객을 잃은 뒤 정리해고는 피할 수 없어 보였어요." }
    ]
  },
  {
    id: "L5-469",
    word: "deem",
    meaning: "~로 여기다, 간주하다",
    examples: [
      { en: "The building was deemed unsafe after the earthquake.", kr: "그 건물은 지진 후 안전하지 않은 것으로 판정되었습니다." },
      { en: "Take whatever action you deem necessary.", kr: "필요하다고 생각하는 조치는 무엇이든 취하세요." }
    ]
  },
  {
    id: "L5-470",
    word: "divisive",
    meaning: "분열을 일으키는, 의견이 갈리는",
    examples: [
      { en: "Immigration remains a divisive issue in many countries.", kr: "이민은 많은 나라에서 여전히 분열을 일으키는 문제입니다." },
      { en: "The movie's ending was surprisingly divisive among fans.", kr: "그 영화의 결말은 팬들 사이에서 의외로 호불호가 갈렸어요." }
    ]
  },
  {
    id: "L5-471",
    word: "hindsight",
    meaning: "지나고 나서 깨달음, 뒤늦은 깨달음",
    examples: [
      { en: "In hindsight, I should have saved more money.", kr: "지나고 보니 돈을 더 모아 뒀어야 했어요." },
      { en: "With hindsight, we could have avoided the whole mess.", kr: "지나고 나서 보니 그 난리를 다 피할 수 있었겠더라." }
    ]
  },
  {
    id: "L5-472",
    word: "ludicrous",
    meaning: "터무니없는, 어처구니없는",
    examples: [
      { en: "Paying ten dollars for a bottle of water is ludicrous.", kr: "물 한 병에 10달러를 내는 건 터무니없어." },
      { en: "That's a ludicrous excuse for missing the meeting.", kr: "회의에 빠진 이유치고는 어처구니없는 변명이네요." }
    ]
  },
  {
    id: "L5-473",
    word: "perseverance",
    meaning: "인내, 끈기",
    examples: [
      { en: "Learning a new language takes time and perseverance.", kr: "새로운 언어를 배우려면 시간과 끈기가 필요해요." },
      { en: "Her perseverance finally paid off with a promotion.", kr: "그녀의 끈기는 결국 승진으로 결실을 맺었어요." }
    ]
  },
  {
    id: "L5-474",
    word: "pricey",
    meaning: "값비싼, 비싼",
    examples: [
      { en: "The restaurant is a bit pricey, but the food is amazing.", kr: "그 식당은 좀 비싸지만 음식이 끝내줘요." },
      { en: "Hotels near the beach get pricey in the summer.", kr: "해변 근처 호텔은 여름에 비싸져요." }
    ]
  },
  {
    id: "L5-475",
    word: "sincerity",
    meaning: "진심, 성실",
    examples: [
      { en: "I never doubted the sincerity of his apology.", kr: "나는 그의 사과가 진심이라는 걸 의심한 적 없어." },
      { en: "Customers can sense sincerity in good service.", kr: "고객들은 좋은 서비스에서 진심을 느낄 수 있어요." }
    ]
  },
  {
    id: "L5-476",
    word: "undeniable",
    meaning: "부인할 수 없는, 명백한",
    examples: [
      { en: "Her talent for design is undeniable.", kr: "그녀의 디자인 재능은 부인할 수 없어요." },
      { en: "There's undeniable evidence that the plan is working.", kr: "그 계획이 효과가 있다는 명백한 증거가 있어요." }
    ]
  },
  {
    id: "L5-477",
    word: "exponential",
    meaning: "기하급수적인",
    examples: [
      { en: "The app has seen exponential growth this year.", kr: "그 앱은 올해 기하급수적인 성장을 보였어요." },
      { en: "Costs rise at an exponential rate as the project expands.", kr: "프로젝트가 커질수록 비용이 기하급수적으로 늘어나요." }
    ]
  },
  {
    id: "L5-478",
    word: "grudge",
    meaning: "원한, 앙심",
    examples: [
      { en: "He still holds a grudge against his old boss.", kr: "그는 아직도 예전 상사에게 앙심을 품고 있어요." },
      { en: "Life is too short to hold grudges.", kr: "원한을 품고 살기엔 인생이 너무 짧아." }
    ]
  },
  {
    id: "L5-479",
    word: "invoke",
    meaning: "(권리 등을) 행사하다, 들먹이다, 발동하다",
    examples: [
      { en: "You can always invoke your right to talk to a lawyer.", kr: "변호사와 얘기할 권리는 언제든지 행사할 수 있어요." },
      { en: "He always invokes his years of experience to win arguments.", kr: "그는 말싸움에서 이기려고 늘 자기 경력을 들먹여." }
    ]
  },
  {
    id: "L5-480",
    word: "optimize",
    meaning: "최적화하다",
    examples: [
      { en: "We need to optimize our website for mobile users.", kr: "모바일 사용자를 위해 웹사이트를 최적화해야 해요." },
      { en: "This app helps you optimize your daily schedule.", kr: "이 앱은 하루 일정을 최적화하는 데 도움을 줘요." }
    ]
  },
  {
    id: "L5-094",
    word: "hubris",
    meaning: "오만, 자만",
    examples: [
      { en: "His hubris made him ignore everyone's warnings.", kr: "그는 오만해서 모두의 경고를 무시했어요." },
      { en: "Skipping the rehearsal was pure hubris.", kr: "리허설을 건너뛴 건 순전히 자만이었어." }
    ]
  },
  {
    id: "L5-481",
    word: "persuasion",
    meaning: "설득, 설득력",
    examples: [
      { en: "After some persuasion, she agreed to join us.", kr: "약간의 설득 끝에 그녀는 우리와 함께하기로 했어요." },
      { en: "Good salespeople master the art of persuasion.", kr: "훌륭한 영업 사원은 설득의 기술에 통달해 있어요." }
    ]
  },
  {
    id: "L5-482",
    word: "precedence",
    meaning: "우선, 우선권",
    examples: [
      { en: "Safety always takes precedence over speed.", kr: "안전이 언제나 속도보다 우선입니다." },
      { en: "Family matters take precedence over work for me.", kr: "저에게는 가족 일이 일보다 우선이에요." }
    ]
  },
  {
    id: "L5-483",
    word: "forfeit",
    meaning: "몰수당하다, 박탈당하다, 포기하다",
    examples: [
      { en: "If you cancel late, you'll forfeit your deposit.", kr: "늦게 취소하시면 보증금을 돌려받지 못합니다." },
      { en: "The team had to forfeit the game due to too few players.", kr: "그 팀은 선수가 부족해 경기를 기권해야 했어요." }
    ]
  },
  {
    id: "L5-484",
    word: "redundancy",
    meaning: "불필요한 중복, (영국) 정리해고",
    examples: [
      { en: "We cut redundancy in the report to make it shorter.", kr: "보고서를 줄이려고 중복된 부분을 덜어냈어요." },
      { en: "Hundreds of workers face redundancy after the merger.", kr: "합병 이후 수백 명의 직원이 정리해고 위기에 놓였습니다." }
    ]
  },
  {
    id: "L5-485",
    word: "treacherous",
    meaning: "위험한, 믿을 수 없는, 배신하는",
    examples: [
      { en: "The icy roads were treacherous this morning.", kr: "오늘 아침 빙판길은 정말 위험했어요." },
      { en: "He turned out to be a treacherous business partner.", kr: "그는 믿을 수 없는 사업 파트너로 드러났어요." }
    ]
  },
  {
    id: "L5-486",
    word: "uplifting",
    meaning: "기분을 북돋아 주는, 희망을 주는",
    examples: [
      { en: "It was an uplifting story about a small-town hero.", kr: "작은 마을 영웅에 관한 희망을 주는 이야기였어요." },
      { en: "I need some uplifting music after this long week.", kr: "이렇게 긴 한 주를 보낸 뒤엔 기분을 북돋아 줄 음악이 필요해." }
    ]
  }
];

const wordsLevel5_Part2 = [
  {
    id: "L5-487",
    word: "bolster",
    meaning: "강화하다, 북돋우다",
    examples: [
      { en: "The good news bolstered investor confidence.", kr: "그 좋은 소식이 투자자 신뢰를 강화했습니다." },
      { en: "Winning the first game bolstered the team's morale.", kr: "첫 경기에서 이긴 것이 팀의 사기를 북돋웠어요." }
    ]
  },
  {
    id: "L5-488",
    word: "cohesive",
    meaning: "결속력 있는, 응집력 있는, 일관된",
    examples: [
      { en: "Our team is small but very cohesive.", kr: "우리 팀은 작지만 결속력이 매우 강해요." },
      { en: "The essay needs a more cohesive structure.", kr: "그 에세이는 좀 더 일관된 구조가 필요해요." }
    ]
  },
  {
    id: "L5-489",
    word: "entrenched",
    meaning: "확고한, 뿌리 깊은",
    examples: [
      { en: "These habits are deeply entrenched and hard to change.", kr: "이 습관들은 뿌리가 깊어서 바꾸기 어려워요." },
      { en: "The company faces entrenched competitors in that market.", kr: "그 회사는 그 시장에서 확고히 자리 잡은 경쟁사들과 맞서고 있습니다." }
    ]
  },
  {
    id: "L5-490",
    word: "intimidate",
    meaning: "겁주다, 위협하다",
    examples: [
      { en: "Don't let the size of the project intimidate you.", kr: "프로젝트 규모에 겁먹지 마세요." },
      { en: "He tried to intimidate the witness into staying quiet.", kr: "그는 증인을 위협해서 입을 다물게 하려고 했어요." }
    ]
  },
  {
    id: "L5-491",
    word: "lousy",
    meaning: "형편없는, 엉망인",
    examples: [
      { en: "The weather was lousy during our whole vacation.", kr: "휴가 내내 날씨가 엉망이었어." },
      { en: "I feel lousy today, so I'm staying home.", kr: "오늘 몸이 영 안 좋아서 집에 있을래." }
    ]
  },
  {
    id: "L5-492",
    word: "unethical",
    meaning: "비윤리적인",
    examples: [
      { en: "Sharing customer data without consent is unethical.", kr: "동의 없이 고객 데이터를 공유하는 것은 비윤리적이에요." },
      { en: "The reporter exposed the company's unethical practices.", kr: "그 기자는 회사의 비윤리적인 관행을 폭로했습니다." }
    ]
  },
  {
    id: "L5-493",
    word: "attentive",
    meaning: "주의 깊은, 세심한, 배려하는",
    examples: [
      { en: "The staff at the hotel were very attentive.", kr: "그 호텔 직원들은 매우 세심했어요." },
      { en: "Be attentive to what your clients actually need.", kr: "고객들이 실제로 필요로 하는 것에 주의를 기울이세요." }
    ]
  },
  {
    id: "L5-494",
    word: "ballpark",
    meaning: "대략적인 (수치), 야구장",
    examples: [
      { en: "Can you give me a ballpark figure for the repairs?", kr: "수리비가 대략 얼마나 될지 알려 주실 수 있나요?" },
      { en: "We took the kids to the ballpark on Saturday.", kr: "토요일에 아이들을 데리고 야구장에 갔어요." }
    ]
  },
  {
    id: "L5-495",
    word: "errand",
    meaning: "심부름, 볼일",
    examples: [
      { en: "I have a few errands to run this afternoon.", kr: "오늘 오후에 볼일이 몇 개 있어요." },
      { en: "Could you do me a quick errand and grab some milk?", kr: "잠깐 심부름 좀 해서 우유 좀 사다 줄래?" }
    ]
  },
  {
    id: "L5-496",
    word: "exhaustive",
    meaning: "철저한, 빠짐없는",
    examples: [
      { en: "We did an exhaustive search but found nothing.", kr: "샅샅이 찾아봤지만 아무것도 발견하지 못했어요." },
      { en: "This is not an exhaustive list of the options.", kr: "이것이 선택지를 빠짐없이 모두 나열한 목록은 아닙니다." }
    ]
  },
  {
    id: "L5-111",
    word: "indiscriminate",
    meaning: "무차별적인, 무분별한",
    examples: [
      { en: "The indiscriminate use of antibiotics is a serious problem.", kr: "항생제를 무분별하게 쓰는 건 심각한 문제예요." },
      { en: "Don't be so indiscriminate about who you give your number to.", kr: "전화번호를 그렇게 무분별하게 아무한테나 주지 마." }
    ]
  },
  {
    id: "L5-497",
    word: "fruitful",
    meaning: "생산적인, 유익한, 성과가 있는",
    examples: [
      { en: "Thank you for a fruitful discussion today.", kr: "오늘 유익한 논의 감사합니다." },
      { en: "The partnership has been fruitful for both companies.", kr: "그 협력은 두 회사 모두에게 성과가 있었어요." }
    ]
  },
  {
    id: "L5-113",
    word: "inept",
    meaning: "서툰, 무능한",
    examples: [
      { en: "I'm totally inept at small talk with strangers.", kr: "난 모르는 사람이랑 스몰토크하는 데 완전 서툴러." },
      { en: "The company's inept response made the problem worse.", kr: "회사의 서툰 대응 때문에 문제가 더 커졌어요." }
    ]
  },
  {
    id: "L5-114",
    word: "infamous",
    meaning: "악명 높은",
    examples: [
      { en: "This intersection is infamous for its traffic jams.", kr: "이 교차로는 교통 체증으로 악명 높아요." },
      { en: "Our boss is infamous for his endless meetings.", kr: "우리 사장님은 끝없는 회의로 악명이 높아." }
    ]
  },
  {
    id: "L5-498",
    word: "hastily",
    meaning: "급히, 서둘러, 성급하게",
    examples: [
      { en: "He hastily packed his bag and ran for the bus.", kr: "그는 급히 가방을 싸서 버스를 타러 뛰어갔어요." },
      { en: "The decision was made too hastily.", kr: "그 결정은 너무 성급하게 내려졌어요." }
    ]
  },
  {
    id: "L5-499",
    word: "reassure",
    meaning: "안심시키다",
    examples: [
      { en: "The doctor reassured me that it was nothing serious.", kr: "의사 선생님은 심각한 게 아니라며 저를 안심시켜 주셨어요." },
      { en: "The CEO tried to reassure employees about their jobs.", kr: "CEO는 일자리 문제로 직원들을 안심시키려 했습니다." }
    ]
  },
  {
    id: "L5-117",
    word: "insatiable",
    meaning: "채울 수 없는, 끝없는",
    examples: [
      { en: "My kids have an insatiable appetite for snacks.", kr: "우리 애들은 간식 욕심이 끝도 없어요." },
      { en: "She has an insatiable curiosity about everything.", kr: "그녀는 모든 것에 대한 호기심이 끝이 없어." }
    ]
  },
  {
    id: "L5-500",
    word: "omission",
    meaning: "누락, 빠뜨림",
    examples: [
      { en: "Sorry for the omission of your name from the list.", kr: "명단에서 성함을 빠뜨려 죄송합니다." },
      { en: "The report's biggest omission was the cost estimate.", kr: "그 보고서에서 가장 크게 누락된 것은 비용 추정이었어요." }
    ]
  },
  {
    id: "L5-119",
    word: "insidious",
    meaning: "서서히 해를 끼치는, 은밀한",
    examples: [
      { en: "Stress can have an insidious effect on your health.", kr: "스트레스는 건강을 서서히 갉아먹을 수 있어요." },
      { en: "The problem was insidious; nobody noticed it for months.", kr: "그 문제는 은밀하게 진행돼서 몇 달 동안 아무도 몰랐어." }
    ]
  },
  {
    id: "L5-501",
    word: "ascertain",
    meaning: "확인하다, 알아내다",
    examples: [
      { en: "Police are trying to ascertain the cause of the accident.", kr: "경찰은 사고 원인을 확인하려 하고 있습니다." },
      { en: "We need to ascertain whether the client is still interested.", kr: "고객이 여전히 관심이 있는지 확인해야 해요." }
    ]
  },
  {
    id: "L5-121",
    word: "intractable",
    meaning: "다루기 힘든, 해결하기 어려운",
    examples: [
      { en: "This bug has been an intractable problem for weeks.", kr: "이 버그는 몇 주째 해결이 안 되는 골칫거리예요." },
      { en: "Traffic in this city seems like an intractable problem.", kr: "이 도시 교통 문제는 해결이 안 될 것 같아." }
    ]
  },
  {
    id: "L5-502",
    word: "markedly",
    meaning: "현저하게, 눈에 띄게",
    examples: [
      { en: "Sales have improved markedly since the redesign.", kr: "디자인을 바꾼 뒤로 매출이 현저하게 개선됐어요." },
      { en: "The two brothers have markedly different personalities.", kr: "그 두 형제는 성격이 눈에 띄게 달라요." }
    ]
  },
  {
    id: "L5-123",
    word: "intricate",
    meaning: "복잡한, 뒤얽힌",
    examples: [
      { en: "Look at the intricate details on this old clock.", kr: "이 오래된 시계의 정교한 디테일 좀 봐." },
      { en: "The plot was so intricate that I got lost halfway.", kr: "줄거리가 너무 복잡해서 중간에 헷갈렸어요." }
    ]
  },
  {
    id: "L5-503",
    word: "proficient",
    meaning: "능숙한, 숙달된",
    examples: [
      { en: "Applicants must be proficient in English and Excel.", kr: "지원자는 영어와 엑셀에 능숙해야 합니다." },
      { en: "She became proficient at the piano in just two years.", kr: "그녀는 단 2년 만에 피아노에 능숙해졌어요." }
    ]
  },
  {
    id: "L5-504",
    word: "adamant",
    meaning: "단호한, 확고한",
    examples: [
      { en: "She was adamant that she had locked the door.", kr: "그녀는 문을 잠갔다고 단호하게 말했어요." },
      { en: "The CEO is adamant about not raising prices.", kr: "CEO는 가격을 올리지 않겠다는 입장이 확고해요." }
    ]
  },
  {
    id: "L5-505",
    word: "interchangeable",
    meaning: "교체할 수 있는, 서로 바꿔 쓸 수 있는",
    examples: [
      { en: "These two words are not completely interchangeable.", kr: "이 두 단어는 완전히 바꿔 쓸 수 있는 건 아니에요." },
      { en: "The parts are interchangeable between the old and new models.", kr: "그 부품들은 구형과 신형 모델 간에 교체해 쓸 수 있어요." }
    ]
  },
  {
    id: "L5-506",
    word: "predominant",
    meaning: "두드러진, 지배적인, 주된",
    examples: [
      { en: "Blue is the predominant color in their logo.", kr: "파란색이 그들 로고의 주된 색이에요." },
      { en: "Anxiety was the predominant feeling before the exam.", kr: "시험 전에는 불안감이 가장 지배적인 감정이었어요." }
    ]
  },
  {
    id: "L5-507",
    word: "tweak",
    meaning: "약간 수정하다, 미세 조정",
    examples: [
      { en: "Let me tweak the slides before the meeting.", kr: "회의 전에 슬라이드를 조금 손볼게요." },
      { en: "A small tweak to the recipe made it much better.", kr: "레시피를 살짝 바꿨더니 훨씬 맛있어졌어요." }
    ]
  },
  {
    id: "L5-508",
    word: "impulsive",
    meaning: "충동적인",
    examples: [
      { en: "I regret my impulsive decision to buy those shoes.", kr: "그 신발을 충동적으로 산 게 후회돼." },
      { en: "He's smart but a bit too impulsive with money.", kr: "그는 똑똑하지만 돈 문제에선 좀 너무 충동적이야." }
    ]
  },
  {
    id: "L5-509",
    word: "knack",
    meaning: "요령, 재주",
    examples: [
      { en: "She has a knack for making people feel comfortable.", kr: "그녀는 사람들을 편하게 해 주는 재주가 있어요." },
      { en: "Folding these boxes is easy once you get the knack.", kr: "요령만 익히면 이 상자들 접는 건 쉬워요." }
    ]
  },
  {
    id: "L5-510",
    word: "nuanced",
    meaning: "미묘한 차이를 반영한, 섬세한",
    examples: [
      { en: "The issue is more nuanced than it seems.", kr: "그 문제는 보기보다 더 미묘해요." },
      { en: "Her performance in the film was subtle and nuanced.", kr: "그 영화에서 그녀의 연기는 절제되고 섬세했어요." }
    ]
  },
  {
    id: "L5-511",
    word: "outage",
    meaning: "(전기·서비스의) 정전, 중단",
    examples: [
      { en: "The storm caused a power outage across the city.", kr: "폭풍으로 도시 전역에 정전이 발생했습니다." },
      { en: "Our website was down for hours due to a server outage.", kr: "서버 장애로 우리 웹사이트가 몇 시간 동안 다운됐어요." }
    ]
  },
  {
    id: "L5-512",
    word: "preoccupied",
    meaning: "~에 정신이 팔린, 몰두한",
    examples: [
      { en: "Sorry, I was preoccupied with work and missed your call.", kr: "미안, 일에 정신이 팔려서 전화를 못 받았어." },
      { en: "He seems preoccupied with his health these days.", kr: "그는 요즘 자기 건강 문제에 온통 신경 쓰는 것 같아요." }
    ]
  },
  {
    id: "L5-513",
    word: "revoke",
    meaning: "취소하다, 철회하다, 박탈하다",
    examples: [
      { en: "His driver's license was revoked after the accident.", kr: "사고 이후 그의 운전면허가 취소되었습니다." },
      { en: "The company revoked her access to the system.", kr: "회사는 그녀의 시스템 접근 권한을 박탈했어요." }
    ]
  },
  {
    id: "L5-514",
    word: "dependable",
    meaning: "믿을 수 있는, 신뢰할 만한",
    examples: [
      { en: "We need a dependable car for the long road trip.", kr: "긴 자동차 여행을 위해 믿을 만한 차가 필요해." },
      { en: "Mark is the most dependable person on our team.", kr: "마크는 우리 팀에서 가장 믿음직한 사람이에요." }
    ]
  },
  {
    id: "L5-515",
    word: "manipulative",
    meaning: "조종하려 드는, 교묘하게 이용하는",
    examples: [
      { en: "She realized her ex-boyfriend had been manipulative.", kr: "그녀는 전 남자친구가 자신을 교묘하게 조종해 왔다는 걸 깨달았어요." },
      { en: "Manipulative ads try to make you feel guilty.", kr: "교묘한 광고들은 죄책감을 느끼게 만들려고 해요." }
    ]
  },
  {
    id: "L5-516",
    word: "conducive",
    meaning: "~에 도움이 되는, 좋은",
    examples: [
      { en: "A quiet room is conducive to studying.", kr: "조용한 방은 공부하기에 좋아요." },
      { en: "The office layout is not conducive to teamwork.", kr: "사무실 배치가 팀워크에 도움이 되지 않아요." }
    ]
  },
  {
    id: "L5-138",
    word: "litany",
    meaning: "장황한 목록, 줄줄이 늘어놓는 것",
    examples: [
      { en: "He gave me a litany of excuses for being late.", kr: "그는 늦은 이유로 핑계를 줄줄이 늘어놨어." },
      { en: "She had a whole litany of complaints about the hotel.", kr: "그녀는 그 호텔에 대한 불만을 한가득 늘어놨어요." }
    ]
  },
  {
    id: "L5-517",
    word: "derogatory",
    meaning: "경멸적인, 비하하는",
    examples: [
      { en: "Please avoid using derogatory language in the comments.", kr: "댓글에서 비하하는 표현은 삼가 주세요." },
      { en: "He made a derogatory remark about her accent.", kr: "그는 그녀의 억양에 대해 경멸적인 말을 했어요." }
    ]
  },
  {
    id: "L5-518",
    word: "drawback",
    meaning: "단점, 문제점",
    examples: [
      { en: "The only drawback of this apartment is the noise.", kr: "이 아파트의 유일한 단점은 소음이에요." },
      { en: "Every plan has its benefits and drawbacks.", kr: "모든 계획에는 장점과 단점이 있어요." }
    ]
  },
  {
    id: "L5-519",
    word: "relentlessly",
    meaning: "끈질기게, 가차 없이",
    examples: [
      { en: "The rain fell relentlessly for three days.", kr: "비가 사흘 동안 끈질기게 내렸어요." },
      { en: "She worked relentlessly to build her company.", kr: "그녀는 회사를 세우기 위해 쉬지 않고 일했어요." }
    ]
  },
  {
    id: "L5-520",
    word: "negotiable",
    meaning: "협상의 여지가 있는",
    examples: [
      { en: "The salary for this position is negotiable.", kr: "이 직책의 연봉은 협상 가능합니다." },
      { en: "Safety rules are not negotiable on this site.", kr: "이 현장에서 안전 수칙은 타협의 여지가 없어요." }
    ]
  },
  {
    id: "L5-521",
    word: "unsolicited",
    meaning: "요청하지 않은, 원치 않는",
    examples: [
      { en: "I'm tired of getting unsolicited advice from relatives.", kr: "친척들한테서 원치도 않는 조언 듣는 거 지겨워." },
      { en: "Please do not send unsolicited emails to our customers.", kr: "고객들에게 요청하지 않은 이메일을 보내지 마세요." }
    ]
  },
  {
    id: "L5-522",
    word: "groundwork",
    meaning: "기초 작업, 토대",
    examples: [
      { en: "Our research laid the groundwork for the new product.", kr: "우리 연구가 신제품의 토대를 마련했어요." },
      { en: "Let's do the groundwork before we pitch to investors.", kr: "투자자에게 제안하기 전에 기초 작업부터 하죠." }
    ]
  },
  {
    id: "L5-523",
    word: "foresee",
    meaning: "예견하다, 내다보다",
    examples: [
      { en: "Nobody could foresee how popular the app would become.", kr: "그 앱이 얼마나 인기를 끌지 아무도 예견하지 못했어요." },
      { en: "Do you foresee any problems with the new schedule?", kr: "새 일정에 문제가 생길 것 같나요?" }
    ]
  },
  {
    id: "L5-524",
    word: "rapport",
    meaning: "친밀한 관계, 유대감",
    examples: [
      { en: "A good teacher builds rapport with her students.", kr: "좋은 선생님은 학생들과 친밀한 관계를 쌓아요." },
      { en: "It took time to develop rapport with the new client.", kr: "새 고객과 유대감을 쌓는 데 시간이 걸렸어요." }
    ]
  },
  {
    id: "L5-525",
    word: "unforeseen",
    meaning: "예상치 못한, 뜻밖의",
    examples: [
      { en: "Due to unforeseen circumstances, the concert is canceled.", kr: "예기치 못한 사정으로 콘서트가 취소되었습니다." },
      { en: "Always keep some money aside for unforeseen expenses.", kr: "예상치 못한 지출에 대비해 항상 돈을 좀 따로 모아 두세요." }
    ]
  },
  {
    id: "L5-526",
    word: "deteriorate",
    meaning: "악화되다, 나빠지다",
    examples: [
      { en: "His health began to deteriorate after the surgery.", kr: "그의 건강은 수술 후 악화되기 시작했어요." },
      { en: "Relations between the two countries have deteriorated.", kr: "두 나라 간의 관계가 악화되었습니다." }
    ]
  },
  {
    id: "L5-527",
    word: "complacency",
    meaning: "안주, 자기만족",
    examples: [
      { en: "Complacency is the biggest danger after a big win.", kr: "큰 승리 뒤에는 안주하는 것이 가장 큰 위험이에요." },
      { en: "There is no room for complacency in cybersecurity.", kr: "사이버 보안에서는 안주할 여유가 없습니다." }
    ]
  },
  {
    id: "L5-528",
    word: "procrastination",
    meaning: "미루는 버릇, 꾸물거림",
    examples: [
      { en: "Procrastination is my biggest problem when studying.", kr: "공부할 때 미루는 버릇이 제일 큰 문제예요." },
      { en: "Breaking tasks into small steps helps beat procrastination.", kr: "일을 작은 단계로 나누면 미루는 습관을 이기는 데 도움이 돼요." }
    ]
  },
  {
    id: "L5-529",
    word: "ambivalent",
    meaning: "반대 감정이 공존하는, 애매한 태도의",
    examples: [
      { en: "I feel ambivalent about moving to a new city.", kr: "새 도시로 이사하는 것에 대해 마음이 복잡해요." },
      { en: "Voters remain ambivalent about the proposed tax cut.", kr: "유권자들은 제안된 감세안에 대해 여전히 확실한 입장을 정하지 못하고 있습니다." }
    ]
  },
  {
    id: "L5-530",
    word: "contingency",
    meaning: "만일의 사태, 비상 대책",
    examples: [
      { en: "We need a contingency plan in case the vendor backs out.", kr: "공급업체가 발을 뺄 경우를 대비해 비상 계획이 필요해요." },
      { en: "Always keep a contingency fund for unexpected repairs.", kr: "예상치 못한 수리에 대비해 항상 비상 자금을 마련해 두세요." }
    ]
  },
  {
    id: "L5-531",
    word: "insistence",
    meaning: "고집, 강한 주장",
    examples: [
      { en: "At my mother's insistence, I finally went to see a doctor.", kr: "엄마가 하도 고집하셔서 결국 병원에 갔어요." },
      { en: "His insistence on perfection slows down the whole team.", kr: "완벽함에 대한 그의 고집이 팀 전체의 속도를 늦춰요." }
    ]
  },
  {
    id: "L5-532",
    word: "preferable",
    meaning: "더 나은, 바람직한",
    examples: [
      { en: "A morning meeting would be preferable for most of us.", kr: "우리 대부분에게는 오전 회의가 더 나을 것 같아요." },
      { en: "Taking the train is preferable to driving in this traffic.", kr: "이렇게 막힐 때는 운전보다 기차를 타는 게 더 나아요." }
    ]
  },
  {
    id: "L5-533",
    word: "questionnaire",
    meaning: "설문지",
    examples: [
      { en: "Please fill out this short questionnaire before your appointment.", kr: "진료 전에 이 짧은 설문지를 작성해 주세요." },
      { en: "We sent a questionnaire to customers about our new service.", kr: "새 서비스에 대해 고객들에게 설문지를 보냈습니다." }
    ]
  },
  {
    id: "L5-534",
    word: "deterioration",
    meaning: "악화, 저하",
    examples: [
      { en: "Doctors are worried about the deterioration in his health.", kr: "의사들은 그의 건강 악화를 걱정하고 있어요." },
      { en: "The report warns of a deterioration in relations between the two countries.", kr: "보고서는 두 나라 간 관계의 악화를 경고합니다." }
    ]
  },
  {
    id: "L5-535",
    word: "discreet",
    meaning: "신중한, 조심스러운, 티 나지 않는",
    examples: [
      { en: "Please be discreet; nobody else knows about the layoffs yet.", kr: "조심해 주세요. 아직 정리해고에 대해 아는 사람이 아무도 없어요." },
      { en: "The hotel staff were polite and very discreet.", kr: "호텔 직원들은 정중하고 아주 신중했어요." }
    ]
  },
  {
    id: "L5-536",
    word: "enact",
    meaning: "(법을) 제정하다, 시행하다",
    examples: [
      { en: "The city enacted a new law banning plastic bags.", kr: "시는 비닐봉지를 금지하는 새 법을 제정했습니다." },
      { en: "Congress failed to enact the proposed tax reform.", kr: "의회는 제안된 세제 개혁안을 제정하지 못했습니다." }
    ]
  },
  {
    id: "L5-537",
    word: "mildly",
    meaning: "약간, 다소, 순하게",
    examples: [
      { en: "I was mildly surprised that he showed up on time.", kr: "그가 제시간에 나타나서 약간 놀랐어요." },
      { en: "To put it mildly, the meeting did not go well.", kr: "좋게 말해서, 회의는 잘 안 풀렸어요." }
    ]
  },
  {
    id: "L5-538",
    word: "nutshell",
    meaning: "(in a nutshell) 요컨대, 간단히 말해",
    examples: [
      { en: "In a nutshell, we need more time and more money.", kr: "간단히 말해, 우리는 시간과 돈이 더 필요해요." },
      { en: "Can you explain the plan in a nutshell?", kr: "그 계획을 간단히 요약해서 설명해 줄 수 있어요?" }
    ]
  },
  {
    id: "L5-161",
    word: "palpable",
    meaning: "확연한, 뚜렷이 느껴지는",
    examples: [
      { en: "The tension in the meeting room was palpable.", kr: "회의실 안의 긴장감이 확 느껴졌어요." },
      { en: "Her excitement was palpable when she got the job offer.", kr: "입사 제안을 받았을 때 그녀의 설렘이 확연히 느껴졌어." }
    ]
  },
  {
    id: "L5-539",
    word: "poised",
    meaning: "~할 태세를 갖춘, 침착한",
    examples: [
      { en: "The company is poised to expand into Asian markets.", kr: "그 회사는 아시아 시장으로 확장할 태세를 갖추고 있습니다." },
      { en: "She remained calm and poised during the tough interview.", kr: "그녀는 까다로운 면접 내내 차분하고 침착했어요." }
    ]
  },
  {
    id: "L5-540",
    word: "stereotype",
    meaning: "고정관념, 정형화된 이미지",
    examples: [
      { en: "Not all engineers fit the stereotype of being shy.", kr: "모든 엔지니어가 수줍음이 많다는 고정관념에 들어맞는 건 아니에요." },
      { en: "The movie relies too much on tired stereotypes.", kr: "그 영화는 진부한 고정관념에 너무 의존해요." }
    ]
  },
  {
    id: "L5-541",
    word: "stringent",
    meaning: "엄격한, 까다로운",
    examples: [
      { en: "The airline has stringent rules about carry-on luggage.", kr: "그 항공사는 기내 수하물에 대해 엄격한 규정이 있어요." },
      { en: "New hires must pass a stringent background check.", kr: "신규 채용자는 엄격한 신원 조회를 통과해야 합니다." }
    ]
  },
  {
    id: "L5-542",
    word: "upbringing",
    meaning: "양육, 가정교육, 성장 배경",
    examples: [
      { en: "Her strict upbringing made her very disciplined.", kr: "엄격한 가정교육 덕분에 그녀는 매우 절제력이 있어요." },
      { en: "We had very different upbringings, but we get along well.", kr: "우리는 성장 배경이 아주 다르지만 잘 지내요." }
    ]
  },
  {
    id: "L5-543",
    word: "betray",
    meaning: "배신하다, (비밀을) 누설하다",
    examples: [
      { en: "I can't believe my best friend betrayed my trust.", kr: "가장 친한 친구가 내 신뢰를 배신했다니 믿을 수 없어." },
      { en: "Never betray a client's confidence, no matter what.", kr: "무슨 일이 있어도 고객의 비밀을 누설하면 안 됩니다." }
    ]
  },
  {
    id: "L5-544",
    word: "compliant",
    meaning: "(규정을) 준수하는, 따르는",
    examples: [
      { en: "Make sure the new website is compliant with privacy laws.", kr: "새 웹사이트가 개인정보 보호법을 준수하는지 꼭 확인하세요." },
      { en: "All our products are fully compliant with safety standards.", kr: "저희 모든 제품은 안전 기준을 완벽히 준수합니다." }
    ]
  },
  {
    id: "L5-545",
    word: "facade",
    meaning: "겉모습, 허울, (건물의) 정면",
    examples: [
      { en: "Behind her cheerful facade, she was really stressed.", kr: "쾌활한 겉모습 뒤에서 그녀는 사실 스트레스를 많이 받고 있었어요." },
      { en: "The hotel's old stone facade was beautifully restored.", kr: "그 호텔의 오래된 석조 정면이 아름답게 복원되었어요." }
    ]
  },
  {
    id: "L5-546",
    word: "misguided",
    meaning: "잘못 판단한, 잘못된",
    examples: [
      { en: "It was a misguided attempt to save money.", kr: "그건 돈을 아끼려는 잘못된 시도였어요." },
      { en: "I think his loyalty to that company is misguided.", kr: "그 회사에 대한 그의 충성심은 잘못된 것 같아요." }
    ]
  },
  {
    id: "L5-547",
    word: "override",
    meaning: "뒤집다, 무효화하다, ~보다 우선하다",
    examples: [
      { en: "The CEO can override the committee's decision if needed.", kr: "필요하면 CEO가 위원회의 결정을 뒤집을 수 있어요." },
      { en: "Safety concerns override everything else on this project.", kr: "이 프로젝트에서는 안전 문제가 다른 모든 것보다 우선합니다." }
    ]
  },
  {
    id: "L5-548",
    word: "paranoia",
    meaning: "편집증, 과도한 의심",
    examples: [
      { en: "There's a lot of paranoia about layoffs in the office right now.", kr: "지금 사무실에는 정리해고에 대한 과도한 불안이 많아요." },
      { en: "Checking the lock five times is just paranoia.", kr: "자물쇠를 다섯 번이나 확인하는 건 그냥 편집증이야." }
    ]
  },
  {
    id: "L5-549",
    word: "unnoticed",
    meaning: "눈에 띄지 않는, 아무도 모르는",
    examples: [
      { en: "The mistake went unnoticed until the client called.", kr: "그 실수는 고객이 전화할 때까지 아무도 알아채지 못했어요." },
      { en: "I slipped out of the party unnoticed.", kr: "나는 아무도 모르게 파티를 빠져나왔어." }
    ]
  },
  {
    id: "L5-550",
    word: "visionary",
    meaning: "선견지명이 있는, 비전 있는, 선각자",
    examples: [
      { en: "Our founder was a visionary who saw the potential of smartphones.", kr: "우리 창업자는 스마트폰의 잠재력을 내다본 선각자였어요." },
      { en: "The city needs visionary leadership to solve its housing crisis.", kr: "그 도시는 주택 위기를 해결할 비전 있는 리더십이 필요해요." }
    ]
  },
  {
    id: "L5-551",
    word: "anonymously",
    meaning: "익명으로",
    examples: [
      { en: "You can submit your feedback anonymously through this form.", kr: "이 양식을 통해 익명으로 의견을 제출할 수 있어요." },
      { en: "Someone anonymously donated ten thousand dollars to the shelter.", kr: "누군가 보호소에 만 달러를 익명으로 기부했어요." }
    ]
  },
  {
    id: "L5-552",
    word: "austerity",
    meaning: "긴축, 내핍",
    examples: [
      { en: "The government announced new austerity measures to cut debt.", kr: "정부는 부채를 줄이기 위한 새로운 긴축 조치를 발표했습니다." },
      { en: "Years of austerity have left public services underfunded.", kr: "수년간의 긴축으로 공공 서비스 예산이 부족해졌습니다." }
    ]
  },
  {
    id: "L5-553",
    word: "contemplate",
    meaning: "곰곰이 생각하다, 고려하다",
    examples: [
      { en: "Have you ever stopped to contemplate how lucky we are?", kr: "우리가 얼마나 운이 좋은지 잠시 멈춰 곰곰이 생각해 본 적 있어요?" },
      { en: "I would never contemplate quitting without another job lined up.", kr: "다음 직장을 구해 두지 않고 그만두는 건 고려조차 안 해요." }
    ]
  },
  {
    id: "L5-177",
    word: "pundit",
    meaning: "(TV 등의) 논객, 전문가",
    examples: [
      { en: "All the pundits on TV got the election wrong.", kr: "TV에 나온 논객들 예측이 전부 빗나갔어." },
      { en: "I stopped listening to political pundits on cable news.", kr: "케이블 뉴스에 나오는 정치 논객들 얘기는 이제 안 들어요." }
    ]
  },
  {
    id: "L5-554",
    word: "diagnose",
    meaning: "진단하다",
    examples: [
      { en: "She was diagnosed with diabetes last year.", kr: "그녀는 작년에 당뇨병 진단을 받았어요." },
      { en: "The mechanic couldn't diagnose the problem with my car.", kr: "정비사는 내 차의 문제를 진단하지 못했어요." }
    ]
  },
  {
    id: "L5-555",
    word: "embarrass",
    meaning: "당황하게 하다, 창피를 주다",
    examples: [
      { en: "Please don't embarrass me in front of my coworkers.", kr: "동료들 앞에서 나 창피하게 만들지 마." },
      { en: "It embarrasses him when people praise him in public.", kr: "사람들이 공개적으로 칭찬하면 그는 쑥스러워해요." }
    ]
  },
  {
    id: "L5-556",
    word: "eviction",
    meaning: "퇴거, (집에서) 쫓겨남",
    examples: [
      { en: "The tenants received an eviction notice for unpaid rent.", kr: "세입자들은 집세 미납으로 퇴거 통지를 받았어요." },
      { en: "Rising rents have led to more evictions in the city.", kr: "임대료 상승으로 도시에서 퇴거 사례가 늘었습니다." }
    ]
  },
  {
    id: "L5-557",
    word: "hesitant",
    meaning: "주저하는, 망설이는",
    examples: [
      { en: "I was hesitant to ask for a raise.", kr: "임금 인상을 요구하기가 망설여졌어." },
      { en: "Investors remain hesitant about entering the new market.", kr: "투자자들은 신규 시장 진출을 여전히 주저하고 있습니다." }
    ]
  },
  {
    id: "L5-558",
    word: "irrespective",
    meaning: "(irrespective of) ~와 관계없이",
    examples: [
      { en: "Everyone gets the same bonus, irrespective of their position.", kr: "직급과 관계없이 모두가 같은 보너스를 받아요." },
      { en: "The event will go ahead irrespective of the weather.", kr: "행사는 날씨와 관계없이 진행됩니다." }
    ]
  },
  {
    id: "L5-559",
    word: "proactive",
    meaning: "주도적인, 선제적인",
    examples: [
      { en: "Be proactive and fix problems before customers notice them.", kr: "주도적으로 움직여서 고객이 알아채기 전에 문제를 해결하세요." },
      { en: "We need a more proactive approach to cybersecurity.", kr: "사이버 보안에는 좀 더 선제적인 접근이 필요해요." }
    ]
  },
  {
    id: "L5-560",
    word: "prominently",
    meaning: "눈에 잘 띄게, 두드러지게",
    examples: [
      { en: "Display the price prominently so customers can see it.", kr: "고객이 볼 수 있게 가격을 눈에 잘 띄게 표시하세요." },
      { en: "Her research featured prominently in the final report.", kr: "그녀의 연구가 최종 보고서에서 비중 있게 다뤄졌어요." }
    ]
  },
  {
    id: "L5-561",
    word: "solemn",
    meaning: "엄숙한, 진지한",
    examples: [
      { en: "The ceremony was quiet and solemn.", kr: "그 의식은 조용하고 엄숙했어요." },
      { en: "He made a solemn promise to take care of his family.", kr: "그는 가족을 돌보겠다고 진지하게 약속했어요." }
    ]
  },
  {
    id: "L5-562",
    word: "substantive",
    meaning: "실질적인, 중요한",
    examples: [
      { en: "We need substantive changes, not just new slogans.", kr: "새 슬로건이 아니라 실질적인 변화가 필요해요." },
      { en: "The two sides held substantive talks on trade.", kr: "양측은 무역에 관해 실질적인 회담을 가졌습니다." }
    ]
  },
  {
    id: "L5-563",
    word: "heartfelt",
    meaning: "진심 어린",
    examples: [
      { en: "Please accept my heartfelt thanks for all your help.", kr: "도와주신 모든 것에 진심 어린 감사를 드립니다." },
      { en: "She gave a heartfelt speech at her father's retirement party.", kr: "그녀는 아버지의 은퇴 파티에서 진심 어린 연설을 했어요." }
    ]
  },
  {
    id: "L5-564",
    word: "newcomer",
    meaning: "새로 온 사람, 신참",
    examples: [
      { en: "As a newcomer to the city, I'm still learning the bus routes.", kr: "이 도시에 새로 온 사람이라 아직 버스 노선을 익히는 중이에요." },
      { en: "The team made the newcomer feel welcome on her first day.", kr: "팀은 첫날 신입이 환영받는다고 느끼게 해 주었어요." }
    ]
  },
  {
    id: "L5-565",
    word: "ominous",
    meaning: "불길한",
    examples: [
      { en: "Dark, ominous clouds gathered over the stadium.", kr: "경기장 위로 어둡고 불길한 구름이 몰려들었어요." },
      { en: "There was an ominous silence after the boss read the email.", kr: "사장님이 이메일을 읽은 뒤 불길한 침묵이 흘렀어요." }
    ]
  },
  {
    id: "L5-566",
    word: "precaution",
    meaning: "예방 조치, 조심",
    examples: [
      { en: "As a precaution, back up your files every day.", kr: "예방 차원에서 매일 파일을 백업하세요." },
      { en: "Take extra precautions when driving on icy roads.", kr: "빙판길을 운전할 때는 각별히 조심하세요." }
    ]
  },
  {
    id: "L5-567",
    word: "skepticism",
    meaning: "회의론, 의심",
    examples: [
      { en: "The new plan was met with skepticism by employees.", kr: "새 계획은 직원들의 회의적인 반응에 부딪혔어요." },
      { en: "A healthy amount of skepticism helps you avoid online scams.", kr: "적당한 의심은 온라인 사기를 피하는 데 도움이 돼요." }
    ]
  },
  {
    id: "L5-568",
    word: "startling",
    meaning: "깜짝 놀랄 만한, 놀라운",
    examples: [
      { en: "The survey revealed some startling results.", kr: "그 설문조사는 몇 가지 놀라운 결과를 보여 주었어요." },
      { en: "Prices have risen at a startling rate this year.", kr: "올해 물가가 놀라운 속도로 올랐어요." }
    ]
  },
  {
    id: "L5-569",
    word: "turnaround",
    meaning: "회생, 호전, 처리 기간",
    examples: [
      { en: "The new CEO led a remarkable turnaround of the company.", kr: "새 CEO는 회사의 놀라운 회생을 이끌었습니다." },
      { en: "What's the turnaround time for a passport renewal?", kr: "여권 갱신 처리 기간이 얼마나 걸리나요?" }
    ]
  },
  {
    id: "L5-570",
    word: "counterfeit",
    meaning: "위조의, 가짜의, 위조품",
    examples: [
      { en: "Police seized thousands of counterfeit handbags at the port.", kr: "경찰은 항구에서 위조 핸드백 수천 개를 압수했습니다." },
      { en: "Be careful, there are counterfeit bills going around.", kr: "조심해, 위조지폐가 돌고 있대." }
    ]
  },
  {
    id: "L5-571",
    word: "stamina",
    meaning: "체력, 지구력",
    examples: [
      { en: "Running every morning has really improved my stamina.", kr: "매일 아침 달리기를 했더니 체력이 정말 좋아졌어요." },
      { en: "You need a lot of stamina to work night shifts.", kr: "야간 근무를 하려면 체력이 많이 필요해요." }
    ]
  },
  {
    id: "L5-572",
    word: "subconscious",
    meaning: "잠재의식의, 잠재의식",
    examples: [
      { en: "Many of our buying decisions are subconscious.", kr: "우리의 구매 결정 중 상당수는 잠재의식에서 이루어져요." },
      { en: "Maybe your subconscious is telling you to slow down.", kr: "어쩌면 네 잠재의식이 속도를 늦추라고 말하는 걸지도 몰라." }
    ]
  },
  {
    id: "L5-573",
    word: "vanish",
    meaning: "사라지다",
    examples: [
      { en: "My headache vanished after a good night's sleep.", kr: "푹 자고 나니 두통이 사라졌어요." },
      { en: "The cookies vanished from the break room within minutes.", kr: "휴게실의 쿠키가 몇 분 만에 사라졌어요." }
    ]
  },
  {
    id: "L5-574",
    word: "abrupt",
    meaning: "갑작스러운, 퉁명스러운",
    examples: [
      { en: "The meeting came to an abrupt end when the power went out.", kr: "정전이 되자 회의가 갑자기 끝났어요." },
      { en: "Sorry if I sounded abrupt on the phone earlier.", kr: "아까 통화할 때 퉁명스럽게 들렸다면 미안해요." }
    ]
  },
  {
    id: "L5-575",
    word: "downright",
    meaning: "완전히, 순전히",
    examples: [
      { en: "Some of his comments were downright rude.", kr: "그의 발언 중 일부는 완전히 무례했어요." },
      { en: "Driving in this snow is downright dangerous.", kr: "이 눈 속에서 운전하는 건 정말 위험해요." }
    ]
  },
  {
    id: "L5-576",
    word: "impartial",
    meaning: "공정한, 치우치지 않은",
    examples: [
      { en: "We need an impartial mediator to settle this dispute.", kr: "이 분쟁을 해결하려면 공정한 중재자가 필요해요." },
      { en: "Journalists are supposed to give impartial reports.", kr: "기자들은 치우치지 않은 보도를 해야 합니다." }
    ]
  }
];

const wordsLevel5_Part3 = [
  {
    id: "L5-577",
    word: "incremental",
    meaning: "점진적인, 단계적인",
    examples: [
      { en: "We've seen incremental improvements in sales each month.", kr: "매달 판매가 점진적으로 개선되고 있어요." },
      { en: "Small, incremental changes are easier to stick with.", kr: "작고 점진적인 변화가 꾸준히 유지하기 더 쉬워요." }
    ]
  },
  {
    id: "L5-578",
    word: "manageable",
    meaning: "감당할 수 있는, 다룰 만한",
    examples: [
      { en: "Break the project into manageable tasks.", kr: "프로젝트를 감당할 수 있는 작업들로 나누세요." },
      { en: "The traffic was heavy but manageable this morning.", kr: "오늘 아침 교통이 혼잡했지만 견딜 만했어요." }
    ]
  },
  {
    id: "L5-579",
    word: "misfortune",
    meaning: "불운, 불행",
    examples: [
      { en: "He had the misfortune of losing his wallet on vacation.", kr: "그는 휴가 중에 지갑을 잃어버리는 불운을 겪었어요." },
      { en: "Don't laugh at other people's misfortunes.", kr: "다른 사람의 불행을 비웃지 마." }
    ]
  },
  {
    id: "L5-580",
    word: "ambiguity",
    meaning: "모호함, 애매함",
    examples: [
      { en: "Let's remove any ambiguity from the contract.", kr: "계약서에서 모호한 부분을 모두 없앱시다." },
      { en: "There's some ambiguity about who is in charge.", kr: "누가 책임자인지에 대해 다소 애매한 점이 있어요." }
    ]
  },
  {
    id: "L5-581",
    word: "discard",
    meaning: "버리다, 폐기하다",
    examples: [
      { en: "Discard any food that has been left out overnight.", kr: "밤새 밖에 둔 음식은 모두 버리세요." },
      { en: "We discarded the first design and started over.", kr: "우리는 첫 번째 디자인을 폐기하고 다시 시작했어요." }
    ]
  },
  {
    id: "L5-582",
    word: "hallmark",
    meaning: "특징, 전형적인 특징",
    examples: [
      { en: "Attention to detail is the hallmark of a good editor.", kr: "세부 사항에 대한 주의력은 좋은 편집자의 특징이에요." },
      { en: "The attack had all the hallmarks of a professional hacker.", kr: "그 공격에는 전문 해커의 특징이 고스란히 드러났어요." }
    ]
  },
  {
    id: "L5-583",
    word: "haste",
    meaning: "서두름, 급함",
    examples: [
      { en: "In my haste, I left my phone at home.", kr: "서두르다가 휴대폰을 집에 두고 왔어요." },
      { en: "The decision was made in haste, and we regret it.", kr: "그 결정은 급하게 내려졌고 우리는 그걸 후회해요." }
    ]
  },
  {
    id: "L5-584",
    word: "immaculate",
    meaning: "티 없이 깨끗한, 흠잡을 데 없는",
    examples: [
      { en: "Her apartment is always immaculate, even when guests show up unannounced.", kr: "그녀의 아파트는 손님이 예고 없이 와도 항상 티 없이 깨끗해요." },
      { en: "He arrived in an immaculate suit and polished shoes.", kr: "그는 흠잡을 데 없는 정장에 반짝이는 구두를 신고 도착했어요." }
    ]
  },
  {
    id: "L5-209",
    word: "spurious",
    meaning: "근거 없는, 가짜의",
    examples: [
      { en: "His argument sounds smart, but it's completely spurious.", kr: "그 사람 주장은 똑똑하게 들리지만 완전히 근거 없는 거야." },
      { en: "Just ignore those spurious claims you see online.", kr: "온라인에서 보이는 근거 없는 주장들은 그냥 무시해." }
    ]
  },
  {
    id: "L5-585",
    word: "lifespan",
    meaning: "수명",
    examples: [
      { en: "The average lifespan of a smartphone is about three years.", kr: "스마트폰의 평균 수명은 약 3년이에요." },
      { en: "Regular exercise can extend your lifespan.", kr: "규칙적인 운동은 수명을 늘릴 수 있어요." }
    ]
  },
  {
    id: "L5-211",
    word: "subliminal",
    meaning: "잠재의식의, 무의식적인",
    examples: [
      { en: "Do you think ads use subliminal messages on us?", kr: "광고가 우리한테 잠재의식 메시지를 쓴다고 생각해?" },
      { en: "Maybe that song had a subliminal effect on me.", kr: "그 노래가 나한테 무의식적으로 영향을 줬나 봐." }
    ]
  },
  {
    id: "L5-212",
    word: "subvert",
    meaning: "뒤엎다, 전복시키다",
    examples: [
      { en: "The movie totally subverts the usual superhero story.", kr: "그 영화는 뻔한 슈퍼히어로 이야기를 완전히 뒤집어요." },
      { en: "I love shows that subvert your expectations.", kr: "예상을 뒤엎는 드라마가 좋아요." }
    ]
  },
  {
    id: "L5-586",
    word: "mischief",
    meaning: "장난, 말썽",
    examples: [
      { en: "The kids got into mischief while we were cooking.", kr: "우리가 요리하는 동안 아이들이 말썽을 부렸어요." },
      { en: "He had a look of mischief in his eyes.", kr: "그의 눈빛에는 장난기가 가득했어요." }
    ]
  },
  {
    id: "L5-587",
    word: "revisit",
    meaning: "다시 논의하다, 재검토하다, 다시 방문하다",
    examples: [
      { en: "Let's revisit this issue at next week's meeting.", kr: "이 문제는 다음 주 회의에서 다시 논의합시다." },
      { en: "I'd love to revisit Kyoto in the fall.", kr: "가을에 교토를 다시 방문하고 싶어요." }
    ]
  },
  {
    id: "L5-588",
    word: "sparse",
    meaning: "드문드문한, 듬성듬성한, 휑한",
    examples: [
      { en: "The crowd was pretty sparse for a Friday night.", kr: "금요일 밤치고는 사람이 꽤 드문드문했어요." },
      { en: "The room was sparse, with just a bed and a desk.", kr: "그 방은 침대와 책상 하나뿐이라 휑했어요." }
    ]
  },
  {
    id: "L5-589",
    word: "temperament",
    meaning: "기질, 성미",
    examples: [
      { en: "Our dog has a calm, gentle temperament.", kr: "우리 개는 차분하고 온순한 기질을 가졌어요." },
      { en: "She has the right temperament for customer service.", kr: "그녀는 고객 서비스에 딱 맞는 성미를 가졌어요." }
    ]
  },
  {
    id: "L5-590",
    word: "conspicuous",
    meaning: "눈에 띄는, 두드러진",
    examples: [
      { en: "I felt conspicuous in my bright red jacket.", kr: "새빨간 재킷을 입으니 너무 눈에 띄는 것 같았어요." },
      { en: "There was a conspicuous lack of women on the panel.", kr: "패널에 여성이 눈에 띄게 부족했어요." }
    ]
  },
  {
    id: "L5-591",
    word: "contradict",
    meaning: "반박하다, 모순되다",
    examples: [
      { en: "Please don't contradict me in front of the client.", kr: "고객 앞에서 제 말에 반박하지 말아 주세요." },
      { en: "The new data contradicts what we assumed last year.", kr: "새 데이터는 우리가 작년에 가정한 것과 모순돼요." }
    ]
  },
  {
    id: "L5-592",
    word: "exceedingly",
    meaning: "극도로, 대단히",
    examples: [
      { en: "The hotel staff were exceedingly helpful during our stay.", kr: "머무는 동안 호텔 직원들이 대단히 친절하게 도와줬어요." },
      { en: "Finding a good apartment downtown is exceedingly difficult.", kr: "시내에서 좋은 아파트를 찾기란 극도로 어려워요." }
    ]
  },
  {
    id: "L5-593",
    word: "impoverished",
    meaning: "가난한, 빈곤한",
    examples: [
      { en: "The charity builds schools in impoverished rural areas.", kr: "그 자선단체는 가난한 농촌 지역에 학교를 짓습니다." },
      { en: "She grew up in an impoverished neighborhood.", kr: "그녀는 빈곤한 동네에서 자랐어요." }
    ]
  },
  {
    id: "L5-221",
    word: "tenuous",
    meaning: "미약한, 빈약한",
    examples: [
      { en: "Honestly, the link between those two things seems pretty tenuous.", kr: "솔직히 그 둘 사이의 연관성은 좀 약해 보여요." },
      { en: "I only have a tenuous grasp of tax rules.", kr: "저는 세금 규정을 어렴풋이만 알아요." }
    ]
  },
  {
    id: "L5-222",
    word: "tirade",
    meaning: "장황한 비난, 길게 퍼붓는 독설",
    examples: [
      { en: "My boss went on a tirade about the late reports.", kr: "사장님이 보고서가 늦었다고 한참 열을 내며 퍼부었어요." },
      { en: "Sorry about that tirade; I was just really frustrated.", kr: "아까 막 퍼부어서 미안해. 그냥 너무 답답했어." }
    ]
  },
  {
    id: "L5-594",
    word: "pinpoint",
    meaning: "정확히 찾아내다, 집어내다",
    examples: [
      { en: "It's hard to pinpoint exactly what went wrong.", kr: "정확히 무엇이 잘못됐는지 집어내기 어려워요." },
      { en: "The app can pinpoint your location within a few meters.", kr: "그 앱은 몇 미터 오차로 당신의 위치를 정확히 찾아낼 수 있어요." }
    ]
  },
  {
    id: "L5-224",
    word: "tout",
    meaning: "크게 선전하다, 치켜세우다",
    examples: [
      { en: "They keep touting this phone as a total game changer.", kr: "그 회사는 이 폰이 판도를 바꿀 거라고 계속 떠들어대요." },
      { en: "The hotel was touted as luxurious, but it was pretty basic.", kr: "그 호텔은 고급이라고 홍보됐는데 꽤 평범했어요." }
    ]
  },
  {
    id: "L5-595",
    word: "vigilant",
    meaning: "경계하는, 방심하지 않는",
    examples: [
      { en: "Stay vigilant about phishing emails at work.", kr: "회사에서 피싱 이메일에 대해 경계를 늦추지 마세요." },
      { en: "Parents should be vigilant when kids swim near the ocean.", kr: "아이들이 바다 근처에서 수영할 때 부모는 방심하지 말아야 해요." }
    ]
  },
  {
    id: "L5-596",
    word: "foreseeable",
    meaning: "예측할 수 있는, (가까운 미래) 당분간",
    examples: [
      { en: "Prices will stay high for the foreseeable future.", kr: "당분간 가격이 계속 높을 거예요." },
      { en: "The accident was entirely foreseeable and preventable.", kr: "그 사고는 충분히 예측할 수 있었고 막을 수 있었어요." }
    ]
  },
  {
    id: "L5-597",
    word: "charisma",
    meaning: "카리스마, 사람을 끄는 매력",
    examples: [
      { en: "Our new manager has so much charisma.", kr: "새 매니저님은 카리스마가 대단해요." },
      { en: "He won the election thanks to his charisma and humor.", kr: "그는 카리스마와 유머 덕분에 선거에서 이겼어요." }
    ]
  },
  {
    id: "L5-598",
    word: "loom",
    meaning: "(위협이) 다가오다, 불쑥 나타나다",
    examples: [
      { en: "With the deadline looming, everyone is working late.", kr: "마감이 다가오면서 모두가 늦게까지 일하고 있어요." },
      { en: "A huge storm cloud loomed over the city.", kr: "거대한 폭풍 구름이 도시 위로 불길하게 드리웠어요." }
    ]
  },
  {
    id: "L5-599",
    word: "spontaneously",
    meaning: "자발적으로, 즉흥적으로",
    examples: [
      { en: "The audience spontaneously stood up and clapped.", kr: "청중이 자발적으로 일어나 박수를 쳤어요." },
      { en: "We spontaneously decided to drive to the beach.", kr: "우리는 즉흥적으로 해변까지 드라이브 가기로 했어요." }
    ]
  },
  {
    id: "L5-600",
    word: "adept",
    meaning: "능숙한",
    examples: [
      { en: "She's adept at handling difficult customers.", kr: "그녀는 까다로운 고객을 다루는 데 능숙해요." },
      { en: "Kids are surprisingly adept with new technology.", kr: "아이들은 새로운 기술에 놀라울 만큼 능숙해요." }
    ]
  },
  {
    id: "L5-601",
    word: "deterrent",
    meaning: "억지력, 제지하는 것",
    examples: [
      { en: "Security cameras act as a deterrent to shoplifters.", kr: "보안 카메라는 좀도둑을 막는 억지력 역할을 해요." },
      { en: "High fines are meant to be a deterrent to speeding.", kr: "높은 벌금은 과속을 막기 위한 억지책이에요." }
    ]
  },
  {
    id: "L5-602",
    word: "grieve",
    meaning: "몹시 슬퍼하다, 애도하다",
    examples: [
      { en: "Give yourself time to grieve after a loss.", kr: "상실을 겪은 뒤에는 슬퍼할 시간을 스스로에게 주세요." },
      { en: "The whole town grieved for the firefighters who died.", kr: "온 마을이 순직한 소방관들을 애도했어요." }
    ]
  },
  {
    id: "L5-603",
    word: "hectic",
    meaning: "정신없이 바쁜",
    examples: [
      { en: "It's been a hectic week at the office.", kr: "이번 주는 회사에서 정신없이 바빴어요." },
      { en: "Our schedule in Paris was too hectic to relax.", kr: "파리 일정이 너무 빡빡해서 쉴 수가 없었어요." }
    ]
  },
  {
    id: "L5-234",
    word: "unscrupulous",
    meaning: "부도덕한, 비양심적인, 악덕",
    examples: [
      { en: "An unscrupulous dealer tried to sell me a fake product.", kr: "양심 없는 판매상이 나한테 가짜 물건을 팔려고 했어." },
      { en: "Watch out for unscrupulous landlords who keep your deposit.", kr: "보증금을 안 돌려주는 악덕 집주인을 조심하세요." }
    ]
  },
  {
    id: "L5-604",
    word: "relatable",
    meaning: "공감할 수 있는",
    examples: [
      { en: "Her stories about being a working mom are very relatable.", kr: "워킹맘으로 사는 것에 대한 그녀의 이야기는 정말 공감이 가요." },
      { en: "The main character is flawed but relatable.", kr: "주인공은 결점이 있지만 공감할 수 있는 인물이에요." }
    ]
  },
  {
    id: "L5-605",
    word: "scarcely",
    meaning: "거의 ~않다, ~하자마자",
    examples: [
      { en: "I could scarcely believe what I was hearing.", kr: "내가 듣고 있는 말을 거의 믿을 수 없었어요." },
      { en: "We had scarcely sat down when the fire alarm went off.", kr: "우리가 자리에 앉자마자 화재경보가 울렸어요." }
    ]
  },
  {
    id: "L5-606",
    word: "prognosis",
    meaning: "예후, 전망",
    examples: [
      { en: "The doctor said the prognosis is good after surgery.", kr: "의사는 수술 후 예후가 좋다고 말했어요." },
      { en: "Economists offered a gloomy prognosis for next year.", kr: "경제학자들은 내년에 대해 암울한 전망을 내놓았습니다." }
    ]
  },
  {
    id: "L5-607",
    word: "uncanny",
    meaning: "묘한, 신기한, 기이한",
    examples: [
      { en: "She has an uncanny ability to remember everyone's birthday.", kr: "그녀는 모든 사람의 생일을 기억하는 신기한 능력이 있어요." },
      { en: "There's an uncanny resemblance between you and your dad.", kr: "너랑 너희 아빠는 묘할 정도로 닮았어." }
    ]
  },
  {
    id: "L5-608",
    word: "escalation",
    meaning: "확대, 고조, 급등",
    examples: [
      { en: "Leaders called for calm to avoid further escalation.", kr: "지도자들은 사태가 더 확대되는 걸 막기 위해 자제를 촉구했습니다." },
      { en: "We've seen a sharp escalation in shipping costs.", kr: "배송비가 급격히 올랐어요." }
    ]
  },
  {
    id: "L5-609",
    word: "preparedness",
    meaning: "대비, 준비 태세",
    examples: [
      { en: "The city improved its emergency preparedness after the flood.", kr: "홍수 이후 시는 비상 대비 태세를 강화했습니다." },
      { en: "Our office runs a disaster preparedness drill twice a year.", kr: "우리 사무실은 1년에 두 번 재난 대비 훈련을 해요." }
    ]
  },
  {
    id: "L5-610",
    word: "simplistic",
    meaning: "지나치게 단순화한",
    examples: [
      { en: "That's a simplistic view of a very complex problem.", kr: "그건 매우 복잡한 문제를 지나치게 단순하게 보는 시각이에요." },
      { en: "His solution sounds good but is too simplistic.", kr: "그의 해결책은 그럴듯하게 들리지만 너무 단순해요." }
    ]
  },
  {
    id: "L5-748",
    word: "brag",
    meaning: "자랑하다, 뽐내다",
    examples: [
      { en: "He keeps bragging about his new car.", kr: "걔 계속 새 차 자랑만 해." },
      { en: "I don't mean to brag, but I got the promotion.", kr: "자랑하려는 건 아닌데, 저 승진했어요." }
    ]
  },
  {
    id: "L5-749",
    word: "upfront",
    meaning: "선불로, 미리, 솔직한",
    examples: [
      { en: "Do I have to pay upfront, or can I pay later?", kr: "선불로 내야 하나요, 아니면 나중에 내도 되나요?" },
      { en: "I'll be upfront with you, the budget is really tight.", kr: "솔직하게 말씀드릴게요, 예산이 정말 빠듯해요." }
    ]
  },
  {
    id: "L5-611",
    word: "contentious",
    meaning: "논란이 많은, 논쟁적인",
    examples: [
      { en: "Immigration remains a contentious issue in the election.", kr: "이민은 이번 선거에서 여전히 논란이 많은 쟁점입니다." },
      { en: "The budget meeting got pretty contentious.", kr: "예산 회의가 꽤 논쟁적으로 흘러갔어요." }
    ]
  },
  {
    id: "L5-612",
    word: "hypocritical",
    meaning: "위선적인",
    examples: [
      { en: "It's hypocritical to complain about waste and then buy bottled water.", kr: "낭비에 대해 불평하고선 생수를 사는 건 위선적이야." },
      { en: "Voters found the senator's comments hypocritical.", kr: "유권자들은 그 상원의원의 발언이 위선적이라고 생각했어요." }
    ]
  },
  {
    id: "L5-613",
    word: "nurture",
    meaning: "기르다, 육성하다, 보살피다",
    examples: [
      { en: "Good managers nurture talent instead of controlling it.", kr: "좋은 관리자는 인재를 통제하지 않고 육성해요." },
      { en: "She nurtured the small plants until they were ready to move outside.", kr: "그녀는 작은 식물들을 밖에 옮겨 심을 수 있을 때까지 정성껏 길렀어요." }
    ]
  },
  {
    id: "L5-614",
    word: "overt",
    meaning: "공공연한, 노골적인",
    examples: [
      { en: "There was no overt hostility, but the tension was obvious.", kr: "공공연한 적대감은 없었지만 긴장감은 분명했어요." },
      { en: "The ad avoids overt references to the competitor.", kr: "그 광고는 경쟁사를 노골적으로 언급하는 것을 피해요." }
    ]
  },
  {
    id: "L5-248",
    word: "vindictive",
    meaning: "앙심을 품은, 보복하려는",
    examples: [
      { en: "Don't be vindictive; just let it go.", kr: "앙심 품지 말고 그냥 잊어버려." },
      { en: "My ex got really vindictive after we broke up.", kr: "전 애인이 헤어지고 나서 정말 앙심을 품고 굴었어." }
    ]
  },
  {
    id: "L5-249",
    word: "virulent",
    meaning: "독한, 치명적인, 악의에 찬",
    examples: [
      { en: "That was a really virulent strain of flu going around.", kr: "그때 돌던 독감은 정말 독한 종류였어." },
      { en: "The comments online got pretty virulent after the game.", kr: "경기 끝나고 온라인 댓글이 꽤 악랄해졌어." }
    ]
  },
  {
    id: "L5-750",
    word: "workload",
    meaning: "업무량, 일의 양",
    examples: [
      { en: "My workload has doubled since Jake left the team.", kr: "제이크가 팀을 떠난 뒤로 제 업무량이 두 배가 됐어요." },
      { en: "Can we talk about splitting the workload more evenly?", kr: "업무량을 좀 더 고르게 나누는 것에 대해 얘기할 수 있을까요?" }
    ]
  },
  {
    id: "L5-615",
    word: "prematurely",
    meaning: "너무 이르게, 시기상조로",
    examples: [
      { en: "The baby was born prematurely but is healthy now.", kr: "그 아기는 조산으로 태어났지만 지금은 건강해요." },
      { en: "Don't celebrate prematurely; the deal isn't signed yet.", kr: "너무 일찍 축하하지 마. 아직 계약서에 서명 안 했어." }
    ]
  },
  {
    id: "L5-616",
    word: "aspiration",
    meaning: "열망, 포부",
    examples: [
      { en: "My aspiration is to open my own bakery someday.", kr: "제 포부는 언젠가 제 빵집을 여는 거예요." },
      { en: "The survey asked young workers about their career aspirations.", kr: "그 설문은 젊은 직장인들에게 직업적 포부에 대해 물었습니다." }
    ]
  },
  {
    id: "L5-617",
    word: "considerate",
    meaning: "사려 깊은, 배려하는",
    examples: [
      { en: "It was very considerate of you to call ahead.", kr: "미리 전화해 주시다니 정말 사려 깊으시네요." },
      { en: "Please be considerate and keep your voice down in the library.", kr: "도서관에서는 다른 사람을 배려해서 목소리를 낮춰 주세요." }
    ]
  },
  {
    id: "L5-618",
    word: "exponentially",
    meaning: "기하급수적으로",
    examples: [
      { en: "Our online sales have grown exponentially this year.", kr: "올해 온라인 매출이 기하급수적으로 늘었어요." },
      { en: "The cost rises exponentially if we delay the repairs.", kr: "수리를 미루면 비용이 기하급수적으로 늘어나요." }
    ]
  },
  {
    id: "L5-619",
    word: "fiasco",
    meaning: "대실패, 낭패",
    examples: [
      { en: "The product launch was a complete fiasco.", kr: "그 제품 출시는 완전한 대실패였어요." },
      { en: "After last year's fiasco, we're hiring a professional planner.", kr: "작년의 낭패 이후로 우리는 전문 기획자를 고용할 거예요." }
    ]
  },
  {
    id: "L5-256",
    word: "xenophobia",
    meaning: "외국인 혐오",
    examples: [
      { en: "Sadly, some tourists still face xenophobia here.", kr: "안타깝게도 여기서 아직도 외국인 혐오를 겪는 관광객들이 있어요." },
      { en: "Blaming immigrants for everything is just xenophobia.", kr: "모든 걸 이민자 탓으로 돌리는 건 그냥 외국인 혐오야." }
    ]
  },
  {
    id: "L5-620",
    word: "unresolved",
    meaning: "해결되지 않은, 미해결의",
    examples: [
      { en: "Several issues remain unresolved after the meeting.", kr: "회의 후에도 몇 가지 문제가 해결되지 않은 채 남아 있어요." },
      { en: "They still have unresolved feelings about the breakup.", kr: "그들은 이별에 대해 아직 정리되지 않은 감정이 있어요." }
    ]
  },
  {
    id: "L5-621",
    word: "adversary",
    meaning: "적, 상대",
    examples: [
      { en: "In court, each company treated the other as a bitter adversary.", kr: "법정에서 두 회사는 서로를 지독한 적수로 대했어요." },
      { en: "She respected her adversary's skill even after losing the match.", kr: "그녀는 경기에 진 뒤에도 상대의 실력을 존중했어요." }
    ]
  },
  {
    id: "L5-622",
    word: "recourse",
    meaning: "의지할 수단, 구제 수단",
    examples: [
      { en: "If the airline loses your bag, what recourse do you have?", kr: "항공사가 가방을 분실하면 어떤 구제 수단이 있나요?" },
      { en: "Without a contract, you have little recourse if they don't pay.", kr: "계약서가 없으면 그들이 돈을 안 줘도 손쓸 방법이 거의 없어요." }
    ]
  },
  {
    id: "L5-623",
    word: "undue",
    meaning: "과도한, 지나친",
    examples: [
      { en: "I don't want to put undue pressure on you.", kr: "당신에게 지나친 부담을 주고 싶지 않아요." },
      { en: "The new rules place an undue burden on small businesses.", kr: "새 규정은 소규모 사업체에 과도한 부담을 줍니다." }
    ]
  },
  {
    id: "L5-624",
    word: "unsettling",
    meaning: "불안하게 하는, 뒤숭숭한",
    examples: [
      { en: "It was unsettling to hear footsteps in the empty office.", kr: "빈 사무실에서 발소리를 듣는 건 불안했어요." },
      { en: "The news about the merger was unsettling for many employees.", kr: "합병 소식은 많은 직원들을 불안하게 했어요." }
    ]
  },
  {
    id: "L5-625",
    word: "constraint",
    meaning: "제약, 제한",
    examples: [
      { en: "Due to budget constraints, we can't hire anyone this year.", kr: "예산 제약 때문에 올해는 아무도 채용할 수 없어요." },
      { en: "Time constraints forced us to skip the Q&A session.", kr: "시간 제약 때문에 질의응답 시간을 건너뛰어야 했어요." }
    ]
  },
  {
    id: "L5-626",
    word: "frail",
    meaning: "노쇠한, 허약한",
    examples: [
      { en: "My grandmother is getting frail, so we visit her often.", kr: "할머니께서 점점 쇠약해지셔서 자주 찾아뵈어요." },
      { en: "The patient is still too frail to travel.", kr: "그 환자는 아직 너무 허약해서 이동할 수 없어요." }
    ]
  },
  {
    id: "L5-264",
    word: "conclusively",
    meaning: "확실히, 결정적으로",
    examples: [
      { en: "We can't say conclusively that the update caused the crash.", kr: "업데이트 때문에 오류가 났다고 확실히 말할 수는 없어요." },
      { en: "The test results conclusively ruled out an infection.", kr: "검사 결과 감염은 확실히 아닌 걸로 나왔어요." }
    ]
  },
  {
    id: "L5-627",
    word: "impractical",
    meaning: "비현실적인, 실용적이지 않은",
    examples: [
      { en: "White sofas are impractical if you have small kids.", kr: "어린 아이가 있다면 흰색 소파는 실용적이지 않아요." },
      { en: "The plan is creative but impractical given our budget.", kr: "그 계획은 창의적이지만 우리 예산을 고려하면 비현실적이에요." }
    ]
  },
  {
    id: "L5-628",
    word: "irreversible",
    meaning: "되돌릴 수 없는",
    examples: [
      { en: "Once you delete the account, the action is irreversible.", kr: "계정을 삭제하면 되돌릴 수 없어요." },
      { en: "Scientists warn that some climate damage may be irreversible.", kr: "과학자들은 일부 기후 피해가 되돌릴 수 없을지도 모른다고 경고합니다." }
    ]
  },
  {
    id: "L5-751",
    word: "inconvenient",
    meaning: "불편한, 곤란한",
    examples: [
      { en: "Sorry, is this an inconvenient time to talk?", kr: "죄송한데, 지금 얘기하기 곤란하세요?" },
      { en: "The new bus schedule is really inconvenient for me.", kr: "새 버스 시간표가 저한테는 정말 불편해요." }
    ]
  },
  {
    id: "L5-629",
    word: "unintended",
    meaning: "의도하지 않은",
    examples: [
      { en: "The new policy had some unintended consequences.", kr: "새 정책은 몇 가지 의도하지 않은 결과를 낳았어요." },
      { en: "The pun was unintended, I promise.", kr: "그 말장난은 의도한 게 아니었어, 진짜야." }
    ]
  },
  {
    id: "L5-630",
    word: "whim",
    meaning: "변덕, 즉흥적인 생각",
    examples: [
      { en: "We booked the trip on a whim last night.", kr: "어젯밤 즉흥적으로 여행을 예약했어요." },
      { en: "The schedule keeps changing at the boss's whim.", kr: "일정이 사장님 변덕에 따라 계속 바뀌어요." }
    ]
  },
  {
    id: "L5-631",
    word: "withhold",
    meaning: "보류하다, 주지 않다, 숨기다",
    examples: [
      { en: "The company can withhold your final paycheck if you don't return the laptop.", kr: "노트북을 반납하지 않으면 회사가 마지막 월급 지급을 보류할 수 있어요." },
      { en: "Please don't withhold any information from your doctor.", kr: "의사에게 어떤 정보도 숨기지 마세요." }
    ]
  },
  {
    id: "L5-632",
    word: "astonished",
    meaning: "깜짝 놀란",
    examples: [
      { en: "I was astonished at how cheap the flights were.", kr: "항공권이 얼마나 싼지 깜짝 놀랐어요." },
      { en: "The audience looked astonished by the magician's final trick.", kr: "관객들은 마술사의 마지막 묘기에 깜짝 놀란 표정이었어요." }
    ]
  },
  {
    id: "L5-633",
    word: "flatter",
    meaning: "아첨하다, 우쭐하게 하다",
    examples: [
      { en: "You're just flattering me because you want a favor.", kr: "부탁할 게 있어서 나한테 아부하는 거지." },
      { en: "I'm flattered that you asked me to give the speech.", kr: "저에게 연설을 부탁해 주셔서 영광입니다." }
    ]
  },
  {
    id: "L5-634",
    word: "unthinkable",
    meaning: "상상도 할 수 없는",
    examples: [
      { en: "Ten years ago, working from home full-time was unthinkable.", kr: "10년 전에는 완전 재택근무가 상상도 할 수 없는 일이었어요." },
      { en: "Losing the championship at home was simply unthinkable for the fans.", kr: "팬들에게 홈에서 우승을 놓치는 건 그야말로 상상도 할 수 없는 일이었어요." }
    ]
  },
  {
    id: "L5-635",
    word: "dismay",
    meaning: "실망, 낙담, 당황",
    examples: [
      { en: "To my dismay, the store had already closed.", kr: "실망스럽게도 가게는 이미 문을 닫았어요." },
      { en: "Fans reacted with dismay to the ticket price increase.", kr: "팬들은 티켓 가격 인상에 실망을 드러냈어요." }
    ]
  },
  {
    id: "L5-636",
    word: "understandably",
    meaning: "당연히, 이해할 만하게",
    examples: [
      { en: "She was understandably upset after losing her job.", kr: "직장을 잃은 뒤 그녀가 속상해한 건 당연했어요." },
      { en: "Understandably, many customers are frustrated with the long wait times.", kr: "당연하게도 많은 고객들이 긴 대기 시간에 불만이 있어요." }
    ]
  },
  {
    id: "L5-637",
    word: "wrongdoing",
    meaning: "비행, 부정행위",
    examples: [
      { en: "The company denied any wrongdoing in the scandal.", kr: "회사는 그 스캔들과 관련한 어떠한 부정행위도 부인했습니다." },
      { en: "An investigation found no evidence of wrongdoing by the staff.", kr: "조사 결과 직원들의 부정행위에 대한 증거는 발견되지 않았습니다." }
    ]
  },
  {
    id: "L5-638",
    word: "commend",
    meaning: "칭찬하다, 높이 평가하다",
    examples: [
      { en: "I commend you for staying calm under pressure.", kr: "압박 속에서도 침착함을 유지한 것을 칭찬합니다." },
      { en: "The mayor commended the volunteers for their hard work.", kr: "시장은 자원봉사자들의 노고를 높이 평가했습니다." }
    ]
  },
  {
    id: "L5-639",
    word: "fathom",
    meaning: "이해하다, 헤아리다",
    examples: [
      { en: "I can't fathom why anyone would pay that much for coffee.", kr: "커피에 그렇게 많은 돈을 내는 사람이 있다니 이해가 안 돼요." },
      { en: "It's hard to fathom how big the universe really is.", kr: "우주가 실제로 얼마나 큰지 헤아리기 어려워요." }
    ]
  },
  {
    id: "L5-640",
    word: "firsthand",
    meaning: "직접, 직접 경험한",
    examples: [
      { en: "I've seen firsthand how stressful that job can be.", kr: "그 일이 얼마나 스트레스가 큰지 직접 봤어요." },
      { en: "Interns get firsthand experience working with real clients.", kr: "인턴들은 실제 고객과 일하며 직접 경험을 쌓아요." }
    ]
  },
  {
    id: "L5-641",
    word: "impeccable",
    meaning: "흠잡을 데 없는, 완벽한",
    examples: [
      { en: "The service at that restaurant was impeccable.", kr: "그 식당의 서비스는 흠잡을 데 없었어요." },
      { en: "She speaks English with impeccable grammar.", kr: "그녀는 완벽한 문법으로 영어를 해요." }
    ]
  },
  {
    id: "L5-642",
    word: "pessimistic",
    meaning: "비관적인",
    examples: [
      { en: "Don't be so pessimistic; we still have a chance.", kr: "너무 비관적으로 생각하지 마. 아직 기회가 있어." },
      { en: "Analysts are pessimistic about the housing market this year.", kr: "분석가들은 올해 주택 시장에 대해 비관적입니다." }
    ]
  },
  {
    id: "L5-643",
    word: "sluggish",
    meaning: "부진한, 느릿느릿한, 나른한",
    examples: [
      { en: "I always feel sluggish after a heavy lunch.", kr: "점심을 많이 먹으면 항상 몸이 처져요." },
      { en: "Sales have been sluggish since the start of the year.", kr: "연초부터 판매가 부진했어요." }
    ]
  },
  {
    id: "L5-644",
    word: "timid",
    meaning: "소심한, 겁 많은",
    examples: [
      { en: "He was too timid to speak up in meetings.", kr: "그는 너무 소심해서 회의에서 의견을 말하지 못했어요." },
      { en: "The kitten was timid at first but now loves everyone.", kr: "그 새끼 고양이는 처음엔 겁이 많았지만 지금은 모두를 좋아해요." }
    ]
  },
  {
    id: "L5-645",
    word: "ultimatum",
    meaning: "최후통첩",
    examples: [
      { en: "My landlord gave me an ultimatum: pay or move out.", kr: "집주인이 나에게 최후통첩을 했어. 돈을 내든지 나가든지." },
      { en: "The union issued an ultimatum to management over wages.", kr: "노조는 임금 문제로 경영진에 최후통첩을 보냈습니다." }
    ]
  },
  {
    id: "L5-646",
    word: "prerequisite",
    meaning: "전제 조건, 필수 조건, 선수 과목",
    examples: [
      { en: "Basic spreadsheet skills are a prerequisite for this position.", kr: "기본적인 스프레드시트 활용 능력은 이 직무의 필수 조건입니다." },
      { en: "Intro to Statistics is a prerequisite for this course.", kr: "통계학 입문은 이 과목의 선수 과목이에요." }
    ]
  },
  {
    id: "L5-647",
    word: "diligent",
    meaning: "부지런한, 성실한, 꼼꼼한",
    examples: [
      { en: "She's a diligent worker who never misses a deadline.", kr: "그녀는 마감을 한 번도 놓치지 않는 성실한 직원이에요." },
      { en: "Thanks to his diligent research, we found the error.", kr: "그의 꼼꼼한 조사 덕분에 오류를 찾았어요." }
    ]
  },
  {
    id: "L5-648",
    word: "ingenuity",
    meaning: "독창성, 기발함",
    examples: [
      { en: "With a little ingenuity, we fixed the leak with tape.", kr: "약간의 기발함을 발휘해 테이프로 새는 곳을 고쳤어요." },
      { en: "The project shows the ingenuity of our young engineers.", kr: "그 프로젝트는 젊은 엔지니어들의 독창성을 보여 줍니다." }
    ]
  },
  {
    id: "L5-288",
    word: "legitimately",
    meaning: "정당하게, 진짜로",
    examples: [
      { en: "Are you legitimately sick, or do you just want a day off?", kr: "너 진짜 아픈 거야, 아니면 그냥 하루 쉬고 싶은 거야?" },
      { en: "You can legitimately ask for a refund in this case.", kr: "이 경우엔 정당하게 환불을 요청할 수 있어요." }
    ]
  },
  {
    id: "L5-289",
    word: "meticulously",
    meaning: "세심하게, 꼼꼼하게",
    examples: [
      { en: "She meticulously planned every detail of our wedding.", kr: "그녀가 우리 결혼식의 세세한 부분까지 꼼꼼하게 계획했어요." },
      { en: "I meticulously checked the numbers, but I still missed one.", kr: "숫자를 꼼꼼하게 확인했는데도 하나를 놓쳤어요." }
    ]
  },
  {
    id: "L5-649",
    word: "itinerary",
    meaning: "여행 일정(표)",
    examples: [
      { en: "I'll email you the itinerary for the business trip.", kr: "출장 일정표를 이메일로 보내 드릴게요." },
      { en: "Our itinerary includes three days in Rome.", kr: "우리 여행 일정에는 로마에서의 3일이 포함돼 있어요." }
    ]
  },
  {
    id: "L5-650",
    word: "plagiarism",
    meaning: "표절",
    examples: [
      { en: "The student was suspended for plagiarism.", kr: "그 학생은 표절로 정학을 받았어요." },
      { en: "Always cite your sources to avoid plagiarism.", kr: "표절을 피하려면 항상 출처를 밝히세요." }
    ]
  },
  {
    id: "L5-651",
    word: "unfounded",
    meaning: "근거 없는",
    examples: [
      { en: "Your fears about the interview were completely unfounded.", kr: "면접에 대한 네 걱정은 전혀 근거가 없었어." },
      { en: "The company says the rumors of layoffs are unfounded.", kr: "회사는 정리해고 소문이 근거 없다고 말합니다." }
    ]
  },
  {
    id: "L5-652",
    word: "frivolous",
    meaning: "쓸데없는, 하찮은, 터무니없는",
    examples: [
      { en: "Stop spending money on frivolous things.", kr: "쓸데없는 것에 돈 좀 그만 써." },
      { en: "The judge dismissed the lawsuit as frivolous.", kr: "판사는 그 소송을 터무니없다며 기각했습니다." }
    ]
  },
  {
    id: "L5-653",
    word: "misconception",
    meaning: "오해, 잘못된 생각",
    examples: [
      { en: "It's a common misconception that introverts don't like people.", kr: "내향적인 사람들이 사람을 싫어한다는 건 흔한 오해예요." },
      { en: "Let me clear up a few misconceptions about our product.", kr: "저희 제품에 대한 몇 가지 오해를 풀어 드릴게요." }
    ]
  },
  {
    id: "L5-654",
    word: "nudge",
    meaning: "(팔꿈치로) 쿡 찌르다, 슬쩍 재촉하다",
    examples: [
      { en: "She nudged me when the boss walked in.", kr: "사장님이 들어오자 그녀가 나를 팔꿈치로 쿡 찔렀어요." },
      { en: "Can you nudge the team to submit their reports by Friday?", kr: "팀원들한테 금요일까지 보고서를 내라고 슬쩍 재촉해 줄래요?" }
    ]
  },
  {
    id: "L5-655",
    word: "reciprocal",
    meaning: "상호의, 호혜적인",
    examples: [
      { en: "The two universities have a reciprocal exchange program.", kr: "두 대학은 상호 교환 프로그램을 운영하고 있어요." },
      { en: "Trust in a relationship has to be reciprocal.", kr: "관계에서 신뢰는 서로 주고받는 것이어야 해요." }
    ]
  },
  {
    id: "L5-656",
    word: "anecdote",
    meaning: "일화",
    examples: [
      { en: "He started his speech with a funny anecdote about his first job.", kr: "그는 첫 직장에 관한 재미있는 일화로 연설을 시작했어요." },
      { en: "Personal anecdotes make a presentation more memorable.", kr: "개인적인 일화는 발표를 더 기억에 남게 해요." }
    ]
  },
  {
    id: "L5-657",
    word: "backlog",
    meaning: "밀린 일, 잔무",
    examples: [
      { en: "I have a huge backlog of emails after my vacation.", kr: "휴가를 다녀왔더니 밀린 이메일이 엄청나요." },
      { en: "The factory is working overtime to clear its backlog of orders.", kr: "공장은 밀린 주문을 처리하기 위해 초과 근무를 하고 있어요." }
    ]
  },
  {
    id: "L5-658",
    word: "clumsy",
    meaning: "서투른, 어설픈, 덜렁대는",
    examples: [
      { en: "I'm so clumsy that I spilled coffee on my laptop again.", kr: "난 너무 덜렁대서 또 노트북에 커피를 쏟았어." },
      { en: "His apology sounded clumsy, but I knew he meant it.", kr: "그의 사과는 어설프게 들렸지만, 진심이라는 걸 알았어요." }
    ]
  },
  {
    id: "L5-659",
    word: "deprivation",
    meaning: "결핍, 부족, 박탈",
    examples: [
      { en: "Sleep deprivation makes it hard to focus at work.", kr: "수면 부족은 직장에서 집중하기 어렵게 만들어요." },
      { en: "Kids from poor families often face deprivation early on.", kr: "가난한 집 아이들은 어릴 때부터 결핍을 겪는 경우가 많아요." }
    ]
  }
];

const wordsLevel5_Part4 = [
  {
    id: "L5-660",
    word: "feasibility",
    meaning: "실현 가능성, 타당성",
    examples: [
      { en: "We need a feasibility study before we approve the budget.", kr: "예산을 승인하기 전에 타당성 조사가 필요합니다." },
      { en: "I doubt the feasibility of finishing all this by Friday.", kr: "금요일까지 이걸 다 끝낼 수 있을지 실현 가능성이 의심스러워요." }
    ]
  },
  {
    id: "L5-661",
    word: "frenzy",
    meaning: "광란, 열광, 북새통",
    examples: [
      { en: "The holiday sale created a shopping frenzy at the mall.", kr: "연휴 세일로 쇼핑몰은 쇼핑객들로 북새통을 이뤘어요." },
      { en: "The news sent investors into a buying frenzy.", kr: "그 소식에 투자자들은 광적으로 매수에 나섰습니다." }
    ]
  },
  {
    id: "L5-662",
    word: "indifferent",
    meaning: "무관심한, 개의치 않는",
    examples: [
      { en: "He seemed indifferent to the criticism from his boss.", kr: "그는 상사의 비판에 개의치 않는 것 같았어요." },
      { en: "Many young voters feel indifferent about local elections.", kr: "많은 젊은 유권자들이 지방 선거에 무관심합니다." }
    ]
  },
  {
    id: "L5-663",
    word: "powerhouse",
    meaning: "강자, 강국, 실력자",
    examples: [
      { en: "Korea has become a global powerhouse in pop culture.", kr: "한국은 대중문화의 세계적인 강국이 되었습니다." },
      { en: "Our new sales manager is an absolute powerhouse.", kr: "우리 새 영업 관리자는 정말 대단한 실력자예요." }
    ]
  },
  {
    id: "L5-664",
    word: "provocative",
    meaning: "도발적인, 자극적인",
    examples: [
      { en: "The speaker asked a provocative question to start the debate.", kr: "연사는 토론을 시작하려고 도발적인 질문을 던졌어요." },
      { en: "The ad was so provocative that it was quickly pulled.", kr: "그 광고는 너무 자극적이어서 금방 내려졌습니다." }
    ]
  },
  {
    id: "L5-306",
    word: "reiterated",
    meaning: "거듭 말하다, 다시 강조하다",
    examples: [
      { en: "I reiterated that the deadline is Friday, but nobody listened.", kr: "마감이 금요일이라고 거듭 말했는데 아무도 안 들었어요." },
      { en: "The boss reiterated that nobody's getting laid off.", kr: "사장님이 아무도 해고되지 않는다고 다시 강조했어요." }
    ]
  },
  {
    id: "L5-665",
    word: "reclaim",
    meaning: "되찾다, 회수하다",
    examples: [
      { en: "She took a long vacation to reclaim her energy.", kr: "그녀는 에너지를 되찾으려고 긴 휴가를 냈어요." },
      { en: "The city plans to reclaim the old factory site as a park.", kr: "시는 옛 공장 부지를 공원으로 되살릴 계획입니다." }
    ]
  },
  {
    id: "L5-666",
    word: "relocate",
    meaning: "이전하다, 이사하다",
    examples: [
      { en: "The company plans to relocate its headquarters to Texas.", kr: "회사는 본사를 텍사스로 이전할 계획입니다." },
      { en: "Would you be willing to relocate for this job?", kr: "이 일을 위해 이사할 의향이 있으신가요?" }
    ]
  },
  {
    id: "L5-667",
    word: "repayment",
    meaning: "상환, 갚음",
    examples: [
      { en: "The loan repayment is due on the first of every month.", kr: "대출 상환일은 매달 1일입니다." },
      { en: "I set up automatic repayment so I never miss a payment.", kr: "납부를 놓치지 않으려고 자동 상환을 설정했어요." }
    ]
  },
  {
    id: "L5-310",
    word: "requisite",
    meaning: "필요한, 필수적인",
    examples: [
      { en: "Do you have the requisite experience for this role?", kr: "이 직무에 필요한 경력이 있으세요?" },
      { en: "He has the requisite skills, but not the right attitude.", kr: "그는 필요한 기술은 있지만 태도가 별로예요." }
    ]
  },
  {
    id: "L5-668",
    word: "sturdy",
    meaning: "튼튼한, 견고한",
    examples: [
      { en: "Buy a sturdy suitcase if you travel a lot.", kr: "여행을 자주 한다면 튼튼한 여행 가방을 사세요." },
      { en: "This old wooden table is still surprisingly sturdy.", kr: "이 오래된 나무 테이블은 아직도 놀라울 만큼 튼튼해요." }
    ]
  },
  {
    id: "L5-669",
    word: "timetable",
    meaning: "시간표, 일정표",
    examples: [
      { en: "Check the train timetable before you leave the hotel.", kr: "호텔을 나서기 전에 기차 시간표를 확인하세요." },
      { en: "The government set a strict timetable for the new policy.", kr: "정부는 새 정책에 대해 엄격한 일정표를 정했습니다." }
    ]
  },
  {
    id: "L5-670",
    word: "viability",
    meaning: "실행 가능성, 존속 가능성",
    examples: [
      { en: "Investors questioned the long-term viability of the startup.", kr: "투자자들은 그 스타트업의 장기적인 존속 가능성에 의문을 제기했어요." },
      { en: "We tested the viability of the plan with a small pilot.", kr: "우리는 소규모 시범 운영으로 그 계획의 실행 가능성을 시험했어요." }
    ]
  },
  {
    id: "L5-671",
    word: "appraisal",
    meaning: "평가, 감정",
    examples: [
      { en: "My annual performance appraisal is scheduled for next week.", kr: "제 연간 인사 평가는 다음 주로 잡혀 있어요." },
      { en: "The bank requires a home appraisal before approving the loan.", kr: "은행은 대출을 승인하기 전에 주택 감정을 요구합니다." }
    ]
  },
  {
    id: "L5-672",
    word: "bleak",
    meaning: "암울한, 황량한",
    examples: [
      { en: "The economic outlook for next year looks bleak.", kr: "내년 경제 전망은 암울해 보입니다." },
      { en: "The small town looked bleak and empty in the winter.", kr: "그 작은 마을은 겨울에 황량하고 텅 비어 보였어요." }
    ]
  },
  {
    id: "L5-673",
    word: "dizzy",
    meaning: "어지러운",
    examples: [
      { en: "I felt dizzy after standing up too quickly.", kr: "너무 빨리 일어났더니 어지러웠어요." },
      { en: "If you feel dizzy, sit down and drink some water.", kr: "어지러우면 앉아서 물을 좀 마셔." }
    ]
  },
  {
    id: "L5-317",
    word: "synthesis",
    meaning: "종합, 합성",
    examples: [
      { en: "Her plan is a nice synthesis of both our ideas.", kr: "그녀의 계획은 우리 둘의 아이디어를 잘 종합한 거예요." },
      { en: "Your body needs sunlight for vitamin D synthesis.", kr: "몸이 비타민 D를 합성하려면 햇빛이 필요해요." }
    ]
  },
  {
    id: "L5-674",
    word: "expressive",
    meaning: "표현력이 풍부한, 감정이 잘 드러나는",
    examples: [
      { en: "She has very expressive eyes when she tells stories.", kr: "그녀는 이야기할 때 눈빛에 감정이 풍부하게 드러나요." },
      { en: "Children are often more expressive than adults about their feelings.", kr: "아이들은 종종 어른보다 자기 감정을 더 잘 표현해요." }
    ]
  },
  {
    id: "L5-675",
    word: "livelihood",
    meaning: "생계, 생계 수단",
    examples: [
      { en: "Fishing is the main livelihood for people in this village.", kr: "어업은 이 마을 사람들의 주된 생계 수단이에요." },
      { en: "The factory closure threatens the livelihoods of hundreds of workers.", kr: "공장 폐쇄는 수백 명 노동자의 생계를 위협합니다." }
    ]
  },
  {
    id: "L5-676",
    word: "miraculous",
    meaning: "기적적인, 기적 같은",
    examples: [
      { en: "She made a miraculous recovery after the accident.", kr: "그녀는 사고 후 기적적으로 회복했어요." },
      { en: "Finding my lost wallet in the taxi felt miraculous.", kr: "택시에서 잃어버린 지갑을 찾은 건 기적 같았어요." }
    ]
  },
  {
    id: "L5-752",
    word: "attire",
    meaning: "복장, 옷차림",
    examples: [
      { en: "Is casual attire okay for the party tonight?", kr: "오늘 밤 파티에 캐주얼 복장 괜찮아?" },
      { en: "Business attire is required for tomorrow's client meeting.", kr: "내일 고객 미팅에는 정장 차림으로 와야 해요." }
    ]
  },
  {
    id: "L5-677",
    word: "mourn",
    meaning: "애도하다, 슬퍼하다",
    examples: [
      { en: "The whole town mourned the loss of its beloved teacher.", kr: "온 마을이 사랑받던 선생님을 잃은 것을 애도했어요." },
      { en: "It's okay to take time to mourn after a breakup.", kr: "이별 후에 슬퍼할 시간을 갖는 건 괜찮아요." }
    ]
  },
  {
    id: "L5-323",
    word: "unwittingly",
    meaning: "자신도 모르게, 무심코",
    examples: [
      { en: "I unwittingly spoiled the movie ending for her.", kr: "나도 모르게 걔한테 영화 결말을 스포해 버렸어." },
      { en: "Many people unwittingly share fake news online.", kr: "많은 사람들이 자기도 모르게 온라인에서 가짜 뉴스를 공유해요." }
    ]
  },
  {
    id: "L5-678",
    word: "obsessive",
    meaning: "집착하는, 강박적인",
    examples: [
      { en: "He's a little obsessive about keeping his desk clean.", kr: "그는 책상을 깨끗하게 유지하는 데 좀 집착해요." },
      { en: "Obsessive checking of work email can ruin your weekend.", kr: "업무 이메일을 강박적으로 확인하면 주말을 망칠 수 있어요." }
    ]
  },
  {
    id: "L5-679",
    word: "proficiency",
    meaning: "숙달, 능숙함, 실력",
    examples: [
      { en: "This job requires proficiency in English and Excel.", kr: "이 일은 영어와 엑셀에 능숙해야 합니다." },
      { en: "She took a test to prove her language proficiency.", kr: "그녀는 어학 실력을 증명하기 위해 시험을 봤어요." }
    ]
  },
  {
    id: "L5-680",
    word: "reinforcement",
    meaning: "강화, 보강",
    examples: [
      { en: "Positive reinforcement works better than punishment with kids.", kr: "아이들에게는 벌보다 긍정적 강화가 더 효과적이에요." },
      { en: "The old bridge needs steel reinforcement before winter.", kr: "그 오래된 다리는 겨울 전에 철골 보강이 필요해요." }
    ]
  },
  {
    id: "L5-681",
    word: "divert",
    meaning: "우회시키다, 전환하다, (주의를) 돌리다",
    examples: [
      { en: "Our flight was diverted to another airport because of fog.", kr: "우리 비행기는 안개 때문에 다른 공항으로 우회했어요." },
      { en: "He told a joke to divert attention from his mistake.", kr: "그는 자기 실수에서 관심을 돌리려고 농담을 했어요." }
    ]
  },
  {
    id: "L5-682",
    word: "elegance",
    meaning: "우아함, 품격, 세련됨",
    examples: [
      { en: "The hotel lobby has a quiet elegance that guests love.", kr: "그 호텔 로비에는 손님들이 좋아하는 은은한 우아함이 있어요." },
      { en: "I admire the elegance of her simple solution.", kr: "그녀의 간결한 해결책이 가진 세련됨에 감탄해요." }
    ]
  },
  {
    id: "L5-683",
    word: "irritation",
    meaning: "짜증, 자극",
    examples: [
      { en: "She tried to hide her irritation during the long meeting.", kr: "그녀는 긴 회의 내내 짜증을 숨기려고 애썼어요." },
      { en: "This cream may cause mild skin irritation.", kr: "이 크림은 가벼운 피부 자극을 일으킬 수 있어요." }
    ]
  },
  {
    id: "L5-684",
    word: "solitude",
    meaning: "고독, 혼자 있는 시간",
    examples: [
      { en: "I enjoy the solitude of early morning walks.", kr: "나는 이른 아침 산책에서 혼자 있는 고요함을 즐겨." },
      { en: "After a busy week, he needed a weekend of solitude.", kr: "바쁜 한 주를 보낸 뒤 그는 혼자 지내는 주말이 필요했어요." }
    ]
  },
  {
    id: "L5-685",
    word: "truthful",
    meaning: "정직한, 진실한, 사실대로의",
    examples: [
      { en: "Please be truthful with me about what happened.", kr: "무슨 일이 있었는지 나한테 솔직하게 말해 줘." },
      { en: "The witness gave a truthful account of the accident.", kr: "그 증인은 사고에 대해 사실대로 진술했습니다." }
    ]
  },
  {
    id: "L5-686",
    word: "unconventional",
    meaning: "독특한, 관례를 벗어난, 색다른",
    examples: [
      { en: "Her unconventional approach to marketing really paid off.", kr: "그녀의 색다른 마케팅 방식이 정말 성과를 거뒀어요." },
      { en: "He took an unconventional path into the tech industry.", kr: "그는 남다른 길을 거쳐 기술 업계에 들어왔어요." }
    ]
  },
  {
    id: "L5-687",
    word: "hurdle",
    meaning: "장애물, 난관",
    examples: [
      { en: "Getting a work visa was the biggest hurdle for me.", kr: "취업 비자를 받는 게 제게 가장 큰 난관이었어요." },
      { en: "The project cleared its final hurdle with the board's approval.", kr: "그 프로젝트는 이사회 승인으로 마지막 장애물을 넘었습니다." }
    ]
  },
  {
    id: "L5-334",
    word: "antagonism",
    meaning: "적대감, 반감",
    examples: [
      { en: "There's always been some antagonism between those two departments.", kr: "그 두 부서 사이엔 늘 어느 정도 적대감이 있었어요." },
      { en: "I don't get the antagonism; we're on the same team.", kr: "왜 그렇게 적대적인지 모르겠어. 우리 같은 팀이잖아." }
    ]
  },
  {
    id: "L5-688",
    word: "insightful",
    meaning: "통찰력 있는, 예리한",
    examples: [
      { en: "Thanks for the insightful feedback on my presentation.", kr: "제 발표에 대해 통찰력 있는 피드백 주셔서 감사해요." },
      { en: "She wrote an insightful article about remote work.", kr: "그녀는 재택근무에 관한 예리한 기사를 썼어요." }
    ]
  },
  {
    id: "L5-689",
    word: "persuasive",
    meaning: "설득력 있는",
    examples: [
      { en: "He made a persuasive argument for hiring more staff.", kr: "그는 직원을 더 뽑아야 한다는 설득력 있는 주장을 펼쳤어요." },
      { en: "Good salespeople are persuasive without being pushy.", kr: "좋은 영업사원은 강요하지 않으면서도 설득력이 있어요." }
    ]
  },
  {
    id: "L5-690",
    word: "tremendously",
    meaning: "엄청나게, 대단히",
    examples: [
      { en: "Your support has helped me tremendously this year.", kr: "올해 당신의 지원이 제게 엄청나게 도움이 됐어요." },
      { en: "Housing prices have risen tremendously in the last decade.", kr: "지난 10년간 집값이 엄청나게 올랐습니다." }
    ]
  },
  {
    id: "L5-691",
    word: "unleash",
    meaning: "(힘·감정 등을) 촉발하다, 마음껏 발휘하게 하다",
    examples: [
      { en: "The new policy could unleash a wave of innovation.", kr: "새 정책은 혁신의 물결을 촉발할 수 있습니다." },
      { en: "This workshop will help you unleash your creativity.", kr: "이 워크숍은 여러분의 창의력을 마음껏 발휘하도록 도와줄 거예요." }
    ]
  },
  {
    id: "L5-692",
    word: "authoritative",
    meaning: "권위 있는, 신뢰할 만한, 단호한",
    examples: [
      { en: "This website is an authoritative source for health information.", kr: "이 웹사이트는 건강 정보에 관해 권위 있는 출처예요." },
      { en: "She spoke in a calm but authoritative voice.", kr: "그녀는 차분하지만 단호한 목소리로 말했어요." }
    ]
  },
  {
    id: "L5-753",
    word: "catchy",
    meaning: "귀에 쏙 들어오는, 기억하기 쉬운, 중독성 있는",
    examples: [
      { en: "This song is so catchy, I can't stop humming it.", kr: "이 노래 너무 중독성 있어서 계속 흥얼거리게 돼." },
      { en: "We need a catchy name for the new product.", kr: "신제품에 기억하기 쉬운 이름이 필요해요." }
    ]
  },
  {
    id: "L5-693",
    word: "bureaucratic",
    meaning: "관료적인, 절차가 번거로운",
    examples: [
      { en: "Getting a refund involved a lot of bureaucratic paperwork.", kr: "환불을 받으려면 번거로운 서류 작업을 잔뜩 해야 했어요." },
      { en: "Our company has become too bureaucratic to move quickly.", kr: "우리 회사는 너무 관료적이 돼서 빠르게 움직일 수가 없어요." }
    ]
  },
  {
    id: "L5-694",
    word: "chronological",
    meaning: "시간 순서의, 연대순의",
    examples: [
      { en: "List your work experience in reverse chronological order.", kr: "경력은 최근 것부터 시간의 역순으로 나열하세요." },
      { en: "The museum displays the paintings in chronological order.", kr: "그 박물관은 그림들을 연대순으로 전시해요." }
    ]
  },
  {
    id: "L5-695",
    word: "daunting",
    meaning: "벅찬, 주눅 들게 하는",
    examples: [
      { en: "Starting a new job in a foreign country can be daunting.", kr: "외국에서 새 일을 시작하는 건 벅찰 수 있어요." },
      { en: "The amount of work ahead of us is daunting.", kr: "우리 앞에 놓인 일의 양을 보니 기가 질려요." }
    ]
  },
  {
    id: "L5-696",
    word: "distrust",
    meaning: "불신, 믿지 않다",
    examples: [
      { en: "There is growing public distrust of social media companies.", kr: "소셜 미디어 기업에 대한 대중의 불신이 커지고 있습니다." },
      { en: "I distrust any deal that sounds too good to be true.", kr: "믿기 힘들 만큼 좋은 조건의 거래는 뭐든 믿지 않아요." }
    ]
  },
  {
    id: "L5-697",
    word: "embark",
    meaning: "착수하다, 시작하다, 승선하다",
    examples: [
      { en: "She embarked on a new career after turning forty.", kr: "그녀는 마흔이 넘어 새로운 경력을 시작했어요." },
      { en: "Passengers will embark at the cruise terminal at noon.", kr: "승객들은 정오에 크루즈 터미널에서 승선합니다." }
    ]
  },
  {
    id: "L5-698",
    word: "etiquette",
    meaning: "예절, 에티켓",
    examples: [
      { en: "Learn the local dining etiquette before you travel abroad.", kr: "해외여행 전에 현지 식사 예절을 익혀 두세요." },
      { en: "Hitting reply all is sometimes bad email etiquette.", kr: "전체 회신을 누르는 건 때때로 이메일 예절에 어긋나요." }
    ]
  },
  {
    id: "L5-347",
    word: "debacle",
    meaning: "대실패, 대참사",
    examples: [
      { en: "The product launch was a complete debacle.", kr: "그 제품 출시는 완전 대실패였어요." },
      { en: "Remember the debacle at last year's company picnic?", kr: "작년 회사 야유회 때 있었던 대참사 기억나?" }
    ]
  },
  {
    id: "L5-699",
    word: "hypocrite",
    meaning: "위선자",
    examples: [
      { en: "He lectures us about saving money, but he's a total hypocrite.", kr: "그는 우리에게 돈을 아끼라고 잔소리하지만, 완전 위선자야." },
      { en: "I'd be a hypocrite if I told you never to eat junk food.", kr: "너한테 정크푸드를 절대 먹지 말라고 하면 나는 위선자일 거야." }
    ]
  },
  {
    id: "L5-700",
    word: "reassuring",
    meaning: "안심시키는, 위안이 되는",
    examples: [
      { en: "The doctor's reassuring words helped me relax.", kr: "의사의 안심되는 말에 마음이 놓였어요." },
      { en: "It's reassuring to know that help is available around the clock.", kr: "언제든 도움을 받을 수 있다는 걸 알면 안심이 돼요." }
    ]
  },
  {
    id: "L5-701",
    word: "reliably",
    meaning: "확실하게, 믿을 수 있게",
    examples: [
      { en: "This old car still runs reliably every single day.", kr: "이 오래된 차는 아직도 매일 믿음직하게 잘 달려요." },
      { en: "We can't reliably predict how customers will react.", kr: "고객이 어떻게 반응할지 확실하게 예측할 수는 없어요." }
    ]
  },
  {
    id: "L5-702",
    word: "cornerstone",
    meaning: "초석, 근간",
    examples: [
      { en: "Trust is the cornerstone of any good relationship.", kr: "신뢰는 모든 좋은 관계의 초석이에요." },
      { en: "Customer service is the cornerstone of our business.", kr: "고객 서비스는 우리 사업의 근간입니다." }
    ]
  },
  {
    id: "L5-703",
    word: "evade",
    meaning: "피하다, 회피하다, 모면하다",
    examples: [
      { en: "The politician evaded every question about the scandal.", kr: "그 정치인은 스캔들에 관한 모든 질문을 회피했어요." },
      { en: "He was fined for trying to evade taxes.", kr: "그는 세금을 회피하려다 벌금을 물었어요." }
    ]
  },
  {
    id: "L5-704",
    word: "gloomy",
    meaning: "우울한, 어두운, 음울한",
    examples: [
      { en: "It's been gloomy and rainy all week.", kr: "일주일 내내 날씨가 우중충하고 비가 왔어요." },
      { en: "Don't look so gloomy; it's not the end of the world.", kr: "그렇게 우울한 표정 짓지 마. 세상이 끝난 것도 아니잖아." }
    ]
  },
  {
    id: "L5-705",
    word: "heartbreak",
    meaning: "비통, 상심",
    examples: [
      { en: "It took her months to get over the heartbreak.", kr: "그녀가 그 상심을 극복하는 데 몇 달이 걸렸어요." },
      { en: "Losing in the final minute was a real heartbreak for fans.", kr: "마지막 1분에 진 건 팬들에게 정말 가슴 아픈 일이었어요." }
    ]
  },
  {
    id: "L5-706",
    word: "obligatory",
    meaning: "의무적인, 필수의, 의례적인",
    examples: [
      { en: "Attendance at the safety training is obligatory for all staff.", kr: "안전 교육 참석은 모든 직원에게 의무입니다." },
      { en: "He made the obligatory joke about the weather.", kr: "그는 의례적으로 날씨에 관한 농담을 던졌어요." }
    ]
  },
  {
    id: "L5-707",
    word: "prescribe",
    meaning: "처방하다, 규정하다",
    examples: [
      { en: "The doctor prescribed antibiotics for my sore throat.", kr: "의사가 인후염에 항생제를 처방해 줬어요." },
      { en: "The law prescribes strict penalties for drunk driving.", kr: "법은 음주운전에 엄격한 처벌을 규정하고 있습니다." }
    ]
  },
  {
    id: "L5-708",
    word: "shameless",
    meaning: "뻔뻔한, 염치없는",
    examples: [
      { en: "That was a shameless attempt to take credit for my work.", kr: "그건 내 성과를 가로채려는 뻔뻔한 시도였어." },
      { en: "Sorry for the shameless plug, but please follow my channel.", kr: "뻔뻔한 홍보라 죄송하지만, 제 채널 구독 부탁드려요." }
    ]
  },
  {
    id: "L5-709",
    word: "vigorously",
    meaning: "힘차게, 격렬하게, 강력히",
    examples: [
      { en: "Stir the sauce vigorously so it doesn't burn.", kr: "소스가 타지 않도록 힘차게 저으세요." },
      { en: "The company vigorously denied the accusations.", kr: "회사는 그 의혹을 강력히 부인했습니다." }
    ]
  },
  {
    id: "L5-710",
    word: "deceive",
    meaning: "속이다, 기만하다",
    examples: [
      { en: "The ad deceived customers about the product's real price.", kr: "그 광고는 제품의 실제 가격에 대해 고객을 속였어요." },
      { en: "Don't let first impressions deceive you.", kr: "첫인상에 속지 마세요." }
    ]
  },
  {
    id: "L5-711",
    word: "exemplary",
    meaning: "모범적인, 훌륭한",
    examples: [
      { en: "She received an award for her exemplary customer service.", kr: "그녀는 모범적인 고객 서비스로 상을 받았어요." },
      { en: "His behavior during the crisis was truly exemplary.", kr: "위기 동안 그의 행동은 정말 모범적이었어요." }
    ]
  },
  {
    id: "L5-712",
    word: "obnoxious",
    meaning: "아주 불쾌한, 밉살스러운, 거슬리는",
    examples: [
      { en: "The guy next to me on the plane was obnoxious.", kr: "비행기에서 내 옆자리 남자는 정말 밉상이었어." },
      { en: "That ringtone is so obnoxious; please change it.", kr: "그 벨소리 너무 거슬려, 제발 바꿔 줘." }
    ]
  },
  {
    id: "L5-713",
    word: "resent",
    meaning: "분개하다, 불쾌하게 여기다",
    examples: [
      { en: "I resent being treated like a child at work.", kr: "직장에서 어린애 취급받는 게 정말 불쾌해요." },
      { en: "She resented her coworker for taking all the credit.", kr: "그녀는 동료가 공을 다 가로챈 것에 분개했어요." }
    ]
  },
  {
    id: "L5-714",
    word: "affluent",
    meaning: "부유한, 풍족한",
    examples: [
      { en: "They live in an affluent neighborhood near the lake.", kr: "그들은 호숫가 근처 부유한 동네에 살아요." },
      { en: "The brand mainly targets young, affluent professionals.", kr: "그 브랜드는 주로 젊고 부유한 전문직 종사자를 겨냥해요." }
    ]
  },
  {
    id: "L5-364",
    word: "eulogy",
    meaning: "추도사, 추도 연설",
    examples: [
      { en: "Her best friend gave a beautiful eulogy at the funeral.", kr: "그녀의 절친이 장례식에서 감동적인 추도사를 했어요." },
      { en: "I've been asked to give the eulogy, and I'm nervous.", kr: "추도사를 부탁받았는데 긴장돼요." }
    ]
  },
  {
    id: "L5-715",
    word: "anguish",
    meaning: "극심한 고통, 괴로움",
    examples: [
      { en: "I could see the anguish on her face at the hospital.", kr: "병원에서 그녀의 얼굴에 서린 고통을 볼 수 있었어요." },
      { en: "Waiting for the test results caused weeks of anguish.", kr: "검사 결과를 기다리는 몇 주가 괴로움의 연속이었어요." }
    ]
  },
  {
    id: "L5-716",
    word: "beneficiary",
    meaning: "수혜자, 수익자",
    examples: [
      { en: "She named her daughter as the beneficiary of her life insurance.", kr: "그녀는 생명보험 수익자로 딸을 지정했어요." },
      { en: "Small businesses will be the main beneficiaries of the tax cut.", kr: "중소기업이 그 감세의 주요 수혜자가 될 것입니다." }
    ]
  },
  {
    id: "L5-717",
    word: "bipartisan",
    meaning: "초당적인, 양당의",
    examples: [
      { en: "The bill passed with strong bipartisan support.", kr: "그 법안은 강력한 초당적 지지를 받아 통과됐습니다." },
      { en: "Lawmakers formed a bipartisan committee to study the issue.", kr: "의원들은 그 문제를 검토할 초당적 위원회를 구성했습니다." }
    ]
  },
  {
    id: "L5-718",
    word: "brochure",
    meaning: "안내 책자, 팸플릿",
    examples: [
      { en: "Grab a brochure at the front desk for tour information.", kr: "투어 정보는 프런트에서 안내 책자를 챙겨 가세요." },
      { en: "We're redesigning our product brochure for the trade show.", kr: "박람회에 맞춰 제품 안내 책자를 새로 디자인하고 있어요." }
    ]
  },
  {
    id: "L5-719",
    word: "discontent",
    meaning: "불만",
    examples: [
      { en: "There is growing discontent among workers over low wages.", kr: "낮은 임금을 두고 노동자들 사이에 불만이 커지고 있어요." },
      { en: "Rising prices have fueled public discontent.", kr: "물가 상승이 대중의 불만을 부추겼습니다." }
    ]
  },
  {
    id: "L5-720",
    word: "setback",
    meaning: "차질, 좌절",
    examples: [
      { en: "The delay was a major setback for our launch plans.", kr: "그 지연은 우리 출시 계획에 큰 차질이었어요." },
      { en: "Don't let one setback stop you from trying again.", kr: "한 번의 좌절 때문에 다시 도전하는 걸 멈추지 마." }
    ]
  },
  {
    id: "L5-721",
    word: "surpass",
    meaning: "능가하다, 넘어서다",
    examples: [
      { en: "Our sales this quarter surpassed all expectations.", kr: "이번 분기 우리 매출은 모든 예상을 넘어섰어요." },
      { en: "The student soon surpassed her teacher in skill.", kr: "그 학생은 곧 실력에서 선생님을 능가했어요." }
    ]
  },
  {
    id: "L5-722",
    word: "adolescence",
    meaning: "청소년기, 사춘기",
    examples: [
      { en: "Many people struggle with confidence during adolescence.", kr: "많은 사람들이 청소년기에 자신감 문제로 힘들어해요." },
      { en: "Adolescence is a time of rapid physical and emotional change.", kr: "사춘기는 신체적, 정서적으로 급격히 변하는 시기예요." }
    ]
  },
  {
    id: "L5-373",
    word: "fiduciary",
    meaning: "수탁자, 수탁자의",
    examples: [
      { en: "Your financial advisor has a fiduciary duty to put you first.", kr: "재무 상담사는 고객인 너를 최우선으로 해야 하는 수탁자 의무가 있어." },
      { en: "Is your advisor a fiduciary or just a salesperson?", kr: "네 상담사는 수탁자야, 아니면 그냥 판매원이야?" }
    ]
  },
  {
    id: "L5-723",
    word: "discredit",
    meaning: "신빙성을 떨어뜨리다, 불신하게 하다",
    examples: [
      { en: "The lawyer tried to discredit the witness's story.", kr: "변호사는 증인 진술의 신빙성을 떨어뜨리려 했어요." },
      { en: "One fake review can discredit an entire business.", kr: "가짜 리뷰 하나가 사업 전체의 신뢰를 무너뜨릴 수 있어요." }
    ]
  },
  {
    id: "L5-724",
    word: "dysfunctional",
    meaning: "제대로 기능하지 않는, 역기능적인",
    examples: [
      { en: "Working on a dysfunctional team is exhausting.", kr: "제대로 굴러가지 않는 팀에서 일하는 건 진이 빠져요." },
      { en: "The movie is about a funny but dysfunctional family.", kr: "그 영화는 웃기지만 문제 많은 가족에 관한 이야기예요." }
    ]
  },
  {
    id: "L5-725",
    word: "hefty",
    meaning: "(액수가) 상당한, 두둑한, 무거운",
    examples: [
      { en: "I had to pay a hefty fine for parking illegally.", kr: "불법 주차로 상당한 벌금을 내야 했어요." },
      { en: "She got a hefty raise after her promotion.", kr: "그녀는 승진 후 연봉이 두둑하게 올랐어요." }
    ]
  },
  {
    id: "L5-726",
    word: "noticeably",
    meaning: "눈에 띄게, 현저히",
    examples: [
      { en: "The air quality has improved noticeably this year.", kr: "올해 공기 질이 눈에 띄게 좋아졌어요." },
      { en: "He was noticeably nervous before his interview.", kr: "그는 면접 전에 눈에 띄게 긴장해 있었어요." }
    ]
  },
  {
    id: "L5-378",
    word: "homogenous",
    meaning: "동질적인, 균질한",
    examples: [
      { en: "Our team is pretty homogenous, so we need more diverse views.", kr: "우리 팀은 다들 비슷해서 더 다양한 시각이 필요해요." },
      { en: "Blend it until the mixture is homogenous.", kr: "고르게 섞일 때까지 갈아 주세요." }
    ]
  },
  {
    id: "L5-727",
    word: "pertinent",
    meaning: "관련 있는, 적절한",
    examples: [
      { en: "Please include only pertinent details in your report.", kr: "보고서에는 관련 있는 세부 사항만 넣어 주세요." },
      { en: "That's a pertinent question, and I'm glad you asked.", kr: "적절한 질문이네요, 물어봐 주셔서 기뻐요." }
    ]
  },
  {
    id: "L5-728",
    word: "rebellious",
    meaning: "반항적인",
    examples: [
      { en: "He went through a rebellious phase as a teenager.", kr: "그는 십대 때 반항기를 겪었어요." },
      { en: "My rebellious daughter dyed her hair bright green.", kr: "반항적인 우리 딸이 머리를 밝은 초록색으로 염색했어요." }
    ]
  },
  {
    id: "L5-729",
    word: "slump",
    meaning: "부진, 침체, 급감하다",
    examples: [
      { en: "The housing market is in a slump this year.", kr: "올해 주택 시장은 침체에 빠져 있어요." },
      { en: "Sales slumped after a new competitor entered the market.", kr: "새 경쟁사가 시장에 진입한 후 매출이 급감했어요." }
    ]
  },
  {
    id: "L5-730",
    word: "understatement",
    meaning: "절제된 표현, 줄여서 말하기",
    examples: [
      { en: "Saying the trip was tiring is an understatement.", kr: "여행이 피곤했다고 하면 그건 너무 약하게 말한 거야." },
      { en: "To call him talented would be an understatement.", kr: "그를 그냥 재능 있다고만 하면 과소평가예요." }
    ]
  },
  {
    id: "L5-731",
    word: "complimentary",
    meaning: "무료의, 칭찬하는",
    examples: [
      { en: "The hotel offers complimentary breakfast for all guests.", kr: "그 호텔은 모든 투숙객에게 무료 조식을 제공해요." },
      { en: "My boss was very complimentary about my report.", kr: "상사가 제 보고서를 무척 칭찬했어요." }
    ]
  },
  {
    id: "L5-732",
    word: "crackdown",
    meaning: "단속, 엄중 단속",
    examples: [
      { en: "Police announced a crackdown on drunk driving this holiday.", kr: "경찰은 이번 연휴 음주운전 단속을 발표했습니다." },
      { en: "The government launched a crackdown on fake online reviews.", kr: "정부는 가짜 온라인 리뷰에 대한 단속에 나섰습니다." }
    ]
  },
  {
    id: "L5-733",
    word: "escalate",
    meaning: "확대되다, 악화되다, (상부로) 이관하다",
    examples: [
      { en: "The argument quickly escalated into a shouting match.", kr: "말다툼은 순식간에 고함 싸움으로 번졌어요." },
      { en: "If the customer is still unhappy, escalate it to your manager.", kr: "고객이 여전히 불만이면 매니저에게 이관하세요." }
    ]
  },
  {
    id: "L5-734",
    word: "excessively",
    meaning: "지나치게, 과도하게",
    examples: [
      { en: "Drinking coffee excessively can make it hard to sleep.", kr: "커피를 지나치게 마시면 잠들기 어려울 수 있어요." },
      { en: "The rules seemed excessively strict to new employees.", kr: "신입 직원들에게는 규칙이 지나치게 엄격해 보였어요." }
    ]
  },
  {
    id: "L5-735",
    word: "reimbursement",
    meaning: "환급, 비용 정산, 상환",
    examples: [
      { en: "Submit your receipts to get reimbursement for travel expenses.", kr: "출장비를 정산받으려면 영수증을 제출하세요." },
      { en: "The airline offered reimbursement for our hotel costs.", kr: "항공사는 우리 호텔 비용을 환급해 주겠다고 했어요." }
    ]
  },
  {
    id: "L5-736",
    word: "borderline",
    meaning: "경계선상의, 아슬아슬한",
    examples: [
      { en: "His comments in the meeting were borderline rude.", kr: "회의에서 그의 발언은 무례하기 직전이었어요." },
      { en: "Your blood pressure is borderline high, so watch your salt.", kr: "혈압이 경계선상으로 높으니 소금 섭취를 조심하세요." }
    ]
  },
  {
    id: "L5-737",
    word: "deceptive",
    meaning: "기만적인, 현혹하는, 겉보기와 다른",
    examples: [
      { en: "The company was fined for deceptive advertising.", kr: "그 회사는 기만적인 광고로 벌금을 물었어요." },
      { en: "The calm sea can be deceptive, so wear a life jacket.", kr: "잔잔한 바다는 겉보기와 다를 수 있으니 구명조끼를 입으세요." }
    ]
  },
  {
    id: "L5-390",
    word: "juggernaut",
    meaning: "막강한 존재, 거대 세력",
    examples: [
      { en: "That company has become a total juggernaut in streaming.", kr: "그 회사는 스트리밍 업계에서 완전 거대 공룡이 됐어." },
      { en: "Our team was a juggernaut this season; nobody could beat us.", kr: "우리 팀은 이번 시즌에 무적이었어. 아무도 못 이겼어." }
    ]
  },
  {
    id: "L5-391",
    word: "lament",
    meaning: "한탄하다, 애석해하다",
    examples: [
      { en: "He's always lamenting how expensive everything is now.", kr: "그는 요즘 다 너무 비싸다고 늘 한탄해요." },
      { en: "My parents lament that nobody writes letters anymore.", kr: "부모님은 이제 아무도 편지를 안 쓴다고 아쉬워하세요." }
    ]
  },
  {
    id: "L5-738",
    word: "disproportionate",
    meaning: "불균형한, 지나친",
    examples: [
      { en: "Low-income families spend a disproportionate share of their income on rent.", kr: "저소득 가정은 소득 중 지나치게 큰 몫을 임대료로 씁니다." },
      { en: "The punishment seemed disproportionate to the mistake.", kr: "그 처벌은 실수에 비해 지나쳐 보였어요." }
    ]
  },
  {
    id: "L5-739",
    word: "erratic",
    meaning: "불규칙한, 불안정한, 변덕스러운",
    examples: [
      { en: "My internet connection has been erratic all day.", kr: "인터넷 연결이 하루 종일 불안정했어요." },
      { en: "Police pulled the car over for erratic driving.", kr: "경찰은 불안하게 오락가락 운전하던 차를 세웠습니다." }
    ]
  },
  {
    id: "L5-740",
    word: "ridicule",
    meaning: "조롱, 비웃다",
    examples: [
      { en: "He faced ridicule for his unusual ideas at first.", kr: "그는 처음에 특이한 아이디어 때문에 조롱을 받았어요." },
      { en: "Never ridicule someone for asking a question.", kr: "질문한다고 누군가를 비웃지 마세요." }
    ]
  },
  {
    id: "L5-395",
    word: "luminous",
    meaning: "빛나는, 야광의, 환한",
    examples: [
      { en: "My watch has luminous hands, so I can read it in the dark.", kr: "내 시계는 바늘이 야광이라 어두운 데서도 보여." },
      { en: "Her skin looked luminous after the facial.", kr: "피부 관리 받고 나니 그녀 피부가 환하게 빛났어." }
    ]
  },
  {
    id: "L5-741",
    word: "advantageous",
    meaning: "유리한, 이로운",
    examples: [
      { en: "Speaking two languages is advantageous in this field.", kr: "이 분야에서는 두 언어를 할 줄 아는 게 유리해요." },
      { en: "The new contract terms are advantageous for both sides.", kr: "새 계약 조건은 양측 모두에게 유리합니다." }
    ]
  },
  {
    id: "L5-742",
    word: "disdain",
    meaning: "경멸, 하찮게 여기다",
    examples: [
      { en: "She looked at the cheap souvenirs with disdain.", kr: "그녀는 싸구려 기념품을 경멸스럽게 쳐다봤어요." },
      { en: "He disdains small talk and gets straight to business.", kr: "그는 잡담을 하찮게 여기고 바로 본론으로 들어가요." }
    ]
  },
  {
    id: "L5-743",
    word: "eerie",
    meaning: "으스스한, 섬뜩한",
    examples: [
      { en: "The empty office felt eerie late at night.", kr: "늦은 밤 텅 빈 사무실은 으스스했어요." },
      { en: "There was an eerie silence after the announcement.", kr: "발표 후 섬뜩한 침묵이 흘렀어요." }
    ]
  },
  {
    id: "L5-744",
    word: "frantic",
    meaning: "정신없는, 다급한, 미친 듯한",
    examples: [
      { en: "It was a frantic morning trying to catch my flight.", kr: "비행기를 타려고 정신없이 보낸 아침이었어요." },
      { en: "She made a frantic call when she lost her passport.", kr: "그녀는 여권을 잃어버리자 다급하게 전화를 걸었어요." }
    ]
  },
  {
    id: "L5-745",
    word: "holistic",
    meaning: "총체적인, 종합적인, 전체론적인",
    examples: [
      { en: "We take a holistic approach to employee wellness.", kr: "우리는 직원 건강에 총체적으로 접근합니다." },
      { en: "Admissions officers do a holistic review of each application.", kr: "입학 사정관은 각 지원서를 종합적으로 검토합니다." }
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
const wordIdAliases = {"L1-102": "L1-066", "L1-196": "L1-137", "L1-199": "L1-149", "L1-304": "L1-160", "L1-307": "L1-154", "L1-308": "L1-125", "L1-311": "L1-180", "L1-314": "L1-152", "L1-318": "L1-198", "L1-322": "L1-263", "L1-323": "L1-163", "L1-324": "L1-124", "L1-327": "L1-176", "L1-330": "L1-148", "L1-331": "L1-161", "L1-332": "L1-174", "L1-334": "L1-115", "L1-335": "L1-156", "L1-336": "L1-135", "L1-338": "L1-201", "L1-344": "L1-137", "L1-346": "L1-189", "L1-347": "L1-130", "L1-348": "L1-249", "L1-350": "L1-242", "L1-351": "L1-173", "L1-352": "L1-143", "L1-360": "L1-214", "L1-365": "L1-176", "L1-366": "L1-110", "L1-368": "L1-150", "L1-369": "L1-302", "L1-370": "L1-222", "L1-372": "L1-242", "L1-374": "L1-241", "L1-378": "L1-174", "L1-379": "L1-148", "L1-382": "L1-313", "L1-383": "L1-339", "L1-386": "L1-310", "L1-389": "L1-349", "L1-390": "L1-147", "L1-392": "L1-242", "L1-394": "L1-273", "L1-396": "L1-235", "L1-398": "L1-309", "L1-399": "L1-236", "L1-400": "L1-122", "L2-002": "L1-227", "L2-015": "L1-190", "L2-019": "L1-357", "L2-212": "L2-145", "L2-221": "L2-079", "L2-225": "L2-049", "L2-231": "L2-163", "L2-247": "L2-125", "L2-250": "L2-175", "L2-255": "L2-133", "L2-259": "L2-016", "L2-260": "L2-138", "L2-264": "L2-142", "L2-269": "L2-147", "L2-270": "L2-214", "L2-273": "L2-076", "L2-274": "L2-077", "L2-275": "L2-155", "L2-276": "L2-021", "L2-277": "L2-081", "L2-278": "L2-082", "L2-279": "L2-189", "L2-281": "L2-226", "L2-293": "L2-090", "L2-295": "L2-091", "L2-300": "L2-037", "L2-301": "L2-172", "L2-304": "L2-175", "L2-308": "L2-132", "L2-311": "L2-135", "L2-314": "L2-138", "L2-316": "L2-261", "L2-317": "L2-141", "L2-321": "L2-144", "L2-322": "L2-145", "L2-323": "L2-098", "L2-324": "L2-071", "L2-325": "L2-072", "L2-326": "L2-149", "L2-327": "L2-271", "L2-328": "L2-217", "L2-330": "L2-078", "L2-332": "L2-079", "L2-333": "L2-155", "L2-336": "L2-223", "L2-338": "L2-156", "L2-340": "L2-189", "L2-342": "L2-022", "L2-343": "L2-162", "L2-346": "L2-085", "L2-348": "L2-284", "L2-356": "L1-263", "L2-357": "L1-320", "L2-358": "L2-007", "L2-359": "L2-088", "L2-360": "L2-008", "L2-363": "L2-009", "L2-367": "L2-010", "L2-371": "L2-036", "L2-373": "L2-013", "L2-375": "L2-126", "L2-376": "L2-014", "L2-381": "L1-190", "L2-383": "L2-041", "L2-385": "L1-271", "L2-386": "L1-131", "L2-388": "L2-017", "L2-389": "L1-163", "L2-390": "L1-357", "L2-395": "L2-075", "L2-399": "L2-023", "L2-400": "L2-001", "L3-001": "L2-194", "L3-002": "L2-102", "L3-004": "L2-350", "L3-005": "L2-285", "L3-008": "L2-028", "L3-011": "L2-103", "L3-013": "L2-105", "L3-019": "L2-233", "L3-022": "L2-024", "L3-023": "L2-164", "L3-024": "L2-110", "L3-025": "L2-007", "L3-026": "L2-031", "L3-029": "L2-088", "L3-030": "L2-030", "L3-033": "L2-237", "L3-035": "L2-112", "L3-037": "L2-165", "L3-038": "L2-292", "L3-040": "L2-113", "L3-043": "L2-090", "L3-047": "L2-166", "L3-048": "L2-114", "L3-054": "L2-034", "L3-055": "L2-239", "L3-056": "L2-115", "L3-058": "L2-240", "L3-059": "L2-116", "L3-060": "L2-060", "L3-063": "L2-117", "L3-067": "L2-011", "L3-068": "L2-062", "L3-071": "L2-063", "L3-073": "L2-012", "L3-075": "L2-120", "L3-081": "L2-092", "L3-082": "L2-121", "L3-083": "L2-122", "L3-086": "L2-037", "L3-089": "L2-125", "L3-090": "L2-126", "L3-091": "L2-172", "L3-093": "L2-038", "L3-094": "L2-302", "L3-095": "L2-127", "L3-096": "L2-128", "L3-098": "L2-065", "L3-102": "L2-175", "L3-104": "L2-066", "L3-105": "L2-252", "L3-106": "L2-130", "L3-109": "L2-132", "L3-113": "L2-201", "L3-116": "L2-202", "L3-117": "L2-203", "L3-120": "L2-016", "L3-121": "L2-067", "L3-122": "L2-042", "L3-124": "L2-204", "L3-125": "L2-205", "L3-127": "L1-163", "L3-128": "L2-206", "L3-129": "L2-318", "L3-130": "L2-208", "L3-134": "L2-266", "L3-135": "L2-070", "L3-136": "L2-319", "L3-138": "L2-211", "L3-141": "L2-098", "L3-142": "L2-071", "L3-143": "L2-146", "L3-144": "L2-148", "L3-147": "L2-215", "L3-149": "L2-182", "L3-150": "L2-216", "L3-151": "L2-272", "L3-153": "L2-152", "L3-155": "L2-078", "L3-156": "L2-331", "L3-158": "L2-335", "L3-160": "L2-097", "L3-162": "L2-224", "L3-166": "L2-160", "L3-178": "L2-228", "L3-183": "L2-193", "L3-187": "L2-195", "L3-189": "L3-014", "L3-190": "L2-107", "L3-191": "L2-196", "L3-195": "L2-056", "L3-196": "L2-290", "L3-198": "L2-291", "L3-199": "L2-236", "L3-200": "L2-197", "L3-201": "L3-036", "L3-202": "L2-238", "L3-203": "L2-292", "L3-204": "L2-033", "L3-205": "L2-115", "L3-206": "L2-240", "L3-208": "L2-116", "L3-209": "L2-366", "L3-211": "L3-062", "L3-212": "L2-369", "L3-213": "L2-243", "L3-214": "L2-118", "L3-215": "L3-064", "L3-218": "L2-062", "L3-222": "L2-063", "L3-223": "L3-072", "L3-225": "L2-170", "L3-227": "L2-012", "L3-228": "L3-074", "L3-229": "L2-120", "L3-231": "L3-077", "L3-232": "L3-079", "L3-233": "L3-080", "L3-234": "L2-092", "L3-235": "L2-121", "L3-236": "L2-122", "L3-237": "L3-084", "L3-238": "L3-085", "L3-239": "L3-087", "L3-240": "L3-088", "L3-241": "L2-038", "L3-242": "L2-302", "L3-243": "L2-377", "L3-244": "L2-127", "L3-245": "L2-378", "L3-246": "L2-379", "L3-249": "L2-065", "L3-250": "L3-099", "L3-251": "L2-303", "L3-252": "L2-305", "L3-253": "L3-103", "L3-254": "L2-129", "L3-255": "L2-040", "L3-256": "L2-306", "L3-257": "L2-252", "L3-258": "L2-130", "L3-259": "L2-253", "L3-260": "L3-107", "L3-261": "L2-307", "L3-262": "L2-095", "L3-263": "L2-131", "L3-264": "L3-108", "L3-265": "L2-132", "L3-266": "L3-110", "L3-267": "L3-112", "L3-268": "L2-133", "L3-269": "L2-041", "L3-270": "L2-309", "L3-272": "L2-134", "L3-273": "L2-257", "L3-274": "L2-201", "L3-275": "L3-114", "L3-276": "L3-115", "L3-277": "L2-310", "L3-278": "L2-176", "L3-279": "L2-202", "L3-285": "L2-288", "L3-287": "L3-018", "L3-297": "L2-121", "L3-299": "L3-248", "L3-300": "L3-119", "L3-301": "L2-258", "L3-304": "L2-067", "L3-305": "L2-042", "L3-306": "L3-123", "L3-307": "L2-068", "L3-308": "L2-139", "L3-309": "L2-315", "L3-310": "L2-178", "L3-311": "L2-261", "L3-312": "L3-126", "L3-313": "L1-163", "L3-314": "L2-142", "L3-315": "L2-206", "L3-316": "L2-143", "L3-317": "L2-318", "L3-318": "L2-208", "L3-319": "L3-131", "L3-320": "L3-132", "L3-321": "L3-133", "L3-322": "L2-266", "L3-323": "L2-267", "L3-324": "L2-319", "L3-326": "L2-320", "L3-327": "L2-211", "L3-328": "L3-139", "L3-329": "L3-140", "L3-330": "L2-145", "L3-331": "L2-098", "L3-332": "L2-071", "L3-333": "L2-146", "L3-334": "L2-148", "L3-335": "L3-145", "L3-336": "L3-146", "L3-337": "L2-215", "L3-338": "L3-148", "L3-339": "L2-182", "L3-340": "L2-271", "L3-341": "L2-216", "L3-342": "L2-272", "L3-343": "L3-152", "L3-344": "L2-152", "L3-345": "L3-154", "L3-346": "L2-217", "L3-347": "L2-078", "L3-348": "L2-331", "L3-349": "L3-157", "L3-350": "L2-335", "L3-351": "L3-159", "L3-352": "L2-223", "L3-353": "L3-161", "L3-354": "L2-337", "L3-355": "L2-224", "L3-356": "L3-163", "L3-357": "L3-164", "L3-358": "L3-165", "L3-359": "L2-160", "L3-360": "L3-167", "L3-361": "L3-168", "L3-362": "L3-170", "L3-363": "L3-171", "L3-364": "L3-172", "L3-365": "L3-173", "L3-366": "L3-174", "L3-367": "L3-175", "L3-368": "L3-176", "L3-369": "L2-283", "L3-370": "L2-228", "L3-374": "L3-182", "L3-380": "L2-195", "L3-382": "L2-108", "L3-390": "L2-296", "L3-391": "L3-216", "L3-392": "L3-220", "L3-396": "L2-303", "L3-397": "L2-040", "L3-398": "L2-066", "L4-002": "L3-186", "L4-003": "L2-102", "L4-005": "L2-350", "L4-008": "L3-006", "L4-009": "L3-007", "L4-011": "L2-352", "L4-012": "L3-014", "L4-013": "L2-107", "L4-015": "L3-015", "L4-016": "L2-055", "L4-022": "L2-164", "L4-024": "L2-111", "L4-025": "L2-088", "L4-027": "L2-197", "L4-040": "L3-062", "L4-041": "L2-117", "L4-042": "L3-294", "L4-045": "L3-069", "L4-053": "L3-078", "L4-055": "L2-121", "L4-060": "L2-125", "L4-061": "L2-172", "L4-063": "L3-298", "L4-065": "L2-173", "L4-072": "L3-118", "L4-073": "L2-016", "L4-078": "L2-178", "L4-080": "L2-261", "L4-081": "L2-205", "L4-085": "L2-318", "L4-088": "L2-180", "L4-098": "L2-220", "L4-109": "L2-190", "L4-111": "L3-167", "L4-112": "L2-162", "L4-114": "L2-227", "L4-120": "L3-016", "L4-122": "L3-289", "L4-137": "L3-293", "L4-143": "L3-221", "L4-213": "L3-271", "L4-304": "L4-068", "L4-307": "L4-070", "L5-007": "L4-117", "L5-014": "L4-337", "L5-016": "L4-339", "L5-029": "L4-284", "L5-038": "L4-288", "L5-039": "L4-289", "L5-048": "L4-291", "L5-052": "L4-230", "L5-056": "L4-031", "L5-059": "L4-207", "L5-065": "L4-136", "L5-066": "L4-208", "L5-092": "L4-209", "L5-095": "L4-210", "L5-101": "L3-069", "L5-116": "L4-154", "L5-147": "L4-069", "L5-149": "L4-070", "L5-152": "L3-110", "L5-156": "L3-271", "L5-158": "L4-170", "L5-160": "L4-374", "L5-162": "L4-376", "L5-171": "L4-256", "L5-175": "L4-180", "L5-179": "L4-182", "L5-183": "L4-183", "L5-184": "L4-087", "L5-185": "L4-184", "L5-186": "L4-187", "L5-188": "L4-188", "L5-190": "L4-190", "L5-193": "L4-193", "L5-195": "L4-195", "L5-197": "L4-093", "L5-198": "L4-094", "L5-199": "L4-095", "L5-213": "L4-204", "L5-217": "L4-199", "L5-226": "L4-220", "L5-227": "L4-272", "L5-231": "L4-108", "L5-235": "L4-276", "L5-252": "L4-115", "L5-255": "L4-330", "L5-258": "L3-378", "L5-259": "L3-379", "L5-261": "L2-195", "L5-262": "L3-381", "L5-265": "L2-108", "L5-266": "L3-383", "L5-269": "L3-384", "L5-271": "L3-385", "L5-272": "L3-386", "L5-273": "L3-387", "L5-274": "L3-388", "L5-275": "L3-389", "L5-277": "L2-296", "L5-278": "L3-216", "L5-279": "L3-220", "L5-280": "L4-050", "L5-282": "L3-393", "L5-283": "L3-394", "L5-287": "L3-395", "L5-290": "L2-040", "L5-291": "L2-066", "L5-292": "L3-399", "L5-293": "L3-400", "L5-294": "L4-170", "L5-307": "L4-089", "L5-322": "L4-110", "L5-328": "L4-331", "L5-329": "L5-002", "L5-335": "L4-006", "L5-352": "L4-291", "L5-357": "L4-207", "L5-360": "L4-136", "L5-365": "L4-038", "L5-380": "L4-046", "L5-384": "L4-298"};
