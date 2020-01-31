
var cars=[];
var people=[];
var stores=[];


module.exports.initialize=function(){
    return new promises(function(resolve,reject){
        try{
            fs.readFile('./data/people.json','utf8',(err,data)=>{
                if (err) throw err;
                people=JSON.parse('data')
            });

            fs.readFile('./data/cars.json','utf8',(err,data)=>{
                if (err) throw err;
                cars=JSON.parse('data')
            });

            fs.readFile('./data/stores.json','utf8',(err,data)=>{
                if (err) throw err;
                stores=JSON.parse('data')
            });
        } catch(ex){
            reject('Error! Read file unsuccessfully');
        }
        resolve("Read file successfully");
    });
}

module.exports.getAllPeople = function(){
    var Allpeople=[];
    return new Promise((resolve,reject)=>{
        for (var i=0;i<people.length;i++) 
        {
            Allpeople.push(people[i]);
        }
        if (Allpeople.length==0)
        reject("No result!!!");
        else resolve(Allpeople);
    });
}

module.exports.getCars=function(){
    var allCars=[];
    return new Promise((resolve,reject)=>{
        for (var i=0;i<cars.length;i++)
        {
            allCars.push(cars[i]);
        }
        if (allCars.length==0)
        reject("No result!!");
        else resolve(allCars);
    });
}

module.exports.getStores=function(){
    var allStores=[];
    return new Promise((resole,reject)=>{
        for (var i=0;i<stores.length;i++)
        {
            allStores.push(stores[i]);
        }
        if (allStores.length==0)
        reject("No result!");
        else resole(allStores);
    });
}

