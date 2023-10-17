---
slug: '/kotlin/OkHttp'
---

# OkHttp integration

```kotlin
val client = OkHttpClient()

val request = Request.Builder()
	.url("https://apitube.io/v1/news?limit=250")
	.get()
	.addHeader("X-ApiTube-Key", "***YOUR_KEY***")
	.build()

val response = client.newCall(request).execute()
```
