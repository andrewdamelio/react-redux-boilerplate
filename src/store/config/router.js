import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../../containers/App';
import Main from '../../containers/Main';
import CounterPage from '../../containers/CounterPage';

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ Main } />
    <Route path="/counter" component={ CounterPage } />
  </Route>
);

export default routes;
