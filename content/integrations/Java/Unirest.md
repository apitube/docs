---
slug: '/java/Unirest'
---

# Unirest integration

```java
HttpResponse<String> response = Unirest.get("https://apitube.io/v1/news?limit=250")
	.header("X-ApiTube-Key", "***YOUR_KEY***")
	.asString();
```
