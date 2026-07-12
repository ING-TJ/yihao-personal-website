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

test('all internal localized links resolve', () => {
  for (const lang of languages) {
    for (const section of sections) {
      const target = path.resolve(`dist/${lang}/${section}/index.html`);
      assert.ok(fs.existsSync(target));
    }
  }
});
