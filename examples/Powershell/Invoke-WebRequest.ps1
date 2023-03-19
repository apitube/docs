$headers=@{}
$headers.Add("X-ApiTube-Key", "***KEY***")
$response = Invoke-WebRequest -Uri 'https://apitube.io/v1/sets/***ID_HERE***?limit=250&offset=0' -Method GET -Headers $headers
