import React from 'react';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';
import * as styles from '../../../../../../styles';

const EditSaccoBranch = ({ match, title }) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <div className="dashboard animated slideInUpTiny animation-duration-3">
                <ContainerHeader match={match} title={<IntlMessages id="sidebar.adminManagement.SaccoManagement.EditSaccoBranch" />} />
            </div>
            <section className="jr-card">
                <form className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
                        <div className="form-group">
                            <label for="branchcode" style={styles.mylabels}>Branch Code</label>
                            <input className="form-control form-control-lg" id="branchcode" type="text"
                                placeholder="Branch Code" required />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
                        <div className="form-group">
                            <label for="branchname" style={styles.mylabels}>Branch Name</label>
                            <input className="form-control form-control-lg" id="branchname" type="text"
                                placeholder="Branch Name" required />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
                        <div className="form-group">
                            <label for="contactspersonname" style={styles.mylabels}>Contact Person Name</label>
                            <input className="form-control form-control-lg" id="contactspersonname" type="text"
                                placeholder="Branch Person Name" required />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
                        <div className="form-group">
                            <label for="contactspersonphone" style={styles.mylabels}>Contact Person Phone</label>
                            <input className="form-control form-control-lg" id="contactspersonphone" type="tel"
                                placeholder="Contact Person Phone" required />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
                        <div className="form-group">
                            <label for="remarks" style={styles.mylabels}>Remarks</label>
                            <input className="form-control form-control-lg" id="remarks" type="text"
                                placeholder="Remarks" />
                        </div>
                    </div>
                    {/* button */}
                    <div className="col-12">
                        <div className="btn btn-primary btn-lg float-right">Edit Sacco Branch</div>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default EditSaccoBranch;