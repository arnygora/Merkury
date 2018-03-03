import React from 'react';
import Header from './Header';
import Select from './atoms/UsersSelect';

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
                                <li className="row p-4 border border-bottom-0 m-0 align-items-center">
                                    <div className="col-lg-5">
                                        <div className="uno"></div>
                                    </div>
                                    <div className="col-lg-2 activity"><span className="far fa-clock text-success">Online now</span></div>
                                    <div className="col-lg-2 mail">arnygora@gmail.com</div>
                                    <div className="col-lg-2 phone">(067)22 30 841</div>
                                    <div className="col-lg-1"></div>
                                </li>
                                <li className="row p-4 border border-bottom-0 m-0 align-items-center">
                                    <div className="col-lg-5">
                                        <div className="dos"></div>
                                    </div>
                                    <div className="col-lg-2 activity"><span className="far fa-clock text-success">Online now</span></div>
                                    <div className="col-lg-2 mail">arnygora@gmail.com</div>
                                    <div className="col-lg-2 phone">(067)22 30 841</div>
                                    <div className="col-lg-1"></div>
                                </li>
                                <li className="row p-4 border border-bottom-0 m-0 align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tres"></div>
                                    </div>
                                    <div className="col-lg-2 activity"><span className="far fa-clock text-success">Online now</span></div>
                                    <div className="col-lg-2 mail">arnygora@gmail.com</div>
                                    <div className="col-lg-2 phone">(067)22 30 841</div>
                                    <div className="col-lg-1"></div>
                                </li>
                                <li className="row p-4 border border-bottom-0 m-0 align-items-center">
                                    <div className="col-lg-5">
                                        <div className="cuatro"></div>
                                    </div>
                                    <div className="col-lg-2 activity"><span className="far fa-clock text-secondary">30 minutes ago</span></div>
                                    <div className="col-lg-2 mail">arnygora@gmail.com</div>
                                    <div className="col-lg-2 phone">(067)22 30 841</div>
                                    <div className="col-lg-1"></div>
                                </li>
                                <li className="row p-4 border border-bottom-0 m-0 align-items-center">
                                    <div className="col-lg-5">
                                        <div className="cinco"></div>
                                    </div>
                                    <div className="col-lg-2 activity"><span className="far fa-clock text-secondary">40 minutes ago</span></div>
                                    <div className="col-lg-2 mail">arnygora@gmail.com</div>
                                    <div className="col-lg-2 phone">(067)22 30 841</div>
                                    <div className="col-lg-1"></div>
                                </li>
                                <li className="row p-4 border border-bottom-0 m-0 align-items-center">
                                    <div className="col-lg-5">
                                        <div className="seis"></div>
                                    </div>
                                    <div className="col-lg-2 activity"><span className="far fa-clock text-secondary">1 hour ago</span></div>
                                    <div className="col-lg-2 mail">arnygora@gmail.com</div>
                                    <div className="col-lg-2 phone">(067)22 30 841</div>
                                    <div className="col-lg-1"></div>
                                </li>
                                <li className="row p-4 border border-bottom-0 m-0 align-items-center">
                                    <div className="col-lg-5">
                                        <div className="ocho"></div>
                                    </div>
                                    <div className="col-lg-2 activity"><span className="far fa-clock text-secondary">2 hours ago</span></div>
                                    <div className="col-lg-2 mail">arnygora@gmail.com</div>
                                    <div className="col-lg-2 phone">(067)22 30 841</div>
                                    <div className="col-lg-1"></div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </Header>
            </div>
        );
    }
}

export default Users;