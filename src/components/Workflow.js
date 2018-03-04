import React, { Component } from 'react';
import Header from './Header';

class Workflow extends Component {
    render() {
        return (
            <div>
                <Header>
                <section>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <p>To Do <span className="text-secondary">(7)</span>
                                <a href="#0"><span className="fas fa-angle-right text-secondary float-right"></span></a>
                            </p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border d-flex justify-content-between align-items-center mb-2">
                                    <div><span className="bg-primary counter float-left">N</span>New websites for Symo.com
                                        <span className="far fa-clock text-danger"> 5 days dalays</span></div>
                                    <div className="col-1 dotLink">
                                        <a className="dotLink" href="">...</a>
                                    </div>
                                </li>
                                <li className="list-group-item border d-flex justify-content-between align-items-center mb-2">
                                    <div><span className="bg-primary counter float-left">F</span>Free business PSD Template
                                        <span className="far fa-clock text-danger"> 2 days dalays</span></div>
                                    <div className="col-1 dotLink">
                                        <a className="dotLink" href="">...</a>
                                    </div>
                                </li>
                                <li className="list-group-item border d-flex justify-content-between align-items-center mb-2">
                                    <div><span className="bg-primary counter float-left">N</span>New logo for JCD.pl
                                        <span className="far fa-clock text-secondary d-block"> 2 days left</span></div>
                                    <div className="col-1 dotLink">
                                        <a className="dotLink" href="">...</a>
                                    </div>
                                </li>
                                <li className="list-group-item border d-flex justify-content-between align-items-center mb-2">
                                    <div><span className="bg-primary counter float-left">F</span>Free icons Set vol. 3
                                        <span className="far fa-clock text-secondary d-block"> 2 days left</span></div>
                                    <div className="col-1 dotLink">
                                        <a className="dotLink" href="">...</a>
                                    </div>
                                </li>
                                <li className="list-group-item border d-flex justify-content-between align-items-center mb-2">
                                    <div><span className="bg-primary counter float-left">F</span>Free business PSD Template
                                        <span className="far fa-clock text-danger"> 2 days dalays</span></div>
                                    <div className="col-1 dotLink">
                                        <a className="dotLink" href="">...</a>
                                    </div>
                                </li>
                                <li className="list-group-item border d-flex justify-content-between align-items-center mb-2">
                                    <div><span className="bg-primary counter float-left">N</span>New logo for JCD.pl
                                        <span className="far fa-clock text-secondary d-block"> 2 days left</span></div>
                                    <div className="col-1 dotLink">
                                        <a className="dotLink" href="">...</a>
                                    </div>
                                </li>
                                <li className="list-group-item border d-flex justify-content-between align-items-center mb-2">
                                    <div><span className="bg-primary counter float-left">F</span>Free icons Set vol. 3
                                        <span className="far fa-clock text-secondary d-block"> 2 days left</span></div>
                                    <div className="col-1 dotLink">
                                        <a className="dotLink" href="">...</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <p>In Progress <span className="text-secondary">(3)</span>
                                <a href="#0"><span className="fas fa-angle-right text-secondary float-right"></span></a>
                            </p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border d-flex justify-content-between align-items-center mb-2">
                                    <div><span className="bg-primary counter float-left">N</span>New websites for Symo.com
                                        <span className="far fa-clock text-danger"> 5 days dalays</span></div>
                                    <div className="col-1 dotLink">
                                        <a className="dotLink" href="">...</a>
                                    </div>
                                </li>
                                <li className="list-group-item border d-flex justify-content-between align-items-center mb-2">
                                    <div><span className="bg-primary counter float-left">F</span>Free business PSD Template
                                        <span className="far fa-clock text-danger"> 2 days dalays</span></div>
                                    <div className="col-1 dotLink">
                                        <a className="dotLink" href="">...</a>
                                    </div>
                                </li>
                                <li className="list-group-item border d-flex justify-content-between align-items-center mb-2">
                                    <div><span className="bg-primary counter float-left">N</span>New logo for JCD.pl
                                        <span className="far fa-clock text-secondary d-block"> 2 days left</span></div>
                                    <div className="col-1 dotLink">
                                        <a className="dotLink" href="">...</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-10 col-lg-4 mx-auto">
                            <p>Completed <span className="text-secondary">(5)</span>
                                <a href="#0"><span className="fas fa-angle-right text-secondary float-right"></span></a>
                            </p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border d-flex justify-content-between align-items-center mb-2">
                                    <div><span className="bg-primary counter float-left">N</span>New websites for Symo.com
                                        <span className="far fa-clock text-danger"> 5 days dalays</span></div>
                                    <div className="col-1 dotLink">
                                        <a className="dotLink" href="">...</a>
                                    </div>
                                </li>
                                <li className="list-group-item border d-flex justify-content-between align-items-center mb-2">
                                    <div><span className="bg-primary counter float-left">F</span>Free business PSD Template
                                        <span className="far fa-clock text-danger"> 2 days dalays</span></div>
                                    <div className="col-1 dotLink">
                                        <a className="dotLink" href="">...</a>
                                    </div>
                                </li>
                                <li className="list-group-item border d-flex justify-content-between align-items-center mb-2">
                                    <div><span className="bg-primary counter float-left">N</span>New logo for JCD.pl
                                        <span className="far fa-clock text-success d-block"> 2 days left</span></div>
                                    <div className="col-1 dotLink">
                                        <a className="dotLink" href="">...</a>
                                    </div>
                                </li><li className="list-group-item border d-flex justify-content-between align-items-center mb-2">
                                <div><span className="bg-primary counter float-left">N</span>New websites for Symo.com
                                    <span className="far fa-clock text-success"> 5 days dalays</span></div>
                                <div className="col-1 dotLink">
                                    <a className="dotLink" href="">...</a>
                                </div>
                            </li>
                                <li className="list-group-item border d-flex justify-content-between align-items-center mb-2">
                                    <div><span className="bg-primary counter float-left">F</span>Free business PSD Template
                                        <span className="far fa-clock text-success"> 2 days dalays</span></div>
                                    <div className="col-1 dotLink">
                                        <a className="dotLink" href="">...</a>
                                    </div>
                                </li>
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