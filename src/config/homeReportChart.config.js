const graphReport = {
    chart: {
        type: 'spline',
        inverted: false,
        height: '250',
    },
    credits: {
        enabled: false
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        min: 0, max: 80,
        reversed: false,
        maxPadding: 0,
        showLastLabel: true,
        labels:
            {
                enabled: false
            },
    },
    yAxis: {
        ceiling: 700,
        title: {
            text: ''
        },
        labels: {},
        lineWidth: 1
    },
    legend: {
        enabled: false
    },
    tooltip: {
    },
    plotOptions: {
        spline: {
            marker: {
                enable: false
            }
        }
    },
    series: [{
        lineWidth: 6,
        data: [[0, 200], [9, 150], [15, 230], [21, 310], [27, 370], [33, 200], [39, 300],
                [45, 550], [54, 450], [60, 350], [75, 400], [80, 300], [80, 300]]
    }],
};

export default graphReport;


