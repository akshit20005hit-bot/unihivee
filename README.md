# UniHive 🐝

> **Your Campus. Your People. Your Space.**
> A privacy-first, verified university social & mutual-support community.

---

## Project Structure

```
unihive/
├── frontend/          # React (Vite) + Tailwind + Framer Motion
│   └── src/
│       ├── components/
│       │   ├── ui/            # UniHiveLogo, SplashScreen, Skeleton, Toast, Modal, Pill
│       │   ├── layout/        # AppShell, Sidebar, BottomNav, TopHeader
│       │   └── campus-pulse/  # SnapsBar, SnapsViewer, PulsePostCard, PostUploadModal
│       └── pages/
│           ├── LandingPage.jsx
│           ├── CampusPulsePage.jsx
│           ├── HelpHivePage.jsx
│           ├── ConnectionHivePage.jsx
│           ├── PrivateChatPage.jsx
│           ├── CampusEventsPage.jsx
│           ├── ShareShelfPage.jsx
│           ├── CommunitiesPage.jsx
│           ├── LostFoundPage.jsx
│           └── PrivacyCenterPage.jsx
└── backend/           # Node.js + Express + MongoDB + Socket.IO
    ├── server.js
    ├── models/        # All Mongoose schemas
    ├── routes/        # REST API endpoints
    ├── middleware/    # JWT auth
    └── socket/        # Socket.IO handlers
```

---

## Quick Start

### Frontend
```bash
cd frontend
pnpm install        # or npm install
pnpm dev            # starts on http://localhost:5173
```

### Backend
```bash
cd backend
cp .env.example .env   # fill in your secrets
npm install
npm run dev             # starts on http://localhost:5000
```

> **MongoDB:** Make sure MongoDB is running locally (`mongod`) or update `MONGO_URI` in `.env` to point to MongoDB Atlas.

---

## Color Palette
| Token | Color | Usage |
|---|---|---|
| Electric Violet | `#6547F5` | Primary brand, active nav, CTAs |
| Deep Indigo | `#241650` | Dark headers, landing bg |
| Sunshine Yellow | `#FFD166` | Events, highlights, featured |
| Coral Pop | `#FF6B6B` | Connections, social interactions |
| Fresh Mint | `#64DDB5` | Help Hive, success, verified |
| Sky Blue | `#63B9FF` | ShareShelf, academic info |
| Canvas | `#F8F7FC` | App background |

---

## Modules
1. **Campus Pulse** — 24h Snaps + scrapbook feed with Private Circle / Campus-Wide audience control
2. **Help Hive** — Anonymous Q&A with Mutual Reveal identity workflow
3. **Connection Hive** — Interest-based discovery with icebreakers
4. **Private Chat** — Consent-gated, alias-only messaging with Mutual Reveal
5. **Campus Events** — Poster wall with "Join With Me" badges
6. **ShareShelf** — Borrow/lend campus resources
7. **Communities** — Club spaces with feeds
8. **Lost & Found** — Visual board with secure return coordination
9. **Privacy Center** — Dual-identity architecture controls
