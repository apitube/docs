---
slug: '/node_js/Fetch'
---

# Fetch integration

```javascript
const fetch = require('node-fetch');

const url = 'https://apitube.io/v1/news?limit=250';

const options = {
    method: 'GET',
    headers: {
        'X-ApiTube-Key': '***KEY***'
    }
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
```