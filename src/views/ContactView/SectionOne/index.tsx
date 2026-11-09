import { IconClock } from "@tabler/icons-react";
import LabelTopCorner from "../../../components/ui/LabelTopCorner";
import { useTranslation } from "react-i18next";

const SectionOne = () => {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="relative bg-surface w-full overflow-hidden pt-space-sm pb-space-lg px-space-sm md:px-space-md"
    >
      <div className="w-full flex flex-col justify-start items-center pt-space-md">
        <div className="md:w-2/3 w-full flex flex-col justify-start items-center">
          <LabelTopCorner label={t("contact.hero.eyebrow")} />

          <h1 className="text-center text-4xl md:text-5xl font-semibold mt-space-xs leading-12 md:leading-14">
            {t("contact.hero.firstTitle")}{" "}
            <span className="text-primary">
              {t("contact.hero.secondTitle")}
            </span>{" "}
            {t("contact.hero.thirdTitle")}
          </h1>

          <p className="text-on-surface-variant text-center mt-space-xs">
            {t("contact.hero.description")}
          </p>

          <div className="w-full mt-space-sm flex flex-col justify-start items-center gap-space-xs">
            <div className="bg-primary/10 flex flex-row justify-start items-center gap-space-xs px-space-xs py-1.5 rounded-full">
              <IconClock size={18} className="text-primary" />
              <span className="text-base-content/80 text-sm">
                {t("contact.hero.responseTime")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
