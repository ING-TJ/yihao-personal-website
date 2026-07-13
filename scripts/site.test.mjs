import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const languages = ['en', 'zh-CN', 'ar', 'fr', 'ru', 'es', 'ja', 'ko'];
const sections = ['about', 'research', 'publications', 'ventures', 'honors', 'global', 'life', 'contact'];
const distRoot = path.resolve('dist');
const htmlFiles = () => fs.readdirSync(distRoot, { recursive: true }).filter((file) => String(file).endsWith('.html')).map(String);
const allHtml = () => htmlFiles().map((file) => fs.readFileSync(path.join(distRoot, file), 'utf8')).join('\n');

test('all localized routes are built', () => {
  for (const lang of languages) {
    assert.ok(fs.existsSync(path.resolve(`dist/${lang}/index.html`)), `missing ${lang} home`);
    for (const section of sections) assert.ok(fs.existsSync(path.resolve(`dist/${lang}/${section}/index.html`)), `missing ${lang}/${section}`);
  }
});

test('V2 research and venture templates are built for enabled locales', () => {
  for (const lang of ['en', 'zh-CN']) {
    assert.ok(fs.existsSync(path.resolve(`dist/${lang}/research/drinking-water/index.html`)));
    assert.ok(fs.existsSync(path.resolve(`dist/${lang}/ventures/jingshuiji/index.html`)));
  }
});

test('Arabic output is RTL and semantic content exists', () => {
  const html = fs.readFileSync(path.resolve('dist/ar/research/index.html'), 'utf8');
  assert.match(html, /<html lang="ar" dir="rtl">/);
  assert.match(html, /<h1/);
  assert.match(html, /<article/);
});

test('no external fonts, translation API, fake DOI or audio', () => {
  const files = fs.readdirSync(path.resolve('dist'), { recursive: true }).filter((file) => String(file).endsWith('.html'));
  const html = files.map((file) => fs.readFileSync(path.resolve('dist', String(file)), 'utf8')).join('\n');
  assert.doesNotMatch(html, /fonts\.(googleapis|gstatic)\.com/i);
  assert.doesNotMatch(html, /translate\.google/i);
  assert.doesNotMatch(html, /<audio/i);
  assert.doesNotMatch(html, /10\.\d{4,9}\/[A-Za-z0-9]/);
});

test('editorial output contains no removed immersive runtime', () => {
  const packageJson = JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf8'));
  const dependencies = JSON.stringify({ ...packageJson.dependencies, ...packageJson.devDependencies });
  assert.doesNotMatch(dependencies, /three|react-three|@astrojs\/react|react-dom/i);
  const home = fs.readFileSync(path.resolve('dist/en/index.html'), 'utf8');
  assert.doesNotMatch(home, /<canvas|webgl|NexusExperience/i);
});

test('V2.1 home identity is localized and missing CV actions stay hidden', () => {
  const englishHome = fs.readFileSync(path.resolve('dist/en/index.html'), 'utf8');
  const chineseHome = fs.readFileSync(path.resolve('dist/zh-CN/index.html'), 'utf8');

  assert.match(englishHome, /<h1[^>]*><span>Yihao Bian<\/span><small>卞逸豪<\/small><\/h1>/);
  assert.match(chineseHome, /<h1[^>]*><span>卞逸豪<\/span><small>Yihao Bian<\/small><\/h1>/);
  assert.doesNotMatch(englishHome, /Download CV/);
  assert.doesNotMatch(chineseHome, /下载简历/);
});

test('production pages expose no developer placeholders or local paths', () => {
  const html = allHtml();

  assert.doesNotMatch(html, /public\/assets|src\/|\/Users\/|Portrait \/ image pending|Research image pending/i);
  assert.doesNotMatch(html, /pending|coming soon|人物照片 \/ 图片待补|研究图片待补|待补|To be provided|TODO|example\.com/i);
});

test('V2.3 visitor copy contains no legacy Nexus or cosmic-interface language', () => {
  const html = allHtml();

  assert.doesNotMatch(html, /nexus|personal universe|个人宇宙|univers personnel|universo personal|личн(?:ая|ую) вселен|個人宇宙|개인 우주/i);
  assert.doesNotMatch(html, /center of gravity|centre de gravité|centro de gravedad|центр притяжения|مركز الجاذبية|引力中心|중력의 중심|honors in orbit|distinctions en orbite|distinciones en órbita|орбита наград|受賞の軌道|수상의 궤도/i);
});

test('V2.2 venture details hide empty data fields', () => {
  const venture = fs.readFileSync(path.resolve('dist/zh-CN/ventures/jingshuiji/index.html'), 'utf8');

  assert.match(venture, /由卞逸豪创立、聚焦高品质直饮水的环境科技项目/);
  assert.doesNotMatch(venture, /venture-detail-fields|venture-gallery|待补充/);
});

test('V2.3 contact pages localize navigation and hide unavailable channels', () => {
  const english = fs.readFileSync(path.resolve('dist/en/contact/index.html'), 'utf8');
  const chinese = fs.readFileSync(path.resolve('dist/zh-CN/contact/index.html'), 'utf8');

  assert.match(english, /<h1 class="page-title">Contact<\/h1>/);
  assert.match(english, /For academic collaboration, research exchange, environmental technology projects and international communication\./);
  assert.match(english, /href="(?:\/yihao-personal-website)?\/en\/">← Back to home<\/a>/);
  assert.match(chinese, /<h1 class="page-title">联系方式<\/h1>/);
  assert.match(chinese, /欢迎就学术合作、科研交流、环境科技项目与国际交流联系我。/);
  assert.match(chinese, /href="(?:\/yihao-personal-website)?\/zh-CN\/">← 返回首页<\/a>/);
  for (const html of [english, chinese]) {
    assert.doesNotMatch(html, /mailto:|tel:|linkedin\.com|instagram\.com|github\.com|orcid\.org|researchgate\.net/i);
    assert.doesNotMatch(html, /contact-list|contact-copy|Save contact|保存联系人|button-muted/);
  }
});

test('V2.3 contact SEO and Person schema omit absent contact data', () => {
  for (const lang of ['en', 'zh-CN']) {
    const html = fs.readFileSync(path.resolve(`dist/${lang}/contact/index.html`), 'utf8');
    const title = lang === 'en' ? 'Contact' : '联系方式';
    assert.match(html, new RegExp(`<title>${title} — Yihao Bian<\\/title>`));
    assert.match(html, new RegExp(`rel="canonical" href="https:[^"]+/${lang}/contact/"`));
    assert.match(html, /hreflang="en"/);
    assert.match(html, /hreflang="zh-CN"/);
    const jsonLdSource = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)?.[1];
    assert.ok(jsonLdSource, `missing Person schema for ${lang}`);
    const person = JSON.parse(jsonLdSource);
    assert.equal('email' in person, false);
    assert.equal('telephone' in person, false);
    assert.equal('sameAs' in person, false);
  }
});

test('all internal links resolve with root or GitHub Pages base paths', () => {
  const projectBase = '/yihao-personal-website';
  for (const file of htmlFiles()) {
    const html = fs.readFileSync(path.join(distRoot, file), 'utf8');
    const pageRoute = file === 'index.html' ? '/' : `/${file.replace(/index\.html$/, '')}`;
    for (const match of html.matchAll(/\shref="([^"]+)"/g)) {
      const href = match[1];
      if (/^(?:https?:|mailto:|tel:|data:|javascript:|#)/i.test(href)) continue;
      let pathname = new URL(href, `https://local.test${pageRoute}`).pathname;
      if (pathname === projectBase) pathname = '/';
      else if (pathname.startsWith(`${projectBase}/`)) pathname = pathname.slice(projectBase.length);
      const relativeTarget = decodeURIComponent(pathname).replace(/^\//, '');
      const target = path.join(distRoot, pathname.endsWith('/') ? relativeTarget : relativeTarget, pathname.endsWith('/') ? 'index.html' : '');
      assert.ok(fs.existsSync(target), `${file}: broken internal link ${href} -> ${target}`);
    }
  }
});
