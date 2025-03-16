import "../../styles/modals/commonModal.css";

const ConfirmationModal = ({
  visible,
  onClose,
  onConfirm,
  message = "Are you sure?",
  confirmText = "Confirm",
  cancelText = "Cancel",
}) => {

  if (!visible) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="close-button" onClick={onClose}>
          X
        </div>

        <div className="signout_content">
          <h2>{message}</h2>
        </div>

        <div className="threadModal_button">
          <button type="button" onClick={onClose}>
            {cancelText}
          </button>
          <button type="submit" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
