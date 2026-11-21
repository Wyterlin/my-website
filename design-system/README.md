# ChristianWS Design System

Personal resume/portfolio website design system for **Christian Wyterlin Silveira** — IT Analyst, SAP Business One specialist, and aspiring Full-Stack Developer.

## Sources

- **Codebase:** GitHub — `Wyterlin/my-website` (private repo, React + Create React App)
- **Design context:** Derived from source CSS and component files

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Language:** Portuguese (Brazilian) — the site is written in pt-BR throughout
- **Person:** First-person singular ("Sou um profissional…", "Tenho experiência…")
- **Tone:** Professional but approachable; highlights growth mindset and technical precision
- **Casing:** Section headings are UPPERCASE (enforced via `text-transform: uppercase` in CSS)
- **Emoji:** Not used in the UI; the brand mark `</> ChristianW$` uses code-style characters as a personality expression
- **Numbers/symbols:** The `$` in the brand name and `</>` tag notation signal a developer identity
- **Tagline:** *"Conectando código, café e criatividade."* (Connecting code, coffee and creativity.)

### Copy Examples
- About intro: *"Sou um profissional da área de Tecnologia da Informação em constante evolução…"*
- Footer brand: `</> ChristianW$`
- Navigation: single-word section labels (Perfil, Experiência, Tecnologias, Contato)

### Key Content Sections
| Section | Heading | Notes |
|---|---|---|
| Profile | Sobre | About + illustration side by side |
| Experience | Experiências | Cards with company + description |
| Education | Formação Acadêmica | Degrees and certifications |
| Technologies | Tecnologias Utilizadas | Logo grid with hover effects |
| Contact | Contato | Email form via EmailJS |
| Footer | — | Brand, links, social |

---

## VISUAL FOUNDATIONS

### Colors
| Token | Value | Usage |
|---|---|---|
| `--color-black` | `#000000` | Primary, body text, nav bg |
| `--color-royal-blue` | `#4169E1` | Accent, nav underline, mobile menu button, hover highlights |
| `--color-white` | `#ffffff` | Secondary, nav bg, light sections |
| `--color-dark-surface` | `#0d1117` | Footer background (GitHub-inspired dark) |
| `--color-border` | `#21262d` | Footer border, subtle separators |
| `--color-muted` | `#c9d1d9` | Footer body text, secondary text |
| `--color-gray` | `#6e7681` | Form labels, subdued text |
| `--color-gold` | `#C9A84C` | Decorative accent (requested; not in original codebase) |

### Typography
- **Display/Headings:** Montserrat (Google Fonts) — Bold, UPPERCASE. Sizes: h1 60px, h2 60px, h3 50px, h4 45px, h5 40px, h6 35px
- **Body:** Open Sans (Google Fonts) — Regular, 20px base (html set to 62.5% → 1rem = 10px, body = 2rem)
- **Code/Brand marks:** Raw characters (`</>`, `$`) inline in text

### Backgrounds
- **Dark sections:** SVG tiled pattern (`bg-black.svg`) on near-black; or CSS gradient `linear-gradient(to bottom, #000000, #0d1117)`
- **Light sections:** SVG tiled pattern (`bg-white.svg`) on white
- **Tech section:** Full-bleed photo (`technologies.jpg`) with `background-attachment: fixed` parallax effect and a dark inner shadow overlay
- **No gradients** beyond the subtle dark-to-darker linear gradient in the contact section

### Spacing
- `--gap: 3rem` — base unit for section padding and grid gaps
- Sections are `min-height: 100vh` — full viewport height
- `section-content` max-width: `200rem` (intentionally uncapped), padded by `--gap`

### Layout
- Fixed top navigation bar (white bg, black border-bottom)
- Full-screen sections stacked vertically
- Two-column profile grid (text + illustration)
- 2-column logo grid for technologies (left/right)
- Fixed back-to-top button (bottom-right, circular)

### Borders & Radii
- Nav border-bottom: `0.1rem solid black`
- Experience card: `border-radius: 3rem` (very rounded container)
- Back-to-top button: `border-radius: 50%` (circle)
- Mobile menu hamburger button: `border-radius: 10%`

### Shadows
- Experience card: `background: rgba(0,0,0,0.7)` dark translucent overlay (no box-shadow)
- Technologies section: `box-shadow: inset 50px 50px 50px -50px rgba(0,0,0,0.5)`

### Animations & Transitions
- Nav link underline: grows from center on hover (`transition: all 300ms ease-in-out`)
- Technology logos: non-hovered logos fade to `opacity: 0.3` on grid hover; hovered card `scale(1.1)`; `transition: 0.5s ease`
- Back-to-top button: grows from 5rem→6rem on hover (`transition: all 200ms ease-in-out`)
- Form inputs: border-image gradient on focus; label floats up (`transition: 0.2s`)
- Mobile menu toggle: CSS checkbox trick, no JS

### Hover/Press States
- Nav links: Royal Blue underline slides in from center
- Logo cards: non-hovered siblings dim to 30% opacity; hovered card scales up 10%
- Footer links: color transitions to primary (Royal Blue) on hover
- Back-to-top: size expands

### Corner Radii
- Cards: `3rem` (large pill-like)
- Back-to-top button: `50%` (circle)
- Mobile menu button: `10%` (slight)
- Form inputs: none (flat underline style)

### Forms
- Floating label style — label sits inside field until focused, then rises above
- Border-bottom only (no full border)
- Focus state: gradient border-image (black → Royal Blue direction)
- Submit button: outlined, SVG stroke-dasharray animation on hover

### Imagery
- Illustration: `sobre.svg` — a custom SVG of a computer/code scene (light, abstract)
- Technology logos: PNG icons for JS, Python, React, HTML, CSS, MySQL
- Backgrounds: SVG tiled patterns (black + white variants), photography for tech section

---

## ICONOGRAPHY

- **No icon font or icon library** used in the original codebase
- **Technology logos** are PNG files in `assets/images/` (JS, Python, React, HTML, CSS, MySQL)
- **Unicode characters** are used as lightweight icons: `&#11205;` (⮍) for the back-to-top button arrow
- **Code-art brand mark:** `</> ChristianW$` — developer-identity branding via typed characters
- **Mobile hamburger:** CSS `content: '☰'` and close `content: '✖'` — Unicode-only, no SVG
- **No emoji** used anywhere in the interface
- Asset copies are in `assets/images/`

---

## FILE INDEX

```
README.md                    ← This file
colors_and_type.css          ← CSS variables: colors, typography tokens
SKILL.md                     ← Agent skill definition

assets/
  images/
    sobre.svg                ← Profile illustration (SVG)
    bg-black.svg             ← Dark section tiled background
    (technology logos →  see ui_kits/website/)

preview/
  colors-base.html           ← Base color palette swatches
  colors-semantic.html       ← Semantic color usage
  type-scale.html            ← Heading type scale
  type-body.html             ← Body & UI text specimens
  spacing-tokens.html        ← Spacing & gap tokens
  components-nav.html        ← Navigation bar component
  components-buttons.html    ← Button styles
  components-forms.html      ← Form input styles
  components-cards.html      ← Card & section styles
  components-footer.html     ← Footer component

ui_kits/
  website/
    index.html               ← Full interactive website prototype
    README.md                ← UI kit notes
```
