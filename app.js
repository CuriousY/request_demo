var express = require("express");
var request = require("request");
var app = express();

app.set("view engine","ejs");

app.get("/results",function(req,res){
   
  //("welcome to movie world !!"); //
    
    request("https://jsonplaceholder.typicode.com/posts/1",function(error,response,body){
        if(!error && response.statusCode === 200){
            
            var jsonResponse = JSON.parse(body);
            
            res.render("results.ejs",{data:jsonResponse["body"]});
            // res.send("Response got it " + jsonResponse["body"]);
            
        }
    });
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Movie app has started : listening to " + process.env.PORT);  
})