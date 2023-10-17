---
slug: '/powershell/Invoke-WebRequest'
---

# Invoke-WebRequest integration

```powershell
$headers=@{}
$headers.Add("X-ApiTube-Key", "***YOUR_KEY***")
$response = Invoke-WebRequest -Uri 'https://apitube.io/v1/news?limit=250' -Method GET -Headers $headers
```
