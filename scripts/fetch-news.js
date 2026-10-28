// 한국 영자 신문 RSS를 받아 news.json으로 저장 (update-news 작업이 4시간마다 돌려 저장소에 올린다. 앱은 같은 사이트의 news.json을 읽는다)
// rss2json이 Cloudflare 확인 화면으로 막혀(2026-10) 브라우저에서 RSS를 바로 받을 수 없게 됐다
const fs = require("fs");
const { execFileSync } = require("child_process");
const FEEDS = [
  "https://en.yna.co.kr/RSS/culture.xml",
  "https://en.yna.co.kr/RSS/news.xml",
  "https://www.koreaherald.com/rss/newsAll"
];
const tag = (xml, name) => {
  const m = xml.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, "i"));
  return m ? m[1].replace(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/, "$1").trim() : "";
};
async function getFeed(url) {
  // 연합뉴스는 Node fetch를 막는다 (curl은 받아 준다)
  const xml = execFileSync("curl", ["-sSfL", "--max-time", "20", "-A", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36", url], { encoding: "utf8", maxBuffer: 20 << 20 });
  return (xml.match(/<item[\s>][\s\S]*?<\/item>/gi) || []).slice(0, 40).map(it => {
    const d = new Date(tag(it, "pubDate") || tag(it, "dc:date"));
    return { title: tag(it, "title"), link: tag(it, "link"), description: tag(it, "description").slice(0, 600), pubDate: isNaN(d) ? "" : d.toISOString() };
  }).filter(x => x.title && x.link);
}
(async () => {
  const out = { updated: new Date().toISOString(), feeds: {} };
  for (const url of FEEDS) {
    try { out.feeds[url] = await getFeed(url); console.log(url, out.feeds[url].length); }
    catch (e) { console.log(url, "failed:", e.message); }
  }
  if (!Object.keys(out.feeds).length) { console.log("no feeds, news.json not written"); return; }
  let prev = {}; try { prev = JSON.parse(fs.readFileSync("news.json", "utf8")); } catch (e) {}
  for (const url of FEEDS) if (!out.feeds[url] && prev.feeds && prev.feeds[url]) out.feeds[url] = prev.feeds[url];   // 못 받은 소식지는 지난 것을 둔다
  if (JSON.stringify(prev.feeds) === JSON.stringify(out.feeds)) { console.log("no change"); return; }
  fs.writeFileSync("news.json", JSON.stringify(out));
})();
