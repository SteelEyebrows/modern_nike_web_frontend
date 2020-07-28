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

    React.useEffect(() => {
        setAdaptive(effectiveConnectionType);
    },[]);
    

    return(
        <>
        {
            data.isFatching?
            <div>loading</div>:
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
