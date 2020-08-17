import React, { useState, } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { authAction } from "../../store/actions";
import { withRouter } from "react-router-dom";
import LoginForm from '../../components/Auth/LoginForm';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers";

const Schema = Yup.object().shape({
    email: Yup.string().required("Required"),
    password: Yup.string()
      .min(6, "Password should be longer than 6 characters")
      .required("Required"),
});

const LoginFormContainer = ({history,match}) =>{
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(Schema)
      });

    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();

    const postLogin =(user)=>dispatch(authAction.loginRequest(user));
    
    const onChangeUsername = event => setUserName( event.target.value);
    const onChangePassword = event => setPassword( event.target.value);
   
    const goToRegister=()=>history.push(`/register`);
    const onSubmit = () =>{
      try {
          postLogin({userName,password})
      }catch(error) {
          console.log(error);
      }
    };

    return(
        <>
            <LoginForm
                onChangeUsername={onChangeUsername}
                onChangePassword={onChangePassword}
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

export default withRouter(LoginFormContainer);
