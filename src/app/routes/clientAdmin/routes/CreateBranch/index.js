import React from 'react';
// import ContainerHeader from 'components/ContainerHeader'
// import IntlMessages from 'util/IntlMessages';
const CreateBranch=(match)=> {
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      {/* <ContainerHeader title={<IntlMessages id="sidebar.extraPages.contactUs"/>}  match={match}/> */}
      <div className="row">
        <div className="col-lg-12 col-md-8 col-sm-7 col-12">
          <form action="" className="contact-form jr-card">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label form="BranchName">Branch Name</label>
                  <input className="form-control form-control-lg" id="branchname" type="text"
                         placeholder="Branch Name"/>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="Branchcode"></label>
                  <input className="form-control form-control-lg" id="branchcode" type="text"
                         placeholder="Branch Code"/>
                </div>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input className="form-control form-control-lg" id="email" type="email"
                         placeholder="E-mail"/>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input className="form-control form-control-lg" id="phoneNumber" type="tel"
                         placeholder="Phone"/>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="webSite">Website</label>
                  <input className="form-control form-control-lg" id="webSite" type="text"
                         placeholder="Website"/>
                </div>
              </div>
            </div> */}

            <div className="row">
            <div className="col-md-6 col-12">
                <div className="form-group">
                  <label>Remarks</label>
                  <input className="form-control form-control-lg" id="remarks" type="text"
                         placeholder="Remarks"/>
                  {/* <textarea className="form-control form-control-lg" rows="6"/> */}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-group mb-0">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>

        
      </div>
    </div>
  );
}

export default CreateBranch;