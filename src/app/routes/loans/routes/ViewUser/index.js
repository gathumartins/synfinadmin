import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IntlMessages from 'util/IntlMessages';
let id = 0;

function createData(firstname, lastname, email, mobilenumber, createdon, status) {
  id += 1;
  return { id, firstname, lastname, email, mobilenumber, createdon, status};
}

const data = [
  createData('Joe','Doe','joedoe@gmail.com', '0712121212', '2019-11-12', 'active'),
  createData('Sam','May','joedoe@gmail.com', '0733313325', '2019-11-12', 'active'),
];

function ViewUser() {

  return (
    <div className="row mb-md-3">
      <div className="col-12">
        <div className="jr-card">
          <div className="jr-card-header d-flex align-items-center">
            <h3 className="mb-0"><IntlMessages id="table.banks.list" /></h3>
            <div className="ml-3">
              {/* <span className="text-white badge badge-success">
                                    <IntlMessages id="table.dataTable"/> 
                                    </span> */}
            </div>
          </div>
          <div className="table-responsive-material">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>SNo</TableCell>
                  <TableCell align="left">First Name</TableCell>
                  <TableCell align="left">Last Name</TableCell>
                  <TableCell align="left">Email Address</TableCell>
                  <TableCell align="left">Mobile Number</TableCell>
                  <TableCell align="left">Created On</TableCell>
                  <TableCell align="left">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(n => {
                  return (
                    <TableRow key={n.id}>
                      <TableCell>{n.id}</TableCell>
                      <TableCell align="left">{n.firstname}</TableCell>
                      <TableCell align="left">{n.lastname}</TableCell>
                      <TableCell align="left">{n.email}</TableCell>
                      <TableCell align="left">{n.mobilenumber}</TableCell>
                      <TableCell align="left">{n.createdon}</TableCell>
                      <TableCell align="left">{n.status}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ViewUser