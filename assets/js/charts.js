var nytScores = [];
var wapScores = [];
var tgnScores = [];
var bbcScores = [];
var teeScores = [];
var sagScores = [];
var foxScores = [];
var cnnScores = [];
var eccScores = [];
var ftuScores = [];
var rtuScores = [];
var rumScores = [];
var nytScoreChart = nytScores;
var wapScoreChart = wapScores;
var tgnScoreChart = tgnScores;
var bbcScoreChart = bbcScores;
var teeScoreChart = teeScores;
var sagScoreChart = sagScores;
var foxScoreChart = foxScores;
var cnnScoreChart = cnnScores;
var eccScoreChart = eccScores;
var ftuScoreChart = ftuScores;
var rtuScoreChart = rtuScores;
var rumScoreChart = rumScores;

database.ref().on("child_added", function(childSnapshot, prevChildKey){

    var score = childSnapshot.val().query.score;
    var sentiment = childSnapshot.val().query.sentiment;
    var source = childSnapshot.val().query.source;
    var time = childSnapshot.val().query.time;

    switch(source) {
    case "http://rss.nytimes.com/services/xml/rss/nyt/World.xml":
        nytScores.push(score)
        break;
    case "http://feeds.washingtonpost.com/rss/world":
        wapScores.push(score)
        break;
    case "http://www.goodnewsnetwork.org/feed/":
        tgnScores.push(score)
        break;
    case "http://feeds.bbci.co.uk/news/world/rss.xml?edition=uk":
        bbcScores.push(score)
        break;
    case "http://www.economist.com/sections/europe/rss.xml":
        teeScores.push(score)
        break;
    case "http://feeds.feedburner.com/SAGoodNews?format=xml":
        sagScores.push(score)
        break;
    case "http://feeds.foxnews.com/foxnews/latest":
        foxScores.push(score)
        break;
    case "http://rss.cnn.com/rss/cnn_topstories.rss":
        cnnScores.push(score)
        break;  
    case "http://www.economist.com/topics/chinese-economy/index.xml":
        eccScores.push(score)
        break;
    case "http://www.ft.com/rss/home/us":
        ftuScores.push(score)
        break;
    case "http://feeds.reuters.com/news":
        rtuScores.push(score)
        break;
    case "http://feeds.reuters.com/news/usmarkets":
        rumScores.push(score)
        break;  
    }
});

var data = {
  series: [nytScoreChart,wapScoreChart,tgnScoreChart,bbcScoreChart,teeScores,sagScoreChart,foxScoreChart,cnnScoreChart,eccScoreChart,ftuScoreChart,rtuScoreChart,rumScoreChart]
};
// We are setting a few options for the chart and overriding the defaults
var options = {
  width: '99%',
  height: '400px',
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