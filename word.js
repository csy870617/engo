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
    meaning: "이것, 이",
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
      { en: "The cat ran out of the house.", kr: "고양이가 집 밖으로 뛰어나갔어." }
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
    meaning: "누구, ~하는 (사람)",
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
      { en: "I need to get a new phone.", kr: "나는 새 휴대폰을 마련해야 해." },
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
      { en: "I want to go traveling this summer.", kr: "나는 이번 여름에 여행을 가고 싶어." }
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
    meaning: "아니요, 없는",
    examples: [
      { en: "No, I am not ready.", kr: "아니요, 저는 아직 준비가 안 됐어요." },
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
      { en: "The company announced its new plan.", kr: "그 회사는 자사의 새로운 계획을 발표했어." }
    ]
  },
  {
    id: "L1-077",
    word: "over",
    meaning: "~ 위에, ~을 넘어, 끝난",
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
      { en: "We use this app to track our expenses.", kr: "우리는 지출을 기록하는 데 이 앱을 사용해." }
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
      { en: "What is that thing?", kr: "저 물건은 뭐야?" },
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
      { en: "She fell asleep on the couch while I worked.", kr: "내가 일하는 동안 그녀는 소파에서 잠들었어." }
    ]
  },
  {
    id: "L1-115",
    word: "tell",
    meaning: "말하다, 알리다",
    examples: [
      { en: "Tell me what happened.", kr: "나에게 무슨 일이 있었는지 말해줘." },
      { en: "Please tell her that I called.", kr: "그녀에게 내가 전화했다고 알려 줘." }
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
    meaning: "형태, 양식, 형성하다",
    examples: [
      { en: "The gas changed form and became liquid.", kr: "기체가 형태를 바꿔 액체가 되었어." },
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
    meaning: "삶, 인생, 생명",
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
    meaning: "선물, 현재, 참석한",
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
      { en: "Draw a straight line from point A to point B.", kr: "A점에서 B점까지 직선을 그어." }
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
    meaning: "힘, 전력",
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
      { en: "I have a great interest in history.", kr: "나는 역사에 큰 관심이 있어." },
      { en: "The bank pays a high interest rate.", kr: "은행은 높은 이자율을 지불해." }
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
      { en: "It is a fact that the earth goes around the sun.", kr: "지구가 태양 주위를 돈다는 것은 사실이야." },
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
    meaning: "관점, 경치, 보다",
    examples: [
      { en: "What is your view on this issue?", kr: "이 문제에 대한 당신의 관점은 무엇입니까?" },
      { en: "The apartment has a great view of the city.", kr: "그 아파트에서는 도시의 멋진 경치가 보여." }
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
      { en: "What is the reason for the delay?", kr: "지연되는 이유는 무엇입니까?" },
      { en: "Give me one good reason to agree.", kr: "동의할 만한 좋은 이유 하나를 말해줘." }
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
      { en: "The course lasts for ten weeks.", kr: "그 과정은 10주 동안 진행돼." }
    ]
  },
  {
    id: "L1-180",
    word: "report",
    meaning: "보고하다, 신고하다, 보고서",
    examples: [
      { en: "You must report the incident to the police.", kr: "그 사건을 경찰에 신고해야 합니다." },
      { en: "The company will release its financial report soon.", kr: "회사는 곧 재무 보고서를 발표할 거야." }
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
    meaning: "단위, (아파트 등의) 한 세대",
    examples: [
      { en: "Meters are a unit of length.", kr: "미터는 길이의 단위야." },
      { en: "The apartment complex has 100 residential units.", kr: "그 아파트 단지에는 100세대가 있어." }
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
      { en: "Do you need help carrying those boxes?", kr: "그 상자들 나르는 데 도움이 필요하니?" }
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
      { en: "We support the local economy.", kr: "우리는 지역 경제를 지원합니다." }
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
      { en: "We have a special offer for new customers.", kr: "신규 고객을 위한 특별 혜택이 있습니다." }
    ]
  },
  {
    id: "L1-235",
    word: "picture",
    meaning: "그림, 사진",
    examples: [
      { en: "Did you see the picture I sent you?", kr: "내가 너에게 보낸 사진 봤니?" },
      { en: "She painted a picture of her dog.", kr: "그녀는 자기 개의 그림을 그렸어." }
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
    meaning: "위치, 입장, 직위",
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
    meaning: "포함하다, (안에) 들어 있다",
    examples: [
      { en: "This bottle contains orange juice.", kr: "이 병에는 오렌지 주스가 들어 있습니다." },
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
      { en: "This store offers a low price guarantee.", kr: "이 가게는 최저가 보장 서비스를 제공합니다." }
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
    meaning: "기초, 기반, 기지",
    examples: [
      { en: "The military has a large base near the coast.", kr: "군대는 해안 근처에 큰 기지를 가지고 있어." },
      { en: "This decision is based on a survey.", kr: "이 결정은 설문조사를 기반으로 합니다." }
    ]
  },
  {
    id: "L1-265",
    word: "value",
    meaning: "가치, 소중히 여기다",
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
      { en: "She has a beautiful singing voice.", kr: "그녀는 노래하는 목소리가 아름다워." },
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
    meaning: "사랑, 사랑하다, 아주 좋아하다",
    examples: [
      { en: "I love spending time with my family.", kr: "나는 가족과 시간을 보내는 것을 정말 좋아해." },
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
      { en: "They held a private meeting.", kr: "그들은 비공개 회의를 열었습니다." }
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
      { en: "I suppose we should leave now.", kr: "이제 떠나야 할 것 같아요." },
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
      { en: "Sales figures rose sharply last quarter.", kr: "지난 분기에 매출 수치가 급격히 올랐어." },
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
    meaning: "방향, 지시",
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
      { en: "She is a single mother of two.", kr: "그녀는 두 아이를 혼자 키우는 엄마입니다." }
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
      { en: "We need to determine the cause of the problem.", kr: "우리는 문제의 원인을 밝혀내야 합니다." },
      { en: "His efforts will determine his success.", kr: "그의 노력이 그의 성공을 결정할 것입니다." }
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
      { en: "This rule does not apply to everyone.", kr: "이 규칙이 모든 사람에게 적용되는 것은 아닙니다." },
      { en: "I decided to apply for the new job.", kr: "나는 새 일자리에 지원하기로 결정했어." }
    ]
  },
  {
    id: "L1-306",
    word: "term",
    meaning: "용어, 기간",
    examples: [
      { en: "Please explain the technical term.", kr: "그 전문 용어를 설명해 주세요." },
      { en: "He was elected for a four-year term.", kr: "그는 4년 임기로 선출되었습니다." }
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
    meaning: "우려, 관심사, ~에 관련되다",
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
    meaning: "공동체",
    examples: [
      { en: "We are building a strong local community.", kr: "우리는 탄탄한 지역 공동체를 만들어 가고 있습니다." },
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
    meaning: "자라다, 성장하다",
    examples: [
      { en: "The trees grow very fast here.", kr: "여기는 나무들이 매우 빨리 자랍니다." },
      { en: "The company's market share continues to grow.", kr: "회사의 시장 점유율은 계속 성장하고 있습니다." }
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
    meaning: "자유로운, 무료의",
    examples: [
      { en: "The concert tickets are free.", kr: "그 콘서트 티켓은 무료입니다." },
      { en: "We are finally free from worry.", kr: "우리는 마침내 걱정에서 벗어났습니다(자유롭습니다)." }
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
      { en: "Place the vase in the center of the table.", kr: "꽃병을 테이블 중앙에 놓으세요." },
      { en: "The star is at the center of the galaxy.", kr: "별은 은하계의 중심에 있습니다." }
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
      { en: "We need fresh air in the room.", kr: "우리는 방에 신선한 공기가 필요합니다." },
      { en: "The air in the mountains is clean and cool.", kr: "산속의 공기는 깨끗하고 시원합니다." }
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
      { en: "He injured his head in the accident.", kr: "그는 사고로 머리를 다쳤습니다." },
      { en: "She is the head of the marketing department.", kr: "그녀는 마케팅 부서의 책임자입니다." }
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
    meaning: "돌아오다, 반환하다",
    examples: [
      { en: "When will you return home?", kr: "언제 집에 돌아올 거니?" },
      { en: "You can return the product within 30 days.", kr: "당신은 30일 이내에 제품을 반환할 수 있습니다." }
    ]
  },
  {
    id: "L1-376",
    word: "direct",
    meaning: "직접적인, 지시하다, 감독하다",
    examples: [
      { en: "I prefer a direct answer to my question.", kr: "저는 제 질문에 대한 직접적인 답변을 선호합니다." },
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
      { en: "Please sit here and wait.", kr: "여기에 앉아서 기다려 주세요." },
      { en: "The old house sits on a hill.", kr: "그 낡은 집은 언덕 위에 자리 잡고 있습니다." }
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
      { en: "The old tree died last winter.", kr: "그 오래된 나무는 지난겨울에 죽었습니다." },
      { en: "No one wants to die alone.", kr: "아무도 혼자 죽고 싶어 하지 않습니다." }
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
      { en: "We visited the national museum in Seoul.", kr: "우리는 서울에 있는 국립 박물관을 방문했습니다." },
      { en: "We should focus on national security.", kr: "우리는 국가 안보에 집중해야 합니다." }
    ]
  },
  {
    id: "L1-388",
    word: "strong",
    meaning: "강한",
    examples: [
      { en: "He is a very strong swimmer.", kr: "그는 매우 강한 수영 선수입니다." },
      { en: "The wind was very strong last night.", kr: "어젯밤에 바람이 매우 강했습니다." }
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
    meaning: "손실, 상실",
    examples: [
      { en: "The company reported a major financial loss.", kr: "그 회사는 막대한 재정적 손실을 보고했습니다." },
      { en: "Her death was a great loss to the family.", kr: "그녀의 죽음은 가족에게 큰 상실이었습니다." }
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
    meaning: "어머니",
    examples: [
      { en: "My mother is a kind person.", kr: "우리 어머니는 친절한 분입니다." },
      { en: "She became a mother last year.", kr: "그녀는 작년에 엄마가 되었어." }
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
    meaning: "공유하다, 몫",
    examples: [
      { en: "Can you share your notes with me?", kr: "네 노트를 나와 공유해 줄 수 있니?" },
      { en: "He has a large share in the company.", kr: "그는 회사에 큰 지분을 가지고 있습니다." }
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
      { en: "She is a university student.", kr: "그녀는 대학생입니다." },
      { en: "All students must wear a uniform.", kr: "모든 학생들은 교복을 입어야 합니다." }
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
    meaning: "성취하다, 달성하다",
    examples: [
      { en: "She worked hard to achieve her goal.", kr: "그녀는 목표를 성취하기 위해 열심히 일했습니다." },
      { en: "It's a great feeling to achieve success.", kr: "성공을 달성하는 것은 정말 기분 좋은 일입니다." }
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
      { en: "The meal consisted of soup, salad, and bread.", kr: "그 식사는 수프, 샐러드, 빵으로 구성되어 있었습니다." }
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
      { en: "The campaign aims to generate public interest.", kr: "그 캠페인은 대중의 관심을 불러일으키는 것을 목표로 합니다." }
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
    meaning: "나타내다, 표시하다, 가리키다",
    examples: [
      { en: "The survey results indicate a rise in sales.", kr: "설문조사 결과는 매출 증가를 나타냅니다." },
      { en: "Please indicate your choice by checking the box.", kr: "상자에 체크하여 선택 사항을 표시해 주세요." }
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
      { en: "The committee will proceed to a vote.", kr: "위원회는 투표에 들어갈 것입니다." }
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
      { en: "Each person has a unique set of fingerprints.", kr: "각 사람은 고유한 지문을 가지고 있습니다." },
      { en: "The artist has a truly unique style.", kr: "그 예술가는 정말 독특한 스타일을 가지고 있습니다." }
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
      { en: "We need to assess the level of risk.", kr: "우리는 위험 수준을 평가해야 합니다." }
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
      { en: "The two languages are very distinct from each other.", kr: "그 두 언어는 서로 뚜렷이 구별됩니다." },
      { en: "I heard the distinct sound of a bell ringing.", kr: "나는 종이 울리는 뚜렷한 소리를 들었습니다." }
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
      { en: "This list is merely a guideline, not a strict rule.", kr: "이 목록은 그저 지침일 뿐, 엄격한 규칙은 아닙니다." }
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
      { en: "Primary colors are red, yellow, and blue.", kr: "삼원색(1차색)은 빨강, 노랑, 파랑입니다." }
    ]
  },
  {
    id: "L2-044",
    word: "proportion",
    meaning: "비율, 부분",
    examples: [
      { en: "A large proportion of the budget was spent on advertising.", kr: "예산의 큰 부분이 광고에 쓰였습니다." },
      { en: "Mix the flour and water in the right proportion.", kr: "밀가루와 물을 알맞은 비율로 섞으세요." }
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
      { en: "The horse was kept in the stable.", kr: "그 말은 마구간에서 지냈습니다." }
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
      { en: "This trip was the ultimate adventure of my life.", kr: "이번 여행은 내 인생 최고의 모험이었습니다." }
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
      { en: "The problem became apparent after a few days.", kr: "며칠 후에 그 문제가 분명해졌습니다." }
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
      { en: "We must uphold corporate social responsibility.", kr: "우리는 기업의 사회적 책임을 다해야 합니다." }
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
    meaning: "노출시키다, 폭로하다",
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
      { en: "The king governed the country for forty years.", kr: "그 왕은 40년 동안 나라를 통치했습니다." },
      { en: "The rules that govern the competition are clear.", kr: "그 대회를 규율하는 규칙들은 명확합니다." }
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
      { en: "She holds very liberal views on social issues.", kr: "그녀는 사회 문제에 대해 매우 진보적인 견해를 가지고 있습니다." },
      { en: "The school has a liberal attitude toward dress codes.", kr: "그 학교는 복장 규정에 대해 자유로운 태도를 가지고 있습니다." }
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
      { en: "The clock shows the precise time.", kr: "그 시계는 정확한 시간을 보여줍니다." }
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
    meaning: "복원하다, 회복시키다",
    examples: [
      { en: "The painting was carefully restored by experts.", kr: "그 그림은 전문가들에 의해 조심스럽게 복원되었습니다." },
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
      { en: "He was the sole survivor of the crash.", kr: "그는 그 사고의 유일한 생존자였습니다." },
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
      { en: "The initial excitement faded in the subsequent weeks.", kr: "처음의 흥분은 그 이후 몇 주 동안 사그라들었습니다." }
    ]
  },
  {
    id: "L2-080",
    word: "submit",
    meaning: "제출하다, 굴복하다",
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
      { en: "We moved into a temporary office during the renovation.", kr: "우리는 리노베이션 기간 동안 임시 사무실로 옮겼습니다." },
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
      { en: "Repeated failures did not diminish his enthusiasm.", kr: "거듭된 실패도 그의 열정을 줄이지 못했습니다." }
    ]
  },
  {
    id: "L2-090",
    word: "emerge",
    meaning: "나타나다, 출현하다",
    examples: [
      { en: "A new leader emerged from the election.", kr: "선거에서 새로운 지도자가 나타났습니다." },
      { en: "The facts finally emerged after a long investigation.", kr: "긴 조사 끝에 마침내 사실들이 드러났습니다." }
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
      { en: "The storm caused massive damage to the coast.", kr: "그 폭풍은 해안에 막대한 피해를 입혔습니다." },
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
      { en: "The economy needs to sustain its growth rate.", kr: "경제는 성장세를 지속해야 합니다." },
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
      { en: "We have an adequate supply of food.", kr: "우리는 식량을 충분히 확보하고 있습니다." },
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
    meaning: "보상하다, 보완하다",
    examples: [
      { en: "The company compensated him for the damage.", kr: "회사는 그에게 피해에 대해 보상했습니다." },
      { en: "His talent compensates for his lack of experience.", kr: "그의 재능은 경험 부족을 보완해 줍니다." }
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
      { en: "The detective deduced the killer's identity.", kr: "탐정은 살인자의 신원을 추론해 냈습니다." }
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
      { en: "The museum hosts a diverse collection of art.", kr: "그 박물관은 다양한 예술품을 소장하고 있습니다." }
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
    meaning: "틀, 체계, 골조",
    examples: [
      { en: "The new law provides a legal framework for the trade.", kr: "새 법은 그 거래에 대한 법적 틀을 제공합니다." },
      { en: "We built the house using a wooden framework.", kr: "우리는 나무 골조를 사용하여 집을 지었습니다." }
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
    meaning: "의견, 입력, 투입",
    examples: [
      { en: "We welcome your input on this new design.", kr: "이 새로운 디자인에 대한 여러분의 의견을 환영합니다." },
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
    meaning: "라벨을 붙이다, 라벨, 꼬리표",
    examples: [
      { en: "Please label the boxes clearly.", kr: "상자들에 라벨을 분명하게 붙여 주세요." },
      { en: "He hates being given the label of 'genius'.", kr: "그는 '천재'라는 꼬리표가 붙는 것을 싫어합니다." }
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
      { en: "Switzerland remained neutral during the war.", kr: "스위스는 전쟁 동안 중립을 지켰습니다." }
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
      { en: "The discovery of gravity was preceded by years of study.", kr: "중력의 발견에 앞서 수년간의 연구가 있었습니다." },
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
      { en: "The society works to preserve historic buildings.", kr: "그 협회는 역사적인 건물들을 보존하기 위해 노력합니다." },
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
    meaning: "복제하다, 재현하다",
    examples: [
      { en: "Scientists are trying to replicate the experiment results.", kr: "과학자들은 그 실험 결과를 재현하려고 노력하고 있습니다." },
      { en: "The software can replicate data across multiple servers.", kr: "그 소프트웨어는 여러 서버에 데이터를 복제할 수 있습니다." }
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
      { en: "You can substitute chicken for beef in this recipe.", kr: "이 레시피에서는 쇠고기 대신 닭고기를 써도 됩니다." },
      { en: "Honey is a healthy substitute for sugar.", kr: "꿀은 설탕의 건강한 대용품입니다." }
    ]
  },
  {
    id: "L2-156",
    word: "terminate",
    meaning: "종료하다, 끝내다",
    examples: [
      { en: "The company decided to terminate his employment.", kr: "회사는 그의 고용을 종료하기로 결정했습니다." },
      { en: "The train terminates at the next station.", kr: "그 기차는 다음 역에서 운행을 종료합니다." }
    ]
  },
  {
    id: "L2-157",
    word: "tolerate",
    meaning: "용인하다, 참다, 견디다",
    examples: [
      { en: "We will not tolerate any form of discrimination.", kr: "우리는 어떤 형태의 차별도 용인하지 않을 것입니다." },
      { en: "Plants that tolerate dry conditions are hard to find.", kr: "건조한 환경을 견디는 식물은 찾기 어렵습니다." }
    ]
  },
  {
    id: "L2-158",
    word: "transfer",
    meaning: "이전하다, 이체하다, 갈아타다",
    examples: [
      { en: "He transferred money from his savings account.", kr: "그는 저축 계좌에서 돈을 이체했습니다." },
      { en: "You will need to transfer to a different line at the next station.", kr: "다음 역에서 다른 노선으로 갈아타야 합니다." }
    ]
  },
  {
    id: "L2-159",
    word: "transform",
    meaning: "변형시키다, 완전히 바꾸다",
    examples: [
      { en: "The internet has transformed the way we communicate.", kr: "인터넷은 우리가 소통하는 방식을 완전히 바꾸어 놓았습니다." },
      { en: "The renovation transformed the old building into a modern office.", kr: "그 리노베이션은 오래된 건물을 현대적인 사무실로 탈바꿈시켰습니다." }
    ]
  },
  {
    id: "L2-160",
    word: "unanimous",
    meaning: "만장일치의",
    examples: [
      { en: "The vote was a unanimous decision.", kr: "그 투표는 만장일치의 결정이었습니다." },
      { en: "All members were unanimous in their approval.", kr: "모든 구성원들이 만장일치로 승인했습니다." }
    ]
  },
  {
    id: "L2-161",
    word: "utilize",
    meaning: "활용하다, 이용하다",
    examples: [
      { en: "We must utilize every moment of our time.", kr: "우리는 우리 시간의 모든 순간을 활용해야 합니다." },
      { en: "The company utilizes solar power to save energy.", kr: "그 회사는 에너지를 절약하기 위해 태양광 에너지를 이용합니다." }
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
      { en: "I need to draft a letter to the editor.", kr: "나는 편집자에게 보낼 편지의 초안을 작성해야 합니다." }
    ]
  },
  {
    id: "L2-166",
    word: "enforce",
    meaning: "집행하다, 강요하다",
    examples: [
      { en: "New rules will be strictly enforced starting tomorrow.", kr: "새로운 규칙들은 내일부터 엄격하게 집행될 것입니다." },
      { en: "The teacher tried to enforce silence in the classroom.", kr: "선생님은 교실에서 침묵을 강요하려고 했습니다." }
    ]
  },
  {
    id: "L2-167",
    word: "expel",
    meaning: "추방하다, 쫓아내다",
    examples: [
      { en: "The club voted to expel the member for misconduct.", kr: "클럽은 비행으로 그 구성원을 추방하기로 투표했습니다." },
      { en: "He was expelled from school for cheating.", kr: "그는 부정행위로 학교에서 퇴학당했습니다." }
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
      { en: "She decided not to intervene in her children's argument.", kr: "그녀는 아이들의 말다툼에 개입하지 않기로 했습니다." }
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
      { en: "We are waiting for the preliminary results of the election.", kr: "우리는 선거의 잠정 결과를 기다리고 있습니다." }
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
      { en: "He reiterated his innocence during the interview.", kr: "그는 인터뷰 동안 자신의 무죄를 거듭 주장했습니다." }
    ]
  },
  {
    id: "L2-181",
    word: "restrict",
    meaning: "제한하다, 한정하다",
    examples: [
      { en: "The law restricts the sale of alcohol to minors.", kr: "그 법은 미성년자에게 술 판매를 제한합니다." },
      { en: "We must restrict our food intake to lose weight.", kr: "우리는 체중 감량을 위해 음식 섭취를 제한해야 합니다." }
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
      { en: "The smell of fresh bread tempted me into the bakery.", kr: "갓 구운 빵 냄새가 나를 빵집 안으로 유혹했습니다." }
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
    meaning: "겪다, (검사·수술 등을) 받다",
    examples: [
      { en: "The patient will undergo a series of tests.", kr: "그 환자는 일련의 검사를 받을 것입니다." },
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
      { en: "Please verify the information with the original source.", kr: "원래 출처와 대조하여 정보를 확인해 주세요." },
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
    meaning: "전하는 바에 의하면, ~했다고 알려진",
    examples: [
      { en: "The suspect allegedly confessed to the crime.", kr: "그 용의자는 범죄를 자백한 것으로 알려졌습니다." },
      { en: "He was arrested for allegedly selling stolen goods.", kr: "그는 훔친 물건을 판매한 혐의로 체포되었습니다." }
    ]
  },
  {
    id: "L2-196",
    word: "conscious",
    meaning: "의식하는, 자각하는",
    examples: [
      { en: "She was conscious of being watched.", kr: "그녀는 감시당하고 있다는 것을 의식하고 있었습니다." },
      { en: "We must be environmentally conscious in our decisions.", kr: "우리는 결정을 내릴 때 환경을 의식해야 합니다." }
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
      { en: "The government made wearing masks mandatory in public spaces.", kr: "정부는 공공장소에서 마스크 착용을 의무화했습니다." }
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
      { en: "The company’s strategy is oriented towards innovation.", kr: "그 회사의 전략은 혁신을 지향합니다." }
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
      { en: "Smartphone addiction is increasingly prevalent among teenagers.", kr: "스마트폰 중독은 십 대들 사이에서 점점 더 널리 퍼지고 있습니다." }
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
      { en: "He has no recollection of the accident.", kr: "그는 그 사고에 대한 아무런 기억이 없습니다." },
      { en: "I have a vague recollection of meeting her before.", kr: "나는 전에 그녀를 만났던 희미한 기억이 있습니다." }
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
      { en: "She was reluctant to admit her mistake.", kr: "그녀는 자신의 실수를 인정하기를 꺼렸습니다." },
      { en: "The government was reluctant to impose new taxes.", kr: "정부는 새로운 세금을 부과하기를 꺼렸습니다." }
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
    meaning: "엄격한, 뻣뻣한, 융통성 없는",
    examples: [
      { en: "The school has a rigid set of rules.", kr: "그 학교는 엄격한 일련의 규칙을 가지고 있습니다." },
      { en: "The elderly man's joints were rigid and painful.", kr: "그 노인의 관절은 뻣뻣하고 통증이 있었습니다." }
    ]
  },
  {
    id: "L2-217",
    word: "sequence",
    meaning: "순서, 연속, 서열",
    examples: [
      { en: "The DNA sequence was analyzed by the scientists.", kr: "DNA 서열이 과학자들에 의해 분석되었습니다." },
      { en: "Please put the pictures in the correct sequence.", kr: "사진들을 올바른 순서대로 놓아 주세요." }
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
      { en: "The contract specifies the terms of the agreement.", kr: "그 계약서는 합의 조건을 명시하고 있습니다." }
    ]
  },
  {
    id: "L2-220",
    word: "static",
    meaning: "정적인, 고정된",
    examples: [
      { en: "Static images are often less engaging than videos.", kr: "정적인 이미지는 동영상보다 덜 흥미로운 경우가 많습니다." },
      { en: "Inflation remained static for three consecutive months.", kr: "인플레이션은 3개월 연속으로 고정된 상태를 유지했습니다." }
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
      { en: "Children must be accompanied by an adult.", kr: "어린이는 성인을 동반해야 합니다." },
      { en: "The storm was accompanied by strong winds.", kr: "그 폭풍은 강한 바람을 동반했습니다." }
    ]
  },
  {
    id: "L2-230",
    word: "acknowledge",
    meaning: "인정하다, 승인하다",
    examples: [
      { en: "He acknowledged that he was wrong.", kr: "그는 자신이 틀렸다는 것을 인정했습니다." },
      { en: "The gift was sent to acknowledge her hard work.", kr: "그 선물은 그녀의 노고를 인정하는 뜻으로 보내졌습니다." }
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
      { en: "This document is highly confidential and should not be shared.", kr: "이 문서는 극비이므로 공유되어서는 안 됩니다." },
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
    meaning: "헌신하다, 전념하다, (시간을) 바치다",
    examples: [
      { en: "She devoted herself to her career.", kr: "그녀는 자신의 경력에 헌신했습니다." },
      { en: "I devote a few hours every day to exercise.", kr: "나는 매일 몇 시간을 운동에 할애합니다." }
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
      { en: "The contract is for a duration of three years.", kr: "그 계약의 기간은 3년입니다." },
      { en: "She slept for the entire duration of the flight.", kr: "그녀는 비행 시간 내내 잠을 잤습니다." }
    ]
  },
  {
    id: "L2-239",
    word: "exceed",
    meaning: "초과하다",
    examples: [
      { en: "The cost should not exceed $1000.", kr: "비용은 1000달러를 초과해서는 안 됩니다." },
      { en: "His performance exceeded all expectations.", kr: "그의 성과는 모든 기대를 넘어섰습니다." }
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
      { en: "The problem has multiple contributing factors.", kr: "그 문제에는 여러 복합적인 원인이 있습니다." }
    ]
  },
  {
    id: "L2-254",
    word: "oblige",
    meaning: "의무적으로 만들다, 호의를 베풀다",
    examples: [
      { en: "The law obliges parents to send their children to school.", kr: "그 법은 부모들이 자녀를 학교에 보내도록 의무적으로 만듭니다." },
      { en: "I was happy to oblige when she asked for help.", kr: "그녀가 도움을 요청했을 때 나는 기꺼이 호의를 베풀었습니다." }
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
    meaning: "점령하다, 차지하다",
    examples: [
      { en: "The military began to occupy the city.", kr: "군대는 그 도시를 점령하기 시작했습니다." },
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
      { en: "I presume you are here for the meeting.", kr: "당신이 회의 때문에 여기에 왔다고 추정합니다." },
      { en: "Do not presume to tell me what to do.", kr: "감히 나에게 이래라저래라 하지 마세요." }
    ]
  },
  {
    id: "L2-262",
    word: "previous",
    meaning: "이전의",
    examples: [
      { en: "She had no previous experience in this field.", kr: "그녀는 이 분야에서 이전의 경험이 없었습니다." },
      { en: "This year's results are better than the previous year's.", kr: "올해 결과는 이전 해보다 더 좋습니다." }
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
    meaning: "균일한, 통일된, 제복",
    examples: [
      { en: "All the students wore a school uniform.", kr: "모든 학생들은 교복을 입었습니다." },
      { en: "We need a uniform standard for all data.", kr: "우리는 모든 데이터에 대한 통일된 기준이 필요합니다." }
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
      { en: "We will try to accommodate your request.", kr: "저희는 당신의 요청을 수용하도록 노력하겠습니다." }
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
    meaning: "배치하다, (시스템을) 도입하다",
    examples: [
      { en: "The military will deploy more troops to the area.", kr: "군대는 그 지역에 더 많은 병력을 배치할 것입니다." },
      { en: "The company decided to deploy a new security system.", kr: "그 회사는 새로운 보안 시스템을 도입하기로 결정했습니다." }
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
    meaning: "오로지, 배타적으로",
    examples: [
      { en: "The shop sells products exclusively for women.", kr: "그 가게는 오로지 여성을 위한 제품만을 판매합니다." },
      { en: "The resort is exclusively for guests over 18.", kr: "그 리조트는 오로지 18세 이상의 손님만 이용할 수 있습니다." }
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
      { en: "Check the index at the back of the book for the topic.", kr: "그 주제를 찾으려면 책 뒤편의 색인을 확인하세요." }
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
      { en: "He apologized to me, and I did likewise to him.", kr: "그는 나에게 사과했고, 나도 마찬가지로 그에게 사과했습니다." }
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
    id: "L2-435",
    word: "detail",
    meaning: "세부 사항, 자세한 내용",
    examples: [
      { en: "Please send me the details of your flight.", kr: "항공편 세부 사항을 보내 주세요." },
      { en: "She always pays attention to every small detail.", kr: "그녀는 항상 작은 세부 사항 하나하나에 신경 써요." }
    ]
  },
  {
    id: "L2-312",
    word: "periodical",
    meaning: "정기 간행물",
    examples: [
      { en: "The library subscribes to many academic periodicals.", kr: "그 도서관은 많은 학술 정기 간행물을 구독합니다." },
      { en: "This periodical is published four times a year.", kr: "이 정기 간행물은 1년에 네 번 발행됩니다." }
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
      { en: "The population of the town is predominantly young.", kr: "그 마을의 인구는 주로 젊습니다." },
      { en: "The team is predominantly composed of software engineers.", kr: "그 팀은 대부분 소프트웨어 엔지니어들로 구성되어 있습니다." }
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
      { en: "The sweater shrank when I washed it in hot water.", kr: "그 스웨터는 뜨거운 물에 세탁했을 때 줄어들었습니다." },
      { en: "The company's profits began to shrink.", kr: "그 회사의 이익이 축소되기 시작했습니다." }
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
    meaning: "안정시키다",
    examples: [
      { en: "The government took measures to stabilize the currency.", kr: "정부는 통화를 안정시키기 위한 조치를 취했습니다." },
      { en: "His condition has stabilized after the operation.", kr: "그의 상태는 수술 후 안정되었습니다." }
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
      { en: "Please give me a quick summary of the meeting.", kr: "회의 내용을 간단히 요약해 주세요." }
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
    meaning: "목표, 목표로 하다",
    examples: [
      { en: "Our target market is young adults.", kr: "우리의 목표 시장은 젊은 성인들입니다." },
      { en: "The advertisement is targeted at health-conscious consumers.", kr: "그 광고는 건강을 의식하는 소비자들을 목표로 합니다." }
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
    meaning: "이론",
    examples: [
      { en: "He proposed a new theory of economic growth.", kr: "그는 경제 성장의 새로운 이론을 제안했습니다." },
      { en: "In theory, this plan should work perfectly.", kr: "이론상으로는 이 계획이 완벽하게 작동해야 합니다." }
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
    meaning: "용량, 부피, 음량",
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
    meaning: "접근, 접근하다",
    examples: [
      { en: "Only authorized personnel have access to the server.", kr: "인가된 직원만이 서버에 접근할 수 있습니다." },
      { en: "How can I access my email account?", kr: "제 이메일 계정에 어떻게 접근할 수 있습니까?" }
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
    meaning: "경제, 절약",
    examples: [
      { en: "The national economy is showing signs of recovery.", kr: "국민 경제는 회복의 징후를 보이고 있습니다." },
      { en: "For reasons of economy, we shared a hotel room.", kr: "절약을 위해 우리는 호텔 방을 함께 썼습니다." }
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
    meaning: "기능, 작동하다",
    examples: [
      { en: "The main function of the heart is to pump blood.", kr: "심장의 주요 기능은 피를 펌프질하는 것입니다." },
      { en: "The new software is functioning well.", kr: "새 소프트웨어는 잘 작동하고 있습니다." }
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
      { en: "He has a steady income from his job.", kr: "그는 그의 직업에서 꾸준한 소득을 얻습니다." },
      { en: "The charity relies on donations for its income.", kr: "그 자선 단체는 수입을 위해 기부에 의존합니다." }
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
    meaning: "개인의, 개체",
    examples: [
      { en: "Each individual is responsible for their own actions.", kr: "각 개인은 자신의 행동에 책임이 있습니다." },
      { en: "The test measures the development of each individual child.", kr: "그 테스트는 각 개별 아동의 발달을 측정합니다." }
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
      { en: "Congress legislated against discrimination in the workplace.", kr: "의회는 직장 내 차별을 금지하는 법을 제정했습니다." }
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
      { en: "We need a more efficient method of communication.", kr: "우리는 더 효율적인 통신 방법이 필요합니다." },
      { en: "This new method reduces the processing time by half.", kr: "이 새로운 방식은 처리 시간을 절반으로 줄여줍니다." }
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
      { en: "Only ten percent of the applicants were accepted.", kr: "지원자 중 오직 10퍼센트만이 합격했습니다." },
      { en: "The price increased by 5 percent last month.", kr: "지난달에 가격이 5퍼센트 상승했습니다." }
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
      { en: "The decision was based on sound moral principles.", kr: "그 결정은 건전한 도덕적 원칙들에 기반했습니다." },
      { en: "The machine works on the principle of air pressure.", kr: "그 기계는 공기압의 원리로 작동합니다." }
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
    meaning: "개정하다, 수정하다",
    examples: [
      { en: "The committee voted to amend the school policy.", kr: "위원회는 학교 정책을 개정하기 위해 투표했습니다." },
      { en: "The lawyer asked me to amend the contract slightly.", kr: "변호사는 나에게 계약을 약간 수정해 달라고 요청했습니다." }
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
      { en: "You need to assert yourself in negotiations.", kr: "당신은 협상에서 자기 주장을 분명히 해야 합니다." }
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
      { en: "I assume you have read the documents.", kr: "당신이 문서들을 읽었다고 추정합니다." },
      { en: "She will assume the role of team leader next month.", kr: "그녀는 다음 달에 팀 리더 역할을 맡을 것입니다." }
    ]
  },
  {
    id: "L3-010",
    word: "attribute",
    meaning: "(~의) 덕분/탓으로 돌리다, 속성",
    examples: [
      { en: "He attributes his success to hard work and luck.", kr: "그는 자신의 성공을 노력과 운 덕분으로 돌립니다." },
      { en: "Patience is an important attribute of a good teacher.", kr: "인내는 좋은 선생님의 중요한 속성입니다." }
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
      { en: "The company will cease operations in the region.", kr: "그 회사는 그 지역에서 운영을 중단할 것입니다." },
      { en: "The rain ceased shortly after we arrived.", kr: "우리가 도착한 직후 비가 멈췄습니다." }
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
    meaning: "제약하다, 억누르다",
    examples: [
      { en: "The lack of funds severely constrained the project.", kr: "자금 부족이 프로젝트를 심각하게 제약했습니다." },
      { en: "She felt constrained by her own high expectations.", kr: "그녀는 자신의 높은 기대치에 얽매여 있다고 느꼈습니다." }
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
      { en: "The court deprived the parent of custody.", kr: "법원은 그 부모의 양육권을 박탈했습니다." }
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
      { en: "The company refused to disclose its financial records.", kr: "그 회사는 재무 기록 공개를 거부했습니다." },
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
      { en: "The newspaper was accused of distorting the facts.", kr: "그 신문은 사실을 왜곡했다는 비난을 받았습니다." },
      { en: "The funhouse mirror distorts your reflection.", kr: "그 놀이 공원 거울은 당신의 모습을 왜곡합니다." }
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
    meaning: "영역, 분야",
    examples: [
      { en: "That subject is outside my domain of expertise.", kr: "그 주제는 제 전문 지식 영역 밖에 있습니다." },
      { en: "Science is no longer the domain of experts only.", kr: "과학은 더 이상 전문가들만의 영역이 아닙니다." }
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
    meaning: "높이다, 향상시키다",
    examples: [
      { en: "The goal is to elevate the quality of public education.", kr: "목표는 공교육의 질을 높이는 것입니다." },
      { en: "The stage was slightly elevated above the audience.", kr: "무대는 청중석보다 약간 높게 설치되어 있었습니다." }
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
    meaning: "깊숙이 박다, 삽입하다",
    examples: [
      { en: "The stone was firmly embedded in the concrete.", kr: "그 돌은 콘크리트에 단단히 박혀 있었습니다." },
      { en: "News websites often embed video clips in their articles.", kr: "뉴스 웹사이트들은 종종 기사에 동영상을 삽입합니다." }
    ]
  },
  {
    id: "L3-042",
    word: "embrace",
    meaning: "포용하다, 받아들이다, 포옹하다",
    examples: [
      { en: "We must embrace technological change to survive.", kr: "우리는 생존을 위해 기술적 변화를 받아들여야 합니다." },
      { en: "She embraced her friend warmly at the airport.", kr: "그녀는 공항에서 친구를 따뜻하게 포옹했습니다." }
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
      { en: "Many athletes endorse sports brands.", kr: "많은 운동선수들이 스포츠 브랜드의 광고 모델로 활동합니다." }
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
    id: "L3-049",
    word: "entity",
    meaning: "실체, 독립체",
    examples: [
      { en: "The company is a separate legal entity.", kr: "그 회사는 별도의 법적 실체입니다." },
      { en: "Scientists still debate whether a virus is a living entity.", kr: "과학자들은 바이러스가 살아 있는 실체인지 여전히 논쟁합니다." }
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
    meaning: "행사하다, 발휘하다",
    examples: [
      { en: "He had to exert all his strength to lift the rock.", kr: "그는 바위를 들기 위해 자신의 모든 힘을 발휘해야 했습니다." },
      { en: "The new rules exert pressure on small businesses.", kr: "새 규칙들은 소기업에 압력을 행사합니다." }
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
      { en: "It is difficult to extract the oil from the seed.", kr: "그 씨앗에서 기름을 추출하는 것은 어렵습니다." },
      { en: "The dentist had to extract a painful tooth.", kr: "치과 의사는 고통스러운 이를 뽑아내야 했습니다." }
    ]
  },
  {
    id: "L3-062",
    word: "feasible",
    meaning: "실행 가능한",
    examples: [
      { en: "We need a feasible plan that can be implemented quickly.", kr: "우리는 빠르게 시행할 수 있는 실행 가능한 계획이 필요합니다." },
      { en: "Is it technically feasible to build the bridge here?", kr: "여기에 다리를 건설하는 것이 기술적으로 실행 가능합니까?" }
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
      { en: "It is wrong to generalize about an entire group of people.", kr: "어떤 집단 전체에 대해 일반화하는 것은 잘못입니다." },
      { en: "The theory attempts to generalize the results to all living things.", kr: "그 이론은 결과를 모든 생명체에 일반화하려고 시도합니다." }
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
      { en: "Many immigrants come here seeking a better life.", kr: "많은 이민자들이 더 나은 삶을 찾아 이곳으로 옵니다." },
      { en: "The city has a large population of first-generation immigrants.", kr: "그 도시는 많은 1세대 이민자 인구를 가지고 있습니다." }
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
      { en: "The government imposed a ban on smoking in all public parks.", kr: "정부는 모든 공공 공원에 흡연 금지 조치를 부과했습니다." },
      { en: "Do not impose your views on others.", kr: "당신의 견해를 다른 사람에게 강요하지 마세요." }
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
    meaning: "필수적인, 불가결한",
    examples: [
      { en: "Teamwork is an integral part of the company's success.", kr: "팀워크는 회사 성공의 필수적인 부분입니다." },
      { en: "Music is integral to the film's emotional impact.", kr: "음악은 그 영화가 주는 감동에 필수적입니다." }
    ]
  },
  {
    id: "L3-088",
    word: "intense",
    meaning: "강렬한, 극심한",
    examples: [
      { en: "The workout requires intense physical effort.", kr: "그 운동은 강렬한 육체적 노력을 요구합니다." },
      { en: "There was intense pressure to finish the project on time.", kr: "프로젝트를 제시간에 끝내야 한다는 극심한 압박이 있었습니다." }
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
    id: "L3-092",
    word: "intrinsic",
    meaning: "고유한, 본질적인",
    examples: [
      { en: "The painting has immense intrinsic value.", kr: "그 그림은 그 자체로 엄청난 가치를 지니고 있습니다." },
      { en: "The ability to learn is an intrinsic human trait.", kr: "학습 능력은 인간의 본질적인 특성입니다." }
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
      { en: "The cake consists of three layers of cream and sponge.", kr: "그 케이크는 세 겹의 크림과 스폰지로 구성되어 있습니다." },
      { en: "The archaeological dig revealed several layers of ancient civilization.", kr: "그 고고학 발굴은 고대 문명의 여러 층들을 드러냈습니다." }
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
    meaning: "메커니즘, 장치",
    examples: [
      { en: "The old clock has a complex internal mechanism.", kr: "그 오래된 시계는 복잡한 내부 장치를 가지고 있습니다." },
      { en: "We need a mechanism to resolve disputes.", kr: "우리는 분쟁을 해결할 메커니즘이 필요합니다." }
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
    meaning: "상호의, 공통의",
    examples: [
      { en: "The negotiation led to a mutual agreement.", kr: "그 협상은 상호 합의로 이어졌습니다." },
      { en: "They share a mutual interest in photography.", kr: "그들은 사진에 대한 공통의 관심을 공유합니다." }
    ]
  },
  {
    id: "L3-108",
    word: "notable",
    meaning: "주목할 만한, 저명한",
    examples: [
      { en: "The company achieved a notable increase in sales.", kr: "그 회사는 주목할 만한 매출 증가를 달성했습니다." },
      { en: "He is a notable figure in the history of science.", kr: "그는 과학 역사에서 저명한 인물입니다." }
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
      { en: "His lack of experience notwithstanding, he got the job.", kr: "그의 경험 부족에도 불구하고, 그는 그 일자리를 얻었습니다." }
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
      { en: "Global warming is a complex phenomenon.", kr: "지구 온난화는 복잡한 현상입니다." },
      { en: "The sudden popularity of the song was an unusual phenomenon.", kr: "그 노래의 갑작스러운 인기는 특이한 현상이었습니다." }
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
    meaning: "이전의, 앞선",
    examples: [
      { en: "You need prior experience for this job.", kr: "당신은 이 일자리를 위해 이전의 경험이 필요합니다." },
      { en: "The event occurred prior to the signing of the agreement.", kr: "그 사건은 계약 체결에 앞서 발생했습니다." }
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
      { en: "The company needs a radical overhaul of its management.", kr: "그 회사는 경영 방식을 근본적으로 개편해야 합니다." },
      { en: "He holds radical political views.", kr: "그는 급진적인 정치적 견해를 가지고 있습니다." }
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
    meaning: "번식하다, 복제하다",
    examples: [
      { en: "The artist has the sole right to reproduce his work.", kr: "그 예술가는 자신의 작품을 복제할 유일한 권리를 가지고 있습니다." },
      { en: "Many species of fish reproduce during the spring.", kr: "많은 종의 물고기가 봄 동안 번식합니다." }
    ]
  },
  {
    id: "L3-146",
    word: "resort",
    meaning: "(수단에) 의지하다, 리조트",
    examples: [
      { en: "They had to resort to force to open the door.", kr: "그들은 문을 열기 위해 결국 힘을 써야 했습니다." },
      { en: "We are planning a trip to a seaside resort.", kr: "우리는 해변 리조트로 여행을 계획하고 있습니다." }
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
    meaning: "되찾다, 회수하다",
    examples: [
      { en: "I need to retrieve the file from the backup server.", kr: "저는 백업 서버에서 파일을 되찾아와야 합니다." },
      { en: "The dog was trained to retrieve objects.", kr: "그 개는 물건을 물어 오도록 훈련되었습니다." }
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
      { en: "We prepared for several worst-case scenarios.", kr: "우리는 몇 가지 최악의 시나리오에 대비했습니다." },
      { en: "In the best scenario, we will finish by Friday.", kr: "최상의 시나리오라면 우리는 금요일까지 끝낼 것입니다." }
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
    meaning: "보안, 안전",
    examples: [
      { en: "Data security is a top priority for the company.", kr: "데이터 보안은 회사의 최우선 과제입니다." },
      { en: "The new system ensures personal security.", kr: "새로운 시스템은 개인의 안전을 보장합니다." }
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
    meaning: "법규, 법령",
    examples: [
      { en: "The new statute requires all citizens to pay the fee.", kr: "새 법령은 모든 시민들이 수수료를 지불하도록 요구합니다." },
      { en: "The action violates an old state statute.", kr: "그 행위는 오래된 주 법규를 위반합니다." }
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
      { en: "We conducted a detailed survey of customer satisfaction.", kr: "우리는 고객 만족에 대한 상세한 설문 조사를 실시했습니다." },
      { en: "The team surveyed the damage after the hurricane.", kr: "팀은 허리케인 후 피해를 조사했습니다." }
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
    meaning: "상징",
    examples: [
      { en: "The white dove is a symbol of peace.", kr: "흰 비둘기는 평화의 상징입니다." },
      { en: "The logo is a powerful symbol of the brand.", kr: "그 로고는 브랜드의 강력한 상징입니다." }
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
      { en: "The transition from school to work can be difficult.", kr: "학교에서 직장으로의 전환은 어려울 수 있습니다." }
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
      { en: "We have to pay the utility bills every month.", kr: "우리는 매달 공과금을 내야 합니다." }
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
      { en: "The final match is Korea versus Japan.", kr: "결승전은 한국 대 일본의 경기입니다." }
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
      { en: "The company has a virtual monopoly on the market.", kr: "그 회사는 시장을 사실상 독점하고 있습니다." }
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
      { en: "She works at the hospital on a voluntary basis.", kr: "그녀는 병원에서 자원봉사로 일합니다." }
    ]
  },
  {
    id: "L3-177",
    word: "whereby",
    meaning: "~하는 것에 의하여",
    examples: [
      { en: "They established a system whereby members could vote online.", kr: "그들은 구성원들이 온라인으로 투표할 수 있는 시스템을 확립했습니다." },
      { en: "We made an agreement whereby each person pays half the rent.", kr: "우리는 각자 집세의 절반을 내기로 하는 합의를 했습니다." }
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
      { en: "The city has modern buildings, whilst the old town keeps its historic charm.", kr: "도시에는 현대적인 건물들이 있는 반면, 구시가지는 역사적인 매력을 간직하고 있습니다." }
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
      { en: "Every public servant should be held accountable.", kr: "모든 공무원은 책임을 져야 합니다." }
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
    meaning: "기이한, 특이한",
    examples: [
      { en: "The artist is known for his bizarre sculptures.", kr: "그 예술가는 그의 기이한 조각품들로 알려져 있습니다." },
      { en: "We heard a bizarre story about a talking dog.", kr: "우리는 말하는 개에 대한 특이한 이야기를 들었습니다." }
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
      { en: "Contrary to popular belief, bats are not blind.", kr: "일반적인 믿음과 반대로, 박쥐는 앞을 못 보는 것이 아닙니다." }
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
    meaning: "적자, 부족액",
    examples: [
      { en: "The company reported a large financial deficit.", kr: "그 회사는 큰 재정 적자를 보고했습니다." },
      { en: "He suffers from a sleep deficit.", kr: "그는 수면 부족에 시달립니다." }
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
      { en: "The company is facing financial difficulties this year.", kr: "그 회사는 올해 재정적 어려움을 겪고 있어요." }
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
    meaning: "의도, 의사",
    examples: [
      { en: "I had no intention of hurting your feelings.", kr: "네 기분을 상하게 할 의도는 없었어." },
      { en: "She announced her intention to run for mayor.", kr: "그녀는 시장 선거에 출마할 의사를 밝혔어요." }
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
    meaning: "확장하다, 확대하다, 팽창하다",
    examples: [
      { en: "The company plans to expand its business into Europe.", kr: "그 회사는 유럽으로 사업을 확장할 계획입니다." },
      { en: "Heat causes most gases to expand.", kr: "열은 대부분의 기체를 팽창하게 합니다." }
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
      { en: "The company made a substantial profit last year.", kr: "그 회사는 작년에 상당한 이익을 냈습니다." },
      { en: "There's been a substantial increase in rent this year.", kr: "올해 임대료가 상당히 올랐어요." }
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
    meaning: "혁신, 새로운 것",
    examples: [
      { en: "Innovation is key to staying ahead of competitors.", kr: "경쟁사보다 앞서려면 혁신이 핵심이에요." },
      { en: "The smartphone was a huge innovation in technology.", kr: "스마트폰은 기술 분야의 엄청난 혁신이었어요." }
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
      { en: "The battery is low; hence, the device will not work.", kr: "배터리가 부족합니다. 그러므로 장치가 작동하지 않을 것입니다." },
      { en: "He is moving to London, hence the house sale.", kr: "그는 런던으로 이사할 예정이고, 따라서 집을 파는 것입니다." }
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
      { en: "The central bank aims to maintain price stability.", kr: "중앙은행은 물가 안정을 유지하는 것을 목표로 합니다." }
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
      { en: "The documents implicate him in the crime.", kr: "그 문서들은 그가 범죄에 연루되었음을 시사합니다." },
      { en: "He refused to speak, fearing he might implicate his friends.", kr: "그는 친구들을 연루시킬까 두려워 말하기를 거부했습니다." }
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
    meaning: "영향력, 지렛대 효과, 활용하다",
    examples: [
      { en: "The company used its size as leverage in the negotiation.", kr: "그 회사는 협상에서 자사의 규모를 영향력으로 사용했습니다." },
      { en: "We can leverage technology to improve efficiency.", kr: "우리는 효율성을 개선하기 위해 기술을 활용할 수 있습니다." }
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
      { en: "The city raised the minimum wage this year.", kr: "시는 올해 최저 임금을 인상했습니다." },
      { en: "Many workers say their wages haven't kept up with prices.", kr: "많은 노동자들이 임금이 물가를 따라가지 못한다고 말합니다." }
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
    meaning: "분명히 표현하다",
    examples: [
      { en: "She articulated her vision for the company very clearly.", kr: "그녀는 회사에 대한 자신의 비전을 매우 분명하게 표현했습니다." },
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
    meaning: "순환하다, (소문 등이) 퍼지다, 유통되다",
    examples: [
      { en: "The fan helps to circulate air throughout the room.", kr: "선풍기는 방 전체에 공기를 순환시키는 데 도움을 줍니다." },
      { en: "The rumor began to circulate quickly through the office.", kr: "그 소문은 사무실 전체에 빠르게 퍼지기 시작했습니다." }
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
      { en: "The program aims to foster cooperation among the members.", kr: "그 프로그램은 구성원들 사이의 협력을 촉진하는 것을 목표로 합니다." },
      { en: "Good leadership fosters trust and loyalty.", kr: "좋은 리더십은 신뢰와 충성심을 촉진합니다." }
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
    meaning: "(손해를) 입다, 발생시키다",
    examples: [
      { en: "The project incurred unexpected costs due to delays.", kr: "그 프로젝트는 지연 때문에 예상치 못한 비용을 발생시켰습니다." },
      { en: "The company incurred heavy fines for violating the safety regulations.", kr: "그 회사는 안전 규정 위반으로 막대한 벌금을 물었습니다." }
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
      { en: "The football team felt invincible after winning every game of the season.", kr: "그 축구팀은 시즌 전 경기에서 승리한 후 스스로 무적이라고 느꼈습니다." },
      { en: "He believed he was invincible until he faced a major setback.", kr: "그는 큰 차질에 직면할 때까지 자신이 천하무적이라고 믿었습니다." }
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
    meaning: "영구적인",
    examples: [
      { en: "She is looking for a permanent position at the company.", kr: "그녀는 그 회사에서 영구적인(정규) 직책을 찾고 있습니다." },
      { en: "The ink is permanent and cannot be washed out.", kr: "그 잉크는 영구적이며 지워지지 않습니다." }
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
    meaning: "기관, 제도",
    examples: [
      { en: "Banks and other financial institutions must follow strict rules.", kr: "은행과 기타 금융 기관은 엄격한 규정을 따라야 합니다." },
      { en: "Marriage is one of the oldest social institutions.", kr: "결혼은 가장 오래된 사회 제도 중 하나입니다." }
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
      { en: "This argument is going nowhere, so let's take a break.", kr: "이 논쟁은 아무 데도 이르지 못하니 잠깐 쉬자." }
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
      { en: "I'm incredibly grateful for all your help this year.", kr: "올 한 해 도와주신 모든 것에 정말 엄청나게 감사해요." }
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
      { en: "Agriculture is still important to the local economy.", kr: "농업은 여전히 지역 경제에 중요합니다." },
      { en: "Climate change is a big threat to agriculture.", kr: "기후 변화는 농업에 큰 위협입니다." }
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
    id: "L3-376",
    word: "zenith",
    meaning: "정점, 절정",
    examples: [
      { en: "The company reached its financial zenith in the late 1990s.", kr: "그 회사는 1990년대 후반에 재정적 정점에 도달했습니다." },
      { en: "The sun reached its zenith at noon.", kr: "태양은 정오에 하늘의 가장 높은 지점(정점)에 도달했습니다." }
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
    meaning: "간결하게, 짧게",
    examples: [
      { en: "The chairman spoke briefly about the company's future.", kr: "의장은 회사의 미래에 대해 간결하게 말했습니다." },
      { en: "I only saw her briefly in the hallway.", kr: "복도에서 그녀를 짧게(잠깐) 봤을 뿐입니다." }
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
      { en: "He is equally skilled in both painting and sculpture.", kr: "그는 회화와 조각 모두에 똑같이 능숙합니다." }
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
      { en: "The contract explicitly states the terms of payment.", kr: "계약서에는 지불 조건이 명시적으로 기재되어 있습니다." },
      { en: "He was explicitly warned not to enter the restricted area.", kr: "그는 제한 구역에 들어가지 말라는 명확한 경고를 받았습니다." }
    ]
  },
  {
    id: "L3-389",
    word: "externally",
    meaning: "외부적으로",
    examples: [
      { en: "The building was damaged externally, but the inside was fine.", kr: "그 건물은 외부적으로 손상되었지만, 내부는 괜찮았습니다." },
      { en: "The company sought funding externally, not from its shareholders.", kr: "그 회사는 주주가 아닌 외부에서 자금을 조달했습니다." }
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
    meaning: "특히, 현저하게",
    examples: [
      { en: "Several large cities, notably London and Paris, experienced delays.", kr: "몇몇 대도시들, 특히 런던과 파리에서 지연이 발생했습니다." },
      { en: "The quality of the final product was notably superior.", kr: "최종 제품의 품질은 현저하게 우수했습니다." }
    ]
  },
  {
    id: "L3-400",
    word: "objectively",
    meaning: "객관적으로",
    examples: [
      { en: "We must analyze the data calmly and objectively.", kr: "우리는 자료를 침착하고 객관적으로 분석해야 합니다." },
      { en: "Try to look at the situation objectively, without emotion.", kr: "감정 없이 객관적으로 상황을 보려고 노력하세요." }
    ]
  }
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
      { en: "The automobile industry is shifting toward electric cars.", kr: "자동차 산업이 전기차 쪽으로 옮겨 가고 있습니다." },
      { en: "My grandfather bought his first automobile in 1965.", kr: "할아버지는 1965년에 첫 자동차를 사셨어요." }
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
    meaning: "증가시키다, 늘리다",
    examples: [
      { en: "He augmented his income by teaching evening classes.", kr: "그는 저녁 수업을 가르쳐 수입을 증가시켰습니다." },
      { en: "The goal is to augment the system's capacity by 50%.", kr: "목표는 시스템 용량을 50% 늘리는 것입니다." }
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
    meaning: "구성하다, 이루다",
    examples: [
      { en: "The committee comprises experts from three different nations.", kr: "그 위원회는 세 개의 다른 국가에서 온 전문가들로 구성되어 있습니다." },
      { en: "The novel is comprised of several short stories.", kr: "그 소설은 몇 편의 단편 소설로 이루어져 있습니다." }
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
      { en: "The cause of the fire is still a matter of conjecture.", kr: "화재의 원인은 여전히 추측의 문제입니다." },
      { en: "The book offers interesting conjecture about the future of technology.", kr: "그 책은 기술의 미래에 대한 흥미로운 추측을 내놓습니다." }
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
    meaning: "조건부의, ~에 달린",
    examples: [
      { en: "Our success is contingent upon receiving the necessary funding.", kr: "우리의 성공은 필요한 자금 지원을 받는 것에 달려 있습니다(조건부입니다)." },
      { en: "The job offer is contingent on passing a background check.", kr: "그 채용 제안은 신원 조회 통과를 조건으로 합니다." }
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
    meaning: "인구 통계학적인, 인구층",
    examples: [
      { en: "The company focuses on the older adult demographic.", kr: "그 회사는 고령 성인층에 집중합니다." },
      { en: "We analyze demographic changes to predict housing needs.", kr: "우리는 주택 수요를 예측하기 위해 인구 통계학적인 변화를 분석합니다." }
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
      { en: "Lack of sleep is detrimental to long-term health.", kr: "수면 부족은 장기적인 건강에 해롭습니다." },
      { en: "The scandal had a detrimental effect on the company's stock price.", kr: "그 스캔들은 회사 주가에 해로운 영향을 미쳤습니다." }
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
    meaning: "일반적인, 포괄적인, 상표 없는",
    examples: [
      { en: "The politician's speech was full of generic promises.", kr: "그 정치인의 연설은 일반적인 약속들로 가득했습니다." },
      { en: "You can buy generic brands for less money.", kr: "더 적은 돈으로 무명 상표 제품을 살 수 있습니다." }
    ]
  },
  {
    id: "L4-044",
    word: "homogeneous",
    meaning: "균질의, 동질적인",
    examples: [
      { en: "The mixture must be perfectly homogeneous before testing.", kr: "그 혼합물은 테스트 전에 완전히 균질해야 합니다." },
      { en: "A truly homogeneous society is rare.", kr: "진정으로 동질적인 사회는 드뭅니다." }
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
      { en: "The spice imparts a pungent flavor to the sauce.", kr: "그 향신료는 소스에 톡 쏘는 풍미를 더해 줍니다." }
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
    meaning: "필수적인",
    examples: [
      { en: "A sharp knife is an indispensable tool for a chef.", kr: "날카로운 칼은 요리사에게 필수적인 도구입니다." },
      { en: "She quickly proved herself indispensable to the project.", kr: "그녀는 빠르게 자신이 프로젝트에 필수적인 존재임을 입증했습니다." }
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
    meaning: "무관한, 관계없는",
    examples: [
      { en: "Your personal feelings are irrelevant to the professional discussion.", kr: "당신의 개인적인 감정은 전문적인 논의와 무관합니다." },
      { en: "The judge dismissed the evidence as totally irrelevant.", kr: "판사는 그 증거를 완전히 관계없는 것으로 기각했습니다." }
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
    meaning: "권한, 위임; 명령하다, 의무화하다",
    examples: [
      { en: "The election gave the new leader a clear mandate for change.", kr: "그 선거는 새 지도자에게 변화를 위한 명확한 위임을 부여했습니다." },
      { en: "The law mandates that all children must attend school.", kr: "그 법은 모든 아이들이 학교에 다니도록 의무화하고 있습니다." }
    ]
  },
  {
    id: "L4-067",
    word: "metaphor",
    meaning: "은유",
    examples: [
      { en: "'Life is a journey' is a common metaphor.", kr: "'인생은 여정이다'는 흔한 은유입니다." },
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
    meaning: "통화의, 금전적인",
    examples: [
      { en: "The central bank controls the nation's monetary policy.", kr: "중앙은행은 국가의 통화 정책을 통제합니다." },
      { en: "He was motivated purely by monetary gain.", kr: "그는 순전히 금전적 이익을 위해 움직였습니다." }
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
    meaning: "만연하는, 스며드는",
    examples: [
      { en: "The pervasive influence of social media affects everyone.", kr: "소셜 미디어의 만연하는 영향은 모두에게 영향을 미칩니다." },
      { en: "The pervasive smell of smoke filled the hotel lobby.", kr: "곳곳에 퍼진 연기 냄새가 호텔 로비를 가득 채웠습니다." }
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
    meaning: "전제, 가정",
    examples: [
      { en: "The entire film is based on a fantastic premise.", kr: "영화 전체는 환상적인 전제에 기반하고 있습니다." },
      { en: "His argument rests on a shaky premise.", kr: "그의 주장은 불안정한 전제 위에 놓여 있습니다." }
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
    meaning: "손상되지 않은, 깨끗한",
    examples: [
      { en: "The archaeologists discovered a pristine ancient artifact.", kr: "고고학자들은 손상되지 않은 고대 유물을 발견했습니다." },
      { en: "The mountain lake has pristine, clear water.", kr: "그 산악 호수는 깨끗하고 맑은 물을 가지고 있습니다." }
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
    meaning: "제의, 명제",
    examples: [
      { en: "The investor rejected the business proposition.", kr: "그 투자자는 사업 제의를 거절했습니다." },
      { en: "The entire debate rests on a complex proposition.", kr: "그 전체 논쟁은 복잡한 명제 위에 놓여 있습니다." }
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
      { en: "The actor has an impressive repertoire of voices and accents.", kr: "그 배우는 다양한 목소리와 억양을 구사하는 인상적인 레퍼토리를 가지고 있습니다." }
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
      { en: "In retrospect, I should have studied harder in college.", kr: "돌이켜 보면, 대학 때 공부를 더 열심히 했어야 했어요." }
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
      { en: "Every detail of the new design was subjected to close scrutiny.", kr: "새 디자인의 모든 세부 사항이 면밀한 검토를 받았습니다." }
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
      { en: "The government took a firm stance on the issue.", kr: "정부는 그 문제에 대해 확고한 입장을 취했습니다." },
      { en: "His aggressive stance made negotiations difficult.", kr: "그의 공격적인 태도는 협상을 어렵게 만들었습니다." }
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
    meaning: "오명, 낙인",
    examples: [
      { en: "The organization works to remove the stigma attached to mental illness.", kr: "그 조직은 정신 질환에 붙어 있는 오명을 제거하기 위해 노력합니다." },
      { en: "Being associated with the scandal left a permanent stigma.", kr: "그 스캔들과 연관되는 것은 영구적인 낙인을 남겼습니다." }
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
      { en: "Art appreciation is highly subjective; everyone has a different opinion.", kr: "예술 감상은 매우 주관적입니다; 모든 사람이 다른 의견을 가지고 있습니다." },
      { en: "His review was too subjective to be taken seriously.", kr: "그의 평론은 너무 주관적이어서 진지하게 받아들여지기 어려웠습니다." }
    ]
  },
  {
    id: "L4-102",
    word: "subsidiary",
    meaning: "자회사의, 보조적인",
    examples: [
      { en: "The bank has several subsidiary companies overseas.", kr: "그 은행은 해외에 여러 자회사를 두고 있습니다." },
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
    id: "L4-441",
    word: "prone",
    meaning: "~하기 쉬운, ~하는 경향이 있는",
    examples: [
      { en: "I'm prone to headaches when I don't sleep enough.", kr: "나는 잠을 충분히 못 자면 두통이 잘 생겨." },
      { en: "This area is prone to flooding in the summer.", kr: "이 지역은 여름에 홍수가 나기 쉬워요." }
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
      { en: "The CEO made a unilateral decision without consulting the board.", kr: "최고 경영자는 이사회와 상의 없이 일방적인 결정을 내렸습니다." },
      { en: "The country's unilateral action led to international disapproval.", kr: "그 나라의 일방적인 행동은 국제적인 비난을 초래했습니다." }
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
    meaning: "신념, 유죄 판결",
    examples: [
      { en: "He spoke with deep conviction about the need for reform.", kr: "그는 개혁의 필요성에 대해 깊은 신념을 가지고 말했습니다." },
      { en: "He has a previous conviction for theft.", kr: "그는 절도로 유죄 판결을 받은 전과가 있습니다." }
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
      { en: "She was ecstatic when she heard she got the job.", kr: "그녀는 합격 소식을 듣고 황홀할 만큼 기뻐했습니다." }
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
      { en: "The beauty of the sunset is an ephemeral moment.", kr: "일몰의 아름다움은 덧없이 지나가는 순간입니다." }
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
      { en: "Income inequality has grown in many countries.", kr: "많은 나라에서 소득 불평등이 커졌습니다." },
      { en: "The report highlights gender inequality in the tech industry.", kr: "그 보고서는 기술 업계의 성 불평등을 강조합니다." }
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
      { en: "We discussed a hypothetical scenario to test the new rules.", kr: "우리는 새 규칙을 시험하기 위해 가상의 시나리오를 논의했습니다." },
      { en: "The solution is purely hypothetical until we confirm the data.", kr: "그 해결책은 우리가 데이터를 확인할 때까지 순전히 가정에 불과합니다." }
    ]
  },
  {
    id: "L4-145",
    word: "illicit",
    meaning: "불법적인, 부정한",
    examples: [
      { en: "The police cracked down on the illicit trade of rare artifacts.", kr: "경찰은 희귀 유물들의 불법 거래를 단속했습니다." },
      { en: "They were accused of having an illicit affair.", kr: "그들은 불륜 관계를 맺었다는 비난을 받았습니다." }
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
      { en: "The accountant was meticulous in his attention to detail.", kr: "그 회계사는 세부 사항까지 꼼꼼하게 신경 썼습니다." },
      { en: "The building plans require a meticulous review.", kr: "그 건물 계획은 세심한 검토를 필요로 합니다." }
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
    meaning: "의식하지 못하는, 알아차리지 못하는",
    examples: [
      { en: "He seemed completely oblivious to the danger he was in.", kr: "그는 자신이 처한 위험을 전혀 의식하지 못하는 것처럼 보였습니다." },
      { en: "The driver was oblivious to the siren behind him.", kr: "그 운전자는 뒤에서 울리는 사이렌을 알아차리지 못했습니다." }
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
      { en: "The issue of office lighting is peripheral to the main budget discussion.", kr: "사무실 조명 문제는 주요 예산 논의에서 부차적인 문제입니다." },
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
      { en: "Temperatures plummeted overnight, and the roads froze.", kr: "밤사이 기온이 급락하면서 도로가 얼어붙었습니다." }
    ]
  },
  {
    id: "L4-176",
    word: "poignant",
    meaning: "가슴 아픈, 가슴 뭉클한",
    examples: [
      { en: "The old letter contained a poignant reminder of his lost youth.", kr: "그 오래된 편지는 그의 잃어버린 젊은 시절을 가슴 아프게 떠올리게 했습니다." },
      { en: "Her final performance was a poignant farewell to the stage.", kr: "그녀의 마지막 공연은 무대에 고하는 가슴 뭉클한 작별 인사였습니다." }
    ]
  },
  {
    id: "L4-177",
    word: "precarious",
    meaning: "불안정한, 위태로운",
    examples: [
      { en: "The political situation in the region remains precarious.", kr: "그 지역의 정치 상황은 불안정한 상태로 남아 있습니다." },
      { en: "The climber found himself in a precarious position on the cliff face.", kr: "그 등반가는 절벽에서 위태로운 처지에 놓였습니다." }
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
      { en: "He ate a prodigious amount of food at dinner.", kr: "그는 저녁 식사 때 엄청난 양의 음식을 먹었습니다." }
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
      { en: "The people revere the former president for his humanitarian work.", kr: "사람들은 인도주의적 활동을 펼친 전 대통령을 깊이 존경합니다." },
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
      { en: "Refusing to answer was tantamount to admitting guilt.", kr: "대답을 거부한 것은 유죄를 인정하는 것과 마찬가지였습니다." },
      { en: "Ignoring the warning signs is tantamount to inviting disaster.", kr: "경고 신호를 무시하는 것은 재난을 자초하는 것과 마찬가지입니다." }
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
      { en: "The weed is surprisingly tenacious and difficult to remove.", kr: "그 잡초는 놀라울 정도로 끈질겨서 제거하기 어렵습니다." }
    ]
  },
  {
    id: "L4-202",
    word: "salient",
    meaning: "두드러진, 핵심적인",
    examples: [
      { en: "The most salient feature of the new model is its battery life.", kr: "새 모델의 가장 중요한 특징은 배터리 수명입니다." },
      { en: "She outlined the salient points of the proposal in her introduction.", kr: "그녀는 도입부에서 제안의 핵심 요점들을 간략히 설명했습니다." }
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
      { en: "He possessed a rich lexicon that allowed him to express himself precisely.", kr: "그는 자신을 정확하게 표현할 수 있는 풍부한 어휘를 갖추고 있었습니다." }
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
    meaning: "서로 전혀 다른",
    examples: [
      { en: "The research team brought together disparate fields of study.", kr: "그 연구팀은 서로 전혀 다른 연구 분야들을 한데 모았습니다." },
      { en: "The city is characterized by disparate architectural styles.", kr: "그 도시는 서로 전혀 다른 건축 양식들로 특징지어집니다." }
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
    meaning: "(악의적인) 암시, 넌지시 빗대어 말하기",
    examples: [
      { en: "The rumor was spread through innuendo rather than direct accusation.", kr: "그 소문은 직접적인 비난보다는 암시를 통해 퍼졌습니다." },
      { en: "The article was full of innuendo about his private life.", kr: "그 기사는 그의 사생활에 대한 은근한 암시로 가득했습니다." }
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
    meaning: "병치, 병렬",
    examples: [
      { en: "The artist used the juxtaposition of bright and dark colors effectively.", kr: "그 예술가는 밝은 색과 어두운 색의 병치를 효과적으로 사용했습니다." },
      { en: "The play works through the juxtaposition of comedy and tragedy.", kr: "그 연극은 희극과 비극의 병치를 통해 효과를 냅니다." }
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
      { en: "He was a maverick scientist who rejected conventional theories.", kr: "그는 전통적인 이론을 거부한 독불장군 과학자였습니다." },
      { en: "The company encourages its employees to be mavericks and think differently.", kr: "그 회사는 직원들에게 이단아가 되어 다르게 생각하도록 장려합니다." }
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
    meaning: "강한 기호, 경향",
    examples: [
      { en: "He has a penchant for collecting rare books.", kr: "그는 희귀한 책을 수집하는 강한 기호(경향)가 있습니다." },
      { en: "She has a pronounced penchant for late-night snacking.", kr: "그녀는 늦은 밤에 간식을 먹는 뚜렷한 경향이 있습니다." }
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
    meaning: "과다, 과잉",
    examples: [
      { en: "The market offers a plethora of options for smartphone users.", kr: "시장은 스마트폰 사용자들에게 과다한 선택지를 제공합니다." },
      { en: "A plethora of information can sometimes lead to confusion.", kr: "정보의 과잉은 때때로 혼란을 초래할 수 있습니다." }
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
    meaning: "엉터리, 졸렬한 모방, 왜곡",
    examples: [
      { en: "The whole trial was a travesty of justice.", kr: "그 재판 전체가 정의를 왜곡한 엉터리였습니다." },
      { en: "His performance was a travesty of the original opera.", kr: "그의 공연은 원작 오페라를 졸렬하게 흉내 낸 것이었습니다." }
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
    meaning: "옹호할 수 없는, 지탱할 수 없는",
    examples: [
      { en: "The high costs made the business model financially untenable.", kr: "높은 비용은 그 사업 모델을 재정적으로 지탱할 수 없게 만들었습니다." },
      { en: "His current argument is clearly untenable under cross-examination.", kr: "그의 현재 주장은 반대 심문 하에서 명확히 옹호할 수 없습니다." }
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
    id: "L4-280",
    word: "wanton",
    meaning: "고의적인, 무자비한",
    examples: [
      { en: "The report documented numerous acts of wanton destruction of property.", kr: "그 보고서는 수많은 고의적인 재산 파괴 행위를 기록했습니다." },
      { en: "The general was accused of wanton disregard for civilian lives.", kr: "그 장군은 민간인의 생명을 무자비하게 무시했다는 혐의로 고발당했습니다." }
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
    meaning: "호전적인, 싸우기 좋아하는",
    examples: [
      { en: "The customer became belligerent after his request was denied.", kr: "그 고객은 자신의 요청이 거부된 후 호전적으로 변했습니다." },
      { en: "The two countries maintained a belligerent relationship for decades.", kr: "두 나라는 수십 년 동안 적대적인 관계를 유지했습니다." }
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
    meaning: "신뢰, 신용",
    examples: [
      { en: "The report lends credence to the idea that the economy is recovering.", kr: "그 보고서는 경제가 회복되고 있다는 생각에 신뢰를 더합니다." },
      { en: "I can give no credence to such an absurd story.", kr: "저는 그런 터무니없는 이야기를 전혀 신뢰할 수 없습니다." }
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
    meaning: "양분, 이분법",
    examples: [
      { en: "Many people see a clear dichotomy between work and play.", kr: "많은 사람들은 일과 놀이 사이에 뚜렷한 이분법이 있다고 봅니다." },
      { en: "The book explores the dichotomy between the public and private self.", kr: "그 책은 공적인 자아와 사적인 자아 사이의 이분법을 탐구합니다." }
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
      { en: "The nascent space tourism industry is expected to grow rapidly.", kr: "초기 단계의 우주 관광 산업은 빠르게 성장할 것으로 예상됩니다." },
      { en: "We must protect the nascent democratic institutions in the country.", kr: "우리는 그 나라의 초기의 민주 제도를 보호해야 합니다." }
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
    meaning: "다작하는, 다산의, 풍부한",
    examples: [
      { en: "Picasso was one of the most prolific artists of the 20th century.", kr: "피카소는 20세기 가장 다작하는 예술가 중 한 명이었습니다." },
      { en: "Rabbits are known to be extremely prolific breeders.", kr: "토끼는 번식력이 매우 왕성한 것으로 알려져 있습니다." }
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
    meaning: "썩은 냄새가 나는, 맛이 변한",
    examples: [
      { en: "The butter had been left out and turned rancid.", kr: "버터가 밖에 놓여져서 썩은 냄새가 나게 변했습니다." },
      { en: "You should discard any food that smells rancid.", kr: "썩은 냄새가 나는 모든 음식은 버려야 합니다." }
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
    meaning: "체제 전복적인",
    examples: [
      { en: "The government censored the play for its subversive political message.", kr: "정부는 그 연극의 체제 전복적인 정치적 메시지 때문에 검열했습니다." },
      { en: "The activist was known for his subtle but highly subversive tactics.", kr: "그 활동가는 미묘하지만 매우 체제 전복적인 전술로 알려져 있었습니다." }
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
    id: "L4-324",
    word: "talisman",
    meaning: "부적, 행운의 상징",
    examples: [
      { en: "He carried a small wooden cross as a talisman for good luck.", kr: "그는 행운을 위한 부적으로 작은 나무 십자가를 가지고 다녔습니다." },
      { en: "The ring was a family talisman, passed down through generations.", kr: "그 반지는 세대를 거쳐 전해 내려오는 가족의 행운의 상징이었습니다." }
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
    meaning: "일탈, 이례적인 일, 변이",
    examples: [
      { en: "The sudden drop in temperature was an aberration for this time of year.", kr: "갑작스러운 기온 하락은 이맘때로서는 이례적인 일이었습니다." },
      { en: "He hoped that his recent failure was just an aberration.", kr: "그는 자신의 최근 실패가 일시적인 예외에 불과하기를 바랐습니다." }
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
    id: "L4-335",
    word: "ascetic",
    meaning: "금욕적인, 금욕주의자",
    examples: [
      { en: "He lives an ascetic life, rejecting all forms of luxury.", kr: "그는 모든 종류의 사치를 거부하는 금욕적인 삶을 삽니다." },
      { en: "The monk was a strict ascetic who meditated for hours daily.", kr: "그 승려는 매일 몇 시간 동안 명상하는 엄격한 금욕주의자였습니다." }
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
    meaning: "위축(되다), 쇠퇴",
    examples: [
      { en: "Muscles can atrophy quickly if they are not used regularly.", kr: "근육은 규칙적으로 사용되지 않으면 빠르게 위축될 수 있습니다." },
      { en: "The town suffered an intellectual atrophy after the university closed.", kr: "그 마을은 대학이 문을 닫은 후 지적인 쇠퇴를 겪었습니다." }
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
    meaning: "길조의, 상서로운",
    examples: [
      { en: "The start of the new year was an auspicious time to launch the project.", kr: "새해의 시작은 그 프로젝트를 시작하기에 길한 시기였습니다." },
      { en: "The team won its first game, an auspicious start to the season.", kr: "그 팀은 첫 경기에서 이겼는데, 시즌의 상서로운 출발이었습니다." }
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
    id: "L4-341",
    word: "compendium",
    meaning: "개요서, 모음집, 총람",
    examples: [
      { en: "The book is a compendium of modern philosophical thought.", kr: "그 책은 현대 철학 사상을 집대성한 개요서입니다." },
      { en: "He created a compendium of all the relevant scientific papers.", kr: "그는 관련 과학 논문들을 모두 모은 모음집을 만들었습니다." }
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
      { en: "He felt a sudden surge of enmity toward his betrayer.", kr: "그는 자신을 배신한 사람에게 갑자기 강한 원한을 느꼈습니다." }
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
    id: "L4-352",
    word: "extant",
    meaning: "현존하는, 남아있는",
    examples: [
      { en: "There are only a few extant copies of the original manuscript.", kr: "원래 원고의 현존하는 사본은 몇 부밖에 없습니다." },
      { en: "The museum displays the oldest extant artifacts from the Roman era.", kr: "그 박물관은 로마 시대의 가장 오래된 남아있는 유물들을 전시합니다." }
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
    id: "L4-356",
    word: "hallowed",
    meaning: "신성한, 신성시되는",
    examples: [
      { en: "Westminster Abbey is a hallowed place for British history.", kr: "웨스트민스터 사원은 영국 역사에 있어 신성한 장소입니다." },
      { en: "The battlefield remains a hallowed ground, dedicated to the fallen soldiers.", kr: "그 전쟁터는 전사한 군인들에게 바쳐진 신성시되는 땅으로 남아 있습니다." }
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
    meaning: "물에 잠긴, 쇄도하는",
    examples: [
      { en: "The coastal area was inundated by the storm surge.", kr: "그 해안 지역은 폭풍 해일에 물에 잠겼습니다." },
      { en: "After the commercial, the call center was immediately inundated with orders.", kr: "광고가 나간 후, 콜센터에는 즉시 주문이 쇄도했습니다." }
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
    meaning: "잠재적인, 숨어있는",
    examples: [
      { en: "The virus can remain latent in the body for years.", kr: "그 바이러스는 수년간 체내에 잠복해 있을 수 있습니다." },
      { en: "His artistic talent remained latent until he reached college.", kr: "그의 예술적 재능은 대학에 들어갈 때까지 숨어 있었습니다." }
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
    meaning: "변덕스러운, 활달한",
    examples: [
      { en: "The fashion industry is notoriously mercurial, with trends changing quickly.", kr: "패션 산업은 트렌드가 빠르게 바뀌어 변덕스럽기로 악명이 높습니다." },
      { en: "His mercurial temperament made him difficult to work with.", kr: "그의 변덕스러운 기질은 그와 함께 일하기 어렵게 만들었습니다." }
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
    meaning: "완화하는, 일시적인 처방",
    examples: [
      { en: "The new measures are merely palliative and do not address the root cause.", kr: "새 조치들은 단지 완화하는(일시적인) 것일 뿐 근본적인 원인을 다루지 않습니다." },
      { en: "Palliative care focuses on relieving symptoms, not curing the disease.", kr: "완화 치료는 질병을 치료하는 것이 아니라 증상을 완화하는 데 중점을 둡니다." }
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
    meaning: "편협한, 지방의",
    examples: [
      { en: "The small town was characterized by a parochial outlook and resistance to change.", kr: "그 작은 마을은 편협한 시각과 변화에 대한 저항으로 특징지어졌습니다." },
      { en: "We need to move beyond parochial concerns to address global issues.", kr: "우리는 세계적인 문제들을 다루기 위해 편협한 관심사를 넘어서야 합니다." }
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
    id: "L4-388",
    word: "sally",
    meaning: "돌격, 재치 있는 말",
    examples: [
      { en: "The besieged soldiers made a desperate sally out of the castle gates.", kr: "포위된 병사들은 성문 밖으로 필사적인 돌격을 감행했습니다." },
      { en: "His lecture was punctuated by witty sallies that kept the audience engaged.", kr: "그의 강의는 청중을 계속 집중하게 만드는 재치 있는 말들로 간간이 이어졌습니다." }
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
      { en: "The Queen is the titular head of the Commonwealth, but holds little real power.", kr: "여왕은 영연방의 명목상의 수장이지만, 실제 권한은 거의 없습니다." },
      { en: "The titular character of the book appears only briefly.", kr: "그 책의 제목이 된 인물은 아주 잠깐만 등장합니다." }
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
      { en: "Her business acumen allowed her to spot the emerging market trend.", kr: "그녀의 사업적 통찰력은 그녀가 떠오르는 시장 추세를 발견하도록 했습니다." },
      { en: "The investor showed great financial acumen.", kr: "그 투자자는 뛰어난 재정적 안목을 보여주었습니다." }
    ]
  },
  {
    id: "L5-402",
    word: "duly",
    meaning: "적절히, 정식으로, 제때에",
    examples: [
      { en: "Your request has been duly noted, and we will respond soon.", kr: "요청 사항은 정식으로 접수되었으며 곧 답변드리겠습니다." },
      { en: "The forms were duly signed and sent to headquarters.", kr: "서류는 적절히 서명되어 본사로 보내졌습니다." }
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
      { en: "Voter apathy resulted in a very low election turnout.", kr: "유권자들의 무관심은 매우 낮은 선거 투표율을 초래했습니다." },
      { en: "She met his problems with complete apathy.", kr: "그녀는 그의 문제들을 완전한 무관심으로 대했습니다." }
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
    meaning: "난해한, 소수만 아는, 불가사의한",
    examples: [
      { en: "The ancient text was full of arcane symbols.", kr: "그 고대 문헌은 불가사의한 상징들로 가득했습니다." },
      { en: "The tax rules are arcane and hard to follow.", kr: "그 세금 규정은 난해해서 따르기 어렵습니다." }
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
    id: "L5-026",
    word: "censure",
    meaning: "비난하다, 견책",
    examples: [
      { en: "The board voted to censure the director for his inappropriate conduct.", kr: "이사회는 부적절한 행위를 이유로 그 이사를 견책하기로 의결했습니다." },
      { en: "He faced public censure after the scandal.", kr: "그는 스캔들 이후 대중의 비난에 직면했습니다." }
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
      { en: "He claimed the confession was made under police coercion.", kr: "그는 그 자백이 경찰의 강압 하에 이루어졌다고 주장했습니다." },
      { en: "The company was accused of using coercion to make employees sign the contract.", kr: "그 회사는 직원들에게 계약서에 서명하도록 강제하기 위해 강압을 사용했다는 비난을 받았습니다." }
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
    id: "L5-037",
    word: "craven",
    meaning: "겁 많은, 비겁한",
    examples: [
      { en: "The craven soldier abandoned his post during the attack.", kr: "그 겁 많은 병사는 공격 중에 자신의 진지를 버렸습니다." },
      { en: "It was a craven decision to sacrifice his friend for personal safety.", kr: "자신의 안전을 위해 친구를 희생한 것은 비겁한 결정이었습니다." }
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
      { en: "There is a severe dearth of affordable housing in the city.", kr: "그 도시에는 저렴한 주택의 심각한 부족이 있습니다." },
      { en: "The critics noted a dearth of originality in the new movie.", kr: "비평가들은 새 영화의 독창성 결핍을 지적했습니다." }
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
      { en: "Out of deference to the elder statesman, he remained silent.", kr: "그 노(老)정치가에 대한 존중으로, 그는 침묵을 지켰습니다." },
      { en: "The decision was made in deference to the wishes of the founder.", kr: "그 결정은 설립자의 바람에 대한 경의로 내려졌습니다." }
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
      { en: "The economic policy caused social dissonance and unrest.", kr: "그 경제 정책은 사회적 불일치와 불안을 야기했습니다." },
      { en: "The avant-garde music was full of intentional dissonance.", kr: "그 아방가르드 음악은 의도적인 불협화음으로 가득했습니다." }
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
    meaning: "편의적인, 임시방편의",
    examples: [
      { en: "It was an expedient but unethical solution to the problem.", kr: "그것은 문제에 대한 편의적이지만 비윤리적인 해결책이었습니다." },
      { en: "The manager chose the most expedient method to finish the job quickly.", kr: "매니저는 그 일을 빨리 끝내기 위해 가장 편의적인 방법을 택했습니다." }
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
      { en: "The idea that the Earth is flat is a long-debunked fallacy.", kr: "지구가 평평하다는 생각은 오래전에 반증된 오류입니다." },
      { en: "His entire argument rested on a logical fallacy.", kr: "그의 주장 전체가 논리적 오류에 기반했습니다." }
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
    meaning: "충실, 정확성",
    examples: [
      { en: "The historical film was praised for its fidelity to the original events.", kr: "그 역사 영화는 원래 사건에 대한 충실성으로 칭찬받았습니다." },
      { en: "The speakers reproduce music with remarkable fidelity.", kr: "그 스피커는 놀라울 정도로 정확하게 음악을 재현합니다." }
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
    meaning: "(법·권리 등을) 들먹이다, 발동하다, 불러일으키다",
    examples: [
      { en: "The suspect invoked his right to remain silent.", kr: "용의자는 묵비권을 행사했습니다." },
      { en: "The old song invoked memories of my childhood.", kr: "그 옛 노래가 내 어린 시절의 추억을 불러일으켰어." }
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
      { en: "The CEO’s hubris led him to ignore all warnings, causing the company’s downfall.", kr: "최고 경영자의 오만은 그가 모든 경고를 무시하도록 이끌었고, 회사의 몰락을 초래했습니다." },
      { en: "Hubris is a common tragic flaw in classical literature.", kr: "오만은 고전 문학에서 흔한 비극적 결함입니다." }
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
      { en: "The bombing caused indiscriminate destruction across the city.", kr: "그 폭격은 도시 전역에 무차별적인 파괴를 야기했습니다." },
      { en: "He has an indiscriminate taste in music, listening to everything.", kr: "그는 모든 것을 듣는 무분별한 음악 취향을 가지고 있습니다." }
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
      { en: "The manager was criticized for his inept handling of the crisis.", kr: "그 관리자는 위기에 서툴게 대처하여 비판받았습니다." },
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
    meaning: "만족시킬 수 없는, 채울 수 없는",
    examples: [
      { en: "He has an insatiable thirst for power and wealth.", kr: "그는 권력과 부에 대한 만족시킬 수 없는 갈증을 가지고 있습니다." },
      { en: "The company's insatiable demand for raw materials led to environmental damage.", kr: "그 회사의 원자재에 대한 채울 수 없는 요구는 환경 피해로 이어졌습니다." }
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
    meaning: "교활한, 서서히 퍼지는",
    examples: [
      { en: "The disease has an insidious onset, making it hard to detect early.", kr: "그 질병은 서서히 퍼지기 시작하여 조기 발견이 어렵습니다." },
      { en: "The insidious propaganda slowly changed the public's opinion.", kr: "그 교활한 선전은 대중의 의견을 서서히 변화시켰습니다." }
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
    meaning: "다루기 힘든, 고집 센",
    examples: [
      { en: "The intractable problem required a radical new solution.", kr: "그 다루기 힘든 문제는 급진적인 새 해결책을 필요로 했습니다." },
      { en: "The manager struggled with the most intractable employee.", kr: "그 관리자는 가장 고집 센 직원과 씨름했습니다." }
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
      { en: "The clock had an intricate design with many small moving parts.", kr: "그 시계는 작은 움직이는 부품들이 많은 복잡한 디자인을 가지고 있었습니다." },
      { en: "The plot of the novel was so intricate that it required close attention.", kr: "그 소설의 줄거리는 너무 뒤얽혀서 세심한 주의를 요했습니다." }
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
    meaning: "장황한 목록, 잦은 반복",
    examples: [
      { en: "He recited a litany of complaints about the restaurant's service.", kr: "그는 식당 서비스에 대한 장황한 불만 목록을 읊었습니다." },
      { en: "The speech became a tiresome litany of past achievements.", kr: "그 연설은 과거 업적을 지루하게 늘어놓는 것이 되었습니다." }
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
    meaning: "손으로 만질 수 있는, 명백한",
    examples: [
      { en: "There was a palpable tension in the room before the vote.", kr: "투표 전에 방 안에는 손으로 만질 수 있는 듯한 긴장감이 있었습니다." },
      { en: "The sense of relief among the survivors was palpable.", kr: "생존자들 사이의 안도감은 명백했습니다." }
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
    meaning: "전문가, 권위자",
    examples: [
      { en: "The news program featured a panel of political pundits.", kr: "그 뉴스 프로그램에는 정치 전문가 패널이 출연했습니다." },
      { en: "He is regarded as a leading pundit in the field of cybersecurity.", kr: "그는 사이버 보안 분야의 선도적인 권위자로 간주됩니다." }
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
    meaning: "가짜의, 근거 없는",
    examples: [
      { en: "The court dismissed the documents as spurious evidence.", kr: "법원은 그 문서들을 가짜 증거로 기각했습니다." },
      { en: "He was criticized for making spurious claims about his ancestry.", kr: "그는 자신의 혈통에 대해 근거 없는 주장을 해서 비판받았습니다." }
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
    meaning: "드문드문한, 희박한, 부족한",
    examples: [
      { en: "Information about the accident is still sparse.", kr: "그 사고에 대한 정보는 아직 부족합니다." },
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
    meaning: "미약한, 희박한",
    examples: [
      { en: "The connection between the two events is tenuous at best.", kr: "두 사건 사이의 연관성은 기껏해야 미약합니다." },
      { en: "He has only a tenuous grasp of the facts.", kr: "그는 사실 관계를 아주 희미하게만 파악하고 있습니다." }
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
    meaning: "크게 선전하다, 칭찬하다",
    examples: [
      { en: "The company constantly touts its product as the best in the market.", kr: "그 회사는 끊임없이 자신의 제품을 시장 최고라고 크게 선전합니다." },
      { en: "Critics tout the young author as the voice of a new generation.", kr: "비평가들은 그 젊은 작가를 새 세대의 목소리라고 칭찬합니다." }
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
    meaning: "부도덕한, 무원칙한",
    examples: [
      { en: "An unscrupulous dealer tried to sell me a fake product.", kr: "부도덕한 상인이 나에게 가짜 제품을 팔려고 했습니다." },
      { en: "The company was shut down due to its unscrupulous business practices.", kr: "그 회사는 무원칙한 사업 관행 때문에 폐쇄되었습니다." }
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
    id: "L5-242",
    word: "venerable",
    meaning: "존경할 만한, 유서 깊은",
    examples: [
      { en: "The venerable professor retired after decades of service to the university.", kr: "그 존경할 만한 교수는 대학에 수십 년 봉사한 후 은퇴했습니다." },
      { en: "The venerable old church has stood for five centuries.", kr: "그 유서 깊은 교회는 500년 동안 그 자리를 지켜 왔습니다." }
    ]
  },
  {
    id: "L5-243",
    word: "veracity",
    meaning: "진실성, 정확성",
    examples: [
      { en: "The committee questioned the veracity of the witness's testimony.", kr: "위원회는 증인의 증언의 진실성에 의문을 제기했습니다." },
      { en: "Journalists must always check the veracity of their sources.", kr: "기자들은 항상 출처의 진실성을 확인해야 합니다." }
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
    meaning: "앙심 깊은, 복수심 있는",
    examples: [
      { en: "He was accused of making a vindictive move against his business rival.", kr: "그는 자신의 사업 라이벌에게 앙심 깊은 행동을 했다는 비난을 받았습니다." },
      { en: "Her vindictive nature made it impossible for her to forgive betrayal.", kr: "그녀의 복수심 있는 천성은 그녀가 배신을 용서하는 것을 불가능하게 만들었습니다." }
    ]
  },
  {
    id: "L5-249",
    word: "virulent",
    meaning: "치명적인, 맹독성의, 악의에 찬",
    examples: [
      { en: "A virulent strain of the flu spread rapidly through the population.", kr: "독감의 치명적인 균주가 인구 전체에 빠르게 퍼졌습니다." },
      { en: "The debate was characterized by virulent personal attacks.", kr: "그 토론은 악의에 찬 인신공격으로 얼룩졌습니다." }
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
    meaning: "외국인 혐오증",
    examples: [
      { en: "The rise of nationalism often leads to xenophobia.", kr: "민족주의의 증가는 종종 외국인 혐오증으로 이어집니다." },
      { en: "The organization works to combat racism and xenophobia.", kr: "그 조직은 인종차별과 외국인 혐오증에 맞서 싸우기 위해 노력합니다." }
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
    meaning: "결정적으로, 확실히",
    examples: [
      { en: "The evidence conclusively proved his innocence.", kr: "그 증거는 그의 무죄를 결정적으로 입증했습니다." },
      { en: "The study did not conclusively establish a link between the two factors.", kr: "그 연구는 두 요인 사이의 연관성을 확실히 확립하지 못했습니다." }
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
    id: "L5-267",
    word: "deftly",
    meaning: "능숙하게, 교묘하게",
    examples: [
      { en: "The magician deftly made the card disappear.", kr: "마술사는 카드를 능숙하게 사라지게 만들었습니다." },
      { en: "He deftly avoided answering the difficult question.", kr: "그는 어려운 질문에 대답하는 것을 교묘하게 피했습니다." }
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
      { en: "The report links child poverty to educational deprivation.", kr: "그 보고서는 아동 빈곤을 교육 결핍과 연관 짓습니다." }
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
    meaning: "반복하여 말한, 되풀이한",
    examples: [
      { en: "The importance of safety was reiterated at the start of the meeting.", kr: "회의 시작 때 안전의 중요성이 다시 강조되었습니다." },
      { en: "He reiterated his promise to lower taxes.", kr: "그는 세금을 낮추겠다는 자신의 약속을 되풀이했습니다." }
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
      { en: "Having a degree is a requisite for this position.", kr: "이 직책에는 학위가 필수 요건입니다." },
      { en: "He lacked the requisite skills for the difficult task.", kr: "그는 어려운 임무에 필요한 기술이 부족했습니다." }
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
      { en: "The book is a synthesis of many different philosophical traditions.", kr: "그 책은 많은 다른 철학적 전통들의 종합입니다." },
      { en: "Chemical synthesis of the new compound was a complex process.", kr: "그 새로운 화합물의 화학적 합성은 복잡한 과정이었습니다." }
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
    id: "L5-321",
    word: "unfettered",
    meaning: "구속되지 않은, 자유로운",
    examples: [
      { en: "The artist was given unfettered creative control over the project.", kr: "그 예술가는 프로젝트에 대한 구속되지 않은 창작 통제권을 부여받았습니다." },
      { en: "The country enjoys unfettered access to the sea.", kr: "그 나라는 바다에 대한 자유로운 접근을 누립니다." }
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
    meaning: "자신도 모르게, 부지불식간에",
    examples: [
      { en: "He unwittingly gave away the secret by mentioning the dates.", kr: "그는 날짜를 언급함으로써 자신도 모르게 비밀을 누설했습니다." },
      { en: "The agent unwittingly became involved in the smuggling operation.", kr: "그 요원은 부지불식간에 밀수 작전에 연루되었습니다." }
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
    meaning: "적대감, 반목",
    examples: [
      { en: "There was open antagonism between the two rival teams.", kr: "두 라이벌 팀 사이에는 공개적인 적대감이 있었습니다." },
      { en: "The political cartoon expressed public antagonism toward the new law.", kr: "그 정치 만화는 새 법에 대한 대중의 반목(적대감)을 표현했습니다." }
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
    id: "L5-340",
    word: "cabal",
    meaning: "음모단, 비밀 결사",
    examples: [
      { en: "A secret cabal of ministers plotted against the king.", kr: "장관들의 비밀 음모단이 왕을 상대로 음모를 꾸몄습니다." },
      { en: "The investigation uncovered a powerful cabal operating within the corporation.", kr: "그 조사는 회사 내에서 운영되는 강력한 비밀 결사를 밝혀냈습니다." }
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
    meaning: "대실패, 붕괴",
    examples: [
      { en: "The launch of the new product was a complete debacle.", kr: "새 제품의 출시는 완전한 대실패였습니다." },
      { en: "The sudden collapse of the empire was a historical debacle.", kr: "그 제국의 갑작스러운 붕괴는 역사적인 대실패였습니다." }
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
    meaning: "추도 연설, 찬사",
    examples: [
      { en: "The best friend delivered a heartfelt eulogy at the funeral.", kr: "가장 친한 친구는 장례식에서 진심 어린 추도 연설을 했습니다." },
      { en: "The article was more a eulogy than a balanced critical review.", kr: "그 기사는 균형 잡힌 비판적인 평론이라기보다는 찬사에 가까웠습니다." }
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
    meaning: "신탁의, 수탁자",
    examples: [
      { en: "As a board member, she has a fiduciary duty to act in the best interest of the shareholders.", kr: "이사회 멤버로서, 그녀는 주주들의 최선의 이익을 위해 행동할 신탁의 의무가 있습니다." },
      { en: "The lawyer serves as a fiduciary for the client's assets.", kr: "그 변호사는 고객 자산의 수탁자 역할을 합니다." }
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
    meaning: "동질의, 균질의",
    examples: [
      { en: "The soup was a perfectly homogenous mixture of vegetables and broth.", kr: "그 수프는 채소와 국물이 완벽하게 균질하게 섞여 있었습니다." },
      { en: "The country has a relatively homogenous population.", kr: "그 나라는 비교적 동질적인 인구 구성을 가지고 있습니다." }
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
    meaning: "거대 세력, 막강한 존재",
    examples: [
      { en: "The tech company has become an unstoppable global juggernaut.", kr: "그 기술 기업은 막을 수 없는 세계적 거대 세력이 되었습니다." },
      { en: "The football team was an absolute juggernaut this season.", kr: "그 축구팀은 이번 시즌 그야말로 막강한 존재였습니다." }
    ]
  },
  {
    id: "L5-391",
    word: "lament",
    meaning: "한탄하다, 슬퍼하다, 애가",
    examples: [
      { en: "The villagers lamented the destruction of their ancient temple.", kr: "마을 사람들은 그들의 고대 사원의 파괴를 한탄했습니다." },
      { en: "The poem is a lament for lost youth.", kr: "그 시는 잃어버린 젊음을 슬퍼하는 애가입니다." }
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
    meaning: "빛나는, 밝은",
    examples: [
      { en: "The clock face was painted with luminous material so it could be seen in the dark.", kr: "시계판은 어둠 속에서도 볼 수 있도록 빛나는 물질로 칠해졌습니다." },
      { en: "She has a luminous personality that brightens the room.", kr: "그녀는 방을 밝게 만드는 빛나는 성격을 가지고 있습니다." }
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
const wordIdAliases = {"L1-102": "L1-066", "L1-196": "L1-137", "L1-199": "L1-149", "L1-304": "L1-160", "L1-307": "L1-154", "L1-308": "L1-125", "L1-311": "L1-180", "L1-314": "L1-152", "L1-318": "L1-198", "L1-322": "L1-263", "L1-323": "L1-163", "L1-324": "L1-124", "L1-327": "L1-176", "L1-330": "L1-148", "L1-331": "L1-161", "L1-332": "L1-174", "L1-334": "L1-115", "L1-335": "L1-156", "L1-336": "L1-135", "L1-338": "L1-201", "L1-344": "L1-137", "L1-346": "L1-189", "L1-347": "L1-130", "L1-348": "L1-249", "L1-350": "L1-242", "L1-351": "L1-173", "L1-352": "L1-143", "L1-360": "L1-214", "L1-365": "L1-176", "L1-366": "L1-110", "L1-368": "L1-150", "L1-369": "L1-302", "L1-370": "L1-222", "L1-372": "L1-242", "L1-374": "L1-241", "L1-378": "L1-174", "L1-379": "L1-148", "L1-382": "L1-313", "L1-383": "L1-339", "L1-386": "L1-310", "L1-389": "L1-349", "L1-390": "L1-147", "L1-392": "L1-242", "L1-394": "L1-273", "L1-396": "L1-235", "L1-398": "L1-309", "L1-399": "L1-236", "L1-400": "L1-122", "L2-002": "L1-227", "L2-015": "L1-190", "L2-019": "L1-357", "L2-212": "L2-145", "L2-221": "L2-079", "L2-225": "L2-049", "L2-231": "L2-163", "L2-247": "L2-125", "L2-250": "L2-175", "L2-255": "L2-133", "L2-259": "L2-016", "L2-260": "L2-138", "L2-264": "L2-142", "L2-269": "L2-147", "L2-270": "L2-214", "L2-273": "L2-076", "L2-274": "L2-077", "L2-275": "L2-155", "L2-276": "L2-021", "L2-277": "L2-081", "L2-278": "L2-082", "L2-279": "L2-189", "L2-281": "L2-226", "L2-293": "L2-090", "L2-295": "L2-091", "L2-300": "L2-037", "L2-301": "L2-172", "L2-304": "L2-175", "L2-308": "L2-132", "L2-311": "L2-135", "L2-314": "L2-138", "L2-316": "L2-261", "L2-317": "L2-141", "L2-321": "L2-144", "L2-322": "L2-145", "L2-323": "L2-098", "L2-324": "L2-071", "L2-325": "L2-072", "L2-326": "L2-149", "L2-327": "L2-271", "L2-328": "L2-217", "L2-330": "L2-078", "L2-332": "L2-079", "L2-333": "L2-155", "L2-336": "L2-223", "L2-338": "L2-156", "L2-340": "L2-189", "L2-342": "L2-022", "L2-343": "L2-162", "L2-346": "L2-085", "L2-348": "L2-284", "L2-356": "L1-263", "L2-357": "L1-320", "L2-358": "L2-007", "L2-359": "L2-088", "L2-360": "L2-008", "L2-363": "L2-009", "L2-367": "L2-010", "L2-371": "L2-036", "L2-373": "L2-013", "L2-375": "L2-126", "L2-376": "L2-014", "L2-381": "L1-190", "L2-383": "L2-041", "L2-385": "L1-271", "L2-386": "L1-131", "L2-388": "L2-017", "L2-389": "L1-163", "L2-390": "L1-357", "L2-395": "L2-075", "L2-399": "L2-023", "L2-400": "L2-001", "L3-001": "L2-194", "L3-002": "L2-102", "L3-004": "L2-350", "L3-005": "L2-285", "L3-008": "L2-028", "L3-011": "L2-103", "L3-013": "L2-105", "L3-019": "L2-233", "L3-022": "L2-024", "L3-023": "L2-164", "L3-024": "L2-110", "L3-025": "L2-007", "L3-026": "L2-031", "L3-029": "L2-088", "L3-030": "L2-030", "L3-033": "L2-237", "L3-035": "L2-112", "L3-037": "L2-165", "L3-038": "L2-292", "L3-040": "L2-113", "L3-043": "L2-090", "L3-047": "L2-166", "L3-048": "L2-114", "L3-054": "L2-034", "L3-055": "L2-239", "L3-056": "L2-115", "L3-058": "L2-240", "L3-059": "L2-116", "L3-060": "L2-060", "L3-063": "L2-117", "L3-067": "L2-011", "L3-068": "L2-062", "L3-071": "L2-063", "L3-073": "L2-012", "L3-075": "L2-120", "L3-081": "L2-092", "L3-082": "L2-121", "L3-083": "L2-122", "L3-086": "L2-037", "L3-089": "L2-125", "L3-090": "L2-126", "L3-091": "L2-172", "L3-093": "L2-038", "L3-094": "L2-302", "L3-095": "L2-127", "L3-096": "L2-128", "L3-098": "L2-065", "L3-102": "L2-175", "L3-104": "L2-066", "L3-105": "L2-252", "L3-106": "L2-130", "L3-109": "L2-132", "L3-113": "L2-201", "L3-116": "L2-202", "L3-117": "L2-203", "L3-120": "L2-016", "L3-121": "L2-067", "L3-122": "L2-042", "L3-124": "L2-204", "L3-125": "L2-205", "L3-127": "L1-163", "L3-128": "L2-206", "L3-129": "L2-318", "L3-130": "L2-208", "L3-134": "L2-266", "L3-135": "L2-070", "L3-136": "L2-319", "L3-138": "L2-211", "L3-141": "L2-098", "L3-142": "L2-071", "L3-143": "L2-146", "L3-144": "L2-148", "L3-147": "L2-215", "L3-149": "L2-182", "L3-150": "L2-216", "L3-151": "L2-272", "L3-153": "L2-152", "L3-155": "L2-078", "L3-156": "L2-331", "L3-158": "L2-335", "L3-160": "L2-097", "L3-162": "L2-224", "L3-166": "L2-160", "L3-178": "L2-228", "L3-183": "L2-193", "L3-187": "L2-195", "L3-189": "L3-014", "L3-190": "L2-107", "L3-191": "L2-196", "L3-195": "L2-056", "L3-196": "L2-290", "L3-198": "L2-291", "L3-199": "L2-236", "L3-200": "L2-197", "L3-201": "L3-036", "L3-202": "L2-238", "L3-203": "L2-292", "L3-204": "L2-033", "L3-205": "L2-115", "L3-206": "L2-240", "L3-208": "L2-116", "L3-209": "L2-366", "L3-211": "L3-062", "L3-212": "L2-369", "L3-213": "L2-243", "L3-214": "L2-118", "L3-215": "L3-064", "L3-218": "L2-062", "L3-222": "L2-063", "L3-223": "L3-072", "L3-225": "L2-170", "L3-227": "L2-012", "L3-228": "L3-074", "L3-229": "L2-120", "L3-230": "L3-076", "L3-231": "L3-077", "L3-232": "L3-079", "L3-233": "L3-080", "L3-234": "L2-092", "L3-235": "L2-121", "L3-236": "L2-122", "L3-237": "L3-084", "L3-238": "L3-085", "L3-239": "L3-087", "L3-240": "L3-088", "L3-241": "L2-038", "L3-242": "L2-302", "L3-243": "L2-377", "L3-244": "L2-127", "L3-245": "L2-378", "L3-246": "L2-379", "L3-247": "L2-380", "L3-249": "L2-065", "L3-250": "L3-099", "L3-251": "L2-303", "L3-252": "L2-305", "L3-253": "L3-103", "L3-254": "L2-129", "L3-255": "L2-040", "L3-256": "L2-306", "L3-257": "L2-252", "L3-258": "L2-130", "L3-259": "L2-253", "L3-260": "L3-107", "L3-261": "L2-307", "L3-262": "L2-095", "L3-263": "L2-131", "L3-264": "L3-108", "L3-265": "L2-132", "L3-266": "L3-110", "L3-267": "L3-112", "L3-268": "L2-133", "L3-269": "L2-041", "L3-270": "L2-309", "L3-272": "L2-134", "L3-273": "L2-257", "L3-274": "L2-201", "L3-275": "L3-114", "L3-276": "L3-115", "L3-277": "L2-310", "L3-278": "L2-176", "L3-279": "L2-202", "L3-285": "L2-288", "L3-287": "L3-018", "L3-297": "L2-121", "L3-299": "L3-248", "L3-300": "L3-119", "L3-301": "L2-258", "L3-302": "L2-312", "L3-304": "L2-067", "L3-305": "L2-042", "L3-306": "L3-123", "L3-307": "L2-068", "L3-308": "L2-139", "L3-309": "L2-315", "L3-310": "L2-178", "L3-311": "L2-261", "L3-312": "L3-126", "L3-313": "L1-163", "L3-314": "L2-142", "L3-315": "L2-206", "L3-316": "L2-143", "L3-317": "L2-318", "L3-318": "L2-208", "L3-319": "L3-131", "L3-320": "L3-132", "L3-321": "L3-133", "L3-322": "L2-266", "L3-323": "L2-267", "L3-324": "L2-319", "L3-326": "L2-320", "L3-327": "L2-211", "L3-328": "L3-139", "L3-329": "L3-140", "L3-330": "L2-145", "L3-331": "L2-098", "L3-332": "L2-071", "L3-333": "L2-146", "L3-334": "L2-148", "L3-335": "L3-145", "L3-336": "L3-146", "L3-337": "L2-215", "L3-338": "L3-148", "L3-339": "L2-182", "L3-340": "L2-271", "L3-341": "L2-216", "L3-342": "L2-272", "L3-343": "L3-152", "L3-344": "L2-152", "L3-345": "L3-154", "L3-346": "L2-217", "L3-347": "L2-078", "L3-348": "L2-331", "L3-349": "L3-157", "L3-350": "L2-335", "L3-351": "L3-159", "L3-352": "L2-223", "L3-353": "L3-161", "L3-354": "L2-337", "L3-355": "L2-224", "L3-356": "L3-163", "L3-357": "L3-164", "L3-358": "L3-165", "L3-359": "L2-160", "L3-360": "L3-167", "L3-361": "L3-168", "L3-362": "L3-170", "L3-363": "L3-171", "L3-364": "L3-172", "L3-365": "L3-173", "L3-366": "L3-174", "L3-367": "L3-175", "L3-368": "L3-176", "L3-369": "L2-283", "L3-370": "L2-228", "L3-371": "L3-177", "L3-372": "L3-180", "L3-373": "L3-181", "L3-374": "L3-182", "L3-380": "L2-195", "L3-382": "L2-108", "L3-390": "L2-296", "L3-391": "L3-216", "L3-392": "L3-220", "L3-396": "L2-303", "L3-397": "L2-040", "L3-398": "L2-066", "L4-002": "L3-186", "L4-003": "L2-102", "L4-005": "L2-350", "L4-008": "L3-006", "L4-009": "L3-007", "L4-011": "L2-352", "L4-012": "L3-014", "L4-013": "L2-107", "L4-015": "L3-015", "L4-016": "L2-055", "L4-022": "L2-164", "L4-024": "L2-111", "L4-025": "L2-088", "L4-027": "L2-197", "L4-033": "L3-044", "L4-040": "L3-062", "L4-041": "L2-117", "L4-042": "L3-294", "L4-045": "L3-069", "L4-053": "L3-078", "L4-055": "L2-121", "L4-060": "L2-125", "L4-061": "L2-172", "L4-062": "L3-092", "L4-063": "L3-298", "L4-065": "L2-173", "L4-071": "L3-111", "L4-072": "L3-118", "L4-073": "L2-016", "L4-078": "L2-178", "L4-080": "L2-261", "L4-081": "L2-205", "L4-085": "L2-318", "L4-088": "L2-180", "L4-098": "L2-220", "L4-106": "L2-188", "L4-109": "L2-190", "L4-111": "L3-167", "L4-112": "L2-162", "L4-114": "L2-227", "L4-120": "L3-016", "L4-122": "L3-289", "L4-137": "L3-293", "L4-143": "L3-221", "L4-213": "L3-271", "L4-304": "L4-068", "L4-307": "L4-070", "L5-007": "L4-117", "L5-014": "L4-337", "L5-016": "L4-339", "L5-029": "L4-284", "L5-032": "L4-285", "L5-038": "L4-288", "L5-039": "L4-289", "L5-048": "L4-291", "L5-052": "L4-230", "L5-056": "L4-031", "L5-059": "L4-207", "L5-063": "L4-349", "L5-065": "L4-136", "L5-066": "L4-208", "L5-091": "L4-297", "L5-092": "L4-209", "L5-095": "L4-210", "L5-096": "L4-147", "L5-101": "L3-069", "L5-116": "L4-154", "L5-124": "L3-092", "L5-147": "L4-069", "L5-149": "L4-070", "L5-152": "L3-110", "L5-156": "L3-271", "L5-158": "L4-170", "L5-160": "L4-374", "L5-162": "L4-376", "L5-171": "L4-256", "L5-173": "L4-179", "L5-175": "L4-180", "L5-179": "L4-182", "L5-183": "L4-183", "L5-184": "L4-087", "L5-185": "L4-184", "L5-186": "L4-187", "L5-188": "L4-188", "L5-190": "L4-190", "L5-191": "L4-191", "L5-192": "L4-192", "L5-193": "L4-193", "L5-194": "L4-194", "L5-195": "L4-195", "L5-196": "L4-388", "L5-197": "L4-093", "L5-198": "L4-094", "L5-199": "L4-095", "L5-213": "L4-204", "L5-217": "L4-199", "L5-226": "L4-220", "L5-227": "L4-272", "L5-231": "L4-108", "L5-235": "L4-276", "L5-252": "L4-115", "L5-253": "L4-280", "L5-255": "L4-330", "L5-257": "L3-376", "L5-258": "L3-378", "L5-259": "L3-379", "L5-261": "L2-195", "L5-262": "L3-381", "L5-265": "L2-108", "L5-266": "L3-383", "L5-269": "L3-384", "L5-271": "L3-385", "L5-272": "L3-386", "L5-273": "L3-387", "L5-274": "L3-388", "L5-275": "L3-389", "L5-277": "L2-296", "L5-278": "L3-216", "L5-279": "L3-220", "L5-280": "L4-050", "L5-282": "L3-393", "L5-283": "L3-394", "L5-287": "L3-395", "L5-290": "L2-040", "L5-291": "L2-066", "L5-292": "L3-399", "L5-293": "L3-400", "L5-294": "L4-170", "L5-307": "L4-089", "L5-318": "L4-200", "L5-322": "L4-110", "L5-328": "L4-331", "L5-329": "L5-002", "L5-335": "L4-006", "L5-352": "L4-291", "L5-357": "L4-207", "L5-360": "L4-136", "L5-365": "L4-038", "L5-376": "L4-297", "L5-380": "L4-046", "L5-384": "L4-298"};
