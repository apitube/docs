---
slug: '/shell/Wget'
---

# Wget integration

```shell
wget --quiet \
	--method GET \
	--header 'X-ApiTube-Key: ***KEY***' \
	--output-document \
	- 'https://apitube.io/v1/news?limit=250&offset=0'
```
