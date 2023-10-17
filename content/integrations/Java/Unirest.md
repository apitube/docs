---
slug: '/java/Unirest'
---

# Unirest integration

```java
HttpResponse<String> response = Unirest.get("https://apitube.io/v1/news?limit=250&offset=0")
	.header("X-ApiTube-Key", "***KEY***")
	.asString();
```
