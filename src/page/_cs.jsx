import * as React from 'react';
// import {MainTemplate,Footer} from 'components';
import {MainTemplate,Navigation} from '../components';
import {CsContainer} from '../containers';
        
const Cs = () =>(
    <MainTemplate header={<Navigation/>}>
        <CsContainer />
    </MainTemplate>
);

export default Cs;