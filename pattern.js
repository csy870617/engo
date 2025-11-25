// pattern.js

const patternData = [
  {
    id: "im-looking-for",
    title: "I'm looking for...",
    desc: "무언가를 찾고 있을 때 쓰는 기본 표현.",
    examples: [
      { en: "I'm looking for my keys.", kr: "열쇠를 찾고 있어요." },
      { en: "I'm looking for a good restaurant around here.", kr: "이 근처에 좋은 식당을 찾고 있어요." }
    ]
  },
  {
    id: "im-trying-to",
    title: "I'm trying to...",
    desc: "무언가를 하려고 노력 중일 때 쓰는 표현.",
    examples: [
      { en: "I'm trying to learn English.", kr: "영어를 배우려고 노력 중이에요." },
      { en: "I'm trying to focus on my work.", kr: "일에 집중하려고 하고 있어요." }
    ]
  },
  {
    id: "im-here-to",
    title: "I'm here to...",
    desc: "어디에 온 목적을 말할 때 쓰는 표현.",
    examples: [
      { en: "I'm here to see Dr. Kim.", kr: "김 선생님을 뵈러 왔어요." },
      { en: "I'm here to pick up my order.", kr: "주문한 걸 찾으러 왔어요." }
    ]
  },
  {
    id: "im-glad-to",
    title: "I'm glad to...",
    desc: "무언가를 하게 되어 기쁠 때 쓰는 표현.",
    examples: [
      { en: "I'm glad to meet you.", kr: "만나서 반가워요." },
      { en: "I'm glad to hear that.", kr: "그 말을 들으니 기쁘네요." }
    ]
  },
  {
    id: "im-about-to",
    title: "I'm about to...",
    desc: "막 ~하려던 참일 때 쓰는 표현.",
    examples: [
      { en: "I'm about to leave.", kr: "이제 막 나가려던 참이었어요." },
      { en: "I'm about to start a meeting.", kr: "지금 회의 시작하려던 참이에요." }
    ]
  },
  {
    id: "im-not-sure-if",
    title: "I'm not sure if...",
    desc: "확신이 없을 때, 조심스럽게 말할 때 쓰는 표현.",
    examples: [
      { en: "I'm not sure if this is right.", kr: "이게 맞는지 잘 모르겠어요." },
      { en: "I'm not sure if I can make it.", kr: "제가 갈 수 있을지 잘 모르겠어요." }
    ]
  },
  {
    id: "im-supposed-to",
    title: "I'm supposed to...",
    desc: "규칙, 약속, 의무 등 '원래 ~하기로 되어 있다'를 말할 때.",
    examples: [
      { en: "I'm supposed to meet him at 3.", kr: "3시에 그를 만나기로 되어 있어요." },
      { en: "I'm supposed to finish this today.", kr: "이걸 오늘 끝내야 해요." }
    ]
  },
  {
    id: "im-worried-about",
    title: "I'm worried about...",
    desc: "걱정되는 대상을 말할 때 쓰는 표현.",
    examples: [
      { en: "I'm worried about the exam.", kr: "시험이 걱정돼요." },
      { en: "I'm worried about my health.", kr: "건강이 걱정돼요." }
    ]
  },
  {
    id: "im-ready-to",
    title: "I'm ready to...",
    desc: "무언가를 할 준비가 되었음을 말할 때.",
    examples: [
      { en: "I'm ready to order.", kr: "주문할 준비가 됐어요." },
      { en: "I'm ready to go.", kr: "이제 출발할 준비가 됐어요." }
    ]
  },
  {
    id: "i-feel-like",
    title: "I feel like...",
    desc: "막연히 ~하고 싶은 기분일 때 쓰는 표현.",
    examples: [
      { en: "I feel like taking a walk.", kr: "산책하고 싶은 기분이에요." },
      { en: "I feel like eating something sweet.", kr: "달달한 게 먹고 싶어요." }
    ]
  },
  {
    id: "can-i-get",
    title: "Can I get...?",
    desc: "가게나 식당에서 주문하거나, 무엇을 요청할 때.",
    examples: [
      { en: "Can I get a cup of coffee?", kr: "커피 한 잔 주실 수 있나요?" },
      { en: "Can I get this in a larger size?", kr: "이거 더 큰 사이즈로 받을 수 있을까요?" }
    ]
  },
  {
    id: "can-you-help-me",
    title: "Can you help me...?",
    desc: "구체적인 도움을 요청할 때 쓰는 표현.",
    examples: [
      { en: "Can you help me find this address?", kr: "이 주소를 찾는 것 좀 도와줄 수 있어요?" },
      { en: "Can you help me with my homework?", kr: "숙제 좀 도와줄래요?" }
    ]
  },
  {
    id: "can-you-tell-me",
    title: "Can you tell me...?",
    desc: "정보를 물어볼 때 공손하게 쓰는 표현.",
    examples: [
      { en: "Can you tell me your name?", kr: "이름이 뭐예요?" },
      { en: "Can you tell me where the station is?", kr: "역이 어디 있는지 알려줄 수 있어요?" }
    ]
  },
  {
    id: "let-me-know-if",
    title: "Let me know if...",
    desc: "~하면 나에게 알려 달라고 부탁할 때.",
    examples: [
      { en: "Let me know if you need anything.", kr: "필요한 게 있으면 말해요." },
      { en: "Let me know if you're free tomorrow.", kr: "내일 시간 되면 알려줘요." }
    ]
  },
  {
    id: "let-me-see",
    title: "Let me see...",
    desc: "상황을 확인하거나, 생각해 볼 때 쓰는 말.",
    examples: [
      { en: "Let me see what I can do.", kr: "제가 뭘 할 수 있을지 좀 볼게요." },
      { en: "Let me see the menu.", kr: "메뉴 좀 볼게요." }
    ]
  },
  {
    id: "let-me-check",
    title: "Let me check...",
    desc: "확인해 보고 말하겠다고 할 때.",
    examples: [
      { en: "Let me check my schedule.", kr: "제 일정 좀 확인해 볼게요." },
      { en: "Let me check with my boss.", kr: "상사에게 한 번 확인해 볼게요." }
    ]
  },
  {
    id: "ill-take",
    title: "I'll take...",
    desc: "이걸로 하겠다고 선택을 말할 때.",
    examples: [
      { en: "I'll take this one.", kr: "이걸로 할게요." },
      { en: "I'll take the window seat.", kr: "창가 쪽 자리로 할게요." }
    ]
  },
  {
    id: "ill-have",
    title: "I'll have...",
    desc: "식당, 카페에서 주문할 때 자주 쓰는 표현.",
    examples: [
      { en: "I'll have the pasta, please.", kr: "파스타로 주세요." },
      { en: "I'll have an iced americano.", kr: "아이스 아메리카노로 할게요." }
    ]
  },
  {
    id: "i-need-to",
    title: "I need to...",
    desc: "해야만 하는 일, 필요해서 해야 하는 일을 말할 때.",
    examples: [
      { en: "I need to get some sleep.", kr: "잠을 좀 자야겠어요." },
      { en: "I need to finish this today.", kr: "이걸 오늘 끝내야 해요." }
    ]
  },
  {
    id: "i-want-to",
    title: "I want to...",
    desc: "하고 싶은 행동, 바람을 말할 때.",
    examples: [
      { en: "I want to travel the world.", kr: "세계 여행을 하고 싶어요." },
      { en: "I want to improve my English.", kr: "영어 실력을 늘리고 싶어요." }
    ]
  },
  {
    id: "im-going-to",
    title: "I'm going to...",
    desc: "이미 정해진 미래 계획을 말할 때.",
    examples: [
      { en: "I'm going to visit my parents this weekend.", kr: "이번 주말에 부모님을 뵈러 갈 거예요." },
      { en: "I'm going to start a new job next month.", kr: "다음 달에 새 직장을 시작할 거예요." }
    ]
  },
  {
    id: "im-planning-to",
    title: "I'm planning to...",
    desc: "현재 계획 중인 일을 말할 때.",
    examples: [
      { en: "I'm planning to move next year.", kr: "내년에 이사할 계획이에요." },
      { en: "I'm planning to take a break.", kr: "잠깐 쉬려고 계획 중이에요." }
    ]
  },
  {
    id: "id-like-to",
    title: "I'd like to...",
    desc: "공손하게 자신의 희망이나 요청을 말할 때.",
    examples: [
      { en: "I'd like to make a reservation.", kr: "예약을 하고 싶어요." },
      { en: "I'd like to ask you something.", kr: "뭐 하나 여쭤보고 싶어요." }
    ]
  },
  {
    id: "id-rather",
    title: "I'd rather...",
    desc: "둘 중 하나를 더 선호할 때 쓰는 표현.",
    examples: [
      { en: "I'd rather stay home.", kr: "집에 있는 게 더 좋겠어요." },
      { en: "I'd rather not talk about it.", kr: "그 얘기는 안 하는 게 좋겠어요." }
    ]
  },
  {
    id: "i-prefer",
    title: "I prefer...",
    desc: "일반적인 취향, 선호를 말할 때.",
    examples: [
      { en: "I prefer tea to coffee.", kr: "커피보다 차를 더 좋아해요." },
      { en: "I prefer working in the morning.", kr: "아침에 일하는 걸 더 선호해요." }
    ]
  },
  {
    id: "im-thinking-about",
    title: "I'm thinking about...",
    desc: "고민 중인 계획, 아이디어를 말할 때.",
    examples: [
      { en: "I'm thinking about changing jobs.", kr: "이직을 고민 중이에요." },
      { en: "I'm thinking about joining a gym.", kr: "헬스장을 다녀볼까 생각 중이에요." }
    ]
  },
  {
    id: "i-was-wondering-if",
    title: "I was wondering if...",
    desc: "매우 공손하게 부탁이나 질문을 꺼낼 때.",
    examples: [
      { en: "I was wondering if you could help me.", kr: "혹시 저를 도와주실 수 있나 해서요." },
      { en: "I was wondering if you are free tomorrow.", kr: "내일 시간 괜찮으신지 여쭤보려 했어요." }
    ]
  },
  {
    id: "it-seems-like",
    title: "It seems like...",
    desc: "상황을 보고 추측할 때 쓰는 표현.",
    examples: [
      { en: "It seems like he's busy.", kr: "그가 바쁜 것 같아요." },
      { en: "It seems like a good idea.", kr: "좋은 생각인 것 같아요." }
    ]
  },
  {
    id: "it-looks-like",
    title: "It looks like...",
    desc: "보이는 모습으로 판단할 때.",
    examples: [
      { en: "It looks like it's going to rain.", kr: "비가 올 것처럼 보여요." },
      { en: "It looks like they're closed.", kr: "문을 닫은 것 같아요." }
    ]
  },
  {
    id: "it-feels-like",
    title: "It feels like...",
    desc: "느낌, 분위기를 말할 때.",
    examples: [
      { en: "It feels like summer today.", kr: "오늘은 여름 같은 느낌이에요." },
      { en: "It feels like we just met.", kr: "우리 방금 만난 것 같은 느낌이에요." }
    ]
  },
  {
    id: "do-you-want-to",
    title: "Do you want to...?",
    desc: "상대에게 제안하거나 함께 하자고 할 때.",
    examples: [
      { en: "Do you want to grab lunch?", kr: "점심 같이 먹을래요?" },
      { en: "Do you want to watch a movie?", kr: "영화 볼래요?" }
    ]
  },
  {
    id: "do-you-mind-if",
    title: "Do you mind if...?",
    desc: "내가 ~해도 괜찮은지 예의를 갖춰 물을 때.",
    examples: [
      { en: "Do you mind if I sit here?", kr: "여기 앉아도 괜찮을까요?" },
      { en: "Do you mind if I open the window?", kr: "창문 열어도 괜찮을까요?" }
    ]
  },
  {
    id: "what-do-you-think-about",
    title: "What do you think about...?",
    desc: "상대의 의견을 물을 때.",
    examples: [
      { en: "What do you think about this plan?", kr: "이 계획 어떻게 생각해요?" },
      { en: "What do you think about working from home?", kr: "재택근무에 대해 어떻게 생각해요?" }
    ]
  },
  {
    id: "how-about",
    title: "How about...?",
    desc: "대안을 제안하거나 의견을 낼 때.",
    examples: [
      { en: "How about taking a break?", kr: "잠깐 쉬는 건 어때요?" },
      { en: "How about Friday night?", kr: "금요일 밤은 어때요?" }
    ]
  },
  {
    id: "what-if",
    title: "What if...?",
    desc: "가정이나 다른 가능성을 제안할 때.",
    examples: [
      { en: "What if we try again?", kr: "다시 한 번 해보면 어때요?" },
      { en: "What if it doesn't work?", kr: "만약 그게 안 되면 어떻게 하죠?" }
    ]
  },
  {
    id: "is-it-okay-if",
    title: "Is it okay if...?",
    desc: "~해도 괜찮을지 허락을 구할 때.",
    examples: [
      { en: "Is it okay if I call you later?", kr: "나중에 전화해도 괜찮을까요?" },
      { en: "Is it okay if I bring a friend?", kr: "친구를 데려가도 괜찮을까요?" }
    ]
  },
  {
    id: "could-you",
    title: "Could you...?",
    desc: "공손하게 도움이나 행동을 부탁할 때.",
    examples: [
      { en: "Could you pass me the salt?", kr: "소금 좀 건네주실 수 있나요?" },
      { en: "Could you speak more slowly?", kr: "좀 더 천천히 말해 주시겠어요?" }
    ]
  },
  {
    id: "should-i",
    title: "Should I...?",
    desc: "내가 ~하는 게 좋을지 의견을 물을 때.",
    examples: [
      { en: "Should I call her now?", kr: "지금 그녀에게 전화하는 게 좋을까요?" },
      { en: "Should I bring anything?", kr: "뭐라도 가져가는 게 좋을까요?" }
    ]
  },
  {
    id: "would-you-like-to",
    title: "Would you like to...?",
    desc: "공손하게 초대하거나 제안할 때.",
    examples: [
      { en: "Would you like to join us?", kr: "같이 하실래요?" },
      { en: "Would you like to try this?", kr: "이거 한 번 드셔보실래요?" }
    ]
  },
  {
    id: "are-you-sure",
    title: "Are you sure...?",
    desc: "상대의 확신을 다시 확인할 때.",
    examples: [
      { en: "Are you sure about that?", kr: "그거 확실해요?" },
      { en: "Are you sure it's okay?", kr: "정말 괜찮은 거 맞아요?" }
    ]
  },
  {
    id: "i-have-no-idea",
    title: "I have no idea...",
    desc: "전혀 모르겠다고 말할 때.",
    examples: [
      { en: "I have no idea what you're talking about.", kr: "무슨 말 하는 건지 전혀 모르겠어요." },
      { en: "I have no idea where it is.", kr: "그게 어디 있는지 전혀 모르겠어요." }
    ]
  },
  {
    id: "i-have-trouble-ing",
    title: "I have trouble ~ing",
    desc: "~하는 데 어려움이 있을 때.",
    examples: [
      { en: "I have trouble waking up early.", kr: "일찍 일어나는 게 힘들어요." },
      { en: "I have trouble remembering names.", kr: "이름을 잘 기억 못 해요." }
    ]
  },
  {
    id: "i-cant-believe",
    title: "I can't believe...",
    desc: "믿기 힘든 일을 들었을 때 감탄/충격 표현.",
    examples: [
      { en: "I can't believe you did that.", kr: "네가 그런 일을 했다니 믿기지 않아." },
      { en: "I can't believe it's already December.", kr: "벌써 12월이라니 믿기지 않아요." }
    ]
  },
  {
    id: "i-didnt-mean-to",
    title: "I didn't mean to...",
    desc: "의도한 것이 아니었다고 사과할 때.",
    examples: [
      { en: "I didn't mean to hurt you.", kr: "널 다치게 하려던 건 아니었어." },
      { en: "I didn't mean to be rude.", kr: "무례하게 굴려고 한 건 아니었어요." }
    ]
  },
  {
    id: "i-didnt-expect-to",
    title: "I didn't expect to...",
    desc: "~하게 될 줄 예상 못 했다.",
    examples: [
      { en: "I didn't expect to see you here.", kr: "여기서 널 볼 줄은 몰랐어." },
      { en: "I didn't expect to like it this much.", kr: "이렇게까지 좋아하게 될 줄은 몰랐어요." }
    ]
  },
  {
    id: "that-sounds",
    title: "That sounds...",
    desc: "상대가 한 말에 대한 반응(좋다/별로다 등)을 표현.",
    examples: [
      { en: "That sounds great.", kr: "그거 정말 좋다." },
      { en: "That sounds boring.", kr: "그거 좀 지루할 것 같네요." }
    ]
  },
  {
    id: "thats-why",
    title: "That's why...",
    desc: "그래서 ~인 거야, 이유를 강조할 때.",
    examples: [
      { en: "That's why I'm late.", kr: "그래서 제가 늦은 거예요." },
      { en: "That's why I called you.", kr: "그래서 당신에게 전화한 거예요." }
    ]
  },
  {
    id: "thats-because",
    title: "That's because...",
    desc: "무언가의 이유를 설명할 때.",
    examples: [
      { en: "That's because I was busy.", kr: "그건 제가 바빴기 때문이에요." },
      { en: "That's because we started late.", kr: "우리가 늦게 시작해서 그래요." }
    ]
  },
  {
    id: "its-hard-to",
    title: "It's hard to...",
    desc: "~하기 어렵다고 말할 때.",
    examples: [
      { en: "It's hard to find time to exercise.", kr: "운동할 시간을 내기가 어려워요." },
      { en: "It's hard to explain.", kr: "설명하기가 어려워요." }
    ]
  },
  {
    id: "its-easy-to",
    title: "It's easy to...",
    desc: "~하기 쉽다고 말할 때.",
    examples: [
      { en: "It's easy to learn if you practice.", kr: "연습하면 배우기 쉬워요." },
      { en: "It's easy to use this app.", kr: "이 앱은 사용하기 쉬워요." }
    ]
  }
];
