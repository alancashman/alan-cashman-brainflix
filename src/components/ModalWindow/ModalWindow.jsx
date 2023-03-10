import "./ModalWindow.scss";

function Modal({ handleCloseModal, showModal }) {
  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal__main">
        <h2 className="modal__heading">Upload Successful</h2>
        <p className="modal__text">Thanks for using BrainFlix!</p>
        <p>🙏</p>
        <button className="modal__btn" onClick={handleCloseModal}>
          Close
        </button>
      </section>
    </div>
  );
}

export default Modal;
