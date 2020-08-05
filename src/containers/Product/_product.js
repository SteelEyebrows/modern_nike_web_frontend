import * as React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { productsAction,detailAction } from "../../store/actions";
import { withRouter } from "react-router-dom";
import {Products} from '../../components';


const ProductContainer = ({history,match}) =>{
    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();

    const getProducts =()=>dispatch(productsAction.productsRequest());

    React.useEffect(() => {
        getProducts()
    },[]);

    const goDetail=(id,color)=>history.push(`/detail/${id}/${color}`);

    return(
        <>
        {
            data.isFatching?
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                loading
            </div>:
            <Products goDetail={goDetail} list={data.list}/>
        } 
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    list:rootReducer.products.list,
});

export default withRouter(ProductContainer);
