---
slug: '/nodejs/Fetch'
---

# Fetch integration

```javascript
const fetch = require('node-fetch');

const url = 'https://apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY';

const options = {
    method: 'GET'
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
```
