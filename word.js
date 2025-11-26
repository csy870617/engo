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


const wordsLevel3_Part1 = [
  {
    id: "L3-001",
    word: "advocate",
    meaning: "옹호하다, 지지자",
    examples: [
      { en: "She advocates for stricter environmental laws.", kr: "그녀는 더 엄격한 환경법을 옹호합니다." },
      { en: "He is a strong advocate of free education.", kr: "그는 무상 교육의 강력한 지지자입니다." }
    ]
  },
  {
    id: "L3-002",
    word: "allocate",
    meaning: "할당하다, 배분하다",
    examples: [
      { en: "We decided to allocate more resources to the research team.", kr: "우리는 연구팀에 더 많은 자원을 할당하기로 결정했습니다." },
      { en: "Time was allocated for a Q&A session.", kr: "질의응답 세션을 위해 시간이 배분되었습니다." }
    ]
  },
  {
    id: "L3-003",
    word: "amend",
    meaning: "개정하다, 수정하다",
    examples: [
      { en: "The committee voted to amend the school policy.", kr: "위원회는 학교 정책을 개정하기 위해 투표했습니다." },
      { en: "The lawyer asked me to amend the contract slightly.", kr: "변호사는 나에게 계약을 약간 수정해 달라고 요청했습니다." }
    ]
  },
  {
    id: "L3-004",
    word: "analogy",
    meaning: "비유, 유사점",
    examples: [
      { en: "He used an analogy of a clock to explain the universe.", kr: "그는 우주를 설명하기 위해 시계의 비유를 사용했습니다." },
      { en: "The theory draws a close analogy between human and animal behavior.", kr: "그 이론은 인간과 동물 행동 사이에 밀접한 유사점을 이끌어냅니다." }
    ]
  },
  {
    id: "L3-005",
    word: "anticipate",
    meaning: "예상하다, 기대하다",
    examples: [
      { en: "We anticipate a heavy turnout for the concert.", kr: "우리는 콘서트에 많은 인파가 모일 것을 예상합니다." },
      { en: "I am anticipating a positive response from the client.", kr: "저는 고객으로부터 긍정적인 응답을 기대하고 있습니다." }
    ]
  },
  {
    id: "L3-006",
    word: "arbitrary",
    meaning: "임의적인, 독단적인",
    examples: [
      { en: "The selection process seemed entirely arbitrary.", kr: "선발 과정은 전적으로 임의적인 것처럼 보였습니다." },
      { en: "We cannot accept such an arbitrary decision.", kr: "우리는 그러한 독단적인 결정을 받아들일 수 없습니다." }
    ]
  },
  {
    id: "L3-007",
    word: "assert",
    meaning: "주장하다, 단언하다",
    examples: [
      { en: "He asserted his innocence despite the evidence.", kr: "그는 증거에도 불구하고 자신의 무죄를 주장했습니다." },
      { en: "You need to assert yourself in negotiations.", kr: "당신은 협상에서 자신을 단언해야 합니다." }
    ]
  },
  {
    id: "L3-008",
    word: "assess",
    meaning: "평가하다, 사정하다",
    examples: [
      { en: "We need to assess the damage after the storm.", kr: "우리는 폭풍 후 피해를 평가해야 합니다." },
      { en: "The teacher will assess the students' progress.", kr: "선생님은 학생들의 진도를 사정할 것입니다." }
    ]
  },
  {
    id: "L3-009",
    word: "assume",
    meaning: "추정하다, (책임을) 맡다",
    examples: [
      { en: "I assume you have read the documents.", kr: "당신이 문서들을 읽었다고 추정합니다." },
      { en: "She will assume the role of team leader next month.", kr: "그녀는 다음 달에 팀 리더 역할을 맡을 것입니다." }
    ]
  },
  {
    id: "L3-010",
    word: "attribute",
    meaning: "(~의) 탓으로 돌리다",
    examples: [
      { en: "He attributes his success to hard work and luck.", kr: "그는 자신의 성공을 근면과 운의 탓으로 돌립니다." },
      { en: "Patience is an important attribute of a good teacher.", kr: "인내는 좋은 선생님의 중요한 속성입니다." }
    ]
  },
  {
    id: "L3-011",
    word: "bias",
    meaning: "편견, 편향",
    examples: [
      { en: "The research findings showed evidence of experimental bias.", kr: "그 연구 결과는 실험 편향의 증거를 보여주었습니다." },
      { en: "We must eliminate personal bias from the review process.", kr: "우리는 검토 과정에서 개인적인 편견을 제거해야 합니다." }
    ]
  },
  {
    id: "L3-012",
    word: "cease",
    meaning: "중단하다, 멈추다",
    examples: [
      { en: "The company will cease operations in the region.", kr: "그 회사는 그 지역에서 운영을 중단할 것입니다." },
      { en: "The rain ceased shortly after we arrived.", kr: "우리가 도착한 직후 비가 멈췄습니다." }
    ]
  },
  {
    id: "L3-013",
    word: "clarify",
    meaning: "명확히 하다",
    examples: [
      { en: "Could you please clarify your last point?", kr: "마지막 요점을 명확히 해 주시겠어요?" },
      { en: "The new guidelines clarify the rules for remote work.", kr: "새로운 지침은 원격 근무 규칙을 명확히 합니다." }
    ]
  },
  {
    id: "L3-014",
    word: "compatible",
    meaning: "호환되는, 양립할 수 있는",
    examples: [
      { en: "Is this new software compatible with my old computer?", kr: "이 새 소프트웨어가 제 오래된 컴퓨터와 호환되나요?" },
      { en: "Their personalities are not compatible.", kr: "그들의 성격은 양립할 수 없습니다." }
    ]
  },
  {
    id: "L3-015",
    word: "concede",
    meaning: "인정하다, 양보하다",
    examples: [
      { en: "He finally conceded that the opposing argument was stronger.", kr: "그는 마침내 반대 주장이 더 강력하다는 것을 인정했습니다." },
      { en: "The government conceded to the protesters' demands.", kr: "정부는 시위대의 요구에 양보했습니다." }
    ]
  },
  {
    id: "L3-016",
    word: "concise",
    meaning: "간결한",
    examples: [
      { en: "Please provide a concise summary of the findings.", kr: "조사 결과에 대한 간결한 요약을 제공해 주세요." },
      { en: "The best articles are often clear and concise.", kr: "최고의 기사들은 종종 명확하고 간결합니다." }
    ]
  },
  {
    id: "L3-017",
    word: "consensus",
    meaning: "합의, 의견 일치",
    examples: [
      { en: "The committee reached a consensus after hours of discussion.", kr: "위원회는 몇 시간의 토론 끝에 합의에 도달했습니다." },
      { en: "There is no scientific consensus on the topic yet.", kr: "그 주제에 대한 과학적 의견 일치는 아직 없습니다." }
    ]
  },
  {
    id: "L3-018",
    word: "constrain",
    meaning: "제약하다, 강요하다",
    examples: [
      { en: "The lack of funds severely constrained the project.", kr: "자금 부족이 프로젝트를 심각하게 제약했습니다." },
      { en: "She felt constrained by her own high expectations.", kr: "그녀는 자신의 높은 기대치에 의해 강요받는다고 느꼈습니다." }
    ]
  },
  {
    id: "L3-019",
    word: "contrast",
    meaning: "대조, 대비",
    examples: [
      { en: "In contrast to last year, sales are up by 20%.", kr: "작년과 대조적으로, 매출이 20% 증가했습니다." },
      { en: "The photo shows a sharp contrast between light and shadow.", kr: "그 사진은 빛과 그림자 사이의 뚜렷한 대비를 보여줍니다." }
    ]
  },
  {
    id: "L3-020",
    word: "convert",
    meaning: "전환하다, 변환하다",
    examples: [
      { en: "Can you convert this file to a PDF format?", kr: "이 파일을 PDF 형식으로 변환할 수 있습니까?" },
      { en: "The old warehouse was converted into a modern loft.", kr: "그 오래된 창고는 현대적인 로프트로 개조되었습니다." }
    ]
  },
  {
    id: "L3-021",
    word: "correlation",
    meaning: "상관관계",
    examples: [
      { en: "The study found a strong correlation between exercise and health.", kr: "그 연구는 운동과 건강 사이에 강한 상관관계를 발견했습니다." },
      { en: "Correlation does not always imply causation.", kr: "상관관계가 항상 인과 관계를 의미하는 것은 아닙니다." }
    ]
  },
  {
    id: "L3-022",
    word: "crucial",
    meaning: "결정적인, 중대한",
    examples: [
      { en: "This piece of evidence is crucial to the case.", kr: "이 증거는 사건에 결정적입니다." },
      { en: "It is crucial that we act immediately.", kr: "우리가 즉시 행동하는 것이 중대합니다." }
    ]
  },
  {
    id: "L3-023",
    word: "decline",
    meaning: "감소하다, 거절하다",
    examples: [
      { en: "The population has been in steady decline since the 1990s.", kr: "인구는 1990년대 이후 꾸준히 감소하고 있습니다." },
      { en: "She politely declined the invitation to the formal event.", kr: "그녀는 공식 행사에 대한 초대를 정중하게 거절했습니다." }
    ]
  },
  {
    id: "L3-024",
    word: "deduce",
    meaning: "추론하다, 연역하다",
    examples: [
      { en: "We can deduce the answer from the facts provided.", kr: "제공된 사실들로부터 답을 추론할 수 있습니다." },
      { en: "The scientist managed to deduce the hidden pattern.", kr: "그 과학자는 숨겨진 패턴을 연역해내는 데 성공했습니다." }
    ]
  },
  {
    id: "L3-025",
    word: "define",
    meaning: "정의하다",
    examples: [
      { en: "How would you define the concept of justice?", kr: "당신은 정의의 개념을 어떻게 정의하겠습니까?" },
      { en: "The boundaries of the park are clearly defined.", kr: "공원의 경계가 명확하게 규정되어 있습니다." }
    ]
  },
  {
    id: "L3-026",
    word: "demonstrate",
    meaning: "입증하다, 보여주다",
    examples: [
      { en: "The data clearly demonstrates the success of the program.", kr: "그 자료는 프로그램의 성공을 명확하게 입증합니다." },
      { en: "He demonstrated the new software's capabilities.", kr: "그는 새 소프트웨어의 기능을 시연했습니다." }
    ]
  },
  {
    id: "L3-027",
    word: "denote",
    meaning: "나타내다, 표시하다",
    examples: [
      { en: "The color red often denotes danger or warning.", kr: "빨간색은 종종 위험이나 경고를 나타냅니다." },
      { en: "The symbol 'R' is used to denote electrical resistance.", kr: "기호 'R'은 전기 저항을 표시하는 데 사용됩니다." }
    ]
  },
  {
    id: "L3-028",
    word: "deprive",
    meaning: "빼앗다, 박탈하다",
    examples: [
      { en: "Lack of sleep can deprive you of your energy.", kr: "수면 부족은 당신의 에너지를 빼앗을 수 있습니다." },
      { en: "The court deprived the parent of custody.", kr: "법원은 그 부모에게 양육권을 박탈했습니다." }
    ]
  },
  {
    id: "L3-029",
    word: "derive",
    meaning: "얻다, 유래하다",
    examples: [
      { en: "She derives great satisfaction from her work.", kr: "그녀는 자신의 일에서 큰 만족감을 얻습니다." },
      { en: "Many customs derive from ancient traditions.", kr: "많은 관습이 고대 전통에서 유래합니다." }
    ]
  },
  {
    id: "L3-030",
    word: "dimension",
    meaning: "차원, 측면",
    examples: [
      { en: "We need to analyze the social dimension of the problem.", kr: "우리는 그 문제의 사회적 측면을 분석해야 합니다." },
      { en: "The room's dimensions are 5 meters by 4 meters.", kr: "그 방의 치수는 가로 5미터, 세로 4미터입니다." }
    ]
  },
  {
    id: "L3-031",
    word: "disclose",
    meaning: "폭로하다, 드러내다",
    examples: [
      { en: "The company refused to disclose its financial records.", kr: "그 회사는 재정 기록을 폭로하는 것을 거부했습니다." },
      { en: "The journalist promised not to disclose her source.", kr: "그 기자는 자신의 출처를 드러내지 않겠다고 약속했습니다." }
    ]
  },
  {
    id: "L3-032",
    word: "discriminate",
    meaning: "차별하다, 구별하다",
    examples: [
      { en: "It is illegal to discriminate based on age or gender.", kr: "나이나 성별을 근거로 차별하는 것은 불법입니다." },
      { en: "She can easily discriminate between good and bad wine.", kr: "그녀는 좋은 와인과 나쁜 와인을 쉽게 구별할 수 있습니다." }
    ]
  },
  {
    id: "L3-033",
    word: "dispose",
    meaning: "처리하다, 처분하다",
    examples: [
      { en: "You must dispose of hazardous waste properly.", kr: "당신은 유해 폐기물을 적절하게 처리해야 합니다." },
      { en: "The unwanted items were disposed of yesterday.", kr: "원치 않는 물건들은 어제 처분되었습니다." }
    ]
  },
  {
    id: "L3-034",
    word: "distort",
    meaning: "왜곡하다",
    examples: [
      { en: "The newspaper was accused of distorting the facts.", kr: "그 신문은 사실을 왜곡했다는 비난을 받았습니다." },
      { en: "The funhouse mirror distorts your reflection.", kr: "그 놀이 공원 거울은 당신의 모습을 왜곡합니다." }
    ]
  },
  {
    id: "L3-035",
    word: "diverse",
    meaning: "다양한",
    examples: [
      { en: "The class consists of students from diverse backgrounds.", kr: "그 수업은 다양한 배경을 가진 학생들로 구성되어 있습니다." },
      { en: "The store sells a diverse range of products.", kr: "그 가게는 다양한 범위의 제품을 판매합니다." }
    ]
  },
  {
    id: "L3-036",
    word: "domain",
    meaning: "영역, 분야",
    examples: [
      { en: "That subject is outside my domain of expertise.", kr: "그 주제는 제 전문 지식 영역 밖에 있습니다." },
      { en: "The park is public domain and open to everyone.", kr: "그 공원은 공공 영역이며 모두에게 개방되어 있습니다." }
    ]
  },
  {
    id: "L3-037",
    word: "draft",
    meaning: "초안, 초안을 작성하다",
    examples: [
      { en: "I finished the first draft of my essay last night.", kr: "저는 어젯밤에 에세이의 첫 초안을 마쳤습니다." },
      { en: "The lawyer will draft the new contract by Monday.", kr: "변호사가 월요일까지 새 계약서 초안을 작성할 것입니다." }
    ]
  },
  {
    id: "L3-038",
    word: "dynamic",
    meaning: "역동적인",
    examples: [
      { en: "The city's rapid growth creates a dynamic environment.", kr: "그 도시의 빠른 성장은 역동적인 환경을 만듭니다." },
      { en: "He is a dynamic leader who motivates the team.", kr: "그는 팀에게 동기를 부여하는 역동적인 리더입니다." }
    ]
  },
  {
    id: "L3-039",
    word: "elevate",
    meaning: "높이다, 향상시키다",
    examples: [
      { en: "The goal is to elevate the quality of public education.", kr: "목표는 공교육의 질을 높이는 것입니다." },
      { en: "The stage was slightly elevated above the audience.", kr: "무대는 청중보다 약간 높여져 있었습니다." }
    ]
  },
  {
    id: "L3-040",
    word: "eliminate",
    meaning: "제거하다, 없애다",
    examples: [
      { en: "We must eliminate all possibilities of error.", kr: "우리는 모든 오류 가능성을 제거해야 합니다." },
      { en: "The team was eliminated in the first round.", kr: "그 팀은 1라운드에서 탈락했습니다." }
    ]
  },
  {
    id: "L3-041",
    word: "embed",
    meaning: "깊숙이 박다, 내장하다",
    examples: [
      { en: "The stone was firmly embedded in the concrete.", kr: "그 돌은 콘크리트에 단단히 박혀 있었습니다." },
      { en: "The media often embeds video clips in their articles.", kr: "언론은 종종 그들의 기사에 비디오 클립을 내장합니다." }
    ]
  },
  {
    id: "L3-042",
    word: "embrace",
    meaning: "포용하다, 받아들이다",
    examples: [
      { en: "We must embrace technological change to survive.", kr: "우리는 생존을 위해 기술적 변화를 받아들여야 합니다." },
      { en: "She embraced her friend warmly at the airport.", kr: "그녀는 공항에서 친구를 따뜻하게 포옹했습니다." }
    ]
  },
  {
    id: "L3-043",
    word: "emerge",
    meaning: "나타나다, 출현하다",
    examples: [
      { en: "The sun emerged from behind the clouds.", kr: "태양이 구름 뒤에서 나타났습니다." },
      { en: "New scientific findings constantly emerge.", kr: "새로운 과학적 발견들이 끊임없이 출현합니다." }
    ]
  },
  {
    id: "L3-044",
    word: "empirical",
    meaning: "경험적인, 실증적인",
    examples: [
      { en: "The conclusion is based on strong empirical evidence.", kr: "그 결론은 강력한 경험적 증거에 기반하고 있습니다." },
      { en: "We need an empirical test to verify the theory.", kr: "우리는 그 이론을 검증하기 위해 실증적인 테스트가 필요합니다." }
    ]
  },
  {
    id: "L3-045",
    word: "endeavor",
    meaning: "노력, 시도하다",
    examples: [
      { en: "Success requires constant endeavor and dedication.", kr: "성공은 끊임없는 노력과 헌신을 필요로 합니다." },
      { en: "He endeavored to finish the project on time.", kr: "그는 프로젝트를 제시간에 끝내려고 시도했습니다." }
    ]
  },
  {
    id: "L3-046",
    word: "endorse",
    meaning: "지지하다, 보증하다",
    examples: [
      { en: "The organization publicly endorsed the candidate.", kr: "그 조직은 공개적으로 그 후보를 지지했습니다." },
      { en: "Many athletes endorse sports brands.", kr: "많은 운동선수들이 스포츠 브랜드를 보증합니다." }
    ]
  },
  {
    id: "L3-047",
    word: "enforce",
    meaning: "집행하다, 강요하다",
    examples: [
      { en: "The city police strictly enforce traffic laws.", kr: "시 경찰은 교통 법규를 엄격하게 집행합니다." },
      { en: "It is difficult to enforce this rule without constant supervision.", kr: "지속적인 감독 없이는 이 규칙을 강요하기 어렵습니다." }
    ]
  },
  {
    id: "L3-048",
    word: "enhance",
    meaning: "향상시키다",
    examples: [
      { en: "Good lighting can enhance the atmosphere of the room.", kr: "좋은 조명은 방의 분위기를 향상시킬 수 있습니다." },
      { en: "The software update enhances the security features.", kr: "그 소프트웨어 업데이트는 보안 기능을 향상시킵니다." }
    ]
  },
  {
    id: "L3-049",
    word: "entity",
    meaning: "실체, 독립체",
    examples: [
      { en: "The company is a separate legal entity.", kr: "그 회사는 별도의 법적 실체입니다." },
      { en: "The organization functions as an independent entity.", kr: "그 조직은 독립적인 실체로 기능합니다." }
    ]
  },
  {
    id: "L3-050",
    word: "equivalent",
    meaning: "동등한, 상응하는",
    examples: [
      { en: "One euro is roughly equivalent to 1.1 US dollars.", kr: "1유로는 대략 1.1달러와 동등합니다." },
      { en: "She has an equivalent level of experience.", kr: "그녀는 동등한 수준의 경험을 가지고 있습니다." }
    ]
  },
  {
    id: "L3-051",
    word: "erode",
    meaning: "침식하다, 약화시키다",
    examples: [
      { en: "Wind and rain slowly erode the rock formations.", kr: "바람과 비는 암석층을 서서히 침식시킵니다." },
      { en: "Lack of trust can erode a relationship over time.", kr: "신뢰 부족은 시간이 지남에 따라 관계를 약화시킬 수 있습니다." }
    ]
  },
  {
    id: "L3-052",
    word: "ethical",
    meaning: "윤리적인",
    examples: [
      { en: "The decision raises several ethical questions.", kr: "그 결정은 여러 윤리적인 질문을 제기합니다." },
      { en: "We must adhere to the highest ethical standards.", kr: "우리는 최고의 윤리적 기준을 준수해야 합니다." }
    ]
  },
  {
    id: "L3-053",
    word: "evoke",
    meaning: "불러일으키다",
    examples: [
      { en: "The old photographs evoked happy memories.", kr: "오래된 사진들은 행복한 기억들을 불러일으켰습니다." },
      { en: "The speech was meant to evoke a sense of national pride.", kr: "그 연설은 국가적 자부심을 불러일으키기 위해 의도되었습니다." }
    ]
  },
  {
    id: "L3-054",
    word: "evolve",
    meaning: "진화하다, 발전하다",
    examples: [
      { en: "The species evolved to survive in the cold climate.", kr: "그 종은 추운 기후에서 생존하도록 진화했습니다." },
      { en: "The project's scope is expected to evolve over the next few months.", kr: "프로젝트의 범위는 다음 몇 달 동안 발전할 것으로 예상됩니다." }
    ]
  },
  {
    id: "L3-055",
    word: "exceed",
    meaning: "초과하다",
    examples: [
      { en: "Do not exceed the luggage weight limit.", kr: "수하물 무게 제한을 초과하지 마세요." },
      { en: "The company's performance exceeded all expectations.", kr: "그 회사의 성과는 모든 기대를 초과했습니다." }
    ]
  },
  {
    id: "L3-056",
    word: "exclude",
    meaning: "제외하다, 배제하다",
    examples: [
      { en: "The price excludes tax and service charges.", kr: "가격은 세금과 봉사료를 제외합니다." },
      { en: "We must exclude the possibility of a mistake.", kr: "우리는 실수의 가능성을 배제해야 합니다." }
    ]
  },
  {
    id: "L3-057",
    word: "exert",
    meaning: "행사하다, 발휘하다",
    examples: [
      { en: "He had to exert all his strength to lift the rock.", kr: "그는 바위를 들기 위해 자신의 모든 힘을 발휘해야 했습니다." },
      { en: "The new rules exert pressure on small businesses.", kr: "새 규칙들은 소기업에 압력을 행사합니다." }
    ]
  },
  {
    id: "L3-058",
    word: "exhibit",
    meaning: "전시하다, 나타내다",
    examples: [
      { en: "The museum will exhibit the new collection next month.", kr: "그 박물관은 다음 달에 새로운 소장품을 전시할 것입니다." },
      { en: "She did not exhibit any signs of distress.", kr: "그녀는 어떤 고통의 징후도 나타내지 않았습니다." }
    ]
  },
  {
    id: "L3-059",
    word: "exploit",
    meaning: "착취하다, 활용하다",
    examples: [
      { en: "The company was criticized for exploiting cheap labor.", kr: "그 회사는 저렴한 노동력을 착취했다는 비판을 받았습니다." },
      { en: "We should exploit this opportunity to expand our market.", kr: "우리는 시장을 확장하기 위해 이 기회를 활용해야 합니다." }
    ]
  },
  {
    id: "L3-060",
    word: "expose",
    meaning: "노출시키다, 폭로하다",
    examples: [
      { en: "Do not expose the skin to direct sunlight for too long.", kr: "피부를 직사광선에 너무 오래 노출시키지 마세요." },
      { en: "The investigative reporter exposed the truth about the scandal.", kr: "그 탐사 보도 기자는 스캔들에 대한 진실을 폭로했습니다." }
    ]
  },
  {
    id: "L3-061",
    word: "extract",
    meaning: "추출하다, 뽑아내다",
    examples: [
      { en: "It is difficult to extract the oil from the seed.", kr: "그 씨앗에서 기름을 추출하는 것은 어렵습니다." },
      { en: "The dentist had to extract a painful tooth.", kr: "치과 의사는 고통스러운 이를 뽑아내야 했습니다." }
    ]
  },
  {
    id: "L3-062",
    word: "feasible",
    meaning: "실행 가능한",
    examples: [
      { en: "We need a feasible plan that can be implemented quickly.", kr: "우리는 빠르게 실행될 수 있는 실행 가능한 계획이 필요합니다." },
      { en: "Is it technically feasible to build the bridge here?", kr: "여기에 다리를 건설하는 것이 기술적으로 실행 가능합니까?" }
    ]
  },
  {
    id: "L3-063",
    word: "fluctuate",
    meaning: "변동하다, 오르내리다",
    examples: [
      { en: "Oil prices fluctuate daily based on global events.", kr: "유가는 세계적인 사건에 따라 매일 변동합니다." },
      { en: "The temperature fluctuated between 20 and 25 degrees.", kr: "온도는 20도와 25도 사이를 오르내렸습니다." }
    ]
  },
  {
    id: "L3-064",
    word: "fund",
    meaning: "자금, 자금을 대다",
    examples: [
      { en: "The charity needs more funds to continue its work.", kr: "그 자선단체는 작업을 계속하기 위해 더 많은 자금이 필요합니다." },
      { en: "The project was fully funded by a private investor.", kr: "그 프로젝트는 개인 투자자에 의해 완전히 자금을 지원받았습니다." }
    ]
  },
  {
    id: "L3-065",
    word: "fundamental",
    meaning: "근본적인, 기본적인",
    examples: [
      { en: "Honesty is a fundamental principle of our business.", kr: "정직은 우리 사업의 근본적인 원칙입니다." },
      { en: "The report describes the fundamental issues facing the company.", kr: "그 보고서는 회사가 직면한 기본적인 문제들을 설명합니다." }
    ]
  },
  {
    id: "L3-066",
    word: "generalize",
    meaning: "일반화하다",
    examples: [
      { en: "It is wrong to generalize about an entire group of people.", kr: "사람들의 전체 그룹에 대해 일반화하는 것은 잘못입니다." },
      { en: "The theory attempts to generalize the results to all living things.", kr: "그 이론은 결과를 모든 생명체에 일반화하려고 시도합니다." }
    ]
  },
  {
    id: "L3-067",
    word: "generate",
    meaning: "생성하다, 발생시키다",
    examples: [
      { en: "The power plant generates electricity using coal.", kr: "그 발전소는 석탄을 사용하여 전기를 생성합니다." },
      { en: "The advertisement was designed to generate excitement.", kr: "그 광고는 흥미를 발생시키도록 고안되었습니다." }
    ]
  },
  {
    id: "L3-068",
    word: "govern",
    meaning: "통치하다, 지배하다",
    examples: [
      { en: "The laws that govern the nation are based on democracy.", kr: "그 나라를 통치하는 법률은 민주주의에 기반합니다." },
      { en: "Logic should govern your decision-making process.", kr: "논리가 당신의 의사 결정 과정을 지배해야 합니다." }
    ]
  },
  {
    id: "L3-069",
    word: "hypothesis",
    meaning: "가설",
    examples: [
      { en: "The experiment tested the scientist's main hypothesis.", kr: "그 실험은 과학자의 주요 가설을 시험했습니다." },
      { en: "We formed a hypothesis about the cause of the disease.", kr: "우리는 그 질병의 원인에 대한 가설을 세웠습니다." }
    ]
  },
  {
    id: "L3-070",
    word: "identical",
    meaning: "동일한",
    examples: [
      { en: "The two houses are virtually identical in appearance.", kr: "그 두 집은 외관상 사실상 동일합니다." },
      { en: "The witness described an event identical to the one in the police report.", kr: "그 증인은 경찰 보고서의 내용과 동일한 사건을 묘사했습니다." }
    ]
  },
  {
    id: "L3-071",
    word: "illustrate",
    meaning: "설명하다, 삽화",
    examples: [
      { en: "The data illustrates the need for more funding.", kr: "그 자료는 더 많은 자금의 필요성을 설명합니다." },
      { en: "The children's book is fully illustrated with colorful drawings.", kr: "그 동화책은 다채로운 그림으로 완전히 삽화되어 있습니다." }
    ]
  },
  {
    id: "L3-072",
    word: "immigrant",
    meaning: "이민자",
    examples: [
      { en: "Many immigrants come here seeking a better life.", kr: "많은 이민자들이 더 나은 삶을 찾아 이곳으로 옵니다." },
      { en: "The city has a large population of first-generation immigrants.", kr: "그 도시는 많은 1세대 이민자 인구를 가지고 있습니다." }
    ]
  },
  {
    id: "L3-073",
    word: "imply",
    meaning: "암시하다",
    examples: [
      { en: "His hesitation seemed to imply some doubt.", kr: "그의 망설임은 약간의 의심을 암시하는 것처럼 보였습니다." },
      { en: "The article implies a connection between the two events.", kr: "그 기사는 두 사건 사이에 연관성이 있음을 암시합니다." }
    ]
  },
  {
    id: "L3-074",
    word: "impose",
    meaning: "부과하다, 강요하다",
    examples: [
      { en: "The government imposed a ban on smoking in all public parks.", kr: "정부는 모든 공공 공원에서 흡연 금지를 부과했습니다." },
      { en: "Do not impose your views on others.", kr: "당신의 견해를 다른 사람에게 강요하지 마세요." }
    ]
  },
  {
    id: "L3-075",
    word: "incentive",
    meaning: "장려책, 동기",
    examples: [
      { en: "The company offers a financial incentive for early retirement.", kr: "그 회사는 조기 퇴직에 대한 금전적 장려책을 제공합니다." },
      { en: "What is your main incentive for working so hard?", kr: "그렇게 열심히 일하는 당신의 주된 동기는 무엇입니까?" }
    ]
  },
  {
    id: "L3-076",
    word: "incidence",
    meaning: "발생률",
    examples: [
      { en: "The incidence of the disease is higher among the elderly.", kr: "그 질병의 발생률은 노인들 사이에서 더 높습니다." },
      { en: "We are trying to reduce the incidence of traffic accidents.", kr: "우리는 교통사고 발생률을 줄이려고 노력하고 있습니다." }
    ]
  },
  {
    id: "L3-077",
    word: "incorporate",
    meaning: "통합하다, 포함하다",
    examples: [
      { en: "We should incorporate the new features into the next version.", kr: "우리는 새로운 기능들을 다음 버전에 통합해야 합니다." },
      { en: "The new company incorporated the assets of the old one.", kr: "새 회사는 이전 회사의 자산들을 포함했습니다." }
    ]
  },
  {
    id: "L3-078",
    word: "indigenous",
    meaning: "토착의, 고유의",
    examples: [
      { en: "The indigenous people of the island have a unique culture.", kr: "그 섬의 토착민들은 독특한 문화를 가지고 있습니다." },
      { en: "This plant is indigenous to the mountainous region.", kr: "이 식물은 산악 지역 고유의 것입니다." }
    ]
  },
  {
    id: "L3-079",
    word: "induce",
    meaning: "유도하다, 유발하다",
    examples: [
      { en: "The advertisement was designed to induce consumers to buy the product.", kr: "그 광고는 소비자들이 제품을 구매하도록 유도하기 위해 고안되었습니다." },
      { en: "Loud noises can induce stress and headaches.", kr: "큰 소음은 스트레스와 두통을 유발할 수 있습니다." }
    ]
  },
  {
    id: "L3-080",
    word: "infer",
    meaning: "추론하다",
    examples: [
      { en: "What can you infer from the speaker's tone of voice?", kr: "연사의 목소리 톤에서 무엇을 추론할 수 있습니까?" },
      { en: "We infer meaning based on the context.", kr: "우리는 맥락에 기반하여 의미를 추론합니다." }
    ]
  },
  {
    id: "L3-081",
    word: "infrastructure",
    meaning: "기반 시설",
    examples: [
      { en: "The city plans to improve its public transport infrastructure.", kr: "그 도시는 대중교통 기반 시설을 개선할 계획입니다." },
      { en: "Damaged infrastructure is slowing down aid efforts.", kr: "손상된 기반 시설이 구호 노력을 지연시키고 있습니다." }
    ]
  },
  {
    id: "L3-082",
    word: "inhibit",
    meaning: "억제하다, 저해하다",
    examples: [
      { en: "Fear of failure can inhibit creativity.", kr: "실패에 대한 두려움은 창의성을 저해할 수 있습니다." },
      { en: "The drug is designed to inhibit the growth of bacteria.", kr: "그 약은 박테리아의 성장을 억제하도록 고안되었습니다." }
    ]
  },
  {
    id: "L3-083",
    word: "initial",
    meaning: "초기의",
    examples: [
      { en: "The initial reaction to the news was shock.", kr: "그 소식에 대한 초기 반응은 충격이었습니다." },
      { en: "The project is still in its initial planning stages.", kr: "그 프로젝트는 여전히 초기 계획 단계에 있습니다." }
    ]
  },
  {
    id: "L3-084",
    word: "insight",
    meaning: "통찰력",
    examples: [
      { en: "Her deep insight helped solve the complex problem.", kr: "그녀의 깊은 통찰력이 복잡한 문제를 해결하는 데 도움이 되었습니다." },
      { en: "The book provides great insight into the culture.", kr: "그 책은 그 문화에 대한 훌륭한 통찰력을 제공합니다." }
    ]
  },
  {
    id: "L3-085",
    word: "instance",
    meaning: "사례, 경우",
    examples: [
      { en: "For instance, look at the graph on page 7.", kr: "예를 들어, 7페이지의 그래프를 보세요." },
      { en: "The crime was a rare instance of violence in the town.", kr: "그 범죄는 그 마을에서 드문 폭력 사례였습니다." }
    ]
  },
  {
    id: "L3-086",
    word: "integrate",
    meaning: "통합하다",
    examples: [
      { en: "We need to integrate the new software with the old database.", kr: "우리는 새 소프트웨어를 기존 데이터베이스와 통합해야 합니다." },
      { en: "She found it easy to integrate into the new team.", kr: "그녀는 새 팀에 쉽게 통합되는 것을 알았습니다." }
    ]
  },
  {
    id: "L3-087",
    word: "integral",
    meaning: "필수적인, 통합적인",
    examples: [
      { en: "Teamwork is an integral part of the company's success.", kr: "팀워크는 회사 성공의 필수적인 부분입니다." },
      { en: "The kitchen is an integral element of the modern home design.", kr: "부엌은 현대 주택 디자인의 통합적인 요소입니다." }
    ]
  },
  {
    id: "L3-088",
    word: "intense",
    meaning: "강렬한, 집중적인",
    examples: [
      { en: "The workout requires intense physical effort.", kr: "그 운동은 강렬한 육체적 노력을 요구합니다." },
      { en: "There was intense pressure to finish the project on time.", kr: "프로젝트를 제시간에 끝내야 한다는 집중적인 압력이 있었습니다." }
    ]
  },
  {
    id: "L3-089",
    word: "interact",
    meaning: "상호 작용하다",
    examples: [
      { en: "The two leaders rarely interact outside of formal meetings.", kr: "두 지도자는 공식 회의 외에서는 거의 상호 작용하지 않습니다." },
      { en: "The chemicals interact to produce a harmless gas.", kr: "그 화학 물질들은 상호 작용하여 무해한 가스를 생성합니다." }
    ]
  },
  {
    id: "L3-090",
    word: "interpret",
    meaning: "해석하다, 통역하다",
    examples: [
      { en: "How do you interpret the meaning of this ancient poem?", kr: "당신은 이 고대 시의 의미를 어떻게 해석합니까?" },
      { en: "She was asked to interpret the speech for the foreign delegates.", kr: "그녀는 외국 대표들을 위해 연설을 통역해 달라고 요청받았습니다." }
    ]
  },
  {
    id: "L3-091",
    word: "intervene",
    meaning: "개입하다, 중재하다",
    examples: [
      { en: "The government refused to intervene in the private market dispute.", kr: "정부는 사적 시장 분쟁에 개입하기를 거부했습니다." },
      { en: "The doctor had to intervene immediately to save the patient's life.", kr: "의사는 환자의 생명을 구하기 위해 즉시 개입해야 했습니다." }
    ]
  },
  {
    id: "L3-092",
    word: "intrinsic",
    meaning: "고유한, 본질적인",
    examples: [
      { en: "The painting has immense intrinsic value.", kr: "그 그림은 엄청난 고유한 가치를 가지고 있습니다." },
      { en: "The ability to learn is an intrinsic human trait.", kr: "학습 능력은 인간의 본질적인 특성입니다." }
    ]
  },
  {
    id: "L3-093",
    word: "invest",
    meaning: "투자하다",
    examples: [
      { en: "It is wise to invest in real estate.", kr: "부동산에 투자하는 것은 현명합니다." },
      { en: "We need to invest more time in planning.", kr: "우리는 계획에 더 많은 시간을 투자해야 합니다." }
    ]
  },
  {
    id: "L3-094",
    word: "isolate",
    meaning: "고립시키다, 분리하다",
    examples: [
      { en: "The patient was isolated to prevent the spread of the virus.", kr: "그 환자는 바이러스 확산을 막기 위해 고립되었습니다." },
      { en: "We need to isolate the variable causing the error.", kr: "우리는 오류를 유발하는 변수를 분리해야 합니다." }
    ]
  },
  {
    id: "L3-095",
    word: "justify",
    meaning: "정당화하다, 해명하다",
    examples: [
      { en: "How can you justify such reckless spending?", kr: "어떻게 그런 무모한 지출을 정당화할 수 있습니까?" },
      { en: "You don't need to justify your decision to me.", kr: "당신은 나에게 당신의 결정을 해명할 필요가 없습니다." }
    ]
  },
  {
    id: "L3-096",
    word: "label",
    meaning: "표를 붙이다, 상표",
    examples: [
      { en: "Make sure to label all the moving boxes.", kr: "모든 이삿짐 상자에 표를 붙이는 것을 확실히 하세요." },
      { en: "The product's label provides allergy warnings.", kr: "그 제품의 상표는 알레르기 경고를 제공합니다." }
    ]
  },
  {
    id: "L3-097",
    word: "layer",
    meaning: "층, 겹",
    examples: [
      { en: "The cake consists of three layers of cream and sponge.", kr: "그 케이크는 세 겹의 크림과 스폰지로 구성되어 있습니다." },
      { en: "The archaeological dig revealed several layers of ancient civilization.", kr: "그 고고학 발굴은 고대 문명의 여러 층들을 드러냈습니다." }
    ]
  },
  {
    id: "L3-098",
    word: "liberal",
    meaning: "진보적인, 자유로운",
    examples: [
      { en: "She has very liberal views on social reforms.", kr: "그녀는 사회 개혁에 대해 매우 진보적인 견해를 가지고 있습니다." },
      { en: "The politician is known for his liberal spending on public works.", kr: "그 정치인은 공공 사업에 대한 자유로운(많은) 지출로 알려져 있습니다." }
    ]
  },
  {
    id: "L3-099",
    word: "license",
    meaning: "면허, 허가",
    examples: [
      { en: "You need a license to drive a motorcycle.", kr: "오토바이를 운전하려면 면허가 필요합니다." },
      { en: "The company obtained a license to sell software overseas.", kr: "그 회사는 해외에서 소프트웨어를 판매할 허가를 얻었습니다." }
    ]
  },
  {
    id: "L3-100",
    word: "logic",
    meaning: "논리",
    examples: [
      { en: "There is a flaw in your argument's logic.", kr: "당신 주장의 논리에 결함이 있습니다." },
      { en: "We used simple logic to solve the puzzle.", kr: "우리는 퍼즐을 풀기 위해 단순한 논리를 사용했습니다." }
    ]
  }
];

const wordsLevel3_Part2 = [
  {
    id: "L3-101",
    word: "magnitude",
    meaning: "규모, 크기",
    examples: [
      { en: "The earthquake was of a high magnitude.", kr: "그 지진은 규모가 매우 컸습니다." },
      { en: "We underestimated the magnitude of the problem.", kr: "우리는 문제의 크기를 과소평가했습니다." }
    ]
  },
  {
    id: "L3-102",
    word: "marginal",
    meaning: "미미한, 한계의",
    examples: [
      { en: "The change in temperature was only marginal.", kr: "온도 변화는 단지 미미했습니다." },
      { en: "They live on the marginal land near the coast.", kr: "그들은 해안 근처의 한계적인 땅에서 살고 있습니다." }
    ]
  },
  {
    id: "L3-103",
    word: "mechanism",
    meaning: "메커니즘, 장치",
    examples: [
      { en: "The old clock has a complex internal mechanism.", kr: "그 오래된 시계는 복잡한 내부 장치를 가지고 있습니다." },
      { en: "We need a mechanism to resolve disputes.", kr: "우리는 분쟁을 해결할 메커니즘이 필요합니다." }
    ]
  },
  {
    id: "L3-104",
    word: "minimal",
    meaning: "최소한의",
    examples: [
      { en: "The accident caused only minimal damage.", kr: "그 사고는 최소한의 손상만을 일으켰습니다." },
      { en: "We require only a minimal effort for this task.", kr: "우리는 이 과제에 최소한의 노력만을 요구합니다." }
    ]
  },
  {
    id: "L3-105",
    word: "modify",
    meaning: "수정하다, 변경하다",
    examples: [
      { en: "We decided to modify the design based on customer feedback.", kr: "우리는 고객 피드백에 기반하여 디자인을 수정하기로 결정했습니다." },
      { en: "You can modify your settings at any time.", kr: "당신은 언제든지 설정을 변경할 수 있습니다." }
    ]
  },
  {
    id: "L3-106",
    word: "monitor",
    meaning: "감시하다, 관찰하다",
    examples: [
      { en: "The team will monitor the patient's vitals closely.", kr: "팀은 환자의 활력 징후를 면밀히 관찰할 것입니다." },
      { en: "We need to monitor traffic flow on the highway.", kr: "우리는 고속도로의 교통 흐름을 감시해야 합니다." }
    ]
  },
  {
    id: "L3-107",
    word: "mutual",
    meaning: "상호의, 공통의",
    examples: [
      { en: "The negotiation led to a mutual agreement.", kr: "그 협상은 상호 합의로 이어졌습니다." },
      { en: "They share a mutual interest in photography.", kr: "그들은 사진에 대한 공통의 관심을 공유합니다." }
    ]
  },
  {
    id: "L3-108",
    word: "notable",
    meaning: "주목할 만한, 현저한",
    examples: [
      { en: "The company achieved a notable increase in sales.", kr: "그 회사는 주목할 만한 매출 증가를 달성했습니다." },
      { en: "He is a notable figure in the history of science.", kr: "그는 과학 역사에서 현저한 인물입니다." }
    ]
  },
  {
    id: "L3-109",
    word: "notion",
    meaning: "개념, 생각",
    examples: [
      { en: "I disagree with the notion of absolute truth.", kr: "저는 절대 진리라는 개념에 동의하지 않습니다." },
      { en: "She had a romantic notion of life in the countryside.", kr: "그녀는 시골 생활에 대한 낭만적인 생각을 가지고 있었습니다." }
    ]
  },
  {
    id: "L3-110",
    word: "notorious",
    meaning: "악명 높은",
    examples: [
      { en: "The bank robber was notorious for his daring escapes.", kr: "그 은행 강도는 대담한 탈출로 악명 높았습니다." },
      { en: "The restaurant is notorious for its poor service.", kr: "그 식당은 형편없는 서비스로 악명이 높습니다." }
    ]
  },
  {
    id: "L3-111",
    word: "notwithstanding",
    meaning: "~에도 불구하고",
    examples: [
      { en: "Notwithstanding the high cost, the project proceeded.", kr: "높은 비용에도 불구하고, 프로젝트는 진행되었습니다." },
      { en: "His lack of experience, notwithstanding, he got the job.", kr: "그의 경험 부족에도 불구하고, 그는 그 일자리를 얻었습니다." }
    ]
  },
  {
    id: "L3-112",
    word: "objective",
    meaning: "객관적인, 목표",
    examples: [
      { en: "We need an objective assessment of the situation.", kr: "우리는 상황에 대한 객관적인 평가가 필요합니다." },
      { en: "The primary objective is to increase customer satisfaction.", kr: "주요 목표는 고객 만족을 높이는 것입니다." }
    ]
  },
  {
    id: "L3-113",
    word: "orient",
    meaning: "방향을 잡다, 지향하게 하다",
    examples: [
      { en: "It is difficult to orient yourself in the dark forest.", kr: "어두운 숲속에서 방향을 잡는 것은 어렵습니다." },
      { en: "The company’s strategy is oriented towards innovation.", kr: "그 회사의 전략은 혁신을 지향하게 되어 있습니다." }
    ]
  },
  {
    id: "L3-114",
    word: "outcome",
    meaning: "결과, 성과",
    examples: [
      { en: "The outcome of the meeting was positive.", kr: "회의 결과는 긍정적이었습니다." },
      { en: "We are waiting for the final outcome of the negotiation.", kr: "우리는 협상의 최종 결과를 기다리고 있습니다." }
    ]
  },
  {
    id: "L3-115",
    word: "output",
    meaning: "산출, 출력",
    examples: [
      { en: "The factory's output increased significantly this month.", kr: "그 공장의 산출이 이번 달에 상당히 증가했습니다." },
      { en: "The printer provides a high-quality output.", kr: "그 프린터는 고품질 출력을 제공합니다." }
    ]
  },
  {
    id: "L3-116",
    word: "overlap",
    meaning: "겹치다, 중복되다",
    examples: [
      { en: "The two projects have a significant overlap in scope.", kr: "두 프로젝트는 범위에 상당한 중복이 있습니다." },
      { en: "The new schedule is designed so that no classes overlap.", kr: "새로운 시간표는 어떤 수업도 겹치지 않도록 설계되었습니다." }
    ]
  },
  {
    id: "L3-117",
    word: "panel",
    meaning: "패널, 토론자단",
    examples: [
      { en: "The expert panel discussed the effects of climate change.", kr: "전문가 토론자단은 기후 변화의 영향을 논의했습니다." },
      { en: "Solar panels are being installed on the roof.", kr: "태양광 패널이 지붕에 설치되고 있습니다." }
    ]
  },
  {
    id: "L3-118",
    word: "paradigm",
    meaning: "패러다임, 전형",
    examples: [
      { en: "The invention marked a paradigm shift in technology.", kr: "그 발명은 기술의 패러다임 변화를 나타냈습니다." },
      { en: "His work is a paradigm of academic excellence.", kr: "그의 작품은 학문적 우수성의 전형입니다." }
    ]
  },
  {
    id: "L3-119",
    word: "parameter",
    meaning: "매개변수, 기준",
    examples: [
      { en: "We must define the parameters of the study clearly.", kr: "우리는 연구의 매개변수(기준)를 명확하게 정의해야 합니다." },
      { en: "The budget set strict financial parameters.", kr: "예산은 엄격한 재정적 기준을 설정했습니다." }
    ]
  },
  {
    id: "L3-120",
    word: "perceive",
    meaning: "인지하다, 인식하다",
    examples: [
      { en: "The public perceives the brand as eco-friendly.", kr: "대중은 그 브랜드를 친환경적인 것으로 인식합니다." },
      { en: "He did not perceive the hidden threat until it was too late.", kr: "그는 너무 늦을 때까지 숨겨진 위협을 인지하지 못했습니다." }
    ]
  },
  {
    id: "L3-121",
    word: "perspective",
    meaning: "관점, 시각",
    examples: [
      { en: "Try to look at the issue from a new perspective.", kr: "새로운 관점에서 그 문제를 바라보려고 노력하세요." },
      { en: "The drawing uses a linear perspective.", kr: "그 그림은 선형 원근법(관점)을 사용합니다." }
    ]
  },
  {
    id: "L3-122",
    word: "phase",
    meaning: "단계, 국면",
    examples: [
      { en: "The project is currently in its final phase.", kr: "그 프로젝트는 현재 최종 단계에 있습니다." },
      { en: "The moon goes through different phases during the month.", kr: "달은 한 달 동안 다른 국면들을 거칩니다." }
    ]
  },
  {
    id: "L3-123",
    word: "phenomenon",
    meaning: "현상",
    examples: [
      { en: "Global warming is a complex phenomenon.", kr: "지구 온난화는 복잡한 현상입니다." },
      { en: "The sudden popularity of the song was an unusual phenomenon.", kr: "그 노래의 갑작스러운 인기는 특이한 현상이었습니다." }
    ]
  },
  {
    id: "L3-124",
    word: "pose",
    meaning: "제기하다, 자세를 취하다",
    examples: [
      { en: "The rapid development poses a challenge to local infrastructure.", kr: "빠른 발전은 지역 기반 시설에 도전을 제기합니다." },
      { en: "The model was asked to pose for the new advertisement.", kr: "그 모델은 새 광고를 위해 자세를 취해 달라고 요청받았습니다." }
    ]
  },
  {
    id: "L3-125",
    word: "prevalent",
    meaning: "널리 퍼진, 일반적인",
    examples: [
      { en: "The illness is more prevalent in tropical climates.", kr: "그 질병은 열대 기후에서 더 널리 퍼져 있습니다." },
      { en: "Misinformation is becoming increasingly prevalent online.", kr: "잘못된 정보가 온라인에서 점점 더 일반적이 되고 있습니다." }
    ]
  },
  {
    id: "L3-126",
    word: "prior",
    meaning: "이전의, 앞선",
    examples: [
      { en: "You need prior experience for this job.", kr: "당신은 이 일자리를 위해 이전의 경험이 필요합니다." },
      { en: "The event occurred prior to the signing of the agreement.", kr: "그 사건은 계약 체결에 앞서 발생했습니다." }
    ]
  },
  {
    id: "L3-127",
    word: "process",
    meaning: "과정, 처리하다",
    examples: [
      { en: "Learning is a long and slow process.", kr: "학습은 길고 느린 과정입니다." },
      { en: "Your application is being processed by the admissions office.", kr: "당신의 지원서는 입학처에서 처리되고 있습니다." }
    ]
  },
  {
    id: "L3-128",
    word: "profound",
    meaning: "심오한, 지대한",
    examples: [
      { en: "The book had a profound impact on his thinking.", kr: "그 책은 그의 사고방식에 지대한 영향을 미쳤습니다." },
      { en: "She has a profound understanding of music theory.", kr: "그녀는 음악 이론에 대한 심오한 이해를 가지고 있습니다." }
    ]
  },
  {
    id: "L3-129",
    word: "protocol",
    meaning: "규약, 의정서",
    examples: [
      { en: "All employees must follow the strict safety protocol.", kr: "모든 직원은 엄격한 안전 규약을 따라야 합니다." },
      { en: "The meeting followed international diplomatic protocol.", kr: "그 회의는 국제 외교 의정서를 따랐습니다." }
    ]
  },
  {
    id: "L3-130",
    word: "qualify",
    meaning: "자격을 얻다, 한정하다",
    examples: [
      { en: "You must pass the exam to qualify as a doctor.", kr: "의사가 되기 위해 시험에 합격하여 자격을 얻어야 합니다." },
      { en: "I would like to qualify my earlier statement.", kr: "저는 제 이전 진술을 한정하고 싶습니다." }
    ]
  },
  {
    id: "L3-131",
    word: "quantity",
    meaning: "양",
    examples: [
      { en: "We need a large quantity of raw materials.", kr: "우리는 많은 양의 원자재가 필요합니다." },
      { en: "The quantity of food provided was not sufficient.", kr: "제공된 음식의 양은 충분하지 않았습니다." }
    ]
  },
  {
    id: "L3-132",
    word: "quota",
    meaning: "할당량",
    examples: [
      { en: "Each department has a specific sales quota to meet.", kr: "각 부서는 충족해야 할 특정 판매 할당량이 있습니다." },
      { en: "The import quota was limited by the government.", kr: "수입 할당량이 정부에 의해 제한되었습니다." }
    ]
  },
  {
    id: "L3-133",
    word: "radical",
    meaning: "근본적인, 급진적인",
    examples: [
      { en: "The company needs a radical overhaul of its management.", kr: "그 회사는 경영에 대한 근본적인 점검이 필요합니다." },
      { en: "He holds radical political views.", kr: "그는 급진적인 정치적 견해를 가지고 있습니다." }
    ]
  },
  {
    id: "L3-134",
    word: "random",
    meaning: "무작위의, 임의의",
    examples: [
      { en: "The winner was chosen at random.", kr: "당첨자는 무작위로 선택되었습니다." },
      { en: "They conducted random checks on the products.", kr: "그들은 제품에 대한 임의의 점검을 실시했습니다." }
    ]
  },
  {
    id: "L3-135",
    word: "ratio",
    meaning: "비율",
    examples: [
      { en: "The ratio of men to women in the team is 2:1.", kr: "팀에서 남성 대 여성의 비율은 2대 1입니다." },
      { en: "We need to analyze the debt-to-equity ratio.", kr: "우리는 부채-자본 비율을 분석해야 합니다." }
    ]
  },
  {
    id: "L3-136",
    word: "rational",
    meaning: "합리적인, 이성적인",
    examples: [
      { en: "We must make a rational decision, not an emotional one.", kr: "우리는 감정적인 결정이 아닌, 합리적인 결정을 내려야 합니다." },
      { en: "Humans are generally considered rational beings.", kr: "인간은 일반적으로 이성적인 존재로 간주됩니다." }
    ]
  },
  {
    id: "L3-137",
    word: "recede",
    meaning: "물러나다, 약해지다",
    examples: [
      { en: "The floodwaters slowly began to recede.", kr: "홍수가 난 물이 서서히 물러나기 시작했습니다." },
      { en: "The pain gradually receded after the medication took effect.", kr: "약효가 나타난 후 통증이 점차 약해졌습니다." }
    ]
  },
  {
    id: "L3-138",
    word: "refer",
    meaning: "언급하다, 참조하다",
    examples: [
      { en: "Please refer to the manual for detailed instructions.", kr: "자세한 지침은 매뉴얼을 참조하십시오." },
      { en: "The speaker did not refer to the recent controversy.", kr: "연사는 최근 논란에 대해 언급하지 않았습니다." }
    ]
  },
  {
    id: "L3-139",
    word: "reflect",
    meaning: "반영하다, 반사하다",
    examples: [
      { en: "The calm water clearly reflects the sky.", kr: "잔잔한 물이 하늘을 명확하게 반사합니다." },
      { en: "The policy should reflect the needs of the community.", kr: "정책은 지역 사회의 필요를 반영해야 합니다." }
    ]
  },
  {
    id: "L3-140",
    word: "reform",
    meaning: "개혁하다, 개혁",
    examples: [
      { en: "The government promised to reform the education system.", kr: "정부는 교육 시스템을 개혁하겠다고 약속했습니다." },
      { en: "Tax reform is a major political issue.", kr: "세제 개혁은 주요 정치적 쟁점입니다." }
    ]
  },
  {
    id: "L3-141",
    word: "reinforce",
    meaning: "강화하다, 보강하다",
    examples: [
      { en: "The new data will reinforce our earlier conclusions.", kr: "새로운 자료는 우리의 이전 결론을 강화할 것입니다." },
      { en: "The workers used steel beams to reinforce the bridge.", kr: "작업자들은 강철 빔을 사용하여 다리를 보강했습니다." }
    ]
  },
  {
    id: "L3-142",
    word: "reject",
    meaning: "거절하다, 거부하다",
    examples: [
      { en: "The manager decided to reject the poor-quality materials.", kr: "관리자는 품질이 낮은 재료를 거부하기로 결정했습니다." },
      { en: "She rejected his offer of help.", kr: "그녀는 그의 도움 제안을 거절했습니다." }
    ]
  },
  {
    id: "L3-143",
    word: "relevant",
    meaning: "관련된, 적절한",
    examples: [
      { en: "Is this information relevant to the case?", kr: "이 정보가 사건과 관련이 있습니까?" },
      { en: "Please limit your comments to relevant topics.", kr: "의견을 관련된 주제로만 제한해 주세요." }
    ]
  },
  {
    id: "L3-144",
    word: "replicate",
    meaning: "복제하다, 되풀이하다",
    examples: [
      { en: "Scientists attempted to replicate the results of the original experiment.", kr: "과학자들은 원래 실험의 결과를 복제하려고 시도했습니다." },
      { en: "The machine can replicate the key precisely.", kr: "그 기계는 열쇠를 정확하게 복제할 수 있습니다." }
    ]
  },
  {
    id: "L3-145",
    word: "reproduce",
    meaning: "번식하다, 복제하다",
    examples: [
      { en: "The artist has the sole right to reproduce his work.", kr: "그 예술가는 자신의 작품을 복제할 유일한 권리를 가지고 있습니다." },
      { en: "Many species of fish reproduce during the spring.", kr: "많은 종의 물고기가 봄 동안 번식합니다." }
    ]
  },
  {
    id: "L3-146",
    word: "resort",
    meaning: "의존하다, 리조트",
    examples: [
      { en: "They had to resort to force to open the door.", kr: "그들은 문을 열기 위해 힘에 의존해야 했습니다." },
      { en: "We are planning a trip to a seaside resort.", kr: "우리는 해변 리조트로 여행을 계획하고 있습니다." }
    ]
  },
  {
    id: "L3-147",
    word: "restrain",
    meaning: "억제하다, 제지하다",
    examples: [
      { en: "She had to restrain her laughter during the formal speech.", kr: "그녀는 공식 연설 동안 웃음을 억제해야 했습니다." },
      { en: "Security guards were called to restrain the aggressive fan.", kr: "경호원들이 난폭한 팬을 제지하기 위해 호출되었습니다." }
    ]
  },
  {
    id: "L3-148",
    word: "retrieve",
    meaning: "되찾다, 회수하다",
    examples: [
      { en: "I need to retrieve the file from the backup server.", kr: "저는 백업 서버에서 파일을 되찾아와야 합니다." },
      { en: "The dog was trained to retrieve objects.", kr: "그 개는 물건을 회수하도록 훈련되었습니다." }
    ]
  },
  {
    id: "L3-149",
    word: "revenue",
    meaning: "수익, 세입",
    examples: [
      { en: "The company's revenue increased significantly this year.", kr: "그 회사의 수익이 올해 상당히 증가했습니다." },
      { en: "The new tax generated substantial government revenue.", kr: "새 세금은 상당한 정부 세입을 창출했습니다." }
    ]
  },
  {
    id: "L3-150",
    word: "rigid",
    meaning: "엄격한, 융통성 없는",
    examples: [
      { en: "The rules were too rigid to allow for any exceptions.", kr: "그 규칙들은 예외를 허용하기에는 너무 엄격했습니다." },
      { en: "The old man's posture was rigid and straight.", kr: "그 노인의 자세는 뻣뻣하고 곧았습니다." }
    ]
  },
  {
    id: "L3-151",
    word: "route",
    meaning: "경로, 길",
    examples: [
      { en: "What is the fastest route to the airport?", kr: "공항까지 가장 빠른 경로는 무엇입니까?" },
      { en: "The delivery service changed its main route.", kr: "그 배달 서비스는 주요 경로를 변경했습니다." }
    ]
  },
  {
    id: "L3-152",
    word: "scenario",
    meaning: "시나리오, 예상되는 상황",
    examples: [
      { en: "We prepared for several worst-case scenarios.", kr: "우리는 몇 가지 최악의 시나리오에 대비했습니다." },
      { en: "The project team developed a full development scenario.", kr: "프로젝트 팀은 완전한 개발 시나리오를 개발했습니다." }
    ]
  },
  {
    id: "L3-153",
    word: "scope",
    meaning: "범위, 영역",
    examples: [
      { en: "The scope of the investigation was very limited.", kr: "그 조사의 범위는 매우 제한적이었습니다." },
      { en: "We expanded the scope of our services.", kr: "우리는 서비스 영역을 확장했습니다." }
    ]
  },
  {
    id: "L3-154",
    word: "security",
    meaning: "보안, 안전",
    examples: [
      { en: "Data security is a top priority for the company.", kr: "데이터 보안은 회사의 최우선 과제입니다." },
      { en: "The new system ensures personal security.", kr: "새로운 시스템은 개인의 안전을 보장합니다." }
    ]
  },
  {
    id: "L3-155",
    word: "sphere",
    meaning: "구, 영역",
    examples: [
      { en: "The earth is an almost perfect sphere.", kr: "지구는 거의 완벽한 구입니다." },
      { en: "The matter falls outside the sphere of local government.", kr: "그 문제는 지방 정부의 영역 밖에 있습니다." }
    ]
  },
  {
    id: "L3-156",
    word: "stabilize",
    meaning: "안정시키다",
    examples: [
      { en: "The nurse worked to stabilize the patient's condition.", kr: "간호사는 환자의 상태를 안정시키기 위해 노력했습니다." },
      { en: "New regulations were introduced to stabilize the financial markets.", kr: "금융 시장을 안정시키기 위해 새로운 규제가 도입되었습니다." }
    ]
  },
  {
    id: "L3-157",
    word: "statute",
    meaning: "법규, 법령",
    examples: [
      { en: "The new statute requires all citizens to pay the fee.", kr: "새 법령은 모든 시민들이 수수료를 지불하도록 요구합니다." },
      { en: "The action violates an old state statute.", kr: "그 행위는 오래된 주 법규를 위반합니다." }
    ]
  },
  {
    id: "L3-158",
    word: "summary",
    meaning: "요약",
    examples: [
      { en: "The manager asked for a brief summary of the project status.", kr: "관리자는 프로젝트 상태에 대한 간략한 요약을 요청했습니다." },
      { en: "The article provides a good summary of the book.", kr: "그 기사는 책에 대한 좋은 요약을 제공합니다." }
    ]
  },
  {
    id: "L3-159",
    word: "survey",
    meaning: "설문 조사, 조사하다",
    examples: [
      { en: "We conducted a detailed survey of customer satisfaction.", kr: "우리는 고객 만족에 대한 상세한 설문 조사를 실시했습니다." },
      { en: "The team surveyed the damage after the hurricane.", kr: "팀은 허리케인 후 피해를 조사했습니다." }
    ]
  },
  {
    id: "L3-160",
    word: "sustain",
    meaning: "지속하다, 지탱하다",
    examples: [
      { en: "The economy needs to sustain its growth rate.", kr: "경제는 성장률을 지속해야 합니다." },
      { en: "The bridge is built to sustain heavy loads.", kr: "그 다리는 무거운 하중을 지탱하도록 건설되었습니다." }
    ]
  },
  {
    id: "L3-161",
    word: "symbol",
    meaning: "상징",
    examples: [
      { en: "The white dove is a symbol of peace.", kr: "흰 비둘기는 평화의 상징입니다." },
      { en: "The logo is a powerful symbol of the brand.", kr: "그 로고는 브랜드의 강력한 상징입니다." }
    ]
  },
  {
    id: "L3-162",
    word: "tendency",
    meaning: "경향, 추세",
    examples: [
      { en: "He has a tendency to be late for meetings.", kr: "그는 회의에 늦는 경향이 있습니다." },
      { en: "There is a growing tendency toward remote work.", kr: "원격 근무를 향한 경향이 증가하고 있습니다." }
    ]
  },
  {
    id: "L3-163",
    word: "theme",
    meaning: "주제, 테마",
    examples: [
      { en: "The main theme of the novel is love and loss.", kr: "그 소설의 주요 주제는 사랑과 상실입니다." },
      { en: "They decorated the room with a space theme.", kr: "그들은 방을 우주 테마로 장식했습니다." }
    ]
  },
  {
    id: "L3-164",
    word: "transition",
    meaning: "과도기, 전환",
    examples: [
      { en: "The country is undergoing a smooth transition to a new government.", kr: "그 나라는 새 정부로의 순조로운 전환을 겪고 있습니다." },
      { en: "Learning a new language requires a transition in your thought process.", kr: "새 언어를 배우는 것은 사고 과정의 전환을 필요로 합니다." }
    ]
  },
  {
    id: "L3-165",
    word: "trend",
    meaning: "경향, 유행",
    examples: [
      { en: "We are analyzing the current market trend.", kr: "우리는 현재 시장의 경향을 분석하고 있습니다." },
      { en: "The latest fashion trend is bright colors.", kr: "최신 패션 유행은 밝은 색상입니다." }
    ]
  },
  {
    id: "L3-166",
    word: "unanimous",
    meaning: "만장일치의",
    examples: [
      { en: "The jury reached a unanimous verdict of not guilty.", kr: "배심원단은 만장일치의 무죄 평결에 도달했습니다." },
      { en: "The board's decision was unanimous.", kr: "이사회의 결정은 만장일치였습니다." }
    ]
  },
  {
    id: "L3-167",
    word: "unprecedented",
    meaning: "전례 없는",
    examples: [
      { en: "The crisis was of an unprecedented scale.", kr: "그 위기는 전례 없는 규모였습니다." },
      { en: "The technology achieved an unprecedented speed.", kr: "그 기술은 전례 없는 속도를 달성했습니다." }
    ]
  },
  {
    id: "L3-168",
    word: "utility",
    meaning: "유용성, 공공시설",
    examples: [
      { en: "The utility of the new feature is questionable.", kr: "새 기능의 유용성은 의문스럽습니다." },
      { en: "We have to pay the utility bills every month.", kr: "우리는 매달 공공시설 요금을 지불해야 합니다." }
    ]
  },
  {
    id: "L3-169",
    word: "valid",
    meaning: "유효한, 타당한",
    examples: [
      { en: "Is this parking ticket still valid?", kr: "이 주차권은 아직 유효합니까?" },
      { en: "She provided a valid reason for her delay.", kr: "그녀는 자신의 지연에 대한 타당한 이유를 제시했습니다." }
    ]
  },
  {
    id: "L3-170",
    word: "vehicle",
    meaning: "차량, 수단",
    examples: [
      { en: "The insurance covers all types of motor vehicles.", kr: "그 보험은 모든 종류의 자동차를 보장합니다." },
      { en: "Art is a powerful vehicle for social change.", kr: "예술은 사회 변화를 위한 강력한 수단입니다." }
    ]
  },
  {
    id: "L3-171",
    word: "venue",
    meaning: "장소",
    examples: [
      { en: "The venue for the concert has been changed.", kr: "콘서트 장소가 변경되었습니다." },
      { en: "We need to find a suitable venue for the conference.", kr: "우리는 컨퍼런스를 위한 적절한 장소를 찾아야 합니다." }
    ]
  },
  {
    id: "L3-172",
    word: "versus",
    meaning: "~ 대(對)",
    examples: [
      { en: "It's a game of experience versus youth.", kr: "그것은 경험 대 젊음의 경기입니다." },
      { en: "The team is playing against the Lakers tonight.", kr: "그 팀은 오늘 밤 레이커스 팀 대(對) 경기를 합니다." }
    ]
  },
  {
    id: "L3-173",
    word: "via",
    meaning: "~을 통하여, ~을 경유하여",
    examples: [
      { en: "I sent the documents via email.", kr: "저는 이메일을 통하여 서류를 보냈습니다." },
      { en: "We flew to New York via London.", kr: "우리는 런던을 경유하여 뉴욕으로 비행했습니다." }
    ]
  },
  {
    id: "L3-174",
    word: "virtual",
    meaning: "가상의, 사실상의",
    examples: [
      { en: "They held a virtual meeting using video conferencing.", kr: "그들은 화상 회의를 사용하여 가상 회의를 개최했습니다." },
      { en: "He is the virtual leader of the entire group.", kr: "그는 전체 그룹의 사실상의 리더입니다." }
    ]
  },
  {
    id: "L3-175",
    word: "visible",
    meaning: "눈에 보이는",
    examples: [
      { en: "The stars were clearly visible in the night sky.", kr: "별들이 밤하늘에 명확하게 보였습니다." },
      { en: "There was a visible difference in their performance.", kr: "그들의 성과에는 눈에 보이는 차이가 있었습니다." }
    ]
  },
  {
    id: "L3-176",
    word: "voluntary",
    meaning: "자발적인",
    examples: [
      { en: "Participation in the survey is completely voluntary.", kr: "설문 조사 참여는 완전히 자발적입니다." },
      { en: "She works at the hospital on a voluntary basis.", kr: "그녀는 자발적인(자원봉사) 기반으로 병원에서 일합니다." }
    ]
  },
  {
    id: "L3-177",
    word: "whereby",
    meaning: "~하는 것에 의하여",
    examples: [
      { en: "They established a system whereby members could vote online.", kr: "그들은 구성원들이 온라인으로 투표할 수 있는 시스템을 확립했습니다." },
      { en: "A contract whereby you agree to sell the property was signed.", kr: "당신이 재산을 팔기로 동의하는 계약이 서명되었습니다." }
    ]
  },
  {
    id: "L3-178",
    word: "whereas",
    meaning: "반면에",
    examples: [
      { en: "She prefers tea, whereas I prefer coffee.", kr: "그녀는 차를 선호하는 반면에, 저는 커피를 선호합니다." },
      { en: "The first part was easy, whereas the second was difficult.", kr: "첫 부분은 쉬웠던 반면에, 두 번째 부분은 어려웠습니다." }
    ]
  },
  {
    id: "L3-179",
    word: "wherever",
    meaning: "어디든지",
    examples: [
      { en: "You can sit wherever you like.", kr: "당신은 원하는 어디든지 앉을 수 있습니다." },
      { en: "Wherever you go, I will follow.", kr: "당신이 어디를 가든지, 나는 따라갈 것입니다." }
    ]
  },
  {
    id: "L3-180",
    word: "whilst",
    meaning: "~하는 동안에, ~인 반면에",
    examples: [
      { en: "I listened to music whilst studying.", kr: "저는 공부하는 동안에 음악을 들었습니다." },
      { en: "The city has modern buildings, whilst the old town remains historical.", kr: "도시는 현대적인 건물을 가지고 있지만, 구시가지는 역사적으로 남아 있습니다." }
    ]
  },
  {
    id: "L3-181",
    word: "wholly",
    meaning: "완전히",
    examples: [
      { en: "The decision was wholly supported by the staff.", kr: "그 결정은 직원들에 의해 완전히 지지받았습니다." },
      { en: "His success was not wholly dependent on luck.", kr: "그의 성공은 전적으로 운에만 의존하는 것은 아니었습니다." }
    ]
  },
  {
    id: "L3-182",
    word: "whose",
    meaning: "누구의",
    examples: [
      { en: "Whose car is parked outside?", kr: "밖에 주차된 차는 누구의 것입니까?" },
      { en: "He is the person whose advice I trust.", kr: "그는 제가 조언을 신뢰하는 사람입니다." }
    ]
  },
  {
    id: "L3-183",
    word: "withdraw",
    meaning: "철회하다, 인출하다",
    examples: [
      { en: "She decided to withdraw her complaint.", kr: "그녀는 자신의 불만을 철회하기로 결정했습니다." },
      { en: "I need to withdraw some cash from the ATM.", kr: "저는 ATM에서 약간의 현금을 인출해야 합니다." }
    ]
  },
  {
    id: "L3-184",
    word: "accurate",
    meaning: "정확한",
    examples: [
      { en: "We need an accurate estimate of the total cost.", kr: "우리는 총 비용에 대한 정확한 추정치가 필요합니다." },
      { en: "The measurement must be accurate to the millimeter.", kr: "그 측정은 밀리미터까지 정확해야 합니다." }
    ]
  },
  {
    id: "L3-185",
    word: "accountable",
    meaning: "책임이 있는",
    examples: [
      { en: "The manager is accountable for the team's performance.", kr: "관리자는 팀의 성과에 책임이 있습니다." },
      { en: "Every public servant should be held accountable.", kr: "모든 공무원은 책임이 있다고 여겨져야 합니다." }
    ]
  },
  {
    id: "L3-186",
    word: "adhere",
    meaning: "고수하다, 들러붙다",
    examples: [
      { en: "We must adhere to the terms of the contract.", kr: "우리는 계약 조건을 고수해야 합니다." },
      { en: "The sticker will not adhere to the wet surface.", kr: "그 스티커는 젖은 표면에 들러붙지 않을 것입니다." }
    ]
  },
  {
    id: "L3-187",
    word: "allegedly",
    meaning: "주장하는 바에 의하면",
    examples: [
      { en: "The suspect was allegedly seen near the crime scene.", kr: "그 용의자는 주장하는 바에 의하면 범죄 현장 근처에서 목격되었습니다." },
      { en: "He was allegedly involved in the fraud.", kr: "그는 주장하는 바에 의하면 그 사기에 연루되었습니다." }
    ]
  },
  {
    id: "L3-188",
    word: "bizarre",
    meaning: "기이한, 특이한",
    examples: [
      { en: "The artist is known for his bizarre sculptures.", kr: "그 예술가는 그의 기이한 조각품들로 알려져 있습니다." },
      { en: "We heard a bizarre story about a talking dog.", kr: "우리는 말하는 개에 대한 특이한 이야기를 들었습니다." }
    ]
  },
  {
    id: "L3-189",
    word: "compatible",
    meaning: "호환되는, 양립할 수 있는",
    examples: [
      { en: "Is this charger compatible with my new phone?", kr: "이 충전기가 제 새 전화기와 호환됩니까?" },
      { en: "The two sides found their goals were not compatible.", kr: "양측은 그들의 목표가 양립할 수 없다는 것을 알았습니다." }
    ]
  },
  {
    id: "L3-190",
    word: "comprehensive",
    meaning: "종합적인, 포괄적인",
    examples: [
      { en: "The report provided a comprehensive analysis of the market.", kr: "그 보고서는 시장에 대한 종합적인 분석을 제공했습니다." },
      { en: "The insurance offers comprehensive coverage.", kr: "그 보험은 포괄적인 보장을 제공합니다." }
    ]
  },
  {
    id: "L3-191",
    word: "conscious",
    meaning: "의식하는, 자각하는",
    examples: [
      { en: "She was conscious of the time passing quickly.", kr: "그녀는 시간이 빠르게 지나가는 것을 의식하고 있었습니다." },
      { en: "It is important to be environmentally conscious.", kr: "환경적으로 자각하는 것이 중요합니다." }
    ]
  },
  {
    id: "L3-192",
    word: "consult",
    meaning: "상담하다, 참고하다",
    examples: [
      { en: "You should consult a doctor about your symptoms.", kr: "증상에 대해 의사와 상담해야 합니다." },
      { en: "Consult the map to find the correct direction.", kr: "올바른 방향을 찾기 위해 지도를 참고하세요." }
    ]
  },
  {
    id: "L3-193",
    word: "contrary",
    meaning: "반대의",
    examples: [
      { en: "On the contrary, I think he is right.", kr: "그와는 반대로, 저는 그가 옳다고 생각합니다." },
      { en: "She did the exact contrary of what she was told.", kr: "그녀는 들은 것과는 정반대의 일을 했습니다." }
    ]
  },
  {
    id: "L3-194",
    word: "convenient",
    meaning: "편리한",
    examples: [
      { en: "The location of the store is very convenient.", kr: "그 가게의 위치는 매우 편리합니다." },
      { en: "A digital wallet is a convenient way to pay.", kr: "디지털 지갑은 편리한 결제 수단입니다." }
    ]
  },
  {
    id: "L3-195",
    word: "corporate",
    meaning: "기업의",
    examples: [
      { en: "He works in the corporate headquarters.", kr: "그는 기업 본사에서 일합니다." },
      { en: "The company announced its new corporate strategy.", kr: "그 회사는 새로운 기업 전략을 발표했습니다." }
    ]
  },
  {
    id: "L3-196",
    word: "deduct",
    meaning: "공제하다, 빼다",
    examples: [
      { en: "The company will deduct the cost of the meal from your salary.", kr: "회사는 당신의 급여에서 식사 비용을 공제할 것입니다." },
      { en: "You can deduct business expenses from your taxes.", kr: "사업 비용을 세금에서 공제할 수 있습니다." }
    ]
  },
  {
    id: "L3-197",
    word: "deficit",
    meaning: "적자, 부족액",
    examples: [
      { en: "The company reported a large financial deficit.", kr: "그 회사는 큰 재정 적자를 보고했습니다." },
      { en: "He suffers from a sleep deficit.", kr: "그는 수면 부족에 시달립니다." }
    ]
  },
  {
    id: "L3-198",
    word: "deploy",
    meaning: "배치하다, 전개하다",
    examples: [
      { en: "The manager decided to deploy a new team to the project.", kr: "관리자는 프로젝트에 새로운 팀을 배치하기로 결정했습니다." },
      { en: "The troops were deployed to the border area.", kr: "군대는 국경 지역에 전개되었습니다." }
    ]
  },
  {
    id: "L3-199",
    word: "devote",
    meaning: "헌신하다, 전념하다",
    examples: [
      { en: "She devotes all her time to charity work.", kr: "그녀는 자신의 모든 시간을 자선 활동에 헌신합니다." },
      { en: "The book is devoted to the history of the region.", kr: "그 책은 그 지역의 역사에 전념합니다." }
    ]
  },
  {
    id: "L3-200",
    word: "discrepancy",
    meaning: "불일치, 차이",
    examples: [
      { en: "There is a major discrepancy between the two versions of the story.", kr: "그 이야기의 두 버전 사이에 큰 불일치가 있습니다." },
      { en: "The auditor found a discrepancy in the accounts.", kr: "감사관은 계정에서 차이(불일치)를 발견했습니다." }
    ]
  }
];


const wordsLevel3_Part3 = [
  {
    id: "L3-201",
    word: "domain",
    meaning: "영역, 분야",
    examples: [
      { en: "That subject is outside my domain of expertise.", kr: "그 주제는 제 전문 지식 영역 밖에 있습니다." },
      { en: "The research focuses on the domain of public health.", kr: "그 연구는 공중 보건 분야에 초점을 맞춥니다." }
    ]
  },
  {
    id: "L3-202",
    word: "duration",
    meaning: "지속 기간",
    examples: [
      { en: "The contract is for a duration of three years.", kr: "그 계약은 3년의 지속 기간 동안입니다." },
      { en: "She slept for the entire duration of the flight.", kr: "그녀는 비행의 전체 지속 기간 동안 잤습니다." }
    ]
  },
  {
    id: "L3-203",
    word: "dynamic",
    meaning: "역동적인",
    examples: [
      { en: "The market is a constantly dynamic environment.", kr: "그 시장은 끊임없이 역동적인 환경입니다." },
      { en: "She is a dynamic leader who motivates her team.", kr: "그녀는 팀원들에게 동기를 부여하는 역동적인 리더입니다." }
    ]
  },
  {
    id: "L3-204",
    word: "emphasize",
    meaning: "강조하다",
    examples: [
      { en: "The manager emphasized the importance of teamwork.", kr: "관리자는 팀워크의 중요성을 강조했습니다." },
      { en: "The graph is used to emphasize the recent increase in sales.", kr: "그 그래프는 최근의 매출 증가를 강조하기 위해 사용됩니다." }
    ]
  },
  {
    id: "L3-205",
    word: "exclude",
    meaning: "제외하다, 배제하다",
    examples: [
      { en: "The final price excludes transportation costs.", kr: "최종 가격은 운송비를 제외합니다." },
      { en: "We must exclude the possibility of human error.", kr: "우리는 인간의 실수 가능성을 배제해야 합니다." }
    ]
  },
  {
    id: "L3-206",
    word: "exhibit",
    meaning: "전시하다, 나타내다",
    examples: [
      { en: "The museum will exhibit the new collection next month.", kr: "그 박물관은 다음 달에 새로운 소장품을 전시할 것입니다." },
      { en: "He did not exhibit any signs of distress.", kr: "그는 어떤 고통의 징후도 나타내지 않았습니다." }
    ]
  },
  {
    id: "L3-207",
    word: "expand",
    meaning: "확장하다, 확대하다",
    examples: [
      { en: "The company plans to expand its business into Europe.", kr: "그 회사는 유럽으로 사업을 확장할 계획입니다." },
      { en: "Hot air causes gas to expand.", kr: "뜨거운 공기는 기체를 팽창하게 합니다." }
    ]
  },
  {
    id: "L3-208",
    word: "exploit",
    meaning: "착취하다, 활용하다",
    examples: [
      { en: "The company was criticized for exploiting low-wage workers.", kr: "그 회사는 저임금 노동자들을 착취했다는 비판을 받았습니다." },
      { en: "We should exploit this market opportunity fully.", kr: "우리는 이 시장 기회를 충분히 활용해야 합니다." }
    ]
  },
  {
    id: "L3-209",
    word: "export",
    meaning: "수출하다, 수출품",
    examples: [
      { en: "The country mainly exports agricultural products.", kr: "그 나라는 주로 농산물을 수출합니다." },
      { en: "Oil is a major export for the region.", kr: "석유는 그 지역의 주요 수출품입니다." }
    ]
  },
  {
    id: "L3-210",
    word: "external",
    meaning: "외부의",
    examples: [
      { en: "The problem requires external consultation.", kr: "그 문제는 외부 자문을 필요로 합니다." },
      { en: "The external walls of the house need painting.", kr: "집의 외부 벽은 페인트칠이 필요합니다." }
    ]
  },
  {
    id: "L3-211",
    word: "feasible",
    meaning: "실행 가능한",
    examples: [
      { en: "We need a solution that is both practical and feasible.", kr: "우리는 실용적이고 실행 가능한 해결책이 필요합니다." },
      { en: "Is it technically feasible to launch the product next month?", kr: "다음 달에 제품을 출시하는 것이 기술적으로 실행 가능합니까?" }
    ]
  },
  {
    id: "L3-212",
    word: "formula",
    meaning: "공식, 제조법",
    examples: [
      { en: "The scientist developed a new mathematical formula.", kr: "그 과학자는 새로운 수학 공식을 개발했습니다." },
      { en: "The soft drink company keeps its formula secret.", kr: "그 청량음료 회사는 제조법을 비밀로 유지합니다." }
    ]
  },
  {
    id: "L3-213",
    word: "foundation",
    meaning: "토대, 재단",
    examples: [
      { en: "A strong foundation is essential for the building.", kr: "강력한 토대는 건물에 필수적입니다." },
      { en: "The organization runs a charitable foundation.", kr: "그 조직은 자선 재단을 운영합니다." }
    ]
  },
  {
    id: "L3-214",
    word: "framework",
    meaning: "틀, 체계",
    examples: [
      { en: "The new law provides a legal framework for business.", kr: "새 법은 사업을 위한 법적 틀을 제공합니다." },
      { en: "We need a conceptual framework for the research.", kr: "우리는 연구를 위한 개념적 체계가 필요합니다." }
    ]
  },
  {
    id: "L3-215",
    word: "fund",
    meaning: "자금, 자금을 대다",
    examples: [
      { en: "The project requires additional funding.", kr: "그 프로젝트는 추가 자금 조달을 필요로 합니다." },
      { en: "The government will fund the construction of the new school.", kr: "정부는 새 학교 건설에 자금을 댈 것입니다." }
    ]
  },
  {
    id: "L3-216",
    word: "furthermore",
    meaning: "게다가, 더욱이",
    examples: [
      { en: "The book is insightful, and furthermore, it is entertaining.", kr: "그 책은 통찰력이 있으며, 게다가 재미있습니다." },
      { en: "The cost is high; furthermore, the quality is low.", kr: "비용이 많이 듭니다. 더욱이, 품질이 낮습니다." }
    ]
  },
  {
    id: "L3-217",
    word: "goal",
    meaning: "목표",
    examples: [
      { en: "Our primary goal is customer satisfaction.", kr: "우리의 주요 목표는 고객 만족입니다." },
      { en: "He scored a winning goal in the final minute.", kr: "그는 마지막 순간에 결승골을 넣었습니다." }
    ]
  },
  {
    id: "L3-218",
    word: "govern",
    meaning: "통치하다, 지배하다",
    examples: [
      { en: "The parliament governs the country.", kr: "의회는 그 나라를 통치합니다." },
      { en: "Emotions should not govern rational decisions.", kr: "감정은 이성적인 결정을 지배해서는 안 됩니다." }
    ]
  },
  {
    id: "L3-219",
    word: "graphic",
    meaning: "그래픽의, 생생한",
    examples: [
      { en: "The report included graphic images of the damage.", kr: "그 보고서는 피해에 대한 생생한 이미지를 포함했습니다." },
      { en: "She works as a graphic designer.", kr: "그녀는 그래픽 디자이너로 일합니다." }
    ]
  },
  {
    id: "L3-220",
    word: "hence",
    meaning: "그러므로, 따라서",
    examples: [
      { en: "The battery is low; hence, the device will not work.", kr: "배터리가 낮습니다. 그러므로, 장치가 작동하지 않을 것입니다." },
      { en: "He is moving to London, hence the house sale.", kr: "그는 런던으로 이사할 것입니다. 따라서 집을 팝니다." }
    ]
  },
  {
    id: "L3-221",
    word: "hierarchy",
    meaning: "계층, 계급 제도",
    examples: [
      { en: "The company has a clear management hierarchy.", kr: "그 회사는 명확한 경영 계층을 가지고 있습니다." },
      { en: "He is trying to climb the social hierarchy.", kr: "그는 사회 계급 제도를 오르려고 노력하고 있습니다." }
    ]
  },
  {
    id: "L3-222",
    word: "illustrate",
    meaning: "설명하다, 삽화",
    examples: [
      { en: "Can you illustrate your point with an example?", kr: "예를 들어 당신의 요점을 설명해 주시겠습니까?" },
      { en: "The children's book is beautifully illustrated.", kr: "그 동화책은 아름답게 삽화되어 있습니다." }
    ]
  },
  {
    id: "L3-223",
    word: "immigrant",
    meaning: "이민자",
    examples: [
      { en: "The city has a large immigrant population.", kr: "그 도시는 많은 이민자 인구를 가지고 있습니다." },
      { en: "She is a second-generation immigrant.", kr: "그녀는 2세대 이민자입니다." }
    ]
  },
  {
    id: "L3-224",
    word: "impact",
    meaning: "영향, 영향을 주다",
    examples: [
      { en: "The new policy will impact all employees.", kr: "새 정책은 모든 직원에게 영향을 미칠 것입니다." },
      { en: "The storm had a negative impact on the crops.", kr: "폭풍은 작물에 부정적인 영향을 미쳤습니다." }
    ]
  },
  {
    id: "L3-225",
    word: "implement",
    meaning: "실행하다, 이행하다",
    examples: [
      { en: "We plan to implement the new system next month.", kr: "우리는 다음 달에 새 시스템을 실행할 계획입니다." },
      { en: "The government needs to implement the reform quickly.", kr: "정부는 그 개혁을 빠르게 이행해야 합니다." }
    ]
  },
  {
    id: "L3-226",
    word: "implicate",
    meaning: "연루시키다, 관련시키다",
    examples: [
      { en: "The documents implicate him in the crime.", kr: "그 문서들은 그가 범죄에 연루되었음을 시사합니다." },
      { en: "He refused to speak, fearing he might implicate his friends.", kr: "그는 친구들을 연루시킬까 두려워 말하기를 거부했습니다." }
    ]
  },
  {
    id: "L3-227",
    word: "imply",
    meaning: "암시하다, 내포하다",
    examples: [
      { en: "His silence seemed to imply guilt.", kr: "그의 침묵은 유죄를 암시하는 것처럼 보였습니다." },
      { en: "The article implies a solution without stating it directly.", kr: "그 기사는 직접적으로 말하지 않고 해결책을 암시합니다." }
    ]
  },
  {
    id: "L3-228",
    word: "impose",
    meaning: "부과하다, 강요하다",
    examples: [
      { en: "The city decided to impose a new tax on tourists.", kr: "시는 관광객들에게 새로운 세금을 부과하기로 결정했습니다." },
      { en: "Don't impose your opinions on others.", kr: "당신의 의견을 다른 사람에게 강요하지 마세요." }
    ]
  },
  {
    id: "L3-229",
    word: "incentive",
    meaning: "장려책, 동기",
    examples: [
      { en: "The company offers financial incentives for high performance.", kr: "그 회사는 높은 성과에 대해 금전적 장려책을 제공합니다." },
      { en: "What is your main incentive for taking this job?", kr: "이 직업을 선택하는 당신의 주된 동기는 무엇입니까?" }
    ]
  },
  {
    id: "L3-230",
    word: "incidence",
    meaning: "발생률",
    examples: [
      { en: "The incidence of the disease has decreased significantly.", kr: "그 질병의 발생률이 상당히 감소했습니다." },
      { en: "We are studying the incidence of traffic accidents in the city.", kr: "우리는 그 도시의 교통사고 발생률을 연구하고 있습니다." }
    ]
  },
  {
    id: "L3-231",
    word: "incorporate",
    meaning: "통합하다, 포함하다",
    examples: [
      { en: "We should incorporate the new findings into our report.", kr: "우리는 새로운 발견들을 보고서에 통합해야 합니다." },
      { en: "The company was incorporated in 2010.", kr: "그 회사는 2010년에 법인으로 설립되었습니다." }
    ]
  },
  {
    id: "L3-232",
    word: "induce",
    meaning: "유도하다, 유발하다",
    examples: [
      { en: "The medicine is designed to induce sleep.", kr: "그 약은 수면을 유도하도록 고안되었습니다." },
      { en: "High prices may induce consumers to look for cheaper options.", kr: "높은 가격은 소비자들이 더 저렴한 옵션을 찾도록 유도할 수 있습니다." }
    ]
  },
  {
    id: "L3-233",
    word: "infer",
    meaning: "추론하다",
    examples: [
      { en: "We can infer his feelings from his body language.", kr: "우리는 그의 몸짓 언어에서 그의 감정을 추론할 수 있습니다." },
      { en: "What conclusion do you infer from the data?", kr: "그 자료에서 어떤 결론을 추론합니까?" }
    ]
  },
  {
    id: "L3-234",
    word: "infrastructure",
    meaning: "기반 시설",
    examples: [
      { en: "The city is investing in new communication infrastructure.", kr: "그 도시는 새로운 통신 기반 시설에 투자하고 있습니다." },
      { en: "Damaged infrastructure needs immediate repair.", kr: "손상된 기반 시설은 즉각적인 수리가 필요합니다." }
    ]
  },
  {
    id: "L3-235",
    word: "inhibit",
    meaning: "억제하다, 저해하다",
    examples: [
      { en: "Lack of funding will inhibit the development of the project.", kr: "자금 부족은 프로젝트의 개발을 저해할 것입니다." },
      { en: "The drug is designed to inhibit pain signals.", kr: "그 약은 통증 신호를 억제하도록 고안되었습니다." }
    ]
  },
  {
    id: "L3-236",
    word: "initial",
    meaning: "초기의",
    examples: [
      { en: "The initial phase of the construction is complete.", kr: "건설의 초기 단계가 완료되었습니다." },
      { en: "My initial reaction was surprise.", kr: "저의 초기 반응은 놀라움이었습니다." }
    ]
  },
  {
    id: "L3-237",
    word: "insight",
    meaning: "통찰력",
    examples: [
      { en: "The book provides deep insight into human psychology.", kr: "그 책은 인간 심리에 대한 깊은 통찰력을 제공합니다." },
      { en: "Her sudden insight helped solve the mystery.", kr: "그녀의 갑작스러운 통찰력이 미스터리를 해결하는 데 도움이 되었습니다." }
    ]
  },
  {
    id: "L3-238",
    word: "instance",
    meaning: "사례, 경우",
    examples: [
      { en: "For instance, look at the results from last year.", kr: "예를 들어, 작년의 결과를 보세요." },
      { en: "The incident was a rare instance of violence.", kr: "그 사건은 드문 폭력 사례였습니다." }
    ]
  },
  {
    id: "L3-239",
    word: "integral",
    meaning: "필수적인, 통합적인",
    examples: [
      { en: "Teamwork is an integral part of the project.", kr: "팀워크는 프로젝트의 필수적인 부분입니다." },
      { en: "The data is an integral element of the final analysis.", kr: "그 자료는 최종 분석의 통합적인 요소입니다." }
    ]
  },
  {
    id: "L3-240",
    word: "intense",
    meaning: "강렬한, 집중적인",
    examples: [
      { en: "They felt the intense heat of the desert sun.", kr: "그들은 사막 태양의 강렬한 열기를 느꼈습니다." },
      { en: "The problem requires intense concentration.", kr: "그 문제는 집중적인 집중을 필요로 합니다." }
    ]
  },
  {
    id: "L3-241",
    word: "invest",
    meaning: "투자하다",
    examples: [
      { en: "It is wise to invest money in education.", kr: "교육에 돈을 투자하는 것은 현명합니다." },
      { en: "They invested heavily in the renewable energy sector.", kr: "그들은 재생 에너지 부문에 막대하게 투자했습니다." }
    ]
  },
  {
    id: "L3-242",
    word: "isolate",
    meaning: "고립시키다, 분리하다",
    examples: [
      { en: "We need to isolate the patient to prevent infection.", kr: "우리는 감염을 막기 위해 환자를 고립시켜야 합니다." },
      { en: "The study attempts to isolate one variable.", kr: "그 연구는 하나의 변수를 분리하려고 시도합니다." }
    ]
  },
  {
    id: "L3-243",
    word: "issue",
    meaning: "쟁점, 발행하다",
    examples: [
      { en: "The main issue is the lack of funding.", kr: "주요 쟁점은 자금 부족입니다." },
      { en: "The company will issue a formal statement tomorrow.", kr: "그 회사는 내일 공식 성명을 발표할 것입니다." }
    ]
  },
  {
    id: "L3-244",
    word: "justify",
    meaning: "정당화하다, 해명하다",
    examples: [
      { en: "How can you justify leaving early?", kr: "일찍 떠나는 것을 어떻게 정당화할 수 있습니까?" },
      { en: "The manager was asked to justify the high expenses.", kr: "관리자는 높은 경비를 해명하도록 요청받았습니다." }
    ]
  },
  {
    id: "L3-245",
    word: "labor",
    meaning: "노동, 노력",
    examples: [
      { en: "The project requires intensive manual labor.", kr: "그 프로젝트는 집중적인 수동 노동을 필요로 합니다." },
      { en: "She gave birth after five hours of labor.", kr: "그녀는 5시간의 진통(노동) 끝에 출산했습니다." }
    ]
  },
  {
    id: "L3-246",
    word: "legal",
    meaning: "법적인, 합법적인",
    examples: [
      { en: "We need to seek legal advice on this matter.", kr: "우리는 이 문제에 대해 법적인 조언을 구할 필요가 있습니다." },
      { en: "The contract is completely legal and binding.", kr: "그 계약은 완전히 합법적이며 구속력이 있습니다." }
    ]
  },
  {
    id: "L3-247",
    word: "legislate",
    meaning: "입법하다",
    examples: [
      { en: "The government should legislate to protect consumer rights.", kr: "정부는 소비자 권리를 보호하기 위해 입법해야 합니다." },
      { en: "The city council plans to legislate on new zoning laws.", kr: "시의회는 새로운 구역 지정 법률에 대해 입법할 계획입니다." }
    ]
  },
  {
    id: "L3-248",
    word: "leverage",
    meaning: "영향력, 지렛대 효과",
    examples: [
      { en: "The company used its size as leverage in the negotiation.", kr: "그 회사는 협상에서 자사의 규모를 영향력으로 사용했습니다." },
      { en: "We can leverage technology to improve efficiency.", kr: "우리는 효율성을 개선하기 위해 기술을 활용할 수 있습니다." }
    ]
  },
  {
    id: "L3-249",
    word: "liberal",
    meaning: "진보적인, 자유로운",
    examples: [
      { en: "She has very liberal views on social issues.", kr: "그녀는 사회 문제에 대해 매우 진보적인 견해를 가지고 있습니다." },
      { en: "The university offers a liberal arts education.", kr: "그 대학은 자유로운 교양 교육을 제공합니다." }
    ]
  },
  {
    id: "L3-250",
    word: "license",
    meaning: "면허, 허가",
    examples: [
      { en: "You need a license to drive a motorcycle.", kr: "오토바이를 운전하려면 면허가 필요합니다." },
      { en: "The city issued a license to the new restaurant.", kr: "시는 새 레스토랑에 허가를 발급했습니다." }
    ]
  },
  {
    id: "L3-251",
    word: "likewise",
    meaning: "마찬가지로, 또한",
    examples: [
      { en: "The first experiment failed; likewise, the second attempt was unsuccessful.", kr: "첫 번째 실험은 실패했습니다. 마찬가지로, 두 번째 시도도 성공적이지 못했습니다." },
      { en: "I wish you a pleasant journey. Likewise!", kr: "즐거운 여행이 되기를 바랍니다. 저도 마찬가지예요!" }
    ]
  },
  {
    id: "L3-252",
    word: "maximize",
    meaning: "극대화하다",
    examples: [
      { en: "We need to maximize the use of our limited resources.", kr: "우리는 제한된 자원의 사용을 극대화해야 합니다." },
      { en: "The system is designed to maximize energy efficiency.", kr: "그 시스템은 에너지 효율성을 극대화하도록 설계되었습니다." }
    ]
  },
  {
    id: "L3-253",
    word: "mechanism",
    meaning: "메커니즘, 장치",
    examples: [
      { en: "The clock has a complex internal mechanism.", kr: "그 오래된 시계는 복잡한 내부 장치를 가지고 있습니다." },
      { en: "We need a mechanism to resolve disputes.", kr: "우리는 분쟁을 해결할 메커니즘이 필요합니다." }
    ]
  },
  {
    id: "L3-254",
    word: "mediate",
    meaning: "중재하다",
    examples: [
      { en: "An external party was called in to mediate the dispute.", kr: "외부 당사자가 분쟁을 중재하기 위해 소집되었습니다." },
      { en: "Meditation can help mediate stress levels.", kr: "명상은 스트레스 수준을 중재하는 데 도움이 될 수 있습니다." }
    ]
  },
  {
    id: "L3-255",
    word: "merely",
    meaning: "단지, 그저",
    examples: [
      { en: "It was merely a suggestion, not a command.", kr: "그것은 단지 제안일 뿐, 명령은 아니었습니다." },
      { en: "He is merely a student, not an expert.", kr: "그는 그저 학생일 뿐, 전문가가 아닙니다." }
    ]
  },
  {
    id: "L3-256",
    word: "minimum",
    meaning: "최소한의, 최소",
    examples: [
      { en: "The minimum age for the concert is 16.", kr: "그 콘서트의 최소 연령은 16세입니다." },
      { en: "We should aim for a minimum of two hours of study per day.", kr: "우리는 하루에 최소 2시간 공부하는 것을 목표로 해야 합니다." }
    ]
  },
  {
    id: "L3-257",
    word: "modify",
    meaning: "수정하다, 변경하다",
    examples: [
      { en: "We need to modify the design slightly.", kr: "우리는 디자인을 약간 수정할 필요가 있습니다." },
      { en: "The software was modified to include new features.", kr: "그 소프트웨어는 새로운 기능을 포함하도록 변경되었습니다." }
    ]
  },
  {
    id: "L3-258",
    word: "monitor",
    meaning: "감시하다, 관찰하다",
    examples: [
      { en: "The team will monitor the patient's vitals closely.", kr: "팀은 환자의 활력 징후를 면밀히 관찰할 것입니다." },
      { en: "We need to monitor traffic flow on the highway.", kr: "우리는 고속도로의 교통 흐름을 감시해야 합니다." }
    ]
  },
  {
    id: "L3-259",
    word: "multiple",
    meaning: "다수의, 복합적인",
    examples: [
      { en: "The problem has multiple contributing factors.", kr: "그 문제는 다수의 기여 요인들을 가지고 있습니다." },
      { en: "She speaks multiple languages fluently.", kr: "그녀는 다수의 언어를 유창하게 구사합니다." }
    ]
  },
  {
    id: "L3-260",
    word: "mutual",
    meaning: "상호의, 공통의",
    examples: [
      { en: "The agreement was made with mutual consent.", kr: "그 합의는 상호 동의로 이루어졌습니다." },
      { en: "They share a mutual love of classic films.", kr: "그들은 고전 영화에 대한 공통의 사랑을 공유합니다." }
    ]
  },
  {
    id: "L3-261",
    word: "neglect",
    meaning: "방치하다, 소홀히 하다",
    examples: [
      { en: "He neglected his duties and was fired.", kr: "그는 자신의 임무를 소홀히 하여 해고되었습니다." },
      { en: "The garden was overgrown and showed signs of neglect.", kr: "정원은 무성했고 방치된 징후를 보였습니다." }
    ]
  },
  {
    id: "L3-262",
    word: "negotiate",
    meaning: "협상하다",
    examples: [
      { en: "They spent hours negotiating the terms of the contract.", kr: "그들은 계약 조건을 협상하는 데 몇 시간을 보냈습니다." },
      { en: "We need to negotiate a better price with the supplier.", kr: "우리는 공급업체와 더 나은 가격을 협상해야 합니다." }
    ]
  },
  {
    id: "L3-263",
    word: "neutral",
    meaning: "중립적인",
    examples: [
      { en: "The mediator remained strictly neutral during the talks.", kr: "중재자는 회담 동안 엄격하게 중립을 유지했습니다." },
      { en: "The color of the walls is a neutral beige.", kr: "벽의 색은 중립적인 베이지색입니다." }
    ]
  },
  {
    id: "L3-264",
    word: "notable",
    meaning: "주목할 만한, 현저한",
    examples: [
      { en: "The building is notable for its unique architecture.", kr: "그 건물은 독특한 건축으로 주목할 만합니다." },
      { en: "She made a notable contribution to the field of biology.", kr: "그녀는 생물학 분야에 현저한 기여를 했습니다." }
    ]
  },
  {
    id: "L3-265",
    word: "notion",
    meaning: "개념, 생각",
    examples: [
      { en: "I disagree with the notion of absolute authority.", kr: "저는 절대적인 권위라는 개념에 동의하지 않습니다." },
      { en: "She had a sudden notion to adopt a pet.", kr: "그녀는 갑자기 애완동물을 입양하겠다는 생각이 들었습니다." }
    ]
  },
  {
    id: "L3-266",
    word: "notorious",
    meaning: "악명 높은",
    examples: [
      { en: "The abandoned house is notorious for strange occurrences.", kr: "그 버려진 집은 이상한 일들로 악명이 높습니다." },
      { en: "He is a notorious gambler who lost his fortune.", kr: "그는 자신의 재산을 탕진한 악명 높은 도박꾼입니다." }
    ]
  },
  {
    id: "L3-267",
    word: "objective",
    meaning: "객관적인, 목표",
    examples: [
      { en: "The scientist must remain objective when analyzing the data.", kr: "과학자는 데이터를 분석할 때 객관성을 유지해야 합니다." },
      { en: "What is your main objective for this year?", kr: "올해 당신의 주된 목표는 무엇입니까?" }
    ]
  },
  {
    id: "L3-268",
    word: "obtain",
    meaning: "얻다, 획득하다",
    examples: [
      { en: "You can obtain the necessary forms online.", kr: "필요한 양식들을 온라인에서 얻을 수 있습니다." },
      { en: "We need to obtain permission from the owner.", kr: "우리는 소유주로부터 허가를 획득해야 합니다." }
    ]
  },
  {
    id: "L3-269",
    word: "occur",
    meaning: "발생하다, 떠오르다",
    examples: [
      { en: "The accident occurred at midnight.", kr: "그 사고는 자정에 발생했습니다." },
      { en: "It didn't occur to me to ask for a refund.", kr: "환불을 요청해야겠다는 생각이 나에게 떠오르지 않았습니다." }
    ]
  },
  {
    id: "L3-270",
    word: "ongoing",
    meaning: "진행 중인",
    examples: [
      { en: "The issue is part of an ongoing debate.", kr: "그 쟁점은 진행 중인 논쟁의 일부입니다." },
      { en: "The company is making ongoing efforts to improve customer service.", kr: "그 회사는 고객 서비스 개선을 위해 지속적인 노력을 하고 있습니다." }
    ]
  },
  {
    id: "L3-271",
    word: "opaque",
    meaning: "불투명한, 이해하기 어려운",
    examples: [
      { en: "The windows were made of opaque glass for privacy.", kr: "창문은 사생활 보호를 위해 불투명한 유리로 만들어졌습니다." },
      { en: "The legal document was opaque and full of jargon.", kr: "그 법률 문서는 이해하기 어렵고 전문 용어로 가득했습니다." }
    ]
  },
  {
    id: "L3-272",
    word: "oppose",
    meaning: "반대하다",
    examples: [
      { en: "The majority of the committee members oppose the change.", kr: "위원회 구성원 대다수가 그 변화에 반대합니다." },
      { en: "They opposed the construction of the new power plant.", kr: "그들은 새 발전소 건설에 반대했습니다." }
    ]
  },
  {
    id: "L3-273",
    word: "optimum",
    meaning: "최적의, 최고의",
    examples: [
      { en: "We need to operate at the optimum level of efficiency.", kr: "우리는 최적의 효율성 수준에서 운영해야 합니다." },
      { en: "The seeds germinate best at the optimum temperature.", kr: "그 씨앗들은 최적의 온도에서 가장 잘 발아합니다." }
    ]
  },
  {
    id: "L3-274",
    word: "orient",
    meaning: "방향을 잡다, 지향하게 하다",
    examples: [
      { en: "It is difficult to orient yourself in the dark forest.", kr: "어두운 숲속에서 방향을 잡는 것은 어렵습니다." },
      { en: "The company’s strategy is oriented towards innovation.", kr: "그 회사의 전략은 혁신을 지향하게 되어 있습니다." }
    ]
  },
  {
    id: "L3-275",
    word: "outcome",
    meaning: "결과, 성과",
    examples: [
      { en: "The outcome of the election surprised everyone.", kr: "선거 결과가 모두를 놀라게 했습니다." },
      { en: "We are waiting for the final outcome of the investigation.", kr: "우리는 조사의 최종 결과를 기다리고 있습니다." }
    ]
  },
  {
    id: "L3-276",
    word: "output",
    meaning: "산출, 출력",
    examples: [
      { en: "The factory's output increased significantly this month.", kr: "그 공장의 산출이 이번 달에 상당히 증가했습니다." },
      { en: "The printer provides a high-quality output.", kr: "그 프린터는 고품질 출력을 제공합니다." }
    ]
  },
  {
    id: "L3-277",
    word: "oversee",
    meaning: "감독하다, 관리하다",
    examples: [
      { en: "A manager was hired to oversee the daily operations.", kr: "매일의 운영을 감독하기 위해 관리자가 고용되었습니다." },
      { en: "He oversees the production of over 50 products.", kr: "그는 50개가 넘는 제품의 생산을 관리합니다." }
    ]
  },
  {
    id: "L3-278",
    word: "overwhelm",
    meaning: "압도하다, 제압하다",
    examples: [
      { en: "The sheer volume of work began to overwhelm him.", kr: "순수한 업무량에 그는 압도되기 시작했습니다." },
      { en: "The army was able to overwhelm the enemy forces.", kr: "그 군대는 적군을 제압할 수 있었습니다." }
    ]
  },
  {
    id: "L3-279",
    word: "overlap",
    meaning: "겹치다, 중복되다",
    examples: [
      { en: "The two projects have a significant overlap in scope.", kr: "두 프로젝트는 범위에 상당한 중복이 있습니다." },
      { en: "The new schedule is designed so that no classes overlap.", kr: "새로운 시간표는 어떤 수업도 겹치지 않도록 설계되었습니다." }
    ]
  },
  {
    id: "L3-280",
    word: "appraise",
    meaning: "평가하다, 감정하다",
    examples: [
      { en: "We hired an expert to appraise the value of the antique.", kr: "우리는 골동품의 가치를 감정하기 위해 전문가를 고용했습니다." },
      { en: "The manager will appraise the performance of all employees.", kr: "관리자는 모든 직원의 성과를 평가할 것입니다." }
    ]
  },
  {
    id: "L3-281",
    word: "articulate",
    meaning: "분명히 표현하다",
    examples: [
      { en: "She is very articulate and expresses her ideas clearly.", kr: "그녀는 매우 분명히 표현하며 자신의 아이디어를 명확하게 나타냅니다." },
      { en: "It was difficult for him to articulate his feelings.", kr: "그가 자신의 감정을 분명히 표현하는 것은 어려웠습니다." }
    ]
  },
  {
    id: "L3-282",
    word: "attest",
    meaning: "증명하다, 입증하다",
    examples: [
      { en: "The growth figures attest to the success of the new strategy.", kr: "성장 수치는 새 전략의 성공을 증명합니다." },
      { en: "I can personally attest to his honesty and integrity.", kr: "저는 그의 정직과 청렴함을 개인적으로 입증할 수 있습니다." }
    ]
  },
  {
    id: "L3-283",
    word: "candid",
    meaning: "솔직한, 정직한",
    examples: [
      { en: "I appreciate your candid opinion on the matter.", kr: "그 문제에 대한 당신의 솔직한 의견에 감사합니다." },
      { en: "The politician was surprisingly candid about his failures.", kr: "그 정치인은 자신의 실패에 대해 놀라울 정도로 정직했습니다." }
    ]
  },
  {
    id: "L3-284",
    word: "circulate",
    meaning: "순환하다, 유통하다",
    examples: [
      { en: "The fan helps to circulate air throughout the room.", kr: "선풍기는 방 전체에 공기를 순환시키는 데 도움을 줍니다." },
      { en: "The rumor began to circulate quickly through the office.", kr: "그 소문은 사무실 전체에 빠르게 유통되기 시작했습니다." }
    ]
  },
  {
    id: "L3-285",
    word: "confer",
    meaning: "협의하다, 수여하다",
    examples: [
      { en: "The doctors will confer to decide on the best treatment plan.", kr: "의사들은 최선의 치료 계획을 결정하기 위해 협의할 것입니다." },
      { en: "The university conferred an honorary degree upon the distinguished guest.", kr: "그 대학은 그 저명한 손님에게 명예 학위를 수여했습니다." }
    ]
  },
  {
    id: "L3-286",
    word: "congenial",
    meaning: "마음에 드는, 마음이 맞는",
    examples: [
      { en: "She found a congenial atmosphere in the small coffee shop.", kr: "그녀는 그 작은 커피숍에서 마음에 드는 분위기를 발견했습니다." },
      { en: "He is a congenial colleague who is easy to work with.", kr: "그는 함께 일하기 쉬운 마음이 맞는 동료입니다." }
    ]
  },
  {
    id: "L3-287",
    word: "constrain",
    meaning: "제약하다, 강요하다",
    examples: [
      { en: "The budget constraints constrained the scope of the project.", kr: "예산 제약이 프로젝트의 범위를 제약했습니다." },
      { en: "She felt constrained by her promise to keep the secret.", kr: "그녀는 비밀을 지키겠다는 자신의 약속에 강요받는다고 느꼈습니다." }
    ]
  },
  {
    id: "L3-288",
    word: "convene",
    meaning: "소집하다, 회합하다",
    examples: [
      { en: "The committee will convene next week to discuss the proposal.", kr: "위원회는 다음 주에 그 제안을 논의하기 위해 소집될 것입니다." },
      { en: "The global leaders convened for the annual summit.", kr: "세계 지도자들은 연례 정상회담을 위해 회합했습니다." }
    ]
  },
  {
    id: "L3-289",
    word: "curtail",
    meaning: "축소하다, 줄이다",
    examples: [
      { en: "The company was forced to curtail spending on non-essential items.", kr: "그 회사는 비필수 품목에 대한 지출을 축소할 수밖에 없었습니다." },
      { en: "We had to curtail our vacation due to the bad weather.", kr: "우리는 악천후 때문에 휴가를 줄여야 했습니다." }
    ]
  },
  {
    id: "L3-290",
    word: "disperse",
    meaning: "흩어지게 하다, 해산하다",
    examples: [
      { en: "The police used tear gas to disperse the crowd.", kr: "경찰은 최루탄을 사용하여 군중을 해산시켰습니다." },
      { en: "The seeds disperse by wind over a wide area.", kr: "씨앗들은 바람에 의해 넓은 지역에 흩어지게 됩니다." }
    ]
  },
  {
    id: "L3-291",
    word: "divulge",
    meaning: "누설하다, 폭로하다",
    examples: [
      { en: "The journalist refused to divulge the name of his source.", kr: "그 기자는 자신의 출처의 이름을 누설하는 것을 거부했습니다." },
      { en: "Do not divulge any confidential information to outsiders.", kr: "외부인에게 어떤 기밀 정보도 누설하지 마세요." }
    ]
  },
  {
    id: "L3-292",
    word: "elucidate",
    meaning: "설명하다, 명료하게 하다",
    examples: [
      { en: "The professor stopped to elucidate the complex theory.", kr: "그 교수는 복잡한 이론을 설명하기 위해 멈췄습니다." },
      { en: "Can you elucidate your position on the matter?", kr: "그 문제에 대한 당신의 입장을 명료하게 해 주시겠습니까?" }
    ]
  },
  {
    id: "L3-293",
    word: "expedite",
    meaning: "신속히 처리하다",
    examples: [
      { en: "We need to expedite the application process for urgent cases.", kr: "우리는 긴급한 사례를 위해 신청 절차를 신속히 처리해야 합니다." },
      { en: "The new software will expedite data analysis.", kr: "새 소프트웨어는 데이터 분석을 신속히 처리할 것입니다." }
    ]
  },
  {
    id: "L3-294",
    word: "foster",
    meaning: "육성하다, 촉진하다",
    examples: [
      { en: "The program aims to foster cooperation among the members.", kr: "그 프로그램은 구성원들 사이에 협력을 육성하는 것을 목표로 합니다." },
      { en: "Good leadership fosters trust and loyalty.", kr: "좋은 리더십은 신뢰와 충성심을 촉진합니다." }
    ]
  },
  {
    id: "L3-295",
    word: "inaugurate",
    meaning: "취임시키다, 시작하다",
    examples: [
      { en: "The new president will be inaugurated next month.", kr: "새 대통령은 다음 달에 취임할 것입니다." },
      { en: "The company will inaugurate its new headquarters with a grand ceremony.", kr: "그 회사는 성대한 행사로 새 본사를 시작(개시)할 것입니다." }
    ]
  },
  {
    id: "L3-296",
    word: "incur",
    meaning: "(손해를) 입다, 발생시키다",
    examples: [
      { en: "The project incurred unexpected costs due to delays.", kr: "그 프로젝트는 지연 때문에 예상치 못한 비용을 발생시켰습니다." },
      { en: "The company incurred heavy fines for violating the safety regulations.", kr: "그 회사는 안전 규정 위반으로 막대한 벌금을 입었습니다." }
    ]
  },
  {
    id: "L3-297",
    word: "inhibit",
    meaning: "억제하다, 저해하다",
    examples: [
      { en: "Fear of failure can inhibit a person's creativity.", kr: "실패에 대한 두려움은 사람의 창의성을 억제할 수 있습니다." },
      { en: "The extreme cold will inhibit the growth of the crops.", kr: "극심한 추위는 작물의 성장을 저해할 것입니다." }
    ]
  },
  {
    id: "L3-298",
    word: "invincible",
    meaning: "무적의, 천하무적의",
    examples: [
      { en: "The football team felt invincible after winning every game of the season.", kr: "그 축구팀은 시즌의 모든 경기에서 승리한 후 무적으로 느꼈습니다." },
      { en: "He believed he was invincible until he faced a major setback.", kr: "그는 큰 차질에 직면할 때까지 자신이 천하무적이라고 믿었습니다." }
    ]
  },
  {
    id: "L3-299",
    word: "leverage",
    meaning: "영향력, 지렛대 효과",
    examples: [
      { en: "The small firm used its unique technology as leverage in negotiations.", kr: "그 작은 회사는 협상에서 자신들의 독특한 기술을 영향력으로 사용했습니다." },
      { en: "We can leverage social media to quickly spread the message.", kr: "우리는 메시지를 빠르게 퍼뜨리기 위해 소셜 미디어를 지렛대 효과로 활용할 수 있습니다." }
    ]
  },
  {
    id: "L3-300",
    word: "parameter",
    meaning: "매개변수, 기준",
    examples: [
      { en: "We must define the parameters of the study clearly.", kr: "우리는 연구의 매개변수(기준)를 명확하게 정의해야 합니다." },
      { en: "The budget set strict financial parameters.", kr: "예산은 엄격한 재정적 기준을 설정했습니다." }
    ]
  }
];


const wordsLevel3_Part4 = [
  {
    id: "L3-301",
    word: "parallel",
    meaning: "평행한, 유사한",
    examples: [
      { en: "The two roads run parallel to the river.", kr: "두 도로는 강과 평행하게 이어집니다." },
      { en: "The situation has a close parallel in history.", kr: "그 상황은 역사에서 밀접한 유사점을 가집니다." }
    ]
  },
  {
    id: "L3-302",
    word: "periodical",
    meaning: "정기 간행물, 주기적인",
    examples: [
      { en: "The library subscribes to many academic periodicals.", kr: "그 도서관은 많은 학술 정기 간행물을 구독합니다." },
      { en: "The machine requires periodical maintenance.", kr: "그 기계는 주기적인 유지보수를 필요로 합니다." }
    ]
  },
  {
    id: "L3-303",
    word: "permanent",
    meaning: "영구적인",
    examples: [
      { en: "She is looking for a permanent position at the company.", kr: "그녀는 그 회사에서 영구적인(정규) 직책을 찾고 있습니다." },
      { en: "The ink is permanent and cannot be washed out.", kr: "그 잉크는 영구적이며 지워지지 않습니다." }
    ]
  },
  {
    id: "L3-304",
    word: "perspective",
    meaning: "관점, 시각",
    examples: [
      { en: "Try to look at the issue from a new perspective.", kr: "새로운 관점에서 그 문제를 바라보려고 노력하세요." },
      { en: "His unique perspective made his work interesting.", kr: "그의 독특한 시각이 그의 작품을 흥미롭게 만들었습니다." }
    ]
  },
  {
    id: "L3-305",
    word: "phase",
    meaning: "단계, 국면",
    examples: [
      { en: "The project is currently in the planning phase.", kr: "그 프로젝트는 현재 계획 단계에 있습니다." },
      { en: "The moon goes through different phases each month.", kr: "달은 매달 다른 국면들을 거칩니다." }
    ]
  },
  {
    id: "L3-306",
    word: "phenomenon",
    meaning: "현상",
    examples: [
      { en: "Global warming is a complex phenomenon.", kr: "지구 온난화는 복잡한 현상입니다." },
      { en: "The rapid spread of misinformation is a new social phenomenon.", kr: "잘못된 정보의 빠른 확산은 새로운 사회 현상입니다." }
    ]
  },
  {
    id: "L3-307",
    word: "precise",
    meaning: "정확한, 정밀한",
    examples: [
      { en: "We need the precise measurements before we can start.", kr: "우리는 시작하기 전에 정확한 측정이 필요합니다." },
      { en: "Can you give me the precise time of the incident?", kr: "그 사건의 정밀한 시간을 말씀해 주시겠습니까?" }
    ]
  },
  {
    id: "L3-308",
    word: "predict",
    meaning: "예측하다",
    examples: [
      { en: "It is hard to predict the stock market accurately.", kr: "주식 시장을 정확하게 예측하기는 어렵습니다." },
      { en: "Analysts predict a slow growth rate next year.", kr: "분석가들은 내년에 느린 성장률을 예측합니다." }
    ]
  },
  {
    id: "L3-309",
    word: "predominantly",
    meaning: "주로, 대부분",
    examples: [
      { en: "The audience was predominantly female.", kr: "청중은 주로 여성이었습니다." },
      { en: "The diet consists predominantly of fresh vegetables.", kr: "그 식단은 대부분 신선한 채소로 구성되어 있습니다." }
    ]
  },
  {
    id: "L3-310",
    word: "preliminary",
    meaning: "예비의, 사전의",
    examples: [
      { en: "The committee is reviewing the preliminary results of the survey.", kr: "위원회는 설문조사의 예비 결과를 검토하고 있습니다." },
      { en: "We had a preliminary discussion before the official meeting.", kr: "우리는 공식 회의 전에 사전 논의를 가졌습니다." }
    ]
  },
  {
    id: "L3-311",
    word: "presume",
    meaning: "추정하다, 가정하다",
    examples: [
      { en: "I presume you've already met my colleague.", kr: "저는 당신이 이미 제 동료를 만났다고 추정합니다." },
      { en: "We must presume innocence until proven guilty.", kr: "유죄가 입증될 때까지는 무죄를 가정해야 합니다." }
    ]
  },
  {
    id: "L3-312",
    word: "prior",
    meaning: "이전의, 앞선",
    examples: [
      { en: "You need prior authorization before entering.", kr: "입장하기 전에 사전 승인이 필요합니다." },
      { en: "The events prior to the war were complex.", kr: "전쟁에 앞선 사건들은 복잡했습니다." }
    ]
  },
  {
    id: "L3-313",
    word: "process",
    meaning: "과정, 처리하다",
    examples: [
      { en: "Learning a new language is a long process.", kr: "새로운 언어를 배우는 것은 긴 과정입니다." },
      { en: "The application is being processed by the admissions office.", kr: "그 지원서는 입학처에서 처리되고 있습니다." }
    ]
  },
  {
    id: "L3-314",
    word: "prohibit",
    meaning: "금지하다",
    examples: [
      { en: "Smoking is strictly prohibited inside the building.", kr: "건물 내에서는 흡연이 엄격하게 금지됩니다." },
      { en: "The contract prohibits early termination.", kr: "그 계약은 조기 해지를 금지합니다." }
    ]
  },
  {
    id: "L3-315",
    word: "profound",
    meaning: "심오한, 지대한",
    examples: [
      { en: "The film offers a profound insight into human nature.", kr: "그 영화는 인간 본성에 대한 심오한 통찰을 제공합니다." },
      { en: "The crisis had a profound effect on the whole country.", kr: "그 위기는 온 나라에 지대한 영향을 미쳤습니다." }
    ]
  },
  {
    id: "L3-316",
    word: "promote",
    meaning: "촉진하다, 승진시키다",
    examples: [
      { en: "The campaign aims to promote local businesses.", kr: "그 캠페인은 지역 상권 활성화를 촉진하는 것을 목표로 합니다." },
      { en: "She was promoted to the position of senior manager.", kr: "그녀는 선임 관리자 직책으로 승진되었습니다." }
    ]
  },
  {
    id: "L3-317",
    word: "protocol",
    meaning: "규약, 의정서",
    examples: [
      { en: "All data transfers must adhere to the security protocol.", kr: "모든 데이터 전송은 보안 규약을 준수해야 합니다." },
      { en: "The diplomats followed the strict diplomatic protocol.", kr: "외교관들은 엄격한 외교 의정서를 따랐습니다." }
    ]
  },
  {
    id: "L3-318",
    word: "qualify",
    meaning: "자격을 얻다, 한정하다",
    examples: [
      { en: "You must pass the test to qualify as a teacher.", kr: "선생님이 되기 위해 시험에 합격하여 자격을 얻어야 합니다." },
      { en: "I would like to qualify my earlier statement about the budget.", kr: "저는 예산에 대한 제 이전 진술을 한정하고 싶습니다." }
    ]
  },
  {
    id: "L3-319",
    word: "quantity",
    meaning: "양",
    examples: [
      { en: "We need a large quantity of raw materials.", kr: "우리는 많은 양의 원자재가 필요합니다." },
      { en: "The experiment requires a small quantity of the chemical.", kr: "그 실험은 소량의 화학 물질을 필요로 합니다." }
    ]
  },
  {
    id: "L3-320",
    word: "quota",
    meaning: "할당량",
    examples: [
      { en: "Each salesperson has a monthly sales quota.", kr: "각 영업사원은 월별 판매 할당량을 가지고 있습니다." },
      { en: "The government set a quota on imported goods.", kr: "정부는 수입품에 대한 할당량을 설정했습니다." }
    ]
  },
  {
    id: "L3-321",
    word: "radical",
    meaning: "근본적인, 급진적인",
    examples: [
      { en: "The committee proposed a radical solution to the problem.", kr: "위원회는 문제에 대한 근본적인 해결책을 제안했습니다." },
      { en: "He holds very radical views on social change.", kr: "그는 사회 변화에 대해 매우 급진적인 견해를 가지고 있습니다." }
    ]
  },
  {
    id: "L3-322",
    word: "random",
    meaning: "무작위의, 임의의",
    examples: [
      { en: "The winner was chosen at random.", kr: "당첨자는 무작위로 선택되었습니다." },
      { en: "We conducted a random inspection of the factory.", kr: "우리는 공장에 대한 임의의 검사를 실시했습니다." }
    ]
  },
  {
    id: "L3-323",
    word: "range",
    meaning: "범위, 다양하다",
    examples: [
      { en: "The store carries a wide range of products.", kr: "그 가게는 광범위한 제품들을 취급합니다." },
      { en: "Temperatures will range from 10 to 20 degrees today.", kr: "오늘 기온은 10도에서 20도 사이일 것입니다." }
    ]
  },
  {
    id: "L3-324",
    word: "rational",
    meaning: "합리적인, 이성적인",
    examples: [
      { en: "We must find a rational explanation for the incident.", kr: "우리는 그 사건에 대한 합리적인 설명을 찾아야 합니다." },
      { en: "Try to be rational and not emotional.", kr: "이성적이 되려고 노력하고 감정적이 되지 마세요." }
    ]
  },
  {
    id: "L3-325",
    word: "recede",
    meaning: "물러나다, 약해지다",
    examples: [
      { en: "The floodwaters slowly began to recede.", kr: "홍수가 난 물이 서서히 물러나기 시작했습니다." },
      { en: "His painful memories gradually receded over time.", kr: "그의 고통스러운 기억들은 시간이 지남에 따라 점차 약해졌습니다." }
    ]
  },
  {
    id: "L3-326",
    word: "recover",
    meaning: "회복하다, 되찾다",
    examples: [
      { en: "It took him months to fully recover from the illness.", kr: "그가 질병에서 완전히 회복하는 데 몇 달이 걸렸습니다." },
      { en: "The police managed to recover the stolen goods.", kr: "경찰은 도난당한 물품을 되찾는 데 성공했습니다." }
    ]
  },
  {
    id: "L3-327",
    word: "refer",
    meaning: "언급하다, 참조하다",
    examples: [
      { en: "I refer you to the company policy on refunds.", kr: "환불에 대한 회사 정책을 참조하십시오." },
      { en: "The speaker did not refer to the recent controversy.", kr: "연사는 최근 논란에 대해 언급하지 않았습니다." }
    ]
  },
  {
    id: "L3-328",
    word: "reflect",
    meaning: "반영하다, 반사하다",
    examples: [
      { en: "The calm water reflects the surrounding mountains.", kr: "잔잔한 물이 주변 산들을 반사합니다." },
      { en: "The company's problems reflect the poor state of the economy.", kr: "그 회사의 문제는 경제의 좋지 않은 상태를 반영합니다." }
    ]
  },
  {
    id: "L3-329",
    word: "reform",
    meaning: "개혁하다, 개혁",
    examples: [
      { en: "The government promised to reform the healthcare system.", kr: "정부는 의료 시스템을 개혁하겠다고 약속했습니다." },
      { en: "Tax reform is a major political issue.", kr: "세제 개혁은 주요 정치적 쟁점입니다." }
    ]
  },
  {
    id: "L3-330",
    word: "regulate",
    meaning: "규제하다, 조절하다",
    examples: [
      { en: "The agency regulates the safety of food and drugs.", kr: "그 기관은 식품과 약품의 안전을 규제합니다." },
      { en: "A thermostat regulates the temperature in the room.", kr: "온도 조절기가 방의 온도를 조절합니다." }
    ]
  },
  {
    id: "L3-331",
    word: "reinforce",
    meaning: "강화하다, 보강하다",
    examples: [
      { en: "The new data will reinforce our earlier conclusions.", kr: "새로운 자료는 우리의 이전 결론을 강화할 것입니다." },
      { en: "The workers used steel beams to reinforce the bridge.", kr: "작업자들은 강철 빔을 사용하여 다리를 보강했습니다." }
    ]
  },
  {
    id: "L3-332",
    word: "reject",
    meaning: "거절하다, 거부하다",
    examples: [
      { en: "The committee decided to reject the proposal.", kr: "위원회는 그 제안을 거절하기로 결정했습니다." },
      { en: "The body might reject the transplanted organ.", kr: "신체는 이식된 장기를 거부할 수도 있습니다." }
    ]
  },
  {
    id: "L3-333",
    word: "relevant",
    meaning: "관련된, 적절한",
    examples: [
      { en: "Is this information relevant to the case?", kr: "이 정보가 사건과 관련이 있습니까?" },
      { en: "Please limit your comments to relevant topics.", kr: "의견을 관련된 주제로만 제한해 주세요." }
    ]
  },
  {
    id: "L3-334",
    word: "replicate",
    meaning: "복제하다, 되풀이하다",
    examples: [
      { en: "Scientists attempted to replicate the results of the original experiment.", kr: "과학자들은 원래 실험의 결과를 복제하려고 시도했습니다." },
      { en: "The machine can replicate the key precisely.", kr: "그 기계는 열쇠를 정확하게 복제할 수 있습니다." }
    ]
  },
  {
    id: "L3-335",
    word: "reproduce",
    meaning: "번식하다, 복제하다",
    examples: [
      { en: "The artist has the sole right to reproduce his work.", kr: "그 예술가는 자신의 작품을 복제할 유일한 권리를 가지고 있습니다." },
      { en: "Many species of fish reproduce during the spring.", kr: "많은 종의 물고기가 봄 동안 번식합니다." }
    ]
  },
  {
    id: "L3-336",
    word: "resort",
    meaning: "의존하다, 리조트",
    examples: [
      { en: "They had to resort to force to open the door.", kr: "그들은 문을 열기 위해 힘에 의존해야 했습니다." },
      { en: "We are planning a trip to a seaside resort.", kr: "우리는 해변 리조트로 여행을 계획하고 있습니다." }
    ]
  },
  {
    id: "L3-337",
    word: "restrain",
    meaning: "억제하다, 제지하다",
    examples: [
      { en: "She had to restrain her laughter during the formal speech.", kr: "그녀는 공식 연설 동안 웃음을 억제해야 했습니다." },
      { en: "Security guards were called to restrain the aggressive fan.", kr: "경호원들이 난폭한 팬을 제지하기 위해 호출되었습니다." }
    ]
  },
  {
    id: "L3-338",
    word: "retrieve",
    meaning: "되찾다, 회수하다",
    examples: [
      { en: "I need to retrieve the file from the backup server.", kr: "저는 백업 서버에서 파일을 되찾아와야 합니다." },
      { en: "The dog was trained to retrieve objects.", kr: "그 개는 물건을 회수하도록 훈련되었습니다." }
    ]
  },
  {
    id: "L3-339",
    word: "revenue",
    meaning: "수익, 세입",
    examples: [
      { en: "The company's revenue increased significantly this year.", kr: "그 회사의 수익이 올해 상당히 증가했습니다." },
      { en: "The new tax generated substantial government revenue.", kr: "새 세금은 상당한 정부 세입을 창출했습니다." }
    ]
  },
  {
    id: "L3-340",
    word: "reverse",
    meaning: "뒤집다, 반대의",
    examples: [
      { en: "The company decided to reverse its earlier decision.", kr: "그 회사는 이전의 결정을 뒤집기로 결정했습니다." },
      { en: "She drove the car in reverse out of the garage.", kr: "그녀는 차를 후진으로 차고에서 운전했습니다." }
    ]
  },
  {
    id: "L3-341",
    word: "rigid",
    meaning: "엄격한, 융통성 없는",
    examples: [
      { en: "The rules were too rigid to allow for any exceptions.", kr: "그 규칙들은 예외를 허용하기에는 너무 엄격했습니다." },
      { en: "The old man's posture was rigid and straight.", kr: "그 노인의 자세는 뻣뻣하고 곧았습니다." }
    ]
  },
  {
    id: "L3-342",
    word: "route",
    meaning: "경로, 길",
    examples: [
      { en: "What is the fastest route to the airport?", kr: "공항까지 가장 빠른 경로는 무엇입니까?" },
      { en: "The delivery truck follows the same route every day.", kr: "그 배달 트럭은 매일 같은 길을 따릅니다." }
    ]
  },
  {
    id: "L3-343",
    word: "scenario",
    meaning: "시나리오, 예상되는 상황",
    examples: [
      { en: "We prepared for several worst-case scenarios.", kr: "우리는 몇 가지 최악의 시나리오에 대비했습니다." },
      { en: "The project team developed a full development scenario.", kr: "프로젝트 팀은 완전한 개발 시나리오를 개발했습니다." }
    ]
  },
  {
    id: "L3-344",
    word: "scope",
    meaning: "범위, 영역",
    examples: [
      { en: "The scope of the investigation was very limited.", kr: "그 조사의 범위는 매우 제한적이었습니다." },
      { en: "We expanded the scope of our services.", kr: "우리는 서비스 영역을 확장했습니다." }
    ]
  },
  {
    id: "L3-345",
    word: "security",
    meaning: "보안, 안전",
    examples: [
      { en: "Data security is a top priority for the company.", kr: "데이터 보안은 회사의 최우선 과제입니다." },
      { en: "The new system ensures personal security.", kr: "새로운 시스템은 개인의 안전을 보장합니다." }
    ]
  },
  {
    id: "L3-346",
    word: "sequence",
    meaning: "순서, 연속",
    examples: [
      { en: "The DNA sequence was analyzed by the scientists.", kr: "DNA 순서가 과학자들에 의해 분석되었습니다." },
      { en: "The events occurred in a rapid sequence.", kr: "그 사건들은 빠른 연속으로 발생했습니다." }
    ]
  },
  {
    id: "L3-347",
    word: "sphere",
    meaning: "구, 영역",
    examples: [
      { en: "The earth is an almost perfect sphere.", kr: "지구는 거의 완벽한 구입니다." },
      { en: "The matter falls outside the sphere of local government.", kr: "그 문제는 지방 정부의 영역 밖에 있습니다." }
    ]
  },
  {
    id: "L3-348",
    word: "stabilize",
    meaning: "안정시키다",
    examples: [
      { en: "The nurse worked to stabilize the patient's condition.", kr: "간호사는 환자의 상태를 안정시키기 위해 노력했습니다." },
      { en: "New regulations were introduced to stabilize the financial markets.", kr: "금융 시장을 안정시키기 위해 새로운 규제가 도입되었습니다." }
    ]
  },
  {
    id: "L3-349",
    word: "statute",
    meaning: "법규, 법령",
    examples: [
      { en: "The new statute requires all citizens to pay the fee.", kr: "새 법령은 모든 시민들이 수수료를 지불하도록 요구합니다." },
      { en: "The action violates an old state statute.", kr: "그 행위는 오래된 주 법규를 위반합니다." }
    ]
  },
  {
    id: "L3-350",
    word: "summary",
    meaning: "요약",
    examples: [
      { en: "The manager asked for a brief summary of the project status.", kr: "관리자는 프로젝트 상태에 대한 간략한 요약을 요청했습니다." },
      { en: "The article provides a good summary of the book.", kr: "그 기사는 책에 대한 좋은 요약을 제공합니다." }
    ]
  },
  {
    id: "L3-351",
    word: "survey",
    meaning: "설문 조사, 조사하다",
    examples: [
      { en: "We conducted a detailed survey of customer satisfaction.", kr: "우리는 고객 만족에 대한 상세한 설문 조사를 실시했습니다." },
      { en: "The team surveyed the damage after the hurricane.", kr: "팀은 허리케인 후 피해를 조사했습니다." }
    ]
  },
  {
    id: "L3-352",
    word: "suspend",
    meaning: "중단하다, 매달다",
    examples: [
      { en: "The game was suspended due to heavy rain.", kr: "그 경기는 폭우로 인해 중단되었습니다." },
      { en: "A heavy chandelier was suspended from the ceiling.", kr: "무거운 샹들리에가 천장에 매달려 있었습니다." }
    ]
  },
  {
    id: "L3-353",
    word: "symbol",
    meaning: "상징",
    examples: [
      { en: "The white dove is a symbol of peace.", kr: "흰 비둘기는 평화의 상징입니다." },
      { en: "The logo is a powerful symbol of the brand.", kr: "그 로고는 브랜드의 강력한 상징입니다." }
    ]
  },
  {
    id: "L3-354",
    word: "target",
    meaning: "목표, 목표로 하다",
    examples: [
      { en: "Our target market is young adults.", kr: "우리의 목표 시장은 젊은 성인들입니다." },
      { en: "The advertisement is targeted at health-conscious consumers.", kr: "그 광고는 건강을 의식하는 소비자들을 목표로 합니다." }
    ]
  },
  {
    id: "L3-355",
    word: "tendency",
    meaning: "경향, 추세",
    examples: [
      { en: "He has a tendency to be late for meetings.", kr: "그는 회의에 늦는 경향이 있습니다." },
      { en: "There is a growing tendency toward remote work.", kr: "원격 근무를 향한 경향이 증가하고 있습니다." }
    ]
  },
  {
    id: "L3-356",
    word: "theme",
    meaning: "주제, 테마",
    examples: [
      { en: "The main theme of the novel is love and loss.", kr: "그 소설의 주요 주제는 사랑과 상실입니다." },
      { en: "They decorated the room with a space theme.", kr: "그들은 방을 우주 테마로 장식했습니다." }
    ]
  },
  {
    id: "L3-357",
    word: "transition",
    meaning: "과도기, 전환",
    examples: [
      { en: "The country is undergoing a smooth transition to a new government.", kr: "그 나라는 새 정부로의 순조로운 전환을 겪고 있습니다." },
      { en: "Learning a new language requires a transition in your thought process.", kr: "새 언어를 배우는 것은 사고 과정의 전환을 필요로 합니다." }
    ]
  },
  {
    id: "L3-358",
    word: "trend",
    meaning: "경향, 유행",
    examples: [
      { en: "We are analyzing the current market trend.", kr: "우리는 현재 시장의 경향을 분석하고 있습니다." },
      { en: "The latest fashion trend is bright colors.", kr: "최신 패션 유행은 밝은 색상입니다." }
    ]
  },
  {
    id: "L3-359",
    word: "unanimous",
    meaning: "만장일치의",
    examples: [
      { en: "The jury reached a unanimous verdict of not guilty.", kr: "배심원단은 만장일치의 무죄 평결에 도달했습니다." },
      { en: "The board's decision was unanimous.", kr: "이사회의 결정은 만장일치였습니다." }
    ]
  },
  {
    id: "L3-360",
    word: "unprecedented",
    meaning: "전례 없는",
    examples: [
      { en: "The crisis was of an unprecedented scale.", kr: "그 위기는 전례 없는 규모였습니다." },
      { en: "The technology achieved an unprecedented speed.", kr: "그 기술은 전례 없는 속도를 달성했습니다." }
    ]
  },
  {
    id: "L3-361",
    word: "utility",
    meaning: "유용성, 공공시설",
    examples: [
      { en: "The utility of the new feature is questionable.", kr: "새 기능의 유용성은 의문스럽습니다." },
      { en: "We have to pay the utility bills every month.", kr: "우리는 매달 공공시설 요금을 지불해야 합니다." }
    ]
  },
  {
    id: "L3-362",
    word: "vehicle",
    meaning: "차량, 수단",
    examples: [
      { en: "The insurance covers all types of motor vehicles.", kr: "그 보험은 모든 종류의 자동차를 보장합니다." },
      { en: "Art is a powerful vehicle for social change.", kr: "예술은 사회 변화를 위한 강력한 수단입니다." }
    ]
  },
  {
    id: "L3-363",
    word: "venue",
    meaning: "장소",
    examples: [
      { en: "The venue for the concert has been changed.", kr: "콘서트 장소가 변경되었습니다." },
      { en: "We need to find a suitable venue for the conference.", kr: "우리는 컨퍼런스를 위한 적절한 장소를 찾아야 합니다." }
    ]
  },
  {
    id: "L3-364",
    word: "versus",
    meaning: "~ 대(對)",
    examples: [
      { en: "It's a game of experience versus youth.", kr: "그것은 경험 대 젊음의 경기입니다." },
      { en: "The team is playing versus the Lakers tonight.", kr: "그 팀은 오늘 밤 레이커스 팀 대(對) 경기를 합니다." }
    ]
  },
  {
    id: "L3-365",
    word: "via",
    meaning: "~을 통하여, ~을 경유하여",
    examples: [
      { en: "I sent the documents via email.", kr: "저는 이메일을 통하여 서류를 보냈습니다." },
      { en: "We flew to New York via London.", kr: "우리는 런던을 경유하여 뉴욕으로 비행했습니다." }
    ]
  },
  {
    id: "L3-366",
    word: "virtual",
    meaning: "가상의, 사실상의",
    examples: [
      { en: "They held a virtual meeting using video conferencing.", kr: "그들은 화상 회의를 사용하여 가상 회의를 개최했습니다." },
      { en: "He is the virtual leader of the entire group.", kr: "그는 전체 그룹의 사실상의 리더입니다." }
    ]
  },
  {
    id: "L3-367",
    word: "visible",
    meaning: "눈에 보이는",
    examples: [
      { en: "The stars were clearly visible in the night sky.", kr: "별들이 밤하늘에 명확하게 보였습니다." },
      { en: "There was a visible difference in their performance.", kr: "그들의 성과에는 눈에 보이는 차이가 있었습니다." }
    ]
  },
  {
    id: "L3-368",
    word: "voluntary",
    meaning: "자발적인",
    examples: [
      { en: "Participation in the survey is completely voluntary.", kr: "설문 조사 참여는 완전히 자발적입니다." },
      { en: "She works at the hospital on a voluntary basis.", kr: "그녀는 자발적인(자원봉사) 기반으로 병원에서 일합니다." }
    ]
  },
  {
    id: "L3-369",
    word: "welfare",
    meaning: "복지",
    examples: [
      { en: "The government is committed to improving child welfare.", kr: "정부는 아동 복지 개선에 전념하고 있습니다." },
      { en: "We must consider the welfare of the animals.", kr: "우리는 동물들의 복지를 고려해야 합니다." }
    ]
  },
  {
    id: "L3-370",
    word: "whereas",
    meaning: "반면에",
    examples: [
      { en: "She prefers tea, whereas I prefer coffee.", kr: "그녀는 차를 선호하는 반면에, 저는 커피를 선호합니다." },
      { en: "The first part was easy, whereas the second was difficult.", kr: "첫 부분은 쉬웠던 반면에, 두 번째 부분은 어려웠습니다." }
    ]
  },
  {
    id: "L3-371",
    word: "whereby",
    meaning: "~하는 것에 의하여",
    examples: [
      { en: "They established a system whereby members could vote online.", kr: "그들은 구성원들이 온라인으로 투표할 수 있는 시스템을 확립했습니다." },
      { en: "A contract whereby you agree to sell the property was signed.", kr: "당신이 재산을 팔기로 동의하는 계약이 서명되었습니다." }
    ]
  },
  {
    id: "L3-372",
    word: "whilst",
    meaning: "~하는 동안에, ~인 반면에",
    examples: [
      { en: "I listened to music whilst studying.", kr: "저는 공부하는 동안에 음악을 들었습니다." },
      { en: "The city has modern buildings, whilst the old town remains historical.", kr: "도시는 현대적인 건물을 가지고 있지만, 구시가지는 역사적으로 남아 있습니다." }
    ]
  },
  {
    id: "L3-373",
    word: "wholly",
    meaning: "완전히",
    examples: [
      { en: "The decision was wholly supported by the staff.", kr: "그 결정은 직원들에 의해 완전히 지지받았습니다." },
      { en: "His success was not wholly dependent on luck.", kr: "그의 성공은 전적으로 운에만 의존하는 것은 아니었습니다." }
    ]
  },
  {
    id: "L3-374",
    word: "whose",
    meaning: "누구의",
    examples: [
      { en: "Whose car is parked outside?", kr: "밖에 주차된 차는 누구의 것입니까?" },
      { en: "He is the person whose advice I trust.", kr: "그는 제가 조언을 신뢰하는 사람입니다." }
    ]
  },
  {
    id: "L3-375",
    word: "yore",
    meaning: "옛날, 옛적",
    examples: [
      { en: "The ancient text speaks of heroes from a time of yore.", kr: "그 고대 문헌은 옛적 영웅들에 대해 이야기합니다." },
      { en: "The village square still hosts festivals just like in the days of yore.", kr: "그 마을 광장은 여전히 옛날처럼 축제를 개최합니다." }
    ]
  },
  {
    id: "L3-376",
    word: "zenith",
    meaning: "정점, 절정",
    examples: [
      { en: "The company reached its financial zenith in the late 1990s.", kr: "그 회사는 1990년대 후반에 재정적 정점에 도달했습니다." },
      { en: "The sun reached its zenith at noon.", kr: "태양은 정오에 그 절정에 도달했습니다." }
    ]
  },
  {
    id: "L3-377",
    word: "zealous",
    meaning: "열성적인, 열렬한",
    examples: [
      { en: "The zealous volunteer worked day and night on the project.", kr: "그 열성적인 자원봉사자는 프로젝트에 밤낮으로 일했습니다." },
      { en: "She is a zealous supporter of environmental conservation.", kr: "그녀는 환경 보존의 열렬한 지지자입니다." }
    ]
  },
  {
    id: "L3-378",
    word: "acutely",
    meaning: "강렬하게, 예리하게",
    examples: [
      { en: "The loss of the contract was acutely felt by the entire team.", kr: "계약 상실은 팀 전체에 강렬하게 느껴졌습니다." },
      { en: "He is acutely aware of the risks involved.", kr: "그는 관련된 위험들을 예리하게 인식하고 있습니다." }
    ]
  },
  {
    id: "L3-379",
    word: "adequately",
    meaning: "적절하게, 충분히",
    examples: [
      { en: "The room was adequately heated for the cold weather.", kr: "그 방은 추운 날씨에 적절하게 난방되었습니다." },
      { en: "She was adequately prepared for the difficult exam.", kr: "그녀는 어려운 시험에 충분히 준비되어 있었습니다." }
    ]
  },
  {
    id: "L3-380",
    word: "allegedly",
    meaning: "주장하는 바에 의하면",
    examples: [
      { en: "He was allegedly involved in the fraud.", kr: "그는 주장하는 바에 의하면 그 사기에 연루되었습니다." },
      { en: "The document allegedly contains the secret plans.", kr: "그 문서는 주장하는 바에 의하면 비밀 계획을 포함하고 있습니다." }
    ]
  },
  {
    id: "L3-381",
    word: "briefly",
    meaning: "간결하게, 짧게",
    examples: [
      { en: "The chairman spoke briefly about the company's future.", kr: "의장은 회사의 미래에 대해 간결하게 말했습니다." },
      { en: "I only saw her briefly in the hallway.", kr: "복도에서 그녀를 짧게(잠깐) 봤을 뿐입니다." }
    ]
  },
  {
    id: "L3-382",
    word: "consequently",
    meaning: "결과적으로",
    examples: [
      { en: "He missed the flight; consequently, he was late for the meeting.", kr: "그는 비행기를 놓쳤습니다. 결과적으로, 회의에 늦었습니다." },
      { en: "The company cut costs, and consequently, profits increased.", kr: "회사는 비용을 절감했고, 결과적으로 수익이 증가했습니다." }
    ]
  },
  {
    id: "L3-383",
    word: "currently",
    meaning: "현재",
    examples: [
      { en: "She is currently working on a new project.", kr: "그녀는 현재 새로운 프로젝트를 진행하고 있습니다." },
      { en: "The store is currently closed for renovation.", kr: "그 가게는 현재 리노베이션으로 인해 문을 닫았습니다." }
    ]
  },
  {
    id: "L3-384",
    word: "distinctly",
    meaning: "뚜렷하게, 명확하게",
    examples: [
      { en: "I distinctly remember meeting you last year.", kr: "저는 작년에 당신을 만났던 것을 뚜렷하게 기억합니다." },
      { en: "The two voices sounded distinctly different.", kr: "두 목소리는 명확하게 다르게 들렸습니다." }
    ]
  },
  {
    id: "L3-385",
    word: "equally",
    meaning: "동등하게",
    examples: [
      { en: "The profits were shared equally among the three partners.", kr: "이익은 세 파트너 사이에 동등하게 분배되었습니다." },
      { en: "He is equally skilled in both painting and sculpture.", kr: "그는 회화와 조각 모두에 동등하게 숙련되어 있습니다." }
    ]
  },
  {
    id: "L3-386",
    word: "essentially",
    meaning: "본질적으로",
    examples: [
      { en: "The two proposals are essentially the same.", kr: "그 두 제안은 본질적으로 동일합니다." },
      { en: "He is essentially an honest man, despite his mistakes.", kr: "그는 실수에도 불구하고 본질적으로 정직한 사람입니다." }
    ]
  },
  {
    id: "L3-387",
    word: "eventually",
    meaning: "결국, 마침내",
    examples: [
      { en: "The long argument eventually led to a compromise.", kr: "그 긴 논쟁은 결국 타협으로 이어졌습니다." },
      { en: "After years of trying, he eventually succeeded.", kr: "수년간의 시도 끝에, 그는 결국 성공했습니다." }
    ]
  },
  {
    id: "L3-388",
    word: "explicitly",
    meaning: "명시적으로, 명확하게",
    examples: [
      { en: "The contract explicitly states the terms of payment.", kr: "계약서는 지불 조건을 명시적으로 명확하게 명시합니다." },
      { en: "He was explicitly warned not to enter the restricted area.", kr: "그는 제한 구역에 들어가지 말라는 명확한 경고를 받았습니다." }
    ]
  },
  {
    id: "L3-389",
    word: "externally",
    meaning: "외부적으로",
    examples: [
      { en: "The damage appears externally to be minor.", kr: "피해는 외부적으로는 경미해 보입니다." },
      { en: "The company sought funding externally, not from its shareholders.", kr: "그 회사는 주주들이 아닌 외부적으로 자금을 구했습니다." }
    ]
  },
  {
    id: "L3-390",
    word: "fundamentally",
    meaning: "근본적으로",
    examples: [
      { en: "The new system is fundamentally different from the old one.", kr: "새로운 시스템은 근본적으로 이전 시스템과 다릅니다." },
      { en: "They disagreed fundamentally on the role of government.", kr: "그들은 정부의 역할에 대해 근본적으로 의견이 달랐습니다." }
    ]
  },
  {
    id: "L3-391",
    word: "furthermore",
    meaning: "게다가, 더욱이",
    examples: [
      { en: "The product is expensive, and furthermore, it is unreliable.", kr: "그 제품은 비싸고, 게다가 신뢰할 수 없습니다." },
      { en: "She is a skilled writer; furthermore, she is an excellent editor.", kr: "그녀는 숙련된 작가입니다. 더욱이, 그녀는 훌륭한 편집자입니다." }
    ]
  },
  {
    id: "L3-392",
    word: "hence",
    meaning: "그러므로, 따라서",
    examples: [
      { en: "The flight was delayed; hence, we missed the connection.", kr: "비행기가 지연되었습니다. 그러므로, 우리는 연결편을 놓쳤습니다." },
      { en: "He left his keys at home, and hence could not enter the building.", kr: "그는 열쇠를 집에 두고 왔습니다. 따라서 건물에 들어갈 수 없었습니다." }
    ]
  },
  {
    id: "L3-393",
    word: "initially",
    meaning: "처음에",
    examples: [
      { en: "Initially, I found the new job challenging, but I enjoy it now.", kr: "처음에 저는 새 직장이 힘들다고 느꼈지만, 지금은 즐깁니다." },
      { en: "The project was initially planned to take six months.", kr: "그 프로젝트는 처음에 6개월이 걸리도록 계획되었습니다." }
    ]
  },
  {
    id: "L3-394",
    word: "invariably",
    meaning: "변함없이, 언제나",
    examples: [
      { en: "The bus is invariably late on rainy mornings.", kr: "그 버스는 비 오는 아침에는 변함없이 늦습니다." },
      { en: "He invariably chooses the most difficult option.", kr: "그는 언제나 가장 어려운 옵션을 선택합니다." }
    ]
  },
  {
    id: "L3-395",
    word: "largely",
    meaning: "주로, 대체로",
    examples: [
      { en: "The success of the experiment was largely due to her efforts.", kr: "그 실험의 성공은 주로 그녀의 노력 덕분이었습니다." },
      { en: "The group is largely composed of retired teachers.", kr: "그 그룹은 대체로 은퇴한 선생님들로 구성되어 있습니다." }
    ]
  },
  {
    id: "L3-396",
    word: "likewise",
    meaning: "마찬가지로, 또한",
    examples: [
      { en: "The new model is popular; likewise, the older model is still selling well.", kr: "새 모델은 인기가 많습니다. 마찬가지로, 이전 모델도 여전히 잘 팔리고 있습니다." },
      { en: "He wished me a happy birthday, and I did likewise.", kr: "그는 저에게 생일 축하 인사를 했고, 저도 또한 마찬가지로 했습니다." }
    ]
  },
  {
    id: "L3-397",
    word: "merely",
    meaning: "단지, 그저",
    examples: [
      { en: "It was merely a suggestion, not a final decision.", kr: "그것은 단지 제안일 뿐, 최종 결정은 아니었습니다." },
      { en: "He is merely a beginner, so don't expect too much.", kr: "그는 그저 초보자일 뿐이니, 너무 많이 기대하지 마세요." }
    ]
  },
  {
    id: "L3-398",
    word: "minimal",
    meaning: "최소한의",
    examples: [
      { en: "The damage to the car was minimal.", kr: "차량의 손상은 최소한이었습니다." },
      { en: "We only had a minimal amount of time to prepare.", kr: "우리는 준비할 최소한의 시간만 있었습니다." }
    ]
  },
  {
    id: "L3-399",
    word: "notably",
    meaning: "특히, 현저하게",
    examples: [
      { en: "Several large cities, notably London and Paris, experienced delays.", kr: "몇몇 대도시들, 특히 런던과 파리에서 지연이 발생했습니다." },
      { en: "The quality of the final product was notably superior.", kr: "최종 제품의 품질은 현저하게 우수했습니다." }
  ]},
  {
    id: "L3-400",
    word: "objectively",
    meaning: "객관적으로",
    examples: [
      { en: "We must analyze the data calmly and objectively.", kr: "우리는 자료를 침착하고 객관적으로 분석해야 합니다." },
      { en: "Try to look at the situation objectively, without emotion.", kr: "감정 없이 객관적으로 상황을 보려고 노력하세요." }
  ]}
];


const wordsLevel4_Part1 = [
  {
    id: "L4-001",
    word: "acquisition",
    meaning: "습득, 인수",
    examples: [
      { en: "The company's acquisition of its rival caused a stir.", kr: "그 회사의 경쟁사 인수는 소동을 일으켰습니다." },
      { en: "Language acquisition is easier for children than adults.", kr: "언어 습득은 성인보다 어린이에게 더 쉽습니다." }
    ]
  },
  {
    id: "L4-002",
    word: "adhere",
    meaning: "고수하다, 들러붙다",
    examples: [
      { en: "We must adhere to the contract terms strictly.", kr: "우리는 계약 조건을 엄격하게 고수해야 합니다." },
      { en: "The labels will not adhere to wet surfaces.", kr: "그 라벨들은 젖은 표면에 들러붙지 않을 것입니다." }
    ]
  },
  {
    id: "L4-003",
    word: "allocate",
    meaning: "할당하다, 배분하다",
    examples: [
      { en: "The budget allocates funds for new equipment.", kr: "예산은 새 장비를 위한 자금을 할당합니다." },
      { en: "We need to allocate tasks fairly among team members.", kr: "우리는 팀원들에게 업무를 공정하게 배분해야 합니다." }
    ]
  },
  {
    id: "L4-004",
    word: "ambiguous",
    meaning: "모호한, 애매한",
    examples: [
      { en: "The politician gave an ambiguous answer to the question.", kr: "그 정치인은 질문에 모호한 답변을 했습니다." },
      { en: "Avoid ambiguous language in legal documents.", kr: "법률 문서에서는 애매한 언어를 피하세요." }
    ]
  },
  {
    id: "L4-005",
    word: "analogy",
    meaning: "비유, 유추",
    examples: [
      { en: "The concept was explained using a simple analogy.", kr: "그 개념은 단순한 비유를 사용하여 설명되었습니다." },
      { en: "She drew an analogy between the situation and a ship in a storm.", kr: "그녀는 그 상황과 폭풍 속의 배 사이에 유추를 이끌어냈습니다." }
    ]
  },
  {
    id: "L4-006",
    word: "antithesis",
    meaning: "정반대, 대조",
    examples: [
      { en: "War is the antithesis of peace.", kr: "전쟁은 평화의 정반대입니다." },
      { en: "His laziness was the antithesis of his father's work ethic.", kr: "그의 게으름은 아버지의 근면한 직업 윤리와 대조적이었습니다." }
    ]
  },
  {
    id: "L4-007",
    word: "apprehension",
    meaning: "염려, 불안",
    examples: [
      { en: "She felt apprehension about speaking in front of a large crowd.", kr: "그녀는 많은 군중 앞에서 말하는 것에 대한 불안을 느꼈습니다." },
      { en: "The delay caused widespread apprehension among the investors.", kr: "그 지연은 투자자들 사이에 광범위한 염려를 야기했습니다." }
    ]
  },
  {
    id: "L4-008",
    word: "arbitrary",
    meaning: "임의적인, 독단적인",
    examples: [
      { en: "The selection criteria seemed completely arbitrary.", kr: "선발 기준이 완전히 임의적인 것처럼 보였습니다." },
      { en: "We cannot accept such an arbitrary increase in price.", kr: "우리는 그러한 독단적인 가격 인상을 받아들일 수 없습니다." }
    ]
  },
  {
    id: "L4-009",
    word: "assert",
    meaning: "주장하다, 단언하다",
    examples: [
      { en: "She asserted her authority in the meeting.", kr: "그녀는 회의에서 자신의 권위를 주장했습니다." },
      { en: "It is difficult to assert yourself when dealing with a bully.", kr: "괴롭히는 사람을 다룰 때 자신을 단언하기 어렵습니다." }
    ]
  },
  {
    id: "L4-010",
    word: "augment",
    meaning: "증가시키다, 늘리다",
    examples: [
      { en: "He augmented his income by teaching evening classes.", kr: "그는 저녁 수업을 가르쳐 수입을 증가시켰습니다." },
      { en: "The goal is to augment the system's capacity by 50%.", kr: "목표는 시스템 용량을 50% 늘리는 것입니다." }
    ]
  },
  {
    id: "L4-011",
    word: "commence",
    meaning: "시작하다",
    examples: [
      { en: "The trial will commence next Monday.", kr: "재판은 다음 주 월요일에 시작될 것입니다." },
      { en: "We will commence work after a brief safety meeting.", kr: "우리는 짧은 안전 회의 후에 작업을 시작할 것입니다." }
    ]
  },
  {
    id: "L4-012",
    word: "compatible",
    meaning: "호환되는, 양립할 수 있는",
    examples: [
      { en: "The two files are not compatible and cannot be merged.", kr: "두 파일은 호환되지 않아 병합할 수 없습니다." },
      { en: "Their goals for the project are perfectly compatible.", kr: "그들의 프로젝트 목표는 완벽하게 양립할 수 있습니다." }
    ]
  },
  {
    id: "L4-013",
    word: "comprehensive",
    meaning: "포괄적인, 광범위한",
    examples: [
      { en: "The insurance offers comprehensive coverage against all risks.", kr: "그 보험은 모든 위험에 대한 포괄적인 보장을 제공합니다." },
      { en: "We need a comprehensive plan to address the issue.", kr: "우리는 그 문제를 다루기 위한 광범위한 계획이 필요합니다." }
    ]
  },
  {
    id: "L4-014",
    word: "comprise",
    meaning: "구성하다, 이루다",
    examples: [
      { en: "The committee comprises experts from three different nations.", kr: "그 위원회는 세 개의 다른 국가에서 온 전문가들로 구성되어 있습니다." },
      { en: "The novel is comprised of several short stories.", kr: "그 소설은 몇 편의 단편 소설로 이루어져 있습니다." }
    ]
  },
  {
    id: "L4-015",
    word: "concede",
    meaning: "인정하다, 양보하다",
    examples: [
      { en: "The company conceded a pay raise to the striking workers.", kr: "그 회사는 파업 중인 노동자들에게 임금 인상을 양보했습니다." },
      { en: "I concede that you are the better chess player.", kr: "나는 네가 더 나은 체스 선수라는 것을 인정한다." }
    ]
  },
  {
    id: "L4-016",
    word: "confine",
    meaning: "국한시키다, 가두다",
    examples: [
      { en: "Please confine your discussion to the budget matters.", kr: "당신의 논의를 예산 문제로 국한시켜 주세요." },
      { en: "The storm forced them to confine the animals indoors.", kr: "폭풍은 그들이 동물들을 실내에 가두도록 강요했습니다." }
    ]
  },
  {
    id: "L4-017",
    word: "conjecture",
    meaning: "추측, 짐작",
    examples: [
      { en: "The cause of the fire is still a matter of conjecture.", kr: "화재의 원인은 여전히 추측의 문제입니다." },
      { en: "The book offers interesting conjecture about the future of technology.", kr: "그 책은 기술의 미래에 대한 흥미로운 짐작을 제공합니다." }
    ]
  },
  {
    id: "L4-018",
    word: "constituent",
    meaning: "구성 요소, 유권자",
    examples: [
      { en: "Oxygen is a major constituent of air.", kr: "산소는 공기의 주요 구성 요소입니다." },
      { en: "The senator must respond to the needs of his constituents.", kr: "그 상원의원은 그의 유권자들의 요구에 응답해야 합니다." }
    ]
  },
  {
    id: "L4-019",
    word: "contend",
    meaning: "다투다, 주장하다",
    examples: [
      { en: "The two athletes will contend for the gold medal.", kr: "두 선수는 금메달을 놓고 다툴 것입니다." },
      { en: "He contends that the economic data is flawed.", kr: "그는 그 경제 자료가 결함이 있다고 주장합니다." }
    ]
  },
  {
    id: "L4-020",
    word: "contingent",
    meaning: "조건부의, 우발적인",
    examples: [
      { en: "Our success is contingent upon receiving the necessary funding.", kr: "우리의 성공은 필요한 자금 지원을 받는 것에 달려 있습니다(조건부입니다)." },
      { en: "A contingent of soldiers was sent to the disaster area.", kr: "소규모 파견대(우발적인 그룹)의 군인들이 재난 지역으로 파견되었습니다." }
    ]
  },
  {
    id: "L4-021",
    word: "criterion",
    meaning: "기준, 척도 (복수형: criteria)",
    examples: [
      { en: "Experience is the main criterion for the job.", kr: "경험은 그 일자리의 주요 기준입니다." },
      { en: "The product was judged based on several quality criteria.", kr: "그 제품은 몇 가지 품질 척도에 근거하여 판단되었습니다." }
    ]
  },
  {
    id: "L4-022",
    word: "decline",
    meaning: "감소하다, 거절하다",
    examples: [
      { en: "The number of young people in the town continues to decline.", kr: "그 마을의 젊은이들의 수가 계속 감소하고 있습니다." },
      { en: "She declined the invitation due to a prior engagement.", kr: "그녀는 선약 때문에 초대를 거절했습니다." }
    ]
  },
  {
    id: "L4-023",
    word: "demographic",
    meaning: "인구 통계학적인",
    examples: [
      { en: "The company focuses on the older adult demographic.", kr: "그 회사는 나이 든 성인 인구 통계층에 집중합니다." },
      { en: "We analyze demographic changes to predict housing needs.", kr: "우리는 주택 수요를 예측하기 위해 인구 통계학적인 변화를 분석합니다." }
    ]
  },
  {
    id: "L4-024",
    word: "depict",
    meaning: "묘사하다, 그리다",
    examples: [
      { en: "The film vividly depicts the struggles of the working class.", kr: "그 영화는 노동 계층의 고군분투를 생생하게 묘사합니다." },
      { en: "The painting depicts a peaceful rural scene.", kr: "그 그림은 평화로운 시골 장면을 그립니다." }
    ]
  },
  {
    id: "L4-025",
    word: "derive",
    meaning: "끌어내다, 유래하다",
    examples: [
      { en: "She derives great personal satisfaction from her volunteer work.", kr: "그녀는 자신의 자원봉사 활동에서 큰 개인적 만족을 끌어냅니다." },
      { en: "Many scientific terms derive from Latin.", kr: "많은 과학 용어들이 라틴어에서 유래합니다." }
    ]
  },
  {
    id: "L4-026",
    word: "detrimental",
    meaning: "해로운, 손해를 입히는",
    examples: [
      { en: "Lack of sleep is detrimental to long-term health.", kr: "수면 부족은 장기적인 건강에 해롭습니다." },
      { en: "The scandal had a detrimental effect on the company's stock price.", kr: "그 스캔들은 회사 주가에 손해를 입히는 영향을 미쳤습니다." }
    ]
  },
  {
    id: "L4-027",
    word: "discrepancy",
    meaning: "불일치, 차이",
    examples: [
      { en: "There was a major discrepancy between his statement and the facts.", kr: "그의 진술과 사실 사이에 큰 불일치가 있었습니다." },
      { en: "The audit found a financial discrepancy in the accounts.", kr: "감사는 계정에서 재정적 차이를 발견했습니다." }
    ]
  },
  {
    id: "L4-028",
    word: "disseminate",
    meaning: "보급하다, 퍼뜨리다",
    examples: [
      { en: "The new platform helps disseminate educational resources worldwide.", kr: "새로운 플랫폼은 교육 자료를 전 세계적으로 보급하는 데 도움을 줍니다." },
      { en: "The media quickly disseminated the news of the discovery.", kr: "언론은 그 발견 소식을 빠르게 퍼뜨렸습니다." }
    ]
  },
  {
    id: "L4-029",
    word: "dissent",
    meaning: "반대, 이의",
    examples: [
      { en: "Three members recorded their dissent from the majority decision.", kr: "세 명의 구성원이 다수 결정에 대한 반대를 기록했습니다." },
      { en: "The committee was divided, with significant internal dissent.", kr: "위원회는 상당한 내부 이의로 분열되었습니다." }
    ]
  },
  {
    id: "L4-030",
    word: "dubious",
    meaning: "의심스러운, 미심쩍은",
    examples: [
      { en: "The report made several dubious claims about the product's effectiveness.", kr: "그 보고서는 제품의 효능에 대해 몇 가지 의심스러운 주장을 했습니다." },
      { en: "I was dubious about the sudden offer of help.", kr: "저는 갑작스러운 도움 제안에 대해 미심쩍었습니다." }
    ]
  },
  {
    id: "L4-031",
    word: "eccentric",
    meaning: "별난, 특이한",
    examples: [
      { en: "The inventor was known for his eccentric lifestyle.", kr: "그 발명가는 그의 별난 생활 방식으로 알려져 있었습니다." },
      { en: "The artist painted the house in eccentric colors.", kr: "그 예술가는 집을 특이한 색으로 칠했습니다." }
    ]
  },
  {
    id: "L4-032",
    word: "elicit",
    meaning: "이끌어내다, 유도하다",
    examples: [
      { en: "The detective hoped to elicit a confession from the suspect.", kr: "탐정은 용의자로부터 자백을 이끌어내기를 희망했습니다." },
      { en: "The comments elicited a strong reaction from the audience.", kr: "그 논평은 청중으로부터 강한 반응을 유도했습니다." }
    ]
  },
  {
    id: "L4-033",
    word: "empirical",
    meaning: "경험적인, 실증적인",
    examples: [
      { en: "Her theory is based on solid empirical evidence.", kr: "그녀의 이론은 견고한 실증적인 증거에 기반합니다." },
      { en: "The research requires empirical testing and observation.", kr: "그 연구는 경험적인 테스트와 관찰을 필요로 합니다." }
    ]
  },
  {
    id: "L4-034",
    word: "encompass",
    meaning: "포함하다, 아우르다",
    examples: [
      { en: "The course will encompass history, politics, and economics.", kr: "그 과정은 역사, 정치, 경제를 모두 포함할 것입니다." },
      { en: "The new park encompasses the entire valley.", kr: "새 공원은 계곡 전체를 아우릅니다." }
    ]
  },
  {
    id: "L4-035",
    word: "entail",
    meaning: "수반하다",
    examples: [
      { en: "The project will entail a significant amount of extra work.", kr: "그 프로젝트는 상당한 양의 추가 작업을 수반할 것입니다." },
      { en: "Being a leader entails great responsibility.", kr: "리더가 되는 것은 큰 책임을 수반합니다." }
    ]
  },
  {
    id: "L4-036",
    word: "equitable",
    meaning: "공정한, 공평한",
    examples: [
      { en: "We are seeking an equitable solution for both parties.", kr: "우리는 양 당사자를 위한 공정한 해결책을 찾고 있습니다." },
      { en: "The committee ensured an equitable distribution of resources.", kr: "위원회는 자원의 공평한 분배를 보장했습니다." }
    ]
  },
  {
    id: "L4-037",
    word: "erroneous",
    meaning: "잘못된, 틀린",
    examples: [
      { en: "The report contained several erroneous conclusions.", kr: "그 보고서에는 여러 개의 잘못된 결론이 포함되어 있었습니다." },
      { en: "It was an erroneous belief that the sun revolved around the Earth.", kr: "태양이 지구 주위를 돈다는 것은 틀린 믿음이었습니다." }
    ]
  },
  {
    id: "L4-038",
    word: "exacerbate",
    meaning: "악화시키다",
    examples: [
      { en: "The new regulations will exacerbate the unemployment problem.", kr: "새로운 규정은 실업 문제를 악화시킬 것입니다." },
      { en: "His refusal to apologize only exacerbated the conflict.", kr: "사과를 거부한 그의 태도는 갈등을 악화시키기만 했습니다." }
    ]
  },
  {
    id: "L4-039",
    word: "exigent",
    meaning: "절박한, 긴급한",
    examples: [
      { en: "The hospital faced exigent demands for blood donations.", kr: "그 병원은 헌혈에 대한 절박한 요구에 직면했습니다." },
      { en: "The exigent circumstances required an immediate decision.", kr: "긴급한 상황은 즉각적인 결정을 요구했습니다." }
    ]
  },
  {
    id: "L4-040",
    word: "feasible",
    meaning: "실행 가능한, 그럴듯한",
    examples: [
      { en: "We need a feasible plan that we can actually afford.", kr: "우리는 실제로 감당할 수 있는 실행 가능한 계획이 필요합니다." },
      { en: "The idea sounds plausible and feasible.", kr: "그 아이디어는 그럴듯하고 실행 가능하게 들립니다." }
    ]
  },
  {
    id: "L4-041",
    word: "fluctuate",
    meaning: "변동하다, 오르내리다",
    examples: [
      { en: "Stock market prices fluctuate constantly.", kr: "주식 시장 가격은 끊임없이 변동합니다." },
      { en: "The temperature will fluctuate throughout the day.", kr: "기온은 하루 종일 오르내릴 것입니다." }
    ]
  },
  {
    id: "L4-042",
    word: "foster",
    meaning: "육성하다, 촉진하다",
    examples: [
      { en: "The program aims to foster creativity in children.", kr: "그 프로그램은 아이들의 창의성을 육성하는 것을 목표로 합니다." },
      { en: "Good management can foster a positive work environment.", kr: "좋은 관리는 긍정적인 근무 환경을 촉진할 수 있습니다." }
    ]
  },
  {
    id: "L4-043",
    word: "generic",
    meaning: "일반적인, 포괄적인",
    examples: [
      { en: "The politician's speech was full of generic promises.", kr: "그 정치인의 연설은 일반적인 약속들로 가득했습니다." },
      { en: "You can buy generic brands for less money.", kr: "더 적은 돈으로 일반적인(저가) 브랜드를 살 수 있습니다." }
    ]
  },
  {
    id: "L4-044",
    word: "homogeneous",
    meaning: "균질의, 동종의",
    examples: [
      { en: "The mixture must be perfectly homogeneous before testing.", kr: "그 혼합물은 테스트 전에 완전히 균질해야 합니다." },
      { en: "A truly homogeneous society is rare.", kr: "진정으로 동종의 사회는 드뭅니다." }
    ]
  },
  {
    id: "L4-045",
    word: "hypothesis",
    meaning: "가설",
    examples: [
      { en: "The experiment was designed to test a new scientific hypothesis.", kr: "그 실험은 새로운 과학적 가설을 시험하기 위해 설계되었습니다." },
      { en: "We have a working hypothesis for the cause of the disease.", kr: "우리는 그 질병의 원인에 대한 작업 가설을 가지고 있습니다." }
    ]
  },
  {
    id: "L4-046",
    word: "imminent",
    meaning: "임박한, 곧 닥칠",
    examples: [
      { en: "The dark clouds suggested that a storm was imminent.", kr: "검은 구름은 폭풍이 임박했음을 시사했습니다." },
      { en: "The company faced the imminent threat of bankruptcy.", kr: "그 회사는 곧 닥칠 파산 위협에 직면했습니다." }
    ]
  },
  {
    id: "L4-047",
    word: "impair",
    meaning: "손상시키다, 악화시키다",
    examples: [
      { en: "Alcohol can impair driving ability.", kr: "알코올은 운전 능력을 손상시킬 수 있습니다." },
      { en: "His health was severely impaired by the long illness.", kr: "그의 건강은 오랜 질병으로 심각하게 악화되었습니다." }
    ]
  },
  {
    id: "L4-048",
    word: "impart",
    meaning: "전달하다, 주다",
    examples: [
      { en: "The old man imparted his wisdom to his grandchildren.", kr: "그 노인은 자신의 지혜를 손주들에게 전달했습니다." },
      { en: "The spice imparts a pungent flavor to the sauce.", kr: "그 향신료는 소스에 매운 풍미를 줍니다." }
    ]
  },
  {
    id: "L4-049",
    word: "implicit",
    meaning: "암묵적인, 내포된",
    examples: [
      { en: "There was an implicit understanding that he would pay for the dinner.", kr: "그가 저녁 식사 비용을 지불할 것이라는 암묵적인 이해가 있었습니다." },
      { en: "The meaning was implicit in her tone of voice.", kr: "그 의미는 그녀의 목소리 톤에 내포되어 있었습니다." }
    ]
  },
  {
    id: "L4-050",
    word: "inadvertently",
    meaning: "무심코, 부주의로",
    examples: [
      { en: "I inadvertently deleted the wrong file.", kr: "저는 무심코 잘못된 파일을 삭제했습니다." },
      { en: "She inadvertently revealed the surprise party plans.", kr: "그녀는 부주의로 깜짝 파티 계획을 밝혔습니다." }
    ]
  },
  {
    id: "L4-051",
    word: "incoherent",
    meaning: "일관성 없는, 앞뒤가 맞지 않는",
    examples: [
      { en: "His arguments became rambling and incoherent.", kr: "그의 주장은 장황하고 일관성이 없어졌습니다." },
      { en: "The witness gave a confusing and incoherent testimony.", kr: "그 증인은 혼란스럽고 앞뒤가 맞지 않는 증언을 했습니다." }
    ]
  },
  {
    id: "L4-052",
    word: "incongruous",
    meaning: "조화되지 않는, 부조화한",
    examples: [
      { en: "The modern statue looked incongruous in the ancient temple.", kr: "그 현대 조각상은 고대 사원에서 부조화하게 보였습니다." },
      { en: "His cheerful reaction was incongruous with the serious news.", kr: "그의 쾌활한 반응은 심각한 소식과 조화되지 않았습니다." }
    ]
  },
  {
    id: "L4-053",
    word: "indigenous",
    meaning: "토착의, 고유의",
    examples: [
      { en: "The island is home to several indigenous tribes.", kr: "그 섬은 여러 토착 부족들의 고향입니다." },
      { en: "This plant is indigenous to the mountainous region.", kr: "이 식물은 산악 지역 고유의 것입니다." }
    ]
  },
  {
    id: "L4-054",
    word: "indispensable",
    meaning: "필수적인",
    examples: [
      { en: "A sharp knife is an indispensable tool for a chef.", kr: "날카로운 칼은 요리사에게 필수적인 도구입니다." },
      { en: "She quickly proved herself indispensable to the project.", kr: "그녀는 빠르게 자신이 프로젝트에 필수적인 존재임을 입증했습니다." }
    ]
  },
  {
    id: "L4-055",
    word: "inhibit",
    meaning: "억제하다, 저해하다",
    examples: [
      { en: "The extreme cold will inhibit plant growth.", kr: "극심한 추위는 식물 성장을 저해할 것입니다." },
      { en: "Fear of judgment can inhibit creativity.", kr: "판단에 대한 두려움은 창의성을 억제할 수 있습니다." }
    ]
  },
  {
    id: "L4-056",
    word: "inherent",
    meaning: "내재하는, 본질적인",
    examples: [
      { en: "Every job has its inherent risks.", kr: "모든 일에는 내재하는 위험이 있습니다." },
      { en: "The product's design has an inherent flaw.", kr: "그 제품의 디자인에는 본질적인 결함이 있습니다." }
    ]
  },
  {
    id: "L4-057",
    word: "innate",
    meaning: "타고난, 선천적인",
    examples: [
      { en: "She has an innate ability to lead.", kr: "그녀는 이끌 수 있는 타고난 능력을 가지고 있습니다." },
      { en: "The behavior is innate, not learned.", kr: "그 행동은 학습된 것이 아니라 선천적입니다." }
    ]
  },
  {
    id: "L4-058",
    word: "insufficient",
    meaning: "불충분한",
    examples: [
      { en: "The evidence was insufficient to convict him.", kr: "그 증거는 그에게 유죄를 선고하기에 불충분했습니다." },
      { en: "The current budget is insufficient for our needs.", kr: "현재 예산은 우리의 필요에 불충분합니다." }
    ]
  },
  {
    id: "L4-059",
    word: "integrity",
    meaning: "청렴, 진실성, 완전성",
    examples: [
      { en: "The committee questioned the integrity of the witness.", kr: "위원회는 증인의 진실성에 의문을 제기했습니다." },
      { en: "We must ensure the integrity of the data.", kr: "우리는 자료의 완전성(훼손되지 않음)을 보장해야 합니다." }
    ]
  },
  {
    id: "L4-060",
    word: "interact",
    meaning: "상호 작용하다",
    examples: [
      { en: "It is important for children to interact with their peers.", kr: "아이들이 또래와 상호 작용하는 것은 중요합니다." },
      { en: "The two systems interact seamlessly.", kr: "그 두 시스템은 원활하게 상호 작용합니다." }
    ]
  },
  {
    id: "L4-061",
    word: "intervene",
    meaning: "개입하다, 중재하다",
    examples: [
      { en: "The government decided to intervene in the financial markets.", kr: "정부는 금융 시장에 개입하기로 결정했습니다." },
      { en: "The dispute was resolved without anyone having to intervene.", kr: "그 분쟁은 아무도 개입할 필요 없이 해결되었습니다." }
    ]
  },
  {
    id: "L4-062",
    word: "intrinsic",
    meaning: "본질적인, 고유의",
    examples: [
      { en: "The intrinsic value of the diamond is high.", kr: "그 다이아몬드의 본질적인 가치는 높습니다." },
      { en: "He found intrinsic motivation in helping others.", kr: "그는 다른 사람들을 돕는 것에서 고유한 동기를 찾았습니다." }
    ]
  },
  {
    id: "L4-063",
    word: "invincible",
    meaning: "무적의, 천하무적의",
    examples: [
      { en: "The team seemed invincible after winning ten games in a row.", kr: "그 팀은 10경기 연속 승리 후 무적으로 보였습니다." },
      { en: "He believed he was invincible until the accident.", kr: "그는 사고가 나기 전까지 자신이 천하무적이라고 믿었습니다." }
    ]
  },
  {
    id: "L4-064",
    word: "irrelevant",
    meaning: "무관한, 관계없는",
    examples: [
      { en: "Your personal feelings are irrelevant to the professional discussion.", kr: "당신의 개인적인 감정은 전문적인 논의와 무관합니다." },
      { en: "The judge dismissed the evidence as totally irrelevant.", kr: "판사는 그 증거를 완전히 관계없는 것으로 기각했습니다." }
    ]
  },
  {
    id: "L4-065",
    word: "legitimate",
    meaning: "합법적인, 정당한",
    examples: [
      { en: "The government’s actions must be legitimate and constitutional.", kr: "정부의 행동은 합법적이고 헌법적이어야 합니다." },
      { en: "She had a legitimate reason for her absence.", kr: "그녀는 결석에 대한 정당한 이유가 있었습니다." }
    ]
  },
  {
    id: "L4-066",
    word: "mandate",
    meaning: "명령, 위임하다",
    examples: [
      { en: "The election gave the new leader a clear mandate for change.", kr: "그 선거는 새 지도자에게 변화를 위한 명확한 위임을 부여했습니다." },
      { en: "The law mandates that all children must attend school.", kr: "그 법은 모든 아이들이 학교에 다녀야 한다고 명령합니다." }
    ]
  },
  {
    id: "L4-067",
    word: "metaphor",
    meaning: "은유",
    examples: [
      { en: "Life is a journey is a common metaphor.", kr: "인생은 여정이라는 것은 흔한 은유입니다." },
      { en: "The poet used nature metaphors to describe the human heart.", kr: "그 시인은 인간의 마음을 묘사하기 위해 자연 은유를 사용했습니다." }
    ]
  },
  {
    id: "L4-068",
    word: "mitigate",
    meaning: "완화하다, 경감시키다",
    examples: [
      { en: "We need to mitigate the risks associated with the investment.", kr: "우리는 투자와 관련된 위험을 완화해야 합니다." },
      { en: "A public apology helped to mitigate the public's anger.", kr: "공개 사과는 대중의 분노를 경감시키는 데 도움이 되었습니다." }
    ]
  },
  {
    id: "L4-069",
    word: "monetary",
    meaning: "화폐의, 금융의",
    examples: [
      { en: "The central bank controls the nation's monetary policy.", kr: "중앙은행은 국가의 금융 정책을 통제합니다." },
      { en: "He was motivated purely by monetary gain.", kr: "그는 순전히 화폐적 이득 때문에 동기 부여되었습니다." }
    ]
  },
  {
    id: "L4-070",
    word: "nefarious",
    meaning: "사악한, 흉악한",
    examples: [
      { en: "The villain plotted a nefarious scheme to steal the artwork.", kr: "그 악당은 미술품을 훔치기 위한 흉악한 계획을 꾸몄습니다." },
      { en: "The police uncovered a series of nefarious activities.", kr: "경찰은 일련의 사악한 활동들을 밝혀냈습니다." }
    ]
  },
  {
    id: "L4-071",
    word: "notwithstanding",
    meaning: "~에도 불구하고",
    examples: [
      { en: "Notwithstanding his injury, he continued to play the game.", kr: "부상에도 불구하고, 그는 경기를 계속했습니다." },
      { en: "The company performed well, notwithstanding the recession.", kr: "경기 침체에도 불구하고, 그 회사는 좋은 성과를 보였습니다." }
    ]
  },
  {
    id: "L4-072",
    word: "paradigm",
    meaning: "패러다임, 사고의 틀",
    examples: [
      { en: "The discovery caused a complete paradigm shift in the field.", kr: "그 발견은 그 분야에서 완전한 사고의 틀 변화를 야기했습니다." },
      { en: "The new technology sets a paradigm for future devices.", kr: "새로운 기술은 미래 장치들의 패러다임을 설정합니다." }
    ]
  },
  {
    id: "L4-073",
    word: "perceive",
    meaning: "인식하다, 감지하다",
    examples: [
      { en: "How do customers perceive the quality of our service?", kr: "고객들은 우리 서비스의 품질을 어떻게 인식합니까?" },
      { en: "He perceived a slight change in the wind direction.", kr: "그는 바람 방향의 약간의 변화를 감지했습니다." }
    ]
  },
  {
    id: "L4-074",
    word: "pervasive",
    meaning: "만연하는, 스며드는",
    examples: [
      { en: "The pervasive influence of social media affects everyone.", kr: "소셜 미디어의 만연하는 영향은 모두에게 영향을 미칩니다." },
      { en: "The pervasive smell of smoke filled the hotel lobby.", kr: "코를 찌르는(만연하는) 연기 냄새가 호텔 로비를 채웠습니다." }
    ]
  },
  {
    id: "L4-075",
    word: "plausible",
    meaning: "그럴듯한, 타당한",
    examples: [
      { en: "The detective listened to the suspect's plausible alibi.", kr: "탐정은 용의자의 그럴듯한 알리바이를 들었습니다." },
      { en: "We need a plausible explanation for the sudden loss of data.", kr: "우리는 갑작스러운 데이터 손실에 대한 타당한 설명이 필요합니다." }
    ]
  },
  {
    id: "L4-076",
    word: "precedent",
    meaning: "선례, 전례",
    examples: [
      { en: "The court's decision will set a legal precedent for similar cases.", kr: "법원의 결정은 유사한 사건들에 대한 법적 선례를 세울 것입니다." },
      { en: "There is no precedent for this kind of economic policy.", kr: "이러한 종류의 경제 정책에 대한 전례가 없습니다." }
    ]
  },
  {
    id: "L4-077",
    word: "preclude",
    meaning: "배제하다, 막다",
    examples: [
      { en: "The low price doesn't preclude the possibility of high quality.", kr: "낮은 가격이 높은 품질의 가능성을 배제하지 않습니다." },
      { en: "His injury will preclude him from participating in the game.", kr: "그의 부상은 그가 게임에 참여하는 것을 막을 것입니다." }
    ]
  },
  {
    id: "L4-078",
    word: "preliminary",
    meaning: "예비의, 사전의",
    examples: [
      { en: "The preliminary results of the experiment are promising.", kr: "그 실험의 예비 결과는 유망합니다." },
      { en: "We had a preliminary discussion before the contract was signed.", kr: "우리는 계약이 서명되기 전에 사전 논의를 가졌습니다." }
    ]
  },
  {
    id: "L4-079",
    word: "premise",
    meaning: "전제, 가정",
    examples: [
      { en: "The entire film is based on a fantastic premise.", kr: "영화 전체는 환상적인 전제에 기반하고 있습니다." },
      { en: "His argument rests on a shaky premise.", kr: "그의 주장은 불안정한 전제 위에 놓여 있습니다." }
    ]
  },
  {
    id: "L4-080",
    word: "presume",
    meaning: "추정하다, 가정하다",
    examples: [
      { en: "We must presume that the witnesses are telling the truth.", kr: "우리는 증인들이 진실을 말하고 있다고 추정해야 합니다." },
      { en: "I presume you would like a drink.", kr: "당신은 음료를 원할 것이라고 가정합니다." }
    ]
  },
  {
    id: "L4-081",
    word: "prevalent",
    meaning: "널리 퍼진, 일반적인",
    examples: [
      { en: "The use of mobile payment is highly prevalent in this region.", kr: "모바일 결제 사용은 이 지역에서 매우 널리 퍼져 있습니다." },
      { en: "Mistrust of the media is a prevalent sentiment today.", kr: "언론에 대한 불신은 오늘날 일반적인 정서입니다." }
    ]
  },
  {
    id: "L4-082",
    word: "pristine",
    meaning: "원시 상태의, 깨끗한",
    examples: [
      { en: "The archaeologists discovered a pristine ancient artifact.", kr: "고고학자들은 원시 상태의 고대 유물을 발견했습니다." },
      { en: "The mountain lake has pristine, clear water.", kr: "그 산악 호수는 깨끗하고 맑은 물을 가지고 있습니다." }
    ]
  },
  {
    id: "L4-083",
    word: "proliferate",
    meaning: "급증하다, 확산하다",
    examples: [
      { en: "Online misinformation continues to proliferate rapidly.", kr: "온라인 잘못된 정보가 계속해서 빠르게 확산하고 있습니다." },
      { en: "The small businesses in the area have begun to proliferate.", kr: "그 지역의 소기업들이 급증하기 시작했습니다." }
    ]
  },
  {
    id: "L4-084",
    word: "proposition",
    meaning: "제의, 명제",
    examples: [
      { en: "The investor rejected the business proposition.", kr: "그 투자자는 사업 제의를 거절했습니다." },
      { en: "The entire debate rests on a complex proposition.", kr: "그 전체 논쟁은 복잡한 명제 위에 놓여 있습니다." }
    ]
  },
  {
    id: "L4-085",
    word: "protocol",
    meaning: "규약, 의례",
    examples: [
      { en: "All data must be encrypted according to the security protocol.", kr: "모든 자료는 보안 규약에 따라 암호화되어야 합니다." },
      { en: "The meeting followed the established diplomatic protocol.", kr: "그 회의는 확립된 외교 의례를 따랐습니다." }
    ]
  },
  {
    id: "L4-086",
    word: "quantify",
    meaning: "정량화하다, 수량화하다",
    examples: [
      { en: "It is difficult to quantify the emotional impact of the tragedy.", kr: "그 비극의 감정적 영향을 정량화하기는 어렵습니다." },
      { en: "We need to quantify the results before we present them.", kr: "우리는 결과를 발표하기 전에 수량화해야 합니다." }
    ]
  },
  {
    id: "L4-087",
    word: "rebuttal",
    meaning: "반박, 항변",
    examples: [
      { en: "The lawyer presented a strong rebuttal to the prosecutor's claims.", kr: "변호사는 검찰 측 주장에 대한 강력한 반박을 제시했습니다." },
      { en: "The politician issued a formal rebuttal to the criticism.", kr: "그 정치인은 그 비판에 대한 공식적인 항변을 발표했습니다." }
    ]
  },
  {
    id: "L4-088",
    word: "reiterate",
    meaning: "반복하여 말하다, 되풀이하다",
    examples: [
      { en: "The CEO reiterated the company's commitment to quality.", kr: "최고 경영자는 품질에 대한 회사의 약속을 반복하여 말했습니다." },
      { en: "I asked him to reiterate the safety instructions.", kr: "저는 그에게 안전 지침을 되풀이해 달라고 요청했습니다." }
    ]
  },
  {
    id: "L4-089",
    word: "relinquish",
    meaning: "포기하다, 양도하다",
    examples: [
      { en: "The king was forced to relinquish his throne and leave the country.", kr: "그 왕은 왕위를 포기하고 나라를 떠나도록 강요받았습니다." },
      { en: "She decided to relinquish her control over the family business.", kr: "그녀는 가족 사업에 대한 자신의 통제권을 양도하기로 결정했습니다." }
    ]
  },
  {
    id: "L4-090",
    word: "repertoire",
    meaning: "레퍼토리, 연주 목록",
    examples: [
      { en: "The band has a wide repertoire covering multiple genres.", kr: "그 밴드는 여러 장르를 아우르는 광범위한 레퍼토리를 가지고 있습니다." },
      { en: "The actor demonstrated a deep repertoire of voices and accents.", kr: "그 배우는 목소리와 억양의 깊은 연주 목록(능력)을 보여주었습니다." }
    ]
  },
  {
    id: "L4-091",
    word: "resilience",
    meaning: "회복력, 탄력성",
    examples: [
      { en: "The city showed great resilience after the earthquake.", kr: "그 도시는 지진 후 엄청난 회복력을 보여주었습니다." },
      { en: "Emotional resilience is key to dealing with stress.", kr: "감정적 탄력성은 스트레스에 대처하는 핵심입니다." }
    ]
  },
  {
    id: "L4-092",
    word: "retrospect",
    meaning: "회상, 회고",
    examples: [
      { en: "In retrospect, the decision was clearly a mistake.", kr: "돌이켜보면(회고해보면), 그 결정은 명백히 실수였습니다." },
      { en: "The event offers a moment of quiet retrospect on the past year.", kr: "그 행사는 지난 한 해를 조용히 회고하는 순간을 제공합니다." }
    ]
  },
  {
    id: "L4-093",
    word: "sanction",
    meaning: "승인, 제재",
    examples: [
      { en: "The plan requires formal sanction from the CEO.", kr: "그 계획은 최고 경영자로부터 공식적인 승인을 필요로 합니다." },
      { en: "The country faced international sanctions due to its policies.", kr: "그 나라는 정책 때문에 국제적인 제재에 직면했습니다." }
    ]
  },
  {
    id: "L4-094",
    word: "scrutiny",
    meaning: "정밀 조사, 자세히 살펴봄",
    examples: [
      { en: "The company's finances came under intense government scrutiny.", kr: "그 회사의 재정은 강도 높은 정부의 정밀 조사를 받게 되었습니다." },
      { en: "Every detail of the new design was subjected to close scrutiny.", kr: "새 디자인의 모든 세부 사항이 자세히 살펴봄에 노출되었습니다." }
    ]
  },
  {
    id: "L4-095",
    word: "skeptical",
    meaning: "회의적인",
    examples: [
      { en: "I am skeptical about the promises of quick success.", kr: "저는 빠른 성공 약속에 대해 회의적입니다." },
      { en: "The board was initially skeptical of the new technology.", kr: "이사회는 처음에 새 기술에 대해 회의적이었습니다." }
    ]
  },
  {
    id: "L4-096",
    word: "solicitous",
    meaning: "염려하는, 걱정하는",
    examples: [
      { en: "The solicitous nurse ensured the patient was comfortable.", kr: "그 염려하는 간호사는 환자가 편안한지 확인했습니다." },
      { en: "He was solicitous about the well-being of his former employees.", kr: "그는 전 직원들의 안녕에 대해 걱정했습니다." }
    ]
  },
  {
    id: "L4-097",
    word: "stance",
    meaning: "입장, 태도",
    examples: [
      { en: "The government took a firm stance on the issue.", kr: "정부는 그 문제에 대해 확고한 입장을 취했습니다." },
      { en: "His aggressive stance made negotiations difficult.", kr: "그의 공격적인 태도는 협상을 어렵게 만들었습니다." }
    ]
  },
  {
    id: "L4-098",
    word: "static",
    meaning: "정적인, 고정된",
    examples: [
      { en: "The market remained static for the past three months.", kr: "시장은 지난 석 달 동안 정적인 상태를 유지했습니다." },
      { en: "The system displays a static image that does not update.", kr: "그 시스템은 업데이트되지 않는 고정된 이미지를 표시합니다." }
    ]
  },
  {
    id: "L4-099",
    word: "stigma",
    meaning: "오명, 낙인",
    examples: [
      { en: "The organization works to remove the stigma attached to mental illness.", kr: "그 조직은 정신 질환에 붙어 있는 오명을 제거하기 위해 노력합니다." },
      { en: "Being associated with the scandal left a permanent stigma.", kr: "그 스캔들과 연관되는 것은 영구적인 낙인을 남겼습니다." }
    ]
  },
  {
    id: "L4-100",
    word: "stipulate",
    meaning: "규정하다, 조건으로 요구하다",
    examples: [
      { en: "The contract stipulates a penalty for late completion.", kr: "그 계약은 완료 지연에 대한 벌칙을 규정합니다." },
      { en: "We stipulated that the new features must be added by next month.", kr: "우리는 새 기능이 다음 달까지 추가되어야 한다고 조건으로 요구했습니다." }
    ]
  }
];

const wordsLevel4_Part2 = [
  {
    id: "L4-101",
    word: "subjective",
    meaning: "주관적인",
    examples: [
      { en: "Art appreciation is highly subjective; everyone has a different opinion.", kr: "예술 감상은 매우 주관적입니다; 모든 사람이 다른 의견을 가지고 있습니다." },
      { en: "The judge tried to make a subjective assessment of the performance.", kr: "심사위원은 그 공연에 대해 주관적이지 않은 평가를 내리려고 노력했습니다." }
    ]
  },
  {
    id: "L4-102",
    word: "subsidiary",
    meaning: "자회사의, 보조적인",
    examples: [
      { en: "The large corporation acquired a small subsidiary company.", kr: "그 대기업은 작은 자회사를 인수했습니다." },
      { en: "This product is just a subsidiary part of the main system.", kr: "이 제품은 주 시스템의 단지 보조적인 부분입니다." }
    ]
  },
  {
    id: "L4-103",
    word: "subsidize",
    meaning: "보조금을 주다",
    examples: [
      { en: "The government will subsidize the public transportation system.", kr: "정부는 대중교통 시스템에 보조금을 줄 것입니다." },
      { en: "The program is designed to subsidize education costs for low-income families.", kr: "그 프로그램은 저소득층 가정을 위한 교육비를 보조하도록 고안되었습니다." }
    ]
  },
  {
    id: "L4-104",
    word: "substantiate",
    meaning: "입증하다, 실증하다",
    examples: [
      { en: "You must substantiate your claims with solid evidence.", kr: "당신은 확실한 증거로 당신의 주장을 입증해야 합니다." },
      { en: "The theory has yet to be fully substantiated by experiments.", kr: "그 이론은 아직 실험으로 완전히 실증되지 않았습니다." }
    ]
  },
  {
    id: "L4-105",
    word: "tentative",
    meaning: "잠정적인, 머뭇거리는",
    examples: [
      { en: "We have reached a tentative agreement, but it needs final approval.", kr: "우리는 잠정적인 합의에 도달했지만, 최종 승인이 필요합니다." },
      { en: "His steps were tentative on the icy ground.", kr: "그의 발걸음은 얼음 위에서 머뭇거렸습니다." }
    ]
  },
  {
    id: "L4-106",
    word: "transcend",
    meaning: "초월하다",
    examples: [
      { en: "His music transcends cultural boundaries and language barriers.", kr: "그의 음악은 문화적 경계와 언어 장벽을 초월합니다." },
      { en: "She believes one must transcend personal feelings to achieve true objectivity.", kr: "그녀는 진정한 객관성을 달성하기 위해 개인적인 감정을 초월해야 한다고 믿습니다." }
    ]
  },
  {
    id: "L4-107",
    word: "treatise",
    meaning: "논문, 학술서",
    examples: [
      { en: "He published a lengthy treatise on the history of economic thought.", kr: "그는 경제 사상의 역사에 대한 장문의 논문을 출판했습니다." },
      { en: "The book is a scholarly treatise on early Roman law.", kr: "그 책은 초기 로마법에 대한 학술서입니다." }
    ]
  },
  {
    id: "L4-108",
    word: "ubiquitous",
    meaning: "어디에나 있는, 편재하는",
    examples: [
      { en: "Mobile phones are now ubiquitous in modern society.", kr: "휴대폰은 이제 현대 사회에서 어디에나 있습니다(편재합니다)." },
      { en: "The company aims to make its brand ubiquitous.", kr: "그 회사는 자사의 브랜드를 어디에나 있게 만드는 것을 목표로 합니다." }
    ]
  },
  {
    id: "L4-109",
    word: "undermine",
    meaning: "약화시키다",
    examples: [
      { en: "Constant criticism will eventually undermine his confidence.", kr: "끊임없는 비판은 결국 그의 자신감을 약화시킬 것입니다." },
      { en: "The delay threatened to undermine the entire project.", kr: "그 지연은 전체 프로젝트를 약화시킬 위험이 있었습니다." }
    ]
  },
  {
    id: "L4-110",
    word: "unilateral",
    meaning: "일방적인",
    examples: [
      { en: "The CEO made a unilateral decision without consulting the board.", kr: "최고 경영자는 이사회와 상의 없이 일방적인 결정을 내렸습니다." },
      { en: "The country's unilateral action led to international disapproval.", kr: "그 나라의 일방적인 행동은 국제적인 비난을 초래했습니다." }
    ]
  },
  {
    id: "L4-111",
    word: "unprecedented",
    meaning: "전례 없는",
    examples: [
      { en: "The storm caused an unprecedented level of damage.", kr: "그 폭풍은 전례 없는 수준의 피해를 입혔습니다." },
      { en: "The company reported unprecedented profits this quarter.", kr: "그 회사는 이번 분기에 전례 없는 이익을 보고했습니다." }
    ]
  },
  {
    id: "L4-112",
    word: "validate",
    meaning: "입증하다, 확인하다",
    examples: [
      { en: "The experiment was conducted to validate the new theory.", kr: "그 실험은 새로운 이론을 입증하기 위해 수행되었습니다." },
      { en: "You should always validate your input before submitting the form.", kr: "양식을 제출하기 전에 항상 입력을 확인해야 합니다." }
    ]
  },
  {
    id: "L4-113",
    word: "vehement",
    meaning: "열정적인, 맹렬한",
    examples: [
      { en: "The proposal was met with vehement opposition from the public.", kr: "그 제안은 대중으로부터 맹렬한 반대에 부딪혔습니다." },
      { en: "He delivered a vehement speech about social injustice.", kr: "그는 사회적 불의에 대해 열정적인 연설을 했습니다." }
    ]
  },
  {
    id: "L4-114",
    word: "viable",
    meaning: "실행 가능한, 생존 가능한",
    examples: [
      { en: "The committee concluded that the plan was not financially viable.", kr: "위원회는 그 계획이 재정적으로 실행 가능하지 않다고 결론 내렸습니다." },
      { en: "We need to find a viable alternative to fossil fuels.", kr: "우리는 화석 연료에 대한 생존 가능한 대안을 찾아야 합니다." }
    ]
  },
  {
    id: "L4-115",
    word: "volatile",
    meaning: "변동성이 심한, 휘발성의",
    examples: [
      { en: "The political situation in the region remains highly volatile.", kr: "그 지역의 정치 상황은 여전히 매우 변동성이 심합니다." },
      { en: "Gasoline is a highly volatile substance that evaporates quickly.", kr: "휘발유는 빠르게 증발하는 매우 휘발성의 물질입니다." }
    ]
  },
  {
    id: "L4-116",
    word: "zeal",
    meaning: "열정, 열의",
    examples: [
      { en: "He pursued his goals with great zeal and determination.", kr: "그는 엄청난 열정과 결단력으로 자신의 목표를 추구했습니다." },
      { en: "The new employee showed commendable zeal for his work.", kr: "새 직원은 자신의 일에 대해 칭찬할 만한 열의를 보였습니다." }
    ]
  },
  {
    id: "L4-117",
    word: "anomaly",
    meaning: "변칙, 예외",
    examples: [
      { en: "The test result was an anomaly that baffled the scientists.", kr: "그 테스트 결과는 과학자들을 당황하게 만든 변칙(예외)이었습니다." },
      { en: "A calm period in this volatile market is a rare anomaly.", kr: "이 변동성 심한 시장에서의 평온한 기간은 희귀한 예외입니다." }
    ]
  },
  {
    id: "L4-118",
    word: "brevity",
    meaning: "간결함, 짧음",
    examples: [
      { en: "The speaker was praised for the brevity of his presentation.", kr: "그 연사는 발표의 간결함으로 칭찬받았습니다." },
      { en: "The brevity of human life makes every moment precious.", kr: "인생의 짧음은 모든 순간을 소중하게 만듭니다." }
    ]
  },
  {
    id: "L4-119",
    word: "coherent",
    meaning: "일관성 있는, 논리 정연한",
    examples: [
      { en: "She gave a clear and coherent explanation of the new policy.", kr: "그녀는 새 정책에 대해 명확하고 일관성 있는 설명을 했습니다." },
      { en: "The paragraphs must be coherent and flow logically.", kr: "문단들은 일관성 있어야 하고 논리적으로 이어져야 합니다." }
    ]
  },
  {
    id: "L4-120",
    word: "concise",
    meaning: "간결한",
    examples: [
      { en: "Please make your report as concise as possible.", kr: "보고서를 가능한 한 간결하게 작성해 주십시오." },
      { en: "The book offers a concise overview of European history.", kr: "그 책은 유럽 역사에 대한 간결한 개요를 제공합니다." }
    ]
  },
  {
    id: "L4-121",
    word: "conviction",
    meaning: "신념, 유죄 판결",
    examples: [
      { en: "He spoke with deep conviction about the need for reform.", kr: "그는 개혁의 필요성에 대해 깊은 신념을 가지고 말했습니다." },
      { en: "The jury returned a conviction after a long deliberation.", kr: "배심원단은 긴 심의 끝에 유죄 판결을 내렸습니다." }
    ]
  },
  {
    id: "L4-122",
    word: "curtail",
    meaning: "축소하다, 줄이다",
    examples: [
      { en: "The government decided to curtail spending on public services.", kr: "정부는 공공 서비스에 대한 지출을 축소하기로 결정했습니다." },
      { en: "We must curtail unnecessary travel to save time.", kr: "우리는 시간을 절약하기 위해 불필요한 여행을 줄여야 합니다." }
    ]
  },
  {
    id: "L4-123",
    word: "demeanor",
    meaning: "태도, 품행",
    examples: [
      { en: "Her professional demeanor impressed the interviewers.", kr: "그녀의 전문적인 태도는 면접관들에게 깊은 인상을 주었습니다." },
      { en: "The suspect's calm demeanor suggested he was innocent.", kr: "용의자의 침착한 품행은 그가 무죄임을 시사했습니다." }
    ]
  },
  {
    id: "L4-124",
    word: "denounce",
    meaning: "비난하다, 고발하다",
    examples: [
      { en: "The organization denounced the recent human rights violations.", kr: "그 조직은 최근의 인권 침해를 비난했습니다." },
      { en: "Whistleblowers often denounce illegal activities within a company.", kr: "내부 고발자들은 종종 회사 내의 불법 활동을 고발합니다." }
    ]
  },
  {
    id: "L4-125",
    word: "deplore",
    meaning: "개탄하다, 비난하다",
    examples: [
      { en: "We deeply deplore the loss of life caused by the disaster.", kr: "우리는 그 재난으로 인한 인명 손실에 대해 깊이 개탄합니다." },
      { en: "Critics deplore the lack of historical accuracy in the movie.", kr: "비평가들은 영화의 역사적 정확성 부족을 비난합니다." }
    ]
  },
  {
    id: "L4-126",
    word: "didactic",
    meaning: "교훈적인, 가르치려 드는",
    examples: [
      { en: "The film was criticized for its overly didactic tone.", kr: "그 영화는 지나치게 교훈적인 어조로 비판받았습니다." },
      { en: "A didactic approach to teaching can sometimes stifle creativity.", kr: "가르치려 드는 접근 방식은 때때로 창의성을 억누를 수 있습니다." }
    ]
  },
  {
    id: "L4-127",
    word: "diffuse",
    meaning: "퍼뜨리다, 산만한",
    examples: [
      { en: "The scent of flowers diffused throughout the room.", kr: "꽃 향기가 방 전체에 퍼졌습니다." },
      { en: "The speaker's argument was too diffuse and hard to follow.", kr: "그 연사의 주장은 너무 산만해서 따라가기 어려웠습니다." }
    ]
  },
  {
    id: "L4-128",
    word: "disconcerting",
    meaning: "당황하게 만드는, 혼란스러운",
    examples: [
      { en: "The sudden silence was disconcerting to everyone in the room.", kr: "갑작스러운 침묵은 방 안의 모두를 당황하게 만들었습니다." },
      { en: "The constant surveillance created a disconcerting atmosphere.", kr: "끊임없는 감시는 혼란스러운 분위기를 조성했습니다." }
    ]
  },
  {
    id: "L4-129",
    word: "dismantle",
    meaning: "분해하다, 해체하다",
    examples: [
      { en: "The engineers had to dismantle the machine to find the fault.", kr: "엔지니어들은 결함을 찾기 위해 기계를 분해해야 했습니다." },
      { en: "The new administration promised to dismantle the old bureaucracy.", kr: "새 행정부는 구시대 관료제를 해체하겠다고 약속했습니다." }
    ]
  },
  {
    id: "L4-130",
    word: "distraught",
    meaning: "정신이 혼란한, 괴로운",
    examples: [
      { en: "She was so distraught after the accident that she couldn't speak.", kr: "그녀는 사고 후 너무 정신이 혼란하여 말할 수 없었습니다." },
      { en: "The parents were distraught when their child went missing.", kr: "부모는 아이가 실종되었을 때 괴로워했습니다." }
    ]
  },
  {
    id: "L4-131",
    word: "docile",
    meaning: "유순한, 다루기 쉬운",
    examples: [
      { en: "The large dog was surprisingly docile with small children.", kr: "그 큰 개는 어린 아이들에게 놀라울 정도로 유순했습니다." },
      { en: "He wished his students were more docile and less rebellious.", kr: "그는 학생들이 더 다루기 쉽고 반항적이지 않기를 바랐습니다." }
    ]
  },
  {
    id: "L4-132",
    word: "ecstatic",
    meaning: "열광적인, 황홀해하는",
    examples: [
      { en: "The team's fans were ecstatic after winning the championship.", kr: "그 팀의 팬들은 챔피언십 우승 후 열광적이었습니다." },
      { en: "She was in an ecstatic state of joy after hearing the news.", kr: "그녀는 그 소식을 듣고 황홀해하는 기쁨의 상태였습니다." }
    ]
  },
  {
    id: "L4-133",
    word: "efface",
    meaning: "지우다, 말소하다",
    examples: [
      { en: "Time can efface the painful memories of the past.", kr: "시간은 과거의 고통스러운 기억을 지울 수 있습니다." },
      { en: "He tried to efface himself from the photograph.", kr: "그는 사진에서 자신을 말소하려고 노력했습니다." }
    ]
  },
  {
    id: "L4-134",
    word: "emulate",
    meaning: "모방하다, 따라가다",
    examples: [
      { en: "Young athletes often emulate the techniques of their heroes.", kr: "젊은 운동선수들은 종종 그들의 영웅들의 기술을 모방합니다." },
      { en: "The company tried to emulate the success of its competitor.", kr: "그 회사는 경쟁사의 성공을 따라가려고 노력했습니다." }
    ]
  },
  {
    id: "L4-135",
    word: "enigma",
    meaning: "수수께끼, 불가사의",
    examples: [
      { en: "The source of the mysterious signal remains an enigma.", kr: "그 신비한 신호의 출처는 여전히 수수께끼로 남아 있습니다." },
      { en: "He has always been an enigma to his colleagues.", kr: "그는 항상 그의 동료들에게 불가사의한 존재였습니다." }
    ]
  },
  {
    id: "L4-136",
    word: "ephemeral",
    meaning: "덧없는, 수명이 짧은",
    examples: [
      { en: "Fame in the modern age is often ephemeral.", kr: "현대 시대의 명성은 종종 덧없습니다." },
      { en: "The beauty of the sunset is an ephemeral moment.", kr: "일몰의 아름다움은 수명이 짧은(순간적인) 순간입니다." }
    ]
  },
  {
    id: "L4-137",
    word: "expedite",
    meaning: "신속히 처리하다",
    examples: [
      { en: "We need to expedite the delivery of the emergency supplies.", kr: "우리는 긴급 구호품의 배송을 신속히 처리해야 합니다." },
      { en: "The new system is designed to expedite the application process.", kr: "새 시스템은 신청 절차를 신속히 처리하도록 설계되었습니다." }
    ]
  },
  {
    id: "L4-138",
    word: "extol",
    meaning: "극찬하다, 칭찬하다",
    examples: [
      { en: "Critics extolled the film as a masterpiece.", kr: "비평가들은 그 영화를 걸작이라고 극찬했습니다." },
      { en: "The media continues to extol the virtues of the new technology.", kr: "언론은 새로운 기술의 장점을 계속 칭찬합니다." }
    ]
  },
  {
    id: "L4-139",
    word: "fastidious",
    meaning: "꼼꼼한, 까다로운",
    examples: [
      { en: "He is fastidious about his appearance and always dresses impeccably.", kr: "그는 자신의 외모에 꼼꼼하여 항상 흠잡을 데 없이 옷을 입습니다." },
      { en: "The editor was fastidious about grammar and punctuation.", kr: "그 편집자는 문법과 구두점에 대해 까다로웠습니다." }
    ]
  },
  {
    id: "L4-140",
    word: "furtive",
    meaning: "은밀한, 몰래 하는",
    examples: [
      { en: "The spy exchanged a furtive glance with his contact.", kr: "그 스파이는 그의 접선책과 은밀한 시선을 교환했습니다." },
      { en: "He made a furtive attempt to copy the answers.", kr: "그는 답을 베끼려는 몰래 하는 시도를 했습니다." }
    ]
  },
  {
    id: "L4-141",
    word: "garrulous",
    meaning: "수다스러운",
    examples: [
      { en: "The garrulous old man told endless stories about his youth.", kr: "그 수다스러운 노인은 자신의 젊은 시절에 대한 끝없는 이야기를 했습니다." },
      { en: "He was too garrulous to be a good secret keeper.", kr: "그는 너무 수다스러워서 좋은 비밀 지키미가 될 수 없었습니다." }
    ]
  },
  {
    id: "L4-142",
    word: "hedonism",
    meaning: "쾌락주의",
    examples: [
      { en: "His lifestyle was defined by a strong sense of hedonism.", kr: "그의 생활 방식은 강한 쾌락주의 감각으로 정의되었습니다." },
      { en: "The philosophy promotes a moderate hedonism, not excess.", kr: "그 철학은 과잉이 아닌 온건한 쾌락주의를 장려합니다." }
    ]
  },
  {
    id: "L4-143",
    word: "hierarchy",
    meaning: "계층, 계급",
    examples: [
      { en: "The military operates on a strict hierarchy of command.", kr: "군대는 엄격한 명령 계층에 따라 운영됩니다." },
      { en: "The company is moving away from a traditional hierarchy.", kr: "그 회사는 전통적인 계층 구조에서 벗어나고 있습니다." }
    ]
  },
  {
    id: "L4-144",
    word: "hypothetical",
    meaning: "가상의, 가정의",
    examples: [
      { en: "We discussed a hypothetical scenario to test the new rules.", kr: "우리는 새 규칙을 시험하기 위해 가상의 시나리오를 논의했습니다." },
      { en: "The solution is purely hypothetical until we confirm the data.", kr: "그 해결책은 우리가 데이터를 확인할 때까지 순전히 가정의 것입니다." }
    ]
  },
  {
    id: "L4-145",
    word: "illicit",
    meaning: "불법적인",
    examples: [
      { en: "The police cracked down on the illicit trade of rare artifacts.", kr: "경찰은 희귀 유물들의 불법 거래를 단속했습니다." },
      { en: "They were accused of having an illicit affair.", kr: "그들은 불법적인 관계를 맺은 혐의로 고발되었습니다." }
    ]
  },
  {
    id: "L4-146",
    word: "impervious",
    meaning: "영향받지 않는, 통과시키지 않는",
    examples: [
      { en: "The new coating makes the material impervious to water.", kr: "새 코팅은 그 재료를 물이 통과하지 않도록 만듭니다." },
      { en: "He seemed impervious to criticism from his rivals.", kr: "그는 경쟁자들의 비판에 영향을 받지 않는 것처럼 보였습니다." }
    ]
  },
  {
    id: "L4-147",
    word: "impunity",
    meaning: "처벌을 면함",
    examples: [
      { en: "The dictator acted with complete impunity, ignoring international law.", kr: "그 독재자는 국제법을 무시하며 완전히 처벌을 면한 채 행동했습니다." },
      { en: "No one should be allowed to commit crimes with impunity.", kr: "어떤 누구도 처벌을 면한 채 범죄를 저지르는 것이 허용되어서는 안 됩니다." }
    ]
  },
  {
    id: "L4-148",
    word: "inception",
    meaning: "시작, 개시",
    examples: [
      { en: "The project has been successful since its inception five years ago.", kr: "그 프로젝트는 5년 전 시작(개시)된 이후로 성공적이었습니다." },
      { en: "From the inception of the idea, we knew it would be revolutionary.", kr: "그 아이디어의 시작부터, 우리는 그것이 혁명적일 것임을 알았습니다." }
    ]
  },
  {
    id: "L4-149",
    word: "incontrovertible",
    meaning: "논쟁의 여지가 없는, 명백한",
    examples: [
      { en: "The evidence presented was incontrovertible and led to a guilty verdict.", kr: "제시된 증거는 논쟁의 여지가 없었고 유죄 평결로 이어졌습니다." },
      { en: "She provided incontrovertible proof of her identity.", kr: "그녀는 자신의 신원에 대한 명백한 증거를 제공했습니다." }
    ]
  },
  {
    id: "L4-150",
    word: "incipient",
    meaning: "막 시작된, 초기의",
    examples: [
      { en: "The doctor detected an incipient infection and prescribed antibiotics.", kr: "의사는 막 시작된 감염을 감지하고 항생제를 처방했습니다." },
      { en: "We need to deal with the problem in its incipient stages.", kr: "우리는 그 문제를 초기 단계에서 다룰 필요가 있습니다." }
    ]
  },
  {
    id: "L4-151",
    word: "indolent",
    meaning: "게으른, 나태한",
    examples: [
      { en: "His indolent lifestyle was a constant source of frustration for his family.", kr: "그의 게으른 생활 방식은 가족에게 끊임없는 좌절의 원천이었습니다." },
      { en: "The hot weather makes everyone feel indolent.", kr: "더운 날씨는 모두를 나태하게 느끼게 만듭니다." }
    ]
  },
  {
    id: "L4-152",
    word: "inertia",
    meaning: "관성, 타성",
    examples: [
      { en: "The company's reluctance to change was a clear sign of corporate inertia.", kr: "변화를 꺼리는 그 회사의 태도는 기업의 타성을 보여주는 분명한 신호였습니다." },
      { en: "The ball continued to roll due to inertia.", kr: "공은 관성 때문에 계속 굴러갔습니다." }
    ]
  },
  {
    id: "L4-153",
    word: "infallible",
    meaning: "결코 틀리지 않는, 절대 확실한",
    examples: [
      { en: "She believes her instincts are infallible in business matters.", kr: "그녀는 자신의 직감이 사업 문제에서 결코 틀리지 않는다고 믿습니다." },
      { en: "There is no infallible method for predicting the future.", kr: "미래를 예측하는 절대 확실한 방법은 없습니다." }
    ]
  },
  {
    id: "L4-154",
    word: "innocuous",
    meaning: "무해한, 악의 없는",
    examples: [
      { en: "The mushroom looked poisonous, but it was actually innocuous.", kr: "그 버섯은 독성이 있어 보였지만, 실제로는 무해했습니다." },
      { en: "He made an innocuous comment that was later misinterpreted.", kr: "그는 악의 없는 논평을 했지만 나중에 오해를 받았습니다." }
    ]
  },
  {
    id: "L4-155",
    word: "insipid",
    meaning: "맛없는, 재미없는",
    examples: [
      { en: "The soup was bland and insipid, lacking any seasoning.", kr: "그 수프는 싱겁고 맛이 없었으며, 어떤 양념도 부족했습니다." },
      { en: "The speech was long and insipid, failing to engage the audience.", kr: "그 연설은 길고 재미없었으며, 청중의 참여를 유도하지 못했습니다." }
    ]
  },
  {
    id: "L4-156",
    word: "intangible",
    meaning: "무형의, 만질 수 없는",
    examples: [
      { en: "The brand name has a large intangible value.", kr: "그 브랜드 이름은 큰 무형의 가치를 가지고 있습니다." },
      { en: "Motivation and morale are intangible factors in a team's success.", kr: "동기 부여와 사기는 팀 성공의 무형적인 요소입니다." }
    ]
  },
  {
    id: "L4-157",
    word: "intermittent",
    meaning: "간헐적인",
    examples: [
      { en: "The region is experiencing intermittent rain showers today.", kr: "그 지역은 오늘 간헐적인 소나기를 겪고 있습니다." },
      { en: "The machine's performance suffered from intermittent power failures.", kr: "그 기계의 성능은 간헐적인 전력 공급 실패로 인해 저하되었습니다." }
    ]
  },
  {
    id: "L4-158",
    word: "intrepid",
    meaning: "용감한, 대담한",
    examples: [
      { en: "The intrepid explorer ventured into the uncharted jungle.", kr: "그 용감한 탐험가는 지도에 없는 정글 속으로 모험을 떠났습니다." },
      { en: "The newspaper praised the intrepid rescue team.", kr: "신문은 그 대담한 구조 팀을 칭찬했습니다." }
    ]
  },
  {
    id: "L4-159",
    word: "inundate",
    meaning: "물에 잠기게 하다, 쇄도하다",
    examples: [
      { en: "The small town was inundated by the river after the heavy rain.", kr: "그 작은 마을은 폭우 후에 강물에 잠기게 되었습니다." },
      { en: "After the commercial aired, the company was inundated with calls.", kr: "광고가 방영된 후, 그 회사는 전화로 쇄도했습니다." }
    ]
  },
  {
    id: "L4-160",
    word: "jocular",
    meaning: "우스꽝스러운, 익살맞은",
    examples: [
      { en: "He has a jocular manner that makes everyone feel at ease.", kr: "그는 모두를 편안하게 만드는 익살맞은 태도를 가지고 있습니다." },
      { en: "The mood of the meeting was light and jocular.", kr: "회의 분위기는 가볍고 우스꽝스러웠습니다." }
    ]
  },
  {
    id: "L4-161",
    word: "judicious",
    meaning: "현명한, 신중한",
    examples: [
      { en: "The CEO made a judicious decision to delay the launch.", kr: "최고 경영자는 출시를 연기하는 현명한 결정을 내렸습니다." },
      { en: "Judicious use of resources is crucial for the environment.", kr: "자원의 신중한 사용은 환경에 중요합니다." }
    ]
  },
  {
    id: "L4-162",
    word: "languid",
    meaning: "나른한, 무기력한",
    examples: [
      { en: "The hot summer afternoon made everyone feel languid.", kr: "뜨거운 여름 오후는 모두를 나른하게 만들었습니다." },
      { en: "She gave a languid wave from the deck chair.", kr: "그녀는 갑판 의자에서 무기력한 손짓을 했습니다." }
    ]
  },
  {
    id: "L4-163",
    word: "laud",
    meaning: "칭찬하다",
    examples: [
      { en: "The critics lauded the director's bold new vision.", kr: "비평가들은 감독의 대담한 새 비전을 칭찬했습니다." },
      { en: "His efforts to improve the community were lauded by the mayor.", kr: "지역 사회를 개선하려는 그의 노력은 시장으로부터 칭찬을 받았습니다." }
    ]
  },
  {
    id: "L4-164",
    word: "meticulous",
    meaning: "꼼꼼한, 세심한",
    examples: [
      { en: "The accountant was meticulous in his attention to detail.", kr: "그 회계사는 세부 사항에 대한 그의 주의에서 꼼꼼했습니다." },
      { en: "The building plans require a meticulous review.", kr: "그 건물 계획은 세심한 검토를 필요로 합니다." }
    ]
  },
  {
    id: "L4-165",
    word: "morose",
    meaning: "시무룩한, 침울한",
    examples: [
      { en: "After losing the game, the players were morose and silent.", kr: "경기에 진 후, 선수들은 시무룩하고 말이 없었습니다." },
      { en: "He has been morose ever since he lost his job.", kr: "그는 일자리를 잃은 이후로 계속 침울했습니다." }
    ]
  },
  {
    id: "L4-166",
    word: "nomadic",
    meaning: "유목의, 방랑하는",
    examples: [
      { en: "The tribe maintained a traditional nomadic lifestyle.", kr: "그 부족은 전통적인 유목 생활 방식을 유지했습니다." },
      { en: "After graduation, he led a nomadic existence, traveling from city to city.", kr: "졸업 후, 그는 도시에서 도시로 여행하는 방랑하는 삶을 살았습니다." }
    ]
  },
  {
    id: "L4-167",
    word: "novice",
    meaning: "초보자",
    examples: [
      { en: "Even a complete novice can use this software easily.", kr: "완전한 초보자도 이 소프트웨어를 쉽게 사용할 수 있습니다." },
      { en: "She is a novice at coding, but she learns quickly.", kr: "그녀는 코딩 초보자이지만, 빠르게 배웁니다." }
    ]
  },
  {
    id: "L4-168",
    word: "oblivious",
    meaning: "염두에 없는, 망각하는",
    examples: [
      { en: "He seemed completely oblivious to the danger he was in.", kr: "그는 자신이 처한 위험을 완전히 염두에 두지 않는 것처럼 보였습니다." },
      { en: "The driver was oblivious to the siren behind him.", kr: "그 운전자는 뒤에서 들리는 사이렌을 망각했습니다(알지 못했습니다)." }
    ]
  },
  {
    id: "L4-169",
    word: "oscillate",
    meaning: "동요하다, 진동하다",
    examples: [
      { en: "The fan oscillates to circulate air throughout the room.", kr: "선풍기는 방 전체에 공기를 순환시키기 위해 진동합니다." },
      { en: "His opinions on the matter oscillate between two extremes.", kr: "그 문제에 대한 그의 의견은 두 극단 사이를 동요합니다." }
    ]
  },
  {
    id: "L4-170",
    word: "ostensibly",
    meaning: "표면상으로는",
    examples: [
      { en: "Ostensibly, the meeting was about the budget, but it was really about power.", kr: "표면상으로는 그 회의는 예산에 관한 것이었지만, 실제로는 권력에 관한 것이었습니다." },
      { en: "She arrived late, ostensibly due to traffic.", kr: "그녀는 표면상으로는 교통 체증 때문에 늦게 도착했습니다." }
    ]
  },
  {
    id: "L4-171",
    word: "palatable",
    meaning: "맛있는, 구미에 맞는",
    examples: [
      { en: "The meal was simple but surprisingly palatable.", kr: "그 식사는 단순했지만 놀랍도록 맛있었습니다." },
      { en: "The contract terms were made more palatable to the union.", kr: "그 계약 조건들은 노조에 더 구미에 맞게 만들어졌습니다." }
    ]
  },
  {
    id: "L4-172",
    word: "peripheral",
    meaning: "주변적인, 중요하지 않은",
    examples: [
      { en: "The issue of office lighting is peripheral to the main budget discussion.", kr: "사무실 조명 문제는 주요 예산 논의에 주변적입니다." },
      { en: "We only need to focus on the central problem, not the peripheral details.", kr: "우리는 주변적인 세부 사항이 아니라 중심 문제에만 집중하면 됩니다." }
    ]
  },
  {
    id: "L4-173",
    word: "perpetuate",
    meaning: "영구화하다, 지속시키다",
    examples: [
      { en: "We must not perpetuate the myth that hard work alone guarantees success.", kr: "우리는 열심히 일하는 것만이 성공을 보장한다는 신화를 영구화해서는 안 됩니다." },
      { en: "The monument was built to perpetuate the memory of the soldiers.", kr: "그 기념비는 군인들의 기억을 영구화하기 위해 세워졌습니다." }
    ]
  },
  {
    id: "L4-174",
    word: "philanthropy",
    meaning: "박애, 자선",
    examples: [
      { en: "The billionaire is well known for his philanthropy and charitable donations.", kr: "그 억만장자는 자신의 박애와 자선 기부로 잘 알려져 있습니다." },
      { en: "The foundation is dedicated to promoting philanthropy in developing nations.", kr: "그 재단은 개발 도상국에서 자선을 증진하는 데 전념하고 있습니다." }
    ]
  },
  {
    id: "L4-175",
    word: "plummet",
    meaning: "급락하다",
    examples: [
      { en: "Stock prices plummeted after the sudden economic news.", kr: "갑작스러운 경제 뉴스 이후 주가가 급락했습니다." },
      { en: "The bird released its prey and watched it plummet to the ground.", kr: "그 새는 먹이를 놓아주었고 그것이 땅으로 급락하는 것을 지켜보았습니다." }
    ]
  },
  {
    id: "L4-176",
    word: "poignant",
    meaning: "가슴 아픈, 신랄한",
    examples: [
      { en: "The old letter contained a poignant reminder of his lost youth.", kr: "그 오래된 편지에는 그의 잃어버린 젊은 시절에 대한 가슴 아픈 상기가 담겨 있었습니다." },
      { en: "Her final performance was a poignant farewell to the stage.", kr: "그녀의 마지막 공연은 무대에 대한 신랄한(가슴을 찌르는) 작별 인사였습니다." }
    ]
  },
  {
    id: "L4-177",
    word: "precarious",
    meaning: "불안정한, 위태로운",
    examples: [
      { en: "The political situation in the region remains precarious.", kr: "그 지역의 정치 상황은 불안정한 상태로 남아 있습니다." },
      { en: "The climber found himself in a precarious position on the cliff face.", kr: "그 등반가는 절벽 면에서 위태로운 위치에 있음을 발견했습니다." }
    ]
  },
  {
    id: "L4-178",
    word: "pragmatic",
    meaning: "실용적인",
    examples: [
      { en: "The manager took a pragmatic approach to solving the problem.", kr: "그 관리자는 문제를 해결하기 위해 실용적인 접근 방식을 취했습니다." },
      { en: "We need a more pragmatic budget that reflects the current reality.", kr: "우리는 현재의 현실을 반영하는 더 실용적인 예산이 필요합니다." }
    ]
  },
  {
    id: "L4-179",
    word: "prodigious",
    meaning: "엄청난, 경이로운",
    examples: [
      { en: "She has a prodigious talent for playing the piano.", kr: "그녀는 피아노 연주에 엄청난 재능을 가지고 있습니다." },
      { en: "The mountain range is a prodigious feat of nature.", kr: "그 산맥은 자연의 경이로운 업적입니다." }
    ]
  },
  {
    id: "L4-180",
    word: "propensity",
    meaning: "성향, 경향",
    examples: [
      { en: "He has a propensity for telling exaggerated stories.", kr: "그는 과장된 이야기를 하는 성향이 있습니다." },
      { en: "There is a natural human propensity to fear the unknown.", kr: "미지의 것을 두려워하는 자연스러운 인간의 경향이 있습니다." }
    ]
  },
  {
    id: "L4-181",
    word: "proponent",
    meaning: "옹호자, 지지자",
    examples: [
      { en: "He is a leading proponent of renewable energy.", kr: "그는 재생 에너지의 선도적인 옹호자입니다." },
      { en: "The proponents of the new law held a rally.", kr: "새 법의 지지자들은 집회를 열었습니다." }
    ]
  },
  {
    id: "L4-182",
    word: "quell",
    meaning: "진압하다, 가라앉히다",
    examples: [
      { en: "The police were called in to quell the riot.", kr: "경찰은 폭동을 진압하기 위해 소집되었습니다." },
      { en: "She took a deep breath to quell her rising anxiety.", kr: "그녀는 치솟는 불안을 가라앉히기 위해 심호흡을 했습니다." }
    ]
  },
  {
    id: "L4-183",
    word: "rationalize",
    meaning: "합리화하다",
    examples: [
      { en: "He tried to rationalize his impulsive purchase by saying it was an investment.", kr: "그는 충동적인 구매를 그것이 투자였다고 말하며 합리화하려고 노력했습니다." },
      { en: "You can't rationalize bad behavior by blaming others.", kr: "다른 사람들을 비난함으로써 나쁜 행동을 합리화할 수 없습니다." }
    ]
  },
  {
    id: "L4-184",
    word: "recluse",
    meaning: "은둔자",
    examples: [
      { en: "The old artist lived as a recluse in the remote mountains.", kr: "그 나이든 예술가는 외딴 산에서 은둔자로 살았습니다." },
      { en: "She became a recluse after the media scandal.", kr: "그녀는 언론 스캔들 이후 은둔자가 되었습니다." }
    ]
  },
  {
    id: "L4-185",
    word: "recoup",
    meaning: "만회하다, 되찾다",
    examples: [
      { en: "The company hopes to recoup its losses with the new product line.", kr: "그 회사는 새 제품 라인으로 손실을 만회하기를 희망합니다." },
      { en: "It took him months to recoup his strength after the illness.", kr: "그가 병에서 회복한 후 힘을 되찾는 데는 몇 달이 걸렸습니다." }
    ]
  },
  {
    id: "L4-186",
    word: "refute",
    meaning: "반박하다",
    examples: [
      { en: "The lawyer was able to refute the key witness's testimony.", kr: "그 변호사는 핵심 증인의 증언을 반박할 수 있었습니다." },
      { en: "Scientists have yet to refute the controversial claims completely.", kr: "과학자들은 논란이 되는 주장을 완전히 반박하지 못했습니다." }
    ]
  },
  {
    id: "L4-187",
    word: "remorse",
    meaning: "후회, 양심의 가책",
    examples: [
      { en: "He felt deep remorse for having caused the accident.", kr: "그는 사고를 일으킨 것에 대해 깊은 후회를 느꼈습니다." },
      { en: "The criminal showed no remorse for his actions.", kr: "그 범죄자는 자신의 행동에 대해 아무런 양심의 가책도 보이지 않았습니다." }
    ]
  },
  {
    id: "L4-188",
    word: "reprehensible",
    meaning: "비난받을 만한",
    examples: [
      { en: "His actions were utterly reprehensible and unacceptable.", kr: "그의 행동은 전적으로 비난받을 만하고 용납될 수 없었습니다." },
      { en: "The politician was forced to resign due to his reprehensible conduct.", kr: "그 정치인은 비난받을 만한 행위로 인해 사임해야 했습니다." }
    ]
  },
  {
    id: "L4-189",
    word: "reprove",
    meaning: "꾸짖다, 책망하다",
    examples: [
      { en: "The teacher reproved the student for shouting in the library.", kr: "선생님은 도서관에서 소리를 지른 학생을 꾸짖었습니다." },
      { en: "He had to reprove his son for being disrespectful.", kr: "그는 아들에게 무례한 행동을 책망해야 했습니다." }
    ]
  },
  {
    id: "L4-190",
    word: "rescind",
    meaning: "철회하다, 폐지하다",
    examples: [
      { en: "The company decided to rescind the job offer due to budget cuts.", kr: "그 회사는 예산 삭감으로 인해 채용 제안을 철회하기로 결정했습니다." },
      { en: "The city council voted to rescind the unpopular new tax.", kr: "시의회는 인기 없는 새 세금을 폐지하기로 투표했습니다." }
    ]
  },
  {
    id: "L4-191",
    word: "resolute",
    meaning: "단호한, 확고한",
    examples: [
      { en: "She remained resolute in her decision to leave the job.", kr: "그녀는 직장을 떠나겠다는 결정에 단호한 태도를 유지했습니다." },
      { en: "The leader showed a resolute commitment to achieving peace.", kr: "그 지도자는 평화를 달성하기 위한 확고한 헌신을 보여주었습니다." }
    ]
  },
  {
    id: "L4-192",
    word: "revere",
    meaning: "존경하다, 숭배하다",
    examples: [
      { en: "The people revere the former president for his humanitarian work.", kr: "사람들은 전 대통령의 인도주의적 활동을 존경합니다." },
      { en: "Many cultures revere certain animals as sacred.", kr: "많은 문화권에서 특정 동물들을 신성한 것으로 숭배합니다." }
    ]
  },
  {
    id: "L4-193",
    word: "rhetoric",
    meaning: "수사학, 미사여구",
    examples: [
      { en: "The politician's speech was full of empty rhetoric and lacked substance.", kr: "그 정치인의 연설은 공허한 미사여구로 가득했고 실속이 없었습니다." },
      { en: "She studied classical rhetoric to improve her persuasive speaking skills.", kr: "그녀는 설득력 있는 연설 기술을 향상시키기 위해 고전 수사학을 공부했습니다." }
    ]
  },
  {
    id: "L4-194",
    word: "rife",
    meaning: "가득한, 만연한",
    examples: [
      { en: "The historical documents were rife with errors and contradictions.", kr: "그 역사적 문서들은 오류와 모순으로 가득했습니다." },
      { en: "Corruption is unfortunately rife in certain sectors of the industry.", kr: "부패는 불행하게도 산업의 특정 부문에서 만연합니다." }
    ]
  },
  {
    id: "L4-195",
    word: "rudimentary",
    meaning: "기본적인, 초보적인",
    examples: [
      { en: "He only has a rudimentary understanding of complex mathematics.", kr: "그는 복잡한 수학에 대해 단지 기본적인 이해만 가지고 있습니다." },
      { en: "The shelter was a rudimentary structure built from branches.", kr: "그 은신처는 나뭇가지로 지어진 초보적인 구조물이었습니다." }
    ]
  },
  {
    id: "L4-196",
    word: "succinct",
    meaning: "간결한",
    examples: [
      { en: "The professor asked for a succinct summary of the chapter.", kr: "교수님은 그 장에 대한 간결한 요약을 요청했습니다." },
      { en: "His comments were succinct and to the point.", kr: "그의 논평은 간결하고 핵심적이었습니다." }
    ]
  },
  {
    id: "L4-197",
    word: "surmise",
    meaning: "추측하다",
    examples: [
      { en: "Based on the evidence, the detective could only surmise the motive.", kr: "증거를 바탕으로, 탐정은 동기를 추측할 수밖에 없었습니다." },
      { en: "I can only surmise that they missed the train.", kr: "저는 그들이 기차를 놓쳤다고 추측할 수 있을 뿐입니다." }
    ]
  },
  {
    id: "L4-198",
    word: "synergy",
    meaning: "시너지 효과, 협력 작용",
    examples: [
      { en: "The merger was designed to create synergy between the two companies.", kr: "그 합병은 두 회사 사이에 시너지 효과를 창출하도록 설계되었습니다." },
      { en: "Teamwork creates a synergy that is greater than the sum of its parts.", kr: "팀워크는 각 부분의 합보다 더 큰 시너지 효과를 창출합니다." }
    ]
  },
  {
    id: "L4-199",
    word: "tacit",
    meaning: "암묵적인",
    examples: [
      { en: "There was a tacit agreement that they would not discuss politics.", kr: "그들이 정치에 대해 논의하지 않겠다는 암묵적인 합의가 있었습니다." },
      { en: "His nod was a tacit approval of the plan.", kr: "그의 고갯짓은 그 계획에 대한 암묵적인 승인이었습니다." }
    ]
  },
  {
    id: "L4-200",
    word: "tantamount",
    meaning: "동등한, 마찬가지인",
    examples: [
      { en: "A dismissal without cause is tantamount to an admission of guilt.", kr: "정당한 이유 없는 해고는 유죄 인정과 마찬가지입니다." },
      { en: "Ignoring the warning signs is tantamount to inviting disaster.", kr: "경고 신호를 무시하는 것은 재난을 초래하는 것과 동등합니다." }
    ]
  }
];

const wordsLevel4_Part3 = [
  {
    id: "L4-201",
    word: "tenacious",
    meaning: "집요한, 끈기 있는",
    examples: [
      { en: "He is a tenacious defender and rarely lets opponents score.", kr: "그는 끈기 있는 수비수이며 상대방이 득점하도록 좀처럼 내버려 두지 않습니다." },
      { en: "The weed is surprisingly tenacious and difficult to remove.", kr: "그 잡초는 놀라울 정도로 집요하고 제거하기 어렵습니다." }
    ]
  },
  {
    id: "L4-202",
    word: "salient",
    meaning: "가장 중요한, 현저한",
    examples: [
      { en: "The most salient feature of the new model is its battery life.", kr: "새 모델의 가장 중요한 특징은 배터리 수명입니다." },
      { en: "She outlined the salient points of the proposal in her introduction.", kr: "그녀는 도입부에서 제안의 현저한(핵심적인) 요점들을 간략하게 설명했습니다." }
    ]
  },
  {
    id: "L4-203",
    word: "ostentatious",
    meaning: "과시하는, 허세 부리는",
    examples: [
      { en: "The millionaire was criticized for his ostentatious display of wealth.", kr: "그 백만장자는 자신의 과시하는 부의 전시로 비판받았습니다." },
      { en: "She prefers simple jewelry over ostentatious pieces.", kr: "그녀는 허세 부리는 장신구보다 단순한 보석을 선호합니다." }
    ]
  },
  {
    id: "L4-204",
    word: "superfluous",
    meaning: "불필요한, 여분의",
    examples: [
      { en: "The last chapter contains superfluous details that can be cut.", kr: "마지막 장에는 삭제해도 되는 불필요한 세부 사항들이 포함되어 있습니다." },
      { en: "Please eliminate all superfluous words from your essay.", kr: "당신의 에세이에서 모든 여분의 단어를 제거해 주세요." }
    ]
  },
  {
    id: "L4-205",
    word: "esoteric",
    meaning: "난해한, 소수만 아는",
    examples: [
      { en: "The text was full of esoteric references that only scholars understood.", kr: "그 글은 학자들만 이해하는 난해한 참고 자료들로 가득했습니다." },
      { en: "He has an esoteric knowledge of rare musical instruments.", kr: "그는 희귀한 악기에 대한 소수만 아는 지식을 가지고 있습니다." }
    ]
  },
  {
    id: "L4-206",
    word: "clandestine",
    meaning: "비밀의, 은밀한",
    examples: [
      { en: "The couple held a clandestine meeting late at night.", kr: "그 커플은 늦은 밤에 비밀 회동을 가졌습니다." },
      { en: "Clandestine operations were carried out by the intelligence agency.", kr: "정보국에 의해 은밀한 작전들이 수행되었습니다." }
    ]
  },
  {
    id: "L4-207",
    word: "egregious",
    meaning: "지독한, 터무니없는",
    examples: [
      { en: "The lawyer cited several egregious errors in the previous trial.", kr: "그 변호사는 이전 재판에서 몇 가지 터무니없는 오류들을 언급했습니다." },
      { en: "It was an egregious violation of human rights.", kr: "그것은 지독한 인권 침해였습니다." }
    ]
  },
  {
    id: "L4-208",
    word: "epitome",
    meaning: "전형, 완벽한 본보기",
    examples: [
      { en: "He is the epitome of a modern, successful entrepreneur.", kr: "그는 현대적이고 성공적인 사업가의 완벽한 전형입니다." },
      { en: "The old house was the epitome of rustic elegance.", kr: "그 오래된 집은 소박한 우아함의 본보기였습니다." }
    ]
  },
  {
    id: "L4-209",
    word: "hiatus",
    meaning: "중단, 공백",
    examples: [
      { en: "The band announced a one-year hiatus to focus on solo projects.", kr: "그 밴드는 솔로 프로젝트에 집중하기 위해 1년 간의 중단을 발표했습니다." },
      { en: "There was a brief hiatus in the conversation as the waiter approached.", kr: "웨이터가 다가오자 대화에 짧은 공백이 있었습니다." }
    ]
  },
  {
    id: "L4-210",
    word: "impetus",
    meaning: "추진력, 자극",
    examples: [
      { en: "The new technology gave a fresh impetus to the industry.", kr: "새로운 기술은 그 산업에 새로운 추진력을 제공했습니다." },
      { en: "The change in management provided the necessary impetus for reform.", kr: "경영진의 변화는 개혁을 위한 필수적인 자극을 제공했습니다." }
    ]
  },
  {
    id: "L4-211",
    word: "lexicon",
    meaning: "어휘, 어휘 목록",
    examples: [
      { en: "The specialized lexicon of computer science is constantly expanding.", kr: "컴퓨터 과학의 전문 어휘는 끊임없이 확장되고 있습니다." },
      { en: "He possessed a rich lexicon that allowed him to express himself precisely.", kr: "그는 자신을 정확하게 표현할 수 있게 해주는 풍부한 어휘 목록을 소유하고 있었습니다." }
    ]
  },
  {
    id: "L4-212",
    word: "mercenary",
    meaning: "돈을 위한, 용병",
    examples: [
      { en: "His motives were entirely mercenary; he only cared about the profit.", kr: "그의 동기는 전적으로 돈을 위한 것이었습니다; 그는 오직 이익에만 신경 썼습니다." },
      { en: "The former general was hired as a mercenary by a foreign regime.", kr: "그 전직 장군은 외국 정권에 의해 용병으로 고용되었습니다." }
    ]
  },
  {
    id: "L4-213",
    word: "opaque",
    meaning: "불투명한, 이해하기 어려운",
    examples: [
      { en: "The window was covered with an opaque film for privacy.", kr: "그 창문은 사생활 보호를 위해 불투명한 필름으로 덮여 있었습니다." },
      { en: "The government's decision-making process was entirely opaque.", kr: "정부의 의사 결정 과정은 완전히 이해하기 어려웠습니다." }
    ]
  },
  {
    id: "L4-214",
    word: "paramount",
    meaning: "가장 중요한",
    examples: [
      { en: "The safety of the children is of paramount importance.", kr: "아이들의 안전이 가장 중요한 사항입니다." },
      { en: "Quality is paramount to our reputation as a manufacturer.", kr: "품질은 제조업체로서 우리의 명성에 가장 중요합니다." }
    ]
  },
  {
    id: "L4-215",
    word: "pernicious",
    meaning: "유해한, 치명적인",
    examples: [
      { en: "The pernicious effects of social isolation are well documented.", kr: "사회적 고립의 유해한 영향은 잘 기록되어 있습니다." },
      { en: "His pernicious influence corrupted the whole organization.", kr: "그의 치명적인 영향은 조직 전체를 타락시켰습니다." }
    ]
  },
  {
    id: "L4-216",
    word: "quiescent",
    meaning: "활동이 없는, 잠잠한",
    examples: [
      { en: "The volcano has been quiescent for centuries, but it is still monitored.", kr: "그 화산은 수 세기 동안 활동이 없었지만, 여전히 감시됩니다." },
      { en: "The market is currently quiescent, with little trading activity.", kr: "시장은 현재 거래 활동이 거의 없이 잠잠합니다." }
    ]
  },
  {
    id: "L4-217",
    word: "rancor",
    meaning: "원한, 악의",
    examples: [
      { en: "He spoke without rancor, despite the bitter feud between them.", kr: "그는 그들 사이의 쓰라린 불화에도 불구하고 원한 없이 말했습니다." },
      { en: "The debate was filled with old rancor and personal attacks.", kr: "그 토론은 오래된 악의와 인신공격으로 가득했습니다." }
    ]
  },
  {
    id: "L4-218",
    word: "satiate",
    meaning: "충족시키다, 물리게 하다",
    examples: [
      { en: "A single piece of cake was enough to satiate her craving for sweets.", kr: "케이크 한 조각만으로 그녀의 단맛에 대한 갈망을 충족시키기에 충분했습니다." },
      { en: "The endless stream of information does not satiate the public's curiosity.", kr: "끝없는 정보의 흐름은 대중의 호기심을 물리게 하지 않습니다." }
    ]
  },
  {
    id: "L4-219",
    word: "solace",
    meaning: "위로, 위안",
    examples: [
      { en: "She found solace in her faith after the tragic loss.", kr: "그녀는 비극적인 상실 후에 자신의 믿음에서 위안을 찾았습니다." },
      { en: "Music was the only solace he could find in his lonely life.", kr: "음악은 그가 외로운 삶에서 찾을 수 있는 유일한 위로였습니다." }
    ]
  },
  {
    id: "L4-220",
    word: "transient",
    meaning: "일시적인, 순간적인",
    examples: [
      { en: "The feeling of happiness was unfortunately transient.", kr: "행복감은 불행히도 일시적이었습니다." },
      { en: "The hotel provides accommodation for transient guests.", kr: "그 호텔은 일시적인(단기) 손님들을 위한 숙박 시설을 제공합니다." }
    ]
  },
  {
    id: "L4-221",
    word: "venerate",
    meaning: "존경하다, 숭배하다",
    examples: [
      { en: "Many people continue to venerate the late leader for his reforms.", kr: "많은 사람들이 그의 개혁 때문에 고(故) 지도자를 계속 존경합니다." },
      { en: "In that culture, elders are highly venerated.", kr: "그 문화에서는 어른들이 매우 숭배됩니다(존경받습니다)." }
    ]
  },
  {
    id: "L4-222",
    word: "admonish",
    meaning: "꾸짖다, 충고하다",
    examples: [
      { en: "The teacher had to admonish the students for being noisy in the hall.", kr: "선생님은 복도에서 시끄럽게 구는 학생들을 꾸짖어야 했습니다." },
      { en: "I admonished him to be more careful with his health.", kr: "나는 그에게 건강에 더 조심하라고 충고했습니다." }
    ]
  },
  {
    id: "L4-223",
    word: "ameliorate",
    meaning: "개선하다, 완화시키다",
    examples: [
      { en: "We hope to ameliorate the living conditions of the poor.", kr: "우리는 가난한 사람들의 생활 환경을 개선하기를 희망합니다." },
      { en: "Relief efforts were sent to ameliorate the suffering after the earthquake.", kr: "지진 후 고통을 완화시키기 위해 구호 노력이 파견되었습니다." }
    ]
  },
  {
    id: "L4-224",
    word: "cajole",
    meaning: "꼬드기다, 회유하다",
    examples: [
      { en: "He tried to cajole his daughter into eating her vegetables.", kr: "그는 딸을 회유하여 채소를 먹이려고 노력했습니다." },
      { en: "They cajoled the manager into giving them a discount.", kr: "그들은 매니저를 꼬드겨 할인을 받았습니다." }
    ]
  },
  {
    id: "L4-225",
    word: "chastise",
    meaning: "징벌하다, 비난하다",
    examples: [
      { en: "The manager chastised the team for their poor performance.", kr: "매니저는 그들의 저조한 실적 때문에 팀을 징벌(엄하게 꾸짖음)했습니다." },
      { en: "She was chastised for speaking out of turn during the meeting.", kr: "그녀는 회의 중에 순서 없이 발언하여 비난받았습니다." }
    ]
  },
  {
    id: "L4-226",
    word: "cogent",
    meaning: "설득력 있는",
    examples: [
      { en: "The lawyer presented a cogent argument that swayed the jury.", kr: "그 변호사는 배심원들을 움직인 설득력 있는 주장을 제시했습니다." },
      { en: "We need a cogent reason to approve the proposal.", kr: "우리는 그 제안을 승인할 설득력 있는 이유가 필요합니다." }
    ]
  },
  {
    id: "L4-227",
    word: "concomitant",
    meaning: "수반되는, 동시에 발생하는",
    examples: [
      { en: "Loss of memory is a common concomitant of aging.", kr: "기억 상실은 노화에 수반되는 흔한 현상입니다." },
      { en: "The rise in prices and the concomitant fall in sales worried the company.", kr: "가격 상승과 동시에 발생하는 판매 하락은 회사를 걱정시켰습니다." }
    ]
  },
  {
    id: "L4-228",
    word: "deleterious",
    meaning: "해로운, 유해한",
    examples: [
      { en: "The doctor warned about the deleterious effects of smoking.", kr: "의사는 흡연의 해로운 영향에 대해 경고했습니다." },
      { en: "A lack of sunlight can have deleterious consequences for certain plants.", kr: "햇빛 부족은 특정 식물에 유해한 결과를 초래할 수 있습니다." }
    ]
  },
  {
    id: "L4-229",
    word: "denigrate",
    meaning: "훼손하다, 폄하하다",
    examples: [
      { en: "It is unfair to denigrate someone's work without understanding their efforts.", kr: "그들의 노력을 이해하지 않고 누군가의 작업을 폄하하는 것은 불공평합니다." },
      { en: "Rival politicians often denigrate each other's policies.", kr: "경쟁 정치인들은 종종 서로의 정책을 훼손합니다." }
    ]
  },
  {
    id: "L4-230",
    word: "disparate",
    meaning: "서로 전혀 다른",
    examples: [
      { en: "The research team brought together disparate fields of study.", kr: "그 연구팀은 서로 전혀 다른 연구 분야들을 한데 모았습니다." },
      { en: "The city is characterized by disparate architectural styles.", kr: "그 도시는 서로 전혀 다른 건축 양식들로 특징지어집니다." }
    ]
  },
  {
    id: "L4-231",
    word: "elucidate",
    meaning: "설명하다, 명료하게 하다",
    examples: [
      { en: "The professor was asked to elucidate the complex theory.", kr: "그 교수는 복잡한 이론을 설명해 달라는 요청을 받았습니다." },
      { en: "I need you to elucidate your proposal with some concrete examples.", kr: "저는 당신이 몇 가지 구체적인 예시로 당신의 제안을 명료하게 해주기를 바랍니다." }
    ]
  },
  {
    id: "L4-232",
    word: "enervate",
    meaning: "기력을 떨어뜨리다, 무기력하게 하다",
    examples: [
      { en: "The intense heat tended to enervate the workers in the field.", kr: "강렬한 더위는 현장의 노동자들의 기력을 떨어뜨리는 경향이 있었습니다." },
      { en: "A lack of purpose can enervate an otherwise ambitious person.", kr: "목표 부족은 그렇지 않아도 야심 찬 사람을 무기력하게 만들 수 있습니다." }
    ]
  },
  {
    id: "L4-233",
    word: "equanimity",
    meaning: "평정, 침착",
    examples: [
      { en: "She faced the crisis with impressive equanimity.", kr: "그녀는 인상적인 평정심으로 위기에 맞섰습니다." },
      { en: "Maintaining equanimity is essential for a good leader.", kr: "침착함을 유지하는 것은 좋은 리더에게 필수적입니다." }
    ]
  },
  {
    id: "L4-234",
    word: "exigency",
    meaning: "긴급, 위급",
    examples: [
      { en: "The exigency of the situation required immediate action.", kr: "그 상황의 긴급함은 즉각적인 조치를 요구했습니다." },
      { en: "Due to the financial exigency, we had to cut many programs.", kr: "재정적 위급함 때문에, 우리는 많은 프로그램을 줄여야 했습니다." }
    ]
  },
  {
    id: "L4-235",
    word: "fatuous",
    meaning: "어리석은, 얼빠진",
    examples: [
      { en: "The interviewer asked a fatuous question that wasted everyone's time.", kr: "면접관은 모두의 시간을 낭비하는 어리석은 질문을 했습니다." },
      { en: "It was a fatuous mistake to ignore the warning signs.", kr: "경고 신호를 무시한 것은 얼빠진 실수였습니다." }
    ]
  },
  {
    id: "L4-236",
    word: "gregarious",
    meaning: "사교적인, 군집성의",
    examples: [
      { en: "Lions are gregarious animals that live in prides.", kr: "사자는 무리를 지어 사는 군집성 동물입니다." },
      { en: "She is highly gregarious and loves attending large parties.", kr: "그녀는 매우 사교적이며 대규모 파티에 참석하는 것을 좋아합니다." }
    ]
  },
  {
    id: "L4-237",
    word: "inane",
    meaning: "어리석은, 무의미한",
    examples: [
      { en: "He kept making inane comments that annoyed his colleagues.", kr: "그는 동료들을 짜증 나게 하는 어리석은 논평을 계속했습니다." },
      { en: "The film was an inane comedy with no plot to speak of.", kr: "그 영화는 말할 만한 줄거리도 없는 무의미한 코미디였습니다." }
    ]
  },
  {
    id: "L4-238",
    word: "inchoate",
    meaning: "초기의, 미발달의",
    examples: [
      { en: "The idea for the novel was still in an inchoate stage.", kr: "그 소설에 대한 아이디어는 여전히 초기 단계에 있었습니다." },
      { en: "The country's inchoate legal system needs comprehensive reform.", kr: "그 나라의 미발달된 법률 시스템은 포괄적인 개혁을 필요로 합니다." }
    ]
  },
  {
    id: "L4-239",
    word: "inculcate",
    meaning: "주입시키다, 심어주다",
    examples: [
      { en: "Parents try to inculcate a sense of responsibility in their children.", kr: "부모들은 아이들에게 책임감을 주입시키려고 노력합니다." },
      { en: "The school curriculum aims to inculcate a love of learning.", kr: "그 학교 교육과정은 배움에 대한 사랑을 심어주는 것을 목표로 합니다." }
    ]
  },
  {
    id: "L4-240",
    word: "innuendo",
    meaning: "암시, 빈정거림",
    examples: [
      { en: "The rumor was spread through innuendo rather than direct accusation.", kr: "그 소문은 직접적인 비난보다는 암시를 통해 퍼졌습니다." },
      { en: "He responded to the criticism with a witty innuendo.", kr: "그는 재치 있는 빈정거림으로 비판에 응답했습니다." }
    ]
  },
  {
    id: "L4-241",
    word: "interminable",
    meaning: "끝없이 계속되는",
    examples: [
      { en: "The drive through the desert seemed interminable.", kr: "사막을 통과하는 운전은 끝없이 계속되는 것 같았습니다." },
      { en: "We had to sit through an interminable series of meetings.", kr: "우리는 끝없이 계속되는 일련의 회의들을 앉아서 견뎌야 했습니다." }
    ]
  },
  {
    id: "L4-242",
    word: "invective",
    meaning: "욕설, 비난",
    examples: [
      { en: "The politician's speech was full of invective against his opponents.", kr: "그 정치인의 연설은 그의 반대자들에 대한 비난으로 가득했습니다." },
      { en: "She endured a stream of invective from the angry customer.", kr: "그녀는 화난 고객으로부터 쏟아지는 욕설을 견뎌냈습니다." }
    ]
  },
  {
    id: "L4-243",
    word: "juxtaposition",
    meaning: "병치, 병렬",
    examples: [
      { en: "The artist used the juxtaposition of bright and dark colors effectively.", kr: "그 예술가는 밝은 색과 어두운 색의 병치를 효과적으로 사용했습니다." },
      { en: "The play works through the juxtaposition of comedy and tragedy.", kr: "그 연극은 코미디와 비극의 병치를 통해 작동합니다." }
    ]
  },
  {
    id: "L4-244",
    word: "laconic",
    meaning: "말이 없는, 간결한",
    examples: [
      { en: "His laconic reply suggested he was not interested in further discussion.", kr: "그의 간결한 답변은 그가 더 이상의 논의에 관심이 없음을 시사했습니다." },
      { en: "The general was known for his laconic style of command.", kr: "그 장군은 말이 없는 지휘 스타일로 알려져 있었습니다." }
    ]
  },
  {
    id: "L4-245",
    word: "lithe",
    meaning: "유연한, 나긋나긋한",
    examples: [
      { en: "The dancer's movements were lithe and graceful.", kr: "그 무용수의 움직임은 유연하고 우아했습니다." },
      { en: "Cats are known for their lithe bodies and quick reflexes.", kr: "고양이는 그들의 나긋나긋한 몸과 빠른 반사 신경으로 알려져 있습니다." }
    ]
  },
  {
    id: "L4-246",
    word: "maverick",
    meaning: "독불장군, 이단아",
    examples: [
      { en: "He was a maverick scientist who rejected conventional theories.", kr: "그는 전통적인 이론을 거부한 독불장군 과학자였습니다." },
      { en: "The company encourages its employees to be mavericks and think differently.", kr: "그 회사는 직원들에게 이단아가 되어 다르게 생각하도록 장려합니다." }
    ]
  },
  {
    id: "L4-247",
    word: "neophyte",
    meaning: "신참, 초심자",
    examples: [
      { en: "The program is designed to teach coding to complete neophytes.", kr: "그 프로그램은 완전한 초심자들에게 코딩을 가르치도록 설계되었습니다." },
      { en: "As a neophyte in the kitchen, she struggled with the complex recipe.", kr: "주방의 신참으로서, 그녀는 복잡한 레시피에 어려움을 겪었습니다." }
    ]
  },
  {
    id: "L4-248",
    word: "obdurate",
    meaning: "고집 센, 완고한",
    examples: [
      { en: "The mayor remained obdurate in his refusal to compromise.", kr: "시장은 타협을 거부하는 데 고집 센 태도를 유지했습니다." },
      { en: "She was obdurate in her belief that the company was at fault.", kr: "그녀는 회사가 잘못했다는 자신의 믿음에 완고했습니다." }
    ]
  },
  {
    id: "L4-249",
    word: "obfuscate",
    meaning: "흐리게 하다, 혼란스럽게 하다",
    examples: [
      { en: "The politician tried to obfuscate the issue by using vague language.", kr: "그 정치인은 모호한 언어를 사용하여 쟁점을 혼란스럽게 만들려고 노력했습니다." },
      { en: "The complex manual only served to obfuscate the simple setup process.", kr: "그 복잡한 매뉴얼은 단순한 설치 과정을 흐리게 하는 역할만 했습니다." }
    ]
  },
  {
    id: "L4-250",
    word: "paucity",
    meaning: "부족, 결핍",
    examples: [
      { en: "There is a paucity of reliable data on the subject.", kr: "그 주제에 대한 신뢰할 수 있는 자료의 부족이 있습니다." },
      { en: "A paucity of resources made the project extremely difficult.", kr: "자원의 결핍은 그 프로젝트를 극도로 어렵게 만들었습니다." }
    ]
  },
  {
    id: "L4-251",
    word: "pellucid",
    meaning: "투명한, 명쾌한",
    examples: [
      { en: "The glass-like lake water was beautifully pellucid.", kr: "유리 같은 호수 물은 아름답게 투명했습니다." },
      { en: "The professor's explanation was pellucid and easy to follow.", kr: "그 교수의 설명은 명쾌하고 따라가기 쉬웠습니다." }
    ]
  },
  {
    id: "L4-252",
    word: "penchant",
    meaning: "강한 기호, 경향",
    examples: [
      { en: "He has a penchant for collecting rare books.", kr: "그는 희귀한 책을 수집하는 강한 기호(경향)가 있습니다." },
      { en: "She has a pronounced penchant for late-night snacking.", kr: "그녀는 늦은 밤에 간식을 먹는 뚜렷한 경향이 있습니다." }
    ]
  },
  {
    id: "L4-253",
    word: "perfunctory",
    meaning: "형식적인, 마지못해 하는",
    examples: [
      { en: "The employee gave a perfunctory apology for his mistake.", kr: "그 직원은 자신의 실수에 대해 형식적인 사과를 했습니다." },
      { en: "The inspection was perfunctory, missing several key violations.", kr: "그 검사는 마지못해 하는 것이어서, 몇 가지 주요 위반 사항을 놓쳤습니다." }
    ]
  },
  {
    id: "L4-254",
    word: "peruse",
    meaning: "정독하다, 숙독하다",
    examples: [
      { en: "She spent the afternoon perusing the contract carefully.", kr: "그녀는 오후를 그 계약서를 주의 깊게 정독하며 보냈습니다." },
      { en: "Please peruse the attached documents before the meeting.", kr: "회의 전에 첨부된 문서들을 숙독해 주십시오." }
    ]
  },
  {
    id: "L4-255",
    word: "placate",
    meaning: "달래다, 진정시키다",
    examples: [
      { en: "The manager tried to placate the angry customer with a full refund.", kr: "매니저는 전액 환불로 화난 고객을 달래려고 노력했습니다." },
      { en: "It was difficult to placate the crying child.", kr: "우는 아이를 진정시키기는 어려웠습니다." }
    ]
  },
  {
    id: "L4-256",
    word: "plethora",
    meaning: "과다, 과잉",
    examples: [
      { en: "The market offers a plethora of options for smartphone users.", kr: "시장은 스마트폰 사용자들에게 과다한 선택지를 제공합니다." },
      { en: "A plethora of information can sometimes lead to confusion.", kr: "정보의 과잉은 때때로 혼란을 초래할 수 있습니다." }
    ]
  },
  {
    id: "L4-257",
    word: "precipitous",
    meaning: "성급한, 급경사의",
    examples: [
      { en: "The company made a precipitous move into a new market.", kr: "그 회사는 새 시장으로 성급한 움직임을 보였습니다." },
      { en: "Be careful when driving on the precipitous mountain roads.", kr: "급경사의 산길에서 운전할 때 조심하세요." }
    ]
  },
  {
    id: "L4-258",
    word: "profligate",
    meaning: "낭비하는, 방탕한",
    examples: [
      { en: "He was criticized for his profligate spending habits.", kr: "그는 자신의 낭비하는 지출 습관으로 비판받았습니다." },
      { en: "A profligate lifestyle quickly led him into debt.", kr: "방탕한 생활 방식은 그를 빠르게 빚더미에 빠지게 했습니다." }
    ]
  },
  {
    id: "L4-259",
    word: "quixotic",
    meaning: "돈키호테식의, 비현실적인",
    examples: [
      { en: "His quixotic quest to save the local library was admired by many.", kr: "지역 도서관을 구하려는 그의 돈키호테식 탐구는 많은 사람들에게 존경받았습니다." },
      { en: "The investors dismissed the plan as financially quixotic.", kr: "투자자들은 그 계획을 재정적으로 비현실적이라고 일축했습니다." }
    ]
  },
  {
    id: "L4-260",
    word: "recalcitrant",
    meaning: "저항하는, 다루기 힘든",
    examples: [
      { en: "The government struggled to control the recalcitrant protest groups.", kr: "정부는 저항하는 시위대들을 통제하는 데 어려움을 겪었습니다." },
      { en: "The recalcitrant child refused to go to bed.", kr: "그 다루기 힘든 아이는 잠자리에 드는 것을 거부했습니다." }
    ]
  },
  {
    id: "L4-261",
    word: "redolent",
    meaning: "냄새가 나는, 생각나게 하는",
    examples: [
      { en: "The air was redolent of fresh pine and damp earth.", kr: "공기는 신선한 소나무와 축축한 흙 냄새가 났습니다." },
      { en: "The old photographs were redolent of his childhood memories.", kr: "그 오래된 사진들은 그의 어린 시절 기억들을 생각나게 했습니다." }
    ]
  },
  {
    id: "L4-262",
    word: "repartee",
    meaning: "재치 있는 응답, 말재주",
    examples: [
      { en: "The comedy show was filled with clever repartee between the two hosts.", kr: "그 코미디 쇼는 두 진행자 사이의 재치 있는 응답으로 가득했습니다." },
      { en: "His quick repartee made him a formidable debater.", kr: "그의 빠른 말재주는 그를 강력한 토론자로 만들었습니다." }
    ]
  },
  {
    id: "L4-263",
    word: "repudiate",
    meaning: "거부하다, 부인하다",
    examples: [
      { en: "The politician was forced to repudiate his earlier statement.", kr: "그 정치인은 자신의 이전 발언을 부인하도록 강요받았습니다." },
      { en: "The company will repudiate any claims of negligence.", kr: "그 회사는 어떤 태만 주장도 거부할 것입니다." }
    ]
  },
  {
    id: "L4-264",
    word: "ruminate",
    meaning: "심사숙고하다, 반추하다",
    examples: [
      { en: "She sat quietly, ruminating on the meaning of his words.", kr: "그녀는 그의 말의 의미에 대해 심사숙고하며 조용히 앉아 있었습니다." },
      { en: "Cows ruminate on their food to aid digestion.", kr: "소들은 소화를 돕기 위해 먹이를 반추합니다." }
    ]
  },
  {
    id: "L4-265",
    word: "sardonic",
    meaning: "냉소적인, 비꼬는",
    examples: [
      { en: "The comedian delivered his jokes with a sardonic smile.", kr: "그 코미디언은 냉소적인 미소를 지으며 농담을 했습니다." },
      { en: "His sardonic humor was often misunderstood as rudeness.", kr: "그의 비꼬는 유머는 종종 무례함으로 오해받았습니다." }
    ]
  },
  {
    id: "L4-266",
    word: "scintilla",
    meaning: "아주 조금, 미량",
    examples: [
      { en: "The prosecution failed to produce even a scintilla of evidence.", kr: "검찰은 아주 조금의 증거조차 제시하지 못했습니다." },
      { en: "There was not a scintilla of doubt in her mind.", kr: "그녀의 마음속에는 미량의 의심도 없었습니다." }
    ]
  },
  {
    id: "L4-267",
    word: "scurrilous",
    meaning: "상스러운, 무례한",
    examples: [
      { en: "The newspaper published a scurrilous attack on the mayor.", kr: "그 신문은 시장에 대한 상스러운 공격을 보도했습니다." },
      { en: "We decided to ignore his scurrilous comments and continue the discussion.", kr: "우리는 그의 무례한 논평을 무시하고 토론을 계속하기로 결정했습니다." }
    ]
  },
  {
    id: "L4-268",
    word: "solipsism",
    meaning: "유아론, 자기중심주의",
    examples: [
      { en: "The philosopher argued against the extreme form of solipsism.", kr: "그 철학자는 극단적인 형태의 유아론에 반대하여 주장했습니다." },
      { en: "His complete disregard for others' feelings suggested a dangerous solipsism.", kr: "다른 사람들의 감정에 대한 그의 완전한 무시는 위험한 자기중심주의를 시사했습니다." }
    ]
  },
  {
    id: "L4-269",
    word: "stentorian",
    meaning: "목소리가 큰, 우렁찬",
    examples: [
      { en: "The coach delivered his instructions in a stentorian voice.", kr: "코치는 우렁찬 목소리로 자신의 지시를 전달했습니다." },
      { en: "He used a stentorian tone to call for immediate silence.", kr: "그는 즉각적인 침묵을 요구하기 위해 목소리가 큰 어조를 사용했습니다." }
    ]
  },
  {
    id: "L4-270",
    word: "subsume",
    meaning: "포함하다, 포괄하다",
    examples: [
      { en: "The new law will subsume several older regulations.", kr: "새 법은 몇 가지 더 오래된 규정들을 포괄할 것입니다." },
      { en: "All these smaller categories are subsumed under one large heading.", kr: "이 모든 더 작은 범주들은 하나의 큰 제목 아래에 포함됩니다." }
    ]
  },
  {
    id: "L4-271",
    word: "surreptitious",
    meaning: "은밀한, 몰래 하는",
    examples: [
      { en: "They held a surreptitious meeting in the back room of the cafe.", kr: "그들은 카페 뒷방에서 은밀한 회의를 가졌습니다." },
      { en: "He cast a surreptitious glance at his watch during the long lecture.", kr: "그는 긴 강의 중에 자신의 시계를 몰래 쳐다보았습니다." }
    ]
  },
  {
    id: "L4-272",
    word: "travesty",
    meaning: "모방, 서투른 모방",
    examples: [
      { en: "The whole trial was a travesty of justice.", kr: "전체 재판은 정의의 서투른 모방(왜곡)이었습니다." },
      { en: "His performance was a travesty of the original opera.", kr: "그의 공연은 원작 오페라의 모방(풍자)이었습니다." }
    ]
  },
  {
    id: "L4-273",
    word: "trenchant",
    meaning: "정곡을 찌르는, 날카로운",
    examples: [
      { en: "The critic delivered a trenchant analysis of the new novel.", kr: "그 비평가는 새 소설에 대한 정곡을 찌르는 분석을 내놓았습니다." },
      { en: "She offered a few trenchant observations on the current political climate.", kr: "그녀는 현재의 정치적 분위기에 대한 몇 가지 날카로운 관찰을 제공했습니다." }
    ]
  },
  {
    id: "L4-274",
    word: "turpitude",
    meaning: "타락, 비열한 행위",
    examples: [
      { en: "The board condemned his actions as involving moral turpitude.", kr: "이사회는 그의 행동이 도덕적 타락을 수반한다고 비난했습니다." },
      { en: "He was removed from office for an act of shocking turpitude.", kr: "그는 충격적인 비열한 행위로 인해 공직에서 해임되었습니다." }
    ]
  },
  {
    id: "L4-275",
    word: "unctuous",
    meaning: "번지르르한, 기름진",
    examples: [
      { en: "The salesman's unctuous manner made the customer suspicious.", kr: "그 세일즈맨의 번지르르한 태도는 고객을 의심하게 만들었습니다." },
      { en: "He delivered an unctuous speech full of false praise.", kr: "그는 거짓 칭찬으로 가득 찬 기름진 연설을 했습니다." }
    ]
  },
  {
    id: "L4-276",
    word: "untenable",
    meaning: "옹호할 수 없는, 지탱할 수 없는",
    examples: [
      { en: "The high costs made the business model financially untenable.", kr: "높은 비용은 그 사업 모델을 재정적으로 지탱할 수 없게 만들었습니다." },
      { en: "His current argument is clearly untenable under cross-examination.", kr: "그의 현재 주장은 반대 심문 하에서 명확히 옹호할 수 없습니다." }
    ]
  },
  {
    id: "L4-277",
    word: "vacillate",
    meaning: "흔들리다, 망설이다",
    examples: [
      { en: "The committee continues to vacillate between the two proposals.", kr: "위원회는 두 제안 사이에서 계속 흔들리고 있습니다." },
      { en: "He tends to vacillate when making important decisions.", kr: "그는 중요한 결정을 내릴 때 망설이는 경향이 있습니다." }
    ]
  },
  {
    id: "L4-278",
    word: "vicarious",
    meaning: "대리의, 간접적인",
    examples: [
      { en: "She gained vicarious pleasure from watching her children succeed.", kr: "그녀는 자녀가 성공하는 것을 보면서 간접적인 즐거움을 얻었습니다." },
      { en: "The book allows for a vicarious experience of life in a foreign country.", kr: "그 책은 외국에서의 삶에 대한 대리 경험을 가능하게 합니다." }
    ]
  },
  {
    id: "L4-279",
    word: "vituperate",
    meaning: "욕설하다, 비난하다",
    examples: [
      { en: "The editor did not hesitate to vituperate the sloppy journalism.", kr: "그 편집자는 엉성한 저널리즘을 비난하는 것을 주저하지 않았습니다." },
      { en: "He chose to vituperate his opponent during the heated debate.", kr: "그는 격렬한 토론 중에 자신의 상대방에게 욕설을 퍼붓기로 선택했습니다." }
    ]
  },
  {
    id: "L4-280",
    word: "wanton",
    meaning: "고의적인, 무자비한",
    examples: [
      { en: "The report documented numerous acts of wanton destruction of property.", kr: "그 보고서는 수많은 고의적인 재산 파괴 행위를 기록했습니다." },
      { en: "The general was accused of wanton disregard for civilian lives.", kr: "그 장군은 민간인의 생명에 대한 무자비한 무시로 고발당했습니다." }
    ]
  },
  {
    id: "L4-281",
    word: "acrimonious",
    meaning: "신랄한, 격렬한",
    examples: [
      { en: "The debate ended in an acrimonious exchange between the two sides.", kr: "그 토론은 양측 사이의 격렬한(신랄한) 설전으로 끝났습니다." },
      { en: "Their divorce was marked by a bitter and acrimonious legal battle.", kr: "그들의 이혼은 쓰라리고 신랄한 법정 싸움으로 특징지어졌습니다." }
    ]
  },
  {
    id: "L4-282",
    word: "belligerent",
    meaning: "호전적인, 싸우기 좋아하는",
    examples: [
      { en: "The customer became belligerent after his request was denied.", kr: "그 고객은 자신의 요청이 거부된 후 호전적으로 변했습니다." },
      { en: "The two countries maintained a belligerent relationship for decades.", kr: "두 나라는 수십 년 동안 싸우기 좋아하는 관계를 유지했습니다." }
    ]
  },
  {
    id: "L4-283",
    word: "capricious",
    meaning: "변덕스러운",
    examples: [
      { en: "The weather in the mountains is notoriously capricious.", kr: "산의 날씨는 변덕스러운 것으로 악명이 높습니다." },
      { en: "A capricious ruler can cause great instability in a nation.", kr: "변덕스러운 통치자는 한 국가에 큰 불안정성을 야기할 수 있습니다." }
    ]
  },
  {
    id: "L4-284",
    word: "circumvent",
    meaning: "피하다, 우회하다",
    examples: [
      { en: "They found a clever way to circumvent the new tax laws.", kr: "그들은 새 세법을 피할 영리한 방법을 찾았습니다." },
      { en: "We need to circumvent the red tape to get the project approved faster.", kr: "우리는 프로젝트를 더 빨리 승인받기 위해 관료적인 절차를 우회해야 합니다." }
    ]
  },
  {
    id: "L4-285",
    word: "confluence",
    meaning: "합류점, 융합",
    examples: [
      { en: "The city is located at the confluence of two major rivers.", kr: "그 도시는 두 개의 주요 강이 합류하는 지점에 위치하고 있습니다." },
      { en: "The innovation occurred at the confluence of several different technologies.", kr: "그 혁신은 몇 가지 다른 기술들의 융합 지점에서 발생했습니다." }
    ]
  },
  {
    id: "L4-286",
    word: "conflagration",
    meaning: "큰불, 대화재",
    examples: [
      { en: "The ancient library was tragically destroyed in a conflagration.", kr: "그 고대 도서관은 비극적으로 큰불로 파괴되었습니다." },
      { en: "Preventing a financial conflagration requires strict regulation.", kr: "금융 대화재(위기)를 막는 것은 엄격한 규제를 필요로 합니다." }
    ]
  },
  {
    id: "L4-287",
    word: "contravene",
    meaning: "위반하다, 반대하다",
    examples: [
      { en: "The new policy does not contravene any existing federal laws.", kr: "새 정책은 현존하는 연방 법규를 위반하지 않습니다." },
      { en: "His recent actions clearly contravene the company's code of conduct.", kr: "그의 최근 행동은 회사의 행동 강령을 명백히 위반합니다." }
    ]
  },
  {
    id: "L4-288",
    word: "credence",
    meaning: "신뢰, 신용",
    examples: [
      { en: "The report lends credence to the idea that the economy is recovering.", kr: "그 보고서는 경제가 회복되고 있다는 생각에 신뢰를 더합니다." },
      { en: "I can give no credence to such an absurd story.", kr: "저는 그러한 터무니없는 이야기에 신용을 줄 수 없습니다." }
    ]
  },
  {
    id: "L4-289",
    word: "cynicism",
    meaning: "냉소주의",
    examples: [
      { en: "The latest scandal only deepened the public's cynicism toward politics.", kr: "최근의 스캔들은 정치에 대한 대중의 냉소주의를 심화시켰을 뿐입니다." },
      { en: "His initial enthusiasm was replaced by growing cynicism.", kr: "그의 초기 열정은 커져가는 냉소주의로 대체되었습니다." }
    ]
  },
  {
    id: "L4-290",
    word: "denouement",
    meaning: "대단원, 결말",
    examples: [
      { en: "The denouement of the play was unexpected and deeply moving.", kr: "그 연극의 대단원(결말)은 예상치 못했고 깊은 감동을 주었습니다." },
      { en: "The book's long and complicated plot finally led to a satisfying denouement.", kr: "그 책의 길고 복잡한 줄거리는 마침내 만족스러운 결말에 이르렀습니다." }
    ]
  },
  {
    id: "L4-291",
    word: "dichotomy",
    meaning: "양분, 이분법",
    examples: [
      { en: "The dichotomy between rich and poor is growing wider.", kr: "부자와 가난한 사람 사이의 양분(이분법)이 점점 더 커지고 있습니다." },
      { en: "The book explores the dichotomy between the public and private self.", kr: "그 책은 공적인 자아와 사적인 자아 사이의 이분법을 탐구합니다." }
    ]
  },
  {
    id: "L4-292",
    word: "dissemble",
    meaning: "숨기다, 위장하다",
    examples: [
      { en: "She was adept at dissembling her true emotions during negotiations.", kr: "그녀는 협상 중에 자신의 진정한 감정을 숨기는 데 능숙했습니다." },
      { en: "The spy was able to dissemble his intentions perfectly.", kr: "그 스파이는 자신의 의도를 완벽하게 위장할 수 있었습니다." }
    ]
  },
  {
    id: "L4-293",
    word: "equivocate",
    meaning: "얼버무리다, 모호하게 말하다",
    examples: [
      { en: "When asked for a direct answer, the politician chose to equivocate.", kr: "직접적인 답변을 요청받았을 때, 그 정치인은 얼버무리기를 선택했습니다." },
      { en: "Do not equivocate; tell me exactly what happened.", kr: "모호하게 말하지 마세요; 무슨 일이 있었는지 정확히 말해주세요." }
    ]
  },
  {
    id: "L4-294",
    word: "expiate",
    meaning: "속죄하다, 보상하다",
    examples: [
      { en: "He tried to expiate his guilt by helping the victims of the accident.", kr: "그는 사고 피해자들을 돕는 것으로 자신의 죄책감을 속죄하려고 노력했습니다." },
      { en: "A simple apology is not enough to expiate his betrayal.", kr: "단순한 사과로는 그의 배신을 보상하기에 충분하지 않습니다." }
    ]
  },
  {
    id: "L4-295",
    word: "extrapolate",
    meaning: "추론하다, 추정하다",
    examples: [
      { en: "We can extrapolate future sales trends from the current data.", kr: "우리는 현재 데이터로부터 미래 판매 동향을 추론할 수 있습니다." },
      { en: "It is dangerous to extrapolate a general rule from a single instance.", kr: "단 하나의 사례로부터 일반적인 규칙을 추정하는 것은 위험합니다." }
    ]
  },
  {
    id: "L4-296",
    word: "facetious",
    meaning: "우스꽝스러운, 경박한",
    examples: [
      { en: "He was criticized for making facetious remarks during the serious meeting.", kr: "그는 진지한 회의 중에 우스꽝스러운 발언을 하여 비판받았습니다." },
      { en: "The author adopted a light and facetious tone throughout the book.", kr: "그 작가는 책 전체에서 가볍고 경박한 어조를 채택했습니다." }
    ]
  },
  {
    id: "L4-297",
    word: "hegemony",
    meaning: "패권, 지배권",
    examples: [
      { en: "The ancient city established its hegemony over the entire region.", kr: "그 고대 도시는 전체 지역에 대한 자신의 패권을 확립했습니다." },
      { en: "The struggle for global economic hegemony is complex.", kr: "글로벌 경제 지배권을 위한 투쟁은 복잡합니다." }
    ]
  },
  {
    id: "L4-298",
    word: "incendiary",
    meaning: "선동적인, 방화의",
    examples: [
      { en: "The speaker's incendiary comments sparked a heated debate.", kr: "그 연사의 선동적인 발언은 격렬한 논쟁을 촉발했습니다." },
      { en: "The police suspected the fire was caused by an incendiary device.", kr: "경찰은 그 화재가 방화 장치로 인해 발생했다고 의심했습니다." }
    ]
  },
  {
    id: "L4-299",
    word: "inscrutable",
    meaning: "헤아릴 수 없는, 불가사의한",
    examples: [
      { en: "The old man had an inscrutable expression that gave away nothing.", kr: "그 노인은 아무것도 드러내지 않는 헤아릴 수 없는 표정을 가지고 있었습니다." },
      { en: "The workings of the universe remain largely inscrutable to us.", kr: "우주의 작동 방식은 우리에게 대체로 불가사의한 상태로 남아 있습니다." }
    ]
  },
  {
    id: "L4-300",
    word: "intransigent",
    meaning: "비타협적인, 완고한",
    examples: [
      { en: "The union took an intransigent stance in the wage negotiations.", kr: "노조는 임금 협상에서 비타협적인 입장을 취했습니다." },
      { en: "It is difficult to negotiate with someone so intransigent.", kr: "그렇게 완고한 사람과는 협상하기 어렵습니다." }
    ]
  }
];

const wordsLevel4_Part4 = [
  {
    id: "L4-301",
    word: "lassitude",
    meaning: "권태, 무기력",
    examples: [
      { en: "A feeling of lassitude settled over him after the long, hot journey.", kr: "길고 더운 여정 후 그에게 권태감이 밀려왔습니다." },
      { en: "The report noted a general lassitude among the team members.", kr: "그 보고서는 팀원들 사이의 전반적인 무기력을 지적했습니다." }
    ]
  },
  {
    id: "L4-302",
    word: "maudlin",
    meaning: "감상적인, 눈물을 잘 흘리는",
    examples: [
      { en: "He became maudlin and started crying about his past mistakes after drinking.", kr: "그는 술을 마신 후 감상적이 되어 과거의 실수에 대해 울기 시작했습니다." },
      { en: "The movie's ending was overly maudlin and failed to move the critics.", kr: "그 영화의 결말은 지나치게 감상적이어서 비평가들의 마음을 움직이는 데 실패했습니다." }
    ]
  },
  {
    id: "L4-303",
    word: "misanthrope",
    meaning: "인간 혐오자",
    examples: [
      { en: "The old man was a renowned misanthrope who avoided all social contact.", kr: "그 노인은 모든 사회적 접촉을 피하는 유명한 인간 혐오자였습니다." },
      { en: "Despite his grumpy exterior, he was not a true misanthrope.", kr: "그의 심술궂은 겉모습에도 불구하고, 그는 진정한 인간 혐오자는 아니었습니다." }
    ]
  },
  {
    id: "L4-304",
    word: "mitigate",
    meaning: "완화시키다, 경감시키다",
    examples: [
      { en: "They implemented new policies to mitigate the risks of climate change.", kr: "그들은 기후 변화의 위험을 완화시키기 위해 새로운 정책들을 시행했습니다." },
      { en: "Taking painkillers can mitigate the severity of the headache.", kr: "진통제를 복용하는 것은 두통의 심각성을 경감시킬 수 있습니다." }
    ]
  },
  {
    id: "L4-305",
    word: "mollify",
    meaning: "달래다, 진정시키다",
    examples: [
      { en: "He tried to mollify his angry wife with flowers and apologies.", kr: "그는 꽃과 사과로 화난 아내를 달래려고 노력했습니다." },
      { en: "The concessions were not enough to mollify the striking workers.", kr: "그 양보는 파업 중인 노동자들을 진정시키기에 충분하지 않았습니다." }
    ]
  },
  {
    id: "L4-306",
    word: "nascent",
    meaning: "초기의, 발생기의",
    examples: [
      { en: "The nascent space tourism industry is expected to grow rapidly.", kr: "발생기의 우주 관광 산업은 빠르게 성장할 것으로 예상됩니다." },
      { en: "We must protect the nascent democratic institutions in the country.", kr: "우리는 그 나라의 초기의 민주 제도를 보호해야 합니다." }
    ]
  },
  {
    id: "L4-307",
    word: "nefarious",
    meaning: "사악한, 흉악한",
    examples: [
      { en: "The police uncovered a nefarious plot to smuggle ancient artifacts.", kr: "경찰은 고대 유물을 밀수하려는 흉악한 음모를 밝혀냈습니다." },
      { en: "The villain in the novel committed several nefarious acts.", kr: "그 소설 속 악당은 몇 가지 사악한 행위를 저질렀습니다." }
    ]
  },
  {
    id: "L4-308",
    word: "obstreperous",
    meaning: "시끄러운, 통제하기 힘든",
    examples: [
      { en: "The teacher struggled to control the obstreperous class of teenagers.", kr: "선생님은 통제하기 힘든 십대 학생들을 통제하는 데 어려움을 겪었습니다." },
      { en: "The protestors became obstreperous after the police arrived.", kr: "경찰이 도착한 후 시위자들은 시끄럽게 변했습니다." }
    ]
  },
  {
    id: "L4-309",
    word: "parsimonious",
    meaning: "인색한, 지나치게 절약하는",
    examples: [
      { en: "Despite his wealth, he was famously parsimonious and lived frugally.", kr: "그는 부유함에도 불구하고, 인색하기로 유명했고 검소하게 살았습니다." },
      { en: "The company's parsimonious attitude toward employee benefits caused unrest.", kr: "직원 복지에 대한 그 회사의 지나치게 절약하는 태도는 불안을 야기했습니다." }
    ]
  },
  {
    id: "L4-310",
    word: "pensive",
    meaning: "생각에 잠긴, 수심에 찬",
    examples: [
      { en: "She looked pensive as she gazed out the window at the rain.", kr: "그녀는 창밖의 비를 응시하며 생각에 잠긴 듯 보였습니다." },
      { en: "The poem's pensive tone reflected the author's sadness.", kr: "그 시의 수심에 찬 어조는 작가의 슬픔을 반영했습니다." }
    ]
  },
  {
    id: "L4-311",
    word: "perfidious",
    meaning: "배신하는, 불성실한",
    examples: [
      { en: "The perfidious advisor leaked confidential plans to the enemy.", kr: "그 배신하는 조언자는 기밀 계획을 적에게 유출했습니다." },
      { en: "They were warned against trusting the perfidious businessman.", kr: "그들은 그 불성실한 사업가를 믿지 말라는 경고를 받았습니다." }
    ]
  },
  {
    id: "L4-312",
    word: "platitude",
    meaning: "진부한 이야기, 상투적인 말",
    examples: [
      { en: "His speech was full of meaningless platitudes about hard work and success.", kr: "그의 연설은 노력과 성공에 대한 의미 없는 상투적인 말들로 가득했습니다." },
      { en: "The audience was tired of hearing the same old platitudes.", kr: "청중은 똑같은 진부한 이야기를 듣는 것에 지쳤습니다." }
    ]
  },
  {
    id: "L4-313",
    word: "prolific",
    meaning: "다작하는, 풍부한",
    examples: [
      { en: "Picasso was one of the most prolific artists of the 20th century.", kr: "피카소는 20세기 가장 다작하는 예술가 중 한 명이었습니다." },
      { en: "The soil in this valley is so rich that it is incredibly prolific.", kr: "이 계곡의 토양은 매우 비옥하여 믿을 수 없을 만큼 풍부한 수확을 냅니다." }
    ]
  },
  {
    id: "L4-314",
    word: "prudent",
    meaning: "신중한, 현명한",
    examples: [
      { en: "It was a prudent decision to save money before making a major purchase.", kr: "큰 구매를 하기 전에 돈을 저축하는 것은 신중한 결정이었습니다." },
      { en: "A prudent investor diversifies their portfolio.", kr: "현명한 투자자는 자신의 포트폴리오를 다양화합니다." }
    ]
  },
  {
    id: "L4-315",
    word: "punctilious",
    meaning: "꼼꼼한, 격식을 차리는",
    examples: [
      { en: "The chef was punctilious about the presentation of the dish.", kr: "그 주방장은 요리의 플레이팅에 대해 꼼꼼했습니다." },
      { en: "He always maintains a punctilious standard of professional etiquette.", kr: "그는 항상 전문적인 예절에 대한 격식을 차리는 기준을 유지합니다." }
    ]
  },
  {
    id: "L4-316",
    word: "quandary",
    meaning: "곤경, 난처한 상황",
    examples: [
      { en: "The government is facing a major policy quandary over the rising debt.", kr: "정부는 증가하는 부채 문제로 주요 정책적 곤경에 직면해 있습니다." },
      { en: "She was in a quandary about whether to take the job or continue her studies.", kr: "그녀는 그 직업을 가져야 할지 아니면 학업을 계속해야 할지에 대해 난처한 상황에 있었습니다." }
    ]
  },
  {
    id: "L4-317",
    word: "rancid",
    meaning: "썩은 냄새가 나는, 맛이 변한",
    examples: [
      { en: "The butter had been left out and turned rancid.", kr: "버터가 밖에 놓여져서 썩은 냄새가 나게 변했습니다." },
      { en: "You should discard any food that smells rancid.", kr: "썩은 냄새가 나는 모든 음식은 버려야 합니다." }
    ]
  },
  {
    id: "L4-318",
    word: "reprobate",
    meaning: "타락한 사람, 무뢰한",
    examples: [
      { en: "The novel's protagonist was a charming but dangerous reprobate.", kr: "그 소설의 주인공은 매력적이지만 위험한 무뢰한이었습니다." },
      { en: "His behavior at the party marked him as a complete reprobate.", kr: "파티에서의 그의 행동은 그를 완전한 타락한 사람으로 규정했습니다." }
    ]
  },
  {
    id: "L4-319",
    word: "sanguine",
    meaning: "낙관적인, 혈색 좋은",
    examples: [
      { en: "Despite the market crash, the CEO remained sanguine about the company's future.", kr: "시장 붕괴에도 불구하고, 최고 경영자는 회사의 미래에 대해 낙관적이었습니다." },
      { en: "Her face was sanguine and cheerful after the long walk.", kr: "긴 산책 후 그녀의 얼굴은 혈색이 좋고 쾌활했습니다." }
    ]
  },
  {
    id: "L4-320",
    word: "soporific",
    meaning: "잠이 오게 하는, 수면제",
    examples: [
      { en: "The professor's monotonous voice had a soporific effect on the students.", kr: "그 교수의 단조로운 목소리는 학생들에게 잠이 오게 하는 효과를 주었습니다." },
      { en: "The old remedy uses herbs with a mild soporific quality.", kr: "그 오래된 치료법은 순한 수면제 성질을 가진 허브를 사용합니다." }
    ]
  },
  {
    id: "L4-321",
    word: "stolid",
    meaning: "둔감한, 무신경한",
    examples: [
      { en: "He remained stolid and unemotional throughout the interrogation.", kr: "그는 심문 내내 둔감하고 감정을 드러내지 않았습니다." },
      { en: "The stolid indifference of the public was hard to understand.", kr: "대중의 무신경한 무관심은 이해하기 어려웠습니다." }
    ]
  },
  {
    id: "L4-322",
    word: "subversive",
    meaning: "체제 전복적인",
    examples: [
      { en: "The government censored the play for its subversive political message.", kr: "정부는 그 연극의 체제 전복적인 정치적 메시지 때문에 검열했습니다." },
      { en: "The activist was known for his subtle but highly subversive tactics.", kr: "그 활동가는 미묘하지만 매우 체제 전복적인 전술로 알려져 있었습니다." }
    ]
  },
  {
    id: "L4-323",
    word: "surfeit",
    meaning: "과잉, 과다",
    examples: [
      { en: "A surfeit of food at the party left everyone feeling bloated.", kr: "파티의 음식 과잉은 모두가 배부름을 느끼게 했습니다." },
      { en: "The media is suffering from a surfeit of irrelevant information.", kr: "언론은 관련 없는 정보의 과잉으로 고통받고 있습니다." }
    ]
  },
  {
    id: "L4-324",
    word: "talisman",
    meaning: "부적, 행운의 상징",
    examples: [
      { en: "He carried a small wooden cross as a talisman for good luck.", kr: "그는 행운을 위한 부적으로 작은 나무 십자가를 가지고 다녔습니다." },
      { en: "The ring was a family talisman, passed down through generations.", kr: "그 반지는 세대를 거쳐 전해 내려오는 가족의 행운의 상징이었습니다." }
    ]
  },
  {
    id: "L4-325",
    word: "temerity",
    meaning: "무모함, 만용",
    examples: [
      { en: "He had the temerity to contradict the CEO during the board meeting.", kr: "그는 이사회 회의 중에 최고 경영자에게 반박하는 무모함(만용)을 부렸습니다." },
      { en: "Few people had the temerity to challenge the dictator.", kr: "독재자에게 도전할 만용을 가진 사람은 거의 없었습니다." }
    ]
  },
  {
    id: "L4-326",
    word: "truculent",
    meaning: "호전적인, 싸우기 좋아하는",
    examples: [
      { en: "The truculent teenager constantly picked fights with his classmates.", kr: "그 호전적인 십대 학생은 끊임없이 급우들과 싸움을 걸었습니다." },
      { en: "The negotiations were disrupted by the union's truculent demands.", kr: "그 협상은 노조의 싸우기 좋아하는 요구 때문에 중단되었습니다." }
    ]
  },
  {
    id: "L4-327",
    word: "uberrimae fidei",
    meaning: "최고 선의 (라틴어: 계약법 용어)",
    examples: [
      { en: "Insurance contracts are considered contracts of uberrimae fidei, requiring full honesty.", kr: "보험 계약은 최고 선의의 계약으로 간주되어, 완전한 정직을 요구합니다." },
      { en: "The business transaction was conducted on the principle of uberrimae fidei.", kr: "그 사업 거래는 최고 선의의 원칙에 따라 수행되었습니다." }
    ]
  },
  {
    id: "L4-328",
    word: "vituperative",
    meaning: "통렬한, 독설적인",
    examples: [
      { en: "The critic wrote a vituperative review, destroying the film's reputation.", kr: "그 비평가는 통렬한(독설적인) 리뷰를 작성하여 그 영화의 명성을 망가뜨렸습니다." },
      { en: "The public was shocked by the politician's vituperative attack on his rival.", kr: "대중은 그 정치인이 경쟁자에게 가한 독설적인 공격에 충격을 받았습니다." }
    ]
  },
  {
    id: "L4-329",
    word: "waive",
    meaning: "포기하다, 면제하다",
    examples: [
      { en: "The university decided to waive the application fee for all low-income students.", kr: "그 대학은 모든 저소득층 학생들에게 지원 수수료를 면제하기로 결정했습니다." },
      { en: "He chose to waive his right to an attorney during the initial questioning.", kr: "그는 초기 심문 동안 변호사를 선임할 자신의 권리를 포기하기로 선택했습니다." }
    ]
  },
  {
    id: "L4-330",
    word: "wry",
    meaning: "비꼬는, 씁쓸한",
    examples: [
      { en: "He made a wry comment about his own inability to follow instructions.", kr: "그는 지시를 따르지 못하는 자신의 무능력에 대해 비꼬는 논평을 했습니다." },
      { en: "She gave a wry smile, acknowledging the irony of the situation.", kr: "그녀는 그 상황의 아이러니를 인정하며 씁쓸한 미소를 지었습니다." }
    ]
  },
  {
    id: "L4-331",
    word: "aberration",
    meaning: "일탈, 변이",
    examples: [
      { en: "The sudden drop in temperature was an aberration for this time of year.", kr: "갑작스러운 기온 하락은 이맘때의 일탈(변이)이었습니다." },
      { en: "He hoped that his recent failure was just an aberration.", kr: "그는 자신의 최근 실패가 단지 일탈(일시적 현상)이기를 바랐습니다." }
    ]
  },
  {
    id: "L4-332",
    word: "accede",
    meaning: "동의하다, (지위에) 취임하다",
    examples: [
      { en: "The committee finally acceded to the union's demands.", kr: "위원회는 마침내 노조의 요구에 동의했습니다." },
      { en: "The prince will accede to the throne upon the death of the king.", kr: "그 왕자는 왕의 서거 시 왕위에 취임할 것입니다." }
    ]
  },
  {
    id: "L4-333",
    word: "adjudicate",
    meaning: "판결하다, 심판하다",
    examples: [
      { en: "The court was called upon to adjudicate the dispute between the neighbors.", kr: "법원은 이웃 간의 분쟁을 판결하도록 요청받았습니다." },
      { en: "A neutral third party was brought in to adjudicate the claims.", kr: "중립적인 제3자가 그 주장들을 심판하기 위해 투입되었습니다." }
    ]
  },
  {
    id: "L4-334",
    word: "apprise",
    meaning: "알리다, 통지하다",
    examples: [
      { en: "We must apprise the manager of the latest developments immediately.", kr: "우리는 최신 개발 상황을 즉시 매니저에게 알려야 합니다." },
      { en: "The agent was fully apprised of the risks involved in the mission.", kr: "그 요원은 임무에 관련된 위험을 완전히 통지받았습니다." }
    ]
  },
  {
    id: "L4-335",
    word: "ascetic",
    meaning: "금욕적인, 금욕주의자",
    examples: [
      { en: "He lives an ascetic life, rejecting all forms of luxury.", kr: "그는 모든 종류의 사치를 거부하는 금욕적인 삶을 삽니다." },
      { en: "The monk was a strict ascetic who meditated for hours daily.", kr: "그 승려는 매일 몇 시간 동안 명상하는 엄격한 금욕주의자였습니다." }
    ]
  },
  {
    id: "L4-336",
    word: "assuage",
    meaning: "달래다, 완화시키다",
    examples: [
      { en: "A warm cup of tea helped to assuage her anxiety.", kr: "따뜻한 차 한 잔은 그녀의 불안을 완화시키는 데 도움이 되었습니다." },
      { en: "The company gave a public apology to assuage the customers' anger.", kr: "그 회사는 고객들의 분노를 달래기 위해 공개 사과를 했습니다." }
    ]
  },
  {
    id: "L4-337",
    word: "atrophy",
    meaning: "위축, 쇠퇴",
    examples: [
      { en: "Muscles can atrophy quickly if they are not used regularly.", kr: "근육은 규칙적으로 사용되지 않으면 빠르게 위축될 수 있습니다." },
      { en: "The town suffered an intellectual atrophy after the university closed.", kr: "그 마을은 대학이 문을 닫은 후 지적인 쇠퇴를 겪었습니다." }
    ]
  },
  {
    id: "L4-338",
    word: "augury",
    meaning: "징조, 전조",
    examples: [
      { en: "The sudden drop in oil prices was a bad augury for the global economy.", kr: "유가의 급락은 세계 경제에 대한 나쁜 징조였습니다." },
      { en: "Ancient Romans practiced augury by observing the flight of birds.", kr: "고대 로마인들은 새들의 비행을 관찰하여 전조를 점쳤습니다." }
    ]
  },
  {
    id: "L4-339",
    word: "auspicious",
    meaning: "길조의, 상서로운",
    examples: [
      { en: "The start of the new year was an auspicious time to launch the project.", kr: "새해의 시작은 그 프로젝트를 시작하기에 길조의 시간이었습니다." },
      { en: "Meeting the client on the first try felt like an auspicious beginning.", kr: "첫 시도에 고객을 만난 것은 상서로운 시작처럼 느껴졌습니다." }
    ]
  },
  {
    id: "L4-340",
    word: "chicanery",
    meaning: "속임수, 술책",
    examples: [
      { en: "The investigation exposed years of political chicanery and corruption.", kr: "그 조사는 수년간의 정치적 속임수와 부패를 폭로했습니다." },
      { en: "He was too honest to engage in any form of legal chicanery.", kr: "그는 어떤 종류의 법적 술책에도 가담하기에는 너무 정직했습니다." }
    ]
  },
  {
    id: "L4-341",
    word: "compendium",
    meaning: "요약, 개론",
    examples: [
      { en: "The book is a compendium of modern philosophical thought.", kr: "그 책은 현대 철학 사상의 요약(개론)입니다." },
      { en: "He created a compendium of all the relevant scientific papers.", kr: "그는 모든 관련 과학 논문들의 개론을 만들었습니다." }
    ]
  },
  {
    id: "L4-342",
    word: "condone",
    meaning: "묵과하다, 용납하다",
    examples: [
      { en: "The school cannot condone cheating, regardless of the student's circumstances.", kr: "학교는 학생의 상황과 관계없이 부정행위를 용납할 수 없습니다." },
      { en: "The government was criticized for condoning human rights abuses.", kr: "정부는 인권 침해를 묵과한 것에 대해 비난받았습니다." }
    ]
  },
  {
    id: "L4-343",
    word: "conundrum",
    meaning: "수수께끼, 난제",
    examples: [
      { en: "The issue of climate change remains a significant global conundrum.", kr: "기후 변화 문제는 여전히 중요한 세계적인 난제로 남아 있습니다." },
      { en: "The detective was faced with the ultimate conundrum: who committed the crime?", kr: "그 탐정은 궁극적인 수수께끼, 즉 누가 범죄를 저질렀는지에 직면했습니다." }
    ]
  },
  {
    id: "L4-344",
    word: "delineate",
    meaning: "윤곽을 그리다, 정확하게 묘사하다",
    examples: [
      { en: "The architect delineated the boundaries of the new park on the map.", kr: "그 건축가는 지도에 새 공원의 경계를 윤곽으로 그렸습니다." },
      { en: "The contract clearly delineates the duties of each party.", kr: "그 계약서는 각 당사자의 의무를 정확하게 묘사합니다." }
    ]
  },
  {
    id: "L4-345",
    word: "denigrating",
    meaning: "훼손하는, 폄하하는",
    examples: [
      { en: "He was fined for making denigrating comments about a rival company.", kr: "그는 경쟁사에 대해 훼손하는 발언을 하여 벌금을 물었습니다." },
      { en: "Avoid using denigrating language during the negotiation.", kr: "협상 중에 폄하하는 언어를 사용하는 것을 피하세요." }
    ]
  },
  {
    id: "L4-346",
    word: "disabuse",
    meaning: "오해를 풀어주다",
    examples: [
      { en: "I had to disabuse him of the notion that the job would be easy.", kr: "저는 그에게 그 일이 쉬울 것이라는 오해를 풀어주어야 했습니다." },
      { en: "We must disabuse the public of the false information they received.", kr: "우리는 대중이 받은 잘못된 정보를 오해를 풀어주어야 합니다." }
    ]
  },
  {
    id: "L4-347",
    word: "disparage",
    meaning: "얕보다, 폄하하다",
    examples: [
      { en: "It is unprofessional to disparage the work of your colleagues.", kr: "동료들의 작업을 얕보는 것은 비전문적입니다." },
      { en: "The coach tried not to disparage the efforts of the losing team.", kr: "코치는 패배한 팀의 노력을 폄하하지 않으려고 노력했습니다." }
    ]
  },
  {
    id: "L4-348",
    word: "efficacy",
    meaning: "효능, 효험",
    examples: [
      { en: "The clinical trials demonstrated the high efficacy of the new drug.", kr: "그 임상 시험은 새 약물의 높은 효능을 입증했습니다." },
      { en: "Questions were raised about the efficacy of the current training program.", kr: "현재 훈련 프로그램의 효험에 대한 의문이 제기되었습니다." }
    ]
  },
  {
    id: "L4-349",
    word: "enmity",
    meaning: "적대감, 원한",
    examples: [
      { en: "The old business rivalry was characterized by deep enmity.", kr: "그 오래된 사업 경쟁은 깊은 적대감으로 특징지어졌습니다." },
      { en: "He felt a sudden surge of enmity toward his betrayer.", kr: "그는 자신을 배신한 사람에 대해 갑작스러운 원한의 분출을 느꼈습니다." }
    ]
  },
  {
    id: "L4-350",
    word: "epicure",
    meaning: "미식가, 식도락가",
    examples: [
      { en: "The renowned chef was an epicure who appreciated subtle flavors.", kr: "그 유명한 요리사는 미묘한 맛을 감상하는 미식가였습니다." },
      { en: "She considers herself an epicure when it comes to fine wines.", kr: "그녀는 고급 와인에 관해서는 자신을 식도락가라고 생각합니다." }
    ]
  },
  {
    id: "L4-351",
    word: "exigent",
    meaning: "긴급한, 절박한",
    examples: [
      { en: "The project team faced an exigent deadline for the software launch.", kr: "그 프로젝트 팀은 소프트웨어 출시를 위한 긴급한 마감일에 직면했습니다." },
      { en: "The report emphasizes the exigent need for environmental reform.", kr: "그 보고서는 환경 개혁에 대한 절박한 필요성을 강조합니다." }
    ]
  },
  {
    id: "L4-352",
    word: "extant",
    meaning: "현존하는, 남아있는",
    examples: [
      { en: "There are only a few extant copies of the original manuscript.", kr: "원래 원고의 현존하는 사본은 몇 부밖에 없습니다." },
      { en: "The museum displays the oldest extant artifacts from the Roman era.", kr: "그 박물관은 로마 시대의 가장 오래된 남아있는 유물들을 전시합니다." }
    ]
  },
  {
    id: "L4-353",
    word: "fecund",
    meaning: "다산의, 비옥한, 창의적인",
    examples: [
      { en: "The scientist was known for his fecund imagination and numerous inventions.", kr: "그 과학자는 자신의 창의적인 상상력과 수많은 발명품으로 알려져 있었습니다." },
      { en: "The fecund delta region yielded three harvests a year.", kr: "그 비옥한 삼각주 지역은 1년에 세 번의 수확을 냈습니다." }
    ]
  },
  {
    id: "L4-354",
    word: "felicitous",
    meaning: "절묘하게 어울리는, 적절한",
    examples: [
      { en: "The speaker chose a felicitous metaphor that perfectly captured the mood.", kr: "그 연사는 분위기를 완벽하게 포착하는 절묘하게 어울리는 은유를 선택했습니다." },
      { en: "His impromptu comments were surprisingly felicitous and well-received.", kr: "그의 즉흥적인 논평은 놀라울 정도로 적절했고 호평을 받았습니다." }
    ]
  },
  {
    id: "L4-355",
    word: "gregariously",
    meaning: "사교적으로",
    examples: [
      { en: "She greeted all the new guests gregariously at the welcome dinner.", kr: "그녀는 환영 만찬에서 모든 새 손님들을 사교적으로 맞이했습니다." },
      { en: "Birds that feed gregariously often have better protection against predators.", kr: "사교적으로(떼 지어) 먹이를 먹는 새들은 포식자들로부터 더 나은 보호를 받습니다." }
    ]
  },
  {
    id: "L4-356",
    word: "hallowed",
    meaning: "신성한, 신성시되는",
    examples: [
      { en: "Westminster Abbey is a hallowed place for British history.", kr: "웨스트민스터 사원은 영국 역사에 있어 신성한 장소입니다." },
      { en: "The battlefield remains a hallowed ground, dedicated to the fallen soldiers.", kr: "그 전쟁터는 전사한 군인들에게 바쳐진 신성시되는 땅으로 남아 있습니다." }
    ]
  },
  {
    id: "L4-357",
    word: "harangue",
    meaning: "열변, 장광설; 열변을 토하다",
    examples: [
      { en: "The activist delivered a fiery harangue about social injustice.", kr: "그 활동가는 사회적 불의에 대한 격렬한 열변을 토했습니다." },
      { en: "The father began to harangue his son for his reckless behavior.", kr: "아버지는 아들의 무모한 행동에 대해 열변을 토하기 시작했습니다." }
    ]
  },
  {
    id: "L4-358",
    word: "ignominious",
    meaning: "불명예스러운, 수치스러운",
    examples: [
      { en: "The team suffered an ignominious defeat in the championship final.", kr: "그 팀은 챔피언십 결승전에서 불명예스러운 패배를 겪었습니다." },
      { en: "He made an ignominious retreat after his plan failed.", kr: "그는 자신의 계획이 실패한 후 수치스러운 후퇴를 했습니다." }
    ]
  },
  {
    id: "L4-359",
    word: "impecunious",
    meaning: "돈 없는, 가난한",
    examples: [
      { en: "He started his career as an impecunious artist living in a small studio.", kr: "그는 작은 스튜디오에 사는 돈 없는 예술가로 자신의 경력을 시작했습니다." },
      { en: "The foundation helps impecunious students pay for their tuition.", kr: "그 재단은 가난한 학생들이 등록금을 지불하도록 돕습니다." }
    ]
  },
  {
    id: "L4-360",
    word: "inculpate",
    meaning: "죄를 씌우다, 비난하다",
    examples: [
      { en: "The evidence seemed to inculpate the former employee in the theft.", kr: "그 증거는 전 직원이 절도에 죄가 있다고 씌우는 것처럼 보였습니다." },
      { en: "The lawyer argued that his client was being unfairly inculpated.", kr: "그 변호사는 자신의 의뢰인이 부당하게 죄를 뒤집어쓰고 있다고 주장했습니다." }
    ]
  },
  {
    id: "L4-361",
    word: "indefatigable",
    meaning: "지칠 줄 모르는",
    examples: [
      { en: "The volunteer workers showed an indefatigable dedication to the cause.", kr: "그 자원봉사자들은 그 목적에 대한 지칠 줄 모르는 헌신을 보여주었습니다." },
      { en: "Her indefatigable spirit inspired everyone around her.", kr: "그녀의 지칠 줄 모르는 정신은 주변의 모두에게 영감을 주었습니다." }
    ]
  },
  {
    id: "L4-362",
    word: "inscrutably",
    meaning: "헤아릴 수 없게, 불가사의하게",
    examples: [
      { en: "The judge listened inscrutably to the witness's long testimony.", kr: "판사는 증인의 긴 증언을 헤아릴 수 없게 들었습니다." },
      { en: "The ancient text was inscrutably complex, resisting easy translation.", kr: "그 고대 문서는 불가사의하게 복잡하여 쉬운 번역을 거부했습니다." }
    ]
  },
  {
    id: "L4-363",
    word: "intemperance",
    meaning: "무절제, 방종",
    examples: [
      { en: "His sudden intemperance with food and drink worried his family.", kr: "음식과 음료에 대한 그의 갑작스러운 무절제는 가족을 걱정시켰습니다." },
      { en: "The leader was criticized for the intemperance of his language during the interview.", kr: "그 지도자는 인터뷰 중 자신의 언어의 방종함으로 비판받았습니다." }
    ]
  },
  {
    id: "L4-364",
    word: "inundated",
    meaning: "물에 잠긴, 쇄도하는",
    examples: [
      { en: "The coastal area was inundated by the storm surge.", kr: "그 해안 지역은 폭풍 해일에 물에 잠겼습니다." },
      { en: "After the commercial, the call center was immediately inundated with orders.", kr: "광고 후, 콜센터는 즉시 주문으로 쇄도했습니다." }
    ]
  },
  {
    id: "L4-365",
    word: "irascible",
    meaning: "화를 잘 내는",
    examples: [
      { en: "The old editor was notorious for his irascible temperament.", kr: "그 나이든 편집자는 화를 잘 내는 성질로 악명이 높았습니다." },
      { en: "He became increasingly irascible as the deadline approached.", kr: "그는 마감일이 다가옴에 따라 점점 더 화를 잘 내게 되었습니다." }
    ]
  },
  {
    id: "L4-366",
    word: "languor",
    meaning: "나른함, 권태",
    examples: [
      { en: "The summer heat brought a wave of languor to the small village.", kr: "여름 더위는 그 작은 마을에 나른함의 물결을 가져왔습니다." },
      { en: "The afternoon was spent in a pleasant languor by the pool.", kr: "오후는 수영장 옆에서 즐거운 권태 속에서 보내졌습니다." }
    ]
  },
  {
    id: "L4-367",
    word: "latent",
    meaning: "잠재적인, 숨어있는",
    examples: [
      { en: "The scientist aimed to awaken the latent potential of the new compound.", kr: "그 과학자는 새 화합물의 잠재적인 잠재력을 깨우는 것을 목표로 했습니다." },
      { en: "His artistic talent remained latent until he reached college.", kr: "그의 예술적 재능은 대학에 도달할 때까지 숨어 있었습니다." }
    ]
  },
  {
    id: "L4-368",
    word: "malapropism",
    meaning: "말의 오용, 부적절한 말실수",
    examples: [
      { en: "His speech was interrupted by laughter at his accidental malapropism.", kr: "그의 연설은 의도치 않은 말의 오용(말실수)에 대한 웃음 때문에 중단되었습니다." },
      { en: "The teacher gently corrected the student's humorous malapropism.", kr: "선생님은 학생의 유머러스한 부적절한 말실수를 부드럽게 고쳐주었습니다." }
    ]
  },
  {
    id: "L4-369",
    word: "mendacious",
    meaning: "허위의, 거짓말하는",
    examples: [
      { en: "The journalist was fired for publishing mendacious reports.", kr: "그 언론인은 허위의 보고서를 출판한 혐의로 해고되었습니다." },
      { en: "The witness's mendacious testimony severely damaged his credibility.", kr: "그 증인의 거짓말하는 증언은 그의 신뢰도를 심각하게 손상시켰습니다." }
    ]
  },
  {
    id: "L4-370",
    word: "mercurial",
    meaning: "변덕스러운, 활달한",
    examples: [
      { en: "The fashion industry is notoriously mercurial, with trends changing quickly.", kr: "패션 산업은 트렌드가 빠르게 변하는 것으로 악명 높게 변덕스럽습니다." },
      { en: "His mercurial temperament made him difficult to work with.", kr: "그의 변덕스러운 기질은 그와 함께 일하기 어렵게 만들었습니다." }
    ]
  },
  {
    id: "L4-371",
    word: "mordant",
    meaning: "신랄한, 통렬한",
    examples: [
      { en: "The show was known for its dark and mordant satire.", kr: "그 쇼는 어둡고 신랄한 풍자로 알려져 있었습니다." },
      { en: "She made a mordant observation about the irony of the situation.", kr: "그녀는 그 상황의 아이러니에 대해 통렬한 관찰을 했습니다." }
    ]
  },
  {
    id: "L4-372",
    word: "neophyte",
    meaning: "신참, 초심자",
    examples: [
      { en: "As a neophyte in the financial sector, she made a few costly mistakes.", kr: "금융 부문의 신참으로서, 그녀는 몇 가지 비용이 많이 드는 실수를 저질렀습니다." },
      { en: "The organization offers special training for new neophytes.", kr: "그 조직은 새로운 초심자들을 위한 특별 훈련을 제공합니다." }
    ]
  },
  {
    id: "L4-373",
    word: "obloquy",
    meaning: "비난, 불명예",
    examples: [
      { en: "The former CEO retired in disgrace, facing public obloquy.", kr: "그 전직 최고 경영자는 대중의 비난에 직면하며 불명예스럽게 은퇴했습니다." },
      { en: "He bore the obloquy of the scandal for the rest of his career.", kr: "그는 경력의 남은 기간 동안 그 스캔들의 불명예를 감당했습니다." }
    ]
  },
  {
    id: "L4-374",
    word: "palliative",
    meaning: "완화하는, 일시적인 처방",
    examples: [
      { en: "The new measures are merely palliative and do not address the root cause.", kr: "새 조치들은 단지 완화하는(일시적인) 것일 뿐 근본적인 원인을 다루지 않습니다." },
      { en: "Palliative care focuses on relieving symptoms, not curing the disease.", kr: "완화 치료는 질병을 치료하는 것이 아니라 증상을 완화하는 데 중점을 둡니다." }
    ]
  },
  {
    id: "L4-375",
    word: "panegyric",
    meaning: "찬사, 칭송",
    examples: [
      { en: "The general's former colleague delivered a moving panegyric at his funeral.", kr: "그 장군의 전 동료는 그의 장례식에서 감동적인 찬사를 보냈습니다." },
      { en: "The book is less a biography and more a panegyric of the late leader.", kr: "그 책은 전기라기보다는 고(故) 지도자에 대한 칭송에 가깝습니다." }
    ]
  },
  {
    id: "L4-376",
    word: "parochial",
    meaning: "편협한, 지방의",
    examples: [
      { en: "The small town was characterized by a parochial outlook and resistance to change.", kr: "그 작은 마을은 편협한 시각과 변화에 대한 저항으로 특징지어졌습니다." },
      { en: "We need to move beyond parochial concerns to address global issues.", kr: "우리는 세계적인 문제들을 다루기 위해 편협한 관심사를 넘어서야 합니다." }
    ]
  },
  {
    id: "L4-377",
    word: "penurious",
    meaning: "몹시 가난한, 인색한",
    examples: [
      { en: "The great writer lived a penurious life before achieving success.", kr: "그 위대한 작가는 성공을 거두기 전에 몹시 가난한 삶을 살았습니다." },
      { en: "Despite his large inheritance, he was notoriously penurious with his money.", kr: "그의 많은 유산에도 불구하고, 그는 자신의 돈에 대해 악명이 높게 인색했습니다." }
    ]
  },
  {
    id: "L4-378",
    word: "peremptory",
    meaning: "단호한, 독단적인",
    examples: [
      { en: "The boss delivered a peremptory dismissal without any discussion.", kr: "상사는 아무런 논의 없이 단호한 해고를 통보했습니다." },
      { en: "His peremptory tone in the meeting offended several board members.", kr: "회의에서 그의 독단적인 어조는 여러 이사회 구성원들의 감정을 상하게 했습니다." }
    ]
  },
  {
    id: "L4-379",
    word: "perspicacious",
    meaning: "통찰력 있는, 현명한",
    examples: [
      { en: "The perspicacious analyst correctly predicted the market collapse.", kr: "그 통찰력 있는 분석가는 시장 붕괴를 정확하게 예측했습니다." },
      { en: "A truly perspicacious leader anticipates future challenges.", kr: "진정으로 현명한 지도자는 미래의 도전을 예측합니다." }
    ]
  },
  {
    id: "L4-380",
    word: "polemical",
    meaning: "논쟁을 좋아하는, 논쟁적인",
    examples: [
      { en: "The article was highly polemical, intended to provoke strong disagreement.", kr: "그 기사는 강한 불일치를 유발하기 위한 의도로 매우 논쟁적이었습니다." },
      { en: "He is known for his sharp wit and polemical writing style.", kr: "그는 자신의 날카로운 재치와 논쟁적인 글쓰기 스타일로 알려져 있습니다." }
    ]
  },
  {
    id: "L4-381",
    word: "proscribe",
    meaning: "금지하다, 추방하다",
    examples: [
      { en: "The use of certain chemicals in food production is proscribed by law.", kr: "식품 생산에서 특정 화학 물질의 사용은 법으로 금지됩니다." },
      { en: "The ancient city would proscribe citizens found guilty of treason.", kr: "그 고대 도시는 반역죄가 있는 것으로 밝혀진 시민들을 추방하곤 했습니다." }
    ]
  },
  {
    id: "L4-382",
    word: "prosaic",
    meaning: "평범한, 지루한",
    examples: [
      { en: "The poet tried to find beauty in the most prosaic details of daily life.", kr: "그 시인은 일상생활의 가장 평범한 세부 사항에서 아름다움을 찾으려고 노력했습니다." },
      { en: "The novel was criticized for its prosaic plot and uninspired characters.", kr: "그 소설은 지루한 줄거리와 영감을 주지 않는 등장인물들로 비판받았습니다." }
    ]
  },
  {
    id: "L4-383",
    word: "pusillanimous",
    meaning: "소심한, 겁이 많은",
    examples: [
      { en: "The leader was replaced for being too pusillanimous in times of crisis.", kr: "그 지도자는 위기 상황에서 너무 소심하다는 이유로 교체되었습니다." },
      { en: "He made a pusillanimous decision to retreat instead of fighting.", kr: "그는 싸우는 대신 후퇴하는 겁이 많은 결정을 내렸습니다." }
    ]
  },
  {
    id: "L4-384",
    word: "recondite",
    meaning: "난해한, 심오한",
    examples: [
      { en: "The professor's lecture focused on recondite matters of metaphysics.", kr: "그 교수의 강의는 형이상학의 난해한 문제들에 초점을 맞췄습니다." },
      { en: "His poetry is so recondite that it requires a special academic background.", kr: "그의 시는 너무 심오해서 특별한 학술적 배경을 필요로 합니다." }
    ]
  },
  {
    id: "L4-385",
    word: "recumbent",
    meaning: "기대 누운, 드러누운",
    examples: [
      { en: "She spent the morning in a recumbent position, reading a book.", kr: "그녀는 아침을 기대 누운 자세로 책을 읽으며 보냈습니다." },
      { en: "The statue depicts a recumbent figure resting by the fountain.", kr: "그 조각상은 분수 옆에 드러누워 쉬고 있는 형상을 묘사합니다." }
    ]
  },
  {
    id: "L4-386",
    word: "refulgent",
    meaning: "찬란하게 빛나는, 눈부신",
    examples: [
      { en: "The star was refulgent in the clear night sky.", kr: "그 별은 맑은 밤하늘에서 찬란하게 빛났습니다." },
      { en: "The bride looked refulgent in her silver wedding gown.", kr: "신부는 은색 웨딩 가운을 입고 눈부시게 보였습니다." }
    ]
  },
  {
    id: "L4-387",
    word: "relegate",
    meaning: "좌천시키다, 격하시키다",
    examples: [
      { en: "The manager decided to relegate the poorly performing employee to a minor role.", kr: "매니저는 실적이 좋지 않은 직원을 사소한 역할로 좌천시키기로 결정했습니다." },
      { en: "He felt his research was unfairly relegated to a footnote in the report.", kr: "그는 자신의 연구가 보고서의 각주로 부당하게 격하되었다고 느꼈습니다." }
    ]
  },
  {
    id: "L4-388",
    word: "sally",
    meaning: "돌격, 재치 있는 말",
    examples: [
      { en: "The besieged soldiers made a desperate sally out of the castle gates.", kr: "포위된 병사들은 성문 밖으로 필사적인 돌격을 감행했습니다." },
      { en: "His lecture was punctuated by witty sallies that kept the audience engaged.", kr: "그의 강의는 청중을 계속 집중하게 만드는 재치 있는 말들로 간간이 이어졌습니다." }
    ]
  },
  {
    id: "L4-389",
    word: "saturnine",
    meaning: "음침한, 침울한",
    examples: [
      { en: "The villain's saturnine expression promised danger and malice.", kr: "그 악당의 음침한 표정은 위험과 악의를 약속했습니다." },
      { en: "He had a saturnine disposition that rarely showed happiness.", kr: "그는 행복을 거의 드러내지 않는 침울한 기질을 가지고 있었습니다." }
    ]
  },
  {
    id: "L4-390",
    word: "sedulous",
    meaning: "근면한, 꼼꼼한",
    examples: [
      { en: "The sedulous student spent every night studying in the library.", kr: "그 근면한 학생은 매일 밤 도서관에서 공부했습니다." },
      { en: "She completed the translation with sedulous attention to detail.", kr: "그녀는 세부 사항에 대한 꼼꼼한 주의를 기울여 번역을 완료했습니다." }
    ]
  },
  {
    id: "L4-391",
    word: "splenetic",
    meaning: "성미가 까다로운, 비위에 거슬리는",
    examples: [
      { en: "The old man was known for his splenetic rants about the youth.", kr: "그 노인은 젊은이들에 대한 자신의 성미가 까다로운 폭언으로 알려져 있었습니다." },
      { en: "His splenetic reaction to the minor change was surprising.", kr: "사소한 변화에 대한 그의 비위에 거슬리는 반응은 놀라웠습니다." }
    ]
  },
  {
    id: "L4-392",
    word: "subterfuge",
    meaning: "속임수, 구실",
    examples: [
      { en: "The spy used a series of clever subterfuges to enter the building unnoticed.", kr: "그 스파이는 눈에 띄지 않게 건물에 들어가기 위해 일련의 영리한 속임수를 사용했습니다." },
      { en: "The team resorted to petty subterfuge to win the game.", kr: "그 팀은 경기에서 이기기 위해 사소한 구실을 사용했습니다." }
    ]
  },
  {
    id: "L4-393",
    word: "surreptitiously",
    meaning: "은밀하게, 몰래",
    examples: [
      { en: "He glanced surreptitiously at the clock, hoping the meeting would end soon.", kr: "그는 회의가 곧 끝나기를 바라며 시계를 은밀하게 쳐다보았습니다." },
      { en: "The children were surreptitiously passing notes under the table.", kr: "아이들은 탁자 밑으로 쪽지를 몰래 전달하고 있었습니다." }
    ]
  },
  {
    id: "L4-394",
    word: "tenebrous",
    meaning: "어두운, 음침한",
    examples: [
      { en: "The abandoned house had a tenebrous and eerie atmosphere.", kr: "그 버려진 집은 어둡고 섬뜩한 분위기를 가지고 있었습니다." },
      { en: "The painter used deep, tenebrous shadows to create drama.", kr: "그 화가는 드라마를 만들기 위해 깊고 음침한 그림자를 사용했습니다." }
    ]
  },
  {
    id: "L4-395",
    word: "titular",
    meaning: "이름뿐인, 명목상의",
    examples: [
      { en: "The Queen is the titular head of the Commonwealth, but holds little real power.", kr: "여왕은 영연방의 명목상의 수장이지만, 실제 권한은 거의 없습니다." },
      { en: "The titular character of the book appears only briefly.", kr: "그 책의 이름뿐인 주인공은 아주 잠깐만 등장합니다." }
    ]
  },
  {
    id: "L4-396",
    word: "ubiquitously",
    meaning: "어디에나 존재하게",
    examples: [
      { en: "Digital screens are ubiquitously present in modern urban environments.", kr: "디지털 화면은 현대 도시 환경에서 어디에나 존재하게 있습니다." },
      { en: "The brand has successfully marketed its product ubiquitously across all continents.", kr: "그 브랜드는 모든 대륙에 걸쳐 자신의 제품을 어디에나 존재하게 성공적으로 마케팅했습니다." }
    ]
  },
  {
    id: "L4-397",
    word: "unflappable",
    meaning: "침착한, 동요하지 않는",
    examples: [
      { en: "The pilot remained unflappable despite the severe turbulence.", kr: "그 조종사는 심한 난기류에도 불구하고 침착함을 유지했습니다." },
      { en: "She has an unflappable nature that makes her ideal for crisis management.", kr: "그녀는 위기 관리에 이상적인 동요하지 않는 천성을 가지고 있습니다." }
    ]
  },
  {
    id: "L4-398",
    word: "vapid",
    meaning: "지루한, 김빠진",
    examples: [
      { en: "The conversation was utterly vapid, focusing only on trivial gossip.", kr: "그 대화는 오직 사소한 가십에만 초점을 맞추어 완전히 지루했습니다." },
      { en: "The movie was a vapid rehash of old action cliches.", kr: "그 영화는 오래된 액션 클리셰를 김빠지게 재탕한 것이었습니다." }
    ]
  },
  {
    id: "L4-399",
    word: "vituperated",
    meaning: "욕설을 퍼붓는, 맹렬히 비난하는",
    examples: [
      { en: "He was so angered by the insult that he vituperated the offender loudly.", kr: "그는 그 모욕에 너무 화가 나서 가해자에게 맹렬히 비난하는 욕설을 크게 퍼부었습니다." },
      { en: "The editor's vituperated column on the new novel caused a sensation.", kr: "그 편집자의 새 소설에 대한 맹렬히 비난하는 칼럼은 큰 파장을 일으켰습니다." }
    ]
  },
  {
    id: "L4-400",
    word: "voluble",
    meaning: "유창한, 말이 많은",
    examples: [
      { en: "She is a voluble public speaker, known for her easy flow of words.", kr: "그녀는 말이 많은 대중 연설가이며, 쉬운 말의 흐름으로 알려져 있습니다." },
      { en: "The voluble tour guide never stopped talking throughout the museum visit.", kr: "그 유창한(말이 많은) 여행 가이드는 박물관 방문 내내 말을 멈추지 않았습니다." }
    ]
  }
];

const wordsLevel5_Part1 = [
  {
    id: "L5-001",
    word: "abrogate",
    meaning: "폐지하다, 철폐하다",
    examples: [
      { en: "The government voted to abrogate the outdated treaty.", kr: "정부는 시대에 뒤떨어진 조약을 폐지하기 위해 투표했습니다." },
      { en: "The new law will abrogate the old property restrictions.", kr: "새 법은 이전의 재산 규제들을 철폐할 것입니다." }
    ]
  },
  {
    id: "L5-002",
    word: "acumen",
    meaning: "통찰력, 안목",
    examples: [
      { en: "Her business acumen allowed her to spot the emerging market trend.", kr: "그녀의 사업적 통찰력은 그녀가 떠오르는 시장 추세를 발견하도록 했습니다." },
      { en: "The investor showed great financial acumen.", kr: "그 투자자는 뛰어난 재정적 안목을 보여주었습니다." }
    ]
  },
  {
    id: "L5-003",
    word: "admonish",
    meaning: "훈계하다, 꾸짖다",
    examples: [
      { en: "The teacher had to admonish the student for repeated lateness.", kr: "선생님은 반복된 지각 때문에 학생을 훈계해야 했습니다." },
      { en: "I admonished him to be more cautious next time.", kr: "나는 그에게 다음번에는 더 신중하라고 꾸짖었습니다." }
    ]
  },
  {
    id: "L5-004",
    word: "alacrity",
    meaning: "민첩함, 활발함",
    examples: [
      { en: "She accepted the new assignment with alacrity and enthusiasm.", kr: "그녀는 민첩함과 열정으로 새로운 임무를 수락했습니다." },
      { en: "The staff responded to the customer's request with alacrity.", kr: "직원들은 고객의 요청에 활발하게 응답했습니다." }
    ]
  },
  {
    id: "L5-005",
    word: "ameliorate",
    meaning: "개선하다, 완화시키다",
    examples: [
      { en: "New policies were introduced to ameliorate the living standards of the poor.", kr: "가난한 사람들의 생활 수준을 개선하기 위해 새로운 정책들이 도입되었습니다." },
      { en: "Relief efforts helped ameliorate the suffering caused by the flood.", kr: "구호 노력은 홍수로 인한 고통을 완화시키는 데 도움이 되었습니다." }
    ]
  },
  {
    id: "L5-006",
    word: "anachronism",
    meaning: "시대착오적인 것",
    examples: [
      { en: "The horse-drawn carriage in the modern city was an anachronism.", kr: "현대 도시의 마차는 시대착오적인 것이었습니다." },
      { en: "His reliance on outdated technology is a curious anachronism.", kr: "그의 구식 기술 의존은 흥미로운 시대착오적인 것입니다." }
    ]
  },
  {
    id: "L5-007",
    word: "anomaly",
    meaning: "변칙, 이례",
    examples: [
      { en: "The low vote count was an anomaly in an otherwise high-turnout election.", kr: "낮은 득표수는 그렇지 않은 높은 투표율 선거에서 변칙이었습니다." },
      { en: "Scientists are trying to explain the observed anomaly in the data.", kr: "과학자들은 관찰된 자료의 이례 현상을 설명하려고 노력하고 있습니다." }
    ]
  },
  {
    id: "L5-008",
    word: "apathy",
    meaning: "무관심, 무감각",
    examples: [
      { en: "Voter apathy resulted in a very low election turnout.", kr: "유권자들의 무관심은 매우 낮은 선거 투표율을 초래했습니다." },
      { en: "She met his problems with complete apathy.", kr: "그녀는 그의 문제들을 완전한 무관심으로 대했습니다." }
    ]
  },
  {
    id: "L5-009",
    word: "apotheosis",
    meaning: "절정, 신격화",
    examples: [
      { en: "His final film is considered the apotheosis of his career.", kr: "그의 마지막 영화는 그의 경력의 절정으로 간주됩니다." },
      { en: "The painting represents the apotheosis of the ancient hero.", kr: "그 그림은 고대 영웅의 신격화를 나타냅니다." }
    ]
  },
  {
    id: "L5-010",
    word: "apprise",
    meaning: "알리다, 통지하다",
    examples: [
      { en: "We must apprise the CEO of the failure immediately.", kr: "우리는 실패에 대해 최고 경영자에게 즉시 알려야 합니다." },
      { en: "The general was apprised of the enemy's movements.", kr: "그 장군은 적의 움직임에 대해 통지받았습니다." }
    ]
  },
  {
    id: "L5-011",
    word: "arcane",
    meaning: "비밀의, 불가사의한",
    examples: [
      { en: "The ancient text was full of arcane symbols.", kr: "그 고대 문헌은 불가사의한 상징들로 가득했습니다." },
      { en: "The procedures of the hidden society are arcane.", kr: "그 숨겨진 사회의 절차들은 비밀스럽습니다." }
    ]
  },
  {
    id: "L5-012",
    word: "arduous",
    meaning: "힘든, 고된",
    examples: [
      { en: "Climbing Mount Everest is an arduous task.", kr: "에베레스트 산 등반은 고된 임무입니다." },
      { en: "The team completed the arduous project under a tight deadline.", kr: "팀은 촉박한 마감 기한 내에 힘든 프로젝트를 완료했습니다." }
    ]
  },
  {
    id: "L5-013",
    word: "assuage",
    meaning: "달래다, 완화시키다",
    examples: [
      { en: "Nothing could assuage the parent's grief after the loss of their child.", kr: "자녀를 잃은 후 부모의 슬픔을 아무것도 달래줄 수 없었습니다." },
      { en: "The government issued a statement to assuage public fears.", kr: "정부는 대중의 두려움을 완화시키기 위해 성명을 발표했습니다." }
    ]
  },
  {
    id: "L5-014",
    word: "atrophy",
    meaning: "위축, 퇴화",
    examples: [
      { en: "Prolonged inactivity can lead to muscle atrophy.", kr: "장기간의 활동 부족은 근육 위축으로 이어질 수 있습니다." },
      { en: "The political party suffered from an atrophy of leadership.", kr: "그 정당은 지도력의 퇴화로 고통받았습니다." }
    ]
  },
  {
    id: "L5-015",
    word: "augury",
    meaning: "징조, 전조",
    examples: [
      { en: "The clear skies were taken as a good augury for the voyage.", kr: "맑은 하늘은 항해에 좋은 징조로 받아들여졌습니다." },
      { en: "The drop in oil prices was an augury of a coming recession.", kr: "유가의 하락은 다가오는 경기 침체의 전조였습니다." }
    ]
  },
  {
    id: "L5-016",
    word: "auspicious",
    meaning: "길조의, 상서로운",
    examples: [
      { en: "They chose an auspicious date to launch the new business.", kr: "그들은 새 사업을 시작하기 위해 길조의 날짜를 선택했습니다." },
      { en: "The early success was an auspicious sign for the rest of the year.", kr: "초기 성공은 한 해의 나머지 기간에 상서로운 징조였습니다." }
    ]
  },
  {
    id: "L5-017",
    word: "avarice",
    meaning: "탐욕, 강한 욕심",
    examples: [
      { en: "The CEO's downfall was caused by sheer greed and avarice.", kr: "최고 경영자의 몰락은 순전한 탐욕과 강한 욕심 때문에 발생했습니다." },
      { en: "Avarice often corrupts those who gain power quickly.", kr: "탐욕은 권력을 빨리 얻는 사람들을 종종 타락시킵니다." }
    ]
  },
  {
    id: "L5-018",
    word: "bifurcation",
    meaning: "양분, 분기",
    examples: [
      { en: "The road reached a clear bifurcation, forcing us to choose left or right.", kr: "길은 명확한 양분점에 도달하여 우리가 왼쪽이나 오른쪽을 선택하도록 강요했습니다." },
      { en: "The political party faced a bifurcation into two opposing groups.", kr: "그 정당은 두 개의 반대 그룹으로의 분기에 직면했습니다." }
    ]
  },
  {
    id: "L5-019",
    word: "bombast",
    meaning: "허풍, 과장된 말",
    examples: [
      { en: "His speeches were full of empty bombast and lacked clear policy.", kr: "그의 연설은 공허한 허풍으로 가득했고 명확한 정책이 부족했습니다." },
      { en: "We ignored the salesman's bombast about the product's amazing features.", kr: "우리는 그 제품의 놀라운 기능에 대한 영업사원의 과장된 말을 무시했습니다." }
    ]
  },
  {
    id: "L5-020",
    word: "buttress",
    meaning: "지지하다, 보강하다",
    examples: [
      { en: "The new study buttresses the original theory with fresh data.", kr: "새 연구는 신선한 자료로 원래 이론을 지지합니다." },
      { en: "Stone buttresses were added to the old wall for structural support.", kr: "구조적 지지를 위해 오래된 벽에 돌 지지대가 추가되었습니다." }
    ]
  },
  {
    id: "L5-021",
    word: "cacophony",
    meaning: "불협화음, 시끄러운 소리",
    examples: [
      { en: "The city street was a cacophony of sirens and construction noise.", kr: "도시 거리는 사이렌 소리와 공사 소음의 불협화음이었습니다." },
      { en: "The experimental orchestra produced a shocking cacophony.", kr: "그 실험적인 오케스트라는 충격적인 불협화음을 만들어냈습니다." }
    ]
  },
  {
    id: "L5-022",
    word: "calumny",
    meaning: "비방, 명예 훼손",
    examples: [
      { en: "He was a victim of political calumny spread by his rivals.", kr: "그는 라이벌들이 퍼뜨린 정치적 비방의 희생자였습니다." },
      { en: "The newspaper was sued for publishing baseless calumny.", kr: "그 신문은 근거 없는 명예 훼손을 보도한 혐의로 고소당했습니다." }
    ]
  },
  {
    id: "L5-023",
    word: "canard",
    meaning: "헛소문, 유언비어",
    examples: [
      { en: "The story about the merger was later exposed as a complete canard.", kr: "합병에 대한 이야기는 나중에 완전한 헛소문으로 폭로되었습니다." },
      { en: "Don't believe that old canard about snakes drinking milk.", kr: "뱀이 우유를 마신다는 그 오래된 유언비어를 믿지 마세요." }
    ]
  },
  {
    id: "L5-024",
    word: "capitulate",
    meaning: "굴복하다, 항복하다",
    examples: [
      { en: "The general refused to capitulate even when facing overwhelming odds.", kr: "그 장군은 압도적인 역경에 직면했을 때도 굴복하기를 거부했습니다." },
      { en: "We must not capitulate to unreasonable demands.", kr: "우리는 불합리한 요구에 항복해서는 안 됩니다." }
    ]
  },
  {
    id: "L5-025",
    word: "castigate",
    meaning: "혹평하다, 징계하다",
    examples: [
      { en: "The critic severely castigated the director's latest film.", kr: "그 비평가는 감독의 최신 영화를 심하게 혹평했습니다." },
      { en: "The manager publicly castigated the employee for his carelessness.", kr: "매니저는 부주의함 때문에 직원을 공개적으로 징계했습니다." }
    ]
  },
  {
    id: "L5-026",
    word: "censure",
    meaning: "비난하다, 견책",
    examples: [
      { en: "The board voted to censure the director for his inappropriate conduct.", kr: "이사회는 부적절한 행위 때문에 이사를 비난하기 위해 투표했습니다." },
      { en: "He faced public censure after the scandal.", kr: "그는 스캔들 후 대중의 견책에 직면했습니다." }
    ]
  },
  {
    id: "L5-027",
    word: "chasten",
    meaning: "훈계하다, 징계하다",
    examples: [
      { en: "The failure of the project chastened the team's overconfidence.", kr: "프로젝트의 실패는 팀의 지나친 자신감을 훈계했습니다." },
      { en: "He was chastened by the harsh experience.", kr: "그는 가혹한 경험으로 징계받았습니다(교훈을 얻었습니다)." }
    ]
  },
  {
    id: "L5-028",
    word: "chicanery",
    meaning: "속임수, 술책",
    examples: [
      { en: "The politician was known for engaging in financial chicanery.", kr: "그 정치인은 재정적인 속임수에 가담하는 것으로 알려져 있었습니다." },
      { en: "Legal proceedings should be free from chicanery.", kr: "법적 절차는 술책으로부터 자유로워야 합니다." }
    ]
  },
  {
    id: "L5-029",
    word: "circumvent",
    meaning: "회피하다, 우회하다",
    examples: [
      { en: "They tried to circumvent the regulations by finding a loophole.", kr: "그들은 허점을 찾아 규제를 회피하려고 노력했습니다." },
      { en: "We had to circumvent the traffic jam by taking a side road.", kr: "우리는 지름길을 택하여 교통 체증을 우회해야 했습니다." }
    ]
  },
  {
    id: "L5-030",
    word: "cloying",
    meaning: "싫증날 정도인, 역겨울 정도의",
    examples: [
      { en: "The heavy, sweet perfume was cloying.", kr: "그 진하고 달콤한 향수는 역겨울 정도였습니다." },
      { en: "The movie's ending was criticized for being too cloying and sentimental.", kr: "그 영화의 결말은 지나치게 감상적이어서 역겨울 정도로 비판받았습니다." }
    ]
  },
  {
    id: "L5-031",
    word: "coercion",
    meaning: "강압, 강제",
    examples: [
      { en: "He claimed the confession was made under police coercion.", kr: "그는 그 자백이 경찰의 강압 하에 이루어졌다고 주장했습니다." },
      { en: "The company was accused of using coercion to make employees sign the contract.", kr: "그 회사는 직원들에게 계약서에 서명하도록 강제하기 위해 강압을 사용했다는 비난을 받았습니다." }
    ]
  },
  {
    id: "L5-032",
    word: "confluence",
    meaning: "합류점, 융합",
    examples: [
      { en: "The city is located at the confluence of two major rivers.", kr: "그 도시는 두 개의 주요 강이 합류하는 지점에 위치하고 있습니다." },
      { en: "The project succeeded due to the confluence of talent and resources.", kr: "그 프로젝트는 인재와 자원의 융합 덕분에 성공했습니다." }
    ]
  },
  {
    id: "L5-033",
    word: "concomitant",
    meaning: "수반되는, 동시에 발생하는",
    examples: [
      { en: "Loss of sleep is a common concomitant of stress.", kr: "수면 부족은 스트레스에 수반되는 흔한 현상입니다." },
      { en: "The rise in crime was concomitant with the increase in unemployment.", kr: "범죄 증가는 실업률 증가와 동시에 발생했습니다." }
    ]
  },
  {
    id: "L5-034",
    word: "conflagration",
    meaning: "대화재",
    examples: [
      { en: "The city was destroyed in the great conflagration of 1666.", kr: "그 도시는 1666년의 대화재로 파괴되었습니다." },
      { en: "The diplomatic incident threatened to spark a military conflagration.", kr: "그 외교적 사건은 군사적 대화재(대분쟁)를 촉발할 위험이 있었습니다." }
    ]
  },
  {
    id: "L5-035",
    word: "contrite",
    meaning: "죄를 뉘우치는, 참회하는",
    examples: [
      { en: "The thief offered a contrite apology to the victim.", kr: "그 도둑은 피해자에게 죄를 뉘우치는 사과를 했습니다." },
      { en: "He was deeply contrite after realizing the gravity of his mistake.", kr: "그는 자신의 실수의 중대함을 깨달은 후 깊이 참회했습니다." }
    ]
  },
  {
    id: "L5-036",
    word: "contumacious",
    meaning: "권위에 반항하는, 고집 센",
    examples: [
      { en: "The contumacious student refused to follow the instructions.", kr: "그 권위에 반항하는 학생은 지시를 따르기를 거부했습니다." },
      { en: "The contumacious rebel was quickly arrested by the authorities.", kr: "그 고집 센 반군은 당국에 의해 빠르게 체포되었습니다." }
    ]
  },
  {
    id: "L5-037",
    word: "craven",
    meaning: "겁 많은, 비겁한",
    examples: [
      { en: "The craven soldier abandoned his post during the attack.", kr: "그 겁 많은 병사는 공격 중에 자신의 진지를 버렸습니다." },
      { en: "It was a craven decision to sacrifice his friend for personal safety.", kr: "자신의 안전을 위해 친구를 희생한 것은 비겁한 결정이었습니다." }
    ]
  },
  {
    id: "L5-038",
    word: "credence",
    meaning: "신뢰, 신용",
    examples: [
      { en: "The report gives little credence to the claims of the local politician.", kr: "그 보고서는 지역 정치인의 주장에 거의 신뢰를 주지 않습니다." },
      { en: "I can give no credence to such an unbelievable story.", kr: "저는 그런 믿기 힘든 이야기에 신용을 줄 수 없습니다." }
    ]
  },
  {
    id: "L5-039",
    word: "cynicism",
    meaning: "냉소주의",
    examples: [
      { en: "His initial enthusiasm was replaced by growing cynicism about the system.", kr: "그의 초기 열정은 시스템에 대한 커져가는 냉소주의로 대체되었습니다." },
      { en: "The scandal deepened public cynicism toward the government.", kr: "그 스캔들은 정부에 대한 대중의 냉소주의를 심화시켰습니다." }
    ]
  },
  {
    id: "L5-040",
    word: "daunt",
    meaning: "위압하다, 기를 죽이다",
    examples: [
      { en: "The sheer volume of work did not daunt the dedicated team.", kr: "순전한 업무량도 헌신적인 팀의 기를 죽이지 못했습니다." },
      { en: "He was daunted by the difficult questions asked by the press.", kr: "그는 언론이 던진 어려운 질문들에 위압당했습니다." }
    ]
  },
  {
    id: "L5-041",
    word: "dearth",
    meaning: "부족, 결핍",
    examples: [
      { en: "There is a severe dearth of affordable housing in the city.", kr: "그 도시에는 저렴한 주택의 심각한 부족이 있습니다." },
      { en: "The critics noted a dearth of originality in the new movie.", kr: "비평가들은 새 영화의 독창성 결핍을 지적했습니다." }
    ]
  },
  {
    id: "L5-042",
    word: "debase",
    meaning: "가치를 떨어뜨리다, 비하하다",
    examples: [
      { en: "The scandal debased the reputation of the entire organization.", kr: "그 스캔들은 조직 전체의 명성을 떨어뜨렸습니다." },
      { en: "Do not let others debase your self-worth.", kr: "다른 사람들이 당신의 자존감을 떨어뜨리도록 두지 마세요." }
    ]
  },
  {
    id: "L5-043",
    word: "decimate",
    meaning: "대량으로 죽이다, 격감시키다",
    examples: [
      { en: "The virus threatened to decimate the local bird population.", kr: "그 바이러스는 지역 조류 개체수를 대량으로 죽일 위험이 있었습니다." },
      { en: "Budget cuts will decimate funding for arts programs.", kr: "예산 삭감은 예술 프로그램에 대한 자금을 격감시킬 것입니다." }
    ]
  },
  {
    id: "L5-044",
    word: "deference",
    meaning: "존중, 경의",
    examples: [
      { en: "Out of deference to the elder statesman, he remained silent.", kr: "그 노(老)정치가에 대한 존중으로, 그는 침묵을 지켰습니다." },
      { en: "The decision was made in deference to the wishes of the founder.", kr: "그 결정은 설립자의 바람에 대한 경의로 내려졌습니다." }
    ]
  },
  {
    id: "L5-045",
    word: "derisive",
    meaning: "조롱하는",
    examples: [
      { en: "The losing team was met with derisive cheers from the opposing fans.", kr: "패배한 팀은 상대편 팬들의 조롱하는 환호를 받았습니다." },
      { en: "His derisive tone suggested contempt for the speaker.", kr: "그의 조롱하는 어조는 연사에 대한 경멸을 시사했습니다." }
    ]
  },
  {
    id: "L5-046",
    word: "desultory",
    meaning: "두서 없는, 산만한",
    examples: [
      { en: "He made a desultory attempt to clean his room.", kr: "그는 자신의 방을 청소하려는 두서 없는 시도를 했습니다." },
      { en: "The conversation was desultory, jumping from one topic to another.", kr: "그 대화는 한 주제에서 다른 주제로 건너뛰며 산만했습니다." }
    ]
  },
  {
    id: "L5-047",
    word: "diaphanous",
    meaning: "투명한, 아주 얇은",
    examples: [
      { en: "She wore a diaphanous veil over her face.", kr: "그녀는 얼굴에 아주 얇은 면사포를 착용했습니다." },
      { en: "The diaphanous material allowed the sunlight to shine through.", kr: "그 투명한 재료는 햇빛이 통과하도록 허용했습니다." }
    ]
  },
  {
    id: "L5-048",
    word: "dichotomy",
    meaning: "이분법",
    examples: [
      { en: "The novel explores the dichotomy between love and duty.", kr: "그 소설은 사랑과 의무 사이의 이분법을 탐구합니다." },
      { en: "We must avoid the simplistic dichotomy of 'good vs. evil'.", kr: "우리는 '선 대 악'이라는 단순한 이분법을 피해야 합니다." }
    ]
  },
  {
    id: "L5-049",
    word: "diffidence",
    meaning: "자신 없음, 소심함",
    examples: [
      { en: "His innate diffidence prevented him from asking for a raise.", kr: "그의 타고난 자신 없음은 그가 임금 인상을 요청하는 것을 막았습니다." },
      { en: "She overcame her diffidence to give a powerful speech.", kr: "그녀는 강력한 연설을 하기 위해 자신의 소심함을 극복했습니다." }
    ]
  },
  {
    id: "L5-050",
    word: "dilatory",
    meaning: "느린, 꾸물거리는",
    examples: [
      { en: "The committee was criticized for its dilatory response to the crisis.", kr: "위원회는 위기에 대한 느린 대응으로 비판받았습니다." },
      { en: "The dilatory government process frustrated many citizens.", kr: "그 꾸물거리는 정부 과정은 많은 시민들을 좌절시켰습니다." }
    ]
  },
  {
    id: "L5-051",
    word: "disparage",
    meaning: "얕보다, 폄하하다",
    examples: [
      { en: "It is unprofessional to disparage the work of your competition.", kr: "경쟁사의 작업을 얕보는 것은 비전문적입니다." },
      { en: "The critics disparaged the new film as unoriginal.", kr: "비평가들은 새 영화를 독창성이 없다고 폄하했습니다." }
    ]
  },
  {
    id: "L5-052",
    word: "disparate",
    meaning: "서로 전혀 다른, 이질적인",
    examples: [
      { en: "The book attempts to unify disparate philosophical concepts.", kr: "그 책은 서로 전혀 다른 철학적 개념들을 통합하려고 시도합니다." },
      { en: "The team brought together experts from disparate fields.", kr: "그 팀은 이질적인 분야의 전문가들을 모았습니다." }
    ]
  },
  {
    id: "L5-053",
    word: "dissemble",
    meaning: "숨기다, 위장하다",
    examples: [
      { en: "He tried to dissemble his true intentions with a friendly smile.", kr: "그는 친근한 미소로 자신의 진짜 의도를 숨기려고 노력했습니다." },
      { en: "A good spy must be able to dissemble fear and anxiety.", kr: "훌륭한 스파이는 두려움과 불안을 위장할 수 있어야 합니다." }
    ]
  },
  {
    id: "L5-054",
    word: "dissonance",
    meaning: "불협화음, 불일치",
    examples: [
      { en: "The economic policy caused social dissonance and unrest.", kr: "그 경제 정책은 사회적 불일치와 불안을 야기했습니다." },
      { en: "The avant-garde music was full of intentional dissonance.", kr: "그 아방가르드 음악은 의도적인 불협화음으로 가득했습니다." }
    ]
  },
  {
    id: "L5-055",
    word: "dudgeon",
    meaning: "불쾌, 분개",
    examples: [
      { en: "He left the meeting in high dudgeon after his proposal was rejected.", kr: "그는 자신의 제안이 거절된 후 큰 불쾌(분개) 속에 회의를 떠났습니다." },
      { en: "She took dudgeon at the suggestion that she was not qualified.", kr: "그녀는 자신이 자격이 없다는 제안에 불쾌함을 느꼈습니다." }
    ]
  },
  {
    id: "L5-056",
    word: "eccentric",
    meaning: "별난, 특이한",
    examples: [
      { en: "The genius inventor was notoriously eccentric.", kr: "그 천재 발명가는 악명 높게 별났습니다." },
      { en: "She has an eccentric habit of talking to plants.", kr: "그녀는 식물에게 말을 거는 특이한 습관을 가지고 있습니다." }
    ]
  },
  {
    id: "L5-057",
    word: "edify",
    meaning: "교화하다, 덕성을 높이다",
    examples: [
      { en: "The purpose of the play was to edify the audience morally.", kr: "그 연극의 목적은 관객들의 도덕성을 교화하는 것이었습니다." },
      { en: "Reading classic literature is meant to edify the mind.", kr: "고전 문학을 읽는 것은 정신의 덕성을 높이는 것을 의미합니다." }
    ]
  },
  {
    id: "L5-058",
    word: "effrontery",
    meaning: "뻔뻔스러움, 철면피",
    examples: [
      { en: "He had the effrontery to ask for a large loan after defaulting on the last one.", kr: "그는 마지막 대출을 불이행한 후 큰 대출을 요구하는 뻔뻔스러움을 보였습니다." },
      { en: "The child's effrontery was shocking to the adult guests.", kr: "그 아이의 철면피는 성인 손님들에게 충격적이었습니다." }
    ]
  },
  {
    id: "L5-059",
    word: "egregious",
    meaning: "지독한, 터무니없는",
    examples: [
      { en: "The error was so egregious that it cost the company millions.", kr: "그 오류는 너무 터무니없어서 회사에 수백만 달러의 손해를 입혔습니다." },
      { en: "His egregious misconduct led to his immediate termination.", kr: "그의 지독한 비행은 즉각적인 해고로 이어졌습니다." }
    ]
  },
  {
    id: "L5-060",
    word: "elegy",
    meaning: "애가, 비가",
    examples: [
      { en: "The poet wrote a moving elegy for the victims of the fire.", kr: "그 시인은 화재 피해자들을 위한 감동적인 애가를 썼습니다." },
      { en: "The sad music sounded like an elegy for a lost era.", kr: "그 슬픈 음악은 잃어버린 시대를 위한 비가처럼 들렸습니다." }
    ]
  },
  {
    id: "L5-061",
    word: "enervate",
    meaning: "기력을 약화시키다, 무기력하게 하다",
    examples: [
      { en: "The intense heat and humidity enervated the visiting team.", kr: "강렬한 더위와 습도는 방문 팀의 기력을 약화시켰습니다." },
      { en: "His frequent complaints tend to enervate the morale of his colleagues.", kr: "그의 잦은 불만은 동료들의 사기를 무기력하게 하는 경향이 있습니다." }
    ]
  },
  {
    id: "L5-062",
    word: "encomium",
    meaning: "찬사, 칭찬",
    examples: [
      { en: "The retiring CEO was presented with a long encomium detailing his service.", kr: "은퇴하는 최고 경영자는 그의 봉사를 상세히 설명하는 긴 찬사를 받았습니다." },
      { en: "The film received an encomium from the national film society.", kr: "그 영화는 국립 영화 협회로부터 칭찬을 받았습니다." }
    ]
  },
  {
    id: "L5-063",
    word: "enmity",
    meaning: "적대감, 증오",
    examples: [
      { en: "A deep-seated enmity existed between the two rival families.", kr: "그 두 라이벌 가족 사이에는 뿌리 깊은 적대감이 존재했습니다." },
      { en: "The peace treaty aimed to end the years of enmity between the nations.", kr: "그 평화 조약은 국가들 사이의 수년간의 증오를 끝내는 것을 목표로 했습니다." }
    ]
  },
  {
    id: "L5-064",
    word: "epicure",
    meaning: "미식가, 식도락가",
    examples: [
      { en: "The chef is an epicure who travels the world seeking new flavors.", kr: "그 주방장은 새로운 맛을 찾아 세계를 여행하는 미식가입니다." },
      { en: "He is a true epicure when it comes to fine dining.", kr: "그는 고급 식사에 관해서는 진정한 식도락가입니다." }
    ]
  },
  {
    id: "L5-065",
    word: "ephemeral",
    meaning: "덧없는, 수명이 짧은",
    examples: [
      { en: "The joy of a sudden win is often ephemeral.", kr: "갑작스러운 승리의 기쁨은 종종 덧없습니다." },
      { en: "She sought deeper meaning, rejecting the ephemeral pleasures of youth.", kr: "그녀는 젊음의 수명이 짧은(순간적인) 즐거움을 거부하고 더 깊은 의미를 추구했습니다." }
    ]
  },
  {
    id: "L5-066",
    word: "epitome",
    meaning: "전형, 완벽한 본보기",
    examples: [
      { en: "She is the epitome of elegance and grace.", kr: "그녀는 우아함과 품위의 전형입니다." },
      { en: "The luxury resort is the epitome of comfort.", kr: "그 고급 리조트는 편안함의 완벽한 본보기입니다." }
    ]
  },
  {
    id: "L5-067",
    word: "eschew",
    meaning: "피하다, 삼가다",
    examples: [
      { en: "He chose to eschew all forms of mass media and live simply.", kr: "그는 모든 형태의 대중 매체를 피하고 소박하게 살기로 선택했습니다." },
      { en: "You should eschew behaviors that will damage your reputation.", kr: "명성을 손상시킬 행동은 삼가야 합니다." }
    ]
  },
  {
    id: "L5-068",
    word: "evanescent",
    meaning: "덧없는, 사라져 가는",
    examples: [
      { en: "The rainbow was an evanescent splash of color against the gray sky.", kr: "무지개는 회색 하늘에 대고 있는 덧없는 색채의 물보라였습니다." },
      { en: "The singer's popularity was sadly evanescent.", kr: "그 가수의 인기는 슬프게도 사라져 가는 것이었습니다." }
    ]
  },
  {
    id: "L5-069",
    word: "exigent",
    meaning: "절박한, 긴급한",
    examples: [
      { en: "The emergency room doctor responded to the exigent situation immediately.", kr: "응급실 의사는 절박한 상황에 즉시 대응했습니다." },
      { en: "The financial crisis created an exigent need for new capital.", kr: "금융 위기는 새로운 자본에 대한 긴급한 필요를 만들었습니다." }
    ]
  },
  {
    id: "L5-070",
    word: "exhort",
    meaning: "간곡히 권고하다, 촉구하다",
    examples: [
      { en: "The leader exhorted the people to remain unified during the turmoil.", kr: "지도자는 혼란 동안 단결을 유지하도록 사람들에게 간곡히 권고했습니다." },
      { en: "I exhorted him to take the opportunity seriously.", kr: "나는 그에게 그 기회를 진지하게 받아들이도록 촉구했습니다." }
    ]
  },
  {
    id: "L5-071",
    word: "expedient",
    meaning: "편의적인, 임시방편의",
    examples: [
      { en: "It was an expedient but unethical solution to the problem.", kr: "그것은 문제에 대한 편의적이지만 비윤리적인 해결책이었습니다." },
      { en: "The manager chose the most expedient method to finish the job quickly.", kr: "매니저는 그 일을 빠르게 끝낼 가장 임시방편적인 방법을 선택했습니다." }
    ]
  },
  {
    id: "L5-072",
    word: "extemporaneous",
    meaning: "즉흥적인, 즉석의",
    examples: [
      { en: "The speaker gave an impressive, entirely extemporaneous address.", kr: "그 연사는 인상적인, 완전히 즉흥적인 연설을 했습니다." },
      { en: "The jazz musician's solo was a moment of true extemporaneous genius.", kr: "그 재즈 음악가의 솔로는 진정한 즉흥적인 천재성의 순간이었습니다." }
    ]
  },
  {
    id: "L5-073",
    word: "fallacy",
    meaning: "오류, 허위",
    examples: [
      { en: "The idea that the Earth is flat is a long-debunked fallacy.", kr: "지구가 평평하다는 생각은 오래전에 반증된 오류입니다." },
      { en: "His entire argument rested on a logical fallacy.", kr: "그의 전체 주장은 논리적 허위에 기반했습니다." }
    ]
  },
  {
    id: "L5-074",
    word: "fatuous",
    meaning: "어리석은, 얼빠진",
    examples: [
      { en: "He ignored the warnings and made a fatuous decision to invest everything.", kr: "그는 경고를 무시하고 모든 것을 투자하는 얼빠진 결정을 내렸습니다." },
      { en: "The article was filled with fatuous comments about the economy.", kr: "그 기사는 경제에 대한 어리석은 논평들로 가득했습니다." }
    ]
  },
  {
    id: "L5-075",
    word: "fecund",
    meaning: "비옥한, 창의적인",
    examples: [
      { en: "The rich, dark soil of the valley is extremely fecund.", kr: "그 계곡의 풍부하고 어두운 토양은 극도로 비옥합니다." },
      { en: "The writer's mind was incredibly fecund, producing three novels in a year.", kr: "그 작가의 정신은 믿을 수 없을 만큼 창의적이어서, 일 년에 세 권의 소설을 썼습니다." }
    ]
  },
  {
    id: "L5-076",
    word: "feign",
    meaning: "~인 체하다, 가장하다",
    examples: [
      { en: "He tried to feign illness to avoid the difficult assignment.", kr: "그는 어려운 임무를 피하기 위해 아픈 체했습니다." },
      { en: "The dog can feign injury to get attention.", kr: "그 개는 관심을 얻기 위해 부상을 가장할 수 있습니다." }
    ]
  },
  {
    id: "L5-077",
    word: "fervid",
    meaning: "열렬한, 열정적인",
    examples: [
      { en: "She is a fervid supporter of animal rights.", kr: "그녀는 동물 권리의 열렬한 지지자입니다." },
      { en: "The team’s coach delivered a fervid pre-game speech.", kr: "그 팀의 코치는 경기 전 열정적인 연설을 했습니다." }
    ]
  },
  {
    id: "L5-078",
    word: "fetter",
    meaning: "족쇄, 구속",
    examples: [
      { en: "The lack of resources placed a fetter on the project's progress.", kr: "자원 부족은 프로젝트의 진행에 족쇄를 걸었습니다." },
      { en: "The ancient prisoner wore heavy iron fetters.", kr: "그 고대 죄수는 무거운 쇠 족쇄를 착용했습니다." }
    ]
  },
  {
    id: "L5-079",
    word: "fidelity",
    meaning: "충실, 정확성",
    examples: [
      { en: "The historical film was praised for its fidelity to the original events.", kr: "그 역사 영화는 원래 사건에 대한 충실성으로 칭찬받았습니다." },
      { en: "The system ensures a high fidelity of sound reproduction.", kr: "그 시스템은 높은 음향 재현 정확성을 보장합니다." }
    ]
  },
  {
    id: "L5-080",
    word: "flout",
    meaning: "(법 등을) 경멸하며 어기다",
    examples: [
      { en: "Many drivers openly flout the speed limit late at night.", kr: "많은 운전자들이 늦은 밤에 공개적으로 속도 제한을 경멸하며 어깁니다." },
      { en: "The company was criticized for flouting environmental regulations.", kr: "그 회사는 환경 규제를 경멸하며 어긴 것에 대해 비판받았습니다." }
    ]
  },
  {
    id: "L5-081",
    word: "foment",
    meaning: "불화 등을 조성하다, 선동하다",
    examples: [
      { en: "The agitator was accused of fomenting unrest among the workers.", kr: "그 선동가는 노동자들 사이에 불안을 조성한 혐의로 고발되었습니다." },
      { en: "The article seemed designed to foment discord between the two parties.", kr: "그 기사는 두 당사자 사이에 불화를 선동하도록 고안된 것처럼 보였습니다." }
    ]
  },
  {
    id: "L5-082",
    word: "fortuitous",
    meaning: "우연한, 행운의",
    examples: [
      { en: "Their meeting was entirely fortuitous, happening by chance at the airport.", kr: "그들의 만남은 공항에서 우연히 일어난 전적으로 행운이었습니다." },
      { en: "The timing of the investment proved to be fortuitous.", kr: "그 투자의 타이밍은 행운으로 판명되었습니다." }
    ]
  },
  {
    id: "L5-083",
    word: "furtive",
    meaning: "은밀한, 수상쩍은",
    examples: [
      { en: "The cat made a furtive attempt to steal a piece of chicken.", kr: "그 고양이는 닭고기 한 조각을 훔치려는 은밀한 시도를 했습니다." },
      { en: "He cast a furtive glance at the test paper next to him.", kr: "그는 옆에 있는 시험지를 수상쩍게 쳐다보았습니다." }
    ]
  },
  {
    id: "L5-084",
    word: "gainsay",
    meaning: "반박하다, 부인하다",
    examples: [
      { en: "No one could gainsay the truth of her powerful testimony.", kr: "아무도 그녀의 강력한 증언의 진실을 반박할 수 없었습니다." },
      { en: "It is hard to gainsay the fact that the company is failing.", kr: "그 회사가 실패하고 있다는 사실을 부인하기 어렵습니다." }
    ]
  },
  {
    id: "L5-085",
    word: "garrulous",
    meaning: "수다스러운",
    examples: [
      { en: "The garrulous travel guide never stopped talking throughout the tour.", kr: "그 수다스러운 여행 가이드는 여행 내내 말하는 것을 멈추지 않았습니다." },
      { en: "He is too garrulous to be trusted with sensitive information.", kr: "그는 민감한 정보를 맡기기에는 너무 수다스럽습니다." }
    ]
  },
  {
    id: "L5-086",
    word: "germane",
    meaning: "밀접한 관련이 있는",
    examples: [
      { en: "Please ensure your questions are germane to the presentation topic.", kr: "질문이 발표 주제와 밀접한 관련이 있는지 확인해 주세요." },
      { en: "The evidence was ruled inadmissible because it was not germane to the crime.", kr: "그 증거는 범죄와 관련이 없었기 때문에 인정될 수 없었습니다." }
    ]
  },
  {
    id: "L5-087",
    word: "gregarious",
    meaning: "사교적인",
    examples: [
      { en: "She is a gregarious person who enjoys meeting new people.", kr: "그녀는 새로운 사람들을 만나는 것을 즐기는 사교적인 사람입니다." },
      { en: "Many primate species are gregarious and live in large groups.", kr: "많은 영장류 종들은 사교적이며 큰 무리를 이루어 삽니다." }
    ]
  },
  {
    id: "L5-088",
    word: "hackneyed",
    meaning: "진부한, 케케묵은",
    examples: [
      { en: "The film's plot was full of hackneyed clichés and predictable twists.", kr: "그 영화의 줄거리는 진부한 상투적인 표현과 예측 가능한 반전으로 가득했습니다." },
      { en: "Avoid using hackneyed phrases in your professional writing.", kr: "전문적인 글쓰기에서는 케케묵은 구절 사용을 피하세요." }
    ]
  },
  {
    id: "L5-089",
    word: "haphazard",
    meaning: "되는대로의, 무계획적인",
    examples: [
      { en: "The filing system was completely haphazard, making it impossible to find documents.", kr: "파일링 시스템은 완전히 되는대로여서 문서를 찾는 것이 불가능했습니다." },
      { en: "He took a haphazard approach to studying for the exam.", kr: "그는 시험공부에 무계획적인 접근 방식을 취했습니다." }
    ]
  },
  {
    id: "L5-090",
    word: "hedonism",
    meaning: "쾌락주의",
    examples: [
      { en: "His excessive spending was a symptom of his commitment to hedonism.", kr: "그의 지나친 지출은 쾌락주의에 대한 그의 헌신의 징후였습니다." },
      { en: "The ancient city was notorious for its lifestyle of unchecked hedonism.", kr: "그 고대 도시는 억제되지 않은 쾌락주의 생활 방식으로 악명이 높았습니다." }
    ]
  },
  {
    id: "L5-091",
    word: "hegemony",
    meaning: "패권, 지배권",
    examples: [
      { en: "The nation sought to maintain its cultural and economic hegemony in the region.", kr: "그 나라는 그 지역에서 문화적, 경제적 패권을 유지하려고 노력했습니다." },
      { en: "The company's market hegemony was finally challenged by new startups.", kr: "그 회사의 시장 지배권은 마침내 새로운 스타트업들에 의해 도전받았습니다." }
    ]
  },
  {
    id: "L5-092",
    word: "hiatus",
    meaning: "중단, 공백",
    examples: [
      { en: "The band announced a brief hiatus before starting their next world tour.", kr: "그 밴드는 다음 월드 투어를 시작하기 전에 짧은 중단을 발표했습니다." },
      { en: "There was a noticeable hiatus in the funding for the research project.", kr: "그 연구 프로젝트에 대한 자금 조달에 눈에 띄는 공백이 있었습니다." }
    ]
  },
  {
    id: "L5-093",
    word: "homily",
    meaning: "설교, 지루한 훈계",
    examples: [
      { en: "The manager gave the staff a long homily about the importance of being on time.", kr: "매니저는 직원들에게 시간을 잘 지키는 것의 중요성에 대해 긴 훈계를 했습니다." },
      { en: "His lectures often turned into a tiresome homily about morality.", kr: "그의 강의는 종종 도덕에 대한 지루한 설교로 변했습니다." }
    ]
  },
  {
    id: "L5-094",
    word: "hubris",
    meaning: "오만, 자만",
    examples: [
      { en: "The CEO’s hubris led him to ignore all warnings, causing the company’s downfall.", kr: "최고 경영자의 오만은 그가 모든 경고를 무시하도록 이끌었고, 회사의 몰락을 초래했습니다." },
      { en: "Hubris is a common tragic flaw in classical literature.", kr: "오만은 고전 문학에서 흔한 비극적 결함입니다." }
    ]
  },
  {
    id: "L5-095",
    word: "impetus",
    meaning: "추진력, 자극",
    examples: [
      { en: "The new technology provided the impetus for the development of the market.", kr: "새로운 기술은 시장 발전에 추진력을 제공했습니다." },
      { en: "His success gave her the impetus she needed to start her own business.", kr: "그의 성공은 그녀가 자신의 사업을 시작하는 데 필요한 자극을 주었습니다." }
    ]
  },
  {
    id: "L5-096",
    word: "impunity",
    meaning: "처벌을 면함",
    examples: [
      { en: "The powerful figures acted with impunity, believing they were above the law.", kr: "그 강력한 인물들은 법 위에 있다고 믿으며 처벌을 면한 채 행동했습니다." },
      { en: "The law must ensure that no one commits crimes with impunity.", kr: "법은 아무도 처벌을 면한 채 범죄를 저지르지 않도록 보장해야 합니다." }
    ]
  },
  {
    id: "L5-097",
    word: "inchoate",
    meaning: "초기의, 미발달의",
    examples: [
      { en: "The plan is still in an inchoate, undeveloped state.", kr: "그 계획은 여전히 미발달된 초기 상태에 있습니다." },
      { en: "The author was working on the inchoate ideas for his next novel.", kr: "그 작가는 다음 소설에 대한 초기의 아이디어들을 작업하고 있었습니다." }
    ]
  },
  {
    id: "L5-098",
    word: "incontrovertible",
    meaning: "반박의 여지가 없는, 명백한",
    examples: [
      { en: "The security footage provided incontrovertible evidence of the theft.", kr: "보안 영상은 절도에 대한 반박의 여지가 없는 증거를 제공했습니다." },
      { en: "His achievements are an incontrovertible testament to his genius.", kr: "그의 업적은 그의 천재성에 대한 명백한 증거입니다." }
    ]
  },
  {
    id: "L5-099",
    word: "indefatigable",
    meaning: "지칠 줄 모르는",
    examples: [
      { en: "The rescue workers showed indefatigable spirit after days of searching.", kr: "구조 대원들은 수일간의 수색 후 지칠 줄 모르는 정신을 보여주었습니다." },
      { en: "Her indefatigable enthusiasm motivated the entire team.", kr: "그녀의 지칠 줄 모르는 열정은 팀 전체에 동기를 부여했습니다." }
    ]
  },
  {
    id: "L5-100",
    word: "indolent",
    meaning: "게으른, 나태한",
    examples: [
      { en: "The hot, humid air made him feel indolent and unwilling to work.", kr: "뜨겁고 습한 공기는 그가 게으르고 일하기 싫게 만들었습니다." },
      { en: "He was fired due to his indolent work habits.", kr: "그는 그의 나태한 근무 습관 때문에 해고되었습니다." }
    ]
  }
];

const wordsLevel5_Part2 = [
  {
    id: "L5-101",
    word: "hypothesis",
    meaning: "가설",
    examples: [
      { en: "The experiment was designed to test the scientist's main hypothesis.", kr: "그 실험은 과학자의 주요 가설을 시험하기 위해 고안되었습니다." },
      { en: "We formed a working hypothesis for the investigation.", kr: "우리는 조사를 위한 작업 가설을 세웠습니다." }
    ]
  },
  {
    id: "L5-102",
    word: "ignominy",
    meaning: "불명예, 치욕",
    examples: [
      { en: "The politician resigned in the face of public ignominy.", kr: "그 정치인은 대중의 불명예에 직면하여 사임했습니다." },
      { en: "The team suffered the ignominy of losing every game.", kr: "그 팀은 모든 경기에서 지는 치욕을 겪었습니다." }
    ]
  },
  {
    id: "L5-103",
    word: "impecunious",
    meaning: "돈 없는, 가난한",
    examples: [
      { en: "He started his career as an impecunious young writer.", kr: "그는 돈 없는 젊은 작가로 자신의 경력을 시작했습니다." },
      { en: "The charity provides aid to impecunious families.", kr: "그 자선 단체는 가난한 가족들에게 지원을 제공합니다." }
    ]
  },
  {
    id: "L5-104",
    word: "impertinent",
    meaning: "무례한, 건방진",
    examples: [
      { en: "The student was disciplined for making impertinent remarks to the teacher.", kr: "그 학생은 선생님에게 무례한 발언을 하여 징계를 받았습니다." },
      { en: "His impertinent tone suggested a lack of respect.", kr: "그의 건방진 어조는 존중 부족을 시사했습니다." }
    ]
  },
  {
    id: "L5-105",
    word: "impugn",
    meaning: "이의를 제기하다, 비난하다",
    examples: [
      { en: "The lawyer impugned the witness's credibility.", kr: "변호사는 증인의 신뢰성에 이의를 제기했습니다." },
      { en: "No one dared to impugn the findings of the lead scientist.", kr: "아무도 선임 과학자의 발견 사항들을 비난할 용기를 내지 못했습니다." }
    ]
  },
  {
    id: "L5-106",
    word: "inadvertent",
    meaning: "부주의한, 무심코 한",
    examples: [
      { en: "The error was an inadvertent mistake, not an intentional act.", kr: "그 오류는 고의적인 행동이 아닌 부주의한 실수였습니다." },
      { en: "He made an inadvertent comment that revealed the surprise.", kr: "그는 무심코 놀라운 사실을 드러내는 논평을 했습니다." }
    ]
  },
  {
    id: "L5-107",
    word: "inarticulate",
    meaning: "불분명하게 말하는, 표현이 서툰",
    examples: [
      { en: "He was so nervous that his speech was largely inarticulate.", kr: "그는 너무 긴장해서 그의 연설은 대체로 불분명했습니다." },
      { en: "The witness was unable to give an articulate account of the events.", kr: "그 증인은 사건에 대해 분명하게 설명하는 진술을 할 수 없었습니다." }
    ]
  },
  {
    id: "L5-108",
    word: "incisive",
    meaning: "예리한, 통찰력 있는",
    examples: [
      { en: "The manager delivered an incisive analysis of the company's problems.", kr: "그 관리자는 회사 문제에 대한 예리한 분석을 전달했습니다." },
      { en: "She made an incisive comment that cut straight to the core issue.", kr: "그녀는 핵심 문제로 곧바로 들어가는 통찰력 있는 논평을 했습니다." }
    ]
  },
  {
    id: "L5-109",
    word: "incontrovertible",
    meaning: "논쟁의 여지가 없는, 명백한",
    examples: [
      { en: "The security footage provided incontrovertible evidence of the crime.", kr: "보안 영상은 범죄에 대한 논쟁의 여지가 없는 증거를 제공했습니다." },
      { en: "It is an incontrovertible fact that the Earth is round.", kr: "지구가 둥글다는 것은 명백한 사실입니다." }
    ]
  },
  {
    id: "L5-110",
    word: "indefatigable",
    meaning: "지칠 줄 모르는",
    examples: [
      { en: "The rescue team showed indefatigable spirit after days of searching.", kr: "구조팀은 수일간의 수색 후 지칠 줄 모르는 정신을 보여주었습니다." },
      { en: "Her indefatigable effort led to the success of the project.", kr: "그녀의 지칠 줄 모르는 노력이 프로젝트의 성공으로 이어졌습니다." }
    ]
  },
  {
    id: "L5-111",
    word: "indiscriminate",
    meaning: "무차별적인, 무분별한",
    examples: [
      { en: "The bombing caused indiscriminate destruction across the city.", kr: "그 폭격은 도시 전역에 무차별적인 파괴를 야기했습니다." },
      { en: "He has an indiscriminate taste in music, listening to everything.", kr: "그는 모든 것을 듣는 무분별한 음악 취향을 가지고 있습니다." }
    ]
  },
  {
    id: "L5-112",
    word: "indolent",
    meaning: "게으른, 나태한",
    examples: [
      { en: "His indolent attitude prevented him from achieving his potential.", kr: "그의 게으른 태도는 그가 잠재력을 달성하는 것을 막았습니다." },
      { en: "The hot climate made everyone feel indolent and sluggish.", kr: "뜨거운 기후는 모두를 나태하고 둔하게 느끼게 만들었습니다." }
    ]
  },
  {
    id: "L5-113",
    word: "inept",
    meaning: "서툰, 무능한",
    examples: [
      { en: "The manager was criticized for his inept handling of the crisis.", kr: "그 관리자는 위기 대처에 대한 서툰(무능한) 처리로 비판받았습니다." },
      { en: "His attempts at humor were completely inept.", kr: "그의 유머 시도는 완전히 서툴렀습니다." }
    ]
  },
  {
    id: "L5-114",
    word: "infamous",
    meaning: "악명 높은",
    examples: [
      { en: "The city is known for its infamous prison.", kr: "그 도시는 악명 높은 감옥으로 알려져 있습니다." },
      { en: "He was arrested for the infamous theft of the diamond necklace.", kr: "그는 그 악명 높은 다이아몬드 목걸이 절도 혐의로 체포되었습니다." }
    ]
  },
  {
    id: "L5-115",
    word: "ingratiate",
    meaning: "환심을 사다, 비위를 맞추다",
    examples: [
      { en: "He tried to ingratiate himself with the boss by offering constant compliments.", kr: "그는 끊임없이 칭찬하며 상사에게 환심을 사려고 노력했습니다." },
      { en: "I dislike people who try to ingratiate themselves with flattery.", kr: "저는 아첨으로 환심을 사려는 사람들을 싫어합니다." }
    ]
  },
  {
    id: "L5-116",
    word: "innocuous",
    meaning: "무해한, 악의 없는",
    examples: [
      { en: "The substance looked dangerous, but it was completely innocuous.", kr: "그 물질은 위험해 보였지만, 완전히 무해했습니다." },
      { en: "He made an innocuous comment that was later misinterpreted.", kr: "그는 악의 없는 논평을 했지만 나중에 오해를 받았습니다." }
    ]
  },
  {
    id: "L5-117",
    word: "insatiable",
    meaning: "만족시킬 수 없는, 채울 수 없는",
    examples: [
      { en: "He has an insatiable thirst for power and wealth.", kr: "그는 권력과 부에 대한 만족시킬 수 없는 갈증을 가지고 있습니다." },
      { en: "The company's insatiable demand for raw materials led to environmental damage.", kr: "그 회사의 원자재에 대한 채울 수 없는 요구는 환경 피해로 이어졌습니다." }
    ]
  },
  {
    id: "L5-118",
    word: "inscrutable",
    meaning: "헤아릴 수 없는, 불가사의한",
    examples: [
      { en: "The old man gave an inscrutable smile, revealing nothing of his thoughts.", kr: "그 노인은 자신의 생각을 아무것도 드러내지 않는 불가사의한 미소를 지었습니다." },
      { en: "The decision-making process was so complex it seemed inscrutable.", kr: "그 의사 결정 과정은 너무 복잡해서 헤아릴 수 없는 것처럼 보였습니다." }
    ]
  },
  {
    id: "L5-119",
    word: "insidious",
    meaning: "교활한, 서서히 퍼지는",
    examples: [
      { en: "The disease has an insidious onset, making it hard to detect early.", kr: "그 질병은 서서히 퍼지기 시작하여 조기 발견이 어렵습니다." },
      { en: "The insidious propaganda slowly changed the public's opinion.", kr: "그 교활한 선전은 대중의 의견을 서서히 변화시켰습니다." }
    ]
  },
  {
    id: "L5-120",
    word: "insipid",
    meaning: "맛없는, 재미없는",
    examples: [
      { en: "The soup was so insipid that I had to add a lot of salt.", kr: "그 수프는 너무 맛이 없어서 소금을 많이 넣어야 했습니다." },
      { en: "The movie was criticized for its insipid plot and characters.", kr: "그 영화는 재미없는 줄거리와 인물들로 비판받았습니다." }
    ]
  },
  {
    id: "L5-121",
    word: "intractable",
    meaning: "다루기 힘든, 고집 센",
    examples: [
      { en: "The intractable problem required a radical new solution.", kr: "그 다루기 힘든 문제는 급진적인 새 해결책을 필요로 했습니다." },
      { en: "The manager struggled with the most intractable employee.", kr: "그 관리자는 가장 고집 센 직원과 씨름했습니다." }
    ]
  },
  {
    id: "L5-122",
    word: "intransigent",
    meaning: "비타협적인, 완고한",
    examples: [
      { en: "The union remained intransigent in its demand for higher wages.", kr: "노조는 더 높은 임금 요구에 비타협적인 태도를 유지했습니다." },
      { en: "It is impossible to negotiate with someone so intransigent.", kr: "그렇게 완고한 사람과는 협상하는 것이 불가능합니다." }
    ]
  },
  {
    id: "L5-123",
    word: "intricate",
    meaning: "복잡한, 뒤얽힌",
    examples: [
      { en: "The clock had an intricate design with many small moving parts.", kr: "그 시계는 작은 움직이는 부품들이 많은 복잡한 디자인을 가지고 있었습니다." },
      { en: "The plot of the novel was so intricate that it required close attention.", kr: "그 소설의 줄거리는 너무 뒤얽혀서 세심한 주의를 요했습니다." }
    ]
  },
  {
    id: "L5-124",
    word: "intrinsic",
    meaning: "고유의, 본질적인",
    examples: [
      { en: "The painting's intrinsic value is separate from its market price.", kr: "그 그림의 본질적인 가치는 시장 가격과 별개입니다." },
      { en: "The ability to empathize is an intrinsic human quality.", kr: "공감 능력은 인간의 고유한 특성입니다." }
    ]
  },
  {
    id: "L5-125",
    word: "inundate",
    meaning: "물에 잠기게 하다, 쇄도하다",
    examples: [
      { en: "The city was inundated with calls after the power outage.", kr: "정전 후 도시는 전화로 쇄도했습니다." },
      { en: "Heavy rain caused the river to inundate the fields.", kr: "폭우로 인해 강물이 들판을 물에 잠기게 했습니다." }
    ]
  },
  {
    id: "L5-126",
    word: "inure",
    meaning: "익숙하게 하다, 단련하다",
    examples: [
      { en: "The harsh winters inured the villagers to the cold.", kr: "그 혹독한 겨울은 마을 사람들을 추위에 익숙하게 만들었습니다." },
      { en: "She was inured to the sight of blood after working in the hospital for years.", kr: "그녀는 수년간 병원에서 일한 후 피를 보는 것에 단련되었습니다." }
    ]
  },
  {
    id: "L5-127",
    word: "invective",
    meaning: "욕설, 비난",
    examples: [
      { en: "The speech quickly devolved into a torrent of personal invective.", kr: "그 연설은 빠르게 개인적인 욕설의 연속으로 퇴화했습니다." },
      { en: "The newspaper was criticized for its use of political invective.", kr: "그 신문은 정치적 비난(욕설) 사용으로 비판받았습니다." }
    ]
  },
  {
    id: "L5-128",
    word: "invidious",
    meaning: "시기심을 유발하는, 불쾌한",
    examples: [
      { en: "The task of making invidious comparisons between the students was unpleasant.", kr: "학생들 사이에 시기심을 유발하는 비교를 해야 하는 임무는 불쾌했습니다." },
      { en: "The manager's decision created an invidious situation among the staff.", kr: "관리자의 결정은 직원들 사이에 불쾌한 상황을 만들었습니다." }
    ]
  },
  {
    id: "L5-129",
    word: "irascible",
    meaning: "화 잘 내는, 성미 급한",
    examples: [
      { en: "The irascible old man often shouted at the local children.", kr: "그 화 잘 내는 노인은 종종 동네 아이들에게 소리쳤습니다." },
      { en: "His irascible temper made him a difficult boss to work for.", kr: "그의 성미 급한 성질은 그를 함께 일하기 어려운 상사로 만들었습니다." }
    ]
  },
  {
    id: "L5-130",
    word: "jocular",
    meaning: "우스꽝스러운, 익살맞은",
    examples: [
      { en: "He has a jocular manner that puts everyone at ease.", kr: "그는 모두를 편안하게 만드는 익살맞은 태도를 가지고 있습니다." },
      { en: "The presentation was interrupted by jocular remarks from the audience.", kr: "그 발표는 청중의 우스꽝스러운 발언으로 중단되었습니다." }
    ]
  },
  {
    id: "L5-131",
    word: "judicious",
    meaning: "현명한, 신중한",
    examples: [
      { en: "The CEO made a judicious decision to sell the unprofitable division.", kr: "최고 경영자는 수익성이 없는 부서를 매각하는 현명한 결정을 내렸습니다." },
      { en: "Judicious use of limited resources is necessary.", kr: "제한된 자원의 신중한 사용이 필수적입니다." }
    ]
  },
  {
    id: "L5-132",
    word: "laconic",
    meaning: "간결한, 말수가 적은",
    examples: [
      { en: "The general gave a laconic reply to the complex question.", kr: "그 장군은 복잡한 질문에 간결한 답변을 했습니다." },
      { en: "He is known for his sharp wit and laconic style.", kr: "그는 날카로운 재치와 말수가 적은 스타일로 알려져 있습니다." }
    ]
  },
  {
    id: "L5-133",
    word: "languid",
    meaning: "나른한, 무기력한",
    examples: [
      { en: "The hot, humid air made her feel languid and sleepy.", kr: "뜨겁고 습한 공기는 그녀를 나른하고 졸리게 만들었습니다." },
      { en: "She gave a languid wave from the balcony.", kr: "그녀는 발코니에서 무기력한 손짓을 했습니다." }
    ]
  },
  {
    id: "L5-134",
    word: "laud",
    meaning: "칭찬하다",
    examples: [
      { en: "Critics lauded the novel for its originality and style.", kr: "비평가들은 그 소설의 독창성과 스타일에 대해 칭찬했습니다." },
      { en: "His humanitarian efforts were lauded by international organizations.", kr: "그의 인도주의적 노력은 국제 기구들로부터 칭찬받았습니다." }
    ]
  },
  {
    id: "L5-135",
    word: "levity",
    meaning: "경솔함, 경박함",
    examples: [
      { en: "The meeting lacked seriousness, being constantly interrupted by levity.", kr: "그 회의는 경솔함 때문에 심각성이 부족했습니다." },
      { en: "He treated the serious issue with an inappropriate amount of levity.", kr: "그는 심각한 문제를 부적절한 정도의 경박함으로 다루었습니다." }
    ]
  },
  {
    id: "L5-136",
    word: "licentious",
    meaning: "방탕한, 음란한",
    examples: [
      { en: "The book was banned for its licentious content.", kr: "그 책은 음란한 내용으로 인해 금지되었습니다." },
      { en: "His licentious lifestyle led to his financial ruin.", kr: "그의 방탕한 생활 방식은 재정적 파멸로 이어졌습니다." }
    ]
  },
  {
    id: "L5-137",
    word: "lilliputian",
    meaning: "아주 작은, 하찮은",
    examples: [
      { en: "The town built a lilliputian park for children.", kr: "그 마을은 아이들을 위한 아주 작은 공원을 지었습니다." },
      { en: "The politician focused on lilliputian issues instead of major policy reforms.", kr: "그 정치인은 주요 정책 개혁 대신 하찮은 문제에 집중했습니다." }
    ]
  },
  {
    id: "L5-138",
    word: "litany",
    meaning: "장황한 목록, 잦은 반복",
    examples: [
      { en: "He recited a litany of complaints about the restaurant's service.", kr: "그는 식당 서비스에 대한 장황한 불만 목록을 읊었습니다." },
      { en: "The speech became a tiresome litany of past achievements.", kr: "그 연설은 과거 업적에 대한 지루한 잦은 반복이 되었습니다." }
    ]
  },
  {
    id: "L5-139",
    word: "lugubrious",
    meaning: "침울한, 슬픔에 잠긴",
    examples: [
      { en: "The atmosphere was lugubrious after the news of the defeat.", kr: "패배 소식 후 분위기는 침울했습니다." },
      { en: "The dog gave a lugubrious howl when the owner left.", kr: "주인이 떠나자 개는 슬픔에 잠긴 울음소리를 냈습니다." }
    ]
  },
  {
    id: "L5-140",
    word: "machination",
    meaning: "음모, 술책",
    examples: [
      { en: "The spy was uncovered after years of machination against the government.", kr: "그 스파이는 수년간의 정부에 대한 음모 끝에 정체가 드러났습니다." },
      { en: "The political turmoil was caused by the secret machinations of the ministers.", kr: "정치적 혼란은 장관들의 비밀 술책 때문에 야기되었습니다." }
    ]
  },
  {
    id: "L5-141",
    word: "malediction",
    meaning: "저주, 악담",
    examples: [
      { en: "The old woman hurled a malediction at the man who wronged her.", kr: "그 노파는 자신에게 잘못한 남자에게 저주를 퍼부었습니다." },
      { en: "He muttered a malediction under his breath when he missed the bus.", kr: "그는 버스를 놓쳤을 때 숨을 죽이고 악담을 중얼거렸습니다." }
    ]
  },
  {
    id: "L5-142",
    word: "maudlin",
    meaning: "감상적인, 눈물 많은",
    examples: [
      { en: "The movie's maudlin ending failed to earn respect from the critics.", kr: "그 영화의 감상적인 결말은 비평가들로부터 존경을 얻는 데 실패했습니다." },
      { en: "He became maudlin and started crying about his childhood.", kr: "그는 감상적이 되어 자신의 어린 시절에 대해 울기 시작했습니다." }
    ]
  },
  {
    id: "L5-143",
    word: "mawkish",
    meaning: "징그러울 정도로 감상적인",
    examples: [
      { en: "I found the love scene to be excessively mawkish and unconvincing.", kr: "저는 그 사랑 장면이 지나치게 징그러울 정도로 감상적이고 설득력이 없다고 생각했습니다." },
      { en: "The song was a mawkish tribute to a fallen hero.", kr: "그 노래는 쓰러진 영웅에게 바치는 징그러울 정도로 감상적인 헌사였습니다." }
    ]
  },
  {
    id: "L5-144",
    word: "mellifluous",
    meaning: "감미로운, 듣기 좋은",
    examples: [
      { en: "The singer has a mellifluous voice that soothes the audience.", kr: "그 가수는 청중을 달래는 감미로운 목소리를 가지고 있습니다." },
      { en: "He delivered the bad news in a mellifluous, calming tone.", kr: "그는 감미롭고 차분한 어조로 나쁜 소식을 전달했습니다." }
    ]
  },
  {
    id: "L5-145",
    word: "meretricious",
    meaning: "겉만 번지르르한, 야한",
    examples: [
      { en: "The film relied on meretricious special effects instead of a good story.", kr: "그 영화는 좋은 이야기 대신 겉만 번지르르한 특수 효과에 의존했습니다." },
      { en: "She saw through his meretricious charm quickly.", kr: "그녀는 그의 겉만 번지르르한 매력을 빠르게 간파했습니다." }
    ]
  },
  {
    id: "L5-146",
    word: "misanthrope",
    meaning: "인간 혐오자",
    examples: [
      { en: "The old hermit was a notorious misanthrope who avoided all human contact.", kr: "그 나이든 은둔자는 모든 인간과의 접촉을 피하는 악명 높은 인간 혐오자였습니다." },
      { en: "Despite his occasional cynical remarks, he is not a true misanthrope.", kr: "그의 가끔의 냉소적인 발언에도 불구하고, 그는 진정한 인간 혐오자는 아닙니다." }
    ]
  },
  {
    id: "L5-147",
    word: "monetary",
    meaning: "화폐의, 금융의",
    examples: [
      { en: "The central bank controls the nation's monetary policy.", kr: "중앙은행은 국가의 금융 정책을 통제합니다." },
      { en: "The dispute was settled with a large monetary payment.", kr: "그 분쟁은 큰 화폐(금전) 지불로 해결되었습니다." }
    ]
  },
  {
    id: "L5-148",
    word: "morose",
    meaning: "시무룩한, 침울한",
    examples: [
      { en: "The boy was morose after losing his favorite toy.", kr: "그 소년은 가장 좋아하는 장난감을 잃은 후 시무룩했습니다." },
      { en: "His morose silence made the atmosphere heavy.", kr: "그의 침울한 침묵은 분위기를 무겁게 만들었습니다." }
    ]
  },
  {
    id: "L5-149",
    word: "nefarious",
    meaning: "사악한, 흉악한",
    examples: [
      { en: "The gang was involved in several nefarious activities.", kr: "그 갱단은 여러 흉악한 활동에 연루되었습니다." },
      { en: "The villain's nefarious plan was finally exposed.", kr: "그 악당의 사악한 계획은 마침내 폭로되었습니다." }
    ]
  },
  {
    id: "L5-150",
    word: "neophyte",
    meaning: "신참, 초보자",
    examples: [
      { en: "The program is designed to guide neophytes through the complex process.", kr: "그 프로그램은 초보자들이 복잡한 과정을 거치도록 안내하기 위해 설계되었습니다." },
      { en: "As a neophyte chef, he made a few basic mistakes.", kr: "신참 요리사로서, 그는 몇 가지 기본적인 실수를 저질렀습니다." }
    ]
  },
  {
    id: "L5-151",
    word: "nonplussed",
    meaning: "당황한, 어찌할 바를 모르는",
    examples: [
      { en: "He was nonplussed by the sudden, complex question.", kr: "그는 갑작스럽고 복잡한 질문에 당황했습니다." },
      { en: "The unexpected delay left the host entirely nonplussed.", kr: "예상치 못한 지연은 진행자를 완전히 어찌할 바를 모르게 만들었습니다." }
    ]
  },
  {
    id: "L5-152",
    word: "notorious",
    meaning: "악명 높은",
    examples: [
      { en: "The criminal was notorious for his many daring bank robberies.", kr: "그 범죄자는 그의 대담한 은행 강도 행위로 악명이 높았습니다." },
      { en: "The company is notorious for its poor customer service.", kr: "그 회사는 형편없는 고객 서비스로 악명이 높습니다." }
    ]
  },
  {
    id: "L5-153",
    word: "obdurate",
    meaning: "고집 센, 완고한",
    examples: [
      { en: "The politician remained obdurate in his refusal to compromise.", kr: "그 정치인은 타협을 거부하는 데 고집 센 태도를 유지했습니다." },
      { en: "The obdurate resistance of the city led to a long siege.", kr: "그 도시의 완고한 저항은 오랜 포위 공격으로 이어졌습니다." }
    ]
  },
  {
    id: "L5-154",
    word: "obsequious",
    meaning: "아첨하는, 비굴한",
    examples: [
      { en: "The new employee was criticized for being too obsequious to the manager.", kr: "새 직원은 관리자에게 너무 아첨한다는 비판을 받았습니다." },
      { en: "His obsequious smile made me feel uneasy.", kr: "그의 비굴한 미소는 나를 불편하게 만들었습니다." }
    ]
  },
  {
    id: "L5-155",
    word: "obviate",
    meaning: "미연에 방지하다, 제거하다",
    examples: [
      { en: "The new software update will obviate the need for manual data entry.", kr: "새 소프트웨어 업데이트는 수동 데이터 입력의 필요성을 미연에 방지할 것입니다." },
      { en: "Careful planning obviated the possibility of unexpected delays.", kr: "신중한 계획은 예상치 못한 지연의 가능성을 제거했습니다." }
    ]
  },
  {
    id: "L5-156",
    word: "opaque",
    meaning: "불투명한, 이해하기 어려운",
    examples: [
      { en: "The window glass was opaque, blocking out the light.", kr: "창문 유리는 불투명하여 빛을 차단했습니다." },
      { en: "The financial report was opaque and full of confusing jargon.", kr: "그 재정 보고서는 이해하기 어려웠고 혼란스러운 전문 용어로 가득했습니다." }
    ]
  },
  {
    id: "L5-157",
    word: "opprobrium",
    meaning: "맹비난, 불명예",
    examples: [
      { en: "The scandal brought public opprobrium upon the entire political party.", kr: "그 스캔들은 정치 정당 전체에 대중의 맹비난을 가져왔습니다." },
      { en: "He resigned to avoid the opprobrium of his colleagues.", kr: "그는 동료들의 불명예를 피하기 위해 사임했습니다." }
    ]
  },
  {
    id: "L5-158",
    word: "ostensibly",
    meaning: "표면상으로는",
    examples: [
      { en: "Ostensibly, he was on a business trip, but he was actually on vacation.", kr: "표면상으로는 그는 출장 중이었지만, 실제로는 휴가 중이었습니다." },
      { en: "The meeting was ostensibly about budgets, but the real topic was layoffs.", kr: "그 회의는 표면상으로는 예산에 관한 것이었지만, 실제 주제는 정리해고였습니다." }
    ]
  },
  {
    id: "L5-159",
    word: "oscillate",
    meaning: "동요하다, 진동하다",
    examples: [
      { en: "The pendulum continued to oscillate back and forth.", kr: "그 추는 계속해서 앞뒤로 진동했습니다." },
      { en: "His opinions tend to oscillate depending on who he talks to.", kr: "그의 의견은 누구와 이야기하느냐에 따라 동요하는 경향이 있습니다." }
    ]
  },
  {
    id: "L5-160",
    word: "palliative",
    meaning: "완화하는, 일시적인 처방",
    examples: [
      { en: "The new tax cut was merely a palliative measure, not a real solution.", kr: "새 세금 감면은 진정한 해결책이 아닌, 단지 일시적인 처방이었습니다." },
      { en: "Palliative care focuses on relieving symptoms, not curing the disease.", kr: "완화 치료는 질병을 치료하는 것이 아니라 증상을 완화하는 데 중점을 둡니다." }
    ]
  },
  {
    id: "L5-161",
    word: "palpable",
    meaning: "손으로 만질 수 있는, 명백한",
    examples: [
      { en: "There was a palpable tension in the room before the vote.", kr: "투표 전에 방 안에는 손으로 만질 수 있는 듯한 긴장감이 있었습니다." },
      { en: "The sense of relief among the survivors was palpable.", kr: "생존자들 사이의 안도감은 명백했습니다." }
    ]
  },
  {
    id: "L5-162",
    word: "parochial",
    meaning: "편협한, 지방적인",
    examples: [
      { en: "The village was known for its closed, parochial outlook on life.", kr: "그 마을은 삶에 대한 폐쇄적이고 편협한 시각으로 알려져 있었습니다." },
      { en: "We need to move beyond parochial concerns and think globally.", kr: "우리는 지방적인 관심사를 넘어서 세계적으로 생각해야 합니다." }
    ]
  },
  {
    id: "L5-163",
    word: "pensive",
    meaning: "생각에 잠긴, 수심에 찬",
    examples: [
      { en: "She sat quietly on the bench, looking pensive.", kr: "그녀는 벤치에 조용히 앉아 생각에 잠긴 듯 보였습니다." },
      { en: "The portrait captured his pensive mood perfectly.", kr: "그 초상화는 그의 수심에 찬 기분을 완벽하게 포착했습니다." }
    ]
  },
  {
    id: "L5-164",
    word: "peremptory",
    meaning: "단호한, 독단적인",
    examples: [
      { en: "The manager issued a peremptory order to shut down the system immediately.", kr: "관리자는 시스템을 즉시 종료하라는 단호한 명령을 내렸습니다." },
      { en: "His peremptory tone left no room for discussion.", kr: "그의 독단적인 어조는 논의의 여지를 남기지 않았습니다." }
    ]
  },
  {
    id: "L5-165",
    word: "perquisite",
    meaning: "특전, 부수입",
    examples: [
      { en: "A company car is a common perquisite for senior executives.", kr: "회사차는 고위 임원들을 위한 흔한 특전입니다." },
      { en: "The job offered a high salary and various small perquisites.", kr: "그 일자리는 높은 급여와 다양한 작은 부수입을 제공했습니다." }
    ]
  },
  {
    id: "L5-166",
    word: "perspicacious",
    meaning: "통찰력 있는, 현명한",
    examples: [
      { en: "The perspicacious investor sold his stocks just before the crash.", kr: "그 통찰력 있는 투자자는 폭락 직전에 주식을 팔았습니다." },
      { en: "She made a perspicacious observation about the root cause of the problem.", kr: "그녀는 문제의 근본 원인에 대한 현명한 관찰을 했습니다." }
    ]
  },
  {
    id: "L5-167",
    word: "peruse",
    meaning: "정독하다, 숙독하다",
    examples: [
      { en: "Please peruse the contract carefully before signing.", kr: "서명하기 전에 계약서를 주의 깊게 정독해 주세요." },
      { en: "He spent the afternoon perusing old maps in the library.", kr: "그는 오후를 도서관에서 오래된 지도들을 숙독하며 보냈습니다." }
    ]
  },
  {
    id: "L5-168",
    word: "philippic",
    meaning: "맹렬한 비난 연설",
    examples: [
      { en: "The congressman's philippic against the opposition was broadcast nationwide.", kr: "그 국회의원의 야당에 대한 맹렬한 비난 연설은 전국적으로 방송되었습니다." },
      { en: "The column was a scathing philippic against corporate greed.", kr: "그 칼럼은 기업 탐욕에 대한 신랄한 맹렬한 비난 연설이었습니다." }
    ]
  },
  {
    id: "L5-169",
    word: "phlegmatic",
    meaning: "침착한, 무감정한",
    examples: [
      { en: "He maintained a phlegmatic attitude throughout the crisis.", kr: "그는 위기 내내 침착한 태도를 유지했습니다." },
      { en: "Her phlegmatic response suggested she was not easily rattled.", kr: "그녀의 무감정한 반응은 그녀가 쉽게 동요하지 않음을 시사했습니다." }
    ]
  },
  {
    id: "L5-170",
    word: "plaintive",
    meaning: "구슬픈, 애처로운",
    examples: [
      { en: "The dog let out a plaintive howl after being left alone.", kr: "개는 혼자 남겨진 후 구슬픈 울음소리를 냈습니다." },
      { en: "We listened to the plaintive melody of the folk song.", kr: "우리는 그 민요의 애처로운 멜로디를 들었습니다." }
    ]
  },
  {
    id: "L5-171",
    word: "plethora",
    meaning: "과다, 과잉",
    examples: [
      { en: "The menu offered a plethora of dessert options.", kr: "메뉴는 과다한 디저트 옵션들을 제공했습니다." },
      { en: "A plethora of confusing rules made the game impossible to play.", kr: "혼란스러운 규칙들의 과다가 그 게임을 하는 것을 불가능하게 만들었습니다." }
    ]
  },
  {
    id: "L5-172",
    word: "polemical",
    meaning: "논쟁적인, 격렬하게 비판하는",
    examples: [
      { en: "The article was highly polemical and sparked immediate controversy.", kr: "그 기사는 매우 논쟁적이었고 즉각적인 논란을 촉발했습니다." },
      { en: "He is known for his sharp, polemical writing style.", kr: "그는 그의 날카롭고 격렬하게 비판하는 글쓰기 스타일로 알려져 있습니다." }
    ]
  },
  {
    id: "L5-173",
    word: "prodigious",
    meaning: "엄청난, 굉장한",
    examples: [
      { en: "The project required a prodigious amount of capital and labor.", kr: "그 프로젝트는 엄청난 양의 자본과 노동을 필요로 했습니다." },
      { en: "She showed a prodigious talent for mathematics from a young age.", kr: "그녀는 어린 나이부터 수학에 대한 굉장한 재능을 보여주었습니다." }
    ]
  },
  {
    id: "L5-174",
    word: "proscribe",
    meaning: "금지하다, 추방하다",
    examples: [
      { en: "The law proscribes the use of certain chemicals in food processing.", kr: "그 법은 식품 가공에서 특정 화학 물질의 사용을 금지합니다." },
      { en: "The university proscribed the student group for violating ethical rules.", kr: "그 대학은 윤리 규칙 위반으로 그 학생 그룹을 추방했습니다." }
    ]
  },
  {
    id: "L5-175",
    word: "propensity",
    meaning: "성향, 경향",
    examples: [
      { en: "He has a natural propensity to exaggerate his achievements.", kr: "그는 자신의 성과를 과장하는 타고난 성향이 있습니다." },
      { en: "The study analyzed the human propensity for risk-taking.", kr: "그 연구는 위험 감수를 향한 인간의 성향을 분석했습니다." }
    ]
  },
  {
    id: "L5-176",
    word: "propitiate",
    meaning: "달래다, 비위를 맞추다",
    examples: [
      { en: "They offered a sacrifice to propitiate the angry gods.", kr: "그들은 노한 신들의 비위를 맞추기 위해 희생 제물을 바쳤습니다." },
      { en: "He tried to propitiate his boss by offering to take on extra work.", kr: "그는 추가 업무를 맡겠다고 제안하여 상사를 달래려고 노력했습니다." }
    ]
  },
  {
    id: "L5-177",
    word: "pundit",
    meaning: "전문가, 권위자",
    examples: [
      { en: "The news program featured a panel of political pundits.", kr: "그 뉴스 프로그램은 정치 전문가 패널을 특징으로 했습니다." },
      { en: "He is regarded as a leading pundit in the field of cybersecurity.", kr: "그는 사이버 보안 분야의 선도적인 권위자로 간주됩니다." }
    ]
  },
  {
    id: "L5-178",
    word: "pusillanimous",
    meaning: "소심한, 겁 많은",
    examples: [
      { en: "The general was criticized for his pusillanimous decision to retreat.", kr: "그 장군은 후퇴하려는 소심한 결정으로 비판받았습니다." },
      { en: "The politician made a pusillanimous attempt to avoid the controversial question.", kr: "그 정치인은 논란의 질문을 피하려는 겁 많은 시도를 했습니다." }
    ]
  },
  {
    id: "L5-179",
    word: "quell",
    meaning: "진압하다, 가라앉히다",
    examples: [
      { en: "The police were called in to quell the student protest.", kr: "경찰은 학생 시위를 진압하기 위해 호출되었습니다." },
      { en: "A simple gesture was enough to quell her rising fears.", kr: "간단한 몸짓이 그녀의 커져가는 두려움을 가라앉히기에 충분했습니다." }
    ]
  },
  {
    id: "L5-180",
    word: "quixotic",
    meaning: "돈키호테식의, 비현실적인",
    examples: [
      { en: "His quixotic quest to eliminate all debt in the world was impractical.", kr: "세상의 모든 빚을 없애려는 그의 돈키호테식 탐구는 비현실적이었습니다." },
      { en: "The board dismissed the proposal as a quixotic fantasy.", kr: "이사회는 그 제안을 비현실적인 환상으로 일축했습니다." }
    ]
  },
  {
    id: "L5-181",
    word: "rapacious",
    meaning: "탐욕스러운, 강탈하는",
    examples: [
      { en: "The rapacious landlords demanded exorbitant rent increases.", kr: "그 탐욕스러운 집주인들은 엄청난 임대료 인상을 요구했습니다." },
      { en: "The company was accused of rapacious exploitation of natural resources.", kr: "그 회사는 천연자원의 강탈적인 착취 혐의로 고발되었습니다." }
    ]
  },
  {
    id: "L5-182",
    word: "rapacity",
    meaning: "탐욕, 강탈",
    examples: [
      { en: "The downfall of the regime was rooted in the rapacity of its leaders.", kr: "그 정권의 몰락은 지도자들의 탐욕에 뿌리를 두고 있었습니다." },
      { en: "His insatiable rapacity for wealth led to his ruin.", kr: "그의 채울 수 없는 부에 대한 탐욕은 그를 파멸로 이끌었습니다." }
    ]
  },
  {
    id: "L5-183",
    word: "rationalize",
    meaning: "합리화하다",
    examples: [
      { en: "He tried to rationalize his impulsive spending by calling it a necessary expense.", kr: "그는 충동적인 지출을 필요 경비라고 부르며 합리화하려고 노력했습니다." },
      { en: "It is hard to rationalize an unethical decision.", kr: "비윤리적인 결정을 합리화하기는 어렵습니다." }
    ]
  },
  {
    id: "L5-184",
    word: "rebuttal",
    meaning: "반박, 항변",
    examples: [
      { en: "The defendant's lawyer offered a powerful rebuttal to the prosecution's claims.", kr: "피고인의 변호사는 검찰 측 주장에 대한 강력한 반박을 제시했습니다." },
      { en: "The scientist prepared a detailed rebuttal to the criticism of her research.", kr: "그 과학자는 자신의 연구에 대한 비판에 상세한 항변을 준비했습니다." }
    ]
  },
  {
    id: "L5-185",
    word: "recluse",
    meaning: "은둔자",
    examples: [
      { en: "The famous author lived as a recluse in the remote countryside.", kr: "그 유명한 작가는 외딴 시골에서 은둔자로 살았습니다." },
      { en: "He became a recluse after retiring from public life.", kr: "그는 공직에서 은퇴한 후 은둔자가 되었습니다." }
    ]
  },
  {
    id: "L5-186",
    word: "remorse",
    meaning: "후회, 양심의 가책",
    examples: [
      { en: "He showed no remorse for the damage he had caused.", kr: "그는 자신이 초래한 피해에 대해 아무런 후회도 보이지 않았습니다." },
      { en: "A deep sense of remorse finally led him to confess.", kr: "깊은 양심의 가책이 마침내 그를 고백하게 했습니다." }
    ]
  },
  {
    id: "L5-187",
    word: "repartee",
    meaning: "재치 있는 응답, 말재주",
    examples: [
      { en: "The dinner conversation was lively, full of witty repartee.", kr: "저녁 식사 대화는 재치 있는 응답으로 가득 차 활기찼습니다." },
      { en: "The comedian's quick repartee made him a favorite on talk shows.", kr: "그 코미디언의 빠른 말재주는 그를 토크쇼에서 인기 있게 만들었습니다." }
    ]
  },
  {
    id: "L5-188",
    word: "reprehensible",
    meaning: "비난받을 만한",
    examples: [
      { en: "His behavior was utterly reprehensible and unacceptable.", kr: "그의 행동은 전적으로 비난받을 만하고 용납될 수 없었습니다." },
      { en: "The company's reprehensible safety record led to severe fines.", kr: "그 회사의 비난받을 만한 안전 기록은 심각한 벌금으로 이어졌습니다." }
    ]
  },
  {
    id: "L5-189",
    word: "reprove",
    meaning: "꾸짖다, 책망하다",
    examples: [
      { en: "The manager had to reprove the employee for constant tardiness.", kr: "매니저는 끊임없는 지각 때문에 직원을 꾸짖어야 했습니다." },
      { en: "I gently reproved the child for drawing on the walls.", kr: "나는 벽에 그림을 그린 아이를 부드럽게 책망했습니다." }
    ]
  },
  {
    id: "L5-190",
    word: "rescind",
    meaning: "철회하다, 폐지하다",
    examples: [
      { en: "The board voted to rescind the highly unpopular new policy.", kr: "이사회는 매우 인기 없는 새 정책을 철회하기 위해 투표했습니다." },
      { en: "The university may rescind the degree if plagiarism is proven.", kr: "표절이 증명되면 대학은 학위를 폐지할 수 있습니다." }
    ]
  },
  {
    id: "L5-191",
    word: "resolute",
    meaning: "단호한, 확고한",
    examples: [
      { en: "She remained resolute in her commitment to the truth.", kr: "그녀는 진실에 대한 자신의 헌신에 단호한 태도를 유지했습니다." },
      { en: "The leader showed resolute determination in the face of the challenge.", kr: "그 지도자는 도전에 직면하여 확고한 결단력을 보여주었습니다." }
    ]
  },
  {
    id: "L5-192",
    word: "revere",
    meaning: "존경하다, 숭배하다",
    examples: [
      { en: "The community continues to revere the founding fathers of the town.", kr: "그 공동체는 마을의 설립자들을 계속 존경합니다." },
      { en: "Ancient cultures often revere the mountains as sacred places.", kr: "고대 문화들은 종종 산을 신성한 장소로 숭배합니다." }
    ]
  },
  {
    id: "L5-193",
    word: "rhetoric",
    meaning: "수사학, 미사여구",
    examples: [
      { en: "His speech was full of inspiring rhetoric but lacked practical solutions.", kr: "그의 연설은 영감을 주는 수사학으로 가득했지만 실질적인 해결책은 부족했습니다." },
      { en: "The power of rhetoric can sway public opinion easily.", kr: "수사학의 힘은 대중의 의견을 쉽게 흔들 수 있습니다." }
    ]
  },
  {
    id: "L5-194",
    word: "rife",
    meaning: "가득한, 만연한",
    examples: [
      { en: "The documents were rife with errors and contradictions.", kr: "그 문서들은 오류와 모순으로 가득했습니다." },
      { en: "The novel describes a city rife with corruption.", kr: "그 소설은 부패가 만연한 도시를 묘사합니다." }
    ]
  },
  {
    id: "L5-195",
    word: "rudimentary",
    meaning: "기본적인, 초보적인",
    examples: [
      { en: "He only has a rudimentary knowledge of the subject.", kr: "그는 그 주제에 대해 단지 기본적인 지식만 가지고 있습니다." },
      { en: "The early versions of the software were quite rudimentary.", kr: "그 소프트웨어의 초기 버전들은 꽤 초보적이었습니다." }
    ]
  },
  {
    id: "L5-196",
    word: "sally",
    meaning: "돌격, 재치 있는 말",
    examples: [
      { en: "The besieged troops attempted a surprise sally out of the castle.", kr: "포위된 군대는 성 밖으로 깜짝 돌격을 시도했습니다." },
      { en: "His quick sally into the conversation made everyone laugh.", kr: "그의 대화 속으로의 재치 있는 말은 모두를 웃게 만들었습니다." }
    ]
  },
  {
    id: "L5-197",
    word: "sanction",
    meaning: "승인, 제재",
    examples: [
      { en: "The plan requires formal sanction from the board.", kr: "그 계획은 이사회로부터 공식적인 승인을 필요로 합니다." },
      { en: "The country faces economic sanctions due to its nuclear program.", kr: "그 나라는 핵 프로그램 때문에 경제 제재에 직면했습니다." }
    ]
  },
  {
    id: "L5-198",
    word: "scrutiny",
    meaning: "정밀 조사, 자세히 살펴봄",
    examples: [
      { en: "The politician's finances came under intense public scrutiny.", kr: "그 정치인의 재정은 강도 높은 대중의 정밀 조사를 받게 되었습니다." },
      { en: "Every detail was subjected to close scrutiny by the auditor.", kr: "모든 세부 사항이 감사관의 자세히 살펴봄에 노출되었습니다." }
    ]
  },
  {
    id: "L5-199",
    word: "skeptical",
    meaning: "회의적인",
    examples: [
      { en: "I am skeptical about the promises of quick returns.", kr: "저는 빠른 수익의 약속에 대해 회의적입니다." },
      { en: "The board was skeptical of the new manager's ambitious plan.", kr: "이사회는 새 관리자의 야심 찬 계획에 회의적이었습니다." }
    ]
  },
  {
    id: "L5-200",
    word: "solicitous",
    meaning: "염려하는, 걱정하는",
    examples: [
      { en: "The solicitous inquiries from his colleagues were comforting.", kr: "동료들의 염려하는 문의는 위안이 되었습니다." },
      { en: "She was solicitous about her mother's health.", kr: "그녀는 어머니의 건강에 대해 걱정했습니다." }
    ]
  }
];

const wordsLevel5_Part3 = [
  {
    id: "L5-201",
    word: "sanctimonious",
    meaning: "독실한 척하는, 위선적인",
    examples: [
      { en: "He gave a sanctimonious lecture on morality while ignoring his own faults.", kr: "그는 자신의 잘못은 무시한 채 도덕에 대해 위선적인 훈계를 했습니다." },
      { en: "I was annoyed by the politician's sanctimonious tone of false piety.", kr: "저는 그 정치인의 독실한 척하는 어조에 짜증이 났습니다." }
    ]
  },
  {
    id: "L5-202",
    word: "sardonic",
    meaning: "냉소적인, 비꼬는",
    examples: [
      { en: "The critic delivered a sardonic review that mocked the film's poor script.", kr: "그 비평가는 영화의 형편없는 각본을 조롱하는 냉소적인 평론을 했습니다." },
      { en: "He responded to the naive question with a sardonic smile.", kr: "그는 순진한 질문에 비꼬는 미소로 응답했습니다." }
    ]
  },
  {
    id: "L5-203",
    word: "scurrilous",
    meaning: "상스러운, 욕설이 담긴",
    examples: [
      { en: "The tabloid published a scurrilous attack on the former CEO.", kr: "그 타블로이드지는 전직 최고 경영자에 대한 상스러운 공격을 보도했습니다." },
      { en: "He was warned against using scurrilous language in the workplace.", kr: "그는 직장에서 욕설이 담긴 언어를 사용하지 말라는 경고를 받았습니다." }
    ]
  },
  {
    id: "L5-204",
    word: "sedulous",
    meaning: "근면한, 끈기 있는",
    examples: [
      { en: "She achieved her goals through sedulous effort, not luck.", kr: "그녀는 운이 아닌, 끈기 있는 노력을 통해 목표를 달성했습니다." },
      { en: "The sedulous student spent every weekend studying complex theories.", kr: "그 근면한 학생은 매주 주말마다 복잡한 이론을 공부했습니다." }
    ]
  },
  {
    id: "L5-205",
    word: "solipsism",
    meaning: "유아론, 자기중심주의",
    examples: [
      { en: "His self-centered philosophy often bordered on intellectual solipsism.", kr: "그의 자기중심적인 철학은 종종 지적인 유아론에 가까웠습니다." },
      { en: "The character’s belief that only he exists is an extreme form of solipsism.", kr: "그 등장인물의 자신만이 존재한다는 믿음은 유아론의 극단적인 형태입니다." }
    ]
  },
  {
    id: "L5-206",
    word: "soporific",
    meaning: "잠이 오게 하는",
    examples: [
      { en: "The monotonous tone of the lecture had a soporific effect on the class.", kr: "그 강의의 단조로운 어조는 수업에 잠이 오게 하는 효과를 주었습니다." },
      { en: "The old remedy uses herbs with soporific qualities.", kr: "그 오래된 치료법은 수면을 유도하는(잠이 오게 하는) 성질을 가진 허브를 사용합니다." }
    ]
  },
  {
    id: "L5-207",
    word: "sophistry",
    meaning: "궤변",
    examples: [
      { en: "The lawyer won the case through clever sophistry rather than truth.", kr: "그 변호사는 진실보다는 영리한 궤변을 통해 사건에서 이겼습니다." },
      { en: "We must distinguish between genuine logic and mere political sophistry.", kr: "우리는 진정한 논리와 단순한 정치적 궤변을 구별해야 합니다." }
    ]
  },
  {
    id: "L5-208",
    word: "specious",
    meaning: "겉만 번지르르한, 허울 좋은",
    examples: [
      { en: "The product was advertised with specious claims of guaranteed results.", kr: "그 제품은 결과 보장이라는 허울 좋은 주장으로 광고되었습니다." },
      { en: "His specious argument sounded convincing but was fundamentally flawed.", kr: "그의 겉만 번지르르한 주장은 설득력 있게 들렸지만 근본적으로 결함이 있었습니다." }
    ]
  },
  {
    id: "L5-209",
    word: "spurious",
    meaning: "가짜의, 위조의",
    examples: [
      { en: "The court dismissed the documents as spurious evidence.", kr: "법원은 그 문서들을 가짜 증거로 기각했습니다." },
      { en: "He was criticized for making spurious claims about his ancestry.", kr: "그는 자신의 혈통에 대해 위조된 주장을 한 혐의로 비판받았습니다." }
    ]
  },
  {
    id: "L5-210",
    word: "stolid",
    meaning: "둔감한, 무신경한",
    examples: [
      { en: "The stolid guard remained completely motionless throughout the shift.", kr: "그 둔감한 경비원은 근무 시간 내내 완전히 움직이지 않고 남아 있었습니다." },
      { en: "His stolid reaction to the good news surprised everyone.", kr: "그의 무신경한 좋은 소식에 대한 반응은 모두를 놀라게 했습니다." }
    ]
  },
  {
    id: "L5-211",
    word: "subliminal",
    meaning: "잠재의식적인",
    examples: [
      { en: "The advertisement contained subliminal messages designed to influence consumer choice.", kr: "그 광고는 소비자 선택에 영향을 미치도록 고안된 잠재의식적인 메시지를 포함했습니다." },
      { en: "He felt a vague, subliminal fear that he couldn't explain.", kr: "그는 설명할 수 없는 모호하고 잠재의식적인 두려움을 느꼈습니다." }
    ]
  },
  {
    id: "L5-212",
    word: "subvert",
    meaning: "전복시키다, 뒤엎다",
    examples: [
      { en: "The hacker group sought to subvert the established security protocols.", kr: "그 해커 그룹은 확립된 보안 규약을 전복시키려 했습니다." },
      { en: "The film was criticized for trying to subvert traditional values.", kr: "그 영화는 전통적인 가치를 뒤엎으려고 시도했다는 비판을 받았습니다." }
    ]
  },
  {
    id: "L5-213",
    word: "superfluous",
    meaning: "불필요한, 과잉의",
    examples: [
      { en: "The manager cut all superfluous spending from the budget.", kr: "관리자는 예산에서 모든 불필요한 지출을 삭감했습니다." },
      { en: "Adding an extra chapter to the book would be completely superfluous.", kr: "책에 장을 하나 더 추가하는 것은 완전히 불필요할 것입니다." }
    ]
  },
  {
    id: "L5-214",
    word: "surfeit",
    meaning: "과다, 지나친 양",
    examples: [
      { en: "The team suffered from a surfeit of advice but a paucity of practical help.", kr: "그 팀은 지나친 양의 조언은 받았지만, 실질적인 도움은 부족했습니다." },
      { en: "A surfeit of rich food made him feel sick.", kr: "지나친 양의 기름진 음식은 그를 아프게 만들었습니다." }
    ]
  },
  {
    id: "L5-215",
    word: "surreptitious",
    meaning: "은밀한, 몰래 하는",
    examples: [
      { en: "They held a surreptitious meeting in the back room to discuss the merger.", kr: "그들은 합병을 논의하기 위해 뒷방에서 은밀한 회의를 가졌습니다." },
      { en: "He made a surreptitious attempt to copy the exam answers.", kr: "그는 시험 답안을 베끼려는 몰래 하는 시도를 했습니다." }
    ]
  },
  {
    id: "L5-216",
    word: "sycophant",
    meaning: "아첨꾼",
    examples: [
      { en: "The celebrity was surrounded by sycophants who praised his every move.", kr: "그 유명인사는 그의 모든 움직임을 칭찬하는 아첨꾼들에게 둘러싸여 있었습니다." },
      { en: "The director preferred honest critics to sycophants.", kr: "그 감독은 아첨꾼들보다 정직한 비평가들을 선호했습니다." }
    ]
  },
  {
    id: "L5-217",
    word: "tacit",
    meaning: "암묵적인",
    examples: [
      { en: "There was a tacit agreement to ignore the past conflict.", kr: "과거의 갈등을 무시하기로 하는 암묵적인 합의가 있었습니다." },
      { en: "His silence gave a tacit approval to the plan.", kr: "그의 침묵은 계획에 대한 암묵적인 승인을 주었습니다." }
    ]
  },
  {
    id: "L5-218",
    word: "taciturn",
    meaning: "말수가 적은",
    examples: [
      { en: "The taciturn man rarely spoke during the long dinner.", kr: "그 말수가 적은 남자는 긴 저녁 식사 동안 거의 말하지 않았습니다." },
      { en: "She is a shy and taciturn person.", kr: "그녀는 수줍고 말수가 적은 사람입니다." }
    ]
  },
  {
    id: "L5-219",
    word: "tawdry",
    meaning: "야한, 저속한",
    examples: [
      { en: "The carnival stand was decorated with tawdry, cheap prizes.", kr: "그 카니발 매점은 야하고 값싼 상품들로 장식되어 있었습니다." },
      { en: "The movie was criticized for its tawdry plot.", kr: "그 영화는 저속한 줄거리로 비판받았습니다." }
    ]
  },
  {
    id: "L5-220",
    word: "temerity",
    meaning: "무모함, 만용",
    examples: [
      { en: "He had the temerity to challenge the world champion.", kr: "그는 세계 챔피언에게 도전하는 무모함(만용)을 부렸습니다." },
      { en: "I was shocked by his temerity in lying to the police.", kr: "저는 경찰에게 거짓말을 하는 그의 만용에 충격을 받았습니다." }
    ]
  },
  {
    id: "L5-221",
    word: "tenuous",
    meaning: "미약한, 희박한",
    examples: [
      { en: "The connection between the two events is tenuous at best.", kr: "두 사건 사이의 연관성은 기껏해야 미약합니다." },
      { en: "The mountain climber clung to the tenuous hold on the rock face.", kr: "그 등반가는 암벽에서 미약한 쥐는 힘에 매달렸습니다." }
    ]
  },
  {
    id: "L5-222",
    word: "tirade",
    meaning: "장황한 비난 연설",
    examples: [
      { en: "The customer launched into a tirade about the poor service.", kr: "그 고객은 형편없는 서비스에 대해 장황한 비난 연설을 시작했습니다." },
      { en: "The politician's speech was more a tirade than a policy announcement.", kr: "그 정치인의 연설은 정책 발표라기보다는 비난 연설에 가까웠습니다." }
    ]
  },
  {
    id: "L5-223",
    word: "torpor",
    meaning: "무기력, 활기 없음",
    examples: [
      { en: "The economic crisis caused a general torpor in the business sector.", kr: "경제 위기는 기업 부문에 전반적인 무기력을 야기했습니다." },
      { en: "The hot weather led to a state of mental torpor.", kr: "더운 날씨는 정신적 활기 없음(무기력) 상태로 이어졌습니다." }
    ]
  },
  {
    id: "L5-224",
    word: "tout",
    meaning: "크게 선전하다, 칭찬하다",
    examples: [
      { en: "The company constantly touts its product as the best in the market.", kr: "그 회사는 끊임없이 자신의 제품을 시장 최고라고 크게 선전합니다." },
      { en: "Critics tout the young author as the voice of a new generation.", kr: "비평가들은 그 젊은 작가를 새 세대의 목소리라고 칭찬합니다." }
    ]
  },
  {
    id: "L5-225",
    word: "tractable",
    meaning: "다루기 쉬운, 유순한",
    examples: [
      { en: "The once rebellious team became surprisingly tractable under the new manager.", kr: "한때 반항적이었던 팀은 새 관리자 아래서 놀랍도록 유순해졌습니다." },
      { en: "The new material is more tractable than the old one.", kr: "새로운 재료는 이전 재료보다 다루기 쉽습니다." }
    ]
  },
  {
    id: "L5-226",
    word: "transient",
    meaning: "일시적인, 덧없는",
    examples: [
      { en: "The beauty of the cherry blossoms is famously transient.", kr: "벚꽃의 아름다움은 덧없는 것으로 유명합니다." },
      { en: "The city has a large population of transient workers.", kr: "그 도시는 많은 일시적인 노동자 인구를 가지고 있습니다." }
    ]
  },
  {
    id: "L5-227",
    word: "travesty",
    meaning: "서투른 모방, 희화화",
    examples: [
      { en: "The poorly organized trial was a travesty of justice.", kr: "엉성하게 조직된 재판은 정의의 서투른 모방(왜곡)이었습니다." },
      { en: "The film was a travesty of the original great novel.", kr: "그 영화는 원래 위대한 소설의 희화화였습니다." }
    ]
  },
  {
    id: "L5-228",
    word: "trenchant",
    meaning: "정곡을 찌르는, 날카로운",
    examples: [
      { en: "She delivered a trenchant analysis of the company's failures.", kr: "그녀는 회사의 실패에 대한 정곡을 찌르는 분석을 전달했습니다." },
      { en: "The editorial contained trenchant criticism of the government's policies.", kr: "그 사설은 정부 정책에 대한 날카로운 비판을 담고 있었습니다." }
    ]
  },
  {
    id: "L5-229",
    word: "truculent",
    meaning: "호전적인, 싸우기 좋아하는",
    examples: [
      { en: "The truculent customer refused to leave the store and started shouting.", kr: "그 호전적인 고객은 가게를 떠나기를 거부하고 소리치기 시작했습니다." },
      { en: "The two sides engaged in a truculent exchange of insults.", kr: "양측은 모욕이 오가는 싸우기 좋아하는 설전에 참여했습니다." }
    ]
  },
  {
    id: "L5-230",
    word: "truncate",
    meaning: "길이를 자르다, 줄이다",
    examples: [
      { en: "The editor decided to truncate the article due to space limitations.", kr: "편집자는 공간 제한 때문에 기사의 길이를 자르기로 결정했습니다." },
      { en: "The full performance was truncated for the television broadcast.", kr: "전체 공연은 텔레비전 방송을 위해 길이가 잘렸습니다." }
    ]
  },
  {
    id: "L5-231",
    word: "ubiquitous",
    meaning: "어디에나 있는",
    examples: [
      { en: "The company's logo is ubiquitous in major cities.", kr: "그 회사의 로고는 주요 도시에서 어디에나 있습니다." },
      { en: "Smartphones have become an ubiquitous part of modern life.", kr: "스마트폰은 현대 생활의 어디에나 있는 부분이 되었습니다." }
    ]
  },
  {
    id: "L5-232",
    word: "umbrage",
    meaning: "불쾌감, 분개",
    examples: [
      { en: "He took umbrage at the suggestion that he was incompetent.", kr: "그는 자신이 무능하다는 제안에 불쾌감을 느꼈습니다." },
      { en: "Her comments caused great umbrage among her conservative colleagues.", kr: "그녀의 발언은 그녀의 보수적인 동료들 사이에 큰 분개를 일으켰습니다." }
    ]
  },
  {
    id: "L5-233",
    word: "unctuous",
    meaning: "번지르르한, 기름진",
    examples: [
      { en: "The salesman's unctuous manner made the customers suspicious.", kr: "그 세일즈맨의 번지르르한 태도는 고객들을 의심하게 만들었습니다." },
      { en: "I dislike his unctuous way of complimenting the boss.", kr: "저는 상사에게 아첨하는 그의 기름진 방식을 싫어합니다." }
    ]
  },
  {
    id: "L5-234",
    word: "unscrupulous",
    meaning: "부도덕한, 무원칙한",
    examples: [
      { en: "An unscrupulous dealer tried to sell me a fake product.", kr: "부도덕한 상인이 나에게 가짜 제품을 팔려고 했습니다." },
      { en: "The company was shut down due to its unscrupulous business practices.", kr: "그 회사는 무원칙한 사업 관행 때문에 폐쇄되었습니다." }
    ]
  },
  {
    id: "L5-235",
    word: "untenable",
    meaning: "옹호할 수 없는, 지탱할 수 없는",
    examples: [
      { en: "The argument was legally untenable and easily refuted.", kr: "그 주장은 법적으로 옹호할 수 없었고 쉽게 반박되었습니다." },
      { en: "The financial burden made the business model entirely untenable.", kr: "재정적 부담은 그 사업 모델을 완전히 지탱할 수 없게 만들었습니다." }
    ]
  },
  {
    id: "L5-236",
    word: "upbraid",
    meaning: "나무라다, 비난하다",
    examples: [
      { en: "The principal upbraided the student for vandalizing the school property.", kr: "교장은 학교 재산을 파손한 학생을 나무랐습니다." },
      { en: "She upbraided herself for making such a careless mistake.", kr: "그녀는 그렇게 부주의한 실수를 한 자신을 비난했습니다." }
    ]
  },
  {
    id: "L5-237",
    word: "usurp",
    meaning: "빼앗다, 강탈하다",
    examples: [
      { en: "The ambitious duke attempted to usurp the throne from the rightful king.", kr: "그 야심 찬 공작은 정당한 왕으로부터 왕좌를 빼앗으려고 시도했습니다." },
      { en: "The military leader usurped power from the civilian government.", kr: "그 군사 지도자는 민간 정부로부터 권력을 강탈했습니다." }
    ]
  },
  {
    id: "L5-238",
    word: "vacillate",
    meaning: "흔들리다, 망설이다",
    examples: [
      { en: "The market continues to vacillate in response to global news.", kr: "시장은 글로벌 뉴스에 반응하여 계속 흔들리고 있습니다." },
      { en: "He tends to vacillate when asked to choose between two options.", kr: "그는 두 가지 옵션 중에서 선택하라는 요청을 받을 때 망설이는 경향이 있습니다." }
    ]
  },
  {
    id: "L5-239",
    word: "vapid",
    meaning: "지루한, 김빠진",
    examples: [
      { en: "The conversation was utterly vapid, focusing on trivial gossip.", kr: "그 대화는 사소한 가십에만 초점을 맞추어 완전히 지루했습니다." },
      { en: "Critics dismissed the new movie as a vapid piece of cinema.", kr: "비평가들은 새 영화를 김빠진 영화 작품이라고 일축했습니다." }
    ]
  },
  {
    id: "L5-240",
    word: "vehement",
    meaning: "열렬한, 맹렬한",
    examples: [
      { en: "The proposal met with vehement opposition from the local community.", kr: "그 제안은 지역 사회로부터 열렬한 반대에 부딪혔습니다." },
      { en: "He delivered a vehement denial of all the accusations.", kr: "그는 모든 비난에 대해 맹렬한 부인을 전달했습니다." }
    ]
  },
  {
    id: "L5-241",
    word: "venal",
    meaning: "매수되기 쉬운, 부패한",
    examples: [
      { en: "The police uncovered a network of venal officials accepting bribes.", kr: "경찰은 뇌물을 받는 부패한 공무원들의 네트워크를 밝혀냈습니다." },
      { en: "The political system was criticized for being increasingly venal.", kr: "그 정치 시스템은 점점 더 매수되기 쉽다는 비판을 받았습니다." }
    ]
  },
  {
    id: "L5-242",
    word: "venerable",
    meaning: "존경할 만한, 숭고한",
    examples: [
      { en: "The venerable professor retired after decades of service to the university.", kr: "그 존경할 만한 교수는 대학에 수십 년 봉사한 후 은퇴했습니다." },
      { en: "The ancient monument is a venerable place of history.", kr: "그 고대 기념비는 숭고한 역사의 장소입니다." }
    ]
  },
  {
    id: "L5-243",
    word: "veracity",
    meaning: "진실성, 정확성",
    examples: [
      { en: "The committee questioned the veracity of the witness's testimony.", kr: "위원회는 증인의 증언의 진실성에 의문을 제기했습니다." },
      { en: "The study's results were accepted due to their high veracity.", kr: "그 연구의 결과는 높은 정확성 때문에 받아들여졌습니다." }
    ]
  },
  {
    id: "L5-244",
    word: "verbose",
    meaning: "장황한, 말이 많은",
    examples: [
      { en: "The report was overly verbose, repeating the same points multiple times.", kr: "그 보고서는 같은 요점을 여러 번 반복하여 지나치게 장황했습니다." },
      { en: "The professor's lecture style is often too verbose.", kr: "그 교수의 강의 스타일은 종종 너무 말이 많습니다." }
    ]
  },
  {
    id: "L5-245",
    word: "verisimilitude",
    meaning: "진실 같음, 사실성",
    examples: [
      { en: "The detailed costumes added verisimilitude to the historical film.", kr: "그 상세한 의상은 역사 영화에 사실성을 더했습니다." },
      { en: "The novel lacked verisimilitude because the characters acted unrealistically.", kr: "그 소설은 인물들이 비현실적으로 행동했기 때문에 진실 같음이 부족했습니다." }
    ]
  },
  {
    id: "L5-246",
    word: "vicarious",
    meaning: "대리의, 간접적인",
    examples: [
      { en: "She gained vicarious pleasure from watching her favorite team win.", kr: "그녀는 자신이 가장 좋아하는 팀이 이기는 것을 보면서 대리적인 즐거움을 얻었습니다." },
      { en: "Reading travel blogs offers a vicarious experience of exploring the world.", kr: "여행 블로그를 읽는 것은 세상을 탐험하는 간접적인 경험을 제공합니다." }
    ]
  },
  {
    id: "L5-247",
    word: "vilify",
    meaning: "비방하다, 헐뜯다",
    examples: [
      { en: "The press sought to vilify the unpopular former mayor.", kr: "언론은 인기 없는 전 시장을 비방하려고 했습니다." },
      { en: "It is unfair to vilify someone based on a single mistake.", kr: "단 하나의 실수 때문에 누군가를 헐뜯는 것은 불공평합니다." }
    ]
  },
  {
    id: "L5-248",
    word: "vindictive",
    meaning: "앙심 깊은, 복수심 있는",
    examples: [
      { en: "He was accused of making a vindictive move against his business rival.", kr: "그는 자신의 사업 라이벌에게 앙심 깊은 행동을 했다는 비난을 받았습니다." },
      { en: "Her vindictive nature made it impossible for her to forgive betrayal.", kr: "그녀의 복수심 있는 천성은 그녀가 배신을 용서하는 것을 불가능하게 만들었습니다." }
    ]
  },
  {
    id: "L5-249",
    word: "virulent",
    meaning: "치명적인, 맹독성의",
    examples: [
      { en: "A virulent strain of the flu spread rapidly through the population.", kr: "독감의 치명적인 균주가 인구 전체에 빠르게 퍼졌습니다." },
      { en: "The debate was characterized by virulent personal attacks.", kr: "그 토론은 맹독성의 개인적인 공격들로 특징지어졌습니다." }
    ]
  },
  {
    id: "L5-250",
    word: "viscous",
    meaning: "끈적끈적한, 점성이 있는",
    examples: [
      { en: "Honey is a highly viscous liquid.", kr: "꿀은 매우 끈적끈적한 액체입니다." },
      { en: "The thick, viscous substance was difficult to pour.", kr: "그 두껍고 점성이 있는 물질은 붓기 어려웠습니다." }
    ]
  },
  {
    id: "L5-251",
    word: "vituperate",
    meaning: "욕설하다, 비난하다",
    examples: [
      { en: "The angry customer began to vituperate the service staff.", kr: "그 화난 고객은 서비스 직원들에게 욕설을 퍼붓기 시작했습니다." },
      { en: "He was warned not to vituperate his opponent in public.", kr: "그는 공개적으로 상대방을 비난하지 말라는 경고를 받았습니다." }
    ]
  },
  {
    id: "L5-252",
    word: "volatile",
    meaning: "변동성이 심한, 불안정한",
    examples: [
      { en: "The stock market remained volatile after the major news announcement.", kr: "주식 시장은 주요 뉴스 발표 후 변동성이 심한 상태를 유지했습니다." },
      { en: "He has a volatile temper that can flare up at any time.", kr: "그는 언제든지 폭발할 수 있는 불안정한 성질을 가지고 있습니다." }
    ]
  },
  {
    id: "L5-253",
    word: "wanton",
    meaning: "고의적인, 무자비한",
    examples: [
      { en: "The storm caused wanton destruction of property.", kr: "그 폭풍은 재산에 고의적인(극심한) 파괴를 야기했습니다." },
      { en: "His youthful indiscretions were just acts of wanton arrogance.", kr: "그의 젊은 날의 경솔한 행동은 단지 무자비한 오만의 행위였습니다." }
    ]
  },
  {
    id: "L5-254",
    word: "wistful",
    meaning: "애석해 하는, 생각에 잠긴",
    examples: [
      { en: "She looked wistful as she recalled her childhood home.", kr: "그녀는 어린 시절의 집을 회상하며 애석해 하는 듯 보였습니다." },
      { en: "The song has a wistful, melancholic melody.", kr: "그 노래는 생각에 잠긴 듯한, 우울한 멜로디를 가지고 있습니다." }
    ]
  },
  {
    id: "L5-255",
    word: "wry",
    meaning: "비꼬는, 씁쓸한",
    examples: [
      { en: "He gave a wry smile, acknowledging his own bad luck.", kr: "그는 자신의 불운을 인정하며 비꼬는 미소를 지었습니다." },
      { en: "The author is known for his dry, wry sense of humor.", kr: "그 작가는 그의 건조하고 씁쓸한 유머 감각으로 알려져 있습니다." }
    ]
  },
  {
    id: "L5-256",
    word: "xenophobia",
    meaning: "외국인 혐오증",
    examples: [
      { en: "The rise of nationalism often leads to xenophobia.", kr: "민족주의의 증가는 종종 외국인 혐오증으로 이어집니다." },
      { en: "The organization works to combat racism and xenophobia.", kr: "그 조직은 인종차별과 외국인 혐오증에 맞서 싸우기 위해 노력합니다." }
    ]
  },
  {
    id: "L5-257",
    word: "zenith",
    meaning: "정점, 절정",
    examples: [
      { en: "He reached the zenith of his career at age forty.", kr: "그는 40세에 경력의 정점에 도달했습니다." },
      { en: "The sun was at its zenith at noon.", kr: "태양은 정오에 그 절정에 있었습니다." }
    ]
  },
  {
    id: "L5-258",
    word: "acutely",
    meaning: "강렬하게, 예리하게",
    examples: [
      { en: "The loss of the contract was acutely felt by the entire team.", kr: "계약 상실은 팀 전체에 강렬하게 느껴졌습니다." },
      { en: "He is acutely aware of the risks involved in the investment.", kr: "그는 투자에 관련된 위험들을 예리하게 인식하고 있습니다." }
    ]
  },
  {
    id: "L5-259",
    word: "adequately",
    meaning: "적절하게, 충분히",
    examples: [
      { en: "The room was adequately heated for the cold weather.", kr: "그 방은 추운 날씨에 적절하게 난방되었습니다." },
      { en: "She was adequately prepared for the difficult exam.", kr: "그녀는 어려운 시험에 충분히 준비되어 있었습니다." }
    ]
  },
  {
    id: "L5-260",
    word: "adroitly",
    meaning: "솜씨 있게, 능숙하게",
    examples: [
      { en: "The politician adroitly deflected the difficult question.", kr: "그 정치인은 어려운 질문을 솜씨 있게 피했습니다." },
      { en: "She adroitly stitched the complex pattern onto the fabric.", kr: "그녀는 복잡한 패턴을 직물 위에 능숙하게 꿰매었습니다." }
    ]
  },
  {
    id: "L5-261",
    word: "allegedly",
    meaning: "주장하는 바에 의하면",
    examples: [
      { en: "He was allegedly involved in the cover-up.", kr: "그는 주장하는 바에 의하면 그 은폐에 연루되었습니다." },
      { en: "The document allegedly contains secret military plans.", kr: "그 문서는 주장하는 바에 의하면 비밀 군사 계획을 포함하고 있습니다." }
    ]
  },
  {
    id: "L5-262",
    word: "briefly",
    meaning: "간결하게, 짧게",
    examples: [
      { en: "The chairman spoke briefly about the company's future.", kr: "의장은 회사의 미래에 대해 간결하게 말했습니다." },
      { en: "I only saw her briefly in the hallway.", kr: "복도에서 그녀를 짧게(잠깐) 봤을 뿐입니다." }
    ]
  },
  {
    id: "L5-263",
    word: "cohesively",
    meaning: "응집력 있게, 일관성 있게",
    examples: [
      { en: "The team worked cohesively to meet the tight deadline.", kr: "그 팀은 촉박한 마감 기한을 맞추기 위해 응집력 있게 일했습니다." },
      { en: "The argument was presented cohesively and logically.", kr: "그 주장은 일관성 있고 논리적으로 제시되었습니다." }
    ]
  },
  {
    id: "L5-264",
    word: "conclusively",
    meaning: "결정적으로, 확실히",
    examples: [
      { en: "The evidence conclusively proved his innocence.", kr: "그 증거는 그의 무죄를 결정적으로 입증했습니다." },
      { en: "The study did not conclusively establish a link between the two factors.", kr: "그 연구는 두 요인 사이의 연관성을 확실히 확립하지 못했습니다." }
    ]
  },
  {
    id: "L5-265",
    word: "consequently",
    meaning: "결과적으로",
    examples: [
      { en: "The company cut costs; consequently, profits increased.", kr: "회사는 비용을 절감했습니다. 결과적으로, 수익이 증가했습니다." },
      { en: "He missed the train, and consequently, he was hours late.", kr: "그는 기차를 놓쳤고, 결과적으로 몇 시간 늦었습니다." }
    ]
  },
  {
    id: "L5-266",
    word: "currently",
    meaning: "현재",
    examples: [
      { en: "She is currently working on a new novel.", kr: "그녀는 현재 새로운 소설을 작업하고 있습니다." },
      { en: "The software is currently unavailable for download.", kr: "그 소프트웨어는 현재 다운로드가 불가능합니다." }
    ]
  },
  {
    id: "L5-267",
    word: "deftly",
    meaning: "능숙하게, 교묘하게",
    examples: [
      { en: "The magician deftly made the card disappear.", kr: "마술사는 카드를 능숙하게 사라지게 만들었습니다." },
      { en: "He deftly avoided answering the difficult question.", kr: "그는 어려운 질문에 대답하는 것을 교묘하게 피했습니다." }
    ]
  },
  {
    id: "L5-268",
    word: "delineately",
    meaning: "정확하게, 분명히",
    examples: [
      { en: "The map delineately marked the boundaries of the property.", kr: "그 지도는 재산의 경계를 정확하게 표시했습니다." },
      { en: "He spoke delineately about the scope of his responsibilities.", kr: "그는 자신의 책임 범위를 분명히 말했습니다." }
    ]
  },
  {
    id: "L5-269",
    word: "distinctly",
    meaning: "뚜렷하게, 명확하게",
    examples: [
      { en: "I distinctly remember meeting you at the conference last year.", kr: "저는 작년에 컨퍼런스에서 당신을 만났던 것을 뚜렷하게 기억합니다." },
      { en: "The results of the two experiments were distinctly different.", kr: "두 실험의 결과는 명확하게 달랐습니다." }
    ]
  },
  {
    id: "L5-270",
    word: "dubiously",
    meaning: "의심스럽게",
    examples: [
      { en: "He looked dubiously at the expiration date on the old milk carton.", kr: "그는 오래된 우유 곽의 유통기한을 의심스럽게 보았습니다." },
      { en: "The funds were obtained dubiously through several offshore accounts.", kr: "그 자금은 여러 역외 계좌를 통해 의심스럽게 획득되었습니다." }
    ]
  },
  {
    id: "L5-271",
    word: "equally",
    meaning: "동등하게",
    examples: [
      { en: "The profits were shared equally among the founders.", kr: "이익은 창립자들 사이에 동등하게 분배되었습니다." },
      { en: "She is equally skilled in both marketing and sales.", kr: "그녀는 마케팅과 영업 모두에 동등하게 숙련되어 있습니다." }
    ]
  },
  {
    id: "L5-272",
    word: "essentially",
    meaning: "본질적으로",
    examples: [
      { en: "The two proposals are essentially the same, just phrased differently.", kr: "두 제안은 단지 다르게 표현되었을 뿐, 본질적으로 동일합니다." },
      { en: "He is essentially a good person, despite his flaws.", kr: "그는 결점에도 불구하고 본질적으로 좋은 사람입니다." }
    ]
  },
  {
    id: "L5-273",
    word: "eventually",
    meaning: "결국, 마침내",
    examples: [
      { en: "After years of trying, he eventually succeeded in starting his own business.", kr: "수년간의 시도 끝에, 그는 결국 자신의 사업을 시작하는 데 성공했습니다." },
      { en: "The long argument eventually led to a compromise.", kr: "그 긴 논쟁은 마침내 타협으로 이어졌습니다." }
    ]
  },
  {
    id: "L5-274",
    word: "explicitly",
    meaning: "명시적으로, 명확하게",
    examples: [
      { en: "The terms of payment were explicitly stated in the contract.", kr: "지불 조건이 계약서에 명시적으로 명확하게 진술되었습니다." },
      { en: "He explicitly warned the team not to make the same mistake again.", kr: "그는 팀에게 같은 실수를 다시 하지 말라고 명확하게 경고했습니다." }
    ]
  },
  {
    id: "L5-275",
    word: "externally",
    meaning: "외부적으로",
    examples: [
      { en: "The damage appears externally to be minor, but the internal damage is severe.", kr: "피해는 외부적으로는 경미해 보이지만, 내부 손상은 심각합니다." },
      { en: "The company relies heavily on recruiting externally.", kr: "그 회사는 외부적으로 인력을 채용하는 것에 크게 의존합니다." }
    ]
  },
  {
    id: "L5-276",
    word: "feasibly",
    meaning: "실행 가능하게",
    examples: [
      { en: "Can the project be feasibly completed by the end of the year?", kr: "그 프로젝트는 연말까지 실행 가능하게 완료될 수 있습니까?" },
      { en: "We need to plan a schedule that is feasibly achievable.", kr: "우리는 실행 가능한 달성 가능한 일정을 계획해야 합니다." }
    ]
  },
  {
    id: "L5-277",
    word: "fundamentally",
    meaning: "근본적으로",
    examples: [
      { en: "The new system is fundamentally different from the old one.", kr: "새로운 시스템은 근본적으로 이전 시스템과 다릅니다." },
      { en: "They disagreed fundamentally on the purpose of the organization.", kr: "그들은 조직의 목적에 대해 근본적으로 의견이 달랐습니다." }
    ]
  },
  {
    id: "L5-278",
    word: "furthermore",
    meaning: "게다가, 더욱이",
    examples: [
      { en: "The product is expensive; furthermore, it is difficult to use.", kr: "그 제품은 비쌉니다. 게다가, 사용하기 어렵습니다." },
      { en: "She is highly qualified; furthermore, she has relevant experience.", kr: "그녀는 자격이 충분합니다. 더욱이, 관련 경험도 있습니다." }
    ]
  },
  {
    id: "L5-279",
    word: "hence",
    meaning: "그러므로, 따라서",
    examples: [
      { en: "The experiment failed; hence, the hypothesis must be revised.", kr: "실험이 실패했습니다. 그러므로, 가설은 수정되어야 합니다." },
      { en: "He is moving to Paris; hence, he is learning French.", kr: "그는 파리로 이사하고 있습니다. 따라서, 그는 프랑스어를 배우고 있습니다." }
    ]
  },
  {
    id: "L5-280",
    word: "inadvertently",
    meaning: "무심코, 부주의로",
    examples: [
      { en: "He inadvertently revealed the secret during the phone call.", kr: "그는 전화 통화 중에 무심코 비밀을 밝혔습니다." },
      { en: "The error was caused inadvertently by a sudden power surge.", kr: "그 오류는 갑작스러운 전력 서지로 인해 부주의로 발생했습니다." }
    ]
  },
  {
    id: "L5-281",
    word: "infallibly",
    meaning: "절대 틀림없이",
    examples: [
      { en: "The old clock kept time infallibly for over a century.", kr: "그 오래된 시계는 한 세기가 넘도록 절대 틀림없이 시간을 유지했습니다." },
      { en: "He believes the data will infallibly prove his point.", kr: "그는 그 자료가 자신의 요점을 절대 틀림없이 증명할 것이라고 믿습니다." }
    ]
  },
  {
    id: "L5-282",
    word: "initially",
    meaning: "처음에",
    examples: [
      { en: "Initially, the project was met with resistance, but it is now popular.", kr: "처음에 그 프로젝트는 저항에 부딪혔지만, 지금은 인기가 있습니다." },
      { en: "The cost was initially estimated to be much lower.", kr: "비용은 처음에 훨씬 더 낮게 추정되었습니다." }
    ]
  },
  {
    id: "L5-283",
    word: "invariably",
    meaning: "변함없이, 언제나",
    examples: [
      { en: "The bus is invariably late on Mondays.", kr: "그 버스는 월요일에는 변함없이 늦습니다." },
      { en: "He invariably chooses the most difficult option when faced with a choice.", kr: "그는 선택에 직면했을 때 언제나 가장 어려운 옵션을 선택합니다." }
    ]
  },
  {
    id: "L5-284",
    word: "invidiously",
    meaning: "시기심 나게, 불쾌하게",
    examples: [
      { en: "The promotion was distributed invidiously among only a few senior staff.", kr: "그 승진은 소수의 고위 직원들 사이에서만 시기심 나게 분배되었습니다." },
      { en: "He spoke invidiously about his colleague's rapid success.", kr: "그는 동료의 빠른 성공에 대해 불쾌하게 말했습니다." }
    ]
  },
  {
    id: "L5-285",
    word: "laconicly",
    meaning: "간결하게, 말 없이",
    examples: [
      { en: "The weary soldier replied laconicly to the general's questions.", kr: "그 지친 병사는 장군의 질문에 간결하게 대답했습니다." },
      { en: "The instructions were given laconicly, but were easy to understand.", kr: "지침은 말 없이(간결하게) 주어졌지만, 이해하기 쉬웠습니다." }
    ]
  },
  {
    id: "L5-286",
    word: "languidly",
    meaning: "나른하게, 활기 없이",
    examples: [
      { en: "He waved languidly from the hammock in the hot sun.", kr: "그는 뜨거운 태양 아래 해먹에서 활기 없이 손을 흔들었습니다." },
      { en: "The cat stretched languidly across the carpet.", kr: "고양이는 카펫 위로 나른하게 몸을 폈습니다." }
    ]
  },
  {
    id: "L5-287",
    word: "largely",
    meaning: "주로, 대체로",
    examples: [
      { en: "The success of the new product is largely due to the marketing team.", kr: "새 제품의 성공은 주로 마케팅 팀 덕분입니다." },
      { en: "The project is now largely complete.", kr: "그 프로젝트는 이제 대체로 완성되었습니다." }
    ]
  },
  {
    id: "L5-288",
    word: "legitimately",
    meaning: "합법적으로, 정당하게",
    examples: [
      { en: "The funds were acquired legitimately through years of investment.", kr: "그 자금은 수년간의 투자를 통해 합법적으로 획득되었습니다." },
      { en: "He can legitimately claim the title.", kr: "그는 정당하게 그 칭호를 요구할 수 있습니다." }
    ]
  },
  {
    id: "L5-289",
    word: "meticulously",
    meaning: "세심하게, 꼼꼼하게",
    examples: [
      { en: "The historian meticulously checked every detail of the ancient document.", kr: "그 역사가(史家)는 고대 문서의 모든 세부 사항을 세심하게 확인했습니다." },
      { en: "She meticulously planned every step of the complex operation.", kr: "그녀는 복잡한 작전의 모든 단계를 꼼꼼하게 계획했습니다." }
    ]
  },
  {
    id: "L5-290",
    word: "merely",
    meaning: "단지, 그저",
    examples: [
      { en: "It was merely a coincidence, nothing more.", kr: "그것은 단지 우연이었을 뿐, 그 이상은 아닙니다." },
      { en: "He achieved the rank merely through seniority.", kr: "그는 단지 연공서열을 통해서 그 직급을 달성했습니다." }
    ]
  },
  {
    id: "L5-291",
    word: "minimal",
    meaning: "최소한의",
    examples: [
      { en: "The accident caused minimal damage to the vehicle.", kr: "그 사고는 차량에 최소한의 손상만을 입혔습니다." },
      { en: "We need a minimal amount of information to start the process.", kr: "우리는 과정을 시작하기 위해 최소한의 정보가 필요합니다." }
    ]
  },
  {
    id: "L5-292",
    word: "notably",
    meaning: "특히, 현저하게",
    examples: [
      { en: "The project succeeded in several key areas, notably cost reduction.", kr: "그 프로젝트는 몇 가지 핵심 영역, 특히 비용 절감에서 성공했습니다." },
      { en: "The difference in quality was notably superior.", kr: "품질의 차이는 현저하게 우수했습니다." }
    ]
  },
  {
    id: "L5-293",
    word: "objectively",
    meaning: "객관적으로",
    examples: [
      { en: "Try to view the dispute objectively, without taking sides.", kr: "편을 들지 않고, 그 분쟁을 객관적으로 보려고 노력하세요." },
      { en: "Scientists are trained to report results calmly and objectively.", kr: "과학자들은 결과를 침착하고 객관적으로 보고하도록 훈련받습니다." }
    ]
  },
  {
    id: "L5-294",
    word: "ostensibly",
    meaning: "표면상으로는",
    examples: [
      { en: "Ostensibly, he resigned for personal reasons, but the truth is different.", kr: "표면상으로는 그는 개인적인 이유로 사임했지만, 진실은 다릅니다." },
      { en: "The visit was ostensibly to check the facilities.", kr: "그 방문은 표면상으로는 시설을 점검하기 위한 것이었습니다." }
    ]
  },
  {
    id: "L5-295",
    word: "parsimoniously",
    meaning: "인색하게",
    examples: [
      { en: "The wealthy owner managed his factory parsimoniously.", kr: "그 부유한 소유주는 자신의 공장을 인색하게 관리했습니다." },
      { en: "She lived parsimoniously, saving every penny for her education.", kr: "그녀는 교육을 위해 모든 돈을 저축하며 인색하게 살았습니다." }
    ]
  },
  {
    id: "L5-296",
    word: "perfidiously",
    meaning: "배신적으로, 믿을 수 없게",
    examples: [
      { en: "The general acted perfidiously by revealing his army's positions to the enemy.", kr: "그 장군은 적에게 자신의 군대 위치를 밝힘으로써 배신적으로 행동했습니다." },
      { en: "The former friend perfidiously undermined his business.", kr: "그 전 친구는 믿을 수 없게 그의 사업을 약화시켰습니다." }
    ]
  },
  {
    id: "L5-297",
    word: "perspicaciously",
    meaning: "통찰력 있게, 예리하게",
    examples: [
      { en: "The analyst perspicaciously predicted the shift in market demand.", kr: "그 분석가는 시장 수요의 변화를 통찰력 있게 예측했습니다." },
      { en: "He observed the details perspicaciously and found the hidden clue.", kr: "그는 세부 사항을 예리하게 관찰하고 숨겨진 단서를 찾았습니다." }
    ]
  },
  {
    id: "L5-298",
    word: "phlegmatically",
    meaning: "침착하게, 냉정하게",
    examples: [
      { en: "The crisis manager responded phlegmatically to the barrage of questions.", kr: "그 위기 관리자는 쏟아지는 질문 세례에 침착하게 대응했습니다." },
      { en: "He watched the chaos unfold phlegmatically, showing no distress.", kr: "그는 아무런 고통도 보이지 않고 냉정하게 혼란이 전개되는 것을 지켜보았습니다." }
    ]
  },
  {
    id: "L5-299",
    word: "precipitously",
    meaning: "성급하게, 갑자기",
    examples: [
      { en: "The stock price fell precipitously after the negative news.", kr: "부정적인 뉴스 후 주가가 갑자기 급락했습니다." },
      { en: "He resigned precipitously without a clear plan for the future.", kr: "그는 미래에 대한 명확한 계획 없이 성급하게 사임했습니다." }
    ]
  },
  {
    id: "L5-300",
    word: "presciently",
    meaning: "선견지명 있게",
    examples: [
      { en: "The investor presciently sold all his shares just before the crash.", kr: "그 투자자는 폭락 직전에 선견지명 있게 모든 주식을 팔았습니다." },
      { en: "The author's presciently written novel described the future accurately.", kr: "그 작가의 선견지명 있게 쓰인 소설은 미래를 정확하게 묘사했습니다." }
   ]}
];

const wordsLevel5_Part4 = [
  {
    id: "L5-301",
    word: "prolifically",
    meaning: "다작으로, 풍부하게",
    examples: [
      { en: "She writes prolifically, publishing several novels each year.", kr: "그녀는 다작으로 글을 써서 매년 여러 소설을 출판합니다." },
      { en: "The artist worked prolifically throughout his final decade.", kr: "그 예술가는 마지막 10년 동안 풍부하게(다작으로) 작업했습니다." }
    ]
  },
  {
    id: "L5-302",
    word: "querulously",
    meaning: "불평하듯이, 투덜거리며",
    examples: [
      { en: "The elderly patient complained querulously about the cold hospital food.", kr: "그 나이 든 환자는 차가운 병원 음식에 대해 불평하듯이 투덜거렸습니다." },
      { en: "He querulously demanded a refund for the faulty product.", kr: "그는 투덜거리며 결함 있는 제품에 대한 환불을 요구했습니다." }
    ]
  },
  {
    id: "L5-303",
    word: "recalcitrant",
    meaning: "저항하는, 다루기 힘든",
    examples: [
      { en: "The recalcitrant student refused to follow the teacher's instructions.", kr: "그 저항하는 학생은 선생님의 지시를 따르기를 거부했습니다." },
      { en: "The intractable problem proved recalcitrant to all known solutions.", kr: "그 다루기 힘든 문제는 모든 알려진 해결책에 대해 저항하는 것으로 입증되었습니다." }
    ]
  },
  {
    id: "L5-304",
    word: "recapitulate",
    meaning: "요약하다, 개요를 말하다",
    examples: [
      { en: "The speaker paused to briefly recapitulate the main points of the argument.", kr: "연사는 잠시 멈추고 주장의 요점을 간결하게 요약했습니다." },
      { en: "The final chapter will recapitulate the themes introduced in the beginning.", kr: "마지막 장은 처음에 소개된 주제들을 개요를 말할 것입니다." }
    ]
  },
  {
    id: "L5-305",
    word: "redoubtable",
    meaning: "강력한, 존경할 만한",
    examples: [
      { en: "The chess player was a redoubtable opponent in international tournaments.", kr: "그 체스 선수는 국제 토너먼트에서 강력한 상대였습니다." },
      { en: "She is a redoubtable figure in the field of quantum physics.", kr: "그녀는 양자 물리학 분야에서 존경할 만한 인물입니다." }
    ]
  },
  {
    id: "L5-306",
    word: "reiterated",
    meaning: "반복하여 말한, 되풀이한",
    examples: [
      { en: "The importance of safety was reiterated at the start of the meeting.", kr: "안전의 중요성은 회의 시작 시 반복하여 말해졌습니다." },
      { en: "He reiterated his promise to lower taxes.", kr: "그는 세금을 낮추겠다는 자신의 약속을 되풀이했습니다." }
    ]
  },
  {
    id: "L5-307",
    word: "relinquish",
    meaning: "포기하다, 양도하다",
    examples: [
      { en: "The dictator was finally forced to relinquish power.", kr: "그 독재자는 마침내 권력을 포기하도록 강요받았습니다." },
      { en: "He had to relinquish his claim to the inheritance.", kr: "그는 상속 재산에 대한 자신의 주장을 양도해야 했습니다." }
    ]
  },
  {
    id: "L5-308",
    word: "reprobate",
    meaning: "타락한 사람, 무뢰한",
    examples: [
      { en: "The novel's protagonist was a charming but morally corrupt reprobate.", kr: "그 소설의 주인공은 매력적이지만 도덕적으로 타락한 무뢰한이었습니다." },
      { en: "He was considered a reprobate by his conservative family.", kr: "그는 그의 보수적인 가족에 의해 타락한 사람으로 간주되었습니다." }
    ]
  },
  {
    id: "L5-309",
    word: "repudiate",
    meaning: "거부하다, 부인하다",
    examples: [
      { en: "The politician repudiated the accusations made against him.", kr: "그 정치인은 자신에게 제기된 비난들을 거부했습니다." },
      { en: "The company chose to repudiate the contract terms.", kr: "그 회사는 계약 조건을 부인하기로 결정했습니다." }
    ]
  },
  {
    id: "L5-310",
    word: "requisite",
    meaning: "필요한, 필수적인",
    examples: [
      { en: "Having a degree is a requisite for this position.", kr: "학위를 갖는 것은 이 직책에 필요한(필수적인) 것입니다." },
      { en: "He lacked the requisite skills for the difficult task.", kr: "그는 어려운 임무에 필요한 기술이 부족했습니다." }
    ]
  },
  {
    id: "L5-311",
    word: "reticent",
    meaning: "과묵한, 말이 없는",
    examples: [
      { en: "She was reticent about her past, never mentioning her family.", kr: "그녀는 자신의 과거에 대해 과묵했고, 가족에 대해 전혀 언급하지 않았습니다." },
      { en: "The reticent witness only gave brief, one-word answers.", kr: "그 말이 없는 증인은 단지 짧은 한 단어 답변만 했습니다." }
    ]
  },
  {
    id: "L5-312",
    word: "ruminate",
    meaning: "심사숙고하다, 곰곰이 생각하다",
    examples: [
      { en: "He sat by the fire, ruminating on the meaning of life.", kr: "그는 불 옆에 앉아 삶의 의미에 대해 심사숙고했습니다." },
      { en: "She needed time to ruminate over the difficult decision.", kr: "그녀는 어려운 결정에 대해 곰곰이 생각할 시간이 필요했습니다." }
    ]
  },
  {
    id: "L5-313",
    word: "salutary",
    meaning: "건강에 좋은, 유익한",
    examples: [
      { en: "The defeat served as a salutary lesson for the arrogant team.", kr: "그 패배는 오만한 팀에게 유익한 교훈으로 작용했습니다." },
      { en: "Fresh air and exercise are salutary for the mind and body.", kr: "신선한 공기와 운동은 몸과 마음에 건강에 좋습니다." }
    ]
  },
  {
    id: "L5-314",
    word: "sanguine",
    meaning: "낙관적인, 쾌활한",
    examples: [
      { en: "He is sanguine about the company's prospects for the coming year.", kr: "그는 다가오는 해의 회사 전망에 대해 낙관적입니다." },
      { en: "Even in difficult times, she maintained a sanguine outlook.", kr: "어려운 시기에도 그녀는 쾌활한(낙관적인) 전망을 유지했습니다." }
    ]
  },
  {
    id: "L5-315",
    word: "scintilla",
    meaning: "아주 적은 양, 작은 불꽃",
    examples: [
      { en: "There was not a scintilla of evidence to support his wild claims.", kr: "그의 터무니없는 주장을 뒷받침할 아주 적은 양의 증거도 없었습니다." },
      { en: "He showed a scintilla of interest in the proposal.", kr: "그는 그 제안에 작은 불꽃(아주 적은 양)의 관심을 보였습니다." }
    ]
  },
  {
    id: "L5-316",
    word: "sycophancy",
    meaning: "아첨, 아부",
    examples: [
      { en: "He rose through the ranks purely through sycophancy, not merit.", kr: "그는 실력이 아닌, 순전히 아첨을 통해 계급이 올랐습니다." },
      { en: "The CEO was often surrounded by insincere sycophancy.", kr: "최고 경영자는 종종 불성실한 아부에 둘러싸여 있었습니다." }
    ]
  },
  {
    id: "L5-317",
    word: "synthesis",
    meaning: "종합, 통합",
    examples: [
      { en: "The book is a synthesis of many different philosophical traditions.", kr: "그 책은 많은 다른 철학적 전통들의 종합입니다." },
      { en: "Chemical synthesis of the new compound was a complex process.", kr: "그 새로운 화합물의 화학적 통합(합성)은 복잡한 과정이었습니다." }
    ]
  },
  {
    id: "L5-318",
    word: "tantamount",
    meaning: "동등한, 같은",
    examples: [
      { en: "His refusal to answer was tantamount to an admission of guilt.", kr: "대답을 거부하는 것은 유죄를 인정하는 것과 동등했습니다." },
      { en: "The director's constant criticism was tantamount to harassment.", kr: "그 감독의 끊임없는 비판은 괴롭힘과 같았습니다." }
    ]
  },
  {
    id: "L5-319",
    word: "tergiversate",
    meaning: "빙빙 돌리다, 변명하다",
    examples: [
      { en: "The witness began to tergiversate when pressed for specific details.", kr: "그 증인은 구체적인 세부 사항을 추궁당하자 빙빙 돌리기 시작했습니다." },
      { en: "Stop tergiversating and give me a straight answer.", kr: "빙빙 돌리지 말고 솔직한 대답을 해 주세요." }
    ]
  },
  {
    id: "L5-320",
    word: "transmute",
    meaning: "변형시키다, 변화시키다",
    examples: [
      { en: "The alchemists attempted to transmute base metals into gold.", kr: "연금술사들은 비금속을 금으로 변형시키려고 시도했습니다." },
      { en: "The terrible experience was transmuted into a source of inner strength.", kr: "그 끔찍한 경험은 내면의 힘의 근원으로 변화되었습니다." }
    ]
  },
  {
    id: "L5-321",
    word: "unfettered",
    meaning: "구속되지 않은, 자유로운",
    examples: [
      { en: "The artist was given unfettered creative control over the project.", kr: "그 예술가는 프로젝트에 대한 구속되지 않은 창작 통제권을 부여받았습니다." },
      { en: "The country enjoys unfettered access to the sea.", kr: "그 나라는 바다에 대한 자유로운 접근을 누립니다." }
    ]
  },
  {
    id: "L5-322",
    word: "unilateral",
    meaning: "일방적인",
    examples: [
      { en: "The company's unilateral decision to cut benefits caused a strike.", kr: "회사의 혜택을 삭감하려는 일방적인 결정은 파업을 야기했습니다." },
      { en: "We hope to avoid a unilateral declaration of independence.", kr: "우리는 일방적인 독립 선언을 피하기를 희망합니다." }
    ]
  },
  {
    id: "L5-323",
    word: "unwittingly",
    meaning: "자신도 모르게, 부지불식간에",
    examples: [
      { en: "He unwittingly gave away the secret by mentioning the dates.", kr: "그는 날짜를 언급함으로써 자신도 모르게 비밀을 누설했습니다." },
      { en: "The agent unwittingly became involved in the smuggling operation.", kr: "그 요원은 부지불식간에 밀수 작전에 연루되었습니다." }
    ]
  },
  {
    id: "L5-324",
    word: "vicissitude",
    meaning: "변천, 우여곡절",
    examples: [
      { en: "The business survived the vicissitudes of the economic cycle.", kr: "그 사업은 경제 주기의 변천(우여곡절)을 이겨냈습니다." },
      { en: "The book explores the vicissitudes of life and love.", kr: "그 책은 삶과 사랑의 우여곡절을 탐구합니다." }
    ]
  },
  {
    id: "L5-325",
    word: "vituperative",
    meaning: "욕설하는, 비난하는",
    examples: [
      { en: "The debate was marked by vituperative exchanges between the two candidates.", kr: "그 토론은 두 후보자 사이의 욕설하는 설전으로 특징지어졌습니다." },
      { en: "The editorial contained a vituperative attack on the current administration.", kr: "그 사설은 현 행정부에 대한 비난하는 공격을 담고 있었습니다." }
    ]
  },
  {
    id: "L5-326",
    word: "vociferous",
    meaning: "소란스러운, 큰 소리로 외치는",
    examples: [
      { en: "The vociferous crowd demanded the resignation of the CEO.", kr: "그 소란스러운(큰 소리로 외치는) 군중은 최고 경영자의 사임을 요구했습니다." },
      { en: "He made a vociferous objection to the proposal.", kr: "그는 그 제안에 대해 큰 소리로 외치는 반대를 했습니다." }
    ]
  },
  {
    id: "L5-327",
    word: "welter",
    meaning: "뒤죽박죽, 혼란",
    examples: [
      { en: "The documents were a welter of conflicting information.", kr: "그 문서들은 상충되는 정보의 뒤죽박죽이었습니다." },
      { en: "The market was in a welter of confusion after the sudden announcement.", kr: "갑작스러운 발표 후 시장은 혼란에 빠졌습니다." }
    ]
  },
  {
    id: "L5-328",
    word: "aberration",
    meaning: "일탈, 정도를 벗어남",
    examples: [
      { en: "His momentary lapse in judgment was an aberration from his usual prudence.", kr: "그의 일시적인 판단 착오는 그의 평소 신중함으로부터의 일탈이었습니다." },
      { en: "The unusual weather was a geographical aberration.", kr: "그 특이한 날씨는 지리적 정도를 벗어난 것이었습니다." }
    ]
  },
  {
    id: "L5-329",
    word: "acumen",
    meaning: "통찰력, 감각",
    examples: [
      { en: "He showed great business acumen by investing early in technology stocks.", kr: "그는 기술주에 일찍 투자함으로써 뛰어난 사업 통찰력을 보여주었습니다." },
      { en: "Financial acumen is essential for a successful investor.", kr: "금융 감각은 성공적인 투자자에게 필수적입니다." }
    ]
  },
  {
    id: "L5-330",
    word: "adumbrate",
    meaning: "개요를 설명하다, 어렴풋이 나타내다",
    examples: [
      { en: "The committee will first adumbrate the major goals of the reform.", kr: "위원회는 먼저 개혁의 주요 목표들을 개요를 설명할 것입니다." },
      { en: "The darkening clouds adumbrated a coming storm.", kr: "어두워지는 구름은 다가오는 폭풍을 어렴풋이 나타냈습니다." }
    ]
  },
  {
    id: "L5-331",
    word: "alacrity",
    meaning: "민첩함, 활발함",
    examples: [
      { en: "She accepted the invitation with alacrity.", kr: "그녀는 민첩함(활발함)으로 그 초대를 수락했습니다." },
      { en: "The new staff completed their tasks with noticeable alacrity.", kr: "새 직원들은 눈에 띄는 활발함으로 그들의 임무를 완수했습니다." }
    ]
  },
  {
    id: "L5-332",
    word: "anachronism",
    meaning: "시대착오",
    examples: [
      { en: "A sword in modern warfare is an obvious anachronism.", kr: "현대 전쟁에서의 검은 명백한 시대착오입니다." },
      { en: "The character’s use of a rotary phone felt like a deliberate anachronism.", kr: "그 등장인물이 로터리 전화를 사용하는 것은 의도적인 시대착오처럼 느껴졌습니다." }
    ]
  },
  {
    id: "L5-333",
    word: "anathema",
    meaning: "저주, 혐오스러운 것",
    examples: [
      { en: "Hate speech is anathema to the principles of a free society.", kr: "혐오 발언은 자유 사회의 원칙에 대한 혐오스러운 것입니다." },
      { en: "The religious leaders pronounced an anathema on the heretics.", kr: "그 종교 지도자들은 이단자들에게 저주를 선포했습니다." }
    ]
  },
  {
    id: "L5-334",
    word: "antagonism",
    meaning: "적대감, 반목",
    examples: [
      { en: "There was open antagonism between the two rival teams.", kr: "두 라이벌 팀 사이에는 공개적인 적대감이 있었습니다." },
      { en: "The political cartoon expressed public antagonism toward the new law.", kr: "그 정치 만화는 새 법에 대한 대중의 반목(적대감)을 표현했습니다." }
    ]
  },
  {
    id: "L5-335",
    word: "antithesis",
    meaning: "정반대",
    examples: [
      { en: "Love is the antithesis of hate.", kr: "사랑은 증오의 정반대입니다." },
      { en: "The government's action was the antithesis of their campaign promise.", kr: "정부의 행동은 그들의 선거 공약의 정반대였습니다." }
    ]
  },
  {
    id: "L5-336",
    word: "apotheosis",
    meaning: "신격화, 절정",
    examples: [
      { en: "The film is considered the apotheosis of the science fiction genre.", kr: "그 영화는 공상 과학 장르의 절정으로 간주됩니다." },
      { en: "The Roman emperors often sought apotheosis upon their death.", kr: "로마 황제들은 종종 죽은 후 신격화를 추구했습니다." }
    ]
  },
  {
    id: "L5-337",
    word: "assiduous",
    meaning: "근면한, 부지런한",
    examples: [
      { en: "The researcher's assiduous attention to detail yielded important discoveries.", kr: "그 연구원의 세부 사항에 대한 근면한 주의는 중요한 발견을 낳았습니다." },
      { en: "She is known for being an assiduous student who always studies late.", kr: "그녀는 항상 늦게까지 공부하는 부지런한 학생으로 알려져 있습니다." }
    ]
  },
  {
    id: "L5-338",
    word: "avarice",
    meaning: "탐욕",
    examples: [
      { en: "Avarice drove the banker to commit illegal acts.", kr: "탐욕이 그 은행가를 불법 행위를 저지르게 만들었습니다." },
      { en: "The downfall of the kingdom was attributed to the king's avarice.", kr: "그 왕국의 몰락은 왕의 탐욕에 기인했습니다." }
    ]
  },
  {
    id: "L5-339",
    word: "bellicose",
    meaning: "호전적인, 싸우기 좋아하는",
    examples: [
      { en: "The bellicose rhetoric of the leader threatened regional stability.", kr: "그 지도자의 호전적인 수사(말)는 지역 안정을 위협했습니다." },
      { en: "He was warned to change his bellicose attitude in the workplace.", kr: "그는 직장에서 싸우기 좋아하는 태도를 바꾸라는 경고를 받았습니다." }
    ]
  },
  {
    id: "L5-340",
    word: "cabal",
    meaning: "음모단, 비밀 결사",
    examples: [
      { en: "A secret cabal of ministers plotted against the king.", kr: "장관들의 비밀 음모단이 왕을 상대로 음모를 꾸몄습니다." },
      { en: "The investigation uncovered a powerful cabal operating within the corporation.", kr: "그 조사는 회사 내에서 운영되는 강력한 비밀 결사를 밝혀냈습니다." }
    ]
  },
  {
    id: "L5-341",
    word: "cacophony",
    meaning: "불협화음, 시끄러운 소리",
    examples: [
      { en: "The construction site produced a cacophony of banging and shouting.", kr: "그 건설 현장은 쿵쾅거리는 소리와 고함 소리의 불협화음(시끄러운 소리)을 냈습니다." },
      { en: "The children's band created a tuneless cacophony.", kr: "그 아이들의 밴드는 음이 맞지 않는 불협화음을 만들었습니다." }
    ]
  },
  {
    id: "L5-342",
    word: "capricious",
    meaning: "변덕스러운",
    examples: [
      { en: "The weather in the mountains is notoriously capricious.", kr: "산의 날씨는 변덕스러운 것으로 악명이 높습니다." },
      { en: "Her capricious spending habits often led to debt.", kr: "그녀의 변덕스러운 소비 습관은 종종 빚으로 이어졌습니다." }
    ]
  },
  {
    id: "L5-343",
    word: "chicanery",
    meaning: "속임수, 교활한 수법",
    examples: [
      { en: "The politician was notorious for his use of chicanery to win votes.", kr: "그 정치인은 표를 얻기 위해 속임수(교활한 수법)를 사용하는 것으로 악명이 높았습니다." },
      { en: "The company was accused of financial chicanery.", kr: "그 회사는 재정적인 속임수 혐의로 고발되었습니다." }
    ]
  },
  {
    id: "L5-344",
    word: "concomitant",
    meaning: "수반하는, 동시에 일어나는",
    examples: [
      { en: "Increased economic growth is often a concomitant of lower interest rates.", kr: "증가된 경제 성장은 종종 낮은 이자율에 수반하는 것입니다." },
      { en: "The excitement of the victory and the concomitant fatigue were overwhelming.", kr: "승리의 흥분과 동시에 일어나는 피로는 압도적이었습니다." }
    ]
  },
  {
    id: "L5-345",
    word: "conflagration",
    meaning: "대화재",
    examples: [
      { en: "The entire district was destroyed by the massive conflagration.", kr: "그 지역 전체가 대규모 대화재로 파괴되었습니다." },
      { en: "The political crisis rapidly escalated into a metaphorical conflagration.", kr: "그 정치 위기는 비유적인 대화재로 빠르게 확대되었습니다." }
    ]
  },
  {
    id: "L5-346",
    word: "contumacious",
    meaning: "반항적인, 불복종하는",
    examples: [
      { en: "The court found the prisoner to be contumacious and resistant to authority.", kr: "법원은 그 죄수가 반항적이고 권위에 저항한다고 판결했습니다." },
      { en: "The general dealt swiftly with the contumacious officers.", kr: "그 장군은 불복종하는 장교들을 신속하게 처리했습니다." }
    ]
  },
  {
    id: "L5-347",
    word: "debacle",
    meaning: "대실패, 붕괴",
    examples: [
      { en: "The launch of the new product was a complete debacle.", kr: "새 제품의 출시는 완전한 대실패였습니다." },
      { en: "The sudden collapse of the empire was a historical debacle.", kr: "그 제국의 갑작스러운 붕괴는 역사적인 대실패였습니다." }
    ]
  },
  {
    id: "L5-348",
    word: "defenestrate",
    meaning: "창밖으로 던지다",
    examples: [
      { en: "Historical accounts mention a political figure who was defenestrated from a castle window.", kr: "역사 기록은 성 창문 밖으로 던져진(defenestrated) 정치인을 언급합니다." },
      { en: "He felt like defenestrating the malfunctioning computer.", kr: "그는 오작동하는 컴퓨터를 창밖으로 던져버리고 싶었습니다." }
    ]
  },
  {
    id: "L5-349",
    word: "demur",
    meaning: "이의를 제기하다, 반대하다",
    examples: [
      { en: "The board members demurred at the proposed merger plan.", kr: "이사회 멤버들은 제안된 합병 계획에 이의를 제기했습니다." },
      { en: "She accepted the task without demur.", kr: "그녀는 반대 없이 그 임무를 수락했습니다." }
    ]
  },
  {
    id: "L5-350",
    word: "denouement",
    meaning: "대단원, 결말",
    examples: [
      { en: "The novel’s denouement revealed the killer’s true identity.", kr: "그 소설의 대단원(결말)은 살인자의 진짜 정체를 밝혀냈습니다." },
      { en: "The final scene served as the complex denouement of the political drama.", kr: "마지막 장면은 그 정치 드라마의 복잡한 결말 역할을 했습니다." }
    ]
  },
  {
    id: "L5-351",
    word: "diaphanous",
    meaning: "얇은, 속이 비치는",
    examples: [
      { en: "She wore a diaphanous silk scarf around her neck.", kr: "그녀는 목에 얇은 실크 스카프를 둘렀습니다." },
      { en: "The diaphanous curtain allowed the morning light to softly filter in.", kr: "그 속이 비치는 커튼은 아침 햇살이 부드럽게 스며들게 했습니다." }
    ]
  },
  {
    id: "L5-352",
    word: "dichotomy",
    meaning: "양분, 이분법",
    examples: [
      { en: "The book explores the dichotomy between good and evil.", kr: "그 책은 선과 악 사이의 양분(이분법)을 탐구합니다." },
      { en: "The organization suffered from a dichotomy between its stated goals and its actual practices.", kr: "그 조직은 공언된 목표와 실제 관행 사이의 이분법 때문에 고통받았습니다." }
    ]
  },
  {
    id: "L5-353",
    word: "dilatory",
    meaning: "꾸물거리는, 느린",
    examples: [
      { en: "The company was penalized for its dilatory payment of taxes.", kr: "그 회사는 세금의 꾸물거리는(느린) 납부 때문에 처벌받았습니다." },
      { en: "His dilatory habits meant he always missed deadlines.", kr: "그의 느린 습관은 그가 항상 마감 기한을 놓친다는 것을 의미했습니다." }
    ]
  },
  {
    id: "L5-354",
    word: "discursive",
    meaning: "산만한, 주제를 벗어난",
    examples: [
      { en: "The professor's discursive lecture jumped from one topic to another.", kr: "그 교수의 산만한 강의는 한 주제에서 다른 주제로 건너뛰었습니다." },
      { en: "The essay was criticized for its discursive style.", kr: "그 에세이는 주제를 벗어난 스타일로 비판받았습니다." }
    ]
  },
  {
    id: "L5-355",
    word: "dissemble",
    meaning: "숨기다, 위장하다",
    examples: [
      { en: "He tried to dissemble his true motives for taking the job.", kr: "그는 그 일자리를 맡는 것에 대한 자신의 진짜 동기를 숨기려고 노력했습니다." },
      { en: "The spy was skilled at dissembling his identity.", kr: "그 스파이는 자신의 정체를 위장하는 데 능숙했습니다." }
    ]
  },
  {
    id: "L5-356",
    word: "doleful",
    meaning: "슬픈, 침울한",
    examples: [
      { en: "The dog gave a doleful look when its owner left the house.", kr: "주인이 집을 떠나자 개는 슬픈 표정을 지었습니다." },
      { en: "The play ended with a doleful, tragic scene.", kr: "그 연극은 침울하고 비극적인 장면으로 끝났습니다." }
    ]
  },
  {
    id: "L5-357",
    word: "egregious",
    meaning: "지독한, 터무니없는",
    examples: [
      { en: "The committee called the accounting error an egregious mistake.", kr: "위원회는 그 회계 오류를 지독한 실수라고 불렀습니다." },
      { en: "His behavior was an egregious breach of professional conduct.", kr: "그의 행동은 전문가의 행동 규범에 대한 터무니없는 위반이었습니다." }
    ]
  },
  {
    id: "L5-358",
    word: "elucidate",
    meaning: "설명하다, 명확히 하다",
    examples: [
      { en: "The professor was asked to elucidate the complex theory for the students.", kr: "교수는 학생들을 위해 복잡한 이론을 설명해 달라는 요청을 받았습니다." },
      { en: "New evidence helped to elucidate the true cause of the accident.", kr: "새로운 증거는 사고의 진짜 원인을 명확히 하는 데 도움이 되었습니다." }
    ]
  },
  {
    id: "L5-359",
    word: "encomium",
    meaning: "찬사, 칭찬하는 말",
    examples: [
      { en: "The retiring CEO was presented with a glowing encomium for his years of service.", kr: "은퇴하는 최고 경영자는 그의 봉사 기간에 대한 빛나는 찬사를 받았습니다." },
      { en: "His achievements deserve a greater encomium than I can offer.", kr: "그의 업적은 제가 제공할 수 있는 것보다 더 큰 칭찬하는 말을 받을 자격이 있습니다." }
    ]
  },
  {
    id: "L5-360",
    word: "ephemeral",
    meaning: "덧없는, 수명이 짧은",
    examples: [
      { en: "Fame in the modern era is often ephemeral.", kr: "현대 시대의 명성은 종종 덧없습니다." },
      { en: "The fragile, ephemeral beauty of the ice sculpture quickly melted.", kr: "그 깨지기 쉽고 수명이 짧은 얼음 조각의 아름다움은 빠르게 녹았습니다." }
    ]
  },
  {
    id: "L5-361",
    word: "equanimity",
    meaning: "평정, 침착",
    examples: [
      { en: "She faced the disaster with remarkable equanimity.", kr: "그녀는 놀라운 평정(침착)을 가지고 그 재난에 직면했습니다." },
      { en: "A good leader maintains equanimity even under intense pressure.", kr: "좋은 지도자는 강한 압박 속에서도 침착함을 유지합니다." }
    ]
  },
  {
    id: "L5-362",
    word: "equivocal",
    meaning: "애매모호한",
    examples: [
      { en: "The politician gave an equivocal answer that satisfied no one.", kr: "그 정치인은 아무도 만족시키지 못한 애매모호한 대답을 했습니다." },
      { en: "The initial test results were equivocal and required further study.", kr: "초기 테스트 결과는 애매모호했고 추가 연구를 필요로 했습니다." }
    ]
  },
  {
    id: "L5-363",
    word: "eschew",
    meaning: "피하다, 삼가다",
    examples: [
      { en: "True ascetics eschew all forms of luxury and comfort.", kr: "진정한 금욕주의자들은 모든 형태의 사치와 편안함을 피합니다." },
      { en: "The company chose to eschew complicated jargon in its advertising.", kr: "그 회사는 광고에서 복잡한 전문 용어를 삼가기로 결정했습니다." }
    ]
  },
  {
    id: "L5-364",
    word: "eulogy",
    meaning: "추도 연설, 찬사",
    examples: [
      { en: "The best friend delivered a heartfelt eulogy at the funeral.", kr: "가장 친한 친구는 장례식에서 진심 어린 추도 연설을 했습니다." },
      { en: "The article was more a eulogy than a balanced critical review.", kr: "그 기사는 균형 잡힌 비판적인 평론이라기보다는 찬사에 가까웠습니다." }
    ]
  },
  {
    id: "L5-365",
    word: "exacerbate",
    meaning: "악화시키다",
    examples: [
      { en: "Lack of funding will only exacerbate the problem.", kr: "자금 부족은 문제를 악화시킬 뿐입니다." },
      { en: "Trying to move the injured limb will exacerbate the pain.", kr: "부상당한 팔다리를 움직이려고 하는 것은 고통을 악화시킬 것입니다." }
    ]
  },
  {
    id: "L5-366",
    word: "exigency",
    meaning: "긴급 사태, 위급",
    examples: [
      { en: "The exigency of the situation required immediate action.", kr: "그 상황의 긴급 사태(위급)는 즉각적인 행동을 필요로 했습니다." },
      { en: "The unexpected market crash created a financial exigency for the bank.", kr: "예상치 못한 시장 붕괴는 은행에 재정적 위급을 만들었습니다." }
    ]
  },
  {
    id: "L5-367",
    word: "expatiate",
    meaning: "상세히 설명하다, 길게 이야기하다",
    examples: [
      { en: "The author expatiated on his theories for hours at the book signing.", kr: "그 작가는 책 사인회에서 자신의 이론에 대해 몇 시간 동안 상세히 설명했습니다." },
      { en: "She was reluctant to expatiate on her private life.", kr: "그녀는 자신의 사생활에 대해 길게 이야기하는 것을 꺼려했습니다." }
    ]
  },
  {
    id: "L5-368",
    word: "extirpate",
    meaning: "제거하다, 근절하다",
    examples: [
      { en: "The government launched a campaign to extirpate the invasive weed species.", kr: "정부는 침입성 잡초 종을 근절하기 위한 캠페인을 시작했습니다." },
      { en: "We must work to extirpate corruption from the political system.", kr: "우리는 정치 시스템에서 부패를 제거하기 위해 노력해야 합니다." }
    ]
  },
  {
    id: "L5-369",
    word: "fallacious",
    meaning: "잘못된, 틀린",
    examples: [
      { en: "The report was based on fallacious assumptions and data.", kr: "그 보고서는 잘못된 가정과 데이터에 기반을 두고 있었습니다." },
      { en: "It is a common but fallacious belief that money guarantees happiness.", kr: "돈이 행복을 보장한다는 것은 흔하지만 틀린 믿음입니다." }
    ]
  },
  {
    id: "L5-370",
    word: "fastidious",
    meaning: "까다로운, 세심한",
    examples: [
      { en: "The chef was fastidious about the presentation of the dishes.", kr: "그 요리사는 요리의 플레이팅에 대해 까다로웠습니다." },
      { en: "She organized her notes with fastidious care.", kr: "그녀는 세심한 주의를 기울여 자신의 노트를 정리했습니다." }
    ]
  },
  {
    id: "L5-371",
    word: "fatuous",
    meaning: "어리석은, 얼빠진",
    examples: [
      { en: "He made a fatuous comment that completely missed the point.", kr: "그는 요점을 완전히 놓치는 어리석은 발언을 했습니다." },
      { en: "The villain's fatuous grin showed his lack of intelligence.", kr: "그 악당의 얼빠진 웃음은 그의 지성 부족을 보여주었습니다." }
    ]
  },
  {
    id: "L5-372",
    word: "feckless",
    meaning: "무책임한, 쓸모없는",
    examples: [
      { en: "The company failed due to a series of feckless decisions by the management.", kr: "그 회사는 경영진의 일련의 무책임한 결정 때문에 실패했습니다." },
      { en: "His feckless attitude towards his job angered his co-workers.", kr: "직장에 대한 그의 쓸모없는(무책임한) 태도는 동료들을 화나게 했습니다." }
    ]
  },
  {
    id: "L5-373",
    word: "fiduciary",
    meaning: "신탁의, 수탁자",
    examples: [
      { en: "As a board member, she has a fiduciary duty to act in the best interest of the shareholders.", kr: "이사회 멤버로서, 그녀는 주주들의 최선의 이익을 위해 행동할 신탁의 의무가 있습니다." },
      { en: "The lawyer serves as a fiduciary for the client's assets.", kr: "그 변호사는 고객 자산의 수탁자 역할을 합니다." }
    ]
  },
  {
    id: "L5-374",
    word: "fulsome",
    meaning: "지나치게 아첨하는, 역겨운",
    examples: [
      { en: "The leader was embarrassed by the fulsome praise from his subordinates.", kr: "그 지도자는 부하 직원들의 지나치게 아첨하는 칭찬에 당황했습니다." },
      { en: "I felt a fulsome attempt to flatter the host.", kr: "저는 주인을 아첨하려는 역겨운 시도를 느꼈습니다." }
    ]
  },
  {
    id: "L5-375",
    word: "garrulous",
    meaning: "수다스러운",
    examples: [
      { en: "The garrulous travel guide never stopped talking during the bus tour.", kr: "그 수다스러운 여행 가이드는 버스 투어 동안 말을 멈추지 않았습니다." },
      { en: "His garrulous nature sometimes made him reveal secrets inadvertently.", kr: "그의 수다스러운 천성은 때때로 그가 부지불식간에 비밀을 누설하게 만들었습니다." }
    ]
  },
  {
    id: "L5-376",
    word: "hegemony",
    meaning: "패권, 지배권",
    examples: [
      { en: "The small state resisted the cultural hegemony of its larger neighbor.", kr: "그 작은 나라는 더 큰 이웃 나라의 문화적 패권에 저항했습니다." },
      { en: "The company aims to establish global hegemony in the smartphone market.", kr: "그 회사는 스마트폰 시장에서 세계적인 지배권을 확립하는 것을 목표로 합니다." }
    ]
  },
  {
    id: "L5-377",
    word: "heterodox",
    meaning: "이교의, 이단의",
    examples: [
      { en: "His heterodox views on economics were controversial among traditional scholars.", kr: "경제학에 대한 그의 이교의(비정통적인) 견해는 전통적인 학자들 사이에서 논란이 되었습니다." },
      { en: "She was known for her heterodox approach to painting.", kr: "그녀는 그림에 대한 이단의(틀에 박히지 않은) 접근 방식으로 알려져 있었습니다." }
    ]
  },
  {
    id: "L5-378",
    word: "homogenous",
    meaning: "동종의, 균질의",
    examples: [
      { en: "The soup was a perfectly homogenous mixture of vegetables and broth.", kr: "그 수프는 채소와 국물이 완벽하게 균질의 혼합물이었습니다." },
      { en: "The country has a relatively homogenous population.", kr: "그 나라는 비교적 동종의 인구를 가지고 있습니다." }
    ]
  },
  {
    id: "L5-379",
    word: "immanent",
    meaning: "내재하는, 잠재하는",
    examples: [
      { en: "The philosopher discussed the concept of a divine presence immanent in all creation.", kr: "그 철학자는 모든 창조물에 내재하는 신성한 존재의 개념을 논했습니다." },
      { en: "There is an immanent risk in any form of investment.", kr: "모든 형태의 투자에는 내재하는 위험이 있습니다." }
    ]
  },
  {
    id: "L5-380",
    word: "imminent",
    meaning: "임박한, 절박한",
    examples: [
      { en: "The weather service warned of an imminent storm heading toward the coast.", kr: "기상청은 해안으로 향하는 임박한 폭풍을 경고했습니다." },
      { en: "The patient's imminent death was expected by the medical team.", kr: "그 환자의 절박한 죽음은 의료팀에 의해 예상되었습니다." }
    ]
  },
  {
    id: "L5-381",
    word: "impalpable",
    meaning: "만질 수 없는, 이해하기 어려운",
    examples: [
      { en: "The tension in the air was impalpable yet clearly felt by everyone.", kr: "공기 중의 긴장감은 만질 수 없었지만 모두에게 분명히 느껴졌습니다." },
      { en: "The subtle difference in flavor was impalpable to the average diner.", kr: "맛의 미묘한 차이는 보통의 식사하는 사람에게는 이해하기 어려웠습니다." }
    ]
  },
  {
    id: "L5-382",
    word: "inchoate",
    meaning: "초기의, 이제 막 시작된",
    examples: [
      { en: "The new political movement is still in an inchoate stage.", kr: "새로운 정치 운동은 아직 초기의 단계에 있습니다." },
      { en: "She presented an inchoate idea that needed much more development.", kr: "그녀는 훨씬 더 많은 발전이 필요한 이제 막 시작된 아이디어를 제시했습니다." }
    ]
  },
  {
    id: "L5-383",
    word: "incongruous",
    meaning: "어울리지 않는, 부조화한",
    examples: [
      { en: "His bright sports car seemed incongruous parked next to the old farmhouse.", kr: "그의 밝은 스포츠카는 오래된 농가 옆에 주차되어 있어 어울리지 않는 것처럼 보였습니다." },
      { en: "The happy music was incongruous with the sad ending of the film.", kr: "그 행복한 음악은 영화의 슬픈 결말과 부조화했습니다." }
    ]
  },
  {
    id: "L5-384",
    word: "incendiary",
    meaning: "선동적인, 방화의",
    examples: [
      { en: "The politician made several incendiary comments that sparked outrage.", kr: "그 정치인은 분노를 촉발시키는 여러 선동적인 발언을 했습니다." },
      { en: "The police suspected the fire was caused by an incendiary device.", kr: "경찰은 그 화재가 방화의 장치 때문에 발생했다고 의심했습니다." }
    ]
  },
  {
    id: "L5-385",
    word: "inculcate",
    meaning: "주입하다, 심어주다",
    examples: [
      { en: "The school tries to inculcate a sense of responsibility in its students.", kr: "그 학교는 학생들에게 책임감을 주입(심어)주려고 노력합니다." },
      { en: "The importance of hard work was inculcated in him from a young age.", kr: "열심히 일하는 것의 중요성은 어린 나이부터 그에게 심어졌습니다." }
    ]
  },
  {
    id: "L5-386",
    word: "indolence",
    meaning: "게으름, 나태",
    examples: [
      { en: "His indolence prevented him from ever completing a long-term project.", kr: "그의 게으름은 그가 장기적인 프로젝트를 완료하는 것을 막았습니다." },
      { en: "The heat of the afternoon encouraged a mood of indolence.", kr: "오후의 더위는 나태의 분위기를 조장했습니다." }
    ]
  },
  {
    id: "L5-387",
    word: "innocuousness",
    meaning: "무해함, 악의 없음",
    examples: [
      { en: "The expert confirmed the innocuousness of the chemical compound.", kr: "전문가는 그 화학 화합물의 무해함을 확인했습니다." },
      { en: "The apparent innocuousness of the insect made its bite all the more surprising.", kr: "그 곤충의 명백한 무해함은 그 물림을 더욱 놀라게 만들었습니다." }
    ]
  },
  {
    id: "L5-388",
    word: "internecine",
    meaning: "동족상잔의, 상호 파괴적인",
    examples: [
      { en: "The civil war became a bitter internecine conflict.", kr: "그 내전은 쓰라린 동족상잔의 갈등이 되었습니다." },
      { en: "Internecine squabbling within the board led to the company's collapse.", kr: "이사회 내의 상호 파괴적인 다툼이 회사의 붕괴로 이어졌습니다." }
    ]
  },
  {
    id: "L5-389",
    word: "invidiousness",
    meaning: "시기심, 불쾌감",
    examples: [
      { en: "The invidiousness of the award process caused resentment among the staff.", kr: "그 시상 과정의 시기심(불쾌감)은 직원들 사이에 분노를 야기했습니다." },
      { en: "He recognized the invidiousness of his position as the judge of the contest.", kr: "그는 대회의 심사위원으로서 자신의 위치의 불쾌감을 인식했습니다." }
    ]
  },
  {
    id: "L5-390",
    word: "juggernaut",
    meaning: "대형 트럭, 불가항력적인 힘",
    examples: [
      { en: "The company's expansion became an unstoppable global juggernaut.", kr: "그 회사의 확장은 멈출 수 없는 세계적인 불가항력적인 힘이 되었습니다." },
      { en: "The football team was an absolute juggernaut this season.", kr: "그 축구팀은 이번 시즌에 절대적인 불가항력적인 힘이었습니다." }
    ]
  },
  {
    id: "L5-391",
    word: "lament",
    meaning: "한탄하다, 슬퍼하다",
    examples: [
      { en: "The villagers lamented the destruction of their ancient temple.", kr: "마을 사람들은 그들의 고대 사원의 파괴를 한탄했습니다." },
      { en: "The poem is a lament for lost youth.", kr: "그 시는 잃어버린 젊음에 대한 슬픔(한탄)입니다." }
    ]
  },
  {
    id: "L5-392",
    word: "lascivious",
    meaning: "음란한, 색정적인",
    examples: [
      { en: "The magazine was censored for its lascivious content.", kr: "그 잡지는 음란한 내용으로 인해 검열되었습니다." },
      { en: "He gave a lascivious wink across the room.", kr: "그는 방 건너편으로 색정적인 윙크를 했습니다." }
    ]
  },
  {
    id: "L5-393",
    word: "limpid",
    meaning: "맑은, 투명한",
    examples: [
      { en: "The diver marveled at the limpid waters of the tropical lagoon.", kr: "그 다이버는 열대 석호의 맑은 물에 감탄했습니다." },
      { en: "Her writing style is known for its limpid clarity.", kr: "그녀의 글쓰기 스타일은 투명한 명료함으로 알려져 있습니다." }
    ]
  },
  {
    id: "L5-394",
    word: "loquacious",
    meaning: "수다스러운",
    examples: [
      { en: "The old woman was loquacious, telling everyone her life story.", kr: "그 노파는 수다스러워서 모두에게 자신의 인생 이야기를 들려주었습니다." },
      { en: "He contrasted the taciturn scientist with his loquacious assistant.", kr: "그는 과묵한 과학자와 그의 수다스러운 조수를 대조했습니다." }
    ]
  },
  {
    id: "L5-395",
    word: "luminous",
    meaning: "빛나는, 밝은",
    examples: [
      { en: "The clock face was painted with luminous material so it could be seen in the dark.", kr: "시계판은 어둠 속에서도 볼 수 있도록 빛나는 물질로 칠해졌습니다." },
      { en: "She has a luminous personality that brightens the room.", kr: "그녀는 방을 밝게 만드는 빛나는 성격을 가지고 있습니다." }
    ]
  },
  {
    id: "L5-396",
    word: "mendacious",
    meaning: "허위의, 거짓말하는",
    examples: [
      { en: "The witness gave mendacious testimony to protect the criminal.", kr: "그 증인은 범죄자를 보호하기 위해 허위의 증언을 했습니다." },
      { en: "The reporter was fired for publishing a mendacious article.", kr: "그 기자는 거짓말하는 기사를 출판했다는 이유로 해고되었습니다." }
    ]
  },
  {
    id: "L5-397",
    word: "misanthropy",
    meaning: "인간 혐오",
    examples: [
      { en: "His bitter experiences led him to a life of misanthropy and isolation.", kr: "그의 쓰라린 경험은 그를 인간 혐오와 고립의 삶으로 이끌었습니다." },
      { en: "The author’s dark humor often verged on misanthropy.", kr: "그 작가의 어두운 유머는 종종 인간 혐오에 가까웠습니다." }
    ]
  },
  {
    id: "L5-398",
    word: "nefariously",
    meaning: "사악하게, 흉악하게",
    examples: [
      { en: "The villain nefariously plotted the downfall of the hero.", kr: "그 악당은 사악하게 영웅의 몰락을 계획했습니다." },
      { en: "The documents were obtained nefariously through illegal hacking.", kr: "그 문서들은 불법 해킹을 통해 흉악하게 획득되었습니다." }
    ]
  },
  {
    id: "L5-399",
    word: "obfuscate",
    meaning: "혼란스럽게 하다, 모호하게 하다",
    examples: [
      { en: "The politician tried to obfuscate the issue with complex jargon.", kr: "그 정치인은 복잡한 전문 용어로 그 문제를 혼란스럽게 하려고 노력했습니다." },
      { en: "The dense writing style tends to obfuscate the author's meaning.", kr: "그 밀도 높은 글쓰기 스타일은 저자의 의미를 모호하게 하는 경향이 있습니다." }
    ]
  },
  {
    id: "L5-400",
    word: "obviated",
    meaning: "미연에 방지된, 제거된",
    examples: [
      { en: "The need for a third meeting was obviated by the efficient email exchange.", kr: "세 번째 회의의 필요성은 효율적인 이메일 교환으로 미연에 방지되었습니다." },
      { en: "The potential for error was obviated by the double-check system.", kr: "오류의 잠재성은 이중 확인 시스템으로 제거되었습니다." }
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
