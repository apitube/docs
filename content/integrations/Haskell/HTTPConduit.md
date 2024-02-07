---
slug: '/haskell/HTTP-conduit'
---

# HTTP-conduit integration

```php
{-# LANGUAGE OverloadedStrings #-}

import Network.HTTP.Conduit
import qualified Data.ByteString.Lazy.Char8 as LBS

makeRequest :: IO ()
makeRequest = do
  let url = "https://api.apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY"

  manager <- newManager tlsManagerSettings
  request <- parseRequest url

  response <- httpLbs request manager

  case responseStatus response of
    status
      | statusIsSuccessful status ->
        LBS.putStrLn $ responseBody response

      | statusIsClientError status ->
        putStrLn $ "Client Error: " ++ show (statusCode status)

      | statusIsServerError status ->
        putStrLn $ "Server Error: " ++ show (statusCode status)

      | otherwise ->
        putStrLn $ "HTTP Request Error: Unexpected status code " ++ show (statusCode status)

main :: IO ()
main = makeRequest

```
