import React, { Component } from 'react';
import Header from './Header';
import Box from "./atoms/Box";
import ReactHighcharts from "react-highcharts";

//config
import basicConfig from "../config/homeReportChart.config";
import statisticsChart from "../config/statisticActiveUsers.config";
import TotalSales from "../config/statisticDirectSales.config";
import ChanelSales from "../config/statisticChanelSales.config";
import WebSales from "../config/statisticWebSales.config";
import statisticTopSales from "../config/statisticTopSales.config";
import statisticTopViews from "../config/statisticTopViews.config";

class Statistic extends Component {
    render() {
        let stata = Object.assign ({}, basicConfig, statisticsChart );
        let chanelSales = Object.assign ({}, TotalSales, ChanelSales );
        let webSales = Object.assign ({}, TotalSales, WebSales);
        let topSales = Object.assign ({}, basicConfig, statisticTopSales);
        let topViews = Object.assign ({}, basicConfig, statisticTopViews);
        return (
            <div>
                <Header>
                <section>
                    <h4>Lorem Ipsum Stats</h4>
                    <div className="row activity">
                        <div className="col-12 col-md-5">
                            <div className="sales border">
                                <Box>
                                    <div className="d-flex justify-content-between align-items-center flex-sm-wrap">
                                        <p className="text-secondary">3.230<span className="d-block">Views</span></p>
                                        <div className="noGrid">
                                            <ReactHighcharts config = {topSales}></ReactHighcharts>
                                        </div>
                                    </div>
                                </Box>
                            </div>
                            <div className="views border">
                                <Box>
                                    <div className="d-flex justify-content-between align-items-center flex-sm-wrap">
                                        <p className="text-secondary">1.560<span className="d-block">Sales</span></p>
                                        <div className="noGrid">
                                            <ReactHighcharts config = {topViews}></ReactHighcharts>
                                        </div>
                                    </div>
                                </Box>
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="period border">
                                <Box>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h3>Active users</h3>
                                        <p className="pr-4"><a href="#0"><span className="fas fa-pencil-alt text-secondary p-2 rounded-circle border"></span></a>
                                        <a href="#0"><span className="fas fa-trash-alt text-secondary ml-3 p-2 rounded-circle border"></span></a></p>
                                    </div>
                                    <ReactHighcharts config = {stata}></ReactHighcharts>
                                </Box>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border mt-4">
                        <div className="d-flex justify-content-between pt-3">
                            <p className="text-secondary pl-4">Total sales</p>
                            <p className="pr-4"><a href="#0"><span className="fas fa-pencil-alt text-secondary p-2 rounded-circle border"></span></a>
                                <a href="#0"><span className="fas fa-trash-alt text-secondary ml-3 p-2 rounded-circle border"></span></a></p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-5 col-lg-4 mx-auto d-flex justify-content-around align-items-center">
                                <div className="directSales">
                                    <ReactHighcharts config = {TotalSales}></ReactHighcharts>
                                </div>
                                <p className="text-secondary">2,300$<span className="d-block small">Direct Sales</span></p>
                            </div>
                            <div className="col-12 col-md-5 col-lg-4 mx-auto d-flex justify-content-around align-items-center">
                                <div className="channelSales">
                                    <ReactHighcharts config = {chanelSales}></ReactHighcharts>
                                </div>
                                <p className="text-secondary">980$<span className="d-block small">Channel Sales</span></p>
                            </div>
                            <div className="col-12 col-md-8 mx-auto col-lg-4 d-flex justify-content-around align-items-center">
                                <div className="userSales">
                                    <ReactHighcharts config = {webSales}></ReactHighcharts>
                                </div>
                                <p className="text-secondary">1,250$<span className="d-block small">User Sales</span></p>
                            </div>
                        </div>
                    </div>
                </section>
            </Header>
        </div>
        );
    }
}

export default Statistic;