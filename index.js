// Include the express library. 
//You have to install express in order for this to work
const express = require("express")

//Initalize express in a variable called app
const app = express();

//Point to a folder that will hold our static code
//Note that it is best practice to use an absolute path name,
//something we are not doing.
app.use(express.static("./static"));

//Create a server socket on port 8888.
app.listen(8888, function(err){
    //If there is an error, display it and return
    if(err) return console.log(err);
    //Otherwise, tell the user were to go to see the server.
    console.log("listening on http://localhost:8888");
})