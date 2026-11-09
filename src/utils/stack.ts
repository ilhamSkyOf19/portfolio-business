import type { TablerIcon } from "@tabler/icons-react";

type TechStack = {
  icon: TablerIcon;
  nama: string;
};

export type TechCategory = {
  id: string;
  type: "column" | "row";
  content: {
    iconTitle: TablerIcon;
    tech: TechStack[];
  };
};

import {
  IconDeviceDesktop,
  IconServer,
  IconDatabase,
  IconTools,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMysql,
  IconBrandFigma,
  IconBrandGit,
  IconBrandGithub,
  IconBrandPrisma,
  IconApi,
  IconBrandMongodb,
  IconStack2,
  IconShieldCheck,
  IconLock,
  IconBolt,
  IconPalette,
  IconForms,
  IconCode,
  IconIcons,
  IconWorld,
} from "@tabler/icons-react";

export const techStack: TechCategory[] = [
  {
    id: "frontend",
    type: "row",
    content: {
      iconTitle: IconDeviceDesktop,
      tech: [
        { icon: IconBrandReact, nama: "React" },
        { icon: IconBrandTypescript, nama: "TypeScript" },
        { icon: IconBrandJavascript, nama: "JavaScript" },
        { icon: IconBrandTailwind, nama: "Tailwind CSS" },
        { icon: IconStack2, nama: "TanStack Query" },
        { icon: IconBolt, nama: "Vite" },
        { icon: IconPalette, nama: "DaisyUI" },
        { icon: IconForms, nama: "React Hook Form" },
        { icon: IconApi, nama: "Axios" },
      ],
    },
  },
  {
    id: "backend",
    type: "column",
    content: {
      iconTitle: IconServer,
      tech: [
        { icon: IconBrandNodejs, nama: "Node.js" },
        { icon: IconApi, nama: "Express.js" },
        { icon: IconBrandPrisma, nama: "Prisma ORM" },
      ],
    },
  },
  {
    id: "database",
    type: "row",
    content: {
      iconTitle: IconDatabase,
      tech: [
        { icon: IconBrandMysql, nama: "MySQL" },
        { icon: IconBrandMongodb, nama: "MongoDB" },
        { icon: IconDatabase, nama: "SQLite" },
      ],
    },
  },
  {
    id: "tools",
    type: "row",
    content: {
      iconTitle: IconTools,
      tech: [
        { icon: IconBrandFigma, nama: "Figma" },
        { icon: IconBrandGit, nama: "Git" },
        { icon: IconBrandGithub, nama: "GitHub" },
        { icon: IconCode, nama: "Lucide Icons" },
        { icon: IconIcons, nama: "Tabler Icons" },
      ],
    },
  },
  {
    id: "crossPlatform",
    type: "column",
    content: {
      iconTitle: IconDeviceDesktop,
      tech: [
        { icon: IconDeviceDesktop, nama: "Electron" },
        { icon: IconBrandReact, nama: "React Native" },
      ],
    },
  },
  {
    id: "security",
    type: "row",
    content: {
      iconTitle: IconShieldCheck,
      tech: [
        { icon: IconShieldCheck, nama: "Zod" },
        { icon: IconLock, nama: "JWT" },
        { icon: IconShieldCheck, nama: "Express Rate Limit" },
        { icon: IconWorld, nama: "CORS" },
      ],
    },
  },
];
