
$('.btn btn-primary').on('click', function () {
    $(this).button('toggle') // button text will be "finished!"
  })

//Upon clicking the "analyze" button, we get the chosen RSS feedl link and send it it RSStoJSON

$('button').on('click', function() {

		var testLink = "https%3A%2F%2Fnews.ycombinator.com%2Frss"
        var rsslink = $(this).data('link');
        //var queryURL = "http://rss2json.com/api.json?rss_url=" + "http://feeds.bbci.co.uk/news/world/rss.xml?edition=uk" ;
        var queryURL = "http://rss2json.com/api.json?rss_url=" + rsslink;
   
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {

            	console.log(response);

                // var results = response.data;
                // for (var i = 0; i < results.length; i++) {
                //     var gifDiv = $('<div class="item">')
                //     var rating = results[i].rating;
                //     var p = $('<p>').text("Rating: " + rating);
                //     var personImage = $('<img>');
                //     personImage.attr('src', results[i].images.fixed_height.url);
                //     gifDiv.append(p)
                //     gifDiv.append(personImage)
                //     $('#gifsAppearHere').prepend(gifDiv);
                })
            });

//We send the JSON data of the rss feed to the IBM Watson tone analyzer


	var watson = require('watson-developer-cloud');

		var tone_analyzer = watson.tone_analyzer({
		  username: '4e91cdcb-8fa7-4b46-8827-b729e36a1136',
		  password: 'n5RMX0VpNUzh',
		  version: 'v3',
		  version_date: '2016-05-19 '
		});

		tone_analyzer.tone({ text: 'A word is dead when it is said, some say. Emily Dickinson' },
		  function(err, tone) {
		    if (err)
		      console.log(err);
		    else
		      console.log(JSON.stringify(tone, null, 2));
		});

//We return the analysis from Watson in JSON
//Put the analysis on sreeen