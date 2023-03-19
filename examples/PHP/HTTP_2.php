<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://apitube.io/v1/sets/***ID_HERE***');
$request->setRequestMethod('GET');
$request->setQuery(new http\QueryString([
    'limit' => '250',
    'offset' => '250'
]));

$request->setHeaders([
    'X-ApiTube-Key' => '***KEY***'
]);

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
