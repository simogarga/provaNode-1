var http = require("http");
var express = require("express");
var apiServer = express();

var hostname = "127.0.0.1";
var port = 3000;
var nome = "nodegargano";
var path = require("path");

apiServer.listen(port, hostname, () =>{
    console.log("server running at http://%s:%d/", hostname, port);
});
    


apiServer.get("/nome", (req, res) => {
    console.log("cc");
    res.send("Ciao!"+nome);
});

apiServer.get("/", function(req,res){
    res.send("sei in home");
});

apiServer.get("/index", (req,res) => {
  //  res.sendFile("C:\\Users\\gargano.simone\\Documents\\provaNode-1\\index.html");
  res.sendFile(path.join(__dirname + "/index.html"));
})