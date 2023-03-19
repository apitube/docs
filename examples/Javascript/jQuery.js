const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apitube.io/v1/sets/***ID_HERE***?limit=250&offset=0",
    "method": "GET",
    "headers": {
        "X-ApiTube-Key": "***KEY***"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});
