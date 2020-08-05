import * as React from "react";
import useIntersection from 'react-use/lib/useIntersection';
import gsap, { Sine,TimelineMax,Linear,Power4 } from 'gsap';
import { withRouter } from "react-router-dom";
import {DetailContainer} from'./_style';
import {Button} from '../common';

const Detail = ({
    item,
    quantity,
    color,
    clickColorSelector,
    onChangeQuantity
}) => {
    const allSize=[240,245,250,255,260,265,270,275,280,285,290,295,300,305,310,320,330]
	return (
    <>
    <DetailContainer>
        <div className="right_imageSet">
            {
                item &&
                item.colors[color].images.map((img,i)=>{
                    return(
                        <img key={i} src={img} alt={i} className="image"/>
                    )
                })
            }

        </div>
        <div align="center" className="left_productInfo">
            <div className="Upper">
                <div className="Upper__left">
                    <div className="Upper__left__name">{item.name}</div>
                    <div className="Upper__left__color">{color}</div>
                </div>
                <div className="Upper__right">{item.price}</div>
            </div>
            <div className="sizeSelector">

            </div>
            <div className="colorSelector">
                {
                    item &&
                    Object.keys(item.colors).map(i =>{
                        return(
                            <div onClick={()=>clickColorSelector(i)}>
                            <img 
                                key={i} 
                                src={item.colors[i].images[0]} 
                                alt={i} 
                                className="color"
                            />
                            </div>
                        )
                    })
                }
            </div>
            <div className="quantity">
                <div className="quantity__controller">
                    <div onClick={() =>
                        quantity > 1 ? onChangeQuantity(quantity - 1) : ""
                    }>-</div>
                    {quantity}
                    <div onClick={() =>
                        onChangeQuantity(quantity + 1)
                    }>+</div>
                </div>
            </div>
            <Button>buy now</Button>

        </div>
    </DetailContainer>
    </>
	);
}

export default withRouter(Detail);