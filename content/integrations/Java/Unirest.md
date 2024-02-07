---
slug: '/java/Unirest'
---

# Unirest integration

```java
HttpResponse<String> response = Unirest.get("https://api.apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY")
	.asString();
```
