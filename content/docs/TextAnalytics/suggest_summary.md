---
sidebar_position: 1
slug: '/text-analytics-api/suggest-summary'
---

# Suggest Summary

The Suggest Summary endpoint analyzes text data and returns a summary of the text. The summary can be any of the supported categories. The API is designed to be simple to use and easy to integrate into your applications.

For more information check [API Reference](/api-reference/suggest-summary).

## Data Model

The Suggest Summary endpoint returns a JSON object with the following properties:
```json
{
	// request ID (unique article's ID, alwais uuid)
	"request_id": "7c4d2791-d297-41b5-9b5f-af72412962a2",
	// text data (string)
	"text": "In making successful video game adaptations, it feels more important to strike the right tone rather than follow the source material to the letter. “Tone” in Fallout is Walton Goggins’ whiskey-soaked cowboy drawl ripped straight from the age of Gary Cooper and John Wayne extolling the virtues of bucolic Vault-Tec living with a sign that says “Test Subjects” just a touch off-screen.",
    // suggested summaries list (array of objects)
    "list": [
        {
            "sentence": "“Tone” in Fallout is Walton Goggins’ whiskey-soaked cowboy drawl ripped straight from the age of Gary Cooper and John Wayne extolling the virtues of bucolic Vault-Tec living with a sign that says “Test Subjects” just a touch off-screen.",
        }
    ]
}
```
