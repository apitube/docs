---
sidebar_position: 4
slug: '/debugging'
---

# Debugging API Requests

During the development process, closely examine the `userInput` key object, which provides access to all your parameters. If any errors occur or if certain characters were not accurately parsed due to URL encoding, you will be able to identify them.

To check the `userInput` object, you can use the `userInput` parameter. When set to `1`, the `userInput` object will be included in the response.

Worked only in the `json` and `xml` export format.

```shell
curl -X GET "https://api.apitube.io/v1/news/articles?limit=2&title=Elon Musk&export_format=json&userInput=1"
```

import ExampleRequest from '@site/src/components/ExampleRequest'

<ExampleRequest url="https://api.apitube.io/v1/news/articles?limit=2&title=Elon Musk&export_format=json&debug=1"></ExampleRequest>
