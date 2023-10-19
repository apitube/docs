---
slug: '/php/Laravel'
---

# Laravel integration

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class MyController extends Controller
{
	public function makeRequest(Request $request)
	{
		$url = "https://apitube.io/v1/news/articles?limit=250&api_key=YOUR_API_KEY";

		$response = Http::get($url);

		if ($response->failed()) {
			$errorMessage = $response->clientError()
				? "Client Error: " . $response->status()
				: "Server Error: " . $response->status();

			echo "HTTP Request Error: " . $errorMessage;
		} else {
			echo $response->body();
		}
	}
}
```
