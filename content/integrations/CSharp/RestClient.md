---
slug: '/csharp/RestSharp'
---

# RestClient integration

```cs
var client = new RestClient("https://apitube.io/v1/news?limit=250");
var request = new RestRequest(Method.GET);
request.AddHeader("X-ApiTube-Key", "***KEY***");
IRestResponse response = client.Execute(request);
```
