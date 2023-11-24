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
		$url = "https://apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY";

		$httpClient = new Client();
		$response = $httpClient->createRequest()
			->setUrl($url)
			->send();

		if ($response->isOk) {
			return $response->content;
		} else {
			return "HTTP Request Error: " . $response->statusCode;
		}
	}
}
```
