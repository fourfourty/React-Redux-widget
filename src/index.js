import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducers';
import App from './containers/App';
import './less/styles.less';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,document.getElementById('root')
);
