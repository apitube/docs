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
    url = "https://apitube.io/v1/news?limit=250"
    api_key = "***YOUR_KEY***"

    headers = {
        "X-ApiTube-Key": api_key
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        return response.text
    else:
        return f"HTTP Request Error: {response.status_code}"

if __name__ == '__main__':
    app.run()
```
