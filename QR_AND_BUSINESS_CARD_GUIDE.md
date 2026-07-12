# QR and Business Card Guide

## Generate

```bash
PUBLIC_SITE_URL=https://yihao.shjingshuiji.cn npm run generate:qr
```

Outputs:

- `public/qr/yihao-personal-site.svg` for professional print layout
- `public/qr/yihao-personal-site.png` for ordinary preview

The QR is black on white, uses a four-module quiet zone and contains no center logo. The URL comes from `PUBLIC_SITE_URL`.

## Print rules

**Do not send the QR code to print until all launch checks pass.** DNS propagation, GitHub Pages custom-domain verification, HTTPS, the final portrait/content and real-phone scans must be complete first.

For print, preserve the white quiet zone, avoid recoloring, do not crop, and print no smaller than the vendor’s tested minimum. Test iOS and Android cameras from the actual printed proof under normal indoor lighting.

## vCard

Edit `src/data/contact.config.json`, then run:

```bash
npm run generate:vcard
```

Empty fields are omitted. Never publish private phone or account identifiers without explicit approval.
