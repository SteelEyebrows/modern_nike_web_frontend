import styled, { keyframes } from 'styled-components';


export const CartContainer =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:30px;    
    width: 100vw;
    height:100%;
    table{
        width:80vw;
        th {
            background-color: black;
            color: white;
            font-family: 'GmarketSansBold';
            font-weight: normal;
            padding: 20px 30px;
            text-align: center;
          }
        td {
            background-color: rgb(238, 238, 238);
            color: rgb(111, 111, 111);
            padding: 20px 30px;
          }
    }
    
    .calculator{
        width:80vw;
        height:50px;
        border:1px solid black;
        margin-top:1em;
        text-align:center;
    }

    .buttonBox{
        display: flex;
        justify-content: flex-end;
        width:80vw;
        button{
            background:black;
            margin:2em;
            width:100px;
            height:40px;
            border:none;
            font-family: 'GmarketSansBold';
            color:white;
        }
    }
`;

