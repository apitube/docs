---
slug: '/nodejs/Unirest'
---

# Unirest integration

```javascript
const unirest = require("unirest");

const req = unirest("GET", "https://api.apitube.io/v1/news/articles");

req.query({
    "limit": "50",
    "api_key": "YOUR_API_KEY"
});

req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
```
