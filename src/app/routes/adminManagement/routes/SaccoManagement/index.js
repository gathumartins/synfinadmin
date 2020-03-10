import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import asyncComponent from '../../../../../util/asyncComponent';

const BankMgt = ({ match }) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/add-sacco-branch`} />
            <Route path={`${match.url}/add-sacco-branch`} component={asyncComponent(() => import('./routes/CreateSaccoBranch'))} />
            <Route path={`${match.url}/edit-sacco-branch`} component={asyncComponent(() => import('./routes/EditSaccoBranch'))} />
            <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))} />
        </Switch>
    </div>
)


export default BankMgt;    