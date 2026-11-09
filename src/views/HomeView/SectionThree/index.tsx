import {
  IconArrowRight,
  IconCalculator,
  IconCash,
  IconMedal2,
} from "@tabler/icons-react";
import LabelTopCorner from "../../../components/ui/LabelTopCorner";
import { Link } from "react-router-dom";
import CardLayanan from "./CardLayanan";
import { layananData } from "../../../utils/layanan";
import { Fragment } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";

const SectionThree = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden py-space-md px-space-sm bg-primary-fixed/50 md:px-space-md">
      <div className="w-full flex flex-col justify-start items-start pt-space-sm">
        <div className="flex flex-col md:flex-row justify-stretch items-start md:items-stretch gap-space-sm md:gap-space-lg">
          <div className="flex md:flex-3 flex-col justify-start items-start gap-space-sm">
            <LabelTopCorner
              icon={IconMedal2}
              label={t("home.services.eyebrow")}
            />

            <h2 className="text-base-content font-semibold text-4xl md:text-5xl leading-12 md:leading-16">
              {t("home.services.title")}
            </h2>

            <p className="text-base text-on-surface-variant">
              {t("home.services.description")}
            </p>
          </div>
          <div className="md:flex-2 flex flex-col justify-end items-start md:items-end">
            <Link
              to="/service#web-engineering-service"
              className="text-primary flex flex-row justify-start items-center gap-space-sm hover:text-primary-light group"
            >
              <span className="text-sm font-semibold ">
                {t("home.services.viewAll")}
              </span>
              <IconArrowRight
                size={18}
                className="group-hover:translate-x-1 transation-all duration-200 ease-in-out"
              />
            </Link>
          </div>
        </div>

        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-md w-full">
          {layananData.map((layanan) => (
            <Fragment key={layanan.id}>
              {layanan.id !== 5 ? (
                <CardLayanan key={layanan.id} layanan={layanan} />
              ) : (
                <div className="col-span-1 md:col-span-2 flex flex-row justify-center items-center">
                  <CardLayanan key={layanan.id} layanan={layanan} />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="w-full pt-space-md">
          <div className="bg-surface-container-lowest shadow-md w-full rounded-xl flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center p px-space-sm py-space-md gap-space-sm">
            <div className="flex flex-row justify-start items-start gap-space-sm">
              <div className="w-14 h-14 bg-primary rounded-full flex justify-center items-center shrink-0">
                <IconCalculator size={28} className="text-white" />
              </div>

              <div className="flex flex-col justify-start items-start gap-space-xs">
                <h4 className="text-xl font-semibold">
                  {t("home.services.consultationTitle")}
                </h4>

                <span className="text-on-surface-variant text-sm">
                  {t("home.services.consultationDescription")}
                </span>
              </div>
            </div>

            <div className="w-full md:w-auto flex flex-row justify-center items-center">
              <Link
                to="/service#pricing"
                className="px-space-sm py-space-xs flex flex-row justify-start items-center gap-space-xs hover:bg-primary-light bg-primary rounded-xl text-white"
              >
                <span className="font-semibold text-sm">
                  {t("home.services.pricingButton")}
                </span>
                <IconCash />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
