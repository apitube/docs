---
slug: '/php/http_2'
---

# HTTP #2 integration

```php
<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://apitube.io/v1/news');
$request->setRequestMethod('GET');
$request->setQuery(new http\QueryString([
    'limit' => '250'
]));

$request->setHeaders([
    'X-ApiTube-Key' => '***YOUR_KEY***'
]);

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
```
