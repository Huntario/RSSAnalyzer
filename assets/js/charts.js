var nytScores = [];
var wapScores = [];
var times = [];


database.ref().on("child_added", function(childSnapshot, prevChildKey){
    // Store everything into a variable.
    var score = childSnapshot.val().query.score;
    var sentiment = childSnapshot.val().query.sentiment;
    var source = childSnapshot.val().query.source;
    var time = childSnapshot.val().query.time;

    times.push("|");
    if (source === "http://rss.nytimes.com/services/xml/rss/nyt/World.xml"){   
    //nytScores.push(score);
    nytScores.push(score)
    }
    if (source === "http://feeds.washingtonpost.com/rss/world"){   
    //nytScores.push(score);
    wapScores.push(score)
    }
    source = "";

    if (source === "http://feeds.washingtonpost.com/rss/world"){   
    //nytScores.push(score);
    wapScores.push(score)
    }
    source = "";

});

console.log(nytScores);
console.log(wapScores);

var nytScoreChart = nytScores;
var wapScoreChart = wapScores;
var nytScoreChart = nytScores;
var nytScoreChart = nytScores;
var nytScoreChart = nytScores;
// var wapostScores =     [-.43, .56, -.33, -.44, -.12, -.10, -1]
// var cnnScores = [.40, .22, .12, .22, .44, -1, -.10]
// var foxScores = [.34, .56, .67, .45, .40, -.66, .10]
// var bbcScores = [-.20, -.92, -.42, -.62, -.54, -1, -.75]


var horizLabels = [];

var data = {
  labels: horizLabels,
  series: [nytScoreChart, wapScoreChart ]
};


// We are setting a few options for the chart and overriding the defaults
var options = {

  width: '100%',
  height: '200px',

  showPoint: false,
  lineSmooth: true,
	  high: 1,
	  low: -1,
	  scaleMinSpace: 0,
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

