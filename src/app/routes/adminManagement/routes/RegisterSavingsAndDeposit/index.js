import React from 'react';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';
import * as styles from '../../../../styles';

const RegSavingsAndDeposit =({match, title}) => {
    return(
        <div className="animated slideInUpTiny animation-duration-3">
            <div className="dashboard animated slideInUpTiny animation-duration-3">
                <ContainerHeader match={match} title={<IntlMessages id="sidebar.adminManagement.RegSavingsAndDeposit" />} />
            </div>
            <section className="jr-card">
                <form className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="productname" style={styles.mylabels}>Product Name</label>
                            <input className="form-control form-control-lg" id="productname" type="text"
                                placeholder="Product Name" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="shortname" style={styles.mylabels}>Short Name</label>
                            <input className="form-control form-control-lg" id="shortname" type="text"
                                placeholder="Short Name" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="description" style={styles.mylabels}>Description</label>
                            <input className="form-control form-control-lg" id="description" type="text"
                                placeholder="Description" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="currency" style={styles.mylabels}>Currency</label>
                            <select class="form-control" id="currency">
                                <option>KES</option>
                                <option>USD</option>
                                <option>EURO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="nominalannualinterest" style={styles.mylabels}>Nominal Annual Interest</label>
                            <input className="form-control form-control-lg" id="nominalannualinterest" type="number"
                                placeholder="Nominal Annual Interest" min="1"/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="compoundingperiod" style={styles.mylabels}>Interest Compounding Period</label>
                            <select class="form-control" id="compoundingperiod">
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="interestcalcusing" style={styles.mylabels}>Interest Calculated Using</label>
                            <select class="form-control" id="interestcalcusing">
                                <option>Daily Balance</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="interestpostingperiod" style={styles.mylabels}>Interest Posting Period</label>
                            <select class="form-control" id="interestpostingperiod">
                                <option>Monthly</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="minopeningbal" style={styles.mylabels}>Min Opening Balance</label>
                            <input className="form-control form-control-lg" id="minopeningbal" type="number"
                                placeholder="Min Opening Balance" min="1" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="withdrawalfee" style={styles.mylabels}>Apply Withdrawal Fees</label>
                            <select class="form-control" id="withdrawalfee">
                                <option>YES</option>
                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="enforceminBalance" style={styles.mylabels}>Enforce Min Balance</label>
                            <select class="form-control" id="enforceminBalance">
                                <option>YES</option>
                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="overdraftallowed" style={styles.mylabels}>Overdraft Allowed?</label>
                            <select class="form-control" id="overdraftallowed">
                                <option>YES</option>
                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="dormancytracking" style={styles.mylabels}>Dormancy Tracking</label>
                            <select class="form-control" id="dormancytracking">
                                <option>Enable</option>
                                <option>Disable</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="balallowedforInterestcal" style={styles.mylabels}>Balance Allowed For Interest Calc</label>
                            <input className="form-control form-control-lg" id="balallowedforInterestcal" type="number"
                                placeholder="Balance Allowed For Interest Calc" min="1" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="minbalance" style={styles.mylabels}>Min Balance</label>
                            <input className="form-control form-control-lg" id="minbalance" type="number"
                                placeholder="Min Balance" min="1" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="savingreference" style={styles.mylabels}>Saving Reference</label>
                            <select class="form-control" id="savingreference">
                                <option>E-Loan</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="overdraftportfolio" style={styles.mylabels}>Overdraft Portfolio</label>
                            <select class="form-control" id="overdraftportfolio">
                                <option>E-Loan</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="savingscontrol" style={styles.mylabels}>Savings Control</label>
                            <select class="form-control" id="savingscontrol">
                                <option>E-Loan Liabilities</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="savingstransinsuspense" style={styles.mylabels}>Savings Transfer in Suspense</label>
                            <select class="form-control" id="savingstransinsuspense">
                                <option>E-Loan Liabilities</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="interestonsavings" style={styles.mylabels}>Interest on Savings</label>
                            <select class="form-control" id="interestonsavings">
                                <option>E-Loan Expense</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="writeoff" style={styles.mylabels}>Write Off</label>
                            <select class="form-control" id="writeoff">
                                <option>E-Loan Expense</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="incomefromfees" style={styles.mylabels}>Income from Fees</label>
                            <select class="form-control" id="incomefromfees">
                                <option>E-Loan Income</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="incomefrompenalties" style={styles.mylabels}>Income from Penalties</label>
                            <select class="form-control" id="incomefrompenalties">
                                <option>E-Income</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="isgroupproduct" style={styles.mylabels}>Is Group Product?</label>
                            <select class="form-control" id="isgroupproduct">
                                <option>YES</option>
                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="minsharesrequired" style={styles.mylabels}>Min Shares Required</label>
                            <input className="form-control form-control-lg" id="minsharesrequired" type="number"
                                placeholder="Min Shares Required" min="1" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="status" style={styles.mylabels}>Status</label>
                            <select class="form-control" id="status">
                                <option>Active</option>
                                <option>Dormant/inActive</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="allowwithdrawals" style={styles.mylabels}>Allow Withdrawals</label>
                            <select class="form-control" id="allowwithdrawals">
                                <option>YES</option>
                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    {/* button */}
                    <div className="col-12">
                        <div className="btn btn-primary btn-lg float-right">Register Product</div>
                    </div>
                </form>
            </section>
        </div>
    )
}
export default RegSavingsAndDeposit;