import React, { useState, } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { authAction } from "../../store/actions";
import { withRouter } from "react-router-dom";
import {Login} from '../../components/auth';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers";

const SignupSchema = Yup.object().shape({
    email: Yup.string().required("Required"),
    password: Yup.string()
      .min(6, "Password should be longer than 6 characters")
      .required("Required"),
});

const LoginContainer = ({history,match}) =>{
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(SignupSchema)
      });

    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();

    const postLogin =(user)=>dispatch(authAction.loginRequest(user));
    const postLogOut =()=>dispatch(authAction.logOutRequest());

    const onChangeUsername = event => setUserName( event.target.value);
    const onChangePassword = event => setPassword( event.target.value);
    const showLoginModal = () => setIsLoginModalVisible(!isLoginModalVisible);

    const goToRegister=()=>history.push(`/register`);

    const onSubmit = () =>{
      try {
        // const user = await Auth.signIn(userName, password);console.log("rrrrrrr");
          postLogin({userName,password})
      }catch(error) {
          console.log(error);
      }
    };

    return(
        <>
            <Login
                user={data.user}
                isAuthenticated={data.isAuthenticated}
                postLogOut={postLogOut}
                goToRegister={goToRegister}
                onChangeUsername={onChangeUsername}
                onChangePassword={onChangePassword}
                showLoginModal={showLoginModal}
                isLoginModalVisible={isLoginModalVisible}

                register={register}
                handleSubmit={handleSubmit(onSubmit)}
                errors={errors}
            />
    
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    user: rootReducer.auth.user,
    isAuthenticated: rootReducer.auth.isAuthenticated,
});

export default withRouter(LoginContainer);
