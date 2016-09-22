
var data = {
  labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'],
  series: [
    [.43, .56, .33, .44, .12, 1, -.5],
    [-.43, .56, -.33, -.44, -.12, -.10, -1],
    [.40, .22, .12, .22, .44, -1, -.10]
  ]
};

var responsiveOptions = [
  ['screen and (min-width: 641px) and (max-width: 1024px)', {
    showPoint: false,
    axisX: {
      labelInterpolationFnc: function(value) {
        // Will return Mon, Tue, Wed etc. on medium screens
        return value.slice(0, 3);
      }
    }
  }],
  ['screen and (max-width: 640px)', {
    showLine: false,
    axisX: {
      labelInterpolationFnc: function(value) {
        // Will return M, T, W etc. on small screens
        return value[0];
      }
    }
  }]
];


// We are setting a few options for our chart and override the defaults
var options = {

  showPoint: false,
  lineSmooth: false,

  	  // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
	  high: 1,
	  // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
	  low: -1,
	  // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
	  scaleMinSpace: 20,
	  // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
	  onlyInteger: true,
	  // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
	  referenceValue: 5,


  axisX: {
    showGrid: false,
    showLabel: false,
    },



    width: 700,
  	height: 200,
 
  // Y-Axis specific configuration
  axisY: {
    // Lets offset the chart a bit from the labels
    offset: 0,
    // The label interpolation function enables you to modify the values
    // used for the labels on each axis. Here we are converting the
    // values into million pound.
    labelInterpolationFnc: function(value) {
      return value;
    }
  }
};

// All you need to do is pass your configuration as third parameter to the chart function
new Chartist.Line('.ct-chart', data, null, responsiveOptions);