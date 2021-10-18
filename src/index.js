import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App.jsx';
import './styles.scss';
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
// import {Provider} from 'react-redux';
// import store from './redux/store';

render(
  <Provider store={store}>
    <HashRouter>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
