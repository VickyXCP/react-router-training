import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './02-URL-parameters';
// import App from './03-redirects';
// import App from './04-custom0link';
// import App from './05-preventing-transitions';
// import App from './06-no-match';
// import App from './07-recursive-paths';
// import App from './08-sidebar';
import App from './09-animated-transitions';
// import App from './10-anbiguous-matches';
// import App from './11-route-config';
// import App from './12-modal-gallery';
// import App from './13-staticrouter-context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
