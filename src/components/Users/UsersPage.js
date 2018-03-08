import React from 'react';
import Header from '../Header';
import Select from '../atoms/UsersSelect';
import userList from '../../config/usersData';
import UsersList from "./UsersList";
import Pagination from '../atoms/Pagination'

class UsersPage extends React.Component {

    // firstly show all active users
    activeUsers = userList.filter((user) => {
        return user.active;
    });
    constructor() {
        super();
        let exampleItems = this.activeUsers.map((item, index) => {
            item.id = index;
            return item;
        });
        this.state = {
            exampleItems: exampleItems,
            pageOfItems: [],
        };
    }
    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    };

    //sort users by filter (select button)

    FilterUsers = (e) => {
        if(e === "Offline") {
           let Users = userList.filter((user) => {
                return !user.active;
            });
        } else if (e === "Active first") {
            let Users = userList.filter((user) => {
                return user.active;
            });
        }
        console.log(e);
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
                        <UsersList data={this.state.pageOfItems}>
                        </UsersList>
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                    </section>
                </Header>
            </div>
        );
    }
}
export default UsersPage;