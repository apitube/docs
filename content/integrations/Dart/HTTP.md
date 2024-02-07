---
slug: '/dart/HTTP'
---

# HTTP integration

```php
import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model._
import akka.stream.ActorMaterializer
import scala.concurrent.Future
import scala.util.{Success, Failure}

object MyController {
  def makeRequest(): Unit = {
    implicit val system = ActorSystem()
    implicit val materializer = ActorMaterializer()
    implicit val executionContext = system.dispatcher

    val request = HttpRequest(uri = "https://api.apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY")

    val responseFuture: Future[HttpResponse] = Http().singleRequest(request)

    responseFuture.onComplete {
      case Success(response) =>
        if (response.status.isFailure()) {
          val errorMessage = if (response.status.intValue() >= 400 && response.status.intValue() < 500)
            s"Client Error: ${response.status.intValue()}"
          else
            s"Server Error: ${response.status.intValue()}"
          println(s"HTTP Request Error: $errorMessage")
        } else {
          response.entity.toStrict(10000).map { entity =>
            println(entity.data.utf8String)
          }
        }
      case Failure(ex) =>
        println(s"Request failed with: ${ex.getMessage}")
    }
  }
}

object Main extends App {
  MyController.makeRequest()
}


```
