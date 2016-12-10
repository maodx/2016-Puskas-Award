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

var counter = [{name:1,url: '/1.mp4', count: 0},{name:2,url: '/2.mp4', count: 0},{name:3,url: '/3.mp4', count: 0},
    {name:4,url: '/4.mp4', count: 0},{name:5,url: '/5.mp4', count: 0}]

http.createServer(function (req, res) {
	
  if (req.url == "/" || req.url == '/favicon.ico')
  {
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
  else if(req.url=="/1"||req.url=="/2"||req.url=="/3"||req.url=="/4"||req.url=="/5")
  {

    counter_index=Number(req.url.slice(1));
      console.log(counter_index);
      counter.map(function(obj) {
          if(obj.name == counter_index) {
              ++obj.count;
          }
      }).filter(isFinite)
      console.log(counter);//2333333333333333333333333333333333
     // ++counter[counter_index].count;
      function keysrt(key,desc) {
          return function(a,b){
              return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
          }
      }
      counter.sort(keysrt('count',true));
      res.writeHead(200, { "Content-Type": "text" });
      res.write(counter[0].url+";"+counter[1].url+";"+counter[2].url+";"+counter[3].url );
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
