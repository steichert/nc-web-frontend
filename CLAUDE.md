# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Angular 14 frontend for the New Creation church website. Uses Angular Universal (SSR via `@nguniversal/express-engine`), Bootstrap 5, and `ngx-toastr`. Targets Node v19.8.1 / npm v9.5.1.

## Commands

- `npm run start` — dev server on `http://localhost:8080` (note: port is configured in `angular.json`, not the Angular default 4200)
- `npm run mstart` — same but bound to `0.0.0.0` so the dev server is reachable from other devices on the LAN (used for mobile testing)
- `npm run build` — standard Angular build
- `npm run build-prod` — production build with `--base-href=/` (used for live deploys)
- `npm run build-staging` — production build with `--base-href=/development/` (Netlify staging)
- `npm run dev:ssr` / `npm run build:ssr` / `npm run serve:ssr` — Universal (SSR) workflows
- `npm run prerender` — static prerender via `ng run nc-web-frontend:prerender`
- `npm test` — Karma + Jasmine test runner (watch mode). Run a single spec by appending Karma flags, e.g. `npx ng test --include='**/api.service.spec.ts'`

## Architecture

### Routing & pages
`src/app/app-routing.module.ts` is the single source of truth for routes. A few non-obvious patterns to know about:

- `/services`, `/giving`, and `/contact` all resolve to `HomePageComponent` and pass a `data: { page_section: ... }` value. The home page reads this to scroll to the corresponding section — these are not separate pages.
- Several feature areas (`visitors`, `nc-kidz`, `sermons`, `sermon`) use child routes with their own `**` redirects back to the section root.
- A top-level `**` wildcard redirects unknown URLs to `/`. Keep it last when adding routes.

### Code layout
- `src/app/pages/` — route-level page components, one folder per top-level route. `nc-kids/` and `sermon-series-page/` contain multiple sub-page components.
- `src/app/common/` — shared UI building blocks (`navbar`, `footer`, `contact-modal`, `event-card`, `loading-spinner`, `paragraph-content`, `social-media-icons`).
- `src/app/services/` — feature services. `api/api.service.ts` is the only HTTP boundary; all backend calls go through it.
- `src/app/domain/` — TypeScript model interfaces (`Event`, `Sermon`, `Post`, `Page`, `Child`, `Visitor`).
- `src/app/resources/`, `src/app/utils/` — static data and helpers.

### API + environments
- All HTTP calls live in `ApiService` and hit `environment.ncApiUrl` (the New Creation backend, currently a Heroku app). When adding a new backend call, add it as a method on `ApiService` rather than calling `HttpClient` from a component.
- `src/environments/` has `environment.ts` (dev), `environment.prod.ts`, `environment.test.ts`. Each imports email config from a matching folder under `src/config/{dev,prod,test}/`. Angular's `fileReplacements` (in `angular.json`) swaps these per build configuration.

### SSR
The app is built with Angular Universal. `server.ts` is the Express SSR entrypoint and `src/app/app.server.module.ts` is the server module. Be careful with browser-only APIs (`window`, `document`, `localStorage`, jQuery) in components — guard them with `isPlatformBrowser` or they will break SSR/prerender builds.

## Branching & deploy

- Branch off `master` with descriptive names (`feature/...`, `bugfix/...`) and open PRs against `master`.
- Merging to `development` auto-deploys to the Netlify staging site (`https://newcreation-development.netlify.app/`).
- Merging to `master` triggers `.github/workflows/main.yml` which builds and deploys to the live server.
