---
slug: '/java/OkHttp'
---

# OkHttp integration

```java
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
	.url("https://api.apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY")
	.get()
	.build();

Response response = client.newCall(request).execute();
```
