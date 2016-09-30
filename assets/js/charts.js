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
// Chartist chart options

console.log(data);
var data = {
    series: [nytScores,wapScores,tgnScores,bbcScores,teeScores,sagScores,foxScores,cnnScores,eccScores,ftuScores,rtuScores,rumScores],
    };
    
console.log(data);
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

function tallyScores(source, score) {
    switch(source) {
    case "http://rss.nytimes.com/services/xml/rss/nyt/World.xml":
        nytScores.push(score)
        return nytScores;
    case "http://feeds.washingtonpost.com/rss/world":
        wapScores.push(score)
        return wapScores
    case "http://www.goodnewsnetwork.org/feed/":
        tgnScores.push(score)
        return tgnScores 
    case "http://feeds.bbci.co.uk/news/world/rss.xml?edition=uk":
        bbcScores.push(score)
        return bbcScores
    case "http://www.economist.com/sections/europe/rss.xml":
        teeScores.push(score)
        return teeScores
    case "http://feeds.feedburner.com/SAGoodNews?format=xml":
        sagScores.push(score)
        return sagScores
    case "http://feeds.foxnews.com/foxnews/latest":
        foxScores.push(score)
        return foxScores
    case "http://rss.cnn.com/rss/cnn_topstories.rss":
        cnnScores.push(score)
        return cnnScores
    case "http://www.economist.com/topics/chinese-economy/index.xml":
        eccScores.push(score)
        return eccScores
    case "http://www.ft.com/rss/home/us":
        ftuScores.push(score)
        return ftuScores
    case "http://feeds.reuters.com/news":
        rtuScores.push(score)
        return rtuScores
    case "http://feeds.reuters.com/news/usmarkets":
        rumScores.push(score)
        break;  
    }
    var chart = new Chartist.Line('.ct-chart', data, options);
    };




