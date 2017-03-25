var ipAddr = "127.0.0.1",
    port = 8000;

var express = require('express'),
    app = express(),
    fs = require('fs');
 
 app.use("/", express.static(__dirname.replace("/app/server", "") + "/public"))
 
 app.engine('html', function(filePath, options, callback){
     fs.readFile(filePath, function(err, content){
         if(err) return callback(new Error(err));
         return callback(null, content.toString());
     })
 })
 console.log(__dirname.replace("/app/server", "") + "/public")
 app.set('views', './public')
 app.set('view engine', 'html')
 
 app.get('/', function(req, res){
     res.render('index.html')
 })   


app.listen(port, function(){
    console.log("App is listening on ", port);
});
