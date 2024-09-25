import classNames from "classnames";
import { useEffect, useRef } from "react";

const Modal = ({ visible, setVisible, children }) => {
  const ModalRef = useRef(null);

  useEffect(() => {
    console.log(ModalRef.current);
    const handleClick = (e) => {
      if (ModalRef.current && e.target.contains(ModalRef.current)) {
        setVisible(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [setVisible]);

  const classes = classNames(
    "shadow-xl py-3 px-6 rounded absolute left-[50%] top-1/4 backdrop-blur-3xl backdrop-brightness-125 backdrop-grayscale z-50"
  );

  return (
    visible && (
      <div ref={ModalRef} className={classes}>
        {children}
      </div>
    )
  );
};

export default Modal;
