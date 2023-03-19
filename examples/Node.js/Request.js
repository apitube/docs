const request = require('request');

const options = {
    method: 'GET',
    url: 'https://apitube.io/v1/sets/***ID_HERE***',
    qs: {
        limit: '250',
        offset: '0',
    },
    headers: {
        // 'X-ApiTube-Key': '***KEY***',
        useQueryString: true
    }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});
