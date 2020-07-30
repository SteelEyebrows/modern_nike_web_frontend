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
    background: white;
`;
export const SectionTwo =styled.div`
    width: 100%;
    height: 100vh;
    min-width: 100%;
    display: flex;
	justify-content: center;
	align-items: center;
	background: white;
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
export const SlideInner =styled.div`
    width: 100%;
    height: 300px;
    z-index: 5;
    background-color:white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Inner =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Image =styled.img`
    width: auto; 
    height: auto;
    max-width: 300px;
    max-height: 300px;
    margin-left: -50%;
    z-index:10;
`;