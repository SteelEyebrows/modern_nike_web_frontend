import styled, { keyframes } from 'styled-components';


export const Lnb =styled.div`
    z-index:100;
    height:30px;
    position:absolute;
    display: flex;
    right:60px;

        .authenticated{
            display: flex;
            color:#696969;
            &__logout{
                background-color:pink;
            }
        }
        .unauthenticated{
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'GmarketSansLight';
            color:#696969;
        }
    
`;

export const LoginModal =styled.div`
  .wrapper {
    opacity: 0;
    visibility: hidden;
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
  
  .veil {
    background-color: #333333;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
  }
  
  .content {
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
    
  .loginLogo{
      width:100px;
      height:auto;
  }

  .loginTiltle{
      font-family: 'GmarketSansBold';  
      color:black
  }
  

  .loginButton{
      background-color: #000; 
      border: none;
      color: white;
      width:250px;
      height:30px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 1em;
      margin:5px;
  }

  .signUp{
      color:#696969;
      font-size:0.5em;
  }
    
  @media (min-width: 768px) {
    .content {
      max-width: 50%;
    }
  }
  
`;