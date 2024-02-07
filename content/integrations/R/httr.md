---
slug: '/R/httr'
---

# HTTR integration

```rlang
library(httr)

url <- "https://api.apitube.io/v1/news/articles"

queryString <- list(
  limit = "50"
  api_key = "YOUR_API_KEY"
)

response <- VERB("GET", url, query = queryString, content_type("application/octet-stream"))

content(response, "text")
```
