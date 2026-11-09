import {
  IconBrandPrisma,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandPhp,
  IconDatabase,
  IconBrandReactNative,
  IconBrandTailwind,
  IconServer,
  IconArrowsExchange,
  IconBrandMysql,
  IconBrandGit,
  IconComponents,
  IconAppWindow,
} from "@tabler/icons-react";

import type { TablerIcon } from "@tabler/icons-react";

export type Technology = {
  name: string;
  icon: TablerIcon;
  color: string;
};

export const tech: Technology[] = [
  {
    name: "Prisma",
    icon: IconBrandPrisma,
    color: "#2D3748",
  },
  {
    name: "React",
    icon: IconBrandReact,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: IconBrandTypescript,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: IconBrandJavascript,
    color: "#F7DF1E",
  },
  {
    name: "PHP",
    icon: IconBrandPhp,
    color: "#777BB4",
  },
  {
    name: "MySQL",
    icon: IconBrandMysql,
    color: "#4479A1",
  },
  {
    name: "SQLite",
    icon: IconDatabase,
    color: "#003B57",
  },
  {
    name: "React Native",
    icon: IconBrandReactNative,
    color: "#61DAFB",
  },
  {
    name: "Electron",
    icon: IconAppWindow,
    color: "#47848F",
  },
  {
    name: "Tailwind CSS",
    icon: IconBrandTailwind,
    color: "#06B6D4",
  },
  {
    name: "DaisyUI",
    icon: IconComponents,
    color: "#1AD1A5",
  },
  {
    name: "Express.js",
    icon: IconServer,
    color: "#808080",
  },
  {
    name: "TanStack",
    icon: IconArrowsExchange,
    color: "#FF4154",
  },
  {
    name: "Git",
    icon: IconBrandGit,
    color: "#F05032",
  },
];
