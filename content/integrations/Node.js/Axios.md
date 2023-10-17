---
slug: '/node_js/Axios'
---

# Axios integration

```javascript
const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://apitube.io/v1/news',
    params: {
        limit: '250'
    },
    headers: {
        'X-ApiTube-Key': '***KEY***'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
```
