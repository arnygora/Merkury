import React from 'react';
import Header from './Header';
import Select from './atoms/UsersSelect';
import PageNavigation from './atoms/UsersPageNav';

class Users extends React.Component {
    render() {
        let UserSort = ["Active first", "New users", "Most active"];
        return (
            <div>
                <Header>
                    <section>
                        <div className="d-flex justify-content-between align-items-center">
                            <p>Users</p>
                            <Select sort={UserSort} />
                        </div>
                        <ul>
                            <li className="row text-secondary">
                                <div className="col-lg-5 name pl-5">Name</div>
                                <div className="col-lg-2 activity">Last activity</div>
                                <div className="col-lg-2 mail">Mail</div>
                                <div className="col-lg-2 phone">Phone</div>
                                <div className="col-lg-1"></div>
                            </li>
                        </ul>
                        <div className="bg-white">
                            <ul>
                                <li className="row p-3 border m-0 align-items-center userItem">
                                    <div className="col-lg-5 d-flex align-items-center">
                                        <div className="uno"></div>
                                        <p className="small pl-3 mb-0">John Doe<span className="d-block text-secondary">CEO</span></p>
                                    </div>
                                    <div className="col-lg-2 activity border-left-1"><span className="far fa-clock text-success">Online now</span></div>
                                    <div className="col-lg-2 mail">arnygora@gmail.com</div>
                                    <div className="col-lg-2 phone">(067) 22 30 840</div>
                                    <div className="col-lg-1 "></div>
                                </li>
                                <li className="row p-3 border border-bottom-0 m-0 align-items-center userItem">
                                    <div className="col-lg-5 d-flex align-items-center">
                                        <div className="dos"></div>
                                        <p className="small pl-3 mb-0">Nina Jones<span className="d-block text-secondary">UX Designer</span></p>
                                    </div>
                                    <div className="col-lg-2 activity"><span className="far fa-clock text-success">Online now</span></div>
                                    <div className="col-lg-2 mail">arnygora@gmail.com</div>
                                    <div className="col-lg-2 phone">(066) 22 30 548</div>
                                    <div className="col-lg-1"></div>
                                </li>
                                <li className="row p-3 border border-bottom-0 m-0 align-items-center userItem">
                                    <div className="col-lg-5 d-flex align-items-center">
                                        <div className="tres"></div>
                                        <p className="small pl-3 mb-0">Ann Clooney<span className="d-block text-secondary">Account Manager</span></p>
                                    </div>
                                    <div className="col-lg-2 activity"><span className="far fa-clock text-success">Online now</span></div>
                                    <div className="col-lg-2 mail">arnygora@gmail.com</div>
                                    <div className="col-lg-2 phone">(065) 54 30 555</div>
                                    <div className="col-lg-1"></div>
                                </li>
                                <li className="row p-3 border border-bottom-0 m-0 align-items-center userItem">
                                    <div className="col-lg-5 d-flex align-items-center">
                                        <div className="cuatro"></div>
                                        <p className="small pl-3 mb-0">Patric Smith<span className="d-block text-secondary">Project Manager</span></p>
                                    </div>
                                    <div className="col-lg-2 activity"><span className="far fa-clock text-secondary">30 minutes ago</span></div>
                                    <div className="col-lg-2 mail">arnygora@gmail.com</div>
                                    <div className="col-lg-2 phone">(067) 58 95 999</div>
                                    <div className="col-lg-1"></div>
                                </li>
                                <li className="row p-3 border border-bottom-0 m-0 align-items-center userItem">
                                    <div className="col-lg-5 d-flex align-items-center">
                                        <div className="cinco"></div>
                                        <p className="small pl-3 mb-0">Nicky Hunt<span className="d-block text-secondary">Product Designer</span></p>
                                    </div>
                                    <div className="col-lg-2 activity"><span className="far fa-clock text-secondary">40 minutes ago</span></div>
                                    <div className="col-lg-2 mail">arnygora@gmail.com</div>
                                    <div className="col-lg-2 phone">(099) 22 30 236</div>
                                    <div className="col-lg-1"></div>
                                </li>
                                <li className="row p-3 border border-bottom-0 m-0 align-items-center userItem">
                                    <div className="col-lg-5 d-flex align-items-center">
                                        <div className="seis"></div>
                                        <p className="small pl-3 mb-0">Jane Doe<span className="d-block text-secondary">Graphic Designer</span></p>
                                    </div>
                                    <div className="col-lg-2 activity"><span className="far fa-clock text-secondary">1 hour ago</span></div>
                                    <div className="col-lg-2 mail">arnygora@gmail.com</div>
                                    <div className="col-lg-2 phone">(088) 36 30 958</div>
                                    <div className="col-lg-1"></div>
                                </li>
                                <li className="row p-3 border border-bottom-1 m-0 align-items-center userItem">
                                    <div className="col-lg-5 d-flex align-items-center">
                                        <div className="ocho"></div>
                                        <p className="small pl-3 mb-0">Jane Doe<span className="d-block text-secondary">CEO</span></p>
                                    </div>
                                    <div className="col-lg-2 activity"><span className="far fa-clock text-secondary">2 hours ago</span></div>
                                    <div className="col-lg-2 mail">arnygora@gmail.com</div>
                                    <div className="col-lg-2 phone">(098) 52 30 877</div>
                                    <div className="col-lg-1 "></div>
                                </li>
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