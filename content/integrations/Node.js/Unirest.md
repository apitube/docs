---
slug: '/nodejs/Unirest'
---

# Unirest integration

```javascript
const unirest = require("unirest");

const req = unirest("GET", "https://apitube.io/v1/articles");

req.query({
    "limit": "250",
    "key": "YOUR_API_KEY"
});

req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
```
