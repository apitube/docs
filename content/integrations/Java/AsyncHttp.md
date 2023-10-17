---
slug: '/java/AsyncHttp'
---

# AsyncHttp integration

```java
AsyncHttpClient client = new DefaultAsyncHttpClient();
client.prepare("GET", "https://apitube.io/v1/news?limit=250")
	.setHeader("X-ApiTube-Key", "***KEY***")
	.execute()
	.toCompletableFuture()
	.thenAccept(System.out::println)
	.join();

client.close();
```
