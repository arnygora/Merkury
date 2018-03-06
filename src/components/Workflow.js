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
                            <p>To Do <span className="text-secondary">(7)</span>
                                <span className="fas fa-angle-right text-secondary float-right"></span>
                            </p>
                            <ul className="list-group list-group-flush">
                                {
                                    Tasks.map ((item, index) => {
                                        return (
                                            <li key={index}
                                                className="list-group-item d-flex justify-content-between align-items-center mb-2 border">
                                                <div><span className="bg-primary counter float-left"></span>{item.title}
                                                    <span className="far fa-clock text-secondary d-block">{item.status}</span>
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
                            <p>In Progress <span className="text-secondary">(3)</span>
                                <span className="fas fa-angle-right text-secondary float-right"></span>
                            </p>
                            <ul className="list-group list-group-flush">
                                {
                                    Tasks.map ((item, index) => {
                                        return (
                                            <li key={index}
                                                className="list-group-item d-flex justify-content-between align-items-center mb-2 border">
                                                <div><span className="bg-primary counter float-left"></span>{item.title}
                                                    <span className="far fa-clock text-secondary d-block">{item.status}</span>
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
                            <p>Completed <span className="text-secondary">(5)</span>
                                <span className="fas fa-angle-right text-secondary float-right"></span>
                            </p>
                            <ul className="list-group list-group-flush">
                                {
                                    Tasks.map ((item, index) => {
                                        return (
                                            <li key={index}
                                                className="list-group-item d-flex justify-content-between align-items-center mb-2 border">
                                                <div><span className="bg-primary counter float-left"></span>{item.title}
                                                    <span className="far fa-clock text-secondary d-block">{item.status}</span>
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