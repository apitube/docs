---
slug: '/javascript/Fetch'
---

# Fetch integration

```javascript
const options = {
    method: 'GET'
};

fetch('https://api.apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
```
