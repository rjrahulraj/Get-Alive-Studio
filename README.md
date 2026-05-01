# Get Alive Studio - Marketing & Lead Generation Website

A production-ready, high-performance marketing and lead generation website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🌍 Project Overview

**Get Alive Studio** is a global digital studio website designed to:
- Build trust instantly
- Serve non-English speaking users
- Generate high-quality international leads
- Present the studio as a modern, global, product-focused company

## ✨ Key Features

### Core Features (All Phases)
- **Fully Responsive Design** - Mobile-first approach, optimized for all devices
- **Fast Performance** - Optimized images, lazy loading, minimal JS bundle
- **Lead Generation** - Multiple contact methods (form, WhatsApp, Telegram, email)
- **Global Ready** - Simple English, visual-first design, multi-language support ready
- **SEO Optimized** - Clean URLs, metadata, Open Graph tags, high Lighthouse scores
- **Smooth Animations** - Framer Motion for purposeful, smooth transitions
- **Production Quality** - TypeScript, ESLint, scalable architecture

### Phase 2 Features (NEW ✨)
- **Blog / Insights** - Article publishing with search, filtering, and reading time
- **Team Page** - Team member profiles with expertise areas and social links
- **Certifications** - Trust badges, partnerships, awards, and security info
- **Advanced CTAs** - Sticky navigation, multiple call-to-action sections throughout
- **Email Validation** - Robust form validation and error handling
- **Newsletter** - Subscription ready (integrate with service like Mailchimp)

### Phase 3 Features (Structure Ready 🚀)
- **Region-Specific Pages** - Config ready for 6+ regional variations
- **Multi-Language Support** - Structure ready for 7+ languages
- **Regional Contact Info** - Different WhatsApp/Telegram/email per region
- **Regional Payment Methods** - Support for local payment options
- **hreflang Tags** - SEO-friendly language/region handling
- **Advanced Analytics** - Ready for regional performance tracking

## 📄 Pages

### **Phase 1 (MVP - COMPLETE)**

#### 1. **Home** (`/`)
- Hero section with strong positioning
- What we do (split view for founders & enterprises)
- Services overview
- Why global markets matter (with statistics)
- Case study highlights
- Testimonials carousel
- Multiple CTA sections
- Footer with social links

#### 2. **Services** (`/services`)
- Grid of all services with icons
- Expandable detailed service cards
- What's included & outcomes for each service
- Process/workflow explanation
- CTA sections

#### 3. **Case Studies** (`/case-studies`)
- Case study grid with quick info
- Featured case study with detailed breakdown
- Impact statistics
- Dynamic case study detail pages (`/case-studies/[slug]`)

#### 4. **Contact** (`/contact`)
- Simple project brief form
- Multiple contact methods (email, WhatsApp, Telegram)
- FAQ section
- Form validation & submission
- Success/error messaging

### **Phase 2 (GROWTH - COMPLETE ✨)**

#### 5. **Blog / Insights** (`/blog`)
- Blog posts listing with search & filtering
- Category-based filtering
- Read time estimates
- Author information & dates
- Newsletter subscription
- Dynamic blog post pages (`/blog/[slug]`)

#### 6. **Team** (`/team`)
- Team member profiles with photos
- Expertise areas for each member
- Team values section (6 core values)
- Company origin story
- Hiring/careers section

#### 7. **Certifications & Trust** (`/certifications`)
- 10+ certifications & compliance badges
- Technology partnerships
- Awards & recognition section
- Data security section with features
- Impact statistics

### **Phase 3 (SCALING - READY FOR IMPLEMENTATION)**

#### 8. **Region-Specific Landing Pages** (Structure Ready)
- Global routes: `/latam`, `/south-asia`, `/southeast-asia`, `/mena`, `/turkey`
- Region-specific contact info
- Local payment methods
- Regional team members
- See `REGION_SETUP.md` for implementation guide

#### 9. **Multi-Language Support** (Structure Ready)
- Support for 7+ languages: English, Spanish, Portuguese, Hindi, Indonesian, Turkish, Arabic
- Language-specific routes
- Hreflang tags for SEO
- See `I18N_SETUP.md` for implementation guide

## � Phase Coverage & Roadmap

### ✅ Phase 1: MVP (COMPLETE)
- [x] Home page with hero, services, testimonials
- [x] Services page with all 8 services
- [x] Case studies page with featured study
- [x] Contact page with form and multiple CTAs
- [x] Contact form API endpoint
- [x] Floating WhatsApp button
- [x] Sticky navigation with CTAs
- [x] Responsive mobile design
- [x] SEO optimization
- [x] Performance optimization

### ✅ Phase 2: Growth (COMPLETE ✨ NEW)
- [x] Blog / Insights page with search & filtering
- [x] Dynamic blog post detail pages
- [x] Team page with member profiles
- [x] Team values section
- [x] Company story section
- [x] Certifications & trust page
- [x] Awards & recognition section
- [x] Security & data protection section
- [x] Newsletter subscription
- [x] Updated navigation with all pages

### 🚀 Phase 3: Scaling (READY FOR IMPLEMENTATION)
- [x] Region configuration structure
- [x] Multi-language translation structure
- [x] Region setup guide (REGION_SETUP.md)
- [x] i18n setup guide (I18N_SETUP.md)
- [ ] Dynamic region-specific pages (ready to implement)
- [ ] Multi-language routes (ready to implement)
- [ ] Regional contact info integration
- [ ] Language switcher component (template ready)
- [ ] Advanced analytics setup

## �🎨 Design System

### Color Palette
- **Brand Colors**: Blue gradient (sky-500 to sky-700)
- **Neutral**: Gray scale for text and backgrounds
- **Accents**: Green for WhatsApp, Blue for Telegram

### Components
- **Navbar** - Sticky, mobile-responsive with menu toggle
- **Hero** - Large hero section with motion animations
- **ServiceCard** - Reusable service display component
- **CaseStudyCard** - Case study preview with image
- **TestimonialCard** - Client testimonials with ratings
- **CTASection** - Reusable call-to-action sections
- **Footer** - Rich footer with multiple link sections
- **FloatingWhatsApp** - Sticky WhatsApp button

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact form API
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── case-studies/
│   │   ├── page.tsx            # Case studies list
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic case study detail
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── blog/                   # Phase 2: Blog pages
│   │   ├── page.tsx            # Blog listing with search
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic blog post detail
│   ├── team/                   # Phase 2: Team page
│   │   └── page.tsx            # Team member profiles
│   └── certifications/         # Phase 2: Certifications
│       └── page.tsx            # Trust & certifications
│
├── components/
│   ├── Navbar.tsx              # Navigation component
│   ├── Hero.tsx                # Hero section
│   ├── ServiceCard.tsx         # Service card component
│   ├── CaseStudyCard.tsx       # Case study card
│   ├── TestimonialCard.tsx     # Testimonial component
│   ├── CTASection.tsx          # Reusable CTA section
│   ├── Footer.tsx              # Footer component
│   └── FloatingWhatsApp.tsx    # Floating WhatsApp button
│
├── config/                     # Phase 3: Configuration
│   ├── regions.ts              # Region-specific config
│   └── i18n.ts                 # i18n translations
│
└── styles/                     # Additional styles (if needed)

public/
├── locales/                    # Phase 3: Translation files (future)
│   ├── en/
│   ├── es/
│   ├── pt/
│   └── ...

Configuration Files:
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS theme
├── next.config.ts              # Next.js configuration
├── postcss.config.js           # PostCSS plugins
├── .eslintrc.json              # ESLint rules
├── package.json                # Dependencies
└── .gitignore                  # Git ignore rules

Documentation:
├── README.md                   # Main documentation
├── REGION_SETUP.md             # Phase 3: Region setup guide
├── I18N_SETUP.md               # Phase 3: i18n setup guide
└── .env.example                # Environment variables template
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/pnpm/yarn/bun

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration Files

- **`next.config.ts`** - Next.js configuration
- **`tsconfig.json`** - TypeScript configuration
- **`tailwind.config.ts`** - Tailwind CSS theme
- **`postcss.config.mjs`** - PostCSS plugins
- **`.eslintrc.json`** - ESLint rules

## 📱 Key Features in Detail

### Contact Form API
- Endpoint: `/api/contact` (POST)
- Validates input (name, email, project description required)
- Stores lead data (ready for MongoDB/email integration)
- Returns success/error response

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu on mobile
- Touch-friendly buttons and spacing

### Performance Optimizations
- Image lazy loading
- Code splitting with dynamic imports
- Optimized CSS with Tailwind
- Minimal JavaScript bundle
- Fast FCP (First Contentful Paint)

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- ARIA labels where needed
- Color contrast compliance
- Focus states on interactive elements

## 🌍 Localization Support

The site is built with multi-language support in mind:
- Simple, clear English (non-native friendly)
- Icons and visuals for clarity
- Ready for i18n integration
- Regional SEO structure

## 📊 SEO Optimizations

- Meta tags on all pages
- Open Graph images for social sharing
- Structured data ready
- Clean URL structure
- XML sitemap ready
- Mobile-friendly design
- Fast page load times

## ️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Linting**: ESLint
- **Package Manager**: npm

## 📝 Customization Guide

### Update Contact Information
Edit component files and replace:
- WhatsApp number: `https://wa.me/YOUR_NUMBER`
- Telegram handle: `https://t.me/YOUR_HANDLE`
- Email: `hello@getalive.studio`

### Update Services
Edit `src/app/page.tsx` and `src/app/services/page.tsx` to update:
- Service titles and descriptions
- Features list
- Icons (from Lucide React)

### Update Case Studies
Edit `src/app/case-studies/[slug]/page.tsx` and add new case studies to the data object.

### Brand Colors
Edit `tailwind.config.ts` to customize the color scheme.


Built with ❤️ by Alive Studio
