import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import App from './components/App';

window.main = () => {
    Loadable.preloadReady().then(() => {
        console.log(document.getElementById('app').innerHTML)
        ReactDOM.hydrate(<App/>, document.getElementById('app'));
    })
}