import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBuildings,
  IconClock,
  IconHeadset,
  IconLock,
  IconMail,
  IconPhone,
  IconStopwatch,
} from "@tabler/icons-react";
import CustomList, { CustomListItem } from "../../../../components/CustomList";
import { useTranslation } from "react-i18next";
import { ADMIN_WA } from "../../../../constants/constant";
const ContentOne = () => {
  const { t } = useTranslation();

  const handleContactAdmin = () => {
    const message = t("whatsapp.technicalInquiryMessage");

    const whatsappUrl = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full md:flex-2 rounded-xl bg-primary-dark relative overflow-hidden p-space-sm pb-space-md shadow-md">
      <div className="absolute -right-16 -top-16 w-56 h-56 bg-primary/25 rounded-full blur-2xl pointer-events-none" />
      <div className="w-full flex flex-col justify-start items-start relative z-10">
        <div className="w-full flex flex-col justify-start items-start gap-space-xs">
          <span className="uppercase text-primary font-semibold text-xs">
            {t("contact.details.eyebrow")}
          </span>
          <h2 className="text-2xl font-semibold text-white">
            {t("contact.details.title")}
          </h2>
          <p className="text-sm text-slate-300 leading-6">
            {t("contact.details.description")}
          </p>

          <button
            type="button"
            className="w-full mt-space-sm flex flex-row justify-start items-center gap-space-xs p-space-sm bg-linear-to-r from-emerald-600/90 to-teal-600/90 hover:from-emerald-500 rounded-xl transition-all duration-200 hover:scale-102"
            onClick={() => handleContactAdmin()}
          >
            <div className="w-14 h-14 shrink-0 bg-white/20 rounded-xl flex justify-center items-center">
              <IconBrandWhatsapp size={28} className="text-white" />
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <span className="text-base text-white font-semibold text-left">
                {t("contact.details.whatsappTitle")}
              </span>
              <span className="text-sm text-white">+62 812-3456-7890</span>
            </div>
          </button>

          <div className="w-full flex flex-col justify-start items-start gap-space-sm mt-space-md">
            <div className="w-full flex flex-row justify-start items-start gap-space-xs">
              <div className="bg-white/5 w-10 h-10 rounded-lg flex justify-center items-center">
                <IconMail className="text-primary" size={22} />
              </div>

              <div className="flex flex-col justify-start items-start">
                <span className="text-slate-400 text-xs font-medium">
                  {t("contact.details.officialEmail")}
                </span>
                <a
                  href="mailto:iamdev_191019@gmail.com"
                  className="text-white text-xs font-medium hover:text-primary transition-colors duration-200"
                >
                  iamdev_191019@gmail.com
                </a>
              </div>
            </div>
            <div className="w-full flex flex-row justify-start items-start gap-space-xs">
              <div className="bg-white/5 w-10 h-10 rounded-lg flex justify-center items-center">
                <IconPhone className="text-primary" size={22} />
              </div>

              <div className="flex flex-col justify-start items-start">
                <span className="text-slate-400 text-xs font-medium">
                  {t("contact.details.officialPhone")}
                </span>
                <span className="text-white text-xs font-medium">
                  +62 858 9689 0881
                </span>
              </div>
            </div>
            <div className="w-full flex flex-row justify-start items-start gap-space-xs">
              <div className="bg-white/5 w-10 h-10 rounded-lg flex justify-center items-center">
                <IconBuildings className="text-primary" size={22} />
              </div>

              <div className="flex flex-col justify-start items-start">
                <span className="text-slate-400 text-xs font-medium">
                  {t("contact.details.address")}
                </span>
                <span className="text-white text-xs font-medium">
                  Metro Timur, Metro, Lampung
                </span>
              </div>
            </div>
            <div className="w-full flex flex-row justify-start items-start gap-space-xs">
              <div className="bg-white/5 w-10 h-10 rounded-lg flex justify-center items-center">
                <IconClock className="text-primary" size={22} />
              </div>

              <div className="flex flex-col justify-start items-start">
                <span className="text-slate-400 text-xs font-medium">
                  {t("contact.details.operatingHours")}
                </span>
                <span className="text-white text-xs font-medium">
                  {t("contact.details.operatingHoursValue")}
                </span>
                <span className="text-white/60 text-xs">
                  {t("contact.details.timezone")}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-space-xs mt-space-sm">
            <span className="text-sm text-white/70 uppercase font-medium">
              {t("contact.details.socialProfiles")}
            </span>

            <div className="w-full flex flex-row justify-start items-start gap-space-xs flex-wrap">
              <a
                href="https://github.com/ilhamSkyOf19"
                className="text-white flex flex-row justify-start items-center p-space-xs bg-white/10 rounded-xl gap-space-xs hover:bg-slate-600 transition-colors duration-200"
              >
                <IconBrandGithub size={16} />
                <span className="text-xs font-medium">GitHub</span>
              </a>
              <a
                href="#"
                className="text-white flex flex-row justify-start items-center p-space-xs bg-white/10 rounded-xl gap-space-xs hover:bg-slate-600 transition-colors duration-200"
              >
                <IconBrandInstagram size={16} />
                <span className="text-xs font-medium">Instagram</span>
              </a>
              {/* <a
                href="#"
                className="text-white flex flex-row justify-start items-center p-space-xs bg-white/10 rounded-xl gap-space-xs hover:bg-slate-600 transition-colors duration-200"
              >
                <IconBrandFacebook size={16} />
                <span className="text-xs font-medium">Facebook</span>
              </a> */}
            </div>
          </div>

          <div className="w-full rounded-xl mt-space-sm bg-white/2 flex flex-col justify-start items-start p-space-sm">
            <span className="text-xs font-medium text-white/70">
              {t("contact.details.serviceGuarantee")}
            </span>
            <CustomList className="text-xs mt-space-xs text-white/70">
              <CustomListItem icon={<IconStopwatch className="text-primary" />}>
                {t("contact.details.guarantees.0")}
              </CustomListItem>
              <CustomListItem icon={<IconLock className="text-primary" />}>
                {t("contact.details.guarantees.1")}
              </CustomListItem>
              <CustomListItem icon={<IconHeadset className="text-primary" />}>
                {t("contact.details.guarantees.2")}
              </CustomListItem>
            </CustomList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentOne;
