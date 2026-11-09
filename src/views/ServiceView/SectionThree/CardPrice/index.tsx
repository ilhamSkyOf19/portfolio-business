import {
  IconBrandWhatsapp,
  IconCheck,
  IconCircleCheck,
  IconRosetteDiscountCheck,
} from "@tabler/icons-react";
import CustomList, { CustomListItem } from "../../../../components/CustomList";
import type { FC } from "react";
import { cn } from "../../../../utils/cn";
import { useTranslation } from "react-i18next";

type PricingItem = {
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
};

type Props = {
  data: PricingItem;
};

const CardPrice: FC<Props> = ({ data }) => {
  const { t } = useTranslation();

  const handleConsultation = (packageName: string, packagePrice: string) => {
    const message = t("whatsapp.consultationMessage", {
      packageName,
      packagePrice,
    });

    const whatsappUrl = `https://wa.me/6285896890881?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={cn(
        "w-full bg-surface-container-lowest col-span-1 rounded-xl p-7.5 flex flex-col justify-between items-start transition-all ease-in-out duration-300 relative",
        data.recommended
          ? "shadow-xl -translate-y-4 mt-space-sm md:mt-0"
          : "shadow-md hover:shadow-lg",
      )}
    >
      {data.recommended && (
        <div className="w-full absolute -top-5 left-1/2 -translate-x-1/2 flex flex-row justify-center items-center">
          <div className="flex flex-row justify-start items-center gap-space-xs bg-primary rounded-full p-space-xs">
            <IconRosetteDiscountCheck size={18} className="text-white" />
            <span className="text-white font-semibold text-xs">
              {t("service.pricing.recommended")}
            </span>
          </div>
        </div>
      )}

      <div className="W-full">
        <div className="w-full flex flex-row justify-between items-center gap-1">
          <h3 className="text-xl font-medium">{data.name}</h3>
          <p
            className={cn(
              "text-xs font-medium px-space-xs py-1 rounded-full",
              data.recommended
                ? "bg-primary/20 text-primary"
                : "bg-primary/10 text-base-content/70 ",
            )}
          >
            {data.label}
          </p>
        </div>

        <p className="text-sm text-on-surface-variant mt-space-xs">
          {data.description}
        </p>

        <div className="w-full flex flex-col justify-start items-start mt-space-md pb-space-sm border-b border-primary/20">
          <p>
            {data.pricePrefix && (
              <span className="text-sm font-medium mr-1">
                {data.pricePrefix}
              </span>
            )}
            <span
              className={cn(
                "text-xl font-medium",
                data.recommended && "text-primary",
              )}
            >
              Rp
            </span>{" "}
            <span
              className={cn(
                "text-5xl font-semibold",
                data.recommended && "text-primary",
              )}
            >
              {data.price.toLocaleString("id-ID")}
            </span>
          </p>
          <span className="text-xs font-medium mt-space-xs text-on-surface-variant">
            / {data.billing}
          </span>
        </div>

        {/* features */}
        <CustomList className="text-sm mt-space-sm">
          {data.features.map((feature, index) => (
            <CustomListItem
              key={index}
              icon={
                data.recommended ? (
                  <IconCircleCheck size={20} className="text-primary" />
                ) : (
                  <IconCheck size={20} className="text-primary" />
                )
              }
            >
              {index === data.features.length - 1 ? (
                <span className="text-primary">{feature}</span>
              ) : (
                feature
              )}
            </CustomListItem>
          ))}
        </CustomList>
      </div>

      <div className="w-full mt-space-lg">
        <button
          type="button"
          className={cn(
            "w-full h-12 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out flex flex-row justify-center items-center gap-space-xs",
            data.recommended
              ? "bg-primary hover:bg-primary-light text-white"
              : "bg-primary/10 hover:bg-primary/15",
          )}
          onClick={() =>
            handleConsultation(data.name, data.price.toLocaleString("id-ID"))
          }
        >
          <IconBrandWhatsapp size={24} className="text-emerald-500" />
          <span>{t("service.pricing.button")}</span>
        </button>
      </div>
    </div>
  );
};

export default CardPrice;
