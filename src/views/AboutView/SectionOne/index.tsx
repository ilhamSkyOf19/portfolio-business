import { IconBulb, IconCode, IconPalette } from "@tabler/icons-react";
import LabelTopCorner from "../../../components/ui/LabelTopCorner";
import ContentIcon from "./ContentIcon";
import { useTranslation } from "react-i18next";

const SectionOne = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="relative bg-surface w-full overflow-hidden pt-space-sm pb-space-lg px-space-sm md:px-space-md "
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-200 h-100 bg-linear-to-b from-primary-container via-secondary-container dark:from-primary-container/10 dark:via-secondary-container/10 to-transparent blur-3xl rounded-full" />

      <div className="w-full flex flex-col justify-start items-start gap-space-md pt-space-sm relative z-10">
        <div className="w-full flex flex-col md:flex-row justify-start items-stretch gap-space-md">
          <div className="md:w-auto w-full flex flex-col justify-start items-start md:flex-1">
            <LabelTopCorner label={t("about.hero.eyebrow")} />

            <h1 className="font-semibold text-5xl md:text-6xl xl leading-17 pt-space-sm">
              {t("about.hero.title")} <br className="inline md:hidden" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-on-secondary-fixed">
                {t("about.hero.highlightTitle")}
              </span>
            </h1>
            <p className="pt-space-sm text-on-surface-variant leading-7">
              {t("about.hero.description")}
            </p>

            <div className="flex flex-row justify-start items-center gap-space-md pt-space-md">
              <div className="col-span-1 flex flex-row justify-start items-center gap-space-xs text-primary">
                <IconBulb size={20} />
                <span className="text-left text-sm font-medium text-on-surface-variant">
                  {t("about.hero.values.0")}
                </span>
              </div>
              <div className="col-span-1 flex flex-row justify-start items-center gap-space-xs text-primary">
                <IconCode size={20} />
                <span className="text-left text-sm font-medium text-on-surface-variant">
                  {t("about.hero.values.1")}
                </span>
              </div>
              <div className="col-span-1 flex flex-row justify-start items-center gap-space-xs text-primary">
                <IconPalette size={20} />
                <span className="text-left text-sm font-medium text-on-surface-variant">
                  {t("about.hero.values.2")}
                </span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex-1 md:flex justify-center items-center relative">
            <ContentIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
