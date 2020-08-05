import styled, { keyframes } from 'styled-components';

export const Navbar =styled.div`
.logo{
    position:absolute;
    z-index:11;
    margin-top:30px;
    margin-left:25px;
    width:70px;
    height:auto;
}
`;

export const MenuContainer =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    text-align: center;
`;

export const Lnb =styled.div`
    z-index:15;
    height:30px;
    .mypage{
        position:absolute;
        display: flex;
        right:60px;
        a{
            margin:5px;
            text-decoration: none;
        }
        .login{
            color:#696969;
        }
    }
`;

export const Menu =styled.div`
    ul{
        position: relative;
        z-index:9;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50vw;
        height: 20px;
        text-align: center;
    }
`;
export const MenuComp =styled.li`
        z-index:10;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:10px;
        text-align: center;
        a{  
            width: 100px;
            font-family: 'GmarketSansBold';
            color:${props=>props.className=="active"?"red":"black"};
            text-decoration: none;
        }
`;

export const SubMenu =styled.div`
    position: absolute;
    left:0;
    z-index:7;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 0px;
    background-color: #fff;
    text-align: center;
    color:black;
    ul{
        padding-left:0px;
        list-style-type: none;
        text-decoration: none;

        li{
            width: 100px;
            margin:10px;
            a{
                text-decoration: none;
                font-family: 'GmarketSansLight';
                color:black;
                &:hover{
                    color: springgreen;
                }
            }
        }
    }
`;