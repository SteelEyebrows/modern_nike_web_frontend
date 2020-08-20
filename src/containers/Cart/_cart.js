import * as React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { cartAction } from "../../store/actions";
import {Cart} from '../../components';
import { withRouter } from "react-router-dom";
import storage from '../../lib/storage';


const CartContainer = ({history,match}) =>{

    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();

    const deleteCartItem =(index)=>dispatch(cartAction.deleteCartRequest(index));
    const shoppingCartData = storage.get("CART");

    let sum = 320;
    // shoppingCartData.reduce((acc,cur) => parseInt(acc.price) + (parseInt(cur.price)*cur.quantity));

    
    return(
        <>
            <Cart
                shoppingCartData={shoppingCartData}
                deleteCartItem={deleteCartItem}
                sum = {sum}
            />
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    isFatching:rootReducer.cart,
});

export default withRouter(CartContainer);
