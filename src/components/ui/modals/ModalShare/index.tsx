import { IconBrandWhatsapp, IconLink } from "@tabler/icons-react";
import { useState, type FC, type RefObject } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  modalRef: RefObject<HTMLDialogElement | null>;
  handleCloseModal: () => void;
};

const ModalShare: FC<Props> = ({ handleCloseModal, modalRef }) => {
  const { t } = useTranslation();

  const [isCopied, setIsCopied] = useState(false);

  // Mengambil URL halaman saat ini
  const currentUrl = window.location.href;

  // Kirim ke WhatsApp
  const handleShareWhatsapp = () => {
    const message = `${t("share.message")}\n${currentUrl}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    handleCloseModal();
  };

  // Salin tautan
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);

      setIsCopied(true);

      // Reset status setelah 2 detik
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Gagal menyalin tautan:", error);
    }
  };

  return (
    <dialog ref={modalRef} id="my_modal_2" className="modal">
      <div className="modal-box bg-base-200 rounded-2xl p-0 py-space-sm">
        <div className="w-full pb-space-xs border-b border-base-content/30">
          <h3 className="text-lg font-bold w-full px-space-sm">
            {t("share.title")}
          </h3>
        </div>

        <div className="w-full flex flex-col justify-start items-start mt-space-xs">
          <button
            type="button"
            onClick={handleShareWhatsapp}
            className="w-full p-space-sm duration-100 transition-all flex flex-row justify-start items-center gap-space-xs hover:bg-base-content/10"
          >
            <IconBrandWhatsapp size={24} />
            <span className="text-sm">{t("share.whatsapp")}</span>
          </button>

          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full p-space-sm duration-100 transition-all flex flex-row justify-start items-center gap-space-xs hover:bg-base-content/10"
          >
            <IconLink size={24} />
            <span className="text-sm">
              {isCopied ? t("share.copied") : t("share.copyLink")}
            </span>
          </button>
        </div>

        <div className="w-full flex flex-row justify-end items-end px-space-sm mt-space-sm">
          <button
            type="button"
            className="text-primary text-sm font-medium"
            onClick={handleCloseModal}
          >
            {t("share.cancel")}
          </button>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ModalShare;
