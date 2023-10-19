---
slug: '/python/Requests'
---

# Requests integration

```python
import requests

url = "https://apitube.io/v1/articles"

querystring = {"limit":"250", "api_key":"YOUR_API_KEY"}

response = requests.request("GET", url, params=querystring)

print(response.text)
```
