import fs from 'node:fs/promises';
import path from 'node:path';
import QRCode from 'qrcode';

const siteUrl = process.env.PUBLIC_SITE_URL || 'https://yihao.shjingshuiji.cn';
const outputDir = path.resolve('public/qr');
await fs.mkdir(outputDir, { recursive: true });

const options = {
  errorCorrectionLevel: 'M',
  margin: 4,
  color: { dark: '#000000', light: '#ffffff' },
};

const writeQr = (filename, type) => new Promise((resolve, reject) => {
  QRCode.toFile(path.join(outputDir, filename), siteUrl, { ...options, type, width: 1200 }, (error) => {
    if (error) reject(error);
    else resolve(undefined);
  });
});

await writeQr('yihao-personal-site.svg', 'svg');
await writeQr('yihao-personal-site.png', 'png');
console.log(`QR generated for ${siteUrl}`);
