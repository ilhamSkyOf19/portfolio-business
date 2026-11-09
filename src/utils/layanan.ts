import {
  IconBrowser,
  IconAppWindow,
  IconDeviceMobile,
  IconDeviceDesktop,
  IconCode,
} from "@tabler/icons-react";

import type { TablerIcon } from "@tabler/icons-react";

export type Layanan = {
  id: number;
  title: string;
  description: string;
  icon: TablerIcon;
  technologies: string[];
  delivery: string;
  link: string;
};

export const layananData: Layanan[] = [
  {
    id: 1,
    title: "Landing Page Profesional",
    description:
      "Website dengan tampilan modern, responsif, dan mudah digunakan. Dilengkapi optimasi SEO untuk membantu website lebih mudah ditemukan melalui mesin pencari.",
    icon: IconBrowser,
    technologies: ["React", "TypeScript", "Tailwind CSS", "DaisyUI"],
    delivery: "1–2 Minggu",
    link: "/layanan/landing-page",
  },
  {
    id: 2,
    title: "Sistem & Aplikasi Bisnis",
    description:
      "Kami merancang dan membangun berbagai sistem sesuai kebutuhan bisnis, mulai dari sistem laporan, sistem antrean, sistem kasir (POS), sistem booking, hingga sistem manajemen operasional yang terintegrasi.",
    icon: IconAppWindow,
    technologies: [
      "React",
      "TypeScript",
      "Express.js",
      "MySQL",
      "Prisma",
      "TanStack",
      "Tailwind CSS",
      "DaisyUI",
      "JWT",
    ],
    delivery: "1 - 3 Bulan",
    link: "/layanan/aplikasi-bisnis",
  },
  {
    id: 3,
    title: "Aplikasi Mobile",
    description:
      "Kami merancang dan membangun aplikasi Android sesuai kebutuhan bisnis, mulai dari sistem pemesanan, sistem manajemen, hingga aplikasi layanan pelanggan.",
    icon: IconDeviceMobile,
    technologies: ["React Native", "TypeScript"],
    delivery: "1 - 3 Bulan",
    link: "/layanan/aplikasi-mobile",
  },
  {
    id: 4,
    title: "Aplikasi Desktop",
    description:
      "Kami mengembangkan aplikasi desktop untuk kebutuhan operasional bisnis, mulai dari sistem kasir (POS), sistem manajemen stok, hingga sistem administrasi yang dapat digunakan secara lokal maupun terhubung ke server.",
    icon: IconDeviceDesktop,
    technologies: ["Electron", "React", "TypeScript"],
    delivery: "1 - 3 Bulan",
    link: "/layanan/aplikasi-desktop",
  },
  {
    id: 5,
    title: "Full Custom Development",
    description:
      "Kami menghadirkan solusi digital yang dirancang sepenuhnya sesuai kebutuhan bisnis, mulai dari perencanaan, desain UI/UX, hingga pengembangan sistem. Setiap fitur dan teknologi disesuaikan dengan kebutuhan serta kompleksitas proyek.",
    icon: IconCode,
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "PHP",
      "Express.js",
      "MySQL",
      "Prisma",
      "TanStack",
      "Tailwind CSS",
      "DaisyUI",
      "Electron",
    ],
    delivery: "Sesuai Kompleksitas Proyek",
    link: "/layanan/full-custom",
  },
];
