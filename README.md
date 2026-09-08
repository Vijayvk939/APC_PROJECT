# Agape Pentecostal Church - Website

A modern, high-performance, fully responsive web application for **Agape Pentecostal Church (Vijayawada)** built with React 18, TypeScript, Tailwind CSS, and Vite.

---

## 📋 Table of Contents

- [Features](#-features)
- [Performance & Optimization Highlights](#-performance--optimization-highlights)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running the Project](#-running-the-project)
- [Project Structure](#-project-structure)
- [Data Management](#-data-management)
- [Responsive Design Support](#-responsive-design-support)
- [License](#-license)

---

## ✨ Features

- **⚡ Fast Initial Load**: Route code splitting (`React.lazy` & `Suspense`) and vendor chunk splitting via Vite.
- **🎨 Premium UI/UX**: Dark mode theme with rich crimson `#8B0000` / `#B22222` accents, glassmorphic cards, smooth gradients, and scroll animations.
- **🎥 Fast Background Video**: Compressed 1080p hero loop with `+faststart` MP4 streaming and poster fallback.
- **🖼️ WebP Image Engine**: 100% of images converted to WebP, reducing overall image payload by **81.2%** (saved over 42 MB).
- **📚 Spiritual Library & Books**: Dedicated `/books` page featuring downloadable PDFs and resources.
- **📅 Events & Programs Carousel**: 3D interactive carousel for special prayer events.
- **📹 Sermon & Video Library**: Grid showcase for YouTube sermons and worship songs.
- **📱 100% Fully Responsive**: Pixel-perfect layout across Mobile, Tablet, Laptop, and 4K TV screens.

---

## ⚡ Performance & Optimization Highlights

| Optimization | Description | Impact |
| :--- | :--- | :--- |
| **Image Compression** | Converted all `.png` / `.jpg` assets to optimized `.webp` | **`51.86 MB → 9.74 MB (-81.2%)`** |
| **Video Optimization** | Re-encoded hero background loop, stripped audio, added `+faststart` | **`20.71 MB → 2.47 MB (-88.1%)`** |
| **Route Code-Splitting** | Lazy loaded `/` and `/books` pages in `App.tsx` | Reduced initial JavaScript payload |
| **Vendor Chunking** | Isolated React core & UI libraries in `vite.config.ts` | Permanent browser caching across builds |
| **Package Pruning** | Uninstalled heavy unused libraries (e.g. Three.js) | Saved 600KB+ in node_modules |

---

## 🛠️ Tech Stack

### Core Framework & Routing
- **React 18.3.1** - Component-based UI framework
- **React Router DOM 7.9.6** - Client-side routing (`/` and `/books`)
- **TypeScript 5.5.3** - Type-safe development
- **Vite 5.4.2** - Lightning-fast build tool and dev server

### Styling & Animation
- **Tailwind CSS 3.4.1** - Utility-first CSS engine
- **Framer Motion 12.23.24** - Motion and transition animations
- **Lucide React 0.344.0** - Vector icon system
- **PostCSS & Autoprefixer** - Vendor prefixing & CSS compilation

### Utilities & UX
- **Sonner 2.0.8** - Toast notification system
- **React Helmet Async 2.0.5** - Dynamic `<head>` & SEO meta management
- **Embla Carousel 8.6.0** - Carousel touch gestures

---

## 🔧 Prerequisites

- **Node.js**: `18.0.0` or higher
- **npm**: `9.0.0` or higher
- **Git**: For version control

Check installed versions:
```bash
node --version
npm --version
```

---

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vijayvk939/APC_PROJECT.git
   cd APC_PROJECT
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

---

## ▶️ Running the Project

### Development Mode
Start the Vite dev server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser.

### Build for Production
Generate an optimized production bundle in `dist/`:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Code Linting
Run ESLint to check for code quality and formatting errors:
```bash
npm run lint
```

---

## 📁 Project Structure

```
APC_PROJECT/
├── public/                     # Static public assets
│   ├── favicon.ico            # Favicon icon
│   └── images/                # Optimized WebP image assets & video
│       ├── APC_DASHBOARD-BG.mp4 # Compressed hero loop (2.47 MB)
│       ├── Design/            # Section background overlays (.webp)
│       ├── Events/            # Event banner images (.webp)
│       └── Gallery/           # Gallery photo images (.webp)
│
├── src/                        # Main application source code
│   ├── components/            # React UI components
│   │   ├── features/          # Feature components (SpecialPrayerCard, etc.)
│   │   ├── layout/            # Layout (Header, Footer)
│   │   ├── sections/          # Page sections (Hero, About, Events, VideoSection, Gallery, Contact)
│   │   └── ui/                # Reusable UI primitives (Button, Input, Badge, etc.)
│   │
│   ├── data/                  # Data layer
│   │   ├── json/              # Editable JSON files (events.json, gallery.json, etc.)
│   │   └── loaders/           # TypeScript data mapping loaders
│   │
│   ├── pages/                 # Top-level page routes
│   │   ├── Home.tsx           # Home page
│   │   └── Books.tsx          # Spiritual Books Library page
│   │
│   ├── types/                 # TypeScript interfaces and type definitions
│   ├── lib/                   # Utility helpers (utils.ts)
│   ├── App.tsx                # Main App entry with Router & Lazy Suspense
│   ├── main.tsx               # DOM mounting entry
│   └── index.css              # Global styles & Tailwind imports
│
├── vite.config.ts             # Vite & Rollup manual chunks configuration
├── package.json               # Package dependencies and scripts
└── tsconfig.json              # TypeScript configuration
```

---

## 🔄 Data Management

The application features decoupled content management using **JSON files**:

1. **Edit Content**: Update JSON files under `src/data/json/` (`events.json`, `gallery.json`, `contact.json`, etc.).
2. **Data Loaders**: Loaders in `src/data/loaders/` map icon string keys to Lucide icons and match WebP image paths automatically.
3. **Components**: UI components render typed data seamlessly.

---

## 📱 Responsive Design Support

Tested and optimized across all viewports:
- **Mobile (`< 640px`)**: Touch-friendly navigation menu drawer, stacked action buttons, and responsive text sizing.
- **Tablet (`640px - 1024px`)**: 2-column card layouts and scaling hero heights.
- **Laptop / Desktop (`1024px - 1440px`)**: Multi-column grids with hover micro-animations and full navbar.
- **4K TV & Ultrawide (`> 1440px`)**: Centered max-width container (`max-w-7xl`) preventing distortion.

---

## 📄 License

This project is proprietary software built for **Agape Pentecostal Church (Vijayawada)**.

---

**Built with ❤️ for Agape Pentecostal Church**
