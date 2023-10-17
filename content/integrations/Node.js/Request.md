---
slug: '/nodejs/Request'
---

# Request integration

```javascript
const request = require('request');

const options = {
    method: 'GET',
    url: 'https://apitube.io/v1/news',
    qs: {
        limit: '250',
    },
    headers: {
        // 'X-ApiTube-Key': '***KEY***',
        useQueryString: true
    }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});
```
