import React from 'react';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';
import * as styles from '../../../../styles'

const AddLoanProduct = ({ match, title }) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <div className="dashboard animated slideInUpTiny animation-duration-3">
                <ContainerHeader match={match} title={<IntlMessages id="sidebar.adminManagement.AddLoanProduct" />} />
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
                            <label for="producttype" style={styles.mylabels}>Product Type</label>
                            <select class="form-control" id="producttype">
                                <option>Personal Loans</option>
                                <option>Overdraft</option>
                                <option>Mortgage Loans</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="targetgroup" style={styles.mylabels}>Target Group</label>
                            <select class="form-control" id="targetgroup">
                                <option>Small Business</option>
                                <option>Property Developers</option>
                                <option>Women Groups</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="paymentmode" style={styles.mylabels}>Payment Mode</label>
                            <select class="form-control" id="paymentmode">
                                <option>Mobile Money</option>
                                <option>Bank Transfer</option>
                                <option>B2B Check off</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="appraisalperiod" style={styles.mylabels}>Appraisal Period</label>
                            <input className="form-control form-control-lg" id="appraisalperiod" type="number"
                                placeholder="Appraisal Period" min="0" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="issalaryadvance" style={styles.mylabels}>Salary Advance</label>
                            <select class="form-control" id="issalaryadvance">
                                <option>YES</option>
                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="loan" style={styles.mylabels}>Loan</label>
                            <select class="form-control" id="loan">
                                <option>select</option>
                                <option>select two</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="loanstatus" style={styles.mylabels}>Loan Status</label>
                            <select class="form-control" id="loanstatus">
                                <option>active</option>
                                <option>inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="maxprincipal" style={styles.mylabels}>Max Principal</label>
                            <input className="form-control form-control-lg" id="maxprincipal" type="number"
                                placeholder="Max Principal" min="0" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="minprincipal" style={styles.mylabels}>Min Principal</label>
                            <input className="form-control form-control-lg" id="minprincipal" type="number"
                                placeholder="Min Principal" min="0" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="maxrepayments" style={styles.mylabels}>Max Repayments</label>
                            <input className="form-control form-control-lg" id="maxprincipal" type="number"
                                placeholder="Max Repayments" min="0" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="minrepayments" style={styles.mylabels}>Min Repayments</label>
                            <input className="form-control form-control-lg" id="minprincipal" type="number"
                                placeholder="Min Repayments" min="0" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="maxinterestrate" style={styles.mylabels}>Max Interest Rate</label>
                            <input className="form-control form-control-lg" id="maxinterestrate" type="number"
                                placeholder="Max Interest Rate" min="0" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-Interest Rate4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="mininterestrate" style={styles.mylabels}>Min Interest Rate</label>
                            <input className="form-control form-control-lg" id="mininterestrate" type="number"
                                placeholder="Min Interest Rate" min="0" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="defaultrate" style={styles.mylabels}>Default Rate</label>
                            <input className="form-control form-control-lg" id="defaultrate" type="number"
                                placeholder="Default Rate" defaultValue="12"/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="interestduration" style={styles.mylabels}>Interest Duration</label>
                            <select class="form-control" id="interestduration">
                                <option>Monthly</option>
                                <option>Annually</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="repaymentsintervals" style={styles.mylabels}>Repayment Intervals</label>
                            <select class="form-control" id="repaymentsintervals">
                                <option>1 Month</option>
                                <option>2 Months</option>
                                <option>3 Months</option>
                                <option>4 Months</option>
                                <option>6 Months</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="interestmethod" style={styles.mylabels}>Interest Method</label>
                            <select class="form-control" id="interestmethod">
                                <option>Flat Rate</option>
                                <option>Reducing Rate</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="arrears" style={styles.mylabels}>Overdue Days(arrears)</label>
                            <input className="form-control form-control-lg" id="arrears" type="number"
                                placeholder="Overdue Days(arrears)" min="1" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="nonperformingassets" style={styles.mylabels}>Overdue Days(NPA)</label>
                            <input className="form-control form-control-lg" id="nonperformingassets" type="number"
                                placeholder="Overdue Days(NPA)" min="1" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-Interest Rate4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="minguarantors" style={styles.mylabels}>Min Guarantors</label>
                            <input className="form-control form-control-lg" id="minguarantors" type="number"
                                placeholder="Min Guarantors" min="1" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="maxguarantors" style={styles.mylabels}>Max Guarantors</label>
                            <input className="form-control form-control-lg" id="maxguarantors" type="number"
                                placeholder="Max Guarantors" min="1" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="guarantorfundonhold" style={styles.mylabels}>Guarantor Fund on Hold</label>
                            <select class="form-control" id="guarantorfundonhold">
                                <option>YES</option>
                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="multipledisbursals" style={styles.mylabels}>Multiple Disbursals</label>
                            <select class="form-control" id="multipledisbursals">
                                <option>YES</option>
                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="armotization" style={styles.mylabels}>Amortization</label>
                            <select class="form-control" id="armotization">
                                <option>Equal</option>
                                <option>Flexible</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="loanportfolio" style={styles.mylabels}>Loan Portfolio</label>
                            <select class="form-control" id="loanportfolio">
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="chargetype" style={styles.mylabels}>Charge Type</label>
                            <select class="form-control" id="chargetype">
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="interestaccount" style={styles.mylabels}>Interest Account</label>
                            <select class="form-control" id="interestaccount">
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="overpaymentaccount" style={styles.mylabels}>Overpayment Account</label>
                            <select class="form-control" id="overpaymentaccount">
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="writeofflosses" style={styles.mylabels}>Write off Losses</label>
                            <select class="form-control" id="writeofflosses">
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="allowedapproval" style={styles.mylabels}>Allowed approval?</label>
                            <select class="form-control" id="allowedapproval">
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="isloangroup" style={styles.mylabels}>Is group loan?</label>
                            <select class="form-control" id="isloangroup">
                                <option>YES</option>
                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="advancepayrecalc" style={styles.mylabels}>Advance Pay Recalculation</label>
                            <select class="form-control" id="advancepayrecalc">
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="realtimepenalties" style={styles.mylabels}>Realtime Penalties</label>
                            <select class="form-control" id="realtimepenalties">
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="salarypayability" style={styles.mylabels}>Calculate Salary Pay Ability</label>
                            <select class="form-control" id="salarypayability">
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="numberofdecimals" style={styles.mylabels}>Number of Decimals</label>
                            <input className="form-control form-control-lg" id="numberofdecimals" type="number"
                                placeholder="Number of Decimals" min="1" max="4" defaultValue="2"/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="creditlimitformula" style={styles.mylabels}>Credit Limit Formula</label>
                            <select class="form-control" id="creditlimitformula">
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="creditlimitformula" style={styles.mylabels}>Credit Limit Formula</label>
                            <select class="form-control" id="creditlimitformula">
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="pdisbursemjentmode" style={styles.mylabels}>Prefered Disbursement Mode</label>
                            <select class="form-control" id="pdisbursemjentmode">
                                <option>Mobile Money</option>
                                <option>Bank Transfer</option>
                                <option>B2C Check off</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="isdisbursement" style={styles.mylabels}>is Disbursement</label>
                            <select class="form-control" id="isdisbursement">
                                <option>YES</option>
                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="membersonly" style={styles.mylabels}>Members Only?</label>
                            <select class="form-control" id="membersonly">
                                <option>YES</option>
                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="maxallowedconcurrentloans" style={styles.mylabels}>Max Allowed Concurrent Loans</label>
                            <input className="form-control form-control-lg" id="maxallowedconcurrentloans" type="number"
                                placeholder="Max Allowed Concurrent Loans" min="1"/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="repaymentproduct" style={styles.mylabels}>Repayment Product</label>
                            <select class="form-control" id="repaymentproduct">
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="loanrepayrecalculation" style={styles.mylabels}>Loan Repayment Recalculation</label>
                            <select class="form-control" id="loanrepayrecalculation">
                                <option>YES</option>
                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="interestpostingmethod" style={styles.mylabels}>Interest Posting Method</label>
                            <select class="form-control" id="interestpostingmethod">
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="penaltyinvoicing" style={styles.mylabels}>Penalty Invoicing</label>
                            <select class="form-control" id="penaltyinvoicing">
                                <option>YES</option>
                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="interestinvoicing" style={styles.mylabels}>Interest Invoicing</label>
                            <select class="form-control" id="interestinvoicing">
                                <option>YES</option>
                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="offerletter" style={styles.mylabels}>Offer Letter</label>
                            <select class="form-control" id="offerletter">
                                <option>YES</option>
                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="enabledemandletter" style={styles.mylabels}>Enable Demand Letter</label>
                            <select class="form-control" id="enabledemandletter">
                                <option>YES</option>
                                <option>NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="branch" style={styles.mylabels}>Branch</label>
                            <select class="form-control" id="branch">
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    {/* button */}
                    <div className="col-12">
                        <div className="btn btn-primary btn-lg float-right">Add Loan Product</div>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default AddLoanProduct;