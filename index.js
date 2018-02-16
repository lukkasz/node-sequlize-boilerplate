'use strict';
global.__basedir = __dirname;

require("./config/config");

const express = require('express');
const app = express();
var db = require('./db/db.js');
var v1 = require('./routes/v1');


app.get('/', (req, res) => {
   res.statusCode = 200;
   res.json({status: "success", message: "Wine tasting API", data: {}});
});

app.use('/v1', v1)

// Catch 404 and forward to error handler
app.use(function(req, res, next){
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
}); 

//Error handler
app.use(function(err, req, res, next) {
   res.status(err.status || 500);
   res.json({
       error: {
           message: err.message
       }
   })
});

db.sequelize.sync()
  .then(function() {
    app.listen(CONFIG.port, function(){
      console.log('Server is runing on ', CONFIG.port);
    });    
  });

