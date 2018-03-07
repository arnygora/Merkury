import React, { Component } from "react";
import Header from "./Header";
import Box from "./atoms/Box";
import Select from "./atoms/HomeSelect";
import ReactHighcharts from "react-highcharts";

//config
import SalesChart from "../config/homeSalesChart.config";
import ReportChart from "../config/homeReportChart.config";
import UserList from "../config/usersData";
import Tasks from "../config/workflowData";

class Home extends Component {
        filterSales = (bb) => {
            console.log(this.saleChart);
            let sale = this.saleChart.getChart();
            let saleWeek = [['Websites', 3], ['logo', 9], ['Social Media', 1], ['Adwords', 7], ['E-Commerce', 5]],
                saleMonth = [['Websites', 6], ['logo', 6], ['Social Media', 5], ['Adwords', 2], ['E-Commerce', 9]],
                saleYear = [['Websites', 9], ['logo', 4], ['Social Media', 3], ['Adwords', 4], ['E-Commerce', 1]];
            switch(bb) {
                case "Last week" :
                    sale.series[0].setData(saleWeek, true);
                    break;
                case "Last month" :
                    sale.series[0].setData(saleMonth, true);
                    break;
                case "Last year" :
                    sale.series[0].setData(saleYear, true);
                    break;
                default:
            }
        };

        filterReport = (aa) => {
            let report = this.reportChart.getChart();
            let reportWeek = [[0, 700], [9, 600], [15, 500], [21, 400], [27, 350], [33, 300], [39, 200],
                [45, 100], [54, 180], [60, 250], [75, 400], [80, 450], [80, 450]];
            let reportMonth = [[0, 100], [9, 300], [15, 350], [21, 400], [27, 200], [33, 300], [39, 500],
                [45, 600], [54, 700], [60, 350], [75, 400], [80, 500], [80, 500]];
            let reportYear = [[0, 500], [9, 600], [15, 700], [21, 300], [27, 200], [33, 100], [39, 50],
                [45, 150], [54, 250], [60, 350], [75, 300], [80, 250], [80, 250]];
            switch(aa) {
                case "Last week" :
                    report.series[0].setData(reportWeek, true);
                    break;
                case "Last month" :
                    report.series[0].setData(reportMonth, true);
                    break;
                case "Last year" :
                    report.series[0].setData(reportYear, true);
                    break;
                default:
            }
        };
        render() {
        let dataSelect = ["Last week", "Last month", "Last year"];
        let userValue = JSON.parse(localStorage.getItem("user"));
        return (
            <div>
                <Header history={this.props.history} >
                <section>
                    <h4>Hello, {userValue}!</h4>
                    <div className="row activity m-0">
                        <div className="col-12 col-md-5 p-2">
                            <div className="sales">
                                <Box>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <h3>Your Sales</h3>
                                        <Select data={dataSelect} onChoisePeriod={this.filterSales}>
                                        </Select>
                                    </div>
                                    <ReactHighcharts config = {SalesChart} ref={(chart) => this.saleChart = chart}></ReactHighcharts>
                                </Box>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 p-2">
                            <div className="period">
                                <Box>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <h3>Report</h3>
                                        <Select data={dataSelect} onChoisePeriod={this.filterReport}>
                                        </Select>
                                    </div>
                                    <ReactHighcharts config = {ReportChart} ref={(chart) => this.reportChart = chart}></ReactHighcharts>
                                </Box>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6 col-lg-4 mb-3 tasks">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">Tasks
                                        <div><span className="bg-danger counter float-right mr-0">2</span>
                                            <span className="bg-primary counter float-right">5</span>
                                        </div>
                                    </li>
                                    {
                                        Tasks.map ((item, index) => {
                                            if (index < 4) {
                                            return (
                                                <li key={index}
                                                    className="list-group-item d-flex justify-content-between align-items-center">
                                                    <div><span className="bg-primary counter float-left">{(item.title).charAt(0)}</span>{item.title}
                                                        <span className="far fa-clock text-secondary d-block"> {item.status}</span>
                                                    </div>
                                                    <div className="col-1 dotLink">
                                                        <a className="dotLink" href="">...</a>
                                                    </div>
                                                </li>
                                            )}
                                            return null
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-3 messages">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">Messages
                                        <span className="bg-primary counter float-right mr-0">2</span></li>
                                        {
                                        UserList.map((item, index) => {
                                            if (index < 4) {
                                            return (
                                                <li key={index} className="list-group-item d-flex align-items-center">
                                                    <div className={item.divForPhoto + ' mr-3 userPhoto'}></div>
                                                    <div className="d-flex flex-column messagesItemText">
                                                        <p className="m-0">{item.userName} <span className="text-secondary">{item.status}</span></p>
                                                        <p className="m-0">{item.message}</p>
                                                        <div>
                                                            <a className="text-secondary mr-3" href=""><span className="fas fa-hand-point-left"></span></a>
                                                            <a className="text-secondary" href=""><span className="fas fa-cog"></span></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                )}
                                                return null
                                            })
                                        }
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-10 col-lg-4 mx-auto mb-3 activity">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">Activity<span className="bg-primary counter float-right mr-0">10</span></li>
                                    {
                                    UserList.map((item, index) => {
                                        if (index < 4) {
                                        return (
                                            <li key={index} className="list-group-item d-flex align-items-center">
                                                <div className={item.divForPhoto + ' mr-3 userPhoto'}></div>
                                                <div className="d-flex flex-column messagesItemText">
                                                    <p className="m-0">{item.userName} <span className="text-secondary">added a new project</span> Free PSD</p>
                                                    <p className="far fa-clock text-secondary m-0">{item.status}</p>
                                                </div>
                                            </li>
                                            )}
                                            return null;
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                </Header>
            </div>
        );
    }
}

export default Home;