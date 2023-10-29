---
slug: '/articles/filtering/language'
sidebar_position: 2
---

# Search by language

Find articles by language.

[More filter options see in API Reference](/api-reference/get-articles)

## Get news articles in English

| Method | URL                                               |
|--------|---------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?language=en` |

#### Response
import ExampleRequest from '@site/src/components/ExampleRequest'

<ExampleRequest url="https://apitube.io/v1/news/articles?language=en"></ExampleRequest>

---

## Get news articles in English and Italian

| Method | URL                                                  |
|--------|------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?language=en,it` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?language=en,it"></ExampleRequest>

---

## Get news articles in English and Italian and contains "Elon Musk" in title

| Method | URL                                                                  |
|--------|----------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?language=en,it&title=Elon Musk` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?language=en,it&title=Elon Musk"></ExampleRequest>

---

## Get news articles in English and Italian and contains "Elon Musk" in title and location is "Italy"

| Method | URL                                                                                      |
|--------|------------------------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?language=en,it&title=Elon Musk&location_name=Italy` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?language=en,it&title=Elon Musk&location_name=Italy"></ExampleRequest>
