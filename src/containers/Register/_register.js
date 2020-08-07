import * as React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { authAction } from "../../store/actions";
import { withRouter } from "react-router-dom";
import {Register} from '../../components/auth';
import gsap, { Sine,TimelineMax,Linear,Power4 } from 'gsap';

const RegisterContainer = ({history,match}) =>{
    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    
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

    return(
        <>
            <Register
                onChangeUsername={onChangeUsername}
                onChangePassword={onChangePassword}
                onChangeEmail={onChangeEmail}
                fetchRegister={fetchRegister}
            />
    
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
   
});

export default withRouter(RegisterContainer);
