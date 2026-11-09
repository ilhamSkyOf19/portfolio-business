import type { Layanan } from "../../../../utils/layanan";
import useCardLayanan from "./useCardLayanan";

type Props = {
  layanan: Layanan;
};

const CardLayanan = ({ layanan }: Props) => {
  const Icon = layanan.icon;

  const { translatedBenefits, t } = useCardLayanan({
    id: layanan.id,
  });

  return (
    <div className="col-span-1 px-space-sm py-space-sm rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between items-start">
      <div className="flex flex-col justify-start items-start">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex justify-center items-center transition-all ease-in-out duration-100">
          <Icon
            size={28}
            className="text-primary group-hover:text-white transition-all ease-in-out duration-100"
          />
        </div>

        {/* Content */}
        <div className="w-full flex flex-col justify-start items-start pt-space-sm gap-space-xs">
          <h3 className="text-xl font-semibold text-primary">
            {translatedBenefits.title}
          </h3>

          <p className="text-sm text-on-surface-variant">
            {translatedBenefits.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-row justify-start items-start gap-space-xs flex-wrap pt-space-sm">
          {layanan.technologies.map((tech, index) => (
            <div key={index} className="px-2.5 py-1 rounded-md bg-primary/10">
              <span className="text-xs font-medium text-primary">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex flex-row justify-between items-center gap-space-xs flex-wrap pt-space-md">
        <span className="text-xs font-medium">
          {t("home.services.deliveryPrefix")}: {translatedBenefits.delivery}
        </span>
      </div>
    </div>
  );
};

export default CardLayanan;
