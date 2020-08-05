import * as React from 'react';
import {MainTemplate,Navigation} from '../components';
import {ProductContainer} from '../containers';
        
const Product = ({history}) =>(
    <MainTemplate header={<Navigation/>}>
        <ProductContainer history={history}/>
    </MainTemplate>
);

export default Product;