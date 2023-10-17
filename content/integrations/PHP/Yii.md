---
slug: '/php/Yii'
---

# Yii integration

```php
<?php

namespace app\controllers;

use yii\web\Controller;
use yii\httpclient\Client;

class MyController extends Controller
{
	public function actionMakeRequest()
	{
		$url = "https://apitube.io/v1/news?limit=250";
		$apiKey = "***KEY***";

		$httpClient = new Client();
		$response = $httpClient->createRequest()
			->setUrl($url)
			->setHeaders(['X-ApiTube-Key' => $apiKey])
			->send();

		if ($response->isOk) {
			return $response->content;
		} else {
			return "HTTP Request Error: " . $response->statusCode;
		}
	}
}
```
