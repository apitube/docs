---
slug: '/java/AsyncHttp'
---

# AsyncHttp integration

```java
AsyncHttpClient client = new DefaultAsyncHttpClient();
client.prepare("GET", "https://apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY")
	.execute()
	.toCompletableFuture()
	.thenAccept(System.out::println)
	.join();

client.close();
```
