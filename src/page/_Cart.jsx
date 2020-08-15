import * as React from 'react';
import {MainTemplate} from '../components';
import {CartContainer,NavigationContainer} from '../containers';
        
const Cart = () =>(
    <MainTemplate header={<NavigationContainer />}> 
        <CartContainer />
    </MainTemplate>
);

export default Cart;