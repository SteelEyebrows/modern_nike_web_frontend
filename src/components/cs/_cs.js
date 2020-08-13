import * as React from "react";
import {UpperBody,LowerBody} from './_style';
import {Modal} from '../common';
import Writing from './writing';

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
  showPostModal,
  isPostModalVisible,

  showWritingModal,
  isWritingModalVisible,
  onChangeTitle,
  onChangeInquiry,

  postAws,
  data,

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
              <button onClick={showWritingModal}>글쓰기</button>
              <Modal 
                 content={
                 <Writing 
                    onChangeTitle={onChangeTitle}
                    onChangeInquiry={onChangeInquiry}
                    register={register} 
                    handleSubmit={handleSubmit} 
                    errors={errors}
                    postAws={postAws}
                  />} 
                 show={isWritingModalVisible} 
                 close={showWritingModal}
              />
            </div>
            <ul>
              {
                data.map((one,i) => {
                  return(
                    <li onClick={showPostModal} key={one.id}>
                      {one.title}
                      <Modal 
                          content={<Temp title={one.title} inquiry={one.inquiry} />} 
                          show={isPostModalVisible} 
                          close={showPostModal}
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