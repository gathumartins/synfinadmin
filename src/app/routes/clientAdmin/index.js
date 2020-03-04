import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const clientAdmin = ({ match }) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/create-bank`} />
      <Route path={`${match.url}/create-bank`}
        component={asyncComponent(() => import('./routes/CreateBank'))} />
      <Route path={`${match.url}/view-bank`}
        component={asyncComponent(() => import('./routes/ViewBank'))} />
      <Route path={`${match.url}/create-user`}
        component={asyncComponent(() => import('./routes/CreateUser'))} />
      <Route path={`${match.url}/view-user`}
        component={asyncComponent(() => import('./routes/ViewUser'))} />
      <Route path={`${match.url}/add-branch`}
        component={asyncComponent(() => import('./routes/CreateBranch'))} />
      <Route path={`${match.url}/view-branch`}
        component={asyncComponent(() => import('./routes/ViewBranch'))} />
      <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))} />
    </Switch>
  </div>
);

export default clientAdmin;
