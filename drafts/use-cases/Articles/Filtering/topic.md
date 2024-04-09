---
slug: '/articles/filtering/topic'
sidebar_position: 4
---

# Search by topic

Find articles by topic.

[More filter options see in API Reference](/api-reference/get-news-articles)

## Get news articles where topic is "financial_news"

| Method | URL                                                        |
|--------|------------------------------------------------------------|
| GET    | `https://api.apitube.io/v1/news/articles?topic=financial_news` |

#### Response
import ExampleRequest from '@site/src/components/ExampleRequest'

<ExampleRequest url="https://api.apitube.io/v1/news/articles?limit=2&topic=financial_news"></ExampleRequest>

---

## Get news articles where topic is "financial_news" and location is "Italy"

| Method | URL                                                                            |
|--------|--------------------------------------------------------------------------------|
| GET    | `https://api.apitube.io/v1/news/articles?topic=financial_news&location_name=Italy` |

#### Response

<ExampleRequest url="https://api.apitube.io/v1/news/articles?limit=2&topic=financial_news&location_name=Italy"></ExampleRequest>

---

## Get news articles where title contains "Elon Musk" and topic is "financial_news"

| Method | URL                                                                        |
|--------|----------------------------------------------------------------------------|
| GET    | `https://api.apitube.io/v1/news/articles?title=Elon Musk&topic=financial_news` |

#### Response

<ExampleRequest url="https://api.apitube.io/v1/news/articles?limit=2&title=Elon Musk&topic=financial_news"></ExampleRequest>

---

## Get news articles where title contains "Elon Musk" and topic is "financial_news" and location is "Italy"

| Method | URL                                                                                            |
|--------|------------------------------------------------------------------------------------------------|
| GET    | `https://api.apitube.io/v1/news/articles?title=Elon Musk&topic=financial_news&location_name=Italy` |

#### Response

<ExampleRequest url="https://api.apitube.io/v1/news/articles?limit=2&title=Elon Musk&topic=financial_news&location_name=Italy"></ExampleRequest>
