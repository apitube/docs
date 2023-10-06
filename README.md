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
- [Features](#features)
- [Examples](#examples)
- [Documentation](#documentation)
- [Examples in different programming languages(and frameworks)](#examples)
- [Other competitors](#competitors)

## Overview
With our news API, integrating real-time and archived news content into your products and services has never been easier.

## Features
* Easy to use
* Many searching [filters](#search-parameters)
* Multiple export formats: <code>JSON</code>, <code>XML</code>, <code>XLS/XLSX</code>, <code>CSV</code>, <code>RSS</code>
* <strong>Free!</strong>

### Examples
Get all news from Germany that mention Italy in the title and sort them by sentiment in descending order.
```
https://apitube.io/v1/news?language=en&search_title=italy&sort_by=sentiment&sort_direction=desc
```

Get news about COVID-19 in English
```
https://apitube.io/v1/news?language=en&search_title=covid-19
```

Get news mentioning Elon Musk
```
https://apitube.io/v1/news?search_title=elon%20musk
```

Get positive news since April 1st with 200 limit items
```
https://apitube.io/v1/news?limit=200&min_sentiment=0.5&date_start=2020-04-01
```

Get negative news coverage from BBC
```
https://apitube.io/v1/news?limit=200&max_sentiment=-0.5&resource_source=techcrunch.com
```

### Response
<p align="center">
<img src="https://apitube.pub/images/github/preview.jpg" alt="APITUBE - News API">
</p>    

## Documentation

### Search parameters

| Field             | Description                                                                                                                                                                                                                                                                                       | Default parameters              |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| limit             | From <code>1</code> to <code>1000</code>                                                                                                                                                                                                                                                          | <code>500</code>                |
| search_title      | Searching articles by <code>title</code>                                                                                                                                                                                                                                                          | <code>empty</code>              |
| search_content    | Searching articles by <code>content</code>                                                                                                                                                                                                                                                        | <code>empty</code>              |
| search_author     | Searching articles by <code>author</code>                                                                                                                                                                                                                                                         | <code>empty</code>              |
| resource_language | Enabled languages:<code>en</code>                                                                                                                                                                                                                                                                 | <code>null</code>               |
| resource_category | Enabled categories:<code>en</code>                                                                                                                                                                                                                                                                | <code>null</code>               |
| resource_type     | Type of resource. Can be: <code>news</code>, <code>company_blog</code>, <code>personal_blog</code>.                                                                                                                                                                                               | <code>null</code>               |
| resource_source   | Source name                                                                                                                                                                                                                                                                                       | <code>null</code>               |
| date_start        | Available formats: <code>Y-m-d</code> or <code>d-m-Y</code> or <code>Y-m-d\TH:i:sP</code> or <code>l, d-M-Y H:i:s T</code> or <code>Y-m-d\TH:i:sO</code> or <code>D, d M y H:i:s O</code> or <code>l, d-M-y H:i:s T</code> or <code>Y-m-d\TH:i:s.vP</code> or <code>D, d M Y H:i:s \G\M\T</code>. | <code>today date</code>         |
| date_end          | Available formats: <code>Y-m-d</code> or <code>d-m-Y</code> or <code>Y-m-d\TH:i:sP</code> or <code>l, d-M-Y H:i:s T</code> or <code>Y-m-d\TH:i:sO</code> or <code>D, d M y H:i:s O</code> or <code>l, d-M-y H:i:s T</code> or <code>Y-m-d\TH:i:s.vP</code> or <code>D, d M Y H:i:s \G\M\T</code>. | <code>last inserted date</code> |
| resource_rank_min | Minimum resource rank.                                                                                                                                                                                                                                                                            | <code>0</code>                  |
| resource_rank_max | Maximum resource rank.                                                                                                                                                                                                                                                                            | <code>99</code>                 |
| sentiment         | Sentiment content. Can be: <code>positive</code>, <code>negative</code>, <code>neutral</code>                                                                                                                                                                                                     |                                 |
| min_sentiment     | The minimum value of the sentiment.                                                                                                                                                                                                                                                               | <code>-1</code>                 |
| max_sentiment     | The maximum value of the sentiment.                                                                                                                                                                                                                                                               | <code>1</code>                  |
| sort_by           | Choose the criteria for sorting the news articles. Can be: <code>published_at</code>, <code>sentiment</code>                                                                                                                                                                                      | <code>created_at</code>         |
| sort_direction    | Choose the criteria for sorting the news articles. Can be: <code>desc</code>, <code>asc</code>                                                                                                                                                                                                    | <code>desc</code>               |
| location          | Find articles in a specific location.                                                                                                                                                                                                                                                             |                                 |
| latitude          | Latitude of the location where search news articles.                                                                                                                                                                                                                                              |                                 |
| longitude         | Longitude of the location where search news articles.                                                                                                                                                                                                                                             |                                 |
| radius            | Find articles in a specific radius in kilometers. Worked only with <code>latitude</code>, <code>longitude</code>                                                                                                                                                                                  |                                 |

### Response item structure

| Field             | Description                                                                                                                                                        |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title             | Article title.                                                                                                                                                     |
| author            | Article author.                                                                                                                                                    |
| description       | Article short text preview.                                                                                                                                        |
| content           | Article full content with formatting.                                                                                                                              |
| text_plain        | Article full content without formatting.                                                                                                                           |
| image             | Full url path to the image.                                                                                                                                        |
| language          | Detected language.                                                                                                                                                 |
| category          | Detected category.                                                                                                                                                 |
| resource_type     | Resource type(<code>news</code>, <code>blog</code>)                                                                                                                |
| resource_rank     | Rank of news resource (from 0 to 99)                                                                                                                               |
| sentiment_content | Sentiment of article content(<code>negative</code>, <code>neutral</code>, <code>positive</code>, <code>compound</code>). Values <code>-1</code> to <code>1</code>. |
| location          | Location of article content. Country or city.                                                                                                                      |

## Examples
- C
  - [Libcurl.c](https://github.com/apitube/integrations/blob/master/C/Libcurl.c)

- C#
  - [HttpClient](https://github.com/apitube/integrations/blob/master/C%23/HttpClient.cs)
  - [RestSharp](https://github.com/apitube/integrations/blob/master/C%23/RestSharp.cs)
  - [Unirest](https://github.com/apitube/integrations/blob/master/C%23/Unirest.cs)

- Clojure
  - [clj-http](https://github.com/apitube/integrations/blob/master/Clojure/clj-http.clj)

- Go
  - [clj-http](https://github.com/apitube/integrations/blob/master/Go/NewRequest.go)

- Clojure
  - [clj-http](https://github.com/apitube/integrations/blob/master/Clojure/clj-http.clj)

- HTTP
  - [HTTP_1.1](https://github.com/apitube/integrations/blob/master/HTTP/HTTP_1.1)

- Java
  - [AsyncHttp](https://github.com/apitube/integrations/blob/master/Java/AsyncHttp.java)
  - [Java_net_http](https://github.com/apitube/integrations/blob/master/Java/Java_net_http.java)
  - [OkHttp](https://github.com/apitube/integrations/blob/master/Java/OkHttp.java)
  - [Unirest](https://github.com/apitube/integrations/blob/master/Java/Unirest.java)

- Javascript
  - [Axios](https://github.com/apitube/integrations/blob/master/Javascript/Axios.js)
  - [Fetch](https://github.com/apitube/integrations/blob/master/Javascript/Fetch.js)
  - [XMLHttpRequest](https://github.com/apitube/integrations/blob/master/Javascript/XMLHttpRequest.js)
  - [jQuery](https://github.com/apitube/integrations/blob/master/Javascript/jQuery.js)

- Kotlin
  - [OkHttp](https://github.com/apitube/integrations/blob/master/Kotlin/OkHttp.kt)

- Node.js
  - [Axios](https://github.com/apitube/integrations/blob/master/Node.js/Axios.js)
  - [Fetch](https://github.com/apitube/integrations/blob/master/Node.js/Fetch.js)
  - [HTTP](https://github.com/apitube/integrations/blob/master/Node.js/HTTP.js)
  - [Request](https://github.com/apitube/integrations/blob/master/Node.js/Request.js)
  - [Unirest](https://github.com/apitube/integrations/blob/master/Node.js/Unirest.js)

- OCaml
  - [CoHTTP](https://github.com/apitube/integrations/blob/master/OCaml/CoHTTP.ml)

- Objective-C
  - [NSURLSession](https://github.com/apitube/integrations/blob/master/Objective-C/NSURLSession.m)

- PHP
  - [cURL](https://github.com/apitube/integrations/blob/master/PHP/cURL.php)
  - [HTTP_1](https://github.com/apitube/integrations/blob/master/PHP/HTTP_1.php)
  - [HTTP_2](https://github.com/apitube/integrations/blob/master/PHP/HTTP_2.php)

- Powershell
  - [Invoke-WebRequest](https://github.com/apitube/integrations/blob/master/Powershell/Invoke-WebRequest.ps1)

- Python
  - [Requests](https://github.com/apitube/integrations/blob/master/Python/Requests.py)
  - [http_client](https://github.com/apitube/integrations/blob/master/Python/http_client.py)

- R
  - [httr](https://github.com/apitube/integrations/blob/master/R/httr.r)

- RapidQL
  - [RapidQL](https://github.com/apitube/integrations/blob/master/RapidQL/RapidQL.js)

- Ruby
  - [net_http](https://github.com/apitube/integrations/blob/master/Ruby/net_http.rb)
  - [Unirest](https://github.com/apitube/integrations/blob/master/Ruby/Unirest.rb)

- Shell
  - [HTTPie](https://github.com/apitube/integrations/blob/master/Shell/HTTPie)
  - [Wget](https://github.com/apitube/integrations/blob/master/Shell/Wget)
  - [cURL](https://github.com/apitube/integrations/blob/master/Shell/cURL)

- Swift
  - [NSURLSession](https://github.com/apitube/integrations/blob/master/Swift/NSURLSession.swift)

## Competitors
They are all paid. APITUBE is a free alternative.
- [NewsCatcher News API](https://newscatcherapi.com/)
- [Newsdata](https://newsdata.io/)
- [uCrawler](https://ucrawler.app)
- [World News API](https://worldnewsapi.com/)
- [News API](https://newsapi.org/)
- [NewsAPI.ai](https://www.newsapi.ai/)
