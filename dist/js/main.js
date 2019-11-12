"use strict";

Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var myChart = Highcharts.chart('chart-container', {
    chart: {
      type: 'column',
      styledMode: true,
      spacingBottom: 25,
      spacingRight: 100
    },
    title: {
      text: null
    },
    data: {
      googleSpreadsheetKey: '1NQsPAjyU-UuxSG3K9w-t5hImk_ciIWyEg9TUwWZ__Eg',
      endColumn: 1
    },
    plotOptions: {
      series: {
        groupPadding: .01
      }
    },
    legend: {
      enabled: false
    },
    xAxis: {
      labels: {
        style: {
          whiteSpace: 'nowrap'
        }
      }
    },
    yAxis: {
      title: false,
      labels: {
        useHTML: true,
        overflow: 'allow'
      },
      max: 30,
      min: -10,
      tickAmount: 5
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shadow: false,
      padding: 10,
      valueDecimals: 1,
      valueSuffix: '%'
    },
    annotations: [{
      shapes: [{
        type: 'path',
        points: [{
          x: 1262217600000,
          y: 10.72,
          xAxis: 0,
          yAxis: 0
        }, {
          x: 1609372800000,
          y: 10.72,
          xAxis: 0,
          yAxis: 0
        }]
      }],
      labels: [{
        point: {
          x: 1325203200000,
          y: 7.5,
          yAxis: 0,
          xAxis: 0
        },
        useHTML: true,
        backgroundColor: 'white'
      }],
      labelOptions: {
        formatter: function formatter() {
          return "Average";
        }
      }
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            spacingRight: 10
          },
          legend: {
            align: 'left',
            x: -18
          },
          tooltip: {
            enabled: false
          }
        }
      }]
    }
  });
});