import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import history from "./lib/routes/history";
import store from "./store";
import Amplify from 'aws-amplify';
import { createGlobalStyle } from 'styled-components';

// https://9elements.com/css-rule-order/

const GlobalStyle = createGlobalStyle`
  @font-face { font-family: 'GmarketSansBold'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff'); font-weight: normal; font-style: normal; }
  @font-face { font-family: 'GmarketSansLight'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff'); font-weight: normal; font-style: normal; }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: "ap-northeast-2",
    userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.AWS_COGNITO_APP_CLIENT_ID
  },
  Storage: {
    AWSS3: {
        bucket: 'verdemo', //REQUIRED -  Amazon S3 bucket
        region: 'ap-northeast-2', //OPTIONAL -  Amazon service region
    }},
  "aws_project_region": "ap-northeast-2",
  "aws_appsync_graphqlEndpoint": process.env.AWS_GRAPHQL_ENDPOINT,
  "aws_appsync_region": "ap-northeast-2",
  "aws_appsync_authenticationType": process.env.AWS_AUTHENTICATION_TYPE,
  "aws_appsync_apiKey": process.env.AWS_API_KEY
});

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <App/>
      </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
