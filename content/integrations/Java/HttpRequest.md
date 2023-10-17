---
slug: '/java/HttpRequest'
---

# HttpRequest integration

```java
HttpRequest request = HttpRequest.newBuilder()
		.uri(URI.create("https://apitube.io/v1/news?limit=250&offset=0"))
		.header("X-ApiTube-Key", "***KEY***")
		.method("GET", HttpRequest.BodyPublishers.noBody())
		.build();
HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());
```
