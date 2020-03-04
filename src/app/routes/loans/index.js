import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const Loans = ({ match }) => (
  <div className="app-wrapper">
     <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/create-loan-account`}/>
      <Route path={`${match.url}/create-loan-account`} component={asyncComponent(() => import('./routes/CreateLoanAcc'))}/>
      <Route path={`${match.url}/loan-disbursement`} component={asyncComponent(() => import('./routes/LoanDisbursement'))}/>
      <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>
    </Switch>
  </div>
);

export default Loans;