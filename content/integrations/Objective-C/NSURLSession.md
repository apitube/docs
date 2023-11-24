---
slug: '/objective_c/NSURLSession'
---

# NSURLSession integration

```objective-c
#import <Foundation/Foundation.h>

NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"https://apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY"]
                                                       cachePolicy:NSURLRequestUseProtocolCachePolicy
                                                   timeoutInterval:10.0];
[request setHTTPMethod:@"GET"];

NSURLSession *session = [NSURLSession sharedSession];
NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request
                                            completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
	                                            if (error) {
		                                            NSLog(@"%@", error);
	                                            } else {
		                                            NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;
		                                            NSLog(@"%@", httpResponse);
	                                            }
                                            }];
[dataTask resume];
```
