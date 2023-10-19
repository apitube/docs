---
slug: '/nodejs/Axios'
---

# Axios integration

```javascript
const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://apitube.io/v1/news/articles',
    params: {
        limit: '250',
        api_key: 'YOUR_API_KEY'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
```
