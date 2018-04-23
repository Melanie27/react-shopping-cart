import React from 'react';
import ReactDOM from 'react-dom';
import sweetAlert from 'sweetalert';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.css';
import './css/sweetalert.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
