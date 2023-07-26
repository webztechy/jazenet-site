import { hot } from "react-hot-loader/root";
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import allReducers from "./library/redux/reducers";
import { Provider } from 'react-redux';

import App from './components/App';

const store = createStore( allReducers );

/* const render = (Component) =>
  ReactDOM.render(<Component />, document.getElementById("root"));
 */

const render = (Component) =>
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Component />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);


render(hot(App));