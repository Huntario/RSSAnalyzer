README.txt

1 #### RSS to JSON URL ####
2 #### IBM WATSON ####


1 #### RSS to JSON URL ####

- http://rss2json.com/api.json

- rss feed you want to convert to json, the url need to be escaped (eg. https%3A%2F%2Fnews.ycombinator.com%2Frss )



http://rss2json.com/api.json?rss_url=https%3A%2F%2Fnews.ycombinator.com%2Frss

RETURNS


{
status: "ok",

feed: {
	title: "Hacker News",
	link: "https://news.ycombinator.com/",
	author: "",
	description: "Links for the intellectually curious, ranked by readers.",
	image: ""
	},

items: [

	{
	title: "Ultrasound Haptic Technology Could Revolutionise Man-Machine Interaction",
	link: "https://www.theengineer.co.uk/ultrasound-haptic-technology-could-revolutionise-man-machine-interaction/",
	guid: "https://www.theengineer.co.uk/ultrasound-haptic-technology-could-revolutionise-man-machine-interaction/",
	pubDate: "Sat, 17 Sep 2016 15:28:17 +0000",
	categories: [ ],
	author: "",
	thumbnail: "",
	description: "<a href="https://news.ycombinator.com/item?id=12520873">Comments</a>",
	content: "<a href="https://news.ycombinator.com/item?id=12520873">Comments</a>"

}, etc 



2 #### HPE Sentiment Analysis ####

IBM Watson takes some text as an indput and outputs the followsing JSON

