import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../reducers/userReducer";
import "../../styles/modals/commonModal.css"

const SignoutModal = ({ visible, onClose }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toastData = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('came here buddy ')
    dispatch(removeUser());
    onClose();
    setTimeout(()=> {
        navigate('/login');
    }, 1000)
  }

  if (!visible) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="close-button" onClick={onClose}>
          X
        </div>

        <form onSubmit={handleSubmit} className="threadModal_form">
          <div className="signout_content">
            <h2>Are you sure you want to sign out?</h2>
          </div>

          <div className="threadModal_button">
            <button type="button" onClick={onClose}>
              Nevermind
            </button>
            <button type="submit">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignoutModal;