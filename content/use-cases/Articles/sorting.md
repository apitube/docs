---
slug: '/articles/sorting'
---

# Sorting

Sort articles by field

[More filter options see in API Reference](/api-reference/articles)

## Get news articles sorted by sentiment

| Method | URL                                                                        |
|--------|----------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?sort_by=sentiment&sort_direction=asc` |

#### Response
import ExampleRequest from '@site/src/components/ExampleRequest'

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2"></ExampleRequest>

---

## Get news articles sorting without direction

| Method | URL                                                     |
|--------|---------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?sort_by=sentiment` |

#### Response
<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2"></ExampleRequest>

---

## Get news articles where title contains "Elon Musk" and sorted by sentiment

| Method | URL                                                                                        |
|--------|--------------------------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?title=Elon Musk&sort_by=sentiment&sort_direction=asc` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&title=Elon Musk&sort_by=sentiment&sort_direction=asc"></ExampleRequest>

---

## Get news articles where title contains "Elon Musk" and sorted by sentiment

| Method | URL                                                                                         |
|--------|---------------------------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?title=Elon Musk&sort_by=sentiment&sort_direction=desc` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&title=Elon Musk&sort_by=sentiment&sort_direction=desc"></ExampleRequest>
