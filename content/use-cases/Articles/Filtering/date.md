---
slug: '/articles/filtering/date'
sidebar_position: 8
---

# Search by date

Find articles by date.

[More filter options see in API Reference](/api-reference/articles)

## Get news articles published in 2023-10-01 - 2023-10-02

| Method | URL                                                                             |
|--------|---------------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?date_start=2023-10-01&date_end=2023-10-02` |

#### Response
import ExampleRequest from '@site/src/components/ExampleRequest'

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&date_start=2021-09-01&date_end=2023-10-02"></ExampleRequest>

---

## Get news articles from "Business" category and published in 2023-11-01 - 2023-11-30

| Method | URL                                                                                                    |
|--------|--------------------------------------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?category=news/Business&date_start=2023-11-01&date_end=2023-11-30` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&category=news/Business&date_start=2023-11-01&date_end=2023-11-30"></ExampleRequest>

---

## Get news articles where title contains "Elon Musk" and published in 2023-10-01 - 2023-10-02

| Method | URL                                                                                             |
|--------|-------------------------------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?title=Elon Musk&date_start=2023-10-01&date_end=2023-10-02` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&title=Elon Musk&date_start=2023-10-01&date_end=2023-10-02"></ExampleRequest>

---

## Get news articles where title contains "Elon Musk" and published in 2023-10-01 - 2023-10-02 and location is "Italy"

| Method | URL                                                                                                                 |
|--------|---------------------------------------------------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?title=Elon Musk&date_start=2023-10-01&date_end=2023-10-02&location_name=Italy` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&title=Elon Musk&date_start=2023-10-01&date_end=2023-10-02&location_name=Italy"></ExampleRequest>

---

## Get news articles where title contains "Elon Musk" and published in 2023-10-01 - 2023-10-02 and location is "Italy" and topic is "financial_news"

| Method | URL                                                                                                                                      |
|--------|------------------------------------------------------------------------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?title=Elon Musk&date_start=2023-10-01&date_end=2023-10-02&location_name=Italy&topic=financial_news` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&title=Elon Musk&date_start=2023-10-01&date_end=2023-10-02&location_name=Italy&topic=financial_news"></ExampleRequest>

---

## Get news articles where title contains "Elon Musk" and published in 2023-10-01 - 2023-10-02 and location is "Italy" and topic is "financial_news" and sentiment is "neutral"

| Method | URL                                                                                                                                                        |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?title=Elon Musk&date_start=2023-10-01&date_end=2023-10-02&location_name=Italy&topic=financial_news&sentiment=neutral` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&title=Elon Musk&date_start=2023-10-01&date_end=2023-10-02&location_name=Italy&topic=financial_news&sentiment=neutral"></ExampleRequest>
