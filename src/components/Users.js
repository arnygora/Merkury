import React from 'react';
import Header from './Header';
import Select from './atoms/UsersSelect';
import userList from '../config/usersData';
import Pagination from './atoms/Pagination'

class Users extends React.Component {
    constructor() {
        super();

        let exampleItems = userList.map((item, index) => {
            item.id = index;
            return item;
        });

        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };
    }
    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    };


    //sort users by filter (select button)

    activeUsers = userList.filter(function(user) {
        return user.active === true;
    });
    FilterUsers = (e) => {

        switch(e) {
            case "Offline" :
                userList.filter(function(user) {
                    return user.active === false;
                });
                console.log(e);
                break;
            case "All users" :
                console.log(e);
                break;
            case "Active first" :
                console.log(e);
                break;
            default:
        }
    };
    render() {
        let UserSort = ["Active first", "All users", "Offline"];
        let userCount = this.activeUsers.length;
        return (
            <div>
                <Header>
                    <section>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Users <span className="text-secondary">({userCount})</span></h4>
                            <Select data={UserSort} onSortByFilter={this.FilterUsers}/>
                        </div>
                        <ul>
                            <li className="row text-secondary tableHeader">
                                <div className="col-lg-5 name pl-5">Name</div>
                                <div className="col-lg-2 activity">Last activity</div>
                                <div className="col-lg-2 mail">Mail</div>
                                <div className="col-lg-2 phone">Phone</div>
                                <div className="col-lg-1"></div>
                            </li>
                        </ul>
                        <div className="bg-white">
                            <ul className="usersList">
                                { this.activeUsers.map((item, index) => {
                                        return (
                                            <li key={index} className="row p-3 border m-0 align-items-center userItem">
                                                <div className="col-12 col-md-4 col-xl-5 d-flex align-items-center">
                                                    <div className={item.divForPhoto}></div>
                                                    <p className="small pl-3 mb-0">{item.userName}<span className="d-block text-secondary">{item.position}</span></p>
                                                </div>
                                                <div className="col-md-2 col-xl-2 activity"><span className="far fa-clock">{' ' + item.status}</span></div>
                                                <div className="col-12 col-sm-6 col-md-2 col-xl-2 mail">{item.email}</div>
                                                <div className="col-12 col-sm-6 col-md-2 col-xl-2 phone">{item.phoneNumber}</div>
                                                <div className="col-1 dotLink">
                                                    <a className="dotLink" href="">...</a>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                    </section>
                </Header>
            </div>
        );
    }
}
export default Users;