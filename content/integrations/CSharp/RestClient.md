---
slug: '/csharp/RestSharp'
---

# RestClient integration

```cs
var client = new RestClient("https://apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY");
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
```
