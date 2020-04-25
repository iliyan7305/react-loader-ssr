import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import Router from './router';

window.main = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
            <Router/>, document.getElementById('app')
        );
    })
}