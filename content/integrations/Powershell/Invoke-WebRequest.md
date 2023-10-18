---
slug: '/powershell/Invoke-WebRequest'
---

# Invoke-WebRequest integration

```powershell
$headers=@{}
$response = Invoke-WebRequest -Uri 'https://apitube.io/v1/news?limit=250&key=YOUR_API_KEY' -Method GET -Headers $headers
```
