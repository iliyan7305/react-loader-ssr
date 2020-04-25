import React from 'react';
import Loadable from 'react-loadable';

const loading = () => <div>Loading...</div>;


const HomePage = Loadable({
  loader: () => import('../pages/Home'),
  loading,
});

const GreetingPage = Loadable({
  loader: () => import('../pages/Greeting'),
  loading
});

export default [
  {
    component: HomePage,
    path: '/',
    exact: true
  },
  {
    component: GreetingPage,
    path: '/greet/:name'
  }
];