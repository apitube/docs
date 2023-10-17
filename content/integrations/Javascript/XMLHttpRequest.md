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

xhr.open("GET", "https://apitube.io/v1/news?limit=250&offset=0");
xhr.setRequestHeader("X-ApiTube-Key", "***KEY***");

xhr.send(data);
```
