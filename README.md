# Suckdown.com

Public-safe static landing page for the Suck Down July 4 weekend.

Live preview: https://eitanz123.github.io/suckdown-com/

## Notes

- No attendee roster, address, or private logistics are published.
- `suckdown.com` currently points to GoDaddy/NameFind parking DNS (`NS1.NAMEFIND.COM`, `NS2.NAMEFIND.COM`), so the site is deployed before DNS is transferred.
- Static files only: `index.html`, `styles.css`, `script.js`, `favicon.svg`.

## DNS cutover

When GoDaddy access is available, either:

1. Point the apex to GitHub Pages with A records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. Point `www` to `eitanz123.github.io` with a CNAME.
3. Then set `suckdown.com` as the custom domain in GitHub Pages.
