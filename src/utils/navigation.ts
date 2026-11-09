import {
  IconCode,
  IconHome2,
  IconSend,
  IconUserCircle,
  IconUsersGroup,
  type TablerIcon,
} from "@tabler/icons-react";

export const navigation: {
  key: string;
  id: string;
  name: string;
  link: string;
  icon: TablerIcon;
}[] = [
  {
    key: "home",
    id: "#home",
    name: "Home",
    link: "/",
    icon: IconHome2,
  },
  {
    key: "about",
    id: "#about",
    name: "About",
    link: "/about",
    icon: IconUserCircle,
  },
  {
    key: "service",
    id: "#service",
    name: "Service",
    link: "/service",
    icon: IconCode,
  },
  {
    key: "ourTeam",
    id: "#ourTeam",
    name: "Our Team",
    link: "/our-team",
    icon: IconUsersGroup,
  },
  {
    key: "contact",
    id: "#contact",
    name: "Contact",
    link: "/contact",
    icon: IconSend,
  },
];
