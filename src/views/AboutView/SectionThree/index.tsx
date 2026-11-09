import { IconCode } from "@tabler/icons-react";
import LabelTopCorner from "../../../components/ui/LabelTopCorner";
import CardTech from "./CardTech";
import { techStack } from "../../../utils/stack";
import { useTranslation } from "react-i18next";

const SectionThree = () => {
  const { t } = useTranslation();

  return (
    <section
      id="tech"
      className="bg-surface-container w-full flex flex-col justify-start items-start px-space-sm py-space-lg md:px-space-md"
    >
      <div className="w-full flex flex-row justify-start items-start">
        <div className="md:w-1/2 flex flex-col justify-start items-start">
          <LabelTopCorner
            icon={IconCode}
            label={t("about.technology.eyebrow")}
          />
          <h2 className="text-4xl font-semibold leading-12 mt-space-xs">
            {t("about.technology.title")}
          </h2>

          <span className="text-on-surface-variant mt-space-xs">
            {t("about.technology.description")}
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 w-full mt-space-sm gap-space-sm">
        {techStack.map((item, index) => (
          <CardTech key={index} techStack={item} />
        ))}
      </div>
    </section>
  );
};

export default SectionThree;
