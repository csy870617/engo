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
    meaning: "이다, 있다, 존재하다",
    examples: [
      { en: "She is a student.", kr: "그녀는 학생이다." },
      { en: "We are at home now.", kr: "우리는 지금 집에 있어." }
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
      { en: "The color of the sky is blue.", kr: "하늘의 색깔은 파란색이야." },
      { en: "She is one of my best friends.", kr: "그녀는 내 가장 친한 친구들 중 한 명이야." }
    ]
  },
  {
    id: "L1-005",
    word: "and",
    meaning: "그리고",
    examples: [
      { en: "I like coffee and tea.", kr: "나는 커피 그리고 차를 좋아해." },
      { en: "He is tall and handsome.", kr: "그는 키가 크고 잘생겼어." }
    ]
  },
  {
    id: "L1-006",
    word: "a",
    meaning: "하나의 (부정관사)",
    examples: [
      { en: "I need a new book.", kr: "나는 새 책 한 권이 필요해." },
      { en: "She has a dog.", kr: "그녀는 개 한 마리를 키워." }
    ]
  },
  {
    id: "L1-007",
    word: "in",
    meaning: "~ 안에, ~에",
    examples: [
      { en: "The keys are in the box.", kr: "열쇠는 상자 안에 있어." },
      { en: "We live in Seoul.", kr: "우리는 서울에 살아." }
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
      { en: "I have a big house.", kr: "나는 큰 집을 가지고 있어." },
      { en: "Let's have dinner together.", kr: "함께 저녁을 먹자." }
    ]
  },
  {
    id: "L1-010",
    word: "I",
    meaning: "나",
    examples: [
      { en: "I am happy to see you.", kr: "당신을 만나서 기뻐요." },
      { en: "I work every day.", kr: "나는 매일 일해." }
    ]
  },
  {
    id: "L1-011",
    word: "it",
    meaning: "그것",
    examples: [
      { en: "It is a beautiful day.", kr: "아름다운 날씨야." },
      { en: "Did you finish it?", kr: "너 그거 끝냈니?" }
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
      { en: "I do not like apples.", kr: "나는 사과를 좋아하지 않아." },
      { en: "It is not true.", kr: "그것은 사실이 아니야." }
    ]
  },
  {
    id: "L1-014",
    word: "on",
    meaning: "~ 위에, ~에 대해",
    examples: [
      { en: "The book is on the desk.", kr: "책이 책상 위에 있어." },
      { en: "The discussion was on politics.", kr: "그 토론은 정치에 관한 것이었어." }
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
      { en: "He is my brother.", kr: "그는 나의 남동생이야." },
      { en: "He works at a hospital.", kr: "그는 병원에서 일해." }
    ]
  },
  {
    id: "L1-017",
    word: "as",
    meaning: "~로서, ~처럼, ~만큼",
    examples: [
      { en: "She works as a teacher.", kr: "그녀는 선생님으로서 일해." },
      { en: "It is as cold as yesterday.", kr: "어제만큼 추워." }
    ]
  },
  {
    id: "L1-018",
    word: "you",
    meaning: "당신, 너희들",
    examples: [
      { en: "How are you today?", kr: "오늘 기분이 어때요?" },
      { en: "You should study hard.", kr: "너희들은 열심히 공부해야 해." }
    ]
  },
  {
    id: "L1-019",
    word: "do",
    meaning: "하다",
    examples: [
      { en: "What do you do for fun?", kr: "취미로 뭐 하니?" },
      { en: "Do your homework now.", kr: "지금 숙제 해." }
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
    meaning: "이것",
    examples: [
      { en: "Is this your bag?", kr: "이것이 네 가방이니?" },
      { en: "I like this song.", kr: "나는 이 노래가 좋아." }
    ]
  },
  {
    id: "L1-022",
    word: "but",
    meaning: "그러나, ~을 제외하고",
    examples: [
      { en: "It is raining, but I will go out.", kr: "비가 오지만, 나는 외출할 거야." },
      { en: "Everyone came but him.", kr: "그를 제외하고 모두 왔어." }
    ]
  },
  {
    id: "L1-023",
    word: "his",
    meaning: "그의",
    examples: [
      { en: "His car is new.", kr: "그의 차는 새것이야." },
      { en: "I know his name.", kr: "나는 그의 이름을 알아." }
    ]
  },
  {
    id: "L1-024",
    word: "by",
    meaning: "~에 의해, ~ 옆에",
    examples: [
      { en: "The book was written by a student.", kr: "그 책은 한 학생에 의해 쓰여졌어." },
      { en: "The house is by the river.", kr: "집은 강 옆에 있어." }
    ]
  },
  {
    id: "L1-025",
    word: "from",
    meaning: "~로부터",
    examples: [
      { en: "I got a letter from my friend.", kr: "친구로부터 편지를 받았어." },
      { en: "The train departs from Platform 3.", kr: "기차는 3번 플랫폼에서 출발해." }
    ]
  },
  {
    id: "L1-026",
    word: "they",
    meaning: "그들, 그것들",
    examples: [
      { en: "They are waiting for you.", kr: "그들이 너를 기다리고 있어." },
      { en: "The books are old, but they are useful.", kr: "그 책들은 오래되었지만, 유용해." }
    ]
  },
  {
    id: "L1-027",
    word: "we",
    meaning: "우리",
    examples: [
      { en: "We are going to the movies.", kr: "우리는 영화 보러 갈 거야." },
      { en: "We should help him.", kr: "우리는 그를 도와야 해." }
    ]
  },
  {
    id: "L1-028",
    word: "say",
    meaning: "말하다",
    examples: [
      { en: "What did he say to you?", kr: "그가 너에게 뭐라고 말했니?" },
      { en: "I say let's go now.", kr: "나는 지금 가자고 말할게." }
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
      { en: "She is a good singer.", kr: "그녀는 노래를 잘하는 사람이야." },
      { en: "She lives next door.", kr: "그녀는 옆집에 살아." }
    ]
  },
  {
    id: "L1-031",
    word: "or",
    meaning: "또는, 혹은",
    examples: [
      { en: "Do you want coffee or tea?", kr: "커피 또는 차를 원하니?" },
      { en: "It might rain or snow.", kr: "비가 오거나 혹은 눈이 올 수도 있어." }
    ]
  },
  {
    id: "L1-032",
    word: "will",
    meaning: "~할 것이다 (조동사)",
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
      { en: "This is my favorite song.", kr: "이것은 내가 가장 좋아하는 노래야." },
      { en: "My sister is a doctor.", kr: "나의 누나는 의사야." }
    ]
  },
  {
    id: "L1-034",
    word: "one",
    meaning: "하나, 어떤 사람",
    examples: [
      { en: "I want one piece of cake.", kr: "케이크 한 조각을 원해." },
      { en: "One must be careful when driving.", kr: "운전할 때는 조심해야 해." }
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
      { en: "I would like some water, please.", kr: "물 좀 주시겠어요?" },
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
      { en: "What is your name?", kr: "네 이름이 뭐니?" },
      { en: "Tell me what you saw.", kr: "네가 본 것을 나에게 말해줘." }
    ]
  },
  {
    id: "L1-040",
    word: "so",
    meaning: "그래서, 그렇게",
    examples: [
      { en: "It was raining, so I stayed inside.", kr: "비가 와서, 나는 안에 머물렀어." },
      { en: "I am so tired.", kr: "나는 정말 피곤해." }
    ]
  },
  {
    id: "L1-041",
    word: "up",
    meaning: "위로",
    examples: [
      { en: "Look up at the sky.", kr: "하늘을 올려다 봐." },
      { en: "The prices went up.", kr: "가격이 올랐어." }
    ]
  },
  {
    id: "L1-042",
    word: "out",
    meaning: "밖으로",
    examples: [
      { en: "Please go out and play.", kr: "나가서 놀아." },
      { en: "I need to find out the truth.", kr: "나는 진실을 알아내야 해." }
    ]
  },
  {
    id: "L1-043",
    word: "if",
    meaning: "만약 ~라면",
    examples: [
      { en: "If you are ready, let's go.", kr: "만약 준비되었다면, 가자." },
      { en: "I don't know if he will come.", kr: "나는 그가 올지 아닐지 모르겠어." }
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
    meaning: "누구",
    examples: [
      { en: "Who is that person?", kr: "저 사람은 누구니?" },
      { en: "He is the boy who helped me.", kr: "그는 나를 도와준 소년이야." }
    ]
  },
  {
    id: "L1-046",
    word: "get",
    meaning: "얻다, 받다, 되다",
    examples: [
      { en: "I need to get a new phone.", kr: "나는 새 전화기를 얻어야 해." },
      { en: "It's getting colder.", kr: "점점 추워지고 있어." }
    ]
  },
  {
    id: "L1-047",
    word: "which",
    meaning: "어느 것, ~인 것",
    examples: [
      { en: "Which color do you prefer?", kr: "어떤 색깔을 선호하니?" },
      { en: "This is the car which I bought.", kr: "이것이 내가 산 차야." }
    ]
  },
  {
    id: "L1-048",
    word: "go",
    meaning: "가다",
    examples: [
      { en: "Let's go home now.", kr: "지금 집에 가자." },
      { en: "I want to go travelling.", kr: "나는 여행 가고 싶어." }
    ]
  },
  {
    id: "L1-049",
    word: "me",
    meaning: "나를, 나에게",
    examples: [
      { en: "Can you help me?", kr: "나를 도와줄 수 있니?" },
      { en: "Give me a pen.", kr: "나에게 펜을 줘." }
    ]
  },
  {
    id: "L1-050",
    word: "when",
    meaning: "언제, ~할 때",
    examples: [
      { en: "When is your birthday?", kr: "네 생일은 언제니?" },
      { en: "I was sleeping when he called.", kr: "그가 전화했을 때 나는 자고 있었어." }
    ]
  },
  {
    id: "L1-051",
    word: "make",
    meaning: "만들다",
    examples: [
      { en: "She makes delicious cookies.", kr: "그녀는 맛있는 쿠키를 만들어." },
      { en: "You make me happy.", kr: "너는 나를 행복하게 해." }
    ]
  },
  {
    id: "L1-052",
    word: "can",
    meaning: "~할 수 있다 (조동사)",
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
    meaning: "아니오, 없는",
    examples: [
      { en: "No, I am not ready.", kr: "아니오, 저는 준비되지 않았어요." },
      { en: "There is no food left.", kr: "남은 음식이 없어." }
    ]
  },
  {
    id: "L1-056",
    word: "just",
    meaning: "단지, 방금",
    examples: [
      { en: "I was just checking the news.", kr: "나는 단지 뉴스를 확인하고 있었어." },
      { en: "He just left five minutes ago.", kr: "그는 방금 5분 전에 떠났어." }
    ]
  },
  {
    id: "L1-057",
    word: "him",
    meaning: "그를, 그에게",
    examples: [
      { en: "I saw him at the library.", kr: "나는 도서관에서 그를 봤어." },
      { en: "Give him the book.", kr: "그에게 그 책을 줘." }
    ]
  },
  {
    id: "L1-058",
    word: "know",
    meaning: "알다",
    examples: [
      { en: "I know the answer.", kr: "나는 답을 알아." },
      { en: "Do you know how to swim?", kr: "너 수영할 줄 아니?" }
    ]
  },
  {
    id: "L1-059",
    word: "take",
    meaning: "가져가다, (시간이) 걸리다",
    examples: [
      { en: "Please take your coat.", kr: "코트를 가져가세요." },
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
    meaning: "~ 안으로",
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
      { en: "The company was founded last year.", kr: "그 회사는 작년에 설립되었어." },
      { en: "Happy New Year!", kr: "새해 복 많이 받아!" }
    ]
  },
  {
    id: "L1-063",
    word: "your",
    meaning: "당신의, 너의",
    examples: [
      { en: "Is this your umbrella?", kr: "이것이 당신의 우산인가요?" },
      { en: "What is your opinion?", kr: "당신의 의견은 무엇입니까?" }
    ]
  },
  {
    id: "L1-064",
    word: "good",
    meaning: "좋은",
    examples: [
      { en: "Have a good day.", kr: "좋은 하루 보내세요." },
      { en: "She is a good person.", kr: "그녀는 좋은 사람이야." }
    ]
  },
  {
    id: "L1-065",
    word: "some",
    meaning: "약간의, 몇몇",
    examples: [
      { en: "I need some help.", kr: "나는 약간의 도움이 필요해." },
      { en: "Some students left early.", kr: "몇몇 학생들이 일찍 떠났어." }
    ]
  },
  {
    id: "L1-066",
    word: "could",
    meaning: "~할 수 있었다 (조동사)",
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
      { en: "It is better late than never.", kr: "늦는 것이 아예 안 하는 것보다 낫다." }
    ]
  },
  {
    id: "L1-071",
    word: "then",
    meaning: "그때, 그러고 나서",
    examples: [
      { en: "We were young then.", kr: "우리는 그때 젊었어." },
      { en: "I finished the work, and then I went home.", kr: "나는 일을 끝내고, 그러고 나서 집에 갔어." }
    ]
  },
  {
    id: "L1-072",
    word: "now",
    meaning: "지금",
    examples: [
      { en: "We should start now.", kr: "우리는 지금 시작해야 해." },
      { en: "He is a doctor now.", kr: "그는 지금 의사야." }
    ]
  },
  {
    id: "L1-073",
    word: "look",
    meaning: "보다, ~처럼 보이다",
    examples: [
      { en: "Look at the stars.", kr: "별을 봐." },
      { en: "You look happy today.", kr: "너 오늘 행복해 보여." }
    ]
  },
  {
    id: "L1-074",
    word: "only",
    meaning: "오직, 단지",
    examples: [
      { en: "I have only one brother.", kr: "나는 오직 남동생 한 명만 있어." },
      { en: "This is only a small problem.", kr: "이것은 단지 작은 문제일 뿐이야." }
    ]
  },
  {
    id: "L1-075",
    word: "come",
    meaning: "오다",
    examples: [
      { en: "Please come to my party.", kr: "내 파티에 와줘." },
      { en: "The bus is coming.", kr: "버스가 오고 있어." }
    ]
  },
  {
    id: "L1-076",
    word: "its",
    meaning: "그것의",
    examples: [
      { en: "The dog wagged its tail.", kr: "그 개는 꼬리를 흔들었어." },
      { en: "The company announced its new plan.", kr: "그 회사는 그것의 새로운 계획을 발표했어." }
    ]
  },
  {
    id: "L1-077",
    word: "over",
    meaning: "~ 위에, ~을 넘어",
    examples: [
      { en: "The plane flew over the city.", kr: "비행기가 도시 위를 날았어." },
      { en: "The meeting is over.", kr: "회의가 끝났어." }
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
      { en: "I am hungry and also tired.", kr: "나는 배고프고 또한 피곤해." },
      { en: "She is a student and also an artist.", kr: "그녀는 학생이고 또한 예술가야." }
    ]
  },
  {
    id: "L1-080",
    word: "back",
    meaning: "뒤로, 되돌아",
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
      { en: "Let's go after lunch.", kr: "점심 식사 후에 가자." },
      { en: "He arrived after the party started.", kr: "그는 파티가 시작된 후에 도착했어." }
    ]
  },
  {
    id: "L1-082",
    word: "use",
    meaning: "사용하다",
    examples: [
      { en: "Can I use your computer?", kr: "컴퓨터를 사용해도 될까요?" },
      { en: "This is a useful tool.", kr: "이것은 유용한 도구야." }
    ]
  },
  {
    id: "L1-083",
    word: "how",
    meaning: "어떻게",
    examples: [
      { en: "How are you feeling?", kr: "기분은 어떠니?" },
      { en: "Tell me how to do it.", kr: "나에게 그것을 어떻게 하는지 말해줘." }
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
      { en: "I have a lot of work to do.", kr: "나는 해야 할 일이 많아." },
      { en: "He works very hard.", kr: "그는 매우 열심히 일해." }
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
    meaning: "심지어, 평평한",
    examples: [
      { en: "He didn't even say hello.", kr: "그는 심지어 인사도 하지 않았어." },
      { en: "Try to make the surface even.", kr: "표면을 평평하게 만들어 봐." }
    ]
  },
  {
    id: "L1-089",
    word: "first",
    meaning: "첫 번째의",
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
      { en: "What do you want for dinner?", kr: "저녁 식사로 무엇을 원하니?" },
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
    meaning: "이것들",
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
      { en: "Give me the phone.", kr: "나에게 전화기를 줘." },
      { en: "She gave him a gift.", kr: "그녀는 그에게 선물을 주었어." }
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
    meaning: "많은 (양)",
    examples: [
      { en: "I don't have much money.", kr: "나는 돈이 많지 않아." },
      { en: "Thank you very much.", kr: "정말 고마워." }
    ]
  },
  {
    id: "L1-100",
    word: "thing",
    meaning: "것, 물건",
    examples: [
      { en: "What is that thing?", kr: "저것은 무엇이니?" },
      { en: "The most important thing is safety.", kr: "가장 중요한 것은 안전이야." }
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
    id: "L1-102",
    word: "could",
    meaning: "~할 수 있었다 (조동사)",
    examples: [
      { en: "I wish I could help you.", kr: "당신을 도울 수 있으면 좋을 텐데." },
      { en: "Could you please pass the salt?", kr: "소금 좀 건네주시겠어요?" }
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
    meaning: "아래로",
    examples: [
      { en: "Please sit down.", kr: "앉아 주세요." },
      { en: "The building fell down.", kr: "그 건물이 무너졌어." }
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
    meaning: "~ 이후로",
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
      { en: "Please hold my hand.", kr: "내 손을 잡아줘." },
      { en: "She raised her hand to ask a question.", kr: "그녀는 질문하기 위해 손을 들었어." }
    ]
  },
  {
    id: "L1-113",
    word: "where",
    meaning: "어디에",
    examples: [
      { en: "Where are you going?", kr: "어디에 가니?" },
      { en: "That is the house where I was born.", kr: "저것은 내가 태어난 집이야." }
    ]
  },
  {
    id: "L1-114",
    word: "while",
    meaning: "~ 동안",
    examples: [
      { en: "I read a book while waiting.", kr: "기다리는 동안 책을 읽었어." },
      { en: "She slept, while I worked.", kr: "내가 일하는 동안 그녀는 잤어." }
    ]
  },
  {
    id: "L1-115",
    word: "tell",
    meaning: "말하다, 알리다",
    examples: [
      { en: "Tell me what happened.", kr: "나에게 무슨 일이 있었는지 말해줘." },
      { en: "I can't tell the difference.", kr: "나는 차이점을 구별할 수 없어." }
    ]
  },
  {
    id: "L1-116",
    word: "general",
    meaning: "일반적인",
    examples: [
      { en: "In general, I agree with you.", kr: "일반적으로, 나는 너에게 동의해." },
      { en: "This rule applies to the general public.", kr: "이 규칙은 일반 대중에게 적용돼." }
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
    meaning: "숫자",
    examples: [
      { en: "What is your phone number?", kr: "네 전화번호가 뭐니?" },
      { en: "A large number of students failed.", kr: "많은 수의 학생들이 불합격했어." }
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
    meaning: "형태, 형성하다",
    examples: [
      { en: "The gas changed form and became liquid.", kr: "가스가 형태로 변해 액체가 되었어." },
      { en: "Fill out the application form.", kr: "신청 양식을 작성해." }
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
    meaning: "삶",
    examples: [
      { en: "Life is too short.", kr: "인생은 너무 짧아." },
      { en: "He saved a person's life.", kr: "그는 한 사람의 생명을 구했어." }
    ]
  },
  {
    id: "L1-124",
    word: "public",
    meaning: "대중의",
    examples: [
      { en: "The event is open to the public.", kr: "그 행사는 대중에게 공개돼." },
      { en: "We rely on public transportation.", kr: "우리는 대중교통에 의존해." }
    ]
  },
  {
    id: "L1-125",
    word: "present",
    meaning: "현재, 주다, 참석한",
    examples: [
      { en: "I received a present on my birthday.", kr: "생일에 선물을 받았어." },
      { en: "All members were present at the meeting.", kr: "모든 구성원들이 회의에 참석했어." }
    ]
  },
  {
    id: "L1-126",
    word: "case",
    meaning: "경우, 사건",
    examples: [
      { en: "In that case, we should wait.", kr: "그 경우엔, 우리는 기다려야 해." },
      { en: "The police are investigating a difficult case.", kr: "경찰은 어려운 사건을 수사하고 있어." }
    ]
  },
  {
    id: "L1-127",
    word: "point",
    meaning: "점, 요점",
    examples: [
      { en: "What is the main point of the lesson?", kr: "수업의 주요 요점이 뭐니?" },
      { en: "She lives near the meeting point.", kr: "그녀는 만남의 장소 근처에 살아." }
    ]
  },
  {
    id: "L1-128",
    word: "area",
    meaning: "지역",
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
    meaning: "힘",
    examples: [
      { en: "Knowledge is power.", kr: "지식은 힘이다." },
      { en: "The storm knocked out the power.", kr: "폭풍이 전기를 끊었어." }
    ]
  },
  {
    id: "L1-131",
    word: "policy",
    meaning: "정책",
    examples: [
      { en: "The government announced a new housing policy.", kr: "정부가 새로운 주택 정책을 발표했어." },
      { en: "What is the company's refund policy?", kr: "회사의 환불 정책은 무엇입니까?" }
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
      { en: "Which side of the argument are you on?", kr: "논쟁의 어느 편이니?" },
      { en: "The car was hit on the right side.", kr: "차는 오른쪽 측면을 맞았어." }
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
    meaning: "그룹, 모이다",
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
      { en: "The store is next to the bank.", kr: "그 가게는 은행 옆이야." }
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
    meaning: "마지막의",
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
      { en: "Hold my hand tightly.", kr: "내 손을 꽉 잡아." },
      { en: "The meeting will be held tomorrow.", kr: "회의는 내일 개최될 거야." }
    ]
  },
  {
    id: "L1-141",
    word: "stand",
    meaning: "서다",
    examples: [
      { en: "Please stand up when your name is called.", kr: "네 이름이 불리면 일어나." },
      { en: "The table stands in the middle of the room.", kr: "테이블이 방 중앙에 서 있어." }
    ]
  },
  {
    id: "L1-142",
    word: "own",
    meaning: "자신의, 소유하다",
    examples: [
      { en: "I want to start my own business.", kr: "나는 내 자신의 사업을 시작하고 싶어." },
      { en: "Do you own this car?", kr: "이 차를 소유하고 있니?" }
    ]
  },
  {
    id: "L1-143",
    word: "pay",
    meaning: "지불하다",
    examples: [
      { en: "I need to pay the bills.", kr: "나는 청구서를 지불해야 해." },
      { en: "How much did you pay for it?", kr: "그것에 얼마를 지불했니?" }
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
      { en: "What school do you go to?", kr: "어떤 학교에 다니니?" },
      { en: "The new building is a school.", kr: "그 새 건물은 학교야." }
    ]
  },
  {
    id: "L1-146",
    word: "state",
    meaning: "상태, 국가",
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
      { en: "I feel tired today.", kr: "나는 오늘 피곤함을 느껴." },
      { en: "How do you feel about the decision?", kr: "그 결정에 대해 어떻게 느끼니?" }
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
      { en: "She put on her coat.", kr: "그녀는 코트를 입었어." }
    ]
  },
  {
    id: "L1-150",
    word: "keep",
    meaning: "유지하다, 계속하다",
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
    meaning: "발전시키다",
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
      { en: "Are phones allowed in the classroom?", kr: "교실에서 핸드폰이 허락되니?" },
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
    meaning: "구성원",
    examples: [
      { en: "He is a member of the local club.", kr: "그는 지역 클럽의 구성원이야." },
      { en: "All team members must participate.", kr: "모든 팀 구성원들은 참여해야 해." }
    ]
  },
  {
    id: "L1-159",
    word: "study",
    meaning: "공부하다",
    examples: [
      { en: "I need to study for the test.", kr: "나는 시험공부를 해야 해." },
      { en: "The new study shows a surprising result.", kr: "그 새로운 연구는 놀라운 결과를 보여줘." }
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
      { en: "She set the clock for 7 AM.", kr: "그녀는 시계를 아침 7시로 맞춰 놓았어." },
      { en: "I bought a new dinner set.", kr: "나는 새 식기 세트를 샀어." }
    ]
  },
  {
    id: "L1-162",
    word: "word",
    meaning: "단어",
    examples: [
      { en: "I learned a new English word today.", kr: "나는 오늘 새로운 영어 단어를 배웠어." },
      { en: "He said a few kind words.", kr: "그는 몇 마디 친절한 말을 했어." }
    ]
  },
  {
    id: "L1-163",
    word: "process",
    meaning: "과정, 처리하다",
    examples: [
      { en: "Learning is a continuous process.", kr: "학습은 지속적인 과정이야." },
      { en: "The data is being processed now.", kr: "데이터는 지금 처리되고 있어." }
    ]
  },
  {
    id: "L1-164",
    word: "run",
    meaning: "달리다, 운영하다",
    examples: [
      { en: "She can run very fast.", kr: "그녀는 매우 빨리 달릴 수 있어." },
      { en: "Who runs this company?", kr: "누가 이 회사를 운영하니?" }
    ]
  },
  {
    id: "L1-165",
    word: "result",
    meaning: "결과",
    examples: [
      { en: "What was the result of the match?", kr: "경기 결과는 무엇이었니?" },
      { en: "The success is a result of hard work.", kr: "성공은 노력의 결과야." }
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
      { en: "I don't have enough money for a trip.", kr: "나는 여행할 충분한 돈이 없어." },
      { en: "Time is money.", kr: "시간은 돈이다." }
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
      { en: "I have a big interest in history.", kr: "나는 역사에 큰 관심이 있어." },
      { en: "The bank pays a high interest rate.", kr: "은행은 높은 이자율을 지불해." }
    ]
  },
  {
    id: "L1-170",
    word: "body",
    meaning: "몸",
    examples: [
      { en: "Exercise is good for your body.", kr: "운동은 당신의 몸에 좋아." },
      { en: "The main body of the report is long.", kr: "보고서의 주요 본문이 길어." }
    ]
  },
  {
    id: "L1-171",
    word: "fact",
    meaning: "사실",
    examples: [
      { en: "It is a fact that water is wet.", kr: "물이 젖어 있다는 것은 사실이야." },
      { en: "We must consider all the facts.", kr: "우리는 모든 사실을 고려해야 해." }
    ]
  },
  {
    id: "L1-172",
    word: "war",
    meaning: "전쟁",
    examples: [
      { en: "The country was recovering from the war.", kr: "그 나라는 전쟁으로부터 회복하고 있었어." },
      { en: "We all hope for world peace, not war.", kr: "우리 모두 전쟁이 아닌 세계 평화를 희망해." }
    ]
  },
  {
    id: "L1-173",
    word: "view",
    meaning: "관점, 보다",
    examples: [
      { en: "What is your view on this issue?", kr: "이 문제에 대한 당신의 관점은 무엇입니까?" },
      { en: "The apartment has a great view of the city.", kr: "그 아파트는 도시의 멋진 경치를 볼 수 있어." }
    ]
  },
  {
    id: "L1-174",
    word: "move",
    meaning: "움직이다",
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
      { en: "What is the reason for the delay?", kr: "지연되는 이유는 무엇입니까?" },
      { en: "Give me one good reason to agree.", kr: "동의할 만한 좋은 이유 하나를 말해줘." }
    ]
  },
  {
    id: "L1-176",
    word: "meet",
    meaning: "만나다",
    examples: [
      { en: "Let's meet for lunch tomorrow.", kr: "내일 점심 식사로 만나자." },
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
    meaning: "이름",
    examples: [
      { en: "What is your full name?", kr: "당신의 성함이 무엇입니까?" },
      { en: "She made a name for herself as an artist.", kr: "그녀는 예술가로서 명성을 얻었어." }
    ]
  },
  {
    id: "L1-179",
    word: "course",
    meaning: "과정",
    examples: [
      { en: "I am taking a language course.", kr: "나는 어학 과정을 수강하고 있어." },
      { en: "Of course, I will help you.", kr: "물론, 내가 너를 도와줄게." }
    ]
  },
  {
    id: "L1-180",
    word: "report",
    meaning: "보고하다",
    examples: [
      { en: "You must report the incident to the police.", kr: "당신은 그 사건을 경찰에 보고해야 합니다." },
      { en: "The company will release its financial report soon.", kr: "회사는 곧 재무 보고서를 발표할 거야." }
    ]
  },
  {
    id: "L1-181",
    word: "service",
    meaning: "서비스",
    examples: [
      { en: "The restaurant has excellent service.", kr: "그 식당은 훌륭한 서비스를 가지고 있어." },
      { en: "We appreciate your years of service.", kr: "당신의 수년간의 봉사에 감사드립니다." }
    ]
  },
  {
    id: "L1-182",
    word: "line",
    meaning: "줄, 선",
    examples: [
      { en: "Please wait in line.", kr: "줄 서서 기다려 주세요." },
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
    meaning: "단위",
    examples: [
      { en: "Meters are a unit of length.", kr: "미터는 길이의 단위야." },
      { en: "The apartment complex has 100 residential units.", kr: "그 아파트 단지에는 100개의 주거 단위(세대)가 있어." }
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
    meaning: "사회적인",
    examples: [
      { en: "Humans are social creatures.", kr: "인간은 사회적인 동물이야." },
      { en: "We discussed the current social issues.", kr: "우리는 현재의 사회적인 문제들을 논의했어." }
    ]
  },
  {
    id: "L1-190",
    word: "major",
    meaning: "주요한",
    examples: [
      { en: "This is a major problem we must solve.", kr: "이것은 우리가 해결해야 할 주요한 문제야." },
      { en: "She is a major in English literature.", kr: "그녀는 영문학 전공자야." }
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
      { en: "The theater was full for the concert.", kr: "콘서트를 위해 극장이 가득 찼어." }
    ]
  },
  {
    id: "L1-193",
    word: "right",
    meaning: "옳은, 오른쪽",
    examples: [
      { en: "You are absolutely right.", kr: "네 말이 전적으로 옳아." },
      { en: "Turn right at the next traffic light.", kr: "다음 신호등에서 오른쪽으로 돌아." }
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
      { en: "I am able to drive a truck.", kr: "나는 트럭을 운전할 수 있어." },
      { en: "She is not able to attend the party.", kr: "그녀는 파티에 참석할 수 없어." }
    ]
  },
  {
    id: "L1-196",
    word: "next",
    meaning: "다음의",
    examples: [
      { en: "What are you doing next week?", kr: "다음 주에 뭐 할 거야?" },
      { en: "The store is next to the bank.", kr: "그 가게는 은행 옆이야." }
    ]
  },
  {
    id: "L1-197",
    word: "ready",
    meaning: "준비된",
    examples: [
      { en: "Are you ready to go now?", kr: "지금 갈 준비가 되었니?" },
      { en: "The food is ready to eat.", kr: "음식이 먹을 준비가 되었어." }
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
    id: "L1-199",
    word: "put",
    meaning: "놓다",
    examples: [
      { en: "Put the bag on the floor.", kr: "가방을 바닥에 놓아." },
      { en: "She put on her jacket.", kr: "그녀는 재킷을 입었어." }
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
      { en: "The library is open until 9 PM.", kr: "도서관은 저녁 9시까지 열려 있습니다." },
      { en: "Please open the window for some fresh air.", kr: "신선한 공기를 위해 창문을 열어주세요." }
    ]
  },
  {
    id: "L1-202",
    word: "provide",
    meaning: "제공하다",
    examples: [
      { en: "The hotel provides free breakfast.", kr: "그 호텔은 무료 아침 식사를 제공합니다." },
      { en: "We need to provide more information.", kr: "우리는 더 많은 정보를 제공해야 합니다." }
    ]
  },
  {
    id: "L1-203",
    word: "party",
    meaning: "파티, 정당",
    examples: [
      { en: "Are you coming to my birthday party?", kr: "내 생일 파티에 올 거니?" },
      { en: "She belongs to the conservative party.", kr: "그녀는 보수 정당에 속해 있습니다." }
    ]
  },
  {
    id: "L1-204",
    word: "big",
    meaning: "큰",
    examples: [
      { en: "I saw a big dog in the park.", kr: "나는 공원에서 큰 개를 봤어." },
      { en: "This is a big step for our team.", kr: "이것은 우리 팀에게 큰 진전입니다." }
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
      { en: "It is possible to finish it today.", kr: "오늘 그것을 끝내는 것이 가능합니다." },
      { en: "I'll do everything possible to help.", kr: "도울 수 있는 모든 것을 할게요." }
    ]
  },
  {
    id: "L1-207",
    word: "program",
    meaning: "프로그램",
    examples: [
      { en: "I watched an interesting TV program last night.", kr: "어젯밤에 흥미로운 TV 프로그램을 봤어." },
      { en: "This computer program is very useful.", kr: "이 컴퓨터 프로그램은 매우 유용합니다." }
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
      { en: "Is there any need for a break?", kr: "휴식이 필요할까요?" }
    ]
  },
  {
    id: "L1-211",
    word: "almost",
    meaning: "거의",
    examples: [
      { en: "It's almost midnight.", kr: "거의 자정입니다." },
      { en: "I almost forgot your birthday.", kr: "네 생일을 거의 잊을 뻔했어." }
    ]
  },
  {
    id: "L1-212",
    word: "important",
    meaning: "중요한",
    examples: [
      { en: "This is a very important meeting.", kr: "이것은 매우 중요한 회의입니다." },
      { en: "It's important to be honest.", kr: "정직한 것이 중요합니다." }
    ]
  },
  {
    id: "L1-213",
    word: "play",
    meaning: "놀다, 연주하다",
    examples: [
      { en: "Let's go play outside.", kr: "나가서 놀자." },
      { en: "He can play the piano well.", kr: "그는 피아노를 잘 연주할 수 있어." }
    ]
  },
  {
    id: "L1-214",
    word: "write",
    meaning: "쓰다",
    examples: [
      { en: "Can you write your name here?", kr: "여기에 당신의 이름을 써주시겠어요?" },
      { en: "I need to write a report.", kr: "나는 보고서를 써야 해." }
    ]
  },
  {
    id: "L1-215",
    word: "become",
    meaning: "~이 되다",
    examples: [
      { en: "She wants to become a doctor.", kr: "그녀는 의사가 되고 싶어 합니다." },
      { en: "The weather became cold suddenly.", kr: "날씨가 갑자기 추워졌어." }
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
    meaning: "거리",
    examples: [
      { en: "He lives down the street from me.", kr: "그는 나와 같은 거리에 살아." },
      { en: "Be careful when you cross the street.", kr: "거리를 건널 때 조심해." }
    ]
  },
  {
    id: "L1-218",
    word: "second",
    meaning: "두 번째의, 초",
    examples: [
      { en: "This is my second cup of coffee.", kr: "이것은 나의 두 번째 커피 잔이야." },
      { en: "Wait a second, I need to check something.", kr: "잠깐만, 확인할 게 있어." }
    ]
  },
  {
    id: "L1-219",
    word: "talk",
    meaning: "말하다, 이야기하다",
    examples: [
      { en: "Let's talk about your plan.", kr: "네 계획에 대해 이야기하자." },
      { en: "I don't like to talk too much.", kr: "나는 말을 너무 많이 하는 것을 좋아하지 않아." }
    ]
  },
  {
    id: "L1-220",
    word: "soon",
    meaning: "곧",
    examples: [
      { en: "I hope to see you again soon.", kr: "곧 다시 만나기를 바랍니다." },
      { en: "Dinner will be ready soon.", kr: "저녁 식사가 곧 준비될 거야." }
    ]
  },
  {
    id: "L1-221",
    word: "continue",
    meaning: "계속하다",
    examples: [
      { en: "Please continue your story.", kr: "당신의 이야기를 계속해 주세요." },
      { en: "We decided to continue working late.", kr: "우리는 늦게까지 계속 일하기로 결정했어." }
    ]
  },
  {
    id: "L1-222",
    word: "build",
    meaning: "짓다",
    examples: [
      { en: "They are going to build a new bridge.", kr: "그들은 새 다리를 지을 예정이야." },
      { en: "It takes time to build trust.", kr: "신뢰를 쌓는 데는 시간이 걸립니다." }
    ]
  },
  {
    id: "L1-223",
    word: "increase",
    meaning: "증가하다",
    examples: [
      { en: "The company will increase its budget next year.", kr: "회사는 내년에 예산을 늘릴 것입니다." },
      { en: "The price of gas has increased recently.", kr: "휘발유 가격이 최근에 올랐습니다." }
    ]
  },
  {
    id: "L1-224",
    word: "week",
    meaning: "주(週)",
    examples: [
      { en: "I will be on vacation next week.", kr: "나는 다음 주에 휴가 갈 거야." },
      { en: "How many days are there in a week?", kr: "일주일은 며칠이니?" }
    ]
  },
  {
    id: "L1-225",
    word: "president",
    meaning: "대통령, 회장",
    examples: [
      { en: "The president gave a speech yesterday.", kr: "대통령은 어제 연설을 했습니다." },
      { en: "She is the president of the company.", kr: "그녀는 그 회사의 회장입니다." }
    ]
  },
  {
    id: "L1-226",
    word: "history",
    meaning: "역사",
    examples: [
      { en: "I enjoy studying ancient history.", kr: "나는 고대 역사 공부하는 것을 즐깁니다." },
      { en: "This event made history.", kr: "이 사건은 역사를 만들었습니다." }
    ]
  },
  {
    id: "L1-227",
    word: "approach",
    meaning: "접근하다, 접근법",
    examples: [
      { en: "The cat slowly approached the bird.", kr: "고양이가 새에게 천천히 접근했어." },
      { en: "We need a new approach to solve this problem.", kr: "이 문제를 해결하기 위해 새로운 접근법이 필요해." }
    ]
  },
  {
    id: "L1-228",
    word: "different",
    meaning: "다른",
    examples: [
      { en: "I have two different types of phones.", kr: "나는 두 가지 다른 종류의 휴대폰을 가지고 있어." },
      { en: "Our opinions are very different.", kr: "우리의 의견은 매우 다릅니다." }
    ]
  },
  {
    id: "L1-229",
    word: "offer",
    meaning: "제공하다, 제안",
    examples: [
      { en: "They offered me a job.", kr: "그들은 나에게 일자리를 제안했습니다." },
      { en: "Thank you for your generous offer.", kr: "당신의 관대한 제안에 감사드립니다." }
    ]
  },
  {
    id: "L1-230",
    word: "local",
    meaning: "지역의",
    examples: [
      { en: "Do you know any good local restaurants?", kr: "괜찮은 지역 식당 아는 곳 있니?" },
      { en: "We support the local economy.", kr: "우리는 지역 경제를 지지합니다." }
    ]
  },
  {
    id: "L1-231",
    word: "cover",
    meaning: "덮다, 포함하다",
    examples: [
      { en: "Cover the food to keep it warm.", kr: "음식을 따뜻하게 유지하기 위해 덮어라." },
      { en: "The report covers all the main points.", kr: "그 보고서는 모든 주요 요점을 포함합니다." }
    ]
  },
  {
    id: "L1-232",
    word: "hear",
    meaning: "듣다",
    examples: [
      { en: "Can you hear the music clearly?", kr: "음악이 명확하게 들리니?" },
      { en: "I was surprised to hear the news.", kr: "그 소식을 듣고 놀랐어." }
    ]
  },
  {
    id: "L1-233",
    word: "easy",
    meaning: "쉬운",
    examples: [
      { en: "The test was surprisingly easy.", kr: "시험이 놀랍게도 쉬웠어." },
      { en: "It is not easy to learn a new language.", kr: "새로운 언어를 배우는 것은 쉽지 않습니다." }
    ]
  },
  {
    id: "L1-234",
    word: "special",
    meaning: "특별한",
    examples: [
      { en: "Today is a very special day.", kr: "오늘은 매우 특별한 날이야." },
      { en: "We have a special offer for new customers.", kr: "우리는 신규 고객을 위한 특별 제안이 있습니다." }
    ]
  },
  {
    id: "L1-235",
    word: "picture",
    meaning: "그림, 사진",
    examples: [
      { en: "Did you see the picture I sent you?", kr: "내가 너에게 보낸 사진 봤니?" },
      { en: "The museum has a beautiful picture.", kr: "그 박물관에는 아름다운 그림이 있어." }
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
      { en: "I have five books on the shelf.", kr: "나는 선반에 다섯 권의 책을 가지고 있어." },
      { en: "The meeting starts in five minutes.", kr: "회의는 5분 후에 시작합니다." }
    ]
  },
  {
    id: "L1-238",
    word: "sense",
    meaning: "감각, 의미",
    examples: [
      { en: "That doesn't make any sense.", kr: "그것은 전혀 말이 안 돼." },
      { en: "We learn about the five senses in school.", kr: "우리는 학교에서 오감에 대해 배웁니다." }
    ]
  },
  {
    id: "L1-239",
    word: "health",
    meaning: "건강",
    examples: [
      { en: "Exercise is important for good health.", kr: "운동은 좋은 건강을 위해 중요합니다." },
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
      { en: "Please wait for me at the entrance.", kr: "입구에서 저를 기다려 주세요." },
      { en: "I can't wait to see the movie.", kr: "그 영화를 빨리 보고 싶어 (기다릴 수 없어)." }
    ]
  },
  {
    id: "L1-242",
    word: "expect",
    meaning: "예상하다, 기대하다",
    examples: [
      { en: "I expect her to call soon.", kr: "나는 그녀가 곧 전화할 것이라고 예상해." },
      { en: "Don't expect too much from others.", kr: "다른 사람들에게 너무 많이 기대하지 마." }
    ]
  },
  {
    id: "L1-243",
    word: "position",
    meaning: "위치, 입장",
    examples: [
      { en: "What is your position on this matter?", kr: "이 문제에 대한 당신의 입장은 무엇입니까?" },
      { en: "She applied for a managerial position.", kr: "그녀는 관리직에 지원했습니다." }
    ]
  },
  {
    id: "L1-244",
    word: "decide",
    meaning: "결정하다",
    examples: [
      { en: "We need to decide quickly.", kr: "우리는 빨리 결정해야 합니다." },
      { en: "Have you decided what to eat?", kr: "무엇을 먹을지 결정했니?" }
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
    meaning: "포함하다",
    examples: [
      { en: "This bottle contains orange juice.", kr: "이 병은 오렌지 주스를 포함하고 있습니다." },
      { en: "The box was said to contain a rare jewel.", kr: "그 상자에는 희귀한 보석이 들어 있다고 했다." }
    ]
  },
  {
    id: "L1-247",
    word: "remember",
    meaning: "기억하다",
    examples: [
      { en: "I can't remember his name.", kr: "나는 그의 이름을 기억할 수 없어." },
      { en: "Remember to lock the door.", kr: "문 잠그는 것을 기억해." }
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
    meaning: "쓰다, 소비하다",
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
      { en: "Education is the key to a better future.", kr: "교육은 더 나은 미래의 열쇠입니다." },
      { en: "She received her education in London.", kr: "그녀는 런던에서 교육을 받았어." }
    ]
  },
  {
    id: "L1-252",
    word: "price",
    meaning: "가격",
    examples: [
      { en: "The price of gas went up again.", kr: "휘발유 가격이 또 올랐어." },
      { en: "This store offers a low price guarantee.", kr: "이 가게는 저가 보장제를 제공합니다." }
    ]
  },
  {
    id: "L1-253",
    word: "short",
    meaning: "짧은",
    examples: [
      { en: "I prefer short hair.", kr: "나는 짧은 머리를 선호해." },
      { en: "We only had a short break.", kr: "우리는 단지 짧은 휴식 시간만 가졌어." }
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
      { en: "Do you have any experience in teaching?", kr: "가르치는 것에 대한 경험이 있습니까?" },
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
      { en: "Would you like to join us for dinner?", kr: "우리와 함께 저녁 식사에 합류하시겠어요?" },
      { en: "The two rivers join near the city.", kr: "그 두 강은 도시 근처에서 합쳐집니다." }
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
    meaning: "창조하다",
    examples: [
      { en: "The artist created a beautiful sculpture.", kr: "그 예술가는 아름다운 조각품을 창조했어." },
      { en: "We need to create a plan for next month.", kr: "우리는 다음 달을 위한 계획을 만들어야 해." }
    ]
  },
  {
    id: "L1-264",
    word: "base",
    meaning: "기초, 기반",
    examples: [
      { en: "The military has a large base near the coast.", kr: "군대는 해안 근처에 큰 기지를 가지고 있어." },
      { en: "This decision is based on a survey.", kr: "이 결정은 설문조사를 기반으로 합니다." }
    ]
  },
  {
    id: "L1-265",
    word: "value",
    meaning: "가치",
    examples: [
      { en: "The historical value of the painting is immense.", kr: "그 그림의 역사적 가치는 엄청납니다." },
      { en: "I value your friendship greatly.", kr: "나는 당신의 우정을 대단히 소중하게 여깁니다." }
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
      { en: "She has a beautiful singing voice.", kr: "그녀는 아름다운 노래 목소리를 가지고 있어." },
      { en: "Everyone needs to have a voice in the decision.", kr: "모두가 그 결정에 목소리를 내야 합니다." }
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
    meaning: "사랑",
    examples: [
      { en: "I love spending time with my family.", kr: "나는 가족과 시간을 보내는 것을 사랑해." },
      { en: "Their love story is famous.", kr: "그들의 사랑 이야기는 유명합니다." }
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
      { en: "It was a very difficult period in my life.", kr: "그것은 내 인생에서 매우 어려운 기간이었어." },
      { en: "The contract is valid for a period of one year.", kr: "계약은 1년 기간 동안 유효합니다." }
    ]
  },
  {
    id: "L1-272",
    word: "store",
    meaning: "가게, 저장하다",
    examples: [
      { en: "I need to go to the grocery store.", kr: "나는 식료품점에 가야 해." },
      { en: "You can store the files on the cloud.", kr: "파일을 클라우드에 저장할 수 있습니다." }
    ]
  },
  {
    id: "L1-273",
    word: "simply",
    meaning: "단순히",
    examples: [
      { en: "I simply don't have enough time.", kr: "나는 단순히 시간이 충분하지 않아." },
      { en: "The design is simply beautiful.", kr: "그 디자인은 그저 아름답습니다." }
    ]
  },
  {
    id: "L1-274",
    word: "various",
    meaning: "다양한",
    examples: [
      { en: "The market sells various types of fruit.", kr: "그 시장은 다양한 종류의 과일을 판매합니다." },
      { en: "We discussed the problem from various angles.", kr: "우리는 다양한 각도에서 그 문제를 논의했습니다." }
    ]
  },
  {
    id: "L1-275",
    word: "private",
    meaning: "사적인",
    examples: [
      { en: "This is a private conversation.", kr: "이것은 사적인 대화입니다." },
      { en: "They held a private meeting.", kr: "그들은 사적인 회의를 개최했습니다." }
    ]
  },
  {
    id: "L1-276",
    word: "current",
    meaning: "현재의",
    examples: [
      { en: "What is your current address?", kr: "당신의 현재 주소는 무엇입니까?" },
      { en: "We are discussing the current economic situation.", kr: "우리는 현재의 경제 상황에 대해 논의하고 있습니다." }
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
      { en: "I suppose we should leave now.", kr: "이제 떠나야 할 것 같아요 (가정합니다)." },
      { en: "Suppose it rains tomorrow, what will we do?", kr: "내일 비가 온다고 가정해 봐, 우린 뭘 할까?" }
    ]
  },
  {
    id: "L1-280",
    word: "necessary",
    meaning: "필요한",
    examples: [
      { en: "A passport is necessary for international travel.", kr: "여권은 해외여행에 필수적입니다." },
      { en: "It is necessary to eat healthy food.", kr: "건강한 음식을 먹는 것이 필요합니다." }
    ]
  },
  {
    id: "L1-281",
    word: "finally",
    meaning: "마침내",
    examples: [
      { en: "Finally, the rain stopped.", kr: "마침내 비가 멈췄어." },
      { en: "We finally finished the project.", kr: "우리는 마침내 프로젝트를 끝냈어." }
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
    meaning: "확인하다",
    examples: [
      { en: "Please check your email for the details.", kr: "자세한 내용을 이메일로 확인해 주세요." },
      { en: "The mechanic will check the car's engine.", kr: "정비사가 차의 엔진을 확인할 것입니다." }
    ]
  },
  {
    id: "L1-285",
    word: "figure",
    meaning: "수치, 인물",
    examples: [
      { en: "Can you figure out the total cost?", kr: "총비용을 계산할 수 있니?" },
      { en: "She is an important figure in the community.", kr: "그녀는 지역사회에서 중요한 인물입니다." }
    ]
  },
  {
    id: "L1-286",
    word: "common",
    meaning: "흔한, 공통의",
    examples: [
      { en: "It is a common sight in this neighborhood.", kr: "그것은 이 동네에서 흔한 광경입니다." },
      { en: "They have a lot of common interests.", kr: "그들은 많은 공통 관심사를 가지고 있어." }
    ]
  },
  {
    id: "L1-287",
    word: "behind",
    meaning: "뒤에",
    examples: [
      { en: "The sun disappeared behind the clouds.", kr: "태양이 구름 뒤로 사라졌어." },
      { en: "He is behind in his school work.", kr: "그는 학교 공부가 뒤처져 있어." }
    ]
  },
  {
    id: "L1-288",
    word: "direction",
    meaning: "방향",
    examples: [
      { en: "Which direction is the park?", kr: "공원은 어느 방향인가요?" },
      { en: "I need some direction for this project.", kr: "이 프로젝트에 대한 지침이 필요합니다." }
    ]
  },
  {
    id: "L1-289",
    word: "single",
    meaning: "하나의, 독신의",
    examples: [
      { en: "Not a single person agreed with him.", kr: "단 한 명도 그에게 동의하지 않았어." },
      { en: "She is a single mother of two.", kr: "그녀는 두 아이의 미혼모입니다." }
    ]
  },
  {
    id: "L1-290",
    word: "personal",
    meaning: "개인적인",
    examples: [
      { en: "Please keep your personal belongings safe.", kr: "개인 소지품을 안전하게 보관해 주세요." },
      { en: "I don't want to discuss my personal life.", kr: "내 사생활에 대해 논의하고 싶지 않습니다." }
    ]
  },
  {
    id: "L1-291",
    word: "industry",
    meaning: "산업",
    examples: [
      { en: "The tourism industry is growing rapidly.", kr: "관광 산업이 빠르게 성장하고 있습니다." },
      { en: "He works in the tech industry.", kr: "그는 기술 산업에서 일합니다." }
    ]
  },
  {
    id: "L1-292",
    word: "material",
    meaning: "재료, 물질",
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
      { en: "The police found no evidence of a crime.", kr: "경찰은 범죄의 증거를 찾지 못했습니다." },
      { en: "There is evidence that he was involved.", kr: "그가 연루되었다는 증거가 있습니다." }
    ]
  },
  {
    id: "L1-296",
    word: "appear",
    meaning: "나타나다, ~처럼 보이다",
    examples: [
      { en: "A new star appeared in the sky.", kr: "하늘에 새로운 별이 나타났어." },
      { en: "She appears to be very tired.", kr: "그녀는 매우 피곤해 보입니다." }
    ]
  },
  {
    id: "L1-297",
    word: "design",
    meaning: "디자인, 설계하다",
    examples: [
      { en: "I love the modern design of this building.", kr: "나는 이 건물의 현대적인 디자인을 좋아해." },
      { en: "Who will design the website?", kr: "누가 웹사이트를 설계할 건가요?" }
    ]
  },
  {
    id: "L1-298",
    word: "determine",
    meaning: "결정하다, 알아내다",
    examples: [
      { en: "We need to determine the cause of the problem.", kr: "우리는 문제의 원인을 결정해야 합니다." },
      { en: "His efforts will determine his success.", kr: "그의 노력이 그의 성공을 결정할 것입니다." }
    ]
  },
  {
    id: "L1-299",
    word: "mention",
    meaning: "언급하다",
    examples: [
      { en: "Did he mention the meeting time?", kr: "그가 회의 시간을 언급했니?" },
      { en: "Don't mention it, I was happy to help.", kr: "별말씀을요, 기꺼이 도왔습니다." }
    ]
  },
  {
    id: "L1-300",
    word: "truth",
    meaning: "진실",
    examples: [
      { en: "Tell me the whole truth.", kr: "나에게 모든 진실을 말해줘." },
      { en: "The truth is often complicated.", kr: "진실은 종종 복잡합니다." }
    ]
  }
];


const wordsLevel1_Part4 = [
  {
    id: "L1-301",
    word: "cause",
    meaning: "원인, 야기하다",
    examples: [
      { en: "What was the cause of the fire?", kr: "그 화재의 원인은 무엇이었습니까?" },
      { en: "Heavy rain can cause flooding.", kr: "폭우는 홍수를 야기할 수 있습니다." }
    ]
  },
  {
    id: "L1-302",
    word: "force",
    meaning: "힘, 강요하다",
    examples: [
      { en: "We had to use great force to move the rock.", kr: "우리는 바위를 옮기기 위해 큰 힘을 사용해야 했어." },
      { en: "The law will force companies to change their policy.", kr: "그 법은 회사들이 정책을 바꾸도록 강요할 것입니다." }
    ]
  },
  {
    id: "L1-303",
    word: "answer",
    meaning: "대답하다, 대답",
    examples: [
      { en: "I don't know the answer to this question.", kr: "이 질문에 대한 대답을 모르겠습니다." },
      { en: "Please answer the phone.", kr: "전화를 받아주세요." }
    ]
  },
  {
    id: "L1-304",
    word: "control",
    meaning: "통제하다, 통제권",
    examples: [
      { en: "You must learn to control your emotions.", kr: "당신은 감정을 통제하는 법을 배워야 합니다." },
      { en: "The remote gives you control over the TV.", kr: "리모컨은 당신에게 TV를 통제할 수 있는 권한을 줍니다." }
    ]
  },
  {
    id: "L1-305",
    word: "apply",
    meaning: "적용하다, 지원하다",
    examples: [
      { en: "This rule does not apply to everyone.", kr: "이 규칙은 모두에게 적용되지 않습니다." },
      { en: "I decided to apply for the new job.", kr: "나는 새 일자리에 지원하기로 결정했어." }
    ]
  },
  {
    id: "L1-306",
    word: "term",
    meaning: "용어, 기간",
    examples: [
      { en: "Please explain the technical term.", kr: "그 전문 용어를 설명해 주세요." },
      { en: "The contract is for a short term.", kr: "그 계약은 단기 기간 동안입니다." }
    ]
  },
  {
    id: "L1-307",
    word: "allow",
    meaning: "허락하다",
    examples: [
      { en: "Smoking is not allowed inside the building.", kr: "건물 내에서는 흡연이 허용되지 않습니다." },
      { en: "We allow children to play in the garden.", kr: "우리는 아이들이 정원에서 놀 수 있도록 허락합니다." }
    ]
  },
  {
    id: "L1-308",
    word: "present",
    meaning: "선물, 현재의",
    examples: [
      { en: "The past is gone, the future is uncertain, only the present is real.", kr: "과거는 지나갔고, 미래는 불확실하며, 현재만이 실재합니다." },
      { en: "He gave me a lovely present.", kr: "그는 나에게 사랑스러운 선물을 주었어." }
    ]
  },
  {
    id: "L1-309",
    word: "concern",
    meaning: "우려, 관심사",
    examples: [
      { en: "The main concern is patient safety.", kr: "주요 우려 사항은 환자의 안전입니다." },
      { en: "This problem concerns all of us.", kr: "이 문제는 우리 모두에게 관련이 있습니다." }
    ]
  },
  {
    id: "L1-310",
    word: "suggest",
    meaning: "제안하다",
    examples: [
      { en: "I suggest we take a break now.", kr: "지금 휴식을 취할 것을 제안합니다." },
      { en: "The evidence suggests a different conclusion.", kr: "그 증거는 다른 결론을 시사합니다." }
    ]
  },
  {
    id: "L1-311",
    word: "report",
    meaning: "보고서, 보고하다",
    examples: [
      { en: "I have to submit my final report tomorrow.", kr: "나는 내일 최종 보고서를 제출해야 해." },
      { en: "Please report any suspicious activity.", kr: "의심스러운 활동이 있으면 신고해 주세요." }
    ]
  },
  {
    id: "L1-312",
    word: "whether",
    meaning: "~인지 아닌지",
    examples: [
      { en: "I don't know whether he will come or not.", kr: "나는 그가 올지 안 올지 모르겠어." },
      { en: "We must decide whether to go forward.", kr: "우리는 앞으로 나아갈지 말지 결정해야 합니다." }
    ]
  },
  {
    id: "L1-313",
    word: "reach",
    meaning: "도달하다",
    examples: [
      { en: "We finally reached the top of the mountain.", kr: "우리는 마침내 산 정상에 도달했어." },
      { en: "Can you reach the book on the top shelf?", kr: "가장 높은 선반에 있는 책에 손이 닿니?" }
    ]
  },
  {
    id: "L1-314",
    word: "develop",
    meaning: "개발하다, 발전하다",
    examples: [
      { en: "The company is developing new software.", kr: "그 회사는 새로운 소프트웨어를 개발하고 있습니다." },
      { en: "The town has developed rapidly over the years.", kr: "그 도시는 수년 동안 빠르게 발전해 왔습니다." }
    ]
  },
  {
    id: "L1-315",
    word: "community",
    meaning: "공동체",
    examples: [
      { en: "We are building a strong local community.", kr: "우리는 강력한 지역 공동체를 건설하고 있습니다." },
      { en: "The event benefited the entire community.", kr: "그 행사는 전체 공동체에 혜택을 주었습니다." }
    ]
  },
  {
    id: "L1-316",
    word: "remain",
    meaning: "남아있다, ~인 채로 있다",
    examples: [
      { en: "Only a few people remained in the room.", kr: "방에는 소수의 사람들만이 남아 있었습니다." },
      { en: "He remained silent throughout the meeting.", kr: "그는 회의 내내 침묵을 지켰습니다." }
    ]
  },
  {
    id: "L1-317",
    word: "effect",
    meaning: "효과, 영향",
    examples: [
      { en: "The medicine had an immediate effect.", kr: "그 약은 즉각적인 효과가 있었습니다." },
      { en: "The storm had a severe effect on the crops.", kr: "폭풍은 작물에 심각한 영향을 미쳤습니다." }
    ]
  },
  {
    id: "L1-318",
    word: "show",
    meaning: "보여주다, 쇼",
    examples: [
      { en: "Can you show me the way to the station?", kr: "역으로 가는 길을 보여줄 수 있니?" },
      { en: "We went to see a magic show.", kr: "우리는 마술 쇼를 보러 갔어." }
    ]
  },
  {
    id: "L1-319",
    word: "nature",
    meaning: "자연, 본성",
    examples: [
      { en: "I love spending time in nature.", kr: "나는 자연 속에서 시간을 보내는 것을 좋아해." },
      { en: "It is in his nature to be kind.", kr: "친절한 것은 그의 본성입니다." }
    ]
  },
  {
    id: "L1-320",
    word: "data",
    meaning: "데이터, 자료",
    examples: [
      { en: "We need more data to analyze the trend.", kr: "우리는 그 추세를 분석하기 위해 더 많은 자료가 필요합니다." },
      { en: "The report is based on raw data.", kr: "그 보고서는 가공되지 않은 자료를 기반으로 합니다." }
    ]
  },
  {
    id: "L1-321",
    word: "support",
    meaning: "지원하다, 지지하다",
    examples: [
      { en: "I will support your decision fully.", kr: "나는 당신의 결정을 전적으로 지지할 것입니다." },
      { en: "The bridge needs better structural support.", kr: "그 다리는 더 나은 구조적 지지대가 필요합니다." }
    ]
  },
  {
    id: "L1-322",
    word: "create",
    meaning: "창조하다, 만들다",
    examples: [
      { en: "She wants to create her own brand.", kr: "그녀는 자신의 브랜드를 만들고 싶어 합니다." },
      { en: "The project will create new jobs.", kr: "그 프로젝트는 새로운 일자리를 창출할 것입니다." }
    ]
  },
  {
    id: "L1-323",
    word: "process",
    meaning: "과정, 처리하다",
    examples: [
      { en: "The application process takes three weeks.", kr: "신청 과정은 3주가 걸립니다." },
      { en: "Your request is currently being processed.", kr: "당신의 요청은 현재 처리되고 있습니다." }
    ]
  },
  {
    id: "L1-324",
    word: "public",
    meaning: "대중의, 공공의",
    examples: [
      { en: "The information is now public.", kr: "그 정보는 이제 대중에게 공개되었습니다." },
      { en: "We use public transport every day.", kr: "우리는 매일 대중교통을 이용합니다." }
    ]
  },
  {
    id: "L1-325",
    word: "act",
    meaning: "행동하다, 행위",
    examples: [
      { en: "He always acts responsibly.", kr: "그는 항상 책임감 있게 행동합니다." },
      { en: "It was a courageous act of kindness.", kr: "그것은 용감하고 친절한 행위였습니다." }
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
    id: "L1-327",
    word: "meet",
    meaning: "만나다",
    examples: [
      { en: "We are going to meet at the park.", kr: "우리는 공원에서 만날 것입니다." },
      { en: "Does the product meet the safety standards?", kr: "그 제품은 안전 기준을 충족합니까?" }
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
    meaning: "자라다, 성장하다",
    examples: [
      { en: "The trees grow very fast here.", kr: "여기는 나무들이 매우 빨리 자랍니다." },
      { en: "The company's market share continues to grow.", kr: "회사의 시장 점유율은 계속 성장하고 있습니다." }
    ]
  },
  {
    id: "L1-330",
    word: "change",
    meaning: "변화하다, 거스름돈",
    examples: [
      { en: "Change your clothes before dinner.", kr: "저녁 식사 전에 옷을 갈아입어." },
      { en: "Keep the change.", kr: "거스름돈은 가지세요." }
    ]
  },
  {
    id: "L1-331",
    word: "set",
    meaning: "놓다, 한 벌",
    examples: [
      { en: "We need to set clear goals.", kr: "우리는 명확한 목표를 설정해야 합니다." },
      { en: "She bought a set of new dishes.", kr: "그녀는 새 접시 한 세트를 샀어." }
    ]
  },
  {
    id: "L1-332",
    word: "move",
    meaning: "움직이다, 이사하다",
    examples: [
      { en: "Don't move, the camera is focusing.", kr: "움직이지 마, 카메라가 초점을 맞추고 있어." },
      { en: "We are planning to move next month.", kr: "우리는 다음 달에 이사할 계획입니다." }
    ]
  },
  {
    id: "L1-333",
    word: "lead",
    meaning: "이끌다",
    examples: [
      { en: "Who will lead the team next year?", kr: "내년에 누가 팀을 이끌까요?" },
      { en: "This road leads to the beach.", kr: "이 길은 해변으로 이어집니다." }
    ]
  },
  {
    id: "L1-334",
    word: "tell",
    meaning: "말하다",
    examples: [
      { en: "Please tell us your name.", kr: "당신의 이름을 말해 주세요." },
      { en: "I can tell you are upset.", kr: "나는 네가 화났다는 것을 알 수 있어." }
    ]
  },
  {
    id: "L1-335",
    word: "follow",
    meaning: "따르다",
    examples: [
      { en: "Follow me to the office.", kr: "나를 따라 사무실로 오세요." },
      { en: "You must follow the rules.", kr: "당신은 규칙을 따라야 합니다." }
    ]
  },
  {
    id: "L1-336",
    word: "try",
    meaning: "시도하다",
    examples: [
      { en: "Try to open the box again.", kr: "상자를 다시 열어봐." },
      { en: "I will try my best to finish on time.", kr: "시간 내에 끝내기 위해 최선을 다할 것입니다." }
    ]
  },
  {
    id: "L1-337",
    word: "free",
    meaning: "자유로운, 무료의",
    examples: [
      { en: "The concert tickets are free.", kr: "그 콘서트 티켓은 무료입니다." },
      { en: "We are finally free from worry.", kr: "우리는 마침내 걱정에서 벗어났습니다(자유롭습니다)." }
    ]
  },
  {
    id: "L1-338",
    word: "open",
    meaning: "열다",
    examples: [
      { en: "Can you open the jar for me?", kr: "저를 위해 유리병을 열어줄 수 있나요?" },
      { en: "The museum is open seven days a week.", kr: "그 박물관은 주 7일 영업합니다." }
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
    id: "L1-344",
    word: "next",
    meaning: "다음의",
    examples: [
      { en: "I will see you next Tuesday.", kr: "다음 주 화요일에 만날게요." },
      { en: "What should we do next?", kr: "우리는 다음에 무엇을 해야 할까요?" }
    ]
  },
  {
    id: "L1-345",
    word: "stop",
    meaning: "멈추다",
    examples: [
      { en: "Please stop talking and listen.", kr: "말하는 것을 멈추고 들어주세요." },
      { en: "The bus stop is around the corner.", kr: "버스 정류장은 모퉁이에 있습니다." }
    ]
  },
  {
    id: "L1-346",
    word: "social",
    meaning: "사회적인",
    examples: [
      { en: "We need to address social inequality.", kr: "우리는 사회적 불평등을 다룰 필요가 있습니다." },
      { en: "She has a very active social life.", kr: "그녀는 매우 활발한 사교 생활을 합니다." }
    ]
  },
  {
    id: "L1-347",
    word: "power",
    meaning: "힘, 권력",
    examples: [
      { en: "The king had absolute power.", kr: "그 왕은 절대적인 권력을 가지고 있었습니다." },
      { en: "The city lost power during the storm.", kr: "도시는 폭풍우 동안 전력을 잃었습니다." }
    ]
  },
  {
    id: "L1-348",
    word: "spend",
    meaning: "쓰다, 보내다",
    examples: [
      { en: "We should spend more time together.", kr: "우리는 더 많은 시간을 함께 보내야 합니다." },
      { en: "How much did you spend on your clothes?", kr: "네 옷에 얼마를 썼니?" }
    ]
  },
  {
    id: "L1-349",
    word: "live",
    meaning: "살다",
    examples: [
      { en: "I live in a big city.", kr: "나는 대도시에 삽니다." },
      { en: "The concert will be broadcast live.", kr: "그 콘서트는 생방송될 것입니다." }
    ]
  },
  {
    id: "L1-350",
    word: "expect",
    meaning: "기대하다, 예상하다",
    examples: [
      { en: "I didn't expect to see you here.", kr: "여기서 당신을 볼 거라고 예상하지 못했어요." },
      { en: "We expect a quick recovery.", kr: "우리는 빠른 회복을 기대합니다." }
    ]
  },
  {
    id: "L1-351",
    word: "view",
    meaning: "경치, 견해",
    examples: [
      { en: "The hotel room has a great view of the sea.", kr: "그 호텔 방은 바다의 멋진 경치를 가지고 있습니다." },
      { en: "What is your view on this proposal?", kr: "이 제안에 대한 당신의 견해는 무엇입니까?" }
    ]
  },
  {
    id: "L1-352",
    word: "pay",
    meaning: "지불하다",
    examples: [
      { en: "You must pay the bill by Friday.", kr: "금요일까지 청구서를 지불해야 합니다." },
      { en: "She receives a good monthly pay.", kr: "그녀는 좋은 월급을 받습니다." }
    ]
  },
  {
    id: "L1-353",
    word: "age",
    meaning: "나이, 시대",
    examples: [
      { en: "What is the legal drinking age here?", kr: "여기서 법적인 음주 연령은 몇 살입니까?" },
      { en: "We live in the digital age.", kr: "우리는 디지털 시대에 살고 있습니다." }
    ]
  },
  {
    id: "L1-354",
    word: "center",
    meaning: "중심, 중앙",
    examples: [
      { en: "The meeting will be held at the convention center.", kr: "회의는 컨벤션 센터에서 개최될 것입니다." },
      { en: "The star is at the center of the galaxy.", kr: "별은 은하계의 중심에 있습니다." }
    ]
  },
  {
    id: "L1-355",
    word: "couple",
    meaning: "두 명, 몇몇",
    examples: [
      { en: "The newly married couple went on a trip.", kr: "새로 결혼한 부부는 여행을 떠났습니다." },
      { en: "I need a couple of days to finish this.", kr: "이것을 끝내는 데 이틀(몇 일)이 필요합니다." }
    ]
  },
  {
    id: "L1-356",
    word: "site",
    meaning: "장소, 사이트",
    examples: [
      { en: "The construction site is very noisy.", kr: "공사 현장이 매우 시끄럽습니다." },
      { en: "Visit our website for more details.", kr: "더 많은 정보를 위해 우리 웹사이트를 방문해 주세요." }
    ]
  },
  {
    id: "L1-357",
    word: "require",
    meaning: "요구하다",
    examples: [
      { en: "This job requires strong communication skills.", kr: "이 직업은 강력한 의사소통 능력을 요구합니다." },
      { en: "The repair will require a lot of time.", kr: "수리는 많은 시간을 필요로 할 것입니다." }
    ]
  },
  {
    id: "L1-358",
    word: "space",
    meaning: "공간, 우주",
    examples: [
      { en: "I need more space for my books.", kr: "나는 책을 위한 더 많은 공간이 필요해." },
      { en: "Astronauts travel into space.", kr: "우주비행사들은 우주로 여행합니다." }
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
    id: "L1-360",
    word: "write",
    meaning: "쓰다",
    examples: [
      { en: "She writes a letter to her family every week.", kr: "그녀는 매주 가족에게 편지를 씁니다." },
      { en: "Please write down your ideas.", kr: "당신의 아이디어를 적어주세요." }
    ]
  },
  {
    id: "L1-361",
    word: "rule",
    meaning: "규칙, 지배하다",
    examples: [
      { en: "You must obey the school rules.", kr: "당신은 학교 규칙을 준수해야 합니다." },
      { en: "The country was ruled by a queen.", kr: "그 나라는 여왕에 의해 지배되었습니다." }
    ]
  },
  {
    id: "L1-362",
    word: "among",
    meaning: "~ 사이에",
    examples: [
      { en: "She is the best singer among her friends.", kr: "그녀는 친구들 중에서 최고의 가수입니다." },
      { en: "The treasure was hidden among the rocks.", kr: "보물은 바위들 사이에 숨겨져 있었습니다." }
    ]
  },
  {
    id: "L1-363",
    word: "start",
    meaning: "시작하다",
    examples: [
      { en: "The game will start in ten minutes.", kr: "경기는 10분 후에 시작될 것입니다." },
      { en: "Where did you start your career?", kr: "당신은 어디서 경력을 시작했습니까?" }
    ]
  },
  {
    id: "L1-364",
    word: "class",
    meaning: "수업, 계층",
    examples: [
      { en: "I have an English class every morning.", kr: "나는 매일 아침 영어 수업이 있습니다." },
      { en: "She travels first class on the train.", kr: "그녀는 기차에서 1등석으로 여행합니다." }
    ]
  },
  {
    id: "L1-365",
    word: "meet",
    meaning: "만나다",
    examples: [
      { en: "It was nice to meet you.", kr: "만나서 반가웠습니다." },
      { en: "We must meet the deadline.", kr: "우리는 마감 시한을 맞춰야 합니다." }
    ]
  },
  {
    id: "L1-366",
    word: "turn",
    meaning: "차례, 돌다",
    examples: [
      { en: "It's your turn to choose a movie.", kr: "영화를 고를 차례입니다." },
      { en: "The leaf turned yellow in autumn.", kr: "그 잎은 가을에 노란색으로 변했습니다." }
    ]
  },
  {
    id: "L1-367",
    word: "air",
    meaning: "공기",
    examples: [
      { en: "We need fresh air in the room.", kr: "우리는 방에 신선한 공기가 필요합니다." },
      { en: "The plane took to the air quickly.", kr: "비행기는 빠르게 이륙했습니다." }
    ]
  },
  {
    id: "L1-368",
    word: "keep",
    meaning: "유지하다, 지키다",
    examples: [
      { en: "Keep your promise.", kr: "약속을 지키세요." },
      { en: "Where do you keep your secret documents?", kr: "비밀 문서를 어디에 보관하십니까?" }
    ]
  },
  {
    id: "L1-369",
    word: "force",
    meaning: "힘",
    examples: [
      { en: "Gravity is a powerful force.", kr: "중력은 강력한 힘입니다." },
      { en: "The police used minimum force.", kr: "경찰은 최소한의 무력만 사용했습니다." }
    ]
  },
  {
    id: "L1-370",
    word: "build",
    meaning: "건설하다",
    examples: [
      { en: "They plan to build a new factory.", kr: "그들은 새 공장을 건설할 계획입니다." },
      { en: "You need patience to build a good reputation.", kr: "좋은 명성을 쌓기 위해서는 인내심이 필요합니다." }
    ]
  },
  {
    id: "L1-371",
    word: "head",
    meaning: "머리, 책임자",
    examples: [
      { en: "He injured his head in the accident.", kr: "그는 사고로 머리를 다쳤습니다." },
      { en: "She is the head of the marketing department.", kr: "그녀는 마케팅 부서의 책임자입니다." }
    ]
  },
  {
    id: "L1-372",
    word: "expect",
    meaning: "기대하다",
    examples: [
      { en: "I didn't expect such a high quality.", kr: "나는 그렇게 높은 품질을 기대하지 않았어." },
      { en: "We expect him to succeed.", kr: "우리는 그가 성공하기를 기대합니다." }
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
    id: "L1-374",
    word: "wait",
    meaning: "기다리다",
    examples: [
      { en: "I'll wait for your call.", kr: "당신의 전화를 기다릴게요." },
      { en: "We had a long wait at the doctor's office.", kr: "우리는 병원에서 오래 기다렸습니다." }
    ]
  },
  {
    id: "L1-375",
    word: "return",
    meaning: "돌아오다, 반환하다",
    examples: [
      { en: "When will you return home?", kr: "언제 집에 돌아올 거니?" },
      { en: "You can return the product within 30 days.", kr: "당신은 30일 이내에 제품을 반환할 수 있습니다." }
    ]
  },
  {
    id: "L1-376",
    word: "direct",
    meaning: "직접적인, 지시하다",
    examples: [
      { en: "I need to speak to the direct manager.", kr: "저는 직속 관리자와 이야기해야 합니다." },
      { en: "He will direct the new movie.", kr: "그가 새 영화를 감독할 것입니다." }
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
    id: "L1-378",
    word: "move",
    meaning: "움직임",
    examples: [
      { en: "Make your next move carefully.", kr: "다음 움직임을 신중하게 해." },
      { en: "The chess player's move was unexpected.", kr: "그 체스 선수의 움직임은 예상 밖이었습니다." }
    ]
  },
  {
    id: "L1-379",
    word: "change",
    meaning: "변화",
    examples: [
      { en: "We need a change of scenery.", kr: "우리는 분위기 전환이 필요합니다." },
      { en: "She made a dramatic change in her lifestyle.", kr: "그녀는 생활 방식에 극적인 변화를 주었습니다." }
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
      { en: "Please sit here and wait.", kr: "여기에 앉아서 기다려 주세요." },
      { en: "The old house sits on a hill.", kr: "그 낡은 집은 언덕 위에 자리 잡고 있습니다." }
    ]
  },
  {
    id: "L1-382",
    word: "reach",
    meaning: "손이 닿는 거리",
    examples: [
      { en: "Keep all medicines out of the reach of children.", kr: "모든 약을 아이들의 손이 닿지 않는 곳에 보관하세요." },
      { en: "Success is within reach.", kr: "성공은 손이 닿는 곳에 있습니다." }
    ]
  },
  {
    id: "L1-383",
    word: "listen",
    meaning: "듣다",
    examples: [
      { en: "We must listen to the experts.", kr: "우리는 전문가들의 말에 귀 기울여야 합니다." },
      { en: "Are you listening to me?", kr: "내 말 듣고 있니?" }
    ]
  },
  {
    id: "L1-384",
    word: "fall",
    meaning: "떨어지다, 가을",
    examples: [
      { en: "Be careful not to fall on the ice.", kr: "얼음 위에서 넘어지지 않도록 조심해." },
      { en: "Fall is my favorite season.", kr: "가을은 내가 가장 좋아하는 계절이야." }
    ]
  },
  {
    id: "L1-385",
    word: "die",
    meaning: "죽다",
    examples: [
      { en: "The old tree died last winter.", kr: "그 낡은 나무는 지난겨울에 죽었습니다." },
      { en: "No one wants to die alone.", kr: "아무도 혼자 죽고 싶어 하지 않습니다." }
    ]
  },
  {
    id: "L1-386",
    word: "suggest",
    meaning: "제안하다, 시사하다",
    examples: [
      { en: "What time do you suggest we meet?", kr: "몇 시에 만날 것을 제안합니까?" },
      { en: "The look on his face suggested he was tired.", kr: "그의 얼굴 표정은 그가 피곤하다는 것을 시사했습니다." }
    ]
  },
  {
    id: "L1-387",
    word: "national",
    meaning: "국가의, 국립의",
    examples: [
      { en: "The museum is a national treasure.", kr: "그 박물관은 국보입니다." },
      { en: "We should focus on national security.", kr: "우리는 국가 안보에 집중해야 합니다." }
    ]
  },
  {
    id: "L1-388",
    word: "strong",
    meaning: "강한",
    examples: [
      { en: "He is a very strong swimmer.", kr: "그는 매우 강한 수영 선수입니다." },
      { en: "We have a strong chance of winning.", kr: "우리는 이길 강력한 기회가 있습니다." }
    ]
  },
  {
    id: "L1-389",
    word: "live",
    meaning: "생방송의, 살아있는",
    examples: [
      { en: "We watched the concert live on TV.", kr: "우리는 TV로 콘서트 생방송을 봤어." },
      { en: "The fish is still live.", kr: "그 물고기는 아직 살아있어." }
    ]
  },
  {
    id: "L1-390",
    word: "feel",
    meaning: "느낌",
    examples: [
      { en: "I have a good feel about this plan.", kr: "나는 이 계획에 대해 좋은 느낌이 있어." },
      { en: "The blanket has a soft feel.", kr: "그 담요는 부드러운 촉감을 가지고 있습니다." }
    ]
  },
  {
    id: "L1-391",
    word: "loss",
    meaning: "손실, 상실",
    examples: [
      { en: "The company reported a major financial loss.", kr: "그 회사는 막대한 재정적 손실을 보고했습니다." },
      { en: "Her death was a great loss to the family.", kr: "그녀의 죽음은 가족에게 큰 상실이었습니다." }
    ]
  },
  {
    id: "L1-392",
    word: "expect",
    meaning: "기대",
    examples: [
      { en: "My expectations were too high.", kr: "내 기대가 너무 높았어." },
      { en: "I received a gift beyond all expectation.", kr: "나는 모든 기대를 넘어선 선물을 받았습니다." }
    ]
  },
  {
    id: "L1-393",
    word: "mother",
    meaning: "어머니",
    examples: [
      { en: "My mother is a kind person.", kr: "우리 어머니는 친절한 분입니다." },
      { en: "She became a mother last year.", kr: "그녀는 작년에 엄마가 되었어." }
    ]
  },
  {
    id: "L1-394",
    word: "simply",
    meaning: "단순히",
    examples: [
      { en: "I can't do it, simply because I have no time.", kr: "시간이 없다는 단순한 이유로 할 수 없어요." },
      { en: "The solution is simply brilliant.", kr: "그 해결책은 정말로 (단순히) 훌륭합니다." }
    ]
  },
  {
    id: "L1-395",
    word: "share",
    meaning: "공유하다, 몫",
    examples: [
      { en: "Can you share your notes with me?", kr: "네 노트를 나와 공유해 줄 수 있니?" },
      { en: "He has a large share in the company.", kr: "그는 회사에 큰 지분을 가지고 있습니다." }
    ]
  },
  {
    id: "L1-396",
    word: "picture",
    meaning: "그림, 상상하다",
    examples: [
      { en: "I can't picture myself living there.", kr: "나는 내가 거기서 사는 것을 상상할 수 없어." },
      { en: "The picture is hanging on the wall.", kr: "그림이 벽에 걸려 있습니다." }
    ]
  },
  {
    id: "L1-397",
    word: "student",
    meaning: "학생",
    examples: [
      { en: "She is a university student.", kr: "그녀는 대학생입니다." },
      { en: "All students must wear a uniform.", kr: "모든 학생들은 교복을 입어야 합니다." }
    ]
  },
  {
    id: "L1-398",
    word: "concern",
    meaning: "염려, 관심",
    examples: [
      { en: "It is a matter of great public concern.", kr: "그것은 대중의 큰 관심사입니다." },
      { en: "Your safety is my main concern.", kr: "당신의 안전이 나의 주된 염려입니다." }
    ]
  },
  {
    id: "L1-399",
    word: "receive",
    meaning: "받다",
    examples: [
      { en: "I received a warm welcome.", kr: "나는 따뜻한 환영을 받았어." },
      { en: "Did you receive the package yet?", kr: "소포를 아직 받았니?" }
    ]
  },
  {
    id: "L1-400",
    word: "less",
    meaning: "더 적게",
    examples: [
      { en: "Spend less money and save more.", kr: "돈을 덜 쓰고 더 많이 저축하세요." },
      { en: "I get less free time these days.", kr: "요즘은 자유 시간이 더 적습니다." }
    ]
  }
];

const wordsLevel2_Part1 = [
  {
    id: "L2-001",
    word: "achieve",
    meaning: "성취하다, 달성하다",
    examples: [
      { en: "She worked hard to achieve her goal.", kr: "그녀는 목표를 성취하기 위해 열심히 일했습니다." },
      { en: "It's a great feeling to achieve success.", kr: "성공을 달성하는 것은 대단한 기분입니다." }
    ]
  },
  {
    id: "L2-002",
    word: "approach",
    meaning: "접근하다, 접근법",
    examples: [
      { en: "We need a new approach to solve this problem.", kr: "이 문제를 해결하기 위한 새로운 접근법이 필요합니다." },
      { en: "The train is fast approaching the station.", kr: "기차가 역에 빠르게 접근하고 있습니다." }
    ]
  },
  {
    id: "L2-003",
    word: "concept",
    meaning: "개념",
    examples: [
      { en: "The concept of time travel is fascinating.", kr: "시간 여행이라는 개념은 매혹적입니다." },
      { en: "Do you understand the main concept of the theory?", kr: "그 이론의 주요 개념을 이해합니까?" }
    ]
  },
  {
    id: "L2-004",
    word: "consist",
    meaning: "구성되다",
    examples: [
      { en: "The team consists of five members.", kr: "그 팀은 다섯 명의 구성원으로 이루어져 있습니다." },
      { en: "Happiness does not consist of material wealth.", kr: "행복은 물질적 부로 구성되지 않습니다." }
    ]
  },
  {
    id: "L2-005",
    word: "consequence",
    meaning: "결과, 중요성",
    examples: [
      { en: "The flood was a consequence of heavy rain.", kr: "그 홍수는 폭우의 결과였습니다." },
      { en: "This decision could have serious consequences.", kr: "이 결정은 심각한 결과를 초래할 수 있습니다." }
    ]
  },
  {
    id: "L2-006",
    word: "conduct",
    meaning: "수행하다, 행동",
    examples: [
      { en: "The researchers will conduct an experiment.", kr: "연구원들은 실험을 수행할 것입니다." },
      { en: "His conduct during the meeting was unprofessional.", kr: "회의 중 그의 행동은 비전문적이었습니다." }
    ]
  },
  {
    id: "L2-007",
    word: "define",
    meaning: "정의하다",
    examples: [
      { en: "It is difficult to define love precisely.", kr: "사랑을 정확하게 정의하기는 어렵습니다." },
      { en: "The law defines the rights of citizens.", kr: "그 법은 시민들의 권리를 정의합니다." }
    ]
  },
  {
    id: "L2-008",
    word: "distribute",
    meaning: "분배하다, 배포하다",
    examples: [
      { en: "They distributed flyers to the local residents.", kr: "그들은 지역 주민들에게 전단지를 배포했습니다." },
      { en: "The company will distribute its profits among shareholders.", kr: "그 회사는 주주들에게 이익을 분배할 것입니다." }
    ]
  },
  {
    id: "L2-009",
    word: "establish",
    meaning: "설립하다, 확립하다",
    examples: [
      { en: "They plan to establish a new branch overseas.", kr: "그들은 해외에 새로운 지점을 설립할 계획입니다." },
      { en: "We need to establish clear rules from the start.", kr: "우리는 처음부터 명확한 규칙을 확립해야 합니다." }
    ]
  },
  {
    id: "L2-010",
    word: "factor",
    meaning: "요인, 요소",
    examples: [
      { en: "Cost is a key factor in the decision.", kr: "비용은 그 결정의 주요 요인입니다." },
      { en: "Many factors influence climate change.", kr: "많은 요소들이 기후 변화에 영향을 미칩니다." }
    ]
  },
  {
    id: "L2-011",
    word: "generate",
    meaning: "생성하다, 발생시키다",
    examples: [
      { en: "The dam is used to generate electricity.", kr: "그 댐은 전기를 생성하는 데 사용됩니다." },
      { en: "The campaign aims to generate public interest.", kr: "그 캠페인은 대중의 관심을 발생시키는 것을 목표로 합니다." }
    ]
  },
  {
    id: "L2-012",
    word: "imply",
    meaning: "암시하다, 내포하다",
    examples: [
      { en: "His silence seemed to imply agreement.", kr: "그의 침묵은 동의를 암시하는 것처럼 보였습니다." },
      { en: "What does the author imply in this passage?", kr: "이 구절에서 작가는 무엇을 암시합니까?" }
    ]
  },
  {
    id: "L2-013",
    word: "indicate",
    meaning: "나타내다, 가리키다",
    examples: [
      { en: "The survey results indicate a rise in sales.", kr: "설문조사 결과는 매출 증가를 나타냅니다." },
      { en: "Please indicate your choice by checking the box.", kr: "상자에 체크하여 당신의 선택을 가리켜 주세요." }
    ]
  },
  {
    id: "L2-014",
    word: "involve",
    meaning: "포함하다, 관련시키다",
    examples: [
      { en: "The job involves a lot of traveling.", kr: "그 일은 많은 출장을 포함합니다." },
      { en: "She didn't want to involve her family in the trouble.", kr: "그녀는 가족을 그 문제에 관련시키고 싶지 않았습니다." }
    ]
  },
  {
    id: "L2-015",
    word: "major",
    meaning: "주요한, 전공",
    examples: [
      { en: "Cost is a major concern for the project.", kr: "비용은 그 프로젝트의 주요 관심사입니다." },
      { en: "What is your college major?", kr: "당신의 대학 전공은 무엇입니까?" }
    ]
  },
  {
    id: "L2-016",
    word: "perceive",
    meaning: "인지하다, 인식하다",
    examples: [
      { en: "The public perceives the brand as reliable.", kr: "대중은 그 브랜드를 신뢰할 수 있는 것으로 인식합니다." },
      { en: "We perceive colors through our eyes.", kr: "우리는 눈을 통해 색깔을 인지합니다." }
    ]
  },
  {
    id: "L2-017",
    word: "proceed",
    meaning: "진행하다, 나아가다",
    examples: [
      { en: "You may now proceed with your presentation.", kr: "이제 발표를 진행하셔도 됩니다." },
      { en: "The committee will proceed to a vote.", kr: "위원회는 투표로 나아갈 것입니다." }
    ]
  },
  {
    id: "L2-018",
    word: "react",
    meaning: "반응하다",
    examples: [
      { en: "How did he react to the news?", kr: "그는 그 소식에 어떻게 반응했습니까?" },
      { en: "The chemical reacts violently with water.", kr: "그 화학 물질은 물과 격렬하게 반응합니다." }
    ]
  },
  {
    id: "L2-019",
    word: "require",
    meaning: "요구하다, 필요로 하다",
    examples: [
      { en: "The job requires strong communication skills.", kr: "그 일은 강력한 의사소통 능력을 필요로 합니다." },
      { en: "We are required to wear a uniform.", kr: "우리는 유니폼을 입도록 요구받습니다." }
    ]
  },
  {
    id: "L2-020",
    word: "strategy",
    meaning: "전략",
    examples: [
      { en: "The company developed a new marketing strategy.", kr: "그 회사는 새로운 마케팅 전략을 개발했습니다." },
      { en: "Success depends on careful strategy and planning.", kr: "성공은 신중한 전략과 계획에 달려 있습니다." }
    ]
  },
  {
    id: "L2-021",
    word: "sufficient",
    meaning: "충분한",
    examples: [
      { en: "Do we have sufficient resources for the task?", kr: "그 과제에 충분한 자원이 있습니까?" },
      { en: "A small amount of evidence is not sufficient.", kr: "소량의 증거는 충분하지 않습니다." }
    ]
  },
  {
    id: "L2-022",
    word: "unique",
    meaning: "독특한, 유일한",
    examples: [
      { en: "Each person has a unique set of fingerprints.", kr: "각 사람은 독특한 지문을 가지고 있습니다." },
      { en: "The artist has a truly unique style.", kr: "그 예술가는 정말로 유일한 스타일을 가지고 있습니다." }
    ]
  },
  {
    id: "L2-023",
    word: "vary",
    meaning: "다양하다, 달라지다",
    examples: [
      { en: "The cost of the services can vary greatly.", kr: "그 서비스들의 비용은 크게 달라질 수 있습니다." },
      { en: "The students' opinions vary on this matter.", kr: "이 문제에 대한 학생들의 의견은 다양합니다." }
    ]
  },
  {
    id: "L2-024",
    word: "crucial",
    meaning: "결정적인, 중대한",
    examples: [
      { en: "Timing is crucial for a successful negotiation.", kr: "성공적인 협상을 위해서는 타이밍이 결정적입니다." },
      { en: "This step is crucial to the entire process.", kr: "이 단계는 전체 과정에 중대합니다." }
    ]
  },
  {
    id: "L2-025",
    word: "acquire",
    meaning: "습득하다, 획득하다",
    examples: [
      { en: "She acquired a new skill set through the training.", kr: "그녀는 훈련을 통해 새로운 기술 세트를 습득했습니다." },
      { en: "The company acquired a small startup last year.", kr: "그 회사는 작년에 작은 스타트업을 획득(인수)했습니다." }
    ]
  },
  {
    id: "L2-026",
    word: "alternative",
    meaning: "대안의, 대안",
    examples: [
      { en: "Is there an alternative route to the airport?", kr: "공항으로 가는 대안 경로가 있습니까?" },
      { en: "We are exploring alternative sources of energy.", kr: "우리는 대체 에너지원을 탐색하고 있습니다." }
    ]
  },
  {
    id: "L2-027",
    word: "analyze",
    meaning: "분석하다",
    examples: [
      { en: "They need to analyze the sales data.", kr: "그들은 판매 데이터를 분석해야 합니다." },
      { en: "The lab will analyze the sample for contaminants.", kr: "실험실은 오염 물질이 있는지 샘플을 분석할 것입니다." }
    ]
  },
  {
    id: "L2-028",
    word: "assess",
    meaning: "평가하다, 사정하다",
    examples: [
      { en: "The committee will assess the damage caused by the storm.", kr: "위원회는 폭풍으로 인한 피해를 평가할 것입니다." },
      { en: "We need to assess the level of risk.", kr: "우리는 위험 수준을 사정해야 합니다." }
    ]
  },
  {
    id: "L2-029",
    word: "complex",
    meaning: "복잡한",
    examples: [
      { en: "It's a very complex issue with no easy solution.", kr: "이것은 쉬운 해결책이 없는 매우 복잡한 문제입니다." },
      { en: "The human brain is incredibly complex.", kr: "인간의 뇌는 믿을 수 없을 만큼 복잡합니다." }
    ]
  },
  {
    id: "L2-030",
    word: "dimension",
    meaning: "차원, 측면",
    examples: [
      { en: "We must consider every dimension of the problem.", kr: "우리는 문제의 모든 측면을 고려해야 합니다." },
      { en: "The artist added a new dimension to the sculpture.", kr: "그 예술가는 조각품에 새로운 차원을 더했습니다." }
    ]
  },
  {
    id: "L2-031",
    word: "demonstrate",
    meaning: "입증하다, 보여주다",
    examples: [
      { en: "He wants to demonstrate his leadership skills.", kr: "그는 자신의 리더십 기술을 보여주고 싶어 합니다." },
      { en: "The experiment clearly demonstrates the effect.", kr: "그 실험은 그 효과를 명확하게 입증합니다." }
    ]
  },
  {
    id: "L2-032",
    word: "distinct",
    meaning: "별개의, 뚜렷한",
    examples: [
      { en: "The two languages are very distinct from each other.", kr: "그 두 언어는 서로 매우 별개입니다." },
      { en: "I heard a distinct sound of a bell.", kr: "나는 뚜렷한 종소리를 들었습니다." }
    ]
  },
  {
    id: "L2-033",
    word: "emphasize",
    meaning: "강조하다",
    examples: [
      { en: "The report emphasizes the need for urgent action.", kr: "그 보고서는 긴급한 조치의 필요성을 강조합니다." },
      { en: "She emphasized the word 'never' in her speech.", kr: "그녀는 연설에서 '절대'라는 단어를 강조했습니다." }
    ]
  },
  {
    id: "L2-034",
    word: "evolve",
    meaning: "진화하다, 발전하다",
    examples: [
      { en: "The company's strategy has evolved over the years.", kr: "그 회사의 전략은 수년 동안 발전해 왔습니다." },
      { en: "Humans evolved from earlier primates.", kr: "인간은 초기 영장류로부터 진화했습니다." }
    ]
  },
  {
    id: "L2-035",
    word: "feature",
    meaning: "특징, 특징으로 하다",
    examples: [
      { en: "The new phone has many exciting features.", kr: "새 휴대폰은 많은 흥미로운 특징들을 가지고 있습니다." },
      { en: "The documentary features interviews with experts.", kr: "그 다큐멘터리는 전문가들과의 인터뷰를 특징으로 합니다." }
    ]
  },
  {
    id: "L2-036",
    word: "identify",
    meaning: "식별하다, 확인하다",
    examples: [
      { en: "Can you identify the person in this photograph?", kr: "이 사진 속의 인물을 식별할 수 있습니까?" },
      { en: "We must identify the root cause of the problem.", kr: "우리는 문제의 근본 원인을 확인해야 합니다." }
    ]
  },
  {
    id: "L2-037",
    word: "integrate",
    meaning: "통합하다, 합치다",
    examples: [
      { en: "The goal is to integrate all departments into one team.", kr: "목표는 모든 부서를 하나의 팀으로 통합하는 것입니다." },
      { en: "The device can integrate with any operating system.", kr: "그 장치는 어떤 운영 체제와도 통합될 수 있습니다." }
    ]
  },
  {
    id: "L2-038",
    word: "invest",
    meaning: "투자하다",
    examples: [
      { en: "It is wise to invest in your education.", kr: "당신의 교육에 투자하는 것은 현명합니다." },
      { en: "They plan to invest millions in the new technology.", kr: "그들은 새 기술에 수백만 달러를 투자할 계획입니다." }
    ]
  },
  {
    id: "L2-039",
    word: "maintain",
    meaning: "유지하다, 주장하다",
    examples: [
      { en: "It is hard to maintain a perfect balance.", kr: "완벽한 균형을 유지하기는 어렵습니다." },
      { en: "She maintains that she is innocent.", kr: "그녀는 자신이 무죄라고 주장합니다." }
    ]
  },
  {
    id: "L2-040",
    word: "merely",
    meaning: "단지, 그저",
    examples: [
      { en: "It was merely a misunderstanding.", kr: "그것은 단지 오해였을 뿐입니다." },
      { en: "The law is merely a guideline, not a strict rule.", kr: "그 법은 그저 지침일 뿐, 엄격한 규칙은 아닙니다." }
    ]
  },
  {
    id: "L2-041",
    word: "occur",
    meaning: "발생하다, 떠오르다",
    examples: [
      { en: "The accident occurred late last night.", kr: "그 사고는 지난 밤 늦게 발생했습니다." },
      { en: "It didn't occur to me to call him.", kr: "그에게 전화해야겠다는 생각이 나에게 떠오르지 않았습니다." }
    ]
  },
  {
    id: "L2-042",
    word: "phase",
    meaning: "단계, 국면",
    examples: [
      { en: "The project is currently in its final phase.", kr: "그 프로젝트는 현재 최종 단계에 있습니다." },
      { en: "This is a temporary phase in the market.", kr: "이것은 시장에서의 일시적인 국면입니다." }
    ]
  },
  {
    id: "L2-043",
    word: "primary",
    meaning: "주된, 1차적인",
    examples: [
      { en: "The primary purpose of the meeting is planning.", kr: "그 회의의 주된 목적은 계획입니다." },
      { en: "Primary colors are red, yellow, and blue.", kr: "1차 색상은 빨강, 노랑, 파랑입니다." }
    ]
  },
  {
    id: "L2-044",
    word: "proportion",
    meaning: "비율, 부분",
    examples: [
      { en: "A large proportion of the budget was spent on advertising.", kr: "예산의 큰 부분이 광고에 쓰였습니다." },
      { en: "The two sides are in the same proportion.", kr: "두 면은 같은 비율입니다." }
    ]
  },
  {
    id: "L2-045",
    word: "resource",
    meaning: "자원",
    examples: [
      { en: "We need to conserve natural resources.", kr: "우리는 천연 자원을 보존해야 합니다." },
      { en: "The internet is a valuable resource for research.", kr: "인터넷은 연구를 위한 귀중한 자원입니다." }
    ]
  },
  {
    id: "L2-046",
    word: "stable",
    meaning: "안정된, 마구간",
    examples: [
      { en: "We need to ensure a stable economy.", kr: "우리는 안정된 경제를 보장해야 합니다." },
      { en: "The horse was kept in the stable.", kr: "그 말은 마구간에 보관되었습니다." }
    ]
  },
  {
    id: "L2-047",
    word: "technique",
    meaning: "기술, 기법",
    examples: [
      { en: "She used a new painting technique.", kr: "그녀는 새로운 그림 그리는 기술을 사용했습니다." },
      { en: "The interviewer was impressed by his sales technique.", kr: "면접관은 그의 판매 기법에 감명을 받았습니다." }
    ]
  },
  {
    id: "L2-048",
    word: "trigger",
    meaning: "촉발하다, 방아쇠",
    examples: [
      { en: "The event might trigger a new investigation.", kr: "그 사건은 새로운 조사를 촉발할 수 있습니다." },
      { en: "He pulled the trigger of the gun.", kr: "그는 총의 방아쇠를 당겼습니다." }
    ]
  },
  {
    id: "L2-049",
    word: "ultimate",
    meaning: "궁극적인, 최고의",
    examples: [
      { en: "His ultimate goal is to become a CEO.", kr: "그의 궁극적인 목표는 CEO가 되는 것입니다." },
      { en: "The team won the ultimate victory.", kr: "그 팀은 최고의 승리를 거두었습니다." }
    ]
  },
  {
    id: "L2-050",
    word: "widespread",
    meaning: "널리 퍼진, 광범위한",
    examples: [
      { en: "The use of computers is now widespread.", kr: "컴퓨터 사용은 이제 널리 퍼져 있습니다." },
      { en: "There is widespread fear of another pandemic.", kr: "또 다른 팬데믹에 대한 광범위한 두려움이 있습니다." }
    ]
  },
  {
    id: "L2-051",
    word: "adjust",
    meaning: "조정하다, 적응하다",
    examples: [
      { en: "You need to adjust the height of your chair.", kr: "당신은 의자의 높이를 조정할 필요가 있습니다." },
      { en: "It takes time to adjust to a new culture.", kr: "새로운 문화에 적응하는 데는 시간이 걸립니다." }
    ]
  },
  {
    id: "L2-052",
    word: "apparent",
    meaning: "명백한, 분명한",
    examples: [
      { en: "It was apparent that he was lying.", kr: "그가 거짓말하고 있다는 것이 명백했습니다." },
      { en: "His apparent lack of effort surprised everyone.", kr: "그의 분명한 노력 부족이 모두를 놀라게 했습니다." }
    ]
  },
  {
    id: "L2-053",
    word: "brief",
    meaning: "간결한, 짧은",
    examples: [
      { en: "She gave a brief explanation of the plan.", kr: "그녀는 그 계획에 대해 간결한 설명을 했습니다." },
      { en: "The meeting will be very brief.", kr: "회의는 매우 짧을 것입니다." }
    ]
  },
  {
    id: "L2-054",
    word: "cite",
    meaning: "인용하다, 언급하다",
    examples: [
      { en: "Please remember to cite your sources properly.", kr: "출처를 적절하게 인용하는 것을 기억해 주세요." },
      { en: "He cited several examples to support his argument.", kr: "그는 자신의 주장을 뒷받침하기 위해 여러 사례를 언급했습니다." }
    ]
  },
  {
    id: "L2-055",
    word: "confine",
    meaning: "국한하다, 가두다",
    examples: [
      { en: "The discussion was confined to military issues.", kr: "그 토론은 군사 문제에 국한되었습니다." },
      { en: "He was confined to his room after getting sick.", kr: "그는 병에 걸린 후 방에 갇혀 있었습니다." }
    ]
  },
  {
    id: "L2-056",
    word: "corporate",
    meaning: "기업의, 회사의",
    examples: [
      { en: "She works in corporate finance.", kr: "그녀는 기업 금융 분야에서 일합니다." },
      { en: "We must uphold corporate social responsibility.", kr: "우리는 기업의 사회적 책임을 지지해야 합니다." }
    ]
  },
  {
    id: "L2-057",
    word: "domestic",
    meaning: "국내의, 가정의",
    examples: [
      { en: "The new airline offers only domestic flights.", kr: "새 항공사는 오직 국내선 항공편만 제공합니다." },
      { en: "She enjoys domestic life and gardening.", kr: "그녀는 가정 생활과 정원 가꾸기를 즐깁니다." }
    ]
  },
  {
    id: "L2-058",
    word: "dramatic",
    meaning: "극적인, 인상적인",
    examples: [
      { en: "There was a dramatic change in the weather.", kr: "날씨에 극적인 변화가 있었습니다." },
      { en: "The singer gave a dramatic performance.", kr: "그 가수는 인상적인 공연을 선보였습니다." }
    ]
  },
  {
    id: "L2-059",
    word: "edit",
    meaning: "편집하다, 수정하다",
    examples: [
      { en: "I spent hours editing my video.", kr: "나는 내 비디오를 편집하는 데 여러 시간을 보냈습니다." },
      { en: "The editor asked me to edit the last chapter.", kr: "편집자는 나에게 마지막 장을 수정해 달라고 요청했습니다." }
    ]
  },
  {
    id: "L2-060",
    word: "expose",
    meaning: "노출시키다",
    examples: [
      { en: "Don't expose the camera to direct sunlight.", kr: "카메라를 직사광선에 노출시키지 마세요." },
      { en: "The investigation exposed a corruption scandal.", kr: "그 조사는 부패 스캔들을 폭로했습니다." }
    ]
  },
  {
    id: "L2-061",
    word: "financial",
    meaning: "재정적인, 금융의",
    examples: [
      { en: "He has excellent financial management skills.", kr: "그는 훌륭한 재정 관리 기술을 가지고 있습니다." },
      { en: "The company is facing a financial crisis.", kr: "그 회사는 금융 위기에 직면해 있습니다." }
    ]
  },
  {
    id: "L2-062",
    word: "govern",
    meaning: "통치하다, 지배하다",
    examples: [
      { en: "The Parliament governs the country.", kr: "의회는 그 나라를 통치합니다." },
      { en: "The rules that govern the competition are clear.", kr: "그 경쟁을 지배하는 규칙들은 명확합니다." }
    ]
  },
  {
    id: "L2-063",
    word: "illustrate",
    meaning: "설명하다, 삽화를 넣다",
    examples: [
      { en: "The drawing illustrates the structure of the building.", kr: "그 그림은 건물의 구조를 설명합니다." },
      { en: "She wrote a children's book and illustrated it herself.", kr: "그녀는 동화책을 쓰고 직접 삽화를 넣었습니다." }
    ]
  },
  {
    id: "L2-064",
    word: "immigrate",
    meaning: "이주해 오다",
    examples: [
      { en: "Many people immigrate to the country for better jobs.", kr: "많은 사람들이 더 나은 직업을 위해 그 나라로 이주해 옵니다." },
      { en: "My grandparents immigrated from Italy in the 1950s.", kr: "나의 조부모님은 1950년대에 이탈리아에서 이주해 오셨습니다." }
    ]
  },
  {
    id: "L2-065",
    word: "liberal",
    meaning: "진보적인, 자유로운",
    examples: [
      { en: "She holds very liberal views on social issues.", kr: "그녀는 사회 문제에 대해 매우 진보적인 견해를 가지고 있습니다." },
      { en: "The university offers a liberal arts education.", kr: "그 대학은 자유로운 교양 교육을 제공합니다." }
    ]
  },
  {
    id: "L2-066",
    word: "minimal",
    meaning: "최소의",
    examples: [
      { en: "The damage was minimal and easily repaired.", kr: "피해는 최소였고 쉽게 수리되었습니다." },
      { en: "We require only a minimal amount of information.", kr: "우리는 단지 최소한의 정보만 요구합니다." }
    ]
  },
  {
    id: "L2-067",
    word: "perspective",
    meaning: "관점, 시각",
    examples: [
      { en: "Try to look at the problem from a different perspective.", kr: "다른 관점에서 그 문제를 보려고 노력하세요." },
      { en: "His novel offers a unique perspective on the war.", kr: "그의 소설은 전쟁에 대한 독특한 시각을 제공합니다." }
    ]
  },
  {
    id: "L2-068",
    word: "precise",
    meaning: "정확한, 정밀한",
    examples: [
      { en: "We need precise measurements for the construction.", kr: "우리는 건설을 위해 정확한 측정이 필요합니다." },
      { en: "The clock shows the precise time.", kr: "그 시계는 정밀한 시간을 보여줍니다." }
    ]
  },
  {
    id: "L2-069",
    word: "pursue",
    meaning: "추구하다, 뒤쫓다",
    examples: [
      { en: "He decided to pursue a career in medicine.", kr: "그는 의학 분야의 경력을 추구하기로 결정했습니다." },
      { en: "The police pursued the suspect down the street.", kr: "경찰이 거리를 따라 용의자를 뒤쫓았습니다." }
    ]
  },
  {
    id: "L2-070",
    word: "ratio",
    meaning: "비율",
    examples: [
      { en: "The ratio of students to teachers is 20 to 1.", kr: "학생 대 교사의 비율은 20대 1입니다." },
      { en: "We need to maintain a healthy debt-to-equity ratio.", kr: "우리는 건전한 부채-자본 비율을 유지해야 합니다." }
    ]
  },
  {
    id: "L2-071",
    word: "reject",
    meaning: "거절하다, 거부하다",
    examples: [
      { en: "The committee decided to reject the proposal.", kr: "위원회는 그 제안을 거절하기로 결정했습니다." },
      { en: "The body might reject the transplanted organ.", kr: "신체는 이식된 장기를 거부할 수도 있습니다." }
    ]
  },
  {
    id: "L2-072",
    word: "resolve",
    meaning: "해결하다, 결심하다",
    examples: [
      { en: "We need to resolve the conflict peacefully.", kr: "우리는 그 갈등을 평화롭게 해결해야 합니다." },
      { en: "She resolved to study harder next semester.", kr: "그녀는 다음 학기에 더 열심히 공부하기로 결심했습니다." }
    ]
  },
  {
    id: "L2-073",
    word: "restore",
    meaning: "복구하다, 회복시키다",
    examples: [
      { en: "The painting was carefully restored by experts.", kr: "그 그림은 전문가들에 의해 조심스럽게 복구되었습니다." },
      { en: "We hope to restore public confidence in the system.", kr: "우리는 그 시스템에 대한 대중의 신뢰를 회복시키기를 희망합니다." }
    ]
  },
  {
    id: "L2-074",
    word: "revise",
    meaning: "수정하다, 개정하다",
    examples: [
      { en: "Please revise the document before submitting it.", kr: "제출하기 전에 문서를 수정해 주세요." },
      { en: "The government decided to revise the law.", kr: "정부는 그 법을 개정하기로 결정했습니다." }
    ]
  },
  {
    id: "L2-075",
    word: "sector",
    meaning: "부문, 분야",
    examples: [
      { en: "She works in the public sector.", kr: "그녀는 공공 부문에서 일합니다." },
      { en: "The company is a leader in the tech sector.", kr: "그 회사는 기술 분야의 선두 주자입니다." }
    ]
  },
  {
    id: "L2-076",
    word: "simulate",
    meaning: "모의 실험하다, 흉내 내다",
    examples: [
      { en: "A computer program was used to simulate the weather.", kr: "날씨를 모의 실험하기 위해 컴퓨터 프로그램이 사용되었습니다." },
      { en: "The machine simulates the feeling of flight.", kr: "그 기계는 비행하는 느낌을 흉내 냅니다." }
    ]
  },
  {
    id: "L2-077",
    word: "sole",
    meaning: "유일한, 독점적인",
    examples: [
      { en: "He was the sole survivor of the crash.", kr: "그는 그 충돌의 유일한 생존자였습니다." },
      { en: "The company has the sole right to sell the product.", kr: "그 회사는 그 제품을 판매할 독점적인 권리를 가지고 있습니다." }
    ]
  },
  {
    id: "L2-078",
    word: "sphere",
    meaning: "영역, 구",
    examples: [
      { en: "Politics is not her sphere of expertise.", kr: "정치는 그녀의 전문 지식 영역이 아닙니다." },
      { en: "The earth is an almost perfect sphere.", kr: "지구는 거의 완벽한 구입니다." }
    ]
  },
  {
    id: "L2-079",
    word: "subsequent",
    meaning: "후속의, 그 다음의",
    examples: [
      { en: "Subsequent events proved his theory correct.", kr: "그 다음의 사건들이 그의 이론이 옳았음을 증명했습니다." },
      { en: "The initial excitement faded in the subsequent weeks.", kr: "초기 흥분은 후속 몇 주 동안 사라졌습니다." }
    ]
  },
  {
    id: "L2-080",
    word: "submit",
    meaning: "제출하다",
    examples: [
      { en: "You must submit your application by Friday.", kr: "당신은 금요일까지 신청서를 제출해야 합니다." },
      { en: "He refused to submit to their demands.", kr: "그는 그들의 요구에 굴복하기를 거부했습니다." }
    ]
  },
  {
    id: "L2-081",
    word: "temporary",
    meaning: "일시적인",
    examples: [
      { en: "The store will close for a temporary renovation.", kr: "그 가게는 일시적인 리노베이션을 위해 문을 닫을 것입니다." },
      { en: "This is just a temporary solution.", kr: "이것은 단지 일시적인 해결책일 뿐입니다." }
    ]
  },
  {
    id: "L2-082",
    word: "transmit",
    meaning: "전송하다, 전달하다",
    examples: [
      { en: "The satellite transmits data back to Earth.", kr: "그 위성은 데이터를 지구로 다시 전송합니다." },
      { en: "Mosquitoes can transmit various diseases.", kr: "모기는 다양한 질병을 전달할 수 있습니다." }
    ]
  },
  {
    id: "L2-083",
    word: "underlie",
    meaning: "근본이 되다",
    examples: [
      { en: "The basic principles that underlie the system are simple.", kr: "그 시스템의 근본이 되는 기본 원칙들은 간단합니다." },
      { en: "What kind of assumptions underlie this theory?", kr: "어떤 종류의 가정이 이 이론의 근본이 됩니까?" }
    ]
  },
  {
    id: "L2-084",
    word: "visualize",
    meaning: "시각화하다",
    examples: [
      { en: "Try to close your eyes and visualize your goal.", kr: "눈을 감고 당신의 목표를 시각화해 보세요." },
      { en: "The software helps users visualize complex data.", kr: "그 소프트웨어는 사용자들이 복잡한 데이터를 시각화하도록 돕습니다." }
    ]
  },
  {
    id: "L2-085",
    word: "abstract",
    meaning: "추상적인",
    examples: [
      { en: "Beauty is an abstract concept.", kr: "아름다움은 추상적인 개념입니다." },
      { en: "The artist prefers abstract expressionism.", kr: "그 예술가는 추상 표현주의를 선호합니다." }
    ]
  },
  {
    id: "L2-086",
    word: "collaborate",
    meaning: "협력하다",
    examples: [
      { en: "They collaborated on the new research paper.", kr: "그들은 새로운 연구 논문에 협력했습니다." },
      { en: "The two companies decided to collaborate on the project.", kr: "두 회사는 그 프로젝트에 협력하기로 결정했습니다." }
    ]
  },
  {
    id: "L2-087",
    word: "commit",
    meaning: "전념하다, 약속하다",
    examples: [
      { en: "The government is committed to improving education.", kr: "정부는 교육 개선에 전념하고 있습니다." },
      { en: "Did you commit to attending the meeting?", kr: "당신은 회의 참석을 약속했습니까?" }
    ]
  },
  {
    id: "L2-088",
    word: "derive",
    meaning: "얻다, 유래하다",
    examples: [
      { en: "The word 'science' is derived from a Latin word.", kr: "‘과학’이라는 단어는 라틴어 단어에서 유래했습니다." },
      { en: "We can derive great pleasure from helping others.", kr: "우리는 다른 사람들을 돕는 것에서 큰 기쁨을 얻을 수 있습니다." }
    ]
  },
  {
    id: "L2-089",
    word: "diminish",
    meaning: "줄어들다, 감소시키다",
    examples: [
      { en: "The pain will gradually diminish over time.", kr: "그 고통은 시간이 지남에 따라 점차 줄어들 것입니다." },
      { en: "His efforts did not diminish his enthusiasm.", kr: "그의 노력은 그의 열정을 감소시키지 않았습니다." }
    ]
  },
  {
    id: "L2-090",
    word: "emerge",
    meaning: "나타나다, 출현하다",
    examples: [
      { en: "A new leader emerged from the election.", kr: "선거에서 새로운 지도자가 나타났습니다." },
      { en: "The facts finally emerged after a long investigation.", kr: "긴 조사 끝에 마침내 사실들이 출현했습니다." }
    ]
  },
  {
    id: "L2-091",
    word: "flexible",
    meaning: "유연한, 융통성 있는",
    examples: [
      { en: "Our work hours are very flexible.", kr: "우리의 근무 시간은 매우 유연합니다." },
      { en: "You need a flexible mind to solve this puzzle.", kr: "이 퍼즐을 풀기 위해서는 융통성 있는 사고가 필요합니다." }
    ]
  },
  {
    id: "L2-092",
    word: "infrastructure",
    meaning: "사회 기반 시설",
    examples: [
      { en: "The city needs investment in its aging infrastructure.", kr: "그 도시는 노후된 사회 기반 시설에 대한 투자가 필요합니다." },
      { en: "Good infrastructure is essential for economic growth.", kr: "좋은 사회 기반 시설은 경제 성장에 필수적입니다." }
    ]
  },
  {
    id: "L2-093",
    word: "massive",
    meaning: "거대한, 대규모의",
    examples: [
      { en: "The storm caused massive damage to the coast.", kr: "그 폭풍은 해안에 거대한 피해를 입혔습니다." },
      { en: "The event attracted a massive crowd.", kr: "그 행사는 대규모의 인파를 끌어모았습니다." }
    ]
  },
  {
    id: "L2-094",
    word: "migrate",
    meaning: "이주하다, 이동하다",
    examples: [
      { en: "Birds migrate south for the winter.", kr: "새들은 겨울을 나기 위해 남쪽으로 이동합니다." },
      { en: "Many people migrate from rural areas to cities.", kr: "많은 사람들이 시골 지역에서 도시로 이주합니다." }
    ]
  },
  {
    id: "L2-095",
    word: "negotiate",
    meaning: "협상하다",
    examples: [
      { en: "They tried to negotiate a peace treaty.", kr: "그들은 평화 조약을 협상하려고 노력했습니다." },
      { en: "You should be prepared to negotiate the price.", kr: "당신은 가격을 협상할 준비가 되어 있어야 합니다." }
    ]
  },
  {
    id: "L2-096",
    word: "overcome",
    meaning: "극복하다",
    examples: [
      { en: "She overcame her fear of heights.", kr: "그녀는 고소공포증을 극복했습니다." },
      { en: "We must overcome these difficulties together.", kr: "우리는 이 어려움들을 함께 극복해야 합니다." }
    ]
  },
  {
    id: "L2-097",
    word: "sustain",
    meaning: "지속하다, 지탱하다",
    examples: [
      { en: "The economy needs to sustain its growth rate.", kr: "경제는 성장률을 지속해야 합니다." },
      { en: "The bridge is built to sustain heavy loads.", kr: "그 다리는 무거운 하중을 지탱하도록 건설되었습니다." }
    ]
  },
  {
    id: "L2-098",
    word: "reinforce",
    meaning: "강화하다, 보강하다",
    examples: [
      { en: "The goal is to reinforce the public health system.", kr: "목표는 공중 보건 시스템을 강화하는 것입니다." },
      { en: "We need to reinforce the weak parts of the wall.", kr: "우리는 벽의 약한 부분을 보강해야 합니다." }
    ]
  },
  {
    id: "L2-099",
    word: "severe",
    meaning: "심각한, 엄격한",
    examples: [
      { en: "The region experienced a severe drought.", kr: "그 지역은 심각한 가뭄을 겪었습니다." },
      { en: "The new laws impose severe penalties.", kr: "새로운 법률은 엄격한 처벌을 부과합니다." }
    ]
  },
  {
    id: "L2-100",
    word: "sophisticated",
    meaning: "정교한, 세련된",
    examples: [
      { en: "The new weapon system is highly sophisticated.", kr: "새로운 무기 시스템은 매우 정교합니다." },
      { en: "She has a very sophisticated taste in art.", kr: "그녀는 예술에 매우 세련된 취향을 가지고 있습니다." }
    ]
  }
];


const wordsLevel2_Part2 = [
  {
    id: "L2-101",
    word: "adequate",
    meaning: "충분한, 적절한",
    examples: [
      { en: "We have an adequate supply of food.", kr: "우리는 충분한 식량 공급을 가지고 있습니다." },
      { en: "The salary is adequate for the amount of work.", kr: "그 급여는 업무량에 비해 적절합니다." }
    ]
  },
  {
    id: "L2-102",
    word: "allocate",
    meaning: "할당하다, 배분하다",
    examples: [
      { en: "The government will allocate funds for education.", kr: "정부는 교육을 위해 자금을 할당할 것입니다." },
      { en: "We need to allocate tasks to team members.", kr: "우리는 팀원들에게 업무를 배분해야 합니다." }
    ]
  },
  {
    id: "L2-103",
    word: "bias",
    meaning: "편견, 편향",
    examples: [
      { en: "The report showed a clear bias toward the company.", kr: "그 보고서는 회사에 대한 명확한 편향을 보여주었습니다." },
      { en: "We must try to avoid gender bias in hiring.", kr: "우리는 채용 시 성별 편견을 피하도록 노력해야 합니다." }
    ]
  },
  {
    id: "L2-104",
    word: "capable",
    meaning: "능력이 있는, 가능한",
    examples: [
      { en: "She is capable of doing much better work.", kr: "그녀는 훨씬 더 나은 일을 할 능력이 있습니다." },
      { en: "The system is capable of detecting small changes.", kr: "그 시스템은 작은 변화를 감지할 수 있습니다." }
    ]
  },
  {
    id: "L2-105",
    word: "clarify",
    meaning: "명확히 하다",
    examples: [
      { en: "Can you clarify your last statement?", kr: "당신의 마지막 진술을 명확히 해 주시겠어요?" },
      { en: "The new guidelines clarify the rules.", kr: "새로운 지침은 규칙을 명확히 합니다." }
    ]
  },
  {
    id: "L2-106",
    word: "compensate",
    meaning: "보상하다",
    examples: [
      { en: "The company compensated him for the damage.", kr: "회사는 그에게 피해에 대해 보상했습니다." },
      { en: "His talent compensates for his lack of experience.", kr: "그의 재능은 경험 부족을 보상합니다." }
    ]
  },
  {
    id: "L2-107",
    word: "comprehensive",
    meaning: "종합적인, 포괄적인",
    examples: [
      { en: "We need a comprehensive review of the budget.", kr: "우리는 예산에 대한 종합적인 검토가 필요합니다." },
      { en: "The course offers comprehensive training.", kr: "그 과정은 포괄적인 훈련을 제공합니다." }
    ]
  },
  {
    id: "L2-108",
    word: "consequently",
    meaning: "결과적으로",
    examples: [
      { en: "He missed the bus; consequently, he was late for work.", kr: "그는 버스를 놓쳤고, 결과적으로 직장에 늦었습니다." },
      { en: "The rules were changed, and consequently, the costs rose.", kr: "규칙이 변경되었고, 결과적으로 비용이 상승했습니다." }
    ]
  },
  {
    id: "L2-109",
    word: "cooperate",
    meaning: "협력하다",
    examples: [
      { en: "The two organizations agreed to cooperate on the project.", kr: "두 조직은 그 프로젝트에 협력하기로 동의했습니다." },
      { en: "We must cooperate to achieve our common goal.", kr: "우리는 공동의 목표를 달성하기 위해 협력해야 합니다." }
    ]
  },
  {
    id: "L2-110",
    word: "deduce",
    meaning: "추론하다, 연역하다",
    examples: [
      { en: "From the evidence, we can deduce what really happened.", kr: "그 증거로부터 우리는 실제로 무슨 일이 일어났는지 추론할 수 있습니다." },
      { en: "The detective deduced the killer's identity.", kr: "탐정은 살인자의 신원을 연역했습니다." }
    ]
  },
  {
    id: "L2-111",
    word: "depict",
    meaning: "묘사하다, 나타내다",
    examples: [
      { en: "The painting depicts a historical battle scene.", kr: "그 그림은 역사적인 전투 장면을 묘사합니다." },
      { en: "The novel depicts life in the 1950s.", kr: "그 소설은 1950년대의 삶을 나타냅니다." }
    ]
  },
  {
    id: "L2-112",
    word: "diverse",
    meaning: "다양한",
    examples: [
      { en: "The group is composed of people with diverse backgrounds.", kr: "그 그룹은 다양한 배경을 가진 사람들로 구성되어 있습니다." },
      { en: "The museum hosts a diverse collection of art.", kr: "그 박물관은 다양한 예술 소장품을 소장하고 있습니다." }
    ]
  },
  {
    id: "L2-113",
    word: "eliminate",
    meaning: "제거하다, 없애다",
    examples: [
      { en: "We need to eliminate unnecessary spending.", kr: "우리는 불필요한 지출을 제거해야 합니다." },
      { en: "The team was eliminated from the competition.", kr: "그 팀은 대회에서 탈락(제거)되었습니다." }
    ]
  },
  {
    id: "L2-114",
    word: "enhance",
    meaning: "향상시키다, 높이다",
    examples: [
      { en: "The new software will enhance productivity.", kr: "새 소프트웨어는 생산성을 향상시킬 것입니다." },
      { en: "You can enhance the flavor with a pinch of salt.", kr: "소금 한 꼬집으로 풍미를 높일 수 있습니다." }
    ]
  },
  {
    id: "L2-115",
    word: "exclude",
    meaning: "제외하다, 배제하다",
    examples: [
      { en: "Children under 12 are excluded from the tour.", kr: "12세 미만의 어린이는 투어에서 제외됩니다." },
      { en: "The possibility of human error cannot be excluded.", kr: "인간의 실수 가능성은 배제될 수 없습니다." }
    ]
  },
  {
    id: "L2-116",
    word: "exploit",
    meaning: "착취하다, 활용하다",
    examples: [
      { en: "The company was accused of exploiting its workers.", kr: "그 회사는 노동자들을 착취한다는 비난을 받았습니다." },
      { en: "We need to exploit the full potential of this technology.", kr: "우리는 이 기술의 잠재력을 최대한 활용해야 합니다." }
    ]
  },
  {
    id: "L2-117",
    word: "fluctuate",
    meaning: "변동하다, 오르내리다",
    examples: [
      { en: "Oil prices have been fluctuating recently.", kr: "유가가 최근에 변동하고 있습니다." },
      { en: "His mood tends to fluctuate wildly.", kr: "그의 기분은 격렬하게 오르내리는 경향이 있습니다." }
    ]
  },
  {
    id: "L2-118",
    word: "framework",
    meaning: "틀, 체계",
    examples: [
      { en: "The new law provides a legal framework for the trade.", kr: "새 법은 그 거래에 대한 법적 틀을 제공합니다." },
      { en: "We built the house using a wooden framework.", kr: "우리는 나무 체계를 사용하여 집을 지었습니다." }
    ]
  },
  {
    id: "L2-119",
    word: "hostile",
    meaning: "적대적인",
    examples: [
      { en: "The crowd was openly hostile to the speaker.", kr: "군중은 연사에게 노골적으로 적대적이었습니다." },
      { en: "We entered hostile territory with caution.", kr: "우리는 주의하며 적대적인 영토로 들어섰습니다." }
    ]
  },
  {
    id: "L2-120",
    word: "incentive",
    meaning: "장려책, 동기 부여",
    examples: [
      { en: "The tax break provides an incentive for small businesses.", kr: "그 세금 감면은 소기업들에게 장려책을 제공합니다." },
      { en: "Money is not my only incentive for working hard.", kr: "돈은 열심히 일하는 나의 유일한 동기 부여가 아닙니다." }
    ]
  },
  {
    id: "L2-121",
    word: "inhibit",
    meaning: "억제하다, 막다",
    examples: [
      { en: "Fear can inhibit your ability to perform.", kr: "두려움은 당신의 수행 능력을 억제할 수 있습니다." },
      { en: "The new policies inhibit economic growth.", kr: "새 정책들은 경제 성장을 막습니다." }
    ]
  },
  {
    id: "L2-122",
    word: "initial",
    meaning: "초기의",
    examples: [
      { en: "The initial reaction was one of shock.", kr: "초기 반응은 충격이었습니다." },
      { en: "What are your initial impressions of the place?", kr: "그 장소에 대한 당신의 초기 인상은 무엇입니까?" }
    ]
  },
  {
    id: "L2-123",
    word: "input",
    meaning: "투입, 입력",
    examples: [
      { en: "We welcome your input on this new design.", kr: "이 새로운 디자인에 대한 당신의 의견 투입(제시)을 환영합니다." },
      { en: "The computer receives input from the keyboard.", kr: "컴퓨터는 키보드로부터 입력을 받습니다." }
    ]
  },
  {
    id: "L2-124",
    word: "install",
    meaning: "설치하다",
    examples: [
      { en: "Did you install the new operating system?", kr: "새 운영 체제를 설치했습니까?" },
      { en: "They came to install a new air conditioner.", kr: "그들은 새 에어컨을 설치하러 왔습니다." }
    ]
  },
  {
    id: "L2-125",
    word: "interact",
    meaning: "상호 작용하다",
    examples: [
      { en: "The two chemicals interact with each other.", kr: "그 두 화학 물질은 서로 상호 작용합니다." },
      { en: "He finds it hard to interact with strangers.", kr: "그는 낯선 사람들과 상호 작용하는 것을 어려워합니다." }
    ]
  },
  {
    id: "L2-126",
    word: "interpret",
    meaning: "해석하다, 통역하다",
    examples: [
      { en: "How should we interpret this data?", kr: "우리는 이 데이터를 어떻게 해석해야 합니까?" },
      { en: "She was asked to interpret for the diplomat.", kr: "그녀는 외교관을 위해 통역해 달라고 요청받았습니다." }
    ]
  },
  {
    id: "L2-127",
    word: "justify",
    meaning: "정당화하다, 해명하다",
    examples: [
      { en: "You must justify your request with clear reasons.", kr: "당신은 명확한 이유로 당신의 요청을 정당화해야 합니다." },
      { en: "He tried to justify his absence.", kr: "그는 자신의 결석을 해명하려고 했습니다." }
    ]
  },
  {
    id: "L2-128",
    word: "label",
    meaning: "표를 붙이다, 상표",
    examples: [
      { en: "Please label the boxes clearly.", kr: "상자들에 명확하게 표를 붙여 주세요." },
      { en: "He hates being given the label of 'genius'.", kr: "그는 '천재'라는 상표(꼬리표)가 붙여지는 것을 싫어합니다." }
    ]
  },
  {
    id: "L2-129",
    word: "mediate",
    meaning: "중재하다",
    examples: [
      { en: "An outside party was called in to mediate the dispute.", kr: "외부 당사자가 분쟁을 중재하기 위해 소집되었습니다." },
      { en: "The talks aim to mediate a peaceful resolution.", kr: "그 회담은 평화적인 해결을 중재하는 것을 목표로 합니다." }
    ]
  },
  {
    id: "L2-130",
    word: "monitor",
    meaning: "감시하다, 관찰하다",
    examples: [
      { en: "We need to monitor the situation closely.", kr: "우리는 그 상황을 면밀히 감시해야 합니다." },
      { en: "The nurse is monitoring the patient's heart rate.", kr: "간호사는 환자의 심장 박동수를 관찰하고 있습니다." }
    ]
  },
  {
    id: "L2-131",
    word: "neutral",
    meaning: "중립적인",
    examples: [
      { en: "It is important for the judge to remain neutral.", kr: "판사가 중립적인 상태를 유지하는 것이 중요합니다." },
      { en: "The color of the walls is a neutral gray.", kr: "벽의 색은 중립적인 회색입니다." }
    ]
  },
  {
    id: "L2-132",
    word: "notion",
    meaning: "개념, 생각",
    examples: [
      { en: "She rejected the notion that money brings happiness.", kr: "그녀는 돈이 행복을 가져다준다는 개념을 거부했습니다." },
      { en: "I had a sudden notion to travel the world.", kr: "나는 갑자기 세계를 여행하겠다는 생각이 들었습니다." }
    ]
  },
  {
    id: "L2-133",
    word: "obtain",
    meaning: "얻다, 획득하다",
    examples: [
      { en: "You can obtain a visa from the embassy.", kr: "대사관에서 비자를 얻을 수 있습니다." },
      { en: "We need to obtain permission before proceeding.", kr: "우리는 진행하기 전에 허가를 획득해야 합니다." }
    ]
  },
  {
    id: "L2-134",
    word: "oppose",
    meaning: "반대하다",
    examples: [
      { en: "The majority of the public opposes the new tax.", kr: "대부분의 대중이 새 세금에 반대합니다." },
      { en: "He will oppose any attempt to cut the budget.", kr: "그는 예산을 삭감하려는 어떤 시도에도 반대할 것입니다." }
    ]
  },
  {
    id: "L2-135",
    word: "participate",
    meaning: "참여하다",
    examples: [
      { en: "Everyone is encouraged to participate in the discussion.", kr: "모두가 토론에 참여하도록 권장됩니다." },
      { en: "She participated in a charity run last year.", kr: "그녀는 작년에 자선 달리기 행사에 참여했습니다." }
    ]
  },
  {
    id: "L2-136",
    word: "pertain",
    meaning: "관련되다",
    examples: [
      { en: "The rules pertaining to student conduct are listed here.", kr: "학생 행동에 관련된 규칙들이 여기에 나열되어 있습니다." },
      { en: "The questions mainly pertain to your work experience.", kr: "그 질문들은 주로 당신의 업무 경험과 관련됩니다." }
    ]
  },
  {
    id: "L2-137",
    word: "potential",
    meaning: "잠재적인, 잠재력",
    examples: [
      { en: "The company has the potential to grow rapidly.", kr: "그 회사는 급속히 성장할 잠재력을 가지고 있습니다." },
      { en: "We are looking for potential candidates for the job.", kr: "우리는 그 일자리에 대한 잠재적인 후보자들을 찾고 있습니다." }
    ]
  },
  {
    id: "L2-138",
    word: "precede",
    meaning: "선행하다, 앞서다",
    examples: [
      { en: "The discovery of gravity was preceded by years of study.", kr: "중력의 발견은 수년간의 연구에 선행되었습니다." },
      { en: "A warning light precedes a major system failure.", kr: "경고등은 주요 시스템 오류에 앞서 나타납니다." }
    ]
  },
  {
    id: "L2-139",
    word: "predict",
    meaning: "예측하다",
    examples: [
      { en: "It is hard to predict the weather accurately.", kr: "날씨를 정확하게 예측하기는 어렵습니다." },
      { en: "Analysts predict a rise in the stock market.", kr: "분석가들은 주식 시장의 상승을 예측합니다." }
    ]
  },
  {
    id: "L2-140",
    word: "preserve",
    meaning: "보존하다",
    examples: [
      { en: "The society works to preserve historic buildings.", kr: "그 사회는 역사적인 건물들을 보존하기 위해 노력합니다." },
      { en: "We must preserve our natural environment.", kr: "우리는 우리의 자연 환경을 보존해야 합니다." }
    ]
  },
  {
    id: "L2-141",
    word: "prioritize",
    meaning: "우선순위를 정하다",
    examples: [
      { en: "You need to prioritize your tasks for the day.", kr: "당신은 오늘 해야 할 일들의 우선순위를 정해야 합니다." },
      { en: "The company will prioritize customer service.", kr: "그 회사는 고객 서비스를 우선순위로 둘 것입니다." }
    ]
  },
  {
    id: "L2-142",
    word: "prohibit",
    meaning: "금지하다",
    examples: [
      { en: "Smoking is prohibited in public areas.", kr: "공공장소에서는 흡연이 금지됩니다." },
      { en: "The contract prohibits early termination.", kr: "그 계약은 조기 해지를 금지합니다." }
    ]
  },
  {
    id: "L2-143",
    word: "promote",
    meaning: "촉진하다, 승진시키다",
    examples: [
      { en: "The campaign aims to promote healthy eating.", kr: "그 캠페인은 건강한 식습관을 촉진하는 것을 목표로 합니다." },
      { en: "She was promoted to the position of manager.", kr: "그녀는 관리자 직책으로 승진되었습니다." }
    ]
  },
  {
    id: "L2-144",
    word: "refine",
    meaning: "정제하다, 개선하다",
    examples: [
      { en: "We need to refine our search method.", kr: "우리는 우리의 검색 방법을 개선해야 합니다." },
      { en: "The oil is refined before it can be used.", kr: "그 기름은 사용되기 전에 정제됩니다." }
    ]
  },
  {
    id: "L2-145",
    word: "regulate",
    meaning: "규제하다, 조절하다",
    examples: [
      { en: "The agency regulates the safety of food and drugs.", kr: "그 기관은 식품과 약품의 안전을 규제합니다." },
      { en: "A thermostat regulates the temperature.", kr: "온도 조절기가 온도를 조절합니다." }
    ]
  },
  {
    id: "L2-146",
    word: "relevant",
    meaning: "관련된, 적절한",
    examples: [
      { en: "Do you have any relevant work experience?", kr: "관련된 업무 경험이 있습니까?" },
      { en: "Please stick to the relevant facts.", kr: "관련된 사실들에만 집중해 주세요." }
    ]
  },
  {
    id: "L2-147",
    word: "rely",
    meaning: "의지하다, 믿다",
    examples: [
      { en: "You can rely on her honesty.", kr: "당신은 그녀의 정직함을 믿을 수 있습니다." },
      { en: "Many people rely on public transport.", kr: "많은 사람들이 대중교통에 의지합니다." }
    ]
  },
  {
    id: "L2-148",
    word: "replicate",
    meaning: "복제하다, 되풀이하다",
    examples: [
      { en: "Scientists are trying to replicate the experiment results.", kr: "과학자들은 그 실험 결과를 복제하려고 노력하고 있습니다." },
      { en: "The software can replicate data across multiple servers.", kr: "그 소프트웨어는 여러 서버에 걸쳐 데이터를 되풀이할 수 있습니다." }
    ]
  },
  {
    id: "L2-149",
    word: "retain",
    meaning: "유지하다, 보유하다",
    examples: [
      { en: "She has managed to retain her sense of humor.", kr: "그녀는 유머 감각을 유지하는 데 성공했습니다." },
      { en: "The soil can retain a lot of water.", kr: "그 흙은 많은 물을 보유할 수 있습니다." }
    ]
  },
  {
    id: "L2-150",
    word: "reveal",
    meaning: "드러내다, 밝히다",
    examples: [
      { en: "The investigation revealed the truth.", kr: "그 조사는 진실을 드러냈습니다." },
      { en: "He refused to reveal his source of information.", kr: "그는 자신의 정보 출처를 밝히기를 거부했습니다." }
    ]
  },
  {
    id: "L2-151",
    word: "scheme",
    meaning: "계획, 책략",
    examples: [
      { en: "The government launched a new social security scheme.", kr: "정부는 새로운 사회 보장 계획을 시작했습니다." },
      { en: "He was caught trying to devise a fraudulent scheme.", kr: "그는 사기성 책략을 꾸미려다 잡혔습니다." }
    ]
  },
  {
    id: "L2-152",
    word: "scope",
    meaning: "범위",
    examples: [
      { en: "The scope of the project is very broad.", kr: "그 프로젝트의 범위는 매우 광범위합니다." },
      { en: "We decided to limit the scope of our research.", kr: "우리는 연구 범위를 제한하기로 결정했습니다." }
    ]
  },
  {
    id: "L2-153",
    word: "secure",
    meaning: "안전한, 확보하다",
    examples: [
      { en: "Please ensure your connection is secure.", kr: "연결이 안전한지 확인해 주세요." },
      { en: "The team worked hard to secure the contract.", kr: "팀은 그 계약을 확보하기 위해 열심히 일했습니다." }
    ]
  },
  {
    id: "L2-154",
    word: "shift",
    meaning: "변화, 이동하다",
    examples: [
      { en: "There has been a dramatic shift in public opinion.", kr: "여론에 극적인 변화가 있었습니다." },
      { en: "She shifted her weight from one foot to the other.", kr: "그녀는 한 발에서 다른 발로 체중을 이동했습니다." }
    ]
  },
  {
    id: "L2-155",
    word: "substitute",
    meaning: "대체하다, 대용품",
    examples: [
      { en: "You can substitute chicken for beef in this recipe.", kr: "이 레시피에서 쇠고기 대신 닭고기를 대체할 수 있습니다." },
      { en: "The teacher used a temporary substitute for the class.", kr: "선생님은 그 수업을 위해 임시 대용 교사를 사용했습니다." }
    ]
  },
  {
    id: "L2-156",
    word: "terminate",
    meaning: "종료하다, 끝내다",
    examples: [
      { en: "The company decided to terminate his employment.", kr: "회사는 그의 고용을 종료하기로 결정했습니다." },
      { en: "The train terminates at the next station.", kr: "그 기차는 다음 역에서 끝납니다(종료됩니다)." }
    ]
  },
  {
    id: "L2-157",
    word: "tolerate",
    meaning: "용인하다, 참다",
    examples: [
      { en: "We will not tolerate any form of discrimination.", kr: "우리는 어떤 형태의 차별도 용인하지 않을 것입니다." },
      { en: "Plants that tolerate dry conditions are hard to find.", kr: "건조한 조건을 참는 식물들은 찾기 어렵습니다." }
    ]
  },
  {
    id: "L2-158",
    word: "transfer",
    meaning: "이전하다, 이동하다",
    examples: [
      { en: "He transferred money from his savings account.", kr: "그는 그의 저축 계좌에서 돈을 이전했습니다." },
      { en: "You will need to transfer to a different line at the next station.", kr: "당신은 다음 역에서 다른 노선으로 이동해야 할 것입니다." }
    ]
  },
  {
    id: "L2-159",
    word: "transform",
    meaning: "변형시키다",
    examples: [
      { en: "The internet has transformed the way we communicate.", kr: "인터넷은 우리가 소통하는 방식을 변형시켰습니다." },
      { en: "The renovation transformed the old building into a modern office.", kr: "그 리노베이션은 오래된 건물을 현대적인 사무실로 변형시켰습니다." }
    ]
  },
  {
    id: "L2-160",
    word: "unanimous",
    meaning: "만장일치의",
    examples: [
      { en: "The vote was a unanimous decision.", kr: "그 투표는 만장일치의 결정이었습니다." },
      { en: "All members were unanimous in their approval.", kr: "모든 구성원들은 그 승인에 만장일치였습니다." }
    ]
  },
  {
    id: "L2-161",
    word: "utilize",
    meaning: "활용하다, 이용하다",
    examples: [
      { en: "We must utilize every moment of our time.", kr: "우리는 우리 시간의 모든 순간을 활용해야 합니다." },
      { en: "The company utilizes solar power to save energy.", kr: "그 회사는 에너지를 절약하기 위해 태양광 발전(태양열)을 이용합니다." }
    ]
  },
  {
    id: "L2-162",
    word: "validate",
    meaning: "입증하다, 확인하다",
    examples: [
      { en: "The research findings validate her hypothesis.", kr: "그 연구 결과는 그녀의 가설을 입증합니다." },
      { en: "You need to validate your ticket before boarding the train.", kr: "기차에 탑승하기 전에 티켓을 확인해야 합니다." }
    ]
  },
  {
    id: "L2-163",
    word: "compile",
    meaning: "편집하다, 수집하다",
    examples: [
      { en: "The library compiled a list of recommended readings.", kr: "도서관은 추천 도서 목록을 편집했습니다." },
      { en: "He spent a year compiling the data for his thesis.", kr: "그는 논문을 위한 데이터를 수집하는 데 1년을 보냈습니다." }
    ]
  },
  {
    id: "L2-164",
    word: "decline",
    meaning: "감소하다, 거절하다",
    examples: [
      { en: "The number of people visiting the site has declined.", kr: "그 사이트를 방문하는 사람들의 수가 감소했습니다." },
      { en: "She politely declined the dinner invitation.", kr: "그녀는 저녁 식사 초대를 정중하게 거절했습니다." }
    ]
  },
  {
    id: "L2-165",
    word: "draft",
    meaning: "초안, 초안을 작성하다",
    examples: [
      { en: "The legal team prepared the initial draft of the contract.", kr: "법률 팀은 계약서의 초기 초안을 준비했습니다." },
      { en: "I need to draft a letter to the editor.", kr: "나는 편집자에게 보낼 편지를 초안 작성해야 합니다." }
    ]
  },
  {
    id: "L2-166",
    word: "enforce",
    meaning: "집행하다, 강요하다",
    examples: [
      { en: "New rules will be strictly enforced starting tomorrow.", kr: "새로운 규칙들은 내일부터 엄격하게 집행될 것입니다." },
      { en: "It is hard to enforce obedience from young children.", kr: "어린아이들에게 복종을 강요하는 것은 어렵습니다." }
    ]
  },
  {
    id: "L2-167",
    word: "expel",
    meaning: "추방하다, 쫓아내다",
    examples: [
      { en: "The club voted to expel the member for misconduct.", kr: "클럽은 비행으로 그 구성원을 추방하기로 투표했습니다." },
      { en: "The engine works to expel exhaust fumes.", kr: "엔진은 배기 가스를 쫓아내기 위해 작동합니다." }
    ]
  },
  {
    id: "L2-168",
    word: "fictional",
    meaning: "허구의, 가상의",
    examples: [
      { en: "The characters in the movie are completely fictional.", kr: "그 영화 속 인물들은 완전히 허구입니다." },
      { en: "He wrote a history of a fictional kingdom.", kr: "그는 가상의 왕국에 대한 역사를 썼습니다." }
    ]
  },
  {
    id: "L2-169",
    word: "hesitate",
    meaning: "망설이다, 주저하다",
    examples: [
      { en: "She hesitated before replying to the difficult question.", kr: "그녀는 어려운 질문에 답하기 전에 망설였습니다." },
      { en: "Please do not hesitate to contact us.", kr: "저희에게 연락하는 것을 주저하지 마세요." }
    ]
  },
  {
    id: "L2-170",
    word: "implement",
    meaning: "실행하다, 이행하다",
    examples: [
      { en: "The challenge now is how to implement the plan.", kr: "이제 문제는 그 계획을 어떻게 실행하느냐입니다." },
      { en: "We need time to fully implement the new procedures.", kr: "우리는 새로운 절차를 완전히 이행하는 데 시간이 필요합니다." }
    ]
  },
  {
    id: "L2-171",
    word: "inflict",
    meaning: "가하다, 고통을 주다",
    examples: [
      { en: "The fire inflicted serious damage on the historic building.", kr: "그 화재는 역사적인 건물에 심각한 피해를 가했습니다." },
      { en: "Why would you inflict such pain on an innocent person?", kr: "왜 무고한 사람에게 그런 고통을 줍니까?" }
    ]
  },
  {
    id: "L2-172",
    word: "intervene",
    meaning: "개입하다, 중재하다",
    examples: [
      { en: "The police had to intervene to stop the fight.", kr: "경찰은 싸움을 멈추기 위해 개입해야 했습니다." },
      { en: "She decided not to intervene in her children's argument.", kr: "그녀는 아이들의 논쟁에 중재하지 않기로 결정했습니다." }
    ]
  },
  {
    id: "L2-173",
    word: "legitimate",
    meaning: "합법적인, 정당한",
    examples: [
      { en: "Only the court can declare the document legitimate.", kr: "오직 법원만이 그 문서가 합법적임을 선언할 수 있습니다." },
      { en: "He had a legitimate complaint about the service.", kr: "그는 그 서비스에 대해 정당한 불만을 가지고 있었습니다." }
    ]
  },
  {
    id: "L2-174",
    word: "manipulate",
    meaning: "조종하다, 조작하다",
    examples: [
      { en: "He tried to manipulate the public into supporting his policy.", kr: "그는 대중을 조종하여 자신의 정책을 지지하도록 하려고 했습니다." },
      { en: "The data was manipulated to show a better result.", kr: "그 데이터는 더 나은 결과를 보여주기 위해 조작되었습니다." }
    ]
  },
  {
    id: "L2-175",
    word: "marginal",
    meaning: "미미한, 한계의",
    examples: [
      { en: "The differences between the two products are only marginal.", kr: "두 제품 간의 차이는 단지 미미합니다." },
      { en: "They live on the marginal land near the desert.", kr: "그들은 사막 근처의 한계적인 땅에서 살고 있습니다." }
    ]
  },
  {
    id: "L2-176",
    word: "overwhelm",
    meaning: "압도하다, 제압하다",
    examples: [
      { en: "The scale of the disaster threatened to overwhelm the aid efforts.", kr: "재난의 규모가 구호 노력을 압도할 위협이 되었습니다." },
      { en: "I was overwhelmed by the sudden workload.", kr: "나는 갑작스러운 업무량에 압도당했습니다." }
    ]
  },
  {
    id: "L2-177",
    word: "paradox",
    meaning: "역설",
    examples: [
      { en: "The film presents a paradox: the war to end all wars.", kr: "그 영화는 역설을 제시합니다: 모든 전쟁을 끝내기 위한 전쟁." },
      { en: "It is a paradox that the more we know, the more we realize we don't know.", kr: "우리가 더 많이 알수록, 우리가 모른다는 것을 더 많이 깨닫는 것은 역설입니다." }
    ]
  },
  {
    id: "L2-178",
    word: "preliminary",
    meaning: "예비의, 사전의",
    examples: [
      { en: "The team conducted a preliminary test run.", kr: "팀은 예비 시험 운행을 실시했습니다." },
      { en: "We are waiting for the preliminary results of the election.", kr: "우리는 선거의 사전 결과를 기다리고 있습니다." }
    ]
  },
  {
    id: "L2-179",
    word: "prosecute",
    meaning: "기소하다, 소추하다",
    examples: [
      { en: "The state decided not to prosecute the case due to lack of evidence.", kr: "주는 증거 부족으로 그 사건을 기소하지 않기로 결정했습니다." },
      { en: "Anyone who breaks the law will be prosecuted.", kr: "법을 어기는 사람은 누구나 소추될 것입니다." }
    ]
  },
  {
    id: "L2-180",
    word: "reiterate",
    meaning: "반복하다, 되풀이하다",
    examples: [
      { en: "Let me reiterate the importance of being on time.", kr: "시간을 지키는 것의 중요성을 다시 한번 반복하겠습니다." },
      { en: "He reiterated his innocence during the interview.", kr: "그는 인터뷰 동안 자신의 무죄를 되풀이했습니다." }
    ]
  },
  {
    id: "L2-181",
    word: "restrict",
    meaning: "제한하다, 한정하다",
    examples: [
      { en: "The law restricts the sale of alcohol to minors.", kr: "그 법은 미성년자에게 술 판매를 제한합니다." },
      { en: "We must restrict our food intake to lose weight.", kr: "우리는 체중 감량을 위해 음식 섭취를 한정해야 합니다." }
    ]
  },
  {
    id: "L2-182",
    word: "revenue",
    meaning: "수익, 세입",
    examples: [
      { en: "The company's annual revenue reached a record high.", kr: "그 회사의 연간 수익은 기록적인 최고치에 도달했습니다." },
      { en: "The government collects most of its revenue through taxes.", kr: "정부는 대부분의 세입을 세금을 통해 징수합니다." }
    ]
  },
  {
    id: "L2-183",
    word: "speculate",
    meaning: "추측하다, 투기하다",
    examples: [
      { en: "We can only speculate on the reasons for the delay.", kr: "우리는 지연의 이유에 대해 추측만 할 수 있을 뿐입니다." },
      { en: "He made a fortune by speculating in property.", kr: "그는 부동산에 투기하여 큰돈을 벌었습니다." }
    ]
  },
  {
    id: "L2-184",
    word: "specialize",
    meaning: "전문으로 하다",
    examples: [
      { en: "This restaurant specializes in seafood dishes.", kr: "이 식당은 해산물 요리를 전문으로 합니다." },
      { en: "She chose to specialize in tax law.", kr: "그녀는 세법을 전문으로 하기로 선택했습니다." }
    ]
  },
  {
    id: "L2-185",
    word: "standardize",
    meaning: "표준화하다",
    examples: [
      { en: "The goal is to standardize all work processes.", kr: "목표는 모든 작업 프로세스를 표준화하는 것입니다." },
      { en: "They standardized the size of the components to improve efficiency.", kr: "그들은 효율성을 개선하기 위해 부품들의 크기를 표준화했습니다." }
    ]
  },
  {
    id: "L2-186",
    word: "sustainable",
    meaning: "지속 가능한",
    examples: [
      { en: "We are seeking a sustainable solution for clean water.", kr: "우리는 깨끗한 물을 위한 지속 가능한 해결책을 찾고 있습니다." },
      { en: "Sustainable energy sources are vital for the planet.", kr: "지속 가능한 에너지원은 지구에 필수적입니다." }
    ]
  },
  {
    id: "L2-187",
    word: "tempt",
    meaning: "유혹하다",
    examples: [
      { en: "The offer of a higher salary tempted her to leave her current job.", kr: "더 높은 급여 제안은 그녀가 현재 직장을 떠나도록 유혹했습니다." },
      { en: "Don't tempt fate by climbing without a harness.", kr: "안전벨트 없이 등반하여 운명을 시험하지 마세요(유혹하지 마세요)." }
    ]
  },
  {
    id: "L2-188",
    word: "transcend",
    meaning: "초월하다",
    examples: [
      { en: "Art is a way to transcend our daily problems.", kr: "예술은 우리의 일상적인 문제들을 초월하는 방법입니다." },
      { en: "His talent for leadership transcends his age.", kr: "그의 리더십 재능은 그의 나이를 초월합니다." }
    ]
  },
  {
    id: "L2-189",
    word: "undergo",
    meaning: "겪다, 경험하다",
    examples: [
      { en: "The patient will undergo a series of tests.", kr: "그 환자는 일련의 검사를 겪을 것입니다(받을 것입니다)." },
      { en: "The product has undergone several design changes.", kr: "그 제품은 몇 가지 디자인 변경을 겪었습니다." }
    ]
  },
  {
    id: "L2-190",
    word: "undermine",
    meaning: "약화시키다, 훼손하다",
    examples: [
      { en: "Criticism can undermine a child's confidence.", kr: "비판은 아이의 자신감을 약화시킬 수 있습니다." },
      { en: "The scandal undermined the politician's reputation.", kr: "그 스캔들은 그 정치인의 명성을 훼손했습니다." }
    ]
  },
  {
    id: "L2-191",
    word: "verify",
    meaning: "확인하다, 검증하다",
    examples: [
      { en: "Please verify the information with the original source.", kr: "원천 자료와 정보를 확인해 주세요." },
      { en: "The device is used to verify the authenticity of bank notes.", kr: "그 장치는 지폐의 진위를 검증하는 데 사용됩니다." }
    ]
  },
  {
    id: "L2-192",
    word: "vulnerable",
    meaning: "취약한",
    examples: [
      { en: "Elderly people are particularly vulnerable to cold weather.", kr: "노인들은 특히 추운 날씨에 취약합니다." },
      { en: "The fortress was vulnerable to attack from the sea.", kr: "그 요새는 바다로부터의 공격에 취약했습니다." }
    ]
  },
  {
    id: "L2-193",
    word: "withdraw",
    meaning: "철회하다, 인출하다",
    examples: [
      { en: "He threatened to withdraw his support for the party.", kr: "그는 당에 대한 자신의 지지를 철회하겠다고 위협했습니다." },
      { en: "I need to withdraw $100 from my account.", kr: "나는 계좌에서 100달러를 인출해야 합니다." }
    ]
  },
  {
    id: "L2-194",
    word: "advocate",
    meaning: "옹호하다, 지지자",
    examples: [
      { en: "She is a passionate advocate for mental health.", kr: "그녀는 정신 건강을 위한 열정적인 지지자입니다." },
      { en: "The group advocates for stricter environmental laws.", kr: "그 단체는 더 엄격한 환경법을 옹호합니다." }
    ]
  },
  {
    id: "L2-195",
    word: "allegedly",
    meaning: "주장하는 바에 의하면",
    examples: [
      { en: "The suspect allegedly confessed to the crime.", kr: "그 용의자는 주장하는 바에 의하면 범죄를 자백했습니다." },
      { en: "He was arrested for allegedly selling stolen goods.", kr: "그는 주장하는 바에 의하면 훔친 물건을 판매한 혐의로 체포되었습니다." }
    ]
  },
  {
    id: "L2-196",
    word: "conscious",
    meaning: "의식하는, 자각하는",
    examples: [
      { en: "She was conscious of being watched.", kr: "그녀는 감시당하고 있다는 것을 의식하고 있었습니다." },
      { en: "We must be environmentally conscious in our decisions.", kr: "우리는 우리의 결정에서 환경적으로 자각해야 합니다." }
    ]
  },
  {
    id: "L2-197",
    word: "discrepancy",
    meaning: "불일치, 차이",
    examples: [
      { en: "There is a major discrepancy between the two accounts of the event.", kr: "그 사건에 대한 두 설명 사이에 큰 불일치가 있습니다." },
      { en: "The audit revealed a discrepancy in the company's books.", kr: "감사는 회사 장부에서 차이(불일치)를 밝혀냈습니다." }
    ]
  },
  {
    id: "L2-198",
    word: "mandatory",
    meaning: "의무적인, 필수적인",
    examples: [
      { en: "It is mandatory to attend the safety briefing.", kr: "안전 브리핑에 참석하는 것은 의무적입니다." },
      { en: "The government made wearing masks mandatory in public spaces.", kr: "정부는 공공장소에서의 마스크 착용을 필수적으로 만들었습니다." }
    ]
  },
  {
    id: "L2-199",
    word: "necessity",
    meaning: "필요성, 필수품",
    examples: [
      { en: "Is a car a luxury or a necessity for you?", kr: "자동차는 당신에게 사치품입니까, 아니면 필수품입니까?" },
      { en: "There is no necessity for you to apologize.", kr: "당신이 사과할 필요성은 없습니다." }
    ]
  },
  {
    id: "L2-200",
    word: "obvious",
    meaning: "분명한, 명백한",
    examples: [
      { en: "The solution to the problem was quite obvious.", kr: "그 문제의 해결책은 아주 분명했습니다." },
      { en: "It was obvious that the company was in trouble.", kr: "그 회사가 곤경에 처했다는 것은 명백했습니다." }
    ]
  }
];


const wordsLevel2_Part3 = [
  {
    id: "L2-201",
    word: "orient",
    meaning: "방향을 잡다, 지향하게 하다",
    examples: [
      { en: "It is difficult to orient yourself in the dark forest.", kr: "어두운 숲속에서 방향을 잡는 것은 어렵습니다." },
      { en: "The company’s strategy is oriented towards innovation.", kr: "그 회사의 전략은 혁신을 지향하게 되어 있습니다." }
    ]
  },
  {
    id: "L2-202",
    word: "overlap",
    meaning: "겹치다, 중복되다",
    examples: [
      { en: "The two projects have a significant overlap in scope.", kr: "두 프로젝트는 범위에 상당한 중복이 있습니다." },
      { en: "The new schedule is designed so that no classes overlap.", kr: "새로운 시간표는 어떤 수업도 겹치지 않도록 설계되었습니다." }
    ]
  },
  {
    id: "L2-203",
    word: "panel",
    meaning: "패널, 토론자단",
    examples: [
      { en: "The expert panel discussed the effects of climate change.", kr: "전문가 토론자단은 기후 변화의 영향을 논의했습니다." },
      { en: "Solar panels are being installed on the roof.", kr: "태양광 패널이 지붕에 설치되고 있습니다." }
    ]
  },
  {
    id: "L2-204",
    word: "pose",
    meaning: "제기하다, 자세를 취하다",
    examples: [
      { en: "The disease poses a serious threat to public health.", kr: "그 질병은 공중 보건에 심각한 위협을 제기합니다." },
      { en: "The model was asked to pose for the photographer.", kr: "그 모델은 사진작가를 위해 자세를 취해 달라고 요청받았습니다." }
    ]
  },
  {
    id: "L2-205",
    word: "prevalent",
    meaning: "널리 퍼진, 일반적인",
    examples: [
      { en: "The illness is more prevalent in tropical countries.", kr: "그 질병은 열대 국가에서 더 널리 퍼져 있습니다." },
      { en: "Mobile phone use is now completely prevalent.", kr: "휴대폰 사용은 이제 완전히 일반적입니다." }
    ]
  },
  {
    id: "L2-206",
    word: "profound",
    meaning: "심오한, 지대한",
    examples: [
      { en: "The book contains a profound message about life.", kr: "그 책은 삶에 대한 심오한 메시지를 담고 있습니다." },
      { en: "The war had a profound effect on the economy.", kr: "그 전쟁은 경제에 지대한 영향을 미쳤습니다." }
    ]
  },
  {
    id: "L2-207",
    word: "prompt",
    meaning: "촉발하다, 즉각적인",
    examples: [
      { en: "The high risk prompted a change in strategy.", kr: "높은 위험이 전략 변화를 촉발했습니다." },
      { en: "We need a prompt response from the client.", kr: "우리는 고객으로부터 즉각적인 응답이 필요합니다." }
    ]
  },
  {
    id: "L2-208",
    word: "qualify",
    meaning: "자격을 얻다, 한정하다",
    examples: [
      { en: "You must pass the exam to qualify as a doctor.", kr: "의사가 되기 위해 시험에 합격하여 자격을 얻어야 합니다." },
      { en: "I would like to qualify my earlier statement.", kr: "저는 제 이전 진술을 한정하고 싶습니다." }
    ]
  },
  {
    id: "L2-209",
    word: "recede",
    meaning: "물러나다, 약해지다",
    examples: [
      { en: "The floodwaters slowly began to recede.", kr: "홍수가 난 물이 서서히 물러나기 시작했습니다." },
      { en: "His hairline started to recede in his twenties.", kr: "그의 헤어라인은 20대에 약해지기(뒤로 가기) 시작했습니다." }
    ]
  },
  {
    id: "L2-210",
    word: "recollection",
    meaning: "기억, 회상",
    examples: [
      { en: "He has no recollection of the accident.", kr: "그는 그 사고에 대한 아무런 기억이 없습니다." },
      { en: "His favorite recollection is his childhood trip to the beach.", kr: "그의 가장 좋아하는 회상은 해변으로의 어린 시절 여행입니다." }
    ]
  },
  {
    id: "L2-211",
    word: "refer",
    meaning: "언급하다, 참조하다",
    examples: [
      { en: "I refer you to the table on page 5.", kr: "5페이지의 표를 참조하시기 바랍니다." },
      { en: "The speaker did not refer to the recent controversy.", kr: "연사는 최근 논란에 대해 언급하지 않았습니다." }
    ]
  },
  {
    id: "L2-212",
    word: "regulate",
    meaning: "규제하다, 조절하다",
    examples: [
      { en: "The agency regulates the safety of food and drugs.", kr: "그 기관은 식품과 약품의 안전을 규제합니다." },
      { en: "A thermostat regulates the temperature.", kr: "온도 조절기가 온도를 조절합니다." }
    ]
  },
  {
    id: "L2-213",
    word: "reluctant",
    meaning: "꺼리는, 마지못해 하는",
    examples: [
      { en: "She was reluctant to admit her mistake.", kr: "그녀는 자신의 실수를 인정하기를 꺼렸습니다." },
      { en: "The government was reluctant to impose new taxes.", kr: "정부는 새로운 세금을 부과하는 것을 마지못해 했습니다." }
    ]
  },
  {
    id: "L2-214",
    word: "reside",
    meaning: "거주하다",
    examples: [
      { en: "He has resided in this city for over twenty years.", kr: "그는 이 도시에서 20년 이상 거주했습니다." },
      { en: "The president resides at the White House.", kr: "대통령은 백악관에 거주합니다." }
    ]
  },
  {
    id: "L2-215",
    word: "restrain",
    meaning: "억제하다, 제지하다",
    examples: [
      { en: "She had to restrain her anger during the argument.", kr: "그녀는 논쟁 중에 자신의 분노를 억제해야 했습니다." },
      { en: "The animal was restrained by a short leash.", kr: "그 동물은 짧은 줄에 의해 제지되었습니다." }
    ]
  },
  {
    id: "L2-216",
    word: "rigid",
    meaning: "엄격한, 융통성 없는",
    examples: [
      { en: "The school has a rigid set of rules.", kr: "그 학교는 엄격한 일련의 규칙을 가지고 있습니다." },
      { en: "The elderly man's joints were rigid and painful.", kr: "그 노인의 관절은 뻣뻣하고 통증이 있었습니다." }
    ]
  },
  {
    id: "L2-217",
    word: "sequence",
    meaning: "순서, 연속",
    examples: [
      { en: "The DNA sequence was analyzed by the scientists.", kr: "DNA 순서가 과학자들에 의해 분석되었습니다." },
      { en: "The events occurred in a rapid sequence.", kr: "그 사건들은 빠른 연속으로 발생했습니다." }
    ]
  },
  {
    id: "L2-218",
    word: "spatial",
    meaning: "공간의",
    examples: [
      { en: "Children need to develop good spatial awareness.", kr: "아이들은 좋은 공간 인지 능력을 개발할 필요가 있습니다." },
      { en: "The map shows the spatial distribution of the population.", kr: "그 지도는 인구의 공간적 분포를 보여줍니다." }
    ]
  },
  {
    id: "L2-219",
    word: "specify",
    meaning: "명시하다, 구체화하다",
    examples: [
      { en: "Please specify the type of computer you need.", kr: "필요한 컴퓨터의 유형을 명시해 주세요." },
      { en: "The contract specifies the terms of the agreement.", kr: "그 계약서는 합의의 조건을 구체화합니다." }
    ]
  },
  {
    id: "L2-220",
    word: "static",
    meaning: "정적인, 고정된",
    examples: [
      { en: "The picture on the screen was static, not moving.", kr: "화면의 그림은 움직이지 않는 정적인 것이었습니다." },
      { en: "Inflation remained static for three consecutive months.", kr: "인플레이션은 3개월 연속으로 고정된 상태를 유지했습니다." }
    ]
  },
  {
    id: "L2-221",
    word: "subsequent",
    meaning: "후속의, 그 다음의",
    examples: [
      { en: "Subsequent events proved his theory correct.", kr: "그 다음의 사건들이 그의 이론이 옳았음을 증명했습니다." },
      { en: "The initial excitement faded in the subsequent weeks.", kr: "초기 흥분은 후속 몇 주 동안 사라졌습니다." }
    ]
  },
  {
    id: "L2-222",
    word: "supplement",
    meaning: "보충하다, 보충제",
    examples: [
      { en: "She takes a vitamin C supplement every morning.", kr: "그녀는 매일 아침 비타민 C 보충제를 복용합니다." },
      { en: "We decided to supplement the main meal with a salad.", kr: "우리는 메인 식사를 샐러드로 보충하기로 결정했습니다." }
    ]
  },
  {
    id: "L2-223",
    word: "suspend",
    meaning: "중단하다, 매달다",
    examples: [
      { en: "The game was suspended due to heavy rain.", kr: "그 경기는 폭우로 인해 중단되었습니다." },
      { en: "A heavy chandelier was suspended from the ceiling.", kr: "무거운 샹들리에가 천장에 매달려 있었습니다." }
    ]
  },
  {
    id: "L2-224",
    word: "tendency",
    meaning: "경향, 추세",
    examples: [
      { en: "He has a tendency to procrastinate.", kr: "그는 미루는 경향이 있습니다." },
      { en: "The current tendency is toward smaller cars.", kr: "현재의 추세는 더 작은 차로 향하고 있습니다." }
    ]
  },
  {
    id: "L2-225",
    word: "ultimate",
    meaning: "궁극적인, 최고의",
    examples: [
      { en: "His ultimate goal is to become a CEO.", kr: "그의 궁극적인 목표는 CEO가 되는 것입니다." },
      { en: "The team won the ultimate victory.", kr: "그 팀은 최고의 승리를 거두었습니다." }
    ]
  },
  {
    id: "L2-226",
    word: "unify",
    meaning: "통합하다, 통일하다",
    examples: [
      { en: "The leader's goal was to unify the divided nation.", kr: "그 지도자의 목표는 분열된 국가를 통합하는 것이었습니다." },
      { en: "The new system will unify all the databases.", kr: "새로운 시스템은 모든 데이터베이스를 통일할 것입니다." }
    ]
  },
  {
    id: "L2-227",
    word: "viable",
    meaning: "실행 가능한, 생존 가능한",
    examples: [
      { en: "The committee is looking for a viable solution.", kr: "위원회는 실행 가능한 해결책을 찾고 있습니다." },
      { en: "The seed must be viable to grow into a plant.", kr: "그 씨앗은 식물로 자라기 위해 생존 가능해야 합니다." }
    ]
  },
  {
    id: "L2-228",
    word: "whereas",
    meaning: "반면에",
    examples: [
      { en: "Some people like coffee, whereas others prefer tea.", kr: "어떤 사람들은 커피를 좋아하는 반면에, 다른 사람들은 차를 선호합니다." },
      { en: "He is tall, whereas his brother is quite short.", kr: "그는 키가 큰 반면에, 그의 동생은 꽤 작습니다." }
    ]
  },
  {
    id: "L2-229",
    word: "accompany",
    meaning: "동행하다, 수반하다",
    examples: [
      { en: "Children must be accompanied by an adult.", kr: "어린이들은 성인과 동행해야 합니다." },
      { en: "Success is often accompanied by hard work.", kr: "성공은 종종 힘든 노력에 수반됩니다." }
    ]
  },
  {
    id: "L2-230",
    word: "acknowledge",
    meaning: "인정하다, 승인하다",
    examples: [
      { en: "He acknowledged that he was wrong.", kr: "그는 자신이 틀렸다는 것을 인정했습니다." },
      { en: "The gift was sent to acknowledge her hard work.", kr: "그 선물은 그녀의 노고를 승인하기 위해 보내졌습니다." }
    ]
  },
  {
    id: "L2-231",
    word: "compile",
    meaning: "편집하다, 수집하다",
    examples: [
      { en: "The library compiled a list of recommended readings.", kr: "도서관은 추천 도서 목록을 편집했습니다." },
      { en: "He spent a year compiling the data for his thesis.", kr: "그는 논문을 위한 데이터를 수집하는 데 1년을 보냈습니다." }
    ]
  },
  {
    id: "L2-232",
    word: "confidential",
    meaning: "기밀의, 비밀의",
    examples: [
      { en: "This document is highly confidential and should not be shared.", kr: "이 문서는 고도로 기밀이며 공유되어서는 안 됩니다." },
      { en: "All patient information remains strictly confidential.", kr: "모든 환자 정보는 엄격하게 비밀로 유지됩니다." }
    ]
  },
  {
    id: "L2-233",
    word: "contrast",
    meaning: "대조, 대조되다",
    examples: [
      { en: "There is a sharp contrast between the rich and the poor.", kr: "부유한 사람들과 가난한 사람들 사이에 뚜렷한 대조가 있습니다." },
      { en: "His dark suit contrasted sharply with the white wall.", kr: "그의 어두운 정장은 흰 벽과 뚜렷하게 대조되었습니다." }
    ]
  },
  {
    id: "L2-234",
    word: "coordinate",
    meaning: "조정하다, 협력하다",
    examples: [
      { en: "We need to coordinate our efforts with the other team.", kr: "우리는 다른 팀과 우리의 노력을 조정해야 합니다." },
      { en: "She works to coordinate schedules for all executives.", kr: "그녀는 모든 경영진의 일정을 조정하기 위해 일합니다." }
    ]
  },
  {
    id: "L2-235",
    word: "dedicate",
    meaning: "헌신하다, 바치다",
    examples: [
      { en: "He dedicated his life to helping the poor.", kr: "그는 가난한 사람들을 돕는 데 자신의 삶을 헌신했습니다." },
      { en: "The monument is dedicated to the fallen soldiers.", kr: "그 기념비는 전사한 군인들에게 바쳐졌습니다." }
    ]
  },
  {
    id: "L2-236",
    word: "devote",
    meaning: "헌신하다, 전념하다",
    examples: [
      { en: "She devoted herself to her career.", kr: "그녀는 자신의 경력에 헌신했습니다." },
      { en: "I devote a few hours every day to exercise.", kr: "나는 매일 몇 시간을 운동에 전념합니다." }
    ]
  },
  {
    id: "L2-237",
    word: "dispose",
    meaning: "처리하다, 처분하다",
    examples: [
      { en: "We need to dispose of the old equipment safely.", kr: "우리는 오래된 장비를 안전하게 처리해야 합니다." },
      { en: "The document was disposed of according to protocol.", kr: "그 문서는 규정에 따라 처분되었습니다." }
    ]
  },
  {
    id: "L2-238",
    word: "duration",
    meaning: "지속 기간",
    examples: [
      { en: "The contract is for a duration of three years.", kr: "그 계약은 3년의 지속 기간 동안입니다." },
      { en: "She slept for the entire duration of the flight.", kr: "그녀는 비행의 전체 지속 기간 동안 잤습니다." }
    ]
  },
  {
    id: "L2-239",
    word: "exceed",
    meaning: "초과하다",
    examples: [
      { en: "The cost should not exceed $1000.", kr: "비용은 1000달러를 초과해서는 안 됩니다." },
      { en: "His performance exceeded all expectations.", kr: "그의 성과는 모든 기대를 초과했습니다." }
    ]
  },
  {
    id: "L2-240",
    word: "exhibit",
    meaning: "전시하다, 나타내다",
    examples: [
      { en: "The museum will exhibit a collection of rare coins.", kr: "그 박물관은 희귀 동전 컬렉션을 전시할 것입니다." },
      { en: "He did not exhibit any signs of distress.", kr: "그는 어떤 고통의 징후도 나타내지 않았습니다." }
    ]
  },
  {
    id: "L2-241",
    word: "explict",
    meaning: "명백한, 명시적인",
    examples: [
      { en: "He gave me explicit instructions on what to do.", kr: "그는 나에게 무엇을 해야 할지에 대한 명백한 지시를 주었습니다." },
      { en: "The contract contains explicit details about the payment schedule.", kr: "그 계약서는 지불 일정에 대한 명시적인 세부 사항을 포함합니다." }
    ]
  },
  {
    id: "L2-242",
    word: "finite",
    meaning: "유한한",
    examples: [
      { en: "The earth's resources are finite.", kr: "지구의 자원은 유한합니다." },
      { en: "We only have a finite amount of time to complete the work.", kr: "우리는 그 작업을 완료할 유한한 양의 시간만 가지고 있습니다." }
    ]
  },
  {
    id: "L2-243",
    word: "foundation",
    meaning: "기초, 재단",
    examples: [
      { en: "A strong educational foundation is important for success.", kr: "강력한 교육적 기초는 성공에 중요합니다." },
      { en: "She established a foundation to help homeless people.", kr: "그녀는 노숙자들을 돕기 위한 재단을 설립했습니다." }
    ]
  },
  {
    id: "L2-244",
    word: "inevitable",
    meaning: "피할 수 없는, 불가피한",
    examples: [
      { en: "Change is an inevitable part of life.", kr: "변화는 삶의 피할 수 없는 부분입니다." },
      { en: "The war became inevitable after the final talks failed.", kr: "마지막 회담이 실패한 후 전쟁은 불가피하게 되었습니다." }
    ]
  },
  {
    id: "L2-245",
    word: "inspect",
    meaning: "검사하다, 조사하다",
    examples: [
      { en: "Safety officers will inspect the factory next week.", kr: "안전 담당관들이 다음 주에 공장을 검사할 것입니다." },
      { en: "He carefully inspected the old map.", kr: "그는 오래된 지도를 조심스럽게 조사했습니다." }
    ]
  },
  {
    id: "L2-246",
    word: "instruct",
    meaning: "지시하다, 가르치다",
    examples: [
      { en: "The lawyer instructed his assistant to prepare the documents.", kr: "변호사는 조수에게 서류를 준비하라고 지시했습니다." },
      { en: "She instructs students in the art of painting.", kr: "그녀는 학생들에게 그림 그리는 기술을 가르칩니다." }
    ]
  },
  {
    id: "L2-247",
    word: "interact",
    meaning: "상호 작용하다",
    examples: [
      { en: "The two chemicals interact with each other.", kr: "그 두 화학 물질은 서로 상호 작용합니다." },
      { en: "He finds it hard to interact with strangers.", kr: "그는 낯선 사람들과 상호 작용하는 것을 어려워합니다." }
    ]
  },
  {
    id: "L2-248",
    word: "internal",
    meaning: "내부의",
    examples: [
      { en: "The company announced an internal restructuring plan.", kr: "그 회사는 내부 구조 조정 계획을 발표했습니다." },
      { en: "She suffered some internal injuries in the crash.", kr: "그녀는 충돌로 약간의 내부 부상을 입었습니다." }
    ]
  },
  {
    id: "L2-249",
    word: "locate",
    meaning: "위치를 찾다, 위치시키다",
    examples: [
      { en: "We couldn't locate the source of the noise.", kr: "우리는 그 소음의 근원을 찾을 수 없었습니다." },
      { en: "The office is located in the city center.", kr: "그 사무실은 시내 중심에 위치해 있습니다." }
    ]
  },
  {
    id: "L2-250",
    word: "marginal",
    meaning: "미미한, 한계의",
    examples: [
      { en: "The differences between the two products are only marginal.", kr: "두 제품 간의 차이는 단지 미미합니다." },
      { en: "They live on the marginal land near the desert.", kr: "그들은 사막 근처의 한계적인 땅에서 살고 있습니다." }
    ]
  },
  {
    id: "L2-251",
    word: "mature",
    meaning: "성숙한, 만기가 되다",
    examples: [
      { en: "She is very mature for her age.", kr: "그녀는 나이에 비해 매우 성숙합니다." },
      { en: "The bonds will mature in ten years.", kr: "그 채권은 10년 후에 만기가 될 것입니다." }
    ]
  },
  {
    id: "L2-252",
    word: "modify",
    meaning: "수정하다, 변경하다",
    examples: [
      { en: "We need to modify the design slightly.", kr: "우리는 디자인을 약간 수정할 필요가 있습니다." },
      { en: "The contract can only be modified with written consent.", kr: "그 계약서는 서면 동의가 있어야만 변경될 수 있습니다." }
    ]
  },
  {
    id: "L2-253",
    word: "multiple",
    meaning: "다수의, 복합적인",
    examples: [
      { en: "The suspect had multiple aliases.", kr: "그 용의자는 다수의 가명을 가지고 있었습니다." },
      { en: "The problem has multiple contributing factors.", kr: "그 문제는 복합적인 기여 요인들을 가지고 있습니다." }
    ]
  },
  {
    id: "L2-254",
    word: "oblige",
    meaning: "의무적으로 만들다, 호의를 베풀다",
    examples: [
      { en: "The law obliges parents to send their children to school.", kr: "그 법은 부모들이 자녀를 학교에 보내도록 의무적으로 만듭니다." },
      { en: "Could you oblige me with a favor?", kr: "저에게 호의를 베풀어 주시겠어요?" }
    ]
  },
  {
    id: "L2-255",
    word: "obtain",
    meaning: "얻다, 획득하다",
    examples: [
      { en: "You can obtain a visa from the embassy.", kr: "대사관에서 비자를 얻을 수 있습니다." },
      { en: "We need to obtain permission before proceeding.", kr: "우리는 진행하기 전에 허가를 획득해야 합니다." }
    ]
  },
  {
    id: "L2-256",
    word: "occupy",
    meaning: "점유하다, 차지하다",
    examples: [
      { en: "The military began to occupy the city.", kr: "군대는 그 도시를 점유하기 시작했습니다." },
      { en: "The sofa occupies too much space in the room.", kr: "그 소파는 방에서 너무 많은 공간을 차지합니다." }
    ]
  },
  {
    id: "L2-257",
    word: "optimum",
    meaning: "최적의, 최고의",
    examples: [
      { en: "The machine operates at an optimum temperature.", kr: "그 기계는 최적의 온도에서 작동합니다." },
      { en: "We need to find the optimum solution for the problem.", kr: "우리는 그 문제에 대한 최적의 해결책을 찾아야 합니다." }
    ]
  },
  {
    id: "L2-258",
    word: "parallel",
    meaning: "평행한, 유사한",
    examples: [
      { en: "The road runs parallel to the river.", kr: "그 도로는 강과 평행하게 이어집니다." },
      { en: "There are many parallel cases in history.", kr: "역사에는 많은 유사한 사례들이 있습니다." }
    ]
  },
  {
    id: "L2-259",
    word: "perceive",
    meaning: "인지하다, 인식하다",
    examples: [
      { en: "The public perceives the brand as reliable.", kr: "대중은 그 브랜드를 신뢰할 수 있는 것으로 인식합니다." },
      { en: "We perceive colors through our eyes.", kr: "우리는 눈을 통해 색깔을 인지합니다." }
    ]
  },
  {
    id: "L2-260",
    word: "precede",
    meaning: "선행하다, 앞서다",
    examples: [
      { en: "The discovery of gravity was preceded by years of study.", kr: "중력의 발견은 수년간의 연구에 선행되었습니다." },
      { en: "A warning light precedes a major system failure.", kr: "경고등은 주요 시스템 오류에 앞서 나타납니다." }
    ]
  },
  {
    id: "L2-261",
    word: "presume",
    meaning: "추정하다, 가정하다",
    examples: [
      { en: "I presume you are here for the meeting.", kr: "당신이 회의 때문에 여기에 왔다고 추정합니다." },
      { en: "Do not presume to tell me what to do.", kr: "나에게 무엇을 해야 할지 말하려고 가정하지 마세요(감히 ~하다)." }
    ]
  },
  {
    id: "L2-262",
    word: "previous",
    meaning: "이전의",
    examples: [
      { en: "She had no previous experience in this field.", kr: "그녀는 이 분야에서 이전의 경험이 없었습니다." },
      { en: "The results are better than the previous year.", kr: "그 결과들은 이전 해보다 더 좋습니다." }
    ]
  },
  {
    id: "L2-263",
    word: "priority",
    meaning: "우선순위",
    examples: [
      { en: "Safety is our top priority.", kr: "안전은 우리의 최우선순위입니다." },
      { en: "The company made cost-cutting a high priority.", kr: "그 회사는 비용 절감을 높은 우선순위로 두었습니다." }
    ]
  },
  {
    id: "L2-264",
    word: "prohibit",
    meaning: "금지하다",
    examples: [
      { en: "Smoking is prohibited in public areas.", kr: "공공장소에서는 흡연이 금지됩니다." },
      { en: "The contract prohibits early termination.", kr: "그 계약은 조기 해지를 금지합니다." }
    ]
  },
  {
    id: "L2-265",
    word: "quote",
    meaning: "인용하다, 견적을 내다",
    examples: [
      { en: "He likes to quote from famous poems.", kr: "그는 유명한 시들을 인용하는 것을 좋아합니다." },
      { en: "The builder quoted me a low price for the renovation.", kr: "건축업자는 나에게 리노베이션에 대해 낮은 견적을 냈습니다." }
    ]
  },
  {
    id: "L2-266",
    word: "random",
    meaning: "무작위의, 임의의",
    examples: [
      { en: "The winner was chosen at random.", kr: "당첨자는 무작위로 선택되었습니다." },
      { en: "The experiment used a random sample of the population.", kr: "그 실험은 인구의 임의의 표본을 사용했습니다." }
    ]
  },
  {
    id: "L2-267",
    word: "range",
    meaning: "범위, 다양하다",
    examples: [
      { en: "The prices range from $10 to $50.", kr: "가격은 10달러에서 50달러까지 다양합니다." },
      { en: "The store carries a wide range of products.", kr: "그 가게는 광범위한 제품들을 취급합니다." }
    ]
  },
  {
    id: "L2-268",
    word: "release",
    meaning: "풀어주다, 공개하다",
    examples: [
      { en: "The film will be released next month.", kr: "그 영화는 다음 달에 공개될 것입니다." },
      { en: "They decided to release the hostage.", kr: "그들은 인질을 풀어주기로 결정했습니다." }
    ]
  },
  {
    id: "L2-269",
    word: "rely",
    meaning: "의지하다, 믿다",
    examples: [
      { en: "You can rely on her honesty.", kr: "당신은 그녀의 정직함을 믿을 수 있습니다." },
      { en: "Many people rely on public transport.", kr: "많은 사람들이 대중교통에 의지합니다." }
    ]
  },
  {
    id: "L2-270",
    word: "reside",
    meaning: "거주하다",
    examples: [
      { en: "He has resided in this city for over twenty years.", kr: "그는 이 도시에서 20년 이상 거주했습니다." },
      { en: "The president resides at the White House.", kr: "대통령은 백악관에 거주합니다." }
    ]
  },
  {
    id: "L2-271",
    word: "reverse",
    meaning: "뒤집다, 반대의",
    examples: [
      { en: "The company decided to reverse its earlier decision.", kr: "그 회사는 이전의 결정을 뒤집기로 결정했습니다." },
      { en: "She drove the car in reverse out of the garage.", kr: "그녀는 차를 후진으로 차고에서 운전했습니다." }
    ]
  },
  {
    id: "L2-272",
    word: "route",
    meaning: "경로, 길",
    examples: [
      { en: "We need to find the shortest route to the station.", kr: "우리는 역까지 가장 짧은 경로를 찾아야 합니다." },
      { en: "The delivery truck follows the same route every day.", kr: "그 배달 트럭은 매일 같은 길을 따릅니다." }
    ]
  },
  {
    id: "L2-273",
    word: "simulate",
    meaning: "모의 실험하다, 흉내 내다",
    examples: [
      { en: "A computer program was used to simulate the weather.", kr: "날씨를 모의 실험하기 위해 컴퓨터 프로그램이 사용되었습니다." },
      { en: "The machine simulates the feeling of flight.", kr: "그 기계는 비행하는 느낌을 흉내 냅니다." }
    ]
  },
  {
    id: "L2-274",
    word: "sole",
    meaning: "유일한, 독점적인",
    examples: [
      { en: "He was the sole survivor of the crash.", kr: "그는 그 충돌의 유일한 생존자였습니다." },
      { en: "The company has the sole right to sell the product.", kr: "그 회사는 그 제품을 판매할 독점적인 권리를 가지고 있습니다." }
    ]
  },
  {
    id: "L2-275",
    word: "substitute",
    meaning: "대체하다, 대용품",
    examples: [
      { en: "You can substitute chicken for beef in this recipe.", kr: "이 레시피에서 쇠고기 대신 닭고기를 대체할 수 있습니다." },
      { en: "The teacher used a temporary substitute for the class.", kr: "선생님은 그 수업을 위해 임시 대용 교사를 사용했습니다." }
    ]
  },
  {
    id: "L2-276",
    word: "sufficient",
    meaning: "충분한",
    examples: [
      { en: "Do we have sufficient resources for the task?", kr: "그 과제에 충분한 자원이 있습니까?" },
      { en: "A small amount of evidence is not sufficient.", kr: "소량의 증거는 충분하지 않습니다." }
    ]
  },
  {
    id: "L2-277",
    word: "temporary",
    meaning: "일시적인",
    examples: [
      { en: "The store will close for a temporary renovation.", kr: "그 가게는 일시적인 리노베이션을 위해 문을 닫을 것입니다." },
      { en: "This is just a temporary solution.", kr: "이것은 단지 일시적인 해결책일 뿐입니다." }
    ]
  },
  {
    id: "L2-278",
    word: "transmit",
    meaning: "전송하다, 전달하다",
    examples: [
      { en: "The satellite transmits data back to Earth.", kr: "그 위성은 데이터를 지구로 다시 전송합니다." },
      { en: "Mosquitoes can transmit various diseases.", kr: "모기는 다양한 질병을 전달할 수 있습니다." }
    ]
  },
  {
    id: "L2-279",
    word: "undergo",
    meaning: "겪다, 경험하다",
    examples: [
      { en: "The patient will undergo a series of tests.", kr: "그 환자는 일련의 검사를 겪을 것입니다(받을 것입니다)." },
      { en: "The product has undergone several design changes.", kr: "그 제품은 몇 가지 디자인 변경을 겪었습니다." }
    ]
  },
  {
    id: "L2-280",
    word: "uniform",
    meaning: "획일적인, 제복",
    examples: [
      { en: "All the students wore a school uniform.", kr: "모든 학생들은 교복을 입었습니다." },
      { en: "We need a uniform standard for all data.", kr: "우리는 모든 데이터에 대한 획일적인 기준이 필요합니다." }
    ]
  },
  {
    id: "L2-281",
    word: "unify",
    meaning: "통합하다, 통일하다",
    examples: [
      { en: "The leader's goal was to unify the divided nation.", kr: "그 지도자의 목표는 분열된 국가를 통합하는 것이었습니다." },
      { en: "The new system will unify all the databases.", kr: "새로운 시스템은 모든 데이터베이스를 통일할 것입니다." }
    ]
  },
  {
    id: "L2-282",
    word: "vision",
    meaning: "시력, 비전",
    examples: [
      { en: "She has perfect 20/20 vision.", kr: "그녀는 완벽한 20/20 시력을 가지고 있습니다." },
      { en: "The founder had a great vision for the company.", kr: "설립자는 회사에 대한 위대한 비전을 가지고 있었습니다." }
    ]
  },
  {
    id: "L2-283",
    word: "welfare",
    meaning: "복지",
    examples: [
      { en: "The government is committed to improving child welfare.", kr: "정부는 아동 복지 개선에 전념하고 있습니다." },
      { en: "We must consider the welfare of the animals.", kr: "우리는 동물들의 복지를 고려해야 합니다." }
    ]
  },
  {
    id: "L2-284",
    word: "accommodate",
    meaning: "수용하다, 편의를 제공하다",
    examples: [
      { en: "The hotel can accommodate up to 300 guests.", kr: "그 호텔은 최대 300명의 손님을 수용할 수 있습니다." },
      { en: "We will try to accommodate your request.", kr: "우리는 당신의 요청에 편의를 제공하려고 노력할 것입니다." }
    ]
  },
  {
    id: "L2-285",
    word: "anticipate",
    meaning: "예상하다, 기대하다",
    examples: [
      { en: "We anticipate a large crowd for the concert.", kr: "우리는 콘서트에 많은 인파를 예상합니다." },
      { en: "She is eagerly anticipating her trip to Europe.", kr: "그녀는 유럽 여행을 간절히 기대하고 있습니다." }
    ]
  },
  {
    id: "L2-286",
    word: "authorize",
    meaning: "승인하다, 권한을 부여하다",
    examples: [
      { en: "Only the manager can authorize this transaction.", kr: "오직 관리자만이 이 거래를 승인할 수 있습니다." },
      { en: "I authorized my agent to act on my behalf.", kr: "나는 내 대리인에게 나를 대신하여 행동할 권한을 부여했습니다." }
    ]
  },
  {
    id: "L2-287",
    word: "component",
    meaning: "구성 요소, 부품",
    examples: [
      { en: "Trust is a key component of a good relationship.", kr: "신뢰는 좋은 관계의 핵심 구성 요소입니다." },
      { en: "The machine has many moving components.", kr: "그 기계는 많은 움직이는 부품들을 가지고 있습니다." }
    ]
  },
  {
    id: "L2-288",
    word: "confer",
    meaning: "협의하다, 수여하다",
    examples: [
      { en: "The doctors will confer on the best course of treatment.", kr: "의사들은 최선의 치료 과정에 대해 협의할 것입니다." },
      { en: "The university conferred an honorary degree upon her.", kr: "그 대학은 그녀에게 명예 학위를 수여했습니다." }
    ]
  },
  {
    id: "L2-289",
    word: "curriculum",
    meaning: "교육 과정, 커리큘럼",
    examples: [
      { en: "The school introduced a new science curriculum.", kr: "그 학교는 새로운 과학 교육 과정을 도입했습니다." },
      { en: "She designed the curriculum for the online course.", kr: "그녀는 온라인 강좌를 위한 커리큘럼을 설계했습니다." }
    ]
  },
  {
    id: "L2-290",
    word: "deduct",
    meaning: "공제하다, 빼다",
    examples: [
      { en: "The company will deduct tax from your salary.", kr: "회사는 당신의 급여에서 세금을 공제할 것입니다." },
      { en: "You can deduct the cost of the uniforms.", kr: "당신은 제복 비용을 공제할 수 있습니다." }
    ]
  },
  {
    id: "L2-291",
    word: "deploy",
    meaning: "배치하다, 전개하다",
    examples: [
      { en: "The military will deploy more troops to the area.", kr: "군대는 그 지역에 더 많은 병력을 배치할 것입니다." },
      { en: "The company decided to deploy a new security system.", kr: "그 회사는 새로운 보안 시스템을 전개하기로 결정했습니다." }
    ]
  },
  {
    id: "L2-292",
    word: "dynamic",
    meaning: "역동적인, 활발한",
    examples: [
      { en: "The economy of the region is very dynamic.", kr: "그 지역의 경제는 매우 역동적입니다." },
      { en: "She is a dynamic speaker who always engages the audience.", kr: "그녀는 항상 청중을 사로잡는 활발한 연사입니다." }
    ]
  },
  {
    id: "L2-293",
    word: "emerge",
    meaning: "나타나다, 출현하다",
    examples: [
      { en: "A new leader emerged from the election.", kr: "선거에서 새로운 지도자가 나타났습니다." },
      { en: "The facts finally emerged after a long investigation.", kr: "긴 조사 끝에 마침내 사실들이 출현했습니다." }
    ]
  },
  {
    id: "L2-294",
    word: "exclusively",
    meaning: "오로지, 배타적으로",
    examples: [
      { en: "The shop sells products exclusively for women.", kr: "그 가게는 오로지 여성을 위한 제품만을 판매합니다." },
      { en: "The resort is exclusively for guests over 18.", kr: "그 리조트는 18세 이상의 손님들만을 위한 것입니다(배타적입니다)." }
    ]
  },
  {
    id: "L2-295",
    word: "flexible",
    meaning: "유연한, 융통성 있는",
    examples: [
      { en: "Our work hours are very flexible.", kr: "우리의 근무 시간은 매우 유연합니다." },
      { en: "You need a flexible mind to solve this puzzle.", kr: "이 퍼즐을 풀기 위해서는 융통성 있는 사고가 필요합니다." }
    ]
  },
  {
    id: "L2-296",
    word: "fundamentally",
    meaning: "근본적으로",
    examples: [
      { en: "The two sides are fundamentally opposed on the issue.", kr: "양측은 그 문제에 대해 근본적으로 반대합니다." },
      { en: "His view of the world has fundamentally changed.", kr: "세상에 대한 그의 견해가 근본적으로 바뀌었습니다." }
    ]
  },
  {
    id: "L2-297",
    word: "guarantee",
    meaning: "보장하다, 보증",
    examples: [
      { en: "The company guarantees to deliver within 24 hours.", kr: "그 회사는 24시간 이내에 배달할 것을 보장합니다." },
      { en: "The product comes with a five-year guarantee.", kr: "그 제품은 5년 보증이 함께 제공됩니다." }
    ]
  },
  {
    id: "L2-298",
    word: "immune",
    meaning: "면역이 된, 면제되는",
    examples: [
      { en: "She is immune to that particular disease.", kr: "그녀는 그 특정 질병에 면역이 되었습니다." },
      { en: "Diplomats are immune from local laws.", kr: "외교관들은 현지 법률로부터 면제됩니다." }
    ]
  },
  {
    id: "L2-299",
    word: "index",
    meaning: "지수, 색인",
    examples: [
      { en: "The stock market index rose sharply today.", kr: "오늘 주식 시장 지수가 급격히 상승했습니다." },
      { en: "Check the index at the back of the book for the topic.", kr: "그 주제를 위해 책 뒤편의 색인을 확인하세요." }
    ]
  },
  {
    id: "L2-300",
    word: "integrate",
    meaning: "통합하다, 합치다",
    examples: [
      { en: "The goal is to integrate all departments into one team.", kr: "목표는 모든 부서를 하나의 팀으로 통합하는 것입니다." },
      { en: "The device can integrate with any operating system.", kr: "그 장치는 어떤 운영 체제와도 통합될 수 있습니다." }
    ]
  }
];

const wordsLevel2_Part4 = [
  {
    id: "L2-301",
    word: "intervene",
    meaning: "개입하다, 중재하다",
    examples: [
      { en: "The police had to intervene to stop the fight.", kr: "경찰은 싸움을 멈추기 위해 개입해야 했습니다." },
      { en: "She decided not to intervene in her children's argument.", kr: "그녀는 아이들의 논쟁에 중재하지 않기로 결정했습니다." }
    ]
  },
  {
    id: "L2-302",
    word: "isolate",
    meaning: "고립시키다, 분리하다",
    examples: [
      { en: "Patients with the virus are isolated from others.", kr: "바이러스 환자들은 다른 사람들로부터 고립됩니다." },
      { en: "The research aims to isolate the cause of the disease.", kr: "그 연구는 질병의 원인을 분리하는 것을 목표로 합니다." }
    ]
  },
  {
    id: "L2-303",
    word: "likewise",
    meaning: "마찬가지로, 또한",
    examples: [
      { en: "The North Coast is beautiful; likewise, the South Coast has stunning scenery.", kr: "북쪽 해안은 아름답습니다. 마찬가지로, 남쪽 해안도 멋진 풍경을 가지고 있습니다." },
      { en: "He apologized to me, and I did likewise to him.", kr: "그는 나에게 사과했고, 나도 그에게 또한 사과했습니다." }
    ]
  },
  {
    id: "L2-304",
    word: "marginal",
    meaning: "미미한, 한계의",
    examples: [
      { en: "The differences between the two products are only marginal.", kr: "두 제품 간의 차이는 단지 미미합니다." },
      { en: "They live on the marginal land near the desert.", kr: "그들은 사막 근처의 한계적인 땅에서 살고 있습니다." }
    ]
  },
  {
    id: "L2-305",
    word: "maximize",
    meaning: "극대화하다",
    examples: [
      { en: "We need to maximize our profits this quarter.", kr: "우리는 이번 분기에 수익을 극대화해야 합니다." },
      { en: "The system is designed to maximize energy efficiency.", kr: "그 시스템은 에너지 효율성을 극대화하도록 설계되었습니다." }
    ]
  },
  {
    id: "L2-306",
    word: "minimum",
    meaning: "최소한의, 최소",
    examples: [
      { en: "The minimum age for this job is 18.", kr: "이 일자리의 최소 연령은 18세입니다." },
      { en: "You should spend a minimum of two hours studying.", kr: "당신은 최소한 두 시간은 공부해야 합니다." }
    ]
  },
  {
    id: "L2-307",
    word: "neglect",
    meaning: "방치하다, 소홀히 하다",
    examples: [
      { en: "He neglected his duties and was fired.", kr: "그는 자신의 임무를 소홀히 하여 해고되었습니다." },
      { en: "The garden was overgrown and showed signs of neglect.", kr: "정원은 무성했고 방치된 징후를 보였습니다." }
    ]
  },
  {
    id: "L2-308",
    word: "notion",
    meaning: "개념, 생각",
    examples: [
      { en: "She rejected the notion that money brings happiness.", kr: "그녀는 돈이 행복을 가져다준다는 개념을 거부했습니다." },
      { en: "I had a sudden notion to travel the world.", kr: "나는 갑자기 세계를 여행하겠다는 생각이 들었습니다." }
    ]
  },
  {
    id: "L2-309",
    word: "ongoing",
    meaning: "진행 중인",
    examples: [
      { en: "The security breach is part of an ongoing investigation.", kr: "그 보안 침해는 진행 중인 조사의 일부입니다." },
      { en: "We are monitoring the ongoing development of the project.", kr: "우리는 프로젝트의 진행 중인 개발을 모니터링하고 있습니다." }
    ]
  },
  {
    id: "L2-310",
    word: "oversee",
    meaning: "감독하다, 관리하다",
    examples: [
      { en: "A manager was hired to oversee the daily operations.", kr: "매일의 운영을 감독하기 위해 관리자가 고용되었습니다." },
      { en: "He oversees the production of over 50 products.", kr: "그는 50개가 넘는 제품의 생산을 관리합니다." }
    ]
  },
  {
    id: "L2-311",
    word: "participate",
    meaning: "참여하다",
    examples: [
      { en: "Everyone is encouraged to participate in the discussion.", kr: "모두가 토론에 참여하도록 권장됩니다." },
      { en: "She participated in a charity run last year.", kr: "그녀는 작년에 자선 달리기 행사에 참여했습니다." }
    ]
  },
  {
    id: "L2-312",
    word: "periodical",
    meaning: "정기 간행물, 주기적인",
    examples: [
      { en: "The library subscribes to many academic periodicals.", kr: "그 도서관은 많은 학술 정기 간행물을 구독합니다." },
      { en: "He receives periodical updates on the market trends.", kr: "그는 시장 동향에 대한 주기적인 업데이트를 받습니다." }
    ]
  },
  {
    id: "L2-313",
    word: "persuade",
    meaning: "설득하다",
    examples: [
      { en: "Can you persuade him to change his mind?", kr: "당신은 그가 마음을 바꾸도록 설득할 수 있습니까?" },
      { en: "She tried to persuade the jury of his innocence.", kr: "그녀는 배심원단에게 그의 무죄를 설득하려고 노력했습니다." }
    ]
  },
  {
    id: "L2-314",
    word: "precede",
    meaning: "선행하다, 앞서다",
    examples: [
      { en: "The discovery of gravity was preceded by years of study.", kr: "중력의 발견은 수년간의 연구에 선행되었습니다." },
      { en: "A warning light precedes a major system failure.", kr: "경고등은 주요 시스템 오류에 앞서 나타납니다." }
    ]
  },
  {
    id: "L2-315",
    word: "predominantly",
    meaning: "주로, 대부분",
    examples: [
      { en: "The population of the town is predominantly young.", kr: "그 마을의 인구는 주로 젊습니다." },
      { en: "The team is predominantly composed of software engineers.", kr: "그 팀은 대부분 소프트웨어 엔지니어들로 구성되어 있습니다." }
    ]
  },
  {
    id: "L2-316",
    word: "presume",
    meaning: "추정하다, 가정하다",
    examples: [
      { en: "I presume you are here for the meeting.", kr: "당신이 회의 때문에 여기에 왔다고 추정합니다." },
      { en: "Do not presume to tell me what to do.", kr: "나에게 무엇을 해야 할지 말하려고 가정하지 마세요(감히 ~하다)." }
    ]
  },
  {
    id: "L2-317",
    word: "prioritize",
    meaning: "우선순위를 정하다",
    examples: [
      { en: "You need to prioritize your tasks for the day.", kr: "당신은 오늘 해야 할 일들의 우선순위를 정해야 합니다." },
      { en: "The company will prioritize customer service.", kr: "그 회사는 고객 서비스를 우선순위로 둘 것입니다." }
    ]
  },
  {
    id: "L2-318",
    word: "protocol",
    meaning: "규약, 의정서",
    examples: [
      { en: "The diplomats followed the strict diplomatic protocol.", kr: "외교관들은 엄격한 외교 규약을 따랐습니다." },
      { en: "All data transfers must adhere to the security protocol.", kr: "모든 데이터 전송은 보안 규약을 준수해야 합니다." }
    ]
  },
  {
    id: "L2-319",
    word: "rational",
    meaning: "합리적인, 이성적인",
    examples: [
      { en: "We need to make a rational decision based on facts.", kr: "우리는 사실에 근거하여 합리적인 결정을 내려야 합니다." },
      { en: "Humans are generally considered rational beings.", kr: "인간은 일반적으로 이성적인 존재로 간주됩니다." }
    ]
  },
  {
    id: "L2-320",
    word: "recover",
    meaning: "회복하다, 되찾다",
    examples: [
      { en: "It took him months to fully recover from the surgery.", kr: "그가 수술에서 완전히 회복하는 데 몇 달이 걸렸습니다." },
      { en: "The police managed to recover the stolen paintings.", kr: "경찰은 도난당한 그림들을 되찾는 데 성공했습니다." }
    ]
  },
  {
    id: "L2-321",
    word: "refine",
    meaning: "정제하다, 개선하다",
    examples: [
      { en: "We need to refine our search method.", kr: "우리는 우리의 검색 방법을 개선해야 합니다." },
      { en: "The oil is refined before it can be used.", kr: "그 기름은 사용되기 전에 정제됩니다." }
    ]
  },
  {
    id: "L2-322",
    word: "regulate",
    meaning: "규제하다, 조절하다",
    examples: [
      { en: "The agency regulates the safety of food and drugs.", kr: "그 기관은 식품과 약품의 안전을 규제합니다." },
      { en: "A thermostat regulates the temperature.", kr: "온도 조절기가 온도를 조절합니다." }
    ]
  },
  {
    id: "L2-323",
    word: "reinforce",
    meaning: "강화하다, 보강하다",
    examples: [
      { en: "The army sent more troops to reinforce their position.", kr: "군은 그들의 위치를 강화하기 위해 더 많은 병력을 보냈습니다." },
      { en: "Positive feedback helps to reinforce good behavior.", kr: "긍정적인 피드백은 좋은 행동을 보강하는 데 도움이 됩니다." }
    ]
  },
  {
    id: "L2-324",
    word: "reject",
    meaning: "거절하다, 거부하다",
    examples: [
      { en: "The committee decided to reject the proposal.", kr: "위원회는 그 제안을 거절하기로 결정했습니다." },
      { en: "The body might reject the new organ.", kr: "몸은 새로운 장기를 거부할 수도 있습니다." }
    ]
  },
  {
    id: "L2-325",
    word: "resolve",
    meaning: "해결하다, 결심하다",
    examples: [
      { en: "We hope to resolve the conflict peacefully.", kr: "우리는 그 갈등을 평화롭게 해결하기를 바랍니다." },
      { en: "She resolved to quit smoking immediately.", kr: "그녀는 즉시 금연하기로 결심했습니다." }
    ]
  },
  {
    id: "L2-326",
    word: "retain",
    meaning: "유지하다, 보유하다",
    examples: [
      { en: "She has managed to retain her sense of humor.", kr: "그녀는 유머 감각을 유지하는 데 성공했습니다." },
      { en: "The soil can retain a lot of water.", kr: "그 흙은 많은 물을 보유할 수 있습니다." }
    ]
  },
  {
    id: "L2-327",
    word: "reverse",
    meaning: "뒤집다, 반대의",
    examples: [
      { en: "The company decided to reverse its earlier decision.", kr: "그 회사는 이전의 결정을 뒤집기로 결정했습니다." },
      { en: "She drove the car in reverse out of the garage.", kr: "그녀는 차를 후진으로 차고에서 운전했습니다." }
    ]
  },
  {
    id: "L2-328",
    word: "sequence",
    meaning: "순서, 연속",
    examples: [
      { en: "The DNA sequence was analyzed by the scientists.", kr: "DNA 순서가 과학자들에 의해 분석되었습니다." },
      { en: "The events occurred in a rapid sequence.", kr: "그 사건들은 빠른 연속으로 발생했습니다." }
    ]
  },
  {
    id: "L2-329",
    word: "shrink",
    meaning: "줄어들다, 축소되다",
    examples: [
      { en: "The sweater shrank when I washed it in hot water.", kr: "그 스웨터는 뜨거운 물에 세탁했을 때 줄어들었습니다." },
      { en: "The company's profits began to shrink.", kr: "그 회사의 이익이 축소되기 시작했습니다." }
    ]
  },
  {
    id: "L2-330",
    word: "sphere",
    meaning: "구, 영역",
    examples: [
      { en: "A basketball is a good example of a sphere.", kr: "농구공은 구의 좋은 예입니다." },
      { en: "His influence extends beyond the political sphere.", kr: "그의 영향력은 정치 영역을 넘어 확장됩니다." }
    ]
  },
  {
    id: "L2-331",
    word: "stabilize",
    meaning: "안정시키다",
    examples: [
      { en: "The government took measures to stabilize the currency.", kr: "정부는 통화를 안정시키기 위한 조치를 취했습니다." },
      { en: "His condition has stabilized after the operation.", kr: "그의 상태는 수술 후 안정되었습니다." }
    ]
  },
  {
    id: "L2-332",
    word: "subsequent",
    meaning: "후속의, 그 다음의",
    examples: [
      { en: "Subsequent events proved his theory correct.", kr: "그 다음의 사건들이 그의 이론이 옳았음을 증명했습니다." },
      { en: "The initial excitement faded in the subsequent weeks.", kr: "초기 흥분은 후속 몇 주 동안 사라졌습니다." }
    ]
  },
  {
    id: "L2-333",
    word: "substitute",
    meaning: "대체하다, 대용품",
    examples: [
      { en: "You can substitute chicken for beef in this recipe.", kr: "이 레시피에서 쇠고기 대신 닭고기를 대체할 수 있습니다." },
      { en: "The teacher used a temporary substitute for the class.", kr: "선생님은 그 수업을 위해 임시 대용 교사를 사용했습니다." }
    ]
  },
  {
    id: "L2-334",
    word: "suffice",
    meaning: "충분하다",
    examples: [
      { en: "A small note should suffice to explain the delay.", kr: "작은 메모가 지연을 설명하는 데 충분할 것입니다." },
      { en: "Two large pizzas should suffice for the party.", kr: "두 개의 큰 피자가 파티에 충분할 것입니다." }
    ]
  },
  {
    id: "L2-335",
    word: "summary",
    meaning: "요약",
    examples: [
      { en: "The report provided a summary of the main findings.", kr: "그 보고서는 주요 발견 사항에 대한 요약을 제공했습니다." },
      { en: "Please give me a quick summary of the meeting.", kr: "회의에 대한 간단한 요약을 저에게 주세요." }
    ]
  },
  {
    id: "L2-336",
    word: "suspend",
    meaning: "중단하다, 매달다",
    examples: [
      { en: "The game was suspended due to heavy rain.", kr: "그 경기는 폭우로 인해 중단되었습니다." },
      { en: "A heavy chandelier was suspended from the ceiling.", kr: "무거운 샹들리에가 천장에 매달려 있었습니다." }
    ]
  },
  {
    id: "L2-337",
    word: "target",
    meaning: "목표, 목표로 하다",
    examples: [
      { en: "Our target market is young adults.", kr: "우리의 목표 시장은 젊은 성인들입니다." },
      { en: "The advertisement is targeted at health-conscious consumers.", kr: "그 광고는 건강을 의식하는 소비자들을 목표로 합니다." }
    ]
  },
  {
    id: "L2-338",
    word: "terminate",
    meaning: "종료하다, 끝내다",
    examples: [
      { en: "The company decided to terminate his employment.", kr: "회사는 그의 고용을 종료하기로 결정했습니다." },
      { en: "The train terminates at the next station.", kr: "그 기차는 다음 역에서 끝납니다(종료됩니다)." }
    ]
  },
  {
    id: "L2-339",
    word: "theory",
    meaning: "이론",
    examples: [
      { en: "He proposed a new theory of economic growth.", kr: "그는 경제 성장의 새로운 이론을 제안했습니다." },
      { en: "In theory, this plan should work perfectly.", kr: "이론상으로는 이 계획이 완벽하게 작동해야 합니다." }
    ]
  },
  {
    id: "L2-340",
    word: "undergo",
    meaning: "겪다, 경험하다",
    examples: [
      { en: "The patient will undergo a series of tests.", kr: "그 환자는 일련의 검사를 겪을 것입니다(받을 것입니다)." },
      { en: "The product has undergone several design changes.", kr: "그 제품은 몇 가지 디자인 변경을 겪었습니다." }
    ]
  },
  {
    id: "L2-341",
    word: "underlie",
    meaning: "기저에 있다, 근본이 되다",
    examples: [
      { en: "The document is based on a set of principles that underlie the company's philosophy.", kr: "그 문서는 회사의 철학의 근본이 되는 일련의 원칙들에 기반합니다." },
      { en: "What are the core issues that underlie this dispute?", kr: "이 분쟁의 기저에 있는 핵심 문제들은 무엇입니까?" }
    ]
  },
  {
    id: "L2-342",
    word: "unique",
    meaning: "독특한, 유일한",
    examples: [
      { en: "Each person has a unique set of fingerprints.", kr: "각 사람은 독특한 지문을 가지고 있습니다." },
      { en: "The museum owns a collection of unique historical artifacts.", kr: "그 박물관은 유일한 역사적 유물 컬렉션을 소유하고 있습니다." }
    ]
  },
  {
    id: "L2-343",
    word: "validate",
    meaning: "입증하다, 확인하다",
    examples: [
      { en: "The research findings validate her hypothesis.", kr: "그 연구 결과는 그녀의 가설을 입증합니다." },
      { en: "You need to validate your ticket before boarding the train.", kr: "기차에 탑승하기 전에 티켓을 확인해야 합니다." }
    ]
  },
  {
    id: "L2-344",
    word: "volume",
    meaning: "용량, 부피",
    examples: [
      { en: "The volume of the box is 10 cubic meters.", kr: "그 상자의 부피는 10세제곱미터입니다." },
      { en: "Please turn down the volume of the television.", kr: "텔레비전의 볼륨(음량)을 낮춰 주세요." }
    ]
  },
  {
    id: "L2-345",
    word: "warrant",
    meaning: "정당화하다, 영장",
    examples: [
      { en: "The situation did not warrant such extreme measures.", kr: "그 상황은 그러한 극단적인 조치를 정당화하지 않았습니다." },
      { en: "The police obtained a search warrant for the house.", kr: "경찰은 그 집에 대한 수색 영장을 얻었습니다." }
    ]
  },
  {
    id: "L2-346",
    word: "abstract",
    meaning: "추상적인, 개요",
    examples: [
      { en: "The artist prefers abstract rather than realistic painting.", kr: "그 예술가는 사실적인 그림보다는 추상적인 것을 선호합니다." },
      { en: "Please provide a short abstract of your report.", kr: "당신의 보고서에 대한 짧은 개요를 제공해 주세요." }
    ]
  },
  {
    id: "L2-347",
    word: "access",
    meaning: "접근, 접근하다",
    examples: [
      { en: "Only authorized personnel have access to the server.", kr: "인가된 직원만이 서버에 접근할 수 있습니다." },
      { en: "How can I access my email account?", kr: "제 이메일 계정에 어떻게 접근할 수 있습니까?" }
    ]
  },
  {
    id: "L2-348",
    word: "accommodate",
    meaning: "수용하다, 편의를 제공하다",
    examples: [
      { en: "The hotel can accommodate up to 300 guests.", kr: "그 호텔은 최대 300명의 손님을 수용할 수 있습니다." },
      { en: "We will try to accommodate your request.", kr: "우리는 당신의 요청에 편의를 제공하려고 노력할 것입니다." }
    ]
  },
  {
    id: "L2-349",
    word: "alter",
    meaning: "변경하다, 바꾸다",
    examples: [
      { en: "The design was altered to fit the client's needs.", kr: "그 디자인은 고객의 요구에 맞게 변경되었습니다." },
      { en: "She decided to alter her lifestyle for health reasons.", kr: "그녀는 건강상의 이유로 자신의 생활 방식을 바꾸기로 결정했습니다." }
    ]
  },
  {
    id: "L2-350",
    word: "analogy",
    meaning: "비유, 유사점",
    examples: [
      { en: "He drew an analogy between a computer and a brain.", kr: "그는 컴퓨터와 뇌 사이의 비유를 들었습니다." },
      { en: "The teacher explained the concept using an analogy.", kr: "선생님은 비유를 사용하여 개념을 설명했습니다." }
    ]
  },
  {
    id: "L2-351",
    word: "aware",
    meaning: "알고 있는, 자각하는",
    examples: [
      { en: "Are you aware of the risks involved?", kr: "관련된 위험들을 알고 계십니까?" },
      { en: "He was fully aware that he had made a mistake.", kr: "그는 자신이 실수를 저질렀다는 것을 완전히 자각하고 있었습니다." }
    ]
  },
  {
    id: "L2-352",
    word: "commence",
    meaning: "시작하다",
    examples: [
      { en: "The trial is due to commence next week.", kr: "그 재판은 다음 주에 시작될 예정입니다." },
      { en: "We will commence with a brief introduction.", kr: "우리는 짧은 소개로 시작할 것입니다." }
    ]
  },
  {
    id: "L2-353",
    word: "constitute",
    meaning: "구성하다, ~이 되다",
    examples: [
      { en: "Women constitute the majority of the workforce.", kr: "여성들이 노동 인구의 다수를 구성합니다." },
      { en: "His refusal to cooperate constitutes a breach of contract.", kr: "그의 협조 거부는 계약 위반이 됩니다." }
    ]
  },
  {
    id: "L2-354",
    word: "context",
    meaning: "맥락, 상황",
    examples: [
      { en: "You must consider the historical context of the event.", kr: "당신은 그 사건의 역사적 맥락을 고려해야 합니다." },
      { en: "The quote was taken out of context.", kr: "그 인용문은 맥락에서 벗어나 사용되었습니다." }
    ]
  },
  {
    id: "L2-355",
    word: "contract",
    meaning: "계약, 수축하다",
    examples: [
      { en: "They signed a contract for a five-year lease.", kr: "그들은 5년 임대 계약에 서명했습니다." },
      { en: "The metal contracts as it cools down.", kr: "그 금속은 식으면서 수축합니다." }
    ]
  },
  {
    id: "L2-356",
    word: "create",
    meaning: "창조하다, 만들다",
    examples: [
      { en: "She created a stunning piece of artwork.", kr: "그녀는 놀라운 예술 작품을 창조했습니다." },
      { en: "The new factory will create hundreds of jobs.", kr: "새 공장은 수백 개의 일자리를 만들 것입니다." }
    ]
  },
  {
    id: "L2-357",
    word: "data",
    meaning: "데이터, 자료",
    examples: [
      { en: "We collected data from over 1,000 participants.", kr: "우리는 1,000명이 넘는 참가자들로부터 자료를 수집했습니다." },
      { en: "The data shows a clear trend of increasing temperatures.", kr: "그 데이터는 기온 상승의 명확한 추세를 보여줍니다." }
    ]
  },
  {
    id: "L2-358",
    word: "define",
    meaning: "정의하다, 규정하다",
    examples: [
      { en: "How would you define the term 'sustainability'?", kr: "당신은 '지속 가능성'이라는 용어를 어떻게 정의하겠습니까?" },
      { en: "The new law defines the boundaries of the park.", kr: "새로운 법은 공원의 경계를 규정합니다." }
    ]
  },
  {
    id: "L2-359",
    word: "derive",
    meaning: "끌어내다, 유래하다",
    examples: [
      { en: "We derive great pleasure from our garden.", kr: "우리는 우리의 정원에서 큰 즐거움을 끌어냅니다." },
      { en: "The word 'democracy' is derived from Greek.", kr: "단어 '민주주의'는 그리스어에서 유래했습니다." }
    ]
  },
  {
    id: "L2-360",
    word: "distribute",
    meaning: "배포하다, 분배하다",
    examples: [
      { en: "The company will distribute the product worldwide.", kr: "그 회사는 전 세계적으로 제품을 배포할 것입니다." },
      { en: "The profits were distributed evenly among the partners.", kr: "이익은 파트너들 사이에 균등하게 분배되었습니다." }
    ]
  },
  {
    id: "L2-361",
    word: "economy",
    meaning: "경제, 절약",
    examples: [
      { en: "The national economy is showing signs of recovery.", kr: "국민 경제는 회복의 징후를 보이고 있습니다." },
      { en: "She practices economy by buying goods in bulk.", kr: "그녀는 대량으로 물건을 구매함으로써 절약을 실천합니다." }
    ]
  },
  {
    id: "L2-362",
    word: "equate",
    meaning: "동일시하다",
    examples: [
      { en: "You shouldn't equate money with happiness.", kr: "당신은 돈과 행복을 동일시해서는 안 됩니다." },
      { en: "Success is often equated with high earnings.", kr: "성공은 종종 높은 수입과 동일시됩니다." }
    ]
  },
  {
    id: "L2-363",
    word: "establish",
    meaning: "설립하다, 확립하다",
    examples: [
      { en: "The university was established in 1905.", kr: "그 대학은 1905년에 설립되었습니다." },
      { en: "We need to establish clear rules for the office.", kr: "우리는 사무실에 대한 명확한 규칙을 확립해야 합니다." }
    ]
  },
  {
    id: "L2-364",
    word: "estimate",
    meaning: "추정하다, 견적",
    examples: [
      { en: "We estimate the cost of the project to be $50,000.", kr: "우리는 그 프로젝트의 비용을 50,000달러로 추정합니다." },
      { en: "The mechanic gave me a rough estimate for the repairs.", kr: "정비공이 수리에 대한 대략적인 견적을 저에게 주었습니다." }
    ]
  },
  {
    id: "L2-365",
    word: "evident",
    meaning: "분명한, 명백한",
    examples: [
      { en: "It was evident that she was unhappy.", kr: "그녀가 불행하다는 것은 분명했습니다." },
      { en: "His talent became evident early in his career.", kr: "그의 재능은 경력 초기에 명백해졌습니다." }
    ]
  },
  {
    id: "L2-366",
    word: "export",
    meaning: "수출하다, 수출품",
    examples: [
      { en: "The country exports mainly machinery and vehicles.", kr: "그 나라는 주로 기계류와 차량을 수출합니다." },
      { en: "Coffee is a major export of this region.", kr: "커피는 이 지역의 주요 수출품입니다." }
    ]
  },
  {
    id: "L2-367",
    word: "factor",
    meaning: "요인, 요소",
    examples: [
      { en: "Patience is an important factor in success.", kr: "인내심은 성공의 중요한 요인입니다." },
      { en: "We must consider all the relevant factors before deciding.", kr: "우리는 결정하기 전에 모든 관련 요소들을 고려해야 합니다." }
    ]
  },
  {
    id: "L2-368",
    word: "finance",
    meaning: "재정, 자금을 조달하다",
    examples: [
      { en: "The project needs external finance to proceed.", kr: "그 프로젝트는 진행하기 위해 외부 재정이 필요합니다." },
      { en: "The company financed the new factory with a bank loan.", kr: "그 회사는 은행 대출로 새 공장에 자금을 조달했습니다." }
    ]
  },
  {
    id: "L2-369",
    word: "formula",
    meaning: "공식, 제조법",
    examples: [
      { en: "The scientist devised a new mathematical formula.", kr: "그 과학자는 새로운 수학 공식을 고안했습니다." },
      { en: "The secret formula for the drink is highly guarded.", kr: "그 음료의 비밀 제조법은 엄격하게 보호됩니다." }
    ]
  },
  {
    id: "L2-370",
    word: "function",
    meaning: "기능, 작용하다",
    examples: [
      { en: "The main function of the heart is to pump blood.", kr: "심장의 주요 기능은 피를 펌프질하는 것입니다." },
      { en: "The new software is functioning well.", kr: "새 소프트웨어는 잘 작용하고 있습니다." }
    ]
  },
  {
    id: "L2-371",
    word: "identify",
    meaning: "확인하다, 식별하다",
    examples: [
      { en: "Can you identify the person in this photograph?", kr: "이 사진 속의 사람을 식별할 수 있습니까?" },
      { en: "The police identified the victim by his fingerprints.", kr: "경찰은 그의 지문으로 피해자를 확인했습니다." }
    ]
  },
  {
    id: "L2-372",
    word: "income",
    meaning: "소득, 수입",
    examples: [
      { en: "He has a steady income from his job.", kr: "그는 그의 직업에서 꾸준한 소득을 얻습니다." },
      { en: "The charity relies on donations for its income.", kr: "그 자선 단체는 수입을 위해 기부에 의존합니다." }
    ]
  },
  {
    id: "L2-373",
    word: "indicate",
    meaning: "나타내다, 지시하다",
    examples: [
      { en: "The survey results indicate a rise in consumer confidence.", kr: "그 설문조사 결과는 소비자 신뢰의 상승을 나타냅니다." },
      { en: "The sign indicates the way to the exit.", kr: "그 표지판은 출구로 가는 길을 지시합니다." }
    ]
  },
  {
    id: "L2-374",
    word: "individual",
    meaning: "개인의, 개체",
    examples: [
      { en: "Each individual is responsible for their own actions.", kr: "각 개인은 자신의 행동에 책임이 있습니다." },
      { en: "The test measures the development of each individual child.", kr: "그 테스트는 각 개별 아동의 발달을 측정합니다." }
    ]
  },
  {
    id: "L2-375",
    word: "interpret",
    meaning: "해석하다, 통역하다",
    examples: [
      { en: "How should we interpret this data?", kr: "우리는 이 데이터를 어떻게 해석해야 합니까?" },
      { en: "She was asked to interpret for the diplomat.", kr: "그녀는 외교관을 위해 통역해 달라고 요청받았습니다." }
    ]
  },
  {
    id: "L2-376",
    word: "involve",
    meaning: "수반하다, 관련시키다",
    examples: [
      { en: "The job involves a lot of travelling.", kr: "그 일은 많은 여행을 수반합니다." },
      { en: "We need to involve the local community in the decision-making.", kr: "우리는 의사 결정에 지역 사회를 관련시킬 필요가 있습니다." }
    ]
  },
  {
    id: "L2-377",
    word: "issue",
    meaning: "문제, 발행하다",
    examples: [
      { en: "The company is facing a serious financial issue.", kr: "그 회사는 심각한 재정 문제에 직면하고 있습니다." },
      { en: "The bank will issue a new type of credit card.", kr: "그 은행은 새로운 종류의 신용카드를 발행할 것입니다." }
    ]
  },
  {
    id: "L2-378",
    word: "labor",
    meaning: "노동, 노력",
    examples: [
      { en: "The project requires intensive physical labor.", kr: "그 프로젝트는 집중적인 육체 노동을 필요로 합니다." },
      { en: "Years of hard labor finally paid off.", kr: "수년간의 힘든 노력이 마침내 결실을 맺었습니다." }
    ]
  },
  {
    id: "L2-379",
    word: "legal",
    meaning: "법적인, 합법적인",
    examples: [
      { en: "You should seek legal advice before signing the document.", kr: "문서에 서명하기 전에 법적인 조언을 구해야 합니다." },
      { en: "It is legal to park here for one hour.", kr: "여기에 한 시간 동안 주차하는 것은 합법적입니다." }
    ]
  },
  {
    id: "L2-380",
    word: "legislate",
    meaning: "입법하다",
    examples: [
      { en: "The parliament can legislate on matters of national security.", kr: "의회는 국가 안보 문제에 대해 입법할 수 있습니다." },
      { en: "The new law legislates against discrimination.", kr: "그 새로운 법은 차별에 반대하는 법을 제정합니다." }
    ]
  },
  {
    id: "L2-381",
    word: "major",
    meaning: "주요한, 전공",
    examples: [
      { en: "The company announced a major change in its management.", kr: "그 회사는 경영진에 주요한 변화를 발표했습니다." },
      { en: "My major in college was economics.", kr: "대학에서 저의 전공은 경제학이었습니다." }
    ]
  },
  {
    id: "L2-382",
    word: "method",
    meaning: "방법, 방식",
    examples: [
      { en: "We need a more efficient method of communication.", kr: "우리는 더 효율적인 통신 방법이 필요합니다." },
      { en: "This new method reduces the processing time by half.", kr: "이 새로운 방식은 처리 시간을 절반으로 줄여줍니다." }
    ]
  },
  {
    id: "L2-383",
    word: "occur",
    meaning: "발생하다, 떠오르다",
    examples: [
      { en: "The accident occurred late at night.", kr: "그 사고는 밤늦게 발생했습니다." },
      { en: "It did not occur to me that he might be lying.", kr: "그가 거짓말을 하고 있을지도 모른다는 생각이 나에게 떠오르지 않았습니다." }
    ]
  },
  {
    id: "L2-384",
    word: "percent",
    meaning: "퍼센트, 백분율",
    examples: [
      { en: "Only ten percent of the applicants were accepted.", kr: "지원자 중 오직 10퍼센트만이 합격했습니다." },
      { en: "The price increased by 5 percent last month.", kr: "지난달에 가격이 5퍼센트 상승했습니다." }
    ]
  },
  {
    id: "L2-385",
    word: "period",
    meaning: "기간, 시기",
    examples: [
      { en: "The project will be completed in a short period of time.", kr: "그 프로젝트는 짧은 기간 안에 완료될 것입니다." },
      { en: "The Victorian period was marked by rapid industrialization.", kr: "빅토리아 시대는 급속한 산업화로 특징지어졌습니다." }
    ]
  },
  {
    id: "L2-386",
    word: "policy",
    meaning: "정책, 방침",
    examples: [
      { en: "The government announced its new economic policy.", kr: "정부는 새로운 경제 정책을 발표했습니다." },
      { en: "It is company policy not to give refunds.", kr: "환불을 해주지 않는 것이 회사 방침입니다." }
    ]
  },
  {
    id: "L2-387",
    word: "principle",
    meaning: "원칙, 원리",
    examples: [
      { en: "The decision was based on sound moral principles.", kr: "그 결정은 건전한 도덕적 원칙들에 기반했습니다." },
      { en: "The machine works on the principle of air pressure.", kr: "그 기계는 공기압의 원리로 작동합니다." }
    ]
  },
  {
    id: "L2-388",
    word: "proceed",
    meaning: "진행하다, 나아가다",
    examples: [
      { en: "We can now proceed with the main part of the meeting.", kr: "이제 우리는 회의의 주요 부분으로 진행할 수 있습니다." },
      { en: "The flight will proceed as scheduled despite the fog.", kr: "그 비행은 안개에도 불구하고 예정대로 나아갈 것입니다." }
    ]
  },
  {
    id: "L2-389",
    word: "process",
    meaning: "과정, 처리하다",
    examples: [
      { en: "The application process takes about two weeks.", kr: "지원 과정은 약 2주가 걸립니다." },
      { en: "The computer can process large amounts of data quickly.", kr: "그 컴퓨터는 많은 양의 데이터를 빠르게 처리할 수 있습니다." }
    ]
  },
  {
    id: "L2-390",
    word: "require",
    meaning: "요구하다, 필요로 하다",
    examples: [
      { en: "This task will require careful attention to detail.", kr: "이 과제는 세부 사항에 대한 주의 깊은 집중을 필요로 할 것입니다." },
      { en: "The law requires all cars to have insurance.", kr: "그 법은 모든 자동차가 보험을 들 것을 요구합니다." }
    ]
  },
  {
    id: "L2-391",
    word: "research",
    meaning: "연구, 연구하다",
    examples: [
      { en: "The scientist dedicated his life to cancer research.", kr: "그 과학자는 암 연구에 자신의 삶을 헌신했습니다." },
      { en: "You should research the topic thoroughly before writing the essay.", kr: "에세이를 쓰기 전에 그 주제를 철저하게 연구해야 합니다." }
    ]
  },
  {
    id: "L2-392",
    word: "respond",
    meaning: "응답하다, 반응하다",
    examples: [
      { en: "Please respond to the invitation by Friday.", kr: "금요일까지 초대에 응답해 주세요." },
      { en: "The patient did not respond well to the new medication.", kr: "그 환자는 새 약물에 잘 반응하지 않았습니다." }
    ]
  },
  {
    id: "L2-393",
    word: "role",
    meaning: "역할",
    examples: [
      { en: "The government plays an important role in the economy.", kr: "정부는 경제에서 중요한 역할을 합니다." },
      { en: "She played the leading role in the school play.", kr: "그녀는 학교 연극에서 주연 역할을 맡았습니다." }
    ]
  },
  {
    id: "L2-394",
    word: "section",
    meaning: "부분, 구획",
    examples: [
      { en: "Read the third section of the textbook for homework.", kr: "숙제로 교과서의 세 번째 부분을 읽으세요." },
      { en: "The garden is divided into several sections.", kr: "그 정원은 여러 구획으로 나뉘어 있습니다." }
    ]
  },
  {
    id: "L2-395",
    word: "sector",
    meaning: "부문, 분야",
    examples: [
      { en: "The financial sector has seen rapid growth.", kr: "금융 부문은 급속한 성장을 보였습니다." },
      { en: "She works in the public sector.", kr: "그녀는 공공 분야에서 일합니다." }
    ]
  },
  {
    id: "L2-396",
    word: "similar",
    meaning: "유사한",
    examples: [
      { en: "Our new product is similar to our competitor's.", kr: "우리의 새 제품은 경쟁사의 것과 유사합니다." },
      { en: "They share similar interests in music and art.", kr: "그들은 음악과 예술에서 유사한 관심사를 공유합니다." }
    ]
  },
  {
    id: "L2-397",
    word: "source",
    meaning: "근원, 출처",
    examples: [
      { en: "The newspaper refused to reveal its source of information.", kr: "그 신문은 정보의 출처를 밝히기를 거부했습니다." },
      { en: "The sun is our main source of energy.", kr: "태양은 우리의 주요 에너지 근원입니다." }
    ]
  },
  {
    id: "L2-398",
    word: "structure",
    meaning: "구조, 구성하다",
    examples: [
      { en: "The building has a solid steel structure.", kr: "그 건물은 견고한 철강 구조를 가지고 있습니다." },
      { en: "The course is structured to cover 10 topics.", kr: "그 과정은 10가지 주제를 다루도록 구성되어 있습니다." }
    ]
  },
  {
    id: "L2-399",
    word: "vary",
    meaning: "다르다, 다양하다",
    examples: [
      { en: "Prices may vary depending on the location.", kr: "가격은 위치에 따라 다를 수 있습니다." },
      { en: "The colors of the leaves vary from light green to deep red.", kr: "잎의 색깔은 연한 녹색에서 짙은 빨간색까지 다양합니다." }
    ]
  },
  {
    id: "L2-400",
    word: "achieve",
    meaning: "성취하다, 달성하다",
    examples: [
      { en: "She worked hard to achieve her goal.", kr: "그녀는 자신의 목표를 성취하기 위해 열심히 일했습니다." },
      { en: "The company achieved a 15% increase in sales.", kr: "그 회사는 15%의 매출 증가를 달성했습니다." }
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

// Level 4
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
