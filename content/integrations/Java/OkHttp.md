---
slug: '/java/OkHttp'
---

# OkHttp integration

```java
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
	.url("https://apitube.io/v1/news?limit=250")
	.get()
	.addHeader("X-ApiTube-Key", "***YOUR_KEY***")
	.build();

Response response = client.newCall(request).execute();
```
