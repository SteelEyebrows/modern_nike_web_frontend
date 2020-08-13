import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import history from "./lib/routes/history";
import store from "./store";
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
  h2{
    font-family: 'GmarketSansBold';
  }
`;

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
