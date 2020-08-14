import React,{useState,useEffect} from "react";
import {UpperBody,LowerBody} from './_style';
import {Modal} from '../common';
import Writing from './writing';
import {LoginFormContainer} from '../../containers'

const Temp = ({
  title,
  inquiry,
  attachments
}) =>{
  return(
    <>
      <h2>{title}</h2>
      <h3>{inquiry}</h3>
    </>
  )
}


const Cs = ({ 
  reversePostModal,
  escPostModal,
  isPostModalVisible,

  reverseWritingModal,
  escWritingModal,
  isWritingModalVisible,
  onChangeTitle,
  onChangeInquiry,

  postAws,
  data,

  isAuthenticated,
  register,
  handleSubmit,
  errors
}) => {
  return (
    <>
        <UpperBody>
          <div class="LogoBox">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1280px-Logo_NIKE.svg.png"/>
          </div>
          <div align="center" class="SearchBox">
            <div>
              <h2>고객센터</h2>
              <input type="text" placeholder="무엇을 도와드릴까요?" />
            </div>
          </div>
        </UpperBody>
        <LowerBody>
          <div className="list">
            <div className="header">
              <h2>1:1 문의하기</h2>
              <button className="writingButton" onClick={reverseWritingModal}>글쓰기</button>
              <Modal 
                 content={ isAuthenticated?
                 <Writing 
                    onChangeTitle={onChangeTitle}
                    onChangeInquiry={onChangeInquiry}
                    register={register} 
                    handleSubmit={handleSubmit} 
                    errors={errors}
                    postAws={postAws}
                  />:<LoginFormContainer />} 
                 show={isWritingModalVisible} 
                 reverse={reverseWritingModal}
                 esc={escWritingModal}
              />
            </div>
            <ul>
              {
                data.map((one,i) => {
                  return(
                    <li onClick={reversePostModal} key={one.id}>
                      <p><b>Q.</b>{one.title}</p>
                      <Modal 
                          content={<Temp title={one.title} inquiry={one.inquiry} />} 
                          show={isPostModalVisible} 
                          reverse={reversePostModal}
                          esc={escPostModal}
                        />
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </LowerBody>
	  </>
    );
  };

export default Cs;