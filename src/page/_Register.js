import * as React from 'react';
import {MainTemplate} from '../components';
import {RegisterContainer,NavigationContainer} from '../containers';
        
const Register = ({history}) =>(
    <MainTemplate header={<NavigationContainer/>}>
        <RegisterContainer history={history}/>
    </MainTemplate>
);

export default Register;