---
slug: '/javascript/jQuery'
---

# jQuery integration

```javascript
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apitube.io/v1/news?limit=250",
    "method": "GET",
    "headers": {
        "X-ApiTube-Key": "***YOUR_KEY***"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});
```
