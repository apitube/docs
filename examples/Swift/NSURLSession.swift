import Foundation

let headers = [
	"X-ApiTube-Key": "***KEY***"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://apitube.io/v1/sets/***ID_HERE***?limit=250&offset=0")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

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
