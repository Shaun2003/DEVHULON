# Devhulon Business & People Solutions

A modern Next.js business website for Devhulon, built to showcase consulting, HR, recruitment, payroll, training, and digital services with a polished, responsive design.

## App Overview

Devhulon is a professional site that presents a consulting and people solutions business with a clean visual system, clear service pages, and a strong brand presence.

The app includes:
- A landing homepage with hero section, feature highlights, service cards, and CTA sections.
- A dedicated Services page with an overview of all offerings.
- Individual service detail pages for specific service categories.
- Responsive layout and mobile-friendly navigation.
- A branded footer with quick links and contact details.
- Custom favicon and site icon support.

## Design and Style

The app is designed with a corporate consulting aesthetic:
- Dark navy, green, and white colour palette.
- Strong typographic hierarchy for headlines, subheadings, and body copy.
- Rounded `border-radius` cards with subtle shadows for content sections.
- Wave-style SVG dividers for smooth transitions between sections.
- Consistent CTA buttons and service list cards.
- Responsive grid layout for desktop and mobile.

## Technology Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- `next/image` for optimized image rendering
- `lucide-react` icons for navigation and UI accents
- Vercel Analytics integration

## Project Structure

- `app/`
  - `layout.tsx` — root layout and global metadata
  - `head.tsx` — favicon and head tags
  - `page.tsx` — homepage
  - `services/page.tsx` — services listing page
  - `services/[slug]/page.tsx` — service detail pages
  - Other core app pages like `about`, `contact`, `industries`, and `resources`
- `components/`
  - `home-hero.tsx` — homepage hero section
  - `page-hero.tsx` — detail page hero component
  - `services-grid.tsx` — service card grid reused on homepage and services page
  - `site-header.tsx` — header navigation
  - `site-footer.tsx` — footer and site links
  - `cta-section.tsx` — call to action section
  - `feature-strip.tsx` — feature highlight strip
  - `contact-form.tsx` — contact form component
  - `ui/button.tsx` — reusable button component
- `lib/`
  - `site-data.ts` — service metadata, industries, and site content arrays
  - `utils.ts` — general helper utilities if needed
- `public/` — static images and icons including logo and favicon assets

## Routes and Pages

The following key routes are available:

- `/` — Homepage
- `/about` — About page
- `/services` — Services overview page
- `/services/business-consulting`
- `/services/human-capital-solutions`
- `/services/recruitment-talent-acquisition`
- `/services/training-development`
- `/services/payroll-hr-compliance`
- `/services/digital-solutions`
- `/industries` — Industries served
- `/resources` — Resource page
- `/contact` — Contact page

## Service Detail Pages

The app includes dedicated detail pages with consistent layout and data for:
- Business Consulting
- Human Capital Solutions
- Recruitment & Talent Acquisition
- Training & Development
- Payroll & HR Compliance
- Digital Solutions

Each service page uses the shared `PageHero` component and is styled with content sections, service lists, benefits, and supporting sidebar copy.

## Running the App

Install dependencies:

```bash
pnpm install
```

Start development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview production build locally:

```bash
pnpm start
```

## Notes

- The favicon and site icon are configured in `app/head.tsx` and `app/layout.tsx`.
- The footer icon is set in `components/site-footer.tsx`.
- Service metadata lives in `lib/site-data.ts`, making it easy to update titles, descriptions, icons, and items.

## Screenshots

You can add screenshot files under `public/` or create a `/screenshots` folder and reference them here.

- `screenshot-homepage.png` — homepage layout
- `screenshot-services.png` — services overview
- `screenshot-service-detail.png` — example service detail page

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a branch for your feature or fix: `git checkout -b feature/your-feature`
3. Make your changes and commit with clear messages.
4. Run `pnpm lint` and `pnpm build` to verify the app.
5. Submit a pull request describing your changes.

### Developer setup

- Install dependencies: `pnpm install`
- Start the development server: `pnpm dev`
- Build for production: `pnpm build`

## Ready for Development

This repository is ready for feature work, design iterations, and content updates. The app compiles and builds successfully, and all major service routes are already implemented.

---

If you want, I can also add a `CHANGELOG.md` for the project.