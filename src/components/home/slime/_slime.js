import React,  { useState } from 'react';
import {type1,type2,type3,type4,Morphradius,Img,Inner} from './_style';

export default function Slime({ 
  hover,
  position,
  image,
  background,
  top,
  right,
  left,
  bottom,
  size,
  fontsize,
  typenumber,
  title,
  desc,
  onClick,
  before,
  after
}){
  
  let [ishover,setIsHover] = useState(false);
  const onMouseEnter=()=>setIsHover(true);
  const onMouseLeave=()=>setIsHover(false);

  return(
    <Morphradius 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}

      hover={hover} 
      image={image} 
      background={background} 
      position={position} 
      top={top} 
      right={right} 
      size={size} 
      left={left} 
      bottom={bottom} 
      typenumber={Whattype(typenumber)}
    >
          <Img before={before} after={after}>
             <Inner fontsize={fontsize} size={size}>
                {
                  ishover?
                  <div className="hovered">
                    
                    <p className="hovered__desc">{desc}</p>
                    <button onClick={onClick}>바로가기☛</button>
                  </div>
                  :
                  <div className="unhovered">
                    <p className="unhovered__title">{title}</p>
                  </div>
                }
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