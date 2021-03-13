document.addEventListener("DOMContentLoaded", function () {
    // chart colors
    var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];

    /* large line chart */
    const chart1 = $("#chart1");
    let chartData1 = {
        labels: ["Twelve o'clock", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
        datasets: [{
            data: [57, 311, 810, 26, 689, 555, 901],
            backgroundColor: 'transparent',
            borderColor: colors[0],
            borderWidth: 4,
            pointBackgroundColor: colors[0]
        }]
    };

    if (chart1) {
        new Chart(chart1, {
            type: 'line',
            data: chartData1,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }
        });
    }


    /* large line chart */
    const chart2 = $("#chart2");
    var chartData2 = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [589, 445, 483, 503, 689, 692, 634],
            backgroundColor: 'transparent',
            borderColor: colors[0],
            borderWidth: 4,
            pointBackgroundColor: colors[0]
        },
        {
            data: [639, 465, 493, 478, 589, 632, 674],
            backgroundColor: colors[3],
            borderColor: colors[1],
            borderWidth: 4,
            pointBackgroundColor: colors[1]
        }]
    };

    if (chart2) {
        new Chart(chart2, {
            type: 'line',
            data: chartData2,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }
        });
    }

    var chart3 = $("#chart3")
    var chartData3 = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [589, 445, 483, 503, 689, 692, 634],
            backgroundColor: colors[0]
        },
        {
            data: [209, 245, 383, 403, 589, 692, 580],
            backgroundColor: colors[1]
        },
        {
            data: [489, 135, 483, 290, 189, 603, 600],
            backgroundColor: colors[2]
        },
        {
            data: [639, 465, 493, 478, 589, 632, 674],
            backgroundColor: colors[4]
        }]
    };
    if (chart3) {
        new Chart(chart3, {
            type: 'bar',
            data: chartData3,
            options: {
                scales: {
                    xAxes: [{
                        barPercentage: 0.4,
                        categoryPercentage: 0.5
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }
        });
    }

});