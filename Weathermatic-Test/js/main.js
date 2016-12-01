$(document).ready(function() {
    //VARIABLES

    //define some keys variables
    var highsJSON,
        lowsJSON,
        chart,
        //dates we will change
        datesOrig = {
            startDate: new Date("2016-10-25"),
            endDate: new Date("2016-11-24")
        },
        dates = {
            startDate: datesOrig.startDate,
            endDate: datesOrig.endDate
        },
        //original dates we will keep
        input = {};
    //define key properties status
    input.high = $('.high-check').is(':checked');
    input.low = $('.low-check').is(':checked');

    //METHODS

    //handles toggling of temperature checkboxes
    var toggleTemps = function(target) {
        input[target.value] = target.checked;
    };

    //changing data from objects to strings. reverse data.
    var convertData = function(array, temp) {
        var data = [];
        //convert the JSON using code
        array.forEach(function(val) {
            //only use data if a date and temp is included
            if (val.date && val[temp]) {
                //convert to date
                var tempDate = new Date(val.date);
                //factor in Daylight Savings
                var actualDate = new Date(tempDate.getTime() + tempDate.getTimezoneOffset() * 60000);
                //only show values between the defined start and end date
                if (dates.startDate <= actualDate && dates.endDate >= actualDate) {
                    data.push([val.date, val[temp]]);
                }
            }
        });
        return data;
    };

    //handles data and updates chart
    var updateChart = function() {
        //run two request, THEN draw chart
        $.when(
            $.getJSON('data/temp_data_high.json').then(function(data) {
                highsJSON = convertData(data.result.site.weather, "high_temp");
            }),
            $.getJSON('data/temp_data_low.json').then(function(data) {
                lowsJSON = convertData(data.result.site.weather, "low_temp");
            })
        ).then(function() {
            drawChart();
        });
    };

    //draw chart
    var drawChart = function() {

        //define variables
        chart = $('#chart').highcharts();
        //toggle temps data according to status
        var high_temps = input.high ? highsJSON : [];
        var low_temps = input.low ? lowsJSON : [];
        // if chart exist, just update values
        if (chart) {
            // update series data and titles
            chart.series[0].update({
                name: "Highs",
                data: high_temps
            }, false);
            chart.series[1].update({
                name: "Lows",
                data: low_temps
            }, false);
            chart.redraw();
        } else {
            //if you get here, chart needs to be created
            $('#chart').highcharts({
                title: {
                    text: 'Coding Test',
                    x: -20
                },
                subtitle: {
                    text: '',
                    x: -20
                },
                xAxis: {
                    title: {
                        text: 'Week'
                    },
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Temperature (°C)'
                    }
                },
                legend: {
                    layout: 'vertical',
                    borderWidth: 0
                },
                series: [{
                    name: "Highs",
                    data: high_temps
                }, {
                    name: "Lows",
                    data: low_temps
                }],
                credits: {
                    enabled: false
                }
            });

        }

    };

    //EVENTS

    $('.type-of-temp input').change(function(e) {
        //toggle temp status
        toggleTemps(e.currentTarget);
        //draw chart
        drawChart();
    });

    $('.reset-chart').click(function(e) {
        //manually set date picker
        $('#date').data('daterangepicker')
        .setStartDate(datesOrig.startDate)
        .setEndDate(datesOrig.endDate);
        //reset dates
        dates = {
            startDate: datesOrig.startDate,
            endDate: datesOrig.endDate
        };
        //fetch data
        updateChart();

    });

    //for the date, initialize and then handle picking
    $('#date').daterangepicker(datesOrig, function(start, end, label) {
        //on apply do the following
        dates.startDate = start;
        dates.endDate = end;
        updateChart();
    });

    //INIT

    // grabs data and shows chart
    updateChart();

});
