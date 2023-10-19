---
slug: '/R/httr'
---

# HTTR integration

```rlang
library(httr)

url <- "https://apitube.io/v1/articles"

queryString <- list(
  limit = "250"
  key = "YOUR_API_KEY"
)

response <- VERB("GET", url, query = queryString, content_type("application/octet-stream"))

content(response, "text")
```
