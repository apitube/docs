---
slug: '/php/http_2'
---

# HTTP #2 integration

```php
<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://api.apitube.io/v1/news/articles');
$request->setRequestMethod('GET');
$request->setQuery(new http\QueryString([
    'limit' => '50',
    'api_key' => 'YOUR_API_KEY'
]));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
```
