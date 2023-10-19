---
slug: '/swift/NSURLSession'
---

# NSURLSession integration

```swift
import Foundation

let request = NSMutableURLRequest(url: NSURL(string: "https://apitube.io/v1/articles?limit=250&api_key=YOUR_API_KEY")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
	if (error != nil) {
		print(error)
	} else {
		let httpResponse = response as? HTTPURLResponse
		print(httpResponse)
	}
})

dataTask.resume()
```
