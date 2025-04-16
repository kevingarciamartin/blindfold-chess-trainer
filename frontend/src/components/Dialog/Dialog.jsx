import "./Dialog.css";
import { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Dialog({ title, children, isOpen, onClose }) {
  const dialogRef = useRef(null);
  const titleId = title.split(" ").join("-").toLowerCase();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (isOpen) {
        if (!dialog.open) {
          dialog.showModal();
        }
      } else {
        if (dialog.open) {
          dialog.close();
        }
      }
    }
  }, [isOpen]);

  return ReactDOM.createPortal(
    <dialog
      ref={dialogRef}
      className="dialog"
      onClose={onClose}
      aria-labelledby={titleId}
    >
      <h2 id={titleId}>{title}</h2>
      <main>{children}</main>
    </dialog>,
    document.body
  );
}
