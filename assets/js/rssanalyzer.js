//VARIABLES  
    var cnn = new buttons('CNN', 'http://rss.cnn.com/rss/cnn_topstories.rss');
    var bbc = new buttons('BBC', 'http://feeds.bbci.co.uk/news/world/rss.xml?edition=uk');
    var fox = new buttons('FOX', 'http://feeds.foxnews.com/foxnews/latest');
    var waPost = new buttons('WA Post', 'http://feeds.washingtonpost.com/rss/world');
    var nyTimes = new buttons('NY Times', 'http://rss.nytimes.com/services/xml/rss/nyt/World.xml');
    var goodNews = new buttons('SA The Good News', 'http://feeds.feedburner.com/SAGoodNews?format=xml');
    var gnn = new buttons('The Good News Network', 'http://www.goodnewsnetwork.org/feed/');
    var reuters = new buttons('Reuters', 'http://feeds.reuters.com/Reuters/worldNews');
    var usMarkets = new buttons('Reuters US Markets', 'http://feeds.reuters.com/news/usmarkets');
    var ftMarkets = new buttons('FT US Markets', 'http://www.ft.com/rss/home/us');
    var economistChina = new buttons('The Economist China', 'http://www.economist.com/topics/chinese-economy/index.xml');
    var economistEurope = new buttons('The Economist Europe', 'http://www.economist.com/sections/europe/rss.xml');
    var buttons = [];
    buttons.push(cnn, bbc, fox, waPost, nyTimes, goodNews, gnn, reuters, usMarkets, ftMarkets, economistChina, economistEurope);
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCd4MrgEUu_MTcIG3kx7ejoit_0nJLHK_Q",
        authDomain: "rssanalyzer-cc4f1.firebaseapp.com",
        databaseURL: "https://rssanalyzer-cc4f1.firebaseio.com",
        storageBucket: "",
        messagingSenderId: "770518406701"
      };
      firebase.initializeApp(config);
    var database = firebase.database(); 
//FUNCTIONS
function buttons(name, link, array){
    this.name = name;
    this.link = link;
    this.array = [];
    }    
function main(){
    $(document).ready(function(){ 
        //Get data from database to show last 10 analysees
        database.ref().on("child_added", function(childSnapshot, prevChildKey){
            // Store everything into a variable.
            var score = childSnapshot.val().query.score;
            var sentiment = childSnapshot.val().query.sentiment;
            var source = childSnapshot.val().query.source;
            var time = childSnapshot.val().query.time;
            tallyScores(source, score)
            // Add into the table
            $("#queryTables > tbody").prepend("<tr><td>" + score + "</td><td>" + sentiment + "</td><td>" + source + "</td><td>" + time + "</td></tr>"); 
        });
        });} 
function buttonAttributes(){
    for (var i = 0; i < buttons.length; i++) {
        var b = $('<button>');
        b.attr('id', i);
        b.attr('data-link', buttons[i].link);
        b.addClass('col-md-3 col-sm-6 col-xs-12 btn btn-lg btn-deep-purple'); 
        b.text(buttons[i].name);
        $('#setNewsButtons').append(b);   
    }};
function onButClick(){
     $('button').on('click', function() {
        var userInput = $('#urlInput').val().trim()
        $('#submit').attr('data-link', userInput);
        var rsslink = $(this).data('link');
        var queryURL = "http://rss2json.com/api.json?rss_url=" + rsslink;
        $('#submit').removeData();
        $('h4').empty();
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                console.log(response)
                urlWarning(response)
                var textAnalyzed = []
                titleCleaner(response,textAnalyzed)
                analysis(textAnalyzed,rsslink)      
                }) 
        });}
function urlWarning(response){

    if (response.status == 'error'){ 
        $('#warning').html('<p> ' + response.errorMessage + '</p>')
        }

    else if (response.status != 'ok') {
        console.log('Not a valid URL');
        // if Too many requests. Please try again later
        // if response.status == 'error'{ $('#warning').html('<p> ' + response.errorMessage + '</p>'}
        $('#warning').html('<p> Make sure you included http(s):// and that you entered a valid RSS link</p>');
        }

    if (response.status == 'ok'){         
        $('#warning').empty();
    }

    }

function result(analyzed, query){

    var sr = $('<div>');
    sr.attr('id', 'source');
    sr.addClass('col-md-12 col-sm-12'); 
    $('#warning').append(sr);   
    $('#source').html('<h2>Source: </h2><p>' + query.source + '</p>');


    var t = $('<div>');
    t.attr('id', 'queryText');
    t.addClass('col-md-12'); 
    $('#warning').append(t);   
    $('#queryText').html('<h2> Analyzed Text</h2><p>' + query.text + '</p>');

    var s = $('<div>');
    s.attr('id', 'score');
    s.addClass('col-md-12'); 
    $('#warning').append(s);  
    $('#score').html('<h2> Sentiment Score</h2><h1>' + query.score + '</h1>');
        // '</div><p>' + query.source + '</p><p>' + query.sentiment + '</p><p>' + query.score + '</p><p>' + query + '</p>')
}   


function titleCleaner(response,textAnalyzed){
    for (i = 0; i < response.items.length; i++){
        var l = response.items[i].title
        //strip out "&" , Q&amp" ,or "#038" from analysis. It breaks the api (looks for key)
        l = l.replace('Q&amp;','');
        l = l.replace('#038;','');
        l = l.replace('&','');
        l = l.replace('#','');
        textAnalyzed.push(l)
        }
    }
function analysis(analyzed, link){
        //var titleText = l.split(' ').join('+');
        var queryURL = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text=http%3A%2F%2F" + analyzed + "&apikey=ba67a893-398a-4cdb-ac52-57764039436f";
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {     
            var score = response.aggregate.score;
            score = Math.round(score * 10000) / 10000;    
            var query = {
                text: analyzed,
                source: link,
                score: score,
                sentiment: response.aggregate.sentiment,
                time: moment().format('YYYY-MM-DD h:mm:ss a'),    
                };
            console.log(response);
            result(analyzed, query)
            dbinsert(query)
            })
        };
function dbinsert (query){
    database.ref().push({
        query: query
    });
    // Don't refresh the page!
    return false;
    };
//PROGRAM 
main()
buttonAttributes();
onButClick();