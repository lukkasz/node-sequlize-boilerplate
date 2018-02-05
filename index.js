'use strict';

require("./config/config");

const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send({ hi: 'there' });
});

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

app.listen(CONFIG.port, CONFIG.ip, function(){
    console.log('Server is runing on ', CONFIG.port);
});