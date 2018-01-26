import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './style/index.css';
import App from './components/App';
import registerServiceWorker from './utilities/registerServiceWorker';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
