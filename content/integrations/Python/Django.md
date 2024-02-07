---
slug: '/python/Django'
---

# Django integration

```python
from django.http import HttpResponse
import requests

def make_request(request):
    url = "https://api.apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY"

    response = requests.get(url)

    if response.status_code == 200:
        return HttpResponse(response.text, content_type="application/json")
    else:
        return HttpResponse(f"HTTP Request Error: {response.status_code}", content_type="text/plain")

```
