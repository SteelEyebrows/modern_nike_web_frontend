import styled, { keyframes } from 'styled-components';


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
    .logo{
        width:100px;
        height:auto;
    }

        .input{
            width: 250px;
            height:35px;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
        }
        button{
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
  }
  
  @media (min-width: 768px) {
    .content {
      max-width: 50%;
    }
  }
  
`;