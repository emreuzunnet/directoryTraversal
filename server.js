let path = require("path")
let http = require("http")


http.createServer(function (req, res) {
    res.writeHead(200);

    let dosyaYolu = path.join(__dirname, req.url);

    if (req.url == "/"){
        res.end(`<html><h2>Directory Traversal Application</h2> <br><br>
                <a href="config">config</a> e gidebilirsiniz.</html>`)
    } else {
        fs = require('fs')
        fs.readFile(dosyaYolu, 'utf8', function (err,data) {
        if (err) {
            res.end("Dosya Yok!");
        }
        console.log(req.url)

        res.end(data);
        
    })
    }
}).listen(3000);