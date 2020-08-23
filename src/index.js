import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import enUS from 'antd/lib/locale-provider/en_US'
import 'font-awesome/css/font-awesome.min.css';
import RouterApp from '../src/RouterApp'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router locale={enUS}>
        <RouterApp />
    </Router>
    ,document.getElementById('root'));

serviceWorker.unregister();
