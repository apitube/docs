CURL *hnd = curl_easy_init();

curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "GET");
curl_easy_setopt(hnd, CURLOPT_URL, "https://apitube.io/v1/sets/***ID_HERE***?limit=250&offset=0");

struct curl_slist *headers = NULL;
headers = curl_slist_append(headers, "X-ApiTube-Key: ***KEY***");
curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);

CURLcode ret = curl_easy_perform(hnd);
