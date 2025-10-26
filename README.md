# Miyabi Architect — Vue Portfolio

Wabi-sabi + Zen purity meets digital vanguard. Clean routes with Vue Router, ready for AWS Amplify Hosting.

## Scripts
- `npm install`
- `npm run dev`
- `npm run build`

## Deploy on Amplify
Use this `amplify.yml` and add a rewrite rule in Amplify Console:

**Rewrites and Redirects**
- Source address: `</^[^.]+$|\.(?!(css|gif|ico|jpg|jpeg|js|png|svg|txt|map)$)([^.]+$)/>`
- Target address: `/index.html`
- Type: `200 (Rewrite)`

## Project structure
- Home at `/`
- Project pages under `/projects/:slug`

Content and images live in `src/data/projects.js`. Replace Unsplash links with your own assets if desired.
