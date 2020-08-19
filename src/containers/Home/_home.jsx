import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { adaptiveAction } from "../../store/actions";
import {Home} from '../../components';
import {Loading} from '../../components/Common';
import { useNetworkStatus } from 'react-adaptive-hooks/network';


const HomeContainer = ({history,match}) =>{
    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();
    const { effectiveConnectionType } = useNetworkStatus();

    const getAdaptive =(effectiveConnectionType)=>
        dispatch(adaptiveAction.adaptiveRequest(effectiveConnectionType));

    useEffect(() => {
        getAdaptive(effectiveConnectionType);
    },[]);
    

    return(
        <>
        {
            data.isFatching?
            <Loading />
            :
            <Home 
                images={data.first} 
                second={data.second} 
                history={history}
            />
        } 
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    isFatching:rootReducer.adaptive.isFatching,
    first:rootReducer.adaptive.first,
    second:rootReducer.adaptive.second,
});

export default HomeContainer;
