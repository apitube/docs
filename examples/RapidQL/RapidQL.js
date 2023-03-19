// For more information about RapidQL, checkout docs.rapidql.com!

const RapidQL = require('RapidQL');
let rql = new RapidQL({
});

rql.query(`{
  Http.get(
    url:"https://apitube.io/v1/sets/***ID_HERE***?limit=250&offset=0"
    headers : {
"X-ApiTube-Key":"***KEY***"
    }
    body : undefined
  ) {

  }
}`)
.then((res) => console.log(res))
.catch((err) => console.log(err));
