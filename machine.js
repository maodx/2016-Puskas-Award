/**
 * Created by internazionale on 2016-12-08.
 */
var fs = require('fs'),
    http = require('http'),
    url = require('url'),
    path = require('path');

var indexPage, mp4_1,mp4_2,mp4_3,mp4_4,mp4_5;

// load the video files and the index html page

fs.readFile(path.resolve(__dirname,"1.mp4"), function (err, data) {
    if (err) {
        throw err;
    }
    mp4_1 = data;
});

fs.readFile(path.resolve(__dirname,"2.mp4"), function (err, data) {
    if (err) {
        throw err;
    }
    mp4_2 = data;
});

fs.readFile(path.resolve(__dirname,"3.mp4"), function (err, data) {
    if (err) {
        throw err;
    }
    mp4_3 = data;
});

fs.readFile(path.resolve(__dirname,"4.mp4"), function (err, data) {
    if (err) {
        throw err;
    }
    mp4_4 = data;
});

fs.readFile(path.resolve(__dirname,"5.mp4"), function (err, data) {
    if (err) {
        throw err;
    }
    mp4_5 = data;
});

fs.readFile(path.resolve(__dirname,"layout.html"), function (err, data) {
    if (err) {
        throw err;
    }
    indexPage = data;
});

// create http server
http.createServer(function (req, res) {

    var reqResource = url.parse(req.url).pathname;
    //console.log("Resource: " + reqResource);

    if(reqResource == "/"){

        //console.log(req.headers)
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(indexPage);
        res.end();

    } else if (reqResource == "/favicon.ico"){

        res.writeHead(404);
        res.end();

    } else {

        var total;
        if(reqResource == "/movie.mp4") {
            total = movie_mp4.length;
        }

        var range = req.headers.range;

        var positions = range.replace(/bytes=/, "").split("-");
        var start = parseInt(positions[0], 10);
        // if last byte position is not present then it is the last byte of the video file.
        var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
        var chunksize = (end-start)+1;

        if(reqResource == "/movie.mp4"){
            res.writeHead(206, { "Content-Range": "bytes " + start + "-" + end + "/" + total,
                "Accept-Ranges": "bytes",
                "Content-Length": chunksize,
                "Content-Type":"video/mp4"});
            res.end(movie_mp4.slice(start, end+1), "binary");

        }
    }
}).listen(3000);