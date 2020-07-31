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
    
`;
export const MenuComp =styled.li`

        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 60px;
        z-index:10;
        a{
            font-family: 'GmarketSansBold';
            color:${props=>props.className=="active"?"red":""};
            text-decoration: none;
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
    z-index:7;
    color:black;
    ul{
        text-decoration: none;
        width: 100vw;
        height: 60px;
        border-left: 1px solid #ddd;
        li{
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