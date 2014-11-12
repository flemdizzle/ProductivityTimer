$(function () {
    $('#chart-container').highcharts({
        title: {
            text: 'Tasks Completed'
        },
        xAxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        },
        labels: {
            items: [{
                html: 'Average Completion Per Cycle',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Front-End Features',
            data: [3, 2, 1, 3, 4]
        }, {
            type: 'column',
            name: 'Back-End Features',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Bug Fixes',
            data: [4, 3, 3, 9, 0]
        }, {
            type: 'spline',
            name: 'Average Tasks Per Cycle',
            data: [1.3, 0.67, 1.33, 1.33, 0.33],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Percentage',
            data: [{
                name: '2 Tasks',
                y: 13,
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: '1 Task',
                y: 23,
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: '0 Tasks',
                y: 19,
                color: Highcharts.getOptions().colors[2] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
});