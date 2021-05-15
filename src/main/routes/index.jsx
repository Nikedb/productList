import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('modules/Home'));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  );
};

export default Routes;
