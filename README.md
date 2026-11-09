<div align="center">

<img src="src/assets/logo-large.webp" alt="IamDev logo" width="120" />

# IamDev

**A modern, bilingual company profile website for a software development studio.**

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-1AD1A5?logo=daisyui&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?logo=reactquery&logoColor=white)

</div>

---

## Project Overview

IamDev is a single-page web application that presents **IamDev Studio**, a software engineering and digital design studio offering landing pages, business systems, mobile apps, desktop apps, and fully custom development. Visitors can explore the studio's services, pricing packages, team, and project workflow, then send a project inquiry directly to the team via WhatsApp.

The site is fully frontend, with no backend or database. Content is driven by translation files and local data modules.

## Features

- **Multi-page website**: Home, About, Service, Our Team, and Contact pages.
- **Bilingual interface**: Indonesian and English, powered by i18next and persisted across sessions.
- **Light and dark themes**: Switchable theme using DaisyUI, persisted across sessions.
- **Service catalog**: Five service categories with technologies and delivery estimates, three pricing packages, a four-step project workflow, and an eight-item FAQ.
- **WhatsApp contact form**: Validated inquiry form (name, email, WhatsApp number, service type, budget range, message) that opens a pre-filled WhatsApp chat.
- **Package consultation**: Pre-filled WhatsApp messages for pricing packages and technical inquiries.
- **Share dialog**: Share the site via WhatsApp or copy the page link.
- **SEO-friendly metadata**: Per-page title and description via React Helmet.
- **Smooth navigation**: Scroll-to-top on route change and smooth hash-link scrolling.
- **Responsive layout**: Custom navbar with mobile drawer, plus lazy-loaded images.

## Tech Stack

| Category                 | Technologies                                                     |
| ------------------------ | ---------------------------------------------------------------- |
| **Core**                 | React, TypeScript, Vite                                          |
| **Routing**              | React Router (`createBrowserRouter`)                             |
| **Styling**              | Tailwind CSS v4, DaisyUI, Poppins font, `clsx`, `tailwind-merge` |
| **State & Data**         | Zustand (with `persist` middleware), TanStack Query              |
| **Forms**                | React Hook Form                                                  |
| **Internationalization** | i18next, react-i18next                                           |
| **UI & Utilities**       | Tabler Icons, React Helmet                                       |

## Project Structure

```text
src/
├── assets/         # Images, logos, and Poppins font files
├── components/     # Reusable components (Navbar, Footer, Drawer, inputs, modals, etc.)
├── config/         # i18next configuration
├── constants/      # App-wide constants
├── helpers/        # Helper functions (e.g. phone number formatting)
├── hooks/          # Custom hooks (modal, scroll behavior)
├── layouts/        # Shared page layout
├── locales/        # Translation files (en, id)
├── models/         # TypeScript types
├── pages/          # Route-level pages with SEO metadata
├── routes/         # Router configuration
├── stores/         # Zustand stores (language, theme)
├── utils/          # Static data (navigation, services, tech stack) and helpers
└── views/          # Page sections for Home, About, Service, Our Team, and Contact
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
```

### Environment Variables

No environment variables are required. The site does not read from `.env` files.

The WhatsApp number that receives inquiries is configured in `src/constants/constant.ts` (`ADMIN_WA`). Update it there if you fork the project.

### Run the Project

```bash
npm run dev
```

Then open the local URL shown in your terminal.

## Customization

- **Content and copy**: edit `src/locales/en/translation.json` and `src/locales/id/translation.json`.
- **Team members**: edit `src/views/OurTeamView/SectionOne/CardTeam/data.tsx`.
- **Services and technologies**: edit the data files in `src/utils/`.
- **Theme colors**: edit the Tailwind and DaisyUI theme definitions in `src/index.css`.

## License

Add a license of your choice before publishing. Fonts under `src/assets/fonts/poppins` are licensed under the SIL Open Font License (see `OFL.txt`).
