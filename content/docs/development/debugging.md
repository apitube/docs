---
sidebar_position: 3
slug: '/development/debugging'
---

# Debugging

During the development process, closely examine the `input` key object, which provides access to all your parameters. If any errors occur or if certain characters were not accurately parsed due to URL encoding, you will be able to identify them.

import ExampleRequest from '@site/src/components/ExampleRequest'

<ExampleRequest url="https://apitube.io/v1/news/articles?limit=2&search_title=Elon Musk&export_format=json"></ExampleRequest>