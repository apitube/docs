---
sidebar_position: 0
slug: '/text-analytics-api/detect-sentiment'
---

# Detect Sentiment

The Detect Sentiment endpoint analyzes text data and returns the sentiment of the text. The sentiment can be positive, negative, or neutral. The API is designed to be simple to use and easy to integrate into your applications.

For more information check [API Reference](/api-reference/detect-text-sentiment).

## Data Model

The Detect Sentiment endpoint returns a JSON object with the following properties:
```json
{
	// request ID (unique article's ID, alwais uuid)
	"requestId": "7c4d2791-d297-41b5-9b5f-af72412962a2",
	// text data (string)
	"text": "In making successful video game adaptations, it feels more important to strike the right tone rather than follow the source material to the letter. “Tone” in Fallout is Walton Goggins’ whiskey-soaked cowboy drawl ripped straight from the age of Gary Cooper and John Wayne extolling the virtues of bucolic Vault-Tec living with a sign that says “Test Subjects” just a touch off-screen.",
	// total score (float)
	"totalScore": 0.8,
	// total comparative (float)
	"totalComparative": 0.8
}
```
