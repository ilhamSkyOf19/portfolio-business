import {
  IconArrowRight,
  IconBolt,
  IconBrandSpeedtest,
  IconCode,
  IconLockCheck,
  IconPalette,
  IconRosetteDiscountCheck,
  IconSettings,
} from "@tabler/icons-react";
import hero from "../../../assets/hero.webp";
import LabelTopCorner from "../../../components/ui/LabelTopCorner";
import { useTranslation } from "react-i18next";
import LazyImage from "../../../components/LazyImage";
import { Link } from "react-router-dom";

const SectionOne = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative bg-surface w-full overflow-hidden pt-space-sm pb-space-lg px-space-sm md:px-space-md"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-200 h-100 bg-linear-to-b from-primary-container via-secondary-container dark:from-primary-container/10 dark:via-secondary-container/10 to-transparent blur-3xl rounded-full" />

      {/* content */}
      <div className="flex flex-col md:flex-row justify-start items-start z-10 relative gap-space-md ">
        <div className="md:flex-1 flex flex-col justify-start items-start">
          {/* label */}
          <LabelTopCorner label={t("home.hero.eyebrow")} />

          <h1 className="pt-space-sm font-semibold text-5xl md:text-6xl leading-14 md:leading-16">
            {t("home.hero.title")}{" "}
            <span className="underline text-primary decoration-wavy decoration-2">
              {t("home.hero.highlightTitle")}
            </span>
          </h1>

          <p className="pt-space-sm text-on-surface-variant text-base md:leading-8">
            {t("home.hero.description")}
          </p>

          <div className="pt-space-md w-full flex flex-row justify-start items-center gap-space-sm">
            <Link
              to={"/service#web-engineering-service"}
              className="px-space-xs w-40 h-12 rounded-lg bg-primary hover:bg-primary-light transition-all duration-200 text-white hover:-translate-y-0.5 flex flex-row justify-center items-center gap-space-xs shadow-md shadow-primary/30"
            >
              <span className="text-sm font-semibold">
                {t("home.hero.primaryButton")}
              </span>
              <IconArrowRight size={18} />
            </Link>

            <Link
              to={"/service"}
              className="px-space-sm h-12 rounded-lg hover:bg-surface-container-high transition-all duration-200 text-primary flex flex-row justify-start items-center gap-space-xs shadow-md"
            >
              <IconCode size={20} />
              <span className="text-sm font-semibold">
                {t("home.hero.secondaryButton")}
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-3 grid-rows-1 w-full pt-space-md">
            <div className="col-span-1 flex flex-row justify-start items-center gap-space-xs text-primary">
              <IconRosetteDiscountCheck size={18} />
              <span className="text-left text-xs font-medium text-on-surface-variant">
                {t("home.hero.trustPoints.0")}
              </span>
            </div>
            <div className="col-span-1 flex flex-row justify-start items-center gap-space-xs text-primary">
              <IconBolt size={18} />
              <span className="text-left text-xs font-medium text-on-surface-variant">
                {t("home.hero.trustPoints.1")}
              </span>
            </div>
            <div className="col-span-1 flex flex-row justify-start items-center gap-space-xs text-primary">
              <IconLockCheck size={18} />
              <span className="text-left text-xs font-medium text-on-surface-variant">
                {t("home.hero.trustPoints.2")}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full md:flex-1 flex flex-row justify-center items-center pt-space-sm md:pt-space-lg">
          <div className="relative w-[95%]  md:h-95 rounded-lg bg-surface-container-high/80 shadow-2xl p-1 md:p-2">
            <LazyImage
              containerClassName="w-full h-full rounded-lg overflow-hidden"
              src={hero}
              alt="hero"
              className="object-cover hover:scale-103 transition-all duration-200"
              loading="lazy"
            />

            {/* content 1 */}
            <div className="absolute -top-5 -left-4 bg-surface-bright rounded-lg px-space-xs md:px-space-sm py-space-xs md:py-space-sm flex flex-row justify-start items-center gap-space-xs shadow-md">
              <div className="w-9 h-9 rounded-full bg-emerald-100 flex justify-center items-center">
                <IconBrandSpeedtest
                  size={18}
                  stroke={3}
                  className="text-emerald-600"
                />
              </div>

              {/* label */}
              <div className="flex flex-col justify-start items-start">
                <span className="text-xs font-semibold">
                  {t("home.hero.floatingPerformanceTitle")}
                </span>
                <span className="text-xs font-medium">
                  {t("home.hero.floatingPerformanceDescription")}
                </span>
              </div>
            </div>

            {/* content 2 */}
            <div className="absolute top-4 -right-4 bg-on-primary-fixed rounded-lg px-space-xs md:px-space-sm py-space-xs md:py-space-sm flex flex-row justify-start items-center gap-space-xs shadow-md">
              <IconPalette size={20} className="text-primary" />

              {/* label */}
              <div className="flex flex-col justify-start items-start">
                <span className="text-xs font-semibold text-white">
                  {t("home.hero.floatingDesignTitle")}
                </span>
                <span className="text-xs font-medium text-white">
                  {t("home.hero.floatingDesignDescription")}
                </span>
              </div>
            </div>

            {/* content 3 */}
            <div className="absolute -bottom-5 left-4 bg-surface-bright rounded-lg px-space-xs md:px-space-xs py-space-xs md:py-space-sm flex flex-row justify-start items-center gap-space-xs shadow-md">
              <IconSettings
                size={20}
                className="text-emerald-600 animate-[spin_4s_linear_infinite]"
              />

              {/* label */}
              <div className="flex flex-row justify-start items-start gap-space-xs">
                <span className="text-xs font-semibold">
                  {t("home.hero.floatingSupportStatus")}
                </span>
                <span className="text-xs font-medium">
                  {t("home.hero.floatingSupportDescription")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
