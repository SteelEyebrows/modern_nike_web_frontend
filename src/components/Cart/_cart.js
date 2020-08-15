import * as React from "react";
import { withRouter } from "react-router-dom";
import {CartContainer} from'./_style';


const Cart = ({
    shoppingCartData
}) => {
   
    return (

    <CartContainer>
        {
            shoppingCartData?
            <div>
                <table>
                    <tr>
                        <th>상품명</th>
                        <th>색상</th>
                        <th>가격</th>
                    </tr>
                    {
                        shoppingCartData.map((item,i)=>{
                            return(
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.productColor}</td>
                                    <td>{item.price}</td>
                                </tr>
                            )
                        })
                    }
                </table>
                <div className="calculator">
                    
                </div>
                <div className="buttonBox">
                    <button>주문하기</button>
                </div>
            </div>
            :
            <div>
                빈 장바구니
            </div>
        }
    </CartContainer>

	);
}

export default withRouter(Cart);