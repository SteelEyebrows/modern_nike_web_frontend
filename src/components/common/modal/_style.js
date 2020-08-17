import styled, { keyframes } from 'styled-components';

export const StyledModal =styled.div`

    opacity: 0;
    visibility: hidden;
    position: absolute;
    z-index: 10000;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;

  
  .modal-veil {
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
  
  .modal-content {
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
  }
  
  .close{
    position:absolute;
    right:10px;
    top:10px;
    padding: 0;
    border: none;
    background: none;
    cursor:pointer;
    img{
      width:30px;
      height:30px;
    }
  }

  @media (min-width: 768px) {
    .my-modal-content {
      max-width: 50%;
    }
  }
  
  .no-scroll {
    overflow: hidden !important;
  }
  
`;