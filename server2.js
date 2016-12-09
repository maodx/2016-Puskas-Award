var fs = require("fs"),
    http = require("http"),
    url = require("url"),
    path = require("path");
var indexPage,controller;
fs.readFile(path.resolve(__dirname,"layout.html"), function (err, data) {
  if (err) {
    throw err;
  }
  indexPage = data;
});

fs.readFile(path.resolve(__dirname,"controller.js"), function (err, data) {
    if (err) {
        throw err;
    }
    controller = data;
});

http.createServer(function (req, res) {
	
  if (req.url == "/" || req.url == '/favicon.ico') {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(indexPage);

	res.end();
  }
  else if(req.url=="/controller.js")
  {
      res.writeHead(200, { "Content-Type": "text/js" });
      res.write(controller);
      res.end();
  }
  else {
	console.log("Request: " + req.url);
    var file = path.resolve(__dirname,req.url.substring(1));// can deal with all video requests
    fs.stat(file, function(err, stats) {
      if (err) {
        if (err.code === 'ENOENT') {
          // 404 Error if file not found
          return res.sendStatus(404);
        }
        res.end(err);
      }
      var range = req.headers.range;
      if (!range) {
        // 416 Wrong range
        return res.sendStatus(416);
      }
      var positions = range.replace(/bytes=/, "").split("-");
      var start = parseInt(positions[0], 10);
      var total = stats.size;
      var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
      var chunksize = (end - start) + 1;

      res.writeHead(206, {
        "Content-Range": "bytes " + start + "-" + end + "/" + total,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize,
        "Content-Type": "video/mp4"
      });

      var stream = fs.createReadStream(file, { start: start, end: end })
          .on("open", function() {
            stream.pipe(res);
          }).on("error", function(err) {
            res.end(err);
          });
    });
  }
}).listen(3000);
