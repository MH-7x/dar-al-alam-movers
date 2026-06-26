# 🚚 Dar Al Alam Movers (شركة دار العلم لنقل الأثاث)

A high-performance, SEO-optimized, and fully responsive Next.js web application built for **Dar Al Alam Movers**, a premier moving and packing service provider in Dubai and across the United Arab Emirates with over 15 years of industry experience.

This application is designed specifically for the Arabic-speaking market, implementing an elegant Right-to-Left (RTL) layout, rich micro-animations, structured schema markup for maximum search engine performance, and a serverless lead generation funnel.

---

## 🚀 Key Features

*   **📱 Modern RTL Design:** Clean, conversion-focused user interface tailored for Arabic users with smooth animations (`tw-animate-css`) and responsive layouts.
*   **📍 Localized Location Landing Pages:** Built-in SEO landing pages targeting all major UAE emirates:
    *   Dubai (دبي - Home Base)
    *   Abu Dhabi (أبوظبي)
    *   Al Ain (العين)
    *   Sharjah (الشارقة)
    *   Ajman (عجمان)
    *   Ras Al Khaimah (رأس الخيمة)
    *   Umm Al Quwain (أم القيوين)
    *   Fujairah (الفجيرة)
*   **🛠️ Service-Specific Pages:** Dedicated pages showcasing individual moving capabilities:
    *   Home Moving (نقل أثاث المنزل)
    *   Apartment Moving (نقل أثاث الشقق)
    *   Villa Moving (نقل أثاث الفلل)
    *   Office Moving (نقل أثاث المكاتب)
    *   Professional Packing (تغليف أثاث)
    *   Disassembly & Assembly (فك وتركيب أثاث)
    *   Secure Storage (تخزين أثاث)
*   **✉️ Serverless Quote Request Funnel:** Interactive multistep quote estimation form (`QuoteForm.tsx`) powered by Next.js Server Actions, rendering custom email templates with `@react-email/components` and dispatched via the **Resend API**.
*   **🔍 Advanced SEO Schema Integration:** Automates search-engine readability by embedding rich JSON-LD schemas:
    *   `LocalBusinessSchema` (Geographic coverage, operating hours, phone)
    *   `OrganizationSchema` (Brand representation, contact points)
    *   `ServiceSchema` (Moving service details, pricing, coverage)
    *   `BreadcrumbSchema` (Structured navigation path)
*   **📞 Sticky Mobile CTAs:** Bottom navigation overlay optimized for immediate mobile conversions via WhatsApp and direct call triggers.
*   **📊 Google Tag Manager (GTM):** Direct integration to track events, pageviews, and user conversions.

---

## 🛠️ Tech Stack

*   **Core Framework:** [Next.js](https://nextjs.org/) (v16 App Router) & [React](https://react.dev/) (v19)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4.0.0+) with `@tailwindcss/postcss`
*   **UI Components & Utilities:**
    *   [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/)
    *   [Embla Carousel](https://www.embla-carousel.com/) (with autoplay for testimonials and gallery)
    *   [Lucide React](https://lucide.dev/) (Icons)
    *   `class-variance-authority`, `clsx`, `tailwind-merge`
*   **Email Services:** [Resend](https://resend.com/) & [React Email](https://react.email/)

---

## 📂 Project Structure

```bash
dar-al-alam-movers/
├── src/
│   ├── app/                      # Next.js App Router Pages
│   │   ├── اتصل-بنا/             # Contact Us
│   │   ├── المواقع/               # Locations Hub & Sub-routes
│   │   ├── خدماتنا/              # Services Hub & Sub-routes
│   │   ├── سياسة-الخصوصية/       # Privacy Policy
│   │   ├── شروط-الخدمة/          # Terms of Service
│   │   ├── من-نحن/               # About Us
│   │   ├── globals.css           # Tailwind CSS directives & global resets
│   │   ├── layout.tsx            # Global layout with RTL direction & Schemas
│   │   ├── page.tsx              # Homepage template containing main sections
│   │   ├── robots.ts             # Search engine robots config
│   │   └── sitemap.ts            # Dynamic sitemap generator
│   ├── components/
│   │   ├── schema/               # Structured JSON-LD JSON schema components
│   │   ├── sections/             # Modular landing page sections (Hero, FAQ, Reviews, CTA, etc.)
│   │   ├── shared/               # Shared components (Header, Footer, Gallery, Breadcrumbs)
│   │   └── ui/                   # Primitive reusable components (buttons, inputs, cards)
│   ├── emails/                   # React Email templates (QuoteRequestEmail.tsx)
│   └── lib/                      # Helper libraries, API handlers, configurations & interfaces
│       ├── siteConfig.ts         # Consolidated website details, services list, and location configurations
│       └── FormSubmission.ts     # Resend email submission server actions
├── public/                       # Static public assets (images, icons)
├── package.json                  # Dependencies & execution scripts
└── tsconfig.json                 # TypeScript configurations
```

---

## ⚙️ Installation & Local Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18.x or higher recommended).

### 1. Clone the repository & Install dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory (or use `.env.local`) and configure the following parameters:

```env
# Server URL for sitemap and metadata generation
APP_URL=http://localhost:3000

# Resend API Key for sending quote request emails
RESEND_API_KEY=re_your_api_key_here
```

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the Arabic-RTL site.

### 4. Build for Production
To generate an optimized production build of the project, run:
```bash
npm run build
```
And to start the production server locally:
```bash
npm start
```

---

## 📈 SEO Optimization Checklist

1.  **Metadata Templates:** Dynamic titles and meta-descriptions are handled in `src/lib/MetaDataTemplate.ts` to ensure consistency.
2.  **RTL and Lang Attributes:** Declared correctly on `<html>` tag as `lang="ar"` and `dir="rtl"`.
3.  **JSON-LD Schema Markups:** Integrated directly into `RootLayout` (`src/app/layout.tsx`) using custom React wrappers around script tags:
    *   [OrganizationSchema](file:///src/components/schema/OrganizationSchema.tsx)
    *   [LocalBusinessSchema](file:///src/components/schema/LocalBusinessSchema.tsx)
4.  **Sitemaps and Robots:** Programmatically updated in `sitemap.ts` and `robots.ts` using site routes and Arabic-encoded URL strings.
