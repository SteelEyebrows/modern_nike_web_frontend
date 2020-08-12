import React, { useState,useEffect, useRef } from "react";
import { gsap } from "gsap";
import {Lnb,LoginModal} from"./_style";

// https://codesandbox.io/s/gsap-powered-modal-bobdj?file=/src/Modal.js
// https://codesandbox.io/s/login-form-nested-state-starter-924-w84fr?file=/src/styles.css:115-243


const Login = ({
  user,
  isAuthenticated,
  postLogOut,

  onChangeUsername,
  onChangePassword,
  toggleLogin,
  loginVisible,
  register,
  handleSubmit,
  errors,
  onSubmit,
  }) => {
  let modalVeil,modalWrapper,modalContent = null;

  const tl = useRef(gsap.timeline({ paused: true }));
  useEffect(() => {
    gsap.set(modalContent, { yPercent: -80, xPercent: -50 });
    tl.current
      .to(modalVeil, 0.1, { autoAlpha: 0.85 })
      .to(modalWrapper, 0.05, { autoAlpha: 1 }, 0)
      .to(modalContent,0.25,{yPercent: -50,autoAlpha: 1},0)
      .reverse();
  }, []);

  useEffect(() => {
    tl.current.reversed(!loginVisible);
  }, [loginVisible]);


  return (
    
    <Lnb>
      {
						isAuthenticated?
						<div className="authenticated">
							<div>{user.username}님 반갑습니다!</div>
							<div onClick={postLogOut} className="authenticated__logout">
								logout
							</div>
						</div>:
						<div className="unauthenticated">
							<div className="login" onClick={toggleLogin}>Login /</div>
           		<div><a href="#" >장바구니</a></div >
               <LoginModal>
                  <div className="wrapper" ref={e => (modalWrapper = e)}>
                  <div align="center" className="content" ref={e => (modalContent = e)}>
                      <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1280px-Logo_NIKE.svg.png"} alt="logo" className="logo" />
                      <h2 className="text-center">나이키 로그인</h2>
                      <form onSubmit={handleSubmit(onSubmit)}>
                          <div>
                            <label id="Email">Email</label>
                            <input
                              onChange={onChangeUsername}  
                              type="text" 
                              name="email" 
                              aria-labelledby="Email" 
                              ref={register} 
                            />
                            {errors.email && <p role="warning">⚠ {errors.email.message}</p>}
                          </div>
                          <div>
                            <label id="Password">Password</label>
                            <input 
                              onChange={onChangePassword} 
                              type="password" 
                              name="password" 
                              aria-labelledby="Password" 
                              ref={register} 
                            />
                            {errors.password && <p role="warning">⚠ {errors.password.message}</p>}
                          </div>
                        <input type="submit" data-testid="button" />
                      </form>
                  </div>
                  <div
                      className="veil"
                      ref={e => (modalVeil = e)}
                      onClick={toggleLogin}
                  />
                  </div>
              </LoginModal>    
						</div>
					}
    </Lnb>
  );
};

export default Login;