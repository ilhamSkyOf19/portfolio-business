import { useRef } from "react";

const useModal = () => {
  // ref
  const modalRef = useRef<HTMLDialogElement | null>(null);

  // handle show modal
  const handleShowModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const handleCloseModal = () => {
    if (!modalRef.current) return;

    modalRef.current.close();
  };

  return {
    modalRef,
    handleCloseModal,
    handleShowModal,
  };
};

export default useModal;
