
// Variables
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
// Fucntions
function analysis(analyzed, link) {
        //var titleText = l.split(' ').join('+');
        var queryURL = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text=http%3A%2F%2F" + analyzed + "&apikey=ba67a893-398a-4cdb-ac52-57764039436f";
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                var query = {
                    text: analyzed,
                    source: link,
                    score: response.aggregate.score,
                    sentiment: response.aggregate.sentiment,    
                    };
                console.log(response)
                console.log ("This got analyzed = " + analyzed)
                console.log("query.source = " + query.source);
                console.log("query.text = " + query.text);
                console.log("query.score = " + query.score)
                console.log("query.score = " + query.sentiment)
                console.log(query)
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
// Main
$('.btn btn-primary').on('click', function () {
    $(this).button('toggle') // button text will be "finished!"
  })
//RSS TO JSON, then send to SentimentAPI, 
//then create object for query 
//and add to databse
$('button').on('click', function() {
        var rsslink = $(this).data('link');
        var queryURL = "http://rss2json.com/api.json?rss_url=" + rsslink;
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                console.log(response);
                var textAnalyzed = []
                for (var i = 0; i < response.items.length; i++){
                    var l = response.items[i].title
                    textAnalyzed.push(l)
                }
                analysis(textAnalyzed, rsslink);
                })
        });

//Get data from database to show last 10 analysees
database.ref().on("child_added", function(childSnapshot, prevChildKey){
    console.log(childSnapshot.val());
    // Store everything into a variable.
    var score = childSnapshot.val().query.score;
    var sentiment = childSnapshot.val().query.sentiment;
    var source = childSnapshot.val().query.source;
    console.log(score);
    console.log(sentiment);
    console.log(source);
    // Add each train's data into the table
    $("#employeeTable > tbody").append("<tr><td>" + score + "</td><td>" + sentiment + "</td><td>" + source + "</td></tr>");

});