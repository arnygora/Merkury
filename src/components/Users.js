import React from 'react';
import Header from './Header';
import Select from './atoms/UsersSelect';
import PageNavigation from './atoms/UsersPageNav';

class Users extends React.Component {
    render() {

        let UserSort = ["Active first", "New users", "Most active"];
        let UserList = [
            {
                divForPhoto: 'uno',
                userName: 'John Doe',
                position: 'CEO',
                status: 'Online now',
                email: 'example@ukr.net',
                phoneNumber: '(067) 22 30 841'
            },
            {
                divForPhoto: 'dos',
                userName: 'Nina Jones',
                position: 'UX Designer',
                status: 'Online now',
                email: 'jhhokm@top.net',
                phoneNumber: '(066) 52 72 841'
            },
            {
                divForPhoto: 'tres',
                userName: 'Ann Clooney',
                position: 'Account Manager',
                status: 'Online now',
                email: 'sbserbse@re.net',
                phoneNumber: '(061) 23 98 888'
            },
            {
                divForPhoto: 'cuatro',
                userName: 'Patric Smith',
                position: 'Project Manager',
                status: '30 minutes ago',
                email: 'dvvvwvwwe@rrr.net',
                phoneNumber: '(055) 12 33 333'
            },
            {
                divForPhoto: 'cinco',
                userName: 'Nicky Hunt',
                position: 'Product Designer',
                status: '40 minutes ago',
                email: 'vwaefreb@ukr.rvv',
                phoneNumber: '(078) 66 30 555'
            },
            {
                divForPhoto: 'seis',
                userName: 'Jane Doe',
                position: 'Graphic Designer',
                status: '1 hour ago',
                email: 'poom@ukr.net',
                phoneNumber: '(011) 22 30 888'
            },
            {
                divForPhoto: 'ocho',
                userName: 'Alex Smith',
                position: 'Web Designer',
                status: '2 hours ago',
                email: 'rvvr@ukr.www',
                phoneNumber: '(067) 22 30 841'
            },
        ];
        let userCount = UserList.length;
        return (
            <div>
                <Header>
                    <section>
                        <div className="d-flex justify-content-between align-items-center">
                            <p>Users <span className="text-secondary">({userCount})</span></p>
                            <Select sort={UserSort} />
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
                                {
                                    UserList.map((item, index) => {
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
                        <PageNavigation />
                    </section>
                </Header>
            </div>
        );
    }
}

export default Users;