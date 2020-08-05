import * as React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { detailAction } from "../../store/actions";
import {Detail} from '../../components';
import { withRouter } from "react-router-dom";

const DetailContainer = ({history,match}) =>{
    const [ quantity, setQuantity ] = React.useState(1);


    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();

    const getDetail =(id)=>dispatch(detailAction.detailRequest(id));
    const clickColorSelector =(color)=> history.push(`/detail/${match.params.id}/${color}`);
    const onChangeQuantity = (quantity) => setQuantity(quantity);
 


    React.useEffect(() => {
        getDetail(match.params.id);
    },[]);

    return(
        <>
            {
            data.isFatching?
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                loading
            </div>:
            <Detail 
                item={data.detail} 
                quantity={quantity}
                color={match.params.color} 
                clickColorSelector={clickColorSelector}
                onChangeQuantity ={onChangeQuantity}
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
