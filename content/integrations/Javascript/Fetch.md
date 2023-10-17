---
slug: '/javascript/Fetch'
---

# Fetch integration

```javascript
const options = {
    method: 'GET',
    headers: {
        'X-ApiTube-Key': '***KEY***'
    }
};

fetch('https://apitube.io/v1/news?limit=250&offset=0', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
```
