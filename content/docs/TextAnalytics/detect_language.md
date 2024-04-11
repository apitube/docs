---
sidebar_position: 1
slug: '/text-analytics/detect-language'
---

# Detect Language

The Detect Language endpoint analyzes text data and returns the language of the text. The language can be any of the supported languages. The API is designed to be simple to use and easy to integrate into your applications.

For more information check [API Reference](/api-reference/detect-text-language).

## Data Model

The Detect Language endpoint returns a JSON object with the following properties:
```json
{
	// request ID (unique article's ID, alwais uuid)
	"request_id": "7c4d2791-d297-41b5-9b5f-af72412962a2",
	// text data (string)
	"text": "In making successful video game adaptations, it feels more important to strike the right tone rather than follow the source material to the letter. “Tone” in Fallout is Walton Goggins’ whiskey-soaked cowboy drawl ripped straight from the age of Gary Cooper and John Wayne extolling the virtues of bucolic Vault-Tec living with a sign that says “Test Subjects” just a touch off-screen.",
	// language code (ISO 639-1 code)
	"language_code": "en",
}
```
