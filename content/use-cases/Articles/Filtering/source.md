---
slug: '/articles/filtering/source'
sidebar_position: 5
---

# Search by news source

Find articles by news source.

[More filter options see in API Reference](/api-reference/get-articles)

## Get news articles from techcrunch.com

| Method | URL                                                         |
|--------|-------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?source=techcrunch.com` |

#### Response
import ExampleRequest from '@site/src/components/ExampleRequest'

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&source=techcrunch.com"></ExampleRequest>

---

## Get news articles from techcrunch.com and theverge.com

| Method | URL                                                                      |
|--------|--------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?source=techcrunch.com,theverge.com` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&source=techcrunch.com,theverge.com"></ExampleRequest>

---

## Get news articles where title contains "Elon Musk" and source is "techcrunch.com"

| Method | URL                                                                         |
|--------|-----------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?title=Elon Musk&source=techcrunch.com` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&title=Elon Musk&source=techcrunch.com"></ExampleRequest>
