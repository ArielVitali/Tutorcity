import { useEffect, useRef } from "react";

import { IoCloseSharp as CloseIcon } from "react-icons/io5";

const DialogBox = ({ title, content, onClose, open }) => {
  const modalRef = useRef(null);

  const closeDialog = () => {
    onClose && onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeDialog();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
  };

  return (
    <div>
      {open && (
        <>
          <div className="fixed inset-0 bg-black opacity-40 z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              ref={modalRef} // Referencia al div del modal
              className="bg-white rounded-lg p-6 shadow-md rounded-3xl border border-gray-300 relative"
            >
              <CloseIcon
                aria-label="Cerrar"
                onClick={closeDialog}
                style={closeButtonStyle}
                className="cursor-pointer text-4xl text-gray-500 hover:text-gray-700"
              ></CloseIcon>
              <div className="mt-5">{content}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DialogBox;
