# Yihao Bian Personal Website

Yihao Bian（卞逸豪）的多语言个人网站，以“国际青年学者 + 环境科技创业者”为定位，通过编辑式排版呈现科研、论文、创业、荣誉、国际交流、生活与联系方式。

计划正式域名：`https://yihao.shjingshuiji.cn`。当前代码已经为该域名做好准备，但在 DNS 与 GitHub Pages 自定义域名验证完成前，不应宣称正式域名可用，也不要将二维码送印。

## 技术架构

- Astro 7 静态输出：路由、SEO、sitemap、语义化页面
- TypeScript：数据、内容与路由类型约束
- 本地 CSS 设计系统：无外部字体、无 CDN、无追踪脚本
- GitHub Actions + GitHub Pages：`main` 分支自动构建与部署

首页和全部栏目均为语义化 HTML，不依赖 WebGL，JavaScript 关闭后仍能浏览主要内容与导航。

## 安装与运行

```bash
npm install
npm run dev
```

本地构建与预览：

```bash
npm run build
npm run preview
```

质量检查：

```bash
npm run lint
npm run typecheck
npm run build
npm test
```

## 内容维护

- 姓名、单位、公司与站点信息：`src/data/site.ts`
- 联系方式与简历路径：`src/data/contact.config.json`
- 论文：`src/data/publications.ts`
- 科研结构：`src/data/research.ts`
- 项目结构：`src/data/ventures.ts`
- 荣誉：`src/data/honors.ts` 与各语言文件
- 国际交流：`src/data/global.ts` 与各语言文件
- 生活内容：`src/data/life.ts`
- 八语文本：`src/content/locales/`

### 替换正式照片

将经过授权的透明背景或遮罩人物照片导出为 WebP，放在：

`public/assets/profile/yihao-portrait.webp`

当前首页使用无具体面孔的编辑式抽象占位，不包含生成或伪造的人脸。正式照片到位后，构建过程会自动启用该图片；仍需检查手机端裁切、对比度和文件大小。

### 增加论文

在 `src/data/publications.ts` 的数组中增加记录。必须填写真实的 `title`、`authors`、`journal`、`year`、`status` 等字段；DOI 与 URL 未确认时保持空字符串，不能填写示例值。

### 增加项目

先在 `src/data/ventures.ts` 填写可核实字段，再在八个语言文件中补充公开表述。项目进度和影响必须有本人确认。

### 增加语言

1. 在 `src/data/site.ts` 的 `LANGUAGES` 和 `LANGUAGE_NAMES` 中登记语言。
2. 复制 `src/content/locales/en.ts`，完整翻译并设置正确 `dir`。
3. 在 `src/content/locales/index.ts` 注册。
4. 更新验证脚本中的语言列表，并执行全部检查。

## 动效与无障碍

- 页面只使用轻量淡入、上移与下划线过渡。
- 系统开启 `prefers-reduced-motion` 时自动禁用位移动效。
- 所有导航与内容均使用语义化 HTML 和键盘可访问链接。
- 英文与简体中文为当前公开语言；其余语言文件与路由保留供未来复核。

## 二维码与电子名片

```bash
PUBLIC_SITE_URL=https://yihao.shjingshuiji.cn npm run generate:qr
npm run generate:vcard
```

输出位于 `public/qr/` 与 `public/contact/`。在 DNS、HTTPS、移动端实机和最终内容都通过验收前，二维码不得送印。详见 `QR_AND_BUSINESS_CARD_GUIDE.md`。

## 部署与子域名

推送 `main` 后，GitHub Actions 会执行安装、检查、构建、测试与 Pages 部署。默认先使用 GitHub Pages 项目路径。正式启用自定义域名前需要完成 DNS CNAME、Pages 域名验证，并设置仓库变量 `CUSTOM_DOMAIN_ENABLED=true`。详见 `DEPLOYMENT.md`。

## 仍需本人提供

正式肖像、完整中英文履历与 CV、全部论文清单、科研图片和成果关联、项目事实与链接、国际交流详情、生活兴趣、邮箱与社交账号、公司及学校正式多语译名确认。完整清单见 `CONTENT_TODO.md`。
