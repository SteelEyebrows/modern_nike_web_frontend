import * as React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { authAction } from "../../store/actions";
import { withRouter } from "react-router-dom";
import {Register} from '../../components/auth';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Password should be longer than 6 characters")
    .required("Required"),
  email: Yup.string().required("Required"),  
});

const RegisterContainer = ({history,match}) =>{
    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const { register, handleSubmit, errors } = useForm({
      resolver: yupResolver(SignupSchema)
    });

    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();

    const onChangeUsername = event => setUserName( event.target.value);
    const onChangePassword = event => setPassword( event.target.value);
    const onChangeEmail = event => setEmail( event.target.value);
    const fetchRegister =()=>{
        dispatch(authAction.registerRequest({
            username,
            password,
            attributes: {
              email: email
            }
          }));
    }


    const onSubmit = () =>{
      try {
          fetchRegister();
      }catch(error) {
          console.log(error);
      }
    };
    return(
        <>
            <Register
                onChangeUsername={onChangeUsername}
                onChangePassword={onChangePassword}
                onChangeEmail={onChangeEmail}

                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                onSubmit={onSubmit}
            />
    
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
   
});

export default withRouter(RegisterContainer);
