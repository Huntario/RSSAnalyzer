AGENDA  
1. organize presentation  
2. add area to show warnings/results of queries  
3. fix graph issue      
4. prevent duplicate queries  
5. more detailed warnings   
6. clean up code  


PRESENTATION GOALS  
10 minutes in total
Explain each in detail

-01 Overall App Concept - Jason  
---1A Take headlines from the news and analyze them for sentiment (positive/negative emotion)

-02 Motivation for Development  - Jason  
---2A Compare the outlook of news sources    
---2B Let readers know what they're reading  

-03 Front-end Design Process - Tonie  
---3A Started with bootstrap + custom CSS framework for buttons/search

-04 Demonstration - Tonie   
---4A show buttons  
---4B show score  
---4C show validation (http and if feed is live)
---4D show table and graph    

-05 Technologies Used - Hunter     
---5A Explain RSS    
---5B RSS to JSON api  
---5C Hewelett Packard E Sentiment Analysis API   
---5D Chartist  

-06 App Design Process - Hunter  
---6A Take RSS link -- pass to RSStoJASON  
---6B Take returned JSON -- push headlines into an array  
---6C Pass in array of headlines -- return setniment analysis  
---6D Pos sentences, neg, sentences, overal score  
---6E Store object in database w/ source, sentiment score, time, text analyzed (array of headlines)  
---6F Display scores on table and graph

-07 Directions for Future Development - Jason    
---7A Compare to outside datapoints (compare stock prices to pos/neg of news outlets, integrate IBM Watson API)  

GOALS  
X - 01.Must uses at least two APIs  
X - 02.Must use AJAX to pull data  
X - 03.Must utilize new library or tech that we haven’t discussed    
04.Must have a polished frontend / UI (GRAPH APPEARING ONLY AFTER RESIZE)   
X - 05.coding standards (indentation, scoping, naming)  
X - 06.Must NOT use alerts, confirms, or prompts (look into modals!)     
X - 07.Must have some sort of repeating element (table, columns, etc)  
X - 08.Must use Bootstrap or Alternative CSS Framework   
X - 09.Must be Deployed (Heroku or Firebase)  
x - 10.Must have User Input Validation    
Bonus   
X - 11.Firebase/ Persistent Data Storage(basically a requirement).    
x - 12.Mobile Responsive    
X - 13.Use an alternative CSS framework like Material    


RSS to JSON URL
- http://rss2json.com/api.json
- rss feed you want to convert to json, the url need to be escaped (eg. https%3A%2F%2Fnews.ycombinator.com%2Frss )
http://rss2json.com/api.json?rss_url=https%3A%2F%2Fnews.ycombinator.com%2Frss
RETURNS
```javascript
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

}, more items
```


HEP Sentiment Analysis

 "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text=The+happy+green+cat+jumped+high.+The+mean+man+was+angry+and+depressed.&apikey=apikeygoeshere"
 
returns

```json
{
  "positive": [
    {
      "sentiment": "The happy green cat",
      "topic": null,
      "score": 0.5734506634410159,
      "original_text": "The happy green cat",
      "original_length": 19,
      "normalized_text": "The happy green cat",
      "normalized_length": 19
    }
  ],
  "negative": [
    {
      "sentiment": "angry and depressed",
      "topic": "The mean man",
      "score": -0.9786553583913906,
      "original_text": "The mean man was angry and depressed",
      "original_length": 36,
      "normalized_text": "The mean man was angry and depressed",
      "normalized_length": 36
    }
  ],
  "aggregate": {
    "sentiment": "negative",
    "score": -0.20260234747518735
  }
}
```


Firebase Info

When the app writes to firbase, this is what it writes:

```json
-uniqueid
    query
        score: -0.26330603303881905
        sentiment: "negative"
        source:"http://rss.nytimes.com/services/xml/rss/nyt/Wor..."
        text
            0: "Obama, at the U.N., Cites Iraq Gains and Urges ..."
            1: "Aid Convoy Is Hit in Syria as Cease-Fire Falter..."
            2: "Kinshasa, Congo, Is Locked Down as Protests Eru..."
            etc.
```