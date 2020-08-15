import * as React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { cartAction } from "../../store/actions";
import {Cart} from '../../components';
import { withRouter } from "react-router-dom";
import {Loading} from '../../components/common';
import storage from '../../lib/storage';

const CartContainer = ({history,match}) =>{

    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();

    const getDetail =(id)=>dispatch(cartAction.deleteCartRequest(id));
    const shoppingCartData = storage.get("CART");
    return(
        <>
            <Cart
                shoppingCartData={shoppingCartData}
            />
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    isFatching:rootReducer.cart,
});

export default withRouter(CartContainer);
