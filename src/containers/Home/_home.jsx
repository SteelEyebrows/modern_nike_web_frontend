import * as React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { departmentAction,adaptiveAction } from "../../store/actions";
import {Home} from '../../components';
import { useNetworkStatus } from 'react-adaptive-hooks/network';

const HomeContainer = (props) =>{
    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();
    const { effectiveConnectionType } = useNetworkStatus();

    const getDepartments =(id)=>dispatch(departmentAction.departmentRequest(id));
    const setAdaptive =(effectiveConnectionType)=>dispatch(adaptiveAction.adaptiveRequest(effectiveConnectionType));

    const onclickEvent=()=>setAdaptive(effectiveConnectionType);
   
    return(
        <>
            <Home departments={data.departments}/>
            <button onClick={onclickEvent}>
                {effectiveConnectionType}
            </button>
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    adaptiveAction:rootReducer.adaptive.adaptive,
    departments:rootReducer.departments.departments
});

export default HomeContainer;
