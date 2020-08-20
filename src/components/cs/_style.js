import styled from 'styled-components';

export const UpperBody =styled.div`
    width: 100%;
    height: 30vh;
    position:fixed;
    background:#fff;
    .LogoBox{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 30%;
        background:#fff;
        border-bottom:1px solid rgba(192,192,192,0.6);
        img{
            width:60px;
            height:auto;
        }
    }
    .SearchBox{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 70%;
        background:#fff;
        input{
            width: 400px;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
        }
    }
`;

export const LowerBody =styled.div`
    margin-top: 30vh;
    .writingButton{
        background-color:black;
        width:100px;
        height:30px;
        color: white;
        cursor: pointer;
    }
    .list{
        display: table;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        .header{
            display: flex;
            justify-content: space-between;
            padding:2em;
        }
        ul{
            li{
                width:70vw;
                height:auto;
                padding: 12px 20px;
                margin:1em;
                border-bottom:1px solid black;
                cursor: pointer;
            }
        }
    }
`;