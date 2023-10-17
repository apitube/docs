---
slug: '/node_js/Unirest'
---

# Unirest integration

```javascript
const unirest = require("unirest");

const req = unirest("GET", "https://apitube.io/v1/news");

req.query({
    "limit": "250",
    "offset": "0",
});

req.headers({
    "X-ApiTube-Key": "***KEY***",
    "useQueryString": true
});

req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
```
