const fetch = require('node-fetch');

const url = 'https://apitube.io/v1/sets/***ID_HERE***?limit=250&offset=0';

const options = {
    method: 'GET',
    headers: {
        'X-ApiTube-Key': '***KEY***'
    }
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
