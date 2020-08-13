import React, { useEffect, useRef } from "react";
import {StyledModal} from './_style';
import { gsap } from "gsap";

const Modal = ({
    content,
    show,
    close
}) => {
  const tl = useRef(gsap.timeline({ paused: true }));
  let modalVeil = null;
  let modalWrapper = null;
  let modalContent = null;

  useEffect(() => {
    gsap.set(modalContent, { yPercent: -80, xPercent: -50 });
    tl.current
      .to(modalVeil, 0.1, { autoAlpha: 0.85 })
      .to(modalWrapper, 0.05, { autoAlpha: 1 }, 0)
      .to(
        modalContent,
        0.25,
        {
          yPercent: -50,
          autoAlpha: 1
        },
        0
      )
      .reverse();
  }, []);

  useEffect(() => {
    tl.current.reversed(!show);
    if (show) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [show]);

  return (
    <StyledModal ref={e => (modalWrapper = e)}>
      <div className="modal-content" ref={e => (modalContent = e)}>
        {
            content
        }
        <button className="btn btn-secondary" onClick={close}>
          Close
        </button>
      </div>
      <div
        className="modal-veil"
        ref={e => (modalVeil = e)}
        onClick={close}
      />
    </StyledModal>
  );
};

export default Modal;
