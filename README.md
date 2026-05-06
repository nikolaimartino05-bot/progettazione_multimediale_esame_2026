# Portfolio di Nikolai Martino

Sito web personale per presentare biografia, progetti creativi e contatti di Nikolai Martino.

---

## Obiettivo

Realizzare un portfolio online che racconta chi sono, mostra i lavori più significativi (Erasmus, Liceo Artistico, esperienze personali) e permette a chiunque di contattarmi. Il sito punta a comunicare creatività e cura estetica attraverso un design pulito e coerente.

---

## Stack tecnologico

| Tecnologia     | Utilizzo                              |
|----------------|---------------------------------------|
| HTML5          | Struttura semantica delle pagine      |
| CSS3           | Layout, animazioni, responsive design |
| JavaScript ES6 | Interattività (menu, effetti, form)   |
| Google Fonts   | Tipografia personalizzata             |

---

## Struttura delle pagine

| File              | Descrizione                                                  |
|-------------------|--------------------------------------------------------------|
| `index.html`      | Home page — presentazione rapida e link alle sezioni         |
| `bio.html`        | Biografia — chi sono, interessi, percorso formativo          |
| `portfolio.html`  | Griglia dei lavori — anteprima di tutti i progetti           |
| `lavoro-1.html`   | Dettaglio progetto: Erasmus 2023/2024                        |
| `lavoro-2.html`   | Dettaglio progetto: Liceo Artistico Caravaggio               |
| `lavoro-3.html`   | Dettaglio progetto: Da Enzo al 29                            |
| `contatti.html`   | Form di contatto e link ai profili social                    |

---

## Struttura delle cartelle

```
portfolio/
├── css/        → Fogli di stile (style.css unico file, variabili CSS, mobile-first)
├── img/        → Immagini del sito (foto profilo, anteprime progetti, assets grafici)
└── js/         → Script JavaScript (main.js: menu hamburger, micro-interazioni)
```

---

## Palette colori

| Variabile CSS        | HEX | Utilizzo                              |
|----------------------|-----|---------------------------------------|
| `--color-primary`    |     | Colore principale del brand           |
| `--color-accent`     |     | Accento, CTA, hover                   |
| `--color-bg`         |     | Sfondo generale                       |
| `--color-text`       |     | Testo principale                      |
| `--color-surface`    |     | Sfondo card e sezioni alternate       |
| `--color-muted`      |     | Testi secondari, didascalie           |

---

## Font scelti

| Font | Peso | Utilizzo | Link Google Fonts |
|------|------|----------|-------------------|
|      |      | Titoli (h1, h2) | |
|      |      | Testo corrente, UI | |

---

## Comandi utili

**Aprire il progetto in locale (senza server):**

```bash
# Apri direttamente il file nel browser
open portfolio/index.html
```

**Aprire con un server locale (consigliato per evitare problemi CORS):**

```bash
# Con Python 3
cd portfolio && python3 -m http.server 8080
# poi visita http://localhost:8080
```

**Aprire in Cursor:**

```bash
cursor /Users/nikolaimartino/Desktop/portfolio
```

---

## Note per l'agente

- Lingua del sito: **italiano**
- Tutti i file HTML condividono lo stesso `style.css` in `/css/`
- Il file `main.js` va incluso prima della chiusura `</body>`
- Le immagini vanno sempre ottimizzate prima di inserirle in `/img/`
- Il file `.cursorrules` contiene le regole di stile per la generazione del codice
