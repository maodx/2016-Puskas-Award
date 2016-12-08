var fs = require("fs"),
    http = require("http"),
    url = require("url"),
    path = require("path");

http.createServer(function (req, res) {
	
  if (req.url == "/" || req.url == '/favicon.ico') {
    res.writeHead(200, { "Content-Type": "text/html" }); 
	res.write('<html><head>');
	res.write('<style type="text/css"> #videohome { position:relative ; height: 100% ; width: 100% ; top:0; bottom:0; right:0; left:0;} </style>');
	res.write('<script type = "text/javascript">var v = document.getElementsByTagName("video")[0];');
res.write('v.onplay = function(){ alert(" viewed ");};</script>');

	res.write('</head><body><video id="videohome" src="1.mp4" controls></video>');
	res.write('<video id="videohome" src="2.mp4" controls></video>');
	res.write('</body></html>');
	res.end();
  } else {
	console.log("Request: " + req.url);
    var file = path.resolve(__dirname,req.url.substring(1));
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
