const translations = {
  en: {
    "nav.about": "About",
    "nav.stack": "Stack",
    "nav.tools": "Tools",
    "nav.projects": "Projects",
    "nav.links": "Links",
    "hero.subtitle": "Furry / Dragon Cub / Developer",
    "hero.desc": "I am FZAoao, a furry fan with a dragon cub fursona. I turn ideas into code with Node.js, Python, Java, C, JavaScript, and Vue. I use VSCode and IDEA, and I run FZLink, CubeXMC, and S3API.",
    "hero.email": "Email Me",
    "section.about": "About",
    "about.name": "Name",
    "about.identity": "Identity",
    "about.identityValue": "Furry Fan",
    "about.fursona": "Fursona",
    "about.fursonaValue": "Dragon Cub",
    "about.intro": "Intro",
    "about.introText": "I love the furry world and enjoy building my own little universe with code. This site collects my identity, tech stack, projects, and links.",
    "section.stack": "Stack",
    "stack.node": "I use JavaScript for backends, APIs, tools, and automation scripts.",
    "stack.python": "Great for quick ideas, data processing, and practical utilities.",
    "stack.java": "Used for structured projects, application development, and OOP.",
    "stack.c": "Useful for understanding low-level logic, memory, and system-oriented programming.",
    "stack.vue": "For web interfaces, interactions, and frontend applications.",
    "section.tools": "Tools",
    "tools.vscode": "My daily editor for frontend work, scripts, Node.js, and fast experiments.",
    "tools.idea": "My IDE for Java projects, engineering workflows, and larger codebases.",
    "section.projects": "Projects",
    "projects.one": "Project 01",
    "projects.fzlink": "FZLink is my link hub for collecting and presenting my sites and social profiles.",
    "projects.two": "Project 02",
    "projects.cubex": "CubeXMC is my Minecraft server. Visit the official website to learn more.",
    "projects.three": "Project 03",
    "projects.s3api": "S3API is an API relay service for connecting and forwarding AI API requests.",
    "section.links": "Links",
    "footer.site": "FZAoao Personal Site",
    "footer.tags": "Code / Furry / Dragon Cub",
    langButton: "中文",
    themeLight: "Light",
    themeDark: "Dark"
  },
  zh: {
    "nav.about": "关于",
    "nav.stack": "技术栈",
    "nav.tools": "工具",
    "nav.projects": "项目",
    "nav.links": "链接",
    "hero.subtitle": "Furry / 龙崽 / 开发者",
    "hero.desc": "我是 FZAoao，Furry 控，兽设是一只龙崽。我会用 Node.js、Python、Java、C、JavaScript 和 Vue 把想法写成代码。常用 VSCode 和 IDEA，也在运营 FZLink、CubeXMC 和 S3API。",
    "hero.email": "联系我",
    "section.about": "关于",
    "about.name": "网名",
    "about.identity": "身份",
    "about.identityValue": "Furry 控",
    "about.fursona": "兽设",
    "about.fursonaValue": "龙崽",
    "about.intro": "介绍",
    "about.introText": "喜欢毛茸茸的世界，也喜欢用代码搭建自己的小宇宙。这里集中放置我的身份介绍、技术栈、项目和外部链接。",
    "section.stack": "技术栈",
    "stack.node": "用 JavaScript 写服务端、接口、工具和自动化脚本。",
    "stack.python": "适合快速实现想法、处理数据和写实用工具。",
    "stack.java": "用于结构化项目、应用开发和面向对象编程。",
    "stack.c": "理解底层逻辑、内存和更接近系统的编程方式。",
    "stack.vue": "制作网页界面、交互效果和前端应用。",
    "section.tools": "开发工具",
    "tools.vscode": "用于前端、脚本、Node.js 和日常快速开发。",
    "tools.idea": "用于 Java 项目、工程化开发和大型代码结构管理。",
    "section.projects": "项目",
    "projects.one": "项目 01",
    "projects.fzlink": "FZLink 是我的链接站，用于集中展示我的网站和社交主页。",
    "projects.two": "项目 02",
    "projects.cubex": "CubeXMC 是我的世界服务器，欢迎通过官网了解更多信息。",
    "projects.three": "项目 03",
    "projects.s3api": "S3API 是一个 API 中转站，用于连接和转发 AI API 服务。",
    "section.links": "链接",
    "footer.site": "FZAoao 个人网站",
    "footer.tags": "代码 / Furry / 龙崽",
    langButton: "English",
    themeLight: "浅色",
    themeDark: "深色"
  }
};

const root = document.documentElement;
const langButton = document.querySelector("[data-lang-toggle]");
const themeButton = document.querySelector("[data-theme-toggle]");

let currentLang = localStorage.getItem("site-lang") || "en";
let currentTheme = localStorage.getItem("site-theme") || "light";

function applyLanguage(lang) {
  currentLang = lang;
  root.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[lang][key];
  });

  langButton.textContent = translations[lang].langButton;
  localStorage.setItem("site-lang", lang);
}

function applyTheme(theme) {
  currentTheme = theme;
  root.dataset.theme = theme;
  themeButton.textContent = theme === "dark"
    ? translations[currentLang].themeLight
    : translations[currentLang].themeDark;
  localStorage.setItem("site-theme", theme);
}

langButton.addEventListener("click", () => {
  applyLanguage(currentLang === "en" ? "zh" : "en");
  applyTheme(currentTheme);
});

themeButton.addEventListener("click", () => {
  applyTheme(currentTheme === "light" ? "dark" : "light");
});

applyLanguage(currentLang);
applyTheme(currentTheme);
