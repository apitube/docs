---
slug: '/python/Unirest'
---

# Unirest integration

```python
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://apitube.io/v1/news?limit=250")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["X-ApiTube-Key"] = '***KEY***'

response = http.request(request)
puts response.read_body
```
