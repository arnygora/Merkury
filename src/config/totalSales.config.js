const TotalSales = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '200',
        width: '200'
    },
    title: {
        text: '40%',
        align: 'center',
        verticalAlign: 'middle',
        y: 10,
        style: {
            fontSize: "40px",
            color: "#5484ff",
            fontWeight: 'bold'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            colors: ["#dadee7", "#5484ff"],
            dataLabels: {
                enabled: false,
                distance: -10,
                style: {
                    fontWeight: 'bold',
                    color: 'white',
                    textShadow: '0px 1px 2px black'
                }
            },
            startAngle: -180,
            endAngle: 180,
            center: ['50%', '50%'],
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        rounded: true, //not work ! ! ! 
        type: 'pie',
        name: 'Sales',
        innerSize: '75%',
        data: [
            ['consumed', 60],
            ['left to prognosis', 40]
        ]
    }],
};
export default TotalSales;