---
slug: '/javascript/XMLHttpRequest'
---

# XMLHttpRequest integration

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open("GET", "https://api.apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY");

xhr.send(data);
```
