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



2 #### IBM WATSON ####

IBM Watson takes some text as an indput and outputs the followsing JSON


----On a document level

{
  "document_tone": {
    "tone_categories": [
      {
        "tones": [
          {
            "score": 0.909751,
            "tone_id": "anger",
            "tone_name": "Anger"
          },
          {
            "score": 0.358668,
            "tone_id": "disgust",
            "tone_name": "Disgust"
          },
          {
            "score": 0.234315,
            "tone_id": "fear",
            "tone_name": "Fear"
          },
          {
            "score": 0.02208,
            "tone_id": "joy",
            "tone_name": "Joy"
          },
          {
            "score": 0.111317,
            "tone_id": "sadness",
            "tone_name": "Sadness"
          }
        ],
        "category_id": "emotion_tone",
        "category_name": "Emotion Tone"
      },
      {
        "tones": [
          {
            "score": 0.946,
            "tone_id": "analytical",
            "tone_name": "Analytical"
          },
          {
            "score": 0,
            "tone_id": "confident",
            "tone_name": "Confident"
          },
          {
            "score": 0.024,
            "tone_id": "tentative",
            "tone_name": "Tentative"
          }
        ],
        "category_id": "language_tone",
        "category_name": "Language Tone"
      },
      {
        "tones": [
          {
            "score": 0.079,
            "tone_id": "openness_big5",
            "tone_name": "Openness"
          },
          {
            "score": 0.231,
            "tone_id": "conscientiousness_big5",
            "tone_name": "Conscientiousness"
          },
          {
            "score": 0.775,
            "tone_id": "extraversion_big5",
            "tone_name": "Extraversion"
          },
          {
            "score": 0.927,
            "tone_id": "agreeableness_big5",
            "tone_name": "Agreeableness"
          },
          {
            "score": 0.866,
            "tone_id": "emotional_range_big5",
            "tone_name": "Emotional Range"
          }
        ],
        "category_id": "social_tone",
        "category_name": "Social Tone"
      }
    ]
  }
}


----sentence by sentence 

{
  "sentences_tone": [
    {
      "sentence_id": 0,
      "text": "Hi Team,",
      "input_from": 0,
      "input_to": 8,
      "tone_categories": [
        {
          "tones": [
            {
              "score": 0,
              "tone_id": "Anger",
              "tone_name": "Anger",
              "tone_category_id": "emotion_tone",
              "tone_category_name": "Emotion Tone"
            },
            {
              "score": 0,
              "tone_id": "Disgust",
              "tone_name": "Disgust",
              "tone_category_id": "emotion_tone",
              "tone_category_name": "Emotion Tone"
            },
            {
              "score": 0,
              "tone_id": "Fear",
              "tone_name": "Fear",
              "tone_category_id": "emotion_tone",
              "tone_category_name": "Emotion Tone"
            },
            {
              "score": 0,
              "tone_id": "Joy",
              "tone_name": "Joy",
              "tone_category_id": "emotion_tone",
              "tone_category_name": "Emotion Tone"
            },
            {
              "score": 0,
              "tone_id": "Sadness",
              "tone_name": "Sadness",
              "tone_category_id": "emotion_tone",
              "tone_category_name": "Emotion Tone"
            }
          ],
          "category_id": "emotion_tone",
          "category_name": "Emotion Tone"
        },
        {
          "tones": [
            {
              "score": 0,
              "tone_id": "Analytical",
              "tone_name": "Analytical",
              "tone_category_id": "language_tone",
              "tone_category_name": "Language Tone"
            },
            {
              "score": 0,
              "tone_id": "Confident",
              "tone_name": "Confident",
              "tone_category_id": "language_tone",
              "tone_category_name": "Language Tone"
            },
            {
              "score": 0,
              "tone_id": "Tentative",
              "tone_name": "Tentative",
              "tone_category_id": "language_tone",
              "tone_category_name": "Language Tone"
            }
          ],
          "category_id": "language_tone",
          "category_name": "Language Tone"
        },
        {
          "tones": [
            {
              "score": 0,
              "tone_id": "Openness_Big5",
              "tone_name": "Openness",
              "tone_category_id": "social_tone",
              "tone_category_name": "Social Tone"
            },
            {
              "score": 0,
              "tone_id": "Conscientiousness_Big5",
              "tone_name": "Conscientiousness",
              "tone_category_id": "social_tone",
              "tone_category_name": "Social Tone"
            },
            {
              "score": 0,
              "tone_id": "Extraversion_Big5",
              "tone_name": "Extraversion",
              "tone_category_id": "social_tone",
              "tone_category_name": "Social Tone"
            },
            {
              "score": 0,
              "tone_id": "Agreeableness_Big5",
              "tone_name": "Agreeableness",
              "tone_category_id": "social_tone",
              "tone_category_name": "Social Tone"
            },
            {
              "score": 0,
              "tone_id": "Neuroticism_Big5",
              "tone_name": "Emotional Range",
              "tone_category_id": "social_tone",
              "tone_category_name": "Social Tone"
            }
          ],
          "category_id": "social_tone",
          "category_name": "Social Tone"
        }
      ],
      "className": ""
    },
    {
      "sentence_id": 1,
      "text": "The times are difficult!",
      "input_from": 10,
      "input_to": 34,
      "tone_categories": [
