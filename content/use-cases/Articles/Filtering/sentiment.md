---
slug: '/articles/filtering/sentiment'
sidebar_position: 10
---

# Search by sentiment

Find articles by sentiment.

[More filter options see in API Reference](/api-reference/get-articles)

## Get news articles with positive sentiment

| Method | URL                                                      |
|--------|----------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?sentiment=positive` |

#### Response
import ExampleRequest from '@site/src/components/ExampleRequest'

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&sentiment=positive"></ExampleRequest>

---

## Get news articles with negative sentiment

| Method | URL                                                      |
|--------|----------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?sentiment=negative` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&sentiment=negative"></ExampleRequest>

---

## Get news articles with neutral sentiment

| Method | URL                                                      |
|--------|----------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?sentiment=neutral`  |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&sentiment=neutral"></ExampleRequest>

---

## Get news articles where sentiment_min is 0.5

| Method | URL                                                                          |
|--------|------------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?sentiment_min=0.5`                      |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&sentiment_min=0.5"></ExampleRequest>

---

## Get news articles where sentiment_max is 0.5

| Method | URL                                                                          |
|--------|------------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?sentiment_max=0.5`                      |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&sentiment_max=0.5"></ExampleRequest>

---

## Get news articles where sentiment_min is 0.5 and sentiment_max is 0.8

| Method | URL                                                                                          |
|--------|----------------------------------------------------------------------------------------------|

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&sentiment_min=0.5&sentiment_max=0.8"></ExampleRequest>

---

## Get news articles where sentiment_min is 0.5 and sentiment_max is 0.8 and title contains "Elon Musk"

| Method | URL                                                                                       |
|--------|-------------------------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?sentiment_min=0.5&sentiment_max=0.8&title=Elon Musk` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&sentiment_min=0.5&sentiment_max=0.8&title=Elon Musk"></ExampleRequest>
