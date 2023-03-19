AsyncHttpClient client = new DefaultAsyncHttpClient();
client.prepare("GET", "https://apitube.io/v1/sets/***ID_HERE***?limit=250&offset=0")
	.setHeader("X-ApiTube-Key", "***KEY***")
	.execute()
	.toCompletableFuture()
	.thenAccept(System.out::println)
	.join();

client.close();
