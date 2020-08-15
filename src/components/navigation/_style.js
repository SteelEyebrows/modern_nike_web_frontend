import styled, { keyframes } from 'styled-components';

export const Navbar =styled.div`

`;

export const UpperMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    z-index:1000;
    height:30px;
    right:60px;
    border-bottom:1px solid rgba(192,192,192,0.6);
    font-family: 'GmarketSansLight';
    font-size:0.9em;
    color:#696969;
    z-index:1000;
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
            div{
                cursor:pointer;
                margin:1em;
                img{
                    width:20px;
                    height:auto;
                }
            }
        }
`;

export const MenuContainer =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height:60px;
    text-align: center;
    .logo{
        position:absolute;
        left:20px;
        width:70px;
        height:auto;
        z-index:10;
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
    top:30px;
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