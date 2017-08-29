var express = require("express");
var request = require("request");
var app = express();

app.set("view engine","ejs");

app.get("/",function(req,res){
   
   var curiousList = [
       
       {name : "Einstien" , image:"https://images.pexels.com/photos/326424/pexels-photo-326424.jpeg?h=350&auto=compress&cs=tinysrgb"},
       {name : "Newton" , image:"https://images.pexels.com/photos/34676/pexels-photo.jpg?h=350&auto=compress&cs=tinysrgb"},
       {name : "Leonardo" , image:"https://images.pexels.com/photos/326424/pexels-photo-326424.jpeg?h=350&auto=compress&cs=tinysrgb"},
       {name : "Galleleo" , image:"https://images.pexels.com/photos/34676/pexels-photo.jpg?h=350&auto=compress&cs=tinysrgb"},
       
       ];
       
       res.render("landing.ejs",{curiousList:curiousList});
});

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