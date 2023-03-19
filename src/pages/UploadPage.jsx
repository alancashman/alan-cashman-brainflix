import UploadForm from "../components/UploadForm/UploadForm";
import Modal from "../components/ModalWindow/ModalWindow";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      window.addEventListener("click", handleCloseModal);
    }
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, [showModal, handleCloseModal]);

  let navigate = useNavigate();

  function handleCloseModal() {
    setShowModal(false);
    navigate("/");
  }

  return (
    <div>
      <UploadForm
        setShowModal={setShowModal}
        handleCloseModal={handleCloseModal}
      />
      <Modal showModal={showModal} handleCloseModal={handleCloseModal} />
    </div>
  );
}

export default UploadPage;
