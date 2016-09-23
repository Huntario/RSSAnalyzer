
var sourcesList = [];
database.ref().on("child_added", function(childSnapshot, prevChildKey){
    // Store everything into a variable.
    var source = childSnapshot.val().query;
    sourcesList.push(source);
    sourcesList.sort();  
});
console.log (sourcesList);

var redditScores =     [.43, .56, .33, .44, .12, 1, -.5]
var wapostScores =     [-.43, .56, -.33, -.44, -.12, -.10, -1]
var cnnScores = [.40, .22, .12, .22, .44, -1, -.10]
var foxScores = [.34, .56, .67, .45, .40, -.66, .10]
var bbcScores = [-.20, -.92, -.42, -.62, -.54, -1, -.75]
var horizLabels = ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6']

var data = {
  labels: horizLabels,
  series: [redditScores, wapostScores, cnnScores, foxScores, bbcScores ]
};


// We are setting a few options for the chart and overriding the defaults
var options = {

  width: '100%',
  height: '400px',

  showPoint: false,
  lineSmooth: true,
	  high: 1,
	  low: -1,
	  scaleMinSpace: 5,
	  onlyInteger: false,
	  referenceValue: 0,
  axisX: {

    showGrid: false,
    showLabel: true,
    },
  axisY: {
   
    labelInterpolationFnc: function(value) {
      return value;
    }
  }
};

new Chartist.Line('.ct-chart', data, options);

