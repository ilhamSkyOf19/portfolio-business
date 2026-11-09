import { IconCircleCheck, IconMail, IconSend2 } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { ADMIN_WA } from "../../../constants/constant";

const SectionFour = () => {
  const { t } = useTranslation();

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    "iamdev.191019@gmail.com",
  )}&su=${encodeURIComponent(
    "Konsultasi Proyek - IamDev",
  )}&body=${encodeURIComponent(
    "Halo Tim IamDev,\n\nSaya ingin berkonsultasi mengenai layanan pengembangan digital.\n\nTerima kasih.",
  )}`;

  const handleContactAdmin = () => {
    const message = t("whatsapp.technicalInquiryMessage");

    const whatsappUrl = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative bg-primary-dark w-full overflow-hidden pt-space-sm pb-space-lg px-space-sm">
      {/* glowing top */}
      <div className="w-120 h-120 rounded-full bg-[radial-gradient(circle,rgba(41,117,254,0.65)_0,transparent_55%)] opacity-50 blur-3xl pointer-events-none absolute -translate-x-1/2 left-1/2 -top-40" />

      {/* glowing bottom */}
      <div className="w-120 h-120 rounded-full bg-[radial-gradient(circle,rgba(41,117,254,0.65)_0,transparent_55%)] opacity-50 blur-3xl pointer-events-none absolute left-1/2 -bottom-40" />

      {/* content */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-start items-center pt-space-lg z-10 relative">
            <h2 className="font-bold text-5xl text-white text-center leading-16">
              {t("home.cta.title")}
            </h2>

            <span className="text-slate-300 pt-space-sm text-lg text-center leading-8 md:w-3/4">
              {t("home.cta.description")}
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-space-sm pt-space-md">
            <button
              type="button"
              className="text-white w-75 py-space-sm md:py-3 flex flex-row justify-center items-center gap-space-xs bg-primary rounded-xl shadow-xl shadow-primary/30 hover:bg-primary-light hover:-translate-y-0.5 transition-all duration-200 ease-in-out"
              onClick={() => handleContactAdmin()}
            >
              <IconSend2 size={24} />
              <span className="text-sm font-semibold">
                {t("home.cta.contactButton")}
              </span>
            </button>
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white w-75 py-space-sm md:py-3 flex flex-row justify-center items-center gap-space-xs bg-slate-800/70 rounded-xl hover:bg-slate-700 transition-all duration-200 ease-in-out"
            >
              <IconMail size={24} />
              <span className="text-sm font-semibold">
                iamdev.191019@gmail.com
              </span>
            </a>
          </div>

          {/* services */}
          <div className="flex md:flex-row flex-col justify-start items-center gap-space-sm py-space-lg">
            <div className="flex flex-row justify-start items-center gap-space-xs">
              <IconCircleCheck size={24} className="text-primary" />
              <span className="text-slate-400 font-medium text-sm">
                {t("home.cta.benefits.0")}
              </span>
            </div>
            <div className="flex flex-row justify-start items-center gap-space-xs">
              <IconCircleCheck size={24} className="text-primary" />
              <span className="text-slate-400 font-medium text-sm">
                {t("home.cta.benefits.1")}
              </span>
            </div>
            <div className="flex flex-row justify-start items-center gap-space-xs">
              <IconCircleCheck size={24} className="text-primary" />
              <span className="text-slate-400 font-medium text-sm">
                {t("home.cta.benefits.2")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
