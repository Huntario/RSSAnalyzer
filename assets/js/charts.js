var cnnScores = [];
var bbcScores = [];
var foxScores = [];
var wapScores = [];
var sagScores = [];
var tgnScores = [];
var reuScores = [];
var rumScores = [];
var ftuScores = [];
var eccScores = [];
var teeScores = [];
var nytScores = [];
var wapScores = [];

database.ref().on("child_added", function(childSnapshot, prevChildKey){
    // Store everything into a variable.
    var score = childSnapshot.val().query.score;
    var sentiment = childSnapshot.val().query.sentiment;
    var source = childSnapshot.val().query.source;
    var time = childSnapshot.val().query.time;

    if (source === "http://rss.nytimes.com/services/xml/rss/nyt/World.xml"){   
    //nytScores.push(score);
    nytScores.push(score)
    }
    if (source === "http://feeds.washingtonpost.com/rss/world"){   
    //nytScores.push(score);
    wapScores.push(score)
    }
    if (source === "http://www.goodnewsnetwork.org/feed/"){   
    //nytScores.push(score);
    tgnScores.push(score)
    }
    if (source === "http://feeds.bbci.co.uk/news/world/rss.xml?edition=uk"){   
    //nytScores.push(score);
    bbcScores.push(score)
    }
    if (source === "http://www.economist.com/sections/europe/rss.xml"){   
    //nytScores.push(score);
    teeScores.push(score)
    }
    if (source === "http://feeds.feedburner.com/SAGoodNews?format=xml"){   
    //nytScores.push(score);
    sagScores.push(score)
    }
    if (source === "http://feeds.foxnews.com/foxnews/latest"){   
    //nytScores.push(score);
    foxScores.push(score)
    }
    if (source === "http://rss.cnn.com/rss/cnn_topstories.rss"){   
    //nytScores.push(score);
    cnnScores.push(score)
    }
});


var nytScoreChart = nytScores;
var wapScoreChart = wapScores;
var cnnScoreChart = cnnScores;
var bbcScoreChart = bbcScores;
var foxScoreChart = foxScores;
var sagScoreChart = sagScores;
var tgnScoreChart = tgnScores;
var reuScoreChart = reuScores;
var rumScoreChart = rumScores;
var ftuScoreChart = ftuScores;
var eccScoreChart = eccScores;
var teeScoreChart = teeScores;
// var wapostScores =     [-.43, .56, -.33, -.44, -.12, -.10, -1]
// var cnnScores = [.40, .22, .12, .22, .44, -1, -.10]
// var foxScores = [.34, .56, .67, .45, .40, -.66, .10]
// var bbcScores = [-.20, -.92, -.42, -.62, -.54, -1, -.75]




var data = {
  series: [nytScoreChart,wapScoreChart,cnnScoreChart,bbcScoreChart,foxScoreChart,sagScoreChart,tgnScoreChart,teeScores]
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

