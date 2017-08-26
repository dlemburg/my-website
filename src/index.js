import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

/*
    // router would go within <Provider>{routes}</Provider>

    const routes = <Router></Router>
*/
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
