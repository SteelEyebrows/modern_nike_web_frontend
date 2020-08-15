//npx create-react-app login

import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {routes} from './lib/routes/routes';
import {Helmet} from 'react-helmet';
import Amplify from "aws-amplify";

function App() {


  React.useEffect(() => {
    Amplify.configure({
      Auth: {
        mandatorySignIn: true,
        region: "ap-northeast-2",
        userPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
        userPoolWebClientId: process.env.REACT_APP_AWS_COGNITO_APP_CLIENT_ID
      },
      Storage: {
        AWSS3: {
            bucket: 'verdemo', //REQUIRED -  Amazon S3 bucket
            region: 'ap-northeast-2', //OPTIONAL -  Amazon service region
        }
    },
//============
    });
  }, []);


  return (
    <>
      <Helmet htmlAttributes={{lang:"en"}}
        meta={[{
          name:'des',
          content:'content'
        }]}
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
