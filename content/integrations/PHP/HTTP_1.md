---
slug: '/php/http_1'
---

# HTTP #1 integration

```php
<?php

$request = new HttpRequest();
$request->setUrl('https://api.apitube.io/v1/news/articles');
$request->setMethod(HTTP_METH_GET);

$request->setQueryData([
    'limit' => '50',
    'api_key' => 'YOUR_API_KEY'
]);

try {
    $response = $request->send();

    echo $response->getBody();
} catch (HttpException $ex) {
    echo $ex;
}
```
