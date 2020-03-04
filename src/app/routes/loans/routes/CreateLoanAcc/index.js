import React from 'react';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';
import * as styles from '../../../../styles'
const CreateLoanAcc=({match, title})=> {
  return (
   
      <div className="animated slideInUpTiny animation-duration-3">
        <div className="dashboard animated slideInUpTiny animation-duration-3">
            <ContainerHeader  match={match} title={<IntlMessages id="sidebar.loans.CreateLoanAcc" />}/>
        </div>
        <section>
          <div className="jr-card">
            <form className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <div className="form-group">
                <label for="memberno" style={styles.mylabels}>Member No</label>
                <input className="form-control form-control-lg" id="memberno" type="text"
                         placeholder="Member No"/>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <div className="form-group">
                <label for="loantype" style={styles.mylabels}>Loan Type</label>
                <select class="form-control" id="loantype">
                  <option>Mortgage</option>
                  <option>Education</option>
                  <option>AgriBusiness</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <div className="form-group">
                <label for="loanamt" style={styles.mylabels}>Loan Amount</label>
                <input className="form-control form-control-lg" id="loanamt" type="text"
                         placeholder="1000,000"/>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <div className="form-group">
                <label for="loanpurpose" style={styles.mylabels}>Loan Purpose</label>
                <input className="form-control form-control-lg" id="loanpurpose" type="text"
                         placeholder="Loan Purpose"/>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <div className="form-group">
                <label for="graceperiod" style={styles.mylabels}>Grace Period</label>
                <input className="form-control form-control-lg" id="graceperiod" type="number"
                         placeholder="Grace Period"/>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <div className="form-group">
                <label for="firstpaymentdate" style={styles.mylabels}>1st Installment</label>
                <input className="form-control form-control-lg" id="firstpaymentdate" type="date"
                         placeholder={Date.now}/>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <div className="form-group">
                <label for="installments" style={styles.mylabels}>Installments</label>
                <input className="form-control form-control-lg" id="installments" type="Number"
                         placeholder="Repayment Installments" min="1" max="48"/>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <div className="form-group">
                <label for="interestrate" style={styles.mylabels}>Interest Rate</label>
                <input className="form-control form-control-lg" id="interestrate" type="Number"
                         placeholder="Interest Rate" min="1" max="99"/>
              </div>
            </div>
            <div className="col-12">
              <div className="btn btn-primary btn-lg float-right">Create Account</div>
            </div>
            </form>
          </div>
        </section>
        
      </div>
  );
}

export default CreateLoanAcc;