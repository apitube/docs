---
slug: '/articles/filtering/category'
sidebar_position: 3
---

# Search by category

Find articles by category.

[More filter options see in API Reference](/api-reference/articles)

## Get news articles from "Business" category

| Method | URL                                                          |
|--------|--------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?category=news/Business` |

#### Response
import ExampleRequest from '@site/src/components/ExampleRequest'

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&category=news/Business"></ExampleRequest>

---

## Get news articles from "Business" and "Technology" categories

| Method | URL                                                                          |
|--------|------------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?category=news/Business,news/Technology` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&category=news/Business,news/Technology"></ExampleRequest>

---

## Get news articles from "Business" and "Technology" and contains "Elon Musk" in title

| Method | URL                                                                                          |
|--------|----------------------------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?category=news/Business,news/Technology&title=Elon Musk` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&category=news/Business,news/Technology&title=Elon Musk"></ExampleRequest>

---

## Get news articles from "Business" and "Technology" and contains "Elon Musk" in title and location is "Italy"

| Method | URL                                                                                                              |
|--------|------------------------------------------------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?category=news/Business,news/Technology&title=Elon Musk&location_name=Italy` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&category=news/Business,news/Technology&title=Elon Musk&location=Italy"></ExampleRequest>
