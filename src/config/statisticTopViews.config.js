const graphReport = {
    chart: {
        type: 'spline',
        inverted: false,
        height: '135',
        width: '300'
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
        gridLineWidth: 0,

        reversed: false,
        maxPadding: 0,
        showLastLabel: false,
        labels: {
            enabled: false
            },
    },
    yAxis: {
        ceiling: 100,
        title: {
            text: ''
        },
        labels: {
            enabled: false
        },
        lineWidth: 0
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
        lineWidth: 3,
        data: [[0, 10], [10, 20], [20, 30], [30, 50], [40, 90], [50, 70], [60, 30],
            [70, 50], [80, 30], [90, 10], [90, 10]]
    }],
};

export default graphReport;


