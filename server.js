const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(request, response){
  response.sendfile(__dirname + "/dist/index.html")
});
app.listen(port);

const environment = process.env.NODE_ENV || "development";

console.log("Server is running...");