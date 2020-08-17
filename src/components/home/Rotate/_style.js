import styled, { keyframes } from 'styled-components';


const rotate = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0); }
`;

export const RotateContainer =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100vh;
  
  text{
    font-family: 'GmarketSansBold'; 
    font-size: 16px; 
    font-weight: bold; 
  }
  svg{
    z-index:3;
    margin-right:-500px;
    width: 400px;
    height: 400px;
    animation: ${rotate} 10s linear infinite;
  }
`
