---
slug: '/javascript/Fetch'
---

# Fetch integration

```javascript
const options = {
    method: 'GET'
};

fetch('https://apitube.io/v1/news?limit=250&key=YOUR_API_KEY', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
```
