---
slug: '/nodejs/HTTP'
---

# HTTP integration

```javascript
const http = require("https");

const options = {
    "method": "GET",
    "hostname": "apitube.io",
    "port": null,
    "path": "/v1/news?limit=250",
    "headers": {
        "X-ApiTube-Key": "***YOUR_KEY***"
    }
};

const req = http.request(options, function (res) {
    const chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.end();
```
