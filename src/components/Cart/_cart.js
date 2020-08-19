import * as React from "react";
import { withRouter } from "react-router-dom";
import {CartContainer} from'./_style';


const Cart = ({
    shoppingCartData,
    deleteCartItem,
    sum
}) => {
   
    return (

    <CartContainer>
        {
            shoppingCartData?
            <div>
                <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>상품명</th>
                        <th>색상</th>
                        <th>가격</th>
                        <th>수량</th>
                        <th></th>
                    </tr>
                    {
                        shoppingCartData.map((item,i)=>{
                            return(
                                <tr key={i}>
                                    <td><img src={item.thumnail} width={150} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.productColor}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td><button onClick={()=>deleteCartItem(i)}>삭제</button></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <div className="calculator">
                   {sum}+2500 = 총합 {sum+2500}원
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