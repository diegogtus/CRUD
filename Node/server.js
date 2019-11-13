const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

//Database Connection
MongoClient.connect(db.url, (err, database) => {  if (err) return console.log(err)                        // Make sure you add the database name and not the collection name  
    const Database = database.db("CRUD")  
    require('./app/routes')(app, Database);
    
  app.listen(port, () => {    console.log('We are live on ' + port);  });               
})




