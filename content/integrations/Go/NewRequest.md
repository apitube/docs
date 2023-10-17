---
slug: '/go/NewRequest'
---

# NewRequest integration

```go
package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "https://apitube.io/v1/news?limit=250"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("X-ApiTube-Key", "***YOUR_KEY***")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```
