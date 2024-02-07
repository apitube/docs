---
slug: '/elixir/HTTP'
---

# HTTP integration

```php
defmodule MyController do
  def make_request do
    url = "https://api.apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY"

    case HTTPoison.get(url) do
      {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
        IO.puts("Response: #{body}")

      {:ok, %HTTPoison.Response{status_code: status}} when status >= 400 and status < 500 ->
        IO.puts("Client Error: #{status}")

      {:ok, %HTTPoison.Response{status_code: status}} when status >= 500 ->
        IO.puts("Server Error: #{status}")

      {:error, %HTTPoison.Error{reason: reason}} ->
        IO.puts("HTTP Request Error: #{reason}")

      _ ->
        IO.puts("An unknown error occurred")
    end
  end
end


void main() async {
  var controller = MyController();
  await controller.makeRequest();
}

```
