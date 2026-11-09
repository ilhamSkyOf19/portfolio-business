import { IconAlertCircle } from "@tabler/icons-react";
import CardPrice from "./CardPrice";
import { useTranslation } from "react-i18next";

const SectionThree = () => {
  const { t } = useTranslation();

  const pricingData = t("service.pricing.packages", {
    returnObjects: true,
  }) as {
    id: string;
    name: string;
    label: string;
    description: string;
    features: string[];
    price: number;
    billing: string;
    recommended: boolean;
    buttonText: string;
    pricePrefix: string;
  }[];
  return (
    <section
      id="pricing"
      className="relative bg-surface  w-full overflow-hidden pt-space-sm pb-space-lg px-space-sm md:px-space-md"
    >
      <div className="w-full flex flex-col justify-start items-center pt-space-lg">
        <p className="px-space-xs py-1 bg-primary/10 text-primary rounded-full text-xs uppercase font-medium">
          {t("service.pricing.eyebrow")}
        </p>
        <h2 className="text-4xl font-semibold text-center mt-space-sm leading-12">
          {t("service.pricing.title")}
        </h2>
        <p className="mt-space-xs text-base-content/70 text-sm text-center md:w-3/5">
          {t("service.pricing.description")}
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-space-md mt-space-lg">
          {pricingData.map((item, index) => (
            <CardPrice key={index} data={item} />
          ))}
        </div>

        {/* catatan */}
        <div className="w-full p-space-sm rounded-2xl bg-primary/10 mt-space-md flex flex-row justify-start items-start gap-space-sm">
          <div className="w-12 h-12 shrink-0 bg-primary rounded-full flex justify-center items-center">
            <IconAlertCircle className="text-white" />
          </div>

          <p className="text-sm leading-6">
            <span className="font-medium">
              {t("service.pricing.noteTitle")}
            </span>{" "}
            <span className="text-base-content/70">
              {t("service.pricing.note")}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
