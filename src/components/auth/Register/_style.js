import styled, { keyframes } from 'styled-components';


export const RegisterContainer =styled.div`
    display: flex;
    justify-content: center;
    padding:100px;
    align-items: center;    
    
        .registerButton{
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
        .policyBox{
            overflow:scroll;
            width:300px; 
            height:150px; 
            padding:10px
        }
    
`;