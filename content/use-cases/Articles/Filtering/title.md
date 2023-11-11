---
slug: '/articles/filtering/title'
sidebar_position: 1
---

# Search by title or content

Find articles by title or content.

[More filter options see in API Reference](/api-reference/get-articles)

## Get news articles where title contains "Elon Musk"

| Method | URL                                                   |
|--------|-------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?title=Elon Musk` |

#### Response
import ExampleRequest from '@site/src/components/ExampleRequest'

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&title=Elon Musk"></ExampleRequest>

---

## Get news articles where title contains "Elon Musk" and "Tesla"

| Method | URL                                                         |
|--------|-------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?title=Elon Musk,Tesla` |

#### Response
<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&title=Elon Musk,Tesla"></ExampleRequest>

---

## Get news articles where title contains "Elon Musk" and content contains "Tesla"

| Method | URL                                                                 |
|--------|---------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?title=Elon Musk&content=Tesla` |

#### Response
<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&title=Elon Musk&content=Tesla"></ExampleRequest>

## Get news articles where title contains "Elon Musk" and "Tesla" and "SpaceX"

| Method | URL                                                                |
|--------|--------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?title=Elon Musk,Tesla,SpaceX` |

#### Response
<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&title=Elon Musk,Tesla,SpaceX"></ExampleRequest>

---

## Get news articles where title contains "Elon Musk" and "Tesla" and "SpaceX" and location is "Italy"

| Method | URL                                                                                    |
|--------|----------------------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?title=Elon Musk,Tesla,SpaceX&location_name=Italy` |

#### Response

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&title=Elon Musk,Tesla,SpaceX&location_name=Italy"></ExampleRequest>
