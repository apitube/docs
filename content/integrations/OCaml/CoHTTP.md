---
slug: '/ocaml/CoHTTP'
---

# CoHTTP integration

```ocaml
open Cohttp_lwt_unix
open Cohttp
open Lwt

let uri = Uri.of_string "https://apitube.io/v1/news?limit=250&key=YOUR_API_KEY" in

Client.call `GET uri
>>= fun (res, body_stream) ->
	(* Do stuff with the result *)
```
