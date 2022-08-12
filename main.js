/*
var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
*/

const express = require("express");
const bodyParser = require("body-parser");
var fs = require("fs");
const router = express.Router();
const app = express();

// add router in express app
app.use("/",router);
var jsonParser = bodyParser.json();
app.use(jsonParser);

router.get("/",(req, res) => {
   res.sendfile("index.html");
});

router.post("/login",jsonParser, (req, res) => {
   console.log(req.body);
   
   const data = fs.readFileSync("C:/Users/Alphan/Desktop/workspaces/BrisaEasyServer/temp.txt",
            {encoding:'utf8', flag:'r'});
   console.log(data);
   res.end(data);
});

app.listen(3000,() => {
   console.log("Started on PORT 3000");
})