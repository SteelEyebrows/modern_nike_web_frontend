import styled, { keyframes } from 'styled-components';


export const Menu =styled.ul`
    padding-inline-start: 0px;
    position: absolute;
    top:0px;
    display: flex;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: 60px;
    position: relative;
    z-index:9;
    li{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 60px;
        a{
            color:#fff;
            text-decoration: none;
        }
    }
`;

export const SubMenu =styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: 45vh;
    background-color: #fff;
    opacity: 0;
    top: -25vh;
    z-index:8;
    color:black;
    ul{
        width: 100vw;
        height: 60px;
        border-left: 1px solid #ddd;
        li{
            a{
                text-decoration: none;
                color:black;
                &:hover{
                    color: springgreen;
                }
            }
        }
    }
`;