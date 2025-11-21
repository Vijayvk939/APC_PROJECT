# Agape Pentecostal Church - Website

A modern, responsive website for Agape Pentecostal Church built with React, TypeScript, and Vite.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Available Scripts](#available-scripts)
- [Folder Structure Details](#folder-structure-details)

## 🔧 Prerequisites

- **Node.js**: Version 18.x or higher (recommended: 18.0.0+)
- **npm**: Version 9.x or higher (comes with Node.js)
- **Git**: For version control

### Check Your Node Version

```bash
node --version
```

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/)

## 🚀 Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd APC_PROJECT
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

   This will install all required packages listed in `package.json`.

## ▶️ Running the Project

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at:
- **Local**: `http://localhost:5173`
- **Network**: The terminal will display the network URL

The dev server includes:
- Hot Module Replacement (HMR) - changes reflect instantly
- Fast refresh for React components
- Source maps for debugging

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` folder.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code for linting errors:

```bash
npm run lint
```

## 📁 Project Structure

```
APC_PROJECT/
├── public/                 # Static assets served as-is
│   ├── images/            # Image assets (Events, Gallery, etc.)
│   └── favicon.ico        # Site favicon
│
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── features/      # Feature-specific components
│   │   │   └── events/
│   │   │       ├── SpecialPrayerCard.tsx
│   │   │       └── index.ts
│   │   ├── layout/        # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   └── sections/      # Page sections
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Contact.tsx
│   │       ├── Events.tsx
│   │       ├── Gallery.tsx
│   │       ├── Leadership.tsx
│   │       ├── VideoSection.tsx
│   │       ├── WorshipServices.tsx
│   │       └── index.ts
│   │
│   ├── data/              # Data management
│   │   ├── json/          # JSON data files
│   │   │   ├── events.json
│   │   │   ├── videos.json
│   │   │   └── contact.json
│   │   ├── loaders/       # TypeScript loaders for JSON
│   │   │   ├── events.ts
│   │   │   ├── videos.ts
│   │   │   └── contact.ts
│   │   ├── events.ts      # Re-exports (backward compatible)
│   │   ├── videos.ts      # Re-exports (backward compatible)
│   │   └── contact.ts     # Re-exports (backward compatible)
│   │
│   ├── types/             # TypeScript type definitions
│   │   ├── events.ts
│   │   ├── videos.ts
│   │   ├── contact.ts
│   │   └── index.ts
│   │
│   ├── lib/               # Utility functions
│   │   └── utils.ts       # Helper functions (cn, etc.)
│   │
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
│
├── dist/                  # Production build output (generated)
│
├── node_modules/          # Dependencies (generated)
│
├── .gitignore            # Git ignore rules
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── package-lock.json     # Locked dependency versions
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # TypeScript app config
├── tsconfig.node.json    # TypeScript node config
└── vite.config.ts        # Vite configuration
```

## 🛠️ Tech Stack

### Core
- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.2** - Build tool and dev server

### Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.18** - CSS vendor prefixing

### UI & Animation
- **Framer Motion 12.23.24** - Animation library
- **Lucide React 0.344.0** - Icon library
- **Three.js 0.181.2** - 3D graphics (if used)

### Utilities
- **clsx 2.1.1** - Conditional class names
- **tailwind-merge 3.4.0** - Merge Tailwind classes

### Development Tools
- **ESLint 9.9.1** - Code linting
- **TypeScript ESLint 8.3.0** - TypeScript linting

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📂 Folder Structure Details

### `/src/components/`

#### `layout/`
- **Header.tsx** - Navigation header component
- **Footer.tsx** - Footer component with links and info

#### `sections/`
- **Hero.tsx** - Hero/banner section
- **About.tsx** - About the church section
- **Contact.tsx** - Contact information and maps
- **Events.tsx** - Events and prayer programs
- **Gallery.tsx** - Photo gallery
- **Leadership.tsx** - Church leadership team
- **VideoSection.tsx** - YouTube videos section
- **WorshipServices.tsx** - Worship service information

#### `features/events/`
- **SpecialPrayerCard.tsx** - Carousel card component for special events

### `/src/data/`

#### `json/`
Raw JSON data files that can be easily edited:
- **events.json** - Events and prayer programs data
- **videos.json** - Video content data
- **contact.json** - Contact information

#### `loaders/`
TypeScript loaders that:
- Import JSON files
- Map icon names to icon components
- Map image paths to imported images
- Export typed data

### `/src/types/`
TypeScript type definitions for:
- Events data structures
- Video data structures
- Contact data structures

### `/src/lib/`
Utility functions:
- **utils.ts** - Helper functions like `cn()` for class name merging

## 🔄 Data Management

The project uses a JSON-based data structure:

1. **Edit JSON files** in `src/data/json/` to update content
2. **Loaders** in `src/data/loaders/` process JSON and add:
   - Icon components (from string names)
   - Image imports (from paths)
3. **Re-exports** in `src/data/` maintain backward compatibility

### Example: Adding a New Event

1. Edit `src/data/json/events.json`
2. Add event object to `specialPrayerEvents` array
3. The loader automatically processes it
4. Component uses the data automatically

## 🎨 Styling

- **Tailwind CSS** is used for all styling
- Custom colors are defined in `tailwind.config.js`
- Global styles are in `src/index.css`
- Responsive breakpoints: `xs`, `sm`, `md`, `lg`, `xl`

## 🔗 Path Aliases

The project uses path aliases for cleaner imports:

```typescript
import { something } from '@/components/...'
import { data } from '@/data/...'
import { type } from '@/types/...'
```

Configured in:
- `vite.config.ts` - For Vite
- `tsconfig.app.json` - For TypeScript

## 📝 Notes

- The development server runs on port **5173** by default
- Hot Module Replacement (HMR) is enabled for instant updates
- TypeScript strict mode is enabled
- All components are written in TypeScript
- Images should be placed in `public/images/` directory

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically try the next available port.

### Module Not Found Errors
Run `npm install` to ensure all dependencies are installed.

### Type Errors
Run `npm run lint` to check for TypeScript errors.

## 📄 License

[Add your license information here]

## 👥 Contributors

[Add contributor information here]

---

**Built with ❤️ for Agape Pentecostal Church**

