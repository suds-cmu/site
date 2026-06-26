# SUDS Website

The official website for **Students Using Data for Social Good** at Carnegie Mellon University.

Built with [Next.js](https://nextjs.org/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Project Structure

```
app/              # Pages and layouts (Next.js App Router)
components/       # Reusable React components
content/          # Site content (markdown projects, JSON data)
lib/              # Content loading helpers
public/           # Static assets (images, logos, favicon)
```

## Adding Content

### New project

1. Create a markdown file in `content/projects/your-project.md`
2. Add frontmatter at the top:

```yaml
---
title: "Project Title"
partner: "Partner Name"
partnerDescription: "Brief description of the partner organization."
keywords: ["Keyword 1", "Keyword 2"]
timeframe: "2025 Spring"
image: "/logos/partner.png"
---
```

3. Write the project content in markdown below the frontmatter.

### Update board members

Edit `content/board/members.json` and add photos to `public/board/`.

### Update client logos

Edit `content/clients/clients.json` and add logos to `public/clients/`.

## Deploy

The site deploys automatically to GitHub Pages on pushes to `master`.
