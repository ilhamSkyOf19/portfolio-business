import LabelTopCorner from "../../../components/ui/LabelTopCorner";
import logo from "../../../assets/logo-large.webp";
import CardMisi from "./CardMisi";
import {
  IconCode,
  IconPalette,
  IconUsersGroup,
  type TablerIcon,
  IconEye,
} from "@tabler/icons-react";
import CardPrinsip from "./CardPrinsip";
import { useTranslation } from "react-i18next";

const misiStrategis: {
  icon: TablerIcon;
}[] = [
  {
    icon: IconCode,
  },
  {
    icon: IconPalette,
  },
  {
    icon: IconUsersGroup,
  },
];

const SectionTwo = () => {
  const { t } = useTranslation();

  const prinsip = t("about.visionMission.principles", {
    returnObjects: true,
  }) as {
    title: string;
    description: string;
  }[];
  return (
    <section className="w-full bg-surface-container-highest flex flex-col justify-start items-start px-space-sm md:px-space-md py-space-lg">
      <div className="w-full justify-center items-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-stretch rounded-2xl bg-linear-to-br from-on-primary-fixed to-primary p-space-md md:gap-space-sm gap-space-lg shadow-2xl">
          <div className="flex-3 flex flex-col justify-start items-start">
            <LabelTopCorner
              icon={IconEye}
              label={t("about.visionMission.visionLabel")}
            />

            <div className="pt-space-sm flex flex-col gap-space-sm">
              <p className="text-3xl md:text-5xl font-semibold text-white leading-12 md:leading-14 md:text-left text-center">
                <span className="md:text-5xl text-4xl mr-1">&ldquo;</span>
                {t("about.visionMission.vision")}
                <span className="md:text-5xl text-4xl mr-1">&rdquo;</span>
              </p>

              <p className="text-slate-300 md:text-left text-center">
                {t("about.visionMission.visionDescription")}
              </p>
            </div>
          </div>

          <div className="flex-2 flex justify-center items-center">
            <div className="md:w-70 md:h-70 w-70 h-50 bg-surface-container-low flex justify-center items-center rounded-4xl">
              <img src={logo} alt="Logo" className="w-50" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* misi strategis */}
      <div className="w-full flex flex-col justify-start items-start gap-space-md mt-space-md">
        <div className="flex flex-col justify-start items-start gap-space-xs">
          <span className="text-primary text-xs font-medium uppercase">
            {t("about.visionMission.missionLabel")}
          </span>

          <h2 className="text-2xl font-medium text-base-content">
            {t("about.visionMission.missionTitle")}
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-space-sm">
          {misiStrategis.map((item, index) => (
            <CardMisi key={index} number={index + 1} {...item} />
          ))}
        </div>
      </div>

      {/* prinsip utama */}
      <div className="w-full flex flex-col justify-start items-start gap-space-md mt-space-md">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-space-sm">
          <div className="flex-1 flex flex-col justify-start items-start gap-space-xs">
            <span className="text-primary text-xs font-medium">
              {t("about.visionMission.principlesLabel")}
            </span>

            <h2 className="text-2xl font-medium text-base-content">
              {t("about.visionMission.principlesTitle")}
            </h2>
          </div>

          <span className="text-sm text-left md:text-right text-on-surface-variant">
            {t("about.visionMission.principlesDescription")}
          </span>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-space-sm">
          {prinsip.map((item, index) => (
            <CardPrinsip key={index} number={index + 1} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
