import React, { useEffect, useRef } from "react";
import {StyledModal} from './_style';
import { gsap } from "gsap";
import {useKeyPress} from '../../../lib/hoc'

const Modal = ({
    content,
    show,
    reverse,
    esc
}) => {
  const pressESC = useKeyPress('Escape');
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

 
  useEffect(() => {
    esc();
  }, [show&&pressESC]);

  return (
    <StyledModal ref={e => (modalWrapper = e)}>
      <div className="modal-content" ref={e => (modalContent = e)}>
        {
            content
        }
        <button className="close" onClick={reverse}>
          <p>Close</p>
        </button>
      </div>
      <div
        className="modal-veil"
        ref={e => (modalVeil = e)}
      />
    </StyledModal>
  );
};

export default Modal;
