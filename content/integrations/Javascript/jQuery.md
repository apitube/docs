---
slug: '/javascript/jQuery'
---

# jQuery integration

```javascript
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apitube.io/v1/news?limit=250&offset=0",
    "method": "GET",
    "headers": {
        "X-ApiTube-Key": "***KEY***"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});
```
