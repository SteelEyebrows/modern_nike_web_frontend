import React, { useState,useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { authAction } from "../../store/actions";
import { withRouter } from "react-router-dom";
import {Login} from '../../components/auth';


const LoginContainer = ({history,match}) =>{
    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  
    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();

    const postLogOut =()=>dispatch(authAction.logOutRequest());

    const showLoginModal = () => setIsLoginModalVisible(!isLoginModalVisible);
    const goToRegister=()=>history.push(`/register`);


    return(
        <>
            <Login
                user={data.user}
                isAuthenticated={data.isAuthenticated}
                postLogOut={postLogOut}
                goToRegister={goToRegister}
                showLoginModal={showLoginModal}
                isLoginModalVisible={isLoginModalVisible}
            />
    
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    user: rootReducer.auth.user,
    isAuthenticated: rootReducer.auth.isAuthenticated,
});

export default withRouter(LoginContainer);
