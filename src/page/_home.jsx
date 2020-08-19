import * as React from 'react';
import {MainTemplate} from '../components';
import {HomeContainer,NavigationContainer} from '../containers';
        
const Home = () =>(
    <MainTemplate header={<NavigationContainer />}>
        <HomeContainer />
    </MainTemplate>
);

export default Home;