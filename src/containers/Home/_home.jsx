import * as React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { departmentAction,adaptiveAction } from "../../store/actions";
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
            <Home departments={data.departments} images={data.images}/>
        } 
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    isFatching:rootReducer.adaptive.isFatching,
    images:rootReducer.adaptive.images,
    departments:rootReducer.departments.departments
});

export default HomeContainer;
