---
sidebar_position: 6
slug: '/http_response_codes'
title: 'HTTP Response codes'
---

# HTTP Response codes

| HTTP Response Code | Status | Result                       | Code                       | Description                                                                                                                                                                      |
|--------------------|--------|------------------------------|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 200                | ok     | Successful operation         |                            | Everything worked as expected.                                                                                                                                                   |
| 204                | error  | Empty results                | NoResults                  | No content available.                                                                                                                                                            |
| 400                | error  | Parameter missing or invalid | ValidationInputParamsError | API request is malformed or contains invalid parameters.                                                                                                                         |
| 401                | error  | Unauthorized                 | Unauthorized               | API key is invalid or missing.                                                                                                                                                   |
| 402                | error  | Points balance negative      | PointsBalanceNegative      | Your account balance is negative.                                                                                                                                                |
| 404                | error  | Not found                    | NotFound                   | Entry not found.                                                                                                                                                                 |
| 429                | error  | Too many requests            | TooManyRequests            | The emergence of this error code indicates surpassing the rate limit allocated for your plan. You must wait for the rate limit to reset before initiating additional requests.   |
| 500                | error  | Internal server error        | ServerError                | The appearance of this error code signifies an unforeseen server error. Typically, this is a transient problem, so it's advisable to attempt your request again at a later time. |
