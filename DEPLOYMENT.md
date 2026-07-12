# Deployment

## GitHub Pages preview

The workflow `.github/workflows/deploy-pages.yml` runs on every push to `main`. It installs locked dependencies, checks quality, builds all routes, runs tests and deploys `dist/` to GitHub Pages.

Before the first deployment, open the GitHub repository’s **Settings → Pages** and select **GitHub Actions** as the source. The default workflow uses the project path:

`https://ing-tj.github.io/yihao-personal-website/`

Do not assume this URL is live until the workflow has completed successfully.

## Custom subdomain

Planned domain: `yihao.shjingshuiji.cn`

1. Confirm the Pages preview is healthy.
2. In the DNS provider, create a CNAME record:
   - Host: `yihao`
   - Target: `ing-tj.github.io`
3. In GitHub **Settings → Pages**, enter `yihao.shjingshuiji.cn` as the custom domain.
4. Wait for DNS verification and enable **Enforce HTTPS** only when GitHub allows it.
5. Create repository variable `CUSTOM_DOMAIN_ENABLED=true`.
6. Copy `public/CNAME.example` to `public/CNAME`, commit, and deploy.
7. Verify all eight language homes, section routes, canonical URLs, sitemap, assets, HTTPS and browser back behavior.

This project does not modify DNS automatically and does not log in to a domain provider.

## Rollback

If the custom domain fails, remove `public/CNAME`, set `CUSTOM_DOMAIN_ENABLED=false`, and redeploy the last known good commit. Never force-push as a deployment fix.
