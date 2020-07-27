import React,  { StatelessComponent } from 'react';
import styled, { keyframes } from 'styled-components';
// https://wanderlust-webdesign.com/css-border-radius-can-do-that/
// https://www.dailytoolz.com/fancy-border-radius-generator/full-control-8-points.php#38.47.42.41-29.65.60.75-.

const type1 = keyframes`
0% { 
  border-radius: 52% 48% 63% 37% / 30% 41% 59% 70%
}
25% { 
  border-radius: 58% 42% / 38% 30% 70% 62%
}
50% {
  border-radius: 56% 44% 70% 30% / 45% 33% 67% 55%
}
75% { 
  border-radius: 58% 42% 75% 25% / 45% 46% 54% 57%
}
100% { 
  border-radius: 52% 48% 63% 37% / 30% 41% 59% 70%
  }
`
const type2 = keyframes`
0% { 
  border-radius: 54% 46% 67% 33% / 21% 33% 67% 79%
}
25% { 
  border-radius: 25% 75% 65% 35% / 36% 16% 84% 64%
}
50% {
  border-radius: 49% 51% 63% 37% / 42% 37% 63% 58%
}
75% { 
  border-radius: 38% 62% 79% 21% / 55% 29% 71% 45%
}
100% { 
  border-radius: 54% 46% 67% 33% / 21% 33% 67% 79%
  }
`
const type3 = keyframes`
0% { 
  border-radius: 47% 53% 54% 46% / 47% 23% 77% 53%
}
25% { 
  border-radius: 19% 81% 50% 50% / 37% 22% 78% 63%
}
50% {
  border-radius: 43% 57% 46% 54% / 25% 18% 82% 75%
}
75% { 
  border-radius: 41% 59% 74% 26% / 46% 49% 51% 54%
}
100% { 
  border-radius: 47% 53% 54% 46% / 47% 23% 77% 53%
  }
`
const type4 = keyframes`
0% { 
  border-radius: 36% 64% 84% 16% / 33% 47% 53% 67%
}
25% { 
  border-radius: 40% 60% / 53% 16% 84% 47%
}
50% {
  border-radius: 34% 66% 84% 16% / 45% 54% 46% 55%
}
75% { 
  border-radius: 56% 44% 43% 57% / 31% 51% 49% 69%
}
100% { 
  border-radius: 36% 64% 84% 16% / 33% 47% 53% 67%
  }
`

const Morphradius =styled.div`
  position: absolute;
  top:${props=>props.top}vh;
  left:${props=>props.left}vw;
  right:${props=>props.right}vw;
  bottom:${props=>props.bottom}vh;
  display: flex;
  overflow: hidden;
  background-image: url(${props=>props.image});
  background-size: cover;
  width:  ${props=>props.size}vw;
  height:  ${props=>props.size}vw;
  animation: ${props=>props.typenumber} 10s infinite;
  z-index:0;
  transition: all ease 1s;
  &:hover {
    transform: scale(1.02);

  }
`;
const Img =styled.div`
    position: absolute; 
    top:0;
    bottom:0;
    width: 100%;
    height: 100%;
    background: ${props=>props.before};
    transition: all ease 1s;
    &:hover {
      background:${props=>props.after};
    }
  }
`;
const Inner =styled.div`
  display:flex;
  alignItems:center;
  justifyContent:center;
  height: 100%:
`;

export default function Slime(props){
  let { image,top,right,left,bottom,size,typenumber,title,disc,before,after} = props;
 
  return(
    <Morphradius image={image} top={top} right={right} size={size} left={left} bottom={bottom} typenumber={Whattype(typenumber)}>
          <Img before={before} after={after}>
             <Inner>
                <div>
                  <h2>{title}</h2><h5>{disc}</h5>
                </div>
            </Inner>
          </Img>
    </Morphradius>
  )
}


function Whattype(typenumber){
  switch(typenumber){
    case 1:{
      return type1;
    }
    case 2:{
      return type2;
    }
    case 3:{
      return type3;
    }
    case 4:{
      return type4;
    }
  }

}  