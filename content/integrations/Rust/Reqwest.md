---
slug: '/rust/reqwest'
---

# Reqwest integration

```php
[dependencies]
reqwest = "0.11"
```

```php
use reqwest;

#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
    make_request().await?;
    Ok(())
}

async fn make_request() -> Result<(), reqwest::Error> {
    let url = "https://api.apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY";

    let response = reqwest::get(url).await?;

    match response.status().as_u16() {
        200..=299 => {
            let body = response.text().await?;
            println!("Response: {}", body);
        }
        400..=499 => {
            println!("Client Error: {}", response.status());
        }
        500..=599 => {
            println!("Server Error: {}", response.status());
        }
        _ => {
            println!("HTTP Request Error: Unexpected status code: {}", response.status());
        }
    }

    Ok(())
}
```
