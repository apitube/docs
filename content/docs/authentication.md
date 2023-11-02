---
sidebar_position: 2
slug: '/authentication'
---

# Authentication

To use the API, you'll require an **API key**. Obtaining a complimentary API key is a straightforward process; you can easily acquire one by signing up at this location.

Once you have your API key, insert it into the request URL for each query, like this: **?api_key=YOUR_API_KEY**.

**Please note:** The initial query parameter is introduced with a **?** (question mark), while all subsequent parameters are introduced with a **&** (ampersand). This is standard URL syntax and not specific to our API. For instance, here's a complete example with two parameters, "api_key" and "title": `https://apitube.io/v1/news/articles?title=Elon Musk&api_key=YOUR_API_KEY`.
