---
slug: '/javascript/jQuery'
---

# jQuery integration

```javascript
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apitube.io/v1/news/articles?limit=250&api_key=YOUR_API_KEY",
    "method": "GET"
};

$.ajax(settings).done(function (response) {
    console.log(response);
});
```
