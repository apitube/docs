---
slug: '/clojure/clj-http'
---

# clj-http integration

```clojure
(require '[clj-http.client :as client])

(client/get "https://apitube.io/v1/news/articles" {:query-params {:limit "50", :api_key: "YOUR_API_KEY"}})
```
