import styled from 'styled-components';

export const StyledPagenation = styled.nav`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    .pageNav{
        font-size:1em;
        font-family: 'GmarketSansBold';
        cursor:pointer;      
        border:1px solid rgba(0,0,0,0.3);
        border-radius:100%;
        width:30px;
        height:30px;
        &:hover{
            background:black;
            color:#fff;
        }
    }
`;