---
slug: '/lua/HTTP'
---

# HTTP integration

```php
local http = require("socket.http")
local ltn12 = require("ltn12")

function makeRequest()
    local url = "https://apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY"
    
    local response_body = {}
    local res, status, response_header = http.request{
        url = url,
        method = "GET",
        sink = ltn12.sink.table(response_body)
    }

    if res and status == 200 then
        print("Response: " .. table.concat(response_body))
    elseif status >= 400 and status < 500 then
        print("Client Error: " .. status)
    elseif status >= 500 then
        print("Server Error: " .. status)
    else
        print("HTTP Request Error")
    end
end

-- Make the HTTP request
makeRequest()
```
