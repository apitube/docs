---
slug: '/sorting/sort'
---

# Sorting examples

Sort articles by field

[More filter options see in API Reference](/api-reference/get-articles)

## Sort with direction

| Method | URL                                                                        |
|--------|----------------------------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?sort_by=sentiment&sort_direction=asc` |

#### Response
import ExampleRequest from '@site/src/components/ExampleRequest'

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2"></ExampleRequest>

---

## Sort without direction

| Method | URL                                                     |
|--------|---------------------------------------------------------|
| GET    | `https://apitube.io/v1/news/articles?sort_by=sentiment` |

#### Response
<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2"></ExampleRequest>
