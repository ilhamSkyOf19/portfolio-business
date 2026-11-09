import { useTranslation } from "react-i18next";
import { tech } from "../../../utils/tech";

const SectionTwo = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full overflow-hidden py-space-md px-space-sm">
      <div className="w-full flex flex-col justify-start items-center">
        {/* title */}
        <div className="flex flex-col justify-start items-center gap-space-xs">
          <h2 className="uppercase text-primary font-semibold text-sm text-center">
            {t("home.technology.title")}
          </h2>
          <span className="text-on-surface-variant text-sm text-center">
            {t("home.technology.description")}
          </span>
        </div>

        {/* tech */}
        <div className="w-full md:w-[70%] flex flex-row justify-center items-center flex-wrap gap-space-xs pt-space-md">
          {tech.map((item, index) => (
            <div
              key={index}
              className="px-space-sm gap-space-xs py-space-xs rounded-lg bg-surface-container hover:bg-surface-container-high flex flex-row justify-start items-center shadow-sm"
            >
              <item.icon color={item.color} className="size-5 md:size-6" />
              <span className="text-xs font-semibold text-on-surface">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
