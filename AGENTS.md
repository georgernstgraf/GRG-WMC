# AGENTS.md - Coding Guidelines for GRG-WMC Repository

This is an educational repository for the WMC (Webprogrammierung und Mobile Computing) course in the **Erwachsenenbildung at HTL Spengergasse** (Aufbaulehrgang & Kolleg für Berufstätige für Informatik, Abendform). It contains teaching materials and student projects for HTML5, CSS3, JavaScript, TypeScript and React. In the Tagesschule, web content is covered in the POS subject (colleagues) — this repo is **Abendform only**.

## Knowledge Bootstrap
Before starting any task, read the following files in order:
1. `docs/ai/HANDOFF.md` ← **read first, act on it**
2. `docs/ai/CONVENTIONS.md`
3. `docs/ai/DECISIONS.md`
4. `docs/ai/ARCHITECTURE.md`
5. `docs/ai/PITFALLS.md`
6. `docs/ai/STATE.md`
7. `docs/ai/DOMAIN.md` (if task involves business logic)
8. `docs/ai/HISTORY.md` (reference only — read last, as needed)

If `HANDOFF.md` contains open tasks, complete them before starting
any new work unless the user explicitly says otherwise.

## Project Structure

- **`<N><zug>/`** - Active class folders, semester-numbered: WS `3aaif` → SS `4aaif`, WS `5akif` → SS `6akif` (Form-Serien AIF = Aufbaulehrgang, KIF/CIF = Kolleg; Zug-Präfixe A/B/C — Decoder: `lehrplan/METADATA.md`). One folder per class per school year, renamed at semester break. Created at semester start.
- **archiv/** - Archived classes from past school years, named `YYYY-YY-<klasse>/` (e.g. `archiv/2025-26-4aaif/`)
- **`lehrplan/`** - Curriculum & semester planning (Skill-Konvention, Root): `LEHRPLAN.md` (3-layer: official/school-adaption/didactics), `METADATA.md`, `RIS.md`, `jahr1-einheiten.md` (retrospective), `jahr2-einheiten.md` (plan); generische Block-Klassenordner `34AIF/`, `34KIF/`, `34CIF/`, `56KIF/` (je README + `<BLOCK>.lehrplan.md`); `kompetenzmodule/` (km3–km10); RIS-PDFs `YYYY-MM-DD_BGBl-II-*.pdf`
- **GLOSSAR.md** - Domain abbreviations and terms (Root, nachschlagen vor Namensfragen)
- **Unterlagen/** - Teaching materials (HTML, CSS, JS, HTTP, POSIX)
- **Beispielprojekte/** - Example projects for demonstration
- **Übungen/** - Exercises and assignments
- Each class folder contains dated subfolders (YYYY-MM-DD_topic) with lesson materials

## Technologies Used

- **Jahr 1 (Sem 3+4)**: HTML5, CSS3 (Flexbox, Grid, Nesting), JavaScript (ES6+), TypeScript intro (Deno transpilation)
- **Jahr 2 (Sem 5+6, from 2026/27)**: TypeScript, React + Vite (Node/npm), Mini-Hono reference API (Deno, consumption target only), PWA, Vitest + React Testing Library
- **Backend (subject matter)**: none in WMC — covered by the POS subject (C#, colleagues)
- **Example/demos**: Deno, Hono, HTMX, Prisma
- **Tools**: VS Code, Live Server, W3C Validator, Git

## Build/Test Commands

This repository contains static web files and educational materials. No traditional build system is used.

### VS Code Tasks (if deno.json present)
```bash
# Development server (Deno projects)
deno task dev

# Start production server (Deno projects)
deno task start
```

### Validation
- Use W3C HTML Validator: https://validator.w3.org/
- Use W3C CSS Validator: https://jigsaw.w3.org/css-validator/
- VS Code: Install "W3C Web Validator" extension

### Running a Single HTML File
```bash
# Using Python (if available)
python -m http.server 5500

# Using Node (if available)
npx serve .

# Or use VS Code Live Server extension
```

## Code Style Guidelines

### HTML
- Use semantic HTML5 tags (`<header>`, `<main>`, `<nav>`, `<article>`, `<aside>`, `<footer>`)
- Always include `<meta charset="UTF-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Use `lang="de"` or `lang="en"` attribute on `<html>` tag
- Close all tags properly
- Use lowercase for tag names and attributes
- Indent with 4 spaces

### CSS
- Use CSS Nesting syntax (modern browser support)
- Prefer semantic class names over IDs for styling
- Use lowercase with hyphens for class names (e.g., `.main-container`)
- Organize properties logically: layout → box-model → visual → typography
- Use relative units (`em`, `rem`, `%`, `vh`, `vw`) over pixels where appropriate
- Use CSS Custom Properties (variables) for colors and repeated values
- Always use mobile-first approach with `@media` queries

**CSS Nesting Example:**
```css
.nav {
    display: flex;
    gap: 1rem;
    
    a {
        text-decoration: none;
        
        &:hover {
            color: blue;
        }
    }
}
```

### JavaScript
- Use ES6+ syntax (arrow functions, const/let, template literals)
- Use classes with private fields (`#fieldName`) for encapsulation
- Follow the "7 Punkte" pattern for frontend-only apps:
  1. Application State Object
  2. DOM Node References
  3. DOM Node Creation Functions
  4. Render Function
  5. Event Handlers
  6. Initialization Bindings
  7. Initial Render
- Use camelCase for variables and functions
- Use PascalCase for class names
- Always use strict equality (`===` and `!==`)
- Handle errors with try/catch or throw meaningful Error objects

### File Naming
- HTML files: `index.html` (main), descriptive names for others (e.g., `about.html`)
- CSS files: `style.css` or descriptive names (e.g., `navigation.css`)
- JS files: `app.js` or descriptive names, use `.ts` for TypeScript
- Use lowercase with underscores or hyphens for multi-word names
- Date folders: `YYYY-MM-DD_topic` format

### Git Conventions
- Commit messages in German or English (match existing pattern)
- Use descriptive commit messages: "Add flexbox exercise for 3aaif"
- No commit of `node_modules/`, IDE files, or temporary files
- Students should commit work regularly with meaningful messages

### Responsive Design
- Always test with DevTools mobile view
- Use `@media screen and (max-width: 600px)` for mobile breakpoints
- Ensure touch targets are at least 44x44px
- Test on multiple screen sizes before submission

### Error Handling
- Validate HTML using W3C Validator before committing
- Check CSS syntax in browser DevTools
- Test all links and image paths
- Handle missing resources gracefully

## VS Code Settings

Key settings from `.vscode/settings.json`:
- Deno enabled for TypeScript projects
- ESLint, Prettier, TSLint disabled (educational simplicity)
- JavaScript/TypeScript suggestions disabled for Deno projects

## Peer Review Checklist

When reviewing student projects, check:
- [ ] Live Server URL is accessible
- [ ] No broken links or images
- [ ] 2-5 subpages with logical navigation
- [ ] Responsive behavior in mobile view
- [ ] Flexbox and/or Grid usage evident
- [ ] Proper positioning (sticky nav, overlays)
- [ ] CSS nesting and efficient selectors
- [ ] W3C Validator compliance
- [ ] Consistent design (colors, fonts, spacing)
