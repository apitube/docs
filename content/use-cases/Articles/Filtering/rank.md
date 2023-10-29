---
slug: '/articles/filtering/rank'
sidebar_position: 7
---

# Search by news source rank

Find articles by news source rank.

[More filter options see in API Reference](/api-reference/get-articles)

## Get news articles from sources where rank_min is 70 and rank_max is 100

| Method | URL                                                            |
|--------|----------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?rank_min=70&rank_max=100` |

#### Response
import ExampleRequest from '@site/src/components/ExampleRequest'

<ExampleRequest url="https://apitube.io/v1/news/articles?rank_min=70&rank_max=100"></ExampleRequest>

---

## Get news articles from sources where rank_min is 50

| Method | URL                                               |
|--------|---------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?rank_min=50` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?rank_min=50"></ExampleRequest>

---

## Get news articles from sources where rank_max is 50

| Method | URL                                               |
|--------|---------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?rank_max=50` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?rank_max=50"></ExampleRequest>

---

## Get news articles where title contains "Elon Musk" and rank_min is 50

| Method | URL                                                               |
|--------|-------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?title=Elon Musk&rank_min=50` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?title=Elon Musk&rank_min=50"></ExampleRequest>
