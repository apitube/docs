var client = new RestClient("https://apitube.io/v1/sets/***ID_HERE***?limit=250&offset=0");
var request = new RestRequest(Method.GET);
request.AddHeader("X-ApiTube-Key", "***KEY***");
IRestResponse response = client.Execute(request);
