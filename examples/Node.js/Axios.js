const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://apitube.io/v1/sets/***ID_HERE***',
    params: {
        limit: '250',
        offset: '0'
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
