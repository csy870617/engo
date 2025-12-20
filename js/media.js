// ==========================================
// 미디어(TTS, 뉴스) 및 공유/문의
// ==========================================

// 1. TTS Settings & Functions
let ttsVoices = [];
let userVoiceIndex = null;
let userRate = 1.0;
let userFontSize = 'medium';
let autoPlayEnabled = true;
let voiceA = null;
let voiceB = null;

function loadVoices() {
  ttsVoices = window.speechSynthesis.getVoices();
  const sel = document.getElementById("tts-voice-select");
  if(sel) {
    sel.innerHTML = '<option value="">기본 목소리</option>';
    ttsVoices.forEach((v, i) => {
      if(v.lang.includes("en")) {
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = `${v.name} (${v.lang})`;
        sel.appendChild(opt);
      }
    });
  }
  
  const enVoices = ttsVoices.filter(v => v.lang.includes("en"));
  const preferredVoices = enVoices.filter(v => v.name.includes("Google") || v.name.includes("Samantha") || v.name.includes("Siri"));
  
  if (preferredVoices.length >= 2) {
    voiceA = preferredVoices[0];
    voiceB = preferredVoices[1];
  } else if (enVoices.length >= 2) {
    voiceA = enVoices[0];
    voiceB = enVoices[1];
  } else if (enVoices.length === 1) {
    voiceA = enVoices[0];
    voiceB = enVoices[0];
  }

  const raw = localStorage.getItem("ttsSettings");
  if(raw) {
    const d = JSON.parse(raw);
    userVoiceIndex = d.voiceIndex;
    userRate = d.rate || 1.0;
    if (d.autoPlay !== undefined) autoPlayEnabled = d.autoPlay;
    if (d.fontSize) userFontSize = d.fontSize;
  }
  applyFontSizeToBody(userFontSize);
}
if("speechSynthesis" in window) window.speechSynthesis.onvoiceschanged = loadVoices;

function speakText(text, speaker = null) {
  if (!("speechSynthesis" in window)) {
    alert("이 브라우저는 음성 합성을 지원하지 않습니다.");
    return;
  }
  window.speechSynthesis.cancel();
  
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = userRate || 1.0;

  if (userVoiceIndex !== null && ttsVoices[userVoiceIndex]) {
    u.voice = ttsVoices[userVoiceIndex];
  } else if (speaker === 'A' && voiceA) {
    u.voice = voiceA;
    u.pitch = 1.0;
  } else if (speaker === 'B' && voiceB) {
    u.voice = voiceB;
    if (voiceA === voiceB) u.pitch = 0.8;
    else u.pitch = 1.0;
  }
  
  window.speechSynthesis.speak(u);
}

function speakWithPromise(text, speaker) {
  return new Promise(resolve => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = userRate || 1.0;
    
    if (userVoiceIndex !== null && ttsVoices[userVoiceIndex]) {
      u.voice = ttsVoices[userVoiceIndex];
    } else if (speaker === 'A' && voiceA) {
      u.voice = voiceA;
      u.pitch = 1.0;
    } else if (speaker === 'B' && voiceB) {
      u.voice = voiceB;
      if (voiceA === voiceB) u.pitch = 0.8;
      else u.pitch = 1.0;
    }
    
    u.onend = resolve;
    u.onerror = resolve;
    window.speechSynthesis.speak(u);
  });
}

function setTtsRate(rate, btn) {
  userRate = parseFloat(rate);
  updateButtonGroup('speed-btn-group', userRate);
  previewVoiceSettings();
}

function setAppFontSize(size, btn) {
  userFontSize = size;
  updateButtonGroup('font-btn-group', userFontSize);
  applyFontSizeToBody(size);
}

function applyFontSizeToBody(size) {
  const root = document.documentElement;
  root.classList.remove('font-small', 'font-medium', 'font-large');
  root.classList.add(`font-${size}`);
}

function previewVoiceSettings() {
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance("Hello.");
  u.lang = "en-US";
  u.rate = userRate;
  if(document.getElementById("tts-voice-select").value && ttsVoices[document.getElementById("tts-voice-select").value]) {
    u.voice = ttsVoices[document.getElementById("tts-voice-select").value];
  }
  window.speechSynthesis.speak(u);
}

function saveSettings() {
  userVoiceIndex = document.getElementById("tts-voice-select").value || null;
  autoPlayEnabled = document.getElementById("tts-autoplay-toggle").checked;
  localStorage.setItem("ttsSettings", JSON.stringify({
    voiceIndex: userVoiceIndex,
    rate: userRate,
    autoPlay: autoPlayEnabled,
    fontSize: userFontSize
  }));
  closeSettingsModal();
}

// 2. News API
const NEWS_TOPICS = [
  "https://news.google.com/rss/search?q=South+Korea+(k-pop+OR+k-drama+OR+movie)+(popular+OR+success)&hl=en-US&gl=US&ceid=US:en",
  "https://news.google.com/rss/search?q=South+Korea+(technology+OR+samsung+OR+economy)+(growth+OR+innovation)&hl=en-US&gl=US&ceid=US:en",
  "https://news.google.com/rss/search?q=South+Korea+(food+OR+travel+OR+trend)+(viral+OR+famous)&hl=en-US&gl=US&ceid=US:en"
];
let currentTopicIndex = 0;

function initNewsUpdater() { fetchRealNews(); }
function refreshNews() { fetchRealNews(); }

async function fetchRealNews() {
  const container = document.getElementById('news-card-list');
  if (!container) return;
  
  container.innerHTML = `<div style="padding:30px; text-align:center; color:#94a3b8; font-size:0.9rem; width:100%;">🔄 Mixing fresh stories...<br><span style="font-size:0.8rem; opacity:0.7">Topic ${currentTopicIndex + 1} Loading</span></div>`;
  
  const currentRssUrl = NEWS_TOPICS[currentTopicIndex];
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(currentRssUrl)}`;
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (data.status === 'ok') {
      container.innerHTML = "";
      let allArticles = data.items.slice(0, 15);
      const shuffled = allArticles.sort(() => 0.5 - Math.random());
      const selectedArticles = shuffled.slice(0, 3);
      
      selectedArticles.forEach(item => {
        const cleanTitle = item.title.split(" - ")[0];
        const sourceName = item.title.split(" - ")[1] || "News";
        const timeAgo = getTimeAgo(new Date(item.pubDate));
        
        const card = document.createElement('div');
        card.className = 'news-card';
        card.onclick = () => window.open(item.link, '_blank');
        
        let topicTag = "#Trending";
        if (currentTopicIndex === 0) topicTag = "#K-Culture";
        else if (currentTopicIndex === 1) topicTag = "#Tech&Biz";
        else if (currentTopicIndex === 2) topicTag = "#Lifestyle";
        
        card.innerHTML = `<div><span class="news-tag">${topicTag}</span><div class="news-title">${cleanTitle}</div><div class="news-summary" style="font-size:0.8rem; color:#94a3b8;">${item.description ? item.description.replace(/<[^>]*>?/gm, '').substring(0, 70) + "..." : "Click to read more."}</div></div><div class="news-footer"><span>${sourceName}</span> • <span>${timeAgo}</span></div>`;
        container.appendChild(card);
      });
      currentTopicIndex = (currentTopicIndex + 1) % NEWS_TOPICS.length;
    } else { throw new Error("API Error"); }
  } catch (error) { loadBackupNews(); }
}

function loadBackupNews() {
  const container = document.getElementById('news-card-list');
  container.innerHTML = "";
  const newsData = [{ tag: "K-Culture", title: "Han Kang wins Nobel Prize", summary: "South Korean author Han Kang brings home the Nobel Prize.", source: "CNN", url: "https://edition.cnn.com/" }];
  newsData.forEach(news => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.onclick = () => window.open(news.url, '_blank');
    card.innerHTML = `<div><span class="news-tag">#${news.tag}</span><div class="news-title">${news.title}</div><div class="news-summary">${news.summary}</div></div><div class="news-footer">Source: ${news.source}</div>`;
    container.appendChild(card);
  });
}

function getTimeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours ago";
  return "Just now";
}

// 3. Share & Contact
if (typeof Kakao !== 'undefined' && !Kakao.isInitialized()) { 
    try { Kakao.init('7e17cb2ba4738f9e3cd710879d487959'); } catch(e) {}
}

function shareApp() {
  const shareData = { 
    title: 'ENGO 영어회화', 
    text: '매일 새로운 영어 패턴과 회화를 공부해보세요!', 
    url: window.location.href 
  };

  // 1순위: 모바일/브라우저 기본 공유 기능 사용
  if (navigator.share) { 
    navigator.share(shareData).catch((err) => console.log('공유 취소:', err)); 
    return;
  } 

  // 2순위: 카카오톡 공유 (도메인 등록된 경우만 작동)
  if (typeof Kakao !== 'undefined' && Kakao.isInitialized()) {
    try {
      Kakao.Share.sendDefault({ 
        objectType: 'feed', 
        content: { 
          title: 'ENGO 영어회화', 
          description: '오늘의 영어 정복을 시작해볼까요?', 
          imageUrl: window.location.origin + '/logo.png', 
          link: { mobileWebUrl: window.location.href, webUrl: window.location.href } 
        }, 
        buttons: [ { title: '공부하러 가기', link: { mobileWebUrl: window.location.href, webUrl: window.location.href } } ] 
      });
      return;
    } catch (e) { console.log("Kakao Share Error", e); }
  }

  // 3순위: 다 안되면 주소 복사
  navigator.clipboard.writeText(window.location.href)
    .then(() => alert('주소가 복사되었습니다! 친구에게 붙여넣기(Ctrl+V) 해주세요.'))
    .catch(() => alert('주소 복사 실패'));
}

function openContactModal() {
  document.getElementById('settings-modal').classList.add('hidden');
  document.getElementById('contact-modal').classList.remove('hidden');
}

function closeContactModal() {
  document.getElementById('contact-modal').classList.add('hidden');
}

function sendInquiry() {
  const msg = document.getElementById('contact-msg').value;
  if (!msg.trim()) return alert("내용을 입력해주세요.");
  
  const sendBtn = document.querySelector('#contact-modal .btn-main');
  const originalText = sendBtn.innerText;
  sendBtn.innerText = "전송 중...";
  sendBtn.disabled = true;
  
  if (typeof emailjs !== 'undefined') {
    emailjs.send('service_c7njd5n', 'template_7tws5sz', { message: msg, to_name: "Admin" })
      .then(() => {
        alert("✅ 소중한 의견이 전송되었습니다!");
        document.getElementById('contact-msg').value = "";
        closeContactModal();
      })
      .finally(() => {
        sendBtn.innerText = originalText;
        sendBtn.disabled = false;
      });
  } else {
    alert("EmailJS 라이브러리 로드 실패");
    sendBtn.disabled = false;
  }
}