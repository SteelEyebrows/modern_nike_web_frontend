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
        userPoolId: "ap-northeast-2_O6h5CbYvt",
        userPoolWebClientId: "qolqi2gi7svqi7p7dchsltq10"
      },
      Storage: {
        AWSS3: {
            bucket: 'verdemo', //REQUIRED -  Amazon S3 bucket
            region: 'ap-northeast-2', //OPTIONAL -  Amazon service region
        }
    },
      "aws_project_region": "ap-northeast-2",
      "aws_appsync_graphqlEndpoint": "https://6rha74vb45elpo6wue7tw2ladm.appsync-api.ap-northeast-2.amazonaws.com/graphql",
      "aws_appsync_region": "ap-northeast-2",
      "aws_appsync_authenticationType": "API_KEY",
      "aws_appsync_apiKey": "da2-53xamyyb3vagfcwl5xylphc43u"
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
