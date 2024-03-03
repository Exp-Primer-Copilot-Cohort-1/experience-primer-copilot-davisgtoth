// Create web server
// 1. Create a web server
// 2. Handle GET requests for the /comments path
// 3. Read the comments from the file
// 4. Return the comments as JSON
// 5. Listen on port 3000

// 1. Create web server
var http = require('http');
var port = 3000;
var server = http.createServer();

// 2. Handle GET requests for the /comments path
server.on('request', function(request, response) {
  if (request.method === 'GET' && request.url === '/comments') {
    // 3. Read the comments from the file
    var fs = require('fs');
    var comments = fs.readFileSync('comments.json', 'utf8');

    // 4. Return the comments as JSON
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.end(comments);
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// 5. Listen on port 3000
server.listen(port, function() {
  console.log('Listening on port ' + port);
});
```

### 3. Run the web server
```sh
$ node comments.js
Listening on port 3000
```

### 4. Test the web server
```sh
$ curl http://localhost:3000/comments
[{"author":"Pete Hunt","text":"This is one comment"},{"author":"Jordan Walke","text":"This is *another* comment"}]
```

### 5. Stop the web server
```sh
$ fg
^C
```

## Summary
- Node.js is a JavaScript runtime that is built on the V8 JavaScript engine
- Node.js is designed for building scalable network applications
- Node.js has a built-in module system
- Node.js has a built-in HTTP server

## Resources
- [Node.js](https://nodejs.org/en/)
- [V8 JavaScript Engine](https://developers.google.com/v8/)
- [Node.js Modules](https://nodejs.org/api/modules.html)
- [Node.js HTTP](https://nodejs.org/api/http.html)

## Next
Go to [Lesson 2: Create a Web Server with Express](../lesson-02-express/README.md)