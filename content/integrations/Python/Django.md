---
slug: '/python/Django'
---

# Django integration

```python
from django.http import HttpResponse
import requests

def make_request(request):
    url = "https://apitube.io/v1/news?limit=250"
    api_key = "***KEY***"

    headers = {
        "X-ApiTube-Key": api_key
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        return HttpResponse(response.text, content_type="application/json")
    else:
        return HttpResponse(f"HTTP Request Error: {response.status_code}", content_type="text/plain")

```
