---
sidebar_position: 0
slug: '/news-api/data-model'
---

# Article data model

The article data model is a JSON object that represents the structure of an article. The following table lists the properties of the article data model.

```json
{
	// article's ID (unique article's ID, alwais uuid)
	"id": "7c4d2791-d297-41b5-9b5f-af72412962a2",
    // article's source href (string)
    "href": "https://www.bbc.co.uk/news/uk-57228757",
    // article's published time (ISO 8601 date)
    "publishedAt": "2021-05-26T10:00:00Z",
    // article's title (string)
    "title": "Covid: UK reports 3,542 new cases and 10 deaths",
    // article's short description (string)
    "description": "The latest figures come as the UK government announces...",
    // article's content (string)
    "body": "The latest figures come as the UK government..",
    // article's image (string)
    "image": "https://ichef.bbci.co.uk/news/1024/branded_news/1A3A/production/_118073073_gettyimages-123456789.jpg",
    // article's authors (array of strings)
	"authors": [
		"John Dow",
		"Jane Dow"
	],
    // article's links (array of links)
    "links": [
	    "https://www.bbc.co.uk/news/uk-57228756",
        "https://www.bbc.co.uk/news/uk-57228757"
    ],
    // article's videos (array of video links)
    "videos": [
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    ],
    // article's country (ISO 3166-1 alpha-2 code)
    "country": "uk",
    // article's language (ISO 639-1 code)
    "language": "en",
    // article's category (string)
    "category": "news/World",
    // article's topic (string)
    "topic": "not_folded",
    // article's source info (object)
    "source": {
        "id": 6482938, // source's ID (integer)
        "domain": "bbc.co.uk", // source's domain (string)
	    "homePageUrl": "https://www.bbc.co.uk/news", // source's home page URL (string)
        "type": "news", // source's type (string)
        "rank": 12002 // source's rank (integer)
        "location": {
            "countryName": "England", // location's name (string)
            "countryCode": "UK" // location's country (ISO 3166-1 alpha-2 code)
        }
    },
    // article's sentiment score (float)
    "sentiment": {
        "overall": {
            "score": 0.4, // sentiment score (float)
            "label": "positive" // sentiment label (string)
        },
        "title": {
            "score": 0.5, // sentiment score (float)
            "label": "positive" // sentiment label (string)
        },
        "body": {
            "score": 0.3, // sentiment score (float)
            "label": "positive" // sentiment label (string)
        }
    },
    // article's summary
    "summary": {
	    // article's summary (array of sentences)
        "sentences": [
	        {
		        sentence: "The latest figures come as the UK government announces...", // sentence (string)
		        // sentence sentiment
                "sentiment": {
                    "score": 0.4, // sentiment score (float)
                    "polarity": "positive" // sentiment label (string)
                }
	        }
        ]
    },
    // article's locations
    "locations": [
        {
	        "key": "abcdefg1234" // location's key (string),
            "name": "London", // location's name (string)
            "type": "city", // location's type (string)
            "country": "uk", // location's country (ISO 3166-1 alpha-2 code)
            "coords": {
                "latitude": 51.5074, // location's latitude (float)
                "longitude": -0.1278 // location's longitude (float)
            }
        }
    ],
    // article's story
    "story": {
        "id": "7c4d2791-d297-41b5-9b5f-af72412962a2", // story's ID (string)
        "uri": "https://api.apitube.io/v1/news/story/7c4d2791-d297-41b5-9b5f-af72412962a2", // story's URI (string)
    },
    // article's hashtags (array of strings)
    "hashtags": [
        "#covid19",
        "#uk"
    ],
	// article's duplicate flag (boolean)
    "isDuplicate": false,
    // sentence count (integer)
    "sentencesCount": 86,
    // paragraphs count (integer)
    "paragraphsCount": 12,
    // words count (integer)
    "wordsCount": 5856,
    // characters count (integer)
    "charactersCount": 15428
}
```
