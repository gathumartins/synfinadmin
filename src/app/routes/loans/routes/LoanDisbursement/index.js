import React from 'react';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';
import * as styles from '../../../../styles'

const LoanDisbursement = ({ match, title }) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <div className="dashboard animated slideInUpTiny animation-duration-3">
                <ContainerHeader match={match} title={<IntlMessages id="sidebar.loans.LoanDisbursement" />} />
            </div>
            <section>
                <div className="jr-card">
                    <form className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
                            <div className="form-group">
                                <label for="memberno" style={styles.mylabels}>Member No</label>
                                <input className="form-control form-control-lg" id="memberno" type="text"
                                    placeholder="Member No" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
                            <div className="form-group">
                                <label for="loantype" style={styles.mylabels}>Loan Type</label>
                                <select class="form-control" id="loantype">
                                    <option>Mortgage</option>
                                    <option>Education</option>
                                    <option>AgriBusiness</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
                            <div className="form-group">
                                <label for="disbursementamt" style={styles.mylabels}>Disbursement Amount</label>
                                <input className="form-control form-control-lg" id="disbursementamt" type="text"
                                    placeholder="1000,000" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
                            <div className="form-group">
                                <label for="disbursementdate" style={styles.mylabels}>Disbursement Date</label>
                                <input className="form-control form-control-lg" id="disbursementdate" type="date"
                                    placeholder={Date.now} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
                            <div className="form-group">
                                <label for="currency" style={styles.mylabels}>Currency</label>
                                <input className="form-control form-control-lg" id="currency" type="text"
                                    placeholder="Currency" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
                            <div className="form-group">
                                <label for="paymentmode" style={styles.mylabels}>Payment Mode</label>
                                <select class="form-control" id="paymentmode">
                                    <option>Mobile Money</option>
                                    <option>Bank Transfer</option>
                                    <option>B2B Check off</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="btn btn-primary btn-lg float-right">Create Account</div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default LoanDisbursement;