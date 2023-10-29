---
slug: '/filtering/location'
---

# Search by locations

Find articles in a specific radius from location

[More filter options see in API Reference](/api-reference/get-articles)

## Get news articles from Italy(country)

| Method | URL                                                       |
|--------|-----------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?location_name=Italy` |

#### Response
import ExampleRequest from '@site/src/components/ExampleRequest'

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2"></ExampleRequest>

---

## Get news articles from Paris(city)

| Method | URL                                                       |
|--------|-----------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?location_name=Paris` |

#### Response
<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2"></ExampleRequest>

---