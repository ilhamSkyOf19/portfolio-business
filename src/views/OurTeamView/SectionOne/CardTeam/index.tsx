import type { FC } from "react";
import type { TeamItem } from "./data";
import { useTranslation } from "react-i18next";
import LazyImage from "../../../../components/LazyImage";

type Props = {
  data: TeamItem;
};

type TranslatedMember = {
  role: string;
  position: string;
  description: string;
};

const CardTeam: FC<Props> = ({ data }) => {
  const { t } = useTranslation();

  const translatedMember = t(`team.members.${data.id}`, {
    returnObjects: true,
  }) as TranslatedMember;

  return (
    <div className="bg-base-100 h-full shadow-md col-span-1 rounded-xl overflow-hidden flex flex-col justify-start items-start gap-space-sm relative hover:shadow-2xl transition-shadow ease-in-out duration-500 group">
      {/* Image */}
      <div className="overflow-hidden aspect-square w-full relative">
        <LazyImage
          src={data.image}
          alt={data.name}
          loading="lazy"
          className="transition-transform ease-in-out group-hover:scale-105"
        />

        <p className="px-space-xs py-1 bg-surface-container-high absolute top-3 right-3 rounded-full text-xs font-medium text-primary z-10">
          {translatedMember.position}
        </p>
      </div>

      {/* Content */}
      <div className="overflow-hidden flex flex-col justify-start items-start px-space-sm pb-space-sm">
        <span className="text-xl font-medium group-hover:text-primary transition-colors ease-in-out duration-500">
          {data.name}
        </span>

        <span className="text-primary text-sm font-medium mt-1">
          {translatedMember.role}
        </span>

        <span className="text-base-content/70 text-xs mt-space-sm leading-5">
          {translatedMember.description}
        </span>

        {/* Skills */}
        <div className="w-full flex flex-row flex-wrap justify-start items-center gap-space-xs mt-space-sm">
          {data.skills.map((skill) => (
            <p
              key={skill}
              className="bg-primary/10 px-space-xs py-1 rounded-full text-xs font-medium text-primary"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="w-full p-space-sm flex flex-row justify-between items-center bg-primary/10 mt-auto">
        <span className="text-xs text-base-content/70 font-medium">
          {t("team.connect")}
        </span>

        <div className="flex flex-row justify-end items-center gap-space-xs">
          {data.socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.url}
                aria-label={`${data.name} - ${social.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex justify-center items-center bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Icon size={16} className="text-primary" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardTeam;
