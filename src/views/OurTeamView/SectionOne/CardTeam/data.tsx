import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  type TablerIcon,
} from "@tabler/icons-react";

import founder from "../../../../assets/founder.webp";
import coFounder from "../../../../assets/co-founder.webp";

export type TeamSocial = {
  name: string;
  url: string;
  icon: TablerIcon;
};

export type TeamItem = {
  id: number;
  name: string;
  image: string;
  skills: string[];
  socials: TeamSocial[];
};

export const teamData: TeamItem[] = [
  {
    id: 1,
    name: "Ilham Rohmatulloh, S.Kom.",
    image: founder,

    skills: [
      "Full Stack Development",
      "System Architecture",
      "Database Management",
      "UI/UX Development",
    ],

    socials: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/iiaammr_?utm_source=ig_web_button_share_sheet&mdxt=ZDNlZDc0MzIxNw==",
        icon: IconBrandInstagram,
      },
      {
        name: "LinkedIn",
        url: "https://id.linkedin.com/in/ilham-rohmatulloh",
        icon: IconBrandLinkedin,
      },
      {
        name: "GitHub",
        url: "https://github.com/ilhamSkyOf19",
        icon: IconBrandGithub,
      },
    ],
  },
  {
    id: 2,
    name: "Rokhimatuz Zahroh, S.M.",
    image: coFounder,

    skills: [
      "Microsoft Word",
      "Microsoft Excel",
      "Administrasi",
      "Pengelolaan Dokumen",
      "Data Management",
    ],

    socials: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/rokhimatuzzhrh_?utm_source=ig_web_button_share_sheet&rpxt=ZDNlZDc0MzIxNw==",
        icon: IconBrandInstagram,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rokhimatuz-zahroh/",
        icon: IconBrandLinkedin,
      },
    ],
  },
];
