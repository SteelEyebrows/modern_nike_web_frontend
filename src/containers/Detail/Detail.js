import * as React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { detailAction,cartAction } from "../../store/actions";
import {Detail} from '../../components';
import { withRouter } from "react-router-dom";
import {Loading} from '../../components/common';
import storage from '../../lib/storage';

const DetailContainer = ({history,match}) =>{
    const [ quantity, setQuantity ] = React.useState(1);
    const [ size, setSize ] = React.useState("");
    const productID = match.params.id;
    const productColor = match.params.color;

    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();

    const getDetail =(id)=>dispatch(detailAction.detailRequest(id));
    const addCart =()=>{
        if(size!==""){
            const name = data.detail.name;
            const price = data.detail.price;

            const payload = {name,price,productColor,quantity,size};
            dispatch(cartAction.addCartRequest(payload));
        }else{
            alert('사이즈를 선택해주세요');
        }
    };
    
    const onChangeQuantity = (quantity) => setQuantity(quantity);
    const onChangeSize = (size) => setSize(size)


    const clickColorSelector =(color)=> history.push(`/detail/${match.params.id}/${color}`);
    React.useEffect(() => {
        // storage.remove("CART")
        getDetail(productID);
    },[]);

    return(
        <>
            {
             data.isFatching?
            <Loading />:
            <Detail 
                item={data.detail} 
                quantity={quantity}
                size={size}
                color={productColor} 
                clickColorSelector={clickColorSelector}
                onChangeQuantity ={onChangeQuantity}
                onChangeSize={onChangeSize}
                addCart={addCart}
            />
            } 
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    isFatching:rootReducer.detail.isFatching,
    detail:rootReducer.detail.detail,
});

export default withRouter(DetailContainer);
