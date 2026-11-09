import {
  IconRocket,
  IconAppWindow,
  IconDeviceMobile,
  IconDeviceDesktop,
  IconCode,
  IconBrush,
  IconSearch,
  IconSettings,
  IconDatabase,
  IconShieldCheck,
  IconChartBar,
  IconBolt,
  IconLayoutDashboard,
  IconRefresh,
  IconPuzzle,
  IconLayersIntersect,
  IconAdjustments,
  IconCloud,
  type TablerIcon,
} from "@tabler/icons-react";

export const servicesData: {
  id: string;
  number: string;
  icon: TablerIcon;
  benefits: TablerIcon[];
}[] = [
  {
    id: "landing-page",
    number: "01",
    icon: IconRocket,
    benefits: [IconBrush, IconSearch, IconDeviceMobile, IconSettings],
  },
  {
    id: "business-system",
    number: "02",
    icon: IconAppWindow,
    benefits: [
      IconChartBar,
      IconDatabase,
      IconShieldCheck,
      IconLayoutDashboard,
    ],
  },
  {
    id: "mobile-app",
    number: "03",
    icon: IconDeviceMobile,
    benefits: [IconBrush, IconBolt, IconCloud, IconAdjustments],
  },
  {
    id: "desktop-app",
    number: "04",
    icon: IconDeviceDesktop,
    benefits: [IconDeviceDesktop, IconDatabase, IconRefresh, IconBolt],
  },
  {
    id: "custom-development",
    number: "05",
    icon: IconCode,
    benefits: [IconPuzzle, IconLayersIntersect, IconSettings, IconShieldCheck],
  },
] as const;
