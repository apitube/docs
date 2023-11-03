---
sidebar_position: 1
slug: '/'
---

# Getting Started

This documentation page is designed to showcase a variety of API endpoints that are at your disposal, along with the parameters you can utilize when making API calls. API Reference in top-bar menu categorizes different API endpoints by topic for easy navigation. Additionally, you'll find numerous code examples in various programming languages to illustrate how to use these endpoints effectively.

### Registration and Authentication

To make API requests, you will be required to have an API key. To obtain one, you need to [create an account](https://apitube.pub/sign-up), and the registration process is free, providing you with a total of `3,000 tokens` for testing purposes. Once you've activated your account and logged in, you can locate your API key in [your settings page](https://apitube.pub/dashboard/api_key). When making REST API requests, ensure that your API key is included as a parameter in the URL, for example, as "api_key=YOUR_API_KEY."

If you wish to utilize more than `3,000 tokens`, you will need to [subscribe to a paid plan](https://apitube.pub/dashboard/subscribe).

---

import CardList from '@site/src/components/CardList'

<CardList
columnSize={3}
items={[
{
icon: "mdi:account",
href: "https://apitube.pub/sign-up",
title: "Create account",
description: "Sign up is free and unlock more and cool features!"
},
{
icon: "mdi:book-open-blank-variant",
href: "/api-reference",
title: "API Reference",
description: "Dig into the details of using the APITUBE API."
},
{
icon: "mdi:connection",
href: "/integrations",
title: "Integrations",
description: "Learn how to integrate into your application."
},
{
icon: "mdi:api",
href: "/use-cases",
title: "Example Use Cases",
description: "See how it works in practice and get inspired!"
}
]}
/>
