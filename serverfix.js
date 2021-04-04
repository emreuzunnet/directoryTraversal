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

        // Fix 1: Base Directory Check
        if (dosyaYolu.startsWith(process.cwd())){
            fs.readFile(dosyaYolu, 'utf8', function (err,data) {
                if (err) {
                    res.end("Dosya Yok!");
                }
                // Fix 2: Regex Check
                if (req.url.match(/^[0-9a-z/]+$/)){
                    res.end(data);
                }
                else {
                    res.end("Kurcalama yapmayın!")
                }
                
            })
        } else {
            res.end("Kurcalama yapmayın!")
        }
        
    }
}).listen(3000);