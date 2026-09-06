# Maganti Group Website

A modern, responsive corporate website for Maganti Group, LLC - a technology consulting and staffing solutions provider delivering end-to-end talent solutions to clients across financial services, healthcare, banking, retail, and telecom.

🌐 **Live site:** [https://magantigroupllc.com/](https://magantigroupllc.com/)

## Overview

This is a Next.js 16 project built with React 19, TypeScript, and Tailwind CSS. The website showcases Maganti Group's services, leadership team, industry expertise, open positions, and contact information with a sophisticated design featuring scroll animations and modern UI components. It includes two email-backed forms: a contact inquiry form and a job application form with resume upload.

## Tech Stack

- **Framework**: Next.js 16.0.10 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4.1.9
- **Animation**: Framer Motion 12.23.26
- **UI Components**: Radix UI primitives + shadcn/ui
- **Icons**: Lucide React
- **Email**: Nodemailer (Gmail SMTP)
- **Notifications**: Sonner (toast)
- **Forms**: Controlled React state in the contact/jobs forms; React Hook Form + Zod available via the shadcn `form` component
- **Themes**: next-themes (provider included; not currently wired into the UI)

## Project Structure

```
.
├── app/                       # Next.js App Router
│   ├── api/                   # API routes
│   │   ├── contact/
│   │   │   └── route.ts       # Contact form POST handler (nodemailer)
│   │   └── jobs/
│   │       └── route.ts       # Job application POST handler (nodemailer + resume attachment)
│   ├── page.tsx               # Main landing page (composes all sections)
│   ├── layout.tsx             # Root layout: fonts, Toaster, Analytics
│   └── globals.css            # Global styles & Tailwind
├── components/                # React components
│   ├── ui/                    # shadcn/ui components (55+)
│   ├── about-section.tsx
│   ├── animated-text.tsx      # Per-character hero headline animation
│   ├── contact-section.tsx
│   ├── footer-nav-link.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── industries-section.tsx
│   ├── jobs-section.tsx       # Featured jobs + application form/modal
│   ├── leadership-section.tsx # Leadership team grid
│   ├── mission-section.tsx
│   ├── science-section.tsx
│   ├── scroll-blur-text.tsx   # Scroll-driven de-blur heading
│   ├── scroll-to-top-on-load.tsx
│   ├── testimonials-section.tsx
│   └── theme-provider.tsx
├── hooks/                     # Custom React hooks (use-mobile, use-toast)
├── lib/                       # Utility functions (cn helper)
├── public/                    # Static assets (logos, video, leadership photos)
│   ├── leadership/            # Leadership headshots
│   └── Testinomials_PICS/     # Testimonial author photos
├── next.config.mjs
├── package.json
└── tsconfig.json
```

## Key Features

### Sections

The landing page ([app/page.tsx](app/page.tsx)) stacks the following sections top to bottom:

1. **Header** - Fixed translucent navigation with anchor links, mobile menu, and a "Get Jobs" CTA
2. **Hero** - Background video with scroll-driven zoom, animated headline, and call-to-action buttons
3. **About** - Company story and mission
4. **Leadership** - Leadership team grid with photos, roles, bios, and LinkedIn links
5. **Industries** - Industry expertise showcase
6. **Mission** - Talent solutions presented in a carousel
7. **Science** - Our-approach principles with animated count-up stats
8. **Testimonials** - Auto-scrolling marquee of team-member testimonials with photo/icon avatars and pause-on-hover
9. **Jobs** - Featured open positions with a details modal and resume-upload application form
10. **Contact** - Contact form with email integration (nodemailer), info cards, and an embedded map
11. **Footer** - Service/company/resource links, contact details, and social links

### Animations

- Scroll-triggered reveal animations (shared `IntersectionObserver` pattern across sections)
- Hero background video that zooms and rounds its corners as you scroll
- Per-character headline animation (`AnimatedText`)
- Scroll-driven word-by-word de-blur headings (`ScrollBlurText`)
- Animated count-up statistics in the Science section
- Auto-scrolling testimonials marquee with pause-on-hover (photo avatars with a user-icon fallback)


## API Routes

Both routes send email through nodemailer using Gmail SMTP and return JSON responses.

### POST `/api/contact`

Handles contact form submissions (JSON body).

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)",
  "company": "string (optional)",
  "message": "string (required)"
}
```

**Responses:**
- `200` - Email sent successfully
- `400` - Missing required fields
- `500` - Server error / failed to send email

### POST `/api/jobs`

Handles job application submissions (multipart form data, so a resume file can be attached).

**Form Fields:**
- `name` (required)
- `email` (required)
- `jobTitle` (required)
- `phone`, `jobLocation`, `jobType`, `coverLetter` (optional)
- `resume` (file upload — PDF/DOC/DOCX — attached to the email)

**Responses:**
- `200` - Application submitted successfully
- `400` - Missing required fields
- `500` - Server error / failed to submit application

**Both routes feature:**
- Styled HTML email template with plain-text fallback
- Server-side validation
- Toast notifications via sonner on the client


## Getting Started

### Prerequisites
- Node.js 18+
- pnpm or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd magantigroupllc

# Install dependencies
pnpm install
# or
npm install
```

### Development

```bash
# Start development server
pnpm dev
# or
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Create production build
pnpm build
# or
npm run build

# Start production server
pnpm start
# or
npm start
```

## Scripts

- `dev` - Start development server
- `build` - Create production build
- `start` - Start production server
- `lint` - Run ESLint


## Design System

- **Typography**: Fraunces serif for headings, DM Sans for body
- **Colors**: Primary, secondary, accent, and muted theme tokens
- **Spacing**: Consistent spacing scale
- **Border Radius**: Rounded `2xl`/`3xl` for cards
- **Shadows**: Subtle shadows with primary-color accents

## Company Info

**Maganti Group, LLC**
- Website: [https://magantigroupllc.com/](https://magantigroupllc.com/)
- Headquarters: Connecticut, USA (21 State Street, Waterbury, CT 06702)
- Technology Hubs: India
- Services: Technology consulting, IT staffing, staff augmentation, custom software support
- Industries: Financial services, Healthcare, Banking, Retail, Telecom

## License

Private - All rights reserved
