import styled, { keyframes } from 'styled-components';


export const SectionSet =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: fixed;
`;

export const SectionOne =styled.div`
    width: 100%;
    height: 100vh;
    min-width: 100%;
    background: linear-gradient(#000000, #020217);
`;
export const SectionTwo =styled.div`
    width: 100%;
    height: 100vh;
    min-width: 100%;
    display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(#020217, #000000);
	z-index: 2;
`;
export const NextButton =styled.div`
    width:200px;
    height:200px;
    z-index: 5;
    position: absolute;
    right:0px;
    bottom:30px;
    cursor: pointer;
`;