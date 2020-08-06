import React, { useState,useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Auth } from "aws-amplify";
import { gsap } from "gsap";
import {LoginModal} from"./_style";

// https://codesandbox.io/s/gsap-powered-modal-bobdj?file=/src/Modal.js
// https://codesandbox.io/s/login-form-nested-state-starter-924-w84fr?file=/src/styles.css:115-243

const Login = ({postLogin,close,show}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const tl = useRef(gsap.timeline({ paused: true }));

  let modalVeil = null;
  let modalWrapper = null;
  let modalContent = null;


  const onInputUsername = event => setUserName( event.target.value);
  const onInputPassword = event => setPassword( event.target.value);


  const handleSubmit =async event=>{
    try {
    //   const user = await Auth.signIn(userName, password);
        postLogin({userName,password})
    }catch(error) {
        console.log(error);
    }
  };


  useEffect(() => {
    gsap.set(modalContent, { yPercent: -80, xPercent: -50 });
    tl.current
      .to(modalVeil, 0.1, { autoAlpha: 0.85 })
      .to(modalWrapper, 0.05, { autoAlpha: 1 }, 0)
      .to(modalContent,0.25,{yPercent: -50,autoAlpha: 1},0)
      .reverse();
  }, []);

  useEffect(() => {
    tl.current.reversed(!show);
  }, [show]);

  return ReactDOM.createPortal(
    <LoginModal>
        <div className="wrapper" ref={e => (modalWrapper = e)}>
        <div align="center" className="content" ref={e => (modalContent = e)}>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1280px-Logo_NIKE.svg.png"} alt="logo" className="logo" />
            <h2 className="text-center">나이키 로그인</h2>

            
                <input
                className="input"
                type="text"
                name="username"
                placeholder="Email Address"
                onChange={onInputUsername}
                /><br/>
                <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={onInputPassword}
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
                <button onClick={()=>postLogin({userName,password})} type="submit">
                    Login
                </button><br/>  
            
            <div className="signUp">
                회원이 아니신가요?  <a>회원가입</a>
            </div>
        </div>
        <div
            className="veil"
            ref={e => (modalVeil = e)}
            onClick={close}
        />
        </div>
    </LoginModal>,
    document.body
  );
};

export default Login;