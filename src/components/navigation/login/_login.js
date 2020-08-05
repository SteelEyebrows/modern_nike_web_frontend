import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { gsap } from "gsap";
import {LoginModal} from"./_style";

// https://codesandbox.io/s/gsap-powered-modal-bobdj?file=/src/Modal.js
// https://codesandbox.io/s/login-form-nested-state-starter-924-w84fr?file=/src/styles.css:115-243

const Login = props => {
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
    tl.current.reversed(!props.show);
    if (props.show) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [props.show]);

  return ReactDOM.createPortal(
    <LoginModal>
        <div className="my-modal-wrapper" ref={e => (modalWrapper = e)}>
        <div align="center" className="my-modal-content" ref={e => (modalContent = e)}>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1280px-Logo_NIKE.svg.png"} alt="logo" className="logo" />
            <h5 className="text-center">나이키 로그인</h5>

            <form 
            onSubmit={props.close}
            className="form-signin">
                <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Email Address"
                /><br/>
                <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                /><br/>
                <label className="checkbox">
                <input
                    type="checkbox"
                    value="remember-me"
                    id="rememberMe"
                    name="rememberMe"
                />{" "}
                Remember me
                </label><br/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    Login
                </button><br/>
                <button className="btn btn-secondary" onClick={props.close}>
                    Close
                </button><br/>
            </form>
        </div>
        <div
            className="my-modal-veil"
            ref={e => (modalVeil = e)}
            onClick={props.close}
        />
        </div>
    </LoginModal>,
    document.body
  );
};

export default Login;