---
slug: '/python/HTTP_Client'
---

# HTTP Client integration

```python
import http.client

conn = http.client.HTTPSConnection("apitube.io")

headers = {
    'X-ApiTube-Key': "***KEY***"
}

conn.request("GET", "/v1/news?limit=250", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```
