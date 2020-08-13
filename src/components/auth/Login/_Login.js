import React, { useState,useEffect, useRef } from "react";
import { gsap } from "gsap";
import {Lnb,LoginModal} from"./_style";
import LoginForm from './LoginForm';
import {Modal} from '../../common';

// https://codesandbox.io/s/gsap-powered-modal-bobdj?file=/src/Modal.js
// https://codesandbox.io/s/login-form-nested-state-starter-924-w84fr?file=/src/styles.css:115-243


const Login = ({
  user,
  isAuthenticated,
  postLogOut,
  goToRegister,

  onChangeUsername,
  onChangePassword,
  showLoginModal,
  isLoginModalVisible,

  register,
  handleSubmit,
  errors,
  }) => {

  return (
    
    <Lnb>
      {
						isAuthenticated?
						<div className="authenticated">
							<div>{user.username}님 반갑습니다!</div>
							<div onClick={postLogOut} className="authenticated__logout">
								logout
							</div>
            </div>
            
            :

						<div className="unauthenticated">
              <div className="register" onClick={goToRegister}>회원가입/</div>
							<div className="login" onClick={showLoginModal}>로그인</div>
           		<div><a href="#" >장바구니</a></div >
               <Modal 
                 content={
                 <LoginForm
                    onChangeUsername={onChangeUsername}
                    onChangePassword={onChangePassword}
                    register={register} 
                    handleSubmit={handleSubmit} 
                    errors={errors}
                  />} 
                 show={isLoginModalVisible} 
                 close={showLoginModal}
              />   
						</div>
					}
    </Lnb>
  );
};

export default Login;