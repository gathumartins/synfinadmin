import React from 'react';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';
import * as styles from '../../../../../../styles';

const RelatinshipManager = ({ match, title }) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <div className="dashboard animated slideInUpTiny animation-duration-3">
                <ContainerHeader match={match} title={<IntlMessages id="Relationship Manager" />} />
            </div>
            <section className="jr-card">
                <form className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
                        <div className="form-group">
                            <label for="name" style={styles.mylabels}>Name</label>
                            <input className="form-control form-control-lg" id="name" type="text"
                                placeholder="Name" required />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
                        <div className="form-group">
                            <label for="mobilenumber" style={styles.mylabels}>Mobile Number</label>
                            <input className="form-control form-control-lg" id="mobilenumber" type="tel"
                                placeholder="Mobile Number" required />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
                        <div className="form-group">
                            <label for="emailaddress" style={styles.mylabels}>Email Address</label>
                            <input className="form-control form-control-lg" id="emailaddress" type="email"
                                placeholder="Email Address" required />
                        </div>
                    </div>
                    {/* button */}
                    <div className="col-12">
                        <div className="btn btn-primary btn-lg float-right">Add Relationship Manager</div>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default RelatinshipManager;