---
sidebar_position: 1
slug: '/text-analytics-api/suggest-category'
---

# Suggest Category

The Suggest Category endpoint analyzes text data and returns the category of the text. The category can be any of the supported categories. The API is designed to be simple to use and easy to integrate into your applications.

For more information check [API Reference](/api-reference/suggest-category).

## Data Model

The Detect Language endpoint returns a JSON object with the following properties:
```json
{
	// status of the request (ok, error)
	"status": "ok",
	// is API points decremented (true, false)
	"isApiPointsDecremented": false,
	// request ID (unique article's ID, alwais uuid)
	"requestId": "7c4d2791-d297-41b5-9b5f-af72412962a2",
	// text data (string)
	"text": "In making successful video game adaptations, it feels more important to strike the right tone rather than follow the source material to the letter. “Tone” in Fallout is Walton Goggins’ whiskey-soaked cowboy drawl ripped straight from the age of Gary Cooper and John Wayne extolling the virtues of bucolic Vault-Tec living with a sign that says “Test Subjects” just a touch off-screen.",
	// suggested category (string)
	"category": "news/Arts_and_Entertainment",
    // scores for each category (object)
    "scores": {
        "news/Arts_and_Entertainment": 0.9999999999999999,
        "news/Health": 0.0,
        "news/Science": 0.0,
        "news/Sports": 0.0,
        "news/Technology": 0.0
    },
    // matched keywords (array of strings)
    "keywords": [
        "video game",
        "adaptations",
        "source material",
        "Fallout",
        "Walton Goggins",
        "whiskey-soaked",
        "cowboy drawl",
        "Gary Cooper",
        "John Wayne",
        "Vault-Tec",
        "living",
        "Test Subjects",
        "news",
        "Arts and Entertainment"
    ]
}
```
