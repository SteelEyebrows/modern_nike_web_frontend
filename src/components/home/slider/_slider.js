import React, { useRef, useState } from "react";
import { useInterval } from "./_auto";
import {Container,SlideInner,Inner,Image} from './_style';
import Slime from '../Slime';

const Slider = ({ height, datalist, auto, speed }) => {
  const ref = useRef();
  const [position, setPosition] = useState(1);
  const [length] = useState(datalist.length + 1);
  const [percent] = useState(100 / length);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const SPEED = speed || 3000;

  const moveToRight = _ => {
    const currentPer = -position * percent;
    const movePer = position < length - 1 ? currentPer - percent : currentPer;

    if (position === length - 1) {
      ref.current.style.transition = `none`;
      ref.current.style.transform = `translateX(${0}%)`;
      setTimeout(() => {
        ref.current.style.transition = `all 0.3s ease-in`;
        ref.current.style.transform = `translateX(-${percent}%)`;
      }, 50);
    } else {
      ref.current.style.transition = `all 0.3s ease-in`;
      ref.current.style.transform = `translateX(${movePer}%)`;
    }

    setPosition(position < length - 1 ? position + 1 : 1);
  };

  const moveToLeft = _ => {
    const currentPer = -position * percent;
    const movePer = position !== 0 ? currentPer + percent : currentPer;

    if (position === 1) {
      ref.current.style.transition = `all 0.3s ease-in`;
      ref.current.style.transform = `translateX(${movePer}%)`;
      setTimeout(() => {
        ref.current.style.transition = `none`;
        ref.current.style.transform = `translateX(-${percent * (length - 1)}%)`;
      }, 300);
    } else {
      ref.current.style.transition = `all 0.3s ease-in`;
      ref.current.style.transform = `translateX(${movePer}%)`;
    }

    setPosition(position !== 1 ? position - 1 : length - 1);
  };

  useInterval(
    () => {
      auto && moveToRight();
    },
    !isMouseOver ? SPEED : null
  );

  return (
    <Container
      height={height}
      length={length}
      percent={percent}
      onMouseLeave={() => {
        setIsMouseOver(false);
      }}
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
    >
      <div className="btn" onClick={moveToLeft}>
        {"<"}
      </div>
      <div className="btn" style={{ float: "right" }} onClick={moveToRight}>
        {">"}
      </div>
      <div className="contents" ref={ref}>
      <SlideInner/>
        {
          datalist.map((data,i)=><Mapping data={data}/>)
        }
      </div>
    </Container>
  );
};

const Mapping = ({data})=>{
  return(
          <SlideInner>
                  <Inner>
                    <div>
                      {data.title}
                    </div>
                    <div>
                      {data.desc}
                    </div>
                  </Inner>
                  <Inner>
                    <Slime background={data.gradation} size={20} typenumber={1}/>
                    <Image src={data.image}/>
                  </Inner>
          </SlideInner>
  )
}

export default Slider;
