import { useLocation } from "react-router-dom";
import useModal from "../../../hooks/useModal";

const useFooter = () => {
  const { handleCloseModal, handleShowModal, modalRef } = useModal();
  const currentPathname = useLocation().pathname;
  return { modalRef, handleCloseModal, handleShowModal, currentPathname };
};

export default useFooter;
