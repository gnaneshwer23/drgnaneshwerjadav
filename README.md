# DrJadav — Dr Gnaneshwer Jadav

Personal site: [gnaneshwerjadav.com](https://gnaneshwerjadav.com)

Product and project leader working across HealthTech, EdTech, and AI-enabled systems. PhD immunology. Based in London.

## Stack

Vite, React, TypeScript, Tailwind CSS, shadcn/ui.

## Local

```sh
npm i
npm run dev
```

Chat (`/chat` and the floating guide) needs the Vercel AI Gateway. For a working `/api/chat` locally:

```sh
vercel env pull .env.local
vercel dev
```

Or copy `.env.example` to `.env.local` and fill the keys below. Do not commit `.env` or `.env.local`.

On Vercel, enable AI Gateway on the project. OIDC auth is automatic in production. Optional local fallback: `AI_GATEWAY_API_KEY` in `.env.local`.

## Storefront env (paste these)

Add the same `VITE_*` keys to `.env.local` **and** the Vercel project (Production + Preview). The chat API reads `process.env`; the site reads Vite env at build time.

| Key | What to paste |
| --- | --- |
| `VITE_CONSULT_MINUTES` | Length, e.g. `45` |
| `VITE_CONSULT_PRICE` | Number only, e.g. `250` |
| `VITE_CONSULT_CURRENCY` | `GBP` |
| `VITE_CALENDAR_URL` | Google Calendar appointment schedule `https://…` |
| `VITE_STRIPE_CONSULT_URL` | Stripe Payment Link `https://buy.stripe.com/…` |
| `VITE_GUMROAD_*` | One Gumroad `https://…` per book, or leave empty / `coming-next-week` |

Books: `VITE_GUMROAD_BUILD_BEFORE_YOU_SCALE`, `VITE_GUMROAD_DECIDE_THEN_BUILD`, `VITE_GUMROAD_DELIVER_VALUE`, `VITE_GUMROAD_DHARMA_IN_THE_DARK`, `VITE_GUMROAD_HUMAN_OS`, `VITE_GUMROAD_MEANINGFUL_LIFE`, `VITE_GUMROAD_BIOLOGY_OF_OPPORTUNITY`, `VITE_GUMROAD_COMPLETE_PRODUCT`. Optional framework: `VITE_GUMROAD_FRAMEWORK_DECIDE_THEN_BUILD`.

Empty buy URLs show “Goes live next week”. The chatbot will not invent Amazon links.

## Deploy

Linked to Vercel project `drgnsneshwerjadav`. Pushes to `main` create deployments.

Homepage is the personal portfolio. Chat is at [`/chat`](https://gnaneshwerjadav.com/chat) and as a floating widget. Shop URLs (`/book`, `/books`, `/about`, `/frameworks`) remain available.
