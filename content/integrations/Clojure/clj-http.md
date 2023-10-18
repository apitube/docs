---
slug: '/clojure/clj-http'
---

# clj-http integration

```clojure
(require '[clj-http.client :as client])

(client/get "https://apitube.io/v1/news" {:query-params {:limit "250", :key: "YOUR_API_KEY"}})
```
