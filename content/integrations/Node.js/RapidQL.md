---
slug: '/nodejs/RapidQL'
---

# RapidQL integration

```javascript
// For more information about RapidQL, checkout docs.rapidql.com!

const RapidQL = require('RapidQL');
let rql = new RapidQL({
});

rql.query(`{
  Http.get(
    url:"https://api.apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY"
    body : undefined
  ) {

  }
}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
```
