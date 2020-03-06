import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const AdminMgt = ({ match }) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/add-loan-product`}/>
            <Route path={`${match.url}/add-loan-product`} component={asyncComponent(() => import('./routes/AddLoanProduct'))}/>
            <Route path={`${match.url}/create-share-product`} component={asyncComponent(() => import('./routes/CreateShareProduct'))}/>
            <Route path={`${match.url}/register-savings&deposit-product`} component={asyncComponent(() => import('./routes/RegisterSavingsAndDeposit'))} />
            <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>
        </Switch>
    </div>
)


export default AdminMgt;    