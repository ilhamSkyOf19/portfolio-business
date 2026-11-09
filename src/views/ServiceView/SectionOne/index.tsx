import { useTranslation } from "react-i18next";
import LabelTopCorner from "../../../components/ui/LabelTopCorner";

const SectionOne = () => {
  const { t } = useTranslation();

  const highlights = t("service.hero.highlights", { returnObjects: true }) as {
    value: string;
    title: string;
  }[];

  return (
    <section
      id="service"
      className="relative bg-surface w-full overflow-hidden pt-space-sm pb-space-lg px-space-sm md:px-space-md"
    >
      <div className="w-full flex flex-col justify-start items-center pt-space-md">
        <div className="md:w-2/3 w-full flex flex-col justify-start items-center">
          <LabelTopCorner label={t("service.hero.eyebrow")} />

          <h1 className="text-center text-4xl font-semibold mt-space-xs leading-12">
            {t("service.hero.firstTitle")}
            <span className="text-primary">
              {" "}
              {t("service.hero.secondTitle")}
            </span>{" "}
            {t("service.hero.thirdTitle")}
          </h1>

          <p className="text-on-surface-variant text-center mt-space-xs">
            {t("service.hero.description")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm mt-space-sm">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="col-span-1 h-28 rounded-2xl bg-primary/5 p-space-sm flex flex-col justify-center items-center gap-1"
              >
                <span className="text-center font-semibold text-2xl text-primary">
                  {item.value}
                </span>
                <span className="text-center text-xs text-base-content/70 font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
