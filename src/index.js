import React from 'react';
import ReactDOM from 'react-dom';
import sweetAlert from 'sweetalert';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/sweetalert.css';
import './css/normalize.css';
import './css/skeleton.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
