/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {

    this.userName = 'Ronnie O Sullivan';
    this.initials = (this.userName).replace(/\W*(\w)\w*/g, '$1').toUpperCase();
    this.helloText = 'Welcome to Faclon Insights';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';

    /**
    * alerts - used for dynamic alerts in Notifications and Tooltips view
    */

    this.alerts = [
        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' , icon: 'fa-bell' , time : '1304375948024'},
        { type: 'success', msg: 'Well done! You successfully read this important alert message.' , icon: 'fa-bell' , time : '1304375948024'},
        { type: 'info', msg: 'OK, You are done a great job man.' , icon: 'fa-bell' , time : '1458908876000'},
        { type: 'info', msg: 'OK, You are done a great job man.' , icon: 'fa-bell' , time : '1458905276000'}
    ];

    /**
     * addAlert, closeAlert  - used to manage alerts in Notifications and Tooltips view
     */

    this.addAlert = function() {
         var d = new Date();
        var n = d.getTime();
        this.alerts.push({msg: 'Another alert!' , icon : 'fa-envelope' , time : n});
    };

    this.closeAlert = function(index) {
        this.alerts.splice(index, 1);
    };

};


/**
 * widgetFlotChart - Data for Flot chart
 * used in Widget view
 */
function widgetFlotChart() {


    /**
     * Flot chart data and options
     */
    var d1 = [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]];
    var d2 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]];

    var flotChartData1 = [
        { label: "Data 1", data: d1, color: '#17a084'},
        { label: "Data 2", data: d2, color: '#127e68' }
    ];

    var flotChartOptions1 = {
        xaxis: {
            tickDecimals: 0
        },
        series: {
            lines: {
                show: true,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 1
                    }, {
                        opacity: 1
                    }]
                }
            },
            points: {
                width: 0.1,
                show: false
            }
        },
        grid: {
            show: false,
            borderWidth: 0
        },
        legend: {
            show: false
        }
    };

    var flotChartData2 = [
        { label: "Data 1", data: d1, color: '#19a0a1'}
    ];

    var flotChartOptions2 = {
        xaxis: {
            tickDecimals: 0
        },
        series: {
            lines: {
                show: true,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 1
                    }, {
                        opacity: 1
                    }]
                }
            },
            points: {
                width: 0.1,
                show: false
            }
        },
        grid: {
            show: false,
            borderWidth: 0
        },
        legend: {
            show: false
        }
    };

    var flotChartData3 = [
        { label: "Data 1", data: d1, color: '#fbbe7b'},
        { label: "Data 2", data: d2, color: '#f8ac59' }
    ];

    var flotChartOptions3 = {
        xaxis: {
            tickDecimals: 0
        },
        series: {
            lines: {
                show: true,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 1
                    }, {
                        opacity: 1
                    }]
                }
            },
            points: {
                width: 0.1,
                show: false
            }
        },
        grid: {
            show: false,
            borderWidth: 0
        },
        legend: {
            show: false
        }
    };

    /**
     * Definition of variables
     * Flot chart
     */

    this.flotChartData1 = flotChartData1;
    this.flotChartOptions1 = flotChartOptions1;
    this.flotChartData2 = flotChartData2;
    this.flotChartOptions2 = flotChartOptions2;
    this.flotChartData3 = flotChartData3;
    this.flotChartOptions3 = flotChartOptions3;

};

/**
 * chartJsCtrl - Controller for data for ChartJs plugin
 * used in Chart.js view
 */
function chartJsCtrl() {

    /**
     * Data for Polar chart
     */
    this.polarData = [
        {
            value: 300,
            color:"#a3e1d4",
            highlight: "#1ab394",
            label: "App"
        },
        {
            value: 140,
            color: "#dedede",
            highlight: "#1ab394",
            label: "Software"
        },
        {
            value: 200,
            color: "#A4CEE8",
            highlight: "#1ab394",
            label: "Laptop"
        }
    ];

    /**
     * Options for Polar chart
     */
    this.polarOptions = {
        scaleShowLabelBackdrop : true,
        scaleBackdropColor : "rgba(255,255,255,0.75)",
        scaleBeginAtZero : true,
        scaleBackdropPaddingY : 1,
        scaleBackdropPaddingX : 1,
        scaleShowLine : true,
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false
    };

    /**
     * Data for Doughnut chart
     */
    this.doughnutData = [
        {
            value: 300,
            color:"#a3e1d4",
            highlight: "#1ab394",
            label: "App"
        },
        {
            value: 50,
            color: "#dedede",
            highlight: "#1ab394",
            label: "Software"
        },
        {
            value: 100,
            color: "#A4CEE8",
            highlight: "#1ab394",
            label: "Laptop"
        }
    ];

    /**
     * Options for Doughnut chart
     */
    this.doughnutOptions = {
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        percentageInnerCutout : 45, // This is 0 for Pie charts
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false
    };

    /**
     * Data for Line chart
     */
    this.lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "Example dataset",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.7)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(26,179,148,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    this.lineDataDashboard4 = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 40, 51, 36, 25, 40]
            },
            {
                label: "Example dataset",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.7)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(26,179,148,1)",
                data: [48, 48, 60, 39, 56, 37, 30]
            }
        ]
    };

    /**
     * Options for Line chart
     */
    this.lineOptions = {
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        bezierCurve : true,
        bezierCurveTension : 0.4,
        pointDot : true,
        pointDotRadius : 4,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : true,
        datasetStrokeWidth : 2,
        datasetFill : true
    };

    /**
     * Options for Bar chart
     */
    this.barOptions = {
        scaleBeginAtZero : true,
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        barShowStroke : true,
        barStrokeWidth : 2,
        barValueSpacing : 5,
        barDatasetSpacing : 1
};

    /**
     * Data for Bar chart
     */
    this.barData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.8)",
                highlightFill: "rgba(26,179,148,0.75)",
                highlightStroke: "rgba(26,179,148,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    /**
     * Data for Radar chart
     */
    this.radarData = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };

    /**
     * Options for Radar chart
     */
    this.radarOptions = {
        scaleShowLine : true,
        angleShowLineOut : true,
        scaleShowLabels : false,
        scaleBeginAtZero : true,
        angleLineColor : "rgba(0,0,0,.1)",
        angleLineWidth : 1,
        pointLabelFontFamily : "'Arial'",
        pointLabelFontStyle : "normal",
        pointLabelFontSize : 10,
        pointLabelFontColor : "#666",
        pointDot : true,
        pointDotRadius : 3,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : true,
        datasetStrokeWidth : 2,
        datasetFill : true
    };


};

//function for getting view devices data
function viewDevices(){
    this.devices_data = [
        {
            name: 'Device 1',
            code: 'djscscs',
            date: '13th July,93',
            address: ['Kandivali West', 'Mumbai'],
            status: 'Working Fine',
            imgURL: 'img/a1.jpg'
        },
        {
            name: 'Device 2',
            code: 'djscscs',
            date: '13th July,93',
            address: ['Company Bagh', 'Mumbai'],
            status: 'Working Fine',
            imgURL: 'img/a2.jpg'     
        },
        {
            name: 'Device 3',
            code: 'djscscs',
            date: '13th July,93',
            address: ['Andheri West', 'Mumbai'],
            status: 'Broken',
            imgURL: 'img/a3.jpg'  
        },
        {
            name: 'Device 4',
            code: 'djscscs',
            date: '13th July,93',
            address: ['Bandra Kurla Complex', 'Mumbai'],
            status: 'Broken',
            imgURL: 'img/a4.jpg' 
        },
        {
            name: 'Device 5',
            code: 'djscscs',
            date: '13th July,93',
            address: ['Company Bagh', 'Kanpur'],
            status: 'In Repair',
            imgURL: 'img/a5.jpg' 
        },
        {
            name: 'Device 6',
            code: 'djscscs',
            date: '13th July,93',
            address: ['Kidwai Nagar', 'Kanpur'],
            status: 'Crashed',
            imgURL: 'img/a6.jpg' 
        },
        {
            name: 'Device 7',
            code: 'djscscs',
            date: '13th July,93',
            address: ['Sharda Nagar', 'Kanpur'],
            status: 'Crashed',
            imgURL: 'img/a7.jpg' 
        },
        {
            name: 'Device 8',
            code: 'djscscs',
            date: '13th July,93',
            address: ['Swaroop Nagar', 'Kanpur'],
            status: 'Crashed',
            imgURL: 'img/a8.jpg' 
        }
    ];
}


angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl)
    .controller('widgetFlotChart', widgetFlotChart)
    .controller('chartJsCtrl', chartJsCtrl)
    .controller('viewDevices', viewDevices);





