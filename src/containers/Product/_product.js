import * as React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { productsAction } from "../../store/actions";
import {Products} from '../../components';


const ProductContainer = (props) =>{
    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();

    const getProducts =()=>dispatch(productsAction.productsRequest());
    
    React.useEffect(() => {
        getProducts();
    },[]);
    return(
        <>
        {
            data.isFatching?
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                loading
            </div>:
            <Products list={data.list}/>
        } 
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    list:rootReducer.products.list,
});

export default ProductContainer;
