
var data = {
  labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'],
  series: [
    [.43, .56, .33, .44, .12, 1],
    [-.43, .56, -.33, -.44, -.12, -.10],
    [.40, .22, .12, .22, .44, -1]
  ]
};


// We are setting a few options for our chart and override the defaults
var options = {
  // Don't draw the line chart points
  showPoint: false,
  // Disable line smoothing
  lineSmooth: false,
  // X-Axis specific configuration
  axisX: {
    // We can disable the grid for this axis
    showGrid: false,
    // and also don't show the label
    showLabel: false,

    width: 300,
  	height: 200
  },
  // Y-Axis specific configuration
  axisY: {
    // Lets offset the chart a bit from the labels
    offset: 20,
    // The label interpolation function enables you to modify the values
    // used for the labels on each axis. Here we are converting the
    // values into million pound.
    labelInterpolationFnc: function(value) {
      return value;
    }
  }
};

// All you need to do is pass your configuration as third parameter to the chart function
new Chartist.Line('.ct-chart', data, options);