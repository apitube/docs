---
sidebar_position: 0
slug: '/get-articles/data-model'
---

# Article data model

The article data model is a JSON object that represents the structure of an article. The following table lists the properties of the article data model.

```json
{
//    hello
  "id": "string",
  "title": "string",
  "description": "string",
  "url": "string",
  "publishedAt": "string",
  "source": {
    "id": "string",
    "name": "string"
  }
}
```

| Property name | Type   | Description                                                                 |
|---------------|--------|-----------------------------------------------------------------------------|
| id            | string | The unique identifier of the article.                                       |
| title         | string | The title of the article.                                                   |
| description   | string | The description of the article.                                             |
| url           | string | The URL of the article.                                                     |
| publishedAt   | string | The date and time when the article was published.                          |
| source        | object | The source of the article.                                                  |
