
$('.btn btn-primary').on('click', function () {
    $(this).button('toggle') // button text will be "finished!"
  })
//Upon clicking the "analyze" button, we get the chosen RSS feedl link and send it it RSStoJSON


//HERE IS RSS TO JSON CONVERTER
$('button').on('click', function() {

        var rsslink = $(this).data('link');
        //var queryURL = "http://rss2json.com/api.json?rss_url=" + "http://feeds.bbci.co.uk/news/world/rss.xml?edition=uk" ;
        var queryURL = "http://rss2json.com/api.json?rss_url=" + rsslink;
   
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                console.log(response);
                for (var i = 0; i < response.items.length; i++){
                var l = response.items[i].title
                analysis(l); 

                }
                })
        });

//HERE WE NEED TO TAKE THE RETURNED INFO
//PARCE INFO TO BE ANALYZED AND SET TO VARIABLE
//PASS INFO INTO THE ANALYZER


//HERE IS THE ANALYZER FROM HEWELET PACKARD ENT
function analysis(l) {

        var titleText = l.split(' ').join('+');
        var queryURL = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text=http%3A%2F%2F" + titleText + "&apikey=ba67a893-398a-4cdb-ac52-57764039436f";
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                console.log ("titleTex = " + titleText)
                console.log(response);
                })
        };