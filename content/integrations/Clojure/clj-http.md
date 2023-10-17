---
slug: '/clojure/clj-http'
---

# clj-http integration

```clojure
(require '[clj-http.client :as client])

(client/get "https://apitube.io/v1/news" {:headers {:X-ApiTube-Key "***YOUR_KEY***"}
                                                             :query-params {:limit "250"}})
```
