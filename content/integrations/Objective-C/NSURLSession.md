---
slug: '/objective_c/NSURLSession'
---

# NSURLSession integration

```objective-c
open Cohttp_lwt_unix
open Cohttp
open Lwt

let uri = Uri.of_string "https://apitube.io/v1/news?limit=250" in
let headers = Header.add_list (Header.init ()) [
	("X-ApiTube-Key", "***YOUR_KEY***");
] in

Client.call ~headers `GET uri
>>= fun (res, body_stream) ->
	(* Do stuff with the result *)
```
