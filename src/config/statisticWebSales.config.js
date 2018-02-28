const WebSales = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '200',
        width: '200'
    },
    title: {
        text: '25%',
        align: 'center',
        verticalAlign: 'middle',
        y: 10,
        style: {
            fontSize: "40px",
            color: "#f83c7b",
            fontWeight: 'bold'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            colors: ["#dadee7", "#f83c7b"],
            dataLabels: {
                enabled: false,
                distance: 50,
            },
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '75%',
        data: [
            ['consumed', 75],
            ['left to prognosis', 25]
        ]
    }],
};
export default WebSales;