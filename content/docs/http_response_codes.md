---
sidebar_position: 6
slug: '/http_response_codes'
title: 'HTTP Response codes'
---

# HTTP Response codes
| Code | Status | Description                                                                                                                                                                      |
|------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 200  | ok     | Everything worked as expected.                                                                                                                                                   |
| 400  | error  | API request is malformed or contains invalid parameters.                                                                                                                         |
| 401  | error  | API key is invalid or missing.                                                                                                                                                   |
| 402  | error  | Your account balance is negative.                                                                                                                                                |
| 404  | error  | Entry not found.                                                                                                                                                                 |
| 422  | error  | Unprocessable failure.                                                                                                                                                           |
| 429  | error  | The emergence of this error code indicates surpassing the rate limit allocated for your plan. You must wait for the rate limit to reset before initiating additional requests.   |
| 500  | error  | The appearance of this error code signifies an unforeseen server error. Typically, this is a transient problem, so it's advisable to attempt your request again at a later time. |
