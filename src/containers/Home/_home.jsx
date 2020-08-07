import * as React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { adaptiveAction } from "../../store/actions";
import {Home} from '../../components';
import { useNetworkStatus } from 'react-adaptive-hooks/network';


const HomeContainer = (props) =>{
    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();
    const { effectiveConnectionType } = useNetworkStatus();

    const getAdaptive =(effectiveConnectionType)=>dispatch(adaptiveAction.adaptiveRequest(effectiveConnectionType));

    React.useEffect(() => {
        getAdaptive(effectiveConnectionType);
    },[]);
    

    return(
        <>
        {
            data.isFatching?
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                loading
            </div>:
            <Home images={data.images}/>
        } 
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    isFatching:rootReducer.adaptive.isFatching,
    images:rootReducer.adaptive.images,
});

export default HomeContainer;
