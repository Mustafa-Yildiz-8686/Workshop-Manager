# Workshop Manager

A mobile-first web application for tracking workshop equipment and team checkouts. Built with React + Vite + Tailwind CSS.

## Features

- **Dashboard** — Overview of all assets, overdue items, due-soon alerts, and currently checked-out equipment grouped by team.
- **Asset Management** — Add, edit, delete equipment with optional photos. Organize by categories with color coding.
- **Checkout System** — Step-by-step wizard for checking out items to team members, with configurable durations and notes.
- **Team Management** — Create/delete teams, add/remove members, view team-specific checkouts.
- **History** — Full checkout history with filters by team and status (active, returned, overdue).
- **Dark / Light Theme** — Toggle between dark and light mode. Preference is persisted.
- **Multi-language** — English and Turkish (Türkçe) support with one-click toggle.
- **First-Run Wizard** — Guided setup for new users to configure teams, members, and equipment.
- **Export / Import** — Backup and restore all data as a JSON file.
- **PWA** — Installable on your phone, works fully offline.
- **Offline-Ready** — All data stored in localStorage, no backend required.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/Workshop-Manager.git
cd Workshop-Manager

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Access from Mobile (on same WiFi)

```bash
npm run dev -- --host
```

Then open `http://<your-computer-ip>:5173` on your phone.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy to any static hosting service.

### Deploy to GitHub Pages (free hosting)

```bash
# 1. Create a repo on GitHub
# 2. Push your code
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/Workshop-Manager.git
git push -u origin main

# 3. Go to repo Settings → Pages → Source: GitHub Actions
# 4. Or use the gh-pages npm package:
npm install -D gh-pages
npx gh-pages -d dist
```

### Install on Phone (PWA)

1. Open the deployed URL on your phone's browser
2. **Android:** Tap the "Install" banner or Menu → "Add to Home Screen"
3. **iOS:** Tap Share → "Add to Home Screen"
4. The app now works fully offline — no internet needed!

## Project Structure

```
Workshop-Manager/
├── public/                   # Static assets
├── src/
│   ├── components/
│   │   ├── UI.jsx            # Reusable components (Modal, Toast, Button, etc.)
│   │   ├── Dashboard.jsx     # Dashboard screen
│   │   ├── Assets.jsx        # Asset management screen
│   │   ├── Checkout.jsx      # Checkout/return wizard
│   │   ├── Teams.jsx         # Team management screen
│   │   ├── History.jsx       # Checkout history screen
│   │   └── FirstRunWizard.jsx # First-run setup wizard
│   ├── helpers.js            # Utility functions and seed data
│   ├── i18n.js               # Translations (EN + TR)
│   ├── App.jsx               # Main app: routing, state, theme
│   ├── index.css             # Global styles + theme variables
│   └── main.jsx              # React entry point
├── index.html                # HTML shell
├── package.json
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── postcss.config.js         # PostCSS configuration
```

## Tech Stack

- **React 18** — UI framework
- **Vite 5** — Build tool and dev server
- **vite-plugin-pwa** — Service worker and manifest generation
- **Tailwind CSS 3** — Utility-first CSS
- **Lucide React** — Icon library
- **localStorage** — Data persistence

## License

MIT
