import React from 'react';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';
import * as styles from '../../../../../../styles';

const AddBankDetails =({match, title}) => {
    return(
        <div className="animated slideInUpTiny animation-duration-3">
            <div className="dashboard animated slideInUpTiny animation-duration-3">
                <ContainerHeader match={match} title={<IntlMessages id="sidebar.adminManagement.BankManagement.AddBankDetails" />} />
            </div>
            <section className="jr-card">
                <form className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="bankcode" style={styles.mylabels}>Bank Code</label>
                            <input className="form-control form-control-lg" id="bankcode" type="text"
                                placeholder="Bank Code"  required/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="bankname" style={styles.mylabels}>Bank Name</label>
                            <input className="form-control form-control-lg" id="bankname" type="text"
                                placeholder="Bank Name"  required/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="glaccount" style={styles.mylabels}>Associated GL Account</label>
                            <select class="form-control" id="glaccount" required>
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="assignuser" style={styles.mylabels}>Assign User</label>
                            <select class="form-control" id="assignuser" required>
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="businessnumber" style={styles.mylabels}>Associated Business No.</label>
                            <select class="form-control" id="businessnumber" required>
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="currency" style={styles.mylabels}>Currency</label>
                            <select class="form-control" id="currency" required>
                                <option>KES</option>
                                <option>USD</option>
                                <option>EURO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="paymentmode" style={styles.mylabels}>Payment Mode</label>
                            <select class="form-control" id="paymentmode" required>
                                <option>Mobile Money</option>
                                <option>Bank Transfer</option>
                                <option>B2B Check off</option>
                            </select>
                        </div>
                    </div>
                    {/* button */}
                    <div className="col-12">
                        <div className="btn btn-primary btn-lg float-right">Capture Bank Details</div>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default AddBankDetails;