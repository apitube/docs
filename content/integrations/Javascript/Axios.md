---
slug: '/javascript/Axios'
---

# Axios integration

```javascript
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://apitube.io/v1/news',
    params: {
        limit: '250',
        key: 'YOUR_API_KEY'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
```
