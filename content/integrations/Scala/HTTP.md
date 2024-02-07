---
slug: '/scala/HTTP'
---

# HTTP integration

```php
import 'package:http/http.dart' as http;

class MyController {
  Future<void> makeRequest() async {
    var url = Uri.parse('https://api.apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY');

    var response = await http.get(url);

    if (response.statusCode >= 400 && response.statusCode < 600) {
      var errorMessage = response.statusCode >= 400 && response.statusCode < 500
          ? 'Client Error: ${response.statusCode}'
          : 'Server Error: ${response.statusCode}';

      print('HTTP Request Error: $errorMessage');
    } else {
      print(response.body);
    }
  }
}

void main() async {
  var controller = MyController();
  await controller.makeRequest();
}

```
