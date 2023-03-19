import requests

url = "https://apitube.io/v1/sets/***ID_HERE***"

querystring = {"limit":"250", "offset": "0"}

headers = {
	"X-ApiTube-Key": "***KEY***"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
