const Toast = ({ message, type, onClose }) => {
  return (
    <div
      className={`toast toast-end ${type === "success" ? "success" : "error"}`}
    >
      <div
        className={`alert ${
          type === "success" ? "alert-success" : "alert-error"
        }`}
      >
        <span>{message}</span>
      </div>
      {/* You can add a close button or a timeout to automatically close the toast */}
      {/* <button className="close-btn" onClick={onClose}>
        &times;
      </button> */}
    </div>
  );
};

export default Toast;
