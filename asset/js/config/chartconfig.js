// depertment wise performance
var ctx2 = document.getElementById('myChart');
var myChart = new Chart(ctx2, {
    type: 'horizontalBar',
    data: {
        labels: ['Production','Marketing','IT','Sales'],
        datasets: [
            {
                label: 'Poor',
                borderWidth: 2,
                data: [
                    3,
                    2,
                    5,
                    3
                ],
                backgroundColor: [
                    '#1E2859',
                    '#1E2859',
                    '#1E2859',
                    '#1E2859',
                ],
            },
            {
                label: 'Mediocre',
                borderWidth: 1,
                data: [
                    8,
                    6,
                    6,
                    8
                ],
                backgroundColor: [
                    '#FF9066',
                    '#FF9066',
                    '#FF9066',
                    '#FF9066',
                ],
            },
            {
                label: 'Good',
                borderWidth: 1,
                
                data: [
                    3,
                    6,
                    3,
                    3
                ],
                backgroundColor: [
                    '#FFCC40',
                    '#FFCC40',
                    '#FFCC40',
                    '#FFCC40',
                ],
                
            },
            
        ]
    },
    options: {
        title: {
            display: false,
            text: 'Chart.js Bar Chart - Stacked'
        },
        tooltips: {
            mode: 'index',
            intersect: true,
        },
        legend: {
            position: 'bottom',
            fullWidth: true,
            labels:{
                fontColor : '#6C6C6C',
                fontFamily: "'Heebo', sans-serif",
                fontStyle: 'bold',
                fontSize: 11,
                boxWidth: 8,
                usePointStyle: true,
                padding: 30,
            },
            
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
                
            }],
            yAxes: [{
                stacked: true
            }]
        },
        maintainAspectRatio: false,
    }
});



// this is orienattions Progress Pie chart
var ctx3 = document.getElementById('myChart2');
var myChart2 = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: [
            'Overdue',
            'Pending',
            'Done',
        ],
        datasets: [
            {
                label: 'Poor',
                borderWidth: 2,
                data: [
                    20, // over de color
                    26, // pending value color
                    20, // done value color
                ],
                backgroundColor: [
                    '#1E2859', // over de color
                    '#FF9066', // pending value color
                    '#FFCC40', // done value color
                ],
            },
        ]
    },
    options: {
        tooltips: {
            mode: 'index',
            intersect: true,
        },
        legend: {
            position: 'bottom',
            fullWidth: true,
            labels:{
                fontColor : '#6C6C6C',
                fontFamily: "'Heebo', sans-serif",
                fontStyle: 'bold',
                fontSize: 11,
                boxWidth: 8,
                usePointStyle: true,
                padding: 30,
            },
            
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});








// chaer area 3

var configChart3 = {
    type: 'doughnut',
    data: {
        
        datasets: [{
            data: [
                35,
                45,
                25,
                25,
            ],
            backgroundColor: [
               '#1E2858',
               '#FF9066',
               '#42CDE4',
               '#FFCC40',
            ],
            label: 'Dataset 1'
        }],
        labels: [
            '0-15%',
            '15-25%',
            '25-50%',
            '50%',
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom',
            fullWidth: true,
            labels:{
                fontColor : '#6C6C6C',
                fontFamily: "'Heebo', sans-serif",
                fontStyle: 'bold',
                fontSize: 11,
                boxWidth: 8,
                usePointStyle: true,
                padding: 30,
            },
        },
        elements: {
            customCutout: true
        },
        cutoutPercentage: 70,
        animation: {
            animateScale: true,
            animateRotate: true
        },
        maintainAspectRatio: false,
    }
};

window.onload = function() {
    var ctx2 = document.getElementById('myChart3').getContext('2d');
    window.myDoughnut = new Chart(ctx2, configChart3);
};







var ctx2 = document.getElementById('myChart4');
var myChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March'],
        datasets: [{
            label: 'Installation',
            backgroundColor: '#1E2859',
            borderColor: '#1E2859',
            data: [
                4,15,0
            ],
            fill: false,
        }, {
            label: 'Manufacturing',
            fill: false,
            backgroundColor: '#FF9065',
            borderColor: '#FF9065',
            data: [
                0,8,20
            ],
        },
        {
            label: 'Sales & Distributions',
            fill: false,
            backgroundColor: '#FFCC3F',
            borderColor: '#FFCC3F',
            data: [
                7,20,15,18,0
            ],
        }
    ]
    },
    options: {
        title: {
            display: false,
            text: 'Chart.js Bar Chart - Stacked'
        },
        tooltips: {
            mode: 'index',
            intersect: true,
        },
        legend: {
            position: 'bottom',
            fullWidth: false,
            labels:{
                fontColor : '#232323',
                fontFamily: "'Heebo', sans-serif",
                fontStyle: 'Medium',
                fontSize: 12,
                boxWidth: 7,
                usePointStyle: true,
                align: 'start',
            },
            
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
                
            }],
            yAxes: [{
                stacked: true
            }]
        },
        maintainAspectRatio: false,
    }
});





















