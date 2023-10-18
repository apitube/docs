---
slug: '/php/Symfony'
---

# Symfony integration

```php
<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpClient\HttpClient;

class MyController
{
	public function makeRequest(): Response
	{
		$url = "https://apitube.io/v1/news?limit=250&key=YOUR_API_KEY";

		$httpClient = HttpClient::create();
		$response = $httpClient->request('GET', $url);

		$statusCode = $response->getStatusCode();
		$content = $response->getContent();

		if ($statusCode >= 400) {
			return new Response("HTTP Request Error: " . $statusCode);
		}

		return new Response($content);
	}
}
```
