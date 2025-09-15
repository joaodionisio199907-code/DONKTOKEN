Donk Token — Website
Files:
- index.html
- styles.css
- script.js
- assets/hero.jpg (design reference image)

HOW TO USE:
1. Unzip the archive and open index.html in a browser.
2. Replace social links and sponsor links with real URLs.
3. Replace placeholder values (price, supply, links) with real data from Pump.fun / DexScreener.
4. For production, host on static host (Vercel, Netlify) and secure assets.

Notes:
- The box opening is a front-end demo only. Connect to backend or smart-contract events to enable real reward distribution.
- Add real sponsor logos into assets/ and update the partners section.


DEPLOYMENT
- For Netlify: connect the repo and set publish directory to '/'. Add NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID in repo secrets for CI.
- For Vercel: import the repo and use the provided vercel.json (static site). No build command required.
- GitHub Actions template included: .github/workflows/deploy_netlify.yml (requires secrets).