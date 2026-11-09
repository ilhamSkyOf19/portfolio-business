import { useTranslation } from "react-i18next";
import CardKategoriLayanan from "./CardKategoriLayanan";
import { servicesData } from "./CardKategoriLayanan/data";

const SectionTwo = () => {
  const { t } = useTranslation();
  return (
    <section
      id="web-engineering-service"
      className="w-full bg-surface-container flex flex-col justify-start items-start px-space-sm md:px-space-md py-space-lg"
    >
      <div className="w-full flex flex-col justify-start items-start">
        {/* title */}
        <div className="w-full flex md:flex-row flex-col justify-between items-center gap-space-sm md:gap-space-xs">
          <div className="flex-3 lex flex-col justify-start items-start gap-space-xs">
            <span className="uppercase text-xs text-primary font-semibold">
              {t("service.categories.eyebrow")}
            </span>
            <h2 className="text-4xl font-semibold leading-12">
              {t("service.categories.title")}
            </h2>
          </div>

          <div className="flex-2 flex flex-row justify-end items-end">
            <span className="text-sm text-base-content/70">
              {t("service.categories.description")}
            </span>
          </div>
        </div>

        {/* card */}
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-space-md mt-space-md">
          {servicesData.map((item, index) =>
            index !== servicesData.length - 1 ? (
              <CardKategoriLayanan key={index} layanan={item} />
            ) : (
              <div className="md:col-span-2 flex flex-col justify-center">
                <CardKategoriLayanan key={index} layanan={item} last />
              </div>
            ),
          )}
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default SectionTwo;
