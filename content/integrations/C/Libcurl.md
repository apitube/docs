---
slug: '/c/Libcurl'
---

# Libcurl integration

```c
CURL *hnd = curl_easy_init();

curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "GET");
curl_easy_setopt(hnd, CURLOPT_URL, "https://api.apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY");

struct curl_slist *headers = NULL;
curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);

CURLcode ret = curl_easy_perform(hnd);
```
