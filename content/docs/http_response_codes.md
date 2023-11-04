---
sidebar_position: 6
slug: '/http_response_codes'
title: 'HTTP Response codes'
---

# HTTP Response codes

| HTTP Response Code | Status | Result                       | Code                       | Description                                                                                                                                                                      |
|--------------------|--------|------------------------------|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 200                | ok     | Successful operation         |                            | Everything worked as expected.                                                                                                                                                   |
| 400                | error  | Parameter missing or invalid | ValidationInputParamsError | This error code is returned when the API request is malformed or contains invalid parameters.                                                                                    |
| 401                | error  | Unauthorized                 | Unauthorized               | This error code is returned when the API key is invalid or missing.                                                                                                              |
| 404                | error  | Not found                    | NotFound                   | Entry not found.                                                                                                                                                                 |
| 429                | error  | Too many requests            | TooManyRequests            | The emergence of this error code indicates surpassing the rate limit allocated for your plan. You must wait for the rate limit to reset before initiating additional requests.   |
| 500                | error  | Internal server error        | ServerError                | The appearance of this error code signifies an unforeseen server error. Typically, this is a transient problem, so it's advisable to attempt your request again at a later time. |
