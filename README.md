# Unified Islamic Website

**بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ**

A professional Islamic knowledge platform dedicated to sharing authentic Sunni Hanafi teachings, scholarly articles, books, and educational resources for the Muslim Ummah.

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-Islamic%20Educational%20Free-blue)

---

## Table of Contents

- [Overview](#overview)
- [Core Principles](#core-principles)
- [Pages](#pages)
- [Directory Structure](#directory-structure)
- [Design System](#design-system)
- [Technical Stack](#technical-stack)
- [Performance](#performance)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License & Permissions](#license--permissions)
- [Contact](#contact)

---

## Overview

This website serves as a comprehensive platform for Islamic education, offering:

- Books and PDFs on Sunni Islam and the Hanafi madhhab
- Scholarly articles covering theology, jurisprudence, and spirituality
- Curated learning resources for students and seekers
- A Q&A repository addressing common questions
- Guides on the Hanafi school of thought

The content is presented with clarity and authenticity, making complex Islamic topics accessible to ordinary Muslims, students, and scholars alike.

---

## Core Principles

| Principle | Description |
|-----------|-------------|
| **Clarity** | Simple, clear language that makes Islamic topics accessible |
| **Authenticity** | Content grounded in Qur'an, Sunnah, and qualified scholarship |
| **Humility** | Service to the Ummah without self-promotion |
| **Respect** | Honoring diversity within Islam while avoiding polemics |

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage — welcome message, featured content, and site navigation |
| `about.html` | About the author and mission of the platform |
| `books.html` | Islamic books library with direct PDF download links |
| `articles.html` | Articles and essays organized by category |
| `ahmadrazakhan.html` | Dedicated page on Imam Ahmad Raza Khan's contributions |
| `hanafi.html` | Comprehensive guide to the Hanafi madhhab |
| `questions.html` | Frequently asked questions with detailed scholarly answers |
| `additionalResources.html` | Supplementary learning materials and references |
| `resources.html` | Recommended books, curricula, and study guidance |
| `Awliya_Allah.html` | Biographies and teachings of Awliya Allah (saints) |
| `links.html` | Curated external links to Islamic knowledge platforms |
| `contact.html` | Contact form and email for inquiries |

---

## Directory Structure

```
unified-islamic-website/
├── index.html                  # Homepage
├── about.html                  # About page
├── books.html                  # Books library
├── articles.html               # Articles listing
├── hanafi.html                 # Hanafi madhhab guide
├── questions.html              # Q&A page
├── resources.html              # Learning resources
├── additionalResources.html    # Supplementary resources
├── ahmadrazakhan.html          # Imam Ahmad Raza Khan page
├── Awliya_Allah.html           # Saints biographies
├── links.html                  # External links
├── contact.html                # Contact page
│
├── style.css                   # Global stylesheet
├── script.js                   # JavaScript (light effects, interactions)
│
├── assets/                     # Static assets (images, icons)
├── .github/workflows/          # CI/CD configuration
├── .vercel/                    # Vercel deployment config
├── .gitignore                  # Git ignore rules
├── README.md                   # This file
└── LICENSE.md                  # License information
```

---

## Design System

### Color Palette

| Token | Color | Hex | Usage |
|-------|-------|-----|-------|
| Primary | Green | `#2e7d32` | Headings, accents, buttons |
| Secondary | Rose | `#c2185b` | Highlights, hover states |
| Background | Off-white | `#faf6f0` | Page background |
| Text | Dark | `#1a1a1a` | Body text |
| Glass | Frosted | `rgba(255,255,255,0.1)` | Glassmorphism cards |

### Typography

- **Headings**: Georgia (serif) — scholarly, authoritative feel
- **Body**: Baskerville / Palatino (serif) — optimal readability for long-form content
- **Arabic**: Traditional Arabic / Scheherazade — authentic script rendering

### Visual Effects

- **Noor Effect**: Falling light rays symbolizing divine guidance (CSS animation)
- **Glassmorphism**: Frosted-glass card components with backdrop blur
- **Gradient Overlays**: Smooth transitions between color accents
- **Subtle Shadows**: Depth without visual noise

---

## Technical Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Flexbox, Grid, animations, custom properties, backdrop filters
- **Vanilla JavaScript** — Pure JS for DOM interactions and effects (no frameworks)
- **Zero Dependencies** — Fully self-contained, no npm, no build step

### Browser Support

| Browser | Support |
|---------|---------|
| Chrome (latest) | ✅ Full |
| Firefox (latest) | ✅ Full |
| Safari (latest) | ✅ Full |
| Edge (latest) | ✅ Full |
| Chrome Mobile | ✅ Full |
| iOS Safari | ✅ Full |
| No JavaScript | ✅ Graceful degradation |

---

## Performance

| Metric | Value |
|--------|-------|
| Page size | ~20–30 KB per page |
| Load time | < 1s on average connection |
| Mobile score | 95+ PageSpeed Insights |
| SEO | Semantic HTML, proper heading hierarchy, meta tags |

---

## Getting Started

### Local Development

This is a static website — no build tools or package managers required.

1. **Clone the repository**
   ```bash
   git clone https://github.com/AshfaqAIML/Sunni-Islamic-Website.git
   cd Sunni-Islamic-Website
   ```

2. **Open locally**
   - Open `index.html` directly in your browser, or
   - Serve with any HTTP server (e.g., `python -m http.server 8000`, `npx serve .`)

3. **Edit pages**
   - Modify any `.html` file for content changes
   - Edit `style.css` for visual changes
   - Edit `script.js` for behavior changes

### Project Configuration

- `.gitignore` — Excludes OS files, editor artifacts, and `.vercel/` directory
- `.github/workflows/static.yml` — GitHub Actions for automatic deployment to GitHub Pages
- `.vercel/project.json` — Vercel project binding for production deployment

---

## Deployment

### Vercel (Recommended)

The project is pre-configured for Vercel deployment:

1. Push to `https://github.com/AshfaqAIML/Sunni-Islamic-Website`
2. Connect the repository in [Vercel Dashboard](https://vercel.com)
3. Vercel auto-detects static HTML — no configuration needed
4. Live at: `https://unified-islamic-website.vercel.app`

### GitHub Pages

A GitHub Actions workflow (`.github/workflows/static.yml`) is included for automatic deployment to GitHub Pages. Enable it in your repository's Pages settings.

### Any Static Host

Since the site is pure HTML/CSS/JS, it can be deployed to any static host:
- Netlify, Cloudflare Pages, Render, Firebase Hosting
- Any traditional web server (Apache, Nginx)
- Direct FTP upload

---

## Contributing

Contributions that align with Ahl al-Sunnah wa al-Jama'ah are welcome.

### Guidelines

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Ensure content is authentic and properly attributed
4. Maintain consistent code style and design language
5. Submit a pull request with a clear description of changes

### Content Standards

- All content must be grounded in Qur'an, authentic Sunnah, and qualified scholarship
- Sources and references should be cited where applicable
- Language should be respectful, clear, and accessible
- Avoid polemics and sectarian disputes

---

## License & Permissions

All content on this website is:

- **Free for personal and educational use** — Download, read, share
- **Attribution requested** — Credit the original author when redistributing
- **Not for commercial use** without explicit written permission

PDF books and articles are provided freely for the sake of Allah.

---

## Contact

- **Live Website**: [https://unified-islamic-website.vercel.app](https://unified-islamic-website.vercel.app)
- **Repository**: [https://github.com/AshfaqAIML/Sunni-Islamic-Website](https://github.com/AshfaqAIML/Sunni-Islamic-Website)

---

## Du'a

> اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا
>
> *O Allah, benefit me with what You have taught me, teach me what will benefit me, and increase me in knowledge.*

> رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ
>
> *Our Lord, accept this from us. Indeed, You are the Hearing, the Knowing.*

---

**Assalamu alaikum wa rahmatullahi wa barakatuh**

*Last updated: July 2026*
