---
slug: '/java/OkHttp'
---

# OkHttp integration

```java
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
	.url("https://apitube.io/v1/articles?limit=250&key=YOUR_API_KEY")
	.get()
	.build();

Response response = client.newCall(request).execute();
```
