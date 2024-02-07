---
sidebar_position: 4
slug: '/debugging'
---

# Debugging

During the development process, closely examine the `user_input` key object, which provides access to all your parameters. If any errors occur or if certain characters were not accurately parsed due to URL encoding, you will be able to identify them.

import ExampleRequest from '@site/src/components/ExampleRequest'

<ExampleRequest url="https://api.apitube.io/v1/news/articles?limit=2&title=Elon Musk&export_format=json"></ExampleRequest>
