import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IntlMessages from 'util/IntlMessages';
let id = 0;

function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData(1,'Coop Bank',   '47159', '2019-11-12', 'active'),
  createData(2,'Equity Bank', '47237', '2019-11-12', 'active'),
  createData(3,'KCB',         '47262', '2019-11-12', 'active'),
  createData(4,'Stanchart',   '47305', '2019-11-12', 'active'),
  createData(5,'Credit Bank', '47356', '2019-11-12', 'active'),
];

function ViewBank() {

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
                  <TableCell align="left">Bank Name</TableCell>
                  <TableCell align="left">Bank Code</TableCell>
                  <TableCell align="left">Created On</TableCell>
                  <TableCell align="left">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(n => {
                  return (
                    <TableRow key={n.id}>
                      <TableCell>{n.name}</TableCell>
                      <TableCell align="left">{n.calories}</TableCell>
                      <TableCell align="left">{n.fat}</TableCell>
                      <TableCell align="left">{n.carbs}</TableCell>
                      <TableCell align="left">{n.protein}</TableCell>
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


export default ViewBank;