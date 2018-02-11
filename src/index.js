import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './state/store';
import './style/index.css';
import App from './components/App';
import registerServiceWorker from './utilities/registerServiceWorker';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
