import CardFaq from "./CardFaq";
import { IconBrandWhatsapp, IconTerminal2 } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import useSectionFive from "./useSectionFive";

const SectionFive = () => {
  const { handleContactAdmin, isActive, handleIsActive, t } = useSectionFive();

  const faqData = t("service.faq.items", { returnObjects: true }) as {
    question: string;
    answer: string[];
    points?: string[];
  }[];
  return (
    <section className="relative bg-surface-container-low  w-full overflow-hidden pt-space-sm pb-space-lg px-space-sm md:px-space-md">
      <div className="w-full flex flex-col justify-start items-center pt-space-lg">
        <div className="flex flex-col justify-start items-start md:w-3/4 w-full">
          <div className="w-full flex flex-col justify-start items-center">
            <p className="px-space-xs py-1 bg-primary/10 text-primary rounded-full text-xs uppercase font-medium">
              {t("service.faq.eyebrow")}
            </p>
            <h2 className="text-4xl font-semibold text-center mt-space-sm leading-12">
              {t("service.faq.title")}
            </h2>
            <p className="mt-space-xs text-base-content/70 text-sm text-center">
              {t("service.faq.description")}
            </p>
          </div>

          <div className="w-full flex flex-col justify-start items-center mt-space-md gap-space-sm">
            {faqData.map((item, index) => (
              <CardFaq
                key={index + 1}
                id={index + 1}
                {...item}
                setIsActive={handleIsActive}
                isActive={isActive === index + 1}
              />
            ))}
          </div>

          <div className="mt-space-md w-full rounded-xl bg-primary/5 flex flex-col justify-center items-center p-space-md">
            <h3 className="text-lg font-medium text-center">
              {t("service.faq.contactCtaTitle")}
            </h3>
            <p className="text-sm text-base-content/70 text-center mt-space-xs md:w-3/4">
              {t("service.faq.contactCtaDescription")}
            </p>

            <div className="w-full flex flex-col md:flex-row md:justify-center justify-start items-center gap-space-sm mt-space-sm">
              <button
                type="button"
                className="px-space-sm py-space-xs rounded-lg bg-primary hover:bg-primary-light transition-all duration-200 ease-in-out flex flex-row justify-start items-center gap-space-xs"
                onClick={() => handleContactAdmin()}
              >
                <IconBrandWhatsapp size={20} className="text-white" />
                <span className="text-sm font-medium text-white">
                  {t("service.faq.contactButton")}
                </span>
              </button>

              <Link
                to="/about#tech"
                className="px-space-sm py-space-xs rounded-lg bg-base-100 hover:bg-surface-container-low transition-all duration-200 ease-in-out flex flex-row justify-start items-center gap-space-xs"
              >
                <IconTerminal2 size={20} className="text-base-content" />
                <span className="text-sm font-medium text-base-content">
                  {t("service.faq.techStackButton")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
