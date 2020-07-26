//npx create-react-app login

import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {routes} from './lib/routes/routes';
import {Helmet} from 'react-helmet';
import './App.css';

function App() {
  return (
    <>
      <Helmet htmlAttributes={{lang:"en"}}
        meta={[{
          name:'des',
          content:'content'
        }
        ]}
        title="shop"/>
        <Switch>
          {
            routes.map(({path,page,exact},i)=>(
              <Route exact={exact} path={path} component={page} key={i}/>
            ))
          }
      </Switch>     
    </>
  );
}

export default App;
