module.exports = function(app, db) { 
//FIND ALL
app.get('/api/v1/cars/', (req, res) => {
    const id = req.params.id;
    var ObjectId = require('mongodb').ObjectID;
    const details = { '_id': new ObjectId(id) };
    //db.collection('cars').find({}).toArray(function(err, result) {
    db.collection("cars").find({}).toArray(function(err, result) {
    if (err) {        
       res.send({'error':'An error has occurred'});      } 
    else {
       res.status(200).json(result);     
       //console.log(result); 
       }     
   });  
});

//DELETE
    app.delete('/api/v1/cars/:id', (req, res) => { 
           const id = req.params.id; 
           var ObjectId = require('mongodb').ObjectID;  
           const details = {'_id': new ObjectId(id) };
                    db.collection('cars').remove(details, (err, item) => {
                            if (err) {  
                                res.send({ 'error': 'An error has occurred' });      
                                res.status(404);
                                
                                }
                             else {    
                                    res.status(204).json({status:"Eliminado"});                      
                                }     
                            });  
                        });
//UPDATE 
app.put('/api/v1/cars/:id', (req, res) => { 
    const id = req.params.id;
    var ObjectId = require('mongodb').ObjectID;
    const details = { '_id': new ObjectId(id) };
    const cars = { brand: req.body.brand, year: req.body.year, displacement: req.body.displacement, description: req.body.description  };
    db.collection('cars').update(details, cars, (err, result) =>{
             if (err) {          
                res.status(404);      }
              else {         // res.send(cars);
                 res.status(201).json({status:"Actualizado"});
                 }     
             });  
         });

//RECIVE
    app.get('/api/v1/cars/:id', (req, res) => {
             const id = req.params.id;
             var ObjectId = require('mongodb').ObjectID;
             const details = { '_id': new ObjectId(id) };
             db.collection('cars').findOne(details, (err, item) => {
             if (err) {        
                res.send({'error':'An error has occurred'});      } 
             else {
                res.status(200).json(item);     
                //res.send(item);      
                }     
            });  
        });
//CREATE
     const collection =   app.post('/api/v1/cars/', (req, res) => {    
         const cars = { brand: req.body.brand, year: req.body.year, displacement: req.body.displacement, description: req.body.description };    
         db.collection('cars').insert(cars, (err, result) => { 
                  if (err) {         res.send({ 'error': 'An error has occurred' });       } 
                  else {
                            res.status(201).json(cars);
                            //res.send(result.ops[0]); 
                             }    
                            });  
                        });
                    };

                  
                    