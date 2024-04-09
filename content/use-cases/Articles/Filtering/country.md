---
slug: '/articles/filtering/country'
sidebar_position: 2
---

# Search by country

Find articles by country.

[More filter options see in API Reference](/api-reference/get-news-articles)

## Get news articles in USA

| Method | URL                                              |
|--------|--------------------------------------------------|
| GET    | `https://api.apitube.io/v1/news/articles?country=us` |

#### Response
import ExampleRequest from '@site/src/components/ExampleRequest'

<ExampleRequest url="https://api.apitube.io/v1/news/articles?country=us"></ExampleRequest>

---

## Get news articles in the USA and Italy

| Method | URL                                                 |
|--------|-----------------------------------------------------|
| GET    | `https://api.apitube.io/v1/news/articles?country=en,it` |

#### Response

<ExampleRequest url="https://api.apitube.io/v1/news/articles?limit=2&country=us,it"></ExampleRequest>

---

## Get news articles in the USA and Italy and contains "Elon Musk" in title

| Method | URL                                                                 |
|--------|---------------------------------------------------------------------|
| GET    | `https://api.apitube.io/v1/news/articles?country=en,it&title=Elon Musk` |

#### Response

<ExampleRequest url="https://api.apitube.io/v1/news/articles?limit=2&country=us,it&title=Elon Musk"></ExampleRequest>
