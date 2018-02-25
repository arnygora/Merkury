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
        data: [[0, 200], [3, 215], [9, 150], [12, 250], [15, 230], [18, 730], [21, 310], [24, 350], [27, 370], [30, 400], [33, 200],
            [36, 250], [39, 300], [42, 600], [45, 550], [48, 520], [51, 500], [54, 450], [57, 400], [60, 350], [75, 400], [80, 300], [80, 300]]
    }],
};

export default graphReport;


