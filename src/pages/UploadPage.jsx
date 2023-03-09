import UploadForm from "../components/UploadForm/UploadForm";
import Modal from "../components/ModalWindow/ModalWindow";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  let navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

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
