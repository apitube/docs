---
slug: '/java/Unirest'
---

# Unirest integration

```java
HttpResponse<String> response = Unirest.get("https://apitube.io/v1/articles?limit=250&key=YOUR_API_KEY")
	.asString();
```
