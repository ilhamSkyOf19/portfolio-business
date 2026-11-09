import {
  IconBrandGithub,
  IconBrandInstagram,
  IconClock,
  IconMail,
  IconMapPin,
  IconShare,
} from "@tabler/icons-react";
import logo from "../../../assets/logo-medium.png";
import { navigation } from "../../../utils/navigation";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import ModalShare from "../modals/ModalShare";
import useFooter from "./useFooter";

const Footer = () => {
  const { handleCloseModal, handleShowModal, modalRef, currentPathname } =
    useFooter();

  const { t } = useTranslation();

  return (
    <footer className="w-full bg-primary-dark flex flex-col justify-start items-start pt-space-lg px-space-sm md:px-space-md pb-space-md max-w-7xl mx-auto">
      <div className="w-full flex flex-col md:flex-row justify-start items-start md:gap-space-lg">
        <div className="w-full md:flex-1 flex flex-col justify-start items-start">
          <div className="flex flex-row justify-start items-center gap-space-sm">
            <div className="w-11 h-11 bg-white flex justify-center items-center">
              <img src={logo} alt="Logo" className="w-8" loading="lazy" />
            </div>
            <span className="text-2xl font-semibold text-white">
              IamDev<span className="text-primary">.</span>
            </span>
          </div>

          <div className="w-ful pt-space-sm">
            <span className="text-slate-300 text-base leading-7">
              {t("footer.description")}
            </span>
          </div>

          <div className="w-full pt-space-md flex flex-row justify-start items-center gap-space-xs">
            <a
              href="https://github.com/ilhamSkyOf19"
              target="_blank"
              className="w-10 h-10 flex justify-center items-center rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-100"
            >
              <IconBrandGithub size={18} className="text-slate-200" />
            </a>
            <a
              href="https://www.instagram.com/iiaammr_?utm_source=ig_web_button_share_sheet&exln=ZDNlZDc0MzIxNw=="
              target="_blank"
              className="w-10 h-10 flex justify-center items-center rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-100"
            >
              <IconBrandInstagram size={18} className="text-slate-200" />
            </a>
            <button
              type="button"
              className="w-10 h-10 flex justify-center items-center rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-100"
              onClick={() => handleShowModal()}
            >
              <IconShare size={18} className="text-slate-200" />
            </button>
          </div>
        </div>

        <div className="md:flex-2 grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-1 hidden md:block" />
          {/* navigation */}
          <div className="pt-space-md md:col-span-1 md:pt-0 flex flex-col justify-start items-start gap-space-sm md:gap-space-xs">
            <h2 className="text-white text-2xl font-semibold">
              {t("footer.navigation")}
            </h2>
            {navigation.map((item, index) => (
              <Fragment key={index}>
                {currentPathname === item.link ? (
                  <a
                    key={index}
                    href={item.id}
                    className="text-slate-300 text-base hover:text-white transition-all duration-100"
                  >
                    {t(`navigation.${item.key}`)}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={item.link}
                    className="text-slate-300 text-base font-medium hover:text-white transition-all duration-100"
                  >
                    {t(`navigation.${item.key}`)}
                  </Link>
                )}
              </Fragment>
            ))}
          </div>

          {/* services
          <div className="pt-space-md md:col-span-1 md:pt-0 flex flex-col justify-start items-start gap-space-sm md:gap-space-xs">
            <h2 className="text-white text-2xl font-semibold">
              {t(`footer.services`)}
            </h2>
            {services.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="text-slate-300 text-base hover:text-white transition-all duration-100"
              >
                {item.label}
              </Link>
            ))}
          </div> */}

          {/* contact */}
          <div className="pt-space-md md:col-span-1 md:pt-0 flex flex-col justify-start items-start gap-space-sm md:gap-space-xs">
            <h2 className="text-white text-2xl font-semibold">
              {t("footer.contact")}
            </h2>
            <div className="flex flex-row justify-start items-start gap-space-xs">
              <IconMail size={22} className="text-primary" />
              <span className="text-base text-slate-300">
                iamdev.191019@gmail.com
              </span>
            </div>
            <div className="flex flex-row justify-start items-start gap-space-xs">
              <IconMapPin size={22} className="text-primary" />
              <span className="text-base text-slate-300">
                Metro, Lampung, Indonesia
              </span>
            </div>
            <div className="flex flex-row justify-start items-start gap-space-xs">
              <IconClock size={22} className="text-primary" />
              <span className="text-base text-slate-300">
                {t("footer.operatingHoursValue")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* credit */}
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-space-sm pt-space-lg">
        <h2 className="text-2xl md:text-xl font-semibold md:flex-2 text-white text-center md:text-left">
          {t("footer.tagline")}
        </h2>

        <span className="md:flex-1 text-sm text-slate-400 text-center md:text-right w-full">
          © 2026 IamDev Studio. {t("footer.copyright")}
        </span>
      </div>

      <ModalShare modalRef={modalRef} handleCloseModal={handleCloseModal} />
    </footer>
  );
};

export default Footer;
