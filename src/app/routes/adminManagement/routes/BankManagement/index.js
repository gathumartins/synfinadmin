import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import asyncComponent from '../../../../../util/asyncComponent';

const BankMgt = ({ match }) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/add-bank-details`} />
            <Route path={`${match.url}/add-bank-details`} component={asyncComponent(() => import('./routes/AddBankDetails'))} />
            <Route path={`${match.url}/edit-bank-details`} component={asyncComponent(() => import('./routes/EditBankDetails'))} />
            <Route path={`${match.url}/relationship-manager`} component={asyncComponent(() => import('./routes/RelationshipManager'))} />
            <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))} />
        </Switch>
    </div>
)


export default BankMgt;    