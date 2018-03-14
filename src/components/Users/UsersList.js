import React from 'react';

class UsersList extends React.Component {
    render() {
        return (
            <div>
                <div className="bg-white">
                    <ul className="usersList">
                        {this.props.data.map((item, index) => {
                            return (
                                <li key={index} className="row p-3 border m-0 align-items-center userItem">

                                    <div className="col-12 col-md-4 col-xl-5 d-flex align-items-center">
                                        <div className={item.divForPhoto}></div>
                                        <p className="small pl-3 mb-0">{item.userName}<span className="d-block text-secondary">{item.position}</span></p>
                                    </div>
                                    <div className="col-md-2 col-xl-2 activity">
                                    {
                                        item.active ? <span className="far fa-clock text-success">{' ' + item.status}</span> :
                                    	<span className="far fa-clock">{' ' + item.status}</span>
                                    }
                                        {/*<span className={item.active ? 'text-success' : null}>{' ' + item.status}</span>*/}
                                	</div>
                                    <div className="col-12 col-sm-6 col-md-2 col-xl-2 mail">{item.email}</div>
                                    <div className="col-12 col-sm-6 col-md-2 col-xl-2 phone">{item.phoneNumber}</div>
                                    <div className="col-1 dotLink">
                                        <a className="dotLink" href="">...</a>
                                        <ul className="hoverList">
                                            <li><a href="">Link 1</a></li>
                                            <li><a href="">Link 2</a></li>
                                            <li><a href="">Link 3</a></li>
                                        </ul>
                                    </div>
                                </li>
                            );
                        })
                    }
                    </ul>
                </div>
            </div>
        )}
    }
    export default UsersList;