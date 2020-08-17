import React from 'react';
import {FormInput} from '../../Common';
import {StyledLoginForm} from './_style';

const LoginForm = ({
    onChangeUsername,
    onChangePassword,
    register,
    handleSubmit,
    errors
}) =>{
    return(
        <StyledLoginForm>
            <div align="center" className="content">
                <img 
                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1280px-Logo_NIKE.svg.png"} 
                    alt="loginLogo" 
                    className="loginLogo" 
                />
                <h2 className="loginTiltle">나이키 로그인</h2>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                        cn="RegisterInputBox" 
                        type="text" 
                        name="email"
                        register={register} 
                        errors={errors&&errors['email']}
                        changed={onChangeUsername}
                    />
                    <FormInput 
                        cn="RegisterInputBox" 
                        type="password" 
                        name="password" 
                        register={register} 
                        errors={errors&&errors['password']}
                        changed={onChangePassword}
                    />
                    <input type="submit" className="loginButton" data-testid="button" />
                </form>
            </div>
        </StyledLoginForm>
    )
}

export default LoginForm;