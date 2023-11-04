---
sidebar_position: 6
slug: '/http_response_codes'
title: 'HTTP Response codes'
---

# HTTP Response codes

| HTTP Response Code | Result                | Code                       | Message                                                                                                                                                                          |
|--------------------|-----------------------|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 200                | Successful operation  |                            | Everything worked as expected.                                                                                                                                                   |
| 400                | Parameter missing     | ValidationInputParamsError | This error code is returned when the API request is malformed or contains invalid parameters.                                                                                    |
| 401                | Unauthorized          | Unauthorized               | This error code is returned when the API key is invalid or missing.                                                                                                              |
| 404                | Not found             | NotFound                   | Entry not found.                                                                                                                                                                 |
| 429                | Too many requests     | TooManyRequests            | The emergence of this error code indicates surpassing the rate limit allocated for your plan. You must wait for the rate limit to reset before initiating additional requests.   |
| 500                | Internal server error | ServerError                | The appearance of this error code signifies an unforeseen server error. Typically, this is a transient problem, so it's advisable to attempt your request again at a later time. |
