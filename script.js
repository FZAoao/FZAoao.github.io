/* FZAoao — i18n (zh / en / ja) + theme + reveal. Zen edition: no nav, no menu, no spy. */
"use strict";

const translations = {
  en: {
    "a11y.skip": "Skip to content",
    "rail.text": "Code in quietness",
    "nav.about": "About", "nav.stack": "Stack", "nav.tools": "Tools",
    "nav.projects": "Projects", "nav.links": "Links",
    "site.subtitle": "Developer & Creator",
    "index.title": "Contents",
    "hero.season": "Autumn 2026 — a quiet page",
    "hero.kicker": "FZAoao —— Developer",
    "hero.title1": "Still waters",
    "hero.title2": "run deep.",
    "hero.lede": "I am FZAoao, a developer who turns ideas into code — and runs CubeXMC and S3API.",
    "hero.email": "Contact me",
    "hero.metaStatusV": "Open for contact",
    "about.title": "About", "about.note": "Profile",
    "about.lede": "I build small worlds with code. This site gathers my profile, stack, projects and links.",
    "about.name": "Name", "about.identity": "Role", "about.identityV": "Developer",
    "about.identityS": "From scripts to live services",
    "about.motto": "Motto", "about.mottoV": "Keep it simple",
    "about.mottoS": "Less is more",
    "about.focus": "Focus", "about.focusV": "Backend · Frontend · Community servers",
    "about.focusS": "Node.js / Python / Java / C / C# / Rust / Vue — from scripts to live services.",
    "stack.title": "Stack", "stack.note": "Seven languages, one workbench",
    "stack.node": "Backends, APIs, tools and automation in JavaScript.",
    "stack.python": "Fast ideas, data wrangling and practical utilities.",
    "stack.java": "Structured projects, application development, OOP.",
    "stack.c": "Low-level logic, memory and system-oriented thinking.",
    "stack.csharp": "Enterprise apps, Unity games and the .NET ecosystem.",
    "stack.rust": "Memory-safe systems code, fast tools, concurrency.",
    "stack.vue": "Interfaces, interactions and frontend applications.",
    "tools.title": "Tools", "tools.note": "Daily drivers",
    "tools.vscode": "Daily editor for frontend, scripts, Node.js and fast experiments.",
    "tools.idea": "IDE for Java projects, engineering workflows and large codebases.",
    "projects.title": "Projects", "projects.note": "Things I run",
    "projects.cubex": "My Minecraft server. Visit the official site to learn more.",
    "projects.s3api": "An API relay service connecting and forwarding AI API requests.",
    "links.title": "Links", "links.note": "Find me elsewhere",
    "footer.kicker": "Say hello",
    "footer.tags": "Code / Build / Share", "footer.site": "FZAoao Personal Site",
    "footer.colophon": "Hand-set and printed in black on white.",
    "footer.top": "Back to top"
  },
  zh: {
    "a11y.skip": "跳到正文",
    "rail.text": "静けさの中のコード",
    "nav.about": "关于", "nav.stack": "技术栈", "nav.tools": "工具",
    "nav.projects": "项目", "nav.links": "链接",
    "site.subtitle": "开发者",
    "index.title": "目录",
    "hero.season": "2026 年秋 —— 一页安静的主页",
    "hero.kicker": "FZAoao —— 开发者",
    "hero.title1": "静水",
    "hero.title2": "流深。",
    "hero.lede": "我是 FZAoao，一名开发者，把想法写成代码，同時运营着 CubeXMC 与 S3API。",
    "hero.email": "联系我",
    "hero.metaStatusV": "欢迎联系",
    "about.title": "关于", "about.note": "简介",
    "about.lede": "喜欢用代码搭建小世界。这里集中放置我的简介、技术栈、项目与外部链接。",
    "about.name": "网名", "about.identity": "身份", "about.identityV": "开发者",
    "about.identityS": "从脚本到线上服务",
    "about.motto": "信条", "about.mottoV": "把事情做简单",
    "about.mottoS": "少即是多，慢即是快",
    "about.focus": "方向", "about.focusV": "后端 · 前端 · 社区服务器",
    "about.focusS": "Node.js / Python / Java / C / C# / Rust / Vue —— 从脚本到线上服务。",
    "stack.title": "技术栈", "stack.note": "七门语言，一张工作台",
    "stack.node": "用 JavaScript 写服务端、接口、工具与自动化脚本。",
    "stack.python": "快速实现想法、处理数据、写实用小工具。",
    "stack.java": "结构化项目、应用开发与面向对象编程。",
    "stack.c": "理解底层逻辑、内存与贴近系统的思考方式。",
    "stack.csharp": "企业级应用、Unity 游戏与 .NET 生态。",
    "stack.rust": "内存安全的系统编程、高性能工具与并发。",
    "stack.vue": "网页界面、交互效果与前端应用。",
    "tools.title": "工具", "tools.note": "每天在用的家伙",
    "tools.vscode": "用于前端、脚本、Node.js 与日常快速开发。",
    "tools.idea": "用于 Java 项目、工程化开发与大型代码结构管理。",
    "projects.title": "项目", "projects.note": "我在运营的东西",
    "projects.cubex": "我的 Minecraft 服务器，欢迎通过官网了解更多。",
    "projects.s3api": "一个 API 中转服务，用于连接与转发 AI API 请求。",
    "links.title": "链接", "links.note": "在别处找到我",
    "footer.kicker": "打个招呼",
    "footer.tags": "代码 / 建造 / 分享", "footer.site": "FZAoao 个人网站",
    "footer.colophon": "黑白印刷，手工排版。",
    "footer.top": "回到顶部"
  },
  ja: {
    "a11y.skip": "本文へスキップ",
    "rail.text": "静けさの中のコード",
    "nav.about": "概要", "nav.stack": "技術", "nav.tools": "道具",
    "nav.projects": "作品", "nav.links": "リンク",
    "site.subtitle": "開発者",
    "index.title": "目次",
    "hero.season": "2026年秋 —— 静かな一頁",
    "hero.kicker": "FZAoao —— 開発者",
    "hero.title1": "静かな水は",
    "hero.title2": "深く流れる。",
    "hero.lede": "FZAoao です。アイデアをコードに変える開発者で、CubeXMC と S3API も運営中。",
    "hero.email": "連絡する",
    "hero.metaStatusV": "連絡歓迎",
    "about.title": "概要", "about.note": "紹介",
    "about.lede": "コードで小さな世界を作っています。プロフィール・技術・作品・リンクをここに集めました。",
    "about.name": "名前", "about.identity": "肩書き", "about.identityV": "開発者",
    "about.identityS": "スクリプトから本番サービスまで",
    "about.motto": "信条", "about.mottoV": "シンプルに",
    "about.mottoS": "少は多、遅は速",
    "about.focus": "分野", "about.focusV": "バックエンド · フロント · コミュニティ鯖",
    "about.focusS": "Node.js / Python / Java / C / C# / Rust / Vue —— スクリプトから本番サービスまで。",
    "stack.title": "技術", "stack.note": "七つの言語、一つの作業台",
    "stack.node": "JavaScript でサーバ・API・ツール・自動化を作ります。",
    "stack.python": "素早い試作・データ処理・実用ツールに。",
    "stack.java": "構造化プロジェクト・アプリ開発・OOP に。",
    "stack.c": "低レイヤの論理・メモリ・システム寄りの思考に。",
    "stack.csharp": "業務アプリ・Unity ゲーム・.NET 生態系に。",
    "stack.rust": "メモリ安全なシステム開発・高速ツール・並行処理に。",
    "stack.vue": "Web 画面・インタラクション・フロントアプリに。",
    "tools.title": "道具", "tools.note": "毎日の相棒",
    "tools.vscode": "フロント・スクリプト・Node.js・高速な試作の常用エディタ。",
    "tools.idea": "Java プロジェクト・大規模開発のための IDE。",
    "projects.title": "作品", "projects.note": "運営中のもの",
    "projects.cubex": "私の Minecraft サーバー。詳しくは公式サイトへ。",
    "projects.s3api": "AI API リクエストを接続・転送する API リレーサービス。",
    "links.title": "リンク", "links.note": "ほかで会いましょう",
    "footer.kicker": "ひとこと",
    "footer.tags": "コード / 創作 / 発信", "footer.site": "FZAoao 個人サイト",
    "footer.colophon": "白黒印刷、手植字。",
    "footer.top": "頂へ戻る"
  }
};

const LANGS = ["zh", "en", "ja"];
const LANG_TAG = { zh: "zh-CN", en: "en", ja: "ja" };
const TITLES = {
  en: "FZAoao — Developer & Creator",
  zh: "FZAoao —— 开发者",
  ja: "FZAoao —— 開発者"
};

const root = document.documentElement;
const langButtons = document.querySelectorAll("[data-lang]");
const themeButton = document.querySelector("[data-theme-toggle]");

let currentLang = localStorage.getItem("site-lang-v2") || "en";
if (!LANGS.includes(currentLang)) currentLang = "en";
let currentTheme = localStorage.getItem("site-theme") || "light";
if (!["light", "dark"].includes(currentTheme)) currentTheme = "light";

/* —— 语言 —— */
function currentThemeLabel() {
  const toDark = currentTheme === "light";
  const label = { zh: toDark ? "切换深色" : "切换浅色", en: toDark ? "Dark" : "Light", ja: toDark ? "ダーク" : "ライト" };
  return label[currentLang] || label.en;
}

function applyLanguage(lang) {
  currentLang = lang;
  root.lang = LANG_TAG[lang];
  document.title = TITLES[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const text = translations[lang][key];
    if (text != null) el.textContent = text;
  });
  langButtons.forEach((b) => b.classList.toggle("on", b.dataset.lang === lang));
  try { localStorage.setItem("site-lang-v2", lang); } catch (e) { /* private mode */ }
  syncThemeLabel();
}

/* —— 主题：黑白两档 —— */
function applyTheme(theme) {
  currentTheme = theme;
  root.dataset.theme = theme;
  try { localStorage.setItem("site-theme", theme); } catch (e) { /* private mode */ }
  syncThemeLabel();
}

function syncThemeLabel() {
  if (!themeButton) return;
  themeButton.setAttribute("aria-label", currentThemeLabel());
  themeButton.title = themeButton.getAttribute("aria-label");
}

/* —— 开场纸幕：退场后从 DOM 移除，防挡点击 —— */
(function dismissLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;
  const remove = () => loader.remove();
  // 与 CSS --loader-ms + 退场时长对齐，留 150ms 余量
  setTimeout(remove, 2600);
  // 兜底：若用户偏好减少动态，CSS 已隐藏纸幕，直接移除
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) remove();
})();

langButtons.forEach((b) => b.addEventListener("click", () => applyLanguage(b.dataset.lang)));
if (themeButton) themeButton.addEventListener("click", () => applyTheme(currentTheme === "light" ? "dark" : "light"));

/* —— 入场：淡入 —— */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* —— 年份 —— */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* —— 启动：默认英文浅色 —— */
applyLanguage(currentLang);
applyTheme(currentTheme);
