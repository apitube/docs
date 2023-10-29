---
slug: '/articles/filtering/type'
sidebar_position: 6
---

# Search by news type

Find articles by news type.

[More filter options see in API Reference](/api-reference/get-articles)

## Get news articles where type is "news"

| Method | URL                                                      |
|--------|----------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?type=news` |

#### Response
import ExampleRequest from '@site/src/components/ExampleRequest'

<ExampleRequest url="https://apitube.io/v1/news/articles?type=news"></ExampleRequest>

---

## Get news articles where type is "blog/company"

| Method | URL                                                     |
|--------|---------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?type=blog/company` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?type=blog/company"></ExampleRequest>

---

## Get news articles where type is "blog/personal"

| Method | URL                                                      |
|--------|----------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?type=blog/personal` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?type=blog/personal"></ExampleRequest>

---

## Get news articles where title contains "Elon Musk" and type is "news"

| Method | URL                                                                      |
|--------|--------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?title=Elon Musk&type=news` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?title=Elon Musk&type=news"></ExampleRequest>
