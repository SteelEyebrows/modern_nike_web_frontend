import styled, { keyframes } from 'styled-components';


export const LoginModal =styled.div`
.my-modal-wrapper {
    opacity: 0;
    visibility: hidden;
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
  }
  
  .my-modal-veil {
    background-color: #333333;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  
  .my-modal-content {
    position: absolute;
    padding: 1.5em;
    border-radius: 5px;
    background-color: #ffffff;
    top: 50%;
    left: 50%;
    width: 90%;
    box-shadow: 3px 3px 3px #333333;
    opacity: 0;
    visibility: hidden;
    z-index: 2;
    .form-signin{
        display: inline-block;
        vertical-align: middle;
    }
    .logo{
        width:100px;
        height:auto;
    }
  }
  
  @media (min-width: 768px) {
    .my-modal-content {
      max-width: 50%;
    }
  }
  
`;