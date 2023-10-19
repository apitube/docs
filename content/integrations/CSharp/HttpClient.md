---
slug: '/csharp/HttpClient'
---

# HttpClient integration

```cs
var client = new HttpClient();
var request = new HttpRequestMessage
{
	Method = HttpMethod.Get,
	RequestUri = new Uri("https://apitube.io/v1/articles?limit=250&api_key=YOUR_API_KEY"),
};
using (var response = await client.SendAsync(request))
{
	response.EnsureSuccessStatusCode();
	var body = await response.Content.ReadAsStringAsync();
	Console.WriteLine(body);
}
```
