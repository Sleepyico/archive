// docs/.vitepress/config.mts
import { fileURLToPath as fileURLToPath3 } from "node:url";
import consola4 from "file:///C:/Users/Wafa/Desktop/archive/node_modules/consola/dist/index.mjs";
import UnoCSS from "file:///C:/Users/Wafa/Desktop/archive/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///C:/Users/Wafa/Desktop/archive/node_modules/unplugin-auto-import/dist/vite.js";
import OptimizeExclude from "file:///C:/Users/Wafa/Desktop/archive/node_modules/vite-plugin-optimize-exclude/dist/index.mjs";
import Terminal from "file:///C:/Users/Wafa/Desktop/archive/node_modules/vite-plugin-terminal/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/Wafa/Desktop/archive/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/transformer.ts
import { basename } from "file:///C:/Users/Wafa/Desktop/archive/node_modules/pathe/dist/index.mjs";

// docs/.vitepress/transformer/constants.ts
var headers = {
  "adblockvpnguide.md": {
    title: "Adblocking / Privacy",
    description: "Adblocking, Privacy, VPN's, Proxies, Antivirus"
  },
  "ai.md": {
    title: "Artificial Intelligence",
    description: "Chat Bots, Text Generators, Image Generators, ChatGPT Tools"
  },
  "android-iosguide.md": {
    title: "Android / iOS",
    description: "Apps, Jailbreaking, Android Emulators"
  },
  "audiopiracyguide.md": {
    title: "Music / Podcasts / Radio",
    description: "Stream Audio, Download Audio, Torrent Audio"
  },
  "beginners-guide.md": {
    title: "Beginners Guide",
    description: "A Guide for Beginners to Piracy"
  },
  "downloadpiracyguide.md": {
    title: "Downloading",
    description: "Download Sites, Software Sites, Open Directories"
  },
  "edupiracyguide.md": {
    title: "Educational",
    description: "Courses, Documentaries, Learning Resources"
  },
  "gamingpiracyguide.md": {
    title: "Gaming / Emulation",
    description: "Download Games, ROMs, Gaming Tools"
  },
  "linuxguide.md": {
    title: "Linux / MacOS",
    description: "Apps, Software Sites, Gaming"
  },
  "miscguide.md": {
    title: "Miscellaneous",
    description: "Extensions, Indexes, News, Health, Food, Fun"
  },
  "nsfwpiracy.md": {
    title: "NSFW",
    description: "NSFW Indexes, Streaming, Downloading"
  },
  "non-english.md": {
    title: "Non-English",
    description: "International Piracy Sites"
  },
  "readingpiracyguide.md": {
    title: "Books / Comics / Manga",
    description: "Books, Comics, Magazines, Newspapers"
  },
  "gaming-tools.md": {
    title: "Gaming Tools",
    description: "Gaming Optimization, Game Launchers, Multiplayer"
  },
  "devtools.md": {
    title: "Developer Tools",
    description: "Git, Hosting, App Dev, Software Dev"
  },
  "img-tools.md": {
    title: "Image Tools",
    description: "Image Editors, Generators, Compress"
  },
  "audio-tools.md": {
    title: "Audio Tools",
    description: "Audio Players, Audio Editors, Audio Downloaders"
  },
  "system-tools.md": {
    title: "System Tools",
    description: "System Tools, Hardware Tools, Windows ISOs, Customization"
  },
  "file-tools.md": {
    title: "File Tools",
    description: "Download Managers, File Hosting, File Archivers"
  },
  "video-tools.md": {
    title: "Video Tools",
    description: "Video Players, Video Editors, Live Streaming, Animation"
  },
  "text-tools.md": {
    title: "Text Tools",
    description: "Text Editors, Pastebins, Fonts, Translators"
  },
  "internet-tools.md": {
    title: "Internet Tools",
    description: "Browsers, Extensions, Search Engines"
  },
  "social-media-tools.md": {
    title: "Social Media Tools",
    description: "Discord Tools, Reddit Tools, YouTube Tools"
  },
  "storage.md": {
    title: "Storage",
    description: "Sections too big to fit on main pages"
  },
  "torrentpiracyguide.md": {
    title: "Torrenting",
    description: "Torrent Clients, Torrent Sites, Trackers"
  },
  "videopiracyguide.md": {
    title: "Movies / TV / Anime",
    description: "Stream Videos, Download Videos, Torrent Videos"
  },
  "base64.md": {
    title: "Base64",
    description: "Base64 storage"
  },
  "unsafesites.md": {
    title: "Unsafe Sites",
    description: "Unsafe/harmful sites to avoid."
  }
};
var excluded = [
  "readme.md",
  "single-page",
  "feedback.md",
  "index.md",
  "sandbox.md"
];
function getHeader(id) {
  const title = '<div class="space-y-2 not-prose"><h1 class="text-4xl font-extrabold tracking-tight text-primary underline lg:text-5xl lg:leading-[3.5rem]">';
  const description = '<p class="text-black dark:text-text-2">';
  const feedback2 = "<Feedback />";
  const data = headers[id];
  let header = "---\n";
  header += `title: "${data.title}"
`;
  header += `description: ${data.description}
`;
  header += "---\n";
  header += `${title}${data.title}</h1>
`;
  header += `${description}${data.description}</p></div>

${feedback2}

`;
  return header;
}

// docs/.vitepress/transformer/core.ts
import consola from "file:///C:/Users/Wafa/Desktop/archive/node_modules/consola/dist/index.mjs";
var transformer = (text) => {
  const handler = {
    get(target2, prop) {
      if (prop === "transform") {
        return (name, transforms2) => {
          consola.debug(`Starting transform ${name} with ${transforms2}`);
          transforms2.forEach(({ name: name2, find, replace }) => {
            consola.debug(`Transforming ${name2} with ${find}`);
            target2.text = target2.text.replace(find, replace);
          });
          return proxy;
        };
      }
      if (prop === "getText") {
        return () => target2.text;
      }
      return Reflect.get(target2, prop);
    }
  };
  const target = { text };
  const proxy = new Proxy(target, handler);
  return proxy;
};
function replaceUnderscore(text) {
  const pattern = /\/#[\w\-]+(?:_[\w]+)*/g;
  const matches = text.match(pattern) || [];
  let _text = text;
  for (const match of matches) {
    const replacement = match.replace(/_/g, "-");
    _text = _text.replace(match, replacement);
  }
  return _text;
}

// docs/.vitepress/transformer.ts
function transforms() {
  return {
    name: "custom:transform-content",
    enforce: "pre",
    transform(code, id) {
      const _id = basename(id);
      if (id.endsWith(".md") && !excluded.includes(_id) && // check if it's a post
      !id.includes("posts") && !id.includes("other")) {
        const header = getHeader(_id);
        const contents = transform(code);
        if (_id === "beginners-guide.md") {
          const _contents = transformGuide(contents);
          return header + _contents;
        }
        if (_id === "storage.md") return header + contents;
        return header + transformLinks(contents);
      }
    }
  };
}
var transformGuide = (text) => transformer(text).transform("Beginners Guide", [
  {
    name: "TOC",
    find: /\[TOC\]\n/gm,
    replace: ""
  },
  {
    name: "TOC2",
    find: /\*\*Table of Contents\*\*\n\[TOC2\]\n/gm,
    replace: ""
  },
  {
    name: "Beginners Guide",
    find: /# -> \*\*\*Beginners Guide to Piracy\*\*\* <-\n/gm,
    replace: ""
  },
  {
    name: "Note",
    find: /!!!note\s(.+?)\n/gm,
    replace: "\n:::info\n$1\n:::\n"
  },
  {
    name: "Info",
    find: /!!!info\s(.+?)\n/gm,
    replace: "\n:::info\n$1\n:::\n"
  },
  {
    name: "Warning",
    find: /!!!warning\s(.+?)\n/gm,
    replace: ":::warning\n$1\n:::\n"
  },
  {
    name: "Quote",
    find: />\s(.+?)\n/gm,
    replace: "> $1\n\n"
  },
  {
    name: "Back to Top",
    find: /\*\*\[\^ Back to Top\]\(#beginners-guide-to-piracy\)\*\*/gm,
    replace: ""
  },
  {
    name: "Back to Top",
    find: /\*\*\[\^ Back to Top\]\(#beginners-guide-to-piracy\)\*\*/gm,
    replace: ""
  }
]).getText();
function transform(text) {
  let _text = text.replace(
    /\*\*\[◄◄ Back to Wiki Index\]\(https:\/\/www\.reddit\.com\/r\/FREEMEDIAHECKYEAH\/wiki\/index\)\*\*\n/gm,
    ""
  ).replace(
    /\*\*\[◄◄ Back to Wiki Index\]\(https:\/\/www\.reddit\.com\/r\/FREEMEDIAHECKYEAH\/wiki\/tools-index\)\*\*\n/gm,
    ""
  ).replace(
    /\*\*\[Table of Contents\]\(https?:\/\/.*?ibb\.co.*\)\*\* - For mobile users\n/gm,
    ""
  ).replace(/\*\*\*\n\*\*\*\n\*\*\*\n\*\*\*\n\n\n\*\*\*\n\*\*\*\n\n/gm, "").replace(/\*\*\*\n\*\*\*\n\*\*\*\n\*\*\*\n\n\n\*\*\*\n\*\*\* \n\n/gm, "").replace(/\*\*\*\n\*\*\*\n\*\*\*\n\n\n\*\*\*\n\*\*\*\n\n/gm, "").replace(/\*\*\*\n\*\*\*\n\*\*\*\n\*\*\*\n\n\n\*\*\*\n\n/gm, "").replace(/\*\*\*\n\*\*\*\n\n\n\*\*\*\n\n/gm, "").replace(/https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/ai/g, "/ai").replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/adblock-vpn-privacy/g,
    "/adblockvpnguide"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/android/g,
    "/android-iosguide"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/games/g,
    "/gamingpiracyguide"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/reading/g,
    "/readingpiracyguide"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/download/g,
    "/downloadpiracyguide"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/torrent/g,
    "/torrentpiracyguide"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/edu/g,
    "/edupiracyguide"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/system-tools/g,
    "/system-tools"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/file-tools/g,
    "/file-tools"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/internet-tools/g,
    "/internet-tools"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/social-media/g,
    "/social-media-tools"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/text-tools/g,
    "/text-tools"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/video-tools/g,
    "/video-tools"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/audio-tools/g,
    "/audio-tools"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/game-tools/g,
    "/gaming-tools"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/video/g,
    "/videopiracyguide"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/audio/g,
    "/audiopiracyguide"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/linux/g,
    "/linuxguide"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/non-eng/g,
    "/non-english"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/misc/g,
    "/miscguide"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/storage/g,
    "/storage"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/dev-tools/g,
    "/devtools"
  ).replace(
    /https:\/\/www.reddit.com\/r\/FREEMEDIAHECKYEAH\/wiki\/img-tools/g,
    "/img-tools"
  ).replace(/\/#wiki_/g, "/#").replace(/#wiki_/g, "/#").replace(/.25BA_/g, "").replace(/.25B7_/g, "").replace(/_.2F_/g, "-");
  _text = replaceUnderscore(_text).replace(/\/#(\d)/g, "/#_$1").replace(/#(\d)/g, "#_$1").replace(/\/#/g, "#").replace(/\*\*\*\n\n/gm, "").replace(/\*\*\*\n/gm, "").replace(/# ►/g, "##").replace(/## ▷/g, "###").replace(/####/g, "###").replace(/⭐/g, ":star:").replace(/🌐/g, ":globe-with-meridians:").replace(/↪/g, ":repeat-button:").replace(/^\*\*Note\*\* - (.+)$/gm, ":::tip\n$1\n:::").replace(/^\* \*\*Note\*\* - (.+)$/gm, ":::tip\n$1\n:::").replace(/^Note - (.+)$/gm, ":::tip\n$1\n:::").replace(/^\*\*Warning\*\* - (.+)$/gm, ":::warning\n$1\n:::").replace(/^\* \*\*Warning\*\* - (.+)$/gm, ":::warning\n$1\n:::").replace(/^\*\s([^*])/gm, "- $1").replace(
    /\/storage\/#encode--decode_urls/g,
    "/storage/#encode--decode-urls"
  ).replace(/\/devtools\/#machine-learning2/g, "/devtools/#machine-learning-1").replace(/\/linuxguide#software-sites2/g, "/linuxguide#software-sites-1").replace(/\/linuxguide#software_sites/g, "/linuxguide#software-sites").replace(/\/non-english#reading10/g, "/non-english#reading-9").replace(
    /\/storage#satellite-.26amp.3B_street_view_maps/g,
    "/storage#satellite-street-view-maps"
  ).replace(
    /(.+?) site or extension\.\n/gm,
    "Click on the texts to copy them decoded.\n"
  );
  return _text;
}
var transformLinks = (text) => transformer(text).transform("Links to Icons", [
  {
    name: "Discord",
    find: /\[Discord\]\(([^\)]*?)\)/gm,
    replace: '<a target="_blank" href="$1"><div alt="Discord" class="i-carbon:logo-discord" /></a>'
  },
  {
    name: "GitHub",
    find: /\[GitHub\]\(([^\)]*?)\)/gm,
    replace: '<a target="_blank" href="$1"><div alt="GitHub" class="i-carbon:logo-github" /></a>'
  },
  {
    name: "GitHub Fallback",
    find: /\[Github\]\(([^\)]*?)\)/gm,
    replace: '<a target="_blank" href="$1"><div alt="GitHub" class="i-carbon:logo-github" /></a>'
  },
  {
    name: "GitLab",
    find: /\[GitLab\]\(([^\)]*?)\)/gm,
    replace: '<a target="_blank" href="$1"><div alt="GitLab" class="i-carbon:logo-gitlab" /></a>'
  },
  {
    name: "GitLab Fallback",
    find: /\[Gitlab\]\(([^\)]*?)\)/gm,
    replace: '<a target="_blank" href="$1"><div alt="GitLab" class="i-carbon:logo-gitlab" /></a>'
  },
  {
    name: "Telegram",
    find: /\[Telegram\]\(([^\)]*?)\)/gm,
    replace: '<a target="_blank" href="$1"><div alt="Telegram" class="i-mdi:telegram" /></a>'
  },
  {
    name: "Subreddit",
    find: /\[Subreddit\]\(([^\)]*?)\)/gm,
    replace: '<a target="_blank" href="$1"><div alt="Reddit" class="i-mdi:reddit" /></a>'
  },
  {
    name: "Twitter",
    find: /\[Twitter\]\(([^\)]*?)\)/gm,
    replace: '<a target="_blank" href="$1"><div alt="Twitter" class="i-mdi:twitter" /></a>'
  },
  {
    name: "Tor",
    find: /\[.onion\]\(([^\)]*?)\)/gm,
    replace: '<a target="_blank" href="$1"><div alt=".onion" class="i-simple-icons:torbrowser w-1em h-1em" /></a>'
  }
]).getText();

// docs/.vitepress/constants.ts
var meta = {
  name: "freemediaheckyeah",
  description: "The largest collection of free stuff on the internet!",
  hostname: "https://fmhy.net",
  keywords: ["stream", "movies", "gaming", "reading", "anime"]
};
var commitRef = process.env.CF_PAGES && process.env.CF_PAGES_COMMIT_SHA ? `<a href="https://github.com/sleepyico/fmhy/commit/${process.env.CF_PAGES_COMMIT_SHA}">${process.env.CF_PAGES_COMMIT_SHA.slice(0, 8)}</a>` : "dev";
var feedback = `<a href="/feedback" class="feedback-footer">Made with \u2764</a>`;
var search = {
  options: {
    _render(src, env, md) {
      let contents = src;
      if (contents.includes("Beginners Guide"))
        contents = transformGuide(contents);
      contents = transform(contents);
      const html = md.render(contents, env);
      return html;
    },
    miniSearch: {
      options: {
        tokenize: (text) => text.split(/[\n\r #%*,=/:;?[\]{}()&]+/u),
        // simplified charset: removed [-_.@] and non-english chars (diacritics etc.)
        processTerm: (term, fieldName) => {
          term = term.trim().toLowerCase().replace(/^\.+/, "").replace(/\.+$/, "");
          const stopWords = [
            "frontmatter",
            "$frontmatter.synopsis",
            "and",
            "about",
            "but",
            "now",
            "the",
            "with",
            "you"
          ];
          if (term.length < 2 || stopWords.includes(term)) return false;
          if (fieldName === "text") {
            const parts = term.split(".");
            if (parts.length > 1) {
              const newTerms = [term, ...parts].filter((t) => t.length >= 2).filter((t) => !stopWords.includes(t));
              return newTerms;
            }
          }
          return term;
        }
      },
      searchOptions: {
        combineWith: "AND",
        fuzzy: true,
        // @ts-ignore
        boostDocument: (documentId, term, storedFields) => {
          const titles2 = (storedFields?.titles).filter((t) => Boolean(t)).map((t) => t.toLowerCase());
          if (documentId.match(/\/posts/)) return -5;
          if (documentId.match(/\/other/)) return -5;
          const titleIndex = titles2.map((t, i) => t?.includes(term) ? i : -1).find((i) => i >= 0) ?? -1;
          if (titleIndex >= 0) return 1e4 - titleIndex;
          return 1;
        }
      }
    },
    detailedView: true
  },
  provider: "local"
};
var socialLinks = [
  { icon: "github", link: "https://github.com/sleepyico/fmhy" },
  { icon: "discord", link: "https://iconical.dev/discord" },
  {
    ariaLabel: "Reddit",
    icon: {
      svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Reddit</title><path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z"/></svg>'
    },
    link: "https://reddit.com/r/FREEMEDIAHECKYEAH"
  },
  {
    ariaLabel: "Bluesky",
    icon: {
      svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bluesky</title><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/></svg>'
    },
    link: "https://bsky.app/profile/iconical.dev"
  }
];
var nav = [
  { text: "\u{1F516} Glossary", link: "https://rentry.org/The-Piracy-Glossary" },
  { text: "\u2139\uFE0F Guides", link: "https://guides.fmhy.lol/" },
  {
    text: "\u{1F4BE} Backups",
    link: "https://github.com/fmhy/FMHY/wiki/Backups"
  },
  {
    text: "\u{1FA85} Ecosystem",
    items: [
      { text: "\u{1F310} Search", link: "/posts/search" },
      { text: "\u{1F517} Bookmarks", link: "https://github.com/fmhy/bookmarks" },
      { text: "\u2705 SafeGuard", link: "https://github.com/fmhy/FMHY-SafeGuard" },
      { text: "\u{1F4CB} snowbin", link: "https://pastes.fmhy.net" },
      { text: "\u{1F4A1} Site Hunting", link: "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/find-new-sites/" },
      { text: "\u{1F3DE} Wallpapers", link: "/other/wallpapers" },
      { text: "\u{1F499} Feedback", link: "/feedback" },
      {
        text: "\u{1F607} SFW FMHY",
        link: "https://fmhy.xyz/"
      }
    ]
  }
];
var sidebar = [
  {
    text: '<span class="i-twemoji:books"></span> Beginners Guide',
    link: "/beginners-guide"
  },
  {
    text: '<span class="i-twemoji:newspaper"></span> Posts',
    link: "/posts"
  },
  {
    text: '<span class="i-twemoji:light-bulb"></span> Contribute',
    link: "/other/contributing"
  },
  // TODO: genetate sidebar from posts
  {
    text: "Wiki",
    collapsed: false,
    items: [
      {
        text: '<span class="i-twemoji:name-badge"></span> Adblocking / Privacy',
        link: "/adblockvpnguide"
      },
      {
        text: '<span class="i-twemoji:robot"></span> Artificial Intelligence',
        link: "/ai"
      },
      {
        text: '<span class="i-twemoji:television"></span> Movies / TV / Anime',
        link: "/videopiracyguide"
      },
      {
        text: '<span class="i-twemoji:musical-note"></span> Music / Podcasts / Radio',
        link: "/audiopiracyguide"
      },
      {
        text: '<span class="i-twemoji:video-game"></span> Gaming / Emulation',
        link: "/gamingpiracyguide"
      },
      {
        text: '<span class="i-twemoji:green-book"></span> Books / Comics / Manga',
        link: "/readingpiracyguide"
      },
      {
        text: '<span class="i-twemoji:floppy-disk"></span> Downloading',
        link: "/downloadpiracyguide"
      },
      {
        text: '<span class="i-twemoji:cyclone"></span> Torrenting',
        link: "/torrentpiracyguide"
      },
      {
        text: '<span class="i-twemoji:brain"></span> Educational',
        link: "/edupiracyguide"
      },
      {
        text: '<span class="i-twemoji:mobile-phone"></span> Android / iOS',
        link: "/android-iosguide"
      },
      {
        text: '<span class="i-twemoji:penguin"></span> Linux / MacOS',
        link: "/linuxguide"
      },
      {
        text: '<span class="i-twemoji:globe-showing-asia-australia"></span> Non-English',
        link: "/non-english"
      },
      {
        text: '<span class="i-twemoji:file-folder"></span> Miscellaneous',
        link: "/miscguide"
      }
    ]
  },
  {
    text: "Tools",
    collapsed: false,
    items: [
      {
        text: '<span class="i-twemoji:laptop"></span> System Tools',
        link: "/system-tools"
      },
      {
        text: '<span class="i-twemoji:card-file-box"></span> File Tools',
        link: "/file-tools"
      },
      {
        text: '<span class="i-twemoji:paperclip"></span> Internet Tools',
        link: "/internet-tools"
      },
      {
        text: '<span class="i-twemoji:left-speech-bubble"></span> Social Media Tools',
        link: "/social-media-tools"
      },
      {
        text: '<span class="i-twemoji:memo"></span> Text Tools',
        link: "/text-tools"
      },
      {
        text: '<span class="i-twemoji:alien-monster"></span> Gaming Tools',
        link: "/gaming-tools"
      },
      {
        text: '<span class="i-twemoji:camera"></span> Image Tools',
        link: "/img-tools"
      },
      {
        text: '<span class="i-twemoji:videocassette"></span> Video Tools',
        link: "/video-tools"
      },
      {
        text: '<span class="i-twemoji:speaker-high-volume"></span> Audio Tools',
        link: "/audiopiracyguide#audio-tools"
      },
      {
        text: '<span class="i-twemoji:red-apple"></span> Educational Tools',
        link: "/edupiracyguide#educational-tools"
      },
      {
        text: '<span class="i-twemoji:man-technologist"></span> Developer Tools',
        link: "/devtools"
      }
    ]
  },
  {
    text: "More",
    collapsed: true,
    items: [
      {
        text: '<span class="i-twemoji:no-one-under-eighteen"></span> NSFW',
        link: "https://rentry.co/NSFW-Checkpoint"
      },
      {
        text: '<span class="i-twemoji:warning"></span> Unsafe Sites',
        link: "/unsafesites"
      },
      {
        text: '<span class="i-twemoji:package"></span> Storage',
        link: "/storage"
      }
    ]
  }
];

// docs/.vitepress/hooks/meta.ts
function generateMeta(context, hostname) {
  const head = [];
  const { pageData } = context;
  if (pageData.isNotFound) return head;
  const url = `${hostname}/${pageData.relativePath.replace(/((^|\/)index)?\.md$/, "$2")}`;
  head.push(
    ["link", { rel: "canonical", href: url }],
    ["meta", { property: "og:url", content: url }],
    ["meta", { name: "twitter:url", content: url }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "og:title", content: pageData.frontmatter.title }],
    ["meta", { name: "twitter:title", content: pageData.frontmatter.title }]
  );
  if (pageData.frontmatter.description) {
    head.push(
      [
        "meta",
        {
          property: "og:description",
          content: pageData.frontmatter.description
        }
      ],
      [
        "meta",
        {
          name: "twitter:description",
          content: pageData.frontmatter.description
        }
      ]
    );
  }
  if (pageData.frontmatter.image) {
    head.push([
      "meta",
      {
        property: "og:image",
        content: `${hostname}/${pageData.frontmatter.image.replace(/^\//, "")}`
      }
    ]);
    head.push([
      "meta",
      {
        name: "twitter:image",
        content: `${hostname}/${pageData.frontmatter.image.replace(/^\//, "")}`
      }
    ]);
  } else {
    const url2 = pageData.filePath.replace("index.md", "").replace(".md", "");
    const imageUrl = `${url2}/__og_image__/og.png`.replaceAll("//", "/").replace(/^\//, "");
    head.push(
      ["meta", { property: "og:image", content: `${hostname}/${imageUrl}` }],
      ["meta", { property: "og:image:width", content: "1200" }],
      ["meta", { property: "og:image:height", content: "628" }],
      ["meta", { property: "og:image:type", content: "image/png" }],
      [
        "meta",
        { property: "og:image:alt", content: pageData.frontmatter.title }
      ],
      ["meta", { name: "twitter:image", content: `${hostname}/${imageUrl}` }],
      ["meta", { name: "twitter:image:width", content: "1200" }],
      ["meta", { name: "twitter:image:height", content: "628" }],
      [
        "meta",
        { name: "twitter:image:alt", content: pageData.frontmatter.title }
      ]
    );
  }
  if (pageData.frontmatter.tag) {
    head.push([
      "meta",
      { property: "article:tag", content: pageData.frontmatter.tag }
    ]);
  }
  if (pageData.frontmatter.date) {
    head.push([
      "meta",
      {
        property: "article:published_time",
        content: pageData.frontmatter.date
      }
    ]);
  }
  if (pageData.lastUpdated && pageData.frontmatter.lastUpdated !== false) {
    head.push([
      "meta",
      {
        property: "article:modified_time",
        content: new Date(pageData.lastUpdated).toISOString()
      }
    ]);
  }
  return head;
}

// docs/.vitepress/hooks/opengraph.ts
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { renderAsync } from "file:///C:/Users/Wafa/Desktop/archive/node_modules/@resvg/resvg-js/index.js";
import consola2 from "file:///C:/Users/Wafa/Desktop/archive/node_modules/consola/dist/index.mjs";
import { createContentLoader } from "file:///C:/Users/Wafa/Desktop/archive/node_modules/vitepress/dist/node/index.js";
import { satoriVue } from "file:///C:/Users/Wafa/Desktop/archive/node_modules/x-satori/dist/vue.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Wafa/Desktop/archive/docs/.vitepress/hooks/opengraph.ts";
var __dirname = dirname(fileURLToPath(__vite_injected_original_import_meta_url));
var __fonts = resolve(__dirname, "../fonts");
async function generateImages(config) {
  const pages = await createContentLoader("**/*.md", { excerpt: true }).load();
  const template = await readFile(resolve(__dirname, "./Template.vue"), "utf-8");
  const fonts2 = [
    {
      name: "Inter",
      data: await readFile(resolve(__fonts, "Inter-Regular.otf")),
      weight: 400,
      style: "normal"
    },
    {
      name: "Inter",
      data: await readFile(resolve(__fonts, "Inter-Medium.otf")),
      weight: 500,
      style: "normal"
    },
    {
      name: "Inter",
      data: await readFile(resolve(__fonts, "Inter-SemiBold.otf")),
      weight: 600,
      style: "normal"
    },
    {
      name: "Inter",
      data: await readFile(resolve(__fonts, "Inter-Bold.otf")),
      weight: 700,
      style: "normal"
    }
  ];
  for (const page of pages) {
    await generateImage({
      page,
      template,
      outDir: config.outDir,
      fonts: fonts2
    });
  }
  return consola2.info("Generated opengraph images.");
}
async function generateImage({
  page,
  template,
  outDir,
  fonts: fonts2
}) {
  const { frontmatter, url } = page;
  const _page = getPage(url);
  const title = frontmatter.layout === "home" ? frontmatter.hero.name ?? frontmatter.title : frontmatter.title ? frontmatter.title : _page?.title;
  const description = frontmatter.layout === "home" ? frontmatter.hero.tagline ?? frontmatter.description : frontmatter.description ? frontmatter.description : _page?.description;
  const options = {
    width: 1200,
    height: 628,
    fonts: fonts2,
    props: {
      title,
      description
    }
  };
  const svg = await satoriVue(options, template);
  const render = await renderAsync(svg);
  const outputFolder = resolve(outDir, url.slice(1), "__og_image__");
  const outputFile = resolve(outputFolder, "og.png");
  await mkdir(outputFolder, { recursive: true });
  await writeFile(outputFile, render.asPng());
}
function getPage(page) {
  const pageName = `${page}.md`.slice(1).split("/").at(-1);
  const header = Object.entries(headers).find(([key]) => key === pageName);
  if (!header) return;
  const { title, description } = header[1];
  return {
    title,
    description
  };
}

// docs/.vitepress/hooks/rss.ts
import { writeFileSync } from "node:fs";
import path from "node:path";
import consola3 from "file:///C:/Users/Wafa/Desktop/archive/node_modules/consola/dist/index.mjs";
import { Feed } from "file:///C:/Users/Wafa/Desktop/archive/node_modules/feed/lib/feed.js";
import { createContentLoader as createContentLoader2 } from "file:///C:/Users/Wafa/Desktop/archive/node_modules/vitepress/dist/node/index.js";
async function generateFeed(config) {
  const feed = new Feed({
    id: meta.hostname,
    link: meta.hostname,
    title: "FMHY blog",
    description: meta.description,
    language: "en-US",
    image: "https://github.com/fmhy.png",
    favicon: `${meta.hostname}/favicon.ico`,
    copyright: "Copyright (c) 2023-present FMHY"
  });
  const posts = await createContentLoader2("posts/*.md", {
    excerpt: true,
    render: true,
    transform: (rawData) => {
      return rawData.sort((a, b) => {
        return Number(new Date(b.frontmatter.date)) - Number(new Date(a.frontmatter.date));
      });
    }
  }).load();
  for (const { url, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${meta.hostname}${url.replace(/\/\d+\./, "/")}`,
      link: `${meta.hostname}${url.replace(/\/\d+\./, "/")}`,
      date: frontmatter.date,
      content: html?.replaceAll("&ZeroWidthSpace;", "")
    });
  }
  writeFileSync(path.join(config.outDir, "feed.rss"), feed.rss2());
  return consola3.info("Generated rss feed.");
}

// docs/.vitepress/hooks/satoriConfig.ts
import { readFile as readFile2 } from "node:fs/promises";
import { dirname as dirname2, resolve as resolve2 } from "node:path";
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { defineSatoriConfig } from "file:///C:/Users/Wafa/Desktop/archive/node_modules/x-satori/dist/vue.mjs";
var __vite_injected_original_import_meta_url2 = "file:///C:/Users/Wafa/Desktop/archive/docs/.vitepress/hooks/satoriConfig.ts";
var __dirname2 = dirname2(fileURLToPath2(__vite_injected_original_import_meta_url2));
var __fonts2 = resolve2(__dirname2, "../fonts");
var fonts = [
  {
    name: "Inter",
    data: await readFile2(resolve2(__fonts2, "Inter-Regular.otf")),
    weight: 400,
    style: "normal"
  },
  {
    name: "Inter",
    data: await readFile2(resolve2(__fonts2, "Inter-Medium.otf")),
    weight: 500,
    style: "normal"
  },
  {
    name: "Inter",
    data: await readFile2(resolve2(__fonts2, "Inter-SemiBold.otf")),
    weight: 600,
    style: "normal"
  },
  {
    name: "Inter",
    data: await readFile2(resolve2(__fonts2, "Inter-Bold.otf")),
    weight: 700,
    style: "normal"
  }
];
var satoriConfig_default = defineSatoriConfig({
  width: 1200,
  height: 628,
  fonts,
  props: {
    title: "Title",
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    dir: "/j"
  }
});

// docs/.vitepress/markdown/emoji.ts
import { icons as twemoji } from "file:///C:/Users/Wafa/Desktop/archive/node_modules/@iconify-json/twemoji/index.mjs";
var defs = {
  ...Object.fromEntries(
    Object.entries(twemoji.icons).map(([key]) => {
      return [key, ""];
    })
  )
};
function emojiRender(md) {
  md.renderer.rules.emoji = (tokens, idx) => {
    if (tokens[idx].markup.startsWith("star")) {
      return `<span class="i-twemoji-${tokens[idx].markup} starred"></span>`;
    }
    return `<span class="i-twemoji-${tokens[idx].markup}"></span>`;
  };
}
function movePlugin(plugins, pluginAName, order, pluginBName) {
  const pluginBIndex = plugins.findIndex((p) => p.name === pluginBName);
  if (pluginBIndex === -1) return;
  const pluginAIndex = plugins.findIndex((p) => p.name === pluginAName);
  if (pluginAIndex === -1) return;
  if (order === "before" && pluginAIndex > pluginBIndex) {
    const pluginA = plugins.splice(pluginAIndex, 1)[0];
    plugins.splice(pluginBIndex, 0, pluginA);
  }
  if (order === "after" && pluginAIndex < pluginBIndex) {
    const pluginA = plugins.splice(pluginAIndex, 1)[0];
    plugins.splice(pluginBIndex, 0, pluginA);
  }
}

// docs/.vitepress/markdown/headers.ts
var titles = Object.keys(headers).map((key) => headers[key].title);
var headersPlugin = (md) => {
  md.renderer.rules.heading_close = (tokens, idx, options, env, self) => {
    const result = self.renderToken(tokens, idx, options);
    const heading = tokens[idx - 1];
    const level = tokens[idx].tag.slice(1);
    if (!titles.includes(env.frontmatter.title) || level !== "2") return result;
    return `<Feedback heading="${heading.content}" />${result}`;
  };
};

// docs/.vitepress/markdown/toggleStarred.ts
var excluded2 = ["Beginners Guide"];
function toggleStarredPlugin(md) {
  md.renderer.rules.list_item_open = (tokens, index, options, env, self) => {
    const contentToken = tokens[index + 2];
    if (!excluded2.includes(env.frontmatter.title) && contentToken && contentToken.content.startsWith(":star:")) {
      return `<li class="starred">`;
    }
    return self.renderToken(tokens, index, options);
  };
}

// docs/.vitepress/config.mts
var __vite_injected_original_import_meta_url3 = "file:///C:/Users/Wafa/Desktop/archive/docs/.vitepress/config.mts";
var baseUrl = process.env.GITHUB_ACTIONS ? "/edit" : "/";
var config_default = defineConfig({
  title: "FMHY",
  description: meta.description,
  titleTemplate: ":title \u2022 freemediaheckyeah",
  lang: "en-US",
  lastUpdated: false,
  cleanUrls: true,
  appearance: true,
  base: baseUrl,
  srcExclude: ["README.md", "single-page"],
  ignoreDeadLinks: true,
  sitemap: {
    hostname: meta.hostname
  },
  head: [
    ["meta", { name: "theme-color", content: "#7bc5e4" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["link", { rel: "icon", href: "/test.png" }],
    // PWA
    ["link", { rel: "icon", href: "/test.png", type: "image/svg+xml" }],
    ["link", { rel: "alternate icon", href: "/test.png" }],
    ["link", { rel: "mask-icon", href: "/test.png", color: "#7bc5e4" }],
    ["meta", { name: "keywords", content: meta.keywords.join(" ") }],
    ["link", { rel: "apple-touch-icon", href: "/test.png", sizes: "192x192" }],
    // Bing site verification
    [
      "meta",
      {
        name: "msvalidate.01",
        content: "55ae5a0600A8C7827B59CFD506D76DC2"
      }
    ],
    // Google site verification
    [
      "meta",
      {
        name: "google-site-verification",
        content: "XCq-ZTw6VJPQ7gVNEOl8u0JRqfadK7WcsJ0H598Wv9E"
      }
    ],
    // Redirect to main site if embedded in iframe
    [
      "script",
      {},
      `
        (function() {
          if (window.self !== window.top) {
              window.top.location = window.location.href;
          }
        })();
        `
    ]
  ],
  transformHead: async (context) => generateMeta(context, meta.hostname),
  buildEnd: async (context) => {
    generateImages(context).then(() => generateFeed(context)).finally(() => consola4.success("Success!"));
  },
  vite: {
    ssr: {
      noExternal: ["@fmhy/components"]
    },
    resolve: {
      alias: [
        {
          find: /^.*VPSwitchAppearance\.vue$/,
          replacement: fileURLToPath3(
            new URL("./theme/Appearance.vue", __vite_injected_original_import_meta_url3)
          )
        }
      ]
    },
    optimizeDeps: { exclude: ["workbox-window"] },
    plugins: [
      OptimizeExclude(),
      Terminal({
        console: "terminal",
        output: ["console", "terminal"]
      }),
      UnoCSS({
        configFile: "../unocss.config.ts"
      }),
      AutoImport({
        dts: "../.cache/imports.d.ts",
        imports: ["vue", "vitepress"],
        vueTemplate: true,
        biomelintrc: {
          enabled: true,
          filepath: "./.cache/imports.json"
        }
      }),
      transforms(),
      {
        name: "custom:adjust-order",
        configResolved(c) {
          movePlugin(
            c.plugins,
            "vitepress",
            "before",
            "unocss:transformers:pre"
          );
          movePlugin(
            c.plugins,
            "custom:transform-content",
            "before",
            "vitepress"
          );
        }
      }
    ],
    build: {
      // Shut the fuck up
      chunkSizeWarningLimit: Number.POSITIVE_INFINITY
    }
  },
  markdown: {
    emoji: { defs },
    config(md) {
      md.use(emojiRender);
      md.use(toggleStarredPlugin);
      md.use(headersPlugin);
    }
  },
  themeConfig: {
    search,
    footer: {
      message: `${feedback} (rev: ${commitRef})`,
      copyright: `\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()}, <a href="https://i.ibb.co/pLVXBSh/image.png">Estd 2018.</a>`
    },
    editLink: {
      pattern: "https://github.com/sleepyico/fmhy/edit/main/docs/:path",
      text: "\u{1F4DD} Edit this page"
    },
    outline: "deep",
    logo: "/fmhy.ico",
    nav,
    sidebar,
    socialLinks
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL3RyYW5zZm9ybWVyLnRzIiwgImRvY3MvLnZpdGVwcmVzcy90cmFuc2Zvcm1lci9jb25zdGFudHMudHMiLCAiZG9jcy8udml0ZXByZXNzL3RyYW5zZm9ybWVyL2NvcmUudHMiLCAiZG9jcy8udml0ZXByZXNzL2NvbnN0YW50cy50cyIsICJkb2NzLy52aXRlcHJlc3MvaG9va3MvbWV0YS50cyIsICJkb2NzLy52aXRlcHJlc3MvaG9va3Mvb3BlbmdyYXBoLnRzIiwgImRvY3MvLnZpdGVwcmVzcy9ob29rcy9yc3MudHMiLCAiZG9jcy8udml0ZXByZXNzL2hvb2tzL3NhdG9yaUNvbmZpZy50cyIsICJkb2NzLy52aXRlcHJlc3MvbWFya2Rvd24vZW1vamkudHMiLCAiZG9jcy8udml0ZXByZXNzL21hcmtkb3duL2hlYWRlcnMudHMiLCAiZG9jcy8udml0ZXByZXNzL21hcmtkb3duL3RvZ2dsZVN0YXJyZWQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxXYWZhXFxcXERlc2t0b3BcXFxcYXJjaGl2ZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFdhZmFcXFxcRGVza3RvcFxcXFxhcmNoaXZlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9XYWZhL0Rlc2t0b3AvYXJjaGl2ZS9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCBjb25zb2xhIGZyb20gJ2NvbnNvbGEnXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBPcHRpbWl6ZUV4Y2x1ZGUgZnJvbSAndml0ZS1wbHVnaW4tb3B0aW1pemUtZXhjbHVkZSdcbmltcG9ydCBUZXJtaW5hbCBmcm9tICd2aXRlLXBsdWdpbi10ZXJtaW5hbCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcbmltcG9ydCB7XG4gIGNvbW1pdFJlZixcbiAgZmVlZGJhY2ssXG4gIG1ldGEsXG4gIG5hdixcbiAgc2VhcmNoLFxuICBzaWRlYmFyLFxuICBzb2NpYWxMaW5rc1xufSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCB7IGdlbmVyYXRlRmVlZCwgZ2VuZXJhdGVJbWFnZXMsIGdlbmVyYXRlTWV0YSB9IGZyb20gJy4vaG9va3MnXG5pbXBvcnQgeyBkZWZzLCBlbW9qaVJlbmRlciwgbW92ZVBsdWdpbiB9IGZyb20gJy4vbWFya2Rvd24vZW1vamknXG5pbXBvcnQgeyBoZWFkZXJzUGx1Z2luIH0gZnJvbSAnLi9tYXJrZG93bi9oZWFkZXJzJ1xuaW1wb3J0IHsgdG9nZ2xlU3RhcnJlZFBsdWdpbiB9IGZyb20gJy4vbWFya2Rvd24vdG9nZ2xlU3RhcnJlZCdcbmltcG9ydCB7IHRyYW5zZm9ybXMgfSBmcm9tICcuL3RyYW5zZm9ybWVyJ1xuXG4vLyBAdW5vY3NzLWluY2x1ZGVcblxuY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LkdJVEhVQl9BQ1RJT05TID8gJy9lZGl0JyA6ICcvJ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdGl0bGU6ICdGTUhZJyxcbiAgZGVzY3JpcHRpb246IG1ldGEuZGVzY3JpcHRpb24sXG4gIHRpdGxlVGVtcGxhdGU6ICc6dGl0bGUgXHUyMDIyIGZyZWVtZWRpYWhlY2t5ZWFoJyxcbiAgbGFuZzogJ2VuLVVTJyxcbiAgbGFzdFVwZGF0ZWQ6IGZhbHNlLFxuICBjbGVhblVybHM6IHRydWUsXG4gIGFwcGVhcmFuY2U6IHRydWUsXG4gIGJhc2U6IGJhc2VVcmwsXG4gIHNyY0V4Y2x1ZGU6IFsnUkVBRE1FLm1kJywgJ3NpbmdsZS1wYWdlJ10sXG4gIGlnbm9yZURlYWRMaW5rczogdHJ1ZSxcbiAgc2l0ZW1hcDoge1xuICAgIGhvc3RuYW1lOiBtZXRhLmhvc3RuYW1lXG4gIH0sXG4gIGhlYWQ6IFtcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICd0aGVtZS1jb2xvcicsIGNvbnRlbnQ6ICcjN2JjNWU0JyB9XSxcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICdvZzp0eXBlJywgY29udGVudDogJ3dlYnNpdGUnIH1dLFxuICAgIFsnbWV0YScsIHsgbmFtZTogJ29nOmxvY2FsZScsIGNvbnRlbnQ6ICdlbicgfV0sXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy90ZXN0LnBuZycgfV0sXG4gICAgLy8gUFdBXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy90ZXN0LnBuZycsIHR5cGU6ICdpbWFnZS9zdmcreG1sJyB9XSxcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ2FsdGVybmF0ZSBpY29uJywgaHJlZjogJy90ZXN0LnBuZycgfV0sXG4gICAgWydsaW5rJywgeyByZWw6ICdtYXNrLWljb24nLCBocmVmOiAnL3Rlc3QucG5nJywgY29sb3I6ICcjN2JjNWU0JyB9XSxcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICdrZXl3b3JkcycsIGNvbnRlbnQ6IG1ldGEua2V5d29yZHMuam9pbignICcpIH1dLFxuICAgIFsnbGluaycsIHsgcmVsOiAnYXBwbGUtdG91Y2gtaWNvbicsIGhyZWY6ICcvdGVzdC5wbmcnLCBzaXplczogJzE5MngxOTInIH1dLFxuICAgIC8vIEJpbmcgc2l0ZSB2ZXJpZmljYXRpb25cbiAgICBbXG4gICAgICAnbWV0YScsXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdtc3ZhbGlkYXRlLjAxJyxcbiAgICAgICAgY29udGVudDogJzU1YWU1YTA2MDBBOEM3ODI3QjU5Q0ZENTA2RDc2REMyJ1xuICAgICAgfVxuICAgIF0sXG4gICAgLy8gR29vZ2xlIHNpdGUgdmVyaWZpY2F0aW9uXG4gICAgW1xuICAgICAgJ21ldGEnLFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZ29vZ2xlLXNpdGUtdmVyaWZpY2F0aW9uJyxcbiAgICAgICAgY29udGVudDogJ1hDcS1aVHc2VkpQUTdnVk5FT2w4dTBKUnFmYWRLN1djc0owSDU5OFd2OUUnXG4gICAgICB9XG4gICAgXSxcbiAgICAvLyBSZWRpcmVjdCB0byBtYWluIHNpdGUgaWYgZW1iZWRkZWQgaW4gaWZyYW1lXG4gICAgW1xuICAgICAgJ3NjcmlwdCcsXG4gICAgICB7fSxcbiAgICAgIGBcbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICh3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcCkge1xuICAgICAgICAgICAgICB3aW5kb3cudG9wLmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgICAgICBgXG4gICAgXVxuICBdLFxuICB0cmFuc2Zvcm1IZWFkOiBhc3luYyAoY29udGV4dCkgPT4gZ2VuZXJhdGVNZXRhKGNvbnRleHQsIG1ldGEuaG9zdG5hbWUpLFxuICBidWlsZEVuZDogYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBnZW5lcmF0ZUltYWdlcyhjb250ZXh0KVxuICAgICAgLnRoZW4oKCkgPT4gZ2VuZXJhdGVGZWVkKGNvbnRleHQpKVxuICAgICAgLmZpbmFsbHkoKCkgPT4gY29uc29sYS5zdWNjZXNzKCdTdWNjZXNzIScpKVxuICB9LFxuICB2aXRlOiB7XG4gICAgc3NyOiB7XG4gICAgICBub0V4dGVybmFsOiBbJ0BmbWh5L2NvbXBvbmVudHMnXVxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9eLipWUFN3aXRjaEFwcGVhcmFuY2VcXC52dWUkLyxcbiAgICAgICAgICByZXBsYWNlbWVudDogZmlsZVVSTFRvUGF0aChcbiAgICAgICAgICAgIG5ldyBVUkwoJy4vdGhlbWUvQXBwZWFyYW5jZS52dWUnLCBpbXBvcnQubWV0YS51cmwpXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBvcHRpbWl6ZURlcHM6IHsgZXhjbHVkZTogWyd3b3JrYm94LXdpbmRvdyddIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgT3B0aW1pemVFeGNsdWRlKCksXG4gICAgICBUZXJtaW5hbCh7XG4gICAgICAgIGNvbnNvbGU6ICd0ZXJtaW5hbCcsXG4gICAgICAgIG91dHB1dDogWydjb25zb2xlJywgJ3Rlcm1pbmFsJ11cbiAgICAgIH0pLFxuICAgICAgVW5vQ1NTKHtcbiAgICAgICAgY29uZmlnRmlsZTogJy4uL3Vub2Nzcy5jb25maWcudHMnXG4gICAgICB9KSxcbiAgICAgIEF1dG9JbXBvcnQoe1xuICAgICAgICBkdHM6ICcuLi8uY2FjaGUvaW1wb3J0cy5kLnRzJyxcbiAgICAgICAgaW1wb3J0czogWyd2dWUnLCAndml0ZXByZXNzJ10sXG4gICAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgICAgICBiaW9tZWxpbnRyYzoge1xuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgZmlsZXBhdGg6ICcuLy5jYWNoZS9pbXBvcnRzLmpzb24nXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgdHJhbnNmb3JtcygpLFxuICAgICAge1xuICAgICAgICBuYW1lOiAnY3VzdG9tOmFkanVzdC1vcmRlcicsXG4gICAgICAgIGNvbmZpZ1Jlc29sdmVkKGMpIHtcbiAgICAgICAgICBtb3ZlUGx1Z2luKFxuICAgICAgICAgICAgYy5wbHVnaW5zIGFzIGFueSxcbiAgICAgICAgICAgICd2aXRlcHJlc3MnLFxuICAgICAgICAgICAgJ2JlZm9yZScsXG4gICAgICAgICAgICAndW5vY3NzOnRyYW5zZm9ybWVyczpwcmUnXG4gICAgICAgICAgKVxuICAgICAgICAgIG1vdmVQbHVnaW4oXG4gICAgICAgICAgICBjLnBsdWdpbnMgYXMgYW55LFxuICAgICAgICAgICAgJ2N1c3RvbTp0cmFuc2Zvcm0tY29udGVudCcsXG4gICAgICAgICAgICAnYmVmb3JlJyxcbiAgICAgICAgICAgICd2aXRlcHJlc3MnXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBidWlsZDoge1xuICAgICAgLy8gU2h1dCB0aGUgZnVjayB1cFxuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFlcbiAgICB9XG4gIH0sXG4gIG1hcmtkb3duOiB7XG4gICAgZW1vamk6IHsgZGVmcyB9LFxuICAgIGNvbmZpZyhtZCkge1xuICAgICAgbWQudXNlKGVtb2ppUmVuZGVyKVxuICAgICAgbWQudXNlKHRvZ2dsZVN0YXJyZWRQbHVnaW4pXG4gICAgICBtZC51c2UoaGVhZGVyc1BsdWdpbilcbiAgICB9XG4gIH0sXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgc2VhcmNoLFxuICAgIGZvb3Rlcjoge1xuICAgICAgbWVzc2FnZTogYCR7ZmVlZGJhY2t9IChyZXY6ICR7Y29tbWl0UmVmfSlgLFxuICAgICAgY29weXJpZ2h0OiBgXHUwMEE5ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSwgPGEgaHJlZj1cImh0dHBzOi8vaS5pYmIuY28vcExWWEJTaC9pbWFnZS5wbmdcIj5Fc3RkIDIwMTguPC9hPmBcbiAgICB9LFxuICAgIGVkaXRMaW5rOiB7XG4gICAgICBwYXR0ZXJuOiAnaHR0cHM6Ly9naXRodWIuY29tL2ZtaHkvZWRpdC9lZGl0L21haW4vZG9jcy86cGF0aCcsXG4gICAgICB0ZXh0OiAnXHVEODNEXHVEQ0REIEVkaXQgdGhpcyBwYWdlJ1xuICAgIH0sXG4gICAgb3V0bGluZTogJ2RlZXAnLFxuICAgIGxvZ286ICcvZm1oeS5pY28nLFxuICAgIG5hdixcbiAgICBzaWRlYmFyLFxuICAgIHNvY2lhbExpbmtzXG4gIH1cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFdhZmFcXFxcRGVza3RvcFxcXFxhcmNoaXZlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcV2FmYVxcXFxEZXNrdG9wXFxcXGFyY2hpdmVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRyYW5zZm9ybWVyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9XYWZhL0Rlc2t0b3AvYXJjaGl2ZS9kb2NzLy52aXRlcHJlc3MvdHJhbnNmb3JtZXIudHNcIjsvKipcbiAqICBDb3B5cmlnaHQgKGMpIHRhc2t5bGl6YXJkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZXByZXNzJ1xuaW1wb3J0IHsgYmFzZW5hbWUgfSBmcm9tICdwYXRoZSdcbmltcG9ydCB7IGV4Y2x1ZGVkLCBnZXRIZWFkZXIgfSBmcm9tICcuL3RyYW5zZm9ybWVyL2NvbnN0YW50cydcbmltcG9ydCB7IHJlcGxhY2VVbmRlcnNjb3JlLCB0cmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3JtZXIvY29yZSdcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybXMoKTogUGx1Z2luIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnY3VzdG9tOnRyYW5zZm9ybS1jb250ZW50JyxcbiAgICBlbmZvcmNlOiAncHJlJyxcbiAgICB0cmFuc2Zvcm0oY29kZSwgaWQpIHtcbiAgICAgIGNvbnN0IF9pZCA9IGJhc2VuYW1lKGlkKVxuXG4gICAgICBpZiAoXG4gICAgICAgIGlkLmVuZHNXaXRoKCcubWQnKSAmJlxuICAgICAgICAhZXhjbHVkZWQuaW5jbHVkZXMoX2lkKSAmJlxuICAgICAgICAvLyBjaGVjayBpZiBpdCdzIGEgcG9zdFxuICAgICAgICAhaWQuaW5jbHVkZXMoJ3Bvc3RzJykgJiZcbiAgICAgICAgIWlkLmluY2x1ZGVzKCdvdGhlcicpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZ2V0SGVhZGVyKF9pZClcbiAgICAgICAgY29uc3QgY29udGVudHMgPSB0cmFuc2Zvcm0oY29kZSlcblxuICAgICAgICBpZiAoX2lkID09PSAnYmVnaW5uZXJzLWd1aWRlLm1kJykge1xuICAgICAgICAgIGNvbnN0IF9jb250ZW50cyA9IHRyYW5zZm9ybUd1aWRlKGNvbnRlbnRzKVxuICAgICAgICAgIHJldHVybiBoZWFkZXIgKyBfY29udGVudHNcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2lkID09PSAnc3RvcmFnZS5tZCcpIHJldHVybiBoZWFkZXIgKyBjb250ZW50c1xuXG4gICAgICAgIHJldHVybiBoZWFkZXIgKyB0cmFuc2Zvcm1MaW5rcyhjb250ZW50cylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybUd1aWRlID0gKHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PlxuICB0cmFuc2Zvcm1lcih0ZXh0KVxuICAgIC50cmFuc2Zvcm0oJ0JlZ2lubmVycyBHdWlkZScsIFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1RPQycsXG4gICAgICAgIGZpbmQ6IC9cXFtUT0NcXF1cXG4vZ20sXG4gICAgICAgIHJlcGxhY2U6ICcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVE9DMicsXG4gICAgICAgIGZpbmQ6IC9cXCpcXCpUYWJsZSBvZiBDb250ZW50c1xcKlxcKlxcblxcW1RPQzJcXF1cXG4vZ20sXG4gICAgICAgIHJlcGxhY2U6ICcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQmVnaW5uZXJzIEd1aWRlJyxcbiAgICAgICAgZmluZDogLyMgLT4gXFwqXFwqXFwqQmVnaW5uZXJzIEd1aWRlIHRvIFBpcmFjeVxcKlxcKlxcKiA8LVxcbi9nbSxcbiAgICAgICAgcmVwbGFjZTogJydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdOb3RlJyxcbiAgICAgICAgZmluZDogLyEhIW5vdGVcXHMoLis/KVxcbi9nbSxcbiAgICAgICAgcmVwbGFjZTogJ1xcbjo6OmluZm9cXG4kMVxcbjo6OlxcbidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdJbmZvJyxcbiAgICAgICAgZmluZDogLyEhIWluZm9cXHMoLis/KVxcbi9nbSxcbiAgICAgICAgcmVwbGFjZTogJ1xcbjo6OmluZm9cXG4kMVxcbjo6OlxcbidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdXYXJuaW5nJyxcbiAgICAgICAgZmluZDogLyEhIXdhcm5pbmdcXHMoLis/KVxcbi9nbSxcbiAgICAgICAgcmVwbGFjZTogJzo6Ondhcm5pbmdcXG4kMVxcbjo6OlxcbidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdRdW90ZScsXG4gICAgICAgIGZpbmQ6IC8+XFxzKC4rPylcXG4vZ20sXG4gICAgICAgIHJlcGxhY2U6ICc+ICQxXFxuXFxuJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0JhY2sgdG8gVG9wJyxcbiAgICAgICAgZmluZDogL1xcKlxcKlxcW1xcXiBCYWNrIHRvIFRvcFxcXVxcKCNiZWdpbm5lcnMtZ3VpZGUtdG8tcGlyYWN5XFwpXFwqXFwqL2dtLFxuICAgICAgICByZXBsYWNlOiAnJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0JhY2sgdG8gVG9wJyxcbiAgICAgICAgZmluZDogL1xcKlxcKlxcW1xcXiBCYWNrIHRvIFRvcFxcXVxcKCNiZWdpbm5lcnMtZ3VpZGUtdG8tcGlyYWN5XFwpXFwqXFwqL2dtLFxuICAgICAgICByZXBsYWNlOiAnJ1xuICAgICAgfVxuICAgIF0pXG4gICAgLmdldFRleHQoKVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBfdGV4dCA9IHRleHRcbiAgICAvLyBUcmFuc2Zvcm0gcmVkZGl0IGluZGV4IGxpbmtzXG4gICAgLnJlcGxhY2UoXG4gICAgICAvXFwqXFwqXFxbXHUyNUM0XHUyNUM0IEJhY2sgdG8gV2lraSBJbmRleFxcXVxcKGh0dHBzOlxcL1xcL3d3d1xcLnJlZGRpdFxcLmNvbVxcL3JcXC9GUkVFTUVESUFIRUNLWUVBSFxcL3dpa2lcXC9pbmRleFxcKVxcKlxcKlxcbi9nbSxcbiAgICAgICcnXG4gICAgKVxuICAgIC5yZXBsYWNlKFxuICAgICAgL1xcKlxcKlxcW1x1MjVDNFx1MjVDNCBCYWNrIHRvIFdpa2kgSW5kZXhcXF1cXChodHRwczpcXC9cXC93d3dcXC5yZWRkaXRcXC5jb21cXC9yXFwvRlJFRU1FRElBSEVDS1lFQUhcXC93aWtpXFwvdG9vbHMtaW5kZXhcXClcXCpcXCpcXG4vZ20sXG4gICAgICAnJ1xuICAgIClcbiAgICAucmVwbGFjZShcbiAgICAgIC9cXCpcXCpcXFtUYWJsZSBvZiBDb250ZW50c1xcXVxcKGh0dHBzPzpcXC9cXC8uKj9pYmJcXC5jby4qXFwpXFwqXFwqIC0gRm9yIG1vYmlsZSB1c2Vyc1xcbi9nbSxcbiAgICAgICcnXG4gICAgKVxuICAgIC8vIFJlbW92ZSBleHRyYSBsaW5lc1xuICAgIC5yZXBsYWNlKC9cXCpcXCpcXCpcXG5cXCpcXCpcXCpcXG5cXCpcXCpcXCpcXG5cXCpcXCpcXCpcXG5cXG5cXG5cXCpcXCpcXCpcXG5cXCpcXCpcXCpcXG5cXG4vZ20sICcnKVxuICAgIC5yZXBsYWNlKC9cXCpcXCpcXCpcXG5cXCpcXCpcXCpcXG5cXCpcXCpcXCpcXG5cXCpcXCpcXCpcXG5cXG5cXG5cXCpcXCpcXCpcXG5cXCpcXCpcXCogXFxuXFxuL2dtLCAnJylcbiAgICAucmVwbGFjZSgvXFwqXFwqXFwqXFxuXFwqXFwqXFwqXFxuXFwqXFwqXFwqXFxuXFxuXFxuXFwqXFwqXFwqXFxuXFwqXFwqXFwqXFxuXFxuL2dtLCAnJylcbiAgICAucmVwbGFjZSgvXFwqXFwqXFwqXFxuXFwqXFwqXFwqXFxuXFwqXFwqXFwqXFxuXFwqXFwqXFwqXFxuXFxuXFxuXFwqXFwqXFwqXFxuXFxuL2dtLCAnJylcbiAgICAucmVwbGFjZSgvXFwqXFwqXFwqXFxuXFwqXFwqXFwqXFxuXFxuXFxuXFwqXFwqXFwqXFxuXFxuL2dtLCAnJylcbiAgICAvLyBUcmFuc2Zvcm0gcmVkZGl0IGxpbmtzXG4gICAgLnJlcGxhY2UoL2h0dHBzOlxcL1xcL3d3dy5yZWRkaXQuY29tXFwvclxcL0ZSRUVNRURJQUhFQ0tZRUFIXFwvd2lraVxcL2FpL2csICcvYWknKVxuICAgIC5yZXBsYWNlKFxuICAgICAgL2h0dHBzOlxcL1xcL3d3dy5yZWRkaXQuY29tXFwvclxcL0ZSRUVNRURJQUhFQ0tZRUFIXFwvd2lraVxcL2FkYmxvY2stdnBuLXByaXZhY3kvZyxcbiAgICAgICcvYWRibG9ja3Zwbmd1aWRlJ1xuICAgIClcbiAgICAucmVwbGFjZShcbiAgICAgIC9odHRwczpcXC9cXC93d3cucmVkZGl0LmNvbVxcL3JcXC9GUkVFTUVESUFIRUNLWUVBSFxcL3dpa2lcXC9hbmRyb2lkL2csXG4gICAgICAnL2FuZHJvaWQtaW9zZ3VpZGUnXG4gICAgKVxuICAgIC5yZXBsYWNlKFxuICAgICAgL2h0dHBzOlxcL1xcL3d3dy5yZWRkaXQuY29tXFwvclxcL0ZSRUVNRURJQUhFQ0tZRUFIXFwvd2lraVxcL2dhbWVzL2csXG4gICAgICAnL2dhbWluZ3BpcmFjeWd1aWRlJ1xuICAgIClcbiAgICAucmVwbGFjZShcbiAgICAgIC9odHRwczpcXC9cXC93d3cucmVkZGl0LmNvbVxcL3JcXC9GUkVFTUVESUFIRUNLWUVBSFxcL3dpa2lcXC9yZWFkaW5nL2csXG4gICAgICAnL3JlYWRpbmdwaXJhY3lndWlkZSdcbiAgICApXG4gICAgLnJlcGxhY2UoXG4gICAgICAvaHR0cHM6XFwvXFwvd3d3LnJlZGRpdC5jb21cXC9yXFwvRlJFRU1FRElBSEVDS1lFQUhcXC93aWtpXFwvZG93bmxvYWQvZyxcbiAgICAgICcvZG93bmxvYWRwaXJhY3lndWlkZSdcbiAgICApXG4gICAgLnJlcGxhY2UoXG4gICAgICAvaHR0cHM6XFwvXFwvd3d3LnJlZGRpdC5jb21cXC9yXFwvRlJFRU1FRElBSEVDS1lFQUhcXC93aWtpXFwvdG9ycmVudC9nLFxuICAgICAgJy90b3JyZW50cGlyYWN5Z3VpZGUnXG4gICAgKVxuICAgIC5yZXBsYWNlKFxuICAgICAgL2h0dHBzOlxcL1xcL3d3dy5yZWRkaXQuY29tXFwvclxcL0ZSRUVNRURJQUhFQ0tZRUFIXFwvd2lraVxcL2VkdS9nLFxuICAgICAgJy9lZHVwaXJhY3lndWlkZSdcbiAgICApXG4gICAgLnJlcGxhY2UoXG4gICAgICAvaHR0cHM6XFwvXFwvd3d3LnJlZGRpdC5jb21cXC9yXFwvRlJFRU1FRElBSEVDS1lFQUhcXC93aWtpXFwvc3lzdGVtLXRvb2xzL2csXG4gICAgICAnL3N5c3RlbS10b29scydcbiAgICApXG4gICAgLnJlcGxhY2UoXG4gICAgICAvaHR0cHM6XFwvXFwvd3d3LnJlZGRpdC5jb21cXC9yXFwvRlJFRU1FRElBSEVDS1lFQUhcXC93aWtpXFwvZmlsZS10b29scy9nLFxuICAgICAgJy9maWxlLXRvb2xzJ1xuICAgIClcbiAgICAucmVwbGFjZShcbiAgICAgIC9odHRwczpcXC9cXC93d3cucmVkZGl0LmNvbVxcL3JcXC9GUkVFTUVESUFIRUNLWUVBSFxcL3dpa2lcXC9pbnRlcm5ldC10b29scy9nLFxuICAgICAgJy9pbnRlcm5ldC10b29scydcbiAgICApXG4gICAgLnJlcGxhY2UoXG4gICAgICAvaHR0cHM6XFwvXFwvd3d3LnJlZGRpdC5jb21cXC9yXFwvRlJFRU1FRElBSEVDS1lFQUhcXC93aWtpXFwvc29jaWFsLW1lZGlhL2csXG4gICAgICAnL3NvY2lhbC1tZWRpYS10b29scydcbiAgICApXG4gICAgLnJlcGxhY2UoXG4gICAgICAvaHR0cHM6XFwvXFwvd3d3LnJlZGRpdC5jb21cXC9yXFwvRlJFRU1FRElBSEVDS1lFQUhcXC93aWtpXFwvdGV4dC10b29scy9nLFxuICAgICAgJy90ZXh0LXRvb2xzJ1xuICAgIClcbiAgICAucmVwbGFjZShcbiAgICAgIC9odHRwczpcXC9cXC93d3cucmVkZGl0LmNvbVxcL3JcXC9GUkVFTUVESUFIRUNLWUVBSFxcL3dpa2lcXC92aWRlby10b29scy9nLFxuICAgICAgJy92aWRlby10b29scydcbiAgICApXG4gICAgLnJlcGxhY2UoXG4gICAgICAvaHR0cHM6XFwvXFwvd3d3LnJlZGRpdC5jb21cXC9yXFwvRlJFRU1FRElBSEVDS1lFQUhcXC93aWtpXFwvYXVkaW8tdG9vbHMvZyxcbiAgICAgICcvYXVkaW8tdG9vbHMnXG4gICAgKVxuICAgIC5yZXBsYWNlKFxuICAgICAgL2h0dHBzOlxcL1xcL3d3dy5yZWRkaXQuY29tXFwvclxcL0ZSRUVNRURJQUhFQ0tZRUFIXFwvd2lraVxcL2dhbWUtdG9vbHMvZyxcbiAgICAgICcvZ2FtaW5nLXRvb2xzJ1xuICAgIClcbiAgICAucmVwbGFjZShcbiAgICAgIC9odHRwczpcXC9cXC93d3cucmVkZGl0LmNvbVxcL3JcXC9GUkVFTUVESUFIRUNLWUVBSFxcL3dpa2lcXC92aWRlby9nLFxuICAgICAgJy92aWRlb3BpcmFjeWd1aWRlJ1xuICAgIClcbiAgICAucmVwbGFjZShcbiAgICAgIC9odHRwczpcXC9cXC93d3cucmVkZGl0LmNvbVxcL3JcXC9GUkVFTUVESUFIRUNLWUVBSFxcL3dpa2lcXC9hdWRpby9nLFxuICAgICAgJy9hdWRpb3BpcmFjeWd1aWRlJ1xuICAgIClcbiAgICAucmVwbGFjZShcbiAgICAgIC9odHRwczpcXC9cXC93d3cucmVkZGl0LmNvbVxcL3JcXC9GUkVFTUVESUFIRUNLWUVBSFxcL3dpa2lcXC9saW51eC9nLFxuICAgICAgJy9saW51eGd1aWRlJ1xuICAgIClcbiAgICAucmVwbGFjZShcbiAgICAgIC9odHRwczpcXC9cXC93d3cucmVkZGl0LmNvbVxcL3JcXC9GUkVFTUVESUFIRUNLWUVBSFxcL3dpa2lcXC9ub24tZW5nL2csXG4gICAgICAnL25vbi1lbmdsaXNoJ1xuICAgIClcbiAgICAucmVwbGFjZShcbiAgICAgIC9odHRwczpcXC9cXC93d3cucmVkZGl0LmNvbVxcL3JcXC9GUkVFTUVESUFIRUNLWUVBSFxcL3dpa2lcXC9taXNjL2csXG4gICAgICAnL21pc2NndWlkZSdcbiAgICApXG4gICAgLnJlcGxhY2UoXG4gICAgICAvaHR0cHM6XFwvXFwvd3d3LnJlZGRpdC5jb21cXC9yXFwvRlJFRU1FRElBSEVDS1lFQUhcXC93aWtpXFwvc3RvcmFnZS9nLFxuICAgICAgJy9zdG9yYWdlJ1xuICAgIClcbiAgICAucmVwbGFjZShcbiAgICAgIC9odHRwczpcXC9cXC93d3cucmVkZGl0LmNvbVxcL3JcXC9GUkVFTUVESUFIRUNLWUVBSFxcL3dpa2lcXC9kZXYtdG9vbHMvZyxcbiAgICAgICcvZGV2dG9vbHMnXG4gICAgKVxuICAgIC5yZXBsYWNlKFxuICAgICAgL2h0dHBzOlxcL1xcL3d3dy5yZWRkaXQuY29tXFwvclxcL0ZSRUVNRURJQUhFQ0tZRUFIXFwvd2lraVxcL2ltZy10b29scy9nLFxuICAgICAgJy9pbWctdG9vbHMnXG4gICAgKVxuICAgIC8vIFJlbW92ZSBleHRyYSBjaGFyYWN0ZXJzXG4gICAgLnJlcGxhY2UoL1xcLyN3aWtpXy9nLCAnLyMnKVxuICAgIC5yZXBsYWNlKC8jd2lraV8vZywgJy8jJylcbiAgICAucmVwbGFjZSgvLjI1QkFfL2csICcnKVxuICAgIC5yZXBsYWNlKC8uMjVCN18vZywgJycpXG4gICAgLnJlcGxhY2UoL18uMkZfL2csICctJylcblxuICBfdGV4dCA9IHJlcGxhY2VVbmRlcnNjb3JlKF90ZXh0KVxuICAgIC5yZXBsYWNlKC9cXC8jKFxcZCkvZywgJy8jXyQxJykgLy8gUHJlZml4IGhlYWRpbmdzIHN0YXJ0aW5nIHdpdGggbnVtYmVyc1xuICAgIC5yZXBsYWNlKC8jKFxcZCkvZywgJyNfJDEnKSAvLyBQcmVmaXggaGVhZGluZ3Mgc3RhcnRpbmcgd2l0aCBudW1iZXJzXG4gICAgLnJlcGxhY2UoL1xcLyMvZywgJyMnKVxuICAgIC5yZXBsYWNlKC9cXCpcXCpcXCpcXG5cXG4vZ20sICcnKVxuICAgIC5yZXBsYWNlKC9cXCpcXCpcXCpcXG4vZ20sICcnKVxuICAgIC5yZXBsYWNlKC8jIFx1MjVCQS9nLCAnIyMnKVxuICAgIC5yZXBsYWNlKC8jIyBcdTI1QjcvZywgJyMjIycpXG4gICAgLnJlcGxhY2UoLyMjIyMvZywgJyMjIycpXG4gICAgLy8gUmVwbGFjZSBlbW9qaXNcbiAgICAucmVwbGFjZSgvXHUyQjUwL2csICc6c3RhcjonKVxuICAgIC5yZXBsYWNlKC9cdUQ4M0NcdURGMTAvZywgJzpnbG9iZS13aXRoLW1lcmlkaWFuczonKVxuICAgIC5yZXBsYWNlKC9cdTIxQUEvZywgJzpyZXBlYXQtYnV0dG9uOicpXG4gICAgLy8gUmVwbGFjZSBub3RlL3dhcm5pbmcvdGlwXG4gICAgLnJlcGxhY2UoL15cXCpcXCpOb3RlXFwqXFwqIC0gKC4rKSQvZ20sICc6Ojp0aXBcXG4kMVxcbjo6OicpXG4gICAgLnJlcGxhY2UoL15cXCogXFwqXFwqTm90ZVxcKlxcKiAtICguKykkL2dtLCAnOjo6dGlwXFxuJDFcXG46OjonKVxuICAgIC5yZXBsYWNlKC9eTm90ZSAtICguKykkL2dtLCAnOjo6dGlwXFxuJDFcXG46OjonKVxuICAgIC5yZXBsYWNlKC9eXFwqXFwqV2FybmluZ1xcKlxcKiAtICguKykkL2dtLCAnOjo6d2FybmluZ1xcbiQxXFxuOjo6JylcbiAgICAucmVwbGFjZSgvXlxcKiBcXCpcXCpXYXJuaW5nXFwqXFwqIC0gKC4rKSQvZ20sICc6Ojp3YXJuaW5nXFxuJDFcXG46OjonKVxuICAgIC5yZXBsYWNlKC9eXFwqXFxzKFteKl0pL2dtLCAnLSAkMScpXG4gICAgLy8gUmVwbGFjZSBsaW5rc1xuICAgIC5yZXBsYWNlKFxuICAgICAgL1xcL3N0b3JhZ2VcXC8jZW5jb2RlLS1kZWNvZGVfdXJscy9nLFxuICAgICAgJy9zdG9yYWdlLyNlbmNvZGUtLWRlY29kZS11cmxzJ1xuICAgIClcbiAgICAucmVwbGFjZSgvXFwvZGV2dG9vbHNcXC8jbWFjaGluZS1sZWFybmluZzIvZywgJy9kZXZ0b29scy8jbWFjaGluZS1sZWFybmluZy0xJylcbiAgICAucmVwbGFjZSgvXFwvbGludXhndWlkZSNzb2Z0d2FyZS1zaXRlczIvZywgJy9saW51eGd1aWRlI3NvZnR3YXJlLXNpdGVzLTEnKVxuICAgIC5yZXBsYWNlKC9cXC9saW51eGd1aWRlI3NvZnR3YXJlX3NpdGVzL2csICcvbGludXhndWlkZSNzb2Z0d2FyZS1zaXRlcycpXG4gICAgLnJlcGxhY2UoL1xcL25vbi1lbmdsaXNoI3JlYWRpbmcxMC9nLCAnL25vbi1lbmdsaXNoI3JlYWRpbmctOScpXG4gICAgLnJlcGxhY2UoXG4gICAgICAvXFwvc3RvcmFnZSNzYXRlbGxpdGUtLjI2YW1wLjNCX3N0cmVldF92aWV3X21hcHMvZyxcbiAgICAgICcvc3RvcmFnZSNzYXRlbGxpdGUtc3RyZWV0LXZpZXctbWFwcydcbiAgICApXG4gICAgLnJlcGxhY2UoXG4gICAgICAvKC4rPykgc2l0ZSBvciBleHRlbnNpb25cXC5cXG4vZ20sXG4gICAgICAnQ2xpY2sgb24gdGhlIHRleHRzIHRvIGNvcHkgdGhlbSBkZWNvZGVkLlxcbidcbiAgICApXG5cbiAgcmV0dXJuIF90ZXh0XG59XG5cbmNvbnN0IHRyYW5zZm9ybUxpbmtzID0gKHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PlxuICB0cmFuc2Zvcm1lcih0ZXh0KVxuICAgIC50cmFuc2Zvcm0oJ0xpbmtzIHRvIEljb25zJywgW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnRGlzY29yZCcsXG4gICAgICAgIGZpbmQ6IC9cXFtEaXNjb3JkXFxdXFwoKFteXFwpXSo/KVxcKS9nbSxcbiAgICAgICAgcmVwbGFjZTpcbiAgICAgICAgICAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiQxXCI+PGRpdiBhbHQ9XCJEaXNjb3JkXCIgY2xhc3M9XCJpLWNhcmJvbjpsb2dvLWRpc2NvcmRcIiAvPjwvYT4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnR2l0SHViJyxcbiAgICAgICAgZmluZDogL1xcW0dpdEh1YlxcXVxcKChbXlxcKV0qPylcXCkvZ20sXG4gICAgICAgIHJlcGxhY2U6XG4gICAgICAgICAgJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIkMVwiPjxkaXYgYWx0PVwiR2l0SHViXCIgY2xhc3M9XCJpLWNhcmJvbjpsb2dvLWdpdGh1YlwiIC8+PC9hPidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdHaXRIdWIgRmFsbGJhY2snLFxuICAgICAgICBmaW5kOiAvXFxbR2l0aHViXFxdXFwoKFteXFwpXSo/KVxcKS9nbSxcbiAgICAgICAgcmVwbGFjZTpcbiAgICAgICAgICAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiQxXCI+PGRpdiBhbHQ9XCJHaXRIdWJcIiBjbGFzcz1cImktY2FyYm9uOmxvZ28tZ2l0aHViXCIgLz48L2E+J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0dpdExhYicsXG4gICAgICAgIGZpbmQ6IC9cXFtHaXRMYWJcXF1cXCgoW15cXCldKj8pXFwpL2dtLFxuICAgICAgICByZXBsYWNlOlxuICAgICAgICAgICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJDFcIj48ZGl2IGFsdD1cIkdpdExhYlwiIGNsYXNzPVwiaS1jYXJib246bG9nby1naXRsYWJcIiAvPjwvYT4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnR2l0TGFiIEZhbGxiYWNrJyxcbiAgICAgICAgZmluZDogL1xcW0dpdGxhYlxcXVxcKChbXlxcKV0qPylcXCkvZ20sXG4gICAgICAgIHJlcGxhY2U6XG4gICAgICAgICAgJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIkMVwiPjxkaXYgYWx0PVwiR2l0TGFiXCIgY2xhc3M9XCJpLWNhcmJvbjpsb2dvLWdpdGxhYlwiIC8+PC9hPidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUZWxlZ3JhbScsXG4gICAgICAgIGZpbmQ6IC9cXFtUZWxlZ3JhbVxcXVxcKChbXlxcKV0qPylcXCkvZ20sXG4gICAgICAgIHJlcGxhY2U6XG4gICAgICAgICAgJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIkMVwiPjxkaXYgYWx0PVwiVGVsZWdyYW1cIiBjbGFzcz1cImktbWRpOnRlbGVncmFtXCIgLz48L2E+J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1N1YnJlZGRpdCcsXG4gICAgICAgIGZpbmQ6IC9cXFtTdWJyZWRkaXRcXF1cXCgoW15cXCldKj8pXFwpL2dtLFxuICAgICAgICByZXBsYWNlOlxuICAgICAgICAgICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJDFcIj48ZGl2IGFsdD1cIlJlZGRpdFwiIGNsYXNzPVwiaS1tZGk6cmVkZGl0XCIgLz48L2E+J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1R3aXR0ZXInLFxuICAgICAgICBmaW5kOiAvXFxbVHdpdHRlclxcXVxcKChbXlxcKV0qPylcXCkvZ20sXG4gICAgICAgIHJlcGxhY2U6XG4gICAgICAgICAgJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIkMVwiPjxkaXYgYWx0PVwiVHdpdHRlclwiIGNsYXNzPVwiaS1tZGk6dHdpdHRlclwiIC8+PC9hPidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUb3InLFxuICAgICAgICBmaW5kOiAvXFxbLm9uaW9uXFxdXFwoKFteXFwpXSo/KVxcKS9nbSxcbiAgICAgICAgcmVwbGFjZTpcbiAgICAgICAgICAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiQxXCI+PGRpdiBhbHQ9XCIub25pb25cIiBjbGFzcz1cImktc2ltcGxlLWljb25zOnRvcmJyb3dzZXIgdy0xZW0gaC0xZW1cIiAvPjwvYT4nXG4gICAgICB9XG4gICAgXSlcbiAgICAuZ2V0VGV4dCgpXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFdhZmFcXFxcRGVza3RvcFxcXFxhcmNoaXZlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0cmFuc2Zvcm1lclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcV2FmYVxcXFxEZXNrdG9wXFxcXGFyY2hpdmVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRyYW5zZm9ybWVyXFxcXGNvbnN0YW50cy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvV2FmYS9EZXNrdG9wL2FyY2hpdmUvZG9jcy8udml0ZXByZXNzL3RyYW5zZm9ybWVyL2NvbnN0YW50cy50c1wiOy8qKlxuICogIENvcHlyaWdodCAoYykgdGFza3lsaXphcmQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmludGVyZmFjZSBIZWFkZXIge1xuICBbZmlsZTogc3RyaW5nXTogeyB0aXRsZTogc3RyaW5nOyBkZXNjcmlwdGlvbjogc3RyaW5nIH1cbn1cblxuZXhwb3J0IGNvbnN0IGhlYWRlcnM6IEhlYWRlciA9IHtcbiAgJ2FkYmxvY2t2cG5ndWlkZS5tZCc6IHtcbiAgICB0aXRsZTogJ0FkYmxvY2tpbmcgLyBQcml2YWN5JyxcbiAgICBkZXNjcmlwdGlvbjogXCJBZGJsb2NraW5nLCBQcml2YWN5LCBWUE4ncywgUHJveGllcywgQW50aXZpcnVzXCJcbiAgfSxcbiAgJ2FpLm1kJzoge1xuICAgIHRpdGxlOiAnQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hhdCBCb3RzLCBUZXh0IEdlbmVyYXRvcnMsIEltYWdlIEdlbmVyYXRvcnMsIENoYXRHUFQgVG9vbHMnXG4gIH0sXG4gICdhbmRyb2lkLWlvc2d1aWRlLm1kJzoge1xuICAgIHRpdGxlOiAnQW5kcm9pZCAvIGlPUycsXG4gICAgZGVzY3JpcHRpb246ICdBcHBzLCBKYWlsYnJlYWtpbmcsIEFuZHJvaWQgRW11bGF0b3JzJ1xuICB9LFxuICAnYXVkaW9waXJhY3lndWlkZS5tZCc6IHtcbiAgICB0aXRsZTogJ011c2ljIC8gUG9kY2FzdHMgLyBSYWRpbycsXG4gICAgZGVzY3JpcHRpb246ICdTdHJlYW0gQXVkaW8sIERvd25sb2FkIEF1ZGlvLCBUb3JyZW50IEF1ZGlvJ1xuICB9LFxuICAnYmVnaW5uZXJzLWd1aWRlLm1kJzoge1xuICAgIHRpdGxlOiAnQmVnaW5uZXJzIEd1aWRlJyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgR3VpZGUgZm9yIEJlZ2lubmVycyB0byBQaXJhY3knXG4gIH0sXG4gICdkb3dubG9hZHBpcmFjeWd1aWRlLm1kJzoge1xuICAgIHRpdGxlOiAnRG93bmxvYWRpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnRG93bmxvYWQgU2l0ZXMsIFNvZnR3YXJlIFNpdGVzLCBPcGVuIERpcmVjdG9yaWVzJ1xuICB9LFxuICAnZWR1cGlyYWN5Z3VpZGUubWQnOiB7XG4gICAgdGl0bGU6ICdFZHVjYXRpb25hbCcsXG4gICAgZGVzY3JpcHRpb246ICdDb3Vyc2VzLCBEb2N1bWVudGFyaWVzLCBMZWFybmluZyBSZXNvdXJjZXMnXG4gIH0sXG4gICdnYW1pbmdwaXJhY3lndWlkZS5tZCc6IHtcbiAgICB0aXRsZTogJ0dhbWluZyAvIEVtdWxhdGlvbicsXG4gICAgZGVzY3JpcHRpb246ICdEb3dubG9hZCBHYW1lcywgUk9NcywgR2FtaW5nIFRvb2xzJ1xuICB9LFxuICAnbGludXhndWlkZS5tZCc6IHtcbiAgICB0aXRsZTogJ0xpbnV4IC8gTWFjT1MnLFxuICAgIGRlc2NyaXB0aW9uOiAnQXBwcywgU29mdHdhcmUgU2l0ZXMsIEdhbWluZydcbiAgfSxcbiAgJ21pc2NndWlkZS5tZCc6IHtcbiAgICB0aXRsZTogJ01pc2NlbGxhbmVvdXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnRXh0ZW5zaW9ucywgSW5kZXhlcywgTmV3cywgSGVhbHRoLCBGb29kLCBGdW4nXG4gIH0sXG4gICduc2Z3cGlyYWN5Lm1kJzoge1xuICAgIHRpdGxlOiAnTlNGVycsXG4gICAgZGVzY3JpcHRpb246ICdOU0ZXIEluZGV4ZXMsIFN0cmVhbWluZywgRG93bmxvYWRpbmcnXG4gIH0sXG4gICdub24tZW5nbGlzaC5tZCc6IHtcbiAgICB0aXRsZTogJ05vbi1FbmdsaXNoJyxcbiAgICBkZXNjcmlwdGlvbjogJ0ludGVybmF0aW9uYWwgUGlyYWN5IFNpdGVzJ1xuICB9LFxuICAncmVhZGluZ3BpcmFjeWd1aWRlLm1kJzoge1xuICAgIHRpdGxlOiAnQm9va3MgLyBDb21pY3MgLyBNYW5nYScsXG4gICAgZGVzY3JpcHRpb246ICdCb29rcywgQ29taWNzLCBNYWdhemluZXMsIE5ld3NwYXBlcnMnXG4gIH0sXG4gICdnYW1pbmctdG9vbHMubWQnOiB7XG4gICAgdGl0bGU6ICdHYW1pbmcgVG9vbHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnR2FtaW5nIE9wdGltaXphdGlvbiwgR2FtZSBMYXVuY2hlcnMsIE11bHRpcGxheWVyJ1xuICB9LFxuICAnZGV2dG9vbHMubWQnOiB7XG4gICAgdGl0bGU6ICdEZXZlbG9wZXIgVG9vbHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnR2l0LCBIb3N0aW5nLCBBcHAgRGV2LCBTb2Z0d2FyZSBEZXYnXG4gIH0sXG4gICdpbWctdG9vbHMubWQnOiB7XG4gICAgdGl0bGU6ICdJbWFnZSBUb29scycsXG4gICAgZGVzY3JpcHRpb246ICdJbWFnZSBFZGl0b3JzLCBHZW5lcmF0b3JzLCBDb21wcmVzcydcbiAgfSxcbiAgJ2F1ZGlvLXRvb2xzLm1kJzoge1xuICAgIHRpdGxlOiAnQXVkaW8gVG9vbHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnQXVkaW8gUGxheWVycywgQXVkaW8gRWRpdG9ycywgQXVkaW8gRG93bmxvYWRlcnMnXG4gIH0sXG4gICdzeXN0ZW0tdG9vbHMubWQnOiB7XG4gICAgdGl0bGU6ICdTeXN0ZW0gVG9vbHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnU3lzdGVtIFRvb2xzLCBIYXJkd2FyZSBUb29scywgV2luZG93cyBJU09zLCBDdXN0b21pemF0aW9uJ1xuICB9LFxuICAnZmlsZS10b29scy5tZCc6IHtcbiAgICB0aXRsZTogJ0ZpbGUgVG9vbHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnRG93bmxvYWQgTWFuYWdlcnMsIEZpbGUgSG9zdGluZywgRmlsZSBBcmNoaXZlcnMnXG4gIH0sXG4gICd2aWRlby10b29scy5tZCc6IHtcbiAgICB0aXRsZTogJ1ZpZGVvIFRvb2xzJyxcbiAgICBkZXNjcmlwdGlvbjogJ1ZpZGVvIFBsYXllcnMsIFZpZGVvIEVkaXRvcnMsIExpdmUgU3RyZWFtaW5nLCBBbmltYXRpb24nXG4gIH0sXG4gICd0ZXh0LXRvb2xzLm1kJzoge1xuICAgIHRpdGxlOiAnVGV4dCBUb29scycsXG4gICAgZGVzY3JpcHRpb246ICdUZXh0IEVkaXRvcnMsIFBhc3RlYmlucywgRm9udHMsIFRyYW5zbGF0b3JzJ1xuICB9LFxuICAnaW50ZXJuZXQtdG9vbHMubWQnOiB7XG4gICAgdGl0bGU6ICdJbnRlcm5ldCBUb29scycsXG4gICAgZGVzY3JpcHRpb246ICdCcm93c2VycywgRXh0ZW5zaW9ucywgU2VhcmNoIEVuZ2luZXMnXG4gIH0sXG4gICdzb2NpYWwtbWVkaWEtdG9vbHMubWQnOiB7XG4gICAgdGl0bGU6ICdTb2NpYWwgTWVkaWEgVG9vbHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnRGlzY29yZCBUb29scywgUmVkZGl0IFRvb2xzLCBZb3VUdWJlIFRvb2xzJ1xuICB9LFxuICAnc3RvcmFnZS5tZCc6IHtcbiAgICB0aXRsZTogJ1N0b3JhZ2UnLFxuICAgIGRlc2NyaXB0aW9uOiAnU2VjdGlvbnMgdG9vIGJpZyB0byBmaXQgb24gbWFpbiBwYWdlcydcbiAgfSxcbiAgJ3RvcnJlbnRwaXJhY3lndWlkZS5tZCc6IHtcbiAgICB0aXRsZTogJ1RvcnJlbnRpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnVG9ycmVudCBDbGllbnRzLCBUb3JyZW50IFNpdGVzLCBUcmFja2VycydcbiAgfSxcbiAgJ3ZpZGVvcGlyYWN5Z3VpZGUubWQnOiB7XG4gICAgdGl0bGU6ICdNb3ZpZXMgLyBUViAvIEFuaW1lJyxcbiAgICBkZXNjcmlwdGlvbjogJ1N0cmVhbSBWaWRlb3MsIERvd25sb2FkIFZpZGVvcywgVG9ycmVudCBWaWRlb3MnXG4gIH0sXG4gICdiYXNlNjQubWQnOiB7XG4gICAgdGl0bGU6ICdCYXNlNjQnLFxuICAgIGRlc2NyaXB0aW9uOiAnQmFzZTY0IHN0b3JhZ2UnXG4gIH0sXG4gICd1bnNhZmVzaXRlcy5tZCc6IHtcbiAgICB0aXRsZTogJ1Vuc2FmZSBTaXRlcycsXG4gICAgZGVzY3JpcHRpb246ICdVbnNhZmUvaGFybWZ1bCBzaXRlcyB0byBhdm9pZC4nXG4gIH1cbn0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IGV4Y2x1ZGVkID0gW1xuICAncmVhZG1lLm1kJyxcbiAgJ3NpbmdsZS1wYWdlJyxcbiAgJ2ZlZWRiYWNrLm1kJyxcbiAgJ2luZGV4Lm1kJyxcbiAgJ3NhbmRib3gubWQnXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIZWFkZXIoaWQ6IHN0cmluZykge1xuICBjb25zdCB0aXRsZSA9XG4gICAgJzxkaXYgY2xhc3M9XCJzcGFjZS15LTIgbm90LXByb3NlXCI+PGgxIGNsYXNzPVwidGV4dC00eGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1wcmltYXJ5IHVuZGVybGluZSBsZzp0ZXh0LTV4bCBsZzpsZWFkaW5nLVszLjVyZW1dXCI+J1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gJzxwIGNsYXNzPVwidGV4dC1ibGFjayBkYXJrOnRleHQtdGV4dC0yXCI+J1xuXG4gIGNvbnN0IGZlZWRiYWNrID0gJzxGZWVkYmFjayAvPidcblxuICBjb25zdCBkYXRhID0gaGVhZGVyc1tpZF1cbiAgbGV0IGhlYWRlciA9ICctLS1cXG4nXG4gIGhlYWRlciArPSBgdGl0bGU6IFwiJHtkYXRhLnRpdGxlfVwiXFxuYFxuICBoZWFkZXIgKz0gYGRlc2NyaXB0aW9uOiAke2RhdGEuZGVzY3JpcHRpb259XFxuYFxuICBoZWFkZXIgKz0gJy0tLVxcbidcbiAgaGVhZGVyICs9IGAke3RpdGxlfSR7ZGF0YS50aXRsZX08L2gxPlxcbmBcbiAgaGVhZGVyICs9IGAke2Rlc2NyaXB0aW9ufSR7ZGF0YS5kZXNjcmlwdGlvbn08L3A+PC9kaXY+XFxuXFxuJHtmZWVkYmFja31cXG5cXG5gXG4gIHJldHVybiBoZWFkZXJcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcV2FmYVxcXFxEZXNrdG9wXFxcXGFyY2hpdmVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRyYW5zZm9ybWVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxXYWZhXFxcXERlc2t0b3BcXFxcYXJjaGl2ZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdHJhbnNmb3JtZXJcXFxcY29yZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvV2FmYS9EZXNrdG9wL2FyY2hpdmUvZG9jcy8udml0ZXByZXNzL3RyYW5zZm9ybWVyL2NvcmUudHNcIjsvKipcbiAqICBDb3B5cmlnaHQgKGMpIHRhc2t5bGl6YXJkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBjb25zb2xhIGZyb20gJ2NvbnNvbGEnXG5cbnR5cGUgVHJhbnNmb3JtID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgZmluZDogc3RyaW5nIHwgUmVnRXhwXG4gIHJlcGxhY2U6IHN0cmluZyB8ICgobWF0Y2g6IHN0cmluZykgPT4gc3RyaW5nKVxufVxuXG50eXBlIFRyYW5zZm9ybWVyRnVuYyA9IChuYW1lOiBzdHJpbmcsIHRyYW5zZm9ybXM6IFRyYW5zZm9ybVtdKSA9PiBSZXBsYWNlclxuXG5pbnRlcmZhY2UgUmVwbGFjZXIge1xuICB0cmFuc2Zvcm06IFRyYW5zZm9ybWVyRnVuY1xuICBnZXRUZXh0KCk6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtZXIgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGhhbmRsZXI6IFByb3h5SGFuZGxlciA9IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wKSB7XG4gICAgICBpZiAocHJvcCA9PT0gJ3RyYW5zZm9ybScpIHtcbiAgICAgICAgcmV0dXJuIChuYW1lOiBzdHJpbmcsIHRyYW5zZm9ybXM6IFRyYW5zZm9ybVtdKTogUmVwbGFjZXIgPT4ge1xuICAgICAgICAgIGNvbnNvbGEuZGVidWcoYFN0YXJ0aW5nIHRyYW5zZm9ybSAke25hbWV9IHdpdGggJHt0cmFuc2Zvcm1zfWApXG5cbiAgICAgICAgICB0cmFuc2Zvcm1zLmZvckVhY2goKHsgbmFtZSwgZmluZCwgcmVwbGFjZSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xhLmRlYnVnKGBUcmFuc2Zvcm1pbmcgJHtuYW1lfSB3aXRoICR7ZmluZH1gKVxuICAgICAgICAgICAgdGFyZ2V0LnRleHQgPSB0YXJnZXQudGV4dC5yZXBsYWNlKGZpbmQsIHJlcGxhY2UgYXMgYW55KVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gUHJveHkgaXMgbm90IHR5cGVkXG4gICAgICAgICAgcmV0dXJuIHByb3h5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wID09PSAnZ2V0VGV4dCcpIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHRhcmdldC50ZXh0XG4gICAgICB9XG4gICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRhcmdldCA9IHsgdGV4dCB9XG4gIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KHRhcmdldCwgaGFuZGxlcilcbiAgcmV0dXJuIHByb3h5IGFzIHVua25vd24gYXMgUmVwbGFjZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VVbmRlcnNjb3JlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHBhdHRlcm4gPSAvXFwvI1tcXHdcXC1dKyg/Ol9bXFx3XSspKi9nXG4gIGNvbnN0IG1hdGNoZXMgPSB0ZXh0Lm1hdGNoKHBhdHRlcm4pIHx8IFtdXG4gIGxldCBfdGV4dCA9IHRleHRcbiAgZm9yIChjb25zdCBtYXRjaCBvZiBtYXRjaGVzKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnQgPSBtYXRjaC5yZXBsYWNlKC9fL2csICctJylcbiAgICBfdGV4dCA9IF90ZXh0LnJlcGxhY2UobWF0Y2gsIHJlcGxhY2VtZW50KVxuICB9XG4gIHJldHVybiBfdGV4dFxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxXYWZhXFxcXERlc2t0b3BcXFxcYXJjaGl2ZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFdhZmFcXFxcRGVza3RvcFxcXFxhcmNoaXZlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25zdGFudHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1dhZmEvRGVza3RvcC9hcmNoaXZlL2RvY3MvLnZpdGVwcmVzcy9jb25zdGFudHMudHNcIjsvKipcbiAqICBDb3B5cmlnaHQgKGMpIHRhc2t5bGl6YXJkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAndml0ZXByZXNzJ1xuaW1wb3J0IHsgdHJhbnNmb3JtLCB0cmFuc2Zvcm1HdWlkZSB9IGZyb20gJy4vdHJhbnNmb3JtZXInXG5cbi8vIEB1bm9jc3MtaW5jbHVkZVxuXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgbmFtZTogJ2ZyZWVtZWRpYWhlY2t5ZWFoJyxcbiAgZGVzY3JpcHRpb246ICdUaGUgbGFyZ2VzdCBjb2xsZWN0aW9uIG9mIGZyZWUgc3R1ZmYgb24gdGhlIGludGVybmV0IScsXG4gIGhvc3RuYW1lOiAnaHR0cHM6Ly9mbWh5Lm5ldCcsXG4gIGtleXdvcmRzOiBbJ3N0cmVhbScsICdtb3ZpZXMnLCAnZ2FtaW5nJywgJ3JlYWRpbmcnLCAnYW5pbWUnXVxufVxuXG5leHBvcnQgY29uc3QgY29tbWl0UmVmID1cbiAgcHJvY2Vzcy5lbnYuQ0ZfUEFHRVMgJiYgcHJvY2Vzcy5lbnYuQ0ZfUEFHRVNfQ09NTUlUX1NIQVxuICAgID8gYDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZm1oeS9lZGl0L2NvbW1pdC8ke3Byb2Nlc3MuZW52LkNGX1BBR0VTX0NPTU1JVF9TSEFcbiAgICB9XCI+JHtwcm9jZXNzLmVudi5DRl9QQUdFU19DT01NSVRfU0hBLnNsaWNlKDAsIDgpfTwvYT5gXG4gICAgOiAnZGV2J1xuXG5leHBvcnQgY29uc3QgZmVlZGJhY2sgPSBgPGEgaHJlZj1cIi9mZWVkYmFja1wiIGNsYXNzPVwiZmVlZGJhY2stZm9vdGVyXCI+TWFkZSB3aXRoIFx1Mjc2NDwvYT5gXG5cbmV4cG9ydCBjb25zdCBzZWFyY2g6IERlZmF1bHRUaGVtZS5Db25maWdbJ3NlYXJjaCddID0ge1xuICBvcHRpb25zOiB7XG4gICAgX3JlbmRlcihzcmMsIGVudiwgbWQpIHtcbiAgICAgIGxldCBjb250ZW50cyA9IHNyY1xuICAgICAgLy8gSSBkbyB0aGlzIGFzIGVudi5mcm9udG1hdHRlciBpcyBub3QgYXZhaWxhYmxlIHVudGlsIEkgY2FsbCBgbWQucmVuZGVyYFxuICAgICAgaWYgKGNvbnRlbnRzLmluY2x1ZGVzKCdCZWdpbm5lcnMgR3VpZGUnKSlcbiAgICAgICAgY29udGVudHMgPSB0cmFuc2Zvcm1HdWlkZShjb250ZW50cylcbiAgICAgIGNvbnRlbnRzID0gdHJhbnNmb3JtKGNvbnRlbnRzKVxuICAgICAgY29uc3QgaHRtbCA9IG1kLnJlbmRlcihjb250ZW50cywgZW52KVxuICAgICAgcmV0dXJuIGh0bWxcbiAgICB9LFxuICAgIG1pbmlTZWFyY2g6IHtcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgdG9rZW5pemU6ICh0ZXh0KSA9PiB0ZXh0LnNwbGl0KC9bXFxuXFxyICMlKiw9Lzo7P1tcXF17fSgpJl0rL3UpLCAvLyBzaW1wbGlmaWVkIGNoYXJzZXQ6IHJlbW92ZWQgWy1fLkBdIGFuZCBub24tZW5nbGlzaCBjaGFycyAoZGlhY3JpdGljcyBldGMuKVxuICAgICAgICBwcm9jZXNzVGVybTogKHRlcm0sIGZpZWxkTmFtZSkgPT4ge1xuICAgICAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N0eWxlL25vUGFyYW1ldGVyQXNzaWduOiBoXG4gICAgICAgICAgdGVybSA9IHRlcm1cbiAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcLisvLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXC4rJC8sICcnKVxuICAgICAgICAgIGNvbnN0IHN0b3BXb3JkcyA9IFtcbiAgICAgICAgICAgICdmcm9udG1hdHRlcicsXG4gICAgICAgICAgICAnJGZyb250bWF0dGVyLnN5bm9wc2lzJyxcbiAgICAgICAgICAgICdhbmQnLFxuICAgICAgICAgICAgJ2Fib3V0JyxcbiAgICAgICAgICAgICdidXQnLFxuICAgICAgICAgICAgJ25vdycsXG4gICAgICAgICAgICAndGhlJyxcbiAgICAgICAgICAgICd3aXRoJyxcbiAgICAgICAgICAgICd5b3UnXG4gICAgICAgICAgXVxuICAgICAgICAgIGlmICh0ZXJtLmxlbmd0aCA8IDIgfHwgc3RvcFdvcmRzLmluY2x1ZGVzKHRlcm0pKSByZXR1cm4gZmFsc2VcblxuICAgICAgICAgIGlmIChmaWVsZE5hbWUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgY29uc3QgcGFydHMgPSB0ZXJtLnNwbGl0KCcuJylcbiAgICAgICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1Rlcm1zID0gW3Rlcm0sIC4uLnBhcnRzXVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHQpID0+IHQubGVuZ3RoID49IDIpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigodCkgPT4gIXN0b3BXb3Jkcy5pbmNsdWRlcyh0KSlcbiAgICAgICAgICAgICAgcmV0dXJuIG5ld1Rlcm1zXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0ZXJtXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZWFyY2hPcHRpb25zOiB7XG4gICAgICAgIGNvbWJpbmVXaXRoOiAnQU5EJyxcbiAgICAgICAgZnV6enk6IHRydWUsXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgYm9vc3REb2N1bWVudDogKGRvY3VtZW50SWQsIHRlcm0sIHN0b3JlZEZpZWxkczogUmVjb3JkKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGl0bGVzID0gKHN0b3JlZEZpZWxkcz8udGl0bGVzIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgLmZpbHRlcigodCkgPT4gQm9vbGVhbih0KSlcbiAgICAgICAgICAgIC5tYXAoKHQpID0+IHQudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAvLyBEb3ducmFuayBwb3N0c1xuICAgICAgICAgIGlmIChkb2N1bWVudElkLm1hdGNoKC9cXC9wb3N0cy8pKSByZXR1cm4gLTVcbiAgICAgICAgICAvLyBEb3ducmFuayAvb3RoZXJcbiAgICAgICAgICBpZiAoZG9jdW1lbnRJZC5tYXRjaCgvXFwvb3RoZXIvKSkgcmV0dXJuIC01XG5cbiAgICAgICAgICAvLyBVcHJhdGUgaWYgdGVybSBhcHBlYXJzIGluIHRpdGxlcy4gQWRkIGJvbnVzIGZvciBoaWdoZXIgbGV2ZWxzIChpLmUuIGxvd2VyIGluZGV4KVxuICAgICAgICAgIGNvbnN0IHRpdGxlSW5kZXggPVxuICAgICAgICAgICAgdGl0bGVzXG4gICAgICAgICAgICAgIC5tYXAoKHQsIGkpID0+ICh0Py5pbmNsdWRlcyh0ZXJtKSA/IGkgOiAtMSkpXG4gICAgICAgICAgICAgIC5maW5kKChpKSA9PiBpID49IDApID8/IC0xXG4gICAgICAgICAgaWYgKHRpdGxlSW5kZXggPj0gMCkgcmV0dXJuIDEwMDAwIC0gdGl0bGVJbmRleFxuXG4gICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZGV0YWlsZWRWaWV3OiB0cnVlXG4gIH0sXG4gIHByb3ZpZGVyOiAnbG9jYWwnXG59XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxMaW5rczogRGVmYXVsdFRoZW1lLlNvY2lhbExpbmtbXSA9IFtcbiAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9mbWh5L2VkaXQnIH0sXG4gIHsgaWNvbjogJ2Rpc2NvcmQnLCBsaW5rOiAnaHR0cHM6Ly9yZW50cnkuY28vZm1oeS1pbnZpdGUnIH0sXG4gIHtcbiAgICBhcmlhTGFiZWw6ICdSZWRkaXQnLFxuICAgIGljb246IHtcbiAgICAgIHN2ZzogJzxzdmcgcm9sZT1cImltZ1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlPlJlZGRpdDwvdGl0bGU+PHBhdGggZD1cIk0xMiAwQzUuMzczIDAgMCA1LjM3MyAwIDEyYzAgMy4zMTQgMS4zNDMgNi4zMTQgMy41MTUgOC40ODVsLTIuMjg2IDIuMjg2Qy43NzUgMjMuMjI1IDEuMDk3IDI0IDEuNzM4IDI0SDEyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMFptNC4zODggMy4xOTljMS4xMDQgMCAxLjk5OS44OTUgMS45OTkgMS45OTkgMCAxLjEwNS0uODk1IDItMS45OTkgMi0uOTQ2IDAtMS43MzktLjY1Ny0xLjk0Ny0xLjUzOXYuMDAyYy0xLjE0Ny4xNjItMi4wMzIgMS4xNS0yLjAzMiAyLjM0MXYuMDA3YzEuNzc2LjA2NyAzLjQuNTY3IDQuNjg2IDEuMzYzLjQ3My0uMzYzIDEuMDY0LS41OCAxLjcwNy0uNTggMS41NDcgMCAyLjgwMiAxLjI1NCAyLjgwMiAyLjgwMiAwIDEuMTE3LS42NTUgMi4wODEtMS42MDEgMi41MzEtLjA4OCAzLjI1Ni0zLjYzNyA1Ljg3Ni03Ljk5NyA1Ljg3Ni00LjM2MSAwLTcuOTA1LTIuNjE3LTcuOTk4LTUuODctLjk1NC0uNDQ3LTEuNjE0LTEuNDE1LTEuNjE0LTIuNTM4IDAtMS41NDggMS4yNTUtMi44MDIgMi44MDMtMi44MDIuNjQ1IDAgMS4yMzkuMjE4IDEuNzEyLjU4NSAxLjI3NS0uNzkgMi44ODEtMS4yOTEgNC42NC0xLjM2NXYtLjAxYzAtMS42NjMgMS4yNjMtMy4wMzQgMi44OC0zLjIwNy4xODgtLjkxMS45OTMtMS41OTUgMS45NTktMS41OTVabS04LjA4NSA4LjM3NmMtLjc4NCAwLTEuNDU5Ljc4LTEuNTA2IDEuNzk3LS4wNDcgMS4wMTYuNjQgMS40MjkgMS40MjYgMS40MjkuNzg2IDAgMS4zNzEtLjM2OSAxLjQxOC0xLjM4NS4wNDctMS4wMTctLjU1My0xLjg0MS0xLjMzOC0xLjg0MVptNy40MDYgMGMtLjc4NiAwLTEuMzg1LjgyNC0xLjMzOCAxLjg0MS4wNDcgMS4wMTcuNjM0IDEuMzg1IDEuNDE4IDEuMzg1Ljc4NSAwIDEuNDczLS40MTMgMS40MjYtMS40MjktLjA0Ni0xLjAxNy0uNzIxLTEuNzk3LTEuNTA2LTEuNzk3Wm0tMy43MDMgNC4wMTNjLS45NzQgMC0xLjkwNy4wNDgtMi43Ny4xMzUtLjE0Ny4wMTUtLjI0MS4xNjgtLjE4My4zMDUuNDgzIDEuMTU0IDEuNjIyIDEuOTY0IDIuOTUzIDEuOTY0IDEuMzMgMCAyLjQ3LS44MSAyLjk1My0xLjk2NC4wNTctLjEzNy0uMDM3LS4yOS0uMTg0LS4zMDUtLjg2My0uMDg3LTEuNzk1LS4xMzUtMi43NjktLjEzNVpcIi8+PC9zdmc+J1xuICAgIH0sXG4gICAgbGluazogJ2h0dHBzOi8vcmVkZGl0LmNvbS9yL0ZSRUVNRURJQUhFQ0tZRUFIJ1xuICB9LFxuICB7XG4gICAgYXJpYUxhYmVsOiAnQmx1ZXNreScsXG4gICAgaWNvbjoge1xuICAgICAgc3ZnOiAnPHN2ZyByb2xlPVwiaW1nXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48dGl0bGU+Qmx1ZXNreTwvdGl0bGU+PHBhdGggZD1cIk0xMiAxMC44Yy0xLjA4Ny0yLjExNC00LjA0Ni02LjA1My02Ljc5OC03Ljk5NUMyLjU2Ni45NDQgMS41NjEgMS4yNjYuOTAyIDEuNTY1LjEzOSAxLjkwOCAwIDMuMDggMCAzLjc2OGMwIC42OS4zNzggNS42NS42MjQgNi40NzkuODE1IDIuNzM2IDMuNzEzIDMuNjYgNi4zODMgMy4zNjQuMTM2LS4wMi4yNzUtLjAzOS40MTUtLjA1Ni0uMTM4LjAyMi0uMjc2LjA0LS40MTUuMDU2LTMuOTEyLjU4LTcuMzg3IDIuMDA1LTIuODMgNy4wNzggNS4wMTMgNS4xOSA2Ljg3LTEuMTEzIDcuODIzLTQuMzA4Ljk1MyAzLjE5NSAyLjA1IDkuMjcxIDcuNzMzIDQuMzA4IDQuMjY3LTQuMzA4IDEuMTcyLTYuNDk4LTIuNzQtNy4wNzhhOC43NDEgOC43NDEgMCAwIDEtLjQxNS0uMDU2Yy4xNC4wMTcuMjc5LjAzNi40MTUuMDU2IDIuNjcuMjk3IDUuNTY4LS42MjggNi4zODMtMy4zNjQuMjQ2LS44MjguNjI0LTUuNzkuNjI0LTYuNDc4IDAtLjY5LS4xMzktMS44NjEtLjkwMi0yLjIwNi0uNjU5LS4yOTgtMS42NjQtLjYyLTQuMyAxLjI0QzE2LjA0NiA0Ljc0OCAxMy4wODcgOC42ODcgMTIgMTAuOFpcIi8+PC9zdmc+J1xuICAgIH0sXG4gICAgbGluazogJ2h0dHBzOi8vYnNreS5hcHAvcHJvZmlsZS9mbWh5Lm5ldCdcbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgbmF2OiBEZWZhdWx0VGhlbWUuTmF2SXRlbVtdID0gW1xuICB7IHRleHQ6ICdcdUQ4M0RcdUREMTYgR2xvc3NhcnknLCBsaW5rOiAnaHR0cHM6Ly9yZW50cnkub3JnL1RoZS1QaXJhY3ktR2xvc3NhcnknIH0sXG4gIHsgdGV4dDogJ1x1MjEzOVx1RkUwRiBHdWlkZXMnLCBsaW5rOiAnaHR0cHM6Ly9ndWlkZXMuZm1oeS5sb2wvJyB9LFxuICB7XG4gICAgdGV4dDogJ1x1RDgzRFx1RENCRSBCYWNrdXBzJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2ZtaHkvRk1IWS93aWtpL0JhY2t1cHMnXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnXHVEODNFXHVERTg1IEVjb3N5c3RlbScsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1x1RDgzQ1x1REYxMCBTZWFyY2gnLCBsaW5rOiAnL3Bvc3RzL3NlYXJjaCcgfSxcbiAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQxNyBCb29rbWFya3MnLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2ZtaHkvYm9va21hcmtzJyB9LFxuICAgICAgeyB0ZXh0OiAnXHUyNzA1IFNhZmVHdWFyZCcsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vZm1oeS9GTUhZLVNhZmVHdWFyZCcgfSxcbiAgICAgIHsgdGV4dDogJ1x1RDgzRFx1RENDQiBzbm93YmluJywgbGluazogJ2h0dHBzOi8vcGFzdGVzLmZtaHkubmV0JyB9LFxuICAgICAgeyB0ZXh0OiAnXHVEODNEXHVEQ0ExIFNpdGUgSHVudGluZycsIGxpbms6ICdodHRwczovL3d3dy5yZWRkaXQuY29tL3IvRlJFRU1FRElBSEVDS1lFQUgvd2lraS9maW5kLW5ldy1zaXRlcy8nIH0sXG4gICAgICB7IHRleHQ6ICdcdUQ4M0NcdURGREUgV2FsbHBhcGVycycsIGxpbms6ICcvb3RoZXIvd2FsbHBhcGVycycgfSwgIFxuICAgICAgeyB0ZXh0OiAnXHVEODNEXHVEQzk5IEZlZWRiYWNrJywgbGluazogJy9mZWVkYmFjaycgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1RDgzRFx1REUwNyBTRlcgRk1IWScsXG4gICAgICAgIGxpbms6ICdodHRwczovL2ZtaHkueHl6LydcbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHNpZGViYXI6IERlZmF1bHRUaGVtZS5TaWRlYmFyIHwgRGVmYXVsdFRoZW1lLk5hdkl0ZW1XaXRoTGlua1tdID0gW1xuICB7XG4gICAgdGV4dDogJzxzcGFuIGNsYXNzPVwiaS10d2Vtb2ppOmJvb2tzXCI+PC9zcGFuPiBCZWdpbm5lcnMgR3VpZGUnLFxuICAgIGxpbms6ICcvYmVnaW5uZXJzLWd1aWRlJ1xuICB9LFxuICB7XG4gICAgdGV4dDogJzxzcGFuIGNsYXNzPVwiaS10d2Vtb2ppOm5ld3NwYXBlclwiPjwvc3Bhbj4gUG9zdHMnLFxuICAgIGxpbms6ICcvcG9zdHMnXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnPHNwYW4gY2xhc3M9XCJpLXR3ZW1vamk6bGlnaHQtYnVsYlwiPjwvc3Bhbj4gQ29udHJpYnV0ZScsXG4gICAgbGluazogJy9vdGhlci9jb250cmlidXRpbmcnXG4gIH0sXG5cbiAgLy8gVE9ETzogZ2VuZXRhdGUgc2lkZWJhciBmcm9tIHBvc3RzXG4gIHtcbiAgICB0ZXh0OiAnV2lraScsXG4gICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnPHNwYW4gY2xhc3M9XCJpLXR3ZW1vamk6bmFtZS1iYWRnZVwiPjwvc3Bhbj4gQWRibG9ja2luZyAvIFByaXZhY3knLFxuICAgICAgICBsaW5rOiAnL2FkYmxvY2t2cG5ndWlkZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICc8c3BhbiBjbGFzcz1cImktdHdlbW9qaTpyb2JvdFwiPjwvc3Bhbj4gQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UnLFxuICAgICAgICBsaW5rOiAnL2FpJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJzxzcGFuIGNsYXNzPVwiaS10d2Vtb2ppOnRlbGV2aXNpb25cIj48L3NwYW4+IE1vdmllcyAvIFRWIC8gQW5pbWUnLFxuICAgICAgICBsaW5rOiAnL3ZpZGVvcGlyYWN5Z3VpZGUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnPHNwYW4gY2xhc3M9XCJpLXR3ZW1vamk6bXVzaWNhbC1ub3RlXCI+PC9zcGFuPiBNdXNpYyAvIFBvZGNhc3RzIC8gUmFkaW8nLFxuICAgICAgICBsaW5rOiAnL2F1ZGlvcGlyYWN5Z3VpZGUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnPHNwYW4gY2xhc3M9XCJpLXR3ZW1vamk6dmlkZW8tZ2FtZVwiPjwvc3Bhbj4gR2FtaW5nIC8gRW11bGF0aW9uJyxcbiAgICAgICAgbGluazogJy9nYW1pbmdwaXJhY3lndWlkZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICc8c3BhbiBjbGFzcz1cImktdHdlbW9qaTpncmVlbi1ib29rXCI+PC9zcGFuPiBCb29rcyAvIENvbWljcyAvIE1hbmdhJyxcbiAgICAgICAgbGluazogJy9yZWFkaW5ncGlyYWN5Z3VpZGUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnPHNwYW4gY2xhc3M9XCJpLXR3ZW1vamk6ZmxvcHB5LWRpc2tcIj48L3NwYW4+IERvd25sb2FkaW5nJyxcbiAgICAgICAgbGluazogJy9kb3dubG9hZHBpcmFjeWd1aWRlJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJzxzcGFuIGNsYXNzPVwiaS10d2Vtb2ppOmN5Y2xvbmVcIj48L3NwYW4+IFRvcnJlbnRpbmcnLFxuICAgICAgICBsaW5rOiAnL3RvcnJlbnRwaXJhY3lndWlkZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICc8c3BhbiBjbGFzcz1cImktdHdlbW9qaTpicmFpblwiPjwvc3Bhbj4gRWR1Y2F0aW9uYWwnLFxuICAgICAgICBsaW5rOiAnL2VkdXBpcmFjeWd1aWRlJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJzxzcGFuIGNsYXNzPVwiaS10d2Vtb2ppOm1vYmlsZS1waG9uZVwiPjwvc3Bhbj4gQW5kcm9pZCAvIGlPUycsXG4gICAgICAgIGxpbms6ICcvYW5kcm9pZC1pb3NndWlkZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICc8c3BhbiBjbGFzcz1cImktdHdlbW9qaTpwZW5ndWluXCI+PC9zcGFuPiBMaW51eCAvIE1hY09TJyxcbiAgICAgICAgbGluazogJy9saW51eGd1aWRlJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJzxzcGFuIGNsYXNzPVwiaS10d2Vtb2ppOmdsb2JlLXNob3dpbmctYXNpYS1hdXN0cmFsaWFcIj48L3NwYW4+IE5vbi1FbmdsaXNoJyxcbiAgICAgICAgbGluazogJy9ub24tZW5nbGlzaCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICc8c3BhbiBjbGFzcz1cImktdHdlbW9qaTpmaWxlLWZvbGRlclwiPjwvc3Bhbj4gTWlzY2VsbGFuZW91cycsXG4gICAgICAgIGxpbms6ICcvbWlzY2d1aWRlJ1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHRleHQ6ICdUb29scycsXG4gICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnPHNwYW4gY2xhc3M9XCJpLXR3ZW1vamk6bGFwdG9wXCI+PC9zcGFuPiBTeXN0ZW0gVG9vbHMnLFxuICAgICAgICBsaW5rOiAnL3N5c3RlbS10b29scydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICc8c3BhbiBjbGFzcz1cImktdHdlbW9qaTpjYXJkLWZpbGUtYm94XCI+PC9zcGFuPiBGaWxlIFRvb2xzJyxcbiAgICAgICAgbGluazogJy9maWxlLXRvb2xzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJzxzcGFuIGNsYXNzPVwiaS10d2Vtb2ppOnBhcGVyY2xpcFwiPjwvc3Bhbj4gSW50ZXJuZXQgVG9vbHMnLFxuICAgICAgICBsaW5rOiAnL2ludGVybmV0LXRvb2xzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJzxzcGFuIGNsYXNzPVwiaS10d2Vtb2ppOmxlZnQtc3BlZWNoLWJ1YmJsZVwiPjwvc3Bhbj4gU29jaWFsIE1lZGlhIFRvb2xzJyxcbiAgICAgICAgbGluazogJy9zb2NpYWwtbWVkaWEtdG9vbHMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnPHNwYW4gY2xhc3M9XCJpLXR3ZW1vamk6bWVtb1wiPjwvc3Bhbj4gVGV4dCBUb29scycsXG4gICAgICAgIGxpbms6ICcvdGV4dC10b29scydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICc8c3BhbiBjbGFzcz1cImktdHdlbW9qaTphbGllbi1tb25zdGVyXCI+PC9zcGFuPiBHYW1pbmcgVG9vbHMnLFxuICAgICAgICBsaW5rOiAnL2dhbWluZy10b29scydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICc8c3BhbiBjbGFzcz1cImktdHdlbW9qaTpjYW1lcmFcIj48L3NwYW4+IEltYWdlIFRvb2xzJyxcbiAgICAgICAgbGluazogJy9pbWctdG9vbHMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnPHNwYW4gY2xhc3M9XCJpLXR3ZW1vamk6dmlkZW9jYXNzZXR0ZVwiPjwvc3Bhbj4gVmlkZW8gVG9vbHMnLFxuICAgICAgICBsaW5rOiAnL3ZpZGVvLXRvb2xzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJzxzcGFuIGNsYXNzPVwiaS10d2Vtb2ppOnNwZWFrZXItaGlnaC12b2x1bWVcIj48L3NwYW4+IEF1ZGlvIFRvb2xzJyxcbiAgICAgICAgbGluazogJy9hdWRpb3BpcmFjeWd1aWRlI2F1ZGlvLXRvb2xzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJzxzcGFuIGNsYXNzPVwiaS10d2Vtb2ppOnJlZC1hcHBsZVwiPjwvc3Bhbj4gRWR1Y2F0aW9uYWwgVG9vbHMnLFxuICAgICAgICBsaW5rOiAnL2VkdXBpcmFjeWd1aWRlI2VkdWNhdGlvbmFsLXRvb2xzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJzxzcGFuIGNsYXNzPVwiaS10d2Vtb2ppOm1hbi10ZWNobm9sb2dpc3RcIj48L3NwYW4+IERldmVsb3BlciBUb29scycsXG4gICAgICAgIGxpbms6ICcvZGV2dG9vbHMnXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgdGV4dDogJ01vcmUnLFxuICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnPHNwYW4gY2xhc3M9XCJpLXR3ZW1vamk6bm8tb25lLXVuZGVyLWVpZ2h0ZWVuXCI+PC9zcGFuPiBOU0ZXJyxcbiAgICAgICAgbGluazogJ2h0dHBzOi8vcmVudHJ5LmNvL05TRlctQ2hlY2twb2ludCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICc8c3BhbiBjbGFzcz1cImktdHdlbW9qaTp3YXJuaW5nXCI+PC9zcGFuPiBVbnNhZmUgU2l0ZXMnLFxuICAgICAgICBsaW5rOiAnL3Vuc2FmZXNpdGVzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJzxzcGFuIGNsYXNzPVwiaS10d2Vtb2ppOnBhY2thZ2VcIj48L3NwYW4+IFN0b3JhZ2UnLFxuICAgICAgICBsaW5rOiAnL3N0b3JhZ2UnXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFdhZmFcXFxcRGVza3RvcFxcXFxhcmNoaXZlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxob29rc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcV2FmYVxcXFxEZXNrdG9wXFxcXGFyY2hpdmVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGhvb2tzXFxcXG1ldGEudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1dhZmEvRGVza3RvcC9hcmNoaXZlL2RvY3MvLnZpdGVwcmVzcy9ob29rcy9tZXRhLnRzXCI7LyoqXG4gKiAgQ29weXJpZ2h0IChjKSB0YXNreWxpemFyZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IEhlYWRDb25maWcsIFRyYW5zZm9ybUNvbnRleHQgfSBmcm9tICd2aXRlcHJlc3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU1ldGEoY29udGV4dDogVHJhbnNmb3JtQ29udGV4dCwgaG9zdG5hbWU6IHN0cmluZykge1xuICBjb25zdCBoZWFkOiBIZWFkQ29uZmlnW10gPSBbXVxuICBjb25zdCB7IHBhZ2VEYXRhIH0gPSBjb250ZXh0XG5cbiAgaWYgKHBhZ2VEYXRhLmlzTm90Rm91bmQpIHJldHVybiBoZWFkXG5cbiAgY29uc3QgdXJsID0gYCR7aG9zdG5hbWV9LyR7cGFnZURhdGEucmVsYXRpdmVQYXRoLnJlcGxhY2UoLygoXnxcXC8paW5kZXgpP1xcLm1kJC8sICckMicpfWBcblxuICBoZWFkLnB1c2goXG4gICAgWydsaW5rJywgeyByZWw6ICdjYW5vbmljYWwnLCBocmVmOiB1cmwgfV0sXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnVybCcsIGNvbnRlbnQ6IHVybCB9XSxcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICd0d2l0dGVyOnVybCcsIGNvbnRlbnQ6IHVybCB9XSxcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICd0d2l0dGVyOmNhcmQnLCBjb250ZW50OiAnc3VtbWFyeV9sYXJnZV9pbWFnZScgfV0sXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnRpdGxlJywgY29udGVudDogcGFnZURhdGEuZnJvbnRtYXR0ZXIudGl0bGUgfV0sXG4gICAgWydtZXRhJywgeyBuYW1lOiAndHdpdHRlcjp0aXRsZScsIGNvbnRlbnQ6IHBhZ2VEYXRhLmZyb250bWF0dGVyLnRpdGxlIH1dXG4gIClcblxuICBpZiAocGFnZURhdGEuZnJvbnRtYXR0ZXIuZGVzY3JpcHRpb24pIHtcbiAgICBoZWFkLnB1c2goXG4gICAgICBbXG4gICAgICAgICdtZXRhJyxcbiAgICAgICAge1xuICAgICAgICAgIHByb3BlcnR5OiAnb2c6ZGVzY3JpcHRpb24nLFxuICAgICAgICAgIGNvbnRlbnQ6IHBhZ2VEYXRhLmZyb250bWF0dGVyLmRlc2NyaXB0aW9uXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdtZXRhJyxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICd0d2l0dGVyOmRlc2NyaXB0aW9uJyxcbiAgICAgICAgICBjb250ZW50OiBwYWdlRGF0YS5mcm9udG1hdHRlci5kZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICBdXG4gICAgKVxuICB9XG5cbiAgaWYgKHBhZ2VEYXRhLmZyb250bWF0dGVyLmltYWdlKSB7XG4gICAgaGVhZC5wdXNoKFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHtcbiAgICAgICAgcHJvcGVydHk6ICdvZzppbWFnZScsXG4gICAgICAgIGNvbnRlbnQ6IGAke2hvc3RuYW1lfS8ke3BhZ2VEYXRhLmZyb250bWF0dGVyLmltYWdlLnJlcGxhY2UoL15cXC8vLCAnJyl9YFxuICAgICAgfVxuICAgIF0pXG4gICAgaGVhZC5wdXNoKFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3R3aXR0ZXI6aW1hZ2UnLFxuICAgICAgICBjb250ZW50OiBgJHtob3N0bmFtZX0vJHtwYWdlRGF0YS5mcm9udG1hdHRlci5pbWFnZS5yZXBsYWNlKC9eXFwvLywgJycpfWBcbiAgICAgIH1cbiAgICBdKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHVybCA9IHBhZ2VEYXRhLmZpbGVQYXRoLnJlcGxhY2UoJ2luZGV4Lm1kJywgJycpLnJlcGxhY2UoJy5tZCcsICcnKVxuICAgIGNvbnN0IGltYWdlVXJsID0gYCR7dXJsfS9fX29nX2ltYWdlX18vb2cucG5nYFxuICAgICAgLnJlcGxhY2VBbGwoJy8vJywgJy8nKVxuICAgICAgLnJlcGxhY2UoL15cXC8vLCAnJylcblxuICAgIGhlYWQucHVzaChcbiAgICAgIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzppbWFnZScsIGNvbnRlbnQ6IGAke2hvc3RuYW1lfS8ke2ltYWdlVXJsfWAgfV0sXG4gICAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6aW1hZ2U6d2lkdGgnLCBjb250ZW50OiAnMTIwMCcgfV0sXG4gICAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6aW1hZ2U6aGVpZ2h0JywgY29udGVudDogJzYyOCcgfV0sXG4gICAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6aW1hZ2U6dHlwZScsIGNvbnRlbnQ6ICdpbWFnZS9wbmcnIH1dLFxuICAgICAgW1xuICAgICAgICAnbWV0YScsXG4gICAgICAgIHsgcHJvcGVydHk6ICdvZzppbWFnZTphbHQnLCBjb250ZW50OiBwYWdlRGF0YS5mcm9udG1hdHRlci50aXRsZSB9XG4gICAgICBdLFxuICAgICAgWydtZXRhJywgeyBuYW1lOiAndHdpdHRlcjppbWFnZScsIGNvbnRlbnQ6IGAke2hvc3RuYW1lfS8ke2ltYWdlVXJsfWAgfV0sXG4gICAgICBbJ21ldGEnLCB7IG5hbWU6ICd0d2l0dGVyOmltYWdlOndpZHRoJywgY29udGVudDogJzEyMDAnIH1dLFxuICAgICAgWydtZXRhJywgeyBuYW1lOiAndHdpdHRlcjppbWFnZTpoZWlnaHQnLCBjb250ZW50OiAnNjI4JyB9XSxcbiAgICAgIFtcbiAgICAgICAgJ21ldGEnLFxuICAgICAgICB7IG5hbWU6ICd0d2l0dGVyOmltYWdlOmFsdCcsIGNvbnRlbnQ6IHBhZ2VEYXRhLmZyb250bWF0dGVyLnRpdGxlIH1cbiAgICAgIF1cbiAgICApXG4gIH1cblxuICBpZiAocGFnZURhdGEuZnJvbnRtYXR0ZXIudGFnKSB7XG4gICAgaGVhZC5wdXNoKFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHsgcHJvcGVydHk6ICdhcnRpY2xlOnRhZycsIGNvbnRlbnQ6IHBhZ2VEYXRhLmZyb250bWF0dGVyLnRhZyB9XG4gICAgXSlcbiAgfVxuXG4gIGlmIChwYWdlRGF0YS5mcm9udG1hdHRlci5kYXRlKSB7XG4gICAgaGVhZC5wdXNoKFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHtcbiAgICAgICAgcHJvcGVydHk6ICdhcnRpY2xlOnB1Ymxpc2hlZF90aW1lJyxcbiAgICAgICAgY29udGVudDogcGFnZURhdGEuZnJvbnRtYXR0ZXIuZGF0ZVxuICAgICAgfVxuICAgIF0pXG4gIH1cblxuICBpZiAocGFnZURhdGEubGFzdFVwZGF0ZWQgJiYgcGFnZURhdGEuZnJvbnRtYXR0ZXIubGFzdFVwZGF0ZWQgIT09IGZhbHNlKSB7XG4gICAgaGVhZC5wdXNoKFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHtcbiAgICAgICAgcHJvcGVydHk6ICdhcnRpY2xlOm1vZGlmaWVkX3RpbWUnLFxuICAgICAgICBjb250ZW50OiBuZXcgRGF0ZShwYWdlRGF0YS5sYXN0VXBkYXRlZCkudG9JU09TdHJpbmcoKVxuICAgICAgfVxuICAgIF0pXG4gIH1cblxuICByZXR1cm4gaGVhZFxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxXYWZhXFxcXERlc2t0b3BcXFxcYXJjaGl2ZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcaG9va3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFdhZmFcXFxcRGVza3RvcFxcXFxhcmNoaXZlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxob29rc1xcXFxvcGVuZ3JhcGgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1dhZmEvRGVza3RvcC9hcmNoaXZlL2RvY3MvLnZpdGVwcmVzcy9ob29rcy9vcGVuZ3JhcGgudHNcIjsvKipcbiAqICBDb3B5cmlnaHQgKGMpIHRhc2t5bGl6YXJkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgQ29udGVudERhdGEsIFNpdGVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXG5pbXBvcnQgdHlwZSB7IFNhdG9yaU9wdGlvbnMgfSBmcm9tICd4LXNhdG9yaS92dWUnXG5pbXBvcnQgeyBta2RpciwgcmVhZEZpbGUsIHdyaXRlRmlsZSB9IGZyb20gJ25vZGU6ZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBkaXJuYW1lLCByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xuaW1wb3J0IHsgcmVuZGVyQXN5bmMgfSBmcm9tICdAcmVzdmcvcmVzdmctanMnXG5pbXBvcnQgY29uc29sYSBmcm9tICdjb25zb2xhJ1xuaW1wb3J0IHsgY3JlYXRlQ29udGVudExvYWRlciB9IGZyb20gJ3ZpdGVwcmVzcydcbmltcG9ydCB7IHNhdG9yaVZ1ZSB9IGZyb20gJ3gtc2F0b3JpL3Z1ZSdcbmltcG9ydCB7IGhlYWRlcnMgfSBmcm9tICcuLi90cmFuc2Zvcm1lci9jb25zdGFudHMnXG5cbmNvbnN0IF9fZGlybmFtZSA9IGRpcm5hbWUoZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpKVxuY29uc3QgX19mb250cyA9IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vZm9udHMnKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbWFnZXMoY29uZmlnOiBTaXRlQ29uZmlnKTogUHJvbWlzZSB7XG4gIGNvbnN0IHBhZ2VzID0gYXdhaXQgY3JlYXRlQ29udGVudExvYWRlcignKiovKi5tZCcsIHsgZXhjZXJwdDogdHJ1ZSB9KS5sb2FkKClcbiAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCByZWFkRmlsZShyZXNvbHZlKF9fZGlybmFtZSwgJy4vVGVtcGxhdGUudnVlJyksICd1dGYtOCcpXG5cbiAgY29uc3QgZm9udHM6IFNhdG9yaU9wdGlvbnNbJ2ZvbnRzJ10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0ludGVyJyxcbiAgICAgIGRhdGE6IGF3YWl0IHJlYWRGaWxlKHJlc29sdmUoX19mb250cywgJ0ludGVyLVJlZ3VsYXIub3RmJykpLFxuICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgICBzdHlsZTogJ25vcm1hbCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdJbnRlcicsXG4gICAgICBkYXRhOiBhd2FpdCByZWFkRmlsZShyZXNvbHZlKF9fZm9udHMsICdJbnRlci1NZWRpdW0ub3RmJykpLFxuICAgICAgd2VpZ2h0OiA1MDAsXG4gICAgICBzdHlsZTogJ25vcm1hbCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdJbnRlcicsXG4gICAgICBkYXRhOiBhd2FpdCByZWFkRmlsZShyZXNvbHZlKF9fZm9udHMsICdJbnRlci1TZW1pQm9sZC5vdGYnKSksXG4gICAgICB3ZWlnaHQ6IDYwMCxcbiAgICAgIHN0eWxlOiAnbm9ybWFsJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0ludGVyJyxcbiAgICAgIGRhdGE6IGF3YWl0IHJlYWRGaWxlKHJlc29sdmUoX19mb250cywgJ0ludGVyLUJvbGQub3RmJykpLFxuICAgICAgd2VpZ2h0OiA3MDAsXG4gICAgICBzdHlsZTogJ25vcm1hbCdcbiAgICB9XG4gIF1cblxuICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcGFnZXMpIHtcbiAgICBhd2FpdCBnZW5lcmF0ZUltYWdlKHtcbiAgICAgIHBhZ2UsXG4gICAgICB0ZW1wbGF0ZSxcbiAgICAgIG91dERpcjogY29uZmlnLm91dERpcixcbiAgICAgIGZvbnRzXG4gICAgfSlcbiAgfVxuICByZXR1cm4gY29uc29sYS5pbmZvKCdHZW5lcmF0ZWQgb3BlbmdyYXBoIGltYWdlcy4nKVxufVxuXG5pbnRlcmZhY2UgR2VuZXJhdGVJbWFnZXNPcHRpb25zIHtcbiAgcGFnZTogQ29udGVudERhdGFcbiAgdGVtcGxhdGU6IHN0cmluZ1xuICBvdXREaXI6IHN0cmluZ1xuICBmb250czogU2F0b3JpT3B0aW9uc1snZm9udHMnXVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUltYWdlKHtcbiAgcGFnZSxcbiAgdGVtcGxhdGUsXG4gIG91dERpcixcbiAgZm9udHNcbn06IEdlbmVyYXRlSW1hZ2VzT3B0aW9ucyk6IFByb21pc2Uge1xuICBjb25zdCB7IGZyb250bWF0dGVyLCB1cmwgfSA9IHBhZ2VcblxuICBjb25zdCBfcGFnZSA9IGdldFBhZ2UodXJsKVxuICBjb25zdCB0aXRsZSA9XG4gICAgZnJvbnRtYXR0ZXIubGF5b3V0ID09PSAnaG9tZSdcbiAgICAgID8gKGZyb250bWF0dGVyLmhlcm8ubmFtZSA/PyBmcm9udG1hdHRlci50aXRsZSlcbiAgICAgIDogZnJvbnRtYXR0ZXIudGl0bGVcbiAgICAgICAgPyBmcm9udG1hdHRlci50aXRsZVxuICAgICAgICA6IF9wYWdlPy50aXRsZVxuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID1cbiAgICBmcm9udG1hdHRlci5sYXlvdXQgPT09ICdob21lJ1xuICAgICAgPyAoZnJvbnRtYXR0ZXIuaGVyby50YWdsaW5lID8/IGZyb250bWF0dGVyLmRlc2NyaXB0aW9uKVxuICAgICAgOiBmcm9udG1hdHRlci5kZXNjcmlwdGlvblxuICAgICAgICA/IGZyb250bWF0dGVyLmRlc2NyaXB0aW9uXG4gICAgICAgIDogX3BhZ2U/LmRlc2NyaXB0aW9uXG5cbiAgLy8gY29uc29sYS5pbmZvKHVybCwgdGl0bGUsIGRlc2NyaXB0aW9uKVxuICBjb25zdCBvcHRpb25zOiBTYXRvcmlPcHRpb25zID0ge1xuICAgIHdpZHRoOiAxMjAwLFxuICAgIGhlaWdodDogNjI4LFxuICAgIGZvbnRzLFxuICAgIHByb3BzOiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3ZnID0gYXdhaXQgc2F0b3JpVnVlKG9wdGlvbnMsIHRlbXBsYXRlKVxuXG4gIGNvbnN0IHJlbmRlciA9IGF3YWl0IHJlbmRlckFzeW5jKHN2ZylcblxuICBjb25zdCBvdXRwdXRGb2xkZXIgPSByZXNvbHZlKG91dERpciwgdXJsLnNsaWNlKDEpLCAnX19vZ19pbWFnZV9fJylcbiAgY29uc3Qgb3V0cHV0RmlsZSA9IHJlc29sdmUob3V0cHV0Rm9sZGVyLCAnb2cucG5nJylcblxuICBhd2FpdCBta2RpcihvdXRwdXRGb2xkZXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG5cbiAgYXdhaXQgd3JpdGVGaWxlKG91dHB1dEZpbGUsIHJlbmRlci5hc1BuZygpKVxufVxuXG5mdW5jdGlvbiBnZXRQYWdlKHBhZ2U6IHN0cmluZykge1xuICAvLyBHZXQgdGhlIHBhZ2UgbmFtZVxuICBjb25zdCBwYWdlTmFtZSA9IGAke3BhZ2V9Lm1kYC5zbGljZSgxKS5zcGxpdCgnLycpLmF0KC0xKVxuXG4gIC8vIEZpbmQgdGhlIGhlYWRlclxuICAvLyBUT0RPOiBUaGlzIGlzIGEgaGFja3kgd2F5IHRvIGZpbmQgdGhlIGhlYWRlclxuICBjb25zdCBoZWFkZXIgPSBPYmplY3QuZW50cmllcyhoZWFkZXJzKS5maW5kKChba2V5XSkgPT4ga2V5ID09PSBwYWdlTmFtZSlcbiAgaWYgKCFoZWFkZXIpIHJldHVyblxuXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBoZWFkZXJbMV1cblxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcV2FmYVxcXFxEZXNrdG9wXFxcXGFyY2hpdmVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGhvb2tzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxXYWZhXFxcXERlc2t0b3BcXFxcYXJjaGl2ZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcaG9va3NcXFxccnNzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9XYWZhL0Rlc2t0b3AvYXJjaGl2ZS9kb2NzLy52aXRlcHJlc3MvaG9va3MvcnNzLnRzXCI7LyoqXG4gKiAgQ29weXJpZ2h0IChjKSB0YXNreWxpemFyZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IENvbnRlbnREYXRhLCBTaXRlQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xuaW1wb3J0IHsgd3JpdGVGaWxlU3luYyB9IGZyb20gJ25vZGU6ZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgY29uc29sYSBmcm9tICdjb25zb2xhJ1xuaW1wb3J0IHsgRmVlZCB9IGZyb20gJ2ZlZWQnXG5pbXBvcnQgeyBjcmVhdGVDb250ZW50TG9hZGVyIH0gZnJvbSAndml0ZXByZXNzJ1xuaW1wb3J0IHsgbWV0YSB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlRmVlZChjb25maWc6IFNpdGVDb25maWcpOiBQcm9taXNlIHtcbiAgY29uc3QgZmVlZDogRmVlZCA9IG5ldyBGZWVkKHtcbiAgICBpZDogbWV0YS5ob3N0bmFtZSxcbiAgICBsaW5rOiBtZXRhLmhvc3RuYW1lLFxuICAgIHRpdGxlOiAnRk1IWSBibG9nJyxcbiAgICBkZXNjcmlwdGlvbjogbWV0YS5kZXNjcmlwdGlvbixcbiAgICBsYW5ndWFnZTogJ2VuLVVTJyxcbiAgICBpbWFnZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9mbWh5LnBuZycsXG4gICAgZmF2aWNvbjogYCR7bWV0YS5ob3N0bmFtZX0vZmF2aWNvbi5pY29gLFxuICAgIGNvcHlyaWdodDogJ0NvcHlyaWdodCAoYykgMjAyMy1wcmVzZW50IEZNSFknXG4gIH0pXG5cbiAgY29uc3QgcG9zdHM6IENvbnRlbnREYXRhW10gPSBhd2FpdCBjcmVhdGVDb250ZW50TG9hZGVyKCdwb3N0cy8qLm1kJywge1xuICAgIGV4Y2VycHQ6IHRydWUsXG4gICAgcmVuZGVyOiB0cnVlLFxuICAgIHRyYW5zZm9ybTogKHJhd0RhdGEpID0+IHtcbiAgICAgIHJldHVybiByYXdEYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBOdW1iZXIobmV3IERhdGUoYi5mcm9udG1hdHRlci5kYXRlKSkgLVxuICAgICAgICAgIE51bWJlcihuZXcgRGF0ZShhLmZyb250bWF0dGVyLmRhdGUpKVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cbiAgfSkubG9hZCgpXG5cbiAgZm9yIChjb25zdCB7IHVybCwgZnJvbnRtYXR0ZXIsIGh0bWwgfSBvZiBwb3N0cykge1xuICAgIGZlZWQuYWRkSXRlbSh7XG4gICAgICB0aXRsZTogZnJvbnRtYXR0ZXIudGl0bGUgYXMgc3RyaW5nLFxuICAgICAgaWQ6IGAke21ldGEuaG9zdG5hbWV9JHt1cmwucmVwbGFjZSgvXFwvXFxkK1xcLi8sICcvJyl9YCxcbiAgICAgIGxpbms6IGAke21ldGEuaG9zdG5hbWV9JHt1cmwucmVwbGFjZSgvXFwvXFxkK1xcLi8sICcvJyl9YCxcbiAgICAgIGRhdGU6IGZyb250bWF0dGVyLmRhdGUsXG4gICAgICBjb250ZW50OiBodG1sPy5yZXBsYWNlQWxsKCcmWmVyb1dpZHRoU3BhY2U7JywgJycpXG4gICAgfSlcbiAgfVxuXG4gIHdyaXRlRmlsZVN5bmMocGF0aC5qb2luKGNvbmZpZy5vdXREaXIsICdmZWVkLnJzcycpLCBmZWVkLnJzczIoKSlcbiAgcmV0dXJuIGNvbnNvbGEuaW5mbygnR2VuZXJhdGVkIHJzcyBmZWVkLicpXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFdhZmFcXFxcRGVza3RvcFxcXFxhcmNoaXZlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxob29rc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcV2FmYVxcXFxEZXNrdG9wXFxcXGFyY2hpdmVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGhvb2tzXFxcXHNhdG9yaUNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvV2FmYS9EZXNrdG9wL2FyY2hpdmUvZG9jcy8udml0ZXByZXNzL2hvb2tzL3NhdG9yaUNvbmZpZy50c1wiOy8qKlxuICogIENvcHlyaWdodCAoYykgdGFza3lsaXphcmQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBTYXRvcmlPcHRpb25zIH0gZnJvbSAneC1zYXRvcmkvdnVlJ1xuaW1wb3J0IHsgcmVhZEZpbGUgfSBmcm9tICdub2RlOmZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgZGlybmFtZSwgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCB7IGRlZmluZVNhdG9yaUNvbmZpZyB9IGZyb20gJ3gtc2F0b3JpL3Z1ZSdcblxuY29uc3QgX19kaXJuYW1lID0gZGlybmFtZShmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpXG5jb25zdCBfX2ZvbnRzID0gcmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9mb250cycpXG5cbmNvbnN0IGZvbnRzOiBTYXRvcmlPcHRpb25zWydmb250cyddID0gW1xuICB7XG4gICAgbmFtZTogJ0ludGVyJyxcbiAgICBkYXRhOiBhd2FpdCByZWFkRmlsZShyZXNvbHZlKF9fZm9udHMsICdJbnRlci1SZWd1bGFyLm90ZicpKSxcbiAgICB3ZWlnaHQ6IDQwMCxcbiAgICBzdHlsZTogJ25vcm1hbCdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJbnRlcicsXG4gICAgZGF0YTogYXdhaXQgcmVhZEZpbGUocmVzb2x2ZShfX2ZvbnRzLCAnSW50ZXItTWVkaXVtLm90ZicpKSxcbiAgICB3ZWlnaHQ6IDUwMCxcbiAgICBzdHlsZTogJ25vcm1hbCdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJbnRlcicsXG4gICAgZGF0YTogYXdhaXQgcmVhZEZpbGUocmVzb2x2ZShfX2ZvbnRzLCAnSW50ZXItU2VtaUJvbGQub3RmJykpLFxuICAgIHdlaWdodDogNjAwLFxuICAgIHN0eWxlOiAnbm9ybWFsJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ0ludGVyJyxcbiAgICBkYXRhOiBhd2FpdCByZWFkRmlsZShyZXNvbHZlKF9fZm9udHMsICdJbnRlci1Cb2xkLm90ZicpKSxcbiAgICB3ZWlnaHQ6IDcwMCxcbiAgICBzdHlsZTogJ25vcm1hbCdcbiAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVTYXRvcmlDb25maWcoe1xuICB3aWR0aDogMTIwMCxcbiAgaGVpZ2h0OiA2MjgsXG4gIGZvbnRzLFxuICBwcm9wczoge1xuICAgIHRpdGxlOiAnVGl0bGUnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBxdWkgbWluaW0gbGFib3JlIGFkaXBpc2ljaW5nIG1pbmltIHNpbnQgY2lsbHVtIHNpbnQgY29uc2VjdGV0dXIgY3VwaWRhdGF0LicsXG4gICAgZGlyOiAnL2onXG4gIH1cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFdhZmFcXFxcRGVza3RvcFxcXFxhcmNoaXZlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxtYXJrZG93blwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcV2FmYVxcXFxEZXNrdG9wXFxcXGFyY2hpdmVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXG1hcmtkb3duXFxcXGVtb2ppLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9XYWZhL0Rlc2t0b3AvYXJjaGl2ZS9kb2NzLy52aXRlcHJlc3MvbWFya2Rvd24vZW1vamkudHNcIjsvKipcbiAqICBDb3B5cmlnaHQgKGMpIHRhc2t5bGl6YXJkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgTWFya2Rvd25SZW5kZXJlciB9IGZyb20gJ3ZpdGVwcmVzcydcbmltcG9ydCB7IGljb25zIGFzIHR3ZW1vamkgfSBmcm9tICdAaWNvbmlmeS1qc29uL3R3ZW1vamknXG5cbmV4cG9ydCBjb25zdCBkZWZzID0ge1xuICAuLi5PYmplY3QuZnJvbUVudHJpZXMoXG4gICAgT2JqZWN0LmVudHJpZXModHdlbW9qaS5pY29ucykubWFwKChba2V5XSkgPT4ge1xuICAgICAgcmV0dXJuIFtrZXksICcnXVxuICAgIH0pXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtb2ppUmVuZGVyKG1kOiBNYXJrZG93blJlbmRlcmVyKSB7XG4gIG1kLnJlbmRlcmVyLnJ1bGVzLmVtb2ppID0gKHRva2VucywgaWR4KSA9PiB7XG4gICAgaWYgKHRva2Vuc1tpZHhdLm1hcmt1cC5zdGFydHNXaXRoKCdzdGFyJykpIHtcbiAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJpLXR3ZW1vamktJHt0b2tlbnNbaWR4XS5tYXJrdXB9IHN0YXJyZWRcIj48L3NwYW4+YFxuICAgIH1cbiAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiaS10d2Vtb2ppLSR7dG9rZW5zW2lkeF0ubWFya3VwfVwiPjwvc3Bhbj5gXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVQbHVnaW4oXG4gIHBsdWdpbnM6IHsgbmFtZTogc3RyaW5nIH1bXSxcbiAgcGx1Z2luQU5hbWU6IHN0cmluZyxcbiAgb3JkZXI6ICdiZWZvcmUnIHwgJ2FmdGVyJyxcbiAgcGx1Z2luQk5hbWU6IHN0cmluZ1xuKSB7XG4gIGNvbnN0IHBsdWdpbkJJbmRleCA9IHBsdWdpbnMuZmluZEluZGV4KChwKSA9PiBwLm5hbWUgPT09IHBsdWdpbkJOYW1lKVxuICBpZiAocGx1Z2luQkluZGV4ID09PSAtMSkgcmV0dXJuXG5cbiAgY29uc3QgcGx1Z2luQUluZGV4ID0gcGx1Z2lucy5maW5kSW5kZXgoKHApID0+IHAubmFtZSA9PT0gcGx1Z2luQU5hbWUpXG4gIGlmIChwbHVnaW5BSW5kZXggPT09IC0xKSByZXR1cm5cblxuICBpZiAob3JkZXIgPT09ICdiZWZvcmUnICYmIHBsdWdpbkFJbmRleCA+IHBsdWdpbkJJbmRleCkge1xuICAgIGNvbnN0IHBsdWdpbkEgPSBwbHVnaW5zLnNwbGljZShwbHVnaW5BSW5kZXgsIDEpWzBdXG4gICAgcGx1Z2lucy5zcGxpY2UocGx1Z2luQkluZGV4LCAwLCBwbHVnaW5BKVxuICB9XG5cbiAgaWYgKG9yZGVyID09PSAnYWZ0ZXInICYmIHBsdWdpbkFJbmRleCA8IHBsdWdpbkJJbmRleCkge1xuICAgIGNvbnN0IHBsdWdpbkEgPSBwbHVnaW5zLnNwbGljZShwbHVnaW5BSW5kZXgsIDEpWzBdXG4gICAgcGx1Z2lucy5zcGxpY2UocGx1Z2luQkluZGV4LCAwLCBwbHVnaW5BKVxuICB9XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFdhZmFcXFxcRGVza3RvcFxcXFxhcmNoaXZlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxtYXJrZG93blwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcV2FmYVxcXFxEZXNrdG9wXFxcXGFyY2hpdmVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXG1hcmtkb3duXFxcXGhlYWRlcnMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1dhZmEvRGVza3RvcC9hcmNoaXZlL2RvY3MvLnZpdGVwcmVzcy9tYXJrZG93bi9oZWFkZXJzLnRzXCI7LyoqXG4gKiAgQ29weXJpZ2h0IChjKSB0YXNreWxpemFyZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE1hcmtkb3duUmVuZGVyZXIgfSBmcm9tICd2aXRlcHJlc3MnXG5pbXBvcnQgeyBoZWFkZXJzIH0gZnJvbSAnLi4vdHJhbnNmb3JtZXIvY29uc3RhbnRzJ1xuXG5jb25zdCB0aXRsZXMgPSBPYmplY3Qua2V5cyhoZWFkZXJzKS5tYXAoKGtleSkgPT4gaGVhZGVyc1trZXldLnRpdGxlKVxuXG5leHBvcnQgY29uc3QgaGVhZGVyc1BsdWdpbiA9IChtZDogTWFya2Rvd25SZW5kZXJlcikgPT4ge1xuICAvLyBBZGQgdGhlIEZlZWRiYWNrIGNvbXBvbmVudCBhZnRlciB0aGUgaGVhZGluZyBhbmQgY2xvc2UgdGhlIGNvbnRhaW5lclxuICBtZC5yZW5kZXJlci5ydWxlcy5oZWFkaW5nX2Nsb3NlID0gKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNlbGYpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBzZWxmLnJlbmRlclRva2VuKHRva2VucywgaWR4LCBvcHRpb25zKVxuICAgIGNvbnN0IGhlYWRpbmcgPSB0b2tlbnNbaWR4IC0gMV1cbiAgICBjb25zdCBsZXZlbCA9IHRva2Vuc1tpZHhdLnRhZy5zbGljZSgxKVxuICAgIGlmICghdGl0bGVzLmluY2x1ZGVzKGVudi5mcm9udG1hdHRlci50aXRsZSkgfHwgbGV2ZWwgIT09ICcyJykgcmV0dXJuIHJlc3VsdFxuXG4gICAgcmV0dXJuIGA8RmVlZGJhY2sgaGVhZGluZz1cIiR7aGVhZGluZy5jb250ZW50fVwiIC8+JHtyZXN1bHR9YFxuICB9XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFdhZmFcXFxcRGVza3RvcFxcXFxhcmNoaXZlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxtYXJrZG93blwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcV2FmYVxcXFxEZXNrdG9wXFxcXGFyY2hpdmVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXG1hcmtkb3duXFxcXHRvZ2dsZVN0YXJyZWQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1dhZmEvRGVza3RvcC9hcmNoaXZlL2RvY3MvLnZpdGVwcmVzcy9tYXJrZG93bi90b2dnbGVTdGFycmVkLnRzXCI7LyoqXG4gKiAgQ29weXJpZ2h0IChjKSB0YXNreWxpemFyZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE1hcmtkb3duUmVuZGVyZXIgfSBmcm9tICd2aXRlcHJlc3MnXG5cbmNvbnN0IGV4Y2x1ZGVkID0gWydCZWdpbm5lcnMgR3VpZGUnXVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlU3RhcnJlZFBsdWdpbihtZDogTWFya2Rvd25SZW5kZXJlcikge1xuICBtZC5yZW5kZXJlci5ydWxlcy5saXN0X2l0ZW1fb3BlbiA9ICh0b2tlbnMsIGluZGV4LCBvcHRpb25zLCBlbnYsIHNlbGYpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9rZW4gPSB0b2tlbnNbaW5kZXggKyAyXVxuICAgIGlmIChcbiAgICAgICFleGNsdWRlZC5pbmNsdWRlcyhlbnYuZnJvbnRtYXR0ZXIudGl0bGUpICYmXG4gICAgICBjb250ZW50VG9rZW4gJiZcbiAgICAgIGNvbnRlbnRUb2tlbi5jb250ZW50LnN0YXJ0c1dpdGgoJzpzdGFyOicpXG4gICAgKSB7XG4gICAgICByZXR1cm4gYDxsaSBjbGFzcz1cInN0YXJyZWRcIj5gXG4gICAgfVxuICAgIHJldHVybiBzZWxmLnJlbmRlclRva2VuKHRva2VucywgaW5kZXgsIG9wdGlvbnMpXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1QsU0FBUyxpQkFBQUEsc0JBQXFCO0FBQzdWLE9BQU9DLGNBQWE7QUFDcEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sY0FBYztBQUNyQixTQUFTLG9CQUFvQjs7O0FDVzdCLFNBQVMsZ0JBQWdCOzs7QUNFbEIsSUFBTSxVQUFrQjtBQUFBLEVBQzdCLHNCQUFzQjtBQUFBLElBQ3BCLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsdUJBQXVCO0FBQUEsSUFDckIsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLHVCQUF1QjtBQUFBLElBQ3JCLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxzQkFBc0I7QUFBQSxJQUNwQixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsMEJBQTBCO0FBQUEsSUFDeEIsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLHFCQUFxQjtBQUFBLElBQ25CLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSx3QkFBd0I7QUFBQSxJQUN0QixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsaUJBQWlCO0FBQUEsSUFDZixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQUEsSUFDZCxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsaUJBQWlCO0FB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LElBQ0M7QUFBQSxJQUNBO0FBQUEsRUFDRixFQUNDO0FBQUEsSUFDQztBQUFBLElBQ0E7QUFBQSxFQUNGLEVBQ0M7QUFBQSxJQUNDO0FBQUEsSUFDQTtBQUFBLEVBQ0YsRUFDQztBQUFBLElBQ0M7QUFBQSxJQUNBO0FBQUEsRUFDRixFQUNDO0FBQUEsSUFDQztBQUFBLElBQ0E7QUFBQSxFQUNGLEVBQ0M7QUFBQSxJQUNDO0FBQUEsSUFDQTtBQUFBLEVBQ0YsRUFDQztBQUFBLElBQ0M7QUFBQSxJQUNBO0FBQUEsRUFDRixFQUNDO0FBQUEsSUFDQztBQUFBLElBQ0E7QUFBQSxFQUNGLEVBQ0M7QUFBQSxJQUNDO0FBQUEsSUFDQTtBQUFBLEVBQ0YsRUFDQztBQUFBLElBQ0M7QUFBQSxJQUNBO0FBQUEsRUFDRixFQUNDO0FBQUEsSUFDQztBQUFBLElBQ0E7QUFBQSxFQUNGLEVBQ0M7QUFBQSxJQUNDO0FBQUEsSUFDQTtBQUFBLEVBQ0YsRUFDQztBQUFBLElBQ0M7QUFBQSxJQUNBO0FBQUEsRUFDRixFQUNDO0FBQUEsSUFDQztBQUFBLElBQ0E7QUFBQSxFQUNGLEVBQ0M7QUFBQSxJQUNDO0FBQUEsSUFDQTtBQUFBLEVBQ0YsRUFDQztBQUFBLElBQ0M7QUFBQSxJQUNBO0FBQUEsRUFDRixFQUNDO0FBQUEsSUFDQztBQUFBLElBQ0E7QUFBQSxFQUNGLEVBQ0M7QUFBQSxJQUNDO0FBQUEsSUFDQTtBQUFBLEVBQ0YsRUFDQztBQUFBLElBQ0M7QUFBQSxJQUNBO0FBQUEsRUFDRixFQUNDO0FBQUEsSUFDQztBQUFBLElBQ0E7QUFBQSxFQUNGLEVBQ0M7QUFBQSxJQUNDO0FBQUEsSUFDQTtBQUFBLEVBQ0YsRUFDQztBQUFBLElBQ0M7QUFBQSxJQUNBO0FBQUEsRUFDRixFQUVDLFFBQVEsYUFBYSxJQUFJLEVBQ3pCLFFBQVEsV0FBVyxJQUFJLEVBQ3ZCLFFBQVEsV0FBVyxFQUFFLEVBQ3JCLFFBQVEsV0FBVyxFQUFFLEVBQ3JCLFFBQVEsVUFBVSxHQUFHO0FBRXhCLFVBQVEsa0JBQWtCLEtBQUssRUFDNUIsUUFBUSxZ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O0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxVQUFpRTtBQUFBLEVBQzVFO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQTtBQUFBLEVBR0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxJQUNYLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElB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SUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiZmlsZVVSTFRvUGF0aCIsICJjb25zb2xhIiwgImZlZWRiYWNrIiwgInRhcmdldCIsICJ0cmFuc2Zvcm1zIiwgIm5hbWUiLCAidGl0bGVzIiwgInVybCIsICJjb25zb2xhIiwgImZvbnRzIiwgImNvbnNvbGEiLCAiY29uc29sYSIsICJjcmVhdGVDb250ZW50TG9hZGVyIiwgImNyZWF0ZUNvbnRlbnRMb2FkZXIiLCAiY29uc29sYSIsICJyZWFkRmlsZSIsICJkaXJuYW1lIiwgInJlc29sdmUiLCAiZmlsZVVSTFRvUGF0aCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsIiwgIl9fZGlybmFtZSIsICJkaXJuYW1lIiwgImZpbGVVUkxUb1BhdGgiLCAiX19mb250cyIsICJyZXNvbHZlIiwgInJlYWRGaWxlIiwgImV4Y2x1ZGVkIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwiLCAiY29uc29sYSIsICJmaWxlVVJMVG9QYXRoIl0KfQo=
