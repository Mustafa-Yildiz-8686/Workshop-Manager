# Workshop Manager

A mobile-first web app for tracking workshop equipment, team checkouts, and inventory — across multiple devices in real time.

## Features

### Core
- **Dashboard** — Overview of all assets, overdue items, due-soon alerts, and currently checked-out equipment grouped by team
- **Asset Management** — Add, edit, and delete equipment with optional photos; organize by color-coded categories
- **Checkout System** — Step-by-step wizard for checking out items to team members, with configurable durations and notes
- **Return Tracking** — Mark items as returned from the dashboard or checkout screen
- **Team Management** — Create teams, add/remove members, view per-team checkout history
- **History** — Full checkout history with filters by team and status (active, returned, overdue)

### Multi-Workshop
- Run multiple workshops side by side (e.g. Workshop A and Workshop B)
- Each workshop has its own independent inventory and categories
- Teams are shared across all workshops
- Switch between workshops from the top navigation dropdown

### Real-Time Sync
- Connect multiple devices using a 6-character **room code**
- All changes (checkouts, returns, new assets, teams) sync instantly across all connected devices
- Sync is **write-protected when offline** — you can browse but not modify data without a connection
- Room codes persist across page refreshes — reconnects automatically

### Other
- **Dark / Light Theme** — Toggle between dark and light mode, preference is persisted
- **English / Turkish** — Full UI translation with one-click toggle
- **Export / Import** — Backup and restore all data as a JSON file
- **PWA** — Installable on Android and iOS, works fully offline when not syncing
- **First-Run Wizard** — Guided setup for new users

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later

### Development

```bash
git clone https://github.com/YOUR_USERNAME/Workshop-Manager.git
cd Workshop-Manager
npm install
npm run dev
```

Open `http://localhost:5173/Workshop-Manager/` in your browser.

### Access from Mobile (same WiFi)

```bash
npm run dev -- --host
```

Then open `http://<your-computer-ip>:5173/Workshop-Manager/` on your phone.

### Build & Deploy

```bash
# Build
npm run build

# Deploy to GitHub Pages
npx gh-pages -d dist
```

### Install as App (PWA)

1. Open the deployed URL on your phone
2. **Android:** Tap the install banner or Menu → "Add to Home Screen"
3. **iOS:** Tap Share → "Add to Home Screen"

---

## How Sync Works

1. Open **Settings → Sync** and authenticate
2. One device creates a **room** and gets a 6-character code (e.g. `A7X3K9`)
3. Share that code with other devices
4. Other devices go to **Settings → Sync**, authenticate, and join with the code
5. All devices are now in sync — changes appear on all screens within 1–2 seconds
6. To stop syncing, tap the room code pill in the top bar → Disconnect

**Offline behaviour:** When a synced device loses internet, a red "Offline" badge appears and all write operations (checkout, return, add) are temporarily disabled. Everything becomes available again when the connection is restored.

---

## Project Structure

```
src/
├── components/
│   ├── AdminPanel.jsx      # Admin panel for managing sync rooms
│   ├── Assets.jsx          # Asset management screen
│   ├── Checkout.jsx        # Checkout / return wizard
│   ├── Dashboard.jsx       # Main dashboard
│   ├── FirstRunWizard.jsx  # First-run setup wizard
│   ├── History.jsx         # Checkout history
│   ├── Teams.jsx           # Team management
│   ├── UI.jsx              # Shared components (Modal, Toast, Button, etc.)
│   └── WorkshopSwitcher.jsx # Workshop switcher dropdown
├── firebase.js             # Firebase initialization
├── useFirebaseSync.js      # Real-time sync hook
├── helpers.js              # Utility functions, seed data, migrations
├── i18n.js                 # Translations (EN + TR)
├── App.jsx                 # Root: state, routing, theme, settings
├── index.css               # Global styles and theme tokens
└── main.jsx                # React entry point
```

---

## Tech Stack

| | |
|---|---|
| **React 18** | UI framework |
| **Vite 5** | Build tool and dev server |
| **Firebase Realtime Database** | Real-time cloud sync |
| **vite-plugin-pwa** | Service worker + PWA manifest |
| **Lucide React** | Icons |
| **localStorage** | Offline data cache |
| **Web Crypto API** | Password hashing (SHA-256) |

---

## License

MIT
