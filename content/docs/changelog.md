---
sidebar_position: 5
slug: '/changelog'
title: 'Changelog'
---

# Changelog

## 1.1.0

### Features

- `[News API]` Add new properties: `sentencesCount`, `paragraphsCount`, `wordsCount` and `charactersCount` to the article output.

## 1.0.9

### Features

- `[News API]` Add query parameters to search: title/description/content in article. Example: `Musk AND (Tesla OR SpaceX)`. More information in the [Advanced Searching](/news-api/advanced-searching).
- [New rate limits in API requests](/rate_limits) for free and paid users.

## 1.0.8

### Features

- `[Text Analytics API]` Added new feature: **Suggest text Summary**

## 1.0.7

### Features

- `[Text Analytics API]` Added new features: **Detect Sentiment by text**, **Detect Language by text**, **Suggest Category by text**

## 1.0.6

### Features

- `[News API]` Add 'story_id' as property to the article resource. Story ID is a unique identifier for the story.

## 1.0.5

### Features

- `[News API]` Add 'links' and 'videos' as property to the article resource. Links are a list of links to related articles.

## 1.0.4

### Features

- `[News API]` Add 'opinion' resource type. Opinion articles are articles that are written by a person that expresses an opinion or point of view. Opinion articles are not news articles.

## 1.0.3

### Features

- `[News API]` Add filter 'search' to search find articles by title or content match. Example: `https://api.apitube.io/v1/news/articles?search=bitcoin`.
- `[News API]` Limit of articles per page for a paid user reached 1000 items per page.

## 1.0.2

### Features

- `[News API]` Add new integrations: **Dart**, **Elixir**, **Haskell**, **Lua**, **Scala**, **Rust**.
- `[News API]` Add new topic: **ai_news**.

## 1.0.1

### Features

- `[News API]` Add new categories.

### Fixes

- `[News API]` Articles body text(with tags) now trim data.
