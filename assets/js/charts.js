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
    if (source === "http://www.economist.com/topics/chinese-economy/index.xml"){   
    //nytScores.push(score);
    eccScores.push(score)
    }
    if (source === "http://www.ft.com/rss/home/us"){   
    //nytScores.push(score);
    ftuScores.push(score)
    }
    if (source === "http://feeds.reuters.com/news"){   
    //nytScores.push(score);
    rtuScores.push(score)
    }
    if (source === "http://feeds.reuters.com/news/usmarkets"){   
    //nytScores.push(score);
    rumScores.push(score)
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