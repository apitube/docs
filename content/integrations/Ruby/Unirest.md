---
slug: '/ruby/Unirest'
---

# Unirest integration

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://apitube.io/v1/articles?limit=250&key=YOUR_API_KEY")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body
```
