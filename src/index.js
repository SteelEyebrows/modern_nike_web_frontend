import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import history from "./lib/routes/history";
import store from "./store";
import Amplify from 'aws-amplify';
import config from './config';

// const store = createStore(() => [], {}, applyMiddleware());
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
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

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <App/>
      </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
