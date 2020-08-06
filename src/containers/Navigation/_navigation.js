import * as React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { authAction } from "../../store/actions";
import { withRouter } from "react-router-dom";
import {Navigation} from '../../components';


const NavigationContainer = ({history,match}) =>{
    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();

    const postLogin =(user)=>dispatch(authAction.loginRequest(user));
    const postLogOut =()=>dispatch(authAction.logOutRequest());

    return(
        <>
            <Navigation 
                user={data.user}
                isAuthenticated={data.isAuthenticated}
                postLogin={postLogin}
                postLogOut={postLogOut}
            />
    
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    user: rootReducer.auth.user,
    isAuthenticated: rootReducer.auth.isAuthenticated,
});

export default withRouter(NavigationContainer);
