import * as React from "react";
import { withRouter } from "react-router-dom";
import {DetailContainer} from'./_style';
import {Button} from '../Common';

const Detail = ({
    item,
    quantity,
    size,
    color,
    clickColorSelector,
    onChangeQuantity,
    onChangeSize,
    addCart
}) => {
    const allSizes=["240","245","250","255","260","265","270","275","280","285","290","295","300","305","310"];
    
    return (
    <>
    <DetailContainer>
        <div className="right_imageSet">
            {
                item.colors &&
                item.colors[color].images.map((img,i)=>{
                    return(
                        <img key={`image${i}`} src={img} alt={i} className="image"/>
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
                    item.colors &&
                    Object.keys(item.colors).map(i =>{
                        return(
                            <div 
                                className="colorSelector__color" 
                                key={`color${i}`} 
                                onClick={()=>clickColorSelector(i)}
                            >
                                <img  
                                    src={item.colors[i].images[0]} 
                                    alt={i} 
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className="sizeSelector">
                {
                    item.colors &&
                    allSizes.map((mapped)=>{
                        if(item.colors[color].sizes.indexOf(mapped)!==-1){
                            if(mapped === size){
                                return(
                                    <div 
                                        key={`size${mapped}`} 
                                        onClick={() =>onChangeSize(mapped)}
                                        className="sizeSelector__inStock__clicked">
                                            {mapped}
                                    </div>
                                )
                            }else{
                                return(
                                    <div 
                                        key={`size${mapped}`} 
                                        onClick={() =>onChangeSize(mapped)}
                                        className="sizeSelector__inStock">
                                            {mapped}
                                    </div>
                                )
                            }
                        }else{
                            return(
                                <div 
                                    key={`size${mapped}`} 
                                    className="sizeSelector__soldOut">
                                        {mapped}
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="quantity">
                <div className="quantity__controller">
                    <button onClick={() =>
                        quantity > 1 ? onChangeQuantity(quantity - 1) : ""
                    }>-</button>
                    <p>{quantity}</p>
                    <button onClick={() =>
                        onChangeQuantity(quantity + 1)
                    }>+</button>
                </div>
            </div>
            <Button>바로구매</Button>
            <Button onClick={addCart}>장바구니</Button>
        </div>
    </DetailContainer>
    </>
	);
}

export default withRouter(Detail);