---
sidebar_position: 6
slug: '/http_response_codes'
title: 'HTTP Response codes'
---

# HTTP Response codes
| HTTP Response Code | Status | Code                    | Description                                                                                                                                                                      |
|--------------------|--------|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 200                | ok     |                         | Everything worked as expected.                                                                                                                                                   |
| 400                | error  | `BadRequest`            | API request is malformed or contains invalid parameters.                                                                                                                         |
| 401                | error  | `Unauthorized`          | API key is invalid or missing.                                                                                                                                                   |
| 402                | error  | `PointsBalanceNegative` | Your account balance is negative.                                                                                                                                                |
| 404                | error  | `NotFound`              | Entry not found.                                                                                                                                                                 |
| 429                | error  | `TooManyRequests`       | The emergence of this error code indicates surpassing the rate limit allocated for your plan. You must wait for the rate limit to reset before initiating additional requests.   |
| 500                | error  | `InternalServerError`   | The appearance of this error code signifies an unforeseen server error. Typically, this is a transient problem, so it's advisable to attempt your request again at a later time. |
