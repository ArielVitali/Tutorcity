import React, { createContext, useState, useEffect } from "react";
import Toast from "../../components/Toast/index.jsx";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    open: false,
    message: "",
    type: "success",
  });

  const openToast = (message, type = "success", duration = 5000) => {
    setToast({
      open: true,
      message,
      type,
    });

    // Close the toast after the specified duration
    setTimeout(() => {
      closeToast();
    }, duration);
  };

  const closeToast = () => {
    setToast({ ...toast, open: false });
  };

  useEffect(() => {
    // Clear the timeout when the component unmounts or when toast state changes
    const timeoutId = setTimeout(() => {
      closeToast();
    }, "10000");

    return () => {
      clearTimeout(timeoutId);
    };
  }, [toast]);

  return (
    <ToastContext.Provider value={{ toast, openToast, closeToast }}>
      {children}
      {toast.open && (
        <Toast
          open={toast.open}
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
    </ToastContext.Provider>
  );
};
