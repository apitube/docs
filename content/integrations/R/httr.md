---
slug: '/R/httr'
---

# HTTR integration

```rlang
library(httr)

url <- "https://apitube.io/v1/news"

queryString <- list(
  limit = "250"
)

response <- VERB("GET", url, add_headers('X-ApiTube-Key' = '***KEY***'), query = queryString, content_type("application/octet-stream"))

content(response, "text")
```
