import fs from 'node:fs';
import path from 'node:path';

const languages = ['en', 'zh-CN', 'ar', 'fr', 'ru', 'es', 'ja', 'ko'];
const sections = ['about', 'research', 'publications', 'ventures', 'honors', 'global', 'life', 'contact'];
const research = ['drinking-water', 'biofilms', 'heavy-metals', 'disinfection', 'nanofiltration', 'microplastics'];
const failures = [];

for (const lang of languages) {
  const file = path.resolve(`src/content/locales/${lang}.ts`);
  if (!fs.existsSync(file)) { failures.push(`Missing locale: ${lang}`); continue; }
  const content = fs.readFileSync(file, 'utf8');
  for (const section of sections) if (!content.includes(`${section}:`)) failures.push(`${lang}: missing section ${section}`);
  for (const id of research) if (!content.includes(id.includes('-') ? `'${id}'` : `${id}:`)) failures.push(`${lang}: missing research ${id}`);
  if (/10\.\d{4,9}\/[A-Za-z0-9]/.test(content)) failures.push(`${lang}: unexpected DOI-like value`);
}

const contact = JSON.parse(fs.readFileSync(path.resolve('src/data/contact.config.json'), 'utf8'));
for (const key of ['email', 'phone', 'wechat', 'instagram', 'linkedin', 'github', 'orcid']) {
  if (contact[key] && /example|placeholder|test/i.test(contact[key])) failures.push(`Fake-looking contact value: ${key}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Validated ${languages.length} locales, ${sections.length} sections, research structure, and contact integrity.`);
