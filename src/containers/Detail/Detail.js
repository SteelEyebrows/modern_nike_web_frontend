import * as React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { detailAction } from "../../store/actions";
import {Detail} from '../../components';
import { withRouter } from "react-router-dom";
import {Loading} from '../../components/common';

const DetailContainer = ({history,match}) =>{
    const [ quantity, setQuantity ] = React.useState(1);
    const [ size, setSize ] = React.useState("");

    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();

    const getDetail =(id)=>dispatch(detailAction.detailRequest(id));
    
    const onChangeQuantity = (quantity) => setQuantity(quantity);
    const onChangeSize = (size) => setSize(size)

    const clickColorSelector =(color)=> history.push(`/detail/${match.params.id}/${color}`);
    React.useEffect(() => {
        getDetail(match.params.id);
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
                color={match.params.color} 
                clickColorSelector={clickColorSelector}
                onChangeQuantity ={onChangeQuantity}
                onChangeSize={onChangeSize}
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
