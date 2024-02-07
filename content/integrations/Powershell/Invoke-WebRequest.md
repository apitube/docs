---
slug: '/powershell/Invoke-WebRequest'
---

# Invoke-WebRequest integration

```powershell
$headers=@{}
$response = Invoke-WebRequest -Uri 'https://api.apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY' -Method GET -Headers $headers
```
