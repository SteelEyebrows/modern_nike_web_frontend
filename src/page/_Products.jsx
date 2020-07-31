import * as React from 'react';
import {MainTemplate,Navigation} from '../components';
import {ProductContainer} from '../containers';
        
const Product = () =>(
    <MainTemplate header={<Navigation/>}>
        <ProductContainer/>
    </MainTemplate>
);

export default Product;