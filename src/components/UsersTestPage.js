import React from 'react';
import Header from './Header';
import UserList from '../config/usersData';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class UsersTestPage extends React.Component {
    userCard = (cell, row) => {
            return (
                <div style={{display:'flex', alignItems:'center'}}>
                    <div className={row.divForPhoto + ' mr-3'}></div>
                    <div>
                        <p className="mb-0" style={{fontSize:'1rem'}}>{row.userName}</p>
                        <span className="small text-secondary">{row.position}</span>
                    </div>
                </div>
                )
            };
    render() {
        let userCount = UserList.length;
        return (
            <div>
                <Header>
                    <section>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4>BootstrapTable | Users <span className="text-secondary">({userCount})</span></h4>
                        </div>
                        <BootstrapTable data={UserList} bodyStyle={{ background: '#fff' }} hover pagination>
                            <TableHeaderColumn isKey dataField='position' dataFormat={this.userCard}>Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='status'>Last activity</TableHeaderColumn>
                            <TableHeaderColumn dataField='email'>Mail</TableHeaderColumn>
                            <TableHeaderColumn dataField='phoneNumber'>Phone</TableHeaderColumn>
                            <TableHeaderColumn dataField='price'></TableHeaderColumn>
                        </BootstrapTable>
                    </section>
                </Header>
            </div>
        );
    }
}

export default UsersTestPage;