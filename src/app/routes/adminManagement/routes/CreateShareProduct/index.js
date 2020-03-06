import React from 'react';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';
import * as styles from '../../../../styles';

const CreateShareProduct = ({ match, title }) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <div className="dashboard animated slideInUpTiny animation-duration-3">
                <ContainerHeader match={match} title={<IntlMessages id="sidebar.adminManagement.CreateShareProduct" />} />
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
                            <label for="totalshares" style={styles.mylabels}>Total Shares</label>
                            <input className="form-control form-control-lg" id="totalshares" type="number"
                                placeholder="Total Shares" min="0" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="nominalprice" style={styles.mylabels}>Nominal Price</label>
                            <input className="form-control form-control-lg" id="nominalprice" type="text"
                                placeholder="Nominal Price" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="sharestobeissued" style={styles.mylabels}>Shares to be Issued</label>
                            <input className="form-control form-control-lg" id="sharestobeissued" type="number"
                                placeholder="Shares to be Issued" min="0" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="capitalvalue" style={styles.mylabels}>Capital Value</label>
                            <input className="form-control form-control-lg" id="capitalvalue" type="number"
                                placeholder="Capital Value" min="0" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="minsharesperclient" style={styles.mylabels}>Min Shares/Client</label>
                            <input className="form-control form-control-lg" id="minsharesperclient" type="number"
                                placeholder="Min Shares/Client" min="0" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="defaultsharesperclient" style={styles.mylabels}>Default Shares/Client</label>
                            <input className="form-control form-control-lg" id="defaultsharesperclient" type="number"
                                placeholder="Default Shares/Client" min="0" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="maxsharesperclient" style={styles.mylabels}>Max Shares/Client</label>
                            <input className="form-control form-control-lg" id="maxsharesperclient" type="number"
                                placeholder="Max Shares/Client" min="0" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="minactiveperiod" style={styles.mylabels}>Min Active Period</label>
                            <input className="form-control form-control-lg" id="minactiveperiod" type="number"
                                placeholder="Min Active Period" min="0" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="dividendsInactiveclients" style={styles.mylabels}>Dividends Inactive Clients</label>
                            <select class="form-control" id="dividendsInactiveclients">
                                <option>YES</option>
                                <option>No</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="sharereference" style={styles.mylabels}>Share Reference</label>
                            <select class="form-control" id="sharereference">
                                <option>One</option>
                                <option>Two</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="sharesuspends" style={styles.mylabels}>Share Suspends Control</label>
                            <select class="form-control" id="sharesuspends">
                                <option>One</option>
                                <option>Two</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="equity" style={styles.mylabels}>Equity</label>
                            <select class="form-control" id="equity">
                                <option>One</option>
                                <option>Two</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="incomefromfees" style={styles.mylabels}>Income From Fees</label>
                            <select class="form-control" id="incomefromfees">
                                <option>One</option>
                                <option>Two</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="status" style={styles.mylabels}>Status</label>
                            <select class="form-control" id="status">
                                <option>One</option>
                                <option>Two</option>
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
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                        <div className="form-group">
                            <label for="charges" style={styles.mylabels}>Charges</label>
                            <input className="form-control form-control-lg" id="charges" type="number"
                                placeholder="Charges" min="0" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="btn btn-primary btn-lg float-right">Create Share Product</div>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default CreateShareProduct;