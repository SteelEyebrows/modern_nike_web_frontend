import * as React from 'react';
import {MainTemplate,Navigation} from '../components';
import {HomeContainer} from '../containers';
        
const Home = () =>(
    <MainTemplate header={<Navigation/>}>
        <HomeContainer/>
    </MainTemplate>
);

export default Home;