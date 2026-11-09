import { IconCircleCheck } from "@tabler/icons-react";
import CustomList, { CustomListItem } from "../../../../components/CustomList";
import type { FC } from "react";
import { cn } from "../../../../utils/cn";
import { useTranslation } from "react-i18next";
import type { servicesData } from "./data";

type Layanan = (typeof servicesData)[number];

type Props = {
  layanan: Layanan;
  last?: boolean;
};

type TranslatedService = {
  category: string;
  title: string;
  description: string;
  features: string[];
  benefits: {
    title: string;
    description: string;
  }[];
};

const CardKategoriLayanan: FC<Props> = ({ layanan, last }) => {
  const { t } = useTranslation();

  const Icon = layanan.icon;

  const translatedService = t(`service.categories.items.${layanan.id}`, {
    returnObjects: true,
  }) as TranslatedService;

  console.log(translatedService);

  return (
    <div className="col-span-1 bg-surface-container-lowest shadow-sm rounded-2xl flex flex-col justify-start items-start p-8">
      {/* Header */}
      <div className="w-full flex flex-row justify-between items-center">
        {/* Icon */}
        <div className="w-12 h-12 bg-primary/10 flex justify-center items-center rounded-lg">
          <Icon size={26} className="text-primary" />
        </div>

        {/* Category */}
        <p className="px-space-xs uppercase bg-primary/10 py-1 rounded-full text-[0.7rem] text-on-primary-fixed dark:text-base-content/70">
          {layanan.number} / {translatedService.category}
        </p>
      </div>

      {/* Title & Description */}
      <div className="w-full flex flex-col justify-start items-start gap-space-xs mt-space-sm">
        <h2 className="text-2xl font-medium">{translatedService.title}</h2>

        <span className="text-sm text-on-surface-variant leading-6">
          {translatedService.description}
        </span>
      </div>

      <div
        className={cn(
          "w-full flex",
          last ? "flex-col md:flex-row md:gap-space-lg" : "flex-col",
        )}
      >
        {/* Features */}
        <div className="mt-space-sm">
          <CustomList className="text-sm">
            {translatedService.features.map((item, index) => (
              <CustomListItem
                key={index}
                icon={<IconCircleCheck size={20} className="text-primary" />}
              >
                {item}
              </CustomListItem>
            ))}
          </CustomList>
        </div>

        {/* Benefits */}
        <div
          className={cn(
            "flex flex-col justify-start items-start p-space-sm bg-primary/10 rounded-lg",
            last
              ? "md:flex-1 md:mt-space-sm mt-space-md"
              : "w-full mt-space-md",
          )}
        >
          <h3 className="text-lg font-semibold">
            {t("service.categories.benefitsTitle")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm mt-space-sm">
            {translatedService.benefits.map((item, index) => {
              const BenefitIcon = layanan.benefits[index];

              return (
                <div
                  key={index}
                  className="flex flex-row justify-start items-start gap-space-xs"
                >
                  <div className="flex justify-center items-center bg-primary/20 rounded-lg w-10 h-10 shrink-0">
                    <BenefitIcon size={18} className="text-primary" />
                  </div>

                  <div className="flex flex-col justify-start items-start">
                    <span className="text-xs font-medium">{item.title}</span>

                    <span className="text-[0.7rem] text-on-surface-variant">
                      {item.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardKategoriLayanan;
