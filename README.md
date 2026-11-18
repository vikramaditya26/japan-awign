# Awign — Japan onboarding site

Japanese-first (JA / EN) training and onboarding page for the household egocentric video programme in Japan. Built from the LATAM site (same structure, design and scripts).

Static HTML/CSS/JS. No build step. Deploy as its own Vercel project so the LATAM site stays untouched.

## What changed from LATAM

- Languages: Japanese (default) and English. Portuguese and Spanish removed.
- WhatsApp replaced by a LINE Official Account button (green LINE button).
- Japan copy: household tasks only, privacy rules for homes (family, mail, nameplates), head mount reimbursed after 20 approved hours, tax FAQ.
- Privacy and Terms rewritten for Japan (JA + EN). Need a legal review before going public.
- Font: Noto Sans JP added.

## "Coming soon" (準備中) — fill these in `i18n.js` → `CONFIG`

| Key | What to put | Until then the page shows |
|---|---|---|
| `ORG_CODE` | Japan Minute organization code (from the Fusion team) | 組織コード：準備中 |
| `COMMUNITY_URL` | LINE add-friend link. Set to `https://line.me/R/ti/p/@775evhxu` (account @775evhxu). A `lin.ee` link from LINE Official Account Manager works too | Grey "LINE公式アカウント（準備中）" button |
| `LINE_QR` | QR image of `COMMUNITY_URL`, shown to desktop visitors only | No QR |
| `PAY_ACCOUNTS` | Payout options, e.g. `[{ name: "銀行振込", preferred: true }]` | お支払い方法：準備中 |
| `SOCIAL` | Instagram / X links for the Japan account | Icons hidden |

Also still marked 準備中 in the copy (`ja` / `en` blocks): hourly rate, minimum payout, head-mount reimbursement cap, Japanese versions of the two main videos. Search `準備中` and `coming soon` to find them.

## Videos

Same files as LATAM. The hero and Minute walkthrough use the English recordings until Japanese-subtitled versions exist; swap paths in `CONFIG.VIDEO`.

## Local

```bash
npx serve .
```

## LINE flow

Visitors go: ad → this site → "LINEで友だち追加" → LINE greeting with screening questions → 1:1 chat, where the team sends the organization code. The code is deliberately not shown on the site.

- Phones: green LINE button in the hero, in the "はじめ方" box, and a sticky bar at the bottom.
- Desktop (wide screen with a mouse): the same buttons plus a QR code to scan with the LINE app.

If `COMMUNITY_URL` changes, regenerate the QR:

```bash
pip install segno
python -c "import segno; segno.make('NEW_URL', error='m').save('assets/line-qr.svg', border=2)"
```
