const ChanelSales = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '200',
        width: '200'
    },
    title: {
        text: '20%',
        align: 'center',
        verticalAlign: 'middle',
        y: 10,
        style: {
            fontSize: "40px",
            color: "#aa5fb9",
            fontWeight: 'bold'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            colors: ["#dadee7", "#aa5fb9"],
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
            ['consumed', 80],
            ['left to prognosis', 20]
        ]
    }],
};
export default ChanelSales;