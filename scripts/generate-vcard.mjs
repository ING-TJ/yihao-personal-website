import fs from 'node:fs/promises';
import path from 'node:path';

const config = JSON.parse(await fs.readFile(path.resolve('src/data/contact.config.json'), 'utf8'));
const escape = (value) => String(value).replace(/([,;\\])/g, '\\$1').replace(/\n/g, '\\n');
const rows = [
  'BEGIN:VCARD',
  'VERSION:4.0',
  `FN:${escape(config.fullName)}`,
  `N:${escape(config.fullName.split(' ').at(-1) || '')};${escape(config.fullName.split(' ')[0] || '')};;;`,
  config.fullNameZh && `X-ALT-FN:${escape(config.fullNameZh)}`,
  config.organization && `ORG:${escape(config.organization)}`,
  config.title && `TITLE:${escape(config.title)}`,
  config.academicEmail && `EMAIL;TYPE=work:${escape(config.academicEmail)}`,
  config.companyEmail && `EMAIL;TYPE=work:${escape(config.companyEmail)}`,
  config.phone && `TEL;TYPE=cell:${escape(config.phone)}`,
  config.wechat && `X-SOCIALPROFILE;TYPE=wechat:${escape(config.wechat)}`,
  config.instagram && `URL;TYPE=instagram:${escape(config.instagram)}`,
  config.linkedin && `URL;TYPE=linkedin:${escape(config.linkedin)}`,
  config.github && `URL;TYPE=github:${escape(config.github)}`,
  config.orcid && `URL;TYPE=orcid:${escape(config.orcid)}`,
  config.researchGate && `URL;TYPE=researchgate:${escape(config.researchGate)}`,
  'URL:https://yihao.shjingshuiji.cn',
  'END:VCARD',
].filter(Boolean);

await fs.mkdir(path.resolve('public/contact'), { recursive: true });
await fs.writeFile(path.resolve('public/contact/yihao-bian.vcf'), `${rows.join('\r\n')}\r\n`, 'utf8');
console.log('vCard generated from src/data/contact.config.json');
