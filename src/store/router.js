import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import CounterPage from '../containers/CounterPage';
import AboutPage from '../containers/AboutPage';

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ CounterPage } />
    <Route path="/about" component={ AboutPage } />
    <Route path="*" component={ AboutPage } />
  </Route>
);

export default routes;
