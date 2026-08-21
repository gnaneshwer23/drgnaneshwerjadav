# Dr Gnaneshwer Jadav

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

On Vercel, enable AI Gateway on the project. OIDC auth is automatic in production. Optional local fallback: `AI_GATEWAY_API_KEY` in `.env.local` (do not commit it).

## Deploy

Linked to Vercel project `drgnsneshwerjadav`. Pushes to `main` create deployments.

Accountable Hindustan lives at [`/accountable-hindustan`](https://gnaneshwerjadav.com/accountable-hindustan).
