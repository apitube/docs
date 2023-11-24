---
slug: '/python/HTTP_Client'
---

# HTTP Client integration

```python
import http.client

conn = http.client.HTTPSConnection("apitube.io")

conn.request("GET", "/v1/news?limit=50&api_key=YOUR_API_KEY")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```
