---
slug: '/java/HttpRequest'
---

# HttpRequest integration

```java
HttpRequest request = HttpRequest.newBuilder()
		.uri(URI.create("https://apitube.io/v1/articles?limit=250&api_key=YOUR_API_KEY"))
		.method("GET", HttpRequest.BodyPublishers.noBody())
		.build();
HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());
```
