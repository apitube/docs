---
slug: '/ocaml/CoHTTP'
---

# CoHTTP integration

```ocaml
open Cohttp_lwt_unix
open Cohttp
open Lwt

let uri = Uri.of_string "https://api.apitube.io/v1/news/articles?limit=50&api_key=YOUR_API_KEY" in

Client.call `GET uri
>>= fun (res, body_stream) ->
	(* Do stuff with the result *)
```
