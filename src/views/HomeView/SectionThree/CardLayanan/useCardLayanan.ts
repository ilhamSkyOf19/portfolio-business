import { useTranslation } from "react-i18next";

const useCardLayanan = (params: { id: number }) => {
  const { t } = useTranslation();

  const translatedBenefits = t(`home.services.items.${params.id}`, {
    returnObjects: true,
  }) as {
    title: string;
    description: string;
    delivery: string;
  };

  return {
    translatedBenefits,
    t,
  };
};

export default useCardLayanan;
