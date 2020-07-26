import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import history from "./lib/routes/history";
import store from "./store";

// const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <App/>
      </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
