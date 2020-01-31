var express=require("express");
var dataService=require("./data-service.js");
var app=express();
// const data=require("./data/cars.json");
// var server=require("http").createServer(app);
// server.listen(8080);
 
var HTTP_PORT= process.env.PORT || 8080;

function onHttpStart(){
    console.log("Express http server listening on "+ HTTP_PORT);
     return new Promise(function(reslove, reject){
        dataService.initialize().then(function(value){
            console.log(value);
        }).catch(function(reason){
                console.log(reason);
            });
    });

}

app.get('/',function(req,res){
    res.sendfile(__dirname + "/views/home.html");
});

app.get("/about",function(req,res){
    res.sendFile(__dirname + "/views/about.html");
});
app.get('/cars', function (req, res) {
    dataService.getCars().then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.json({message, error})
    });
  });

app.get('/people', function (req, res) {
    dataService.getAllPeople().then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.json({message, error})
    });
  });
app.get('/stores', function (req, res) {
    dataService.getStores().then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.json({message, error})
    });
  });

app.use(express.static('public'));

app.get('*', function(req, res){
    res.sendFile(__dirname + "/error404/404.html");
  });

app.listen(HTTP_PORT,onHttpStart);  

