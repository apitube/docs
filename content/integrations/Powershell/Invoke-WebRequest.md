---
slug: '/powershell/Invoke-WebRequest'
---

# Invoke-WebRequest integration

```powershell
$headers=@{}
$headers.Add("X-ApiTube-Key", "***KEY***")
$response = Invoke-WebRequest -Uri 'https://apitube.io/v1/news?limit=250&offset=0' -Method GET -Headers $headers
```
