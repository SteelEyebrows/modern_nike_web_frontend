import styled, { keyframes } from 'styled-components';


export const Container = styled.div`
height: ${props => props.height};
background: #ccc;
width: 100%;
overflow: hidden;
.contents {
  width: ${({ length }) => length * 100 + "%"};
  font-size: 20px;
  transition: all 0.3s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ percent }) => `translateX(-${percent}%)`};
}
.btn {
  position: relative;
  z-index: 10;
  width: 20px;
  height: 20px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  float: left;
  transform: translateY(-50%);
  border-radius: 50%;
  color: #ccc;
  cursor: pointer;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 0.5em;
  user-select: none;
  margin-top: -20px;
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
}
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