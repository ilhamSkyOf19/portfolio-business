import { IconArrowDown, IconArrowRight } from "@tabler/icons-react";
import { workflowData } from "./dataWorkFlow";
import { useTranslation } from "react-i18next";

const SectionFour = () => {
  const { t } = useTranslation();

  const steps = t("service.workflow.steps", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];
  return (
    <section className="w-full bg-surface-container flex flex-col justify-start items-start px-space-sm md:px-space-md py-space-lg">
      <div className="w-full flex flex-col justify-start md:justify-between items-center">
        {/* title */}
        <div className="md:w-1/2 w-full flex flex-col justify-start items-center gap-space-xs">
          <span className="text-xs text-center uppercase text-primary font-medium">
            {t("service.workflow.eyebrow")}
          </span>
          <h2 className="text-4xl font-semibold leading-12 text-center">
            {t("service.workflow.title")}
          </h2>

          <p className="text-sm text-base-content/70 leading-6 text-center">
            {t("service.workflow.description")}
          </p>
        </div>

        {/* card */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 mt-space-md gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-start items-start p-space-sm relative hover:-translate-y-2 duration-300 ease-in-out hover:shadow-md"
            >
              <span className="text-primary uppercase text-sm font-semibold">
                Tahap 0{index + 1}
              </span>
              <span className="text-xl font-medium mt-space-xs">
                {item.title}
              </span>
              <p className="text-base-content/70 text-xs mt-space-xs">
                {item.description}
              </p>

              {/* icon for sm */}
              {index + 1 !== workflowData.length && (
                <>
                  <IconArrowDown
                    size={30}
                    className="md:hidden text-primary absolute left-1/2 -translate-x-1/2 -bottom-4"
                  />

                  <IconArrowRight
                    size={30}
                    className="hidden md:block text-primary absolute top-1/2 -translate-y-1/2 -right-4"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
