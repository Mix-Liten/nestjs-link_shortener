# Example URL Shortener

Building a sample URL shortener using [TypeScript](https://www.typescriptlang.org/), [Nest](https://nestjs.com/) and Docker Desktop

## Running the application

Run the whole application using Docker Compose:

```
 docker compose up
```

Then visit the application at [`localhost:3000`](http://localhost:3000) and you should see a "Hello World!" message.

## Shortening the new link

You can use ```curl``` command to shorten the link:

To shorten a new link, use the following cURL command:

```bash
curl -X POST localhost:3000/shorten -d "url=https://docker.com" 
```

Take a look at the response:

```json
{"hash":"fzr350"}
```

The hash differs on your machine. You can use it to redirect to the original link. Open a web browser and visit ```http://localhost:3000/fzr350``` to access the official Docker website.