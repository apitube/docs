---
slug: '/c/Libcurl'
---

# Libcurl integration

```c
CURL *hnd = curl_easy_init();

curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "GET");
curl_easy_setopt(hnd, CURLOPT_URL, "https://apitube.io/v1/news?limit=250");

struct curl_slist *headers = NULL;
headers = curl_slist_append(headers, "X-ApiTube-Key: ***YOUR_KEY***");
curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);

CURLcode ret = curl_easy_perform(hnd);
```
