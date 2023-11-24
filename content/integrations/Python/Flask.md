---
slug: '/python/Flask'
---

# Flask integration

```python
from flask import Flask
import requests

app = Flask(__name__)

@app.route('/')
def make_request():
    url = "https://apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY"

    response = requests.get(url)

    if response.status_code == 200:
        return response.text
    else:
        return f"HTTP Request Error: {response.status_code}"

if __name__ == '__main__':
    app.run()
```
