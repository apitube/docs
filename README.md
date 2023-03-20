<h1 align="center">
  <img src="https://apitube.pub/images/github/apitube.png" alt="APITUBE - News API" height="45">
  <br/>
  Powerful News API
</h1>
<div align="center">
  With our news API, integrating real-time and archived news content into your products and services has never been easier.
</div>

<hr/>

- [Overview](#overview)
- [Documentation](#documentation)
- [Examples in different programming languages(and frameworks)](#examples)
- [Other competitors](#competitors)

## Overview
With our news API, integrating real-time and archived news content into your products and services has never been easier.

## Features
* Easy to use
* Multiple export formats: <code>JSON</code>, <code>XML</code>, <code>XLS/XLSX</code>, <code>CSV</code>, <code>RSS</code>
* <strong>Free!</strong>

### Request
```
https://apitube.io/v1/news?limit=200
```

### Response
<p align="center">
<img src="https://apitube.pub/images/github/apitube.png" alt="APITUBE - News API" height="45">
</p>    

## Documentation

### Search parameters

| Field           | Description                                                                            | Default parameters              |
|-----------------|----------------------------------------------------------------------------------------|---------------------------------|
| searchTitle     | Searching articles by <code>title</code>                                               | <code>empty</code>              |
| searchContent   | Searching articles by <code>content</code>                                             | <code>empty</code>              |
| limit           | From 1 to 1000.                                                                        | <code>500</code>                |
| offset          | Offset                                                                                 | <code>0</code>                  |
| language        | Enabled languages:<code>en</code>                                                      | <code>null</code>               |
| category        | Enabled languages:<code>en</code>                                                      | <code>null</code>               |
| domain          | Domain name                                                                            | <code>null</code>               |
| resourceType    | Type of resource. Can be: <code>news</code>, <code>blog</code>.                        | <code>null</code>               |
| resourceRankMin | Minimum resource rank.                                                                 | <code>0</code>                  |
| resourceRankMax | Maximum resource rank.                                                                 | <code>99</code>                 |
| dateStart       | Available formats: <code>2023-01-03</code> or <code>2023-02-12T15:19:21+00:00</code>.  | <code>today date</code>         |
| dateEnd         | Available formats: <code>2023-01-03</code> or <code>2023-02-12T15:19:21+00:00</code>.. | <code>last inserted date</code> |

### Response item structure

| Field            | Description                                                                                                                                                        |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| author           | Article title.                                                                                                                                                     |
| description      | Article short text preview.                                                                                                                                        |
| content          | Article full content with formatting.                                                                                                                              |
| textplain        | Article full content without formatting.                                                                                                                           |
| image            | Full url path to the image.                                                                                                                                        |
| language         | Detected language.                                                                                                                                                 |
| category         | Detected category.                                                                                                                                                 |
| resourceType     | Resource type(<code>news</code>, <code>blog</code>)                                                                                                                |
| resourceRank     | Rank of news resource (from 0 to 99)                                                                                                                               |
| sentimentContent | Sentiment of article content(<code>negative</code>, <code>neutral</code>, <code>positive</code>, <code>compound</code>). Values <code>-1</code> to <code>1</code>. |

## Examples
- C
  - [Libcurl.c](https://github.com/apitube/documentation/blob/master/examples/C/Libcurl.c)

- C#
  - [HttpClient](https://github.com/apitube/documentation/blob/master/examples/C%23/HttpClient.cs)
  - [RestSharp](https://github.com/apitube/documentation/blob/master/examples/C%23/RestSharp.cs)
  - [Unirest](https://github.com/apitube/documentation/blob/master/examples/C%23/Unirest.cs)

- Clojure
  - [clj-http](https://github.com/apitube/documentation/blob/master/examples/Clojure/clj-http.clj)

- Go
  - [clj-http](https://github.com/apitube/documentation/blob/master/examples/Go/NewRequest.go)

- Clojure
  - [clj-http](https://github.com/apitube/documentation/blob/master/examples/Clojure/clj-http.clj)

- HTTP
  - [HTTP_1.1](https://github.com/apitube/documentation/blob/master/examples/HTTP/HTTP_1.1)

- Java
  - [AsyncHttp](https://github.com/apitube/documentation/blob/master/examples/Java/AsyncHttp.java)
  - [Java_net_http](https://github.com/apitube/documentation/blob/master/examples/Java/Java_net_http.java)
  - [OkHttp](https://github.com/apitube/documentation/blob/master/examples/Java/OkHttp.java)
  - [Unirest](https://github.com/apitube/documentation/blob/master/examples/Java/Unirest.java)

- Javascript
  - [Axios](https://github.com/apitube/documentation/blob/master/examples/Javascript/Axios.js)
  - [Fetch](https://github.com/apitube/documentation/blob/master/examples/Javascript/Fetch.js)
  - [XMLHttpRequest](https://github.com/apitube/documentation/blob/master/examples/Javascript/XMLHttpRequest.js)
  - [jQuery](https://github.com/apitube/documentation/blob/master/examples/Javascript/jQuery.js)

- Kotlin
  - [OkHttp](https://github.com/apitube/documentation/blob/master/examples/Kotlin/OkHttp.kt)

- Node.js
  - [Axios](https://github.com/apitube/documentation/blob/master/examples/Node.js/Axios.js)
  - [Fetch](https://github.com/apitube/documentation/blob/master/examples/Node.js/Fetch.js)
  - [HTTP](https://github.com/apitube/documentation/blob/master/examples/Node.js/HTTP.js)
  - [Request](https://github.com/apitube/documentation/blob/master/examples/Node.js/Request.js)
  - [Unirest](https://github.com/apitube/documentation/blob/master/examples/Node.js/Unirest.js)

- OCaml
  - [CoHTTP](https://github.com/apitube/documentation/blob/master/examples/OCaml/CoHTTP.ml)

- Objective-C
  - [NSURLSession](https://github.com/apitube/documentation/blob/master/examples/Objective-C/NSURLSession.m)

- PHP
  - [cURL](https://github.com/apitube/documentation/blob/master/examples/PHP/cURL.php)
  - [HTTP_1](https://github.com/apitube/documentation/blob/master/examples/PHP/HTTP_1.php)
  - [HTTP_2](https://github.com/apitube/documentation/blob/master/examples/PHP/HTTP_2.php)

- Powershell
  - [Invoke-WebRequest](https://github.com/apitube/documentation/blob/master/examples/Powershell/Invoke-WebRequest.ps1)

- Python
  - [Requests](https://github.com/apitube/documentation/blob/master/examples/Python/Requests.py)
  - [http_client](https://github.com/apitube/documentation/blob/master/examples/Python/http_client.py)

- R
  - [httr](https://github.com/apitube/documentation/blob/master/examples/R/httr.r)

- RapidQL
  - [RapidQL](https://github.com/apitube/documentation/blob/master/examples/RapidQL/RapidQL.js)

- Ruby
  - [net_http](https://github.com/apitube/documentation/blob/master/examples/Ruby/net_http.rb)
  - [Unirest](https://github.com/apitube/documentation/blob/master/examples/Ruby/Unirest.rb)

- Shell
  - [HTTPie](https://github.com/apitube/documentation/blob/master/examples/Shell/HTTPie)
  - [Wget](https://github.com/apitube/documentation/blob/master/examples/Shell/Wget)
  - [cURL](https://github.com/apitube/documentation/blob/master/examples/Shell/cURL)

- Swift
  - [NSURLSession](https://github.com/apitube/documentation/blob/master/examples/Swift/NSURLSession.swift)

## Competitors
They are all paid. This is a free alternative.
- [NewsCatcher News API](https://newscatcherapi.com/)
- [Newsdata](https://newsdata.io/)
- [uCrawler](https://ucrawler.app)
- [World News API](https://worldnewsapi.com/)
- [News API](https://newsapi.org/)
- [NewsAPI.ai](https://www.newsapi.ai/)
