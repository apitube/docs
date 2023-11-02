---
slug: '/elixir/HTTPC'
---

# HTTPC integration

```php
-module(my_controller).
-export([make_request/0]).

make_request() ->
    Url = "https://apitube.io/v1/news/articles?limit=250&api_key=YOUR_API_KEY",
    Options = [],
    {ok, {_, _, Response}} = httpc:request(get, {Url, Options}, [], []),
    handle_response(Response).

handle_response({_, _, Body}) ->
    % Print the response body
    io:format("Response: ~s~n", [Body]);

handle_response({_, StatusCode, _}) when StatusCode >= 400, StatusCode < 500 ->
    % Client error
    io:format("Client Error: ~p~n", [StatusCode]);

handle_response({_, StatusCode, _}) when StatusCode >= 500 ->
    % Server error
    io:format("Server Error: ~p~n", [StatusCode]);

handle_response(_) ->
    % Other errors
    io:format("HTTP Request Error~n").


```
