# Parthiv Portfolio

A recruiter-focused personal portfolio for **Parthiv**, a 2026 Computer Science and Engineering graduate. The site presents his documented experience across software development, machine learning, data/analytics, and IT support, with projects and certifications surfaced early for technical recruiters.

## Professional positioning

The portfolio is intentionally positioned around **entry-level software engineering / IT support readiness with complementary machine-learning and data skills**. This reflects the source documents without narrowing the candidate to a specialization that the documents do not establish as a sole career direction.

## Technology stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- CSS dark mode
- No external APIs, databases, environment variables, or API keys required

## Local installation

Requirements: Node.js 18.17+ recommended.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production build:

```bash
npm run build
npm run start
```

## Project structure

```text
parthiv-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── public/
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## How to customize

Most portfolio content lives in `app/page.tsx`:

- `projects` — featured project cards
- `skills` — grouped skills
- `certifications` — education/training credentials
- Hero and About copy — top-of-page positioning
- Experience, Education, and Contact sections — recruiter-facing details

Global styling is in `app/globals.css`. Tailwind configuration is in `tailwind.config.ts`.

### Adding project links

The source documents did not provide verified GitHub/project URLs, so the current cards intentionally do not contain invented links. Add a `url` field to a project only when you have a real repository or live-demo URL.

### Updating the profile

When new employment, projects, measurable results, or verified links become available, update the relevant data in `app/page.tsx`. Do not add metrics or technologies unless they are supported by the candidate's current materials.

## Content integrity

This portfolio was written from the candidate's supplied resume/application materials. It avoids invented performance metrics, testimonials, employers, responsibilities, and project URLs. Where the materials describe broad internship exposure, the copy remains deliberately non-numeric.
