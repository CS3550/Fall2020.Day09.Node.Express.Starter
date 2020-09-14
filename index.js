const express = require("express")
const app = express();

app.use(express.static("./static"));

app.listen(8888, function(err){
    if(err) return console.log(err);
    console.log("listening on http://localhost:8888");
})