---
slug: '/kotlin/OkHttp'
---

# OkHttp integration

```kotlin
val client = OkHttpClient()

val request = Request.Builder()
	.url("https://apitube.io/v1/news?limit=250&offset=0")
	.get()
	.addHeader("X-ApiTube-Key", "***KEY***")
	.build()

val response = client.newCall(request).execute()
```
