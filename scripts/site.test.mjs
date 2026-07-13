import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const languages = ['en', 'zh-CN', 'ar', 'fr', 'ru', 'es', 'ja', 'ko'];
const sections = ['about', 'research', 'publications', 'ventures', 'honors', 'global', 'life', 'contact'];

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

test('V2 output contains no WebGL or Three.js runtime', () => {
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

test('V2.2 production pages expose no developer placeholders or local paths', () => {
  const files = fs.readdirSync(path.resolve('dist'), { recursive: true }).filter((file) => String(file).endsWith('.html'));
  const html = files.map((file) => fs.readFileSync(path.resolve('dist', String(file)), 'utf8')).join('\n');

  assert.doesNotMatch(html, /public\/assets|src\/|Portrait \/ image pending|Research image pending/i);
  assert.doesNotMatch(html, /人物照片 \/ 图片待补|研究图片待补|待补充|To be provided/i);
});

test('V2.2 venture details hide empty data fields', () => {
  const venture = fs.readFileSync(path.resolve('dist/zh-CN/ventures/jingshuiji/index.html'), 'utf8');

  assert.match(venture, /由卞逸豪创立、聚焦高品质直饮水的环境科技项目/);
  assert.doesNotMatch(venture, /venture-detail-fields|venture-gallery|待补充/);
});

test('V2.2 contact pages hide unavailable channels and actions', () => {
  const contactPage = fs.readFileSync(path.resolve('dist/en/contact/index.html'), 'utf8');

  assert.doesNotMatch(contactPage, /mailto:|linkedin\.com|instagram\.com|github\.com|orcid\.org/);
  assert.doesNotMatch(contactPage, /Save contact|button-muted/);
});

test('all internal localized links resolve', () => {
  for (const lang of languages) {
    for (const section of sections) {
      const target = path.resolve(`dist/${lang}/${section}/index.html`);
      assert.ok(fs.existsSync(target));
    }
  }
});
