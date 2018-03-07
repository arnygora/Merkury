import React, { Component } from 'react';
import Header from './Header';
import Tasks from "../config/workflowData";

class Workflow extends Component {
    render() {
        return (
            <div>
                <Header>
                <section>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <h4 className="d-flex justify-content-between align-items-center">To Do({Tasks.map.length})<span className="text-secondary"></span>
                                <span className="fas fa-angle-right text-secondary float-right"></span>
                            </h4>
                            <ul className="list-group list-group-flush">
                                {
                                    Tasks.map ((item, index) => {
                                        return (
                                            <li key={index}
                                                className="list-group-item d-flex justify-content-between align-items-center mb-2 border">
                                                <div><span className="bg-primary counter float-left">{(item.title).charAt(0)}</span>{item.title}
                                                    <span className="far fa-clock text-secondary d-block"> {item.status}</span>
                                                </div>
                                                <div className="col-1 dotLink">
                                                    <a className="dotLink" href="">...</a>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <h4 className="d-flex justify-content-between align-items-center">In Progress <span className="text-secondary"></span>
                                <span className="fas fa-angle-right text-secondary float-right"></span>
                            </h4>
                            <ul className="list-group list-group-flush">
                                {
                                    Tasks.map ((item, index) => {
                                        return (
                                            <li key={index}
                                                className="list-group-item d-flex justify-content-between align-items-center mb-2 border">
                                                <div><span className="bg-primary counter float-left">{(item.title).charAt(0)}</span>{item.title}
                                                    <span className="far fa-clock text-secondary d-block"> {item.status}</span>
                                                </div>
                                                <div className="col-1 dotLink">
                                                    <a className="dotLink" href="">...</a>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div className="col-12 col-md-10 col-lg-4 mx-auto">
                            <h4 className="d-flex justify-content-between align-items-center">Completed <span className="text-secondary"></span>
                                <span className="fas fa-angle-right text-secondary float-right"></span>
                            </h4>
                            <ul className="list-group list-group-flush">
                                {
                                    Tasks.map ((item, index) => {
                                        return (
                                            <li key={index}
                                                className="list-group-item d-flex justify-content-between align-items-center mb-2 border">
                                                <div><span className="bg-primary counter float-left">{(item.title).charAt(0)}</span>{item.title}
                                                    <span className="far fa-clock text-secondary d-block"> {item.status}</span>
                                                </div>
                                                <div className="col-1 dotLink">
                                                    <a className="dotLink" href="">...</a>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </section>
                </Header>
            </div>
        );
    }
}

export default Workflow;