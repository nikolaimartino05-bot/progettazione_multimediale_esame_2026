# Changelog — Portfolio di Nikolai Martino

Tutte le modifiche significative al progetto sono documentate in questo file.
Il formato segue [Keep a Changelog](https://keepachangelog.com/it/1.0.0/).

---

## [0.1.0] — 2025-04-15

### Step 1 — Struttura del progetto
- Creata la struttura di cartelle e file: `portfolio/`, `css/`, `img/`, `js/`
- Creati i file vuoti: `index.html`, `bio.html`, `portfolio.html`, `lavoro-1.html`, `lavoro-2.html`, `lavoro-3.html`, `contatti.html`, `css/style.css`, `js/main.js`, `README.md`, `CHANGELOG.md`, `.cursorrules`

### Step 2 — README.md
- Scritto `README.md` con: nome progetto, obiettivo, stack tecnologico, struttura pagine e cartelle, palette colori, font scelti, comandi utili, note per l'agente

### Step 3 — Design system: palette e font
- Definita la palette in `css/style.css` con CSS custom properties in `:root`:
  - `--color-primary: #1A1A2E` (antracite, colore brand)
  - `--color-accent: #E94560` (rosso-rosa, CTA e hover)
  - `--color-bg: #FFFFFF` (sfondo generale)
  - `--color-text: #1A1A2E` (testo principale)
  - `--color-surface: #F4F4F4` (card e sezioni alternate)
  - `--color-muted: #6B6B6B` (testi secondari)
- Definiti i font: **Playfair Display** (700, 900) per i titoli, **Inter** (400, 500) per il corpo
- Aggiunto `<link>` Google Fonts con `preconnect` per ottimizzare il caricamento
- Scritto l'intero foglio di stile base: reset, tipografia, layout, componenti (navbar, button, card, footer), utility

### Step 4 — .cursorrules
- Creato `.cursorrules` con istruzioni persistenti per l'agente: contesto progetto, design system completo con variabili CSS, regole di codice (BEM, HTML semantico, mobile-first, no inline styles), contesto contenuti

### Step 5 — index.html: struttura base
- Scritto `index.html` con: `DOCTYPE`, `lang="it"`, `charset UTF-8`, viewport meta, titolo, meta description SEO, link Google Fonts, link `css/style.css`, script `js/main.js`

### Step 6 — index.html: navbar
- Aggiunta navbar sticky con `<header>` e `<nav>` semantici
- Logo come link, menu con 4 voci (Home, Bio, Portfolio, Contatti)
- Bottone hamburger `☰` con attributi ARIA (`aria-expanded`, `aria-controls`)
- CSS mobile-first: toggle visibile solo sotto 768px, menu collassabile con classe `.is-open`
- Implementata logica toggle in `js/main.js` (vanilla ES6): apertura/chiusura menu, cambio icona ☰/✕, chiusura automatica al click su un link

### Step 7 — index.html: hero
- Aggiunta sezione hero a piena viewport (`min-height: 100vh`)
- Background: immagine picsum.photos + overlay `linear-gradient` con `rgba` di `--color-primary`
- Contenuto centrato: `h1` col nome, `h2` col titolo professionale, CTA verso `portfolio.html`
- Font size fluido con `clamp()` per adattamento mobile/desktop senza breakpoint extra

### Step 8 — index.html: anteprima portfolio e footer
- Aggiunta sezione "Lavori selezionati" con griglia di 3 card (Erasmus 2023/2024, Liceo Artistico Caravaggio, Da Enzo al 29)
- Ogni card: immagine placeholder con `loading="lazy"`, tag categoria, titolo, descrizione, link a pagina dedicata
- Aggiunto bottone "Vedi tutti i lavori" verso `portfolio.html`
- Aggiunto `<footer>` semantico con `role="contentinfo"`
- Responsive grid: 1 colonna a 375px → 2 colonne a 768px → 3 colonne a 1024px
- Corretti breakpoint CSS: mobile-first con `min-width` a 768px e 1024px, fine-tuning sotto 374px
