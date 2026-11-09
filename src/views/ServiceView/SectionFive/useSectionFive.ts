import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ADMIN_WA } from "../../../constants/constant";

const useSectionFive = () => {
  const { t } = useTranslation();

  const [isActive, setIsActive] = useState<number>(0);

  const handleIsActive = (id: number) => {
    if (isActive === id) {
      setIsActive(0);
    } else {
      setIsActive(id);
    }
  };

  const handleContactAdmin = () => {
    const message = t("whatsapp.technicalInquiryMessage");

    const whatsappUrl = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };
  return {
    t,
    handleIsActive,
    handleContactAdmin,
    isActive,
  };
};

export default useSectionFive;
