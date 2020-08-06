import * as React from 'react';
import {MainTemplate} from '../components';
import {ProductContainer,NavigationContainer} from '../containers';
        
const Product = ({history}) =>(
    <MainTemplate header={<NavigationContainer/>}>
        <ProductContainer history={history}/>
    </MainTemplate>
);

export default Product;